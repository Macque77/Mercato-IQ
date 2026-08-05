#!/usr/bin/env python3
"""Fix ISO timestamps in all updated club files."""

import re, os, glob
from datetime import datetime, timezone

iso_now = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

for data_file in glob.glob('clubs/*.data.js'):
    data = open(data_file).read()
    
    # Ensure ISO timestamp exists
    if not re.search(r'updated:\s*"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z"', data):
        # Add or update updated field in REPORT_META
        data = re.sub(
            r'(const REPORT_META = \{[^}]*)',
            lambda m: m.group(1) + f', updated: "{iso_now}"' if 'updated:' not in m.group(1) else m.group(1),
            data
        )
        if 'updated:' in data:
            data = re.sub(
                r'updated:\s*"[^"]*"',
                f'updated: "{iso_now}"',
                data
            )
        else:
            # Insert it before the closing brace
            data = re.sub(
                r'(const REPORT_META = \{[^}]*)(}\s*;)',
                lambda m: m.group(1) + f', updated: "{iso_now}"' + m.group(2),
                data
            )
        
        open(data_file, 'w').write(data)
        print(f'✓ Fixed {os.path.basename(data_file)}')

print('Timestamps fixed.')
