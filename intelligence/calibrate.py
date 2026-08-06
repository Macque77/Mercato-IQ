#!/usr/bin/env python3
"""Model calibration + Brier score + data-learned priors.

The single most credible thing a prediction product can show: "when we say 80%, it
happens ~80% of the time." This measures exactly that.

For every RESOLVED story (completed / false / collapsed) we compute what the completion
model WOULD have predicted from its sources' reliability, then compare to the actual
0/1 outcome:

  * calibration curve -- bucket predictions and, per bucket, show mean predicted vs the
    real completion rate + sample size. A well-calibrated model tracks the diagonal.
  * Brier score       -- mean squared error of the probabilities (lower = better), shown
    against the base-rate baseline so the lift is obvious.

It also LEARNS the stage priors from the data (the actual completion rate at each stage)
and writes them to data/stage_priors.json, which stories.completion_confidence prefers
over the hand-set defaults -- so the model calibrates itself as history accrues.

Writes data/calibration.json; prints the curve. Usage: python3 intelligence/calibrate.py
"""
import json
import math
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import claim_store as cs  # noqa: E402
import stories as st  # noqa: E402
import score as sc  # noqa: E402

CAL_PATH = os.path.join(cs.DATA_DIR, 'calibration.json')
PRIORS_PATH = os.path.join(cs.DATA_DIR, 'stage_priors.json')


def _logit(p):
    p = min(0.98, max(0.02, p))
    return math.log(p / (1 - p))


def learn_stage_priors(stories):
    """Empirical completion rate per stage -> logit, from resolved stories. Written for
    completion_confidence to use instead of the hand-set priors."""
    tally = {}
    for s in stories:
        if s['outcome'] not in ('completed', 'false', 'collapsed'):
            continue
        stg = s['stage']
        t = tally.setdefault(stg, [0, 0])
        t[1] += 1
        if s['outcome'] == 'completed':
            t[0] += 1
    priors = {}
    for stg, (comp, tot) in tally.items():
        # Laplace-smoothed rate so a tiny sample doesn't produce 0/1 extremes.
        rate = (comp + 1) / (tot + 2)
        priors[stg] = {'logit': round(_logit(rate), 3), 'rate': round(comp / tot, 3),
                       'n': tot}
    return priors


def build():
    claims = cs.load_claims()
    resolutions = cs.load_resolutions()
    stories = st.build_stories(claims, resolutions)
    ranked, thin, live, tally = sc.build(min_resolved=1)
    scoremap = {r['source_key']: r['score'] for r in (ranked + thin) if r.get('score') is not None}

    resolved = [s for s in stories if s['outcome'] in ('completed', 'false', 'collapsed')]
    preds = []
    for s in resolved:
        p = st.completion_confidence(s, scoremap)
        actual = 1.0 if s['outcome'] == 'completed' else 0.0
        preds.append((p, actual))

    n = len(preds)
    base_rate = (sum(a for _, a in preds) / n) if n else 0.0
    brier = (sum((p - a) ** 2 for p, a in preds) / n) if n else None
    baseline_brier = (sum((base_rate - a) ** 2 for _, a in preds) / n) if n else None

    # calibration buckets (deciles)
    buckets = []
    for i in range(10):
        lo, hi = i / 10.0, (i + 1) / 10.0
        b = [(p, a) for p, a in preds if (lo <= p < hi or (i == 9 and p == 1.0))]
        if b:
            buckets.append({'lo': lo, 'hi': hi, 'n': len(b),
                            'avg_pred': round(sum(p for p, _ in b) / len(b), 3),
                            'actual_rate': round(sum(a for _, a in b) / len(b), 3)})

    priors = learn_stage_priors(stories)
    return {'n_resolved': n, 'base_rate': round(base_rate, 3),
            'brier': round(brier, 4) if brier is not None else None,
            'baseline_brier': round(baseline_brier, 4) if baseline_brier is not None else None,
            'skill': (round(1 - brier / baseline_brier, 3)
                      if brier is not None and baseline_brier else None),
            'buckets': buckets, 'learned_priors': priors}


def main():
    out = build()
    os.makedirs(cs.DATA_DIR, exist_ok=True)
    with open(CAL_PATH, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
    with open(PRIORS_PATH, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(out['learned_priors'], f, ensure_ascii=False, indent=1)

    print(f"\n  MODEL CALIBRATION   ({out['n_resolved']} resolved, base rate {int(out['base_rate']*100)}%)\n")
    print(f"  Brier {out['brier']}  vs baseline {out['baseline_brier']}  "
          f"(skill {out['skill']})   lower Brier = better; skill>0 = beats guessing base rate\n")
    print(f"  {'predicted':>10}  {'actual':>8}  {'n':>4}   reliability")
    print("  " + "-" * 48)
    for b in out['buckets']:
        bar = '#' * round(b['actual_rate'] * 20)
        print(f"  {int(b['avg_pred']*100):>8}%   {int(b['actual_rate']*100):>6}%  {b['n']:>4}   {bar}")
    print("\n  Learned stage priors (data completion rate):")
    for stg in ('interest', 'talks', 'advanced', 'here-we-go'):
        p = out['learned_priors'].get(stg)
        if p:
            print(f"    {stg:<12} {int(p['rate']*100):>3}%  (n={p['n']})")


if __name__ == '__main__':
    main()
