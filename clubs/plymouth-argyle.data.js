/* ============================================================
   MERCATO IQ · CLUB DATA · PLYMOUTH ARGYLE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Plymouth Argyle", mono: "PA", slug: "plymouth-argyle",
  primary: "#00A650", primaryBright: "#63E6A0", primaryDeep: "#00602E",
  primaryRgb: "0,166,80",
  breadcrumb: ["England","League One"]
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
  queries: ["plymouth-argyle transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Lorent Tolaj", sub:"ST", club:"Bristol City", pos:"ST", fee:"£4m + add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Described as advanced and imminent."}
];
const INCOMING = [
  {name:"Murphy Cooper", sub:"GK", club:"QPR", pos:"GK", report:"~1 wk ago", src:"Various", tier:3, fee:"~£500k", truth:65, prob:55, light:'g', trend:'up', note:"Plymouth reportedly set to beat Sheffield Wednesday and MK Dons to the signing.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Jayden Wareham", sub:"FW", club:"Exeter City", pos:"FW", report:"~1 wk ago", src:"Various", tier:4, fee:"Undisclosed", truth:40, prob:30, light:'y', trend:'flat', note:"Fan-backed target as a possible Tolaj replacement.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Callum Robinson", sub:"FW", club:"Undisclosed", pos:"FW", report:"~1 wk ago", src:"Various", tier:4, fee:"Undisclosed", truth:35, prob:25, light:'o', trend:'flat', note:"Alternate Tolaj replacement option floated.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Michael Mellon", sub:"ST", club:"Burnley", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"Competing with Notts County for the striker.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];
const OUTGOING = [
  {name:"Bim Pepple", sub:"FW", club:"Portsmouth", pos:"FW", report:"~1 wk ago", src:"Various", tier:3, fee:"Release clause", truth:55, prob:45, light:'y', trend:'flat', note:"Release clause reportedly likely to be triggered.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-lorenttolaj": {l:"Related news search: Lorent Tolaj", u:"https://news.google.com/search?q=Plymouth%20Argyle%20Lorent%20Tolaj%20transfer&hl=en-GB&gl=GB"},
  "gnews-murphycooper": {l:"Related news search: Murphy Cooper", u:"https://news.google.com/search?q=Plymouth%20Argyle%20Murphy%20Cooper%20transfer&hl=en-GB&gl=GB"},
  "gnews-jaydenwareham": {l:"Related news search: Jayden Wareham", u:"https://news.google.com/search?q=Plymouth%20Argyle%20Jayden%20Wareham%20transfer&hl=en-GB&gl=GB"},
  "gnews-callumrobinson": {l:"Related news search: Callum Robinson", u:"https://news.google.com/search?q=Plymouth%20Argyle%20Callum%20Robinson%20transfer&hl=en-GB&gl=GB"},
  "gnews-michaelmellon": {l:"Related news search: Michael Mellon", u:"https://news.google.com/search?q=Plymouth%20Argyle%20Michael%20Mellon%20transfer&hl=en-GB&gl=GB"},
  "gnews-bimpepple": {l:"Related news search: Bim Pepple", u:"https://news.google.com/search?q=Plymouth%20Argyle%20Bim%20Pepple%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Lorent Tolaj": ["gnews-lorenttolaj"],
  "Murphy Cooper": ["gnews-murphycooper"],
  "Jayden Wareham": ["gnews-jaydenwareham"],
  "Callum Robinson": ["gnews-callumrobinson"],
  "Michael Mellon": ["gnews-michaelmellon"],
  "Bim Pepple": ["gnews-bimpepple"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Plymouth Argyle · 2026/27 Season`,
  heroLede: `Transfer window active. Plymouth Argyle preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};