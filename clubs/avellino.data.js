/* ============================================================
   MERCATO IQ · CLUB DATA · US AVELLINO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "US Avellino", mono: "UA", slug: "avellino",
  primary: "#00843D", primaryBright: "#3FCB8C", primaryDeep: "#00532A",
  primaryRgb: "0,132,61",
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
  queries: ["avellino transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Filippo Scotti", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."}
];
const CONFIRMED_OUT = [
  {name:"Giuseppe Panico", sub:"Undisclosed", club:"Foggia", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit."},
  {name:"Gianmarco Todisco", sub:"Undisclosed", club:"Foggia", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit."},
  {name:"Andrea Cagnano", sub:"Undisclosed", club:"Arezzo", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit."}
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
  "gnews-filipposcotti": {l:"Related news search: Filippo Scotti", u:"https://news.google.com/search?q=US%20Avellino%20Filippo%20Scotti%20transfer&hl=en-GB&gl=GB"},
  "gnews-giuseppepanico": {l:"Related news search: Giuseppe Panico", u:"https://news.google.com/search?q=US%20Avellino%20Giuseppe%20Panico%20transfer&hl=en-GB&gl=GB"},
  "gnews-gianmarcotodisco": {l:"Related news search: Gianmarco Todisco", u:"https://news.google.com/search?q=US%20Avellino%20Gianmarco%20Todisco%20transfer&hl=en-GB&gl=GB"},
  "gnews-andreacagnano": {l:"Related news search: Andrea Cagnano", u:"https://news.google.com/search?q=US%20Avellino%20Andrea%20Cagnano%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Filippo Scotti": ["gnews-filipposcotti"],
  "Giuseppe Panico": ["gnews-giuseppepanico"],
  "Gianmarco Todisco": ["gnews-gianmarcotodisco"],
  "Andrea Cagnano": ["gnews-andreacagnano"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `US Avellino · 2026/27 Season`,
  heroLede: `Transfer window active. US Avellino preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};