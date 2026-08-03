/* ============================================================
   MERCATO IQ · CLUB DATA · FEYENOORD ROTTERDAM · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Feyenoord Rotterdam",
  mono: "FEY",
  slug: "feyenoord",
  primary: "#CC0000",
  primaryBright: "#CC0000",
  primaryDeep: "#CC0000",
  primaryRgb: "100,100,100",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Arne Slot",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "3rd Eredivisie (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Feyenoord Rotterdam transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Feyenoord Rotterdam"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Jarrad Branthwaite", sub:"21 · CB · England", club:"Everton", pos:"CB", report:"31 Jul 2026", src:"Sky Sports", tier:2, fee:"€40m loan option", truth:58, prob:42, note:"Sky reports Feyenoord in loan discussions with Everton for young defender."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"}
};

const LINKMAP = {
  "Jarrad Branthwaite": ["sky"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Feyenoord Rotterdam · 2026/27 Season`,
  heroLede: `Transfer window active. Feyenoord Rotterdam preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
