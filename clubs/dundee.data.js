/* ============================================================
   MERCATO IQ · CLUB DATA · DUNDEE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Dundee", mono: "DUN", slug: "dundee",
  primary: "#001489", primaryBright: "#5C7CFF", primaryDeep: "#000A45",
  primaryRgb: "0,20,137",
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
  queries: ["dundee transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Aaron Donnelly", sub:"DF", club:"Dunfermline Athletic", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed exit, described as leaving the side short at the back."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Luke Graham", sub:"DF", club:"Rangers", pos:"DF", report:"~4 months ago", src:"Various", tier:4, fee:"Undisclosed", truth:50, prob:30, light:'y', trend:'flat', note:"Reported fresh scouting interest, but the source is several months old.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-aarondonnelly": {l:"Related news search: Aaron Donnelly", u:"https://news.google.com/search?q=Dundee%20Aaron%20Donnelly%20transfer&hl=en-GB&gl=GB"},
  "gnews-lukegraham": {l:"Related news search: Luke Graham", u:"https://news.google.com/search?q=Dundee%20Luke%20Graham%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Aaron Donnelly": ["gnews-aarondonnelly"],
  "Luke Graham": ["gnews-lukegraham"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Dundee · 2026/27 Season`,
  heroLede: `Transfer window active. Dundee preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
