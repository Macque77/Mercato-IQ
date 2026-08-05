#!/usr/bin/env python3
"""Assemble a ready-to-paste research-agent prompt for a batch of clubs,
embedding the known-good direct source URLs and a WebFetch-first instruction
so every dispatched agent starts efficient instead of open-endedly searching.

Why this exists (2026-08-04): the top-5-league refresh session found that
research agents which searched open-endedly (WebSearch, guessing queries)
routinely burned 300-700+ seconds and 60-140+ tool calls per agent, and
WebSearch itself has a hard per-session cap (200 calls) that got hit mid-batch
that same session, killing 3 of 5 dispatched agents outright before they'd
done anything. Agents that instead fetched a short list of known-good outlet
URLs directly with WebFetch recovered instantly and produced comparably good,
better-sourced results in a fraction of the time. This script bakes that
lesson into a reusable prompt template pulling from engine/sources.json (a
machine-readable distillation of claude/TRANSFER_SOURCES_COMPREHENSIVE.md's
per-nation Tier 1/2 outlets) so the instruction doesn't have to be re-typed
--and potentially forgotten-- by hand every session.

This script does NOT call any LLM/network tool itself (this whole pipeline's
scripts never do -- that's the point). It only prints a prompt string; you
paste that into an Agent tool call.

Usage:
    python3 engine/build_research_prompt.py --nation Spain --clubs alaves,barcelona
    python3 engine/build_research_prompt.py --league "Premier League" --clubs arsenal,chelsea,fulham,everton
    python3 engine/build_research_prompt.py --nation Germany --clubs bayern-munich > /tmp/prompt.txt
"""
import json
import os
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCES_PATH = os.path.join(REPO, 'engine', 'sources.json')

SCHEMA_BLOCK = '''{
  "clubs": [
    {
      "slug": "<slug>",
      "incoming": [{"name":"...","sub":"...","club":"...","pos":"...","report":"...","src":"...","tier":1,"fee":"...","truth":80,"prob":60,"note":"...","sourceUrl":"...","sourceLabel":"..."}],
      "outgoing": [ ... same shape ... ],
      "confirmed_in": [{"name":"...","sub":"...","club":"...","pos":"...","fee":"...","free":false,"note":"...","sourceUrl":"...","sourceLabel":"..."}],
      "confirmed_out": [ ... same shape ... ]
    }
  ]
}'''


def load_sources():
    if not os.path.exists(SOURCES_PATH):
        return {}
    return json.load(open(SOURCES_PATH, encoding='utf-8'))


def build_prompt(nation, clubs):
    sources = load_sources()
    nation_sources = sources.get(nation, {}) if nation else {}
    tier1 = nation_sources.get('tier1', [])
    tier2_urls = nation_sources.get('tier2_urls', [])

    lines = []
    lines.append("IMPORTANT: Prefer WebFetch over WebSearch. WebSearch has a hard per-session")
    lines.append("cap on this platform and may already be exhausted by earlier work this")
    lines.append("session -- if so it fails immediately with zero results. WebFetch has no")
    lines.append("such cap and, fetched directly against known outlet pages, is faster and")
    lines.append("at least as well-sourced. Start with the URLs below; only fall back to")
    lines.append("WebSearch/Bing News search URLs if a specific club's direct pages are thin.")
    lines.append("")
    if tier2_urls:
        lines.append(f"Known-good outlet homepages/trackers for {nation or 'this nation'} (WebFetch these first):")
        for u in tier2_urls:
            lines.append(f"  - {u}")
        lines.append("")
    if tier1:
        lines.append(f"Priority reporters to search for/attribute to when found ({nation or 'this nation'}):")
        for r in tier1:
            lines.append(f"  - {r}")
        lines.append("")

    club_list = ', '.join(clubs)
    lines.append(f"Research current, real, sourced football transfer rumours and confirmed deals")
    lines.append(f"for these clubs as of today (check the live transfer window dates before")
    lines.append(f"assuming it's open): {club_list}.")
    lines.append("")
    lines.append("For EACH club, find genuine transfer news: players linked with signing")
    lines.append("(incoming), players linked with leaving (outgoing), and any deals already")
    lines.append("confirmed/completed (confirmed_in / confirmed_out).")
    lines.append("")
    lines.append("For each rumour/deal capture: name, sub (descriptor), club (counterparty),")
    lines.append("pos (ST/CM/CB/GK/RB/LB/RW/LW/CAM/CDM), report (one sentence), src (the")
    lines.append("ORIGINAL reporter/outlet -- never transferfeed.com, trace back to the")
    lines.append("original source it credits if found there), tier (1=top-tier, 2=solid,")
    lines.append("3=speculative), truth (0-100), prob (0-100), note, sourceUrl, sourceLabel.")
    lines.append("")
    lines.append("Output ONLY a single JSON object, no markdown fences, no commentary,")
    lines.append("matching EXACTLY this schema:")
    lines.append("")
    lines.append(SCHEMA_BLOCK)
    lines.append("")
    lines.append("Include every listed club as a separate entry, even if sparse. Only real")
    lines.append("findings from actual fetches -- never fabricate players, clubs, or sources.")
    lines.append("Save your final JSON to a file with a file write before finishing.")

    return '\n'.join(lines)


def main():
    args = sys.argv[1:]

    def opt(name, default=None):
        if name in args:
            return args[args.index(name) + 1]
        return default

    nation = opt('--nation')
    league = opt('--league')
    clubs_arg = opt('--clubs')
    if not clubs_arg:
        print(__doc__)
        sys.exit(1)
    clubs = clubs_arg.split(',')

    # If only --league given (no --nation), sources.json is keyed by nation,
    # not league -- caller should pass --nation for source lookup to work;
    # league is accepted for documentation/labeling purposes in the prompt.
    print(build_prompt(nation, clubs))


if __name__ == '__main__':
    main()
