#!/bin/bash
# Mercato IQ -- Phase 2 of the two-phase pipeline: APPLY.
#
# Phase 1 (RESEARCH) is deliberately not in this script -- it needs an LLM
# (WebSearch / Agent tool calls) to actually find new transfer news, which no
# shell script can do. Phase 1's job is only to produce a JSON file matching
# the schema documented at the top of engine/inject_research.py.
#
# This script is Phase 2: given that JSON, get it live on the site.
#   inject -> node --check (syntax gate) -> stale-rumour scan -> rumour decay scan
#     -> aggregate -> rebuild -> verify -> commit
#
# The stale-rumour scan (engine/detect_stale_rumours.py, added 2026-08-04) runs
# site-wide every time, not just on the clubs this batch touched -- a newly-injected
# CONFIRMED_IN on one club can kill a still-live rumour on a completely different
# club's page (e.g. Player X confirmed signing for Club A should retire any other
# club's "targeting Player X" rumour), so it has to check the whole site, not just
# what this batch changed.
#
# The rumour decay scan (engine/decay_rumours.py, added 2026-08-04) is the other
# half of the lifecycle: a rumour that's confirmed/killed gets REMOVED by the
# stale-rumour scan above, but a rumour that simply stops being reported on
# should fade (lower prob/lighter color) rather than sit frozen at its original
# numbers forever or get deleted outright. It also runs site-wide every time,
# since a rumour anywhere on the site can go stale-by-silence independent of
# what this batch touched. engine/inject_research.py is the reverse of this: it
# now UPDATES an existing rumour in place (resetting its decay clock) instead of
# silently no-op'ing when a fresh source re-reports a player already tracked.
# (push is automatic: .git/hooks/post-commit pushes to origin/main on every commit)
#
# Usage:
#   engine/apply_research.sh <research.json> [more.json ...]
#   engine/apply_research.sh research/inbox/          # a directory of *.json
#
# Env vars:
#   SKIP_VERIFY=1     skip the Playwright sweep (still runs node --check)
#   FULL_VERIFY=1     run the full Playwright sweep instead of the --fast sample
#   NO_COMMIT=1       do everything except git add/commit (leaves changes staged in the working tree)

set -uo pipefail
cd "$(dirname "$0")/.."   # repo root

if [ "$#" -eq 0 ]; then
  echo "Usage: engine/apply_research.sh <research.json ...|research-dir>" >&2
  exit 1
fi

rm -f .last_injected_slugs

echo "=== [1/8] Inject research into clubs/*.data.js ==="
python3 engine/inject_research.py "$@"
if [ ! -f .last_injected_slugs ]; then
  echo "No clubs were changed by this research batch. Nothing to rebuild."
  exit 0
fi
SLUGS=$(cat .last_injected_slugs)
COUNT=$(echo "$SLUGS" | wc -l)
echo "$COUNT club(s) touched: $(echo $SLUGS | tr '\n' ' ')"

echo "=== [2/8] Syntax-check every touched data file ==="
FAILED=0
for slug in $SLUGS; do
  if ! node --check "clubs/${slug}.data.js" 2>/tmp/nodecheck_err.txt; then
    echo "SYNTAX ERROR in clubs/${slug}.data.js:"
    cat /tmp/nodecheck_err.txt
    FAILED=1
  fi
done
if [ "$FAILED" -eq 1 ]; then
  echo "Aborting: fix the syntax error(s) above before rebuilding (the injector has a known-bug list in its own docstring -- check there first)."
  exit 2
fi

echo "=== [3/8] Retire dead/cold rumours site-wide (confirmed-elsewhere, >5 weeks stale, or source-marked dead -> DEAD section) ==="
rm -f .stale_touched_slugs
python3 engine/retire_rumours.py
if [ -f .stale_touched_slugs ]; then
  STALE_SLUGS=$(cat .stale_touched_slugs)
  echo "(stale-rumour cleanup touched: $(echo $STALE_SLUGS | tr '\n' ' '))"
  SLUGS=$(printf '%s\n%s\n' "$SLUGS" "$STALE_SLUGS" | sort -u | sed '/^$/d')
  rm -f .stale_touched_slugs
fi

echo "=== [4/8] Rumour decay scan (site-wide: fades prob on rumours nobody's re-reported in a while) ==="
rm -f .decay_touched_slugs
python3 engine/decay_rumours.py
if [ -f .decay_touched_slugs ]; then
  DECAY_SLUGS=$(cat .decay_touched_slugs)
  echo "(decay scan touched: $(echo $DECAY_SLUGS | tr '\n' ' '))"
  SLUGS=$(printf '%s\n%s\n' "$SLUGS" "$DECAY_SLUGS" | sort -u | sed '/^$/d')
  rm -f .decay_touched_slugs
fi

echo "=== [5/8] Re-aggregate (global/nation/league data) ==="
python3 engine/aggregate.py

echo "=== [6/8] Rebuild touched club pages + all landing pages ==="
for slug in $SLUGS; do
  python3 engine/build_extended.py "$slug"
done
python3 engine/build_extended.py --batch-landing-pages

if [ "${SKIP_VERIFY:-0}" != "1" ]; then
  echo "=== [7/8] Verify (Playwright sweep) ==="
  if [ "${FULL_VERIFY:-0}" = "1" ]; then
    node engine/verify_site.js
  else
    node engine/verify_site.js --fast
  fi
  VERIFY_STATUS=$?
  if [ "$VERIFY_STATUS" -ne 0 ]; then
    echo "Verification found failures -- review before committing. (Set SKIP_VERIFY=1 to bypass, not recommended.)"
    exit 3
  fi
else
  echo "=== [7/8] Verify -- SKIPPED (SKIP_VERIFY=1) ==="
fi

if [ "${NO_COMMIT:-0}" = "1" ]; then
  echo "=== [8/8] Commit -- SKIPPED (NO_COMMIT=1). Changes are staged in the working tree only. ==="
  rm -f .last_injected_slugs
  exit 0
fi

echo "=== [8/8] Commit + push (push is automatic via post-commit hook) ==="
rm -f .last_injected_slugs
git add -A
git commit -m "Research sync: update $(echo $SLUGS | tr '\n' ' ')" || echo "Nothing to commit (rebuild produced no diff)."
echo "Done."
