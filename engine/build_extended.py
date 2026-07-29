#!/usr/bin/env python3
"""Mercato IQ builder: template + data.js -> HTML
Usage:
  python3 engine/build_extended.py <slug>                    # Build club page
  python3 engine/build_extended.py --level nation <slug>     # Build nation page
  python3 engine/build_extended.py --level league <slug>     # Build league page
  python3 engine/build_extended.py --level global             # Build global page
  python3 engine/build_extended.py --batch-landing-pages      # Rebuild all landing pages
Gates: markers, JS syntax, ISO timestamp, no edition token."""

import re, sys, os, base64, subprocess, json, glob
from pathlib import Path

def build_club(slug):
    """Build a club page (original logic)."""
    tpl = open('template.html').read()
    data_path = f'clubs/{slug}.data.js'
    data = open(data_path).read()

    # badge: inline base64 if valid, else sibling-PNG reference
    badge = slug.replace('-','') + '.png'
    b64_path = f'badges/{slug}.b64.txt'
    if os.path.exists(b64_path):
        b64 = re.sub(r'\s+', '', open(b64_path).read())
        try:
            raw = base64.b64decode(b64, validate=True)
            assert raw[:8] == b'\x89PNG\r\n\x1a\n' and len(raw) > 500
            try:
                from PIL import Image; import io
                Image.open(io.BytesIO(raw)).load()
            except ImportError:
                pass
            badge = 'data:image/png;base64,' + b64
        except Exception as e:
            print(f'WARN: badge file invalid ({e}); falling back to png reference')

    club = re.search(r'club:\s*"([^"]+)"', data).group(1)
    assert '/*==DATA==*/' in tpl and '/*==ENDDATA==*/' in tpl, 'template markers missing'

    out = tpl.replace('{{BADGE_URI}}', badge).replace('{{TITLE}}', 'Mercato IQ: ' + club)
    out = re.sub(r'^/\*==DATA==\*/$[\s\S]*?^/\*==ENDDATA==\*/$',
                  '/*==DATA==*/\n' + data.replace('\\', '\\\\') + '\n/*==ENDDATA==*/',
                  out, count=1, flags=re.M)

    # gates
    rows = re.findall(r"prob:(\d+),\s*light:'([gyor])'", out)
    band = lambda v: 'g' if int(v) > 50 else 'y' if int(v) >= 30 else 'o' if int(v) >= 15 else 'r'
    bad = [(p, l) for p, l in rows if band(p) != l]
    assert not bad, f'light-band mismatches: {bad}'
    assert 'edition' not in out.lower(), 'forbidden edition token present'
    assert re.search(r'updated:\s*"\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z"', out), 'ISO timestamp required'

    js = re.search(r'<script>([\s\S]*)</script>', out).group(1)
    chk = f'.build_check_{slug}.js'
    open(chk, 'w').write(js)
    r = subprocess.run(['node', '--check', chk], capture_output=True, text=True)
    assert r.returncode == 0, 'JS syntax error:\n' + r.stderr
    os.remove(chk)

    out_file = f'{slug}.html'
    open(out_file, 'w').write(out)
    kind = 'inline-b64' if badge.startswith('data:') else f'ref:{badge}'
    print(f'BUILD OK -> {out_file} ({len(out)} bytes, badge={kind})')


def build_nation(slug):
    """Build a nation landing page."""
    tpl = open('template-nation.html').read()
    data_path = f'data/nations/{slug}.data.js'

    if not os.path.exists(data_path):
        print(f'ERROR: {data_path} not found. Run aggregate.py first.')
        return

    data = open(data_path).read()

    # Extract nation name from data
    nation_match = re.search(r'const NATION = ({[^}]+})', data)
    if nation_match:
        nation_obj_str = nation_match.group(1)
        nation_name_match = re.search(r'name:\s*"([^"]+)"', nation_obj_str)
        nation_name = nation_name_match.group(1) if nation_name_match else slug.replace('-', ' ').title()
    else:
        nation_name = slug.replace('-', ' ').title()

    # Extract timestamp
    updated_match = re.search(r'updated:\s*"([^"]+)"', data)
    updated = updated_match.group(1) if updated_match else ''

    asof_match = re.search(r'asof:\s*"([^"]+)"', data)
    asof = asof_match.group(1) if asof_match else ''

    out = tpl
    out = out.replace('{{LEAGUE_NAME}}', nation_name)
    out = out.replace('{{NATION}}', nation_name)
    out = out.replace('{{UPDATED}}', updated)
    out = out.replace('{{ASOF}}', asof)

    # Inject data
    out = re.sub(r'/\*==DATA==\*/$[\s\S]*?/\*==DATA==\*/',
                  '/*==DATA==*/\n' + data.replace('\\', '\\\\') + '\n/*==DATA==*/',
                  out, count=1, flags=re.M)

    # Validate
    assert 'edition' not in out.lower(), 'forbidden edition token'
    assert updated, 'ISO timestamp required'

    js = re.search(r'<script>([\s\S]*)</script>', out).group(1)
    chk = f'.build_check_{slug}.js'
    open(chk, 'w').write(js)
    r = subprocess.run(['node', '--check', chk], capture_output=True, text=True)
    assert r.returncode == 0, 'JS syntax error:\n' + r.stderr
    os.remove(chk)

    out_file = f'nations/{slug}.html'
    os.makedirs('nations', exist_ok=True)
    open(out_file, 'w').write(out)
    print(f'BUILD OK -> {out_file} ({len(out)} bytes)')


def build_league(slug):
    """Build a league landing page."""
    tpl = open('template-league.html').read()
    data_path = f'data/leagues/{slug}.data.js'

    if not os.path.exists(data_path):
        print(f'ERROR: {data_path} not found. Run aggregate.py first.')
        return

    data = open(data_path).read()

    # Extract league name and nation from data
    league_match = re.search(r'const LEAGUE = ({[^}]+})', data)
    if league_match:
        league_obj_str = league_match.group(1)
        league_name_match = re.search(r'name:\s*"([^"]+)"', league_obj_str)
        league_name = league_name_match.group(1) if league_name_match else slug.replace('-', ' ').title()
        nation_match = re.search(r'nation:\s*"([^"]+)"', league_obj_str)
        nation_name = nation_match.group(1) if nation_match else 'International'
    else:
        league_name = slug.replace('-', ' ').title()
        nation_name = 'International'

    # Extract timestamp
    updated_match = re.search(r'updated:\s*"([^"]+)"', data)
    updated = updated_match.group(1) if updated_match else ''

    asof_match = re.search(r'asof:\s*"([^"]+)"', data)
    asof = asof_match.group(1) if asof_match else ''

    out = tpl
    out = out.replace('{{LEAGUE_NAME}}', league_name)
    out = out.replace('{{NATION}}', nation_name)
    out = out.replace('{{UPDATED}}', updated)
    out = out.replace('{{ASOF}}', asof)

    # Inject data
    out = re.sub(r'/\*==DATA==\*/$[\s\S]*?/\*==DATA==\*/',
                  '/*==DATA==*/\n' + data.replace('\\', '\\\\') + '\n/*==DATA==*/',
                  out, count=1, flags=re.M)

    # Validate
    assert 'edition' not in out.lower(), 'forbidden edition token'
    assert updated, 'ISO timestamp required'

    js = re.search(r'<script>([\s\S]*)</script>', out).group(1)
    chk = f'.build_check_{slug}.js'
    open(chk, 'w').write(js)
    r = subprocess.run(['node', '--check', chk], capture_output=True, text=True)
    assert r.returncode == 0, 'JS syntax error:\n' + r.stderr
    os.remove(chk)

    out_file = f'leagues/{slug}.html'
    os.makedirs('leagues', exist_ok=True)
    open(out_file, 'w').write(out)
    print(f'BUILD OK -> {out_file} ({len(out)} bytes)')


def build_global():
    """Build global splash page."""
    tpl = open('index.html').read()
    data_path = 'data/global.data.js'

    if not os.path.exists(data_path):
        print(f'ERROR: {data_path} not found. Run aggregate.py first.')
        return

    data = open(data_path).read()

    # Extract timestamp
    updated_match = re.search(r'updated:\s*"([^"]+)"', data)
    updated = updated_match.group(1) if updated_match else ''

    asof_match = re.search(r'asof:\s*"([^"]+)"', data)
    asof = asof_match.group(1) if asof_match else ''

    out = tpl
    out = out.replace('{{UPDATED}}', updated)
    out = out.replace('{{ASOF}}', asof)

    # Inject data
    out = re.sub(r'/\*==DATA==\*/$[\s\S]*?/\*==DATA==\*/',
                  '/*==DATA==*/\n' + data.replace('\\', '\\\\') + '\n/*==DATA==*/',
                  out, count=1, flags=re.M)

    # Validate
    assert 'edition' not in out.lower(), 'forbidden edition token'
    assert updated, 'ISO timestamp required'

    js = re.search(r'<script>([\s\S]*)</script>', out).group(1)
    chk = '.build_check_global.js'
    open(chk, 'w').write(js)
    r = subprocess.run(['node', '--check', chk], capture_output=True, text=True)
    assert r.returncode == 0, 'JS syntax error:\n' + r.stderr
    os.remove(chk)

    out_file = 'index.html'
    open(out_file, 'w').write(out)
    print(f'BUILD OK -> {out_file} ({len(out)} bytes)')


def batch_landing_pages():
    """Rebuild all nation and league landing pages."""
    print('BATCH: rebuilding all landing pages...')

    # Nations
    if os.path.exists('data/nations'):
        for data_file in glob.glob('data/nations/*.data.js'):
            slug = Path(data_file).stem
            print(f'  Building nation: {slug}')
            try:
                build_nation(slug)
            except Exception as e:
                print(f'  ERROR: {e}')

    # Leagues
    if os.path.exists('data/leagues'):
        for data_file in glob.glob('data/leagues/*.data.js'):
            slug = Path(data_file).stem
            print(f'  Building league: {slug}')
            try:
                build_league(slug)
            except Exception as e:
                print(f'  ERROR: {e}')

    # Global
    if os.path.exists('data/global.data.js'):
        print('  Building global splash...')
        try:
            build_global()
        except Exception as e:
            print(f'  ERROR: {e}')

    print('BATCH: complete')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python3 engine/build_extended.py <slug>')
        print('       python3 engine/build_extended.py --level nation <slug>')
        print('       python3 engine/build_extended.py --level league <slug>')
        print('       python3 engine/build_extended.py --level global')
        print('       python3 engine/build_extended.py --batch-landing-pages')
        sys.exit(1)

    if sys.argv[1] == '--batch-landing-pages':
        batch_landing_pages()
    elif sys.argv[1] == '--level':
        if len(sys.argv) < 3:
            print('ERROR: --level requires argument (nation|league|global)')
            sys.exit(1)
        level = sys.argv[2]
        if level == 'global':
            build_global()
        elif level == 'nation':
            if len(sys.argv) < 4:
                print('ERROR: --level nation requires <slug>')
                sys.exit(1)
            build_nation(sys.argv[3])
        elif level == 'league':
            if len(sys.argv) < 4:
                print('ERROR: --level league requires <slug>')
                sys.exit(1)
            build_league(sys.argv[3])
        else:
            print(f'ERROR: unknown level {level}')
            sys.exit(1)
    else:
        # Assume it's a club slug
        build_club(sys.argv[1])
