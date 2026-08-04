#!/usr/bin/env python3
"""Phase 0 pre-filter: turn an already-fetched feed's items into a short list
of "new since last check" transfer-relevant headlines, so a sync doesn't have
to spend a full agentic WebSearch pass just to discover that nothing happened.

IMPORTANT -- this script does NOT fetch anything itself. This sandbox's
outbound network is allowlisted (package registries etc.) and blocks direct
`curl`/`urllib` calls to arbitrary domains like bbc.co.uk with a 403 tunnel
error -- confirmed 2026-08-04. Only the WebFetch/WebSearch *tools* (routed
through Anthropic's own fetch infrastructure, not this container's network)
can reach the open web. So the actual fetch is a step for the calling agent:

  1. Agent calls WebFetch on https://feeds.bbci.co.uk/sport/football/rss.xml
     with a prompt like: "List every <item> in this RSS feed as a JSON array
     of {title, link, guid, pubDate}, verbatim and in order, do not summarize
     or omit any item."
  2. Agent saves that JSON array to a file (e.g. /tmp/bbc_items.json).
  3. Agent runs: python3 engine/poll_feeds.py --input /tmp/bbc_items.json --source "BBC Sport Football"
  4. This script filters out anything already in engine/.feed_seen.json,
     keyword-filters the rest for transfer relevance, updates the seen-state,
     and prints the new relevant items for the agent to use as research leads.
  5. Commit engine/.feed_seen.json afterwards (small file, `git add -A` picks
     it up) -- scheduled runs are fresh clones each time, so without
     committing the seen-state, every fresh clone would think the whole feed
     is "new" and flood the next research pass with old news.

A hit here means "worth spending a real research pass on this headline" --
it is a lead, not something to inject into a club page verbatim.

Usage:
    python3 engine/poll_feeds.py --input items.json [--source NAME]   # human-readable
    python3 engine/poll_feeds.py --input items.json --json            # machine-readable
    python3 engine/poll_feeds.py --input items.json --quiet            # exit 0 if new
                                                                          relevant items found, 1 otherwise
"""
import json, os, re, sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SEEN_FILE = os.path.join(REPO, 'engine', '.feed_seen.json')

# Loose keyword filter -- breadth-first, not the source of truth. A hit here
# just means "worth spending a real research pass on this headline".
TRANSFER_KEYWORDS = re.compile(
    r'\b(transfer|sign(s|ed|ing)?|deal|move|loan(ed)?|medical|fee|bid|agree(s|d)?|'
    r'join(s|ed)?|confirm(s|ed)?|deadline day|swoop|targets?|linked|release clause)\b',
    re.IGNORECASE,
)


def load_seen():
    if os.path.exists(SEEN_FILE):
        try:
            return set(json.load(open(SEEN_FILE)))
        except Exception:
            return set()
    return set()


def save_seen(seen):
    trimmed = list(seen)[-2000:]  # cap so this file doesn't grow forever
    with open(SEEN_FILE, 'w') as f:
        json.dump(trimmed, f)


def main():
    if '--input' not in sys.argv:
        print(__doc__)
        sys.exit(1)
    input_path = sys.argv[sys.argv.index('--input') + 1]
    source_name = 'feed'
    if '--source' in sys.argv:
        source_name = sys.argv[sys.argv.index('--source') + 1]

    items = json.load(open(input_path, encoding='utf-8'))
    seen = load_seen()
    new_items = []
    for it in items:
        title = (it.get('title') or '').strip()
        link = (it.get('link') or '').strip()
        guid = (it.get('guid') or link).strip()
        pub = (it.get('pubDate') or '').strip()
        if not title or not guid:
            continue
        if guid in seen:
            continue
        seen.add(guid)
        if TRANSFER_KEYWORDS.search(title):
            new_items.append({'title': title, 'link': link, 'guid': guid, 'pubDate': pub, 'source': source_name})

    save_seen(seen)

    if '--json' in sys.argv:
        print(json.dumps(new_items, indent=2))
    elif '--quiet' in sys.argv:
        sys.exit(0 if new_items else 1)
    else:
        if not new_items:
            print('No new transfer-relevant headlines since last poll.')
        for it in new_items:
            print(f"[{it['source']}] {it['title']}  -- {it['link']}  ({it['pubDate']})")


if __name__ == '__main__':
    main()
