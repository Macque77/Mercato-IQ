/* ============================================================
   MERCATO IQ · CLUB DATA · BRADFORD CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bradford City", mono: "BC", slug: "bradford-city",
  primary: "#7A263A", primaryBright: "#FDB927", primaryDeep: "#4A1723",
  primaryRgb: "122,38,58",
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
  queries: ["bradford-city transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Adam Phillips", sub:"MF", club:"Barnsley", pos:"MF", report:"~1 wk ago", src:"Pete O'Rourke", tier:2, fee:"Undisclosed", truth:75, prob:70, light:'g', trend:'up', note:"Same imminent-move story as reported from the Barnsley side.", lastSeen:"2026-08-04T19:10:50Z", baseProb:70},
  {name:"Reece Welch", sub:"DF", club:"Undisclosed", pos:"DF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:55, prob:45, light:'y', trend:'flat', note:"Reported training with Bradford, an ex-Sheffield Wednesday target.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Jake Beesley", sub:"ST", club:"Burton Albion", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"Reigniting interest, competing with Stockport County.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];
const OUTGOING = [
  {name:"Lee Evans", sub:"MF", club:"Undisclosed", pos:"MF", report:"~2 wks ago", src:"FLW opinion", tier:4, fee:"Undisclosed", truth:30, prob:20, light:'o', trend:'flat', note:"Low-confidence suggestion of a possible retention u-turn.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "orourke": {l:"Pete O'Rourke (Football Insider)", u:"https://x.com/talkSPORT_PeteO"},
  "gnews-reecewelch": {l:"Related news search: Reece Welch", u:"https://news.google.com/search?q=Bradford%20City%20Reece%20Welch%20transfer&hl=en-GB&gl=GB"},
  "gnews-jakebeesley": {l:"Related news search: Jake Beesley", u:"https://news.google.com/search?q=Bradford%20City%20Jake%20Beesley%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"}
};

const LINKMAP = {
  "Adam Phillips": ["orourke"],
  "Reece Welch": ["gnews-reecewelch"],
  "Jake Beesley": ["gnews-jakebeesley"],
  "Lee Evans": ["flw"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Bradford City · 2026/27 Season`,
  heroLede: `Transfer window active. Bradford City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
