/* ============================================================
   MERCATO IQ · CLUB DATA · RANGERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Rangers", mono: "RAN", slug: "rangers",
  primary: "#0033A0", primaryBright: "#5C8DFF", primaryDeep: "#001A52",
  primaryRgb: "0,51,160",
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
  queries: ["rangers transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Lawrence Shankland", sub:"FW", club:"Heart of Midlothian", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing from a direct rival."},
  {name:"Danilo", sub:"DF", club:"NEC Nijmegen", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned after NEC declined to make his loan permanent."},
  {name:"Godfrey", sub:"DF", club:"Atalanta", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ex-Everton defender, loan signing."}
];
const CONFIRMED_OUT = [
  {name:"James Tavernier", sub:"DF", club:"Released", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released as a free agent after MLS talks with Charlotte FC stalled."}
];
const INCOMING = [
  {name:"Jahnoah Markelo", sub:"DF", club:"Coventry City", pos:"DF", report:"~1 wk ago", src:"Sky Sports", tier:2, fee:"Undisclosed", truth:65, prob:55, light:'g', trend:'up', note:"Rangers reportedly in talks for the defender."},
  {name:"Mikey Moore", sub:"W", club:"Tottenham Hotspur", pos:"W", report:"~1 wk ago", src:"The Scotsman", tier:3, fee:"Undisclosed", truth:45, prob:30, light:'y', trend:'flat', note:"Competing with Bundesliga interest, player reportedly told to make a decision."}
];
const OUTGOING = [
  {name:"Nico Raskin", sub:"MF", club:"Undisclosed (managed by Danny Rohl)", pos:"MF", report:"~1 wk ago", src:"Daily Record", tier:3, fee:"Undisclosed", truth:55, prob:40, light:'y', trend:'flat', note:"Reported interest described as jeopardised by a special request."},
  {name:"Unnamed Rangers attacker", sub:"FW", club:"Undisclosed", pos:"FW", report:"~1 wk ago", src:"GlasgowWorld", tier:3, fee:"Undisclosed", truth:50, prob:45, light:'y', trend:'flat', note:"Described as one step away from an Ibrox exit, terms reportedly clear."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-lawrenceshankland": {l:"Related news search: Lawrence Shankland", u:"https://news.google.com/search?q=Rangers%20Lawrence%20Shankland%20transfer&hl=en-GB&gl=GB"},
  "gnews-danilo": {l:"Related news search: Danilo", u:"https://news.google.com/search?q=Rangers%20Danilo%20transfer&hl=en-GB&gl=GB"},
  "gnews-godfrey": {l:"Related news search: Godfrey", u:"https://news.google.com/search?q=Rangers%20Godfrey%20transfer&hl=en-GB&gl=GB"},
  "gnews-jamestavernier": {l:"Related news search: James Tavernier", u:"https://news.google.com/search?q=Rangers%20James%20Tavernier%20transfer&hl=en-GB&gl=GB"},
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"},
  "scotsman": {l:"The Scotsman", u:"https://www.scotsman.com/sport/football"},
  "dailyrecord": {l:"Daily Record", u:"https://www.dailyrecord.co.uk/sport/football/"},
  "glasgowworld": {l:"GlasgowWorld", u:"https://www.glasgowworld.com/sport"}
};

const LINKMAP = {
  "Lawrence Shankland": ["gnews-lawrenceshankland"],
  "Danilo": ["gnews-danilo"],
  "Godfrey": ["gnews-godfrey"],
  "James Tavernier": ["gnews-jamestavernier"],
  "Jahnoah Markelo": ["sky"],
  "Mikey Moore": ["scotsman"],
  "Nico Raskin": ["dailyrecord"],
  "Unnamed Rangers attacker": ["glasgowworld"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Rangers · 2026/27 Season`,
  heroLede: `Transfer window active. Rangers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
