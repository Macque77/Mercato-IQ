/* ============================================================
   MERCATO IQ · CLUB DATA · RANGERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Rangers", mono: "RAN", slug: "rangers",
  primary: "#0033A0", primaryBright: "#5C8DFF", primaryDeep: "#001A52",
  primaryRgb: "0,51,160",
  breadcrumb: ["Scotland","Premiership"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "TBD (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["rangers transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Lawrence Shankland", sub:"FW", club:"Heart of Midlothian", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing from a direct rival."},
  {name:"Danilo", sub:"DF", club:"NEC Nijmegen", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned after NEC declined to make his loan permanent."},
  {name:"Godfrey", sub:"DF", club:"Atalanta", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ex-Everton defender, loan signing."}
];
const CONFIRMED_OUT = [
  {name:"James Tavernier", sub:"DF", club:"Released", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released as a free agent after MLS talks with Charlotte FC stalled."}
];
const INCOMING = [
  {name:"Jahnoah Markelo", sub:"DF", club:"Coventry City", pos:"DF", report:"~1 wk ago", src:"Sky Sports", tier:2, fee:"Undisclosed", truth:65, prob:55, light:'g', trend:'up', note:"Rangers reportedly in talks for the defender.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Mikey Moore", sub:"W", club:"Tottenham Hotspur", pos:"W", report:"~1 wk ago", src:"The Scotsman", tier:3, fee:"Undisclosed", truth:45, prob:30, light:'y', trend:'flat', note:"Competing with Bundesliga interest, player reportedly told to make a decision.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Daisuke Yokota", sub:"26 · RW · Japan", club:"Hannover 96", pos:"RW", report:"4 Aug 2026", src:"Fabrizio Romano", tier:1, fee:"~€3.3m + €0.7m add-ons", truth:88, prob:80, light:'g', trend:'up', note:"Romano reports a full agreement reached; would be Rangers' ninth signing of the summer, with a medical reported for 4 August.", lastSeen:"2026-08-04T19:10:50Z", baseProb:80},
  {name:"Fares Ghedjemis", sub:"23 · W · Algeria", club:"Frosinone", pos:"W", report:"4 Aug 2026", src:"Sky Sports Scotland (via GiveMeSport)", tier:2, fee:"£8m bid submitted", truth:48, prob:28, light:'o', trend:'up', note:"Rangers submitted an £8m offer attempting to hijack Celtic's move for the winger; Frosinone have rejected both bids so far and want £10m+.", lastSeen:"2026-08-04T19:10:50Z", baseProb:28},
  {name:"Camilo Mena", sub:"23 · RW · Colombia", club:"Lechia Gdansk", pos:"RW", report:"3 Aug 2026", src:"Purple Vert (via Yahoo Sports UK)", tier:3, fee:"~£3.4m", truth:35, prob:15, light:'o', trend:'flat', note:"Rangers are said to be monitoring the winger as a fallback option after Lechia's relegation lowered his valuation; no formal talks reported yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];
const OUTGOING = [
  {name:"Nicolas Raskin", sub:"25 · CDM · Belgium", club:"Real Betis", pos:"CDM", report:"19 Jul 2026", src:"Daily Record / FootballTransfers", tier:2, fee:"~€23.5m asking price", truth:55, prob:32, light:'y', trend:'flat', note:"Rangers have set a club-record-equalling asking price for the Belgium international following his World Cup showing; other outlets have separately named Aston Villa, Wolves, Hull and Fiorentina as suitors, suggesting a genuinely fluid situation on the destination.", lastSeen:"2026-08-04T19:10:50Z", baseProb:32},
  {name:"Unnamed Rangers attacker", sub:"FW", club:"Undisclosed", pos:"FW", report:"~1 wk ago", src:"GlasgowWorld", tier:3, fee:"Undisclosed", truth:50, prob:45, light:'y', trend:'flat', note:"Described as one step away from an Ibrox exit, terms reportedly clear.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-lawrenceshankland": {l:"Related news search: Lawrence Shankland", u:"https://news.google.com/search?q=Rangers%20Lawrence%20Shankland%20transfer&hl=en-GB&gl=GB"},
  "gnews-danilo": {l:"Related news search: Danilo", u:"https://news.google.com/search?q=Rangers%20Danilo%20transfer&hl=en-GB&gl=GB"},
  "gnews-godfrey": {l:"Related news search: Godfrey", u:"https://news.google.com/search?q=Rangers%20Godfrey%20transfer&hl=en-GB&gl=GB"},
  "gnews-jamestavernier": {l:"Related news search: James Tavernier", u:"https://news.google.com/search?q=Rangers%20James%20Tavernier%20transfer&hl=en-GB&gl=GB"},
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"},
  "scotsman": {l:"The Scotsman", u:"https://www.scotsman.com/sport/football"},
  "dailyrecord": {l:"Daily Record", u:"https://www.dailyrecord.co.uk/sport/football/"},
  "glasgowworld": {l:"GlasgowWorld", u:"https://www.glasgowworld.com/sport"},
  "footballtransfersRaskin": {l:"FootballTransfers · Raskin", u:"https://www.footballtransfers.com/en/transfer-news/gb-sct-premier-league/2026/07/rangers-transfer-news-nicolas-raskin-sale-23m-asking-price-summer-2026"},
  "givemesportYokota": {l:"GiveMeSport · Yokota", u:"https://www.givemesport.com/fabrizio-romano-rangers-reach-agreement-daisuke-yokota-transfer/"},
  "givemesportGhedjemis": {l:"GiveMeSport · Ghedjemis", u:"https://www.givemesport.com/breaking-rangers-submit-8m-offer-hijack-celtic-transfer-fares-ghedjemis/"},
  "yahooMena": {l:"Yahoo Sports UK · Mena", u:"https://uk.sports.yahoo.com/news/rangers-closely-monitor-camilo-mena-100941826.html"}
};

const LINKMAP = {
  "Lawrence Shankland": ["gnews-lawrenceshankland"],
  "Danilo": ["gnews-danilo"],
  "Godfrey": ["gnews-godfrey"],
  "James Tavernier": ["gnews-jamestavernier"],
  "Jahnoah Markelo": ["sky"],
  "Mikey Moore": ["scotsman"],
  "Nicolas Raskin": ["footballtransfersRaskin", "dailyrecord"],
  "Unnamed Rangers attacker": ["glasgowworld"],
  "Daisuke Yokota": ["givemesportYokota"],
  "Fares Ghedjemis": ["givemesportGhedjemis"],
  "Camilo Mena": ["yahooMena"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Rangers · 2026/27 Season`,
  heroLede: `Transfer window active. Rangers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
