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
  {name:"Kieran Trippier", sub:"35 · RB · England", club:"Newcastle United", pos:"RB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer, medical completed 8 June 2026 on a two-year deal with an optional third."}
];
const CONFIRMED_OUT = [
  {name:"Matt Doherty", sub:"34 · RB · Ireland", club:"Sheffield United", pos:"RB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released on a free transfer, confirmed by Sheffield United's own unveiling."},
  {name:"Tolu Arokodare", sub:"ST · Nigeria", club:"Ajax", pos:"ST", fee:"~£18.8m / €22m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 29 Jul 2026 by BBC Sport: loan-to-buy move to Ajax following a reported training-ground dispute with the manager."}
];
const INCOMING = [
  {name:"Niko Sigur", sub:"22 · DM/RB · Canada", club:"Hajduk Split", pos:"DM", report:"7 Jul 2026", src:"Luke Fletcher / Last Word On Football (via Sky Sports News)", tier:2, fee:"~£2.5m", truth:55, prob:38, light:"y", trend:"flat", note:"Wolves are pursuing the Canadian World Cup performer as inexpensive midfield/defensive depth for their Championship campaign."},
  {name:"Brayan Medina", sub:"24 · CB · Colombia", club:"CD Tondela", pos:"CB", report:"29 Jul 2026", src:"Pipe Sierra (via The72)", tier:3, fee:"Undisclosed", truth:28, prob:10, light:"r", trend:"down", note:"New manager Cesar Peixoto has enquired about the 195cm defender following Tondela's relegation, competing with Genoa and Olympiacos; Medina has since signed a contract extension with Tondela through 2030, reducing near-term likelihood."}
];
const OUTGOING = [
  {name:"João Gomes", sub:"MF · Brazil", club:"Atlético Madrid", pos:"MF", report:"~1 wk ago", src:"BBC / Molineux News", tier:2, fee:"£39-40m", truth:70, prob:60, light:'g', trend:'up', note:"Fee reportedly agreed, though one outlet says Atlético have put the bid on hold, live but not over the line."},
  {name:"Jose Sa", sub:"33 · GK · Portugal", club:"Olympiacos", pos:"GK", report:"15 Jul 2026", src:"Konstantinos Lianos (The72)", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Olympiacos are eyeing Sa as a replacement for their departing keeper Tzolakis; Sa (170 Wolves appearances, contract to 2027) is reportedly open to a fresh challenge following relegation."}
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
  the72Sa: {l:"The72 · Sa", u:"https://the72.co.uk/2026/07/15/wolves-jose-sa-eyed-by-olympiacos/"}
};

const LINKMAP = {
  "Kieran Trippier": ["gnews-kierantrippier"],
  "Matt Doherty": ["gnews-mattdoherty"],
  "João Gomes": ["bbc", "molineuxnews"],
  "Tolu Arokodare": ["bbcArokodare"],
  "Niko Sigur": ["lastwordSigur"],
  "Brayan Medina": ["the72Medina"],
  "Jose Sa": ["the72Sa"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wolverhampton Wanderers · 2026/27 Season`,
  heroLede: `Transfer window active. Wolverhampton Wanderers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};