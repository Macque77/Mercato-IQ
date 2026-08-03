/* ============================================================
   MERCATO IQ · CLUB DATA · HIBERNIAN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Hibernian", mono: "HIB", slug: "hibernian",
  primary: "#00643D", primaryBright: "#3FCB8C", primaryDeep: "#003A23",
  primaryRgb: "0,100,61",
  breadcrumb: ["Scotland","Premiership"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "TBD (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["hibernian transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Kerr", sub:"Undisclosed", club:"Wigan Athletic", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Nathan Lowe", sub:"DF", club:"Undisclosed", pos:"DF", fee:"Initial loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Wing-back, arrived initially on loan."}
];
const CONFIRMED_OUT = [
  {name:"Chris Cadden", sub:"DF", club:"Aberdeen", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"See Aberdeen entry."}
];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Hibernian Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Hibernian · 2026/27 Season`,
  heroLede: `Transfer window active. Hibernian preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
