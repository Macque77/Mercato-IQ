#!/usr/bin/env python3
"""
Generate transfer feed with personality - adds humor to nonsense rumors,
colors by tier, and creates engaging card copy with attitude.
"""

import json
import re

NONSENSE_CALLOUTS = [
    "💀 This is pure nonsense",
    "🧢 Someone's having a laugh",
    "🚀 Off into the ether",
    "🎭 Creative fiction",
    "🤡 Not a chance",
    "☕ Overheard at the pub",
    "🎪 Peak silly season",
    "🍆 I'm out",
    "🧠 Make it make sense",
    "🤡 Tier: Fantasy Football",
    "📱 Twitter bullshit alert",
    "🔮 Someone's crystal ball is broken",
    "🎬 Hollywood's calling, not the club",
]

def get_bullshit_level(truth, prob):
    """Determine if this is completely made up nonsense."""
    if truth < 40 and prob < 35:
        return "bullshit"
    if truth < 50 and prob < 30:
        return "unlikely"
    return None

def get_humor_callout(truth, prob):
    """Generate a humorous callout for nonsense rumors."""
    if get_bullshit_level(truth, prob) == "bullshit":
        import random
        return random.choice(NONSENSE_CALLOUTS)
    return None

def get_tier_badge(tier):
    """Return badge class for tier."""
    if tier == 1:
        return "badge-t1"
    elif tier == 2:
        return "badge-t2"
    elif tier == 3:
        return "badge-t3"
    return "badge-t3"

def get_tier_text(tier):
    """Return tier text."""
    if tier == 1:
        return "Tier 1"
    elif tier == 2:
        return "Tier 2"
    elif tier == 3:
        return "Tier 3"
    return "Unconfirmed"

def generate_card_html(transfer, player_name):
    """Generate a beautiful transfer card."""

    truth = transfer.get('truth', 50)
    prob = transfer.get('prob', 50)
    tier = transfer.get('tier', 3)
    note = transfer.get('note', '')
    src = transfer.get('src', 'Unknown')
    direction = "→" if 'in' in transfer.get('pos', '').lower() else "←"

    bullshit_level = get_bullshit_level(truth, prob)
    humor = get_humor_callout(truth, prob)

    badge_class = get_tier_badge(tier)
    tier_text = get_tier_text(tier)

    direction_class = "in" if "in" in transfer.get('pos', '').lower() else "out"

    # Generate HTML
    html = f"""
    <div class="transfer-card" data-truth="{truth}" data-prob="{prob}" data-tier="{tier}">
      {"<div class='bullshit-callout'>BULLSHIT</div>" if bullshit_level == "bullshit" else ""}
      <div class="card-header">
        <div class="card-title">
          {player_name}
          <span class="card-badge {badge_class}">{tier_text}</span>
        </div>
        <div class="card-subtitle">{src}</div>
      </div>
      <div class="card-body">
        {f'<div class="card-note bullshit"><strong>{humor}</strong> - {note}</div>' if bullshit_level == "bullshit" else f'<div class="card-note">{note}</div>'}
      </div>
      <div class="card-footer">
        <div class="metrics">
          <div class="metric">
            <div class="metric-label">Truth</div>
            <div class="metric-bar">
              <div class="metric-fill" style="width:{truth}%;"></div>
            </div>
            <div class="metric-value">{truth}%</div>
          </div>
          <div class="metric">
            <div class="metric-label">Probability</div>
            <div class="metric-bar">
              <div class="metric-fill" style="width:{prob}%;"></div>
            </div>
            <div class="metric-value">{prob}%</div>
          </div>
        </div>
        <div class="card-source">{src}</div>
      </div>
    </div>
    """

    return html.strip()

if __name__ == "__main__":
    # Test with sample data
    sample = {
        'truth': 85,
        'prob': 90,
        'tier': 1,
        'note': 'Direct club connections confirm advanced talks',
        'src': 'Mohamed Bouhafsi'
    }

    print(generate_card_html(sample, "Kylian Mbappé"))
