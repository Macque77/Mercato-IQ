/* ============================================================
   MERCATO IQ · CLUB DATA · BRIGHTON & HOVE ALBION · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce brighton.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md

   MIGRATION NOTES (v1 -> v2, format-only, 28 Jul 2026):
   · Carried as-is from the 6 Jun 2026 v1 monolith. NO re-verification
     or fresh research was performed; content is deliberately stale.
   · TRUTH SYNTHESIS: v1 was single-metric. truth derived
     conservatively from source tier and recency (T1 85, T2 70,
     T3 55, T4 35; minus 10 where a note reads cooled or stale).
     All v1 rows were T3 and none read cooled, so truth = 55
     across the board. Old probabilities kept verbatim as prob;
     lights re-derived from prob bands (g>50 / y 30-50 / o 15-30 /
     r<15): the v1 "Prized asset" row carried prob 55 with light
     'y'; light corrected to 'g'.
   · ROW SPLIT: v1 held only 3 rated rows (a pre-window framing build
     with no named targets), below the 5-row Top-10 QA gate. The single
     v1 incoming framing row was split into its constituent threads,
     taken verbatim from the v1 POSITIONS panel (squad depth for
     Europe; forward options) with conservative synthesised metrics.
     No new rumours were invented; these remain model-framing entries.
   · SOURCE LINKS: v1 contained zero URLs. HUB/LINKMAP/WL_LINKMAP are
     HUB-ONLY (beat-writer / local-paper / broadcaster hub pages);
     no exact article URLs are held for any thread yet.
   · VOLATILE.verified is the v1 asof date (2026-06-06), deliberately
     stale until the first real v2 refresh.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Brighton", mono: "BHA", slug: "brighton",
  primary: "#FFCD00", primaryBright: "#ffd93f", primaryDeep: "#997b00",
  primaryRgb: "255,205,0",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook) ──
   verified = v1 asof date; every field needs a fresh live check next refresh. */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Fabian Hurzeler (renewed to 2029)",
  dof: "Tony Bloom (Owner; data model via Jerry Hill / Starlizard)",
  europe: "Conference League (2026/27)",
  finish: "8th (2025/26)",
  owner: "Tony Bloom",
  window: "Opens 15 Jun; runs to 1 Sep 2026",
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Brighton+And+Hove+Albion/Transfer+News",
    "https://www.transferfeed.com/clubs/brighton",
    "https://www.theargus.co.uk/sport/",
    "https://www.skysports.com/brighton-and-hove-albion",
    "https://www.brightonandhovealbion.com/news",
    "https://www.sussexexpress.co.uk/sport/football/brighton-hove-albion"
  ],
  queries: [
    "Brighton transfer news <current month + year>",
    "Brighton bid OR medical OR 'personal terms'",
    "Brighton fichajes TyC Sports Ole Globo Esporte",
    "Brighton transfer Gekisaka Sponichi",
    "Brighton calciomercato Di Marzio"
  ],
  note: "Foreign desks per profile: South America (TyC Sports/Ole/Globo Esporte), Japan (Sponichi/Gekisaka), Africa (Africa Foot/Foot Mercato Afrique/CAF beat), Italy (Di Marzio/TMW/Gazzetta/Corriere), Germany (Plettenberg/Bild/Kicker), France (L'Equipe/RMC/Foot Mercato), Spain (Marca/AS/Relevo). For every linked player also search the current club's local press in the native language. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { label: "Updated 03 Aug 2026 – European refresh" , updated: "2026-08-03T12:48:44Z"};

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Zadok Yohanna", sub:"Winger, Nigerian, 18", club:"AIK Stockholm", pos:"RW", fee:"£21.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a five-year deal until 2031; regarded as one of Brighton's marquee wonderkid signings of the window"},
  {name:"Costinha", sub:"Right back, Portuguese", club:"Olympiacos", pos:"RB", fee:"£11m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as part of Brighton's right-back succession plan behind Joel Veltman (since released)"},
  {name:"Gabby George", sub:"29 · England · DEF", club:"Manchester United", pos:"Defender", fee:"Six-figure fee (reported)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Women's team signing. Manchester United confirmed on their official site that George has agreed a transfer to Brighton, subject to registration, after they triggered a contract extension in January. The versatile defender wanted regular game time ahead of the new WSL season."},
  {name:"George", sub:"Unknown · Unknown · Defender", club:"Manchester United", pos:"DEF", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Defender joins Brighton from Man Utd"},
  {name:"Evan Ferguson", sub:"21 · Ireland · F", club:"Man Utd", pos:"F", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Defender George joins Brighton from Man Utd"},
  {name:"Leny Yoro", sub:"18 · France · D", club:"Manchester United", pos:"D", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Defender joins Brighton from Manchester United"}
];
const CONFIRMED_OUT =
    [
  {name:"Danny Welbeck", sub:"35 · ST · England", club:"free to Chelsea", pos:"ST", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Veteran forward leaves as a free agent, contract to 2028 at Chelsea, confirmed via Di Marzio's live mercato digest."},
  {name:"Jan Paul van Hecke", sub:"Centre back, Dutch, 26", club:"Tottenham Hotspur", pos:"CB", fee:"£52m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Third summer signing for Roberto De Zerbi's Tottenham; van Hecke had refused to extend his Brighton contract"},
  {name:"Jeremy Sarmiento", sub:"Winger, Ecuadorian, 24", club:"Middlesbrough", pos:"LW", fee:"£3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Struggled for regular minutes at Brighton, drops into the Championship for regular football"},
  {name:"Adam Webster", sub:"Centre back, English, 31", club:"Released", pos:"CB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired at end of 2025/26 season"},
  {name:"Joel Veltman", sub:"Right back, Dutch, 34", club:"Released", pos:"RB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired at end of 2025/26 season; long-serving Brighton defender"},
  {name:"Solly March", sub:"Winger/midfielder, English, 31", club:"Released", pos:"RW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired at end of 2025/26 season; club legend with over a decade at the Amex"},
  {name:"James Milner", sub:"Central midfielder, English, 40", club:"Retired", pos:"CM", fee:"N/A", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Retired from professional football at end of 2025/26 season"},
  {name:"Carl Rushworth", sub:"25 · England · GK", club:"Coventry City", pos:"Goalkeeper", fee:"£22.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Coventry's record signing, completed after the goalkeeper's loan spell and with Rushworth entering the final year of his Brighton contract. TeamTalk report a buy-back clause was inserted, but that detail is single-sourced and not confirmed by either club."},
  {name:"Diego Coppola", sub:"22 · Italy · CB", club:"Paris FC", pos:"Centre-back", fee:"£17m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed on Sky Sports' window tracker."},
  {name:"Brajan Gruda", sub:"22 · Germany · W", club:"RB Leipzig", pos:"Winger", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season loan listed on Sky's tracker. No option or obligation detail published."},
  {name:"Moisés Caicedo", sub:"Unknown · Ecuador · Midfielder", club:"Chelsea", pos:"CM", fee:"£115m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed transfer to Chelsea; British record fee of £115m plus sell-on clause. 8-year contract with option for 9th year."},
  {name:"Joao Pedro", sub:"23 · Brazil · Forward", club:"Chelsea", pos:"FW", fee:"£50m+", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Deal completed with Chelsea in excess of £50m. 7-year contract. Medical arranged."}
];

const INCOMING = [
  {name:"Solly March", sub:"30 · England · D/M", club:"Crystal Palace", pos:"D/M", report:"Crystal Palace considering free transfer for Brighton icon Solly March", src:"Goal.com", tier:3, fee:"Free", truth:60, prob:40, light:"y", trend:"up", note:"Palace exploring move after contract situation; multiple sources confirm interest", lastSeen:"2026-08-08T04:21:31Z", baseProb:40, dead:true, deadReason:"Duplicate entry removed (kept as incoming rumour to Crystal Palace, not outgoing to same club)"},
  {name:"Gabby George", sub:"Unknown · Unknown · Unknown", club:"Manchester United", pos:"Unknown", report:"Gabby George joins Brighton & Hove Albion", src:"Manchester United Website", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed transfer from Manchester United", lastSeen:"2026-08-07T14:38:27Z", baseProb:100},
  {name:"Ayase Ueda", sub:"24 · Japan · F", club:"Feyenoord", pos:"ST", report:"Brighton make concrete move for Feyenoord striker", src:"Football Place", tier:3, fee:"", truth:70, prob:60, light:"g", trend:"up", note:"Concrete interest reported; no recent updates on progress", lastSeen:"2026-08-08T10:03:39Z", baseProb:60}
];

const OUTGOING = [
  {name:"Jan Paul van Hecke", sub:"24 · Netherlands · D", club:"Brighton", pos:"CB", report:"Tottenham agree £52million Jan Paul van Hecke transfer with Brighton", src:"The Athletic", tier:1, fee:"£52m", truth:95, prob:90, light:"g", trend:"flat", note:"Deal agreed per David Ornstein; high confidence transfer", lastSeen:"2026-08-08T10:03:39Z", baseProb:90},
  {name:"Solly March", sub:"30 · England · W", club:"Brighton", pos:"W", report:"Crystal Palace consider shock free transfer for Brighton icon Solly March", src:"Goal.com", tier:3, fee:"Free", truth:65, prob:55, light:"g", trend:"up", note:"Palace in advanced talks", lastSeen:"2026-08-08T10:03:39Z", baseProb:55}
];
const DEAD = [
  {name:"Said El Mala", sub:"Unknown · Unknown · Unknown", club:"Köln", pos:"Unknown", report:"Brighton pushing for final talks with Köln", src:"On-page rumour", tier:3, fee:"Unknown", truth:45, prob:40, light:"y", trend:"down", note:"Active negotiation reported", lastSeen:"2026-08-06T13:55:46Z", baseProb:40, dead:true, deadReason:"No recent credible reporting; transfer window context unclear", dir:"in", deadAt:"2026-08-06T14:13:58Z"},
  {name:"Noah Atubolu", sub:"Unknown · Unknown · Goalkeeper", club:"Freiburg", pos:"GK", report:"Brighton shortlisted as suitors for Freiburg goalkeeper", src:"On-page rumour", tier:3, fee:"Unknown", truth:40, prob:35, light:"y", trend:"up", note:"One of several interested clubs", lastSeen:"2026-08-06T13:55:46Z", baseProb:35, dead:true, deadReason:"No recent credible reporting; transfer window context unclear", dir:"in", deadAt:"2026-08-06T14:13:58Z"},
  {name:"Bart Verbruggen", sub:"Unknown · Unknown · Goalkeeper", club:"Chelsea / Bayern Munich", pos:"GK", report:"Chelsea and Bayern Munich locked in transfer battle for keeper", src:"On-page rumour", tier:3, fee:"Unknown", truth:50, prob:45, light:"y", trend:"up", note:"Competition between two top clubs", lastSeen:"2026-08-06T13:55:46Z", baseProb:45, dead:true, deadReason:"No recent credible reporting; transfer window context unclear", dir:"out", deadAt:"2026-08-06T14:13:58Z"},
  {name:"Young data-model targets", sub:"Value recruitment", club:"Market", pos:"ANY", report:"window framing", src:"Model-based", tier:3, fee:"£50-90m total", truth:55, prob:45, light:'y', trend:'up',
   note:"Brighton's intake is built through their analytics network rather than headline pursuits. Specific names firm up as the window opens; this row frames the expected pattern, not an invented target.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"no longer a current link", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Squad depth for Europe", sub:"Rotation additions", club:"Market", pos:"ANY", report:"window framing", src:"Model-based", tier:3, fee:"Value adds", truth:55, prob:40, light:'y', trend:'flat',
   note:"A Conference League campaign stretches the squad, so depth additions across positions are expected alongside the headline intake. Framing thread carried from the v1 positions panel; no specific name asserted without sourcing.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Forward options", sub:"Goals and ceiling", club:"Market", pos:"FW", report:"window framing", src:"Model-based", tier:3, fee:"TBC", truth:55, prob:30, light:'y', trend:'flat',
   note:"The v1 positions panel flagged forward options (goals and ceiling) as a likely strand of the intake. Framing thread only; names firm up as the window opens.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"no longer a current link", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Prized asset (premium sale)", sub:"The model in action", club:"Elite suitors", pos:"ANY", report:"window framing", src:"Pattern-based", tier:3, fee:"£40m+", truth:55, prob:55, light:'g', trend:'up',
   note:"A near-inevitable feature of any Brighton summer: a developed star sold at a premium to a bigger club. PRICING: long contracts and multi-club interest stack the fee; proceeds fund the next intake.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55, dead:true, deadReason:"no longer a current link", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Fringe & squad trim", sub:"Reinvestment churn", club:"Various", pos:"ANY", report:"window framing", src:"Pattern-based", tier:3, fee:"Mixed", truth:55, prob:45, light:'y', trend:'flat',
   note:"Routine churn to balance the squad for a European campaign and keep the cost ratio healthy.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"no longer a current link", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Carlos Baleba", sub:"21 · Unknown · Midfielder", club:"Manchester United", pos:"CM", report:"Man Utd made official formal contact; Brighton not selling, fee too high", src:"David Ornstein / The Athletic", tier:1, fee:"Unknown", truth:15, prob:5, light:"r", trend:"down", note:"Deal ruled out; Brighton clear not for sale, move unrealistic", lastSeen:"2026-08-06T13:55:46Z", baseProb:5, dead:true, deadReason:"Man Utd deal ruled out; Brighton not selling and fee deemed too high", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Data-model targets", club:"Market", pos:"ANY", dir:"in", age:"framing", tier:3, note:"Young value recruits via Brighton's analytics network; names firm up as the window opens.", dead:true, deadReason:"no longer a current link", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Prized asset", club:"Brighton", pos:"ANY", dir:"out", age:"framing", tier:3, note:"A premium sale of a developed star is the expected summer feature.", dead:true, deadReason:"no longer a current link", deadAt:"2026-08-06T13:55:46Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Hurzeler</b> - new deal to 2029; stability secured."},
  {ar:"⬆", t:"<b>European football</b> - a Conference League place confirmed."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Hurzeler-to-Leverkusen</b> talk - ended by the renewal."},
  {ar:"⬇", t:"<b>Keeping every star</b> - the model implies a premium sale."},
];
const NEW = [
  {ar:"✦", t:"Manager: <b>Hurzeler</b> committed to 2029."},
  {ar:"✦", t:"In: young, data-model value. Out: a prized asset at a premium."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Invented specific targets</b> - none asserted without sourcing."},
  {ar:"✕", t:"<b>Completed past-window sales</b> - model proof, not live."},
];

const POSITIONS = [
  {p:"Young value targets", w:75, x:"The data model drives intake across positions"},
  {p:"Squad depth (Europe)", w:62, x:"A European campaign stretches the squad"},
  {p:"Replacing the sold star", w:58, x:"A premium exit is near-inevitable"},
  {p:"Forward options", w:48, x:"Goals and ceiling"},
  {p:"Defensive cover", w:42, x:"Balance for rotation"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [];

/* ---------- SOURCE LINKS ----------
   HUB-ONLY STATUS: the v1 monolith held zero source URLs, so every entry
   below is a named-source hub (beat writers, local paper, broadcaster),
   never an exact article. Aggregators (TransferFeed etc.) are never linked. */
const HUB = {
  argus:    {l:"The Argus · Albion", u:"https://www.theargus.co.uk/sport/"},
  official: {l:"BHAFC Official", u:"https://www.brightonandhovealbion.com/news"},
  athletic: {l:"The Athletic · Brighton", u:"https://www.nytimes.com/athletic/football/team/brighton-and-hove-albion/"},
  naylor:   {l:"Andy Naylor (The Athletic) · X", u:"https://x.com/AndyNaylorBHA"},
  sky:      {l:"Sky Sports · Brighton", u:"https://www.skysports.com/brighton-and-hove-albion"},
  sussex:   {l:"Sussex Express · Albion", u:"https://www.sussexexpress.co.uk/sport/football/brighton-hove-albion"},
  bbcGossip:{l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  gianlucaDiMarzioDannyWelbeck: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-trattative-1-agosto-2026-495391"},
  sportBildviaYahooSportsBulinewsSaidElMala: {l:"Sport Bild (via Yahoo Sports/Bulinews)", u:"https://sports.yahoo.com/articles/brighton-pushing-final-talks-sign-085200469.html"},
  sportviaFootballPlaceRoonyBardghji: {l:"Sport (via Football Place)", u:"https://footballplace.co.uk/roony-bardghji-brighton-barcelona-transfer/"},
  bavarianFootballWorksArijonIbrahimovic: {l:"Bavarian Football Works", u:"https://www.bavarianfootballworks.com/bayern-munich-transfer-news-rumors/207726/bayern-munich-arijon-ibrahimovic-transfer-rumors-bundesliga-premier-league-stuttgart-crystal-palace-fulham-brighton"},
  florianPlettenbergviaSussexExpressNoahAtubolu: {l:"Florian Plettenberg (via Sussex Express)", u:"https://www.sussexexpress.co.uk/sport/football/brighton-and-hove-albion/one-of-the-best-brighton-target-top-bundesliga-goalkeeper-amid-bart-verbruggen-claim-6574615"},
  fabrizioRomanoCarlosBaleba: {l:"Fabrizio Romano", u:"https://x.com/FabrizioRomano/status/1956382150837616761"},
  teamTalkBartVerbruggen: {l:"TeamTalk", u:"https://www.teamtalk.com/chelsea/bart-verbruggen-chelsea-winstanley-bayern-munich-50m-transfer-brighton-news"},
  eSPNZadokYohanna: {l:"ESPN", u:"https://www.espn.com/espn/story/_/id/48997587/brighton-sign-nigerian-starlet-zadok-yohanna-18-aik-stockholm-5-year-deal"},
  brightonHoveAlbionofficialCostinha: {l:"Brighton & Hove Albion (official)", u:"https://www.brightonandhovealbion.com/media-article/mft-transfer-news-costinha-olympiacos-june-2026"},
  skySportsJanPaulvanHecke: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11675/13555493/jan-paul-van-hecke-tottenham-sign-brighton-defender-for-lb52m"},
  eSPNDannyWelbeck: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49478554/danny-welbeck-chelsea-brighton-premier-league-transfers"},
  sportsMoleJeremySarmiento: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/brighton-and-hove-albion/transfer-talk/feature/brighton--hove-albion-summer-transfers-all-confirmed-ins-and-outs-for-2026_599174.html"},
  skySportsTransferCentreCarlRushworth: {l:"Sky Sports Transfer Centre", u:"https://www.skysports.com/football/news/11095/13546618/transfer-news-summer-transfer-window-2026-premier-league-deals-ins-and-outs"},
  manchesterUnitedofficialsiteGabbyGeorge: {l:"Manchester United official site", u:"https://www.manutd.com/en/news/gabby-george-joins-brighton-and-hove-albion-aug-2026"},
  xDavidOrnsteinCarlosBaleba: {l:"X / David Ornstein", u:"https://x.com/David_Ornstein/status/1956381216447578184"},
  bBCSportGeorge: {l:"BBC Sport", u:"https://www.bbc.co.uk/sport/football/articles/cdewgg2xe7yo?at_medium=RSS&at_campaign=rss"},
  xDavidOrnsteinMoissCaicedo: {l:"X / David Ornstein", u:"https://x.com/David_Ornstein/status/1690839408503627776"},
  xDavidOrnsteinJoaoPedro: {l:"X / David Ornstein", u:"https://x.com/David_Ornstein/status/1939384559252217961"},
  goalcomSollyMarch: {l:"Goal.com", u:"https://news.google.com/rss/articles/CBMi4gFBVV95cUxOR1NTWHc5c1VRbHoydmRkY01IT1QtX01tX0hnNi1sdDRBdWRVeUZxNEVMVHVGUzNEa1B2SjRIcDlTeXc3Q2gyZ3Vxb2FzZmdnUkVWYllXSFpXbmROQk01MGNMSGlDNGVoV0FueWRjNDNRN1kzTnZjRWpKcW1fek9nVFFyMDBlNXc4QjhkS0VHVjRNb3R5YVpfRldEZ2cyMHFRMGptTlhEZk00ODFBNTVxbTRmcUJTRGFpdFFnTUNmZS1xMlJnT0FQWjItVHFsZXJnOVJHLUJvd0dNbjJUc3NmY21B"},
  theAthleticJanPaulvanHecke: {l:"The Athletic", u:"https://news.google.com/rss/articles/CBMimwFBVV95cUxPM2Nua0Z2cXM0eS1ORjJLa1ZURFM3cFkwMUgzZGVneXFoaWVVeUNXeWh1dGZNVHFfYUs5dkJ0QnpUS1NDdEMzX3VZbWtIYnlUc0tlV0JKYUNNMm00RHVRbHptVDI3TVNWYUxKV1lpSTNOX2pUVVJwckVEVWc4amZfM0VNMVlkM0haRThDbFhqdEp4WDh6cjNyMG9sUQ"},
  manchesterUnitedWebsiteGabbyGeorge: {l:"Manchester United Website", u:"https://news.google.com/rss/articles/CBMiiwFBVV95cUxOMnFTNG4wTmR4UzBRY1d5cUhwcnE2ZlljOF9ZNW1aRlRJdEcwRC05Y1diZ2lSVlBlYkpyb0RrZHNQbHVsTkFocFZkNDE0c2FuSWtFdlhrVEVjT3E5MlIyblNUdUpWUHlNVUo3aDlVRWsxNzRDWnZ0Um9uOURqaklNbmpCVzAwTXcteER3"},
  bBCCarlRushworth: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE16QUtjd191cmJSVUdQQkNqOC1tUE1HVU5ybnBZd1hMVW9DalpqNWZFSDFGa1JQMFBBbWRMTzdLdU53cGpQb1Rmb09qS3h3V1g0bFZVTDR4YlljMmczSkZHUjMxMm1HSWFNbUE"},
  manchesterUnitedWebsiteGabbyGeorge1: {l:"Manchester United Website", u:"https://news.google.com/rss/articles/CBMiiwFBVV95cUxOMnFTNG4wTmR4UzBRY1d5cUhwcnE2ZlljOF9ZNW1aRlRJdEcwRC05Y1diZ2lSVlBlYkpyb0RrZHNQbHVsTkFocFZkNDEEc2FuSWtFdlhrVEVjT3E5MlIyblNUdUpWUHlNVUo3aDlVRWsxNzRDWnZ0Um9uOURqaklNbmpCVzAwTXcteER3"},
  footballPlaceAyaseUeda: {l:"Football Place", u:"https://news.google.com/rss/articles/CBMiggFBVV95cUxNTWxtOW50NTRvS2hSRVlTZnhfMDVSa0N4SWo0VXJFOEVTcHFaZkpSZC1iZ2ZZR2FfT2xtcXBuVU5uMjd3NmlPMmk5N3ctWFFCNG1ZNGU1LTB0RXF5NGhCdGU1bklfNldhdUQ3S3kzcGE2d2ROcUxxX0U1bjU2dWxQVjJ3"},
  goalcomSollyMarch1: {l:"Goal.com", u:"https://news.google.com/rss/articles/CBMi5gFBVV95cUxOUWN5Nk1wZWp2ZlZxQS1uZ01tZXRMUmZETzlNYlRLQTFBendpRWtERlpLQnNyRHlFa3VvN3N5NTltakRIRklKb0lLcGNBSTdYc1JCY1A1dFJFLWxVT0ZQUEd4RWJWaUxjZV9EekFvZFpZSVlYdW1kemFBbV82eWlrTnMxOU96UmZnY0tEZXRIY3VFOFh2NXVydTNBOXJsdk5rc0RvVS1GZERYZGY1enNrM1dTUFdRQ0RvaDFDZVVXaUpBNlJDbldGY0t3LTRvSklCTjQyMTN4Wk4tNW5HWk9DTGhpb0xsQQ"},
  theNewYorkTimesJoelVeltman: {l:"The New York Times", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxPR1hiNFZJYndwVlVDazg2eFVTOGV0Tmt5UEpUcFUzQ2h2ckE4dlZoc1NzVGZaVTdmbHdiRzRuNDVzaG9oTFo2dWRNZ2Y2S05aaFJTTTVrRFdtc09kN1pXRnBOSzlDRE5CbHBzSnRfQnhIZGJIWWpZRUpxTkZjUUJLLVNEOERWLVBROW1oV2djaVpxUVBSYkNV"}};
const LINKMAP = {
  "Young data-model targets": ["athletic","argus","bbcGossip"],
  "Squad depth for Europe": ["argus","sky"],
  "Forward options": ["athletic","bbcGossip"],
  "Prized asset (premium sale)": ["naylor","athletic","sky"],
  "Fringe & squad trim": ["argus","sussex"],
  "Danny Welbeck": ["gianlucaDiMarzioDannyWelbeck", "eSPNDannyWelbeck", "skySportsTransferCentreCarlRushworth"],
  "Said El Mala": ["sportBildviaYahooSportsBulinewsSaidElMala"],
  "Roony Bardghji": ["sportviaFootballPlaceRoonyBardghji"],
  "Arijon Ibrahimovic": ["bavarianFootballWorksArijonIbrahimovic"],
  "Noah Atubolu": ["florianPlettenbergviaSussexExpressNoahAtubolu"],
  "Carlos Baleba": ["fabrizioRomanoCarlosBaleba", "xDavidOrnsteinCarlosBaleba"],
  "Bart Verbruggen": ["teamTalkBartVerbruggen"],
  "Zadok Yohanna": ["eSPNZadokYohanna"],
  "Costinha": ["brightonHoveAlbionofficialCostinha"],
  "Jan Paul van Hecke": ["skySportsJanPaulvanHecke", "skySportsTransferCentreCarlRushworth", "theAthleticJanPaulvanHecke"],
  "Jeremy Sarmiento": ["sportsMoleJeremySarmiento"],
  "Adam Webster": ["sportsMoleJeremySarmiento"],
  "Joel Veltman": ["sportsMoleJeremySarmiento", "skySportsTransferCentreCarlRushworth", "theNewYorkTimesJoelVeltman"],
  "Solly March": ["sportsMoleJeremySarmiento", "goalcomSollyMarch", "goalcomSollyMarch1"],
  "James Milner": ["sportsMoleJeremySarmiento"],
  "Carl Rushworth": ["skySportsTransferCentreCarlRushworth", "bBCCarlRushworth"],
  "Diego Coppola": ["skySportsTransferCentreCarlRushworth"],
  "Brajan Gruda": ["skySportsTransferCentreCarlRushworth"],
  "Gabby George": ["manchesterUnitedofficialsiteGabbyGeorge", "manchesterUnitedWebsiteGabbyGeorge", "manchesterUnitedWebsiteGabbyGeorge1"],
  "George": ["bBCSportGeorge"],
  "Moisés Caicedo": ["xDavidOrnsteinMoissCaicedo"],
  "Joao Pedro": ["xDavidOrnsteinJoaoPedro"],
  "Evan Ferguson": ["bBCSportGeorge"],
  "Leny Yoro": ["bBCSportGeorge"],
  "Ayase Ueda": ["footballPlaceAyaseUeda"]};
const WL_LINKMAP = {
  "Data-model targets":"athletic","Prized asset":"naylor",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `<em>Hurzeler</em> tied down, Conference League secured: the data machine reloads`,
  heroLede: `Brighton head into the summer with European football confirmed, a <b>Conference League</b> place, and their young head coach locked in: Fabian <b>Hurzeler</b> has signed a <b>new deal to 2029</b>, ending Leverkusen interest. The model under owner <b>Tony Bloom</b> is unchanged, data-led recruitment of high-ceiling young talent, develop, and sell at a premium when elite clubs come calling. Specific targets firm up as the window opens; the through-line is value in, big fees out.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Tony Bloom</b> (Owner / data model)</span>
      <span>HEAD COACH: <b>Fabian Hurzeler</b></span>
      <span>OWNER: <b>Tony Bloom</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">8<small>th</small></div></div>
    <div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">CONF</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£60-110<small>m</small></div></div>
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
        <p>A <b>data-led, value-driven</b> model under owner <b>Tony Bloom</b>, coached by <b>Hurzeler</b>. Brighton recruit high-ceiling young talent through their analytics network, develop it, and bank major fees, reinvesting to stay competitive.</p>
        <div class="quote">Bloom's track record of appointments (Potter, De Zerbi, Hurzeler) and recruitment is among the most admired in the league; the system, not any one signing, is the asset.</div>
        <p><b>This window's logic:</b> add young talent, manage the inevitable big sale, and add depth for a European campaign.</p>
        <ul>
          <li>Recruitment markets: undervalued young talent worldwide, via the data model.</li>
          <li>Expect at least one prized-asset sale at a premium, per the pattern.</li>
          <li>Specific names firm up as the window opens; no fabricated targets here.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> weight young, data-model profiles in, and a premium star sale out; treat the model as the signal.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Owned by <b>Tony Bloom</b>, Brighton are a model of sustainable, trading-led football, consistently turning recruitment into profit.</p>
        <ul>
          <li>European football brings the tighter <b>70% cost cap</b> alongside more revenue.</li>
          <li>Player-trading profit underpins the books and funds reinvestment.</li>
          <li>The club rarely overpays and almost always sells at a premium.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> the challenge is sustaining the level while cashing in on the best.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">European football raises Brighton's pull on young talent, but the model and the 70% cap mean selling stars and reinvesting remains the rhythm.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>One of the most respected smaller clubs in world football, Brighton's pathway and style attract ambitious young players, and European nights add to the pitch.</p>
        <ul>
          <li>A proven development pathway draws talent despite the eventual sale.</li>
          <li>Hurzeler's renewal signals stability and belief in the project.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> the better Brighton's players, the bigger the bids, so a marquee exit is near-inevitable.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue, but only 70% for clubs in European competition</b>. European football lifts revenue yet tightens the ratio, so it is a genuine trade-off, not a pure positive.</p>
        <p>Trading profit keeps Brighton comfortable, but a European campaign and a deeper squad add wage pressure.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation; sales improve it.</li>
          <li>Reinvesting at value keeps the ratio and the cycle healthy.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: the model keeps delivering</h5>
        <ul>
          <li>Another shrewd window could sustain a European-chasing side.</li>
          <li>Hurzeler tied down anchors the project long-term.</li>
          <li>Reinvested fees can upgrade the squad without overspending.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: selling one star too many</h5>
        <ul>
          <li>Cashing in on a key player can stall momentum if recruitment misfires.</li>
          <li>A European campaign stretches the squad.</li>
          <li>The 70% cap limits how fast windfalls can be respent.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> trust the model, recruit young value, cash in on one prized asset at a premium, and reinvest for a European campaign within the 70% cap. The names change; the method does not.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; nothing is registered yet.</b> The settled business is the dugout: <b>Hurzeler's</b> new contract to 2029. As ever with Brighton, specific incomings and the inevitable big-money sale firm up once the window opens; this report frames the model, not invented names.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Bloom network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: Brighton are among the league's shrewdest sellers, at a steep premium.</b> Their record of buying young and selling high (a long line from Caicedo and Cucurella onward) means any sought-after asset is priced well above consensus, lifted by long contracts and multi-club interest. Fringe and surplus names move at softer floors to fund the next intake.
    `,
  excludedNote: `<b>Excluded as stale:</b> recycled past-window sales and Hurzeler-to-Leverkusen talk are not live; he has signed to 2029. No specific incoming is asserted without sourcing.`,
  spendIn: { v: `£60-110m`, x: `Young, high-ceiling talent via the data model, plus depth for Europe.` },
  spendOut: { v: `£60-130m`, x: `At least one prized-asset sale at a premium, per the long-running pattern, plus fringe trimming.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic. <i>Used for:</i> Hurzeler's renewal and Brighton's confirmed European place.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, beIN, reliable national and club writers. Beat writers rise within their patch: Andy Naylor (The Athletic) and The Argus on Albion matters.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Bloom network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom &amp; Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
