/* ============================================================
   MERCATO IQ · CLUB DATA · BLACKPOOL · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Blackpool", mono: "BPL", slug: "blackpool",
  primary: "#F58220", primaryBright: "#FFAB5E", primaryDeep: "#8F4B12",
  primaryRgb: "245,130,32",
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
  queries: ["blackpool transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Jay Fulton", sub:"MF", club:"Free agent", pos:"MF", report:"~2 wks ago", src:"FLW opinion", tier:4, fee:"Free", truth:30, prob:20, light:'o', trend:'flat', note:"Speculative return suggested in an opinion piece, nothing reported.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];
const OUTGOING = [
  {name:"Franco Ravizzoli", sub:"GK", club:"Leicester City", pos:"GK", report:"~1 wk ago", src:"FLW", tier:3, fee:"Undisclosed", truth:55, prob:40, light:'y', trend:'flat', note:"Russell Martin connection cited, monitoring stage.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Josh Bowler", sub:"W", club:"Nottingham Forest", pos:"W", report:"~2 wks ago", src:"FLW", tier:3, fee:"Undisclosed", truth:35, prob:25, light:'o', trend:'flat', note:"Status unclear, treat as speculative.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"}
};

const LINKMAP = {
  "Jay Fulton": ["flw"],
  "Franco Ravizzoli": ["flw"],
  "Josh Bowler": ["flw"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Blackpool · 2026/27 Season`,
  heroLede: `Transfer window active. Blackpool preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
