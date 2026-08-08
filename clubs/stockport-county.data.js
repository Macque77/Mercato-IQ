/* ============================================================
   MERCATO IQ · CLUB DATA · STOCKPORT COUNTY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Stockport County", mono: "SC", slug: "stockport-county",
  primary: "#005BAC", primaryBright: "#6FB2FF", primaryDeep: "#00305C",
  primaryRgb: "0,91,172",
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
  queries: ["stockport-county transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ben Osborn", sub:"Midfielder", club:"Nottingham Forest", pos:"M", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ex-loan midfielder signed permanently"},
  {name:"Ryan Glover", sub:"Winger", club:"Barnet", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Barnet winger joins on three-year deal"},
  {name:"Wood", sub:"Midfielder", club:"Shelbourne", pos:"M", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Shelbourne midfielder signed"},
  {name:"Kyron Gordon", sub:"Defender", club:"Rochdale", pos:"D", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer from Rochdale"}
];
const CONFIRMED_OUT = [
  {name:"Joseph Olowu", sub:"Centre-back", club:"Leyton Orient", pos:"D", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Centre-back signs for Leyton Orient"}
];
const INCOMING = [
  {name:"Tyrese Shade / Jayden Wareham", sub:"FW", club:"Undisclosed / Exeter City", pos:"FW", report:"~1 wk ago", src:"Various", tier:4, fee:"Undisclosed", truth:30, prob:20, light:'o', trend:'flat', note:"Floated as possible replacements if Adama Sidibeh departs.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"no longer a current link"},
  {name:"Ossama Ashley", sub:"MF", club:"Free agent", pos:"MF", report:"~1 wk ago", src:"Various", tier:4, fee:"Free", truth:40, prob:30, light:'y', trend:'flat', note:"Competing with Barnsley for the free agent.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"No recent snippet confirmation; entry stale ~1 week"},
  {name:"Ben Osborn", sub:"Midfielder", club:"Nottingham Forest", pos:"M", report:"Ex-loan midfielder signed permanently", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Permanent signing after loan spell", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Ryan Glover", sub:"Winger", club:"Barnet", pos:"W", report:"Barnet winger joins on three-year deal", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Three-year contract agreed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Wood", sub:"Midfielder", club:"Shelbourne", pos:"M", report:"Shelbourne midfielder signed", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"First name not provided in snippet", lastSeen:"2026-08-07T01:42:32Z", baseProb:100, dead:true, deadReason:"Incomplete player name; insufficient confirmation in recent snippets"},
  {name:"Kyron Gordon", sub:"Rochdale · Defender", club:"Rochdale", pos:"D", report:"Stockport County sign Rochdale defender on free transfer", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-08T07:40:33Z", baseProb:100, dead:true, deadReason:"No recent snippet confirmation; entry stale"}
];
const OUTGOING = [
  {name:"Adama Sidibeh", sub:"ST", club:"Middlesbrough / Rangers / Blackburn Rovers / Bristol City", pos:"ST", report:"~1 wk ago", src:"Alan Nixon", tier:3, fee:"Relatively low cost", truth:60, prob:50, light:'y', trend:'flat', note:"Four clubs credited with interest in the Gambia international.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50, dead:true, deadReason:"no longer a current link"},
  {name:"Joseph Olowu", sub:"unknown · unknown · CB", club:"Leyton Orient", pos:"CB", report:"Centre-back departs for Leyton Orient", src:"BBC", tier:2, fee:"Undisclosed", truth:95, prob:98, light:"g", trend:"down", note:"Confirmed departure to Leyton Orient", lastSeen:"2026-08-08T18:06:10Z", baseProb:98}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-tyreseshadejaydenwareham": {l:"Related news search: Tyrese Shade / Jayden Wareham", u:"https://news.google.com/search?q=Stockport%20County%20Tyrese%20Shade%20/%20Jayden%20Wareham%20transfer&hl=en-GB&gl=GB"},
  "gnews-ossamaashley": {l:"Related news search: Ossama Ashley", u:"https://news.google.com/search?q=Stockport%20County%20Ossama%20Ashley%20transfer&hl=en-GB&gl=GB"},
  "nixon": {l:"Alan Nixon", u:"https://x.com/reluctantnicko"},
  bBCBenOsborn: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE9tai0xZW5iMmhvR0RYS1JoeU02VkJsUkxqWk4wa0J3Rks5a0JaV1I2OUtiMU1aQ1ltT1JCRFVsb09kMXFUZENnR084YUdMVFhQcXkzSmowRTZRd3dWYTUzZUpFVEc3QXQ0eEE?oc=5"},
  bBCRyanGlover: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBvbGdMRHZsNm9Mdkl6Zkk3S21mc2t0a1pvSW5uYWpSSEJEZTZTT3ZLeUhPcWZhNjdSY0tOUzdLLUFZbE5iRy15WFpHRktWckVDUW1nclZnTF9PSlQyRzJVZFRoQm50djQ?oc=5"},
  stockportCountyJasonAdigun: {l:"Stockport County", u:"https://news.google.com/rss/articles/CBMiiwFBVV95cUxPMFBFSXdmcWhPTEV0T180dDVYWHpmZnlDNnBfVTVtR184c2MwbzVmMG9mSkVDYmJuYzY4b3htYTBZMW9nak5mR2JFLUh1SlZwbzgyX3RSSUpLLU9jQVlCT3NMekE3NFVCNnQ0bnQyMUJpUlpTczVEeXZlSElvczQ1NWNYRFBWekhEUGtz?oc=5"},
  bBCWood: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTFBxRmRIaXNQSlJzTlljOTZORVBaVkEyQmZXSlEyWFJiVjBPOXBrS1BpTkIzR25CeUt0MzhKZ2gzc282cVBYc0MxbzY1LUwwR1dVNHZnVzlwWEowM1I5Y1I0NEpQcjJLU1lYSXc?oc=5"},
  bBCJosephOlowu: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9IYncxWW81SUpON0NLdXRoMDBDUU80M05ybElBRlJUd01yZkhacDdRSExfaDlBMTNOY041Z243bjBrdDZ1SXRFSkRIa3R4bmZBU1hIUXpHczlqSEpyS0szMlY0TDFWTkE?oc=5"},
  bBCKyronGordon: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5uMDd5VndYVnhzYndJSGhlN1hvYVZDNTBfMkJWX1k3YV9LeEJ6ZXFoZUpPSktFTzRrdHZJRDBfTm51U2tFbXk1M2RETE1qYmhUMUE1cjFBenpkXzVJVHBvOHpxYmh0RWc"},
  stockportCountyJasonAdigun1: {l:"Stockport County", u:"https://news.google.com/rss/articles/CBMiiwFBVV95cUxPMFBFSXdmcWhPTEV0T180dDVYWHpmZnlDNnBfVTVtR184c2MwbzVmMG9mSkVDYmJuYzY4b3htYTBZMW9nak5mR2JFLUh1SlZwbzgyX3RSSUpLLU9jQVlCT3NMekE3NFVCNnQ0bnQyMUJpUlpTczVEeXZlSElvczQ1NWNYRFBWekhEUGtz"},
  bBCBenOsborn1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE9tai0xZW5iMmhvR0RYS1JoeU02VkJsUkxqWk4wa0J3Rks5a0JaV1I2OUtiMU1aQ1ltT1JCRFVsb09kMXFUZENnR184YUdMVFhQcXkzSmowRTZRd3dWYTUzZUpFVEc3QXQ0eEE"},
  bBCRyanGlover1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBvbGdMRHZsNm9Mdkl6Zkk3S21mc2t0a1pvSW5uYWpSSEJEZTZTT3ZLeUhPcWZhNjdSY0tOUzdLLUFZbE5iRy15WFpHRktWckVDUW1nclZnTF9PSlQyRzJVZFRoQm50djQ"},
  bBCWood1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTFBxRmRIaXNQSlJzTlljOTZORVBaVkEyQmZXSlEyWFJiVjBPOXBrS1BpTkIzR25CeUt0MzhKZ2gzc282cVBYc0MxbzY1LUwwR1dVNHZnVzlwWEowM1I5Y1I0NEpQcjJLU1lYSXc"},
  bBCJosephOlowu1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9IYncxWW81SUpON0NLdXRoMDBDUU80M05ybElBRlJUd01yZkhacDdRSExfaDlBMTNOY041Z243bjBrdDZ1SXRFSkRIa3R4bmZBU1hIUXpHczlqSEpyS0szMlY0TDFWTkE"}};

const LINKMAP = {
  "Tyrese Shade / Jayden Wareham": ["gnews-tyreseshadejaydenwareham"],
  "Ossama Ashley": ["gnews-ossamaashley"],
  "Adama Sidibeh": ["nixon"],
  "Ben Osborn": ["bBCBenOsborn", "bBCBenOsborn1"],
  "Ryan Glover": ["bBCRyanGlover", "bBCRyanGlover1"],
  "Jason Adigun": ["stockportCountyJasonAdigun", "stockportCountyJasonAdigun1"],
  "Wood": ["bBCWood", "bBCWood1"],
  "Joseph Olowu": ["bBCJosephOlowu", "bBCJosephOlowu1"],
  "Kyron Gordon": ["bBCKyronGordon"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Stockport County · 2026/27 Season`,
  heroLede: `Transfer window active. Stockport County preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
