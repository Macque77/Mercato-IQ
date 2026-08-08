/* ============================================================
   MERCATO IQ · CLUB DATA · PETERBOROUGH UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Peterborough United", mono: "PU", slug: "peterborough-united",
  primary: "#0033A0", primaryBright: "#6EA8FF", primaryDeep: "#001A52",
  primaryRgb: "0,51,160",
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
  queries: ["peterborough-united transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Tom O'Connor", sub:"unknown · unknown · unknown", club:"Wrexham", pos:"unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer from Wrexham"}
];
const CONFIRMED_OUT = [
  {name:"Kyrell Lisbie", sub:"unknown · unknown · W", club:"Millwall", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer to Millwall on long-term deal"}
];
const INCOMING = [
  {name:"Kyreece Lisbie", sub:"W", club:"Colchester United", pos:"W", report:"~1 wk ago", src:"Various", tier:3, fee:"Six-figure fee", truth:55, prob:45, light:'y', trend:'flat', note:"Peterborough reportedly leading Reading in the race for the 11-goal winger.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"Name correction: BBC source confirms correct spelling is 'Kyrell Lisbie', not 'Kyreece'. Player now confirmed transferred to Millwall."},
  {name:"Harry Ashfield", sub:"FW", club:"Undisclosed", pos:"FW", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:40, prob:30, light:'y', trend:'flat', note:"Competing with Barnsley, with a Wrexham complication reported.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"No fresh information found in snippets; no credible reporting within 5+ weeks."},
  {name:"Tom O'Connor", sub:"unknown · unknown · unknown", club:"Wrexham", pos:"unknown", report:"Sealed permanent switch to Peterborough United", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Permanent transfer completed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const OUTGOING = [
  {name:"Kyrell Lisbie", sub:"unknown · unknown · W", club:"Millwall", pos:"W", report:"Signed by Millwall on 'long-term' deal", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Winger permanently transferred to Millwall", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-kyreecelisbie": {l:"Related news search: Kyreece Lisbie", u:"https://news.google.com/search?q=Peterborough%20United%20Kyreece%20Lisbie%20transfer&hl=en-GB&gl=GB"},
  "gnews-harryashfield": {l:"Related news search: Harry Ashfield", u:"https://news.google.com/search?q=Peterborough%20United%20Harry%20Ashfield%20transfer&hl=en-GB&gl=GB"},
  bBCTomOConnor: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBlMDJZMkhEZGgzbTRJUmUxMVo1TnMzejZNaDVDaU8wS010NnNXYkNJNW0yVEhNOGFOOThCZWtaVEVXQmF1UV9zdEZWT0hEMzhjd0s1ZkZMTWFWRzNjS2ZYMnVxRGFoOHc"},
  peterboroughTelegraphHarrisonJones: {l:"Peterborough Telegraph", u:"https://news.google.com/rss/articles/CBMi8AFBVV95cUxQck5Sd3kzNWE2WVp3LVdjQnNmSGl4dGpTemo4Ulhqdk9oMW1GclZtYWRZZ1FwRFY0Z2dkbXM3ajJMUnlTSnMyYnFOSjYya1B5OW1BRnh1N3FvLTdJN1c2WThaekJBbkR4VDd1SGYydzNIaThibVVCdHlNb2NCdEd4YWlmUW5INUtIUm0tZ0hUdlNhdllsN1BtcmdvVG56X3p3SVZqNmFfTTZELWhFYzJYMW9saWh2M2NlbmQ1VjF6eUdFSDYzcUdLZUJndDVMcFpsbjBSWklmY1dyWkY1ZHd5NUpCelFlR0s5ZXFJbWQ3RVY"},
  bBCKyrellLisbie: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9KeDRlbkJXX0IwaFZlTnowZlBpOWp1U0R1ZG0wWXFzeVQ1eHIySmRQTHdTcHBPMHdIekZuajRpYWF0QWtnTkZDQVVQZEFBaFRXaW9LMWpCVzJwT2RrTHI3Yy05MXZGT0E"}};

const LINKMAP = {
  "Kyreece Lisbie": ["gnews-kyreecelisbie"],
  "Harry Ashfield": ["gnews-harryashfield"],
  "Tom O'Connor": ["bBCTomOConnor"],
  "Harrison Jones": ["peterboroughTelegraphHarrisonJones"],
  "Kyrell Lisbie": ["bBCKyrellLisbie"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Peterborough United · 2026/27 Season`,
  heroLede: `Transfer window active. Peterborough United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
