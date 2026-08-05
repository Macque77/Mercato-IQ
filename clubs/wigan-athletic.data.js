/* ============================================================
   MERCATO IQ · CLUB DATA · WIGAN ATHLETIC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Wigan Athletic", mono: "WA", slug: "wigan-athletic",
  primary: "#1B458F", primaryBright: "#6FA0FF", primaryDeep: "#0D2650",
  primaryRgb: "27,69,143",
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
  queries: ["wigan-athletic transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Reggie Walsh", sub:"MF", club:"Chelsea", pos:"MF", report:"~2 days ago", src:"Alan Nixon", tier:3, fee:"Loan", truth:75, prob:75, light:'g', trend:'up', note:"Loan expected to complete ahead of the deadline.", lastSeen:"2026-08-04T19:10:50Z", baseProb:75},
  {name:"Joe Walsh", sub:"DF", club:"QPR", pos:"DF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:60, prob:55, light:'g', trend:'up', note:"Wigan reportedly closing in on the capture.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55}
];
const OUTGOING = [
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "nixon": {l:"Alan Nixon", u:"https://x.com/reluctantnicko"},
  "gnews-joewalsh": {l:"Related news search: Joe Walsh", u:"https://news.google.com/search?q=Wigan%20Athletic%20Joe%20Walsh%20transfer&hl=en-GB&gl=GB"},
  "gnews-samtickle": {l:"Related news search: Sam Tickle", u:"https://news.google.com/search?q=Wigan%20Athletic%20Sam%20Tickle%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Reggie Walsh": ["nixon"],
  "Joe Walsh": ["gnews-joewalsh"],
  "Sam Tickle": ["gnews-samtickle"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wigan Athletic · 2026/27 Season`,
  heroLede: `Transfer window active. Wigan Athletic preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};