/* ============================================================
   MERCATO IQ · CLUB DATA · PETERBOROUGH UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Peterborough United", mono: "PU", slug: "peterborough-united",
  primary: "#0033A0", primaryBright: "#6EA8FF", primaryDeep: "#001A52",
  primaryRgb: "0,51,160",
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
  queries: ["peterborough-united transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Kyreece Lisbie", sub:"W", club:"Colchester United", pos:"W", report:"~1 wk ago", src:"Various", tier:3, fee:"Six-figure fee", truth:55, prob:45, light:'y', trend:'flat', note:"Peterborough reportedly leading Reading in the race for the 11-goal winger."},
  {name:"Harry Ashfield", sub:"FW", club:"Undisclosed", pos:"FW", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:40, prob:30, light:'y', trend:'flat', note:"Competing with Barnsley, with a Wrexham complication reported."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Peterborough United Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Peterborough United · 2026/27 Season`,
  heroLede: `Transfer window active. Peterborough United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
