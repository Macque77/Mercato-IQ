/* ============================================================
   MERCATO IQ · CLUB DATA · NOTTS COUNTY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Notts County", mono: "NC", slug: "notts-county",
  primary: "#1F2023", primaryBright: "#E8E8E8", primaryDeep: "#0F1012",
  primaryRgb: "31,32,35",
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
  queries: ["notts-county transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Emile Acquah", sub:"ST", club:"Dundee FC", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Two-year deal, sealed and confirmed."}
];
const CONFIRMED_OUT = [
  {name:"Matthew Dennis", sub:"ST", club:"Burton Albion", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"See Burton Albion entry."}
];
const INCOMING = [
  {name:"Tommi O'Reilly", sub:"MF", club:"Aston Villa", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:60, prob:50, light:'y', trend:'up', note:"Notts reportedly set to beat Sheffield Wednesday to the signing.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50, dead:true, deadReason:"No fresh snippet found; treated as stale (1+ week old without confirmation)"},
  {name:"Michael Mellon", sub:"ST", club:"Burnley", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"Racing Plymouth Argyle for the striker's signature.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"No fresh snippet found; treated as stale (1+ week old without confirmation)"},
  {name:"Devon Matthews", sub:"DF", club:"Undisclosed", pos:"DF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Competing with Wigan Athletic.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"No fresh snippet found; treated as stale (1+ week old without confirmation)"},
  {name:"Luka Smyth", sub:"Australian · Forward", club:"VPS", pos:"FW", report:"Signed from Finnish side VPS", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer completed", lastSeen:"2026-08-08T18:06:10Z", baseProb:100},
  {name:"Callum Roberts", sub:"Position · Nationality", club:"Notts County", pos:"?", report:"Returns to club", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer completed", lastSeen:"2026-08-08T18:06:10Z", baseProb:100},
  {name:"Matt Baker", sub:"Defender · Nationality", club:"Newport County", pos:"DEF", report:"Signed ex-Newport County defender", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer completed", lastSeen:"2026-08-08T18:06:10Z", baseProb:100},
  {name:"Jack Evans", sub:"Midfielder · Nationality", club:"Harrogate Town", pos:"MID", report:"Notts County sign Harrogate Town midfielder", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"up", note:"Transfer completed", lastSeen:"2026-08-08T18:06:10Z", baseProb:100}
];
const OUTGOING = [
  {name:"Alassana Jatta", sub:"ST", club:"Undisclosed (Danish top flight)", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"£425k", truth:55, prob:40, light:'y', trend:'flat', note:"Bolton Wanderers and Bradford City reportedly trying to hijack the move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link"},
  {name:"Dennis", sub:"Forward", club:"Burton", pos:"F", report:"Signed by Burton Albion", src:"BBC", tier:2, fee:"", truth:95, prob:100, light:"g", trend:"flat", note:"", lastSeen:"2026-08-07T01:42:32Z", baseProb:100, dead:true, deadReason:"Confirmed transfer to Burton Albion - use full name Matthew Dennis"},
  {name:"Matthew Dennis", sub:"Forward · Nationality", club:"Burton Albion", pos:"FW", report:"Burton Albion sign forward from Notts County", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"up", note:"Transfer completed", lastSeen:"2026-08-08T18:06:10Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-emileacquah": {l:"Related news search: Emile Acquah", u:"https://news.google.com/search?q=Notts%20County%20Emile%20Acquah%20transfer&hl=en-GB&gl=GB"},
  "gnews-matthewdennis": {l:"Related news search: Matthew Dennis", u:"https://news.google.com/search?q=Notts%20County%20Matthew%20Dennis%20transfer&hl=en-GB&gl=GB"},
  "gnews-tommioreilly": {l:"Related news search: Tommi O'Reilly", u:"https://news.google.com/search?q=Notts%20County%20Tommi%20O%27Reilly%20transfer&hl=en-GB&gl=GB"},
  "gnews-michaelmellon": {l:"Related news search: Michael Mellon", u:"https://news.google.com/search?q=Notts%20County%20Michael%20Mellon%20transfer&hl=en-GB&gl=GB"},
  "gnews-devonmatthews": {l:"Related news search: Devon Matthews", u:"https://news.google.com/search?q=Notts%20County%20Devon%20Matthews%20transfer&hl=en-GB&gl=GB"},
  "gnews-alassanajatta": {l:"Related news search: Alassana Jatta", u:"https://news.google.com/search?q=Notts%20County%20Alassana%20Jatta%20transfer&hl=en-GB&gl=GB"},
  bBCLukaSmyth: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE54V0dLbEp2U01XbExyNzA2T3ZRYmRmMGxNcDBJdlAxdjl0dDlkdXBzajE2SGdrNlJwbHU1b212bWJFdXJRTC1wQl94MW1TbV9VeVE4bmxNaUU1S2xSV0w2ZTNvLXpfSDg"},
  bBCJamesGibbons: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBVNzJuMEhzdkViR0ZIXzN2SzE3VWV1ckEtcjFKbmFpNWR3WXBCTlN3dDhLemZxSGFkWXRZSVhaLTVVVDllVmsybWFsYWpRblZDVDBwVTlrYWh4a3BuMXdQb0VubW9lcGs"},
  bBCMattBaker: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9WWnFLRXZEc0xMMjlrNjZUSWRlWW5PbjF4cXdKSmZwV1ZGc2VOLWdnUkl5eHYzMUZNbDhmbzNtaEdObEY1NTNyNDNRc0lDY0diWlFGRW5QV0JhQ2NHbDJYemI2eUVrYmc"},
  bBCDennis: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE9YTHZZUWxHZXBJV3JIdUZOMGVnWmpBdXhNQVdBZ1czb1lGU2VHU0FYOFJPbE1jSHJJdThqWDZNYTB1cUIyZHgydjhaeFhjT0xUWXQxWTdCWVV0WnhUQlRxc0ZnTV8zQXNMTGc"},
  bBCJackEvans: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1GSjM1c2RVeFNsRkQ3NXJLazNyU2NKVnJQVndkd2N3LV9ScElsdG5xTEJoUWo4Nk9OTENacFpDaTMxVl9sN25QU0tWZ0FHZU96cWJHWl9vSGtqZHFhV1dwX19xQWppM2c"},
  nottsCountyFCWillJarvis: {l:"Notts County FC", u:"https://news.google.com/rss/articles/CBMiggFBVV95cUxPbnNBa0FtaVNIWHU2VnVYMHZkZGt1OFdCRGZfT1Q1TDZVdHpsX3RzUExFS2xGSFZMd25fOVRQRlBSMUpqX3RCSThwcENXdDlXMVp5TWc2TkVia3JqS0hPMlF0aVB0LUhiMEl3TzdvU2VpZG5wclRwOUc2eVZjdEVMZTh3"},
  bBCLukaSmyth1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE54V0dLbEp2U01XbExyNzA2T3ZRYmRmMGxNcDBJdlAxdjl0dDlkdXBzajE2SGdrNlJwbHU1b212bWJFdXJRTC1wQl94MW1TbV9VeVE4bmxNaUU1S2xSV0w2ZTNvLXpfSDg?oc=5"},
  bBCJamesGibbons1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBVNzJuMEhzdkViR0ZIXzN2SzE3VWV1ckEtcjFKbmFpNWR3WXBCTlN3dDhLemZxSGFkWXRZSVhaLTVVVDllVmsybWFsYWpRblZDVDBwVTlrYWh4a3BuMXdQb0VubW9lcGs?oc=5"},
  bBCMattBaker1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9WWnFLRXZEc0xMMjlrNjZUSWRlWW5PbjF4cXdKSmZwV1ZGc2VOLWdnUkl5eHYzMUZNbDhmbzNtaEdObEY1NTNyNDNRc0lDY0diWlFGRW5QV0JhQ2NHbDJYemI2eUVrYmc?oc=5"},
  bBCJackEvans1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1GSjM1c2RVeFNsRkQ3NXJLazNyU2NKVnJQVndkd2N3LV9ScElsdG5xTEJoUWo4Nk9OTENacFpDaTMxVl9sN25QU0tWZ0FHZU96cWJHWl9vSGtqZHFhV1dwX19xQWppM2c?oc=5"},
  nottsCountyFCWillJarvis1: {l:"Notts County FC", u:"https://news.google.com/rss/articles/CBMiggFBVV95cUxPbnNBa0FtaVNIWHU2VnVYMHZkZGt1OFdCRGZfT1Q1TDZVdHpsX3RzUExFS2xGSFZMd25fOVRQRlBSMUpqX3RCSThwcENXdDlXMVp5TWc2TkVia3JqS0hPMlF0aVB0LUhiMEl3TzdvU2VpZG5wclRwOUc2eVZjdEVMZTh3?oc=5"},
  bBCMatthewDennis: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE9YTHZZUWxHZXBJV3JIdUZOMGVnWmpBdXhNQVdBZ1czb1lGU2VHU0FYOFJPbE1jSHJJdThqWDZNYTB1cUIyZHgydjhaeFhjT0xUWXQxWTdCWVV0WnhUQlRxc0ZnTV8zQXNMTGc?oc=5"}};

const LINKMAP = {
  "Emile Acquah": ["gnews-emileacquah"],
  "Matthew Dennis": ["gnews-matthewdennis", "bBCDennis", "bBCMatthewDennis"],
  "Tommi O'Reilly": ["gnews-tommioreilly"],
  "Michael Mellon": ["gnews-michaelmellon"],
  "Devon Matthews": ["gnews-devonmatthews"],
  "Alassana Jatta": ["gnews-alassanajatta"],
  "Luka Smyth": ["bBCLukaSmyth", "bBCLukaSmyth1"],
  "James Gibbons": ["bBCJamesGibbons", "bBCJamesGibbons1"],
  "Callum Roberts": ["bBCJamesGibbons", "bBCJamesGibbons1"],
  "Matt Baker": ["bBCMattBaker", "bBCMattBaker1"],
  "Dennis": ["bBCDennis"],
  "Jack Evans": ["bBCJackEvans", "bBCJackEvans1"],
  "Will Jarvis": ["nottsCountyFCWillJarvis", "nottsCountyFCWillJarvis1"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Notts County · 2026/27 Season`,
  heroLede: `Transfer window active. Notts County preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
