/* ============================================================
   MERCATO IQ · CLUB DATA · PRESTON NORTH END · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Preston North End", mono: "PNE", slug: "preston-north-end",
  primary: "#1E3A8A", primaryBright: "#6FA8FF", primaryDeep: "#0F1F4A",
  primaryRgb: "30,58,138",
  breadcrumb: ["England","Championship"]
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
  queries: ["preston-north-end transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Lee Nicholls", sub:"33 · GK · England", club:"Huddersfield Town", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Alan Nixon reports the deal agreed, reliable on lower-league specifics and reads as done barring paperwork."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Tommy Watson", sub:"20 · LW · England", club:"Brighton", pos:"LW", report:"~1 wk ago", src:"Sunderland Echo", tier:3, fee:"Loan", truth:45, prob:20, light:'o', trend:'flat', note:"One of six clubs credited with interest in a loan, genuinely early-stage with Brighton yet to decide anything.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];
const OUTGOING = [
  {name:"Daniel Jebbison", sub:"FW · Canada", club:"Blackburn Rovers", pos:"FW", report:"~1 wk ago", src:"Lancashire Post", tier:2, fee:"Loan + option", truth:65, prob:55, light:'g', trend:'up', note:"Specific and cross-corroborated by Blackburn's own reporting, but no medical or here-we-go yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Michael Smith", sub:"FW", club:"Mansfield Town", pos:"FW", report:"~2 wks ago", src:"Lancashire Post", tier:2, fee:"Undisclosed", truth:60, prob:30, light:'y', trend:'flat', note:"Explicitly reported that the numbers do not work for all parties, so this is stalling rather than advancing.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-leenicholls": {l:"Related news search: Lee Nicholls", u:"https://news.google.com/search?q=Preston%20North%20End%20Lee%20Nicholls%20transfer&hl=en-GB&gl=GB"},
  "sunderlandecho": {l:"Sunderland Echo", u:"https://www.sunderlandecho.com/sport/football"},
  "lancashirepost": {l:"Lancashire Post", u:"https://www.lep.co.uk/sport"}
};

const LINKMAP = {
  "Lee Nicholls": ["gnews-leenicholls"],
  "Tommy Watson": ["sunderlandecho"],
  "Daniel Jebbison": ["lancashirepost"],
  "Michael Smith": ["lancashirepost"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Preston North End · 2026/27 Season`,
  heroLede: `Transfer window active. Preston North End preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};