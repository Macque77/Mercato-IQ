/* ============================================================
   MERCATO IQ · CLUB DATA · QUEENS PARK RANGERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Queens Park Rangers", mono: "QPR", slug: "qpr",
  primary: "#1E3A8A", primaryBright: "#6FA8FF", primaryDeep: "#0F1F4A",
  primaryRgb: "30,58,138",
  breadcrumb: ["England","Championship"]
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
  queries: ["qpr transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Glen Kamara", sub:"MF · Finland", club:"Rennes", pos:"MF", fee:"Loan (option to buy)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"BBC confirmation corroborated by prior Fabrizio Romano reporting on the paperwork stage, as solid as EFL transfer news gets."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-glenkamara": {l:"Related news search: Glen Kamara", u:"https://news.google.com/search?q=Queens%20Park%20Rangers%20Glen%20Kamara%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Glen Kamara": ["gnews-glenkamara"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Queens Park Rangers · 2026/27 Season`,
  heroLede: `Transfer window active. Queens Park Rangers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};