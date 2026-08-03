/* ============================================================
   MERCATO IQ · CLUB DATA · ST JOHNSTONE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "St Johnstone", mono: "STJ", slug: "st-johnstone",
  primary: "#1560BD", primaryBright: "#6FA8FF", primaryDeep: "#0B3060",
  primaryRgb: "21,96,189",
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
  queries: ["st-johnstone transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Daniel Finlayson", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Matty Todd", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Unax Alvarez de Eulate", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Logan Chalmers", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Nieuwenhof", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing following the club's promotion back to the Premiership."}
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
  "gnews-danielfinlayson": {l:"Related news search: Daniel Finlayson", u:"https://news.google.com/search?q=St%20Johnstone%20Daniel%20Finlayson%20transfer&hl=en-GB&gl=GB"},
  "gnews-mattytodd": {l:"Related news search: Matty Todd", u:"https://news.google.com/search?q=St%20Johnstone%20Matty%20Todd%20transfer&hl=en-GB&gl=GB"},
  "gnews-unaxalvarezdeeulate": {l:"Related news search: Unax Alvarez de Eulate", u:"https://news.google.com/search?q=St%20Johnstone%20Unax%20Alvarez%20de%20Eulate%20transfer&hl=en-GB&gl=GB"},
  "gnews-loganchalmers": {l:"Related news search: Logan Chalmers", u:"https://news.google.com/search?q=St%20Johnstone%20Logan%20Chalmers%20transfer&hl=en-GB&gl=GB"},
  "gnews-nieuwenhof": {l:"Related news search: Nieuwenhof", u:"https://news.google.com/search?q=St%20Johnstone%20Nieuwenhof%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Daniel Finlayson": ["gnews-danielfinlayson"],
  "Matty Todd": ["gnews-mattytodd"],
  "Unax Alvarez de Eulate": ["gnews-unaxalvarezdeeulate"],
  "Logan Chalmers": ["gnews-loganchalmers"],
  "Nieuwenhof": ["gnews-nieuwenhof"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `St Johnstone · 2026/27 Season`,
  heroLede: `Transfer window active. St Johnstone preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
