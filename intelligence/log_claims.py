#!/usr/bin/env python3
"""Live claim capture -- append this run's claims + resolutions to the store.

Runs in the assemble stage after engine/inject. Reads the run's research.json (the
same structured output inject consumes) and:
  * incoming/outgoing rumours  -> CLAIMS, stamped with NOW as the observation time
  * confirmed_in/out           -> RESOLUTIONS (that move happened this run)

Because upsert_claims keeps the EARLIEST ts per (source, player, move), a rumour first
seen today keeps today's timestamp even as later runs re-observe it -- so "lead time"
(confirmation minus first-report) is measured honestly from when a source ACTUALLY
broke it, not from the last time we saw it. This is what makes the accruing dataset
worth something: real, properly-anchored history that compounds every hour.

Usage:  python3 intelligence/log_claims.py [research.json]
"""
import json
import os
import sys
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
sys.path.insert(0, HERE)
import claim_store as cs  # noqa: E402


def _now():
    return datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')


def _stage(item):
    p = int(item.get('prob') or 0)
    txt = (str(item.get('report', '')) + ' ' + str(item.get('note', ''))).lower()
    if 'here we go' in txt or 'medical' in txt or p >= 90:
        return 'here-we-go'
    if 'agreed' in txt or 'agreement' in txt or 'advanced' in txt or p >= 70:
        return 'advanced'
    if 'talks' in txt or 'bid' in txt or 'offer' in txt or p >= 45:
        return 'talks'
    return 'interest'


def capture(research, ts=None):
    ts = ts or _now()
    claims, resolutions = [], []
    for club in research.get('clubs', []):
        slug = club.get('slug', '')
        for key, direction in (('incoming', 'in'), ('outgoing', 'out')):
            for it in club.get(key, []):
                name, src = it.get('name'), it.get('src', '')
                if not name or not cs.is_attributable(src):
                    continue
                other = it.get('club', '')
                claims.append(cs.make_claim(
                    ts=ts, source=src, player=name, club_slug=slug, direction=direction,
                    from_club=(other if direction == 'in' else ''),
                    to_club=(other if direction == 'out' else slug.replace('-', ' ')),
                    stage=_stage(it), prob=it.get('prob'),
                    source_tier=it.get('tier', 3), source_url=it.get('sourceUrl', ''),
                    text=it.get('report', '')))
        for key, direction in (('confirmed_in', 'in'), ('confirmed_out', 'out')):
            for it in club.get(key, []):
                name = it.get('name')
                if not name:
                    continue
                other = it.get('club', '')
                to_club = slug.replace('-', ' ') if direction == 'in' else other
                resolutions.append(cs.make_resolution(
                    ts=ts, player=name, to_club=to_club or slug,
                    confirmed_source=it.get('src', '')))
    return claims, resolutions


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(REPO, 'research.json')
    if not os.path.exists(path):
        print(f"log_claims: no {path}; nothing to capture.")
        return
    research = json.load(open(path, encoding='utf-8'))
    claims, resolutions = capture(research)
    added, updated = cs.upsert_claims(claims)
    radded = cs.add_resolutions(resolutions)
    print(f"log_claims: +{added} new claim(s), {updated} re-observed; +{radded} resolution(s).")


if __name__ == '__main__':
    main()
