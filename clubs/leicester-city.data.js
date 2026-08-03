/* ============================================================
   MERCATO IQ · CLUB DATA · LEICESTER CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Leicester City", mono: "LC", slug: "leicester-city",
  primary: "#003090", primaryBright: "#4D8FFF", primaryDeep: "#001A4D",
  primaryRgb: "0,48,144",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Relegated from Championship (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["leicester-city transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Admir Bristric", sub:"ST", club:"Olimpija Ljubljana (on loan at Bravo)", pos:"ST", report:"~2 wks ago", src:"Planet Nogomet / FLW", tier:2, fee:"€1.7-2m", truth:80, prob:85, light:'g', trend:'up', note:"Player already in England for a medical per reporting."},
  {name:"Tommy Watson", sub:"W", club:"Brighton", pos:"W", report:"~3 days ago", src:"@SportsPeteO / FLW", tier:2, fee:"Loan", truth:75, prob:75, light:'g', trend:'up', note:"Loan agreement reportedly reached."},
  {name:"Liam Cullen", sub:"ST", club:"Swansea City", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:55, prob:45, light:'y', trend:'up', note:"Departure described as imminent."},
  {name:"Dom Ballard", sub:"FW", club:"Leyton Orient", pos:"FW", report:"~1 wk ago", src:"FLW", tier:3, fee:"£5m+", truth:45, prob:35, light:'y', trend:'flat', note:"Contested with Bristol City, valuation a sticking point."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Leicester City Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Leicester City · 2026/27 Season`,
  heroLede: `Transfer window active. Leicester City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
