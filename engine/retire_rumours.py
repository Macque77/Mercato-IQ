#!/usr/bin/env python3
"""Retire dead / cold rumours into a DEAD list (rendered as its own section on
each club page), instead of leaving them sitting in INCOMING/OUTGOING forever.

User spec (2026-08-06): a rumour is DEAD when any of --
  1. a decent-tier source says the deal is off  (marked by research: an item
     carrying `dead:true`, optionally with `deadReason:"..."`).
  2. its latest mention is > 5 weeks ago.
  3. the player has already transferred this season (confirmed IN somewhere, or
     OUT of this club) -- any surviving rumour for them is automatically void.
Confirmed transfers are checked FIRST: a completed move voids every rumour for
that player across the whole site.

This supersedes engine/detect_stale_rumours.py (which DELETED confirmed-elsewhere
rumours): here they are MOVED to DEAD with a reason, not silently dropped -- the
one exception is a rumour that is simply a duplicate of a CONFIRMED entry at the
SAME club (it "graduated"), which is deleted outright. engine/decay_rumours.py
still runs afterwards to fade the prob of the rumours that stay live.

Resurrection: if a player currently in DEAD is reported live again (a fresh
INCOMING/OUTGOING entry re-appears for them), they are dropped from DEAD so the
live entry wins. DEAD is capped and de-duplicated by player name, newest first.

Staleness detection is deliberately belt-and-braces because legacy entries often
lack a reliable `lastSeen`: rule 2 fires on EITHER a `lastSeen` older than 5
weeks OR a free-text `report`/`age` hint that says so ("~12 wks ago", "~14 wks",
"cooled", "off the table", ...). A false positive is cheap -- research
resurrects a genuinely-live link the next time it re-reports it.

Usage:
    python3 engine/retire_rumours.py            # retire + report, writes .stale_touched_slugs
    python3 engine/retire_rumours.py --dry-run
"""
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import js_obj_utils as jou

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLUBS_DIR = os.path.join(REPO, 'clubs')

DAYS_DEAD = 5 * 7  # rule 2: latest mention older than 5 weeks
DEAD_CAP = 40      # keep the DEAD list bounded per club

# Free-text staleness signals for entries without a usable lastSeen.
_WEEKS_AGO = re.compile(r'(\d+)\s*\+?\s*(?:wk|wks|week|weeks)\b', re.IGNORECASE)
_MONTHS_AGO = re.compile(r'(\d+)\s*\+?\s*(?:month|months|mth|mths)\b', re.IGNORECASE)
_COLD_PHRASE = re.compile(
    r'\b(cooled|cold|stalled|collapsed|called off|off the table|no longer|'
    r'not happening|abandoned|dead|fizzled|shelved|pulled out|walked away)\b',
    re.IGNORECASE,
)


def norm_name(s):
    return re.sub(r'\s+', ' ', (s or '')).strip().lower()


def has_dead_flag(obj_text):
    return re.search(r'\bdead\s*:\s*true\b', obj_text) is not None


def text_says_stale(obj_text):
    """Rule 2 via free text: a report/age hint of >=5 weeks, any months, or a
    cold-phrase. Returns a short reason string, or None."""
    for field in ('report', 'age', 'note'):
        val = jou.field_str(obj_text, field)
        if not val:
            continue
        m = _WEEKS_AGO.search(val)
        if m and int(m.group(1)) >= 5:
            return f'no fresh report in {m.group(1)}+ weeks'
        if _MONTHS_AGO.search(val):
            return 'no fresh report in over a month'
        if field in ('report', 'age') and _COLD_PHRASE.search(val):
            return 'link went cold'
    return None


def lastseen_stale(obj_text, now):
    ls = jou.parse_iso(jou.field_str(obj_text, 'lastSeen'))
    if ls is None:
        return None
    age_days = (now - ls).total_seconds() / 86400.0
    if age_days > DAYS_DEAD:
        return f'no fresh report in 5+ weeks (last seen {ls.date().isoformat()})'
    return None


def annotate_dead(obj_text, direction, reason, dead_at):
    obj_text = jou.set_str_field(obj_text, 'dir', direction)
    obj_text = jou.set_str_field(obj_text, 'deadReason', reason)
    obj_text = jou.set_str_field(obj_text, 'deadAt', dead_at)
    return obj_text


def objects_of(content, arr):
    block = jou.find_array_block(content, arr)
    if not block:
        return []
    _, _, inner = block
    return [inner[s:e] for s, e in jou.split_top_level_objects(inner)]


def set_or_create_array(content, name, object_texts):
    """Replace ARRAY_NAME's body, or create `const NAME = [...]` after the
    standard arrays if it doesn't exist yet."""
    if jou.find_array_block(content, name):
        new_content, ok = jou.replace_array_objects(content, name, object_texts)
        return new_content if ok else content
    if not object_texts:
        return content  # nothing to create
    inner = '\n' + ',\n'.join('  ' + t.strip() for t in object_texts) + '\n'
    decl = f'\nconst {name} = [{inner}];'
    for anchor in ('OUTGOING', 'INCOMING', 'CONFIRMED_OUT', 'CONFIRMED_IN'):
        b = jou.find_array_block(content, anchor)
        if b:
            _, end, _ = b
            semi = content.find(';', end - 1)
            insert_at = (semi + 1) if semi != -1 else end
            return content[:insert_at] + decl + content[insert_at:]
    return content


def main():
    import datetime
    dry_run = '--dry-run' in sys.argv
    now = datetime.datetime.now(datetime.timezone.utc)
    dead_at = now.strftime('%Y-%m-%dT%H:%M:%SZ')

    paths = sorted(glob.glob(os.path.join(CLUBS_DIR, '*.data.js')))
    files = {p: open(p, encoding='utf-8').read() for p in paths}

    # Rule 3/4 indexes: who is confirmed IN / OUT where, across the whole site.
    confirmed_in, confirmed_out = {}, {}
    for content in files.values():
        slug = (re.search(r'slug\s*:\s*"([^"]+)"', content) or [None, None])[1]
        for obj in objects_of(content, 'CONFIRMED_IN'):
            nm = norm_name(jou.field_str(obj, 'name'))
            if nm:
                confirmed_in.setdefault(nm, set()).add(slug)
        for obj in objects_of(content, 'CONFIRMED_OUT'):
            nm = norm_name(jou.field_str(obj, 'name'))
            if nm:
                confirmed_out.setdefault(nm, set()).add(slug)

    report = {'dead': [], 'deleted': [], 'resurrected': []}
    touched = []

    for path, content in files.items():
        slug = (re.search(r'slug\s*:\s*"([^"]+)"', content) or [None, os.path.basename(path)])[1]
        existing_dead = objects_of(content, 'DEAD')
        new_dead = []
        live_names = set()
        changed = False

        for arr in ('INCOMING', 'OUTGOING', 'WATCHLIST'):
            objs = objects_of(content, arr)
            if not objs:
                continue
            keep = []
            for obj in objs:
                name = jou.field_str(obj, 'name')
                nm = norm_name(name)
                # Direction is the item's own dir (WATCHLIST carries both), else the array's.
                item_dir = jou.field_str(obj, 'dir') or ('out' if arr == 'OUTGOING' else 'in')
                reason = None
                delete = False

                if nm and item_dir == 'in' and nm in confirmed_in:
                    landed = confirmed_in[nm]
                    if slug in landed:
                        delete = True  # graduated to a CONFIRMED_IN here -- drop the dup
                    else:
                        reason = f"signed for {', '.join(sorted(x for x in landed if x))}"
                elif nm and item_dir == 'out' and (slug in confirmed_out.get(nm, set())):
                    delete = True  # already has a CONFIRMED_OUT here -- drop the dup
                elif nm and item_dir == 'out' and nm in confirmed_in:
                    reason = f"completed move to {', '.join(sorted(x for x in confirmed_in[nm] if x))}"
                elif has_dead_flag(obj):
                    reason = jou.field_str(obj, 'deadReason') or 'source reported the deal off'
                else:
                    reason = lastseen_stale(obj, now) or text_says_stale(obj)

                if delete:
                    changed = True
                    report['deleted'].append({'club': slug, 'name': name})
                elif reason:
                    new_dead.append(annotate_dead(obj, item_dir, reason, dead_at))
                    live_names.discard(nm)
                    changed = True
                    report['dead'].append({'club': slug, 'name': name, 'reason': reason})
                else:
                    keep.append(obj)
                    if nm:
                        live_names.add(nm)

            if len(keep) != len(objs):
                content = set_or_create_array(content, arr, keep)

        # Resurrection + de-dup: drop DEAD entries whose player is live again or
        # duplicated by a fresh dead entry; keep newest, cap the list.
        kept_dead = []
        seen = set()
        for obj in new_dead + existing_dead:  # new first == newest first
            nm = norm_name(jou.field_str(obj, 'name'))
            if nm in live_names:
                if obj in existing_dead:
                    report['resurrected'].append({'club': slug, 'name': jou.field_str(obj, 'name')})
                    changed = True
                continue
            if nm and nm in seen:
                continue
            seen.add(nm)
            kept_dead.append(obj)
        kept_dead = kept_dead[:DEAD_CAP]

        if new_dead or kept_dead != existing_dead:
            content = set_or_create_array(content, 'DEAD', kept_dead)
            changed = True

        if changed:
            if dry_run:
                touched.append(slug)
            elif jou.syntax_check_and_write(path, content):
                touched.append(slug)
            else:
                print(f'  WARN: node --check failed for {slug}, left untouched', file=sys.stderr)

    if not dry_run and touched:
        with open(os.path.join(REPO, '.stale_touched_slugs'), 'w', encoding='utf-8', newline='\n') as f:
            f.write('\n'.join(sorted(set(touched))) + '\n')

    print(f"Retire scan: {len(report['dead'])} rumour(s) retired to DEAD, "
          f"{len(report['deleted'])} duplicate(s) dropped, "
          f"{len(report['resurrected'])} resurrected, across {len(paths)} clubs.")
    for d in report['dead'][:60]:
        print(f"  [{d['club']}] DEAD: \"{d['name']}\" -- {d['reason']}")
    if len(report['dead']) > 60:
        print(f"  ... and {len(report['dead']) - 60} more")
    print("(dry run -- no files written)" if dry_run else f"{len(set(touched))} file(s) updated.")
    return report


if __name__ == '__main__':
    main()
