/* ============================================================
   MERCATO IQ · CLUB DATA · STOCKPORT COUNTY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Stockport County", mono: "SC", slug: "stockport-county",
  primary: "#005BAC", primaryBright: "#6FB2FF", primaryDeep: "#00305C",
  primaryRgb: "0,91,172",
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
  queries: ["stockport-county transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Tyrese Shade / Jayden Wareham", sub:"FW", club:"Undisclosed / Exeter City", pos:"FW", report:"~1 wk ago", src:"Various", tier:4, fee:"Undisclosed", truth:30, prob:20, light:'o', trend:'flat', note:"Floated as possible replacements if Adama Sidibeh departs."},
  {name:"Ossama Ashley", sub:"MF", club:"Free agent", pos:"MF", report:"~1 wk ago", src:"Various", tier:4, fee:"Free", truth:40, prob:30, light:'y', trend:'flat', note:"Competing with Barnsley for the free agent."}
];
const OUTGOING = [
  {name:"Adama Sidibeh", sub:"ST", club:"Middlesbrough / Rangers / Blackburn Rovers / Bristol City", pos:"ST", report:"~1 wk ago", src:"Alan Nixon", tier:3, fee:"Relatively low cost", truth:60, prob:50, light:'y', trend:'flat', note:"Four clubs credited with interest in the Gambia international."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Stockport County Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Stockport County · 2026/27 Season`,
  heroLede: `Transfer window active. Stockport County preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
