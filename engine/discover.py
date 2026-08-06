#!/usr/bin/env python3
"""Discover stage -- DETERMINISTIC, zero Claude tokens.

Replaces the expensive part of the old research_agent: instead of Claude driving
web_search/web_fetch server tools to FIND the news (many token-burning round
trips), this fetches sources with plain HTTP and hands the extract stage only the
snippets that actually mention a target club. Claude/Haiku then does nothing but
turn that pre-filtered text into structured JSON (engine/extract.py).

Sources, in order of reliability:
  1. RSS feeds            -- research_agent.RSS_FEEDS (BBC/Sky/Guardian + foreign)
  2. News gossip pages    -- sources.json tier2_urls per nation (HTML, tag-stripped)
  3. X / Twitter          -- engine/x_source.py syndication (best-effort, isolated)

Relevance filter: a snippet is kept for a club if the club's name/alias appears in
it (RSS title, news line, or tweet). New player names ride in on the snippet text
-- the extract model reads them out; we don't need to know them in advance.

Output (--out): {"generated": iso, "clubs": {slug: {"name","league","snippets":[
  {"text","source","url","date"}]}}} -- only clubs with >=1 snippet, capped.

Runs on GitHub Actions / any host with open internet (NOT this repo's sandbox,
whose outbound net is blocked -- see engine/poll_feeds.py header).

Usage:
    python3 engine/discover.py --league "Premier League" --out leads.json
    python3 engine/discover.py --clubs arsenal,chelsea --out leads.json
    python3 engine/discover.py --nation England --out leads.json [--no-x]
"""
import argparse
import json
import os
import re
import sys
import time
import urllib.request
from html import unescape

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import research_agent as ra  # load_roster, load_club_rumours, fetch_rss, RSS_FEEDS  # noqa: E402
import x_source  # noqa: E402
from poll_feeds import TRANSFER_KEYWORDS  # noqa: E402

REPO = ra.REPO
SOURCES_PATH = os.path.join(REPO, 'engine', 'sources.json')

_UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
       "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36")

MAX_SNIPPETS_PER_CLUB = 8    # keep the extract prompt small -> cheap (fewer input tokens)
SNIPPET_LEN = 300            # chars of context around a match

# Map a club's breadcrumb league display-name to the sources.json nation key, so a
# club pulls its own country's outlets and journalist handles.
LEAGUE_TO_NATION = {
    'Premier League': 'England', 'Championship': 'England', 'League One': 'England',
    'League Two': 'England',
    'La Liga': 'Spain', 'LaLiga': 'Spain', 'Segunda División': 'Spain',
    'Serie A': 'Italy', 'Serie B': 'Italy',
    'Bundesliga': 'Germany', '2. Bundesliga': 'Germany',
    'Ligue 1': 'France', 'Ligue 2': 'France',
    'Eredivisie': 'Netherlands',
    'Jupiler Pro League': 'Belgium', 'Pro League': 'Belgium',
    'Primeira Liga': 'Portugal', 'Liga Portugal': 'Portugal',
    'Süper Lig': 'Turkey', 'Super Lig': 'Turkey',
    'Scottish Premiership': 'Scotland', 'Premiership': 'Scotland',
}


def log(msg):
    print(msg, file=sys.stderr, flush=True)


def club_aliases(name):
    """Lower-cased match terms for a club. The full name, plus a 'distinctive'
    variant with generic tokens (FC/AFC/CF/SC...) stripped, plus a few hand aliases
    for the clubs the press abbreviate. Kept tight to avoid false positives."""
    n = name.strip()
    low = n.lower()
    terms = {low}
    stripped = re.sub(r'\b(fc|afc|cf|sc|ac|as|ss|ssc|rc|cd|ud|sd)\b', ' ', low)
    stripped = re.sub(r'\s+', ' ', stripped).strip()
    if len(stripped) >= 3:
        terms.add(stripped)
    ALIASES = {
        'manchester united': ['man utd', 'man united'],
        'manchester city': ['man city'],
        'tottenham hotspur': ['tottenham', 'spurs'],
        'wolverhampton wanderers': ['wolves'],
        'newcastle united': ['newcastle'],
        'nottingham forest': ["nott'm forest", 'forest'],
        'brighton & hove albion': ['brighton'],
        'west ham united': ['west ham'],
    }
    for k, al in ALIASES.items():
        if k in low:
            terms.update(al)
    # Drop terms so short they'd match noise.
    return [t for t in terms if len(t) >= 4]


def _compile_matcher(aliases):
    return re.compile(r'(?<![a-z])(' + '|'.join(re.escape(a) for a in aliases) + r')(?![a-z])',
                      re.IGNORECASE)


def fetch_html_text(url, timeout=20):
    """Fetch a page and return its visible text as a list of non-trivial lines.
    Tag-stripped with the stdlib only (no BeautifulSoup dependency). Best-effort:
    returns [] on any failure or on a JS-only shell with no server-rendered text."""
    try:
        req = urllib.request.Request(url, headers={'User-Agent': _UA,
                                                    'Accept-Language': 'en;q=0.9'})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            ctype = resp.headers.get('Content-Type', '')
            if 'html' not in ctype and 'xml' not in ctype:
                return []
            raw = resp.read(2_000_000).decode('utf-8', 'replace')
    except Exception as e:  # noqa: BLE001
        log(f"  [news] fetch failed ({url}): {e}")
        return []
    # Strip script/style, then all tags; collapse whitespace into lines.
    raw = re.sub(r'(?is)<(script|style|noscript)[^>]*>.*?</\1>', ' ', raw)
    raw = re.sub(r'(?s)<[^>]+>', '\n', raw)
    text = unescape(raw)
    lines = [re.sub(r'\s+', ' ', ln).strip() for ln in text.splitlines()]
    return [ln for ln in lines if len(ln) >= 30]


def snippet_around(text, match, width=SNIPPET_LEN):
    i = match.start()
    a = max(0, i - width // 3)
    b = min(len(text), i + width)
    s = text[a:b].strip()
    return ('…' + s if a > 0 else s)


def select_clubs(args, roster):
    if args.clubs:
        want = [s.strip() for s in args.clubs.split(',') if s.strip()]
        return [s for s in want if s in roster]
    if args.league:
        return sorted(s for s, v in roster.items() if v.get('league') == args.league)
    if args.nation:
        return sorted(s for s, v in roster.items()
                      if LEAGUE_TO_NATION.get(v.get('league')) == args.nation)
    return sorted(roster)


def main():
    ap = argparse.ArgumentParser()
    g = ap.add_mutually_exclusive_group()
    g.add_argument('--clubs', default='', help='comma-separated slugs')
    g.add_argument('--league', default='', help='breadcrumb league display name, e.g. "Premier League"')
    g.add_argument('--nation', default='', help='sources.json nation key, e.g. England')
    ap.add_argument('--out', default='leads.json')
    ap.add_argument('--no-x', action='store_true', help='skip the X/Twitter source')
    args = ap.parse_args()

    roster = ra.load_roster()
    slugs = select_clubs(args, roster)
    if not slugs:
        log('No clubs selected; writing empty leads.')
        json.dump({'generated': _now(), 'clubs': {}},
                  open(os.path.join(REPO, args.out), 'w', encoding='utf-8'))
        print(0)
        return
    log(f"Discover: {len(slugs)} club(s).")

    # Per-club matcher + snippet bucket. Also collect the set of nations in play so
    # we only fetch each nation's news pages / handles once.
    matchers = {s: _compile_matcher(club_aliases(roster[s]['name'])) for s in slugs}
    buckets = {s: [] for s in slugs}
    seen_text = {s: set() for s in slugs}  # de-dupe identical headlines across feeds
    nations = {LEAGUE_TO_NATION.get(roster[s].get('league')) for s in slugs}
    nations.discard(None)

    try:
        sources = json.load(open(SOURCES_PATH, encoding='utf-8'))
    except (OSError, json.JSONDecodeError):
        sources = {}

    def add(slug, text, source, url, date=''):
        if len(buckets[slug]) >= MAX_SNIPPETS_PER_CLUB:
            return
        key = re.sub(r'\W+', '', text.lower())[:80]
        if key in seen_text[slug]:
            return
        seen_text[slug].add(key)
        buckets[slug].append({'text': text[:SNIPPET_LEN + 40], 'source': source,
                              'url': url, 'date': date})

    # 1) RSS -- one fetch per feed, matched against every club.
    for source, url in ra.RSS_FEEDS:
        for it in ra.fetch_rss(url):
            title = it.get('title', '')
            if not title:
                continue
            for s in slugs:
                if matchers[s].search(title):
                    add(s, title, source, it.get('link', ''), it.get('pubDate', ''))
        time.sleep(0.2)
    log("  RSS pass done.")

    # 2) News gossip pages per nation -- HTML tag-stripped, transfer-keyword gated.
    for nation in nations:
        for url in (sources.get(nation, {}) or {}).get('tier2_urls', [])[:4]:
            lines = fetch_html_text(url)
            if not lines:
                continue
            for ln in lines:
                if not TRANSFER_KEYWORDS.search(ln):
                    continue
                for s in slugs:
                    m = matchers[s].search(ln)
                    if m:
                        add(s, snippet_around(ln, m), _host(url), url)
            time.sleep(0.3)
    log("  News pass done.")

    # 3) X / Twitter -- best-effort, isolated. One fetch per handle per nation.
    if not args.no_x:
        for nation in nations:
            handles = x_source.handles_for_nation(nation, sources.get(nation, {}))
            tweets = x_source.fetch_handles(handles)
            for tw in tweets:
                if not TRANSFER_KEYWORDS.search(tw['text']):
                    continue
                for s in slugs:
                    m = matchers[s].search(tw['text'])
                    if m:
                        add(s, tw['text'], 'X', tw['url'], tw.get('date', ''))
            log(f"  X {nation}: {len(handles)} handle(s) -> {len(tweets)} tweet(s).")

    out_clubs = {}
    for s in slugs:
        if buckets[s]:
            out_clubs[s] = {'name': roster[s]['name'], 'league': roster[s].get('league'),
                            'snippets': buckets[s]}
    payload = {'generated': _now(), 'clubs': out_clubs}
    with open(os.path.join(REPO, args.out), 'w', encoding='utf-8', newline='\n') as f:
        json.dump(payload, f, ensure_ascii=False, indent=1)
    total = sum(len(v['snippets']) for v in out_clubs.values())
    log(f"Wrote {args.out}: {len(out_clubs)} club(s) with leads, {total} snippet(s).")
    print(len(out_clubs))  # count for the workflow


def _host(url):
    m = re.search(r'https?://([^/]+)', url)
    return (m.group(1).replace('www.', '') if m else url)


def _now():
    # research_agent has no now helper exposed; keep discover self-contained.
    from datetime import datetime, timezone
    return datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')


if __name__ == '__main__':
    main()
