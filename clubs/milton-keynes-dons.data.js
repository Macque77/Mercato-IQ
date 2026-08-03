/* ============================================================
   MERCATO IQ · CLUB DATA · MILTON KEYNES DONS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Milton Keynes Dons", mono: "MKD", slug: "milton-keynes-dons",
  primary: "#0D1B3E", primaryBright: "#6E8CFF", primaryDeep: "#060D1F",
  primaryRgb: "13,27,62",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Promoted from League Two (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["milton-keynes-dons transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
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
  club: {l:"Milton Keynes Dons Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Milton Keynes Dons · 2026/27 Season`,
  heroLede: `Transfer window active. Milton Keynes Dons preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
