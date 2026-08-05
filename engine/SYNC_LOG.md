# Mercato IQ -- scheduled sync log

One line per scheduled run (hourly during live transfer windows, twice-daily
off-season). Newest entries at the bottom. This replaces the old pattern of
creating a new `claude/SCHEDULER_EXECUTION_*.md` Claude Project doc per run,
which had produced ~25 near-duplicate docs in a single day and made the
project's doc list hard to scan.

- 2026-08-04 14:xx UTC -- pipeline rebuilt: engine/inject_research.py made
  permanent (3 known bugs fixed at the source), engine/apply_research.sh,
  engine/verify_site.js, engine/windows.json, engine/check_window.py added.
  Scheduled tasks consolidated from 7 (4 of them exact duplicates) down to 3,
  reprompted to actually perform research via WebSearch instead of shelling
  out to a `engine/scheduler.py`/`sync.py` that never existed in this repo.
