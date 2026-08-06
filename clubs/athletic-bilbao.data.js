/* ============================================================
   MERCATO IQ · CLUB DATA · ATHLETIC BILBAO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Athletic Bilbao", mono: "AB", slug: "athletic-bilbao",
  primary: "#EE2523", primaryBright: "#FF6259", primaryDeep: "#8F0E0D",
  primaryRgb: "238,37,35",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Edin Terzić (appointed May 2026, replacing Ernesto Valverde)",
  dof: "Mikel González (Sporting Director)",
  europe: "None for 2026/27",
  finish: "12th La Liga (2025/26), 45pts",
  owner: "Member-owned (Athletic Club), Jon Uriarte President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.futbolfantasy.com/mercado-de-fichajes-del-athletic-altas-bajas/verano-2026", "https://www.eldesmarque.com/futbol/mercado-de-fichajes/"],
  queries: ["Athletic Club fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Athletic Bilbao"
};

const CONFIRMED_IN = [
  {name:"Aymeric Laporte", sub:"Centre-back, Spanish, 32", club:"Al-Nassr", pos:"CB", fee:"Free/mutual termination", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Long-running saga finally resolved after FIFA-related complications; Laporte is back at San Mamés. Athletic have since reportedly placed a very high (c.€87m release-clause-style) valuation on him to ward off suitors such as Barcelona."}
];

const CONFIRMED_OUT = [
  {name:"Unai Gómez", sub:"22 · FW · Spain", club:"Udinese", pos:"FW", fee:"~€4.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official as of 8 July 2026 - the young forward moves to Serie A for regular first-team football."},
  {name:"Urko Izeta", sub:"22 · CB · Spain", club:"Cádiz", pos:"CB", fee:"~€1.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official as of 10 July 2026."},
  {name:"Íñigo Lekue", sub:"33 · RB · Spain", club:"Retired", pos:"RB", fee:"N/A", free:true, status:"done", statusTxt:"DONE, RETIRED", note:"Announced 11 May 2026 - Lekue hangs up his boots after a long career at San Mamés."},
  {name:"Mikel Vesga", sub:"Defensive midfielder, Spanish, 33", club:"Almería", pos:"CDM", fee:"Undisclosed (low/nominal)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ends a ten-season Athletic career; Almería had been tracking him for weeks before the clubs reached agreement in early August."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Ibai Sanz", sub:"19 · FW · Spain", club:"Sporting Gijón (loan interest)", pos:"FW", report:"26 May 2026", src:"El Desmarque", tier:2, fee:"Loan", truth:55, prob:35, light:"y", trend:"flat", note:"Athletic exploring a loan to Segunda side Sporting Gijón for the promising academy striker to gain senior minutes; the club extended his contract to 2029 as a show of faith first.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Nico Williams", sub:"Left winger, Spanish, 24", club:"Arsenal", pos:"LW", report:"Arsenal have renewed contact with Athletic over Williams and are in a straight fight with Liverpool for the winger, per multiple reports through late July.", src:"Fichajes / The 4th Official", tier:3, fee:"", truth:45, prob:25, light:"o", trend:"flat", note:"Williams signed a long-term Athletic contract (through 2035) with a very high release clause; recurring rumour that has followed him for over a year without a concrete move materialising.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Oihan Sancet", sub:"Attacking midfielder, Spanish, 25", club:"Manchester United", pos:"CAM", report:"Manchester United have been reported as leading the race for Sancet, with Athletic determined to fight to keep their key creative midfielder.", src:"Yahoo Sports", tier:3, fee:"", truth:35, prob:20, light:"o", trend:"flat", note:"Most recent reporting on this specific link is several months old; treat as a background storyline rather than an active deadline-day rumour.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];
const DEAD = [];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Edin Terzić's first Athletic window has so far been shaped by academy departures (Unai Gómez, Urko Izeta) and Lekue's retirement rather than senior incoming signings - no confirmed first-team arrivals as of 3 August 2026."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Squad depth generally", w:30, x:"No headline incoming activity yet; club appears to be assessing needs under its new head coach before committing to fees."}
];

const WATCHLIST = [];

const HUB = {
  "eldesmarque-athletic": {l:"El Desmarque - Athletic Club transfer market", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260526/athletic-club-plan-canterano-fichaje-laliga-hypermotion_18_019268841.html"},
  "futbolfantasy-athletic": {l:"FútbolFantasy - Athletic Club transfer tracker", u:"https://www.futbolfantasy.com/mercado-de-fichajes-del-athletic-altas-bajas/verano-2026"},
  yahooSportsviaThe4thOfficialNicoWilliams: {l:"Yahoo Sports (via The 4th Official)", u:"https://sports.yahoo.com/articles/arsenal-mix-sign-la-liga-192000096.html"},
  yahooSportsOihanSancet: {l:"Yahoo Sports", u:"https://sports.yahoo.com/"},
  footballEspaaAymericLaporte: {l:"Football España", u:"https://www.football-espana.net/"},
  cadenaSERviaYahooSportsMundoDeportivoMikelVesga: {l:"Cadena SER (via Yahoo Sports) / Mundo Deportivo", u:"https://sports.yahoo.com/articles/almer-sign-vesga-ten-season-074000177.html"}};

const LINKMAP = {
  "Unai Gómez": ["futbolfantasy-athletic"],
  "Urko Izeta": ["futbolfantasy-athletic"],
  "Íñigo Lekue": ["futbolfantasy-athletic"],
  "Ibai Sanz": ["eldesmarque-athletic"],
  "Nico Williams": ["yahooSportsviaThe4thOfficialNicoWilliams"],
  "Oihan Sancet": ["yahooSportsOihanSancet"],
  "Aymeric Laporte": ["footballEspaaAymericLaporte"],
  "Mikel Vesga": ["cadenaSERviaYahooSportsMundoDeportivoMikelVesga"]};
const WL_LINKMAP = {
  "Ibai Sanz": ["eldesmarque-athletic"]
};

const PROSE = {
  heroH2: `A window about departures and a new dugout, not arrivals`,
  heroLede: `Athletic's biggest summer story is the dugout itself: <b>Edin Terzić</b> replaces long-serving <b>Ernesto Valverde</b>. On the pitch, the confirmed business has all been outgoing - <b>Unai Gómez</b> and <b>Urko Izeta</b> sold, <b>Íñigo Lekue</b> retired - with no senior incoming signings confirmed as of 3 August 2026.`,
  metaRow: `<span>COACH: <b>Edin Terzić</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 confirmed`, x: `No first-team signings yet under Terzić` },
  spendOut: { v: `~€6m received`, x: `Unai Gómez, Urko Izeta fees; Lekue retired` },
  methodLegend: ``
};
