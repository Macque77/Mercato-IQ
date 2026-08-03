/* ============================================================
   MERCATO IQ · CLUB DATA · PEC ZWOLLE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "PEC Zwolle", mono: "PZ", slug: "pec-zwolle",
  primary: "#0057A8", primaryBright: "#5CA9FF", primaryDeep: "#00335F",
  primaryRgb: "0,87,168",
  breadcrumb: ["Netherlands","Eredivisie"]
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
  queries: ["pec-zwolle transfer news"]
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
  club: {l:"Pec-Zwolle Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `PEC Zwolle · 2026/27 Season`,
  heroLede: `Transfer window active. PEC Zwolle preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};