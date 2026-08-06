#!/usr/bin/env python3
"""Isolated X (Twitter) source for the deterministic discover stage.

X has no free official API and its old public endpoints are increasingly locked
down, so ALL of the site's X-fetching logic is quarantined behind this one module.
If the current method breaks (or you later buy the paid API), swap the body of
`fetch_handle` and nothing else in the pipeline changes.

Current method: the **syndication / embed** backend that powers embedded
timelines on third-party sites -- no login, no API key, no cost:

    https://syndication.twitter.com/srv/timeline-profile/screen-name/<handle>

It returns an HTML/JSON document of a handle's recent tweets. It is undocumented
and rate-limits by IP, so treat it as best-effort: a failure returns [] and the
caller (engine/discover.py) simply proceeds with its other, fully-reliable
sources (RSS, news pages). A later Haiku+web_search fallback can layer on top
without touching this contract.

Contract:
    fetch_handle(handle) -> [{"text", "url", "date"}]   (may be empty)
    fetch_handles(handles) -> flat list of the same, de-duplicated

Zero Claude tokens.
"""
import json
import re
import sys
import time
import urllib.request
from html import unescape

# A real browser UA -- the syndication endpoint 403/429s the default urllib UA.
_UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
       "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36")

_TIMELINE_URL = "https://syndication.twitter.com/srv/timeline-profile/screen-name/{handle}"

# sources.json names reporters but rarely their @handle, so this fills the gap with
# the well-known handles of the tier-1 transfer reporters, grouped by nation. Merged
# with any @handles parsed out of sources.json. Reference data -- extend freely.
KNOWN_HANDLES = {
    'England': ['FabrizioRomano', 'David_Ornstein', 'LaurieWhitwell', 'JamesDucker'],
    'Spain': ['MatteMoretto', 'gerardromero', '2010MisterChip'],
    'Italy': ['DiMarzio', 'NicoSchira', 'RudyGaletti'],
    'Germany': ['cfbayern', 'Plettigoal', 'philipphinze24', 'Jacobs_Ben'],
    'France': ['Santi_J_FM', 'FabriceHawkins', 'DjaïliSiddo'],
    'Netherlands': ['MikeVerweij', 'MikosGouka'],
    'Belgium': ['SachaTavolieri', 'KTHV'],
    'Portugal': ['PedroSepulved4'],
    'Global': ['FabrizioRomano', 'David_Ornstein'],
}

# The embed document ships its data as a Next.js __NEXT_DATA__ JSON blob; tweets
# live under props.pageProps.timeline.entries[].content.tweet. We pull the blob
# and walk it defensively -- the shape drifts, so we hunt for the fields we need
# rather than hard-coding the full path.
_NEXT_DATA_RE = re.compile(
    r'<script[^>]+id="__NEXT_DATA__"[^>]*>(.*?)</script>', re.DOTALL)


def _handle_from_source(raw):
    """Pull a bare @handle out of a sources.json reporter string.

    e.g. 'Philipp Hinze (Sky Deutschland/BILD, X: @philipphinze24)' -> 'philipphinze24'.
    Returns None if the string carries no explicit @handle (most entries name the
    reporter but not their handle -- those are skipped here, not guessed)."""
    m = re.search(r'@([A-Za-z0-9_]{2,15})', raw or '')
    return m.group(1) if m else None


def _walk_tweets(node, out):
    """Depth-first hunt for tweet-ish dicts anywhere in the decoded blob."""
    if isinstance(node, dict):
        text = node.get('full_text') or node.get('text')
        # A tweet object has text plus an id/created_at nearby.
        if isinstance(text, str) and ('created_at' in node or 'id_str' in node):
            out.append(node)
        for v in node.values():
            _walk_tweets(v, out)
    elif isinstance(node, list):
        for v in node:
            _walk_tweets(v, out)


def fetch_handle(handle, timeout=20, retries=2):
    """Recent tweets for one screen-name as [{text, url, date}]. [] on any failure."""
    handle = (handle or '').lstrip('@').strip()
    if not handle:
        return []
    url = _TIMELINE_URL.format(handle=handle)
    raw = None
    for attempt in range(retries + 1):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': _UA,
                'Accept': 'text/html,application/json',
                'Accept-Language': 'en-GB,en;q=0.9',
            })
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                raw = resp.read().decode('utf-8', 'replace')
            break
        except Exception as e:  # noqa: BLE001 -- best-effort source, never fatal
            if attempt < retries:
                time.sleep(1.5 * (attempt + 1))  # brief backoff on 429/transient
                continue
            print(f"  [x_source] {handle}: fetch failed ({e})", file=sys.stderr)
            return []

    m = _NEXT_DATA_RE.search(raw or '')
    if not m:
        return []
    try:
        blob = json.loads(m.group(1))
    except json.JSONDecodeError:
        return []

    found = []
    _walk_tweets(blob, found)
    tweets, seen = [], set()
    for t in found:
        text = unescape((t.get('full_text') or t.get('text') or '').strip())
        tid = t.get('id_str') or t.get('id')
        if not text or tid in seen:
            continue
        seen.add(tid)
        tweets.append({
            'text': text,
            'url': f"https://x.com/{handle}/status/{tid}" if tid else f"https://x.com/{handle}",
            'date': t.get('created_at', ''),
        })
    return tweets


def fetch_handles(handles, timeout=20):
    """Flatten fetch_handle over many handles, de-duplicated by tweet text."""
    out, seen = [], set()
    for h in handles:
        for tw in fetch_handle(h, timeout=timeout):
            key = tw['text'][:120]
            if key in seen:
                continue
            seen.add(key)
            out.append(tw)
    return out


def handles_for_nation(nation, sources_for_nation):
    """Curated known handles for the nation + any @handles named in sources.json +
    the two global names, de-duplicated (case-insensitive)."""
    handles, seen = [], set()
    for h in (KNOWN_HANDLES.get(nation, []) + KNOWN_HANDLES['Global']):
        if h.lower() not in seen:
            seen.add(h.lower()); handles.append(h)
    for r in (sources_for_nation or {}).get('tier1', []):
        h = _handle_from_source(r)
        if h and h.lower() not in seen:
            seen.add(h.lower()); handles.append(h)
    return handles


if __name__ == '__main__':
    # Smoke test: python3 engine/x_source.py FabrizioRomano David_Ornstein
    for h in sys.argv[1:] or ['FabrizioRomano']:
        tws = fetch_handle(h)
        print(f"@{h}: {len(tws)} tweet(s)")
        for t in tws[:3]:
            print(f"  - {t['text'][:120]}")
