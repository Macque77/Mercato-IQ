/* ============================================================
   MERCATO IQ · CLUB DATA · READING · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Reading", mono: "R", slug: "reading",
  primary: "#004494", primaryBright: "#5CA9FF", primaryDeep: "#00285C",
  primaryRgb: "0,68,148",
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
  queries: ["reading transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Kyreece Lisbie", sub:"position · nation · age unknown", club:"Colchester United", pos:"Winger", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Colchester United"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Udoka Godwin-Malife", sub:"DF", club:"Burton Albion", pos:"DF", report:"~1 wk ago", src:"Pete O'Rourke", tier:2, fee:"Undisclosed", truth:85, prob:85, light:'g', trend:'up', note:"Medical reported underway for the Burton captain, about as advanced as it gets before an announcement.", lastSeen:"2026-08-04T19:10:50Z", baseProb:85, dead:true, deadReason:"No recent confirmation or update in snippets; unable to verify current status"},
  {name:"Kyreece Lisbie", sub:"W", club:"Colchester United", pos:"W", report:"~1 wk ago", src:"Various", tier:3, fee:"Six-figure fee", truth:55, prob:45, light:'y', trend:'flat', note:"Competing with Peterborough United for the winger.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Ryan Nyambe", sub:"position · nation · age unknown", club:"Derby County", pos:"Unknown", report:"Loan move to Reading", src:"Derby County", tier:3, fee:"Loan", truth:85, prob:90, light:"g", trend:"flat", note:"Loan transfer from Derby County", lastSeen:"2026-08-07T01:42:32Z", baseProb:90}
];
const OUTGOING = [
  {name:"Andy Rinomhota", sub:"MF", club:"Sheffield Wednesday", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"Interest described as a sensible fit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Charlie Savage", sub:"MF", club:"Cardiff City", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:55, prob:40, light:'y', trend:'flat', note:"Cardiff reportedly ahead of Sheffield Wednesday in the race.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "orourke": {l:"Pete O'Rourke (Football Insider)", u:"https://x.com/talkSPORT_PeteO"},
  "gnews-kyreecelisbie": {l:"Related news search: Kyreece Lisbie", u:"https://news.google.com/search?q=Reading%20Kyreece%20Lisbie%20transfer&hl=en-GB&gl=GB"},
  "gnews-andyrinomhota": {l:"Related news search: Andy Rinomhota", u:"https://news.google.com/search?q=Reading%20Andy%20Rinomhota%20transfer&hl=en-GB&gl=GB"},
  "gnews-charliesavage": {l:"Related news search: Charlie Savage", u:"https://news.google.com/search?q=Reading%20Charlie%20Savage%20transfer&hl=en-GB&gl=GB"},
  theTilehurstEndJacobBrown: {l:"The Tilehurst End", u:"https://news.google.com/rss/articles/CBMingFBVV95cUxQSHZCYUEzc1BRRnJ3TlFzTXFvS0hCTElSWlRMN0I5TlJJYTRJUGxRYnRfTkhsSW1rZjVvUl90Ujd5Mm5tcUVLR2pZazJpcHBBQmNPY290eHJrcUw3N0NVNFJCVTdSWjA5MHVJTDJTSmozMDRJU2RlRlA3TVdqVmtGNkVyQXJvTGJQOG12NEY3UnFSeE1kVHJuUC1nQmxnQQ"},
  derbyCountyRyanNyambe: {l:"Derby County", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxQTkhKQURhdDVmMG9KSUVWV0sxd2llSTFQV2VfaWMydDBIckQyVFRzekFLZlBPYWxoNm5WZE5QTXc5di1lYUFMNVRYS2xLUUNucjBEZjk4SFZOZkJVeThPY1hvSlBGOFlHOTNwcExwMTdHSHVvdTVIendKZmlzRlZVVmZmN2U4WGI0aDhSdmV3"},
  bBCKyreeceLisbie: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE05TDBlQVk3S0xJdEs5UFpVaWx4RjJhQUtNWmpXZU81dHpzdWpQRHlxVnBCX0FOaWhoRkhuYWphNHM4UF84R28ydjN5T0ZuWlhCV04tTE9SdENOZk1wOG9aN3o2cVhOMGs"}};

const LINKMAP = {
  "Udoka Godwin-Malife": ["orourke"],
  "Kyreece Lisbie": ["gnews-kyreecelisbie", "bBCKyreeceLisbie"],
  "Andy Rinomhota": ["gnews-andyrinomhota"],
  "Charlie Savage": ["gnews-charliesavage"],
  "Jacob Brown": ["theTilehurstEndJacobBrown"],
  "Ryan Nyambe": ["derbyCountyRyanNyambe"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Reading · 2026/27 Season`,
  heroLede: `Transfer window active. Reading preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};