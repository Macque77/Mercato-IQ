/* ============================================================
   MERCATO IQ · CLUB DATA · ASTON VILLA · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce aston-villa.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (format migration only, data carried from the
   6 Jun 2026 v1 dashboard, no re-verification):
   · truth values SYNTHESISED conservatively from source tier and
     recency (old rows carried a single probability only):
     T1 85 / T2 70 / T3 55 / T4 35, minus 10 where the note reads
     cooled or stale. Old probability kept unchanged as prob.
   · No light-band fixes were needed: every carried light already
     matched its prob band (Rogers prob 30 was already 'y').
   · Old file held no source URLs, so LINKMAP/WL_LINKMAP point at
     named-source hubs only; replace with exact URLs at next refresh.
   · Old badge payload was JPEG data mislabelled image/png; it fails
     PNG validation, so the build uses the aston-villa.png reference +
     SVG shield fallback until a true PNG is inlined.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Aston Villa", mono: "AVFC", slug: "aston-villa",
  primary: "#95BFE5", primaryBright: "#afcfeb", primaryDeep: "#597289",
  primaryRgb: "149,191,229",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook)
   verified deliberately stale (old build date): next refresh must re-verify all fields. ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Unai Emery",
  dof: "Monchi (President of Football Operations)",
  europe: "Champions League (2026/27)",
  finish: "4th (2025/26; Europa League winners)",
  owner: "NSWE / V Sports (Nassef Sawiris & Wes Edens)",
  window: "Opens 15 Jun, runs to 1 Sep 2026"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Aston+Villa/Transfer+News",
    "https://www.transferfeed.com/clubs/aston-villa",
    "https://www.birminghammail.co.uk/all-about/aston-villa-fc",
    "https://www.skysports.com/aston-villa",
    "https://www.sportsmole.co.uk/football/aston-villa/"
  ],
  queries: [
    "Aston Villa transfer news <current month + year>",
    "Aston Villa bid OR medical OR 'personal terms'",
    "Aston Villa fichajes Marca AS Relevo Moretto",
    "Aston Villa mercato L'Equipe RMC Foot Mercato",
    "Aston Villa Plettenberg Bild OR calciomercato Di Marzio TuttoMercatoWeb"
  ],
  note: "Foreign desks per profile: Spain (Marca/AS/Relevo/Moretto + La Liga local beats), France (L'Equipe/RMC/Foot Mercato), Italy (Di Marzio/TMW/Gazzetta/Corriere + Serie A local beats), Germany (Plettenberg/Sky DE/Bild/Kicker). For every linked player also search the current club's local press in the native language. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "6 Jun 2026", updated: "2026-06-06T12:00:00Z", label: "Build · Europa winners, UCL bound (migrated to v2, awaiting live refresh)" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Johan Manzambi", sub:"Club-record midfield/wing-back capture", club:"SC Freiburg", pos:"MF", fee:"£59.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club-record signing after strong World Cup showing for Switzerland"},
  {name:"João Gomes", sub:"Midfield reinforcement from Wolves", club:"Wolverhampton Wanderers", pos:"MF", fee:"£38m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a long-term deal as part of Villa's midfield rebuild"},
  {name:"Alejandro Garnacho", sub:"Season-long loan with conditional obligation to buy", club:"Chelsea", pos:"FW", fee:"£42.6m (loan + obligation package)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Garnacho moved to Chelsea from Man Utd in 2025; now on a structured loan to Villa to satisfy UEFA financial rules alongside the Morgan Rogers sale"}
];
const CONFIRMED_OUT = [
  {name:"Morgan Rogers", sub:"23 · AM · England", club:"Chelsea", pos:"AM", fee:"£117m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Confirmed August 2026 - a club-record sale for Villa as Rogers completes a record move to Chelsea under Xabi Alonso. Rogers scored 8 and assisted 7 in 34 Premier League games last season; the fee ranks among the highest ever paid for a wide playmaker."},
  {name:"Youri Tielemans", sub:"Release clause triggered", club:"Manchester United", pos:"MF", fee:"£35m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Lucas Digne", sub:"Release clause triggered", club:"Paris Saint-Germain", pos:"DF", fee:"£8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Donyell Malen", sub:"Forward sold to Serie A", club:"Roma", pos:"FW", fee:"£21.6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Enzo Barrenechea", sub:"Midfielder departs for Portugal", club:"Benfica", pos:"MF", fee:"£10.3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Lewis Dobbin", sub:"Squad player sold to Southampton", club:"Southampton", pos:"MF", fee:"£9m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];

const INCOMING = [
  {name:"Marcus Rashford", sub:"27 · England · W", club:"Manchester United", pos:"W", report:"Aston Villa exploring move for Manchester United winger", src:"Unknown", tier:3, fee:"Undisclosed", truth:50, prob:40, light:"y", trend:"up", note:"Recent rumour reported ~1 day ago", lastSeen:"2026-08-07T14:38:27Z", baseProb:40},
  {name:"Igor Paixão", sub:"26 · Brazil · W", club:"Fiorentina", pos:"W", report:"Villa exploring a move for the 26-year-old winger", src:"Unknown", tier:3, fee:"Undisclosed", truth:60, prob:50, light:"y", trend:"up", note:"Exploratory interest", lastSeen:"2026-08-07T14:38:27Z", baseProb:50},
  {name:"Matteo Ruggeri", sub:"22 · Italy · LB", club:"Atlético Madrid", pos:"LB", report:"Aston Villa have agreed a fee with Atlético Madrid", src:"Unknown", tier:3, fee:"Undisclosed", truth:75, prob:70, light:"g", trend:"down", note:"Fee agreed, deal progressing", lastSeen:"2026-08-07T14:38:27Z", baseProb:70},
  {name:"Zion Suzuki", sub:"21 · Japan · GK", club:"Parma", pos:"GK", report:"The Parma goalkeeper remains on Villa's list", src:"Unknown", tier:3, fee:"Undisclosed", truth:55, prob:45, light:"y", trend:"up", note:"Monitoring goalkeeper option", lastSeen:"2026-08-07T14:38:27Z", baseProb:45},
  {name:"Lamine Camara", sub:"24 · Senegal · MF", club:"Monaco", pos:"MF", report:"Aston Villa agree €21m deal for 24-year-old midfielder", src:"Fabrizio Romano", tier:1, fee:"€21m", truth:90, prob:85, light:"g", trend:"up", note:"Deal agreed, final talks begin", lastSeen:"2026-08-07T14:38:27Z", baseProb:85},
  {name:"Alejandro Garnacho", sub:"20 · Spain · W", club:"Chelsea", pos:"W", report:"Aston Villa agree deal with Chelsea for winger", src:"David Ornstein", tier:1, fee:"Undisclosed", truth:85, prob:75, light:"g", trend:"down", note:"Deal agreed between clubs", lastSeen:"2026-08-07T14:38:27Z", baseProb:75}
];

const OUTGOING = [
  {name:"Ezri Konsa", sub:"26 · England · DEF", club:"Aston Villa", pos:"DEF", report:"Liverpool set to rival Arsenal for Aston Villa and England defender", src:"Various", tier:2, fee:"Undisclosed", truth:65, prob:55, light:"g", trend:"up", note:"Liverpool and Arsenal both interested in defender", lastSeen:"2026-08-07T14:38:27Z", baseProb:55},
  {name:"Youri Tielemans", sub:"27 · Belgium · MF", club:"Manchester United", pos:"MF", report:"Manchester United set to finalise move due to £35m release clause", src:"David Ornstein", tier:1, fee:"£35m", truth:95, prob:90, light:"g", trend:"flat", note:"Move set to be finalised; release clause in place", lastSeen:"2026-08-07T14:38:27Z", baseProb:90}
];
const DEAD = [
  {name:"Youri Tielemans", sub:"26 · Belgium · M", club:"Leicester City", pos:"M", report:"EXCL: Aston Villa have agreed a deal to sign Youri Tielemans. Doing medical before finalising contract. 26yo midfielder set to join as free agent after Leicester deal expired.", src:"David Ornstein", tier:1, fee:"Free", truth:95, prob:92, light:"g", trend:"flat", note:"Medical underway, imminent signing", lastSeen:"2026-08-06T13:55:46Z", baseProb:92, dir:"in", deadReason:"signed for manchester-united", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Fringe & loan returns", sub:"Squad trim", club:"Various", pos:"-", report:"~4 days ago", src:"Aston Villa News (aggregated)", tier:3, fee:"Mixed", truth:55, prob:45, light:'y', trend:'flat',
   note:"Underwhelming 2025 signings and loanees to be moved on as Emery refreshes depth and protects the cost ratio.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"Generic category, not a specific player", dir:"out", deadAt:"2026-08-06T13:55:46Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Emery</b>: new five-year deal to 2029, the key signature."},
  {ar:"⬆", t:"<b>Lamine Camara</b>: primary midfield target; player open to Villa."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Emery-exit talk</b>: ended by the renewal."},
];
const NEW = [
  {ar:"✦", t:"Context: <b>Europa League winners</b>, back in the <b>Champions League</b>."},
  {ar:"✦", t:"In: <b>Camara</b>, <b>Moriba</b> midfield options. Out: fringe pieces; <b>Rogers</b>' club-record £117m sale to Chelsea is now done and official."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Emery-to-Bayern</b> type links: void after the 2029 renewal."},
  {ar:"✕", t:"<b>Recycled 2025 names</b>: not this summer's business."},
];

const POSITIONS = [
  {p:"Central midfield", w:82, x:"Stated priority; Camara, Moriba targeted"},
  {p:"Squad depth (UCL)", w:70, x:"Multi-competition rotation need"},
  {p:"Forward", w:55, x:"Rashford-type tracked; depth up front"},
  {p:"Full-back", w:45, x:"Balance and cover"},
  {p:"Centre-back", w:40, x:"Depth review"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"Lamine Camara", club:"Monaco", pos:"CM", dir:"in", age:"~1d", tier:2, note:"(Also in main table.) Primary midfield target; player favours Villa or Spurs.", dead:true, deadReason:"Duplicate entry on page; no fresh snippet confirms move"}
];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   The v1 file held no URLs, so all entries below are hubs pending re-verification.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  bbcVilla:  {l:"BBC Sport · Aston Villa", u:"https://www.bbc.co.uk/sport/football/teams/aston-villa"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  athletic:  {l:"The Athletic · Aston Villa", u:"https://www.nytimes.com/athletic/football/club/aston-villa/"},
  bmail:     {l:"Birmingham Mail · Aston Villa", u:"https://www.birminghammail.co.uk/all-about/aston-villa-fc"},
  townley:   {l:"John Townley (Birmingham Mail) · X", u:"https://x.com/JohnTownley11"},
  sky:       {l:"Sky Sports · Aston Villa", u:"https://www.skysports.com/aston-villa"},
  onefootball:{l:"OneFootball · transfer news", u:"https://onefootball.com/en/news"},
  yahoo:     {l:"Yahoo Sport UK · football", u:"https://uk.sports.yahoo.com/football/"},
  lequipe:   {l:"L'Équipe · football", u:"https://www.lequipe.fr/Football/"},
  footmercato:{l:"Foot Mercato", u:"https://www.footmercato.net/"},
  avfc:      {l:"Aston Villa Official · news", u:"https://www.avfc.co.uk/news/"},
  fabrizioRomanoviaFootballTransfersAlejandroGarnacho: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/07/fabrizio-romano-alejandro-garnacho-warren-zaire-emery-ousmane-diomande"},
  fabrizioRomanoviaReadTottenhamEmilianoMartnez: {l:"Fabrizio Romano (via Read Tottenham)", u:"https://readtottenham.com/2026/08/03/fabrizio-romano-tottenham-transfer-news-juventus/"},
  sportsMoleviaLquipeIgorPaixo: {l:"Sports Mole (via L'Équipe)", u:"https://www.sportsmole.co.uk/football/aston-villa/transfer-talk/news/aston-villa-transfer-news-villans-weigh-up-move-for-brazilian-scoring-12-goals-last-season_602373.html"},
  readAstonVillaEzriKonsa: {l:"Read Aston Villa", u:"https://readastonvilla.com/2026/08/02/aston-villa-receive-65m-arsenal-bid-for-ezri-konsa/"},
  skySportsJohanManzambi: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11677/13564492/johan-manzambi-aston-villa-sign-newcastle-target-from-freiburg-in-club-record-lb59-5m-deal"},
  eSPNDailyPostJooGomes: {l:"ESPN / Daily Post", u:"https://www.dailypost-uk.com/2026/07/aston-villa-confirm-signing-joao-gomes_089466516.html"},
  skySportsAlejandroGarnacho: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13566112/alejandro-garnacho-transfer-news-aston-villa-sign-chelsea-winger-on-initial-loan-deal-with-conditional-obligation-to-buy"},
  readAstonVillaMyOldManSaidMorganRogers: {l:"Read Aston Villa / My Old Man Said", u:"https://myoldmansaid.com/the-good-bad-and-ugly-aston-villas-summer-transfer-window-so-far/"},
  sportsMoleDonyellMalen: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/aston-villa/transfer-talk/feature/aston-villa-summer-transfers-all-confirmed-ins-and-outs-for-2026_598979.html"},
  marcaRubenUriaMatteoRuggeri: {l:"Marca (Ruben Uria)", u:"https://www.marca.com/futbol/atletico.html"},
  sportsMoleLucasDigne: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/aston-villa/transfer-talk/news/emery-wants-to-sign-italian-defender-immediately-as-aston-villa-bid-to-resolve-clear-issue_602381.html"},
  sportsMoleEzriKonsa: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/arsenal/transfer-talk/news/konsa-arsenal-stance-revealed-amid-transfer-interest_602295.html"},
  tEAMtalkrelayingFabrizioRomanoMatteoRuggeri: {l:"TEAMtalk (relaying Fabrizio Romano)", u:"https://www.teamtalk.com/aston-villa/aston-villa-reach-agreement-atletico-madrid-liverpool-tottenham-target-fifth-signing"},
  tEAMtalkrelayingFabrizioRomanoZionSuzuki: {l:"TEAMtalk (relaying Fabrizio Romano)", u:"https://www.teamtalk.com/aston-villa/fabrizio-romano-reveals-psg-juventus-plans-for-aston-villa-target-zion-suzuki"},
  readAstonVillarelayingFabrizioRomanoJooGomes: {l:"Read Aston Villa (relaying Fabrizio Romano)", u:"https://readastonvilla.com/2026/07/16/here-we-go-fabrizio-romano-confirms-next-aston-villa-signing/"},
  transferfeedLamineCamara: {l:"Transferfeed", u:"https://transferfeed.com"},
  davidOrnsteinTheAthleticYouriTielemans: {l:"David Ornstein / The Athletic", u:"https://x.com/David_Ornstein/status/1667570071844077572"},
  the4thOfficialMatteoRuggeri: {l:"The 4th Official", u:"https://news.google.com/rss/articles/CBMixwFBVV95cUxNRXRKZkJ4cjV6WGVBZ3dJUG45OHlsMnk1cG1yeXJpSUVGTkxUczdYYTZoTTdGYW5NdlRja2F2aXc0MC1OaWhkRklDeUFJRFNMZnhJNUZEcF9NQ3VaVnpNcjlXMjZwY0pHVnpqaGltbm1sLVJvUkdtYU9IYmV6TGtxVG9sX1puWUgzNkM0VFJKZFFPZDVqRlYwMWVUVVFNdDF3TkJUVGhxeE84NzJucUZ4NHI0YzNrLWV6SXJQTGhHLTBzUWt4Z2VB"},
  theAthleticTheNewYorkTimesDavidOrnsteinYouriTielemans: {l:"The Athletic / The New York Times (David Ornstein)", u:"https://news.google.com/rss/articles/CBMiqwFBVV95cUxQU3lHaTE0RDBkRGJwdlRRVklLeXRnSU9Od011X1pIdWlJcGdEdzJ1Zy1QS3ZuT3QxWGV0NlhiVVYxdHlaR3lXTnBpMG5lUGFSd3BVMmFGenVxM2NpVjU0Tk95MUZ2RzNZLVBiczBfS2xQNWU5Z2dfTktTc3lweGR6ZVR4N3NTSV8zQk9xWFhUQXZ1M3cwcmptUDgtVVNNSXMybjROVlUwb3VWWTA"},
  skySportsEzriKonsa: {l:"Sky Sports", u:"https://news.google.com/rss/articles/CBMi_AFBVV95cUxQRWtPdlpBRTNpOWVoeWhNTFFVZE5mcU0zM0twX0xYU292cElOSGRLUUN3RHdScVNhTExmRlBYUXpiT0REaG43LWxaVmVQTU10TEJHV3ZVN3BMMFF5Yzc1ZmljTnpBbUV2NGVKZEtoeFdDck9oWE9Ub2wzeGhXZXdEWU05MkI5eTh1bF9ReWJXb1gtbFVndGQtaTBWN0hxWEhBZ0pwa25RcUQ1NmpmRGlMQXBGNDhpLVFVLTNHMENKRWhna19NcDlzVXJsam9iT2JhcWo0ODNNdnNGX2hyc1JuMnBGWWx0cFpDNVN2N0t2TFc3RkgwLUlsTUNadzQ"},
  roundtableioMatteoRuggeri: {l:"roundtable.io", u:"https://news.google.com/rss/articles/CBMi6AFBVV95cUxQSFFyVUtsSVVZcEY1M2VMNWIxbWdseEpaazUxU3FvUGtsUFlWdFE1Yk9VS1lzY3ZjZzNDRzI3U25pRlpuSUVVYTVLUVlac1RzOWlnUDlreGY2TTJYQTViRE1xaVM5aUJXdEdGRkdaRzJKcktlSXppVV9pUE9hSFpQZ0QyRWlEenpWX2VreHZobnJNNTNGMFlkSDJOUHJoZ1o5dUh1cjljaTZ4QTg0V1RSU3lvSWwtVjcyQkJBWnIzSWtyd2dUSUZrY1k5bjB5QjBReHRCMHpqVWdxTVh4MElQaUN2aWpmc21P"},
  theAthleticDavidOrnsteinAlejandroGarnacho: {l:"The Athletic / David Ornstein", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxQRUFEX1hGaWp2RGkySC1EYVBkTFVUdGUzbnk5S3FSSFFHMGtURnp6dnNiWHNJZzZCZUhsVVRLemxlUDN3dzJVRjJ1eUJ3VVVsN21kQ05CVmttT3U2YlBIM21iaXozWERyRFJLbTc0QTdDaG5zT2NoVDQ4cm85UmIyVVZkWmFvaXphWHgtTkctZ3g3ekNZaGhj?oc=5"},
  theAthleticDavidOrnsteinYouriTielemans: {l:"The Athletic / David Ornstein", u:"https://news.google.com/rss/articles/CBMiqwFBVV95cUxQU3lHaTE0RDBkRGJwdlRRVklLeXRnSU9Od011X1pIdWlJcGdEdzJ1Zy1QS3ZuT3QxWGV0NlhiVVYxdHlaR3lXTnBpMG5lUGFSd3BVMmFGenVxM2NpVjU0Tk95MUZ2RzNZLVBiczBfS2xQNWU5Z2dfTktTc3lweGR6ZVR4N3NTSV8zQk9xWFhUQXZ1M3cwcmptUDgtVVNNSXMybjROVlUwb3VWWTA?oc=5"},
  skySportsEzriKonsa1: {l:"Sky Sports", u:"https://news.google.com/rss/articles/CBMi_AFBVV95cUxQRWtPdlpBRTNpOWVoeWhNTFFVZE5mcU0zM0twX0xYU292cElOSGRLUUN3RHdScVNhTExmRlBYUXpiT0REaG43LWxaVmVQTU10TEJHV3ZVN3BMMFF5Yzc1ZmljTnpBbUV2NGVKZEtoeFdDck9oWE9Ub2wzeGhXZXdEWU05MkI5eTh1bF9ReWJXb1gtbFVndGQtaTBWN0hxWEhBZ0pwa25RcUQ1NmpmRGlMQXBGNDhpLVFVLTNHMENKRWhna19NcDlzVXJsam9iT2JhcWo0ODNNdnNGX2hyc1JuMnBGWWx0cFpDNVN2N0t2TFc3RkgwLUlsTUNadzQ?oc=5"},
  theAthleticDavidOrnsteinAlejandroGarnacho1: {l:"The Athletic / David Ornstein", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxQRUFEX1hGaWp2RGkySC1EYVBkTFVUdGUzbnk5S3FSSFFHMGtURnp6dnNiWHNJZzZCZUhsVVRLemxlUDN3dzJVRjJ1eUJ3VVVsN21kQ05CVmttT3U2YlBIM21iaXozWERyRFJLbTc0QTdDaG5zT2NoVDQ4cm85UmIyVVZkWmFvaXphWHgtTkctZ3g3ekNZaGhj"},
  the4thOfficialLamineCamara: {l:"The 4th Official", u:"https://news.google.com/rss/articles/CBMixwFBVV95cUxNRXRKZkJ4cjV6WGVBZ3dJUG41OHlsMnk1cG1yeXJpSUVGTkxUczdYYTZoTTdGYW5NdlRja2F2aXc0MC1OaWhkRklDeUFJRFNMZnhJNUZEcF9NQ3VaVnpNcjlXMjZwY0pHVnpqaGltbm1sLVJvUkdtYU9IYmV6TGtxVG9sX1puWUgzNkM0VFJKZFFPZDVqRlYwMWVUVVFNdDF3TkJUVGhxeE84NzJucUZ4NHI0YzNrLWV6SXJQTGhHLTBzUWt4Z2VB"}};
const LINKMAP = {
  "Lamine Camara": ["onefootball","yahoo","lequipe", "transferfeedLamineCamara", "the4thOfficialMatteoRuggeri", "the4thOfficialLamineCamara"],
  "Ilaix Moriba": ["onefootball", "transferfeedLamineCamara"],
  "Marcus Rashford": ["bbcGossip", "transferfeedLamineCamara"],
  "Morgan Rogers": ["bbcVilla","athletic", "readAstonVillaMyOldManSaidMorganRogers"],
  "Jadon Sancho": ["bmail","townley"],
  "Fringe & loan returns": ["bmail"],
  "Alejandro Garnacho": ["fabrizioRomanoviaFootballTransfersAlejandroGarnacho", "skySportsAlejandroGarnacho", "theAthleticDavidOrnsteinAlejandroGarnacho", "theAthleticDavidOrnsteinAlejandroGarnacho1"],
  "Emiliano Martínez": ["fabrizioRomanoviaReadTottenhamEmilianoMartnez", "transferfeedLamineCamara"],
  "Igor Paixão": ["sportsMoleviaLquipeIgorPaixo", "transferfeedLamineCamara"],
  "Ezri Konsa": ["readAstonVillaEzriKonsa", "sportsMoleEzriKonsa", "transferfeedLamineCamara", "skySportsEzriKonsa", "skySportsEzriKonsa1"],
  "Johan Manzambi": ["skySportsJohanManzambi"],
  "João Gomes": ["eSPNDailyPostJooGomes", "readAstonVillarelayingFabrizioRomanoJooGomes"],
  "Youri Tielemans": ["readAstonVillaMyOldManSaidMorganRogers", "davidOrnsteinTheAthleticYouriTielemans", "theAthleticTheNewYorkTimesDavidOrnsteinYouriTielemans", "theAthleticDavidOrnsteinYouriTielemans"],
  "Lucas Digne": ["readAstonVillaMyOldManSaidMorganRogers", "sportsMoleLucasDigne"],
  "Donyell Malen": ["sportsMoleDonyellMalen"],
  "Enzo Barrenechea": ["sportsMoleDonyellMalen"],
  "Lewis Dobbin": ["sportsMoleDonyellMalen"],
  "Matteo Ruggeri": ["marcaRubenUriaMatteoRuggeri", "tEAMtalkrelayingFabrizioRomanoMatteoRuggeri", "transferfeedLamineCamara", "the4thOfficialMatteoRuggeri", "roundtableioMatteoRuggeri"],
  "Zion Suzuki": ["tEAMtalkrelayingFabrizioRomanoZionSuzuki", "transferfeedLamineCamara"]};
const WL_LINKMAP = {
  "Lamine Camara":"onefootball","Morgan Rogers":"bbcVilla","Loan flops":"bmail",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `Europa League winners, back in the <em>Champions League</em>: Emery builds with no limits`,
  heroLede: `Villa enter the summer on a high: <b>Europa League champions</b> and back in the <b>Champions League</b> after a fourth-placed finish, with Unai <b>Emery</b> tied to a new <b>five-year deal to 2029</b>, the most important signature of all. The hierarchy are ready to back him with a budget reported up to <b>£100m</b> to deepen a squad for a multi-front assault, with midfield a clear focus (Lamine Camara among the targets). The flip side: prized assets like Morgan Rogers draw elite interest.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Monchi</b> (President of Football Ops)</span>
      <span>HEAD COACH: <b>Unai Emery</b></span>
      <span>OWNER: <b>NSWE (Sawiris &amp; Edens)</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">4<small>th</small></div></div>
    <div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£70-120<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£60-120<small>m</small></div></div>
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
        <p>An <b>Emery-led, structured</b> build under president of football operations <b>Monchi</b>, backed by owners NSWE. The model blends shrewd value signings with selective marquee additions, and Emery's record of developing midfielders shapes the targeting.</p>
        <div class="quote">Fresh from Europa League glory and Champions League qualification, the hierarchy are ready to back Emery with a budget reported up to £100m for "another assault on Europe's elite".</div>
        <p><b>This window's logic:</b> add genuine depth for a multi-competition season, with central midfield the priority.</p>
        <ul>
          <li>Targets linked: Lamine Camara (Monaco), Ilaix Moriba (Celta); Rashford tracked.</li>
          <li>Markets: top European leagues, Emery's Spanish and French network.</li>
          <li>Watch: elite interest in prized assets (Morgan Rogers) is the main exit risk.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> upgrade midfield and depth profiles that fit Emery; the key exits are holder-priced and only move at a premium.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Owned by <b>NSWE</b> (Nassef Sawiris and Wes Edens), Villa now operate at the top level but must manage the cost rules carefully after sustained investment.</p>
        <ul>
          <li>Champions League income is large, but the <b>70% European cost cap</b> bites.</li>
          <li>Player-trading (including, potentially, a prized asset) may fund the biggest buys.</li>
          <li>A reported ~£100m budget signals genuine ambition within the rules.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> to spend big at the top, Villa may have to cash in on one marquee asset.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">Champions League football and Europa League glory make Villa a serious draw, but the 70% cap and elite interest in their best players cut both ways.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>European champions and a Champions League side under a top coach: Villa's standing has never been higher in the modern era, and Emery's renewal cements it.</p>
        <ul>
          <li>Champions League football is a powerful pull for midfield targets like Camara.</li>
          <li>Emery's development record attracts ambitious players.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> success puts Morgan Rogers and others in the shop window, with Arsenal and others circling.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue, but only 70% for clubs in European competition</b>. European football lifts revenue yet tightens the ratio, so it is a genuine trade-off, not a pure positive.</p>
        <p>Villa's rise means amortisation and wages are high, so a marquee sale may be needed to fund a marquee buy.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation.</li>
          <li>Selling one prized asset at a premium can unlock multiple additions.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: building on Europa glory toward the Champions League</h5>
        <ul>
          <li>A deep, Emery-coached squad could go far in Europe's top competition.</li>
          <li>The ~£100m backing signals genuine title-and-Europe ambition.</li>
          <li>Keeping Emery long-term anchors the whole project.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: the cost-cap squeeze</h5>
        <ul>
          <li>The 70% cap limits how much can be added without sales.</li>
          <li>Losing a Morgan Rogers would weaken the attack even if it funds others.</li>
          <li>Champions League rotation demands depth the squad still needs.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> back Emery to deepen the squad (midfield first), keep the spine together, and be ready to cash in on one prized asset at a premium if a marquee target demands it, all within the 70% cap.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; nothing is registered yet.</b> The key signature is already secured: <b>Emery's</b> new deal to 2029. Midfield targets (Lamine Camara, Ilaix Moriba) and the futures of prized assets (Morgan Rogers) are live but unsigned, and enter the ledger only on announcement.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Monchi network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: Villa price their best under a holder's premium.</b> Long contracts, heavy minutes, multi-club interest and Champions League pull lift fees above consensus, which is exactly why a Morgan Rogers would command a fee in excess of £80m. Fringe and surplus names move at softer floors to fund upgrades and protect the cost ratio.
    `,
  excludedNote: `<b>Excluded as stale:</b> recycled 2025-window links and pre-renewal Emery-to-elsewhere speculation are not live; Emery has signed to 2029.`,
  spendIn: { v: `£70-120m`, x: `Midfield and depth for a Champions League campaign; a reported budget up to £100m.` },
  spendOut: { v: `£60-120m`, x: `Fringe sales plus, potentially, one prized asset (Rogers) at a premium to fund the biggest buys.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic. <i>Used for:</i> Emery's new deal, Champions League qualification, the Rogers interest.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, reliable national writers; OneFootball/Yahoo on the Camara battle.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, Birmingham Mail and the Villa beat, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Monchi network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom and Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b>: the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window: fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
