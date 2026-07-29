#!/usr/bin/env python3
"""Mercato IQ event listener: monitor club data updates and auto-regenerate landing pages.
Usage: python3 engine/watch.py [--interval 300]
Watches clubs/*.data.js for changes, triggers aggregate.py + build_extended.py on update.
Runs continuously; press Ctrl+C to stop."""

import os
import sys
import glob
import subprocess
import time
import hashlib
from datetime import datetime
from pathlib import Path

class FileWatcher:
    def __init__(self, watch_dir='clubs', interval=300):
        self.watch_dir = watch_dir
        self.interval = interval  # seconds between checks
        self.last_hashes = {}
        self.last_update_time = {}

    def get_file_hash(self, filepath):
        """Compute SHA256 hash of file contents."""
        sha = hashlib.sha256()
        try:
            with open(filepath, 'rb') as f:
                sha.update(f.read())
            return sha.hexdigest()
        except:
            return None

    def scan_files(self):
        """Scan all club data files and return changed ones."""
        changed = []
        data_files = glob.glob(f'{self.watch_dir}/*.data.js')

        for filepath in data_files:
            current_hash = self.get_file_hash(filepath)
            if current_hash is None:
                continue

            filename = Path(filepath).stem

            if filename not in self.last_hashes:
                # First time seeing this file
                self.last_hashes[filename] = current_hash
                self.last_update_time[filename] = time.time()
            elif self.last_hashes[filename] != current_hash:
                # File has changed
                changed.append(filename)
                self.last_hashes[filename] = current_hash
                self.last_update_time[filename] = time.time()

        return changed

    def run(self):
        """Main watch loop."""
        print(f'WATCH: starting file monitor (interval: {self.interval}s, watching {self.watch_dir}/*.data.js)')
        print('WATCH: press Ctrl+C to stop\n')

        try:
            while True:
                changed = self.scan_files()

                if changed:
                    timestamp = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
                    print(f'\n[{timestamp}] WATCH: detected {len(changed)} file(s) changed:')
                    for club_slug in changed:
                        print(f'  ✓ {club_slug}')

                    # Trigger aggregation and rebuild
                    self.trigger_rebuild(changed)

                time.sleep(self.interval)

        except KeyboardInterrupt:
            print('\n\nWATCH: stopped by user')
            sys.exit(0)
        except Exception as e:
            print(f'\nERROR: {e}')
            sys.exit(1)

    def trigger_rebuild(self, club_slugs):
        """Run aggregate.py and rebuild affected landing pages."""
        timestamp = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')

        # Step 1: Run full aggregation
        print(f'\n[{timestamp}] REBUILD: running aggregate.py...')
        try:
            result = subprocess.run(
                ['python3', 'engine/aggregate.py'],
                capture_output=True,
                text=True,
                timeout=10
            )
            if result.returncode == 0:
                print(result.stdout)
            else:
                print(f'ERROR: aggregate.py failed:\n{result.stderr}')
                return
        except Exception as e:
            print(f'ERROR: could not run aggregate.py: {e}')
            return

        # Step 2: Rebuild all landing pages
        print(f'[{timestamp}] REBUILD: regenerating landing pages...')

        # Build global splash
        try:
            result = subprocess.run(
                ['python3', 'engine/build_extended.py', '--level', 'global'],
                capture_output=True,
                text=True,
                timeout=10
            )
            if result.returncode == 0:
                print(f'  ✓ {result.stdout.strip()}')
            else:
                print(f'  ERROR building global: {result.stderr}')
        except Exception as e:
            print(f'  ERROR: {e}')

        # Build all nation and league landing pages
        try:
            result = subprocess.run(
                ['python3', 'engine/build_extended.py', '--batch-landing-pages'],
                capture_output=True,
                text=True,
                timeout=30
            )
            if result.returncode == 0:
                print(result.stdout)
            else:
                print(f'ERROR: batch rebuild failed:\n{result.stderr}')
        except Exception as e:
            print(f'ERROR: batch rebuild failed: {e}')

        # Step 3: Emit changelog
        print(f'\n[{timestamp}] REBUILD: complete')
        print(f'Changelog: {", ".join(club_slugs)} updated → global + all landing pages regenerated\n')


def main():
    interval = 300  # default: 5 minutes

    # Parse arguments
    if len(sys.argv) > 1:
        if sys.argv[1] == '--interval' and len(sys.argv) > 2:
            try:
                interval = int(sys.argv[2])
            except ValueError:
                print(f'ERROR: invalid interval {sys.argv[2]}')
                sys.exit(1)

    watcher = FileWatcher(watch_dir='clubs', interval=interval)
    watcher.run()


if __name__ == '__main__':
    main()
