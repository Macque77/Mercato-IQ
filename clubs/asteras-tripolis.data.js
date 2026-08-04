/* ============================================================
   MERCATO IQ · CLUB DATA · ASTERAS TRIPOLIS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Asteras Tripolis", mono: "AT", slug: "asteras-tripolis",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["Greece","Super League"]
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
  queries: ["asteras-tripolis transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Papakanellos", sub:"21 · MF · Greece", club:"Olympiacos (loan)", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"21-year-old midfielder joins on a season-long loan from Olympiacos."},
  {name:"Brorson", sub:"DF", club:"APOEL FC (Cyprus)", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially announced arrival from the Cypriot champions."}
];
const CONFIRMED_OUT = [
  {name:"Almyras", sub:"Player", club:"Djurgårdens IF", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed departure to the Swedish club."}
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
  club: {l:"Asteras-Tripolis Official", u:"#"},
  gazzettagrPapakanellos: {l:"Gazzetta.gr", u:"https://www.gazzetta.gr/football/superleague/asteras-tripolis"}};

const LINKMAP = {
  "Papakanellos": ["gazzettagrPapakanellos"],
  "Brorson": ["gazzettagrPapakanellos"],
  "Almyras": ["gazzettagrPapakanellos"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Asteras Tripolis · 2026/27 Season`,
  heroLede: `Transfer window active. Asteras Tripolis preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};