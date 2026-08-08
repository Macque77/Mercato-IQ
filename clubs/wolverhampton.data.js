/* ============================================================
   MERCATO IQ · CLUB DATA · WOLVERHAMPTON WANDERERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Wolverhampton Wanderers", mono: "WW", slug: "wolverhampton",
  primary: "#FDB913", primaryBright: "#FFE066", primaryDeep: "#8F6900",
  primaryRgb: "253,185,19",
  breadcrumb: ["England","Championship"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "19th Premier League (2025/26) - relegated",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["wolverhampton transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Kieran Trippier", sub:"35 · RB · England", club:"Newcastle United", pos:"RB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer, medical completed 8 June 2026 on a two-year deal with an optional third."},
  {name:"Raúl Jiménez", sub:"35 · Mexico · ST", club:"Benfica", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Return to Wolverhampton"}
];
const CONFIRMED_OUT = [
  {name:"Matt Doherty", sub:"34 · RB · Ireland", club:"Sheffield United", pos:"RB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released on a free transfer, confirmed by Sheffield United's own unveiling."},
  {name:"Tolu Arokodare", sub:"ST · Nigeria", club:"Ajax", pos:"ST", fee:"~£18.8m / €22m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 29 Jul 2026 by BBC Sport: loan-to-buy move to Ajax following a reported training-ground dispute with the manager."}
];
const INCOMING = [
  {name:"Niko Sigur", sub:"22 · DM/RB · Canada", club:"Hajduk Split", pos:"DM", report:"7 Jul 2026", src:"Luke Fletcher / Last Word On Football (via Sky Sports News)", tier:2, fee:"~£2.5m", truth:55, prob:38, light:"y", trend:"flat", note:"Wolves are pursuing the Canadian World Cup performer as inexpensive midfield/defensive depth for their Championship campaign.", lastSeen:"2026-08-04T19:10:50Z", baseProb:38, dead:true, deadReason:"No recent credible reporting; likely stale rumour from July 2026"},
  {name:"Brayan Medina", sub:"24 · CB · Colombia", club:"CD Tondela", pos:"CB", report:"29 Jul 2026", src:"Pipe Sierra (via The72)", tier:3, fee:"Undisclosed", truth:28, prob:10, light:"r", trend:"down", note:"New manager Cesar Peixoto has enquired about the 195cm defender following Tondela's relegation, competing with Genoa and Olympiacos; Medina has since signed a contract extension with Tondela through 2030, reducing near-term likelihood.", lastSeen:"2026-08-04T19:10:50Z", baseProb:10, dead:true, deadReason:"No recent credible reporting; likely stale rumour from July 2026"},
  {name:"Matheus Nunes", sub:"unknown · unknown · unknown", club:"Manchester City", pos:"unknown", report:"Confirmed signing from Manchester City", src:"On-page record", tier:2, fee:"unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T16:04:57Z", baseProb:100},
  {name:"Kieran Trippier", sub:"unknown · unknown · unknown", club:"Newcastle United", pos:"Defender", report:"Poised to join Wolverhampton Wanderers on a free transfer", src:"OneFootball", tier:3, fee:"Free", truth:85, prob:80, light:"g", trend:"flat", note:"Free transfer agreement reported", lastSeen:"2026-08-08T16:04:57Z", baseProb:80}
];
const OUTGOING = [
  {name:"Jose Sa", sub:"33 · GK · Portugal", club:"Olympiacos", pos:"GK", report:"15 Jul 2026", src:"Konstantinos Lianos (The72)", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Olympiacos are eyeing Sa as a replacement for their departing keeper Tzolakis; Sa (170 Wolves appearances, contract to 2027) is reportedly open to a fresh challenge following relegation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dead:true, deadReason:"No recent credible reporting; likely stale rumour from July 2026"},
  {name:"Joao Gomes", sub:"unknown · unknown · unknown", club:"Aston Villa", pos:"Midfielder", report:"To undergo Aston Villa medical ahead of £38m transfer", src:"Goal.com", tier:2, fee:"£38m", truth:95, prob:90, light:"g", trend:"down", note:"Medical scheduled, deal advanced", lastSeen:"2026-08-08T16:04:57Z", baseProb:90}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-kierantrippier": {l:"Related news search: Kieran Trippier", u:"https://news.google.com/search?q=Wolverhampton%20Wanderers%20Kieran%20Trippier%20transfer&hl=en-GB&gl=GB"},
  "gnews-mattdoherty": {l:"Related news search: Matt Doherty", u:"https://news.google.com/search?q=Wolverhampton%20Wanderers%20Matt%20Doherty%20transfer&hl=en-GB&gl=GB"},
  "bbc": {l:"BBC Sport", u:"https://www.bbc.co.uk/sport/football"},
  "molineuxnews": {l:"Molineux News", u:"https://www.molineuxnews.co.uk/"},
  bbcArokodare: {l:"BBC Sport · Arokodare", u:"https://feeds.bbci.co.uk/sport/football/articles/clydelp1629o"},
  lastwordSigur: {l:"Last Word On Football · Sigur", u:"https://lastwordonsports.com/football/2026/07/07/wolves-niko-sigur-target/"},
  the72Medina: {l:"The72 · Medina", u:"https://the72.co.uk/2026/07/29/wolverhampton-wanderers-target-brayan-medina/"},
  the72Sa: {l:"The72 · Sa", u:"https://the72.co.uk/2026/07/15/wolves-jose-sa-eyed-by-olympiacos/"},
  skySportsFootballRalJimnez: {l:"Sky Sports Football", u:"https://www.skysports.com/football/news/12040/13568007/raul-jimenezs-wolves-return-mexican-strikers-comeback-aged-35-has-captured-supporters-imagination-at-molineux"},
  wolverhamptonWanderersOfficialMatheusNunes: {l:"Wolverhampton Wanderers Official", u:"https://www.wolves.co.uk"},
  oneFootballKieranTrippier: {l:"OneFootball", u:"https://www.onefootball.com"},
  goalcomJoaoGomes: {l:"Goal.com", u:"https://www.goal.com"},
  theSunAngelGomes: {l:"The Sun", u:"https://www.thesun.co.uk"},
  theTimesToluArokodare: {l:"The Times", u:"https://www.thetimes.co.uk"},
  oneFootballKieranTrippier1: {l:"OneFootball", u:"https://onefootball.com"},
  oneFootballKieranTrippier2: {l:"OneFootball", u:"https://news.google.com/rss/articles/CBMitAFBVV95cUxOaXh4VGZHR3FhNUIwSWNqLXptWXh1RGtOenR1dnpCMmNmWTA5cmhhZ0UwU280LVROV2xILUZkbjRzRTVFaDFkQU93Q1oyNjhqWHJBeTFoMUxDc2N0NTJkdEJtZVd2VUZTdXJfYmZSNFhMTGVnczA4ZEVOaFJWTG5UVXJkaThJQWw4b002YWtHekFJLTA0eHBMSDItQXQ4TjFEUTVVSFhNMF9ZR2N6Zmp6TUJTc0M"},
  goalcomJoaoGomes1: {l:"Goal.com", u:"https://news.google.com/rss/articles/CBMixwFBVV95cUxQaGJHWC1PYnI4bGpQUDNsRjJYWm1TTG5UQUp0UmFsU2RXQTEtRmF6d29sTXBfRHpmRDVyZ0MyTUJUcFowQmotWDZuRjYzX192Ujd6bXdMU0YwRGFHUTVUWndTeFY1Yk5xd3Z1elAyOWNabWQ5eGtTci1SRmVGbnVTNS1yVXhNVnVTRmVvam9LalZtdWJhTkxtc190M3BIdWp3QVJtaXlzOHR4Mk1UbWxKVE8ycGVlaHdwQ1piUE5fNFNUaEtnSDdV"}};

const LINKMAP = {
  "Kieran Trippier": ["gnews-kierantrippier", "oneFootballKieranTrippier", "oneFootballKieranTrippier1", "oneFootballKieranTrippier2"],
  "Matt Doherty": ["gnews-mattdoherty"],
  "João Gomes": ["bbc", "molineuxnews"],
  "Tolu Arokodare": ["bbcArokodare", "theTimesToluArokodare"],
  "Niko Sigur": ["lastwordSigur"],
  "Brayan Medina": ["the72Medina"],
  "Jose Sa": ["the72Sa"],
  "Raúl Jiménez": ["skySportsFootballRalJimnez"],
  "Matheus Nunes": ["wolverhamptonWanderersOfficialMatheusNunes"],
  "Joao Gomes": ["goalcomJoaoGomes", "goalcomJoaoGomes1"],
  "Angel Gomes": ["theSunAngelGomes"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wolverhampton Wanderers · 2026/27 Season`,
  heroLede: `Transfer window active. Wolverhampton Wanderers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};