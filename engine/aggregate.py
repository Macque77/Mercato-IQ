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

# Landing pages (global/nation/league) are player-transfer-rumours-and-confirmed-business only.
# Managerial/coaching links and generic "framing rows" (position-need context with no named
# individual player and no named real counterpart club) are real content on the club pages but
# don't belong in the aggregated rollups. Filtered out here, at the point stories enter the
# cross-club pool, so club pages themselves are completely unaffected.
NON_PLAYER_POS = {'head coach', 'manager', 'coach', 'squad', 'sqd', 'spine'}
NON_PLAYER_CLUB = {'market', 'various'}
NON_PLAYER_REPORT = {'window framing'}  # club data's own marker for a synthetic, no-named-player row

def is_player_transfer_story(item):
    """True if this row is a genuine named-player transfer rumour/confirmed move,
    not a managerial link or a no-named-player framing/context row. 'window framing' is the
    marker club data files use for pattern-based/data-model rows (e.g. "Prized asset (premium
    sale)", "Forward depth options") that describe a recruitment pattern, not an actual rumour,
    so they're excluded regardless of which placeholder club/position they carry."""
    pos = str(item.get('pos', '')).strip().lower()
    club = str(item.get('club', '')).strip().lower()
    report = str(item.get('report', '')).strip().lower()
    if pos in NON_PLAYER_POS:
        return False
    if club in NON_PLAYER_CLUB:
        return False
    if report in NON_PLAYER_REPORT:
        return False
    return True

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

def extract_linkmap_counts(content):
    """Extract LINKMAP name -> number of distinct sources cited for that player.
    Used as the 'coverage' figure that drives the Trending tab (most-covered stories)."""
    pattern = r'const\s+LINKMAP\s*=\s*\{([\s\S]*?)\n\};'
    match = re.search(pattern, content)
    if not match:
        return {}
    body = match.group(1)
    counts = {}
    for m in re.finditer(r'"((?:[^"\\]|\\.)*)"\s*:\s*\[([^\]]*)\]', body):
        name = m.group(1)
        items = re.findall(r'"[^"]*"', m.group(2))
        counts[name] = max(len(items), 1)
    return counts

COVERAGE_HISTORY_PATH = 'data/.coverage_history.json'

def load_coverage_history():
    """Coverage count from the previous aggregate.py run, keyed by player name.
    Compared against this run's counts to produce a real (not simulated) recency signal
    for the Trending tab's arrow: has this story picked up more source coverage since
    the last refresh?"""
    try:
        with open(COVERAGE_HISTORY_PATH) as f:
            return json.load(f)
    except Exception:
        return {}

def save_coverage_history(history):
    os.makedirs('data', exist_ok=True)
    with open(COVERAGE_HISTORY_PATH, 'w') as f:
        json.dump(history, f)

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
    linkmap_counts = extract_linkmap_counts(content)

    club_display_name = brand.get('club', club_slug)

    for item in incoming:
        item['club_origin'] = brand.get('slug', club_slug)
        item['club_origin_name'] = club_display_name
        breadcrumb = brand.get('breadcrumb', ['Unknown', 'Unknown'])
        item['nation'] = breadcrumb[0] if breadcrumb else 'Unknown'
        item['league'] = breadcrumb[1] if breadcrumb and len(breadcrumb) > 1 else 'Unknown'
        item['direction'] = 'in'
        item['updated'] = updated_str
        item['report'] = item.get('report', '~1 wk ago')
        item['coverage'] = linkmap_counts.get(item.get('name', ''), 1)

    for item in outgoing:
        item['club_origin'] = brand.get('slug', club_slug)
        item['club_origin_name'] = club_display_name
        breadcrumb = brand.get('breadcrumb', ['Unknown', 'Unknown'])
        item['nation'] = breadcrumb[0] if breadcrumb else 'Unknown'
        item['league'] = breadcrumb[1] if breadcrumb and len(breadcrumb) > 1 else 'Unknown'
        item['direction'] = 'out'
        item['updated'] = updated_str
        item['report'] = item.get('report', '~1 wk ago')
        item['coverage'] = linkmap_counts.get(item.get('name', ''), 1)

    # Landing pages only aggregate genuine named-player transfer rumours/confirmed moves —
    # drop managerial links and no-named-player framing rows here (club pages keep them).
    incoming = [item for item in incoming if is_player_transfer_story(item)]
    outgoing = [item for item in outgoing if is_player_transfer_story(item)]

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

GLOBAL_STORY_CAP = 60  # Breaking shows the top ~24 of these by tier/prob; Trending shows the rest.

def emit_global_data(all_stories):
    """Emit data/global.data.js. HEADLINES carries every tracked story up to GLOBAL_STORY_CAP,
    already ranked by tier/prob/value (deduplicate_and_rank order) so Breaking can show the
    leaders and Trending can show everything else, re-sorted by coverage."""
    top_stories = all_stories[:GLOBAL_STORY_CAP]

    # Initialize all 13 tracked nations with 0 stories
    nations = {
        'England': 0, 'Spain': 0, 'Italy': 0, 'Germany': 0, 'France': 0,
        'Portugal': 0, 'Greece': 0, 'Turkey': 0, 'Belgium': 0,
        'Netherlands': 0, 'Wales': 0, 'Sweden': 0
    }

    # Initialize all 28 tracked leagues with 0 stories
    leagues = {
        'Premier League': 0, 'Championship': 0,
        'La Liga': 0, 'La Liga 2': 0,
        'Serie A': 0, 'Serie B': 0, 'Serie C': 0,
        'Bundesliga': 0, '2. Bundesliga': 0,
        'Ligue 1': 0, 'Ligue 2': 0,
        'Liga Portugal': 0, 'Liga Portugal 2': 0,
        'Eredivisie': 0, 'Eerste Divisie': 0,
        'Super League': 0, 'Super League 2': 0, 'Super League U19': 0,
        'Super Lig': 0,
        'Pro League': 0,
        'Allsvenskan': 0,
        'Regionalliga': 0,
        'Championnat National': 0,
        'Segunda División B': 0
    }

    for story in all_stories:
        nation = story.get('nation', 'Unknown')
        league = story.get('league', 'Unknown')
        if nation in nations:
            nations[nation] += 1
        if league in leagues:
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
        direction = story.get('direction', 'in')
        club_link = story.get('club_origin', '?')
        origin_name = story.get('club_origin_name', club_link).replace('"', '\\"')
        counterparty = str(story.get('club', 'TBD')).replace('"', '\\"')
        # direction 'out': the tracked club is the seller (from), counterparty is the buyer (to).
        # direction 'in': the counterparty is the seller (from), the tracked club is the buyer (to).
        if direction == 'out':
            from_club, to_club = origin_name, counterparty
        else:
            from_club, to_club = counterparty, origin_name
        prob = story.get('prob', 50)
        trend = story.get('trend', 'flat')
        nation = story.get('nation', 'Unknown')
        league = story.get('league', 'Unknown')
        updated = story.get('updated', '')
        tier = story.get('tier', 3)
        coverage = story.get('coverage', 1)
        coverage_trend = story.get('coverage_trend', 'flat')

        headlines_js += f'''  {{
    headline: "{headline}",
    club_display_name: "{origin_name}",
    summary: "{summary}",
    value: "{value}",
    from: "{from_club}", to: "{to_club}",
    direction: "{direction}",
    prob: {prob}, trend: '{trend}',
    tier: {tier}, coverage: {coverage}, coverage_trend: '{coverage_trend}',
    nation: "{nation}", league: "{league}",
    club_link: "{club_link}",
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
        direction = story.get('direction', 'in')
        club_link = story.get('club_origin', '')
        origin_name = str(story.get('club_origin_name', club_link)).replace('"', '\\"')
        counterparty = str(story.get('club', 'TBD')).replace('"', '\\"')
        from_club, to_club = (origin_name, counterparty) if direction == 'out' else (counterparty, origin_name)
        value = str(story.get('fee', 'TBC')).replace('"', '\\"')
        updated = story.get('updated', '')
        league = str(story.get('league', '')).replace('"', '\\"')
        tier = story.get('tier', 3)
        coverage = story.get('coverage', 1)
        coverage_trend = story.get('coverage_trend', 'flat')
        stories_js += f'''  {{
    name: "{story.get('name', '')}",prob: {story.get('prob', 50)},
    club_origin: "{club_link}", club_display_name: "{origin_name}", direction: "{direction}",
    from: "{from_club}", to: "{to_club}",
    tier: {tier}, coverage: {coverage}, coverage_trend: '{coverage_trend}',
    value: "{value}", updated: "{updated}", league: "{league}"
  }},
'''
    stories_js += ']'
    nation_flag = FLAG_EMOJI.get(nation_name, '\U0001F30D')

    leagues_list = sorted(
        [{'slug': slugify(name), 'name': name, 'count': count} for name, count in leagues.items()],
        key=lambda l: l['name']
    )
    leagues_list_js = json.dumps(leagues_list)

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

const LEAGUES_LIST = {leagues_list_js};

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

def emit_league_data(all_stories, league_slug, league_name, league_clubs=None):
    """Emit data/leagues/<slug>.data.js for a single league. league_clubs (optional) is the
    full club membership list [{slug,name,nation,league}] regardless of whether a club has any
    surviving stories, so the club-navigation rail can list every club, not just active ones."""
    league_stories = [s for s in all_stories if s.get('league') == league_name]
    top_stories = league_stories[:20]
    league_nation = next((s.get('nation') for s in league_stories if s.get('nation')), 'Unknown')

    clubs = {}
    for story in league_stories:
        club = story.get('club_origin', 'Unknown')
        if club not in clubs:
            clubs[club] = 0
        clubs[club] += 1

    stories_js = '['
    for story in top_stories:
        direction = story.get('direction', 'in')
        club_link = story.get('club_origin', '')
        origin_name = str(story.get('club_origin_name', club_link)).replace('"', '\\"')
        counterparty = str(story.get('club', 'TBD')).replace('"', '\\"')
        from_club, to_club = (origin_name, counterparty) if direction == 'out' else (counterparty, origin_name)
        value = str(story.get('fee', 'TBC')).replace('"', '\\"')
        updated = story.get('updated', '')
        tier = story.get('tier', 3)
        coverage = story.get('coverage', 1)
        coverage_trend = story.get('coverage_trend', 'flat')
        stories_js += f'''  {{
    name: "{story.get('name', '')}", prob: {story.get('prob', 50)},
    club_origin: "{club_link}", club_display_name: "{origin_name}", direction: "{direction}",
    from: "{from_club}", to: "{to_club}",
    tier: {tier}, coverage: {coverage}, coverage_trend: '{coverage_trend}',
    value: "{value}", updated: "{updated}"
  }},
'''
    stories_js += ']'

    if league_clubs:
        clubs_list = sorted(
            [{'slug': c['slug'], 'name': c['name'], 'count': clubs.get(c['slug'], 0)} for c in league_clubs],
            key=lambda c: c['name']
        )
    else:
        clubs_list = sorted(
            ({'slug': slug, 'name': next((s.get('club_origin_name', slug) for s in league_stories if s.get('club_origin') == slug), slug), 'count': count}
             for slug, count in clubs.items()),
            key=lambda c: c['name']
        )
    clubs_list_js = json.dumps(clubs_list)

    data_js = f'''/* ============================================================
   MERCATO IQ · LEAGUE DATA · {league_name}
   Generated by engine/aggregate.py. Never hand-edit.
   ============================================================ */

const LEAGUE = {{
  name: "{league_name}",
  nation: "{league_nation}",
  stories_count: {len(league_stories)}
}};

const TOP_STORIES = {stories_js};

const BY_CLUB = {json.dumps(clubs)};

const CLUBS_LIST = {clubs_list_js};

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
    all_clubs = []  # every club with a BRAND, regardless of whether it has any surviving stories
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
                    all_clubs.append({
                        'slug': club_data['brand'].get('slug', club_slug),
                        'name': club_data['brand'].get('club', club_slug),
                        'nation': breadcrumb[0],
                        'league': breadcrumb[1],
                    })

    print(f'AGGREGATE: {len(all_stories)} total stories found across all clubs')

    sorted_stories = deduplicate_and_rank(all_stories)
    print(f'AGGREGATE: {len(sorted_stories)} unique stories after dedup')

    # Coverage trend: compare this run's source count per player against the last run's,
    # persisted in data/.coverage_history.json. A real delta, not a simulated one -- a story
    # only shows 'up' if it has genuinely picked up more sources since the previous refresh.
    history = load_coverage_history()
    new_history = {}
    for story in sorted_stories:
        name = story.get('name', 'Unknown')
        cov = story.get('coverage', 1)
        prev = history.get(name)
        if prev is None:
            story['coverage_trend'] = 'flat'
        elif cov > prev:
            story['coverage_trend'] = 'up'
        elif cov < prev:
            story['coverage_trend'] = 'down'
        else:
            story['coverage_trend'] = 'flat'
        new_history[name] = cov
    save_coverage_history(new_history)

    emit_global_data(sorted_stories)

    for nation in sorted(nations_set):
        nation_slug = nation.lower().replace(' ', '-')
        emit_nation_data(sorted_stories, nation_slug, nation)

    for league in sorted(leagues_set):
        league_slug = league.lower().replace(' ', '-')
        league_clubs = [c for c in all_clubs if c['league'] == league]
        emit_league_data(sorted_stories, league_slug, league, league_clubs)

    print(f'AGGREGATE: complete. Emitted global + {len(nations_set)} nations + {len(leagues_set)} leagues')

if __name__ == '__main__':
    main()
