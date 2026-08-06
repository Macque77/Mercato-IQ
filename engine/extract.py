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
MAX_TOKENS = int(os.environ.get('MERCATO_EXTRACT_MAX_TOKENS', '4000'))
CONCURRENCY = max(1, int(os.environ.get('MERCATO_CONCURRENCY') or '6'))

# Cached system prompt: rules + schema only (no per-club data), so the cache hits
# across every club in the run.
SYSTEM_PROMPT = f"""You are the EXTRACTION step of Mercato IQ, a football transfer site. \
You do NOT search the web. You are given, for ONE club, its current on-page rumours plus \
recent headlines/tweets that mention it, and you output strict JSON describing that club's \
transfer picture right now.

Rules:
- Extract ONLY senior men's first-team transfer news. Ignore women's/WSL, academy, \
managerial, and non-transfer items even if they mention the club.
- CONFIRMED transfers (official "signs"/"completes"/"joins") go in confirmed_in / confirmed_out. \
A player with a confirmed move this window is NOT a live rumour -- do not also list him as incoming/outgoing, \
and DO put him in `dead` if he was previously a rumour.
- RECONCILE the on-page rumours: for each, decide keep-live, or retire. A rumour is dead if the \
player has transferred (anywhere), the deal is reported off/collapsed, or there's no credible \
mention in ~5+ weeks. Retire by simply OMITTING him from `live` (and optionally naming him in `dead`).
- `live` is the AUTHORITATIVE COMPLETE list of every player who is a currently-live link for this \
club (incoming or outgoing). Anything on the page but not in `live` is auto-retired -- so be complete, \
but never pad it with dead/transferred/stale names.
- Only use the provided snippets + your reconciliation of the on-page list. Do NOT invent rumours \
that aren't supported by a snippet or already on the page. If the snippets contain nothing new and \
nothing to retire, return the club with an empty-ish object but ALWAYS include `live`.
- `tier`: 1 = top reporter (Romano, Ornstein, Di Marzio, Romero, Falk...), 2 = reputable outlet \
(Sky, BBC, PA), 3 = aggregator/tabloid. `truth`/`prob` are independent 0-100 ints. \
`sub` = "age · nation · position". Link `sourceUrl`/`sourceLabel` to the snippet's source.

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
        return None

    text = ''.join(b.text for b in resp.content if getattr(b, 'type', '') == 'text')
    clubs = parse_and_validate(text, roster)
    # parse_and_validate returns a list of club dicts; keep the one for this slug.
    for c in clubs:
        if c.get('slug') == slug:
            return c
    return clubs[0] if clubs else None


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

    out_clubs = [c for c in results if c]
    out_path = os.path.join(REPO, args.out)
    with open(out_path, 'w', encoding='utf-8', newline='\n') as f:
        json.dump({'clubs': out_clubs}, f, ensure_ascii=False, indent=1)
    ra.log(f"Wrote {out_path}: {len(out_clubs)} club(s).")
    print(len(out_clubs))


if __name__ == '__main__':
    main()
