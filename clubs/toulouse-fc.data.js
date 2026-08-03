/* ============================================================
   MERCATO IQ · CLUB DATA · TOULOUSE FC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Toulouse FC", mono: "TF", slug: "toulouse-fc",
  primary: "#6B1E3F", primaryBright: "#B0475A", primaryDeep: "#3E0F21",
  primaryRgb: "107,30,63",
  breadcrumb: ["France","Ligue 1"]
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
  queries: ["toulouse-fc transfer news"]
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
  club: {l:"Toulouse-Fc Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Toulouse FC · 2026/27 Season`,
  heroLede: `Transfer window active. Toulouse FC preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};