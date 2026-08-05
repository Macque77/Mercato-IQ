#!/usr/bin/env python3
"""Update European clubs with new transfer data."""

import re, os
from datetime import datetime

TRANSFERS = [
    # SERIE A
    ("Cristian Romero", "tottenham-hotspur", "inter-milan", "advanced", "€40m", 
     "Tottenham centre-back deal agreed; personal terms and medical pending."),
    ("Pietro Comuzzo", "fiorentina", "torino", "confirmed", "loan", 
     "Fiorentina defender loaned to Torino with option."),
    
    # BUNDESLIGA
    ("Konstantinos Karetsas", "krc-genk", "borussia-dortmund", "confirmed", "€32m", 
     "Dortmund complete signing of Belgian striker."),
    ("Fisnik Asllani", "hoffenheim", "rb-leipzig", "advanced", "fee agreed", 
     "Leipzig close on Hoffenheim striker; personal terms advanced."),
    
    # LIGUE 1
    ("Matthis Abline", "nantes", "as-monaco", "confirmed", "€30m", 
     "Monaco complete signing of striker from Nantes."),
    ("Igor Paixão", "feyenoord", "olympique-marseille", "confirmed", "fee agreed", 
     "Marseille confirm winger from Feyenoord."),
    ("Zion Suzuki", "parma", "paris-saint-germain", "advanced", "€33m", 
     "PSG advance on Japanese-Ghanaian goalkeeper from Parma."),
    
    # LA LIGA
    ("Valou", "villarreal", "getafe", "confirmed", "loan", 
     "Villarreal loan Valou to Getafe; no purchase option."),
]

def update_club(slug, transfers_list):
    """Update a club's data file."""
    data_path = f'clubs/{slug}.data.js'
    if not os.path.exists(data_path):
        return False
    
    data = open(data_path).read()
    today = datetime.now().strftime('%d %b %Y')
    
    for player, from_slug, to_slug, status, fee, note in transfers_list:
        if player in data:
            continue
        
        if status == "confirmed":
            array = "CONFIRMED_IN" if to_slug == slug else "CONFIRMED_OUT"
            prob_str = ""
        else:
            array = "INCOMING" if to_slug == slug else "OUTGOING"
            prob_str = "prob: 80, light: 'y', "
        
        club_ref = from_slug if (array == "CONFIRMED_IN" or array == "INCOMING") else to_slug
        entry = "        { name: '" + player + "', club: '" + club_ref + "', " + prob_str + "fee: '" + fee + "', note: '" + note + "' },"
        
        pattern = r'const ' + array + r' = \[([^\]]*)'
        match = re.search(pattern, data, re.DOTALL)
        if match:
            insertion_point = match.end() - 1
            data = data[:insertion_point] + '\n' + entry + '\n    ' + data[insertion_point:]
    
    meta_pattern = r'const REPORT_META = \{[^}]*label:\s*"([^"]*)"'
    new_label = 'Updated ' + today + ' – European refresh'
    data = re.sub(meta_pattern, 'const REPORT_META = { label: "' + new_label, data)
    
    open(data_path, 'w').write(data)
    return True

# Group by club
clubs = {}
for player, from_slug, to_slug, status, fee, note in TRANSFERS:
    if from_slug not in clubs:
        clubs[from_slug] = []
    clubs[from_slug].append((player, from_slug, to_slug, status, fee, note))
    
    if to_slug not in clubs:
        clubs[to_slug] = []
    clubs[to_slug].append((player, from_slug, to_slug, status, fee, note))

print("EUROPEAN TRANSFER UPDATE (Round 2)")
for slug, trans_list in clubs.items():
    if update_club(slug, trans_list):
        print(f"✓ {slug}")
    else:
        print(f"✗ {slug} (file not found)")
