/* ============================================================
   MERCATO IQ · CLUB DATA · READING · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Reading", mono: "R", slug: "reading",
  primary: "#004494", primaryBright: "#5CA9FF", primaryDeep: "#00285C",
  primaryRgb: "0,68,148",
  breadcrumb: ["England","League One"]
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
  queries: ["reading transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Udoka Godwin-Malife", sub:"DF", club:"Burton Albion", pos:"DF", report:"~1 wk ago", src:"Pete O'Rourke", tier:2, fee:"Undisclosed", truth:85, prob:85, light:'g', trend:'up', note:"Medical reported underway for the Burton captain, about as advanced as it gets before an announcement."},
  {name:"Kyreece Lisbie", sub:"W", club:"Colchester United", pos:"W", report:"~1 wk ago", src:"Various", tier:3, fee:"Six-figure fee", truth:55, prob:45, light:'y', trend:'flat', note:"Competing with Peterborough United for the winger."}
];
const OUTGOING = [
  {name:"Andy Rinomhota", sub:"MF", club:"Sheffield Wednesday", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"Interest described as a sensible fit."},
  {name:"Charlie Savage", sub:"MF", club:"Cardiff City", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:55, prob:40, light:'y', trend:'flat', note:"Cardiff reportedly ahead of Sheffield Wednesday in the race."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Reading Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Reading · 2026/27 Season`,
  heroLede: `Transfer window active. Reading preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};