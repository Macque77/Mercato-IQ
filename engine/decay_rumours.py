#!/usr/bin/env python3
"""Fade a rumour's displayed prominence the longer it goes without a fresh
report, without ever deleting it -- the other half of the rumour lifecycle
added 2026-08-04 (see the docstring in engine/inject_research.py for the
"resurrect" half).

User's explicit spec (2026-08-04): "keep a rumour until it's either confirmed
transfer, confirmed off, or otherwise simply reduce its importance until it's
no longer being talked about. Resurrect if new sources report." Deletion on
confirmation is already handled by engine/detect_stale_rumours.py -- this
script only ever turns a rumour's `prob` DOWN over time; it never removes an
entry, and engine/inject_research.py's upsert_rumours() is what pushes `prob`
back up the instant a real source re-reports the same player.

Mechanism:
  - Every INCOMING/OUTGOING item carries `lastSeen` (ISO timestamp of the most
    recent research pass that actually saw this rumour reported) and
    `baseProb` (the prob AS REPORTED, never touched by decay).
  - The DISPLAYED `prob` is recomputed each run as a function of `baseProb`
    and days elapsed since `lastSeen`: unchanged for the first GRACE_DAYS,
    then reduced by DECAY_PER_DAY per day beyond that, floored at FLOOR_PROB.
  - This is idempotent -- running it twice the same day (or twice with no
    time elapsed) recomputes the exact same number from baseProb, so it never
    compounds and never needs a "have I already decayed this" flag.
  - Legacy entries written before this field existed have no `lastSeen`. This
    script backfills it (`lastSeen` = now, `baseProb` = current `prob`) the
    first time it encounters one, WITHOUT decaying that run -- we have no real
    signal for how old an untimestamped rumour actually is, so the honest
    default is "just seen", not "assume it's stale".

A decayed `prob` naturally pushes a rumour down (and eventually off) any
"top stories" ranking in engine/aggregate.py without deleting the underlying
club-page entry -- exactly the "no longer being talked about" behaviour
requested, while staying reversible.

Usage:
    python3 engine/decay_rumours.py            # decay + migrate + report
    python3 engine/decay_rumours.py --dry-run   # report only, no writes
"""
import os
import re
import sys
import glob

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import js_obj_utils as jou

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLUBS_DIR = os.path.join(REPO, 'clubs')

GRACE_DAYS = 3        # no decay at all within this many days of the last real report
DECAY_PER_DAY = 4      # prob points shaved off per day beyond the grace period
FLOOR_PROB = 5         # never decay all the way to 0 -- still a real, citable rumour


def band(prob):
    v = int(prob)
    return 'g' if v > 50 else 'y' if v >= 30 else 'o' if v >= 15 else 'r'


def decayed_prob(base_prob, days_elapsed):
    if days_elapsed <= GRACE_DAYS:
        return base_prob
    return max(FLOOR_PROB, base_prob - DECAY_PER_DAY * (days_elapsed - GRACE_DAYS))


def process_array(content, arr_name, now, report, slug):
    block = jou.find_array_block(content, arr_name)
    if not block:
        return content, False
    _, _, inner = block
    spans = jou.split_top_level_objects(inner)
    object_texts = [inner[s:e] for s, e in spans]
    any_change = False

    for i, text in enumerate(object_texts):
        name = jou.field_str(text, 'name') or '(unnamed)'
        last_seen_raw = jou.field_str(text, 'lastSeen')
        current_prob = jou.field_int(text, 'prob')
        if current_prob is None:
            continue  # malformed/legacy entry with no numeric prob at all -- leave alone

        if last_seen_raw is None:
            # Migration: backfill lastSeen/baseProb, no decay this run.
            new_text = jou.append_fields(text, [f'lastSeen:"{now.strftime("%Y-%m-%dT%H:%M:%SZ")}"', f'baseProb:{current_prob}'])
            if new_text != text:
                object_texts[i] = new_text
                any_change = True
                report['migrated'] += 1
            continue

        last_seen = jou.parse_iso(last_seen_raw)
        if last_seen is None:
            continue  # unparseable timestamp -- leave alone rather than guess

        base_prob = jou.field_int(text, 'baseProb')
        if base_prob is None:
            base_prob = current_prob  # legacy entry with lastSeen but no baseProb yet

        days_elapsed = (now - last_seen).total_seconds() / 86400.0
        target_prob = decayed_prob(base_prob, days_elapsed)

        if target_prob != current_prob:
            new_text = jou.set_int_field(text, 'prob', target_prob)
            new_text = jou.set_str_field(new_text, 'light', band(target_prob))
            if target_prob < current_prob:
                new_text = jou.set_str_field(new_text, 'trend', 'down')
            object_texts[i] = new_text
            any_change = True
            report['decayed'].append({
                'club': slug, 'array': arr_name, 'name': name,
                'from': current_prob, 'to': target_prob,
                'days_since_seen': round(days_elapsed, 1),
            })

    if not any_change:
        return content, False
    new_content, ok = jou.replace_array_objects(content, arr_name, object_texts)
    return (new_content, True) if ok else (content, False)


def main():
    dry_run = '--dry-run' in sys.argv
    import datetime
    now = datetime.datetime.now(datetime.timezone.utc)

    paths = sorted(glob.glob(os.path.join(CLUBS_DIR, '*.data.js')))
    report = {'decayed': [], 'migrated': 0}
    touched_slugs = []

    for path in paths:
        content = open(path, encoding='utf-8').read()
        slug_match = re.search(r'slug\s*:\s*"([^"]+)"', content)
        slug = slug_match.group(1) if slug_match else os.path.basename(path)[:-len('.data.js')]

        file_changed = False
        for arr_name in ('INCOMING', 'OUTGOING'):
            content, changed = process_array(content, arr_name, now, report, slug)
            file_changed = file_changed or changed

        if file_changed and not dry_run:
            if jou.syntax_check_and_write(path, content):
                touched_slugs.append(slug)
            else:
                print(f'  WARN: node --check failed for {slug}, left untouched', file=sys.stderr)
        elif file_changed:
            touched_slugs.append(slug)

    if not dry_run and touched_slugs:
        # newline='\n': keep LF on Windows so apply_research.sh's shell loop
        # doesn't inherit a trailing \r (see .last_injected_slugs in inject_research.py).
        with open(os.path.join(REPO, '.decay_touched_slugs'), 'w', encoding='utf-8', newline='\n') as f:
            f.write('\n'.join(sorted(touched_slugs)) + '\n')

    print(f"Rumour decay scan: {len(report['decayed'])} rumour(s) faded, "
          f"{report['migrated']} entr{'y' if report['migrated']==1 else 'ies'} migrated "
          f"(lastSeen/baseProb backfilled, no decay applied yet), across {len(paths)} clubs.")
    for d in report['decayed'][:50]:
        print(f"  [{d['club']}] {d['array']}: \"{d['name']}\" prob {d['from']}->{d['to']} "
              f"({d['days_since_seen']}d since last reported)")
    if len(report['decayed']) > 50:
        print(f"  ... and {len(report['decayed']) - 50} more")
    if dry_run:
        print("(dry run -- no files written)")
    else:
        print(f"{len(touched_slugs)} file(s) updated.")
    return report


if __name__ == '__main__':
    main()
