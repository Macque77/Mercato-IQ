/* ============================================================
   MERCATO IQ · CLUB DATA · HUDDERSFIELD TOWN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Huddersfield Town", mono: "HT", slug: "huddersfield-town",
  primary: "#0072CE", primaryBright: "#5CA9FF", primaryDeep: "#003D73",
  primaryRgb: "0,114,206",
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
  queries: ["huddersfield-town transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Derensili Sanches Fernandes", sub:"W", club:"Excelsior (Netherlands)", pos:"W", fee:"Multi-million fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported close to completion pending visa formalities."}
];
const CONFIRMED_OUT = [
  {name:"Alfie May", sub:"ST", club:"Doncaster Rovers", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"See Doncaster entry."}
];
const INCOMING = [
  {name:"Archie Collins", sub:"MF", club:"Free agent", pos:"MF", report:"~1 wk ago", src:"FLW", tier:3, fee:"Free", truth:55, prob:35, light:'y', trend:'flat', note:"Seven-club race for the free agent including Millwall, Sheffield Wednesday and Leicester.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];
const OUTGOING = [
  {name:"Brodie Spencer", sub:"DF", club:"QPR / West Brom", pos:"DF", report:"~1 wk ago", src:"FLW exclusive", tier:3, fee:"Undisclosed", truth:55, prob:40, light:'y', trend:'flat', note:"Two Championship clubs reportedly interested.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-derensilisanchesfernande": {l:"Related news search: Derensili Sanches Fernandes", u:"https://news.google.com/search?q=Huddersfield%20Town%20Derensili%20Sanches%20Fernandes%20transfer&hl=en-GB&gl=GB"},
  "gnews-alfiemay": {l:"Related news search: Alfie May", u:"https://news.google.com/search?q=Huddersfield%20Town%20Alfie%20May%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"}
};

const LINKMAP = {
  "Derensili Sanches Fernandes": ["gnews-derensilisanchesfernande"],
  "Alfie May": ["gnews-alfiemay"],
  "Archie Collins": ["flw"],
  "Brodie Spencer": ["flw"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Huddersfield Town · 2026/27 Season`,
  heroLede: `Transfer window active. Huddersfield Town preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
