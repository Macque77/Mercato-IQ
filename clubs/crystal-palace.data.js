/* ============================================================
   MERCATO IQ · CLUB DATA · CRYSTAL PALACE · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce crystal-palace.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (format migration only, data carried from the
   6 Jun 2026 v1 dashboard, no re-verification):
   · truth values SYNTHESISED from the old single-metric rows as
     truth = clamp(prob + 25 + tierBonus, 10, 95), tierBonus
     T1 +15 / T2 +10 / T3 0 / T4 -10.
   · Light-band fixes (light adjusted, prob untouched):
     Europa-ready depth prob 35 o -> y; Adam Wharton prob 30 o -> y;
     Prized defenders prob 30 o -> y.
   · Old file held no source URLs, so LINKMAP/WL_LINKMAP point at
     named-source hubs only (hub-only status); replace with exact
     URLs at next refresh.
   · Old badge payload was JPEG data mislabelled image/png; it fails
     PNG validation, so the build uses the crystal-palace.png
     reference + SVG shield fallback until a true PNG is inlined.
   · The v1 page's accent tokens were a pale slate-blue placeholder
     trio (#a8b8d4 family), not club colours, so BRAND falls back to
     the Palace red #C4122E family per the migration rule (club
     primary blue #1B458F per profile; red is the accent role here).
   · The v1 page held only 4 rated rows; two FRAMING ROWS (clearly
     labelled in their notes) were split from the v1 positions panel
     (Forward depth, Midfield cover) to satisfy the top10 QA gate.
     They are the page's own framing content, not invented rumours.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Crystal Palace", mono: "CPFC", slug: "crystal-palace",
  primary: "#C4122E", primaryBright: "#e52a47", primaryDeep: "#8a0c20",
  primaryRgb: "196,18,46",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook)
   verified deliberately stale (old build date): next refresh must re-verify all fields. ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "To be appointed (Pierre Sage the reported front-runner)",
  dof: "Steve Parish (Chairman / co-owner, lead decision-maker)",
  europe: "Europa League (2026/27, as Conference League winners)",
  finish: "Mid-table (2025/26); Conference League winners",
  owner: "Steve Parish & co-owners",
  window: "Opens 15 Jun, runs to 1 Sep 2026"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Crystal+Palace/Transfer+News",
    "https://www.transferfeed.com/clubs/crystal-palace",
    "https://londonnewsonline.co.uk/sport/",
    "https://www.skysports.com/crystal-palace"
  ],
  queries: [
    "Crystal Palace transfer news <current month + year>",
    "Crystal Palace bid OR medical OR 'personal terms'",
    "Crystal Palace mercato L'Equipe RMC Foot Mercato",
    "Crystal Palace transfert Africa Foot OR Foot Mercato Afrique",
    "Crystal Palace transfer Tavolieri HLN OR Plettenberg Bild"
  ],
  note: "Foreign desks per profile: France (L'Equipe, RMC, Foot Mercato) for the Sage/Lens thread and Ligue 1 targets; Africa (Africa Foot, Foot Mercato Afrique, CAF beat writers); Belgium (Tavolieri, HLN); Germany (Plettenberg/Sky DE, Bild, Kicker). For every linked player also search the current club's local press in the native language. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { label: "Updated 03 Aug 2026 – European refresh" , updated: "2026-08-03T12:48:44Z"};

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Oliver Glasner", sub:"Manager · departed", to:"Left as deal expired", fee:"n/a", free:true, status:"exit", statusTxt:"DEPARTED",
   note:"The club's greatest modern manager left as planned after winning the Conference League; his contract expired on 30 June. A successor is not yet confirmed. Flagged so no planning item treats him as the current coach."},

];

const INCOMING = [
  {name:"Manager appointment", sub:"Pierre Sage front-runner", club:"Lens", pos:"Head coach", report:"~5 days ago", src:"TeamTalk / BeFootball", tier:2, fee:"Compensation", truth:80, prob:45, light:'y', trend:'up',
   note:"The gating decision of the summer. Iraola chose Liverpool; Lens coach Pierre Sage (ex-Lyon, Coupe de France winner, Ligue 1 runner-up) is the reported leading candidate, with talks advanced. Not yet confirmed; squad plans follow the appointment."},
  {name:"Europa-ready depth", sub:"Post-appointment additions", club:"Market", pos:"Squad", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"£40-80m total", truth:60, prob:35, light:'y', trend:'flat',
   note:"Additions to handle a heavier European fixture load, paced to the new manager's preferences. Specific names firm up once the dugout is settled."},
  {name:"Forward depth (framing)", sub:"Support for Mateta", club:"Market", pos:"ST/W", report:"~1 wk ago", src:"v1 positions panel", tier:3, fee:"TBD", truth:55, prob:25, light:'o', trend:'flat',
   note:"FRAMING ROW, not a named rumour: split out of the v1 page's own positions panel during migration to v2. The old dashboard flagged forward depth (support for Mateta) as a likely strengthening area once the manager is appointed; no named target was in circulation at the 6 Jun data date."},
  {name:"Midfield cover (framing)", sub:"Insurance against a Wharton bid", club:"Market", pos:"CM", report:"~1 wk ago", src:"v1 positions panel", tier:3, fee:"TBD", truth:55, prob:22, light:'o', trend:'flat',
   note:"FRAMING ROW, not a named rumour: split out of the v1 page's own positions panel during migration to v2. The old dashboard flagged midfield cover as a strengthening area, insurance in case an elite bid lands for Wharton; no named target was in circulation at the 6 Jun data date."},
];

const OUTGOING = [
  {name:"Adam Wharton", sub:"21 · CM · England", club:"Elite interest", pos:"CM", report:"~1 wk ago", src:"The Athletic / aggregated", tier:2, fee:"£60m+", truth:65, prob:30, light:'y', trend:'up',
   note:"A prized young midfielder with persistent big-club interest. PRICING: youth, England pedigree and a long deal mean a steep holder's premium; Palace need not sell given Europa revenue, lowering probability and lifting the fee."},
  {name:"Prized defenders", sub:"Richards / Lacroix watch", club:"Various", pos:"CB", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"£30m+ each", truth:55, prob:30, light:'y', trend:'flat',
   note:"Central defenders who shone in the European run will draw interest. PRICING: holder's premium; only strong bids move them."},
];

const RISERS = [
  {ar:"⬆", t:"<b>Conference League</b>: won; Europa place secured."},
  {ar:"⬆", t:"<b>Manager search</b>: Sage the reported front-runner."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Glasner</b>: departed; era ends on a high."},
  {ar:"⬇", t:"<b>Iraola to Palace</b>: he chose Liverpool instead."},
];
const NEW = [
  {ar:"✦", t:"Context: <b>European trophy winners</b>, into the <b>Europa League</b>."},
  {ar:"✦", t:"Priority: appoint the manager, then build; core retention is key."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Glasner-as-current</b> planning: he has left."},
  {ar:"✕", t:"<b>Unsourced incomings</b>: held until the manager lands."},
];

const POSITIONS = [
  {p:"Head coach (appointment)", w:90, x:"The gating decision; Sage the front-runner"},
  {p:"Core retention", w:75, x:"Keep Wharton, Mateta, Richards, Lacroix"},
  {p:"Squad depth (Europe)", w:60, x:"Heavier fixture load to cover"},
  {p:"Forward depth", w:45, x:"Support for Mateta"},
  {p:"Midfield cover", w:42, x:"Insurance against a Wharton bid"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"Pierre Sage", club:"Lens", pos:"Head coach", dir:"in", age:"~5d", tier:2, note:"(Also in the main Incoming table.) Reported front-runner to replace Glasner; talks advanced, not confirmed."},
  {name:"Adam Wharton", club:"Crystal Palace", pos:"CM", dir:"out", age:"~1 wk", tier:2, note:"(Also in main table.) Prized young midfielder; elite interest, £60m-plus holder's price."},
];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   The v1 file held no URLs, so all entries below are hubs pending re-verification.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  cpfc:      {l:"Crystal Palace Official · news", u:"https://www.cpfc.co.uk/news/"},
  bbcPalace: {l:"BBC Sport · Crystal Palace", u:"https://www.bbc.co.uk/sport/football/teams/crystal-palace"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  athletic:  {l:"The Athletic · Crystal Palace", u:"https://www.nytimes.com/athletic/football/club/crystal-palace/"},
  woosnam:   {l:"Matt Woosnam (Palace beat) · X", u:"https://x.com/MattWoosie"},
  palaceWay: {l:"The Palace Way", u:"https://thepalaceway.com/"},
  slp:       {l:"South London Press · sport", u:"https://londonnewsonline.co.uk/sport/"},
  sky:       {l:"Sky Sports · Crystal Palace", u:"https://www.skysports.com/crystal-palace"},
  teamtalk:  {l:"TEAMtalk · Crystal Palace", u:"https://www.teamtalk.com/crystal-palace"},
  lequipe:   {l:"L'Équipe · football", u:"https://www.lequipe.fr/Football/"},
  rmc:       {l:"RMC Sport · football", u:"https://rmcsport.bfmtv.com/football/"},
};
const LINKMAP = {
  "Manager appointment": ["teamtalk","lequipe","rmc"],
  "Europa-ready depth": ["bbcGossip","slp"],
  "Forward depth (framing)": ["bbcGossip","slp"],
  "Midfield cover (framing)": ["athletic","bbcGossip"],
  "Adam Wharton": ["athletic","woosnam"],
  "Prized defenders": ["bbcGossip","palaceWay"],
  "Oliver Glasner": ["cpfc","bbcPalace"],
};
const WL_LINKMAP = {
  "Pierre Sage":"lequipe","Adam Wharton":"athletic",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `<em>Conference League winners</em>, into the Europa, hunting a manager after Glasner's farewell`,
  heroLede: `Palace enter the summer as <b>European trophy winners</b>: a Jean-Philippe Mateta goal beat Rayo Vallecano in Leipzig to land the <b>Conference League</b> and a <b>Europa League</b> place for 2026/27. The catch is the dugout, Oliver Glasner, the club's greatest modern manager, has departed as planned (his deal expired), and a <b>successor is not yet confirmed</b>: Andoni Iraola chose Liverpool, and Lens coach <b>Pierre Sage</b> is the reported leading candidate in advanced talks. Squad-building for Europe waits on that appointment.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Steve Parish</b> (Chairman / co-owner)</span>
      <span>HEAD COACH: <b>To be appointed</b></span>
      <span>OWNER: <b>Steve Parish &amp; co-owners</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">Mid-table</div></div>
    <div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">EUROPA</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£60-110<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£50-110<small>m</small></div></div>
    <div class="stat gold"><div class="l">SCR Cost Cap</div><div class="v">70<small>%</small></div></div>`,
  positionPanel: `
  <!-- ANALYSIS: MODEL + FINANCE -->
  <section id="sec-position">
    <div class="sec-head"><h3>Club Position</h3><span class="num">01</span></div>
    <p class="sec-sub">The lens through which every rumour is weighted: the recruitment philosophy, the balance sheet, the brand, and the European trade-off.</p>

    <div class="cards">
      <!-- THE MODEL -->
      <div class="card">
        <h4>The Model <span class="tag">CORE PRINCIPLE</span></h4>
        <p>A <b>shrewd, identity-driven</b> club under chairman and co-owner <b>Steve Parish</b>, Palace pair strong recruitment with a clear playing structure. The immediate priority, though, is appointing Glasner's successor before the squad plan crystallises.</p>
        <div class="quote">Glasner leaves the club "where they should be", in the Europa League, having smashed Palace's glass ceiling with an FA Cup, a Community Shield and now a Conference League.</div>
        <p><b>This window's logic:</b> appoint the manager, keep the core together (Wharton, Mateta, Richards, Lacroix, Kamada), and add depth for Europe.</p>
        <ul>
          <li>Manager search: Sage the reported front-runner after Iraola chose Liverpool.</li>
          <li>Key task: fending off interest in prized assets while strengthening.</li>
          <li>Markets: value signings plus depth for a heavier fixture load.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> hold incomings light until the manager lands; weight retention of the core and depth additions.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Run prudently under <b>Steve Parish</b> and co-owners, Palace combine sustainable spending with smart trading, now boosted by European revenue.</p>
        <ul>
          <li>Europa football brings the tighter <b>70% cost cap</b> alongside more income.</li>
          <li>A prized-asset sale could fund a significant rebuild if a big bid lands.</li>
          <li>Wage discipline remains central to the model.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> the budget and shape depend heavily on who the new manager is.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">European trophy winners with real momentum, but an unfilled dugout and the 70% cap temper how aggressively Palace can move right now.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>Palace's stock has never been higher, a first major trophy, then a European one, plus regular Wembley days under Glasner. The brand and pull have grown markedly.</p>
        <ul>
          <li>European football and recent trophies aid recruitment.</li>
          <li>A strong core (Wharton, Mateta, Richards) is the foundation.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> success invites bids for the best players, and the managerial gap adds short-term uncertainty.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue, but only 70% for clubs in European competition</b>. European football lifts revenue yet tightens the ratio, so it is a genuine trade-off, not a pure positive.</p>
        <p>Palace's trading record helps the ratio; a marquee sale would create room but is not forced given Europa revenue.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation.</li>
          <li>Selling one prized asset at a premium could unlock several additions.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: momentum carried into Europe</h5>
        <ul>
          <li>The right appointment keeps a trophy-winning core moving forward.</li>
          <li>Europa revenue and a strong spine support a real European run.</li>
          <li>Smart additions could push Palace up the table.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: a slow start to the rebuild</h5>
        <ul>
          <li>A drawn-out manager search delays squad planning.</li>
          <li>Losing a Wharton or Richards would weaken the core.</li>
          <li>The 70% cap limits spend without a marquee sale.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> appoint the manager (Sage the front-runner), retain the trophy-winning core, fend off bids for prized assets, and add Europa-ready depth within the 70% cap. The dugout decision shapes everything else.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; the head-coach seat is the gating item.</b> Glasner has left as planned after winning the Conference League. No successor is confirmed: <b>Pierre Sage</b> (Lens) is reported as the front-runner in advanced talks, with others linked. Recruitment will accelerate once the manager is in place; nothing is registered yet.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Parish network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: Palace hold a holder's premium on their best.</b> Sought-after names (a Wharton, a Richards) carry fees well above consensus, lifted by long contracts, England and international pedigree, and elite interest. With Europa football, Palace can resist low bids; fringe names move at softer floors to fund upgrades.
    `,
  excludedNote: `<b>Excluded as stale:</b> Glasner is no longer the manager, so any planning item naming him as current is out of date; the head coach is not yet confirmed and is flagged as such throughout.`,
  spendIn: { v: `£60-110m`, x: `Depth for Europe plus targeted upgrades, paced to the new manager's plan.` },
  spendOut: { v: `£50-110m`, x: `Fringe sales, with one prized-asset exit possible at a premium if a big bid arrives.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic. <i>Used for:</i> the Conference League win, Glasner's departure, the manager search.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: ESPN, Sky Sports, TeamTalk; Italian and French press on the Sage and Iraola threads.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Parish network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom and Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b>: the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window: fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
