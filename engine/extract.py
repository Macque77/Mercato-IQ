#!/usr/bin/env python3
"""Extract stage -- the ONLY place Claude is used, and deliberately the cheapest.

engine/discover.py has already fetched and club-filtered the web (zero tokens).
This turns that pre-filtered text into the strict research.json the injector
consumes -- structured extraction, not web research -- so it runs on the cheapest
model (Haiku) with NO web-search/fetch tools, a small cached system prompt, and a
hard token cap. Same output schema as the old research_agent, so
inject_research.py / retire_rumours.py / the build are unchanged.

Per club, the model sees only:
  * the club's currently-on-page rumours (to RECONCILE: keep-live / add / retire)
  * the discover snippets that mention the club (headlines / news lines / tweets)
It returns incoming/outgoing/confirmed_in/confirmed_out/dead/live for that club.

Token economics vs the old approach: no server-tool round trips, tiny context,
Haiku pricing -> roughly an order of magnitude cheaper per club.

Usage:
    ANTHROPIC_API_KEY=... python3 engine/extract.py --leads leads.json --out research.json
"""
import argparse
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import research_agent as ra  # noqa: E402
from research_agent import (SCHEMA_DOC, load_club_rumours, parse_and_validate,  # noqa: E402
                            FatalResearchError, _is_fatal_api_error)

REPO = ra.REPO
MODEL = os.environ.get('MERCATO_EXTRACT_MODEL') or 'claude-haiku-4-5-20251001'
MAX_TOKENS = int(os.environ.get('MERCATO_EXTRACT_MAX_TOKENS', '2500'))  # one club's JSON fits easily
CONCURRENCY = max(1, int(os.environ.get('MERCATO_CONCURRENCY') or '6'))
# Hard safety cap on Haiku calls per run, so a mis-scoped dispatch can't rack up cost.
# 0 = no cap. Clubs are already pre-filtered to those with fresh news, so this rarely binds.
MAX_CLUBS = int(os.environ.get('MERCATO_MAX_CLUBS', '0'))

# Cached system prompt: rules + schema only (no per-club data), so the cache hits
# across every club in the run.
SYSTEM_PROMPT = f"""You are the EXTRACTION step of Mercato IQ, a football transfer site. \
You do NOT search the web. For ONE club you are given its current on-page rumours plus recent \
headlines/tweets that mention it, and you output strict JSON. You are UPDATING an existing page, \
NOT rewriting it -- be additive and conservative.

WHAT TO RETURN in incoming / outgoing -- ONLY these:
  (a) a genuinely NEW link the snippets reveal that is not already on the page, or
  (b) an EXISTING link the snippets give MATERIALLY NEWER information on (a fee agreed, medical, \
      talks advanced/collapsed). When you do, fill every field you can support from the snippet.
Do NOT restate an existing on-page rumour that has no fresh snippet -- you'd only thin it out. \
To KEEP such a rumour alive, just put its player name in `live` and leave it out of incoming/outgoing. \
The page keeps its existing richer entry untouched.

HARD RULES:
- Senior men's first team only. Ignore women's/WSL, academy/youth, managerial, and non-transfer items.
- NEVER blank a field and NEVER output truth:0 / prob:0 to "kill" a rumour. To retire, OMIT the player \
from `live` (optionally name him in `dead` with a reason) -- do not emit a hollow entry.
- CONFIRMED (confirmed_in/confirmed_out) ONLY when a snippet EXPLICITLY says the deal is official/ \
completed/signed AND gives the player's FULL name. Never infer or invent a confirmed signing (no bare \
surnames, no "Spanish midfielder signed"). If unsure, it is a rumour or nothing. A player confirmed this \
window is NOT also a live rumour -- omit him from incoming/outgoing and from `live`, and name him in `dead` \
if he was previously a rumour.
- Do NOT invent anything not supported by a snippet or already on the page.

`live` = the AUTHORITATIVE COMPLETE list of EVERY player who remains a currently-live link for this club \
(the existing on-page rumours you are keeping + any new ones you added). Anything on the page but not in \
`live` is auto-retired, so be complete -- but never pad it with transferred/dead/stale names. If nothing is \
new and nothing needs retiring, return just the club slug and a `live` list of the current on-page names.

`tier`: 1 = top reporter (Romano, Ornstein, Di Marzio, Romero, Falk...), 2 = reputable outlet (Sky, BBC, PA), \
3 = aggregator/tabloid. `truth`/`prob` are independent 0-100 ints. `sub` = "age · nation · position". \
Link `sourceUrl`/`sourceLabel` to the snippet's source.

Output EXACTLY this JSON shape for the single club (no prose, no fences):
{SCHEMA_DOC}"""


def _client():
    import anthropic
    return anthropic.Anthropic()


def extract_club(client, slug, name, snippets, on_page, roster):
    """One Haiku call for one club. Returns the validated club dict or None."""
    from anthropic import APIError

    snip_lines = '\n'.join(
        f"  - [{s.get('source','?')}] {s.get('text','').strip()}"
        f"{('  <'+s['url']+'>') if s.get('url') else ''}"
        for s in snippets)
    if on_page:
        page_lines = '\n'.join(
            f"  - {r['name']} ({r['dir']}{', '+r['recency'] if r['recency'] else ''})"
            for r in on_page)
    else:
        page_lines = '  (none)'

    user_msg = (
        f'Club: {name}  (use slug "{slug}" exactly)\n\n'
        f"Currently on the club's page (reconcile these):\n{page_lines}\n\n"
        f"Recent snippets mentioning the club:\n{snip_lines or '  (none)'}\n\n"
        f'Return the JSON object with a single entry in "clubs" for this club.'
    )

    try:
        resp = client.messages.create(
            model=MODEL,
            max_tokens=MAX_TOKENS,
            system=[{'type': 'text', 'text': SYSTEM_PROMPT,
                     'cache_control': {'type': 'ephemeral'}}],
            messages=[{'role': 'user', 'content': user_msg}],
        )
    except APIError as e:
        if _is_fatal_api_error(e):
            raise FatalResearchError(str(e)) from e
        ra.log(f"  API error on {slug}: {e}")
        return None, None

    u = resp.usage
    usage = {
        'in': getattr(u, 'input_tokens', 0) or 0,
        'out': getattr(u, 'output_tokens', 0) or 0,
        'cache_read': getattr(u, 'cache_read_input_tokens', 0) or 0,
        'cache_write': getattr(u, 'cache_creation_input_tokens', 0) or 0,
    }
    text = ''.join(b.text for b in resp.content if getattr(b, 'type', '') == 'text')
    clubs = parse_and_validate(text, roster)
    # parse_and_validate returns a list of club dicts; keep the one for this slug.
    chosen = next((c for c in clubs if c.get('slug') == slug), clubs[0] if clubs else None)
    return chosen, usage


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--leads', default='leads.json')
    ap.add_argument('--out', default='research.json')
    args = ap.parse_args()

    if not os.environ.get('ANTHROPIC_API_KEY'):
        ra.log('ERROR: ANTHROPIC_API_KEY is not set.')
        sys.exit(2)

    leads = json.load(open(os.path.join(REPO, args.leads), encoding='utf-8'))
    clubs_in = leads.get('clubs', {})
    if not clubs_in:
        ra.log('No leads to extract. Writing empty research.')
        json.dump({'clubs': []}, open(os.path.join(REPO, args.out), 'w', encoding='utf-8'))
        print(0)
        return

    # Roster is needed by parse_and_validate for slug/name validation.
    roster = ra.load_roster()
    client = _client()
    ra.log(f"Extract: {len(clubs_in)} club(s) via {MODEL} (concurrency {CONCURRENCY}).")

    items = list(clubs_in.items())
    if MAX_CLUBS and len(items) > MAX_CLUBS:
        ra.log(f"  capping {len(items)} -> {MAX_CLUBS} club(s) (MERCATO_MAX_CLUBS).")
        items = items[:MAX_CLUBS]

    def work(item):
        slug, v = item
        return extract_club(client, slug, v.get('name', slug), v.get('snippets', []),
                            load_club_rumours(slug), roster)

    results = []
    try:
        if CONCURRENCY == 1 or len(items) <= 1:
            for it in items:
                results.append(work(it))
        else:
            from concurrent.futures import ThreadPoolExecutor
            with ThreadPoolExecutor(max_workers=min(CONCURRENCY, len(items))) as ex:
                results = list(ex.map(work, items))
    except FatalResearchError as e:
        ra.log(f"FATAL: {e}")
        ra.log("Aborting WITHOUT writing results (a silent 0-club no-op would hide this). "
               "If this is a credit/billing error, top up at https://console.anthropic.com.")
        sys.exit(3)

    out_clubs = [c for c, _ in results if c]
    # Token accounting -- surfaced every run so cost stays visible.
    tot = {'in': 0, 'out': 0, 'cache_read': 0, 'cache_write': 0}
    for _, u in results:
        if u:
            for k in tot:
                tot[k] += u.get(k, 0)
    ra.log(f"Tokens: input={tot['in']} output={tot['out']} "
           f"cache_read={tot['cache_read']} cache_write={tot['cache_write']} "
           f"(model {MODEL}, {len(items)} call(s))")

    out_path = os.path.join(REPO, args.out)
    with open(out_path, 'w', encoding='utf-8', newline='\n') as f:
        json.dump({'clubs': out_clubs}, f, ensure_ascii=False, indent=1)
    ra.log(f"Wrote {out_path}: {len(out_clubs)} club(s).")
    print(len(out_clubs))


if __name__ == '__main__':
    main()
