#!/usr/bin/env python3
"""Shared, brace-depth-aware helpers for surgically editing `clubs/*.data.js`
files without a full re-serialize (which risks mangling free-text `note`
fields containing commas/braces -- the same risk documented as "simplified"
in `engine/aggregate.py`'s own parser).

This module factors out logic that was proven correct in
`engine/detect_stale_rumours.py` (added 2026-08-04) so `engine/inject_research.py`
and `engine/decay_rumours.py` (added later the same day) share ONE implementation
instead of three independently-maintained copies that could drift and
re-introduce bugs already fixed once. `detect_stale_rumours.py` itself keeps
its own copies for now (it was already working before this module existed;
not worth the regression risk of a mechanical refactor) but any NEW script
touching `clubs/*.data.js` object literals should import from here.

Usage: add the following before importing, since this lives in engine/ next
to the scripts that use it, not on the default Python path:
    import sys, os
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import js_obj_utils
"""
import re
import os
import subprocess
from datetime import datetime, timezone


def now_iso():
    """Current UTC time in the same 'YYYY-MM-DDTHH:MM:SSZ' style already used
    throughout clubs/*.data.js (e.g. REPORT_META.updated)."""
    return datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')


def parse_iso(s):
    """Parse the 'YYYY-MM-DDTHH:MM:SSZ' style timestamp back to an aware
    datetime. Returns None on any parse failure (defensive -- hand-authored
    or legacy timestamps may not exactly match)."""
    if not s:
        return None
    try:
        return datetime.strptime(s, '%Y-%m-%dT%H:%M:%SZ').replace(tzinfo=timezone.utc)
    except ValueError:
        try:
            return datetime.fromisoformat(s.replace('Z', '+00:00'))
        except ValueError:
            return None


def find_array_block(content, array_name):
    """Return (start, end, inner) spans for `const ARRAY_NAME = [ ... ];` or
    None. `start`/`end` are absolute offsets into `content` covering the
    WHOLE `const ... ];` statement; `inner` is the text strictly between the
    outermost `[` and its matching `]`."""
    m = re.search(rf'const\s+{array_name}\s*=\s*\[', content)
    if not m:
        return None
    open_bracket = content.index('[', m.start())
    depth = 0
    i = open_bracket
    in_str = None
    n = len(content)
    while i < n:
        c = content[i]
        if in_str:
            if c == '\\':
                i += 2
                continue
            if c == in_str:
                in_str = None
        else:
            if c in ('"', "'", '`'):
                in_str = c
            elif c == '[':
                depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0:
                    return (m.start(), i + 1, content[open_bracket + 1:i])
        i += 1
    return None


def split_top_level_objects(text):
    """Return list of (start, end) spans -- offsets INTO `text` -- for each
    top-level {...} object literal in `text`. Respects quoted strings so a
    literal `{`/`}`/`,` inside a `note` field never confuses the depth count."""
    spans = []
    depth = 0
    start = None
    in_str = None
    i = 0
    n = len(text)
    while i < n:
        c = text[i]
        if in_str:
            if c == '\\':
                i += 2
                continue
            if c == in_str:
                in_str = None
            i += 1
            continue
        if c in ('"', "'", '`'):
            in_str = c
        elif c == '{':
            if depth == 0:
                start = i
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0 and start is not None:
                spans.append((start, i + 1))
        i += 1
    return spans


def field_str(obj_text, field):
    """Extract a quoted string field's value, or None if absent."""
    m = re.search(rf'{field}\s*:\s*"((?:[^"\\]|\\.)*)"', obj_text)
    if m:
        return m.group(1).replace('\\"', '"')
    m = re.search(rf"{field}\s*:\s*'((?:[^'\\]|\\.)*)'", obj_text)
    if m:
        return m.group(1).replace("\\'", "'")
    return None


def field_int(obj_text, field):
    """Extract a bare numeric field's value (e.g. `prob:65`), or None if
    absent / not a plain integer literal."""
    m = re.search(rf'\b{field}\s*:\s*(-?\d+)\b', obj_text)
    return int(m.group(1)) if m else None


def set_str_field(obj_text, field, value):
    """Replace an existing quoted-string field's value in place, or append a
    new `field:"value"` before the closing brace if the field is absent.
    First occurrence only. Handles BOTH quote styles found in the wild
    (`light:'o'` on older hand-authored entries vs `light:"o"` on
    script-generated ones) -- always writes the replacement back
    double-quoted, which is safe: JS treats both the same. A real bug caught
    2026-08-04: a naive double-quote-only regex silently no-op'd on
    single-quoted fields, so a decayed rumour's light-band color never
    actually updated even though its prob field did."""
    escaped = value.replace('\\', '\\\\').replace('"', '\\"')
    double_pattern = re.compile(rf'({field}\s*:\s*)"(?:[^"\\]|\\.)*"')
    if double_pattern.search(obj_text):
        return double_pattern.sub(lambda m: f'{m.group(1)}"{escaped}"', obj_text, count=1)
    single_pattern = re.compile(rf"({field}\s*:\s*)'(?:[^'\\]|\\.)*'")
    if single_pattern.search(obj_text):
        return single_pattern.sub(lambda m: f'{m.group(1)}"{escaped}"', obj_text, count=1)
    return append_fields(obj_text, [f'{field}:"{escaped}"'])


def set_int_field(obj_text, field, value):
    """Replace an existing bare-numeric field's value in place, or append a
    new `field:value` before the closing brace if the field is absent."""
    pattern = re.compile(rf'(\b{field}\s*:\s*)-?\d+\b')
    if pattern.search(obj_text):
        return pattern.sub(lambda m: f'{m.group(1)}{value}', obj_text, count=1)
    return append_fields(obj_text, [f'{field}:{value}'])


def append_fields(obj_text, new_fields_js):
    """Append one or more raw `key:value` field strings to an existing `{...}`
    object literal, just before its closing brace. Handles a trailing comma
    already present in the body."""
    assert obj_text.startswith('{') and obj_text.endswith('}')
    inner = obj_text[1:-1].rstrip()
    if inner.endswith(','):
        inner = inner[:-1]
    addition = ', '.join(new_fields_js)
    if inner.strip():
        return '{' + inner + ', ' + addition + '}'
    return '{' + addition + '}'


def replace_array_objects(content, array_name, new_object_texts):
    """Rebuild `const ARRAY_NAME = [ ... ];`'s body from a fresh list of
    already-rendered object-literal strings (one per item, in order), and
    splice the result back into `content`. Mirrors the exact reassembly
    style used by `detect_stale_rumours.py` so a running `content` variable
    stays valid across repeated calls for different arrays in the same file
    (each call re-locates the array fresh, so earlier edits' offset shifts
    are never stale)."""
    block = find_array_block(content, array_name)
    if not block:
        return content, False
    start, end, inner = block
    open_bracket = content.index('[', start)
    if new_object_texts:
        new_inner = '\n' + ',\n'.join('  ' + t.strip() for t in new_object_texts) + '\n'
    else:
        new_inner = ''
    return content[:open_bracket + 1] + new_inner + content[end - 1:], True


def syntax_check_and_write(path, content):
    """Write `content` to `path` only if it passes `node --check`. Returns
    True if written, False (and leaves the original file untouched) if the
    syntax check failed. Uses a `.js`-suffixed temp file -- Node's ESM/CJS
    loader throws ERR_UNKNOWN_FILE_EXTENSION on anything else (a real bug hit
    and fixed in `detect_stale_rumours.py` on 2026-08-04)."""
    tmp_path = path[:-3] + '.syntaxcheck.js' if path.endswith('.js') else path + '.syntaxcheck.js'
    with open(tmp_path, 'w', encoding='utf-8') as f:
        f.write(content)
    result = subprocess.run(['node', '--check', tmp_path], capture_output=True, text=True)
    if result.returncode == 0:
        os.replace(tmp_path, path)
        return True
    if os.environ.get('JS_OBJ_UTILS_DEBUG'):
        import sys
        print(f"--- node --check failure for {path} ---", file=sys.stderr)
        print(result.stderr, file=sys.stderr)
    os.remove(tmp_path)
    return False
