/* ============================================================
   MERCATO IQ · CLUB DATA · MANSFIELD TOWN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Mansfield Town", mono: "MT", slug: "mansfield-town",
  primary: "#1B3A6B", primaryBright: "#FFC846", primaryDeep: "#0D1D36",
  primaryRgb: "27,58,107",
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
  queries: ["mansfield-town transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"David McGoldrick", sub:"ST", club:"Barnsley", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:35, prob:20, light:'o', trend:'flat', note:"Barnsley reportedly confident he stays, so treat as a long shot.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-davidmcgoldrick": {l:"Related news search: David McGoldrick", u:"https://news.google.com/search?q=Mansfield%20Town%20David%20McGoldrick%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "David McGoldrick": ["gnews-davidmcgoldrick"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Mansfield Town · 2026/27 Season`,
  heroLede: `Transfer window active. Mansfield Town preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
