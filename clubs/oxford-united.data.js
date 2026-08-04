/* ============================================================
   MERCATO IQ · CLUB DATA · OXFORD UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Oxford United", mono: "OU", slug: "oxford-united",
  primary: "#001C58", primaryBright: "#FFD84D", primaryDeep: "#000E2C",
  primaryRgb: "0,28,88",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Relegated from Championship (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["oxford-united transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Sydie Peck", sub:"MF", club:"Sheffield United", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Sheffield United reportedly backed to sign if he leaves.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Brodie Spencer", sub:"DF", club:"QPR / West Brom", pos:"DF", report:"~1 wk ago", src:"FLW exclusive", tier:3, fee:"Undisclosed", truth:55, prob:45, light:'y', trend:'flat', note:"See Huddersfield Town entry, same player linked from Oxford's side too.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Cameron Brannagan", sub:"MF", club:"Undisclosed", pos:"MF", report:"~2 wks ago", src:"Various", tier:3, fee:"Undisclosed", truth:40, prob:30, light:'y', trend:'flat', note:"Captain described as a major transfer concern for the club.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-sydiepeck": {l:"Related news search: Sydie Peck", u:"https://news.google.com/search?q=Oxford%20United%20Sydie%20Peck%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  "gnews-cameronbrannagan": {l:"Related news search: Cameron Brannagan", u:"https://news.google.com/search?q=Oxford%20United%20Cameron%20Brannagan%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Sydie Peck": ["gnews-sydiepeck"],
  "Brodie Spencer": ["flw"],
  "Cameron Brannagan": ["gnews-cameronbrannagan"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Oxford United · 2026/27 Season`,
  heroLede: `Transfer window active. Oxford United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
