#!/usr/bin/env python3
"""Escape quotes in club data files."""

import re, glob

for data_file in glob.glob('clubs/*.data.js'):
    data = open(data_file).read()
    
    # Escape single quotes in note fields
    data = re.sub(
        r"note:\s*'([^']*)'",
        lambda m: "note: '" + m.group(1).replace("'", "\\'") + "'",
        data
    )
    
    open(data_file, 'w').write(data)

print("Quotes escaped.")
