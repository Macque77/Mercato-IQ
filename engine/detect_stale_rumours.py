#!/usr/bin/env python3
"""Detect and remove stale rumours: an INCOMING/OUTGOING rumour for a player who has
already been confirmed (CONFIRMED_IN/CONFIRMED_OUT) elsewhere -- the classic "still
showing Player X linked to Club A when they've already signed for Club B" bug.

Why this exists (2026-08-04): a user-reported case, Mathis Abline still listed as an
active Sunderland INCOMING rumour (from Nantes) weeks after he officially signed for
AS Monaco (a real CONFIRMED_IN entry on as-monaco.data.js). Nothing in the pipeline
ever cross-checked a rumour against confirmed deals elsewhere on the site, so a dead
rumour could sit there indefinitely once the player's actual move landed on a
*different* club's page. This script is the fix, and it's designed to run automatically
as part of Phase 2 (see apply_research.sh) so this class of bug can't silently recur.

Method:
  1. Read every clubs/*.data.js, extract CONFIRMED_IN/CONFIRMED_OUT (who actually
     signed where) and INCOMING/OUTGOING (what's still being reported as live).
  2. Build a name -> {clubs they're now confirmed AT} index from every CONFIRMED_IN
     across the whole site (a player is "confirmed at" the club whose CONFIRMED_IN
     lists them).
  3. Flag an INCOMING rumour as stale if the player is confirmed at some OTHER club
     (they already signed elsewhere) or confirmed at THIS club (the rumour should
     have graduated to a CONFIRMED_IN entry and is now a duplicate).
  4. Flag an OUTGOING rumour as stale if the player already has a CONFIRMED_OUT entry
     at THIS SAME club (the deal is done, rumour is a duplicate) or is confirmed
     IN at some other club already (they've completed a move, whatever this club's
     rumour said).
  5. Rewrite each affected file with the stale entries removed (raw-text surgery,
     not a full re-serialize, so untouched entries and formatting are preserved
     exactly). Runs `node --check` on every touched file before writing it out --
     if the check would fail, the file is left untouched and flagged in the report.

Usage:
    python3 engine/detect_stale_rumours.py            # detect + fix + report
    python3 engine/detect_stale_rumours.py --dry-run   # report only, no writes
"""
import os
import re
import sys
import glob
import subprocess

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLUBS_DIR = os.path.join(REPO, 'clubs')


def norm_name(s):
    return re.sub(r'\s+', ' ', (s or '')).strip().lower()


def find_array_block(content, array_name):
    """Return (start, end, inner) spans for `const ARRAY_NAME = [ ... ];` or None."""
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
    """Return list of (start,end) spans for each top-level {...} object in text."""
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
    m = re.search(rf'{field}\s*:\s*"((?:[^"\\]|\\.)*)"', obj_text)
    if m:
        return m.group(1).replace('\\"', '"')
    m = re.search(rf"{field}\s*:\s*'((?:[^'\\]|\\.)*)'", obj_text)
    if m:
        return m.group(1).replace("\\'", "'")
    return None


def get_slug(content):
    m = re.search(r'slug\s*:\s*"([^"]+)"', content)
    return m.group(1) if m else None


def load_club(path):
    with open(path, encoding='utf-8') as f:
        content = f.read()
    slug = get_slug(content)
    data = {'path': path, 'slug': slug, 'content': content, 'arrays': {}}
    for arr in ('CONFIRMED_IN', 'CONFIRMED_OUT', 'INCOMING', 'OUTGOING'):
        block = find_array_block(content, arr)
        if not block:
            continue
        start, end, inner = block
        objs = []
        for os_, oe in split_top_level_objects(inner):
            obj_text = inner[os_:oe]
            objs.append({'text': obj_text, 'name': field_str(obj_text, 'name'), 'club': field_str(obj_text, 'club')})
        data['arrays'][arr] = {'start': start, 'end': end, 'inner': inner, 'objects': objs}
    return data


def main():
    dry_run = '--dry-run' in sys.argv
    paths = sorted(glob.glob(os.path.join(CLUBS_DIR, '*.data.js')))
    clubs = [load_club(p) for p in paths]

    # Index: normalized player name -> list of club slugs where they're CONFIRMED_IN
    confirmed_in_index = {}
    # Index: normalized player name -> list of club slugs where they're CONFIRMED_OUT
    confirmed_out_index = {}
    for c in clubs:
        for obj in c['arrays'].get('CONFIRMED_IN', {}).get('objects', []):
            if obj['name']:
                confirmed_in_index.setdefault(norm_name(obj['name']), []).append(c['slug'])
        for obj in c['arrays'].get('CONFIRMED_OUT', {}).get('objects', []):
            if obj['name']:
                confirmed_out_index.setdefault(norm_name(obj['name']), []).append(c['slug'])

    report = []
    files_changed = 0

    for c in clubs:
        content = c['content']
        removed_here = []

        for arr_name in ('INCOMING', 'OUTGOING'):
            arr = c['arrays'].get(arr_name)
            if not arr:
                continue
            keep_texts = []
            for obj in arr['objects']:
                nm = norm_name(obj['name']) if obj['name'] else None
                stale_reason = None
                if nm:
                    if arr_name == 'INCOMING':
                        landed_at = confirmed_in_index.get(nm, [])
                        if landed_at and c['slug'] not in landed_at:
                            stale_reason = f"confirmed signed at {'/'.join(landed_at)} instead"
                        elif landed_at and c['slug'] in landed_at:
                            stale_reason = "duplicate: already has a CONFIRMED_IN entry at this club"
                    elif arr_name == 'OUTGOING':
                        left_from = confirmed_out_index.get(nm, [])
                        landed_at = confirmed_in_index.get(nm, [])
                        if c['slug'] in left_from:
                            stale_reason = "duplicate: already has a CONFIRMED_OUT entry at this club"
                        elif landed_at:
                            stale_reason = f"confirmed departure completed, now at {'/'.join(landed_at)}"
                if stale_reason:
                    removed_here.append({'club': c['slug'], 'array': arr_name, 'name': obj['name'], 'reason': stale_reason})
                else:
                    keep_texts.append(obj['text'])

            if len(keep_texts) != len(arr['objects']):
                new_inner = '\n' + ',\n'.join('  ' + t.strip() for t in keep_texts) + ('\n' if keep_texts else '')
                # Rebuild content using this array's recorded span; recompute spans fresh
                # each time since earlier replacements in this loop shift offsets.
                block = find_array_block(content, arr_name)
                if block:
                    start, end, inner = block
                    open_bracket = content.index('[', start)
                    content = content[:open_bracket + 1] + new_inner + content[end - 1:]

        if removed_here:
            report.extend(removed_here)
            if not dry_run:
                # Validate before writing: syntax-check the candidate content via a temp file.
                tmp_path = c['path'][:-3] + '.stalecheck.js'
                with open(tmp_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                result = subprocess.run(['node', '--check', tmp_path], capture_output=True, text=True)
                if result.returncode == 0:
                    os.replace(tmp_path, c['path'])
                    files_changed += 1
                else:
                    if os.environ.get('STALE_DEBUG'):
                        print(f"--- node --check failure for {c['path']} ---", file=sys.stderr)
                        print(result.stderr, file=sys.stderr)
                    os.remove(tmp_path)
                    for r in removed_here:
                        r['reason'] += ' [NOT APPLIED: node --check failed, left file untouched]'

    if not dry_run and files_changed:
        all_touched = sorted({r['club'] for r in report if '[NOT APPLIED' not in r['reason']})
        # newline='\n': keep LF on Windows so apply_research.sh's shell loop
        # doesn't inherit a trailing \r (see .last_injected_slugs in inject_research.py).
        with open(os.path.join(REPO, '.stale_touched_slugs'), 'w', encoding='utf-8', newline='\n') as f:
            f.write('\n'.join(all_touched) + '\n')

    print(f"Stale rumour scan: {len(report)} stale entr{'y' if len(report)==1 else 'ies'} found across {len(paths)} clubs.")
    if report:
        for r in report:
            print(f"  [{r['club']}] {r['array']}: \"{r['name']}\" -- {r['reason']}")
    if dry_run:
        print("(dry run -- no files written)")
    else:
        print(f"{files_changed} file(s) updated.")
    return report


if __name__ == '__main__':
    main()
