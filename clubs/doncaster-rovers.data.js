/* ============================================================
   MERCATO IQ · CLUB DATA · DONCASTER ROVERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Doncaster Rovers", mono: "DR", slug: "doncaster-rovers",
  primary: "#C8102E", primaryBright: "#FF6B7A", primaryDeep: "#6E0A1A",
  primaryRgb: "200,16,46",
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
  queries: ["doncaster-rovers transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Alfie May", sub:"ST", club:"Huddersfield Town", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Deal agreed per credible reporting, pending formal announcement."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Luke Molyneux", sub:"W", club:"Salford City", pos:"W", report:"~1 wk ago", src:"Ben Wignall / FLW", tier:2, fee:"Undisclosed", truth:75, prob:70, light:'g', trend:'up', note:"Exclusive reporting describes the move as closing in."},
  {name:"Owen Bailey", sub:"MF", club:"Sheffield Wednesday / Bradford City", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"Contested by two rival League One clubs."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-alfiemay": {l:"Related news search: Alfie May", u:"https://news.google.com/search?q=Doncaster%20Rovers%20Alfie%20May%20transfer&hl=en-GB&gl=GB"},
  "src-benwignall": {l:"Ben Wignall", u:"https://news.google.com/search?q=Ben%20Wignall%20Doncaster%20Rovers%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  "gnews-owenbailey": {l:"Related news search: Owen Bailey", u:"https://news.google.com/search?q=Doncaster%20Rovers%20Owen%20Bailey%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Alfie May": ["gnews-alfiemay"],
  "Luke Molyneux": ["src-benwignall", "flw"],
  "Owen Bailey": ["gnews-owenbailey"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Doncaster Rovers · 2026/27 Season`,
  heroLede: `Transfer window active. Doncaster Rovers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
