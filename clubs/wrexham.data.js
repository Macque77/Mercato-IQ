/* ============================================================
   MERCATO IQ · CLUB DATA · WREXHAM · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Wrexham", mono: "WRX", slug: "wrexham",
  primary: "#C8102E", primaryBright: "#FF6B6B", primaryDeep: "#6E0A1A",
  primaryRgb: "200,16,46",
  breadcrumb: ["Wales","Championship"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "2nd consecutive season in Championship (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["wrexham transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Paul Mullin", sub:"ST", club:"Released", pos:"ST", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract terminated by mutual consent."},
  {name:"Tom O'Connor", sub:"MF", club:"Released", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract terminated by mutual consent."}
];
const INCOMING = [
  {name:"Anthony Patterson", sub:"GK", club:"Sunderland", pos:"GK", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:25, light:'o', trend:'flat', note:"Freshly promoted Wrexham exploring goalkeeping options; nothing concrete lodged yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-paulmullin": {l:"Related news search: Paul Mullin", u:"https://news.google.com/search?q=Wrexham%20Paul%20Mullin%20transfer&hl=en-GB&gl=GB"},
  "gnews-tomoconnor": {l:"Related news search: Tom O'Connor", u:"https://news.google.com/search?q=Wrexham%20Tom%20O%27Connor%20transfer&hl=en-GB&gl=GB"},
  "gnews-anthonypatterson": {l:"Related news search: Anthony Patterson", u:"https://news.google.com/search?q=Wrexham%20Anthony%20Patterson%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Paul Mullin": ["gnews-paulmullin"],
  "Tom O'Connor": ["gnews-tomoconnor"],
  "Anthony Patterson": ["gnews-anthonypatterson"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wrexham · 2026/27 Season`,
  heroLede: `Transfer window active. Wrexham preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
