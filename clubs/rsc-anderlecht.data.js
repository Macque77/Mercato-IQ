/* ============================================================
   MERCATO IQ · CLUB DATA · RSC ANDERLECHT · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RSC Anderlecht",
  mono: "RSC",
  slug: "rsc-anderlecht",
  primary: "#8B0000",
  primaryBright: "#8B0000",
  primaryDeep: "#8B0000",
  primaryRgb: "100,100,100",
  breadcrumb: ["Belgium", "Pro League"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Elias Cobbaut",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "2nd Pro League (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["RSC Anderlecht transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · RSC Anderlecht"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Tomáš Souček", sub:"29 · Czech Republic · M", club:"West Ham United", pos:"Midfielder", report:"RSC Anderlecht interested but facing competition", src:"On-page rumour", tier:3, fee:"", truth:50, prob:30, light:"y", trend:"up", note:"Existing rumour maintained; no fresh snippet provided", lastSeen:"2026-08-08T18:06:10Z", baseProb:30}
];

const OUTGOING = [
  {name:"Unknown Attacker", sub:"Unknown · Unknown · Forward", club:"rsc-anderlecht", pos:"Forward", report:"Attacker departing RSC Anderlecht", src:"VoetbalBelgie", tier:3, fee:"", truth:70, prob:75, light:"g", trend:"flat", note:"Transfer reported but player name not specified in snippet", lastSeen:"2026-08-07T10:18:48Z", baseProb:75, dead:true, deadReason:"No specific player identified; cannot be tracked without a name"}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "vrt": {l:"VRT Sporza", u:"https://sporza.be/"},
  voetbalPrimeurbeMatasSoticek: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiigFBVV95cUxQd3hFMWlVQlNQZXc0dThGODVFR2VidW1DMWdrSmt3RHFLS0twaUN0TER5bWMwRXFfVXhET1AyX1FWYm9qQXAwTkh6eTliLWI0N2VDbVdsTElwaWdvbUd5RjhUb2tkNk9QMHNpSTZFRWNyOUV6ZU5tTTRkUkxiRW1kaEhDQ2pTYTkyUGc"},
  voetbalBelgieUnknownAttacker: {l:"VoetbalBelgie", u:"https://news.google.com/rss/articles/CBMihAFBVV95cUxNXzV6cGhuZHdFNkM2SXJ5U0xjMC12MnpKVzFMV0RGVVRxT0c4b0VoQmZmemNTVmh4LWJ6TXN5ajJXZWh0Q2J6SVlXVXQ0b3pTTW9HZlpJTzNXYW03OEFyNm10OC1nOUtpdjhFRFoteE5XNnBGblBrRGRhbUwzMms4R2YtNkQ"},
  voetbalPrimeurbeMathiasSoticek: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiigFBVV95cUxQd3hFMWlVQlNQZXc0dThGODVFR2VidW1DMWdrSmt3RHFLS0twaUN0TER5bWMwRXFfVXhET1AyX1FWYm9qQXAwTkh6eTliLWI0N2VDbVdsTElwaWdvbUd5RjhUb2tkNk9QMHNpSTZFRWNyOUV6ZU5tTTRkUkxiRW1kaEhDQ2pTYTkyUGc?oc=5"}};

const LINKMAP = {
  "Denzel Dumfries": ["vrt"],
  "Matías Soticek": ["voetbalPrimeurbeMatasSoticek"],
  "Unknown Attacker": ["voetbalBelgieUnknownAttacker"],
  "Mathias Soticek": ["voetbalPrimeurbeMathiasSoticek"],
  "Tomáš Souček": ["voetbalPrimeurbeMatasSoticek", "voetbalPrimeurbeMathiasSoticek"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `RSC Anderlecht · 2026/27 Season`,
  heroLede: `Transfer window active. RSC Anderlecht preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
