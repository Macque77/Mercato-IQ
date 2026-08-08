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
  {name:"Terry Taylor", sub:"Unknown · Unknown · Midfielder", club:"Charlton Athletic", pos:"Midfielder", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Charlton Athletic"},
  {name:"Terence Vancooten", sub:"Defender", club:"Burton Albion", pos:"Defender", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Stevenage re-sign defender from Burton Albion"}
];
const CONFIRMED_OUT = [
  {name:"Tyreece Simpson", sub:"Unknown · Unknown · Unknown", club:"Port Vale", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released to Port Vale"}
];
const INCOMING = [
  {name:"Olly Sanderson", sub:"Striker · England", club:"Fulham", pos:"ST", report:"Fulham striker signs for Stevenage", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-08T18:06:10Z", baseProb:100},
  {name:"Jack Taylor", sub:"Midfielder · England", club:"Sutton United", pos:"MID", report:"Jack Taylor completes Stevenage move", src:"Sutton United Football Club", tier:3, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-08T18:06:10Z", baseProb:100},
  {name:"Terry Taylor", sub:"Midfielder · England", club:"Charlton Athletic", pos:"MID", report:"Ex-Charlton midfielder Terry Taylor signs for Stevenage", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing on free transfer", lastSeen:"2026-08-08T18:06:10Z", baseProb:100},
  {name:"Terence Vancooten", sub:"Defender · Netherlands", club:"Burton Albion", pos:"DEF", report:"Stevenage re-sign defender from Burton Albion", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-08T18:06:10Z", baseProb:100},
  {name:"Jack Barden", sub:"Defender · England", club:"Norwich City", pos:"DEF", report:"Ex-City stopper Barden seals Stevenage move", src:"The Pink Un", tier:3, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"up", note:"Confirmed signing", lastSeen:"2026-08-08T18:06:10Z", baseProb:100}
];
const OUTGOING = [
  {name:"Harvey White", sub:"MF", club:"Plymouth Argyle", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Plymouth reportedly backed to complete a deal for the midfielder.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"Rumour from ~1 week ago; no recent confirmation of deal. Snippets reference interest but not completion."},
  {name:"Dan Phillips", sub:"MF", club:"Blackburn Rovers", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Championship side reportedly plotting a move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"Rumour from ~1 week ago; no recent confirmation of deal."},
  {name:"Tyreece Simpson", sub:"Forward · England", club:"Port Vale", pos:"FW", report:"Port Vale sign Tyreece Simpson after Stevenage release", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed departure", lastSeen:"2026-08-08T18:06:10Z", baseProb:100}
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
  bBCTyreeceSimpson: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5RWVhVQUlJMDAxcDRNS29nanlKLWotcFhreDNMS2hJNGE0LXktcjluVUs2TlNNOGhpXy1ncUMwQjROV3R5LTMzblB6emplQXRXd2hac3hod2hzVVRDLWVxUXdaUWVibFE?oc=5"},
  bBCTerenceVancooten: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBUWEhfeENhRXQ5UlA4Qm56Z0tpb0Z6RlFFR0Qwamx6RmE2YTF4Uk82TjlfeF9nNG9FalJNM21Kbm5KU3d6T1laVlBwNkpUdnBqM2owT1hDZ0JESEtnWlNVNzFJV2I4c28"},
  bBCOllySanderson1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE5FMUxteEVxZ3VvNnBpRVJrWGNqY0xwYTEyTDJRNUt6Qy0tZURQY1Nrc2EtN2lkM1JkYkk5MGlObFhVRERuc3R6SUUwVWtoNWVvczRVSFZXMERWdHR5cVFtNFdMcnU4dFIyVmc"},
  suttonUnitedJackTaylor: {l:"Sutton United", u:"https://news.google.com/rss/articles/CBMigAFBVV95cUxNdXZrel9JZFhQS2MwVmpEanRaZ2ZlRVJwclFCcWlDVUpVWEhmVFgzdEZmcXBuaFFTWG5EdmVjS0prNW5ScUF4MXJQX1ZQaEJaNFR4Z3B0N3ZWYVp1bktJZ3dYbU5obi1LZkZfQ2o4c2Y4Ym8zWFBqRUtxZEhCRUxPRA"},
  bBCTerryTaylor1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE0xTHVKaEpZS19xSEctWFgzOEVhTDRSZGxzejV5U1RsZ3BhNEx5aEdtdEtXaXZKQ2x6MmVrSnZNWUR5N2FyTTdNOXBHcTVlWEJSdndtY1hFRVdrcmlqUWR5Q2FMQnpSZWc"},
  bBCTyreeceSimpson1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5RWVhVQUlJMDAxcDRNS29nanlKLWotcFhreDNMS2hJNGE0LXktcjluVUs2TlNNOGhpXy1ncUMwQjROV3R5LTMzblB6emplQXRXd2hac3hod2hzVVRDLWVxUXdaUWVibFE"},
  thePinkUnJackBarden: {l:"The Pink Un", u:"https://news.google.com/rss/articles/CBMirAFBVV95cUxNUVM3RG1GYjZ6U3NfRWtGdkZDTlZORGV4OTFXUU4yZ2tKUnk0dUpSRjdDNDVDVkpJOFU2UTRHekpyaEtraHU4N1llNjkwTVlCa3pCd1J2OGhwT1lkZ1BWc1pzSGdNbkZqdzRTTEk0M3RObG1xdkRLUE9VbVNaT1dqeml0M25fLU4yeUZtbFhGbi00YzRZS19IMHZESUJ5OENIWXRUYmlBTWd3d1FO?oc=5"},
  bBCTerenceVancooten1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBUWEhfeENhRXQ5UlA4Qm56Z0tpb0Z6RlFFR0Qwamx6RmE2YTF4Uk82TjlfeF9nNG9FalJNM21Kbm5KU3d6T1laVlBwNkpUdnBqM2owT1hDZ0JESEtnWlNVNzFJV2I4c28?oc=5"},
  thePinkUnJackBarden1: {l:"The Pink Un", u:"https://news.google.com/rss/articles/CBMirAFBVV95cUxNUVM3RG1GYjZ6U3NfRWtGdkZDTlZORGV4OTFXUU4yZ2tKUnk0dUpSRjdDNDVDVkpJOFU2UTRHekpyaEtraHU4N1llNjkwTVlCa3pCd1J2OGhwT1lkZ1BWc1pzSGdNbkZqdzRTTEk0M3RObG1xdkRLUE9VbVNaT1dqeml0M25fLU4yeUZtbFhGbi00YzRZS19IMHZESUJ5OENIWXRUYmlBTWd3d1FO"}};

const LINKMAP = {
  "Harvey White": ["gnews-harveywhite"],
  "Dan Phillips": ["gnews-danphillips"],
  "Olly Sanderson": ["bBCOllySanderson", "bBCOllySanderson1"],
  "Jack Taylor": ["suttonUnitedFCJackTaylor", "suttonUnitedJackTaylor"],
  "Terry Taylor": ["bBCTerryTaylor", "bBCTerryTaylor1"],
  "Tyreece Simpson": ["bBCTyreeceSimpson", "bBCTyreeceSimpson1"],
  "Terence Vancooten": ["bBCTerenceVancooten", "bBCTerenceVancooten1"],
  "Jack Barden": ["thePinkUnJackBarden", "thePinkUnJackBarden1"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Stevenage · 2026/27 Season`,
  heroLede: `Transfer window active. Stevenage preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
