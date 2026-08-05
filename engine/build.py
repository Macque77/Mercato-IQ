#!/usr/bin/env python3
"""Mercato IQ builder: template.html + clubs/<slug>.data.js (+ badges/<slug>.b64.txt) -> <slug>.html
Usage: python3 engine/build.py <slug>
Run from the folder holding template.html. Gates: markers, JS syntax (node --check),
light-band consistency, ISO timestamp, no edition token, badge PNG validity."""
import re, sys, os, base64, subprocess

slug = sys.argv[1]
tpl = open('template.html').read()
data_path = f'clubs/{slug}.data.js'
data = open(data_path).read()

# badge: inline base64 if a valid file exists, else sibling-PNG reference (SVG shield fallback shows standalone)
badge = slug.replace('-','') + '.png'
b64_path = f'badges/{slug}.b64.txt'
if os.path.exists(b64_path):
    b64 = re.sub(r'\s+', '', open(b64_path).read())
    try:
        raw = base64.b64decode(b64, validate=True)
        assert raw[:8] == b'\x89PNG\r\n\x1a\n' and len(raw) > 500
        try:
            from PIL import Image; import io
            Image.open(io.BytesIO(raw)).load()   # full decode catches corruption via zlib/CRC
        except ImportError:
            pass
        badge = 'data:image/png;base64,' + b64
    except Exception as e:
        print(f'WARN: badge file invalid ({e}); falling back to png reference')

club = re.search(r'club:\s*"([^"]+)"', data).group(1)
assert '/*==DATA==*/' in tpl and '/*==ENDDATA==*/' in tpl, 'template markers missing'

out = tpl.replace('{{BADGE_URI}}', badge).replace('{{TITLE}}', 'Mercato IQ: ' + club)
import re as _re
out = _re.sub(r'^/\*==DATA==\*/$[\s\S]*?^/\*==ENDDATA==\*/$',
              '/*==DATA==*/\n' + data.replace('\\', '\\\\') + '\n/*==ENDDATA==*/',
              out, count=1, flags=_re.M)

# gates
rows = re.findall(r"prob:(\d+),\s*light:'([gyor])'", out)
band = lambda v: 'g' if int(v) > 50 else 'y' if int(v) >= 30 else 'o' if int(v) >= 15 else 'r'
bad = [(p, l) for p, l in rows if band(p) != l]
assert not bad, f'light-band mismatches (prob vs light): {bad}'
assert 'edition' not in out.lower(), 'forbidden edition token present'
assert re.search(r'updated:\s*"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z"', out), 'REPORT_META.updated must be a full ISO timestamp'
js = re.search(r'<script>([\s\S]*)</script>', out).group(1)
chk = f'.build_check_{slug}.js'
open(chk, 'w').write(js)
r = subprocess.run(['node', '--check', chk], capture_output=True, text=True)
assert r.returncode == 0, 'JS syntax error:\n' + r.stderr
os.remove(chk)

open(f'{slug}.html', 'w').write(out)
kind = 'inline-b64' if badge.startswith('data:') else f'ref:{badge}'
print(f'BUILD OK -> {slug}.html  ({len(out)} bytes, {len(rows)} rated rows, badge={kind})')
