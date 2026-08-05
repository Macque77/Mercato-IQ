#!/usr/bin/env python3
"""Reset club files to remove all malformed entries."""

import re, glob

for data_file in glob.glob('clubs/*.data.js'):
    data = open(data_file).read()
    
    # Remove ALL lines that match the malformed pattern from my updates
    # These are lines starting with whitespace that have { name: ...club: ...fee: ...note: 
    # (the simplified entries I was adding)
    lines = data.split('\n')
    cleaned = []
    skip_next = False
    for i, line in enumerate(lines):
        # Check if this is one of my bad entries
        if re.match(r'^\s+{\s+name:', line) and 'club:' in line and 'fee:' in line:
            # Skip it and any continuation lines  
            continue
        cleaned.append(line)
    
    data = '\n'.join(cleaned)
    
    # Also remove empty lines in arrays that might have been left behind
    data = re.sub(r',\s*\n\s*\n', ',\n\n', data)
    
    open(data_file, 'w').write(data)

print("Reset complete.")
