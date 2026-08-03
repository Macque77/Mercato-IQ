/* ============================================================
   MERCATO IQ · CLUB DATA · MOTHERWELL · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Motherwell", mono: "MOT", slug: "motherwell",
  primary: "#740A28", primaryBright: "#FDB913", primaryDeep: "#420617",
  primaryRgb: "116,10,40",
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
  queries: ["motherwell transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Elijah Just", sub:"W", club:"Swansea City", pos:"W", fee:"Club-record fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit, a record fee for the club, three-year deal plus option for Swansea."}
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
  club: {l:"Motherwell Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Motherwell · 2026/27 Season`,
  heroLede: `Transfer window active. Motherwell preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
