/* ============================================================
   MERCATO IQ · CLUB DATA · MSV DUISBURG · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "MSV Duisburg", mono: "MD", slug: "duisburg",
  primary: "#0057A8", primaryBright: "#5CA9FF", primaryDeep: "#00335F",
  primaryRgb: "0,87,168",
  breadcrumb: ["Germany","3. Liga"]
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
  queries: ["duisburg transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Peter Remmert", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing, described as athletic and strong in running."}
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
  "gnews-peterremmert": {l:"Related news search: Peter Remmert", u:"https://news.google.com/search?q=MSV%20Duisburg%20Peter%20Remmert%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Peter Remmert": ["gnews-peterremmert"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `MSV Duisburg · 2026/27 Season`,
  heroLede: `Transfer window active. MSV Duisburg preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};