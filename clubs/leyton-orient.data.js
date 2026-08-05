/* ============================================================
   MERCATO IQ · CLUB DATA · LEYTON ORIENT · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Leyton Orient", mono: "LO", slug: "leyton-orient",
  primary: "#DA020E", primaryBright: "#FF6259", primaryDeep: "#7A0108",
  primaryRgb: "218,2,14",
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
  queries: ["leyton-orient transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Alfie Gilchrist", sub:"DF", club:"West Brom", pos:"DF", report:"~1 wk ago", src:"Various", tier:3, fee:"~£2m", truth:55, prob:45, light:'y', trend:'flat', note:"Talks ongoing at the reported valuation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Owen Dale", sub:"W", club:"Free agent (ex-Oxford United)", pos:"W", report:"~1 wk ago", src:"Various", tier:3, fee:"Free", truth:55, prob:45, light:'y', trend:'flat', note:"Pursued after reportedly snubbing Plymouth Argyle.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
];
const OUTGOING = [
  {name:"Dom Ballard", sub:"FW", club:"Bristol City", pos:"FW", report:"~1 wk ago", src:"FLW exclusive", tier:2, fee:"£5m+", truth:65, prob:50, light:'y', trend:'up', note:"Bristol City have had two bids rejected; Leicester City also interested; Orient holding firm on valuation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-alfiegilchrist": {l:"Related news search: Alfie Gilchrist", u:"https://news.google.com/search?q=Leyton%20Orient%20Alfie%20Gilchrist%20transfer&hl=en-GB&gl=GB"},
  "gnews-owendale": {l:"Related news search: Owen Dale", u:"https://news.google.com/search?q=Leyton%20Orient%20Owen%20Dale%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"}
};

const LINKMAP = {
  "Alfie Gilchrist": ["gnews-alfiegilchrist"],
  "Owen Dale": ["gnews-owendale"],
  "Dom Ballard": ["flw"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Leyton Orient · 2026/27 Season`,
  heroLede: `Transfer window active. Leyton Orient preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
