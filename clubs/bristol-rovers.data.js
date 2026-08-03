/* ============================================================
   MERCATO IQ · CLUB DATA · BRISTOL ROVERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bristol Rovers", mono: "BR", slug: "bristol-rovers",
  primary: "#003DA5", primaryBright: "#3399FF", primaryDeep: "#001F4D",
  primaryRgb: "0,61,165",
  breadcrumb: ["England","League Two"]
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
  queries: ["bristol-rovers transfer news"]
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
  club: {l:"Bristol-Rovers Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Bristol Rovers · 2026/27 Season`,
  heroLede: `Transfer window active. Bristol Rovers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};