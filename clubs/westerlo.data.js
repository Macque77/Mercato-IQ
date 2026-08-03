/* ============================================================
   MERCATO IQ · CLUB DATA · KVC WESTERLO · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026): this slug previously contained
   mismatched data for a different club (a data-generation bug
   from an earlier automated pass). Corrected to the real club
   this slug represents.
   ============================================================ */

const BRAND = {
  club: "KVC Westerlo", mono: "WES", slug: "westerlo",
  primary: "#FFCC00", primaryBright: "#FFE066", primaryDeep: "#8F7200",
  primaryRgb: "255,204,0",
  breadcrumb: ["Belgium","Pro League"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["KVC Westerlo transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:30:00Z",
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
  club: {l:"KVC Westerlo Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `KVC Westerlo · 2026/27 Season`,
  heroLede: `Transfer window active. KVC Westerlo preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
