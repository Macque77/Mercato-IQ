# Automated Research Sync (GitHub Actions + Claude API)

`research-sync.yml` runs the full Mercato IQ pipeline unattended, on GitHub's
servers, so the site stays current without anyone's PC being on. It hosts the
same Phase 0 -> 1 -> 2 flow a human session runs, with the Claude API standing
in for the human researcher.

```
poll RSS feeds  ->  pick targets  ->  Claude API + web search  ->  research.json
   (Phase 0)         (deterministic)        (Phase 1)
       -> inject -> node --check -> stale/decay -> aggregate -> build -> commit -> push
                                   (Phase 2, all deterministic)
```

Only the single Claude API call per batch is non-deterministic (it reads the
live web). Everything else is deterministic and gated: `engine/research_agent.py`
validates the model's JSON against the club roster and schema before writing it,
and `apply_research.sh` runs `node --check` on every touched file. A bad model
response cannot corrupt the site — at worst a run injects nothing.

## One-time setup (repo admin)

Add the API key as a repository secret:

- **Settings → Secrets and variables → Actions → New repository secret**
- Name: `ANTHROPIC_API_KEY`  ·  Value: your Claude API key

Without it the workflow exits early with a message (it does not hard-fail).

Optional: set a repo **variable** `MERCATO_MODEL` to `claude-sonnet-5` to cut
API cost (near-Opus quality at Sonnet price). Default is `claude-opus-5`.

## Cadence (hybrid)

| Trigger | Mode | What it does |
|---|---|---|
| hourly (`0 * * * *`) | `incremental` | Research only clubs a feed headline mentions or that have gone stale. Cheap. |
| daily 06:00 UTC (`0 6 * * *`) | `sweep` | Research every club in an in-window league, capped at `--max-clubs`. Broad; catches what the feeds missed. |
| **Actions → Research Sync → Run workflow** | your choice | Manual run; pick `mode`, `max_clubs`, and `force` (research even off-season). |

Off-season runs are skipped automatically (`engine/check_window.py`), so no API
budget is spent outside transfer windows. Edit `engine/windows.json` to adjust
window dates each season.

## Cost control

- `max_clubs` caps clubs researched per run (incremental default 12, sweep 40).
- `MERCATO_BATCH_SIZE` (env, default 8) sets clubs per API call.
- `MERCATO_MODEL=claude-sonnet-5` roughly halves token cost.
- The window gate means most of the year the workflow does nothing.

## Relationship to `deploy.yml`

`deploy.yml` still runs (its own hourly cron + on push to `clubs/**`) and
rebuilds landing pages. `research-sync.yml` pushes with `GITHUB_TOKEN`, which by
design does **not** re-trigger `deploy.yml`, so there's no build loop — the
research workflow does its own full build. If you later want a single workflow,
fold the research step into `deploy.yml`; they don't conflict as-is.

## Local / manual fallback

`engine/sync-windows.sh` (and `sync-windows.ps1`) remain the on-demand path for
running an apply from a `research.json` you produced yourself. See the header of
each script.
