/* ============================================================
   MERCATO IQ · CLUB DATA · FC SCHALKE 04 · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Schalke 04", mono: "FS0", slug: "schalke-04",
  primary: "#004B9F", primaryBright: "#5CA9FF", primaryDeep: "#002E5E",
  primaryRgb: "0,75,159",
  breadcrumb: ["Germany","2. Bundesliga"]
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
  queries: ["schalke-04 transfer news"]
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
  club: {l:"Schalke-04 Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Schalke 04 · 2026/27 Season`,
  heroLede: `Transfer window active. FC Schalke 04 preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};