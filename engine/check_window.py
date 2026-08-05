#!/usr/bin/env python3
"""Print whether today falls inside a tracked transfer window, and how close the
nearest deadline is. Used by scheduled-sync prompts to decide whether to spend a
research pass (WebSearch/Agent calls) or just do a lightweight republish.

Usage:
    python3 engine/check_window.py            # human-readable summary
    python3 engine/check_window.py --json      # machine-readable
    python3 engine/check_window.py --quiet     # exit 0 if in a window or <=3 days
                                                # from a deadline, exit 1 otherwise
"""
import json, os, sys
from datetime import date, datetime

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def load_windows():
    with open(os.path.join(REPO, 'engine', 'windows.json')) as f:
        return json.load(f)['windows']


def parse(d):
    return datetime.strptime(d, '%Y-%m-%d').date()


def main():
    today_env = os.environ.get('MERCATO_TODAY')
    today = parse(today_env) if today_env else date.today()
    windows = load_windows()

    active = []
    deadline_soon = []
    for league, w in windows.items():
        for season in ('summer', 'winter'):
            open_d = parse(w[f'{season}_open'])
            close_d = parse(w[f'{season}_close'])
            deadline_d = parse(w[f'{season}_deadline'])
            if open_d <= today <= close_d:
                active.append(league)
            days_to_deadline = (deadline_d - today).days
            if 0 <= days_to_deadline <= 3:
                deadline_soon.append((league, days_to_deadline))

    in_window = bool(active)
    result = {
        'today': today.isoformat(),
        'in_window': in_window,
        'active_leagues': sorted(set(active)),
        'deadline_within_3_days': deadline_soon,
        'do_research': in_window or bool(deadline_soon),
    }

    if '--json' in sys.argv:
        print(json.dumps(result, indent=2))
    elif '--quiet' in sys.argv:
        sys.exit(0 if result['do_research'] else 1)
    else:
        if in_window:
            print(f"IN WINDOW: {', '.join(result['active_leagues'])} -- run full research pass.")
        elif deadline_soon:
            names = ', '.join(f'{l} ({d}d)' for l, d in deadline_soon)
            print(f"DEADLINE APPROACHING: {names} -- run full research pass.")
        else:
            print("OFF SEASON, no deadline imminent -- lightweight republish only, skip research.")


if __name__ == '__main__':
    main()
