/* ============================================================
   MERCATO IQ · CLUB DATA · US CREMONESE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "US Cremonese", mono: "UC", slug: "cremonese",
  primary: "#B30000", primaryBright: "#FF6259", primaryDeep: "#6B0000",
  primaryRgb: "179,0,0",
  breadcrumb: ["Italy","Serie B"]
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
  queries: ["cremonese transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Leonardo Sernicola", sub:"DF", club:"Benevento", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sold to Benevento on a deal through 2029."}
];
const INCOMING = [
  {name:"Andrea Sottil", sub:"Manager", club:"Undisclosed", pos:"MGR", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"N/A", truth:50, prob:35, light:'y', trend:'flat', note:"Managerial candidate reported for the vacant post following the sporting director's departure, not yet confirmed."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Cremonese Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `US Cremonese · 2026/27 Season`,
  heroLede: `Transfer window active. US Cremonese preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};