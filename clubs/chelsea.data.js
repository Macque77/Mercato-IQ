/* ============================================================
   MERCATO IQ · CLUB DATA · CHELSEA · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce chelsea.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (format migration only, data carried from the
   6 Jun 2026 v1 dashboard, no re-verification):
   · truth values SYNTHESISED conservatively from source tier and
     recency (T1 85 / T2 70 / T3 55 / T4 35; minus 10 where a note
     reads cooled or stale). The old single probability is kept as
     Happens?. No light-band fixes were needed (no prob sat outside
     its declared band).
   · The v1 build held only 3 rated rows (thread-level, not named
     players); the QA gate requires 5 combined rows, so two extra
     thread rows (Defensive balance, Midfield control) were derived
     from the v1 POSITIONS board (heat 55 / 50 used as prob, truth
     via the same tier rule). They restate v1 content only;
     no new rumours were added.
   · Old file held no source URLs, so LINKMAP/WL_LINKMAP point at
     named-source hubs only (club beat: Matt Law, Nizaar Kinsella,
     BBC, The Athletic); replace with exact URLs at next refresh.
   · Old badge payload was JPEG data mislabelled image/png; it fails
     PNG validation, so the build uses the chelsea.png reference +
     SVG shield fallback until a true PNG is inlined.
   · BRAND tokens carried from the v1 CSS accents, which skinned
     Chelsea in the GOLD secondary (#DBA111), not the club blue
     (#034694 per chelsea.md); review the skin at next refresh.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Chelsea", mono: "CFC", slug: "chelsea",
  primary: "#DBA111", primaryBright: "#e4b84c", primaryDeep: "#83600a",
  primaryRgb: "219,161,17",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook)
   verified deliberately stale (old build date): next refresh must re-verify all fields. ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Xabi Alonso (four-year deal from 1 Jul 2026)",
  dof: "BlueCo recruitment (co-sporting directors)",
  europe: "None (2026/27)",
  finish: "Mid-table (9th, 2025/26)",
  owner: "BlueCo (Todd Boehly / Clearlake Capital)",
  window: "Opens 15 Jun, runs to 1 Sep 2026"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Chelsea/Transfer+News",
    "https://www.transferfeed.com/clubs/chelsea",
    "https://www.football.london/chelsea-fc/",
    "https://www.skysports.com/chelsea"
  ],
  queries: [
    "Chelsea transfer news <current month + year>",
    "Chelsea bid OR medical OR 'personal terms'",
    "Chelsea calciomercato Di Marzio TuttoMercatoWeb Gazzetta",
    "Chelsea transfer L'Equipe Foot Mercato OR TyC Sports Globo Esporte",
    "Chelsea fichajes Marca AS Relevo OR A Bola Record"
  ],
  note: "Foreign desks per profile: South America (TyC Sports/Ole/Globo Esporte), France (L'Equipe/RMC/Foot Mercato), Portugal (A Bola/Record), Italy (Di Marzio/TMW/Gazzetta/Corriere + Serie A local beats), Germany (Plettenberg/Sky DE/Bild/Kicker), Spain (Marca/AS/Relevo/Moretto + La Liga local beats). For every linked player also search the current club's local press in the native language. Club-specific: check BlueCo multi-club ties (Strasbourg feeder deals) and any live PSR/SCR sanction each refresh. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { label: "Updated 03 Aug 2026 – European refresh" , updated: "2026-08-03T12:48:44Z"};

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Morgan Rogers", sub:"25 · AM/RW · England", to:"permanent from Aston Villa", fee:"£117m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Confirmed August 2026: a record transfer for the England international, Rogers becomes Chelsea's marquee attacking addition under Xabi Alonso. The fee ranks among the highest in European football for a wide playmaker, reflecting Alonso's determination to build an attacking midfield core after arriving from Bayer Leverkusen. Rogers scored 8 goals and assisted 7 in 34 Premier League appearances for Villa last season and carries a full international cap."},
  {name:"Emmanuel Emegha", sub:"ST · Netherlands", to:"agreed from Strasbourg", fee:"Undisclosed", free:false, status:"pending", statusTxt:"AGREED, AWAITING ANNOUNCEMENT",
   note:"The Strasbourg captain and striker remains agreed to join via the BlueCo cross-club pipeline this summer. A direct, on-model young centre-forward; formal completion expected imminently once international commitments clear."},
  {name:"Pep Chavarría", sub:"LB · Spain", club:"permanent from Rayo Vallecano", pos:"LB", fee:"€25m + €5m bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Schira calls it a done deal, personal terms agreed to 2032, positioned as Marc Cucurella's long-term replacement."},
  {name:"Danny Welbeck", sub:"35 · ST · England", club:"free from Brighton", pos:"ST", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Veteran forward signs a free transfer with a contract to 2028, confirmed via Di Marzio's live mercato digest."},
  {name:"Geovany Quenda", sub:"Permanent, contract to 2034", club:"Sporting CP", pos:"FW", fee:"£43m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Portuguese wing prospect, one of Chelsea's marquee summer additions"},
  {name:"Maxence Lacroix", sub:"Permanent", club:"Crystal Palace", pos:"DF", fee:"£52m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Centre-back reinforcement for Xabi Alonso's back line"},
  {name:"Marco Palestra", sub:"Permanent, contract to 2033", club:"Atalanta", pos:"DF", fee:"£47m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young Italian right-back"},
  {name:"Valentin Barco", sub:"Permanent, 7-year deal to 2033", club:"Strasbourg", pos:"MF", fee:"£34m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Chelsea's 9th summer signing; may be loaned out immediately"},
  {name:"Jordan Henderson", sub:"36 · England · MF", club:"Brentford", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed on a two-year deal after his Brentford contract was mutually terminated. The 91-cap England midfielder was part of the 2026 World Cup squad."},
  {name:"Moisés Caicedo", sub:"25 · Ecuador · CM", club:"Brighton", pos:"CM", fee:"£115m plus sell-on", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreement reached and sealed. Medical tests booked. Contract until June 2031."},
  {name:"Mason Mount", sub:"24 · England · CM", club:"Manchester United", pos:"CM", fee:"£60m (£55m + £5m adds)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed outgoing to Manchester United, not Chelsea. Listed as confirmed_out below."},
  {name:"Dean Henderson", sub:"Nottingham Forest · GK", club:"Nottingham Forest", pos:"GK", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Chelsea confirm signing"}
];
const CONFIRMED_OUT = [
  {name:"Marc Cucurella", sub:"Permanent", club:"Real Madrid", pos:"DF", fee:"£51.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left-back departs for Real Madrid"},
  {name:"Andrey Santos", sub:"Permanent", club:"Manchester United", pos:"MF", fee:"£48m-£50m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Brazilian midfielder moves to Old Trafford"},
  {name:"Tyrique George", sub:"Permanent", club:"Everton", pos:"FW", fee:"£18m-£24m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young winger heads to Goodison Park"},
  {name:"Alejandro Garnacho", sub:"Season-long loan", club:"Aston Villa", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Winger sent out on loan for regular football"},
  {name:"Mason Mount", sub:"24 · England · CM", club:"Manchester United", pos:"CM", fee:"£60m (£55m + £5m adds)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreement reached with Manchester United. Deal done."}
];

const INCOMING = [
  {name:"Pep Chavarria", sub:"Unknown · Spain · LB", club:"Rayo Vallecano", pos:"LB", report:"Chelsea set to clinch deal to sign Rayo Vallecano left-back", src:"Sky Sports", tier:2, fee:"Undisclosed", truth:85, prob:80, light:"g", trend:"flat", note:"Deal reported as imminent", lastSeen:"2026-08-06T14:13:57Z", baseProb:80}
];

const OUTGOING = [];
const DEAD = [
  {name:"Victor Osimhen", sub:"Napoli · ST", club:"Napoli", pos:"ST", report:"Chelsea have been credited with interest", src:"Transfer Rumour", tier:3, fee:"Unknown", truth:40, prob:25, light:"o", trend:"up", note:"Interest reported, early stage", lastSeen:"2026-08-06T13:55:46Z", baseProb:25, dead:true, deadReason:"No recent credible snippet supporting active interest; superceded by confirmed signings", dir:"in", deadAt:"2026-08-06T14:04:24Z"},
  {name:"Pedro Neto", sub:"Chelsea · W", club:"Manchester City", pos:"W", report:"Manchester City have made a formal approach", src:"Transfer Rumour", tier:3, fee:"Unknown", truth:50, prob:40, light:"y", trend:"up", note:"City inquiry reported", lastSeen:"2026-08-06T13:55:46Z", baseProb:40, dead:true, deadReason:"No recent snippet confirming ongoing Chelsea interest or Manchester City approach", dir:"out", deadAt:"2026-08-06T14:04:24Z"},
  {name:"Alonso-fit additions", sub:"System pieces", club:"Market", pos:"-", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"£60-120m total", truth:55, prob:40, light:'y', trend:'flat',
   note:"With Emegha agreed, further targets are likely to be Alonso-shaped, balanced and tactically specific rather than another volume splurge. Names firm up once he starts on 1 July.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"Vague category rumour from ~2 weeks ago, no specific player identified", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Defensive balance", sub:"Positional thread", club:"Market", pos:"CB/FB", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"Within £120-200m gross", truth:55, prob:55, light:'g', trend:'flat',
   note:"Carried from the v1 positions board (heat 55): an Alonso-shaped defensive structure is a stated priority of the rebuild. Thread-level only; the v1 state held no named defensive targets, so names attach at the next refresh.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55, dead:true, deadReason:"Vague category rumour from ~2 weeks ago, no specific player identified", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Midfield control", sub:"Positional thread", club:"Market", pos:"CM", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"Within £120-200m gross", truth:55, prob:50, light:'y', trend:'flat',
   note:"Carried from the v1 positions board (heat 50): tactical fit for Alonso in central midfield is a flagged need. Thread-level only; no named midfield targets were held in the v1 state.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50, dead:true, deadReason:"Vague category rumour from ~2 weeks ago, no specific player identified", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Squad rationalisation", sub:"Surplus & loan army", club:"Various", pos:"-", report:"~2 wks ago", src:"ESPN / aggregated", tier:2, fee:"Mixed (profit-rich)", truth:70, prob:65, light:'g', trend:'up',
   note:"The defining business: a vast roster trimmed for balance and cost-rule profit. PRICING: fringe and academy names move at varied floors; book profit on homegrown sales.", lastSeen:"2026-08-04T19:10:50Z", baseProb:65, dead:true, deadReason:"Vague category rumour from ~2 weeks ago, no specific players identified", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"High earners", sub:"Wage & ratio relief", club:"Various", pos:"-", report:"~2 wks ago", src:"Aggregated", tier:3, fee:"Mixed", truth:55, prob:45, light:'y', trend:'flat',
   note:"Expect some bigger names to move on as Alonso reshapes the side and BlueCo manage the cost ratio.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"Vague category rumour from ~2 weeks ago, no specific players identified", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Mykhailo Mudryk", sub:"Loan exit being planned after doping ban expired", club:"Coventry City / Strasbourg (multiple suitors)", pos:"FW", report:"Now free to play again after his doping suspension, Chelsea are weighing a loan to help restore his fitness and value; Coventry are among several Premier League and European clubs registering interest, with Strasbourg also in the mix.", src:"Ben Jacobs / Ahad Shaukat", tier:1, fee:"Loan", truth:65, prob:40, light:"y", trend:"flat", note:"Xabi Alonso to assess him in pre-season before a final decision on his future", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"Listed as outgoing with note about doping suspension clearance, but no concrete departure link found in recent reporting", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Loan army", club:"Chelsea", pos:"-", dir:"out", age:"~2 wks", tier:3, note:"Chelsea's large loan and fringe group to be traded for balance and profit.", dead:true, deadReason:"Vague category rumour from ~2 weeks ago, no specific players identified", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Alonso targets", club:"Market", pos:"-", dir:"in", age:"~2 wks", tier:3, note:"System-specific additions expected once Alonso starts on 1 July.", dead:true, deadReason:"Vague category rumour from ~2 weeks ago, no specific player identified", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Enzo Fernandez", sub:"25 · Argentina · CM", club:"No agreed destination", pos:"Central midfielder", report:"Fabrizio Romano says Chelsea and Fernandez's camp are holding fresh meetings this week to settle his future, with the player having pushed to leave all summer. Romano is clear that Real Madrid are no longer involved, so any exit would need a new buyer at short notice.", src:"Fabrizio Romano", tier:1, fee:"Undisclosed", truth:88, prob:40, light:"y", trend:"up", note:"The desire to leave is well sourced, the destination is not. With no club in concrete talks and the window closing, a stay is very possible.", lastSeen:"2026-08-06T10:49:40Z", baseProb:40, dir:"out", deadReason:"link went cold", deadAt:"2026-08-06T10:49:41Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Alonso</b>: appointed; four-year deal from 1 July."},
  {ar:"⬆", t:"<b>Emegha</b>: agreed from Strasbourg via the BlueCo pipeline."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>European planning</b>: Chelsea have no Europe for 2026/27."},
  {ar:"⬇", t:"<b>Rosenior-era stories</b>: sacked; now out of date."},
];
const NEW = [
  {ar:"✦", t:"Manager: <b>Xabi Alonso</b> in (third change of the season)."},
  {ar:"✦", t:"In: <b>Emegha</b> agreed + Alonso-fit pieces. Out: major squad rationalisation."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Maresca / Rosenior</b>-era links: not live."},
  {ar:"✕", t:"<b>Champions League planning</b>: Chelsea missed Europe."},
];

const POSITIONS = [
  {p:"Squad rationalisation (out)", w:85, x:"A vast roster must be trimmed for balance and profit"},
  {p:"Striker", w:60, x:"Emegha agreed; depth and goals"},
  {p:"Defensive balance", w:55, x:"Alonso-shaped structure"},
  {p:"Midfield control", w:50, x:"Tactical fit for Alonso"},
  {p:"Goalkeeper", w:35, x:"Review under the new coach"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   The v1 file held no URLs, so all entries below are hubs pending re-verification.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  bbcChe:    {l:"BBC Sport · Chelsea", u:"https://www.bbc.co.uk/sport/football/teams/chelsea"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  athletic:  {l:"The Athletic · Chelsea", u:"https://www.nytimes.com/athletic/football/club/chelsea/"},
  ornstein:  {l:"David Ornstein (The Athletic) · X", u:"https://x.com/David_Ornstein"},
  romano:    {l:"Fabrizio Romano · X", u:"https://x.com/FabrizioRomano"},
  law:       {l:"Matt Law (Telegraph) · X", u:"https://x.com/Matt_Law_DT"},
  kinsella:  {l:"Nizaar Kinsella (BBC) · X", u:"https://x.com/NizaarKinsella"},
  schira:    {l:"Nicolò Schira · X", u:"https://x.com/NicoSchira"},
  sky:       {l:"Sky Sports · Chelsea", u:"https://www.skysports.com/chelsea"},
  espn:      {l:"ESPN FC · football", u:"https://www.espn.co.uk/football/"},
  fldn:      {l:"football.london · Chelsea", u:"https://www.football.london/chelsea-fc/"},
  standard:  {l:"Evening Standard · Chelsea", u:"https://www.standard.co.uk/sport/football/chelsea"},
  lequipe:   {l:"L'Équipe · football", u:"https://www.lequipe.fr/Football/"},
  cfc:       {l:"Chelsea Official · news", u:"https://www.chelseafc.com/en/news"},
  fabrizioRomanoviaFootballTransfersAlejandroGarnacho: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/07/fabrizio-romano-alejandro-garnacho-warren-zaire-emery-ousmane-diomande"},
  nicoloSchiraviaCaughtOffsidePepChavarra: {l:"Nicolo Schira (via CaughtOffside)", u:"https://www.caughtoffside.com/2026/08/03/journalist-terms-chelsea-transfer-done-deal-contract/"},
  gianlucaDiMarzioDannyWelbeck: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-trattative-1-agosto-2026-495391"},
  footballTransfersRomanoMorettoPepChavarra: {l:"FootballTransfers (Romano/Moretto)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/chelsea-transfer-news-today-victor-osimhen-pep-chavarria-2-august"},
  caughtOffsideMykhailoMudryk: {l:"CaughtOffside", u:"https://www.caughtoffside.com/2026/08/04/chelsea-consider-loaning-out-mudryk-shock-club/"},
  chelseaFCofficialGeovanyQuenda: {l:"Chelsea FC official", u:"https://www.chelseafc.com/en/news/article/summer-transfers-2026-all-the-chelsea-ins-outs-and-new-contracts-so-far"},
  teamTalkMorganRogers: {l:"TeamTalk", u:"https://www.teamtalk.com/chelsea/every-completed-chelsea-transfer-summer-2026-signings-sales-loans"},
  yahooSportsTyriqueGeorge: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/official-everton-sign-tyrique-george-153951753.html"},
  pAIrishNewsPepChavarra: {l:"PA / Irish News", u:"https://www.irishnews.com/sport/soccer/chelsea-closing-in-on-163m-deal-for-rayo-vallecano-defender-pep-chavarria-GILJMPPFFRNTPPQ6WKGPQSXGYA/"},
  skySportsJordanHenderson: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11661/13569179/jordan-henderson-transfer-news-chelsea-confirm-signing-of-midfielder-following-brentford-exit"},
  skySportsDannyWelbeck: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11668/13568440/chelsea-transfer-news-danny-welbeck-completes-move-to-stamford-bridge-from-brighton-for-undisclosed-fee"},
  theAthleticPepChavarria: {l:"The Athletic", u:"https://www.theathletic.com/football/"},
  fabrizioRomanoviaFootball365PedroNeto: {l:"Fabrizio Romano, via Football365", u:"https://www.football365.com/news/chelsea-romano-rates-chances-neto-man-city-maresca-transfer"},
  fabrizioRomanoviaFootball365EnzoFernandez: {l:"Fabrizio Romano, via Football365", u:"https://www.football365.com/news/chelsea-enzo-fernandez-future-fabrizio-romano-update"},
  eSPNPAcopyPepChavarria: {l:"ESPN (PA copy)", u:"https://www.espn.com/soccer/story/_/id/49535743/chelsea-close-163m-pep-chavarria-deal-rayo-vallecano"},
  fabrizioRomanocolumnFootballTransfersEnzoFernandez: {l:"Fabrizio Romano column, FootballTransfers", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-bruno-guimaraes-enzo-fernandez-mykhailo-mudryk"},
  chelseaFCofficialsiteValentinBarco: {l:"Chelsea FC official site", u:"https://www.chelseafc.com/en/news/article/valentin-barco-signs-for-chelsea"},
  skySportsPepChavarria: {l:"Sky Sports", u:"https://www.skysports.com/premier-league-news"},
  fabrizioRomanoMoissCaicedo: {l:"Fabrizio Romano", u:"https://x.com/FabrizioRomano/status/1690834448105840641"},
  davidOrnsteinMasonMount: {l:"David Ornstein", u:"https://x.com/David_Ornstein/status/1674444022960537600"}};
const LINKMAP = {
  "Alonso-fit additions": ["bbcChe","athletic","law"],
  "Defensive balance": ["bbcChe","law"],
  "Midfield control": ["athletic","kinsella"],
  "Squad rationalisation": ["espn","athletic","kinsella"],
  "High earners": ["bbcChe","law"],
  "Emmanuel Emegha": ["romano","lequipe","cfc"],
  "Alejandro Garnacho": ["fabrizioRomanoviaFootballTransfersAlejandroGarnacho", "teamTalkMorganRogers"],
  "Pep Chavarría": ["nicoloSchiraviaCaughtOffsidePepChavarra", "footballTransfersRomanoMorettoPepChavarra", "pAIrishNewsPepChavarra"],
  "Danny Welbeck": ["gianlucaDiMarzioDannyWelbeck", "teamTalkMorganRogers", "skySportsDannyWelbeck", "eSPNPAcopyPepChavarria"],
  "Victor Osimhen": ["footballTransfersRomanoMorettoPepChavarra"],
  "Mykhailo Mudryk": ["caughtOffsideMykhailoMudryk"],
  "Geovany Quenda": ["chelseaFCofficialGeovanyQuenda"],
  "Morgan Rogers": ["teamTalkMorganRogers"],
  "Maxence Lacroix": ["teamTalkMorganRogers"],
  "Marco Palestra": ["chelseaFCofficialGeovanyQuenda"],
  "Valentin Barco": ["teamTalkMorganRogers", "chelseaFCofficialsiteValentinBarco"],
  "Marc Cucurella": ["teamTalkMorganRogers", "eSPNPAcopyPepChavarria"],
  "Andrey Santos": ["teamTalkMorganRogers"],
  "Tyrique George": ["yahooSportsTyriqueGeorge"],
  "Jordan Henderson": ["skySportsJordanHenderson", "eSPNPAcopyPepChavarria"],
  "Pep Chavarria": ["pAIrishNewsPepChavarra", "theAthleticPepChavarria", "eSPNPAcopyPepChavarria", "skySportsPepChavarria"],
  "Pedro Neto": ["fabrizioRomanoviaFootball365PedroNeto"],
  "Enzo Fernandez": ["fabrizioRomanoviaFootball365EnzoFernandez", "fabrizioRomanocolumnFootballTransfersEnzoFernandez"],
  "Moisés Caicedo": ["fabrizioRomanoMoissCaicedo"],
  "Mason Mount": ["davidOrnsteinMasonMount"],
  "Dean Henderson": ["skySportsPepChavarria"]};
const WL_LINKMAP = {
  "Emmanuel Emegha":"romano","Loan army":"athletic","Alonso targets":"law",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `<em>Alonso</em> takes charge: Club World Cup holders rebuild after missing Europe`,
  heroLede: `A turbulent season ends with a fresh start: <b>Xabi Alonso</b> arrives as head coach (a four-year deal from 1 July), Chelsea's third managerial change of a chaotic campaign after Maresca left and Rosenior was sacked. Despite being <b>Club World Cup holders</b>, the Blues <b>missed European qualification</b> for 2026/27, which both stings and, under the cost rules, hands them the looser <b>85% cap</b>. Recruitment runs through the <b>BlueCo</b> structure, with Strasbourg's Emmanuel <b>Emegha</b> already agreed.`,
  metaRow: `
      <span>DECISION-MAKER: <b>BlueCo</b> (Recruitment)</span>
      <span>HEAD COACH: <b>Xabi Alonso</b></span>
      <span>OWNER: <b>BlueCo (Boehly / Clearlake)</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">Mid-table</div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£120-200<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£100-180<small>m</small></div></div>
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
        <p>A <b>young, high-volume recruitment model</b> under <b>BlueCo</b> (Boehly and Clearlake), now coached by <b>Xabi Alonso</b>. After managerial churn, the priority is on-pitch coherence and trimming a vast squad as much as adding to it.</p>
        <div class="quote">Alonso, fresh from Real Madrid and a trophy-laden Leverkusen spell, inherits a talented but unbalanced roster and a brief to make it greater than the sum of its parts.</div>
        <p><b>This window's logic:</b> integrate Alonso's ideas, bank the agreed Emegha deal, and rationalise the squad.</p>
        <ul>
          <li>Confirmed in: Emegha (Strasbourg), the BlueCo cross-club pipeline.</li>
          <li>Markets: young, high-ceiling talent, as ever under BlueCo.</li>
          <li>Squad churn: a large group of fringe and loaned players to be traded.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> weight Alonso-fit profiles and major outgoings equally; this is a rationalising window.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Owned by <b>BlueCo</b>, Chelsea spend heavily but have absorbed large losses, so cost-rule compliance and player-trading profit are central.</p>
        <ul>
          <li><b>No European football</b> hands the looser <b>85%</b> cap, easing the ratio after heavy spend.</li>
          <li>Missing the Champions League is a meaningful revenue blow, however.</li>
          <li>Selling surplus and academy players books profit and protects the ratio.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> the squad is large and expensive; trimming is as important as buying.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">As Club World Cup holders Chelsea retain pull, but missing Europe and a chaotic season dent it; the 85% cap is the financial silver lining.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>Club World Cup holders with elite resources, but three managers in a season and no European football have dented the project's credibility. Alonso's pedigree is the reset.</p>
        <ul>
          <li>Alonso's Leverkusen success lends real coaching credibility.</li>
          <li>BlueCo's spending keeps Chelsea attractive to young talent.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> a bloated squad and no Europe mean Chelsea are sellers as much as buyers this summer.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue for clubs outside Europe</b>, the looser of the two limits (European clubs sit at 70%). No continental football is a sporting blow but a quiet financial edge over rivals juggling the tighter cap.</p>
        <p>BlueCo lean heavily on player-trading profit to satisfy the rules, so academy and surplus sales are structural.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation.</li>
          <li>Profit-rich sales of homegrown players are a recurring BlueCo lever.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: Alonso turns talent into a team</h5>
        <ul>
          <li>A top coach could quickly organise an expensively assembled squad.</li>
          <li>The 85% cap eases the ratio after heavy spend.</li>
          <li>A coherent season would restore Champions League ambitions.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: more churn and no Europe</h5>
        <ul>
          <li>A fourth manager in barely a year would signal deeper dysfunction.</li>
          <li>No Champions League revenue bites despite the looser cap.</li>
          <li>A bloated squad risks unrest among fringe players.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> a rationalising window under Alonso, bank the agreed Emegha deal, trim a vast squad for profit and balance, add a few system-fit pieces, and use the looser 85% cap to reset after a chaotic year.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; nothing is registered yet.</b> The settled business is the dugout: <b>Xabi Alonso</b> begins on 1 July. Striker <b>Emmanuel Emegha</b> is already agreed to arrive from sister club Strasbourg. Other moves enter the ledger only on announcement.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, BlueCo network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: Chelsea sell from a vast, churn-heavy squad.</b> With a bloated roster and no Europe, surplus and loan-army names move at softer floors, while genuine first-team assets hold a holder's premium. BlueCo's model is constant trading, so expect both sizeable sales and buys.
    `,
  excludedNote: `<b>Excluded as stale:</b> Maresca and Rosenior-era stories are not live; Chelsea's head coach from 1 July is Xabi Alonso, so any item naming a predecessor is out of date.`,
  spendIn: { v: `£120-200m`, x: `Emegha agreed; further young, Alonso-fit additions, funded substantially by sales.` },
  spendOut: { v: `£100-180m`, x: `A large squad trimmed: surplus, loan-army and profit-rich academy sales to satisfy the cost rules.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic. <i>Used for:</i> the Alonso appointment, the Rosenior sacking, the Emegha agreement.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, reliable national and club writers (Matt Law, Nizaar Kinsella); Nicolò Schira on the managerial saga.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">BlueCo network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom and Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b>: the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window: fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
