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

FLAG_EMOJI = {
    'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'Wales': '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    'Northern Ireland': '🇬🇧', 'Republic of Ireland': '🇮🇪', 'Ireland': '🇮🇪',
    'Spain': '🇪🇸', 'Italy': '🇮🇹', 'Germany': '🇩🇪', 'France': '🇫🇷',
    'Portugal': '🇵🇹', 'Netherlands': '🇳🇱', 'Belgium': '🇧🇪', 'Turkey': '🇹🇷',
    'Turkiye': '🇹🇷', 'Greece': '🇬🇷', 'Russia': '🇷🇺', 'Ukraine': '🇺🇦',
    'Switzerland': '🇨🇭', 'Austria': '🇦🇹', 'Denmark': '🇩🇰', 'Sweden': '🇸🇪',
    'Norway': '🇳🇴', 'Poland': '🇵🇱', 'Croatia': '🇭🇷', 'Serbia': '🇷🇸',
    'Brazil': '🇧🇷', 'Argentina': '🇦🇷', 'USA': '🇺🇸', 'United States': '🇺🇸',
    'Saudi Arabia': '🇸🇦', 'Qatar': '🇶🇦', 'Unknown': '🌍',
}

def slugify(text):
    """Lowercase, hyphenate a name into a URL-safe slug."""
    text = re.sub(r"[^a-zA-Z0-9\s-]", '', text or '').strip().lower()
    return re.sub(r'[\s_]+', '-', text)

def extract_js_array(content, array_name):
    """Extract a JavaScript array from .data.js content via regex.
    Returns a list of dicts, or empty list if not found."""
    pattern = rf'const\s+{array_name}\s*=\s*\[([\s\S]*?)\n\];'
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
                obj_str = current.strip().rstrip(',').lstrip(',').strip()
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

    pattern = r'(\w+)\s*:\s*([^,}]+?)(?=,\s*\w+\s*:|$)'
    matches = re.finditer(pattern, content)

    for match in matches:
        key = match.group(1).strip()
        value = match.group(2).strip()

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
            result[key] = value

    return result if result else None

def extract_brand(content):
    """Extract BRAND object from club data.
    breadcrumb is a JS array (e.g. ["England", "Premier League"]), which the
    generic key:value parser in parse_js_object can't handle (it splits on
    every comma, including the ones inside the array), so it's parsed with
    its own targeted regex and merged over whatever parse_js_object returns."""
    pattern = r'const\s+BRAND\s*=\s*({[^}]+});'
    match = re.search(pattern, content)
    if not match:
        return {}
    block = match.group(1)
    result = parse_js_object(block) or {}
    bc_match = re.search(r'breadcrumb\s*:\s*\[([^\]]*)\]', block)
    if bc_match:
        result['breadcrumb'] = re.findall(r'["\']([^"\']*)["\']', bc_match.group(1))
    return result

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

    incoming = extract_js_array(content, 'INCOMING')
    outgoing = extract_js_array(content, 'OUTGOING')

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

    deduped = {}
    for story in stories:
        name = story.get('name', 'Unknown')
        if name not in deduped:
            deduped[name] = story
        else:
            existing_tier = deduped[name].get('tier', 5)
            new_tier = story.get('tier', 5)
            if new_tier < existing_tier:
                deduped[name] = story
            elif new_tier == existing_tier:
                existing_prob = deduped[name].get('prob', 0)
                new_prob = story.get('prob', 0)
                if new_prob > existing_prob:
                    deduped[name] = story

    def sort_key(story):
        name, item = story
        tier = item.get('tier', 5)
        prob = -(item.get('prob', 0))
        fee_str = str(item.get('fee', '0m'))
        value_match = re.search(r'(\d+)', fee_str)
        value = -(int(value_match.group(1)) if value_match else 0)
        return (tier, prob, value)

    sorted_stories = sorted(deduped.items(), key=sort_key)
    return [item for name, item in sorted_stories]

def emit_global_data(all_stories):
    """Emit data/global.data.js with top 12 stories."""
    top_stories = all_stories[:12]

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

    # Leagues represented within each nation (for nation-card subtitles)
    nation_leagues = {}
    for story in all_stories:
        nation = story.get('nation', 'Unknown')
        league = story.get('league', 'Unknown')
        nation_leagues.setdefault(nation, set()).add(league)

    nations_sorted = sorted(nations.items(), key=lambda x: -x[1])
    nations_js = '[\n'
    for nation_name, count in nations_sorted:
        if nation_name == 'Unknown':
            continue
        slug = slugify(nation_name)
        flag = FLAG_EMOJI.get(nation_name, '🌍')
        league_count = len(nation_leagues.get(nation_name, set()))
        nations_js += f'''  {{
    name: "{nation_name}", slug: "{slug}", flag_emoji: "{flag}",
    stories_count: {count}, league_count: {league_count}
  }},
'''
    nations_js += ']'

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

const NATIONS = {nations_js};

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
    nation_flag = FLAG_EMOJI.get(nation_name, '\U0001F30D')

    data_js = f'''/* ============================================================
   MERCATO IQ · NATION DATA · {nation_name}
   Generated by engine/aggregate.py. Never hand-edit.
   ============================================================ */

const NATION = {{
  name: "{nation_name}",
  flag_emoji: "{nation_flag}",
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

    sorted_stories = deduplicate_and_rank(all_stories)
    print(f'AGGREGATE: {len(sorted_stories)} unique stories after dedup')

    emit_global_data(sorted_stories)

    for nation in sorted(nations_set):
        nation_slug = nation.lower().replace(' ', '-')
        emit_nation_data(sorted_stories, nation_slug, nation)

    for league in sorted(leagues_set):
        league_slug = league.lower().replace(' ', '-')
        emit_league_data(sorted_stories, league_slug, league)

    print(f'AGGREGATE: complete. Emitted global + {len(nations_set)} nations + {len(leagues_set)} leagues')

if __name__ == '__main__':
    main()
