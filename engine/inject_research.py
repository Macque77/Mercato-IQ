#!/usr/bin/env python3
"""Inject researched rumours/confirmed transfers into clubs/<slug>.data.js files.

This is the PERMANENT, repo-resident version of the research-injection tool used
throughout the Aug 3-4 2026 sessions. It used to live only in /tmp (lost at the end
of every session); it now lives here so any future session -- interactive or a
scheduled task -- can call it directly without recreating it from scratch.

Usage:
    python3 engine/inject_research.py <research1.json> [research2.json ...]
    python3 engine/inject_research.py research/inbox/           # a directory of *.json

Input schema (one file may contain many clubs):
    {"clubs": [
        {"slug": "arsenal",
         "incoming":     [{name, sub, club, pos, report, src, tier, fee, truth, prob, note, sourceUrl, sourceLabel}, ...],
         "outgoing":     [... same shape ...],
         "confirmed_in": [{name, sub, club, pos, fee, free, note, sourceUrl, sourceLabel}, ...],
         "confirmed_out":[... same shape ...]}
    ]}

For each club this:
  - appends new INCOMING/OUTGOING rumour items (skipping exact name duplicates)
  - appends new CONFIRMED_IN/CONFIRMED_OUT items (skipping exact name duplicates)
  - computes the correct light band from `prob` (g>50, y>=30, o>=15, r<15)
  - adds HUB entries + LINKMAP entries for each new source, de-duping HUB entries
    by URL and repointing LINKMAP at the surviving key (see BUGFIX 3 below)

--- Bug history (fixed here at the source on 2026-08-04; all three were previously
    only patched by hand, one incident at a time, in the /tmp-only version) ---

BUGFIX 1 (silent no-op on multi-line array declarations):
    The old array-locator regex was `const {arrname} = \\[` -- a literal single
    space around `=` and no tolerance for the declaration and `[` being on
    different lines. `clubs/brighton.data.js` had `const CONFIRMED_OUT =\\n    [];`
    and the regex silently failed to match (a WARN print, nothing else), so a real
    injection (Danny Welbeck) was dropped without any hard error. Fixed by making
    whitespace around `=` and before `[` fully flexible (`\\s*`, `\\s*`).

BUGFIX 2 (double commas from trailing-comma-style blocks):
    When `inner` (the existing array/object body) already ended in a trailing
    comma, appending `',\\n  ' + addition` produced `,,` -- a hard JS syntax
    error. This broke 9 real club files in one session before a blanket
    `node --check` sweep caught it. Fixed by stripping any existing trailing
    comma (`inner.rstrip().rstrip(',')`) before adding the separator comma,
    everywhere content is appended (rumour/confirmed arrays, HUB, LINKMAP).

BUGFIX 3 (dangling LINKMAP entries):
    The old HUB de-dup logic decided whether to *insert* a HUB entry by checking
    if the URL string already appeared anywhere in HUB's body -- but the item's
    LINKMAP entry was always written using that item's own freshly-slugified key,
    regardless of whether a HUB entry for that key was ever created. Net effect:
    when two items shared a sourceUrl, the second item's LINKMAP pointed at a key
    that was never added to HUB. Harmless at render time (buildSourcesPanel in
    template.html falls back to "No linked source on file"), but it silently lost
    a real, correct source link. Found 52 instances across two audits this way.
    Fixed by searching HUB *by URL* first; if a HUB entry for this exact URL
    already exists, its key is reused directly (no new HUB entry, LINKMAP points
    at the real surviving key) instead of always minting a new name-based key.
"""
import json, re, sys, os, glob

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLUBS_DIR = os.path.join(REPO, 'clubs')


def band(prob):
    v = int(prob)
    return 'g' if v > 50 else 'y' if v >= 30 else 'o' if v >= 15 else 'r'


def esc(s):
    if s is None:
        return ''
    return str(s).replace('\\', '\\\\').replace('"', '\\"')


def slugify_key(label, name):
    base = re.sub(r'[^a-zA-Z0-9]', '', (label or '') + name)
    if not base:
        return 'src'
    key = base[0].lower() + base[1:]
    # BUGFIX 4: a JS object key used unquoted (as HUB/LINKMAP keys are) must not
    # start with a digit -- e.g. label "67 Hail Hail" -> "67HailHail..." is an
    # invalid identifier and breaks node --check. Prefix with 's' in that case.
    if key[0].isdigit():
        key = 's' + key
    return key


def existing_names(content, arrname):
    # BUGFIX 1: tolerate whitespace/newlines around `=` and before `[`.
    m = re.search(rf'const\s+{arrname}\s*=\s*\[([\s\S]*?)\];', content)
    if not m:
        return set(), None
    names = set(re.findall(r'\{name:"((?:[^"\\]|\\.)*)"', m.group(1)))
    return names, m


def append_to_array(content, arrname, new_items_js):
    """Append JS object literals (list of strings) to an array; create if array empty."""
    if not new_items_js:
        return content
    # BUGFIX 1: same whitespace tolerance as existing_names.
    pattern = re.compile(rf'(const\s+{arrname}\s*=\s*\[)([\s\S]*?)(\];)')
    m = pattern.search(content)
    if not m:
        print(f'  WARN: could not find array {arrname}')
        return content
    inner = m.group(2)
    addition = ',\n  '.join(new_items_js)
    # BUGFIX 2: strip any pre-existing trailing comma before adding our own separator.
    trimmed = inner.rstrip().rstrip(',')
    if trimmed.strip():
        new_inner = trimmed + ',\n  ' + addition + '\n'
    else:
        new_inner = '\n  ' + addition + '\n'
    return content[:m.start()] + m.group(1) + new_inner + m.group(3) + content[m.end():]


def rumour_item_js(item):
    truth = int(item.get('truth', 50))
    prob = int(item.get('prob', 30))
    fields = [
        f'name:"{esc(item["name"])}"',
        f'sub:"{esc(item.get("sub",""))}"',
        f'club:"{esc(item.get("club",""))}"',
        f'pos:"{esc(item.get("pos",""))}"',
        f'report:"{esc(item.get("report",""))}"',
        f'src:"{esc(item.get("src",""))}"',
        f'tier:{int(item.get("tier",3))}',
        f'fee:"{esc(item.get("fee","Undisclosed"))}"',
        f'truth:{truth}',
        f'prob:{prob}',
        f'light:"{band(prob)}"',
        f'trend:"flat"',
        f'note:"{esc(item.get("note",""))}"',
    ]
    return '{' + ', '.join(fields) + '}'


def confirmed_item_js(item):
    fee = item.get('fee', 'Undisclosed')
    free = item.get('free', False)
    if isinstance(free, str):
        free = free.lower() == 'true'
    if not free and isinstance(fee, str) and 'free' in fee.lower():
        free = True
    fields = [
        f'name:"{esc(item["name"])}"',
        f'sub:"{esc(item.get("sub",""))}"',
        f'club:"{esc(item.get("club",""))}"',
        f'pos:"{esc(item.get("pos",""))}"',
        f'fee:"{esc(fee)}"',
        f'free:{"true" if free else "false"}',
        f'status:"done"',
        f'statusTxt:"DONE, OFFICIAL"',
        f'note:"{esc(item.get("note",""))}"',
    ]
    return '{' + ', '.join(fields) + '}'


def add_hub_and_linkmap(content, name, source_url, source_label):
    if not source_url:
        return content
    hub_pat = re.compile(r'(const HUB = \{)([\s\S]*?)(\};)')
    m = hub_pat.search(content)
    key = slugify_key(source_label, name)
    if m:
        hub_body = m.group(2)
        # BUGFIX 3: look up an existing HUB entry BY URL first. If one already
        # exists for this exact source, reuse its key -- do not mint a new one.
        url_needle = esc(source_url)
        url_match = re.search(rf'(\w+)\s*:\s*\{{l:"[^"]*",\s*u:"{re.escape(url_needle)}"\}}', hub_body)
        if url_match:
            key = url_match.group(1)
        else:
            orig_key = key
            suffix = 0
            while re.search(rf'\b{re.escape(key)}\s*:', hub_body):
                suffix += 1
                key = f'{orig_key}{suffix}'
            hub_entry = f'{key}: {{l:"{esc(source_label)}", u:"{esc(source_url)}"}}'
            trimmed = hub_body.rstrip().rstrip(',')  # BUGFIX 2
            if trimmed.strip():
                new_inner = trimmed + ',\n  ' + hub_entry
            else:
                new_inner = '\n  ' + hub_entry
            content = content[:m.start()] + m.group(1) + new_inner + m.group(3) + content[m.end():]
    # LINKMAP -- always points at `key`, which by BUGFIX 3 is now guaranteed to
    # exist in HUB (either just-inserted, or reused from an existing entry).
    linkmap_pat = re.compile(r'(const LINKMAP = \{)([\s\S]*?)(\};)')
    m = linkmap_pat.search(content)
    if m:
        inner = m.group(2)
        name_esc = esc(name)
        existing_line = re.search(rf'"{re.escape(name_esc)}"\s*:\s*\[([^\]]*)\]', inner)
        if existing_line:
            if f'"{key}"' not in existing_line.group(1):
                new_list = existing_line.group(1).rstrip() + f', "{key}"'
                new_inner = inner[:existing_line.start(1)] + new_list + inner[existing_line.end(1):]
                content = content[:m.start()] + m.group(1) + new_inner + m.group(3) + content[m.end():]
        else:
            entry = f'"{name_esc}": ["{key}"]'
            trimmed = inner.rstrip().rstrip(',')  # BUGFIX 2
            if trimmed.strip():
                new_inner = trimmed + ',\n  ' + entry
            else:
                new_inner = '\n  ' + entry
            content = content[:m.start()] + m.group(1) + new_inner + m.group(3) + content[m.end():]
    return content


def process_club(slug, data):
    path = os.path.join(CLUBS_DIR, f'{slug}.data.js')
    if not os.path.exists(path):
        print(f'  SKIP {slug}: no data file')
        return False
    content = open(path, encoding='utf-8').read()
    changed = False

    for arr_key, arr_name, item_fn in [
        ('incoming', 'INCOMING', rumour_item_js),
        ('outgoing', 'OUTGOING', rumour_item_js),
        ('confirmed_in', 'CONFIRMED_IN', confirmed_item_js),
        ('confirmed_out', 'CONFIRMED_OUT', confirmed_item_js),
    ]:
        items = data.get(arr_key, [])
        if not items:
            continue
        names_existing, _ = existing_names(content, arr_name)
        new_js = []
        for item in items:
            if item['name'] in names_existing:
                continue
            new_js.append(item_fn(item))
            names_existing.add(item['name'])
        if new_js:
            content = append_to_array(content, arr_name, new_js)
            changed = True

    # HUB/LINKMAP for all items with sourceUrl (including ones skipped above as
    # dupes, since a name dupe can still be missing its source link).
    for arr_key in ['incoming', 'outgoing', 'confirmed_in', 'confirmed_out']:
        for item in data.get(arr_key, []):
            if item.get('sourceUrl'):
                content = add_hub_and_linkmap(content, item['name'], item['sourceUrl'], item.get('sourceLabel', item.get('src', 'Source')))

    if changed:
        open(path, 'w', encoding='utf-8').write(content)
    return changed


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)
    research_files = []
    for a in args:
        if os.path.isdir(a):
            research_files.extend(sorted(glob.glob(os.path.join(a, '*.json'))))
        else:
            research_files.append(a)

    total_ok = 0
    touched_slugs = set()
    for rf in research_files:
        data = json.load(open(rf, encoding='utf-8'))
        print(f'=== {rf} ===')
        for club in data['clubs']:
            slug = club['slug']
            ok = process_club(slug, club)
            if ok:
                total_ok += 1
                touched_slugs.add(slug)
                print(f'  OK {slug}')
            else:
                print(f'  no-op {slug}')

    print(f'\nTotal clubs updated: {total_ok}')
    # Write the touched-slug list so the pipeline wrapper can rebuild only what changed.
    if touched_slugs:
        with open(os.path.join(REPO, '.last_injected_slugs'), 'w') as f:
            f.write('\n'.join(sorted(touched_slugs)))


if __name__ == '__main__':
    main()
