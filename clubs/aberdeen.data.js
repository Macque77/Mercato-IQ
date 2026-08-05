/* ============================================================
   MERCATO IQ · CLUB DATA · ABERDEEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Aberdeen", mono: "ABE", slug: "aberdeen",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
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
  queries: ["aberdeen transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Connor Ronan", sub:"MF", club:"Colorado Rapids", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer confirmed."},
  {name:"Marius Muller", sub:"GK", club:"VfL Wolfsburg", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent signing, competing with Dimitar Mitov for the gloves."},
  {name:"Chris Cadden", sub:"DF", club:"Hibernian", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move, already made his debut in a win over Hearts."},
  {name:"Ayoub Mouloua", sub:"ST", club:"Undisclosed", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Moroccan striker, permanent signing."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-connorronan": {l:"Related news search: Connor Ronan", u:"https://news.google.com/search?q=Aberdeen%20Connor%20Ronan%20transfer&hl=en-GB&gl=GB"},
  "gnews-mariusmuller": {l:"Related news search: Marius Muller", u:"https://news.google.com/search?q=Aberdeen%20Marius%20Muller%20transfer&hl=en-GB&gl=GB"},
  "gnews-chriscadden": {l:"Related news search: Chris Cadden", u:"https://news.google.com/search?q=Aberdeen%20Chris%20Cadden%20transfer&hl=en-GB&gl=GB"},
  "gnews-ayoubmouloua": {l:"Related news search: Ayoub Mouloua", u:"https://news.google.com/search?q=Aberdeen%20Ayoub%20Mouloua%20transfer&hl=en-GB&gl=GB"},
  thePressandJournalConnorRonan: {l:"The Press and Journal", u:"https://www.pressandjournal.co.uk/tag/transfers/"}};

const LINKMAP = {
  "Connor Ronan": ["gnews-connorronan", "thePressandJournalConnorRonan"],
  "Marius Muller": ["gnews-mariusmuller"],
  "Chris Cadden": ["gnews-chriscadden"],
  "Ayoub Mouloua": ["gnews-ayoubmouloua"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Aberdeen · 2026/27 Season`,
  heroLede: `Transfer window active. Aberdeen preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
