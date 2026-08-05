# Mercato IQ -- engine/

This is the build + data pipeline for the site. If you're a fresh Claude session
picking this project up, read this file and `claude/MASTER_WORKFLOW.md` (in the
attached "Mercato" Claude Project) before changing anything.

## Architecture

- `clubs/<slug>.data.js` -- one file per club, hand/agent-edited. Source of truth
  for that club's INCOMING/OUTGOING rumours and CONFIRMED_IN/CONFIRMED_OUT
  transfers, plus a HUB (source-link registry) and LINKMAP (player name -> HUB
  keys) used to render the expandable "sources" panel on each rumour card.
- `template.html` -- master template for an individual club page. Not run
  directly; `build_extended.py <slug>` reads it + the club's data file and
  writes `<slug>.html` at the repo root.
- `template-league.html`, `template-nation.html` -- same idea, one level up.
- `index.html` -- the landing page. It is self-templating: its own DATA block
  gets rewritten in place by `--batch-landing-pages`, but its CSS/JS is a plain
  file you edit directly (there is no separate `template-index.html`).
- `engine/aggregate.py` -- reads every `clubs/*.data.js`, rolls the data up into
  `data/global.data.js`, `data/nations/<nation>.data.js`, and
  `data/leagues/<league>.data.js`. **Run this before rebuilding any landing
  page** or the landing pages will render stale aggregated numbers even though
  the underlying club files changed.
- `engine/build_extended.py` -- the page builder.
  - `python3 engine/build_extended.py <slug>` -- rebuild one club page
  - `python3 engine/build_extended.py --batch-landing-pages` -- rebuild every
    nation page, league page, and index.html

## The pipeline: Phase 0 (poll) -> Phase 1 (research) -> Phase 2 (apply)

Genuinely new transfer information can only come from a research step that can
read the web and judge sources -- i.e. an LLM, not a cron job. So the pipeline
is split up, and only Phase 2 is a plain script:

**Phase 0 -- POLL (cheap pre-filter, agent + script together).** This
sandbox's outbound network is allowlisted and blocks direct `curl`/`urllib`
calls to arbitrary domains (confirmed 2026-08-04: bbc.co.uk, google.com etc.
all get a 403 tunnel error; only package registries like pypi work). So a
plain polling script can't fetch anything itself -- only the `WebFetch`/
`WebSearch` *tools* can reach the open web. The pattern:

```
1. Agent calls WebFetch on https://feeds.bbci.co.uk/sport/football/rss.xml,
   prompting it to return every <item> as a verbatim JSON array of
   {title, link, guid, pubDate} (extraction, not summarization -- the model
   handles this faithfully).
2. Save that JSON to a file, e.g. /tmp/bbc_items.json.
3. python3 engine/poll_feeds.py --input /tmp/bbc_items.json --source "BBC Sport Football"
   -- filters out anything already seen (engine/.feed_seen.json) and anything
   that doesn't match a loose transfer-keyword regex, prints the rest as leads.
4. Commit engine/.feed_seen.json (small file, git add -A picks it up) so the
   next poll -- even from a fresh clone -- doesn't re-report the same items.
```

A hit from Phase 0 is a *lead*, not something to inject verbatim -- it tells
Phase 1 what's worth chasing down properly (who's reporting it, source link,
truth/prob rating), especially useful for deciding whether an on-demand
deadline-day check is worth a full research pass or can skip straight to "no
change, skip". `engine/poll_feeds.py --input <file> --json|--quiet` are the
machine-readable/exit-code forms for scripting this decision.

**Phase 1 -- RESEARCH (an agent/LLM step, not a script).** Search reliable
sources (Fabrizio Romano, Gianluca Di Marzio, Nicolo Schira, and reputable
league-specific outlets), compile findings into JSON matching the schema
documented at the top of `engine/inject_research.py`:

```json
{"clubs": [
  {"slug": "arsenal",
   "incoming":      [{"name":"...","sub":"...","club":"...","pos":"...","report":"...","src":"...","tier":1,"fee":"...","truth":60,"prob":40,"note":"...","sourceUrl":"...","sourceLabel":"..."}],
   "outgoing":      [ ... same shape ... ],
   "confirmed_in":  [{"name":"...","sub":"...","club":"...","pos":"...","fee":"...","free":false,"note":"...","sourceUrl":"...","sourceLabel":"..."}],
   "confirmed_out": [ ... same shape ... ]}
]}
```

Notes on sourcing (per project instructions): never link
`transferfeed.com/clubs/` directly -- use it to find the *original* reporter,
then link that original source. `truth` and `prob` are two independent 0-100
metrics (likelihood the story is true vs. likelihood it happens), each mapped
to a light band by `prob` (`g`>50, `y`>=30, `o`>=15, `r`<15).

**Phase 2 -- APPLY (scripted, deterministic).**

```bash
engine/apply_research.sh path/to/research.json
```

This does, in order: inject -> `node --check` every touched data file (hard
syntax gate) -> `aggregate.py` -> rebuild every touched club page + all landing
pages -> `node engine/verify_site.js --fast` (Playwright: JS errors + horizontal
overflow) -> `git add -A && git commit` (push is automatic, see below). Env vars
`SKIP_VERIFY=1`, `FULL_VERIFY=1`, `NO_COMMIT=1` are documented in the script's
own header.

## Git push

`.git/hooks/post-commit` pushes to `origin main` automatically after every
commit made in this repo -- you do not need to run `git push` yourself. If a
fresh clone doesn't have the hook (hooks aren't cloned by git), copy it from
`claude/GIT_AUTOMATION_RULE.md` in the attached Claude Project, or just run
`git push origin main` manually after committing.

## Verification habits (do these before every commit, not just spot checks)

1. `for f in clubs/*.data.js; do node --check "$f" || echo "BAD: $f"; done` --
   a single malformed file has broken the site outright multiple times.
2. `node engine/verify_site.js --fast` (or the full run before a big batch) --
   catches JS runtime errors and horizontal-scroll regressions across every
   page type.
3. After any HUB/LINKMAP-touching change, spot check for dangling LINKMAP
   entries (a LINKMAP value referencing a HUB key that doesn't exist) --
   `engine/inject_research.py` is bug-fixed against this class as of 2026-08-04
   (see its docstring), but hand edits can still reintroduce it.

## Known recurring bug class: text truncation

Three separate truncation bugs have hit this codebase (`-webkit-line-clamp`,
then a `max-height` cap that mishandled `box-sizing:border-box` padding, then
`white-space:nowrap + text-overflow:ellipsis` silently dropping trailing
sentences). Current house style, per explicit user direction: **do not
truncate note/summary text. Grow the container to fit it instead.** If you're
tempted to clip text anywhere on this site, don't -- make the box taller.

## Scheduled syncs

See `claude/MASTER_WORKFLOW.md` in the Claude Project for the current list of
live scheduled tasks, what each one's prompt actually does, and how to adjust
cadence (e.g. for deadline day). `engine/windows.json` + `engine/check_window.py`
tell a scheduled run whether today is inside a tracked transfer window (worth
spending a research pass) or off-season (just republish, skip research to save
budget).
