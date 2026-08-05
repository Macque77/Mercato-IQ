/* ============================================================
   MERCATO IQ · CLUB DATA · DUNDEE UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Dundee United", mono: "DU", slug: "dundee-united",
  primary: "#FF6C00", primaryBright: "#FFA55C", primaryDeep: "#8F3C00",
  primaryRgb: "255,108,0",
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
  queries: ["dundee-united transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Jesse Randall", sub:"W", club:"Undisclosed", pos:"W", fee:"Pre-contract", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"New Zealand international, pre-contract agreed."},
  {name:"Joshua Rawlins", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Lachlan Rose", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Summer switch agreed."},
  {name:"Dylan Tait", sub:"MF", club:"Falkirk", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Three-year deal."},
  {name:"Jack Walton", sub:"GK", club:"Undisclosed", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned to the club on a three-year deal."},
  {name:"Michael Forbes", sub:"DF/MF", club:"Undisclosed", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Northern Ireland international signing."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Bowie", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", report:"~1 wk ago", src:"The Scotsman", tier:4, fee:"Undisclosed", truth:30, prob:20, light:'o', trend:'flat', note:"Referenced only in a headline alongside Celtic/Rangers news, insufficient detail to confirm further.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-jesserandall": {l:"Related news search: Jesse Randall", u:"https://news.google.com/search?q=Dundee%20United%20Jesse%20Randall%20transfer&hl=en-GB&gl=GB"},
  "gnews-joshuarawlins": {l:"Related news search: Joshua Rawlins", u:"https://news.google.com/search?q=Dundee%20United%20Joshua%20Rawlins%20transfer&hl=en-GB&gl=GB"},
  "gnews-lachlanrose": {l:"Related news search: Lachlan Rose", u:"https://news.google.com/search?q=Dundee%20United%20Lachlan%20Rose%20transfer&hl=en-GB&gl=GB"},
  "gnews-dylantait": {l:"Related news search: Dylan Tait", u:"https://news.google.com/search?q=Dundee%20United%20Dylan%20Tait%20transfer&hl=en-GB&gl=GB"},
  "gnews-jackwalton": {l:"Related news search: Jack Walton", u:"https://news.google.com/search?q=Dundee%20United%20Jack%20Walton%20transfer&hl=en-GB&gl=GB"},
  "gnews-michaelforbes": {l:"Related news search: Michael Forbes", u:"https://news.google.com/search?q=Dundee%20United%20Michael%20Forbes%20transfer&hl=en-GB&gl=GB"},
  "scotsman": {l:"The Scotsman", u:"https://www.scotsman.com/sport/football"}
};

const LINKMAP = {
  "Jesse Randall": ["gnews-jesserandall"],
  "Joshua Rawlins": ["gnews-joshuarawlins"],
  "Lachlan Rose": ["gnews-lachlanrose"],
  "Dylan Tait": ["gnews-dylantait"],
  "Jack Walton": ["gnews-jackwalton"],
  "Michael Forbes": ["gnews-michaelforbes"],
  "Bowie": ["scotsman"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Dundee United · 2026/27 Season`,
  heroLede: `Transfer window active. Dundee United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
