/* ============================================================
   MERCATO IQ · CLUB DATA · WYCOMBE WANDERERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Wycombe Wanderers", mono: "WW", slug: "wycombe-wanderers",
  primary: "#0033A0", primaryBright: "#7FB2FF", primaryDeep: "#001A52",
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
  queries: ["wycombe-wanderers transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Conor Hazard", sub:"", club:"", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Northern Ireland goalkeeper confirmed on free transfer"},
  {name:"Aaron Morley", sub:"", club:"Bolton Wanderers", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Transfer confirmed by Bolton Wanderers"},
  {name:"Matt Macey", sub:"", club:"", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Former Arsenal, Luton Town and Portsmouth goalkeeper confirmed on free transfer"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Joel Randall", sub:"FW", club:"Free agent (released by Bolton)", pos:"FW", report:"Joel Randall joins Wycombe Wanderers", src:"Various", tier:0, fee:"Free", truth:40, prob:30, light:"y", trend:"down", note:"On-page entry retained; no fresh snippet data", lastSeen:"2026-08-08T16:04:57Z", baseProb:30},
  {name:"Conor Hazard", sub:"GK", club:"Free agent (ex-Plymouth Argyle)", pos:"GK", report:"Signed on free transfer", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Northern Ireland goalkeeper", lastSeen:"2026-08-08T16:04:57Z", baseProb:100},
  {name:"Aaron Morley", sub:"Unknown · Unknown · Unknown", club:"Bolton Wanderers", pos:"Unknown", report:"Joins from Bolton Wanderers", src:"Bolton Wanderers FC", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer confirmed by Bolton Wanderers", lastSeen:"2026-08-08T16:04:57Z", baseProb:100},
  {name:"Stoke City winger", sub:"Unknown · Unknown · Winger", club:"Stoke City", pos:"W", report:"Wycombe Wanderers sign former Stoke City winger on free transfer", src:"Bucks Free Press", tier:3, fee:"Free", truth:70, prob:75, light:"g", trend:"flat", note:"Player name not provided in snippet", lastSeen:"2026-08-07T01:42:32Z", baseProb:75, dead:true, deadReason:"Insufficient information to identify player; no confirmed signing details in snippets"},
  {name:"Matt Macey", sub:"", club:"", pos:"GK", report:"Signed on free transfer", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Former Arsenal, Luton Town and Portsmouth goalkeeper", lastSeen:"2026-08-08T16:04:57Z", baseProb:100}
];
const OUTGOING = [
  {name:"Fred Onyedinma", sub:"Unknown · Unknown · Unknown", club:"Wycombe Wanderers", pos:"Unknown", report:"Discussions ongoing regarding departure", src:"Bucks Free Press", tier:3, fee:"Unknown", truth:60, prob:50, light:"y", trend:"flat", note:"Talks underway", lastSeen:"2026-08-08T16:04:57Z", baseProb:50}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-joelrandall": {l:"Related news search: Joel Randall", u:"https://news.google.com/search?q=Wycombe%20Wanderers%20Joel%20Randall%20transfer&hl=en-GB&gl=GB"},
  "gnews-conorhazard": {l:"Related news search: Conor Hazard", u:"https://news.google.com/search?q=Wycombe%20Wanderers%20Conor%20Hazard%20transfer&hl=en-GB&gl=GB"},
  "gnews-fredonyedinma": {l:"Related news search: Fred Onyedinma", u:"https://news.google.com/search?q=Wycombe%20Wanderers%20Fred%20Onyedinma%20transfer&hl=en-GB&gl=GB"},
  boltonWanderersFCAaronMorley: {l:"Bolton Wanderers FC", u:"https://news.google.com/rss/articles/CBMickFVX3lxTFBad3ZmT2F6c2E5WUNMeDVoeHNqOTRxamY4MXpuNFUyNndoS3BGQlRKQlkyVjE1Q1VXbXlvdDdfZnpIUjZZeVZrVVVHOVZjSW9KSzlXOEVta1ZpOFFITjZXZFVCeWlGLXp5dDBaZDEzSS1Zdw?oc=5"},
  bBCMattMacey: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBVZndST00yT3otQS1OWUVuSm82M1VMMEtCc0RyZHlCQ1V0MG0yVGxNWEpPcno4QXZuMFo2UXFyV2oxQ00"},
  bucksFreePressStokeCitywinger: {l:"Bucks Free Press", u:"https://news.google.com/rss/articles/CBMinAFBVV95cUxNVWhCZHdpR3JoQjBCLWNqcmpVMjhwaVdQYm8ydlZwRll6X0k2YXJhVE9vZ2pZZFNqT3NrOHZ5dDdRMTBUSF9wRTVNV0wtSVJvakdieUNyZXRUdnpWN0ZYNHRHXzRTbWFoZ0tjMFl1TF9BNXBXZUJyS2w5cHNLUXphS1JGSUwtUm83YlRzMDRvemJjNEJYZ24tTS1rTHg"},
  bucksFreePressFredOnyedinma: {l:"Bucks Free Press", u:"https://news.google.com/rss/articles/CBMiogFBVV95cUxOUEJKejZlZXVSQ3BPSXNaZ0dMSHR4ejlKTUxtTlQ5TmZVOWl4b0FYeXdDTXBKUkJVTWZIOGwwZnprNVJvSm5pZzAyN0ctS0lESVgzXzJ4YnNqVFJRSmFSVzFpZlRzLUpJcjRFdGxmOWFQbmMzNTMzVWpkZXRDX1RUUF9PMVJUMkZwZEQ3bk5vUUo1NXo0Nk1CSlhDRy1WcFdhOHc"},
  belfastTelegraphConorHazard: {l:"Belfast Telegraph", u:"https://news.google.com/rss/articles/CBMi1gFBVV95cUxPVWw1U2R4OUdfaXE3RjFKV3lwMkgyUldqdmRLbl9meTRFV0FKM0s4a3JQamUwXzB1ZFc3ZmZZRkdWY19oOEcweFEtby1uaURGYU1aZEtkRVNKQmw4VlNpY1ZkWl9kLUNmQ3J6MHlsZUYzOS1OR3dLakVlX1ptVEVGR3pYUVF0dzRFRXV0RWlGRXdDLVBteFdpU2UwVXhlZUtteXpWSzZVYzBPemN6cnhyc0x2YUk5ai0wY29lUWJGRXlMNm9hcm9yNWVaQVI3VWVES2I1NVlR"},
  bBCConorHazard: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBqWVBTODhodnM5NXRGbmdZRUg4Q05JMlBSTDdndXU0SDJ1RDhGRExNZU9adEl4VTdaVmxweFNLWWl6Y3dQSE1XTzlCNUxmNmtSQWJFVFJkLTRPYlNIajJ3QlMtbUhJZEU"},
  boltonWanderersFCAaronMorley1: {l:"Bolton Wanderers FC", u:"https://news.google.com/rss/articles/CBMickFVX3lxTFBad3ZmT2F6c2E5WUNMeDVoeHNqOTRxamY4MXpuNFUyNndoS3BGQlRKQlkyVjE1Q1VXbXlvdDdfZnpIUjZZeVZrVVVHOVZjSW9KSzlXOEVta1ZpOFFITjZXZFVCeWlGLXp5dDBaZDEzSS1Zdw"},
  bBCMattMacey1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBVZndST00yT3otQS1OWUVuSm82M1VMMEtCc0RyZHlCQ1V0MG0yVGxNWEpPcno4QXZuMFo2UXFyV2oxQ040RkgtbHA0cUx4dG1pdVZOUWhzU2tSUEQ2Z05SckJDYjhDSjA"},
  bBCSportConorHazard: {l:"BBC Sport", u:"https://www.bbc.com"},
  boltonWanderersFCAaronMorley2: {l:"Bolton Wanderers FC", u:"https://www.bwfc.co.uk"},
  bucksFreePressFredOnyedinma1: {l:"Bucks Free Press", u:"https://www.bucksfreepress.co.uk"}};

const LINKMAP = {
  "Joel Randall": ["gnews-joelrandall"],
  "Conor Hazard": ["gnews-conorhazard", "belfastTelegraphConorHazard", "bBCConorHazard", "bBCSportConorHazard"],
  "Fred Onyedinma": ["gnews-fredonyedinma", "bucksFreePressFredOnyedinma", "bucksFreePressFredOnyedinma1"],
  "Aaron Morley": ["boltonWanderersFCAaronMorley", "boltonWanderersFCAaronMorley1", "boltonWanderersFCAaronMorley2"],
  "Matt Macey": ["bBCMattMacey", "bBCMattMacey1", "bBCSportConorHazard"],
  "Stoke City winger": ["bucksFreePressStokeCitywinger"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wycombe Wanderers · 2026/27 Season`,
  heroLede: `Transfer window active. Wycombe Wanderers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
