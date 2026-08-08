/* ============================================================
   MERCATO IQ · CLUB DATA · BURNLEY · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026, verified via live search): Burnley
   were promoted to the Premier League for 2025/26, but were
   relegated straight back down that same season (finished 20th,
   alongside West Ham United and Wolverhampton Wanderers). For
   2026/27 they are a Championship club, not Premier League.
   ============================================================ */

const BRAND = {
  club: "Burnley", mono: "BUR", slug: "burnley",
  primary: "#6C1D45", primaryBright: "#8C2D5F", primaryDeep: "#4A1230",
  primaryRgb: "108,29,69",
  breadcrumb: ["England","Championship"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Scott Parker",
  dof: "Craig Weston (Head of Recruitment)",
  europe: "None (2026/27)",
  finish: "20th Premier League (2025/26) - relegated",
  owner: "ALK Capital (Alan Pace, Chairman)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/Championship/Burnley/Transfer+News", "https://www.lancashiretelegraph.co.uk/sport/burnley-fc/"],
  queries: ["Burnley transfer news 2026", "Burnley bid OR medical OR 'here we go'"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Burnley"
};

const CONFIRMED_IN = [
  {name:"Lluc Castell", sub:"LW", club:"Espanyol", pos:"LW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival as Burnley rebuild for an immediate promotion push."}
];
const CONFIRMED_OUT = [
  {name:"Martin Dubravka", sub:"GK", club:"Tottenham Hotspur", pos:"GK", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released on a free transfer."},
  {name:"Jaidon Anthony", sub:"LW", club:"Brentford", pos:"LW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit."},
  {name:"Loum Tchaouna", sub:"LW", club:"Coventry City", pos:"LW", fee:"£20m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed sale as part of Burnley's post-relegation rebuild."},
  {name:"Maxime Esteve", sub:"CB", club:"RB Leipzig", pos:"CB", fee:"£27.3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed sale, one of the bigger fees of Burnley's summer clear-out."},
  {name:"Florentino Luis", sub:"26 · Portugal · DM", club:"Ipswich Town", pos:"Defensive midfield", fee:"£16m plus £3m in add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"The Portugal midfielder has signed a five-year deal at Portman Road, leaving Turf Moor after one season and a relegation. Burnley had been obliged to make his Benfica loan permanent for just over £20m in June, so this represents a loss on the outlay. Fee detail per David Ornstein."}
];
const INCOMING = [
  {name:"Ben Amos", sub:"Goalkeeper", club:"Bolton Wanderers", pos:"GK", report:"Free transfer arrival at Burnley", src:"Burnley Express", tier:3, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing; free transfer", lastSeen:"2026-08-08T10:03:39Z", baseProb:100}
];
const OUTGOING = [
  {name:"Florentino Luis", sub:"Midfielder", club:"Ipswich Town", pos:"CM", report:"Completed transfer to Ipswich Town", src:"BBC / David Ornstein", tier:1, fee:"£16m", truth:100, prob:100, light:"g", trend:"flat", note:"Initial fee £16m, deal completed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Burnley rebuild for an immediate promotion push after their 2025/26 Premier League relegation (20th, alongside West Ham and Wolves)."}
];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-lluccastell": {l:"Related news search: Lluc Castell", u:"https://news.google.com/search?q=Burnley%20Lluc%20Castell%20transfer&hl=en-GB&gl=GB"},
  "gnews-martindubravka": {l:"Related news search: Martin Dubravka", u:"https://news.google.com/search?q=Burnley%20Martin%20Dubravka%20transfer&hl=en-GB&gl=GB"},
  "gnews-jaidonanthony": {l:"Related news search: Jaidon Anthony", u:"https://news.google.com/search?q=Burnley%20Jaidon%20Anthony%20transfer&hl=en-GB&gl=GB"},
  "gnews-loumtchaouna": {l:"Related news search: Loum Tchaouna", u:"https://news.google.com/search?q=Burnley%20Loum%20Tchaouna%20transfer&hl=en-GB&gl=GB"},
  "gnews-maximeesteve": {l:"Related news search: Maxime Esteve", u:"https://news.google.com/search?q=Burnley%20Maxime%20Esteve%20transfer&hl=en-GB&gl=GB"},
  "romano": {l:"Fabrizio Romano", u:"https://x.com/FabrizioRomano"},
  "eastanglian": {l:"East Anglian Daily Times", u:"https://www.eadt.co.uk/sport"},
  "schira": {l:"Nicolò Schira", u:"https://x.com/NicoSchira"},
  pAYahooSportFlorentinoLus: {l:"PA / Yahoo Sport", u:"https://sports.yahoo.com/articles/ipswich-town-complete-signing-florentino-172500458.html"},
  burnleyExpressfeeviaDavidOrnsteinFlorentinoLuis: {l:"Burnley Express (fee via David Ornstein)", u:"https://www.burnleyexpress.net/sport/football/burnley-fc/burnley-ps16m-switch-premier-league-newcomers-8839366"},
  burnleyExpressBenAmos: {l:"Burnley Express", u:"https://news.google.com/rss/articles/CBMiqwFBVV95cUxPNjBfbUxZS21zQTR4MGRWcnRlWS0yeTNFZERXV1UzTlk3T09mbldKOFNWQnZtYkVlY2dqaklBTDBhUnI4OVJ3MnZnc2haVEc2OGpXNWthNHIwNElhOHFGLW5SVVNRUllqTWw1TVpZVXhSUkNVeER1MmVwUUMtTkh2MzhqN1d3bTgybTFSSmNvRm1kQTY2RDNramhnZElfYl91aWdwbEZWVUZvcWc"},
  bBCFlorentinoLuis: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTFBUSjVna3ZXd3c1TWNoX0tIM1FuZG4yRFB6UUlOSmk3cnY0N0ROcFVycWZyQkR0Y1g4dlhhcWpoaUdZa2tBbGNhZDVVNmpLaUQxRV81aHdnT0VnQ1doc3g0NFBRMGNRMFZ2Z2c"},
  bBCviaDavidOrnsteinFlorentinoLuis: {l:"BBC (via David Ornstein)", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxQRHJYQVFXUkc3cnRkMi05ZG91aExybHNYR1dKM1FEVMM1VV82b3VNSjZfdUc4bGxNZklzS29RdmVoLW1JVmlBa3N1SEE0Rzk"},
  theNewYorkTimesDavidOrnsteinFlorentinoLuis: {l:"The New York Times (David Ornstein)", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxQRHJYQVFXUkc3cnRkMi05ZG91aExybHNYR1dKM1FEVGM1VV82b3VNSjZfdUc4bGxNZklzS29RdmVoLW1JVmlBa3N1SEE0Rzk1RGlHSFlsZmlLLU1scWlPTXBDRUp3d2FMc1BXWHlnVnE4VUNKOUtiV2dnLTQweUhqMlp4UmVKY3FVd3pHbU8wbmM2UTUtSndz"}};

const LINKMAP = {
  "Lluc Castell": ["gnews-lluccastell"],
  "Martin Dubravka": ["gnews-martindubravka"],
  "Jaidon Anthony": ["gnews-jaidonanthony"],
  "Loum Tchaouna": ["gnews-loumtchaouna"],
  "Maxime Esteve": ["gnews-maximeesteve"],
  "Florentino Luis": ["romano", "eastanglian", "burnleyExpressfeeviaDavidOrnsteinFlorentinoLuis", "bBCFlorentinoLuis", "bBCviaDavidOrnsteinFlorentinoLuis", "theNewYorkTimesDavidOrnsteinFlorentinoLuis"],
  "Andreas Hountondji": ["schira"],
  "Florentino Luís": ["pAYahooSportFlorentinoLus"],
  "Ben Amos": ["burnleyExpressBenAmos"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Burnley · 2026/27 Season`,
  heroLede: `Transfer window active. Burnley preparing for an immediate Championship return under Scott Parker after being relegated from the Premier League in 2025/26 alongside West Ham United and Wolverhampton Wanderers.`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">20<small>th</small></div></div><div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
