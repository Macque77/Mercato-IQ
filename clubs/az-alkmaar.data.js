/* ============================================================
   MERCATO IQ · CLUB DATA · AZ ALKMAAR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AZ Alkmaar",
  mono: "AZ ",
  slug: "az-alkmaar",
  primary: "#FFEB3B",
  primaryBright: "#FFEB3B",
  primaryDeep: "#FFEB3B",
  primaryRgb: "100,100,100",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Maarten Martens",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "4th Eredivisie (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["AZ Alkmaar transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AZ Alkmaar"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"ESPN reports AZ close to tying <b>Mats Wieffer</b> down to a contract extension even as Borussia Dortmund are separately reported to be pursuing the midfielder - a retention story rather than a confirmed transfer either way."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "espn": {l:"ESPN", u:"https://www.espn.com/soccer/"}
};

const LINKMAP = {
  "Mats Wieffer": ["espn"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AZ Alkmaar · 2026/27 Season`,
  heroLede: `Transfer window active. AZ Alkmaar preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
