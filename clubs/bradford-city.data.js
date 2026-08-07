/* ============================================================
   MERCATO IQ · CLUB DATA · BRADFORD CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bradford City", mono: "BC", slug: "bradford-city",
  primary: "#7A263A", primaryBright: "#FDB927", primaryDeep: "#4A1723",
  primaryRgb: "122,38,58",
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
  queries: ["bradford-city transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Adam Phillips", sub:"MF", club:"Barnsley", pos:"MF", report:"Adam Phillips joins Bradford City", src:"Pete O'Rourke", tier:3, fee:"Undisclosed", truth:85, prob:85, light:"g", trend:"up", note:"On-page rumour from ~1 week ago", lastSeen:"2026-08-07T10:18:48Z", baseProb:85},
  {name:"Reece Welch", sub:"DF", club:"Undisclosed", pos:"DF", report:"Reece Welch joins Bradford City", src:"Yorkshire Post", tier:2, fee:"Undisclosed", truth:90, prob:90, light:"g", trend:"up", note:"Graham Alexander excited by potential; snippet confirms arrival and manager's confidence", lastSeen:"2026-08-07T10:18:48Z", baseProb:90},
  {name:"Jake Beesley", sub:"ST", club:"Burton Albion", pos:"ST", report:"Jake Beesley joins Bradford City", src:"Bradford City AFC", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"up", note:"Official club announcement 'BANTAMS SIGN BEESLEY'", lastSeen:"2026-08-07T10:18:48Z", baseProb:95},
  {name:"Kayden Jackson", sub:"30 · England · F", club:"Derby County", pos:"Forward", report:"Kayden Jackson departs Derby County for Bradford City", src:"Derby County / Yorkshire Post", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Official Derby County announcement of departure; sixth summer signing confirmed", lastSeen:"2026-08-07T10:18:48Z", baseProb:95}
];
const OUTGOING = [
  {name:"Lee Evans", sub:"MF", club:"Undisclosed", pos:"MF", report:"Lee Evans departs Bradford City", src:"FLW opinion", tier:3, fee:"Undisclosed", truth:75, prob:75, light:"g", trend:"up", note:"On-page rumour from ~2 weeks ago", lastSeen:"2026-08-07T10:18:48Z", baseProb:75},
  {name:"Ash Power", sub:"Unknown · England · MF", club:"Wigan Athletic", pos:"Midfielder", report:"Ash Power makes move to Wigan Athletic", src:"Bradford City AFC", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Official club announcement 'POWER MAKES WIGAN MOVE'", lastSeen:"2026-08-07T10:18:48Z", baseProb:95}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "orourke": {l:"Pete O'Rourke (Football Insider)", u:"https://x.com/talkSPORT_PeteO"},
  "gnews-reecewelch": {l:"Related news search: Reece Welch", u:"https://news.google.com/search?q=Bradford%20City%20Reece%20Welch%20transfer&hl=en-GB&gl=GB"},
  "gnews-jakebeesley": {l:"Related news search: Jake Beesley", u:"https://news.google.com/search?q=Bradford%20City%20Jake%20Beesley%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  derbyCountyKaydenJackson: {l:"Derby County", u:"https://news.google.com/rss/articles/CBMilAFBVV95cUxNRjBTZEQtWTFvM1NxYmJqeURDc25nNHVrT1Z4Z0lLRG5VR3MtVGpXSmpsQTl0S3U0RlB1WERPd2hQMnA5NzFxNUlPdVF1RmJOMTVaeGMzUkpxMjh1UnVEWkFOb21oMllGUk5HNk5hZFFrNEFUX1Q0ZlNYWU00SDNaR3FpVDFqMThLQ3V6cXNxTDBIOER6?oc=5"},
  bradfordCityAFCAshPower: {l:"Bradford City AFC", u:"https://news.google.com/rss/articles/CBMifkFVX3lxTFB2bmlTcXlwTGFrYy1RS3pFTEdnVFd0c3oxSjAtc1NsM0FuZl9CbnNXYmFHRW9pQlk5LUtjNzBMTmlJYnVhOWd6V3F2UTdub3FTMFRjMUdITzFlMnVTSkFaQVVmeGZZb0tKa1V6RXd2T19qT0xTLVdRN0dYZkxLUQ?oc=5"},
  yorkshirePostReeceWelch: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMi3gFBVV95cUxPeW0xc1F6LVBQY0hpSjVtV0VEdXptQU02bHVldTdMeVJzVkR3WUoxWVdzbU5YVHo2YV9BSXl1TXRtS2djbTFtNDVNT0dWdDI1elZqdE56Qzdla0FCQmZuVUE0V05HNm9CcVRkR0k4T21YOUNQQWNuVUdjeFFjZExKM2FJVFFOb3FjbWFzWnBROV8yYTc1ZUJFbEpGMGppeUp4Wk9DZHZUVHBDZVZpOWFrdlRYc2VaNlhDOTFtT3ZKSUVySlMwWVZBR2ZXZzhVOXdVZ0RNcm1YRWVZUUlYcFE?oc=5"},
  bradfordCityAFCJakeBeesley: {l:"Bradford City AFC", u:"https://news.google.com/rss/articles/CBMie0FVX3lxTE9zckFWbU5QR01HeTFwb2J0T2JpUjZsUENBUXBuckMzem51UHg5c3BHQXlKcE1wMlhBeU0tOHBUNFJvSTBZbS1VVTFRbVFnZXplTXpqZnFUSWNZRmQwdEFZWmp1MU83T3ZJV0pzSnMxUGFweHhKbzBSYXRjYw?oc=5"},
  bradfordCityAFCAshPower1: {l:"Bradford City AFC", u:"https://news.google.com/rss/articles/CBMifkFVX3lxTFB2bmlTcXlwTGFrYy1RS3pFTEdnVFd0c3oxSjAtc1NsM0FuZl9CbnNXYmFHRW9pQlk5LUtjNzBMTmlJYnVhOWc6W3V2UTdub3FTMFRjMUdITzFlMnVTSkFaQVVmeGZZb0tKa1V6RXd2T19qT0xTLVdRN0dYZkxLUQ?oc=5"}};

const LINKMAP = {
  "Adam Phillips": ["orourke"],
  "Reece Welch": ["gnews-reecewelch", "yorkshirePostReeceWelch"],
  "Jake Beesley": ["gnews-jakebeesley", "bradfordCityAFCJakeBeesley"],
  "Lee Evans": ["flw"],
  "Kayden Jackson": ["derbyCountyKaydenJackson"],
  "Ash Power": ["bradfordCityAFCAshPower", "bradfordCityAFCAshPower1"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Bradford City · 2026/27 Season`,
  heroLede: `Transfer window active. Bradford City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
