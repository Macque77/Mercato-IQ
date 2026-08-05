/* ============================================================
   MERCATO IQ · CLUB DATA · TERNANA · STATE OF RECORD
   ------------------------------------------------------------
   FLAG (03 Aug 2026, single-source, needs re-verification): one
   source indicates Ternana was officially liquidated on 28 May
   2026, with no successor/phoenix club information available.
   Treated as an unconfirmed lead rather than established fact
   pending a second source - retained in the database with this
   note rather than removed outright.
   ============================================================ */

const BRAND = {
  club: "Ternana", mono: "T", slug: "ternana",
  primary: "#B30000", primaryBright: "#FF6259", primaryDeep: "#6B0000",
  primaryRgb: "179,0,0",
  breadcrumb: ["Italy","Serie C"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "UNVERIFIED: one source reports club liquidated 28 May 2026 - pending re-verification",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["ternana transfer news"]
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
  club: {l:"Ternana Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Ternana · 2026/27 Season`,
  heroLede: `Transfer window active. Ternana preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};