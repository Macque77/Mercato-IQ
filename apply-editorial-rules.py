#!/usr/bin/env python3
"""
Apply Editorial & Style Rules v1.4 to all club data files.
Rules:
1. British English throughout
2. No em dashes (—) - replace with commas, colons, full stops, or plain hyphens
3. Journalistic tone - short direct sentences, no filler
4. Skeptical notes on weak sourcing
"""

import os
import re
import glob

def fix_em_dashes(text):
    """Replace em dashes with appropriate punctuation."""
    # Replace em dashes with comma + space (most common case)
    text = text.replace(' — ', ', ')
    # Also handle em dashes without spaces
    text = text.replace('—', ',')
    return text

def fix_american_spellings(text):
    """Convert common American spellings to British English."""
    replacements = {
        'favorite': 'favourite',
        'color': 'colour',
        'honor': 'honour',
        'armor': 'armour',
        'center': 'centre',
        'theater': 'theatre',
        'meter': 'metre',
        'liter': 'litre',
        'traveled': 'travelled',
        'traveling': 'traveling',
        'labeled': 'labelled',
        'labeling': 'labelling',
        'organized': 'organised',
        'summarize': 'summarise',
        'analyze': 'analyse',
        'customize': 'customise',
        'utilize': 'utilise',
        'realize': 'realise',
    }
    
    for american, british in replacements.items():
        text = re.sub(r'\b' + american + r'\b', british, text, flags=re.IGNORECASE)
    
    return text

def process_file(filepath):
    """Process a single club data file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        print(f'ERROR: Could not read {filepath}')
        return False
    
    original = content
    
    # Apply editorial rules
    content = fix_em_dashes(content)
    content = fix_american_spellings(content)
    
    # Only write if there were changes
    if content != original:
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'✓ {os.path.basename(filepath)}')
            return True
        except:
            print(f'ERROR: Could not write {filepath}')
            return False
    else:
        return None

# Process all club data files
club_files = glob.glob('clubs/*.data.js')
print(f'Processing {len(club_files)} club data files...\n')

fixed = 0
unchanged = 0
errors = 0

for filepath in sorted(club_files):
    result = process_file(filepath)
    if result is True:
        fixed += 1
    elif result is False:
        errors += 1
    else:
        unchanged += 1

print(f'\nResults:')
print(f'  Fixed: {fixed}')
print(f'  Unchanged: {unchanged}')
print(f'  Errors: {errors}')
