/* ============================================================
   MERCATO IQ · CLUB DATA · PAS GIANNINA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "PAS Giannina", mono: "PG", slug: "pg-asteras",
  primary: "#003DA5", primaryBright: "#3399FF", primaryDeep: "#001F4D",
  primaryRgb: "0,61,165",
  breadcrumb: ["Greece","Super League U19"]
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
  queries: ["pg-asteras transfer news"]
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
  club: {l:"Pg-Asteras Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `PAS Giannina · 2026/27 Season`,
  heroLede: `Transfer window active. PAS Giannina preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};