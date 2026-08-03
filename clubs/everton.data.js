/* ============================================================
   MERCATO IQ · CLUB DATA · EVERTON · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce everton.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (format migration only, data carried from the
   6 Jun 2026 v1 dashboard, no re-verification):
   · truth values SYNTHESISED conservatively from source tier and
     recency: T1 85 / T2 70 / T3 55 / T4 35, minus 10 where a note
     reads cooled or stale (all carried rows are T3, none cooled,
     so truth = 55 across the board pending the first live refresh).
   · Light-band fixes (light adjusted, prob untouched): Jimenez
     prob 30 o -> y; Ndiaye prob 30 o -> y.
   · Old file held no source URLs, so LINKMAP/WL_LINKMAP point at
     named-source hubs only; replace with exact URLs at next refresh.
   · Old badge payload was JPEG data mislabelled image/png; it fails
     PNG validation, so the build uses the everton.png reference +
     SVG shield fallback until a true PNG is inlined.
   · Old v1 CSS accent tokens were degenerate (white/white/grey, a
     mis-skinned clone), so BRAND takes Everton blue #003399 from
     the club profile (everton.md) instead.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Everton", mono: "EFC", slug: "everton",
  primary: "#003399", primaryBright: "#1e5ae0", primaryDeep: "#00226b",
  primaryRgb: "0,51,153",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook)
   verified deliberately stale (old build date): next refresh must re-verify all fields. ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "David Moyes",
  dof: "The Friedkin Group (ownership-led decision making)",
  europe: "None (2026/27)",
  finish: "13th (2025/26)",
  owner: "The Friedkin Group (Dan Friedkin)",
  window: "Opens 15 Jun, runs to 1 Sep 2026"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Everton/Transfer+News",
    "https://www.transferfeed.com/clubs/everton",
    "https://www.liverpoolecho.co.uk/all-about/everton-fc",
    "https://www.skysports.com/everton"
  ],
  queries: [
    "Everton transfer news <current month + year>",
    "Everton bid OR medical OR 'personal terms'",
    "Everton calciomercato Di Marzio TuttoMercatoWeb Gazzetta",
    "Everton transfert L'Equipe RMC Foot Mercato",
    "Everton fichajes Marca AS Relevo OR A Bola Record"
  ],
  note: "Foreign desks per profile: Italy (Di Marzio/TMW/Gazzetta/Corriere + Serie A local beats, doubly important given Friedkin also own AS Roma, check feeder/parent-club deals every window), France (L'Equipe/RMC/Foot Mercato), Portugal (A Bola/Record), Spain (Marca/AS/Relevo/Moretto + La Liga local beats). For every linked player also search the current club's local press in the native language. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "6 Jun 2026", updated: "2026-06-06T12:00:00Z", label: "Build · Friedkin backing, striker hunt (migrated to v2, awaiting live refresh)" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Raul Jimenez", sub:"ST · Mexico", club:"Fulham (free)", pos:"ST", report:"~3 wks ago", src:"Football Insider", tier:3, fee:"FREE", truth:55, prob:30, light:'y', trend:'flat',
   note:"Out of contract at Fulham, a proven, cost-efficient option for Moyes' striker hunt. OBSTACLE: at 35 he is a stop-gap; Everton may prefer a younger marquee signing alongside or instead."},
  {name:"Marquee striker", sub:"Friedkin-backed", club:"Various", pos:"ST", report:"~3 wks ago", src:"Football Insider / TeamTalk", tier:3, fee:"£40-70m", truth:55, prob:40, light:'y', trend:'up',
   note:"The headline aim: a big-money goalscorer after Beto and Barry fell short. Links include Liam Delap (long admired) and Jarrod Bowen. OBSTACLES: fees and wages for proven names."},
  {name:"Jack Grealish", sub:"W · England", club:"Man City", pos:"W", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"Loan/perm", truth:55, prob:35, light:'y', trend:'flat',
   note:"A stay (loan-to-permanent) is reported as a concrete possibility after his spell at the club. OBSTACLES: wages and fitness complexities."},
];

const OUTGOING = [
  {name:"Iliman Ndiaye", sub:"AM/W · Senegal", club:"Outside interest", pos:"AM", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"£40m+", truth:55, prob:30, light:'y', trend:'flat',
   note:"A prized creator drawing interest; some uncertainty over his future. PRICING: a holder's premium applies; Everton would resist unless a strong bid lands."},
  {name:"Underperforming forwards", sub:"Beto / Barry review", club:"Various", pos:"ST", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"Mixed", truth:55, prob:40, light:'y', trend:'flat',
   note:"A new striker raises questions over the current pair. PRICING: limited leverage after underwhelming returns; the aim is balance and wages."},
];

const RISERS = [
  {ar:"⬆", t:"<b>Friedkin backing</b> - a big-money striker is planned."},
  {ar:"⬆", t:"<b>Moyes</b> - new-deal talks reported; stability."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Beto / Barry</b> - under pressure with a new striker incoming."},
  {ar:"⬇", t:"<b>Dyche-era links</b> - not live."},
];
const NEW = [
  {ar:"✦", t:"Context: new <b>Hill Dickinson Stadium</b>; owner investment rising."},
  {ar:"✦", t:"In: a marquee/free striker + Moyes-fit quality. Out: spare forwards; retain Ndiaye."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Dyche-as-current</b> planning - Moyes is the manager."},
  {ar:"✕", t:"<b>Unsigned striker links</b> - rumours until announced."},
];

const POSITIONS = [
  {p:"Striker", w:85, x:"The stated priority; big-money or free"},
  {p:"Central midfield", w:60, x:"Quality and legs for Moyes"},
  {p:"Full-back / right-back", w:55, x:"Long-sought reinforcement"},
  {p:"Winger", w:48, x:"Grealish stay a possibility"},
  {p:"Squad depth", w:40, x:"Balance for a European push"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"Marquee striker", club:"Various", pos:"ST", dir:"in", age:"~3 wks", tier:3, note:"(Also in the main Incoming table.) The headline aim; Jimenez (free), Delap and Bowen among links."},
  {name:"Iliman Ndiaye", club:"Everton", pos:"AM", dir:"out", age:"~1 wk", tier:3, note:"(Also in main table.) Prized creator; retention is the key task amid interest."},
  {name:"Jack Grealish", club:"Man City", pos:"W", dir:"in", age:"~2 wks", tier:3, note:"A stay (loan-to-permanent) is a concrete possibility."},
];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   The v1 file held no URLs, so all entries below are hubs pending re-verification.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  echo:      {l:"Liverpool Echo · Everton FC", u:"https://www.liverpoolecho.co.uk/all-about/everton-fc"},
  joeThomas: {l:"Joe Thomas (Liverpool Echo) · X", u:"https://x.com/joethomas18"},
  bbcEve:    {l:"BBC Sport · Everton", u:"https://www.bbc.co.uk/sport/football/teams/everton"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  athletic:  {l:"The Athletic · Everton", u:"https://www.nytimes.com/athletic/football/club/everton/"},
  sky:       {l:"Sky Sports · Everton", u:"https://www.skysports.com/everton"},
  fInsider:  {l:"Football Insider", u:"https://www.footballinsider247.com/"},
  teamtalk:  {l:"TEAMtalk · Everton", u:"https://www.teamtalk.com/everton"},
  efc:       {l:"Everton Official · news", u:"https://www.evertonfc.com/news"},
  gazzetta:  {l:"Gazzetta dello Sport", u:"https://www.gazzetta.it/"},
  lequipe:   {l:"L'Équipe · football", u:"https://www.lequipe.fr/Football/"},
  marca:     {l:"Marca", u:"https://www.marca.com/"},
};
const LINKMAP = {
  "Raul Jimenez": ["fInsider","echo"],
  "Marquee striker": ["fInsider","teamtalk","echo"],
  "Jack Grealish": ["echo","bbcGossip"],
  "Iliman Ndiaye": ["echo","joeThomas","bbcGossip"],
  "Underperforming forwards": ["echo","joeThomas"],
};
const WL_LINKMAP = {
  "Marquee striker":"fInsider","Iliman Ndiaye":"echo","Jack Grealish":"bbcGossip",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `<em>Moyes</em> backed by Friedkin: a big-money striker hunt to chase Europe`,
  heroLede: `Everton enter their second summer in the new <b>Hill Dickinson Stadium</b> with momentum: David <b>Moyes</b> steadied a 13th-placed side and, reportedly, will be backed with <b>serious money</b> by owners <b>The Friedkin Group</b>, with formal contract talks mooted. The headline brief is a <b>big-money striker</b> after Beto and Thierno Barry underwhelmed, with proven Premier League names linked. The flip side is keeping prized creative talent (Iliman Ndiaye) amid outside interest.`,
  metaRow: `
      <span>DECISION-MAKER: <b>The Friedkin Group</b> (Ownership)</span>
      <span>HEAD COACH: <b>David Moyes</b></span>
      <span>OWNER: <b>The Friedkin Group</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">13<small>th</small></div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£80-140<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£40-90<small>m</small></div></div>
    <div class="stat gold"><div class="l">SCR Cost Cap</div><div class="v">85<small>%</small></div></div>`,
  positionPanel: `
  <!-- ANALYSIS: MODEL + FINANCE -->
  <section id="sec-position">
    <div class="sec-head"><h3>Club Position</h3><span class="num">01</span></div>
    <p class="sec-sub">The lens through which every rumour is weighted: the recruitment philosophy, the balance sheet, the brand, and the European trade-off.</p>

    <div class="cards">
      <!-- THE MODEL -->
      <div class="card">
        <h4>The Model <span class="tag">CORE PRINCIPLE</span></h4>
        <p>An <b>owner-backed, Moyes-led</b> rebuild under <b>The Friedkin Group</b>. After stabilising the club, the model shifts toward genuine investment, experienced, system-fit signings to chase European football.</p>
        <div class="quote">Reports suggest Friedkin will fund a "big-money" striker and back Moyes with real muscle, a notable change of gear after seasons of constraint.</div>
        <p><b>This window's logic:</b> sign a reliable goalscorer, add quality in midfield and at full-back, and keep the core together.</p>
        <ul>
          <li>Striker links: Raul Jimenez (free), Liam Delap (long admired), Jarrod Bowen.</li>
          <li>Jack Grealish's stay (loan to permanent) is a "concrete possibility".</li>
          <li>Markets: proven Premier League quality plus attainable younger profiles.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> weight a marquee striker and Moyes-fit additions; treat a prized creator's exit as the main retention risk.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Backed by <b>The Friedkin Group</b>, Everton finally have ownership willing to invest, with the new stadium boosting revenue.</p>
        <ul>
          <li>No European football brings the looser <b>85%</b> cost cap, useful headroom for a spend.</li>
          <li>Stadium revenue and owner backing widen the budget.</li>
          <li>Past PSR caution gives way to genuine investment.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> Everton must still spend smartly within the cost rules after years of tight margins.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">A new stadium, owner backing and Moyes' steadying hand have lifted Everton's standing, and the 85% cap gives room for a real spend.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>A storied club with a gleaming new home and ambitious owners, Everton's pull is rising, and Moyes commands respect, though no European football tempers the pitch to elite targets.</p>
        <ul>
          <li>Owner backing and a marquee stadium aid the recruitment pitch.</li>
          <li>Moyes' track record with experienced signings (Grealish, Dewsbury-Hall) helps.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> success and a creative talent like Ndiaye attract bigger clubs, so retention matters.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue for clubs outside Europe</b>, the looser of the two limits (European clubs sit at 70%). No continental football is a sporting blow but a quiet financial edge over rivals juggling the tighter cap.</p>
        <p>For a club finally able to invest, the looser cap is welcome, and stadium revenue lifts the ceiling further.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation.</li>
          <li>A free-transfer striker (Jimenez-type) would be especially cost-efficient.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: an owner-backed push toward Europe</h5>
        <ul>
          <li>A reliable striker could transform a side that lacked goals.</li>
          <li>Friedkin backing plus the 85% cap allow a genuine upgrade.</li>
          <li>A new deal for Moyes would anchor the project.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: a misfiring spend or a key exit</h5>
        <ul>
          <li>A big-money striker is no guarantee, as Barry showed last year.</li>
          <li>Losing Ndiaye would weaken the creative spine.</li>
          <li>Owner ambition and Moyes' pragmatism must stay aligned.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> back Moyes with a proven striker (a free like Jimenez is the efficient route), add Moyes-fit quality, keep Ndiaye if possible, and use the looser 85% cap to push toward Europe.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; nothing is registered yet.</b> The settled business is the dugout: <b>Moyes</b> is in post, with new-deal talks reported. A big-money striker is the stated priority, and links span Raul Jimenez (free), Liam Delap and Jarrod Bowen. Targets enter the ledger only on announcement.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Friedkin network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: Everton price their best at a holder's premium.</b> A sought-after creator like Ndiaye carries a fee above consensus given his minutes and suitor interest. With Friedkin backing, Everton are buyers more than sellers this summer; fringe and underperforming names move at softer floors.
    `,
  excludedNote: `<b>Excluded as stale:</b> Sean Dyche-era links are not live; Moyes is the manager. Unsigned striker links remain rumours until announced.`,
  spendIn: { v: `£80-140m`, x: `A big-money or free striker plus midfield and full-back upgrades, with real owner backing.` },
  spendOut: { v: `£40-90m`, x: `Underperforming forwards and fringe names; a prized creator (Ndiaye) only at a premium.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic. <i>Used for:</i> Moyes' position, Friedkin backing, Everton's 13th-placed finish.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: TeamTalk, Football Insider and reliable national writers on the striker links; the Liverpool Echo's Everton beat rises within its patch.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Friedkin network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom and Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b>: the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window: fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
