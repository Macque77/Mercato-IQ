/* ============================================================
   MERCATO IQ · CLUB DATA · COSENZA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Cosenza", mono: "C", slug: "cosenza",
  primary: "#B30000", primaryBright: "#FF6259", primaryDeep: "#6B0000",
  primaryRgb: "179,0,0",
  breadcrumb: ["Italy","Serie C"]
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
  queries: ["cosenza transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Quieto", sub:"MF", club:"Inter Milan", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival of the attacking midfielder."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Pascalau & McJannet", sub:"Various", club:"Undisclosed", pos:"VAR", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:60, prob:55, light:'g', trend:'up', note:"Reported as an imminent double signing for the Girone C promotion-playoff side.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-quieto": {l:"Related news search: Quieto", u:"https://news.google.com/search?q=Cosenza%20Quieto%20transfer&hl=en-GB&gl=GB"},
  "tuttomercato": {l:"Tuttomercatoweb", u:"https://www.tuttomercatoweb.com/"}
};

const LINKMAP = {
  "Quieto": ["gnews-quieto"],
  "Pascalau & McJannet": ["tuttomercato"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Cosenza · 2026/27 Season`,
  heroLede: `Transfer window active. Cosenza preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};