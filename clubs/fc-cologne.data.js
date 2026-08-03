/* ============================================================
   MERCATO IQ · CLUB DATA · FC COLOGNE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Cologne",
  mono: "FC ",
  slug: "fc-cologne",
  primary: "#EC2029",
  primaryBright: "#EC2029",
  primaryDeep: "#EC2029",
  primaryRgb: "100,100,100",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Steffen Baumgart",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "10th Bundesliga (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["FC Cologne transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · FC Cologne"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Mateo Kvasina", sub:"19 · ST · Serbia", club:"Borussia Mönchengladbach", pos:"ST", report:"1 Aug 2026", src:"Sky Deutschland", tier:2, fee:"€8m", truth:62, prob:48, note:"Sky reports Cologne pursuing young striker from Gladbach."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "skydeutschland": {l:"Sky Sport Deutschland", u:"https://sportnews.bz/"}
};

const LINKMAP = {
  "Mateo Kvasina": ["skydeutschland"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Cologne · 2026/27 Season`,
  heroLede: `Transfer window active. FC Cologne preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
