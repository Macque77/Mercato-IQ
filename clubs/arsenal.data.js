/* ============================================================
   MERCATO IQ · CLUB DATA · ARSENAL · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce arsenal.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (format migration only, data carried from the
   6 Jun 2026 v1 dashboard, no re-verification):
   · truth values SYNTHESISED from the old single-metric rows as
     truth = clamp(prob + 25 + tierBonus, 10, 95), tierBonus
     T1 +15 / T2 +10 / T3 0 / T4 -10.
   · Light-band fixes (light adjusted, prob untouched): Trossard
     prob 30 o -> y; Norgaard prob 30 o -> y.
   · Old file held no source URLs, so LINKMAP/WL_LINKMAP point at
     named-source hubs only; replace with exact URLs at next refresh.
   · Old badge payload was JPEG data mislabelled image/png; it fails
     PNG validation, so the build uses the arsenal.png reference +
     SVG shield fallback until a true PNG is inlined.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Arsenal", mono: "ARS", slug: "arsenal",
  primary: "#EF0107", primaryBright: "#ff2630", primaryDeep: "#9c0006",
  primaryRgb: "239,1,7",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook)
   verified deliberately stale (old build date): next refresh must re-verify all fields. ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Mikel Arteta",
  dof: "Andrea Berta (Sporting Director)",
  europe: "Champions League (2026/27)",
  finish: "1st (2025/26, champions)",
  owner: "Kroenke Sports & Entertainment (Stan and Josh Kroenke)",
  window: "Opens 15 Jun, runs to 1 Sep 2026"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Arsenal/Transfer+News",
    "https://www.transferfeed.com/clubs/arsenal",
    "https://www.standard.co.uk/sport/football/arsenal",
    "https://www.skysports.com/arsenal"
  ],
  queries: [
    "Arsenal transfer news <current month + year>",
    "Arsenal bid OR medical OR 'personal terms'",
    "Arsenal calciomercato Di Marzio TuttoMercatoWeb Gazzetta",
    "Arsenal transfer Plettenberg Bild OR L'Equipe Foot Mercato",
    "Arsenal fichajes Marca AS Relevo OR TyC Sports"
  ],
  note: "Foreign desks per profile: Italy (Di Marzio/TMW/Gazzetta/Corriere + Serie A local beats), Germany (Plettenberg/Sky DE/Bild/Kicker), France (L'Equipe/RMC/Foot Mercato), Spain (Marca/AS/Relevo/Moretto + La Liga local beats), South America (TyC Sports/Ole/Globo Esporte), Portugal (A Bola/Record). For every linked player also search the current club's local press in the native language. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { label: "Updated 03 Aug 2026 – European refresh" , updated: "2026-08-03T12:48:44Z"};

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Piero Hincapié", sub:"24 · CB/LB · Ecuador", to:"permanent from Bayer Leverkusen", fee:"≈£45m", free:false, status:"done", statusTxt:"DONE, AWAITING ANNOUNCEMENT",
   note:"Romano 'here we go': the season-long loan converts to a permanent on a pre-agreed deal. A five-year contract is already signed, the fee is around €52m and Leverkusen keep a 10% sell-on. Arsenal's first business of summer 2026, using the same loan-to-buy structure as the Raya deal from Brentford. A genuine purchase, not a loan: real squad value across centre-back and left-back."},
  {name:"Illan Meslier", sub:"Free transfer goalkeeper", club:"Leeds United", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as backup/competition for the number one jersey"},
  {name:"Christos Tzolis", sub:"Left-sided attacker signed from Belgium", club:"Club Brugge", pos:"FW", fee:"£34m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed July 23, 2026"}
];
const CONFIRMED_OUT = [
  {name:"Karl Hein", sub:"Backup goalkeeper departs", club:"Werder Bremen", pos:"GK", fee:"£2.6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Jakub Kiwior", sub:"Squad defender sold to Portugal", club:"Porto", pos:"DF", fee:"£14.7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Leandro Trossard", sub:"Winger exits after Tzolis arrival", club:"Beşiktaş", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Some outlets reported a fee around €20m"},
  {name:"Christian Norgaard", sub:"32 · Denmark · DM", club:"Everton", pos:"Defensive midfield", fee:"Around £7m (€8m)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Announced by both clubs. Norgaard has signed a two-year deal at Everton a year after arriving from Brentford, having made just seven league starts in Arsenal's title-winning season. He missed the friendly against Real Betis to finalise the move."}
];

const INCOMING = [
  {name:"Bruno Guimarães", sub:"29 · Brazil · Midfielder", club:"Newcastle United", pos:"Midfielder", report:"Arsenal have agreed £75m fee with Newcastle", src:"The Guardian", tier:2, fee:"£75m", truth:95, prob:90, light:"g", trend:"up", note:"Deal closing between clubs", lastSeen:"2026-08-06T13:55:46Z", baseProb:90},
  {name:"Bruno Guimaraes", sub:"28 · Brazil · CM", club:"Newcastle United", pos:"CM", report:"Arsenal and Newcastle are closing on a full agreement for the Brazil midfielder, with a fee reported at around £75m and personal terms long since settled. Guimaraes has made clear he wants the move and Newcastle's resistance has softened as the endgame nears.", src:"David Ornstein (The Athletic)", tier:1, fee:"£75m", truth:92, prob:85, light:"g", trend:"down", note:"Ornstein and Romano align on an imminent agreement, but rival outlets have contradicted each other all summer on timings and medical dates, so treat any 'done deal' framing with care until it is signed.", lastSeen:"2026-08-06T08:45:12Z", baseProb:85},
  {name:"Hugo Ekitike", sub:"22 · France · Forward", club:"PSG", pos:"Forward", report:"Arsenal linked with signing", src:"On-page rumour", tier:3, fee:"Undisclosed", truth:40, prob:35, light:"y", trend:"flat", note:"Rumour from ~2 weeks ago, limited recent confirmation", lastSeen:"2026-08-06T13:55:46Z", baseProb:35}
];

const OUTGOING = [];
const DEAD = [
  {name:"Eli Junior Kroupi", sub:"19 · France · FW", club:"Bournemouth", pos:"ST/W", report:"1 Jun 2026", src:"BBC", tier:2, fee:"£80m+", truth:55, prob:20, light:'o', trend:'flat',
   note:"Named by the BBC among Arsenal's three main attacking targets after a strong season. On-profile (young, high ceiling, resale) and a forward, which is a stated need. OBSTACLE: a fee reported in excess of £80m for a teenager, and Bournemouth under no pressure to sell.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"Rumour with 1 Jun 2026 date lacks current credibility; no recent reporting", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Benjamin Šeško", sub:"22 · Slovenia · ST", club:"RB Leipzig", pos:"ST", report:"~2 wks ago", src:"Aggregated / sportskeeda", tier:3, fee:"£60-70m", truth:40, prob:15, light:'o', trend:'flat',
   note:"A recurring centre-forward option as Arsenal weigh succession for Gabriel Jesus; reporting has Arsenal registering interest. OBSTACLES: T3 sourcing, a crowded market for elite young strikers, and the cost-cap maths on another big fee.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dead:true, deadReason:"~2 weeks ago rumour; no recent confirmation in snippets", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Julián Álvarez", sub:"26 · Argentina · ST", club:"Atlético Madrid", pos:"ST", report:"1 Jun 2026", src:"BBC", tier:2, fee:"£120m+", truth:45, prob:10, light:'r', trend:'flat',
   note:"Listed by the BBC as an attacking target but flagged as 'highly complex': a valuation north of £120m would almost certainly require a major sale first, and Atlético hold all the leverage. An aspirational, low-probability swing rather than a likely deal.", lastSeen:"2026-08-04T19:10:50Z", baseProb:10, dead:true, deadReason:"Rumour with 1 Jun 2026 date lacks current credibility", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Ezri Konsa", sub:"28 · England · CB", club:"Aston Villa", pos:"CB", report:"Villa are braced for an improved Arsenal offer for the England defender once the Guimaraes deal is wrapped up, having rejected an opening bid that fell well short of their £60m valuation. Saliba's injury has sharpened Arteta's need for a centre back.", src:"Mail Sport", tier:3, fee:"£60m", truth:65, prob:40, light:"y", trend:"up", note:"Sourced to Mail Sport and recycled widely by aggregators. No tier-one reporter has confirmed a bid, and Villa have two years of contract left to lean on, so this remains a soft link rather than a live negotiation.", lastSeen:"2026-08-06T08:45:12Z", baseProb:40, dead:true, deadReason:"Villa rumour; no recent confirmation in provided snippets", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Rayan", sub:"Audacious move for breakout Brazilian winger", club:"Bournemouth", pos:"FW", report:"20-year-old Brazilian right winger has impressed since a January move from Vasco da Gama; Bournemouth want £85m and Arsenal are seen as unlikely to pursue given depth on the right flank.", src:"The Sun", tier:3, fee:"£85m", truth:40, prob:15, light:"o", trend:"flat", note:"Arsenal's greater need is reportedly a left-sided attacker after Trossard's exit", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dead:true, deadReason:"Brazilian winger rumour; no recent confirmation", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Gabriel Jesus", sub:"29 · ST · Brazil", club:"Open to offers", pos:"ST", report:"1 Jun 2026", src:"BBC / CBS", tier:2, fee:"£25-35m", truth:70, prob:35, light:'y', trend:'flat',
   note:"Among those who could be sold to fund arrivals, with his recent campaign disrupted by a cruciate injury. PRICING: an injury record and contract length soften the floor, but a proven PL forward retains value. A sale helps the cost ratio and clears a striker slot.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"Outgoing rumour with 1 Jun 2026 date; no recent credible reporting", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Riccardo Calafiori", sub:"23 · LB/CB · Italy", club:"Juventus", pos:"LB/CB", report:"~1 wk ago", src:"Gazzetta dello Sport", tier:2, fee:"£35-45m", truth:65, prob:30, light:'y', trend:'up',
   note:"Juventus are credited with strong interest and reportedly see him as a first-choice target to add Italy internationals. PRICING: under contract with no need to sell, so Arsenal hold a holder's price; the report notes any deal may hinge on whether Calafiori himself pushes to leave.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"~1 week old rumour; no confirmation in snippets", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Gabriel Martinelli", sub:"25 · Brazil · LW", club:"Fenerbahce", pos:"LW", report:"Fenerbahce are said to be monitoring the Brazilian winger's situation, with Roma and Juventus also credited with interest after his World Cup involvement. Nothing beyond admiration has been established and there is no suggestion of a bid or of Arsenal inviting offers.", src:"CBS Sports, relayed by Turkish press", tier:3, fee:"Undisclosed", truth:55, prob:20, light:"o", trend:"down", note:"Weak sourcing. This is a single interest line traced back to CBS Sports and amplified by the Istanbul papers, with no fee, no talks and no Arsenal-side confirmation. Low confidence.", lastSeen:"2026-08-06T08:09:17Z", baseProb:20, dead:true, deadReason:"Fenerbahce monitoring rumour; unconfirmed and speculative", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Ben White", sub:"RB/CB · England", club:"Listening to offers", pos:"RB/CB", report:"1 Jun 2026", src:"BBC", tier:2, fee:"£25-35m", truth:60, prob:25, light:'o', trend:'flat',
   note:"Among the names Arsenal will listen on. Versatile and experienced; a sale would open a full-back refresh that is itself a stated target area.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25, dead:true, deadReason:"Outgoing rumour with 1 Jun 2026 date; no recent credible reporting", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"William Saliba", sub:"24 · CB · France", club:"Real Madrid", pos:"CB", report:"~1 wk ago", src:"Marca / BBC gossip", tier:3, fee:"£80m+ (resisting)", truth:35, prob:10, light:'r', trend:'down',
   note:"Real Madrid are reported to have made him a top defensive target. PRICING: Arsenal have worked to secure his long-term future and would price a sale prohibitively. The high ask is designed to deter, not invite; very low probability.", lastSeen:"2026-08-04T19:10:50Z", baseProb:10, dead:true, deadReason:"~1 week old outgoing rumour; no confirmation in snippets", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Myles Lewis-Skelly", sub:"Man Utd exploring feasibility of a raid", club:"Manchester United", pos:"MF", report:"United are reported to be looking into a move for the 19-year-old academy product; Arsenal value him at £38.5m and are not actively selling.", src:"Sky Sports", tier:2, fee:"£38.5m (valuation)", truth:35, prob:12, light:"r", trend:"flat", note:"Arsenal would only consider offers well above valuation", lastSeen:"2026-08-04T19:10:50Z", baseProb:12, dead:true, deadReason:"United interest rumour; no credible reporting in snippets", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Mishel Nduka", sub:"16 · England · CM", club:"Manchester City", pos:"CM", report:"The England youth international has agreed to join Manchester City after turning down a highly competitive long-term contract at Arsenal.", src:"David Ornstein (The Athletic)", tier:1, fee:"Undisclosed", truth:90, prob:88, light:"g", trend:"flat", note:"Academy deal, so compensation figures are unlikely to be published.", lastSeen:"2026-08-06T08:45:12Z", baseProb:88, dead:true, deadReason:"Deal already completed; should be confirmed not live rumour", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Jurriën Timber", club:"Arsenal", pos:"RB/CB", dir:"out", age:"~1 wk", tier:1, note:"Not a sale: contract renewal talks are advanced. Listed here only to track the retention story.", dead:true, deadReason:"~1 week old outgoing rumour; no confirmation in snippets", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Declan Rice", club:"Arsenal", pos:"CM", dir:"out", age:"~1 wk", tier:1, note:"Not a sale: initial renewal talks reported positive. Retention, not departure.", dead:true, deadReason:"~1 week old outgoing rumour; no confirmation in snippets", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Khvicha Kvaratskhelia", club:"PSG", pos:"W", dir:"in", age:"~12 wks", tier:3, note:"Earlier framed by Romano as a priority winger target; complex on PSG's valuation and no fresh 2026 confirmation. Monitoring only.", deadReason:"no fresh report in 12+ weeks", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Morgan Gibbs-White", club:"Nottingham Forest", pos:"AM", dir:"in", age:"~6 wks", tier:4, note:"Previously considered as a creator alongside Rogers; cooled and behind Rogers in the pecking order.", deadReason:"no fresh report in 6+ weeks", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Ethan Nwaneri", club:"Arsenal", pos:"AM", dir:"out", age:"~12 wks", tier:2, note:"Already re-signed; Romano guarantees no intention to sell despite a difficult loan spell. Stays.", deadReason:"no fresh report in 12+ weeks", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Reiss Nelson", club:"Fringe / loan", pos:"W", dir:"out", age:"~5 wks", tier:4, note:"Peripheral attacker, a candidate for a permanent exit or loan as part of squad churn. Low detail.", deadReason:"no fresh report in 5+ weeks", deadAt:"2026-08-06T10:24:32Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Hincapié</b>: permanent confirmed, Arsenal's first summer signing."},
  {ar:"⬆", t:"<b>Calafiori</b>: Juventus push hard; a possible funding sale."},
  {ar:"⬆", t:"<b>Trossard</b>: 12 months left makes a sale this window logical."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Saliba</b>: Arsenal resist Madrid and price to deter; long-term future worked on."},
  {ar:"⬇", t:"<b>Álvarez</b>: £120m-plus valuation makes it highly complex and unlikely."},
  {ar:"⬇", t:"<b>2025 names</b>: Zubimendi, Nico Williams, Joan García already resolved last window."},
];
const NEW = [
  {ar:"✦", t:"Confirmed: <b>Hincapié</b> permanent. In: <b>Kroupi</b>, <b>Álvarez</b>, <b>Šeško</b> on the forward/creator board."},
  {ar:"✦", t:"Out: fringe churn to fund deals, <b>Jesus</b>, <b>Martinelli</b>, <b>Trossard</b>, <b>Nørgaard</b>, <b>White</b>; <b>Calafiori to Juve</b> live."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Eberechi Eze</b>: already an Arsenal player (signed 2025); not a target."},
  {ar:"✕", t:"<b>Zubimendi · Nico Williams · Joan García</b>: 2025-window business, resolved; recycled links are stale."},
  {ar:"✕", t:"<b>'£300m, seven signings'</b>: last summer's plan, not this disciplined, sales-funded window."},
  {ar:"✕", t:"<b>Morgan Rogers to Arsenal</b>: he completed a club-record £117m move to Chelsea instead; any 'here we go' framing for Arsenal is stale."},
];

const POSITIONS = [
  {p:"Forward / striker", w:85, x:"Stated need; Kroupi, Šeško, Álvarez + Jesus possibly out"},
  {p:"Attacking mid / creator", w:60, x:"Still a stated need after missing out on Morgan Rogers, who signed for Chelsea instead"},
  {p:"Full-back", w:62, x:"A stated target area; Calafiori and White could move on"},
  {p:"Central midfield", w:52, x:"BBC lists a CM among the needs; Nørgaard may leave"},
  {p:"Centre-back", w:28, x:"Hincapié done; depth only, Saliba retained"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"Hugo Ekitike", club:"Eintracht Frankfurt", pos:"ST", dir:"in", age:"~2 wks", tier:4, note:"A young striker option floated for Arsenal, but more strongly linked with Liverpool. Early-warning only."}
];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   The v1 file held no URLs, so all entries below are hubs pending re-verification.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  bbcArs:    {l:"BBC Sport · Arsenal", u:"https://www.bbc.co.uk/sport/football/teams/arsenal"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  mokbel:    {l:"Sami Mokbel (BBC) · X", u:"https://x.com/SamiMokbel81_DM"},
  athletic:  {l:"The Athletic · Arsenal", u:"https://www.nytimes.com/athletic/football/club/arsenal/"},
  ornstein:  {l:"David Ornstein (The Athletic) · X", u:"https://x.com/David_Ornstein"},
  romano:    {l:"Fabrizio Romano · X", u:"https://x.com/FabrizioRomano"},
  sky:       {l:"Sky Sports · Arsenal", u:"https://www.skysports.com/arsenal"},
  gazzetta:  {l:"Gazzetta dello Sport", u:"https://www.gazzetta.it/"},
  marca:     {l:"Marca", u:"https://www.marca.com/"},
  lequipe:   {l:"L'Équipe · football", u:"https://www.lequipe.fr/Football/"},
  cbs:       {l:"CBS Sports · football", u:"https://www.cbssports.com/soccer/"},
  standard:  {l:"Evening Standard · Arsenal", u:"https://www.standard.co.uk/sport/football/arsenal"},
  afc:       {l:"Arsenal Official · news", u:"https://www.arsenal.com/news"},
  football365viaFabrizioRomanoBrunoGuimares: {l:"Football365 (via Fabrizio Romano)", u:"https://www.football365.com/news/arsenal-romano-reveals-guimaraes-expected-shortly-update-newcastle-start-plans-medical"},
  sportsMoleviaCaughtOffsideEzriKonsa: {l:"Sports Mole (via CaughtOffside)", u:"https://www.sportsmole.co.uk/football/arsenal/transfer-talk/news/konsa-arsenal-stance-revealed-amid-transfer-interest_602295.html"},
  nowArsenalviaTheSunRayan: {l:"Now Arsenal (via The Sun)", u:"https://www.nowarsenal.com/transfer-news/bournemouth-demand-85million-for-star-with-arsenal-interested/"},
  caughtOffsideGabrielJesus: {l:"CaughtOffside", u:"https://www.caughtoffside.com/2026/06/24/arsenal-gabriel-jesus-transfer-fee/"},
  skySportsMylesLewisSkelly: {l:"Sky Sports", u:"https://www.skysports.com/football/transfer-paper-talk/12709/13569111/myles-lewis-skelly-transfer-news-man-utd-considering-move-for-arsenal-player-paper-talk"},
  arseblogNewsPieroHincapi: {l:"Arseblog News", u:"https://arseblog.news/2026/06/confirmed-arsenal-sign-piero-hincapie-on-permanent-deal/"},
  sportsMoleIllanMeslier: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/arsenal/transfer-talk/feature/arsenal-summer-transfers-all-confirmed-ins-and-outs-for-2026_599109.html"},
  skySportsBrunoGuimares: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11670/13569653/bruno-guimaraes-transfer-news-arsenal-agree-lb75m-fee-for-newcastle-midfielder"},
  dailyCannonChristianNorgaard: {l:"Daily Cannon", u:"https://dailycannon.com/2026/08/newcastle-bruno-arsenal-medical-fee-agreed/"},
  davidOrnsteinTheAthleticBrunoGuimaraes: {l:"David Ornstein, The Athletic", u:"https://www.theathletic.com/football/"},
  eSPNChristianNorgaard: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49540382/everton-christian-norgaard-arsenal-transfer"},
  aSporGabrielMartinelli: {l:"A Spor", u:"https://www.aspor.com.tr/fenerbahce/2026/08/04/fenerbahcede-transfer-gundemi-gabriel-martinelli"},
  mailSportEzriKonsa: {l:"Mail Sport", u:"https://www.dailymail.co.uk/sport/football/index.html"},
  theGuardianFootballBrunoGuimares: {l:"The Guardian Football", u:"https://www.theguardian.com/football/2026/aug/05/arsenal-agree-75m-fee-with-newcastle-for-bruno-guimaraes-as-clubs-reach-compromise"},
  skySportsFootballChristianNorgaard: {l:"Sky Sports Football", u:"https://www.skysports.com/football/live-blog/12040/13279303/everton-transfers-latest-news-rumours-and-gossip-live-updates-goals-and-highlights"},
  bBCSportFootballChristianNorgaard: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/cm2gvlnjndpo"}};
const LINKMAP = {
  "Morgan Rogers": ["bbcArs","mokbel"],
  "Eli Junior Kroupi": ["bbcArs"],
  "Benjamin Šeško": ["bbcGossip"],
  "Julián Álvarez": ["bbcArs"],
  "Gabriel Jesus": ["bbcArs","cbs", "caughtOffsideGabrielJesus"],
  "Riccardo Calafiori": ["gazzetta"],
  "Leandro Trossard": ["bbcArs", "sportsMoleIllanMeslier"],
  "Christian Nørgaard": ["bbcArs"],
  "Gabriel Martinelli": ["bbcArs", "aSporGabrielMartinelli"],
  "Ben White": ["bbcArs"],
  "William Saliba": ["marca","bbcGossip"],
  "Piero Hincapié": ["romano","afc", "arseblogNewsPieroHincapi"],
  "Bruno Guimarães": ["football365viaFabrizioRomanoBrunoGuimares", "skySportsBrunoGuimares", "theGuardianFootballBrunoGuimares"],
  "Ezri Konsa": ["sportsMoleviaCaughtOffsideEzriKonsa", "mailSportEzriKonsa"],
  "Rayan": ["nowArsenalviaTheSunRayan"],
  "Myles Lewis-Skelly": ["skySportsMylesLewisSkelly"],
  "Illan Meslier": ["sportsMoleIllanMeslier"],
  "Christos Tzolis": ["sportsMoleIllanMeslier"],
  "Karl Hein": ["sportsMoleIllanMeslier"],
  "Jakub Kiwior": ["sportsMoleIllanMeslier"],
  "Bruno Guimaraes": ["skySportsBrunoGuimares", "davidOrnsteinTheAthleticBrunoGuimaraes", "ornstein"],
  "Christian Norgaard": ["dailyCannonChristianNorgaard", "eSPNChristianNorgaard", "skySportsFootballChristianNorgaard", "bBCSportFootballChristianNorgaard"],
  "Mishel Nduka": ["davidOrnsteinTheAthleticBrunoGuimaraes"]};
const WL_LINKMAP = {
  "Khvicha Kvaratskhelia":"romano","Hugo Ekitike":"bbcGossip","Morgan Gibbs-White":"bbcGossip",
  "Jurriën Timber":"athletic","Declan Rice":"athletic","Ethan Nwaneri":"romano","Reiss Nelson":"standard",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `Champions at last, Hincapié secured: the search shifts to a forward and a creator`,
  heroLede: `Arsenal enter the summer as <b>Premier League champions</b> for the first time in 22 years and back in the <b>2026/27 Champions League</b>, but carrying the sting of a penalty-shootout defeat to PSG in the Champions League final. After a heavy 2025 outlay, title bonuses, and a tighter <b>70% Squad Cost Ratio cap</b> that comes with European football, this reads as a <b>measured, value-led window funded partly by sales</b>, not another splurge. The first business is the confirmed permanent signing of <b>Piero Hincapié</b>; the headline attacking target, Aston Villa's Morgan Rogers, instead completed a club-record move to Chelsea, leaving Arsenal to weigh Bournemouth's Eli Junior Kroupi and Atlético's Julián Álvarez as forward/creator alternatives. A forward and a full-back remain the other stated priorities. Nothing on the incoming side beyond Hincapié yet carries a Tier 1 "here we go".`,
  metaRow: `
      <span>DECISION-MAKER: <b>Andrea Berta</b> (Sporting Director)</span>
      <span>HEAD COACH: <b>Mikel Arteta</b></span>
      <span>OWNER: <b>Kroenke Sports &amp; Entertainment</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">1<small>st</small></div></div>
    <div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£100-180<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£80-150<small>m</small></div></div>
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
        <p>A <b>buy-to-win, data-led</b> model run by sporting director <b>Andrea Berta</b> (ex-Atlético Madrid) under Mikel Arteta. Unlike a pure resale club, Arsenal pay premium fees for elite age-23-to-26 profiles with both immediate impact and resale ceiling; the squad is already mature, so the brief is <b>succession and marginal upgrades, not a rebuild</b>.</p>
        <div class="quote">A recurring Berta device is the pre-agreed loan-to-permanent: Hincapié arrives this summer on a buy option set last August, the same structure Arsenal used years ago for David Raya from Brentford.</div>
        <p><b>This window's logic:</b> a heavy 2025 outlay plus title bonuses mean spending is now disciplined and partly self-funded by selling the fringe, rather than a repeat of last summer's volume.</p>
        <ul>
          <li>Stated needs: a <b>forward</b>, an <b>attacking midfielder/creator</b>, and a <b>full-back</b>.</li>
          <li>Markets: the top five European leagues plus elite South American and Spanish talent.</li>
          <li>Retention is half the work: new deals for Timber and Rice are live; Nwaneri already re-signed.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> upgrade fresh, well-sourced links for the three stated needs (Rogers, Kroupi); discount marquee names that need a record fee unless they are an outright first-XI upgrade and financially clearable.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Backed by <b>Kroenke Sports &amp; Entertainment</b>, with title-winning prize money, deep Champions League revenue and elite commercial and matchday income at a near-capacity Emirates. Spending power is genuinely top of the market.</p>
        <ul>
          <li>The constraint is not cash but the cost ratio: a heavy 2025 spend plus <b>title and progression bonuses</b> push wages and amortisation up against the cap.</li>
          <li>Champions League football sets the <b>stricter 70%</b> Squad Cost Ratio limit (versus 85% for non-European clubs), so headroom is tighter than the wage bill alone suggests.</li>
          <li>Sales of fringe and surplus players are expected to <b>fund</b> the marquee arrivals rather than supplement them.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> any record bid (Álvarez territory) likely requires a sizeable sale first; expect smart trading, not unchecked spending.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">Champion status is now a powerful recruitment magnet, but it also tightens the cost ratio and puts the crown jewels in the window.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>Champions of England and Champions League finalists: Arsenal can now offer elite players a title-winning side and a genuine European platform. That standing is real <b>leverage</b> in the forward and creator pursuits still to come, even after missing out on Morgan Rogers, who chose Chelsea's club-record offer instead.</p>
        <ul>
          <li>Arteta is the first Arsenal manager to win the league in 22 years.</li>
          <li>The pull on top young talent is at its strongest in two decades.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> the same standing makes Arsenal's best assets targets, with <b>Real Madrid</b> reported to view William Saliba as a top defensive target, and Juventus pressing for Riccardo Calafiori.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>New <b>Squad Cost Ratio</b> rules replace PSR this summer. The cap on wages, agent fees and amortisation is <b>85% of revenue, but only 70% for clubs in European competition</b>, which is where Arsenal sit as champions.</p>
        <p>Champions League income is large, but the 70% ceiling plus title bonuses and the amortisation of last summer's spend means the ratio, not the bank balance, governs this window.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation, so player sales improve the ratio, not just the cash position.</li>
          <li>That is why selling fringe players (Jesus, Martinelli, Trossard, Nørgaard, White) <b>extends headroom</b> for a marquee arrival.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: defending the title and chasing the one missing trophy</h5>
        <ul>
          <li>A first <b>Champions League</b> crown is now the explicit ambition after the final defeat to PSG; the squad is built for a deep run.</li>
          <li>Title-holder revenue and coefficient income compound the commercial flywheel.</li>
          <li>Champion status maximises the pull on elite targets such as Rogers.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: the cost of over-reaching</h5>
        <ul>
          <li>Stacking wages on top of title bonuses risks pressing the <b>70% cost cap</b>, inviting fines, reduced headroom or sanction.</li>
          <li>Paying a record fee (Álvarez) without a matching sale would force an awkward mid-window scramble to balance the ratio.</li>
          <li>Selling a key asset (Calafiori, or resisting Madrid for Saliba) reshapes the defence the title was built on.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> the evidence points to a disciplined, sales-funded window: bank the confirmed Hincapié deal, push hard for one marquee creator/forward (Rogers the priority), add a full-back, and clear enough of the fringe to keep the 70% ratio intact while chasing the Champions League the squad just fell one shootout short of.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June, so deals are agreed but not yet formally registered.</b> Hincapié's permanent (above) is signed and awaiting announcement. The other live retention story is contract renewals: talks for <b>Jurriën Timber</b> are advanced and initial talks for <b>Declan Rice</b> are positive, while <b>Ethan Nwaneri</b> has already re-signed and is not for sale. These enter the ledger only once announced.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Berta network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom. With the 70% cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: as champions under no pressure to sell, Arsenal price every outgoing at a holder's price, not market value.</b> Four multipliers stack above consensus: <b>(1)</b> long contracts remove buyer leverage; <b>(2)</b> near-ever-present minutes prove the asset; <b>(3)</b> a multi-club bidding war inflates the number; <b>(4)</b> elite suitors pay a premium for proven quality. The wrinkle this summer is that title bonuses and the stricter 70% European cost cap make some <b>churn of the fringe</b> (Jesus, Martinelli, Trossard, Nørgaard, White) financially useful, which softens the floor on those names; a prized academy or first-XI asset (Saliba, Saka) is priced to deter, not invite.
    `,
  excludedNote: `<b>Excluded as stale/already-resolved:</b> names recycled from the 2025 window are not live, including the "seven signings / £300m" plan and targets that were either signed last summer (Eberechi Eze) or completed elsewhere (Martín Zubimendi, Nico Williams, Joan García). Treat any 2026 article still listing them as a current target as out of date.`,
  spendIn: { v: `£100-180m`, x: `Lower for Hincapié plus one value full-back; upper only if a marquee creator/forward (Rogers, or a Kroupi/Álvarez swing) is funded by sales.` },
  spendOut: { v: `£80-150m`, x: `Cash from churning the fringe at holder's prices: Jesus, Martinelli, Trossard, Nørgaard and White could each move; a Calafiori sale to Juventus would add a chunk. Reaching the upper end likely needs one of the bigger assets to go.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic. <i>Used for:</i> the Hincapié permanent, the Rogers priority, renewal talks for Timber and Rice.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, Gazzetta dello Sport (Calafiori), Marca (Saliba), L'Équipe, RMC, reliable national writers.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Berta network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom and Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b>: the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window: fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
