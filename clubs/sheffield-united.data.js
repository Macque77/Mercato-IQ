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
  {name:"Kalvin Phillips", sub:"Unknown · Unknown · Unknown", club:"Manchester City", pos:"Unknown", report:"Loan move reported close", src:"Yahoo Sports via Google News", tier:3, fee:"Loan", truth:70, prob:70, light:"g", trend:"up", note:"Phillips close to Sheffield United loan deal", lastSeen:"2026-08-08T18:06:10Z", baseProb:70},
  {name:"Gus Hamer", sub:"Unknown · Unknown · Unknown", club:"Coventry City", pos:"Unknown", report:"Sheffield United braced for second bid from Coventry City", src:"Coventry Telegraph", tier:3, fee:"Unknown", truth:65, prob:55, light:"g", trend:"flat", note:"Second bid expected; ball in Coventry's court", lastSeen:"2026-08-07T01:42:32Z", baseProb:55, dead:true, deadReason:"no longer a current link"},
  {name:"Gustavo Hamer", sub:"Unknown · Unknown · Unknown", club:"Coventry City", pos:"Unknown", report:"Coventry latest bid rejected by Sheffield United", src:"The Coventry Observer via Google News", tier:3, fee:"Unknown", truth:60, prob:40, light:"y", trend:"up", note:"Coventry City's latest bid for Gustavo Hamer rejected; Sheffield United resisting sale", lastSeen:"2026-08-08T18:06:10Z", baseProb:40}
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
  theCoventryObserverGustavoHamer: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPdndtS1M1UEJvd29LcGdwOC1QRE9Pd3R2b2lpcDZVWVBOc1UxWXBidlpuYnlhYjJTZzBEXy0tMDJfLTU4QnJEODRJTTluSEQtRk5DUUxMWXN6RWtzejhxNHBRdGpzTTNCeXlON3k3UjZTVGpsV1EzTHJ0ekNZVkxhSkhyV2Vjc0dhb182QjE3ZFYwXzc1eUlUczlQakFDNmxaa3JraW52MGFvUkxiSUhtMUNvdFJqb29XMXlLOVM2QQ?oc=5"},
  theCoventryObserverGustavoHamer1: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPdndtS1M1UEJvd29LcGdwOC1QRE9Pd3R2b2lpcDZVWVBOc1UxWXBidlpuYnlhYjJTZzBEXy0tMDJfLTU4QnJEODRJTTluSEQtRk5DUUxMWXN6RWtzejhxNHBRdGpzTTNCeXlON3k3UjZTVGpsV1EzTHJ0ekNZVkxhSkhyV2Vjc0dhb282QjE3ZFYwXzc1eUlUczlQakFDNmxaa3JraW52MGFvUkxiSUhtMUNvdFJqb29XMXlLOVM2QQ?oc=5"},
  yahooSportsKalvinPhillips: {l:"Yahoo Sports", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxOTlNDYWViUHdRX1E5VzZxYnZQVEJNQUdJY3FYZ05QM0tBcy1kaGlva2E3TUo4NmExTFh1QW9WQ21zTTZMTGR4TzVLTFdvbmRhTTBpMk96UUx5dDdQbzlVWDBNZXkwWDZ4Z1BEMldwQ19sS1IwYlZwbkhfNVh3UWp3Tk8wSnQ4N0M1dFp1bzFTem8"},
  theCoventryObserverGustavoHamer2: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPdndtS1M1UEJvd29LcGdwOC1QRE9Pd3R2b2lpcDZVWVBOc1UxWXBidlpuYnlhYjJTZzBEXy0tMDJfLTU4QnJEODRJTTluSEQtRk5DUUxMWXN6RWtzejhxNHBRdGpzTTNCeXlON3k3UjZTVGpsV1EzTHJ0ekNZVkxhSkhyV2Vjc0dhb282QjE3ZFYwXzc1eUlUczlQakFDNmxaa3JraW52MGFvUkxiSUhtMUNvdFJqb29XMXlLOVM2QQ"}};

const LINKMAP = {
  "Matt Doherty": ["gnews-mattdoherty"],
  "Nicolas Valentini": ["thestar"],
  "Kalvin Phillips": ["src-cityxtra", "thestar", "yahooSportsKalvinPhillips"],
  "Rabbi Matondo": ["thestar"],
  "Gus Hamer": ["coventryTelegraphGusHamer"],
  "Gustavo Hamer": ["theCoventryObserverGustavoHamer", "theCoventryObserverGustavoHamer1", "theCoventryObserverGustavoHamer2"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Sheffield United · 2026/27 Season`,
  heroLede: `Transfer window active. Sheffield United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};