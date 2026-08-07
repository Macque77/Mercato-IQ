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

const CONFIRMED_IN = [
  {name:"Adam Phillips", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joins Bradford City"},
  {name:"Reece Welch", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joins Bradford City"},
  {name:"Jake Beesley", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joins Bradford City"},
  {name:"Kayden Jackson", sub:"", club:"Derby County", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departs Derby County for Bradford City"}
];
const CONFIRMED_OUT = [
  {name:"Ash Power", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Makes move to Wigan Athletic"}
];
const INCOMING = [
  {name:"Adam Phillips", sub:"MF", club:"Barnsley", pos:"MF", report:"Adam Phillips joins Bradford City", src:"Pete O'Rourke", tier:3, fee:"Undisclosed", truth:90, prob:90, light:"g", trend:"up", note:"On-page rumour, no fresh snippet detail", lastSeen:"2026-08-07T14:38:27Z", baseProb:90},
  {name:"Reece Welch", sub:"DF", club:"Undisclosed", pos:"DF", report:"Reece Welch joins Bradford City", src:"Yorkshire Post", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"up", note:"Graham Alexander excited by potential, deal progressing", lastSeen:"2026-08-07T14:38:27Z", baseProb:95},
  {name:"Jake Beesley", sub:"ST", club:"Burton Albion", pos:"ST", report:"Jake Beesley joins Bradford City", src:"Bradford City AFC", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Confirmed signing announcement", lastSeen:"2026-08-07T14:38:27Z", baseProb:95},
  {name:"Kayden Jackson", sub:"30 · England · F", club:"Derby County", pos:"Forward", report:"Kayden Jackson departs Derby County for Bradford City", src:"Derby County / Yorkshire Post", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Transfer confirmed by Derby County", lastSeen:"2026-08-07T14:38:27Z", baseProb:95}
];
const OUTGOING = [
  {name:"Lee Evans", sub:"MF", club:"Undisclosed", pos:"MF", report:"Lee Evans departs Bradford City", src:"FLW opinion", tier:3, fee:"Undisclosed", truth:85, prob:85, light:"g", trend:"up", note:"On-page rumour, no fresh snippet detail", lastSeen:"2026-08-07T14:38:27Z", baseProb:85, dead:true, deadReason:"Outgoing rumour; no recent snippet confirming departure"},
  {name:"Ash Power", sub:"Unknown · England · MF", club:"Wigan Athletic", pos:"Midfielder", report:"Ash Power makes move to Wigan Athletic", src:"Bradford City AFC", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Transfer confirmed", lastSeen:"2026-08-07T14:38:27Z", baseProb:95},
  {name:"Curtis Tilt", sub:"", club:"League One", pos:"Centre-half", report:"Curtis Tilt makes surprise switch to League One rivals", src:"", tier:2, fee:"", truth:90, prob:90, light:"g", trend:"flat", note:"Departure confirmed in snippet", lastSeen:"2026-08-07T14:38:27Z", baseProb:90, dead:true, deadReason:"Outgoing rumour; no recent snippet confirming move to League One"}
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
  bradfordCityAFCAshPower1: {l:"Bradford City AFC", u:"https://news.google.com/rss/articles/CBMifkFVX3lxTFB2bmlTcXlwTGFrYy1RS3pFTEdnVFd0c3oxSjAtc1NsM0FuZl9CbnNXYmFHRW9pQlk5LUtjNzBMTmlJYnVhOWc6W3V2UTdub3FTMFRjMUdITzFlMnVTSkFaQVVmeGZZb0tKa1V6RXd2T19qT0xTLVdRN0dYZkxLUQ?oc=5"},
  yorkshirepostcoukReeceWelch: {l:"yorkshirepost.co.uk", u:"https://news.google.com/rss/articles/CBMi3gFBVV95cUxPeW0xc1F6LVBQY0hpSjVtV0VEdXptQU02bHVldTdMeVJzVkR3WUoxWVdzbU5YVHo2YV9BSXl1TXRtS2djbTFtNDVNT0dWdDI1elZqdE56Qzdla0FCQmZuVUE0V05HNm9CcVRkR0k4T21YOUNQQWNuVUdjeFFjZExKM2FJVFFOb3FjbWFzWnBROV8yYTc1ZUJFbEpGMGppeUp4Wk9DZHZUVHBDZVZpOWFrdlRYc2VaNlhDOTFtT3ZKSUVySlMwWVZBR2ZXZzhVOXdVZ0RNcm1YRWVZUUlYcFE"},
  bradfordCityAFCJakeBeesley1: {l:"Bradford City AFC", u:"https://news.google.com/rss/articles/CBMie0FBVl95cUxPc3JBVmtNUEdNR3kxcG9idE9iaVI2bHBDQVFwcm5DM3pudVB4OXNwR0F5SnBNcDJYQXlNLThwVDRSb0kwWW0tVVUxUWbVFnZXplTXpqZnFUSWNZRmQwdEFZWmp1MU83T3ZJV0pzSnMxUGFweHhKbzBSYXRjYw"},
  derbyCountyKaydenJackson1: {l:"Derby County", u:"https://news.google.com/rss/articles/CBMilAFBVV95cUxNRjBTZEQtWTFvM1NxYmJqeURDc25nNHVrT1Z4Z0lLRG5VR3MtVGpXSmpsQTl0S3U0RlB1WERPd2hQMnA5NzFxNUlPdVF1RmJOMTVaeGMzUkpxMjh1UnVEWkFOb21oMllGUk5HNk5hZFFrNEFUX1Q0ZlNYWU00SDNaR3FpVDFqMThLQ3V6cXNxTDBIOER6"},
  bradfordCityAFCAshPower2: {l:"Bradford City AFC", u:"https://news.google.com/rss/articles/CBMifkFVX3lxTFB2bmlTcXlwTGFrYy1RS3pFTEdnVFd0c3oxSjAtc1NsM0FuZl9CbnNXYmFHRW9pQlk5LUtjNzBMTmlJYnVhOWd6V3F2UTdub3FTMFRjMUdITzFlMnVTSkFaQVVmeGZZb0tKa1V6RXd2T19qT0xTLVdRN0dYZkxLUQ"},
  yorkshirepostcoukCurtisTilt: {l:"yorkshirepost.co.uk", u:"https://news.google.com/rss/articles/CBMi5gFBVV95cUxOdUZ4R0RwdGR6NlB6dkFUdVhPTXNTQmpBeGlvNXg2aU55dUx0ZjlnWFl6YUEybEZNWE1uSlR1OEZBTjhrSEt4T0FUU2tnaDZLU1E5d1BtQVA2T29vR1lQcDBoSjc5ZkY0ci0tcjR1M1FmWWk2NjhWTjRFdDdnMFZUZzI0NUdENlJTelAtSmtwWTBjNTdCSHpmVDhEVEgxNkRuTjRjRGtZdWJLamYydmU3dWhDVV84VERMSzZwTVdEUC1wTjVmS1Q0cEVNN3cxcG1FRnZST190U0ZXT2g3WW5nT1NBclRBZw"},
  bradfordCityAFCAdamPhillips: {l:"Bradford City AFC", u:"https://news.google.com/rss/articles/CBMie0FVX3lxTE1fQmVndmpKZHhNdXJWUTUyY1c0SkpnTkF3Z25BRGhwNFY2cWk4amlNcDZEcU9UaXU5QVNVSGQtUl9MaGdNcmRFamZVQTNQemlvRWRQQkJ1SkVuenVrajVDemVYaFI2V1haVlNxOW5USlp4OGw4SDJsMHJpcw"},
  bradfordCityAFCJakeBeesley2: {l:"Bradford City AFC", u:"https://news.google.com/rss/articles/CBMie0FVX3lxTE9zckFWbU5QR01HeTFwb2J0T2JpUjZsUENBUXBuckMzem51UHg5c3BHQXlKcE1wMlhBeU0tOHBUNFJvSTBZbS1VVTFRbVFnZXplTXpqZnFUSWNZRmQwdEFZWmp1MU83T3ZJV0pzSnMxUGFweHhKbzBSYXRjYw"},
  derbyCountyKaydenJackson2: {l:"Derby County", u:"https://news.google.com/rss/articles/CBMilAFBVV95cUxNRjBTZEQtWTFvM1NxYmJqeURDc25nNHVrT1Z4Z0lLRGhVR3MtVGpXSmpsQTl0S3U0RlB1WERPd2hQMnA5NzFxNUlPdVF1RmJOMTVaeGMzUkpxMjh1UnVEWkFOb21oMllGUk5HNk5hZFFrNEFUX1Q0ZlNYWU00SDNaR3FpVDFqMThLQ3V6cXNxTDBIOER6"},
  yorkshirePostReeceWelch1: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMi3gFBVV95cUxPeW0xc1F6LVBQY0hpSjVtV0VEdXptQU02bHVldTdMeVJzVkR3WUoxWVdzbU5YVHo2YV9BSXl1TXRtS2djbTFtNDVNT0dWdDI1elZqdE56Qzdla0FCQmZuVUE0V05HNm9CcVRkR0k4T21YOUNQQWNuVUdjeFFjZExKM2FJVFFOb3FjbWFzWnBROV8yYTc1ZUJFbEpGMGpjeUp4Wk9DZHZUVHBDZVZpOWFrdlRYc2VaNlhDOTFtT3ZKSUVySlMwWVZBR2ZXZzhVOXdVZ0RNcm1YRWVZUUlYcFE"}};

const LINKMAP = {
  "Adam Phillips": ["orourke", "bradfordCityAFCAdamPhillips"],
  "Reece Welch": ["gnews-reecewelch", "yorkshirePostReeceWelch", "yorkshirepostcoukReeceWelch", "yorkshirePostReeceWelch1"],
  "Jake Beesley": ["gnews-jakebeesley", "bradfordCityAFCJakeBeesley", "bradfordCityAFCJakeBeesley1", "bradfordCityAFCJakeBeesley2"],
  "Lee Evans": ["flw"],
  "Kayden Jackson": ["derbyCountyKaydenJackson", "derbyCountyKaydenJackson1", "derbyCountyKaydenJackson2"],
  "Ash Power": ["bradfordCityAFCAshPower", "bradfordCityAFCAshPower1", "bradfordCityAFCAshPower2"],
  "Curtis Tilt": ["yorkshirepostcoukCurtisTilt"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Bradford City · 2026/27 Season`,
  heroLede: `Transfer window active. Bradford City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
