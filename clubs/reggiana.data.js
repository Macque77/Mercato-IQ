/* ============================================================
   MERCATO IQ · CLUB DATA · REGGIANA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Reggiana", mono: "R", slug: "reggiana",
  primary: "#8B1E3F", primaryBright: "#C0526A", primaryDeep: "#4A0F21",
  primaryRgb: "139,30,63",
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
  queries: ["reggiana transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Michele Castagnetti", sub:"MF", club:"Undisclosed", pos:"MF", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Eyed as a potential replacement for Reinhart amid Reggiana's post-relegation rebuild in Serie C."}
];
const OUTGOING = [
  {name:"Reinhart", sub:"MF", club:"Undisclosed", pos:"MF", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Possible departure reported, nothing confirmed."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "tuttomercato": {l:"Tuttomercatoweb", u:"https://www.tuttomercatoweb.com/"}
};

const LINKMAP = {
  "Michele Castagnetti": ["tuttomercato"],
  "Reinhart": ["tuttomercato"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Reggiana · 2026/27 Season`,
  heroLede: `Transfer window active. Reggiana preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};