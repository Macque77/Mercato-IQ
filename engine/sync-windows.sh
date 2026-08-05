#!/bin/bash
# ============================================================================
# Mercato IQ -- Windows host wrapper around engine/apply_research.sh
#
# The engine scripts assume a Linux/macOS host (as on GitHub Actions). On this
# Windows machine four things need help; this wrapper supplies all of them so a
# research sync runs end-to-end and lands on origin/main unattended:
#
#   1. `python3` name        -- only python.exe is installed, not `python3`.
#                               We put a `python3` shim on PATH for this run.
#   2. UTF-8 file I/O        -- the scripts open() without encoding=, so Windows
#                               defaults to cp1252 and crashes on accented club
#                               names. We export PYTHONUTF8=1.
#   3. Playwright verify     -- engine/verify_site.js needs Playwright, which is
#                               not installed here. We auto-set SKIP_VERIFY=1 if
#                               it is missing (the node --check syntax gate, the
#                               real safety net, still runs).
#   4. git push              -- origin is an SSH remote with no key on this host,
#                               and main auto-advances hourly (deploy.yml cron).
#                               We push over HTTPS (Git Credential Manager holds
#                               a token) and, if main moved, replay our source
#                               changes onto the latest main and rebuild before
#                               pushing, so history stays linear and consistent.
#
# Usage (same arguments as apply_research.sh):
#   engine/sync-windows.sh <research1.json> [research2.json ...]
#   engine/sync-windows.sh research/inbox/            # a directory of *.json
#
# Env overrides:
#   MERCATO_PYTHON=<path to python.exe>   pin the interpreter (else auto-detect)
#   MERCATO_PUSH_URL=<https url>          push target (else derived from origin)
#   NO_PUSH=1                             do everything but the final git push
#   FULL_VERIFY=1                         force the full Playwright sweep (needs it installed)
# ============================================================================
set -uo pipefail
cd "$(dirname "$0")/.."
REPO="$(pwd)"

if [ "$#" -eq 0 ]; then
  echo "Usage: engine/sync-windows.sh <research.json ...|research-dir>" >&2
  exit 1
fi

# A clean tree is required: the reconcile step below does a hard reset, and we
# never want to blow away unrelated local edits.
if [ -n "$(git status --porcelain)" ]; then
  echo "ERROR: working tree is not clean. Commit or stash local changes first." >&2
  git status --short >&2
  exit 1
fi

# --- 1. python3 shim -------------------------------------------------------
if command -v python3 >/dev/null 2>&1; then
  PYBIN=python3
else
  CAND=""
  for c in python py; do
    if command -v "$c" >/dev/null 2>&1; then CAND="$(command -v "$c")"; break; fi
  done
  if [ -z "$CAND" ]; then
    WINPY="${MERCATO_PYTHON:-${LOCALAPPDATA:-$HOME/AppData/Local}\\Programs\\Python\\Python312\\python.exe}"
    CAND="$(cygpath -u "$WINPY" 2>/dev/null || echo "$WINPY")"
  fi
  if [ -z "$CAND" ] || { [ ! -x "$CAND" ] && ! command -v "$CAND" >/dev/null 2>&1; }; then
    echo "ERROR: no Python found. Install it (winget install Python.Python.3.12) or set MERCATO_PYTHON." >&2
    exit 1
  fi
  SHIM="$(mktemp -d)"
  printf '#!/bin/bash\nexec "%s" "$@"\n' "$CAND" > "$SHIM/python3"
  chmod +x "$SHIM/python3"
  export PATH="$SHIM:$PATH"
  PYBIN="$SHIM/python3"
  trap 'rm -rf "$SHIM"' EXIT
fi
echo "python3 -> $("$PYBIN" -c 'import sys;print(sys.executable)')"

# --- 2. UTF-8 --------------------------------------------------------------
export PYTHONUTF8=1

# --- 3. verify mode --------------------------------------------------------
if [ "${FULL_VERIFY:-0}" != "1" ] && ! node -e "require('playwright')" >/dev/null 2>&1; then
  echo "note: Playwright not installed -- skipping the browser sweep (node --check still gates syntax)."
  export SKIP_VERIFY=1
fi

# --- run the canonical pipeline (no commit; we handle git ourselves) -------
BEFORE="$(git rev-parse HEAD)"
echo "=== running engine/apply_research.sh ==="
NO_COMMIT=1 bash engine/apply_research.sh "$@"
STATUS=$?
if [ "$STATUS" -ne 0 ]; then
  echo "apply_research.sh failed (exit $STATUS). Nothing committed or pushed." >&2
  exit "$STATUS"
fi
if [ -z "$(git status --porcelain)" ]; then
  echo "No changes produced -- nothing to commit or push."
  exit 0
fi

# --- commit locally --------------------------------------------------------
STAMP="$(date -u +%Y-%m-%d)"
git add -A
git commit -q -m "Research sync ${STAMP}"
MYSHA="$(git rev-parse HEAD)"
echo "committed ${MYSHA} on top of ${BEFORE}"

if [ "${NO_PUSH:-0}" = "1" ]; then
  echo "NO_PUSH=1 -- stopping before push. Local commit ${MYSHA} is ready."
  exit 0
fi

# --- reconcile with the latest remote main, then push over HTTPS -----------
PUSH_URL="${MERCATO_PUSH_URL:-$(git remote get-url origin | sed -E 's#git@github.com:#https://github.com/#')}"
echo "=== fetching remote main from ${PUSH_URL} ==="
if ! git fetch "$PUSH_URL" main; then
  echo "ERROR: could not fetch main. Local commit ${MYSHA} is intact; push manually once connectivity/auth is sorted." >&2
  exit 1
fi
REMOTE="$(git rev-parse FETCH_HEAD)"

if [ "$REMOTE" != "$BEFORE" ]; then
  echo "remote main advanced ($BEFORE -> $REMOTE); replaying source changes on top and rebuilding."
  git reset --hard "$REMOTE"
  # our source of record is the club data + poll/research state; everything else
  # is regenerated. Restore just those from the local commit, then rebuild.
  git checkout "$MYSHA" -- clubs/
  git checkout "$MYSHA" -- engine/.feed_seen.json engine/.last_research.json 2>/dev/null || true
  python3 engine/aggregate.py >/dev/null
  for s in $(git diff --name-only "$BEFORE" "$MYSHA" -- 'clubs/*.data.js' | sed 's#^clubs/##; s#\.data\.js$##'); do
    python3 engine/build_extended.py "$s" >/dev/null
  done
  python3 engine/build_extended.py --batch-landing-pages >/dev/null
  git add -A
  git commit -q -m "Research sync ${STAMP} (rebased on auto-rebuild)"
fi

# final safety: every club data file must parse before we publish.
BAD=0
for f in clubs/*.data.js; do node --check "$f" 2>/dev/null || { echo "SYNTAX ERROR: $f" >&2; BAD=1; }; done
if [ "$BAD" -ne 0 ]; then
  echo "ERROR: node --check failed after rebuild -- NOT pushing." >&2
  exit 1
fi

echo "=== pushing to ${PUSH_URL} main ==="
git push "$PUSH_URL" HEAD:main
echo "Done. $(git rev-parse --short HEAD) is live on main."
