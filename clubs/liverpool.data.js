/* ============================================================
   MERCATO IQ · CLUB DATA · LIVERPOOL · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce liverpool.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Liverpool", mono: "LFC", slug: "liverpool",
  primary: "#00B2A9", primaryBright: "#3fc5be", primaryDeep: "#006a65",
  primaryRgb: "0,178,169",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook) ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Andoni Iraola",
  dof: "Richard Hughes (Sporting Director; Michael Edwards, FSG football lead)",
  europe: "Champions League (2026/27)",
  finish: "5th (2025/26)",
  owner: "Fenway Sports Group",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Liverpool/Transfer+News",
    "https://www.transferfeed.com/clubs/liverpool",
    "https://www.liverpoolecho.co.uk/all-about/liverpool-fc",
    "https://www.skysports.com/liverpool"
  ],
  queries: [
    "Liverpool transfer news <current month + year>",
    "Liverpool bid OR medical OR 'personal terms'",
    "Liverpool calciomercato Di Marzio TuttoMercatoWeb",
    "Liverpool mercato L'Equipe Foot Mercato RMC",
    "Liverpool transfer Bild Kicker Plettenberg",
    "Liverpool fichajes Marca AS Relevo Moretto"
  ],
  note: "Priority sources per profile: The Athletic (James Pearce), BBC, Liverpool Echo, David Ornstein. Foreign desks per profile Tier 1B: Italy (Di Marzio/TMW/Gazzetta/Corriere + Serie A local beats), Germany (Plettenberg/Sky DE/Bild/Kicker), France (L'Equipe/RMC/Foot Mercato), Spain (Marca/AS/Relevo/Moretto + La Liga beats), Netherlands (VI/De Telegraaf), Portugal (A Bola/Record), South America (TyC/Ole/Globo Esporte). For every linked player also search the current club's local press in the native language. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "6 Jun 2026", updated: "2026-06-06T00:00:00Z", label: "Build · Iraola in for Slot (migrated to v2, awaiting live refresh)" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Dara Jikiemi", sub:"Scotland U16 captain", club:"permanent from Celtic", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young academy prospect signs a 5-year contract; Romano confirmed with 'Here We Go'."},
  {name:"Ramos", sub:"", club:"", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Spanish midfielder signed by Liverpool"}
];
const CONFIRMED_OUT = [
  {name:"Andy Robertson", sub:"32 · LB · Scotland", club:"Tottenham Hotspur", pos:"LB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed on a free transfer at contract expiry, joining Tottenham to give De Zerbi cover and leadership at left-back."},
  {name:"Mohamed Salah", sub:"34 · Egypt · FW", club:"Trabzonspor", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Leaves on a free after mutually terminating his contract a year early, ending a nine-year Anfield spell in which he won seven major trophies and scored 257 goals in 442 games. Reported to be travelling to Turkey to complete a two-year deal."}
];

const INCOMING = [
  {name:"Bradley Barcola", sub:"24 · France · W", club:"Paris Saint-Germain", pos:"Winger", report:"Liverpool ready to make Barcola third £100m signing", src:"BBC Sport", tier:2, fee:"£100m", truth:75, prob:60, light:"g", trend:"down", note:"BBC Sport reports Liverpool's readiness to pursue as third £100m signing", lastSeen:"2026-08-06T14:31:11Z", baseProb:60},
  {name:"Raul Asencio", sub:"22 · Spain · D", club:"Real Madrid", pos:"Defender", report:"Intermediaries sounded Liverpool out on Asencio", src:"The Guardian", tier:2, fee:"Unknown", truth:65, prob:45, light:"y", trend:"up", note:"The Guardian reports intermediaries exploring Liverpool interest", lastSeen:"2026-08-06T14:31:11Z", baseProb:45}
];

const OUTGOING = [
  {name:"Cody Gakpo", sub:"25 · Netherlands · W", club:"Liverpool", pos:"Winger", report:"Tottenham made Gakpo a target; BBC Sport questions fit", src:"BBC Sport", tier:2, fee:"Unknown", truth:55, prob:40, light:"y", trend:"up", note:"BBC Sport explores whether Gakpo would be a good fit at Spurs amid transfer speculation", lastSeen:"2026-08-06T14:31:11Z", baseProb:40}
];
const DEAD = [
  {name:"Fringe & loan army", sub:"Squad trim", club:"Various", pos:"MIX", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"Mixed", truth:55, prob:45, light:'y', trend:'flat',
   note:"Standard FSG churn of fringe and loan players to balance the squad and the cost ratio under a new coach.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"Generic outgoing movement; not specific player(s)", dir:"out", deadAt:"2026-08-06T13:55:46Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Iraola</b> - confirmed as head coach after Slot's exit."},
  {ar:"⬆", t:"<b>Diomande</b> - determination to sign growing; Iraola keen."},
  {ar:"⬆", t:"<b>Gakpo</b> - reported to want out post-Slot."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Possession-only profiles</b> - less aligned with Iraola's press."},
  {ar:"⬇", t:"<b>Slot-era recruitment stories</b> - now out of date."},
];
const NEW = [
  {ar:"✦", t:"Manager: <b>Andoni Iraola</b> in for <b>Slot</b>; attack the priority."},
  {ar:"✦", t:"In: <b>Diomande</b>, <b>Rayan</b>, <b>Ndiaye</b>, <b>Eichhorn</b>. Out: <b>Gakpo</b> (wants out), <b>Konaté</b> (Madrid)."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Any 'Slot signing' link</b> - Slot has left; such items are stale."},
  {ar:"✕", t:"<b>Recycled 2025-window names</b> - not live this summer."},
];

const POSITIONS = [
  {p:"Wide forward / pace", w:82, x:"Iraola press-fit: Diomande, Rayan, Ndiaye"},
  {p:"Centre-back", w:60, x:"Konaté link to Madrid could open a need"},
  {p:"Central midfield", w:55, x:"Energy for the press; Eichhorn-type youth"},
  {p:"Striker", w:48, x:"Forward refresh if Gakpo leaves"},
  {p:"Full-back", w:42, x:"Robertson gone to Spurs; cover needed"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  echo:      {l:"Liverpool Echo · LFC", u:"https://www.liverpoolecho.co.uk/all-about/liverpool-fc"},
  lfc:       {l:"Liverpool FC Official", u:"https://www.liverpoolfc.com/news"},
  sky:       {l:"Sky Sports · Liverpool", u:"https://www.skysports.com/liverpool"},
  teamtalk:  {l:"TEAMtalk · Liverpool", u:"https://www.teamtalk.com/liverpool"},
  lcom:      {l:"Liverpool.com", u:"https://www.liverpool.com/"},
  ninetymin: {l:"90min · football", u:"https://www.90min.com/"},
  athletic:  {l:"The Athletic · football", u:"https://www.theathletic.com/football/"},
  ornstein:  {l:"David Ornstein · X", u:"https://x.com/David_Ornstein"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  vi:        {l:"Voetbal International", u:"https://www.vi.nl/"},
  fabrizioRomanoviaCaughtOffsideBradleyBarcola: {l:"Fabrizio Romano (via CaughtOffside)", u:"https://www.caughtoffside.com/2026/08/02/fabrizio-romano-bradley-barcola-liverpool-transfer-update-not-imminent/"},
  fabrizioRomanoviaRoundtableDaraJikiemi: {l:"Fabrizio Romano (via Roundtable)", u:"https://roundtable.io/sports/soccer/scottish-premiership/celtic/news/here-we-go---fabrizio-romano-confirms-celtic-transfer"},
  skySportsBradleyBarcola: {l:"Sky Sports", u:"https://www.skysports.com/transfer/news/12691/13567165/bradley-barcola-transfer-news-psg-value-france-forward-at-lb145m-amid-liverpool-and-arsenal-interest-paper-talk"},
  skySportsMohamedSalah: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13569969/mohamed-salah-former-liverpool-forward-set-to-join-turkish-club-trabzonspor-on-free-transfer-after-leaving-anfield"},
  skySportsBradleyBarcola1: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13567997/bradley-barcola-transfer-news-liverpool-set-to-open-talks-with-paris-saint-germain-over-winger-with-an-opening-offer-prepared"},
  skySportsIbrahimMbaye: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11669/13569955/ibrahim-mbaye-liverpool-explore-deal-for-paris-saint-germain-winger"},
  tEAMtalkcitingFabrizioRomanoCodyGakpo: {l:"TEAMtalk, citing Fabrizio Romano", u:"https://www.teamtalk.com/tottenham-hotspur/romano-reveals-tottenham-sign-gakpo-liverpool-two-conditions-sale-u-turn"},
  fabrizioRomanoviaTEAMtalkBradleyBarcola: {l:"Fabrizio Romano (via TEAMtalk)", u:"https://www.teamtalk.com/liverpool/fabrizio-romano-reveals-new-development-bradley-barcola-transfer-liverpool"},
  tEAMtalkRaulAsencio: {l:"TEAMtalk", u:"https://www.teamtalk.com/liverpool/raul-ascencio-transfer-news-liverpool-in-contact-real-madrid-sale-iraola-mourinho"},
  eSPNMohamedSalah: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49531510/mohamed-salah-transfer-trabzonspor-liverpool-egypt"},
  bBCSportFootballBradleyBarcola: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/c5y3pd5xvpzo"},
  theGuardianFootballRaulAsencio: {l:"The Guardian Football", u:"https://www.theguardian.com/football/2026/aug/06/football-transfer-rumours-arsenal-ezri-konsa-raul-asencio-liverpool"},
  bBCSportFootballCodyGakpo: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/c98vnel56q6o"},
  bBCSportFootballRamos: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/cz6484p441yo"},
  bBCSportFootballRamos1: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/cz6484p441yo?at_medium=RSS&at_campaign=rss"},
  bBCSportFootballBradleyBarcola1: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/c5y3pd5xvpzo?at_medium=RSS&at_campaign=rss"},
  bBCSportFootballCodyGakpo1: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/c98vnel56q6o?at_medium=RSS&at_campaign=rss"}};
const LINKMAP = {
  "Yan Diomande": ["teamtalk"],
  "Rayan": ["lcom"],
  "Iliman Ndiaye": ["echo","bbcGossip"],
  "Kennett Eichhorn": ["bbcGossip"],
  "Cody Gakpo": ["vi","echo", "tEAMtalkcitingFabrizioRomanoCodyGakpo", "bBCSportFootballCodyGakpo", "bBCSportFootballCodyGakpo1"],
  "Ibrahima Konaté": ["ninetymin"],
  "Fringe & loan army": ["echo"],
  "Bradley Barcola": ["fabrizioRomanoviaCaughtOffsideBradleyBarcola", "skySportsBradleyBarcola", "skySportsBradleyBarcola1", "athletic", "fabrizioRomanoviaTEAMtalkBradleyBarcola", "bBCSportFootballBradleyBarcola", "bBCSportFootballBradleyBarcola1"],
  "Dara Jikiemi": ["fabrizioRomanoviaRoundtableDaraJikiemi"],
  "Mohamed Salah": ["skySportsMohamedSalah", "eSPNMohamedSalah"],
  "Ibrahim Mbaye": ["skySportsIbrahimMbaye"],
  "Raul Asencio": ["tEAMtalkRaulAsencio", "theGuardianFootballRaulAsencio"],
  "Ramos": ["bBCSportFootballRamos", "bBCSportFootballRamos1"],
  "Carlos Ramos": ["bBCSportFootballRamos"]};
const WL_LINKMAP = {
  "Andy Robertson":"sky","Rio Ngumoha":"echo","Iliman Ndiaye":"echo",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `<em>Iraola</em> takes over: a rebuild after Slot, with attack the priority`,
  heroLede: `Liverpool open a new chapter as <b>Andoni Iraola</b> is confirmed head coach following <b>Arne Slot's exit</b>, inheriting a side that finished <b>5th and is back in the Champions League</b>. Recruitment runs through <b>Richard Hughes</b> and FSG's Michael Edwards, with Iraola's high-intensity style shaping the targets: pacey, pressing forwards (Yan Diomande, Rayan) head the board, while <b>Cody Gakpo</b> is reported to want out after Slot's departure and <b>Ibrahima Konaté</b> is linked with Real Madrid.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Richard Hughes</b> (Sporting Director)</span>
      <span>HEAD COACH: <b>Andoni Iraola</b></span>
      <span>OWNER: <b>Fenway Sports Group</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">5<small>th</small></div></div>
    <div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£100-160<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£80-140<small>m</small></div></div>
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
        <p>A <b>data-led, value-conscious</b> model under FSG, with <b>Richard Hughes</b> as sporting director and Michael Edwards overseeing football. New head coach <b>Andoni Iraola</b> brings a <b>high-intensity, pressing</b> identity that reshapes the recruitment profile toward pace and energy.</p>
        <div class="quote">Iraola's Bournemouth side were defined by aggressive pressing and quick transitions; expect targets to fit that athletic, front-foot template.</div>
        <p><b>This window's logic:</b> retool the attack and add legs for the press, while managing one or two big-name exits triggered by the coaching change.</p>
        <ul>
          <li>Style-fit targets: Yan Diomande, Rayan (Bournemouth), young pressing forwards.</li>
          <li>Markets: high-upside young talent plus selective proven quality.</li>
          <li>Exit management: Gakpo unsettled; Konaté linked away.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> upgrade pacey, press-resistant attackers and energetic profiles; discount static or possession-only names that do not fit Iraola.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Backed by <b>Fenway Sports Group</b>, Liverpool run a disciplined, self-sustaining model with elite commercial and Champions League revenue.</p>
        <ul>
          <li>European football sets the <b>70% Squad Cost Ratio cap</b>, the binding constraint.</li>
          <li>Sales (Gakpo, Konaté if he goes) would fund the attacking rebuild.</li>
          <li>FSG rarely overpay; value and resale ceiling remain central.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> a coaching change plus a 5th-place finish argues for decisive but disciplined spending.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">A Champions League return and a new, high-energy coach reset the recruitment profile, while the 70% cap and a coaching change shape exits.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>One of world football's biggest draws, Liverpool retain elite pulling power even in transition. Iraola's appointment gives young, ambitious players a clear development pitch.</p>
        <ul>
          <li>Champions League football aids recruitment of the best young talent.</li>
          <li>A press-based identity appeals to high-energy profiles.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> the coaching change unsettles some of the squad (Gakpo) and invites bids for prized names (Konaté).</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue, or 70% for European clubs</b>, where Liverpool sit after qualifying for the Champions League.</p>
        <p>FSG's discipline keeps the ratio manageable, but a meaningful attacking rebuild still leans on sales.</p>
        <ul>
          <li>A 3-year net position feeds the calculation, so exits improve headroom.</li>
          <li>That is why a Gakpo or Konaté sale would directly enable incomings.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward, a sharp, Iraola-fit rebuild</h5>
        <ul>
          <li>A high-press identity plus pacey recruits could quickly lift a 5th-place side.</li>
          <li>Champions League income sustains the spend.</li>
          <li>Young, resale-rich signings protect the long-term model.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk, a bumpy transition</h5>
        <ul>
          <li>A new coach plus several exits risks a disjointed squad mid-rebuild.</li>
          <li>Losing Konaté would weaken a key area the season was built on.</li>
          <li>The 70% cap limits how much can be done in one window.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> a focused attacking rebuild in Iraola's image, funded by managing one or two big exits, kept disciplined within the 70% cap rather than a blanket overhaul.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; nothing is registered yet.</b> The settled business is the dugout: <b>Andoni Iraola</b> is confirmed as head coach after Slot's exit. Early target work (Diomande, Rayan) and exit noise (Gakpo, Konaté) are live but unsigned, and enter the ledger only on announcement.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Hughes network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: Liverpool sell at a holder's price when under no pressure.</b> Long contracts, heavy minutes, rival interest and elite suitors lift fees above consensus. A managerial change can prompt some churn (Gakpo), which softens those floors, while FSG hold firm on prized assets unless the number is exceptional.
    `,
  excludedNote: `<b>Excluded as stale:</b> Slot-era stories and recycled 2025 links are not live; any item naming Slot as manager is out of date now Iraola is in. This state was migrated from the v1 dashboard of 6 Jun 2026 and awaits a live refresh.`,
  spendIn: { v: `£100-160m`, x: `Pace and pressing for the front line (Diomande, Rayan-type); upper end if a marquee forward lands.` },
  spendOut: { v: `£80-140m`, x: `Gakpo (wants out) and a possible Konaté sale to Real Madrid would fund the rebuild, plus fringe trimming.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic. <i>Used for:</i> the Iraola appointment, Slot's exit, the Konaté and Gakpo situations.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, reliable club beat reporters (James Pearce, Paul Joyce); 90min for the Konaté link. Local beat papers rise within their patch: the Liverpool Echo on Anfield matters.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, Liverpool.com, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Hughes network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Slot-era and recycled 2025 links fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
