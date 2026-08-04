/* ============================================================
   MERCATO IQ · CLUB DATA · WERDER BREMEN · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026 refresh, verified via live search):
   - Removed a fabricated "Niclas Füllkrug free agent contract
     renewal" entry - Füllkrug left Werder for Dortmund in 2023,
     then West Ham (Aug 2024), and has been on loan at AC Milan
     since Jan 2026. He has no connection to Werder this window.
   ============================================================ */

const BRAND = {
  club: "Werder Bremen",
  mono: "WER",
  slug: "werder-bremen",
  primary: "#033D0B",
  primaryBright: "#033D0B",
  primaryDeep: "#033D0B",
  primaryRgb: "100,100,100",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Ole Werner",
  dof: "Peter Niemeyer (Sporting Director)",
  europe: "None (2025/26 - no European qualification)",
  finish: "15th Bundesliga (2025/26)",
  owner: "Member-owned (SV Werder Bremen von 1899 e.V.)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Werder Bremen transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Werder Bremen"
};

const CONFIRMED_IN = [
  {name:"Alexander Schlager", sub:"29 · GK · Austria", to:"free from RB Salzburg", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Austrian international goalkeeper signed on a free transfer, giving Ole Werner senior competition for the No.1 shirt after Backhaus's departure."},
  {name:"Oskar Wójcik", sub:"20 · CM · Poland", to:"permanent from Cracovia", fee:"~€3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young Polish midfielder signed for squad depth."}
];

const CONFIRMED_OUT = [
  {name:"Mio Backhaus", sub:"20 · GK · Germany", to:"permanent to SC Freiburg", club:"SC Freiburg", fee:"~€12m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young goalkeeper sold to a fellow Bundesliga side, prompting the Schlager signing."},
  {name:"Leonardo Bittencourt", sub:"32 · AM · Germany", to:"free to Energie Cottbus", club:"Energie Cottbus", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; experienced attacking midfielder drops down to 3. Liga."}
];

const INCOMING = [
  {name:"Tomas Bobcek", sub:"Polish league's top scorer targeted for the attack", club:"Lechia Gdansk", pos:"ST", report:"Werder are reportedly already in negotiations with Lechia Gdansk for Bobcek after the 24-year-old Slovak finished as the Ekstraklasa's top scorer with 20 goals last season.", src:"meczyki.pl", tier:1, fee:"Valued at ~€8m, talk of a €10m deal", truth:70, prob:55, light:"g", trend:"flat", note:"Werder have shown a recent pattern of recruiting from Poland, having already signed defender Oskar Wojcik this summer."},
  {name:"Jordan Holsgrove", sub:"Scottish midfielder eyed as a cut-price alternative", club:"GD Estoril Praia", pos:"CDM", report:"Werder are exploring a move for the Scottish midfielder as a more affordable option than top target Cameron Puertas to solve their engine-room needs.", src:"The Daily Telegraph", tier:2, fee:"Valued at ~€5m", truth:60, prob:35, light:"y", trend:"flat", note:"Holsgrove, 26, registered 8 assists last season in Portugal and is also drawing interest from four English Championship clubs including Charlton Athletic; contracted at Estoril until 2028."},
  {name:"Eren Dinkci", sub:"Bremen-born forward hints at a return home", club:"SC Freiburg", pos:"ST", report:"Werder are considering re-signing the Bremen-born forward, who fuelled speculation himself by saying he wants to 'score a goal at the Weserstadion.'", src:"DeichStube", tier:2, fee:"Not specified", truth:60, prob:35, light:"y", trend:"flat", note:"Dinkci previously came through Werder's system before moving to Freiburg; a boyhood-club return narrative is fuelling the speculation."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [
  {ar:"✕", t:"<b>Niclas Füllkrug 'free agent' contract renewal</b>: incorrect - Füllkrug has been at West Ham United since August 2024 and is currently on loan at AC Milan; he has no live connection to Werder Bremen this window."}
];

const POSITIONS = [
  {p:"Goalkeeper", w:20, x:"Schlager brought in to replace the sold Backhaus."}
];

const WATCHLIST = [];

const HUB = {
  "kicker": {l:"Kicker", u:"https://www.kicker.de/"},
  meczykiplviaWeserKurierTomasBobcek: {l:"meczyki.pl (via Weser Kurier)", u:"https://weser-kurier.de/werder/profis/transfergeruecht-will-werder-einen-torschuetzenkoenig-holen-doc86y0m68bv6v1iv00059j"},
  theDailyTelegraphviaWeserKurierJordanHolsgrove: {l:"The Daily Telegraph (via Weser Kurier)", u:"https://weser-kurier.de/werder/profis/schottischer-mittelfeldspieler-holsgrove-bei-werder-bremen-im-gespraech-doc86v9798ylkx117docnef"},
  deichStubeviaYahooSportsErenDinkci: {l:"DeichStube (via Yahoo Sports)", u:"https://sports.yahoo.com/articles/dink-hints-bremen-return-want-164900228.html"},
  werderdeofficialAlexanderSchlager: {l:"werder.de (official)", u:"https://www.werder.de/news/maenner/2026-2027/mixed-zone-schlager-30073036"},
  werderdeofficialLeonardoBittencourt: {l:"werder.de (official)", u:"https://www.werder.de/news/maenner/2026-2027/interview-bittencourt-29072026"}};

const LINKMAP = {
  "Tomas Bobcek": ["meczykiplviaWeserKurierTomasBobcek"],
  "Jordan Holsgrove": ["theDailyTelegraphviaWeserKurierJordanHolsgrove"],
  "Eren Dinkci": ["deichStubeviaYahooSportsErenDinkci"],
  "Alexander Schlager": ["werderdeofficialAlexanderSchlager"],
  "Leonardo Bittencourt": ["werderdeofficialLeonardoBittencourt"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Quiet rebuild: Backhaus sold, Schlager signed as Werder look to bounce back from 15th`,
  heroLede: `After a difficult 15th-place finish, Ole Werner's Werder Bremen have sold highly-rated young goalkeeper <b>Mio Backhaus</b> to SC Freiburg for around €12m, immediately replacing him with free-agent Austrian international <b>Alexander Schlager</b> from RB Salzburg. Polish midfielder Oskar Wójcik adds squad depth, while attacking midfielder Leonardo Bittencourt has dropped down to 3. Liga side Energie Cottbus on a free transfer.`,
  metaRow: `<span>DECISION-MAKER: <b>Peter Niemeyer</b> (Sporting Director)</span> <span>HEAD COACH: <b>Ole Werner</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">15<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">2</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  spendIn: { v: `~€3m + one free`, x: `Wójcik (€3m) confirmed; Schlager signed free.` },
  spendOut: { v: `~€12m banked`, x: `Backhaus's sale to Freiburg is the headline fee; Bittencourt left free.` },
  methodLegend: ``
};
