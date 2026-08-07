/* ============================================================
   MERCATO IQ · CLUB DATA · CLERMONT FOOT · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Clermont Foot", mono: "CF", slug: "clermont-foot",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["France","Ligue 2"]
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
  queries: ["clermont-foot transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Jean Grillot", sub:"Unknown · France · Unknown", club:"Girondins de Bordeaux", pos:"Unknown", report:"Former Bordeaux player joining Clermont Foot", src:"WebGirondins / La Montagne", tier:3, fee:"Unknown", truth:85, prob:90, light:"g", trend:"flat", note:"Multiple sources confirm Jean Grillot has left Bordeaux and joined Clermont Foot. Deal appears official.", lastSeen:"2026-08-07T01:42:32Z", baseProb:90}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Clermont-Foot Official", u:"#"},
  webGirondinsJeanGrillot: {l:"WebGirondins", u:"https://news.google.com/rss/articles/CBMi0gFBVV95cUxNSm5MbEo4YjRnUDVzdlUxUU1Pc3Jhb0J2ZkN0NlcyNVEwWGlCaVZjMzFXaV9udldQMk84Y3BSQmVWTTd5dzUwclo4UUJ6aUVEb0hkVERlV3k1enlfdUE2eEZsa3g1V2Y0d0lLRlM5S00wcUdTeWFua2xvaU1yQ2NTckdKcTBBUGdtd2hQUmY1VmxZNGJWS1lqYndrYjlETEdvYS1wRVlBZFZRdmhCa3FpTzFKMjRJRFpmUjA1Y0k1VjBoN3ZQUHRuc01FVndBZTJxQlE"}};

const LINKMAP = {
  "Jean Grillot": ["webGirondinsJeanGrillot"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Clermont Foot · 2026/27 Season`,
  heroLede: `Transfer window active. Clermont Foot preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};