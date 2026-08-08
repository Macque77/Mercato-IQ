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

const CONFIRMED_IN = [
  {name:"Jean Grillot", sub:"Unknown · Unknown · Unknown", club:"Bordeaux", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially joins Clermont Foot from Bordeaux"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Jean Grillot", sub:"Unknown · Unknown · Unknown", club:"Bordeaux", pos:"Unknown", report:"Jean Grillot officially joins Clermont Foot from Bordeaux", src:"WebGirondins", tier:3, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"up", note:"Official announcement confirmed from Bordeaux departure", lastSeen:"2026-08-08T07:40:33Z", baseProb:100}
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
  webGirondinsJeanGrillot: {l:"WebGirondins", u:"https://news.google.com/rss/articles/CBMi0gFBVV95cUxNSm5MbEo4YjRnUDVzdlUxUU1Pc3Jhb0J2ZkN0NlcyNVEwWGlCaVZjMzFXaV9udldQMk84Y3BSQmVWTTd5dzUwclo4UUJ6aUVEb0hkVERlV3k1enlfdUE2eEZsa3g1V2Y0d0lLRlM5S00wcUdTeWFua2xvaU1yQ2NTckdKcTBBUGdtd2hQUmY1VmxZNGJWS1lqYndrYjlETEdvYS1wRVlBZFZRdmhCa3FpTzFKMjRJRFpmUjA1Y0k1VjBoN3ZQUHRuc01FVndBZTJxQlE"},
  madeInFOOTJuniorSambia: {l:"MadeInFOOT", u:"https://news.google.com/rss/articles/CBMi7gFBVV95cUxPZWo0TDJBUExZeWs5WlhyVHBHNGZPTkFaRFNBWkRJZTRFOGE1RzlZNnA2R0x5cHpybklzN2VlaG5SR2tMNEpBMXJ3dUYwbUozNDZfbW9PVzJGa3lvS3diOWpYai1FQmNObUJtYzh1MEJqRXlPZTZBRTBoQUZRMGhpV0xQQVBFaVhUWUsxQzl0OHhDVnhCTU5wajc0OVlkeWxzbk52YTRoVVdSS2UyZGlHRU8zSk9CREl1cEQ1ekZEakhqbUFXOEgwUXAtT29jLTUwUkZDWk1jUmNrLWJHTEM5YkNBY09vWHZIR2ZRc0xn"},
  webGirondinsJeanGrillot1: {l:"WebGirondins", u:"https://news.google.com/rss/articles/CBMi0gFBVV95cUxNSm5MbEo4YjRnUDVzdlUxUU1Pc3Jhb0J2ZkN0NlcyNVEwWGlCaVZjMzFXaV9udldQMk84Y3BSQmVWZTd5dzUwclo4UUJ6aUVEb0hkVERlV3k1enlfdUE2eEZsa3g1V2Y0d0lLRlM5S00wcUdTeWFua2xvaU1yQ2NTckdKcTBBUGdtd2hQUmY1VmxZNGJWS1lqYndrYjlETEdvYS1wRVlBZFZRdmhCa3FpTzFKMjRJRFpmUjA1Y0k1VjBoN3ZQUHRuc01FVndBZTJxQlE"}};

const LINKMAP = {
  "Jean Grillot": ["webGirondinsJeanGrillot", "webGirondinsJeanGrillot1"],
  "Junior Sambia": ["madeInFOOTJuniorSambia"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Clermont Foot · 2026/27 Season`,
  heroLede: `Transfer window active. Clermont Foot preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};