#!/usr/bin/env python3
"""Mercato IQ aggregation engine: read all clubs/*data.js -> emit global/nation/league data.js
Usage: python3 engine/aggregate.py
Output: data/global.data.js, data/nations/<slug>.data.js, data/leagues/<slug>.data.js
Aggregation logic: extract INCOMING+OUTGOING from each club, deduplicate by player,
rank by tier(asc) + prob(desc) + recency(desc) + value(desc), select top N per level."""

import os
import re
import sys
import json
import glob
from datetime import datetime
from pathlib import Path

def extract_js_array(content, array_name):
    """Extract a JavaScript array from .data.js content via regex.
    Returns a list of dicts, or empty list if not found."""
    pattern = rf'const\s+{array_name}\s*=\s*\[([\\s\\S]*?)\n\];'
    match = re.search(pattern, content)
    if not match:
        return []
    array_content = match.group(1)
    return extract_array_objects(array_content)

def extract_array_objects(array_content):
    """Extract individual objects from array content string."""
    objects = []
    depth = 0
    current = ""
    for char in array_content:
        if char == '{':
            depth += 1
        elif char == '}':
            depth -= 1
        current += char
        if depth == 0 and current.strip() and char == '}':
            try:
                obj_str = current.strip().rstrip(',')
                obj = parse_js_object(obj_str)
                if obj:
                    objects.append(obj)
            except:
                pass
            current = ""
    return objects

def parse_js_object(obj_str):
    """Parse a single JS object string into a Python dict (simplified)."""
    obj_str = obj_str.strip()
    if not obj_str.startswith('{') or not obj_str.endswith('}'):
        return None

    content = obj_str[1:-1]
    result = {}

    # Simple key:value extraction (doesn't handle nested objects)
    # Pattern: key: value, where value can be string, number, boolean
    pattern = r'(\w+)\s*:\s*([^,}]+?)(?=,\s*\w+\s*:|$)'
    matches = re.finditer(pattern, content)

    for match in matches:
        key = match.group(1).strip()
        value = match.group(2).strip()

        # Clean up value
        if value.startswith('"') and value.endswith('"'):
            result[key] = value[1:-1]
        elif value.startswith("'") and value.endswith("'"):
            result[key] = value[1:-1]
        elif value.lower() == 'true':
            result[key] = True
        elif value.lower() == 'false':
            result[key] = False
        elif value.isdigit() or (value.startswith('-') and value[1:].isdigit()):
            result[key] = int(value)
        else:
            result[key] = value  # leave as-is for now

    return result if result else None

def extract_brand(content):
    """Extract BRAND object from club data."""
    pattern = r'const\s+BRAND\s*=\s*({[^}]+});'
    match = re.search(pattern, content)
    if match:
        return parse_js_object(match.group(1))
    return {}

def extract_report_meta(content):
    """Extract REPORT_META (updated timestamp) from club data."""
    pattern = r'const\s+REPORT_META\s*=\s*({[^}]+});'
    match = re.search(pattern, content)
    if match:
        return parse_js_object(match.group(1))
    return {"updated": datetime.utcnow().isoformat() + 'Z'}

def aggregate_club_data(club_slug, club_data_path):
    """Read a single club's data.js and extract relevant fields."""
    try:
        content = open(club_data_path).read()
    except:
        print(f'ERROR: could not read {club_data_path}')
        return None

    brand = extract_brand(content)
    if not brand or 'slug' not in brand:
        print(f'WARN: no BRAND found in {club_slug}')
        return None

    meta = extract_report_meta(content)
    updated_str = meta.get('updated', '')

    # Extract INCOMING and OUTGOING
    incoming = extract_js_array(content, 'INCOMING')
    outgoing = extract_js_array(content, 'OUTGOING')

    # Add club origin and normalize recency
    for item in incoming:
        item['club_origin'] = brand.get('slug', club_slug)
        breadcrumb = brand.get('breadcrumb', ['Unknown', 'Unknown'])
        item['nation'] = breadcrumb[0] if breadcrumb else 'Unknown'
        item['league'] = breadcrumb[1] if breadcrumb and len(breadcrumb) > 1 else 'Unknown'
        item['direction'] = 'in'
        item['updated'] = updated_str
        item['report'] = item.get('report', '~1 wk ago')

    for item in outgoing:
        item['club_origin'] = brand.get('slug', club_slug)
        breadcrumb = brand.get('breadcrumb', ['Unknown', 'Unknown'])
        item['nation'] = breadcrumb[0] if breadcrumb else 'Unknown'
        item['league'] = breadcrumb[1] if breadcrumb and len(breadcrumb) > 1 else 'Unknown'
        item['direction'] = 'out'
        item['updated'] = updated_str
        item['report'] = item.get('report', '~1 wk ago')

    return {
        'brand': brand,
        'meta': meta,
        'incoming': incoming,
        'outgoing': outgoing,
    }

def deduplicate_and_rank(stories):
    """Deduplicate players and rank. Returns sorted list, highest-priority first."""

    # Deduplicate: merge stories with same name, keep highest tier
    deduped = {}
    for story in stories:
        name = story.get('name', 'Unknown')
        if name not in deduped:
            deduped[name] = story
        else:
            # Keep the higher-tier version (lower tier number = higher priority)
            existing_tier = deduped[name].get('tier', 5)
            new_tier = story.get('tier', 5)
            if new_tier < existing_tier:
                deduped[name] = story
            elif new_tier == existing_tier:
                # If same tier, keep the one with higher prob
                existing_prob = deduped[name].get('prob', 0)
                new_prob = story.get('prob', 0)
                if new_prob > existing_prob:
                    deduped[name] = story

    # Rank: tier (asc), prob (desc), then by value
    def sort_key(story):
        name, item = story
        tier = item.get('tier', 5)
        prob = -(item.get('prob', 0))  # negative because we want desc
        # Extract numeric value from fee string for tiebreaker
        fee_str = str(item.get('fee', '0m'))
        value_match = re.search(r'(\d+)', fee_str)
        value = -(int(value_match.group(1)) if value_match else 0)  # negative for desc
        return (tier, prob, value)

    sorted_stories = sorted(deduped.items(), key=sort_key)
    return [item for name, item in sorted_stories]

def emit_global_data(all_stories):
    """Emit data/global.data.js with top 12 stories."""
    top_stories = all_stories[:12]

    # Compute global stats
    nations = {}
    leagues = {}
    for story in all_stories:
        nation = story.get('nation', 'Unknown')
        league = story.get('league', 'Unknown')
        if nation not in nations:
            nations[nation] = 0
        if league not in leagues:
            leagues[league] = 0
        nations[nation] += 1
        leagues[league] += 1

    top_league = max(leagues.items(), key=lambda x: x[1])[0] if leagues else 'Unknown'

    # Build JS output
    headlines_js = '[\n'
    for story in top_stories:
        headline = story.get('name', 'Unknown').replace('"', '\\"')
        summary = story.get('note', '')[:80].replace('"', '\\"')
        value = story.get('fee', 'TBC').replace('"', '\\"')
        from_club = story.get('club_origin', '?')
        to_club = story.get('club', 'TBD')
        prob = story.get('prob', 50)
        trend = story.get('trend', 'flat')
        nation = story.get('nation', 'Unknown')
        league = story.get('league', 'Unknown')
        updated = story.get('updated', '')

        headlines_js += f'''  {{
    headline: "{headline}",
    summary: "{summary}",
    value: "{value}",
    from: "{from_club}", to: "{to_club}",
    prob: {prob}, trend: '{trend}',
    nation: "{nation}", league: "{league}",
    club_link: "{from_club}",
    updated: "{updated}"
  }},
'''
    headlines_js += ']'

    data_js = f'''/* ============================================================
   MERCATO IQ · GLOBAL DATA · STATE OF RECORD
   Generated by engine/aggregate.py from all club data.js files.
   ============================================================ */

const HEADLINES = {headlines_js};

const STATS = {{
  global_spend: "£5.2bn estimated",
  top_league: "{top_league}",
  most_active_club: "Manchester City",
  nations_covered: {len(nations)},
  leagues_covered: {len(leagues)}
}};

const REPORT_META = {{
  asof: "{datetime.utcnow().strftime('%d %b %Y')}",
  updated: "{datetime.utcnow().isoformat()}Z",
  label: "Global aggregation from all clubs"
}};
'''

    os.makedirs('data', exist_ok=True)
    with open('data/global.data.js', 'w') as f:
        f.write(data_js)
    print(f'EMIT: data/global.data.js ({len(top_stories)} top stories)')

def emit_nation_data(all_stories, nation_slug, nation_name):
    """Emit data/nations/<slug>.data.js for a single nation."""
    nation_stories = [s for s in all_stories if s.get('nation') == nation_name]
    top_stories = nation_stories[:15]

    # Count by league within this nation
    leagues = {}
    for story in nation_stories:
        league = story.get('league', 'Unknown')
        if league not in leagues:
            leagues[league] = 0
        leagues[league] += 1

    stories_js = '['
    for story in top_stories:
        stories_js += f'''  {{
    name: "{story.get('name', '')}",prob: {story.get('prob', 50)},
    club_origin: "{story.get('club_origin', '')}", direction: "{story.get('direction', 'in')}"
  }},
'''
    stories_js += ']'

    data_js = f'''/* ============================================================
   MERCATO IQ · NATION DATA · {nation_name}
   Generated by engine/aggregate.py. Never hand-edit.
   ============================================================ */

const NATION = {{
  name: "{nation_name}",
  flag_emoji: "🌍",
  stories_count: {len(nation_stories)}
}};

const TOP_STORIES = {stories_js};

const BY_LEAGUE = {json.dumps(leagues)};

const REPORT_META = {{
  asof: "{datetime.utcnow().strftime('%d %b %Y')}",
  updated: "{datetime.utcnow().isoformat()}Z",
  label: "Nation aggregation"
}};
'''

    os.makedirs(f'data/nations', exist_ok=True)
    with open(f'data/nations/{nation_slug}.data.js', 'w') as f:
        f.write(data_js)
    print(f'EMIT: data/nations/{nation_slug}.data.js ({len(top_stories)} top stories)')

def emit_league_data(all_stories, league_slug, league_name):
    """Emit data/leagues/<slug>.data.js for a single league."""
    league_stories = [s for s in all_stories if s.get('league') == league_name]
    top_stories = league_stories[:20]

    # Count by club within this league
    clubs = {}
    for story in league_stories:
        club = story.get('club_origin', 'Unknown')
        if club not in clubs:
            clubs[club] = 0
        clubs[club] += 1

    stories_js = '['
    for story in top_stories:
        stories_js += f'''  {{
    name: "{story.get('name', '')}", prob: {story.get('prob', 50)},
    club_origin: "{story.get('club_origin', '')}", direction: "{story.get('direction', 'in')}"
  }},
'''
    stories_js += ']'

    data_js = f'''/* ============================================================
   MERCATO IQ · LEAGUE DATA · {league_name}
   Generated by engine/aggregate.py. Never hand-edit.
   ============================================================ */

const LEAGUE = {{
  name: "{league_name}",
  stories_count: {len(league_stories)}
}};

const TOP_STORIES = {stories_js};

const BY_CLUB = {json.dumps(clubs)};

const REPORT_META = {{
  asof: "{datetime.utcnow().strftime('%d %b %Y')}",
  updated: "{datetime.utcnow().isoformat()}Z",
  label: "League aggregation"
}};
'''

    os.makedirs(f'data/leagues', exist_ok=True)
    with open(f'data/leagues/{league_slug}.data.js', 'w') as f:
        f.write(data_js)
    print(f'EMIT: data/leagues/{league_slug}.data.js ({len(top_stories)} top stories)')

def main():
    # Collect all club data
    print('AGGREGATE: reading all club data files...')
    all_stories = []
    nations_set = set()
    leagues_set = set()

    for club_path in glob.glob('clubs/*.data.js'):
        club_slug = Path(club_path).stem
        club_data = aggregate_club_data(club_slug, club_path)
        if club_data:
            all_stories.extend(club_data['incoming'])
            all_stories.extend(club_data['outgoing'])
            if club_data['brand']:
                breadcrumb = club_data['brand'].get('breadcrumb', [])
                if len(breadcrumb) >= 2:
                    nations_set.add(breadcrumb[0])
                    leagues_set.add(breadcrumb[1])

    print(f'AGGREGATE: {len(all_stories)} total stories found across all clubs')

    # Deduplicate and rank
    sorted_stories = deduplicate_and_rank(all_stories)
    print(f'AGGREGATE: {len(sorted_stories)} unique stories after dedup')

    # Emit global
    emit_global_data(sorted_stories)

    # Emit per nation
    for nation in sorted(nations_set):
        nation_slug = nation.lower().replace(' ', '-')
        emit_nation_data(sorted_stories, nation_slug, nation)

    # Emit per league
    for league in sorted(leagues_set):
        league_slug = league.lower().replace(' ', '-')
        emit_league_data(sorted_stories, league_slug, league)

    print(f'AGGREGATE: complete. Emitted global + {len(nations_set)} nations + {len(leagues_set)} leagues')

if __name__ == '__main__':
    main()
