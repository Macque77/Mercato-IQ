#!/usr/bin/env python3
"""Story clustering + completion-likelihood model.

A STORY is every claim about the same move — one (player -> destination club) — across
all sources and time. Clustering the claims is what lets the engine answer the questions
that actually matter about a journalist:

  * who reported it FIRST (the scoop / exclusive) vs who re-reported it (a follower)
  * did it COME TO FRUITION (complete), go to a DIFFERENT club (a false report), or is it
    still pending
  * how far AHEAD of confirmation the breaker was (lead time — their real value)

and, combining a story's sources by their track record, it produces a
**completion likelihood** for live stories — the headline number the product sells.

Pure functions over the claim store; no side effects. Used by score.py.
"""
import json
import os
import re
import sys
from datetime import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import claim_store as cs  # noqa: E402

# Claim confidence ladder, least -> most committed. Used for calibration and the
# completion model's stage prior.
STAGE_RANK = {'interest': 0, 'talks': 1, 'advanced': 2, 'here-we-go': 3}
# Prior log-odds that a move at this stage completes, before weighing the sources.
# Hand-set defaults; overridden by data-learned priors (data/stage_priors.json, written
# by calibrate.py) once enough outcomes exist, so the model calibrates itself over time.
STAGE_PRIOR_LOGIT = {'interest': -1.1, 'talks': -0.4, 'advanced': 0.5, 'here-we-go': 2.2}


def _stage_priors():
    path = os.path.join(cs.DATA_DIR, 'stage_priors.json')
    priors = dict(STAGE_PRIOR_LOGIT)
    try:
        learned = json.load(open(path, encoding='utf-8'))
        for stg, v in learned.items():
            # only trust a learned prior once it has a reasonable sample
            if isinstance(v, dict) and v.get('n', 0) >= 8 and 'logit' in v:
                priors[stg] = v['logit']
    except Exception:
        pass
    return priors

# Two claims count as the "same scoop" only if separated by more than this — a burst
# inside the window is treated as independent/simultaneous, not follow-on re-reporting.
SCOOP_WINDOW_HOURS = 2


def parse_ts(s):
    try:
        return datetime.fromisoformat((s or '').replace('Z', '+00:00'))
    except Exception:
        return None


def parse_fee(s):
    """'£75m' / '€50m' / '£20-30m' / 'around 45m' -> millions as a float (range midpoint).
    Returns None if no number, or if it reads as free/loan/undisclosed."""
    if not s:
        return None
    low = s.lower()
    if any(w in low for w in ('free', 'loan', 'undisclosed', 'swap', 'n/a')):
        return 0.0 if 'free' in low else None
    nums = re.findall(r'(\d+(?:\.\d+)?)', s.replace(',', ''))
    if not nums:
        return None
    vals = [float(n) for n in nums[:2]]
    val = sum(vals) / len(vals)  # midpoint of a range
    if 'k' in low and val > 1000:
        val = val / 1000.0
    return round(val, 1)


def _resolution_index(resolutions):
    idx = {}
    for r in resolutions:
        idx.setdefault(r['player_key'], []).append(r)
    return idx


def build_stories(claims, resolutions):
    """Cluster claims by (player_key, to_club_key). Returns a list of story dicts:
        {player, player_key, to_club, to_club_key, stage, first_ts, last_ts,
         breaker (source_key), sources: {source_key: {source, first_ts, tier, stage, fee,
                                                       is_scoop}},
         outcome: completed|false|pending, confirmed_at, confirmed_to_key, confirmed_fee}
    """
    res_idx = _resolution_index(resolutions)
    groups = {}
    for c in claims:
        if not cs.is_attributable(c.get('source', '')):
            continue
        pk = c.get('player_key', '')
        tk = cs.norm(c.get('to_club', '')) or ''
        if not pk or not tk:
            continue
        groups.setdefault((pk, tk), []).append(c)

    stories = []
    for (pk, tk), cl in groups.items():
        cl.sort(key=lambda x: x.get('ts', ''))
        # destination club's slug = the slug of an incoming claim (where this IS the dest)
        dest_slug = next((c.get('club_slug', '') for c in cl if c.get('direction') == 'in'), '')
        # one entry per source (their earliest claim in this story)
        by_src = {}
        for c in cl:
            sk = c['source_key']
            if sk not in by_src or c['ts'] < by_src[sk]['ts']:
                by_src[sk] = c
        ordered = sorted(by_src.values(), key=lambda x: x.get('ts', ''))
        breaker_ts = ordered[0]['ts']
        b_dt = parse_ts(breaker_ts)

        sources = {}
        for c in ordered:
            dt = parse_ts(c['ts'])
            # scoop = reported at (or within the window of) the earliest report
            is_scoop = True
            if b_dt and dt and (dt - b_dt).total_seconds() > SCOOP_WINDOW_HOURS * 3600:
                is_scoop = False
            sources[c['source_key']] = {
                'source': c['source'], 'first_ts': c['ts'], 'tier': int(c.get('source_tier') or 3),
                'stage': c.get('stage', 'interest'), 'fee': parse_fee(c.get('fee', '') or c.get('text', '')),
                'is_scoop': is_scoop,
            }
        stage = max((s['stage'] for s in sources.values()), key=lambda st: STAGE_RANK.get(st, 0))

        # deal timeline: who reported it, when, at what stage (per-source first mention, in order)
        timeline = [{'ts': c['ts'], 'source': c['source'], 'stage': c.get('stage', 'interest'),
                     'tier': int(c.get('source_tier') or 3), 'url': c.get('source_url', '')}
                    for c in ordered]

        # outcome. Only consider resolutions in a plausible window of the first report,
        # so a claim isn't "resolved" by the same player's unrelated move a season later.
        def _in_window(r):
            rd = parse_ts(r.get('confirmed_at', ''))
            if not b_dt or not rd:
                return True  # missing timestamps (snapshot seed) -> don't gate
            days = (rd - b_dt).total_seconds() / 86400.0
            return -30 <= days <= 250

        outcome, confirmed_at, confirmed_to_key, confirmed_fee = 'pending', '', '', None
        rs = [r for r in res_idx.get(pk, []) if _in_window(r)]
        # precedence: completed > false > collapsed > pending
        hit = next((r for r in rs if r.get('outcome', 'confirmed') == 'confirmed'
                    and r['to_club_key'] == tk), None)
        if hit:
            outcome, confirmed_at, confirmed_to_key = 'completed', hit.get('confirmed_at', ''), tk
            confirmed_fee = parse_fee(hit.get('fee', ''))
        else:
            elsewhere = next((r for r in rs if r.get('outcome', 'confirmed') == 'confirmed'
                              and r['to_club_key'] and r['to_club_key'] != tk), None)
            if elsewhere:
                outcome, confirmed_at, confirmed_to_key = 'false', elsewhere.get('confirmed_at', ''), elsewhere['to_club_key']
            else:
                collapsed = next((r for r in rs if r.get('outcome') == 'collapsed'
                                  and r['to_club_key'] == tk), None)
                if collapsed:
                    outcome, confirmed_at = 'collapsed', collapsed.get('confirmed_at', '')

        stories.append({
            'player': cl[0].get('player', ''), 'player_key': pk,
            'to_club': cl[0].get('to_club', ''), 'to_club_key': tk, 'club_slug': dest_slug,
            'stage': stage, 'first_stage': ordered[0].get('stage', 'interest'),
            'first_ts': breaker_ts, 'last_ts': ordered[-1]['ts'],
            'breaker': ordered[0]['source_key'], 'timeline': timeline,
            'sources': sources, 'outcome': outcome, 'confirmed_at': confirmed_at,
            'confirmed_to_key': confirmed_to_key, 'confirmed_fee': confirmed_fee,
        })
    return stories


def _sigmoid(x):
    import math
    if x < -60:
        return 0.0
    return 1.0 / (1.0 + math.exp(-x))


def completion_confidence(story, scoremap, now=None):
    """Probability (0..1) that a PENDING story completes, from a transparent log-odds
    model: a stage prior, plus each distinct source pushing the odds up or down by how
    far its reliability sits from a coin-flip. Followers (re-reporters) count for less
    than the source who broke it. Recency decays a stale story toward the prior.

    scoremap: {source_key: reliability_score in 0..1}. Missing sources default to 0.45.
    """
    priors = _stage_priors()
    logit = priors.get(story['stage'], -0.4)
    for sk, s in story['sources'].items():
        rel = scoremap.get(sk)
        if rel is None:
            rel = 0.45  # unknown source: mild drag (unproven)
        weight = 1.8 * (rel - 0.5)           # reliable -> push up, unreliable -> push down
        if not s.get('is_scoop', True):
            weight *= 0.4                     # a follower is weak, non-independent evidence
        # tier-3 aggregators contribute less regardless of score
        if s.get('tier', 3) >= 3:
            weight *= 0.6
        logit += weight

    conf = _sigmoid(logit)

    # recency decay: half-life ~21 days from the last report, fading toward the stage prior.
    last = parse_ts(story.get('last_ts', ''))
    n = now or datetime.now(last.tzinfo) if last else None
    if last and n:
        age_days = max(0.0, (n - last).total_seconds() / 86400.0)
        decay = 0.5 ** (age_days / 21.0)
        base = _sigmoid(priors.get(story['stage'], -0.4))
        conf = base + (conf - base) * decay

    return max(0.02, min(0.98, conf))


if __name__ == '__main__':
    stories = build_stories(cs.load_claims(), cs.load_resolutions())
    by = {}
    for s in stories:
        by[s['outcome']] = by.get(s['outcome'], 0) + 1
    print(f"stories: {len(stories)}  {by}")
