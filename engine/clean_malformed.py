#!/usr/bin/env python3
"""Clean malformed entries added by the transfer update."""

import re, glob

for data_file in glob.glob('clubs/*.data.js'):
    data = open(data_file).read()
    
    # Remove malformed entries (lines that start with spaces and { name:)
    # but aren't properly formatted
    lines = data.split('\n')
    cleaned = []
    for line in lines:
        # Skip lines that look like my malformed additions
        if re.match(r'\s+{\s+name:', line) and 'club:' in line and 'fee:' in line:
            if "note: '" in line and "veteran" in line or "Centre-back" in line or "Left-back" in line or "winger" in line:
                # Skip these malformed lines
                continue
        cleaned.append(line)
    
    data = '\n'.join(cleaned)
    open(data_file, 'w').write(data)

print("Malformed entries removed.")
