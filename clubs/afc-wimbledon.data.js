/* ============================================================
   MERCATO IQ · CLUB DATA · AFC WIMBLEDON · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AFC Wimbledon", mono: "AFC", slug: "afc-wimbledon",
  primary: "#041E42", primaryBright: "#FFD700", primaryDeep: "#020F21",
  primaryRgb: "4,30,66",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Mid-table League One (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["afc-wimbledon transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ollie Harrison", sub:"MF/FW", club:"Chelsea", pos:"MF", fee:"Undisclosed development fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Youth signing confirmed via club's official channels."}
];
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
  "gnews-ollieharrison": {l:"Related news search: Ollie Harrison", u:"https://news.google.com/search?q=AFC%20Wimbledon%20Ollie%20Harrison%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Ollie Harrison": ["gnews-ollieharrison"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AFC Wimbledon · 2026/27 Season`,
  heroLede: `Transfer window active. AFC Wimbledon preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
