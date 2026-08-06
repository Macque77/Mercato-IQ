#!/usr/bin/env python3
"""One-shot / periodic deterministic cleanup of accumulated cruft across ALL clubs.

The per-club self-heal in inject_research.py only fires when a club is processed
(i.e. has fresh news that run), so garbage in a club that hasn't been in the news
lingers. This applies the SAME safe deterministic passes to EVERY club file, zero
API tokens:

  * dedupe_by_norm  -- collapse accent/spelling duplicates of the same player
  * drop_hollow     -- remove rows whose club is literally 'Unknown'

Only these two, deliberately. A surname-level collapse was prototyped and rejected:
the dry-run showed it would wrongly merge genuinely different players who share a
surname (Cristian Romero, Loïs Openda). And drop_hollow is narrow (club == 'Unknown'
only) so it never touches intentional editorial 'framing' cards that have no club.

Usage:
    python3 engine/cleanup_clubs.py --dry-run   # report only, change nothing
    python3 engine/cleanup_clubs.py             # apply (each write is node-syntax-checked)
"""
import glob
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import js_obj_utils as jou  # noqa: E402
import inject_research as ij  # dedupe_by_norm, drop_hollow  # noqa: E402

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLUBS_DIR = os.path.join(REPO, 'clubs')
ARRAYS = ('INCOMING', 'OUTGOING', 'WATCHLIST', 'CONFIRMED_IN', 'CONFIRMED_OUT', 'DEAD')


def process(path, dry):
    content = open(path, encoding='utf-8').read()
    orig = content
    removed = []
    for arr in ARRAYS:
        content, _ = ij.dedupe_by_norm(content, arr)
        content, hollow_changed = ij.drop_hollow(content, arr)
        if hollow_changed:
            removed.append(f"{arr}:<Unknown-club>")
    if content == orig:
        return False, []
    if not dry:
        ok = jou.syntax_check_and_write(path, content)
        if not ok:
            print(f"  SYNTAX FAIL, not written: {os.path.basename(path)}")
            return False, removed
    return True, removed


def main():
    dry = '--dry-run' in sys.argv
    files = sorted(glob.glob(os.path.join(CLUBS_DIR, '*.data.js')))
    changed_files = 0
    total_removed = 0
    for p in files:
        ch, removed = process(p, dry)
        if ch:
            changed_files += 1
            total_removed += len(removed)
            if removed:
                print(f"{'[dry] ' if dry else ''}{os.path.basename(p)}: {', '.join(removed[:12])}"
                      + (f" (+{len(removed)-12} more)" if len(removed) > 12 else ''))
    print(f"\n{'DRY-RUN: would change' if dry else 'Changed'} {changed_files}/{len(files)} file(s), "
          f"{total_removed} row(s) removed.")


if __name__ == '__main__':
    main()
