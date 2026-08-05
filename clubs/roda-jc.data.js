/* ============================================================
   MERCATO IQ · CLUB DATA · RODA JC KERKRADE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Roda JC Kerkrade", mono: "RJK", slug: "roda-jc",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
  breadcrumb: ["Netherlands","Eerste Divisie"]
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
  queries: ["roda-jc transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Martin Stojcevic", sub:"GK", club:"Undisclosed", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Fynn Schenten", sub:"FW", club:"Undisclosed (Germany)", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"German attacking talent, confirmed signing."}
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
  "gnews-martinstojcevic": {l:"Related news search: Martin Stojcevic", u:"https://news.google.com/search?q=Roda%20JC%20Kerkrade%20Martin%20Stojcevic%20transfer&hl=en-GB&gl=GB"},
  "gnews-fynnschenten": {l:"Related news search: Fynn Schenten", u:"https://news.google.com/search?q=Roda%20JC%20Kerkrade%20Fynn%20Schenten%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Martin Stojcevic": ["gnews-martinstojcevic"],
  "Fynn Schenten": ["gnews-fynnschenten"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Roda JC Kerkrade · 2026/27 Season`,
  heroLede: `Transfer window active. Roda JC Kerkrade preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};