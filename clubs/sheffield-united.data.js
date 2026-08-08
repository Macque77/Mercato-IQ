/* ============================================================
   MERCATO IQ · CLUB DATA · SHEFFIELD UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Sheffield United", mono: "SU", slug: "sheffield-united",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
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
  queries: ["sheffield-united transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Matt Doherty", sub:"34 · RB · Ireland", club:"Wolverhampton Wanderers", pos:"RB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer, one-year deal plus option, already unveiled with a manager quote."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Nicolas Valentini", sub:"25 · CB · Argentina", club:"Fiorentina", pos:"CB", report:"~2 wks ago", src:"The Star", tier:3, fee:"Undisclosed", truth:45, prob:25, light:'o', trend:'flat', note:"Explicitly framed as United exploring with no official approach lodged yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Kalvin Phillips", sub:"30 · MF · England", club:"Manchester City", pos:"MF", report:"~1 wk ago", src:"City Xtra / The Star", tier:3, fee:"Loan", truth:55, prob:35, light:'y', trend:'up', note:"Player reportedly keen and City want to trim wages, gives this more legs than the average kite-flying loan link.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Rabbi Matondo", sub:"W", club:"SK Brann", pos:"W", report:"~2 wks ago", src:"The Star", tier:3, fee:"Undisclosed", truth:45, prob:20, light:'o', trend:'flat', note:"Described as under consideration only, nothing concrete.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Gus Hamer", sub:"Unknown · Unknown · Unknown", club:"Coventry City", pos:"Unknown", report:"Sheffield United braced for second bid from Coventry City", src:"Coventry Telegraph", tier:3, fee:"Unknown", truth:65, prob:55, light:"g", trend:"flat", note:"Second bid expected; ball in Coventry's court", lastSeen:"2026-08-07T01:42:32Z", baseProb:55, dead:true, deadReason:"no longer a current link"},
  {name:"Gustavo Hamer", sub:"25 · Netherlands · M", club:"Coventry City", pos:"M", report:"Coventry City see latest bid rejected by Sheffield United", src:"The Coventry Observer", tier:3, fee:"Undisclosed", truth:85, prob:35, light:"y", trend:"flat", note:"Second bid from Coventry rejected; Sheffield United braced for further approaches", lastSeen:"2026-08-08T07:40:33Z", baseProb:35}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-mattdoherty": {l:"Related news search: Matt Doherty", u:"https://news.google.com/search?q=Sheffield%20United%20Matt%20Doherty%20transfer&hl=en-GB&gl=GB"},
  "thestar": {l:"The Star (Sheffield)", u:"https://www.thestar.co.uk/sport"},
  "src-cityxtra": {l:"City Xtra", u:"https://news.google.com/search?q=City%20Xtra%20Sheffield%20United%20transfer&hl=en-GB&gl=GB"},
  coventryTelegraphGusHamer: {l:"Coventry Telegraph", u:"https://news.google.com/rss/articles/CBMitAFBVV95cUxPUU81NVR5aFN4M25HaUpwWVRPNm9CVTIyTF9lWVUzd1Q3ZU11dExQT2RIaXVnS3FKX1lHdXZCMEI3QWlEcUVfTnNSaUV6ZGJzUzhiNGM4b0MxajR1NTRsSng3cnlja2pOU2piUmctUVpwYWlkOUNiN2hlRG1MRjliOWNsQm9BUHlUUWJYN25SSm1CVGd6bkgtN1M2OXROZ1dzMDlGUlpId051ZV9SMjhDMmptX1Q"},
  theCoventryObserverGustavoHamer: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPdndtS1M1UEJvd29LcGdwOC1QRE9Pd3R2b2lpcDZVWVBOc1UxWXBidlpuYnlhYjJTZzBEXy0tMDJfLTU4QnJEODRJTTluSEQtRk5DUUxMWXN6RWtzejhxNHBRdGpzTTNCeXlON3k3UjZTVGpsV1EzTHJ0ekNZVkxhSkhyV2Vjc0dhb182QjE3ZFYwXzc1eUlUczlQakFDNmxaa3JraW52MGFvUkxiSUhtMUNvdFJqb29XMXlLOVM2QQ?oc=5"}};

const LINKMAP = {
  "Matt Doherty": ["gnews-mattdoherty"],
  "Nicolas Valentini": ["thestar"],
  "Kalvin Phillips": ["src-cityxtra", "thestar"],
  "Rabbi Matondo": ["thestar"],
  "Gus Hamer": ["coventryTelegraphGusHamer"],
  "Gustavo Hamer": ["theCoventryObserverGustavoHamer"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Sheffield United · 2026/27 Season`,
  heroLede: `Transfer window active. Sheffield United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};