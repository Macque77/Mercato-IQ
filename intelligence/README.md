# Mercato-IQ · Reliability Engine

The compounding-dataset core of the transfer-intelligence product: capture every
**claim** a source makes, resolve it against what actually **happened**, and score
each journalist/outlet's real track record. Zero API tokens — pure deterministic
Python over the pipeline's existing output.

> Why this exists: everyone reports the same rumours. Nobody quantifies *which
> reporter is right, and how far ahead*. That dataset can't be copied without the
> history — so the earlier it starts accruing, the wider the moat. See the product
> sketch for the business case.

## Data (append-only JSONL, committed = the asset)

`intelligence/data/`
- `claims.jsonl` — one line per `(source, player, move)` claim observed. De-duped by
  a stable id; the **earliest** timestamp is kept as the first-reported anchor (what
  lead-time is measured from).
- `resolutions.jsonl` — one line per confirmed move we can grade claims against.
- `scores.json` — generated per-source scorecards + the Power Ranking.

These files are committed to git on purpose — they are the product, and they grow
every run. Do not gitignore them.

## Pieces

| File | Role |
|------|------|
| `claim_store.py` | JSONL store; normalization (`player_key`, source), stable ids, upsert/dedup |
| `seed_from_site.py` | One-shot bootstrap: claims + resolutions from the 304 `clubs/*.data.js` (head start on history) |
| `log_claims.py` | Live capture from a run's `research.json` — wired into the assemble stage; runs every sweep |
| `stories.py` | Cluster claims into stories (who broke it first vs re-reported), + the completion-likelihood model |
| `score.py` | Enriched per-source scorecards → `scores.json`; live completion feed → `stories.json`; Power Ranking |

## Metrics per source (`scores.json`)

| Metric | Meaning |
|--------|---------|
| `accuracy` | Of RESOLVED claims, % that went to the club they named |
| `completion_rate` | Of ALL their claims, % that have completed ("came to fruition") |
| `false_reports` | Times the player demonstrably went ELSEWHERE (or the deal collapsed) |
| `scoops` / `follows` / `originality` | Broke it first vs re-reported; originality = the exclusivity rate |
| `avg_lead_days` | How far AHEAD of confirmation they broke it — their real value |
| `calibration` | Completion rate split by claimed stage (interest / talks / advanced / here-we-go) — crying wolf? |
| `fee_accuracy` | When both a claimed and confirmed fee exist, how close (within 20%) |
| `score` | Volume-adjusted composite (Laplace shrink toward 0.5) so 1-from-1 can't outrank 40-from-45 |

## Completion likelihood (`stories.json`)

For every live story, a transparent **log-odds** model: a stage prior (here-we-go starts
high, interest low) plus each distinct source pushing the odds up or down by how far its
reliability sits from a coin-flip. Followers count for less than the source who broke it;
tier-3 aggregators count for less; a stale story decays back toward the prior. This is the
headline number the product sells — and it's driven by, and improves with, the scores.

## Run it

```bash
python3 intelligence/seed_from_site.py      # one-time bootstrap from the live site
python3 intelligence/score.py --min 5       # regenerate scores + print the ranking
```

Live accrual is automatic: the `research-matrix.yml` assemble stage runs
`log_claims.py` then `score.py` every sweep, and commits the grown dataset.

## Honest status (validation phase)

- **The engine works**; the **dataset is thin** until it accrues — a single snapshot
  resolves few claims and gives no real lead-times. Scores get meaningful over weeks
  of hourly runs. This is the expected cold-start.
- **Resolution is the hard, important part.** v1 matches on `(player, to_club)`. Deals
  mutate and "advanced talks" can land months later; the resolver will need refining
  (partial credit, timing windows, collapse detection) before scores are *sellable*.
- Next: a public "Power Ranking" page, story-level confidence on the site, then a
  B2B feed/API — only once the numbers are robust.
