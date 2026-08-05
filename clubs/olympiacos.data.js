/* ============================================================
   MERCATO IQ · CLUB DATA · OLYMPIACOS FC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Olympiacos FC",
  mono: "OLY",
  slug: "olympiacos",
  primary: "#CC0000",
  primaryBright: "#CC0000",
  primaryDeep: "#CC0000",
  primaryRgb: "100,100,100",
  breadcrumb: ["Greece", "Super League"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Jaime Pacheco",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "1st Super League (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Olympiacos FC transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Olympiacos FC"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Chiquinho", sub:"26 · LB · Portugal", club:"Guimarães", pos:"LB", report:"1 Aug 2026", src:"Sky Sports", tier:2, fee:"€8m", truth:62, prob:48, note:"Sky reports Olympiacos interest in Portuguese left-back.", lastSeen:"2026-08-04T19:10:50Z", baseProb:48}
];

const OUTGOING = [
  {name:"Francisco Ortega", sub:"27 · LB", club:"River Plate", pos:"LB", report:"23 Jul 2026", src:"Nicolo Schira", tier:2, fee:"~€7m asking price", truth:45, prob:20, light:"o", trend:"flat", note:"Early-stage talks opened; Ortega's contract with Olympiacos runs to 2028.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"},
  nicoloSchiraviaSporting24NewsFranciscoOrtega: {l:"Nicolo Schira (via Sporting24News)", u:"https://sporting24news.gr/"}};

const LINKMAP = {
  "Chiquinho": ["sky"],
  "Francisco Ortega": ["nicoloSchiraviaSporting24NewsFranciscoOrtega"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Olympiacos FC · 2026/27 Season`,
  heroLede: `Transfer window active. Olympiacos FC preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
