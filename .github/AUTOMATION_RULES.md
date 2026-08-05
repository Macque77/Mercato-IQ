# Mercato IQ Automation Rules

## Rule 1: Automatic GitHub Push on Every Commit

**Status:** Active  
**Implemented:** August 3, 2026

Every commit to this repository is automatically pushed to GitHub via a git post-commit hook.

### How It Works
- Post-commit hook: `.git/hooks/post-commit`
- Credential storage: Git credential helper
- Behavior: `git push origin main` runs automatically after each commit

### Why
- Keeps remote and local in sync
- Prevents forgotten pushes
- Ensures continuous backup
- Supports CI/CD workflows

### For Developers
Your commits will automatically appear on GitHub. No manual push required.

---

## Rule 2: All Changes Trigger Data Aggregation

When club data files are modified, the aggregation pipeline automatically updates:
- `data/global.data.js` (top stories across all clubs)
- `data/nations/*.data.js` (nation-level summaries)
- `data/leagues/*.data.js` (league-level summaries)

Run `python3 aggregate.py` after any bulk changes.

---

## Rule 3: Editorial Standards Applied Before Deploy

All club data files must comply with Editorial & Style Rules v1.4:
- British English throughout
- No em dashes (use commas, colons, or full stops)
- Journalistic tone (short sentences, no filler)
- Skeptical notes on weak sourcing

Use `python3 apply-editorial-rules.py` before committing new club files.

---

## Rule 4: No Backend Language on Frontend

The website is for football fans interested in transfer news, not technical details.

**Remove from all pages:**
- Mentions of "refresh," "sync," "build," "process"
- Aggregation details
- Technical metadata
- Backend processing notes

**Keep on pages:**
- Transfer rumors and confirmed deals
- Player names, clubs, fees
- Credibility ratings and source information
- Club-specific context and analysis

---
