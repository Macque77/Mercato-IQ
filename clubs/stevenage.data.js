/* ============================================================
   MERCATO IQ · CLUB DATA · STEVENAGE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Stevenage", mono: "STE", slug: "stevenage",
  primary: "#E30613", primaryBright: "#FF6B6B", primaryDeep: "#7A0309",
  primaryRgb: "227,6,19",
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
  queries: ["stevenage transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Olly Sanderson", sub:"Unknown · Unknown · Forward", club:"Fulham", pos:"Forward", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Fulham"},
  {name:"Jack Taylor", sub:"Unknown · Unknown · Unknown", club:"Sutton United", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Sutton United"},
  {name:"Terry Taylor", sub:"Unknown · Unknown · Midfielder", club:"Charlton Athletic", pos:"Midfielder", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Charlton Athletic"}
];
const CONFIRMED_OUT = [
  {name:"Tyreece Simpson", sub:"Unknown · Unknown · Unknown", club:"Port Vale", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released to Port Vale"}
];
const INCOMING = [
  {name:"Olly Sanderson", sub:"Unknown · Unknown · Forward", club:"Fulham", pos:"Forward", report:"Fulham striker signs for Stevenage", src:"BBC", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Jack Taylor", sub:"Unknown · Unknown · Unknown", club:"Sutton United", pos:"Unknown", report:"Jack Taylor completes Stevenage move", src:"Sutton United FC", tier:3, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Terry Taylor", sub:"Unknown · Unknown · Midfielder", club:"Charlton Athletic", pos:"Midfielder", report:"Ex-Charlton midfielder Terry Taylor signs for Stevenage on free transfer", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const OUTGOING = [
  {name:"Harvey White", sub:"MF", club:"Plymouth Argyle", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Plymouth reportedly backed to complete a deal for the midfielder.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"Rumour from ~1 week ago; no recent confirmation of deal. Snippets reference interest but not completion."},
  {name:"Dan Phillips", sub:"MF", club:"Blackburn Rovers", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Championship side reportedly plotting a move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"Rumour from ~1 week ago; no recent confirmation of deal."},
  {name:"Tyreece Simpson", sub:"Unknown · Unknown · Unknown", club:"Port Vale", pos:"Unknown", report:"Port Vale sign Tyreece Simpson after Stevenage release", src:"BBC", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-harveywhite": {l:"Related news search: Harvey White", u:"https://news.google.com/search?q=Stevenage%20Harvey%20White%20transfer&hl=en-GB&gl=GB"},
  "gnews-danphillips": {l:"Related news search: Dan Phillips", u:"https://news.google.com/search?q=Stevenage%20Dan%20Phillips%20transfer&hl=en-GB&gl=GB"},
  bBCOllySanderson: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE5FMUxteEVxZ3VvNnBpRVJrWGNqY0xwYTEyTDJRNUt6Qy0tZURQY1Nrc2EtN2lkM1JkYkk5MGlObFhVRERuc3R6SUUwVWtoNWVvczRVSFZXMERWdHR5cVFtNFdMcnU4dFIyVmc?oc=5"},
  suttonUnitedFCJackTaylor: {l:"Sutton United FC", u:"https://news.google.com/rss/articles/CBMigAFBVV95cUxNdXZrel9JZFhQS2MwVmpEanRaZ2ZlRVJwclFCcWlDVUpVWEhmVFgzdEZmcXBuaFFTWG5EdmVjS0prNW5ScUF4MXJQX1ZQaEJaNFR4Z3B0N3ZWYVp1bktJZ3dYbU5obi1LZkZfQ2o4c2Y4Ym8zWFBqRUtxZEhCRUxPRA?oc=5"},
  bBCTerryTaylor: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE0xTHVKaEpZS19xSEctWFgzOEVhTDRSZGxzejV5U1RsZ3BhNEx5aEdtdEtXaXZKQ2x6MmVrSnZNWUR5N2FyTTdNOXBHcTVlWEJSdndtY1hFRVdrcmlqUWR5Q2FMQnpSZWc?oc=5"},
  bBCTyreeceSimpson: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5RWVhVQUlJMDAxcDRNS29nanlKLWotcFhreDNMS2hJNGE0LXktcjluVUs2TlNNOGhpXy1ncUMwQjROV3R5LTMzblB6emplQXRXd2hac3hod2hzVVRDLWVxUXdaUWVibFE?oc=5"}};

const LINKMAP = {
  "Harvey White": ["gnews-harveywhite"],
  "Dan Phillips": ["gnews-danphillips"],
  "Olly Sanderson": ["bBCOllySanderson"],
  "Jack Taylor": ["suttonUnitedFCJackTaylor"],
  "Terry Taylor": ["bBCTerryTaylor"],
  "Tyreece Simpson": ["bBCTyreeceSimpson"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Stevenage · 2026/27 Season`,
  heroLede: `Transfer window active. Stevenage preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
