#!/usr/bin/env python3
"""Decide which clubs actually need a Phase 1 (Claude + internet) research
pass this sync, instead of always re-researching every club in scope.

Why this exists (2026-08-04): the "streamline the data pull" request -- Phase
1 research is the only expensive, slow, internet-touching step in the
pipeline (see engine/apply_research.sh's header for the full Phase 0/1/2
picture); Phase 2 is already a pure script with no LLM/network calls. But
until now, a "refresh" always meant re-researching every club in scope,
whether or not anything had actually changed for that club since the last
pass. Most hours, most clubs have no new rumour at all, so most of that cost
is redundant. This script targets Phase 1 at only the clubs worth spending a
research pass on:

  1. Any club a Phase 0 poll hit (engine/poll_feeds.py) mentions by name --
     matched by a simple case-insensitive substring match of the club's
     display name (BRAND.club in clubs/<slug>.data.js) against poll headline
     titles. Loose on purpose (a headline is a LEAD, not proof), same
     philosophy as poll_feeds.py's own keyword filter.
  2. Any club not researched within --stale-hours (default: 6h if any
     tracked league is inside an active transfer window per
     engine/windows.json today, else 24h to match the twice-daily off-season
     sync cadence) per engine/.last_research.json (written by
     engine/inject_research.py every time a research batch touches a club,
     whether or not anything new was found -- "we checked, nothing new" still
     counts as fresh).
  3. Any club with NO entry in .last_research.json at all (never researched
     under this system, or the state file is missing/fresh-cloned) --always
     a target, same as being maximally stale.

This is advisory, not a hard gate: it recommends a target list for whoever
dispatches Phase 1 research agents (a session or a scheduled-task prompt) --
it does not itself call WebSearch/WebFetch/Agent (this script has no network
access at all, deliberately, since Phase 1 needs an LLM to do the actual
research).

Usage:
    python3 engine/pick_research_targets.py                        # all 304 clubs
    python3 engine/pick_research_targets.py --nation Spain
    python3 engine/pick_research_targets.py --league "Premier League"
    python3 engine/pick_research_targets.py --clubs arsenal,chelsea
    python3 engine/pick_research_targets.py --poll-output /tmp/poll.json
    python3 engine/pick_research_targets.py --stale-hours 12
    python3 engine/pick_research_targets.py --json               # machine-readable
"""
import glob
import json
import os
import re
import sys
from datetime import date, datetime, timezone

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import js_obj_utils as jou

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLUBS_DIR = os.path.join(REPO, 'clubs')
LAST_RESEARCH_PATH = os.path.join(REPO, 'engine', '.last_research.json')
WINDOWS_PATH = os.path.join(REPO, 'engine', 'windows.json')


def load_roster():
    """slug -> {slug, name, nation, league}"""
    roster = {}
    for path in sorted(glob.glob(os.path.join(CLUBS_DIR, '*.data.js'))):
        content = open(path, encoding='utf-8').read()
        slug_m = re.search(r'slug\s*:\s*"([^"]+)"', content)
        name_m = re.search(r'club\s*:\s*"([^"]+)"', content)
        bc_m = re.search(r'breadcrumb\s*:\s*\[([^\]]*)\]', content)
        if not slug_m:
            continue
        slug = slug_m.group(1)
        name = name_m.group(1) if name_m else slug
        nation, league = None, None
        if bc_m:
            parts = re.findall(r'["\']([^"\']*)["\']', bc_m.group(1))
            if len(parts) >= 2:
                nation, league = parts[0], parts[1]
        roster[slug] = {'slug': slug, 'name': name, 'nation': nation, 'league': league}
    return roster


def load_last_research():
    if os.path.exists(LAST_RESEARCH_PATH):
        try:
            return json.load(open(LAST_RESEARCH_PATH, encoding='utf-8'))
        except (json.JSONDecodeError, OSError):
            return {}
    return {}


def any_window_active_today():
    if not os.path.exists(WINDOWS_PATH):
        return False
    windows = json.load(open(WINDOWS_PATH, encoding='utf-8'))['windows']
    today = date.today()
    for w in windows.values():
        for season in ('summer', 'winter'):
            try:
                open_d = datetime.strptime(w[f'{season}_open'], '%Y-%m-%d').date()
                close_d = datetime.strptime(w[f'{season}_close'], '%Y-%m-%d').date()
            except (KeyError, ValueError):
                continue
            if open_d <= today <= close_d:
                return True
    return False


def load_poll_hits(path):
    if not path:
        return []
    data = json.load(open(path, encoding='utf-8'))
    # Accept either poll_feeds.py's raw items or its --json filtered output.
    items = data.get('new_items', data) if isinstance(data, dict) else data
    titles = []
    for it in items:
        t = it.get('title') if isinstance(it, dict) else None
        if t:
            titles.append(t)
    return titles


def main():
    args = sys.argv[1:]

    def opt(name, default=None):
        if name in args:
            i = args.index(name)
            return args[i + 1]
        return default

    nation_filter = opt('--nation')
    league_filter = opt('--league')
    clubs_filter = opt('--clubs')
    poll_output = opt('--poll-output')
    stale_hours_arg = opt('--stale-hours')
    as_json = '--json' in args

    roster = load_roster()

    if clubs_filter:
        wanted = set(clubs_filter.split(','))
        roster = {s: v for s, v in roster.items() if s in wanted}
    if nation_filter:
        roster = {s: v for s, v in roster.items() if v['nation'] == nation_filter}
    if league_filter:
        roster = {s: v for s, v in roster.items() if v['league'] == league_filter}

    stale_hours = int(stale_hours_arg) if stale_hours_arg else (6 if any_window_active_today() else 24)
    last_research = load_last_research()
    poll_titles = load_poll_hits(poll_output)

    now = datetime.now(timezone.utc)
    targets = []
    skipped = []

    for slug, info in sorted(roster.items()):
        reasons = []

        # Reason 1: poll-flagged by name.
        name_lower = info['name'].lower()
        if any(name_lower in t.lower() for t in poll_titles):
            reasons.append('poll-flagged')

        # Reason 2/3: stale or never researched.
        last_seen_raw = last_research.get(slug)
        if not last_seen_raw:
            reasons.append('never-researched')
        else:
            last_seen = jou.parse_iso(last_seen_raw)
            if last_seen is None:
                reasons.append('unparseable-last-research-timestamp')
            else:
                age_hours = (now - last_seen).total_seconds() / 3600.0
                if age_hours >= stale_hours:
                    reasons.append(f'stale ({age_hours:.1f}h >= {stale_hours}h threshold)')

        if reasons:
            targets.append({'slug': slug, 'name': info['name'], 'nation': info['nation'],
                             'league': info['league'], 'reasons': reasons})
        else:
            skipped.append(slug)

    if as_json:
        print(json.dumps({
            'stale_hours_threshold': stale_hours,
            'targets': targets,
            'skipped_count': len(skipped),
            'total_considered': len(roster),
        }, indent=2))
    else:
        print(f"Research targeting: {len(roster)} clubs considered, "
              f"{stale_hours}h staleness threshold ({'active window' if any_window_active_today() else 'off-season'}).")
        print(f"{len(targets)} club(s) need a Phase 1 pass, {len(skipped)} skipped (recently checked, nothing flagged).")
        for t in targets:
            print(f"  {t['slug']} ({t['name']}, {t['league']}): {', '.join(t['reasons'])}")


if __name__ == '__main__':
    main()
