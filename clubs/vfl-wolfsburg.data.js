/* ============================================================
   MERCATO IQ · CLUB DATA · VFL WOLFSBURG · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "VfL Wolfsburg", mono: "VW", slug: "vfl-wolfsburg",
  primary: "#65B32E", primaryBright: "#8FE05C", primaryDeep: "#3B6B1A",
  primaryRgb: "101,179,46",
  breadcrumb: ["Germany","2. Bundesliga"]
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
  queries: ["vfl-wolfsburg transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Konstantinos Koulierakis", sub:"CB · Greece", club:"permanent to AS Roma", pos:"CB", fee:"€17m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Di Marzio posted arrival images; official signing with medicals and signature to follow."}
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
  club: {l:"Vfl-Wolfsburg Official", u:"#"},
  gianlucaDiMarzioKonstantinosKoulierakis: {l:"Gianluca Di Marzio", u:"https://x.com/DiMarzio/status/2083512575757594801"}};

const LINKMAP = {
  "Konstantinos Koulierakis": ["gianlucaDiMarzioKonstantinosKoulierakis"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `VfL Wolfsburg · 2026/27 Season`,
  heroLede: `Transfer window active. VfL Wolfsburg preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};