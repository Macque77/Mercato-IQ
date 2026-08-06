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

RUMOUR LIFECYCLE (added 2026-08-04, user-requested): a rumour used to be
inert once written -- re-injecting the same player name at the same club was
always a silent no-op, even if a new source reported fresh (and very
different) prob/truth numbers the next day. INCOMING/OUTGOING items now carry
`lastSeen` (ISO timestamp of the most recent research pass that saw this
exact rumour reported) and `baseProb` (the prob as most recently reported,
untouched by decay). When a fresh research pass reports a player already
tracked at that club, the existing entry is UPDATED in place -- new
prob/truth/note/fee/src/tier, `lastSeen` reset to now, `baseProb` reset to
the new prob, and `trend` set by comparing the new prob to the old one
(up/down/flat). This is the "resurrect" half of the lifecycle: a rumour that
has faded (see `engine/decay_rumours.py`) jumps back to full prominence the
moment a source actually re-reports it. CONFIRMED_IN/CONFIRMED_OUT keep the
old skip-on-duplicate-name behaviour (a completed deal doesn't need updating).
`engine/decay_rumours.py` is the other half: run automatically in Phase 2
after this script, it lowers `prob` (never `baseProb`) the longer a rumour
goes without a fresh `lastSeen`, so an untouched rumour visibly fades rather
than sitting frozen at its original numbers forever.
"""
import json, re, sys, os, glob

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import js_obj_utils as jou

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
    # BUGFIX 4 (2026-08-04): a JS object key used unquoted (as HUB/LINKMAP keys
    # are) must not start with a digit -- e.g. label "67 Hail Hail" ->
    # "67HailHail..." is an invalid identifier and breaks node --check.
    # Prefix with 's' in that case. Caught live during the top-5-league
    # refresh when an Osasuna rumour sourced to "67 Hail Hail" broke the
    # syntax gate.
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


def rumour_item_js(item, trend='flat'):
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
        f'trend:"{trend}"',
        f'note:"{esc(item.get("note",""))}"',
        # RUMOUR LIFECYCLE: baseProb is the prob as most recently REPORTED
        # (never touched by decay -- only a fresh injection resets it);
        # lastSeen anchors engine/decay_rumours.py's fade-over-time clock.
        # Both reset to "now"/current prob every time this function renders
        # an item, whether it's a brand-new rumour or a resurrect-update of
        # an existing one.
        f'lastSeen:"{jou.now_iso()}"',
        f'baseProb:{prob}',
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


def upsert_rumours(content, arr_name, items):
    """INCOMING/OUTGOING handling: unlike CONFIRMED_IN/OUT, a rumour already
    tracked at this club gets UPDATED in place (fresh prob/truth/note/fee,
    lastSeen reset to now, baseProb reset, trend computed vs the old prob)
    rather than silently skipped -- see the RUMOUR LIFECYCLE note in this
    file's docstring. Returns (new_content, changed)."""
    if not items:
        return content, False
    block = jou.find_array_block(content, arr_name)
    if not block:
        print(f'  WARN: could not find array {arr_name}')
        return content, False
    _, _, inner = block
    existing_spans = jou.split_top_level_objects(inner)
    object_texts = [inner[s:e] for s, e in existing_spans]
    # Key by _norm(name) so an accented model spelling ("Bruno Guimarães") updates
    # the existing unaccented entry ("Bruno Guimaraes") in place instead of adding
    # a duplicate.
    name_to_index = {}
    for idx, text in enumerate(object_texts):
        nm = jou.field_str(text, 'name')
        if nm is not None and _norm(nm) not in name_to_index:
            name_to_index[_norm(nm)] = idx

    changed = False
    for item in items:
        key = _norm(item['name'])
        if key in name_to_index:
            idx = name_to_index[key]
            old_text = object_texts[idx]
            old_prob = jou.field_int(old_text, 'baseProb')
            if old_prob is None:
                old_prob = jou.field_int(old_text, 'prob')
            new_prob = int(item.get('prob', 30))
            if old_prob is None:
                trend = 'flat'
            elif new_prob > old_prob:
                trend = 'up'
            elif new_prob < old_prob:
                trend = 'down'
            else:
                trend = 'flat'
            # Merge, don't clobber: a thin model update must never blank a field a
            # prior (richer) run established. Keep the existing value wherever the
            # model left one empty/missing.
            object_texts[idx] = rumour_item_js(_backfill(item, old_text), trend=trend)
            changed = True
        else:
            object_texts.append(rumour_item_js(item, trend='flat'))
            name_to_index[key] = len(object_texts) - 1
            changed = True

    if not changed:
        return content, False
    new_content, ok = jou.replace_array_objects(content, arr_name, object_texts)
    return (new_content, True) if ok else (content, False)


def _norm(s):
    """Lowercase, strip diacritics, collapse spaces -- robust name matching so
    'Víctor Muñoz' == 'Victor Munoz' when comparing against the model's live list."""
    import unicodedata
    s = unicodedata.normalize('NFKD', s or '')
    s = ''.join(ch for ch in s if not unicodedata.combining(ch))
    return re.sub(r'\s+', ' ', s).strip().lower()


def _backfill(item, old_text):
    """Where the model's update leaves a field empty/missing, keep the value already
    on the page. A snippet-only extract often can't restate sub/club/pos/etc., and a
    blank must never overwrite richer detail a prior run established."""
    out = dict(item)
    for f in ('sub', 'club', 'pos', 'report', 'src', 'fee', 'note'):
        if not str(out.get(f, '') or '').strip():
            old = jou.field_str(old_text, f)
            if old:
                out[f] = old
    for f in ('tier', 'truth', 'prob'):
        v = out.get(f)
        if v in (None, '') or (isinstance(v, int) and f in ('truth', 'prob') and v == 0):
            old = jou.field_int(old_text, f)
            if old is not None:
                out[f] = old
    return out


def dedupe_by_norm(content, arr_name):
    """Collapse entries in an array that share a normalized name (e.g. an accented
    and unaccented spelling of the same player), keeping the richest (longest) one.
    Cleans up duplicates a prior buggy run may have left; the upsert dedup only
    prevents NEW ones. Preserves first-seen order and any unnamed objects."""
    block = jou.find_array_block(content, arr_name)
    if not block:
        return content, False
    _, _, inner = block
    objs = [inner[s:e] for s, e in jou.split_top_level_objects(inner)]
    chosen, order, unnamed = {}, [], []
    for o in objs:
        nm = jou.field_str(o, 'name')
        if not nm:
            unnamed.append(o)
            continue
        k = _norm(nm)
        if k not in chosen:
            chosen[k] = o
            order.append(k)
        elif len(o) > len(chosen[k]):
            chosen[k] = o  # keep the richer of the duplicates
    if len(chosen) + len(unnamed) == len(objs):
        return content, False  # nothing duplicated
    new_objs = [chosen[k] for k in order] + unnamed
    new_content, ok = jou.replace_array_objects(content, arr_name, new_objs)
    return (new_content, True) if ok else (content, False)


def _is_hollow(obj):
    """A row a weak extract invented without grounding: club literally 'Unknown', or
    BOTH club and sub empty. Real entries always carry at least a club or a descriptor,
    so this stays high-precision and won't drop good data."""
    club = (jou.field_str(obj, 'club') or '').strip()
    sub = (jou.field_str(obj, 'sub') or '').strip()
    if club.lower() == 'unknown':
        return True
    return club == '' and sub == ''


def drop_hollow(content, arr_name):
    """Remove hollow rows (see _is_hollow) from an array."""
    block = jou.find_array_block(content, arr_name)
    if not block:
        return content, False
    _, _, inner = block
    objs = [inner[s:e] for s, e in jou.split_top_level_objects(inner)]
    kept = [o for o in objs if not _is_hollow(o)]
    if len(kept) == len(objs):
        return content, False
    new_content, ok = jou.replace_array_objects(content, arr_name, kept)
    return (new_content, True) if ok else (content, False)


def reconcile_live(content, live_names, protected_names):
    """Replace-list reconciliation: flag dead:true any on-page rumour whose player
    is NOT in the model's authoritative `live` list (and not freshly added this
    pass). retire_rumours.py then moves them to DEAD. This is how a transferred /
    months-old link gets retired -- the model simply leaves it out of `live`."""
    if not live_names:
        return content, False
    live = {_norm(n) for n in live_names}
    prot = {_norm(n) for n in protected_names}
    changed = False
    for arr in ('INCOMING', 'OUTGOING', 'WATCHLIST'):
        block = jou.find_array_block(content, arr)
        if not block:
            continue
        _, _, inner = block
        objs = [inner[s:e] for s, e in jou.split_top_level_objects(inner)]
        arr_changed = False
        for i, obj in enumerate(objs):
            nm = _norm(jou.field_str(obj, 'name'))
            if not nm or nm in live or nm in prot:
                continue
            if re.search(r'\bdead\s*:\s*true\b', obj):
                continue
            objs[i] = jou.append_fields(obj, ['dead:true', 'deadReason:"no longer a current link"'])
            arr_changed = True
        if arr_changed:
            new_content, ok = jou.replace_array_objects(content, arr, objs)
            if ok:
                content, changed = new_content, True
    return content, changed


def flag_dead(content, dead_items):
    """Mark named live rumours dead:true (+ deadReason) so engine/retire_rumours.py
    moves them to the DEAD section on its pass. This is rule 1 -- a source said the
    deal is off. Matches by player name across INCOMING/OUTGOING/WATCHLIST."""
    wanted = {}
    for d in dead_items:
        nm = re.sub(r'\s+', ' ', (d.get('name') or '')).strip().lower()
        if nm:
            wanted[nm] = d.get('reason') or 'source reported the deal off'
    if not wanted:
        return content, False
    changed = False
    for arr in ('INCOMING', 'OUTGOING', 'WATCHLIST'):
        block = jou.find_array_block(content, arr)
        if not block:
            continue
        _, _, inner = block
        objs = [inner[s:e] for s, e in jou.split_top_level_objects(inner)]
        arr_changed = False
        for i, obj in enumerate(objs):
            nm = re.sub(r'\s+', ' ', (jou.field_str(obj, 'name') or '')).strip().lower()
            if nm in wanted and not re.search(r'\bdead\s*:\s*true\b', obj):
                objs[i] = jou.append_fields(obj, ['dead:true', f'deadReason:"{esc(wanted[nm])}"'])
                arr_changed = True
        if arr_changed:
            new_content, ok = jou.replace_array_objects(content, arr, objs)
            if ok:
                content, changed = new_content, True
    return content, changed


def process_club(slug, data):
    path = os.path.join(CLUBS_DIR, f'{slug}.data.js')
    if not os.path.exists(path):
        print(f'  SKIP {slug}: no data file')
        return False
    content = open(path, encoding='utf-8').read()
    changed = False

    for arr_key, arr_name in [('incoming', 'INCOMING'), ('outgoing', 'OUTGOING')]:
        content, arr_changed = upsert_rumours(content, arr_name, data.get(arr_key, []))
        changed = changed or arr_changed

    # Self-heal: collapse accent/spelling duplicates and drop hollow "Unknown"-club
    # rows across every array (belt-and-braces cleanup of anything a weaker run left).
    for arr_name in ('INCOMING', 'OUTGOING', 'WATCHLIST', 'CONFIRMED_IN', 'CONFIRMED_OUT', 'DEAD'):
        content, dd_changed = dedupe_by_norm(content, arr_name)
        content, hollow_changed = drop_hollow(content, arr_name)
        changed = changed or dd_changed or hollow_changed

    # Rule 1: retire rumours a source has called off (retire_rumours.py moves them).
    content, dead_changed = flag_dead(content, data.get('dead', []))
    changed = changed or dead_changed

    # Replace-list reconciliation: retire anything not in the model's authoritative
    # `live` list. Protect players it's adding/confirming this pass (clearly live).
    if data.get('live'):
        protected = [it['name'] for k in ('incoming', 'outgoing', 'confirmed_in', 'confirmed_out')
                     for it in data.get(k, []) if isinstance(it, dict) and it.get('name')]
        content, live_changed = reconcile_live(content, data['live'], protected)
        changed = changed or live_changed

    for arr_key, arr_name, item_fn in [
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
    researched_slugs = set()  # every club a research pass actually looked at, changed or not
    for rf in research_files:
        data = json.load(open(rf, encoding='utf-8'))
        print(f'=== {rf} ===')
        for club in data['clubs']:
            slug = club['slug']
            researched_slugs.add(slug)
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
        # newline='\n': keep LF even on Windows so the shell loop in
        # apply_research.sh (`for slug in $(cat ...)`) doesn't inherit a
        # trailing \r and pass "clubs/<slug>.data.js\r" to node --check.
        with open(os.path.join(REPO, '.last_injected_slugs'), 'w', newline='\n') as f:
            f.write('\n'.join(sorted(touched_slugs)))

    # Record that Phase 1 actually spent a research pass on these clubs this
    # cycle -- whether or not it found anything new -- so a future sync can
    # skip re-researching a club that was just checked (see
    # engine/pick_research_targets.py). A no-op club still counts: "we looked
    # and there was nothing new" is exactly the signal a staleness gate needs.
    if researched_slugs:
        last_research_path = os.path.join(REPO, 'engine', '.last_research.json')
        state = {}
        if os.path.exists(last_research_path):
            try:
                state = json.load(open(last_research_path, encoding='utf-8'))
            except (json.JSONDecodeError, OSError):
                state = {}
        now = jou.now_iso()
        for slug in researched_slugs:
            state[slug] = now
        with open(last_research_path, 'w', encoding='utf-8') as f:
            json.dump(state, f, indent=1, sort_keys=True)


if __name__ == '__main__':
    main()
