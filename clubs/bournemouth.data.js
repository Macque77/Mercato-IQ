/* ============================================================
   MERCATO IQ · CLUB DATA · AFC BOURNEMOUTH · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce bournemouth.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   MIGRATION NOTE: migrated from the v1 dashboard of 6 Jun 2026.
   Data is pre-window and stale; a live refresh is required before
   this page is treated as current.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Bournemouth", mono: "AFCB", slug: "bournemouth",
  primary: "#DA291C", primaryBright: "#f0453a", primaryDeep: "#9e1b12",
  primaryRgb: "218,41,28",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook) ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Marco Rose",
  dof: "Data-led recruitment department (under Bill Foley)",
  europe: "Europa League (2026/27), first in club history",
  finish: "6th (2025/26)",
  owner: "Bill Foley (Black Knight Football Club)",
  window: "Opens 15 Jun, closes 1 Sep 2026"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/AFC+Bournemouth/Transfer+News",
    "https://www.transferfeed.com/clubs/bournemouth",
    "https://www.bournemouthecho.co.uk/sport/",
    "https://www.skysports.com/bournemouth"
  ],
  queries: [
    "AFC Bournemouth transfer news <current month + year>",
    "Bournemouth bid OR medical OR 'personal terms'",
    "Bournemouth mercato Foot Mercato L'Equipe RMC",
    "Bournemouth fichajes Marca AS Relevo Moretto",
    "Bournemouth transfer TyC Sports Ole Globo Esporte A Bola Record"
  ],
  note: "Foreign desks per profile: France (L'Equipe, RMC, Foot Mercato), Spain (Marca, AS, Relevo/Moretto, La Liga local beats), South America (TyC Sports, Ole, Globo Esporte), Portugal (A Bola, Record). Priority sources: The Athletic, BBC, Bournemouth Echo, reliable south-coast beat. Check multi-club group ties (Lorient, Hibernian, FC Auxerre) each window. For every linked player also search the current club's local press in the native language; trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "6 Jun 2026", updated: "2026-06-06T00:00:00Z", label: "Build · Rose in, Europa debut (migrated to v2, awaiting live refresh)" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Antonio Silva", sub:"22 · CB · Portugal", club:"permanent from Benfica", pos:"CB", fee:"€25m + €5m add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Independently reported by Romano, Di Marzio and Schira within days of each other; medical and signing were in progress as of 31 Jul."},
  {name:"Juanlu", sub:"Unknown · Spain · RB", club:"Unknown", pos:"RB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Spanish right-back signed by Bournemouth"}
];
const CONFIRMED_OUT = [
  {name:"Jordan Zemura", sub:"LB · Zimbabwe", club:"loan to Watford", pos:"LB", fee:"Loan to 30 Jun 2027", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official season-long loan to Watford, confirmed via Di Marzio's live mercato digest."},
  {name:"Marcos Senesi", sub:"Free transfer to London rivals", club:"Tottenham Hotspur", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];

const INCOMING = [];
const OUTGOING = [];
const DEAD = [
  {name:"Young press-fit additions", sub:"Rose-system talent", club:"Market", pos:"-", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"£40-80m total", truth:55, prob:40, light:'y', trend:'up',
   note:"With sales likely, expect several young, high-energy signings that suit Rose's pressing and the buy-develop-sell model. Names firm up as the window opens.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Avom & Hadj Moussa", sub:"Recycled aggregator links", club:"Aggregated feeds", pos:"-", report:"~60d+ / recycled", tier:4, fee:"n/a", truth:25, prob:8, light:'r', trend:'down', bullshit:true,
   note:"Recycled aggregator repetition with no named original source behind it, resurfacing every few weeks without ever being freshly re-reported. Carried only to show it's been discounted, not as live business.", lastSeen:"2026-08-04T19:10:50Z", baseProb:8, dead:true, deadReason:"no longer a current link", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Arthur Theate", sub:"Defensive reinforcement option", club:"Eintracht Frankfurt", pos:"DF", report:"Bournemouth continue to be linked with defensive cover as Marco Rose reshapes his backline ahead of the new season.", src:"The Athletic", tier:1, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"No credible update in 5+ weeks; vague on-page text", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Tiago Gabriel", sub:"Centre-back shortlist name", club:"Lecce", pos:"DF", report:"Young Italian-based centre-back named among Bournemouth's defensive targets.", src:"Gianluca Di Marzio", tier:2, fee:"Undisclosed", truth:50, prob:25, light:"o", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:25, dead:true, deadReason:"No credible update in 5+ weeks; vague on-page text", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Jhon Lucumí", sub:"Colombian centre-back option", club:"Bologna", pos:"DF", report:"Linked as defensive cover option amid Bournemouth's search for centre-back depth.", src:"Nicolò Schira", tier:2, fee:"Undisclosed", truth:45, prob:20, light:"o", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No credible update in 5+ weeks; vague on-page text", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Prized young asset", sub:"The model in action", club:"Elite suitors", pos:"-", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"£40m+", truth:55, prob:50, light:'y', trend:'up',
   note:"Bournemouth's best young players always attract bigger clubs (Huijsen to Real Madrid, Kerkez to Liverpool last year). PRICING: a holder's premium applies; a sale funds the next intake.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50, dead:true, deadReason:"no longer a current link", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Fringe & squad trim", sub:"Reinvestment churn", club:"Various", pos:"-", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"Mixed", truth:55, prob:45, light:'y', trend:'flat',
   note:"Standard churn to balance the squad for a European campaign and keep the cost ratio healthy.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"no longer a current link", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Rayan", sub:"Breakout Brazilian winger attracting suitors", club:"Multiple (Arsenal/Liverpool linked)", pos:"FW", report:"20-year-old right winger has scored 7 goals since a January move from Vasco da Gama; Bournemouth want £85m and a move this window is seen as unlikely.", src:"The Sun / OneFootball", tier:3, fee:"£85m", truth:45, prob:15, light:"o", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dead:true, deadReason:"Vague outgoing link, no recent credible reporting", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Antoine Semenyo", sub:"New contract signed, release clause active from January", club:"Multiple PL clubs previously linked", pos:"FW", report:"Semenyo committed his future to Bournemouth with a new deal that includes a £65m release clause only active from January 2027; no active move this summer.", src:"BBC Sport", tier:1, fee:"£65m release clause (Jan 2027)", truth:60, prob:10, light:"r", trend:"flat", note:"Not a live summer target given new contract terms", lastSeen:"2026-08-04T19:10:50Z", baseProb:10, dead:true, deadReason:"Committed to Bournemouth; not an active outgoing link", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Prized young assets", club:"Bournemouth", pos:"-", dir:"out", age:"~2 wks", tier:3, note:"The best young players draw elite interest; a premium sale is likely, per the model.", dead:true, deadReason:"no longer a current link", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Malik Tillman", sub:"AM · USA", club:"Bayer Leverkusen", pos:"AM", report:"~5 wks ago", src:"TeamTalk / ESPN", tier:3, fee:"£25-35m", truth:55, prob:25, light:'o', trend:'flat',
   note:"Bournemouth are credited with joining the race for the USMNT attacker, who would link up with Tyler Adams. OBSTACLE: a reported ~€35m clause for Bayern could shape the price; competition exists.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25, dir:"in", deadReason:"no fresh report in 5+ weeks", deadAt:"2026-08-06T10:24:32Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Marco Rose</b> - appointed to lead the first European campaign."},
  {ar:"⬆", t:"<b>Europa League</b> - qualification raises the recruitment pitch."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Iraola-era continuity</b> - new coach, new emphasis."},
  {ar:"⬇", t:"<b>Keeping every star</b> - the model implies at least one sale."},
];
const NEW = [
  {ar:"✦", t:"Manager: <b>Marco Rose</b> in for <b>Iraola</b> (Liverpool)."},
  {ar:"✦", t:"In: <b>Tillman</b> + young press-fit talent. Out: a prized asset at a premium."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Iraola-era links</b> - out of date now Rose is in."},
  {ar:"✕", t:"<b>Huijsen / Kerkez</b> - sold in 2025; model proof, not live."},
  {ar:"✕", t:"<b>Avom &amp; Hadj Moussa</b> - recycled aggregator repetition does not refresh recency; both fall on this basis."},
];

const POSITIONS = [
  {p:"Attacking mid / forward", w:72, x:"Tillman-type; goals and creativity"},
  {p:"Centre-back", w:65, x:"Replacing sold defenders, the recurring pattern"},
  {p:"Squad depth (Europe)", w:60, x:"First European campaign stretches the squad"},
  {p:"Full-back", w:50, x:"Press-fit, attacking profiles"},
  {p:"Midfield legs", w:45, x:"Energy for Rose's system"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   Aggregators (TransferFeed etc.) are never linked: the traced original is.
   Migration note: the v1 page held no verified article links, so only source
   hubs are mapped; exact URLs to be added at the first live refresh. */
const HUB = {
  echo:     {l:"Bournemouth Echo · sport", u:"https://www.bournemouthecho.co.uk/sport/"},
  afcb:     {l:"AFC Bournemouth Official", u:"https://www.afcb.co.uk/news/"},
  sky:      {l:"Sky Sports · Bournemouth", u:"https://www.skysports.com/bournemouth"},
  bbcGossip:{l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  teamtalk: {l:"TEAMtalk · Bournemouth", u:"https://www.teamtalk.com/bournemouth"},
  espn:     {l:"ESPN · football", u:"https://www.espn.co.uk/football/"},
  athletic: {l:"The Athletic · football", u:"https://www.nytimes.com/athletic/football/"},
  eSPNcitingNicoloSchiraAntonioSilva: {l:"ESPN (citing Nicolo Schira)", u:"https://www.espn.com/soccer/story/_/id/49506377/bournemouth-transfers-premier-league-antonio-silva-benfica"},
  gianlucaDiMarzioJordanZemura: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-notizie-giornata-2-agosto-2026-495426"},
  theAthleticviaRoundtableArthurTheate: {l:"The Athletic (via Roundtable)", u:"https://roundtable.io/sports/soccer/premier-league/afc-bournemouth/news/six-new-bournemouth-transfer-links-emerge-ahead-of-pre-season"},
  nowArsenalviaTheSunRayan: {l:"Now Arsenal (via The Sun)", u:"https://www.nowarsenal.com/transfer-news/bournemouth-demand-85million-for-star-with-arsenal-interested/"},
  bBCSportAntoineSemenyo: {l:"BBC Sport", u:"https://feeds.bbci.co.uk/sport/football/articles/cwy543n274wo"},
  skySportsAntonioSilva: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11743/13569014/antonio-silva-bournemouth-clinch-signing-of-portugal-international-defender-from-benfica"},
  sportsMoleMarcosSenesi: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/bournemouth/transfer-talk/feature/bournemouth-summer-transfers-all-confirmed-ins-and-outs-for-2026_599225.html"},
  bBCSportJuanlu: {l:"BBC Sport", u:"https://www.bbc.co.uk/sport/football/articles/cly91exewj2o?at_medium=RSS&at_campaign=rss"},
  bBCSportFootballJuanlu: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/cly91exewj2o"}};
const LINKMAP = {
  "Malik Tillman": ["teamtalk","espn"],
  "Young press-fit additions": ["echo","bbcGossip"],
  "Prized young asset": ["sky","athletic"],
  "Fringe & squad trim": ["echo"],
  "Avom & Hadj Moussa": [],
  "Antonio Silva": ["eSPNcitingNicoloSchiraAntonioSilva", "skySportsAntonioSilva"],
  "Jordan Zemura": ["gianlucaDiMarzioJordanZemura"],
  "Arthur Theate": ["theAthleticviaRoundtableArthurTheate"],
  "Tiago Gabriel": ["theAthleticviaRoundtableArthurTheate"],
  "Jhon Lucumí": ["theAthleticviaRoundtableArthurTheate"],
  "Rayan": ["nowArsenalviaTheSunRayan"],
  "Antoine Semenyo": ["bBCSportAntoineSemenyo"],
  "Marcos Senesi": ["sportsMoleMarcosSenesi"],
  "Juanlu": ["bBCSportJuanlu", "bBCSportFootballJuanlu"]};
const WL_LINKMAP = {
  "Malik Tillman":"teamtalk","Prized young assets":"sky",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `<em>Marco Rose</em> inherits Europa League football after Iraola's Anfield exit`,
  heroLede: `Bournemouth reach uncharted heights: a <b>6th-placed finish</b> and <b>Europa League qualification for the first time in the club's history</b>, the springboard for Andoni Iraola's move to Liverpool. <b>Marco Rose</b> arrives as head coach to build on it, a high-pressing coach with Salzburg, Gladbach, Dortmund and RB Leipzig pedigree. The model remains buy-young, develop, sell-high (Huijsen and Kerkez left for big fees), now with European nights to aid recruitment, and the tighter 70% cost cap to manage.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Recruitment dept</b> (under Foley)</span>
      <span>HEAD COACH: <b>Marco Rose</b></span>
      <span>OWNER: <b>Bill Foley (Black Knight)</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">6<small>th</small></div></div>
    <div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">EUROPA</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£70-120<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£60-130<small>m</small></div></div>
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
        <p>A <b>data-led, buy-young-and-sell-high</b> model under owner <b>Bill Foley</b>, now coached by <b>Marco Rose</b>. The Cherries recruit high-ceiling young talent, develop it, and bank major fees, reinvesting to climb.</p>
        <div class="quote">Rose favours an aggressive, high-pressing side that wins the ball early and attacks with urgency, a continuation of the front-foot identity Iraola built.</div>
        <p><b>This window's logic:</b> reinforce after likely sales of developed assets, and add legs for Rose's press plus a first European campaign.</p>
        <ul>
          <li>Recent model proof: Huijsen (Real Madrid) and Kerkez (Liverpool) sold for big fees.</li>
          <li>Targets linked: Malik Tillman (Leverkusen) among forward/attacking options.</li>
          <li>Markets: young, high-upside talent that fits an intense, transitional style; multi-club group ties (Lorient, Hibernian, FC Auxerre).</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> upgrade young, press-fit profiles; expect at least one prized-asset sale at a premium to fund the intake.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Owned by <b>Bill Foley</b>, Bournemouth run a sustainable, trading-led model, with a new training facility signalling long-term investment.</p>
        <ul>
          <li>European football brings the <b>70% cost cap</b>, a tighter ratio alongside more revenue.</li>
          <li>Player-trading profit (Huijsen, Kerkez) underpins the finances.</li>
          <li>Reinvestment, not hoarding, is the model.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> sustaining a top-six level while selling the best assets is the perennial challenge.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">A first European campaign raises Bournemouth's pull, but the trading model and the 70% cap mean selling stars and reinvesting remains the rhythm.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>From relegation fodder to a top-six, European club: Bournemouth's stock has soared, and Europa League football is a new recruitment asset for young talent.</p>
        <ul>
          <li>A proven pathway (Huijsen, Kerkez) attracts ambitious youngsters.</li>
          <li>Rose adds top-level European coaching pedigree.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> success puts the best young players in the shop window of bigger clubs.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue, but only 70% for clubs in European competition</b>. European football lifts revenue yet tightens the ratio, so it is a genuine trade-off, not a pure positive.</p>
        <p>Bournemouth's trading profit helps the ratio, but a first European campaign and a deeper squad add wage pressure.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation; sales improve it.</li>
          <li>Reinvesting sale proceeds keeps the cycle and the ratio healthy.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: a European debut on the back of the model</h5>
        <ul>
          <li>European nights raise the profile and the pull on young talent.</li>
          <li>Rose's pressing pedigree suits the squad's identity.</li>
          <li>Reinvested sale fees can sustain the top-six push.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: selling the spine again</h5>
        <ul>
          <li>Losing another core defender or two could undercut the level.</li>
          <li>A first European campaign stretches a smaller squad.</li>
          <li>The 70% cap limits how much of the windfall can be respent at once.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> expect the familiar rhythm, cash in on one or two developed assets at a premium, reinvest in young, press-fit talent for Rose, and add depth for a first European campaign within the 70% cap.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; nothing is registered yet.</b> The settled business is the dugout: <b>Marco Rose</b> replaces Iraola for the club's first European campaign. Targets (such as Malik Tillman) and the futures of sought-after young assets are live but unsigned.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Foley network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: Bournemouth are elite sellers, at a holder's price.</b> Their record of developing and selling young defenders (Huijsen to Real Madrid, Kerkez to Liverpool) means any prized asset is priced at a steep premium. Long contracts, rising minutes and multi-club interest stack the fee; fringe names move at softer floors to fund the next intake.
    `,
  excludedNote: `<b>Excluded as stale:</b> Iraola-era stories are not live now Rose is in; completed 2025 sales (Huijsen, Kerkez) are model proof, not live business. Avom and Hadj Moussa are carried only as decayed aggregator links: recycled repetition does not refresh recency.`,
  spendIn: { v: `£70-120m`, x: `Young, press-fit talent plus depth for Europe; funded by selling developed assets.` },
  spendOut: { v: `£60-130m`, x: `At least one prized-asset sale at a premium (the Huijsen/Kerkez pattern) plus fringe trimming.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic. <i>Used for:</i> the Rose appointment, Iraola's exit, Europa League qualification.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, NBC Sports, ESPN, reliable national and club writers. The Bournemouth Echo and south-coast beat rise a tier inside their patch.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals and regional press.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Foley network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom &amp; Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
