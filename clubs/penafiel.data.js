/* ============================================================
   MERCATO IQ · CLUB DATA · FC PENAFIEL · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Penafiel", mono: "FP", slug: "penafiel",
  primary: "#003DA5", primaryBright: "#3399FF", primaryDeep: "#001F4D",
  primaryRgb: "0,61,165",
  breadcrumb: ["Portugal","Liga Portugal 2"]
};

const VOLATILE = {
  verified: "2026-07-29",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["penafiel transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Penafiel Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Penafiel · 2026/27 Season`,
  heroLede: `Transfer window active. FC Penafiel preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};