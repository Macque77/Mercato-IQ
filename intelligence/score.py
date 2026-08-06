#!/usr/bin/env python3
"""Scorer -- turn claims + resolutions into per-source reliability scorecards.

For every claim we ask: did that move actually happen?
  * a resolution exists for (player, to_club)                 -> RIGHT  (they called it)
  * a resolution exists for the player but a DIFFERENT to_club -> WRONG  (wrong destination)
  * no resolution for the player yet                          -> PENDING (unresolved)

Per source we then compute accuracy and a VOLUME-ADJUSTED score, because 1-from-1 must
not outrank 40-from-45. The adjustment shrinks toward 0.5 with a pseudo-count
(Laplace/Bayesian): adjusted = (right + a) / (right + wrong + a + b), a=b=2. Sources
with too few resolved claims are listed separately as "insufficient sample".

Writes intelligence/data/scores.json and prints a Power Ranking. Also emits a
confidence weight per source (0..1) that the site can later use to score STORIES.

Usage:  python3 intelligence/score.py [--min N] [--json]
"""
import json
import os
import sys
from collections import defaultdict
from datetime import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import claim_store as cs  # noqa: E402

SCORES_PATH = os.path.join(cs.DATA_DIR, 'scores.json')
MIN_RESOLVED = 4          # min resolved claims to appear in the ranking
PSEUDO = 2                # Laplace pseudo-count each side


def _parse_ts(s):
    try:
        return datetime.fromisoformat((s or '').replace('Z', '+00:00'))
    except Exception:
        return None


def _lead_days(claim_ts, confirm_ts):
    a, b = _parse_ts(claim_ts), _parse_ts(confirm_ts)
    if a and b:
        return (b - a).total_seconds() / 86400.0
    return None


def build_scores(min_resolved=MIN_RESOLVED):
    claims = [c for c in cs.load_claims() if cs.is_attributable(c.get('source', ''))]
    resolutions = cs.load_resolutions()

    # index resolutions by player: player_key -> list of (to_club_key, confirmed_at)
    res_by_player = defaultdict(list)
    for r in resolutions:
        res_by_player[r['player_key']].append((r['to_club_key'], r.get('confirmed_at', '')))

    agg = defaultdict(lambda: {'source': '', 'tier': 3, 'claims': 0, 'right': 0,
                               'wrong': 0, 'pending': 0, 'leads': []})
    for c in claims:
        s = agg[c['source_key']]
        s['source'] = c['source']
        s['tier'] = min(s['tier'], int(c.get('source_tier') or 3))
        s['claims'] += 1
        outcomes = res_by_player.get(c['player_key'])
        if not outcomes:
            s['pending'] += 1
            continue
        to_key = c.get('to_club') and cs.norm(c['to_club']) or ''
        hit = next((ca for (tk, ca) in outcomes if tk and tk == to_key), None)
        if hit is not None:
            s['right'] += 1
            ld = _lead_days(c['ts'], hit)
            if ld is not None and -2 <= ld <= 400:
                s['leads'].append(ld)
        else:
            # player resolved, but not to the club this source claimed
            s['wrong'] += 1

    rows = []
    for key, s in agg.items():
        resolved = s['right'] + s['wrong']
        acc = (s['right'] / resolved) if resolved else None
        adjusted = (s['right'] + PSEUDO) / (resolved + 2 * PSEUDO) if resolved else None
        avg_lead = (sum(s['leads']) / len(s['leads'])) if s['leads'] else None
        rows.append({
            'source': s['source'], 'tier': s['tier'],
            'claims': s['claims'], 'resolved': resolved,
            'right': s['right'], 'wrong': s['wrong'], 'pending': s['pending'],
            'accuracy': round(acc, 3) if acc is not None else None,
            'score': round(adjusted, 3) if adjusted is not None else None,
            'avg_lead_days': round(avg_lead, 1) if avg_lead is not None else None,
        })
    rows.sort(key=lambda r: (r['score'] is None, -(r['score'] or 0), -r['resolved']))
    ranked = [r for r in rows if r['resolved'] >= min_resolved]
    thin = [r for r in rows if r['resolved'] < min_resolved]
    return ranked, thin


def main():
    min_resolved = MIN_RESOLVED
    if '--min' in sys.argv:
        min_resolved = int(sys.argv[sys.argv.index('--min') + 1])
    ranked, thin = build_scores(min_resolved)

    payload = {'generated': None, 'min_resolved': min_resolved,
               'ranked': ranked, 'insufficient_sample': thin}
    os.makedirs(cs.DATA_DIR, exist_ok=True)
    with open(SCORES_PATH, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(payload, f, ensure_ascii=False, indent=1)

    if '--json' in sys.argv:
        print(json.dumps(payload, ensure_ascii=False, indent=1))
        return

    print(f"\n  MERCATO-IQ JOURNALIST POWER RANKING  (min {min_resolved} resolved claims)\n")
    print(f"  {'#':>2}  {'Source':<28} {'Score':>6} {'Acc':>5} {'Right':>6} {'Wrong':>6} {'Lead':>6}")
    print("  " + "-" * 68)
    for i, r in enumerate(ranked[:25], 1):
        acc = f"{int(r['accuracy']*100)}%" if r['accuracy'] is not None else "  -"
        lead = f"{r['avg_lead_days']}d" if r['avg_lead_days'] is not None else "  -"
        print(f"  {i:>2}  {r['source'][:28]:<28} {r['score']:>6.2f} {acc:>5} "
              f"{r['right']:>6} {r['wrong']:>6} {lead:>6}")
    print(f"\n  {len(ranked)} ranked, {len(thin)} with insufficient sample. "
          f"Scores -> {os.path.relpath(SCORES_PATH, cs.REPO if hasattr(cs,'REPO') else HERE)}")


if __name__ == '__main__':
    main()
