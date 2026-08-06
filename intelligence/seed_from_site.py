#!/usr/bin/env python3
"""Seed the claim store from the EXISTING site -- an instant head start on history.

The reliability engine normally accrues claims run-by-run, which means weeks before
the scores mean anything (the cold-start problem). But the 304 clubs/*.data.js files
already hold thousands of rumours (each with a source) and confirmed transfers. This
scans them once to bootstrap:

  * every INCOMING/OUTGOING rumour  -> a CLAIM (source = its `src`, ts = its `lastSeen`)
  * every CONFIRMED_IN/OUT entry    -> a RESOLUTION (that move actually happened)

So the very first Power Ranking has real data behind it instead of two weeks of noise.
It's a snapshot (one point in time, so lead-times are approximate here), but it seeds
the dataset and every live run from now on adds properly-timed claims on top.

Usage:  python3 intelligence/seed_from_site.py [--dry-run]
"""
import glob
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
CLUBS_DIR = os.path.join(REPO, 'clubs')
sys.path.insert(0, os.path.join(REPO, 'engine'))
sys.path.insert(0, HERE)

import js_obj_utils as jou  # noqa: E402
import claim_store as cs  # noqa: E402


def _objects(content, arr):
    block = jou.find_array_block(content, arr)
    if not block:
        return []
    _, _, inner = block
    return [inner[s:e] for s, e in jou.split_top_level_objects(inner)]


def _f(obj, name):
    return jou.field_str(obj, name) or ''


def process_club(content, slug, club_name):
    claims, resolutions = [], []

    for arr, direction in (('INCOMING', 'in'), ('OUTGOING', 'out')):
        for o in _objects(content, arr):
            name = _f(o, 'name')
            if not name or jou.field_str(o, 'dead') == 'true':
                continue
            src = _f(o, 'src')
            if not cs.is_attributable(src):
                continue  # no attributable source -> can't score anyone
            ts = _f(o, 'lastSeen') or _f(o, 'deadAt') or ''
            if not ts:
                continue
            other = _f(o, 'club')  # the OTHER club named on the rumour
            claims.append(cs.make_claim(
                ts=ts, source=src, player=name, club_slug=slug, direction=direction,
                from_club=(other if direction == 'in' else club_name),
                to_club=(club_name if direction == 'in' else other),
                stage=_stage_from(o), prob=jou.field_int(o, 'baseProb') or jou.field_int(o, 'prob'),
                source_tier=jou.field_int(o, 'tier') or 3,
                source_url=_f(o, 'sourceUrl'), text=_f(o, 'report')))

    for arr, direction in (('CONFIRMED_IN', 'in'), ('CONFIRMED_OUT', 'out')):
        for o in _objects(content, arr):
            name = _f(o, 'name')
            if not name:
                continue
            other = _f(o, 'club')
            to_club = club_name if direction == 'in' else other
            resolutions.append(cs.make_resolution(
                ts=_f(o, 'confirmedAt') or _f(o, 'lastSeen') or '',
                player=name, to_club=to_club or club_name,
                confirmed_source=_f(o, 'src'), fee=_f(o, 'fee')))
    return claims, resolutions


def _stage_from(o):
    """Rough claim stage from prob/report wording, for later calibration analysis."""
    p = jou.field_int(o, 'baseProb') or jou.field_int(o, 'prob') or 0
    txt = (jou.field_str(o, 'report') or '').lower() + ' ' + (jou.field_str(o, 'note') or '').lower()
    if 'here we go' in txt or 'medical' in txt or p >= 90:
        return 'here-we-go'
    if 'agreed' in txt or 'agreement' in txt or 'advanced' in txt or p >= 70:
        return 'advanced'
    if 'talks' in txt or 'bid' in txt or 'offer' in txt or p >= 45:
        return 'talks'
    return 'interest'


def main():
    dry = '--dry-run' in sys.argv
    files = sorted(glob.glob(os.path.join(CLUBS_DIR, '*.data.js')))
    all_claims, all_res = [], []
    for path in files:
        content = open(path, encoding='utf-8').read()
        import re
        slug = (re.search(r'slug\s*:\s*"([^"]+)"', content) or [None, os.path.basename(path)[:-8]])[1]
        cm = re.search(r'club\s*:\s*"([^"]+)"', content)
        club_name = cm.group(1) if cm else slug
        c, r = process_club(content, slug, club_name)
        all_claims += c
        all_res += r

    # distinct sources for a quick sanity read
    srcs = {}
    for c in all_claims:
        srcs[c['source']] = srcs.get(c['source'], 0) + 1
    print(f"Scanned {len(files)} clubs -> {len(all_claims)} claim(s) from "
          f"{len(srcs)} distinct source(s), {len(all_res)} resolution(s).")
    top = sorted(srcs.items(), key=lambda x: -x[1])[:10]
    print("Most-quoted sources:", ', '.join(f"{s} ({n})" for s, n in top))

    if dry:
        print("\n[dry-run] nothing written.")
        return
    added, updated = cs.upsert_claims(all_claims)
    radded = cs.add_resolutions(all_res)
    print(f"Wrote store: +{added} new claim(s), {updated} updated; +{radded} resolution(s).")


if __name__ == '__main__':
    main()
