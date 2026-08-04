/* ============================================================
   MERCATO IQ · CLUB DATA · BROMLEY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bromley", mono: "BRO", slug: "bromley",
  primary: "#1C2B4A", primaryBright: "#8FA8FF", primaryDeep: "#0E1626",
  primaryRgb: "28,43,74",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Promoted from League Two (champions, 2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["bromley transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Tiernan Brooks", sub:"GK", club:"Gateshead", pos:"GK", report:"~9 months ago", src:"Various", tier:4, fee:"Undisclosed", truth:30, prob:15, light:'o', trend:'flat', note:"Named among four monitoring clubs in a stale article, unconfirmed whether still live.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-tiernanbrooks": {l:"Related news search: Tiernan Brooks", u:"https://news.google.com/search?q=Bromley%20Tiernan%20Brooks%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Tiernan Brooks": ["gnews-tiernanbrooks"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Bromley · 2026/27 Season`,
  heroLede: `Transfer window active. Bromley preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
