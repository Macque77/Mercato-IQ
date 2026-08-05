#!/usr/bin/env python3
"""Update all club data files with correct nation/league breadcrumbs from mapping."""

import json
import re
import glob
import os

# Load mapping
with open('clubs-mapping.json') as f:
    mapping = json.load(f)

print(f"Loaded mapping for {len(mapping)} clubs")

updated = 0
for data_file in sorted(glob.glob('clubs/*.data.js')):
    slug = os.path.basename(data_file).replace('.data.js', '')
    
    if slug not in mapping:
        print(f"⚠ {slug}: not in mapping")
        continue
    
    club_info = mapping[slug]
    nation = club_info['nation']
    league = club_info['league']
    
    data = open(data_file).read()
    
    # Update breadcrumb
    old_breadcrumb = re.search(r'breadcrumb:\s*\[[^\]]+\]', data)
    new_breadcrumb = f'breadcrumb: ["{nation}","{league}"]'
    
    if old_breadcrumb:
        data = data.replace(old_breadcrumb.group(0), new_breadcrumb)
    else:
        print(f"⚠ {slug}: no breadcrumb found")
        continue
    
    open(data_file, 'w').write(data)
    updated += 1
    print(f"✓ {slug}: {nation} / {league}")

print(f"\nUpdated {updated} club files")
