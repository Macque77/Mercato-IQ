/* ============================================================
   MERCATO IQ · CLUB DATA · STEVENAGE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Stevenage", mono: "STE", slug: "stevenage",
  primary: "#E30613", primaryBright: "#FF6B6B", primaryDeep: "#7A0309",
  primaryRgb: "227,6,19",
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
  queries: ["stevenage transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Harvey White", sub:"MF", club:"Plymouth Argyle", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Plymouth reportedly backed to complete a deal for the midfielder.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Dan Phillips", sub:"MF", club:"Blackburn Rovers", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Championship side reportedly plotting a move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-harveywhite": {l:"Related news search: Harvey White", u:"https://news.google.com/search?q=Stevenage%20Harvey%20White%20transfer&hl=en-GB&gl=GB"},
  "gnews-danphillips": {l:"Related news search: Dan Phillips", u:"https://news.google.com/search?q=Stevenage%20Dan%20Phillips%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Harvey White": ["gnews-harveywhite"],
  "Dan Phillips": ["gnews-danphillips"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Stevenage · 2026/27 Season`,
  heroLede: `Transfer window active. Stevenage preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
