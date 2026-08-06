#!/usr/bin/env python3
"""Enriched scorer — the full journalist scorecard + a transfer-completion feed.

Beyond raw accuracy, per source we compute the metrics that actually characterise a
transfer reporter (all requested, plus a few that fall out for free):

  accuracy        of RESOLVED claims, % that went to the club they named
  completion_rate of ALL their claims, % that have completed ("came to fruition")
  false_reports   times the player demonstrably went ELSEWHERE (or deal collapsed)
  scoops/follows  times they BROKE a story first vs re-reported someone else's
  originality     scoops / (scoops+follows) — the inverse of "just re-reporting"
  avg_lead_days   how far AHEAD of confirmation they broke it — their real value
  calibration     completion rate split by the confidence they claimed
                  (interest / talks / advanced / here-we-go) — are they crying wolf?
  fee_accuracy    when both a claimed and a confirmed fee exist, how close (0..1)
  score           volume-adjusted composite reliability (0..1), used to weight stories

It also emits the product's headline: for every PENDING story, a COMPLETION LIKELIHOOD
built from its sources' reliability (stories.completion_confidence).

Outputs intelligence/data/scores.json and stories.json; prints the Power Ranking.
Usage:  python3 intelligence/score.py [--min N] [--json]
"""
import json
import os
import sys
from collections import defaultdict
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import claim_store as cs  # noqa: E402
import stories as st  # noqa: E402

SCORES_PATH = os.path.join(cs.DATA_DIR, 'scores.json')
STORIES_PATH = os.path.join(cs.DATA_DIR, 'stories.json')
MIN_RESOLVED = 4
PSEUDO = 2
FEE_TOL = 0.20  # a claimed fee within 20% of confirmed counts as accurate


def _fee_accuracy(claimed, confirmed):
    if claimed is None or confirmed is None or confirmed <= 0:
        return None
    return 1.0 if abs(claimed - confirmed) <= FEE_TOL * confirmed else 0.0


def build(min_resolved=MIN_RESOLVED):
    claims = cs.load_claims()
    resolutions = cs.load_resolutions()
    stories = st.build_stories(claims, resolutions)

    now = datetime.now(timezone.utc)
    agg = defaultdict(lambda: {
        'source': '', 'tier': 3, 'stories': 0, 'right': 0, 'wrong': 0, 'pending': 0,
        'confident_miss': 0, 'scoops': 0, 'follows': 0, 'leads': [], 'fees': [],
        'fee_diffs': [], 'rec_right': 0.0, 'rec_resolved': 0.0,
        'cal': defaultdict(lambda: [0, 0])})  # stage -> [completed, resolved]

    def _recency_w(first_ts):
        d = st.parse_ts(first_ts)
        if not d:
            return 1.0
        age = (now - d).total_seconds() / 86400.0
        return 0.5 ** (max(0.0, age) / 180.0)  # ~6-month half-life

    for story in stories:
        confirmed_fee = story.get('confirmed_fee')
        conf_dt = st.parse_ts(story.get('confirmed_at', ''))
        outcome = story['outcome']
        for sk, s in story['sources'].items():
            a = agg[sk]
            a['source'] = s['source']
            a['tier'] = min(a['tier'], s['tier'])
            a['stories'] += 1
            if s.get('is_scoop', True):
                a['scoops'] += 1
            else:
                a['follows'] += 1
            stage = s.get('stage', 'interest')
            high_conf = st.STAGE_RANK.get(stage, 0) >= 2  # advanced / here-we-go
            w = _recency_w(s.get('first_ts', ''))

            if outcome == 'completed':
                a['right'] += 1
                a['rec_right'] += w
                a['rec_resolved'] += w
                a['cal'][stage][0] += 1
                a['cal'][stage][1] += 1
                sdt = st.parse_ts(s.get('first_ts', ''))
                if sdt and conf_dt:
                    ld = (conf_dt - sdt).total_seconds() / 86400.0
                    if -2 <= ld <= 400:
                        a['leads'].append(ld)
                fa = _fee_accuracy(s.get('fee'), confirmed_fee)
                if fa is not None:
                    a['fees'].append(fa)
                if s.get('fee') is not None and confirmed_fee not in (None, 0):
                    a['fee_diffs'].append(s['fee'] - confirmed_fee)  # +over / -under
            elif outcome == 'false':
                # player went elsewhere: a miss regardless of stage, worse if confident
                a['wrong'] += 1
                a['rec_resolved'] += w
                a['cal'][stage][1] += 1
                if high_conf:
                    a['confident_miss'] += 1
            elif outcome == 'collapsed':
                # deal died. Only held against a source that claimed advanced/here-we-go;
                # a mere 'interest' floated and dropped is not a wrong report.
                if high_conf:
                    a['wrong'] += 1
                    a['rec_resolved'] += w
                    a['cal'][stage][1] += 1
                    a['confident_miss'] += 1
                else:
                    a['pending'] += 1
            else:
                a['pending'] += 1

    rows = []
    for sk, a in agg.items():
        resolved = a['right'] + a['wrong']
        acc = (a['right'] / resolved) if resolved else None
        adjusted = (a['right'] + PSEUDO) / (resolved + 2 * PSEUDO) if resolved else None
        completion = (a['right'] / a['stories']) if a['stories'] else None
        breaks = a['scoops'] + a['follows']
        originality = (a['scoops'] / breaks) if breaks else None
        avg_lead = (sum(a['leads']) / len(a['leads'])) if a['leads'] else None
        fee_acc = (sum(a['fees']) / len(a['fees'])) if a['fees'] else None
        calibration = {stg: round(c[0] / c[1], 2) for stg, c in a['cal'].items() if c[1]}
        recent = ((a['rec_right'] + PSEUDO) / (a['rec_resolved'] + 2 * PSEUDO)
                  if a['rec_resolved'] else None)
        fee_bias = (sum(a['fee_diffs']) / len(a['fee_diffs'])) if a['fee_diffs'] else None
        break_rate = (a['scoops'] / a['stories']) if a['stories'] else None
        rows.append({
            'source': a['source'], 'tier': a['tier'], 'source_key': sk,
            'stories': a['stories'], 'resolved': resolved,
            'right': a['right'], 'false_reports': a['wrong'], 'pending': a['pending'],
            'confident_miss': a['confident_miss'],
            'accuracy': round(acc, 3) if acc is not None else None,
            'recent_score': round(recent, 3) if recent is not None else None,
            'completion_rate': round(completion, 3) if completion is not None else None,
            'scoops': a['scoops'], 'follows': a['follows'],
            'originality': round(originality, 3) if originality is not None else None,
            'break_rate': round(break_rate, 3) if break_rate is not None else None,
            'avg_lead_days': round(avg_lead, 1) if avg_lead is not None else None,
            'fee_accuracy': round(fee_acc, 2) if fee_acc is not None else None,
            'fee_bias': round(fee_bias, 1) if fee_bias is not None else None,
            'calibration': calibration,
            'score': round(adjusted, 3) if adjusted is not None else None,
        })
    rows.sort(key=lambda r: (r['score'] is None, -(r['score'] or 0), -r['resolved']))

    # completion likelihood for live stories, using the scores we just built
    scoremap = {r['source_key']: r['score'] for r in rows if r['score'] is not None}
    live = []
    for story in stories:
        if story['outcome'] != 'pending':
            continue
        conf = st.completion_confidence(story, scoremap)
        # momentum: escalating stage or multi-source & fresh = heating; long-quiet = cooling
        last_dt = st.parse_ts(story.get('last_ts', ''))
        age = ((now - last_dt).total_seconds() / 86400.0) if last_dt else 0
        escalated = st.STAGE_RANK.get(story['stage'], 0) > st.STAGE_RANK.get(story.get('first_stage', 'interest'), 0)
        if age > 21:
            momentum = 'cooling'
        elif escalated or (len(story['sources']) >= 3 and age <= 7):
            momentum = 'heating'
        else:
            momentum = 'steady'
        live.append({
            'player': story['player'], 'to_club': story['to_club'], 'stage': story['stage'],
            'completion_likelihood': round(conf, 3), 'momentum': momentum,
            'club_slug': story.get('club_slug', ''),
            'sources': sorted({s['source'] for s in story['sources'].values()}),
            'source_count': len(story['sources']),
            'first_ts': story['first_ts'], 'last_ts': story['last_ts'],
        })
    live.sort(key=lambda x: -x['completion_likelihood'])

    ranked = [r for r in rows if r['resolved'] >= min_resolved]
    thin = [r for r in rows if r['resolved'] < min_resolved]
    tally = {}
    for s in stories:
        tally[s['outcome']] = tally.get(s['outcome'], 0) + 1
    return ranked, thin, live, tally


def main():
    min_resolved = MIN_RESOLVED
    if '--min' in sys.argv:
        min_resolved = int(sys.argv[sys.argv.index('--min') + 1])
    ranked, thin, live, tally = build(min_resolved)

    os.makedirs(cs.DATA_DIR, exist_ok=True)
    with open(SCORES_PATH, 'w', encoding='utf-8', newline='\n') as f:
        json.dump({'min_resolved': min_resolved, 'story_outcomes': tally,
                   'ranked': ranked, 'insufficient_sample': thin}, f, ensure_ascii=False, indent=1)
    with open(STORIES_PATH, 'w', encoding='utf-8', newline='\n') as f:
        json.dump({'live_stories': live}, f, ensure_ascii=False, indent=1)

    if '--json' in sys.argv:
        print(json.dumps({'ranked': ranked[:15], 'live': live[:15]}, ensure_ascii=False, indent=1))
        return

    print(f"\n  MERCATO-IQ JOURNALIST POWER RANKING   (min {min_resolved} resolved · "
          f"stories {tally})\n")
    hdr = f"  {'#':>2}  {'Source':<26}{'Score':>6}{'Acc':>5}{'Excl':>6}{'False':>6}{'Lead':>7}{'Fee':>5}"
    print(hdr + "\n  " + "-" * (len(hdr) - 2))
    for i, r in enumerate(ranked[:25], 1):
        acc = f"{int(r['accuracy']*100)}%" if r['accuracy'] is not None else "  -"
        exc = f"{int(r['originality']*100)}%" if r['originality'] is not None else "  -"
        lead = f"{r['avg_lead_days']}d" if r['avg_lead_days'] is not None else "  -"
        fee = f"{int(r['fee_accuracy']*100)}%" if r['fee_accuracy'] is not None else " -"
        print(f"  {i:>2}  {r['source'][:26]:<26}{r['score']:>6.2f}{acc:>5}{exc:>6}"
              f"{r['false_reports']:>6}{lead:>7}{fee:>5}")
    print(f"\n  {len(ranked)} ranked, {len(thin)} insufficient sample.")

    if live:
        print("\n  TOP LIVE STORIES BY COMPLETION LIKELIHOOD\n")
        for s in live[:10]:
            src = ', '.join(s['sources'][:3]) + ('…' if s['source_count'] > 3 else '')
            print(f"  {int(s['completion_likelihood']*100):>3}%  {s['player'][:22]:<22} -> "
                  f"{s['to_club'][:18]:<18} [{s['stage']:<10}] {src}")


if __name__ == '__main__':
    main()
