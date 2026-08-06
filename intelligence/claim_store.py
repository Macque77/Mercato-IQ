#!/usr/bin/env python3
"""Claim store -- the foundation of the Mercato-IQ reliability engine.

The engine's whole value is a compounding dataset: every transfer CLAIM a source
makes, and later, how it RESOLVED against reality. This module is the append-only
store for both, kept as plain JSONL (one JSON object per line) so it's diff-able in
git, greppable, and needs zero infrastructure at the validation stage. (Postgres
comes later, in Phase 2, only once there are paying customers.)

Two logs, both under intelligence/data/:
    claims.jsonl       one line per (source, player, move) claim we observed
    resolutions.jsonl  one line per confirmed/collapsed outcome we can grade against

A CLAIM:
    {id, ts, source, source_key, source_tier, source_url,
     player, player_key, club_slug, from_club, to_club, direction, stage, prob, text}

A RESOLUTION:
    {ts, player, player_key, to_club, to_club_key, outcome, confirmed_at, confirmed_source}

`id` is a stable hash of (source_key, player_key, to_club_key, direction) so the same
ongoing rumour re-observed on later runs updates rather than duplicates -- we keep the
EARLIEST ts (first-reported, which is what "lead time" is measured from) and refresh
the rest. De-duplication and first-seen tracking live here so every caller is consistent.
"""
import hashlib
import json
import os
import re
import sys
import unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(HERE, 'data')
CLAIMS_PATH = os.path.join(DATA_DIR, 'claims.jsonl')
RESOLUTIONS_PATH = os.path.join(DATA_DIR, 'resolutions.jsonl')

# Reuse the engine's accent-stripping normaliser so 'Víctor Muñoz' == 'Victor Munoz'.
sys.path.insert(0, os.path.join(os.path.dirname(HERE), 'engine'))


def norm(s):
    """Lowercase, strip diacritics, collapse whitespace -- robust key matching."""
    s = unicodedata.normalize('NFKD', s or '')
    s = ''.join(ch for ch in s if not unicodedata.combining(ch))
    return re.sub(r'\s+', ' ', s).strip().lower()


def clean_source(raw):
    """'David Ornstein (The Athletic, BBC)' -> 'David Ornstein'. Strips the
    parenthetical outlet list and trailing 'X/Twitter' noise, so the same reporter
    isn't split across spellings. Returns the display name; norm() makes the key."""
    s = re.sub(r'\s*\([^)]*\)', '', raw or '').strip()
    s = re.sub(r'\s*[-–—/,].*$', '', s).strip() if len(s.split()) > 3 else s
    return s or (raw or '').strip()


# Placeholders that name no real reporter/outlet -- can't attribute a claim to them,
# so they're never scored.
_NON_ATTRIBUTABLE = re.compile(
    r'^(various|aggregat\w*|on-page\w*|multiple|unknown|reports?|media|press|'
    r'sources?|rumou?r|traced\b.*|relayed\b.*|n/?a|\-|)$', re.IGNORECASE)


def is_attributable(source):
    """True if this source string names something we can hold a track record against."""
    s = clean_source(source).strip()
    return bool(s) and not _NON_ATTRIBUTABLE.match(s)


def claim_id(source_key, player_key, to_club_key, direction):
    h = hashlib.sha1(f"{source_key}|{player_key}|{to_club_key}|{direction}".encode()).hexdigest()
    return h[:16]


def make_claim(*, ts, source, player, club_slug, direction, from_club='', to_club='',
               stage='', prob=None, source_tier=3, source_url='', text=''):
    src = clean_source(source)
    to_key = norm(to_club) or norm(club_slug if direction == 'in' else '')
    pk = norm(player)
    sk = norm(src)
    return {
        'id': claim_id(sk, pk, to_key, direction),
        'ts': ts,
        'source': src, 'source_key': sk, 'source_tier': int(source_tier or 3),
        'source_url': source_url,
        'player': player, 'player_key': pk,
        'club_slug': club_slug, 'from_club': from_club, 'to_club': to_club,
        'direction': direction, 'stage': stage,
        'prob': (int(prob) if prob is not None and str(prob) != '' else None),
        'text': (text or '')[:500],
    }


def make_resolution(*, ts, player, to_club, outcome='confirmed', confirmed_at='',
                    confirmed_source='', fee=''):
    return {
        'ts': ts, 'player': player, 'player_key': norm(player),
        'to_club': to_club, 'to_club_key': norm(to_club),
        'outcome': outcome, 'confirmed_at': confirmed_at or ts,
        'confirmed_source': clean_source(confirmed_source), 'fee': fee or '',
    }


def _read_jsonl(path):
    if not os.path.exists(path):
        return []
    out = []
    with open(path, encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line:
                try:
                    out.append(json.loads(line))
                except json.JSONDecodeError:
                    pass
    return out


def _write_jsonl(path, rows):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8', newline='\n') as f:
        for r in rows:
            f.write(json.dumps(r, ensure_ascii=False) + '\n')


def load_claims():
    return _read_jsonl(CLAIMS_PATH)


def load_resolutions():
    return _read_jsonl(RESOLUTIONS_PATH)


def upsert_claims(new_claims):
    """Merge new claims by id. Keep the EARLIEST ts (first-reported anchor for lead
    time) but refresh stage/prob/text/url to the latest observation. Returns
    (added, updated)."""
    existing = {c['id']: c for c in load_claims()}
    added = updated = 0
    for c in new_claims:
        cur = existing.get(c['id'])
        if cur is None:
            existing[c['id']] = c
            added += 1
        else:
            # earliest ts wins as the anchor; everything else takes the fresh value.
            first_ts = min(cur['ts'], c['ts'])
            merged = {**cur, **c, 'ts': first_ts}
            existing[c['id']] = merged
            updated += 1
    _write_jsonl(CLAIMS_PATH, sorted(existing.values(), key=lambda x: x['ts']))
    return added, updated


def add_resolutions(new_res):
    """Append resolutions, de-duped by (player_key, to_club_key, outcome). Returns added."""
    existing = load_resolutions()
    seen = {(r['player_key'], r['to_club_key'], r['outcome']) for r in existing}
    added = 0
    for r in new_res:
        key = (r['player_key'], r['to_club_key'], r['outcome'])
        if key in seen:
            continue
        seen.add(key)
        existing.append(r)
        added += 1
    if added:
        _write_jsonl(RESOLUTIONS_PATH, sorted(existing, key=lambda x: x['ts']))
    return added


if __name__ == '__main__':
    print(f"claims: {len(load_claims())}  resolutions: {len(load_resolutions())}")
