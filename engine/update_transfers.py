#!/usr/bin/env python3
"""
European transfer update engine.
Processes transfer data and updates club .data.js files systematically.
"""

import re, os, json, glob
from pathlib import Path
from datetime import datetime

# Map of player transfers: (player, from_club_slug, to_club_slug, status, fee, note)
TRANSFERS = [
    # CONFIRMED PREMIER LEAGUE
    ("Danny Welbeck", "brighton", "chelsea", "confirmed", "undisclosed", 
     "Brighton's veteran departed to Chelsea in summer 2026."),
    ("Maxence Lacroix", "crystal-palace", "chelsea", "confirmed", "£15m", 
     "Centre-back confirmed from Palace to Chelsea."),
    ("Valentín Barco", "strasbourg", "chelsea", "confirmed", "undisclosed", 
     "Argentine left-back arrives from Strasbourg."),
    ("Conor Gallagher", "atletico-madrid", "tottenham-hotspur", "confirmed", "£34-40m", 
     "England midfielder returns to Spurs from Atlético Madrid."),
    ("Leny Yoro", "lille", "manchester-united", "confirmed", "€70m", 
     "French centre-back confirmed as Man United's summer signing."),
    
    # CONFIRMED ELSEWHERE
    ("Álvaro Morata", "atletico-madrid", "ac-milan", "confirmed", "undisclosed", 
     "Spanish striker joins AC Milan from Atlético Madrid."),
    ("Mason Greenwood", "marseille", "fenerbahce", "confirmed", "€39m", 
     "Englishman confirms move to Turkish Super Lig."),
    
    # ADVANCED NEGOTIATIONS
    ("Bruno Guimarães", "newcastle-united", "arsenal", "advanced", "fee agreed", 
     "Newcastle midfielder transfer request granted; Arsenal agree fee."),
    ("Savinho", "manchester-city", "tottenham-hotspur", "advanced", "£65m", 
     "Manchester City winger deal with Spurs gathering pace."),
    ("Pep Chavarría", "rayo-vallecano", "chelsea", "advanced", "€25m", 
     "Chelsea close on Vallecano winger, improved bid submitted."),
]

# Map club names to slug format
CLUB_NAME_MAP = {
    "brighton": "brighton",
    "chelsea": "chelsea",
    "crystal-palace": "crystal-palace",
    "atletico-madrid": "atletico-madrid",
    "tottenham-hotspur": "tottenham-hotspur",
    "manchester-united": "manchester-united",
    "manchester-city": "manchester-city",
    "newcastle-united": "newcastle-united",
    "arsenal": "arsenal",
    "rayo-vallecano": "rayo-vallecano",
    "lille": "lille",
    "marseille": "marseille",
    "fenerbahce": "fenerbahce",
    "ac-milan": "ac-milan",
}

def update_club_file(slug, transfers_for_club):
    """Update a single club .data.js file with new transfers."""
    data_path = f'clubs/{slug}.data.js'
    if not os.path.exists(data_path):
        print(f'SKIP: {slug} - file not found')
        return False
    
    data = open(data_path).read()
    
    # Parse the data structure
    today = datetime.now().strftime('%d %b %Y')
    
    for player, from_slug, to_slug, status, fee, note in transfers_for_club:
        if status == "confirmed":
            array = "CONFIRMED_IN" if to_slug == slug else "CONFIRMED_OUT"
            entry = (f"        {{ name: '{player}', club: '{from_slug if array == 'CONFIRMED_IN' else to_slug}', "
                    f"fee: '{fee}', note: '{note}' }},")
        else:
            array = "INCOMING" if to_slug == slug else "OUTGOING"
            entry = (f"        {{ name: '{player}', club: '{from_slug if array == 'INCOMING' else to_slug}', "
                    f"prob: 75, light: 'y', fee: '{fee}', note: '{note}' }},")
        
        # Check if player already in data
        if player in data:
            print(f'  {slug}: {player} already in data, skipping')
            continue
        
        # Add to appropriate array
        pattern = f'const {array} = \\[([^\\]]*)'
        match = re.search(pattern, data, re.DOTALL)
        if match:
            insertion_point = match.end() - 1
            data = data[:insertion_point] + '\n' + entry + '\n    ' + data[insertion_point:]
            print(f'  {slug}: Added {player} to {array}')
    
    # Update REPORT_META
    meta_pattern = r'const REPORT_META = \{[^}]*label:\s*"([^"]*)"'
    data = re.sub(
        meta_pattern,
        f'const REPORT_META = {{ label: "Updated {today} – European refresh"',
        data
    )
    
    # Write back
    open(data_path, 'w').write(data)
    return True

def main():
    print('EUROPEAN TRANSFER UPDATE - August 3, 2026')
    print('='*50)
    
    # Group transfers by club
    by_club = {}
    for player, from_slug, to_slug, status, fee, note in TRANSFERS:
        # Add to selling club OUTGOING/CONFIRMED_OUT
        if from_slug not in by_club:
            by_club[from_slug] = []
        by_club[from_slug].append((player, from_slug, to_slug, status, fee, note))
        
        # Add to buying club INCOMING/CONFIRMED_IN
        if to_slug not in by_club:
            by_club[to_slug] = []
        by_club[to_slug].append((player, from_slug, to_slug, status, fee, note))
    
    # Update each club
    updated_count = 0
    for slug, transfers_list in by_club.items():
        print(f'\nProcessing {slug}:')
        if update_club_file(slug, transfers_list):
            updated_count += 1
    
    print(f'\n{"="*50}')
    print(f'UPDATED: {updated_count} club files')

if __name__ == '__main__':
    main()
