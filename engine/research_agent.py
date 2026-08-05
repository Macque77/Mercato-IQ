#!/usr/bin/env python3
"""Phase 1 RESEARCH, automated via the Claude API (for GitHub Actions).

The engine README is explicit that Phase 1 -- finding genuinely new transfer
news and judging its sourcing -- needs an LLM, not a cron job. In an interactive
session that LLM is the agent driving the session. This script is the unattended
equivalent: it calls the Claude Messages API with the server-side `web_search`
tool so a scheduled GitHub Actions run can do the same research pass without a
human in the loop, and writes a `research.json` in the schema
`engine/inject_research.py` consumes. Phase 2 (apply -> build) stays exactly as
it is; this only replaces the "a human researched it" step.

Determinism note: the *research content* is irreducibly non-deterministic (it
reads the live web). Everything downstream is deterministic and gated -- this
script validates the model's JSON against the roster and schema before writing,
and `apply_research.sh` runs `node --check` on every touched file. A bad model
response can't corrupt the site; at worst a run injects nothing.

Two modes (see --mode):
  incremental  poll feeds -> research only clubs a lead mentions or that are
               stale (engine/pick_research_targets.py). Cheap; frequent cadence.
  sweep        research every club in an in-window league, up to --max-clubs.
               Broader coverage; daily cadence. Catches what the feeds missed.

Usage:
    ANTHROPIC_API_KEY=... python3 engine/research_agent.py --mode incremental --out research.json
    python3 engine/research_agent.py --mode sweep --max-clubs 40 --out research.json

Requires: `pip install anthropic`, and network access (GitHub Actions has it;
this project's own sandbox does not -- run it in Actions, not the sandbox).
"""
import argparse
import glob
import json
import os
import re
import subprocess
import sys
import urllib.request
from datetime import date, datetime
from xml.etree import ElementTree

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLUBS_DIR = os.path.join(REPO, 'clubs')
WINDOWS_PATH = os.path.join(REPO, 'engine', 'windows.json')

MODEL = os.environ.get('MERCATO_MODEL') or 'claude-opus-5'  # swap to claude-sonnet-5 to cut cost
BATCH_SIZE = int(os.environ.get('MERCATO_BATCH_SIZE', '4'))  # clubs researched per API call

# High-signal RSS feeds for the Phase 0 lead poll -- English-language and
# broad-European on purpose: poll_feeds.py's keyword filter is English, so a
# foreign-language headline ("el Madrid ficha a...") wouldn't match and would be
# dropped. These four cover confirmed deals AND live rumours (Sky's "X latest"
# blogs, BBC's gossip column, the Guardian's Rumour Mill). Any feed that fails to
# fetch just logs a warning and is skipped, so a dead URL is harmless. HTML-only
# outlets in engine/sources.json aren't RSS, so they're left to the model's
# web_search, not polled here.
RSS_FEEDS = [
    ('BBC Sport Football',   'https://feeds.bbci.co.uk/sport/football/rss.xml'),
    ('Sky Sports Football',  'https://www.skysports.com/rss/12040'),
    ('The Guardian Football', 'https://www.theguardian.com/football/rss'),
]

# The schema the model must emit, quoted verbatim from engine/inject_research.py so
# the two never drift. Kept short: the injector is tolerant and computes light bands,
# HUB/LINKMAP, and decay fields itself.
SCHEMA_DOC = """
{"clubs": [
  {"slug": "<exact slug from the target list>",
   "incoming":     [{"name","sub","club","pos","report","src","tier","fee","truth","prob","note","sourceUrl","sourceLabel"}],
   "outgoing":     [ ... same shape ... ],
   "confirmed_in": [{"name","sub","club","pos","fee","free","note","sourceUrl","sourceLabel"}],
   "confirmed_out":[ ... same shape ... ]}
]}
- Only include a club if you found genuinely new, well-sourced news for it. Omit clubs with nothing new.
- `truth` and `prob` are independent 0-100 integers (likelihood true / likelihood it happens).
- `tier`: 1 = top reporter (Romano, Ornstein, Di Marzio, Romero, Falk...), 2 = reputable outlet (Sky, BBC, PA), 3 = aggregator/tabloid.
- `sub` is a short descriptor, e.g. "23 · France · W" (age · nation · position).
- `sourceUrl`/`sourceLabel`: link the ORIGINAL reporter/outlet, never transferfeed.com or an aggregator scrape.
- `fee` free-text ("£75m", "Free", "Loan", "Undisclosed"); for confirmed items set `free`: true/false.
"""

SYSTEM_PROMPT = f"""You are the research step of Mercato IQ, a football transfer-news site. \
Your job: for the specific clubs named in the user's message, use web search to find \
CURRENT, well-sourced transfer news (incoming/outgoing rumours and confirmed deals) and \
return it as strict JSON.

Sourcing rules (house policy):
- Prefer tier-1 reporters: Fabrizio Romano, David Ornstein, Gianluca Di Marzio, Nicolo Schira, \
Gerard Romero, Matteo Moretto, Christian Falk, and reputable league outlets (Sky Sports, BBC, PA, L'Equipe, Kicker, Gazzetta).
- NEVER link transferfeed.com or an aggregator scrape as the source. Find and link the ORIGINAL report.
- Rate `truth` (is the story true) and `prob` (will it happen) independently, 0-100. Confirmed deals are not rumours.
- Editorial style: British English, no em dashes, journalistic and concise, add a skeptical `note` on weak sourcing.
- Accuracy matters more than volume: this publishes to a live site. If you cannot verify a story, leave it out.

Output: a SINGLE JSON object matching this schema and NOTHING else -- no prose, no markdown fences:
{SCHEMA_DOC}
"""


def log(msg):
    print(msg, file=sys.stderr, flush=True)


def load_roster():
    """slug -> {slug, name, league} parsed from each clubs/*.data.js."""
    roster = {}
    for path in sorted(glob.glob(os.path.join(CLUBS_DIR, '*.data.js'))):
        content = open(path, encoding='utf-8').read()
        slug_m = re.search(r'slug\s*:\s*"([^"]+)"', content)
        name_m = re.search(r'club\s*:\s*"([^"]+)"', content)
        bc_m = re.search(r'breadcrumb\s*:\s*\[([^\]]*)\]', content)
        if not slug_m:
            continue
        league = None
        if bc_m:
            parts = re.findall(r'["\']([^"\']*)["\']', bc_m.group(1))
            if len(parts) >= 2:
                league = parts[1]
        roster[slug_m.group(1)] = {
            'slug': slug_m.group(1),
            'name': name_m.group(1) if name_m else slug_m.group(1),
            'league': league,
        }
    return roster


def in_window_leagues():
    """League display names whose window is open today, per windows.json."""
    if not os.path.exists(WINDOWS_PATH):
        return set()
    windows = json.load(open(WINDOWS_PATH, encoding='utf-8'))['windows']
    today = parse_today()
    live = set()
    for league, w in windows.items():
        for season in ('summer', 'winter'):
            try:
                o = datetime.strptime(w[f'{season}_open'], '%Y-%m-%d').date()
                c = datetime.strptime(w[f'{season}_close'], '%Y-%m-%d').date()
            except (KeyError, ValueError):
                continue
            if o <= today <= c:
                live.add(league)
    return live


def parse_today():
    env = os.environ.get('MERCATO_TODAY')
    return datetime.strptime(env, '%Y-%m-%d').date() if env else date.today()


def fetch_rss(url):
    """Return [{title, link, guid, pubDate}] for one RSS feed, or [] on failure."""
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mercato-IQ/1.0'})
        with urllib.request.urlopen(req, timeout=30) as resp:
            raw = resp.read()
        root = ElementTree.fromstring(raw)
        items = []
        for it in root.iter('item'):
            def text(tag):
                el = it.find(tag)
                return el.text.strip() if el is not None and el.text else ''
            items.append({
                'title': text('title'),
                'link': text('link'),
                'guid': text('guid') or text('link'),
                'pubDate': text('pubDate'),
            })
        return items
    except Exception as e:  # network/parse failures shouldn't kill the run
        log(f"  feed fetch failed ({url}): {e}")
        return []


def run_poll():
    """Fetch feeds, run poll_feeds.py to update seen-state, return lead titles."""
    leads = []
    for source, url in RSS_FEEDS:
        items = fetch_rss(url)
        if not items:
            continue
        items_path = os.path.join(REPO, f'.poll_items_{re.sub(r"[^a-z0-9]", "", source.lower())}.json')
        with open(items_path, 'w', encoding='utf-8', newline='\n') as f:
            json.dump(items, f)
        try:
            out = subprocess.run(
                [sys.executable, os.path.join(REPO, 'engine', 'poll_feeds.py'),
                 '--input', items_path, '--source', source, '--json'],
                capture_output=True, text=True, cwd=REPO,
                env={**os.environ, 'PYTHONUTF8': '1'},
            )
            if out.returncode == 0 and out.stdout.strip():
                # poll_feeds.py --json prints a bare JSON array of the new items
                # (not a {"new_items": [...]} object) -- calling .get() on a list
                # used to throw and get swallowed here, so leads were always 0.
                data = json.loads(out.stdout)
                items = data if isinstance(data, list) else data.get('new_items', [])
                for it in items:
                    if isinstance(it, dict) and it.get('title'):
                        leads.append(it['title'])
        except Exception as e:
            log(f"  poll_feeds failed for {source}: {e}")
        finally:
            try:
                os.remove(items_path)
            except OSError:
                pass
    log(f"Phase 0: {len(leads)} fresh transfer lead(s) from feeds.")
    return leads


def pick_incremental_targets(leads):
    """Use pick_research_targets.py to pick poll-flagged + stale clubs."""
    leads_path = os.path.join(REPO, '.poll_leads.json')
    with open(leads_path, 'w', encoding='utf-8', newline='\n') as f:
        json.dump([{'title': t} for t in leads], f)
    try:
        out = subprocess.run(
            [sys.executable, os.path.join(REPO, 'engine', 'pick_research_targets.py'),
             '--poll-output', leads_path, '--json'],
            capture_output=True, text=True, cwd=REPO,
            env={**os.environ, 'PYTHONUTF8': '1'},
        )
        if out.returncode == 0 and out.stdout.strip():
            targets = json.loads(out.stdout).get('targets', [])
            # Chase the news first: clubs a feed headline flagged before merely-stale
            # ones, so a capped run spends its budget on what's actually happening
            # rather than the alphabetical head of the roster.
            targets.sort(key=lambda t: 'poll-flagged' not in t.get('reasons', []))
            return [t['slug'] for t in targets]
    except Exception as e:
        log(f"  pick_research_targets failed: {e}")
    finally:
        try:
            os.remove(leads_path)
        except OSError:
            pass
    return []


def anthropic_research(client, roster, slugs, leads):
    """One web-search-backed API call for a batch of clubs. Returns [] on failure."""
    from anthropic import APIError

    club_lines = '\n'.join(f'  - slug "{s}": {roster[s]["name"]} ({roster[s]["league"] or "?"})'
                           for s in slugs if s in roster)
    lead_block = ''
    if leads:
        lead_block = "\nHeadlines from today's feeds (leads to chase, not verbatim facts):\n" + \
            '\n'.join(f'  - {t}' for t in leads[:40])
    user_msg = (
        f"Research current transfer news for these clubs and return the JSON object.\n"
        f"Use the EXACT slug shown for each club.\n\nClubs:\n{club_lines}\n{lead_block}"
    )

    messages = [{'role': 'user', 'content': user_msg}]
    tools = [{'type': 'web_search_20260209', 'name': 'web_search', 'max_uses': 8}]

    # Server-tool loop: web_search may pause the turn (pause_turn) up to a few times.
    for _ in range(6):
        try:
            with client.messages.stream(
                model=MODEL, max_tokens=16000, system=SYSTEM_PROMPT,
                tools=tools, messages=messages,
            ) as stream:
                resp = stream.get_final_message()
        except APIError as e:
            log(f"  API error on batch {slugs}: {e}")
            return []
        if resp.stop_reason == 'refusal':
            log(f"  model refused batch {slugs}; skipping.")
            return []
        if resp.stop_reason == 'pause_turn':
            messages.append({'role': 'assistant', 'content': resp.content})
            continue
        text = ''.join(b.text for b in resp.content if b.type == 'text')
        return parse_and_validate(text, roster)
    log(f"  batch {slugs} did not converge; skipping.")
    return []


def parse_and_validate(text, roster):
    """Extract the JSON object and keep only clubs with a real slug and content."""
    m = re.search(r'\{.*\}', text, re.DOTALL)  # tolerate stray prose/fences
    if not m:
        log("  no JSON object in model output; skipping batch.")
        return []
    try:
        data = json.loads(m.group(0))
    except json.JSONDecodeError as e:
        log(f"  JSON parse failed: {e}; skipping batch.")
        return []
    clubs = data.get('clubs', []) if isinstance(data, dict) else []
    valid = []
    arrays = ('incoming', 'outgoing', 'confirmed_in', 'confirmed_out')
    for c in clubs:
        if not isinstance(c, dict):
            continue
        slug = c.get('slug')
        if slug not in roster:
            log(f"  dropping unknown slug: {slug!r}")
            continue
        # keep only known arrays, and only entries that have a name
        cleaned = {'slug': slug}
        has_content = False
        for key in arrays:
            items = [it for it in c.get(key, []) if isinstance(it, dict) and it.get('name')]
            if items:
                cleaned[key] = items
                has_content = True
        if has_content:
            valid.append(cleaned)
    return valid


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--mode', choices=['incremental', 'sweep'], default='incremental')
    ap.add_argument('--max-clubs', type=int, default=int(os.environ.get('MERCATO_MAX_CLUBS', '12')))
    ap.add_argument('--out', default='research.json')
    args = ap.parse_args()

    if not os.environ.get('ANTHROPIC_API_KEY'):
        log("ERROR: ANTHROPIC_API_KEY is not set.")
        sys.exit(2)

    roster = load_roster()
    log(f"Roster: {len(roster)} clubs.")

    leads = run_poll()

    if args.mode == 'sweep':
        live = in_window_leagues()
        targets = [s for s, v in sorted(roster.items()) if v['league'] in live]
        log(f"Sweep: {len(targets)} clubs in {len(live)} in-window league(s).")
    else:
        targets = pick_incremental_targets(leads)
        log(f"Incremental: {len(targets)} target club(s) flagged.")

    if not targets:
        log("No targets to research. Writing empty result.")
        json.dump({'clubs': []}, open(os.path.join(REPO, args.out), 'w', encoding='utf-8'))
        return

    targets = targets[:args.max_clubs]
    log(f"Researching {len(targets)} club(s) (cap {args.max_clubs}) in batches of {BATCH_SIZE}.")

    import anthropic
    client = anthropic.Anthropic()

    all_clubs = []
    for i in range(0, len(targets), BATCH_SIZE):
        batch = targets[i:i + BATCH_SIZE]
        log(f"Batch {i // BATCH_SIZE + 1}: {', '.join(batch)}")
        all_clubs.extend(anthropic_research(client, roster, batch, leads))

    out_path = os.path.join(REPO, args.out)
    with open(out_path, 'w', encoding='utf-8', newline='\n') as f:
        json.dump({'clubs': all_clubs}, f, ensure_ascii=False, indent=1)
    log(f"Wrote {out_path}: {len(all_clubs)} club(s) with new research.")
    # Surface the count to the workflow (used to decide whether to run the apply step).
    print(len(all_clubs))


if __name__ == '__main__':
    main()
