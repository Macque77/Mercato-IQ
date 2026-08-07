/* ============================================================
   MERCATO IQ · CLUB DATA · BLACKBURN ROVERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Blackburn Rovers", mono: "BR", slug: "blackburn-rovers",
  primary: "#009EE0", primaryBright: "#5CD2FF", primaryDeep: "#005E85",
  primaryRgb: "0,158,224",
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
  queries: ["blackburn-rovers transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Unknown Brentford Midfielder", sub:"Unknown · Unknown · Midfielder", club:"Brentford", pos:"Midfielder", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer from Brentford confirmed"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Unknown", sub:"Unknown · Unknown · Midfielder", club:"Brentford", pos:"Midfielder", report:"Blackburn Rovers complete free transfer deal for Brentford midfielder", src:"Lancashire Telegraph", tier:3, fee:"Free", truth:85, prob:90, light:"g", trend:"down", note:"Free transfer from Brentford - player name not disclosed in snippet", lastSeen:"2026-08-07T17:40:23Z", baseProb:90}
];
const OUTGOING = [
  {name:"Ash Phillips", sub:"Unknown · Unknown · Unknown", club:"Middlesbrough", pos:"Unknown", report:"How much Blackburn Rovers might get from Ash Phillips' move to Middlesbrough", src:"Lancashire Telegraph", tier:3, fee:"Unknown", truth:85, prob:85, light:"g", trend:"down", note:"Transfer to Middlesbrough", lastSeen:"2026-08-07T17:40:23Z", baseProb:85}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "lancashirepost": {l:"Lancashire Post", u:"https://www.lep.co.uk/sport"},
  "bailey": {l:"Graeme Bailey (TeamTalk)", u:"https://x.com/GraemeBailey"},
  lancashireTelegraphJaydenFevrier: {l:"Lancashire Telegraph", u:"https://news.google.com/rss/articles/CBMisAFBVV95cUxQUmZGYkptYUU1akU4eFV0cDVvZzhVZXNQeHJ1TC1RalhBR29MbnY4dW1leE81ZG9LUGhhcjZZVmZXMlhMVmdmZXp1RlU5NlE5QUJLMzRrY1MyclBDdFZ2ZHdDM3B1TlhpRkZkeUtHaUQzQjg0eWJYdjRWQjNfN0JWaDBYZXFpVkx1ZHpONVZvQTVhT3FrMGNlM3RzTEV0c0MtQ081cExOby1tTVM4X29fLQ"},
  lancashireTelegraphAshPhillips: {l:"Lancashire Telegraph", u:"https://news.google.com/rss/articles/CBMipAFBVV95cUxPVmZrSHFEUWZnUGVNLWRCcTRPMzkzNFhoMzFXbFhJUHRLMGxjcWNGdUNKX2lTbUVORWdOTUU5OTJuZkhSanE3WlB2WmktdmVVeEU4NkVxd0FOaWp0NDdwN3BIYkc3ODI5c1pheG9TZF9ZdTA2N2g3R3h1M0xQbUV1aWlIbHVSbVpCZ1VsaVQwTFB2bm92YWtXNi16aHRyV3Vjb09nRQ"},
  lancashireTelegraphUnknownBrentfordMidfielder: {l:"Lancashire Telegraph", u:"https://news.google.com/rss/articles/CBMiqAFBVV95cUxNYUI1SDhpeXhzOWJQTzBRdExaNTN6U2RqMjVSUzctcjVHNTh1T040bEhkZFpIZG84S182QmpEQm9RSDFpd2ttcndLeXgtM1I0ODRfcUh3VElyRVdjdy1DNllmLTQ3TGROaVNiNS1weXVlSkoxN0h1VzV0LUZiakt6eElXWWJLQXRlalp5ZlRObHoyZFY5YktES3Z3WmZYZk1CeGQzcTJiNzQ"},
  lancashireTelegraphUnknown: {l:"Lancashire Telegraph", u:"https://news.google.com/rss/articles/CBMiqAFBVV95cUxNYUI1SDhpeXhzOWJQTzBRdExaNTN6U2RqMjVSUzctcjVHNTh1T000bEhkZFpIZG84S182QmpEQm9RSDFpd2ttcndLeXgtM1I0ODRfcUh3VElyRVdjdy1DNllmLTQ3TGROaVNiNS1weXVlSkoxN0h1VzV0LUZiakt6eElXWWJLQXRlalp5ZlRObHoyZFY5YktES3Z3WmZYZk1CeGQzcTJiNzQ"}};

const LINKMAP = {
  "Daniel Jebbison": ["lancashirepost"],
  "Ty Livesey": ["bailey"],
  "Jayden Fevrier": ["lancashireTelegraphJaydenFevrier"],
  "Ash Phillips": ["lancashireTelegraphAshPhillips"],
  "Unknown Brentford Midfielder": ["lancashireTelegraphUnknownBrentfordMidfielder"],
  "unknown": ["lancashireTelegraphUnknownBrentfordMidfielder"],
  "Unknown": ["lancashireTelegraphUnknown"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Blackburn Rovers · 2026/27 Season`,
  heroLede: `Transfer window active. Blackburn Rovers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};