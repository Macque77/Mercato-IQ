/* ============================================================
   MERCATO IQ · CLUB DATA · WEST BROMWICH ALBION · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "West Bromwich Albion", mono: "WBA", slug: "west-bromwich-albion",
  primary: "#00448C", primaryBright: "#5CA9FF", primaryDeep: "#00285C",
  primaryRgb: "0,68,140",
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
  queries: ["west-bromwich-albion transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Matt Ingram", sub:"GK", club:"Free agent", pos:"GK", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival among a batch of summer signings."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Tommy Watson", sub:"20 · LW · England", club:"Brighton", pos:"LW", report:"~1 wk ago", src:"Sunderland Echo", tier:3, fee:"Loan", truth:45, prob:15, light:'o', trend:'flat', note:"Very early, Brighton have not decided their plan for him yet, background noise for now.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];
const OUTGOING = [
  {name:"Eseosa Sule", sub:"Winger", club:"Undisclosed", pos:"W", report:"~4 days ago", src:"West Brom News", tier:2, fee:"Undisclosed", truth:60, prob:55, light:'g', trend:'up', note:"Club's own dedicated transfer reporter using strong imminent language, worth some credence.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-mattingram": {l:"Related news search: Matt Ingram", u:"https://news.google.com/search?q=West%20Bromwich%20Albion%20Matt%20Ingram%20transfer&hl=en-GB&gl=GB"},
  "sunderlandecho": {l:"Sunderland Echo", u:"https://www.sunderlandecho.com/sport/football"},
  "westbromnews": {l:"West Brom News", u:"https://www.westbromwichalbionnews.co.uk/"}
};

const LINKMAP = {
  "Matt Ingram": ["gnews-mattingram"],
  "Tommy Watson": ["sunderlandecho"],
  "Eseosa Sule": ["westbromnews"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `West Bromwich Albion · 2026/27 Season`,
  heroLede: `Transfer window active. West Bromwich Albion preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};