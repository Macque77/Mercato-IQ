/* ============================================================
   MERCATO IQ · CLUB DATA · CALCIO CATANIA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Calcio Catania", mono: "CC", slug: "calcio-catania",
  primary: "#0057A8", primaryBright: "#5CA9FF", primaryDeep: "#00335F",
  primaryRgb: "0,87,168",
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
  queries: ["calcio-catania transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Catello Amendola", sub:"MF", club:"Sassuolo", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."}
];
const CONFIRMED_OUT = [
  {name:"Gregorio Luperini", sub:"MF", club:"Undisclosed", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed departure, destination not specified."}
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
  club: {l:"Calcio-Catania Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Calcio Catania · 2026/27 Season`,
  heroLede: `Transfer window active. Calcio Catania preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};