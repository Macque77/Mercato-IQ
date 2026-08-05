/* ============================================================
   MERCATO IQ · CLUB DATA · MANCHESTER CITY · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce manchester-city.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   Migrated from the v1 dashboard (data of 6 Jun 2026); awaiting live refresh.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Manchester City", mono: "MCFC", slug: "manchester-city",
  primary: "#6CABDD", primaryBright: "#90c0e5", primaryDeep: "#406684",
  primaryRgb: "108,171,221",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook) ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Enzo Maresca",
  dof: "Hugo Viana (Director of Football)",
  europe: "Champions League (2026/27)",
  finish: "2nd (2025/26)",
  owner: "Abu Dhabi United Group (City Football Group)",
  window: "Opens 15 Jun 2026, closes 1 Sep 2026, 11pm UK"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Manchester+City/Transfer+News",
    "https://www.transferfeed.com/clubs/manchester-city",
    "https://www.manchestereveningnews.co.uk/all-about/manchester-city-fc",
    "https://www.skysports.com/manchester-city"
  ],
  queries: [
    "Manchester City transfer news <current month + year>",
    "Manchester City bid OR medical OR 'personal terms'",
    "Manchester City Romano OR Ornstein transfer",
    "Manchester City calciomercato Di Marzio TuttoMercatoWeb",
    "Manchester City transfer Bild Plettenberg Sky DE",
    "Manchester City mercato L'Equipe RMC Foot Mercato",
    "Manchester City fichajes Marca AS Relevo Moretto"
  ],
  note: "Priority sources per profile: The Athletic (Sam Lee), BBC, Manchester Evening News, Romano/Ornstein. Foreign desks per profile: Italy (Di Marzio/TMW/Gazzetta/Corriere/Serie A beats), Germany (Plettenberg-Sky DE/Bild/Kicker), France (L'Equipe/RMC/Foot Mercato), Spain (Marca/AS/Relevo-Moretto/La Liga beats), South America (TyC/Ole/Globo Esporte), Portugal (A Bola/Record). Club-specific: check CFG feeder/parent-club deals this window. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { label: "Updated 03 Aug 2026 – European refresh" , updated: "2026-08-03T12:48:44Z"};

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Elliot Anderson", sub:"22 · CM · England", to:"permanent from Nottingham Forest", fee:"£116m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Confirmed 3 August per multiple outlets: a club-record midfield signing that reflects Maresca's priority to build a ball-progressing, press-resistant core at the base. Anderson becomes the first major arrival of Maresca's rebuild, paired with ongoing work to refresh an ageing senior spine (Silva, Stones, Ederson). A technically excellent young English midfielder who has flourished under Nuno at Forest; the fee underlines City's commitment to reset central midfield immediately."},
  {name:"Mathys Detourbet", sub:"Signed then loaned back out", club:"Troyes", pos:"FW", fee:"£21.7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Immediately loaned to Monaco for the season"},
  {name:"Jeremy Monga", sub:"Teenage winger", club:"Leicester City", pos:"FW", fee:"£12.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Pierce Charles", sub:"Signed then loaned to QPR", club:"Sheffield Wednesday", pos:"GK", fee:"£3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];
const CONFIRMED_OUT = [
  {name:"Bernardo Silva", sub:"31 · CM/W", to:"Departing", club:"Departing", fee:"TBC", free:false, status:"exit", statusTxt:"LEAVING",
   note:"Reported among the senior departures as the squad refreshes under the new regime; an influential but ageing creator moving on."},
  {name:"John Stones", sub:"CB", to:"Departing", club:"Departing", fee:"TBC", free:false, status:"exit", statusTxt:"LEAVING",
   note:"Injury-hit defender named among those leaving this summer as City reshape the spine."},
  {name:"Ederson", sub:"GK", to:"Departing", club:"Departing", fee:"TBC", free:false, status:"exit", statusTxt:"LEAVING",
   note:"Long-serving goalkeeper reported on his way out, opening a succession question between the posts."},
  {name:"Manuel Akanji", sub:"Permanent exit", club:"Inter Milan", pos:"DF", fee:"£13m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Nathan Ake", sub:"Permanent exit", club:"Fenerbahce", pos:"DF", fee:"£7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Jahmai Simpson-Pusey", sub:"Academy product sold", club:"Köln", pos:"DF", fee:"£4.65m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];

const INCOMING = [
  {name:"Enzo Fernández", sub:"CM · Argentina", club:"(discussed)", pos:"CM", report:"~6 days ago", src:"Manchester Evening News", tier:2, fee:"£70m+", truth:70, prob:18, light:'o', trend:'flat',
   note:"Discussed as a midfield-control option for Maresca, who knows him from Chelsea. OBSTACLES: a large fee and wages, and whether a sale materialises at the selling club.", lastSeen:"2026-08-04T19:10:50Z", baseProb:18},
  {name:"Eli Junior Kroupi", sub:"19 · France · FW", club:"Bournemouth", pos:"ST/W", report:"~6 days ago", src:"Manchester Evening News", tier:2, fee:"£80m+", truth:70, prob:14, light:'r', trend:'flat',
   note:"On the discussed list as City weigh forward refresh; also an Arsenal target, so a contested, expensive teenager. Early-stage.", lastSeen:"2026-08-04T19:10:50Z", baseProb:14},
  {name:"Ayyoub Bouaddi", sub:"Direct talks ongoing, deadline decision looms", club:"Lille", pos:"MF", report:"City remain in direct club-to-club talks with Lille over the 18-year-old, having overtaken Arsenal as favourites, though Lille's president insists there is a strong chance he stays another year.", src:"Fabrizio Romano", tier:1, fee:"€90-100m", truth:70, prob:45, light:"y", trend:"flat", note:"Deadline for a 2026 vs 2027 move reportedly September 1", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Gerónimo Rulli", sub:"Backup goalkeeper, personal terms agreed", club:"Marseille", pos:"GK", report:"Rulli has agreed personal terms with City as a backup option and Romano expects the clubs to reach agreement within days.", src:"Fabrizio Romano", tier:1, fee:"Undisclosed (~€5m)", truth:80, prob:75, light:"g", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:75}
];
const OUTGOING = [
  {name:"Senior core review", sub:"Silva / Stones / Ederson · framing thread", club:"Various", pos:"-", report:"~1 wk ago", src:"The Athletic", tier:1, fee:"Mixed", truth:85, prob:70, light:'g', trend:'up',
   note:"The clearest business: a generational refresh sees several Guardiola-era seniors moved on (see ledger). PRICING: contract length and age set modest fees; the value is squad-list and wage relief.", lastSeen:"2026-08-04T19:10:50Z", baseProb:70},
  {name:"Fringe & loan army", sub:"Squad depth · framing thread", club:"Various", pos:"-", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"Mixed", truth:55, prob:45, light:'y', trend:'flat',
   note:"Expect the usual City churn of loanees and fringe players to balance the books and the cost ratio under a new coach.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Rodri", sub:"30 · CDM · Spain", club:"Real Madrid", pos:"CDM", report:"4 Aug 2026", src:"Fabrizio Romano / Nicolo Schira", tier:1, fee:"Opening bid €50-60m (City value ~€80m)", truth:65, prob:40, light:"y", trend:"flat", note:"Rejected a City contract renewal; personal terms reportedly agreed in principle to 2030, but the two clubs remain apart on fee.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Savinho", sub:"Requested exit, Spurs given deadline", club:"Tottenham Hotspur", pos:"FW", report:"Savinho has told City he wants to leave for more playing time; Tottenham hold priority interest and were reportedly given a deadline to complete a deal, with Liverpool an alternative suitor as a Salah replacement.", src:"Fabrizio Romano", tier:1, fee:"~£60m", truth:75, prob:65, light:"g", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:65},
  {name:"James Trafford", sub:"Leeds keen once Perri deal completes", club:"Leeds United", pos:"GK", report:"Leeds intend to move for academy product Trafford once they sell Lucas Perri to Torino; the player is described as keen on the switch, though no fee is agreed yet.", src:"Fabrizio Romano", tier:1, fee:"Undisclosed", truth:60, prob:40, light:"y", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];

const RISERS = [
  {ar:"⬆", t:"<b>Maresca</b> - appointment imminent; three-year deal reported."},
  {ar:"⬆", t:"<b>Senior departures</b> - Silva, Stones, Ederson moving on."},
  {ar:"⬆", t:"<b>Elliot Anderson</b> - club-record £116m arrival from Nottingham Forest now done and official."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Marquee splurge</b> - early signals point to structure-first, not a spree."},
  {ar:"⬇", t:"<b>Guardiola-era stories</b> - now out of date with Pep gone."},
];
const NEW = [
  {ar:"✦", t:"Manager: <b>Enzo Maresca</b> in for <b>Guardiola</b>; backroom largely rebuilt."},
  {ar:"✦", t:"Elliot Anderson's club-record move from Nottingham Forest is done; Enzo Fernández and Kroupi remain discussed targets. Out: senior core refresh."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Any 'Guardiola signing' link</b> - Pep has departed; such items are stale."},
  {ar:"✕", t:"<b>2025-window recycled names</b> - not live this summer."},
];

const POSITIONS = [
  {p:"Central midfield", w:80, x:"Maresca's control profile; Anderson signed for a club-record £116m, Enzo Fernández still discussed"},
  {p:"Goalkeeper", w:62, x:"Ederson exit opens a succession question"},
  {p:"Centre-back", w:58, x:"Stones among departures; depth and age refresh"},
  {p:"Forward", w:50, x:"Kroupi-type youth option weighed"},
  {p:"Full-back", w:40, x:"Squad balance under a new system"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"Backroom rebuild", club:"Man City", pos:"-", dir:"out", age:"~2 wks", tier:1, note:"Most of Guardiola's staff (Lijnders, Buenaventura, Estiarte and others) have left; tracked as context, not a transfer."},
  {name:"Loan returns", club:"Man City", pos:"-", dir:"out", age:"~3 wks", tier:3, note:"City's large loan group will be assessed and traded under the new coach."},
];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  men:      {l:"Manchester Evening News · Man City", u:"https://www.manchestereveningnews.co.uk/all-about/manchester-city-fc"},
  athletic: {l:"The Athletic · Manchester City", u:"https://theathletic.com/football/team/manchester-city/"},
  mcfc:     {l:"Man City Official", u:"https://www.mancity.com/news"},
  sky:      {l:"Sky Sports · Man City", u:"https://www.skysports.com/manchester-city"},
  bbc:      {l:"BBC Sport · Man City", u:"https://www.bbc.co.uk/sport/football/teams/manchester-city"},
  bbcGossip:{l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  romano:   {l:"Fabrizio Romano · X", u:"https://x.com/FabrizioRomano"},
  ornstein: {l:"David Ornstein · X", u:"https://x.com/David_Ornstein"},
  fabrizioRomanoviaFootballTransfersRodri: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-transfer-news-chelsea-trevoh-chalobah-barcelona-rodri-real-madrid-franco-mastantuono"},
  footballTransferscomAyyoubBouaddi: {l:"FootballTransfers.com", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/07/man-city-transfer-news-ayyoub-bouaddi-lille-fabrizio-romano-update-summer-2026"},
  footballTransferscomRomanoGernimoRulli: {l:"FootballTransfers.com (Romano)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/07/fabrizio-romano-carlos-espi-bradley-barcola-rodri"},
  yahooSportsviaRomanoTEAMtalkSavinho: {l:"Yahoo Sports (via Romano/TEAMtalk)", u:"https://sports.yahoo.com/articles/man-city-dithering-opens-door-071000765.html"},
  readManCitycomviaRomanoJamesTrafford: {l:"ReadManCity.com (via Romano)", u:"https://readmancity.com/2026/07/25/fabrizio-romano-confirms-leeds-united-move-manchester-city-goalkeeper/"},
  eSPNElliotAnderson: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49433223/elliot-anderson-completes-move-manchester-city-nottingham-forest"},
  tEAMtalkMathysDetourbet: {l:"TEAMtalk", u:"https://www.teamtalk.com/manchester-city/every-completed-man-city-transfer-summer-2026-signings-exits-loans"},
  footballFanCastManuelAkanji: {l:"FootballFanCast", u:"https://www.footballfancast.com/manchester-city-transfers-signings/"}};
const LINKMAP = {
  "Elliot Anderson": ["men", "eSPNElliotAnderson"],
  "Enzo Fernández": ["men"],
  "Eli Junior Kroupi": ["men"],
  "Senior core review": ["athletic","men"],
  "Bernardo Silva": ["athletic","mcfc", "footballFanCastManuelAkanji"],
  "John Stones": ["athletic","mcfc", "tEAMtalkMathysDetourbet"],
  "Ederson": ["athletic","mcfc"],
  "Rodri": ["fabrizioRomanoviaFootballTransfersRodri", "footballTransferscomRomanoGernimoRulli"],
  "Ayyoub Bouaddi": ["footballTransferscomAyyoubBouaddi"],
  "Gerónimo Rulli": ["footballTransferscomRomanoGernimoRulli"],
  "Savinho": ["yahooSportsviaRomanoTEAMtalkSavinho"],
  "James Trafford": ["readManCitycomviaRomanoJamesTrafford"],
  "Mathys Detourbet": ["tEAMtalkMathysDetourbet"],
  "Jeremy Monga": ["tEAMtalkMathysDetourbet"],
  "Pierce Charles": ["tEAMtalkMathysDetourbet"],
  "Manuel Akanji": ["footballFanCastManuelAkanji"],
  "Nathan Ake": ["tEAMtalkMathysDetourbet"],
  "Jahmai Simpson-Pusey": ["footballFanCastManuelAkanji"]};
const WL_LINKMAP = {
  "Elliot Anderson":"men","Backroom rebuild":"athletic","Loan returns":"men",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `New era under <em>Maresca</em>: a reset, not a rebuild, after Guardiola's farewell`,
  heroLede: `City close a decade-defining chapter as <b>Pep Guardiola departs</b> following a 2025/26 <b>runners-up finish and a domestic cup double</b> (FA Cup and Carabao Cup). <b>Enzo Maresca</b> arrives on a three-year deal to inherit a squad already mid-refresh, with Bernardo Silva, John Stones and Ederson among the summer departures and most of Guardiola's backroom gone. Back in the <b>Champions League</b>, the early brief is continuity of structure under director of football <b>Hugo Viana</b> rather than a spending spree, with Elliot Anderson, Enzo Fernández and Eli Junior Kroupi among the names discussed.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Hugo Viana</b> (Director of Football)</span>
      <span>HEAD COACH: <b>Enzo Maresca</b></span>
      <span>OWNER: <b>Abu Dhabi (City Football Group)</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">2<small>nd</small></div></div>
    <div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£120-200<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£100-180<small>m</small></div></div>
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
        <p>An <b>elite, data-led recruitment machine</b> run by director of football <b>Hugo Viana</b> (who succeeded Txiki Begiristain) under new head coach <b>Enzo Maresca</b>. The last 18 months saw a deliberate pivot to younger profiles (Cherki, Khusanov, and similar), and that succession continues now Guardiola has gone.</p>
        <div class="quote">Early signals: Maresca's first priority is reportedly to embed his philosophy and build on existing structures rather than tear up the squad, with transfers a secondary concern.</div>
        <p><b>This window's logic:</b> refresh an ageing spine and adapt to a new coach, funded comfortably by the deepest resources in the league.</p>
        <ul>
          <li>Names discussed internally: Elliot Anderson, Enzo Fernández, Eli Junior Kroupi.</li>
          <li>Markets: the very top of the global market, with a clear tilt to youth and resale ceiling.</li>
          <li>Transition risk: most of Guardiola's backroom has also departed.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> weight targets that fit a younger, Maresca-shaped rebuild; treat veteran-replacement and midfield-control profiles as the likeliest business.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Backed by <b>Abu Dhabi ownership through the City Football Group</b>, City have the strongest financial base in the league, with elite commercial and Champions League revenue.</p>
        <ul>
          <li>The constraint is regulatory, not cash: the <b>70% European Squad Cost Ratio cap</b> governs spend.</li>
          <li>Clearing high-earning veterans both refreshes the squad and protects the ratio.</li>
          <li>Ongoing Premier League regulatory matters remain a background watch item.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> even for City, a managerial reset argues for targeted, structural buys rather than a scattergun splurge.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">Standing is a recruitment asset, but Champions League football tightens the cost ratio and puts the best assets in the window.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>Champions League regulars and serial domestic winners: City can attract almost any target. A new manager and a refreshed project keep the pull strong.</p>
        <ul>
          <li>Maresca returns to the club where he coached under Guardiola, easing the transition.</li>
          <li>The youth pivot keeps City competitive for the best emerging talent.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> a transition summer invites bids for fringe and ageing names, so squad-list management is as important as recruitment.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> replaces PSR. The cap on wages, agent fees and amortisation is <b>85% of revenue, but 70% for clubs in European competition</b>, where City sit.</p>
        <p>City's vast revenue gives real headroom, but a high wage bill and heavy amortisation mean the ratio still shapes the window.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation, so selling veterans improves the ratio.</li>
          <li>That is why moving on high earners (Silva, Stones, Ederson) is structural, not just sentimental.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: a smooth reset that keeps City at the top</h5>
        <ul>
          <li>Continuity of structure under Viana plus a proven coach in Maresca limits transition risk.</li>
          <li>A younger spine extends the competitive cycle and the resale base.</li>
          <li>Champions League income sustains the financial edge.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: the cost of a bumpy transition</h5>
        <ul>
          <li>Losing most of Guardiola's backroom alongside Pep himself is a large institutional change.</li>
          <li>Over-refreshing too fast could unbalance a title-winning core.</li>
          <li>The 70% cap limits how much of the rebuild can happen in one window.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> expect a measured, structure-first window: bed in Maresca, move on the ageing high earners, and add a small number of younger, system-fit profiles rather than a marquee splurge, all kept within the 70% cap.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; deals are not yet registered.</b> The defining business is managerial: Maresca's appointment is set to be confirmed in the coming days, and several Guardiola-era departures (Bernardo Silva, John Stones, Ederson) are in train. Incoming targets enter the ledger only once announced.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Viana network 15%, finance 10%, competition 5%, not fan desire.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: City sell from strength, at a holder's price.</b> Four multipliers stack above consensus value: long contracts remove buyer leverage, heavy minutes prove the asset, multi-club interest inflates the fee, and elite suitors pay a premium. With a managerial transition under way, some churn of the ageing core is logical, which softens the floor on those names while prime assets stay priced to deter.
    `,
  excludedNote: `<b>Excluded as stale:</b> recycled 2025-window links and pre-departure Guardiola-era stories are not treated as live; any article still listing Pep as manager is out of date.`,
  spendIn: { v: `£120-200m`, x: `Upper end only if a marquee midfield or forward upgrade lands; base case is two or three targeted, younger additions.` },
  spendOut: { v: `£100-180m`, x: `Veteran and fringe sales (Silva, Stones, Ederson and others) raise cash and protect the cost ratio.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic, Manchester Evening News, official club statements. <i>Used for:</i> the Maresca appointment, the Guardiola departure, squad-transition reporting.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, reliable national writers, established club reporters.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Viana network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom &amp; Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
