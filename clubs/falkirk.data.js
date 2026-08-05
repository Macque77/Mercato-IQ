/* ============================================================
   MERCATO IQ · CLUB DATA · FALKIRK · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Falkirk", mono: "FAL", slug: "falkirk",
  primary: "#001E62", primaryBright: "#5C7CFF", primaryDeep: "#000F31",
  primaryRgb: "0,30,98",
  breadcrumb: ["Scotland","Premiership"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Promoted from Championship (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["falkirk transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Dylan Tait", sub:"MF", club:"Dundee United", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent exit on a three-year deal."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Calvin Miller", sub:"Undisclosed", club:"Celtic", pos:"N/A", report:"~5 months ago", src:"MSN", tier:4, fee:"Undisclosed", truth:20, prob:10, light:'r', trend:'flat', note:"Manager John McGlynn has denied the link as nonsense, effectively dead.", lastSeen:"2026-08-04T19:10:50Z", baseProb:10}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-dylantait": {l:"Related news search: Dylan Tait", u:"https://news.google.com/search?q=Falkirk%20Dylan%20Tait%20transfer&hl=en-GB&gl=GB"},
  "src-msn": {l:"MSN", u:"https://news.google.com/search?q=MSN%20Falkirk%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Dylan Tait": ["gnews-dylantait"],
  "Calvin Miller": ["src-msn"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Falkirk · 2026/27 Season`,
  heroLede: `Transfer window active. Falkirk preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
