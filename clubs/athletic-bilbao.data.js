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

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Unai Gómez", sub:"22 · FW · Spain", club:"Udinese", pos:"FW", fee:"~€4.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official as of 8 July 2026 - the young forward moves to Serie A for regular first-team football."},
  {name:"Urko Izeta", sub:"22 · CB · Spain", club:"Cádiz", pos:"CB", fee:"~€1.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official as of 10 July 2026."},
  {name:"Íñigo Lekue", sub:"33 · RB · Spain", club:"Retired", pos:"RB", fee:"N/A", free:true, status:"done", statusTxt:"DONE, RETIRED", note:"Announced 11 May 2026 - Lekue hangs up his boots after a long career at San Mamés."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Ibai Sanz", sub:"19 · FW · Spain", club:"Sporting Gijón (loan interest)", pos:"FW", report:"26 May 2026", src:"El Desmarque", tier:2, fee:"Loan", truth:55, prob:35, light:"y", trend:"flat", note:"Athletic exploring a loan to Segunda side Sporting Gijón for the promising academy striker to gain senior minutes; the club extended his contract to 2029 as a show of faith first."}
];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Edin Terzić's first Athletic window has so far been shaped by academy departures (Unai Gómez, Urko Izeta) and Lekue's retirement rather than senior incoming signings - no confirmed first-team arrivals as of 3 August 2026."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Squad depth generally", w:30, x:"No headline incoming activity yet; club appears to be assessing needs under its new head coach before committing to fees."}
];

const WATCHLIST = [
  {name:"Ibai Sanz", club:"Sporting Gijón", pos:"FW", dir:"out", age:"~9 weeks", tier:2, note:"Loan interest from Segunda side Sporting Gijón; Athletic weighing whether a lower-tier loan suits his development."}
];

const HUB = {
  "eldesmarque-athletic": {l:"El Desmarque - Athletic Club transfer market", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260526/athletic-club-plan-canterano-fichaje-laliga-hypermotion_18_019268841.html"},
  "futbolfantasy-athletic": {l:"FútbolFantasy - Athletic Club transfer tracker", u:"https://www.futbolfantasy.com/mercado-de-fichajes-del-athletic-altas-bajas/verano-2026"}
};

const LINKMAP = {
  "Unai Gómez": ["futbolfantasy-athletic"],
  "Urko Izeta": ["futbolfantasy-athletic"],
  "Íñigo Lekue": ["futbolfantasy-athletic"],
  "Ibai Sanz": ["eldesmarque-athletic"]
};
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
