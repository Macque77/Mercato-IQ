/* ============================================================
   MERCATO IQ · CLUB DATA · NOTTS COUNTY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Notts County", mono: "NC", slug: "notts-county",
  primary: "#1F2023", primaryBright: "#E8E8E8", primaryDeep: "#0F1012",
  primaryRgb: "31,32,35",
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
  queries: ["notts-county transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Emile Acquah", sub:"ST", club:"Dundee FC", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Two-year deal, sealed and confirmed."}
];
const CONFIRMED_OUT = [
  {name:"Matthew Dennis", sub:"ST", club:"Burton Albion", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"See Burton Albion entry."}
];
const INCOMING = [
  {name:"Tommi O'Reilly", sub:"MF", club:"Aston Villa", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:60, prob:50, light:'y', trend:'up', note:"Notts reportedly set to beat Sheffield Wednesday to the signing."},
  {name:"Michael Mellon", sub:"ST", club:"Burnley", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"Racing Plymouth Argyle for the striker's signature."},
  {name:"Devon Matthews", sub:"DF", club:"Undisclosed", pos:"DF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Competing with Wigan Athletic."}
];
const OUTGOING = [
  {name:"Alassana Jatta", sub:"ST", club:"Undisclosed (Danish top flight)", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"£425k", truth:55, prob:40, light:'y', trend:'flat', note:"Bolton Wanderers and Bradford City reportedly trying to hijack the move."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-emileacquah": {l:"Related news search: Emile Acquah", u:"https://news.google.com/search?q=Notts%20County%20Emile%20Acquah%20transfer&hl=en-GB&gl=GB"},
  "gnews-matthewdennis": {l:"Related news search: Matthew Dennis", u:"https://news.google.com/search?q=Notts%20County%20Matthew%20Dennis%20transfer&hl=en-GB&gl=GB"},
  "gnews-tommioreilly": {l:"Related news search: Tommi O'Reilly", u:"https://news.google.com/search?q=Notts%20County%20Tommi%20O%27Reilly%20transfer&hl=en-GB&gl=GB"},
  "gnews-michaelmellon": {l:"Related news search: Michael Mellon", u:"https://news.google.com/search?q=Notts%20County%20Michael%20Mellon%20transfer&hl=en-GB&gl=GB"},
  "gnews-devonmatthews": {l:"Related news search: Devon Matthews", u:"https://news.google.com/search?q=Notts%20County%20Devon%20Matthews%20transfer&hl=en-GB&gl=GB"},
  "gnews-alassanajatta": {l:"Related news search: Alassana Jatta", u:"https://news.google.com/search?q=Notts%20County%20Alassana%20Jatta%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Emile Acquah": ["gnews-emileacquah"],
  "Matthew Dennis": ["gnews-matthewdennis"],
  "Tommi O'Reilly": ["gnews-tommioreilly"],
  "Michael Mellon": ["gnews-michaelmellon"],
  "Devon Matthews": ["gnews-devonmatthews"],
  "Alassana Jatta": ["gnews-alassanajatta"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Notts County · 2026/27 Season`,
  heroLede: `Transfer window active. Notts County preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
