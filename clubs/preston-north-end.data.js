/* ============================================================
   MERCATO IQ · CLUB DATA · PRESTON NORTH END · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Preston North End", mono: "PNE", slug: "preston-north-end",
  primary: "#1E3A8A", primaryBright: "#6FA8FF", primaryDeep: "#0F1F4A",
  primaryRgb: "30,58,138",
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
  queries: ["preston-north-end transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Lee Nicholls", sub:"33 · GK · England", club:"Huddersfield Town", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Alan Nixon reports the deal agreed, reliable on lower-league specifics and reads as done barring paperwork."},
  {name:"Alfie Devine", sub:"21 · England · Midfielder", club:"Tottenham Hotspur", pos:"Midfielder", fee:"Club-record", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club-record signing from Tottenham Hotspur"}
];
const CONFIRMED_OUT = [
  {name:"Michael Smith", sub:"", club:"Mansfield Town", pos:"", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Striker joins Mansfield Town on free transfer"},
  {name:"Ben Whiteman", sub:"27 · England · Midfielder", club:"Wrexham", pos:"Midfielder", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Preston captain signed by Wrexham"}
];
const INCOMING = [
  {name:"Tommy Watson", sub:"20 · LW · England", club:"Brighton", pos:"LW", report:"Tommy Watson incoming", src:"Sunderland Echo", tier:0, fee:"Loan", truth:50, prob:50, light:"y", trend:"down", note:"On-page rumour, no fresh snippet details available", lastSeen:"2026-08-08T07:40:33Z", baseProb:50, dead:true, deadReason:"Incoming rumour not confirmed or updated in recent news; removed to avoid stale entry"},
  {name:"Lee Nicholls", sub:"Goalkeeper", club:"Huddersfield Town", pos:"GK", report:"Lee Nicholls joins Preston North End", src:"htafc.com", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official announcement from Huddersfield Town", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Alfie Devine", sub:"21 · England · Midfielder", club:"Tottenham Hotspur", pos:"Midfielder", report:"Preston North End sign Tottenham Hotspur midfielder for club-record fee", src:"bbc.com", tier:2, fee:"Club-record", truth:100, prob:100, light:"g", trend:"flat", note:"Deal confirmed", lastSeen:"2026-08-08T16:04:57Z", baseProb:100}
];
const OUTGOING = [
  {name:"Daniel Jebbison", sub:"FW · Canada", club:"Blackburn Rovers", pos:"FW", report:"Daniel Jebbison outgoing", src:"Lancashire Post", tier:0, fee:"Loan + option", truth:50, prob:50, light:"y", trend:"down", note:"On-page rumour, no fresh snippet details available", lastSeen:"2026-08-08T07:40:33Z", baseProb:50, dead:true, deadReason:"Outgoing rumour unresolved; no confirmation of completed move in recent snippets"},
  {name:"Michael Smith", sub:"Striker", club:"Mansfield Town", pos:"ST", report:"Michael Smith joins Mansfield Town on free transfer", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"up", note:"Official confirmed departure", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Ben Whiteman", sub:"", club:"Wrexham", pos:"", report:"Wrexham sign Preston North End captain", src:"BBC", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Captain; deal appears confirmed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100, dead:true, deadReason:"Confirmed transfer to Wrexham (moved to confirmed_out)"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-leenicholls": {l:"Related news search: Lee Nicholls", u:"https://news.google.com/search?q=Preston%20North%20End%20Lee%20Nicholls%20transfer&hl=en-GB&gl=GB"},
  "sunderlandecho": {l:"Sunderland Echo", u:"https://www.sunderlandecho.com/sport/football"},
  "lancashirepost": {l:"Lancashire Post", u:"https://www.lep.co.uk/sport"},
  htafccomLeeNicholls: {l:"htafc.com", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxNY2txQS1kdlJlMVhUVnFhb1pCZGRMV0NNd0tpWFhEQjRidmItcWRkM1NidDhRZHVTbjZtbkRhcG1lQ2tHWkY0Y2loUXR2RVktQ05ORlpqbERWTVRxMDQ4UlJuUXo2SVN0SWVrZTV1QWYzNGQ3Mkt5YUpKMXlfVWNyWXloQVVUQVdLSEpTUnItb00?oc=5"},
  bBCMichaelSmith: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9BUVA0dFkxS3E5WFp4eHZ2ZGFiTzIzX0FYUDZVc0w5cURaMnpDMzZjZzZNSkFqYVhrSG83SldOODR3UFJFMVUzbWFGYmpHcEhQbVlPWk5zSUNFZ2h5Y1dvX1FKcldWb28?oc=5"},
  bBCGoogleNewsBenWhiteman: {l:"BBC / Google News", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5DSS1jOGdRQkZ6MEw4VzlrNVhOdXFMb280akszbk91SnU5Tmc2OGFzb1I0V25ndXpkenBkek4zdHZockJGWHVBZTYxQ3Q1WHlDd0g5Vk9RcllFRlFvUHI5QzMxcS1ZV3c?oc=5"},
  bBCNewsAlfieDevine: {l:"BBC News", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5nSlNLRVRiSTdiSkVNQS1hQUlyX29RY0RUOE81eERUMnZWQXpTTG9EcFdyUnhDekdtbHl3RVlwTU1yOWFyZTY2MFp1NkhSbFhNbi1ncjBXNGRqdXN1dmFadzVwbjlUS2s"},
  huddersfieldTownFCLeeNicholls: {l:"Huddersfield Town FC", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxNY2txQS1kdlJlMVhUVnFhb1pCZGRMV0NNd0tpWFhEQjRidmItcWRkM1NidDhRZHVTbjZtbkRhcGtlQ2tHWkY0Y2loUXR2RVktQ05ORlpqbERWTVRxMDQ4UlJuUXo2SVN0SWVrZTV1QWYzNGQ3Mkt5YUpKMXlfVWNyWXloQVVUQVdLSEpTUnItb00"},
  lancashireEveningPostMichaelSmith: {l:"Lancashire Evening Post", u:"https://news.google.com/rss/articles/CBMi6AFBVV95cUxQY0pCSUktQmFfTXpHWlllQ1djV0VFRUVWdXR3VUNuNzFQY0pIZC1oeGRPU0NMU0h1Rlg4cGhiczFQSURrUE85VE1BYzdIWFJEeXhYanFlUGJIMmhmYmdFNkFrMHhXNUpBMS1kMUlVZUxZUzBCc3d1MmltOHMyeXNtSVlOUDlTbVhpRzdfWHozX2RPTDFCdDR4YkFEX2phX1BEamJLZF9mRmFNSkxMMEpUTi12Y0dvRUo5R2VCTTNyNjVYM3k1dDBQYm1nbmZmU1gwb2poVlVDeWw0UVhWR00xcWlkRXBQZWRa"},
  bBCNewsBenWhiteman: {l:"BBC News", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5DSS1jOGdRQkZ6MEw4VzlrNVhOdXFMb284akszbk91SnU5Tmc2OGFzb1I0V25ndXpkenBkek4zdHZockJGWHVBZTYxQ3Q1WHlDd0g5Vk9RcllFRlFvUHI5QzMxcS1ZV3c"}};

const LINKMAP = {
  "Lee Nicholls": ["gnews-leenicholls", "htafccomLeeNicholls", "huddersfieldTownFCLeeNicholls"],
  "Tommy Watson": ["sunderlandecho"],
  "Daniel Jebbison": ["lancashirepost"],
  "Michael Smith": ["lancashirepost", "bBCMichaelSmith", "lancashireEveningPostMichaelSmith"],
  "Ben Whiteman": ["bBCGoogleNewsBenWhiteman", "bBCNewsBenWhiteman"],
  "Alfie Devine": ["bBCNewsAlfieDevine"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Preston North End · 2026/27 Season`,
  heroLede: `Transfer window active. Preston North End preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};