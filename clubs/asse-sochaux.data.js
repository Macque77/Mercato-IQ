/* ============================================================
   MERCATO IQ · CLUB DATA · FC SOCHAUX-MONTBÉLIARD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Sochaux-Montbéliard", mono: "FS", slug: "asse-sochaux",
  primary: "#F4CD1E", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "244,205,30",
  breadcrumb: ["France","Ligue 2"]
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
  queries: ["asse-sochaux transfer news"]
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
  club: {l:"Asse-Sochaux Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Sochaux-Montbéliard · 2026/27 Season`,
  heroLede: `Transfer window active. FC Sochaux-Montbéliard preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};