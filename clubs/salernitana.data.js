/* ============================================================
   MERCATO IQ · CLUB DATA · US SALERNITANA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "US Salernitana", mono: "US", slug: "salernitana",
  primary: "#7A1F2B", primaryBright: "#B0475A", primaryDeep: "#4A121A",
  primaryRgb: "122,31,43",
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
  queries: ["salernitana transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Mastrovito", sub:"Youth", club:"Martina", pos:"YTH", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young prospect, beat competition from Bari for his signature."},
  {name:"Heinz", sub:"MF", club:"Free agent", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Three-year deal."}
];
const CONFIRMED_OUT = [
  {name:"Corriere", sub:"DF", club:"Real Aversa", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loaned out."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Arena", sub:"DF", club:"Trento / Treviso", pos:"DF", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:45, prob:30, light:'y', trend:'flat', note:"Reported interest from both Serie C clubs, no bid confirmed yet."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Salernitana Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `US Salernitana · 2026/27 Season`,
  heroLede: `Transfer window active. US Salernitana preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};