/* ============================================================
   MERCATO IQ · CLUB DATA · BURTON ALBION · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Burton Albion", mono: "BA", slug: "burton-albion",
  primary: "#C9A227", primaryBright: "#FFE066", primaryDeep: "#725B12",
  primaryRgb: "201,162,39",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Mid-table League One (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["burton-albion transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Matthew Dennis", sub:"ST", club:"Notts County", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed incoming alongside Notts County's own reported departure."}
];
const CONFIRMED_OUT = [
  {name:"Udoka Godwin-Malife", sub:"DF", club:"Reading", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Captain's move to Reading, medical reported underway."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Jake Beesley", sub:"ST", club:"Bradford City", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"See Bradford City entry, competing with Stockport County."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-matthewdennis": {l:"Related news search: Matthew Dennis", u:"https://news.google.com/search?q=Burton%20Albion%20Matthew%20Dennis%20transfer&hl=en-GB&gl=GB"},
  "gnews-udokagodwinmalife": {l:"Related news search: Udoka Godwin-Malife", u:"https://news.google.com/search?q=Burton%20Albion%20Udoka%20Godwin-Malife%20transfer&hl=en-GB&gl=GB"},
  "gnews-jakebeesley": {l:"Related news search: Jake Beesley", u:"https://news.google.com/search?q=Burton%20Albion%20Jake%20Beesley%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Matthew Dennis": ["gnews-matthewdennis"],
  "Udoka Godwin-Malife": ["gnews-udokagodwinmalife"],
  "Jake Beesley": ["gnews-jakebeesley"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Burton Albion · 2026/27 Season`,
  heroLede: `Transfer window active. Burton Albion preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
