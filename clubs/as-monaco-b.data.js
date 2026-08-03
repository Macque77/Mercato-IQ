/* ============================================================
   MERCATO IQ · CLUB DATA · AS MONACO B · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026): this slug previously contained
   mismatched data for a different club (a data-generation bug
   from an earlier automated pass). Corrected to the real club
   this slug represents.
   ============================================================ */

const BRAND = {
  club: "AS Monaco B", mono: "ASM", slug: "as-monaco-b",
  primary: "#CE1126", primaryBright: "#FF6B6B", primaryDeep: "#7A0A16",
  primaryRgb: "206,17,38",
  breadcrumb: ["France","Championnat National 3"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 10 Jun; closes 1 Sep 2026, 11pm CET"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["AS Monaco B transfer news"]
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
  club: {l:"AS Monaco B Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AS Monaco B · 2026/27 Season`,
  heroLede: `Transfer window active. AS Monaco B preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
