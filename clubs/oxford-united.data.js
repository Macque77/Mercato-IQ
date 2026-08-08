/* ============================================================
   MERCATO IQ · CLUB DATA · OXFORD UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Oxford United", mono: "OU", slug: "oxford-united",
  primary: "#001C58", primaryBright: "#FFD84D", primaryDeep: "#000E2C",
  primaryRgb: "0,28,88",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Relegated from Championship (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["oxford-united transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Cameron Brannagan", sub:"Unknown · Unknown · Unknown", club:"Oxford United", pos:"Unknown", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed Oxford United"},
  {name:"Brodie Spencer", sub:"Unknown · Unknown · Unknown", club:"Oxford United", pos:"Unknown", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed Oxford United"},
  {name:"Sydie Peck", sub:"Unknown · Unknown · Unknown", club:"Oxford United", pos:"Unknown", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed Oxford United"}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Sydie Peck", sub:"MF", club:"Oxford United", pos:"MF", report:"Player departed Oxford United", src:"Various", tier:3, fee:"Undisclosed", truth:75, prob:85, light:"g", trend:"up", note:"On-page rumour ~1 week old; no fresh snippet detail available", lastSeen:"2026-08-08T16:04:57Z", baseProb:85},
  {name:"Brodie Spencer", sub:"DF", club:"Oxford United", pos:"DF", report:"Player departed Oxford United", src:"FLW exclusive", tier:3, fee:"Undisclosed", truth:75, prob:85, light:"g", trend:"up", note:"On-page rumour ~1 week old; no fresh snippet detail available", lastSeen:"2026-08-08T16:04:57Z", baseProb:85},
  {name:"Cameron Brannagan", sub:"MF", club:"Oxford United", pos:"MF", report:"Player departed Oxford United", src:"Various", tier:3, fee:"Undisclosed", truth:75, prob:85, light:"g", trend:"up", note:"On-page rumour ~2 weeks old; no fresh snippet detail available", lastSeen:"2026-08-08T16:04:57Z", baseProb:85},
  {name:"Stan Mills", sub:"Unknown · Unknown · Unknown", club:"Oxford United", pos:"Unknown", report:"Player missing training amid transfer window activity; transfer speculation ongoing", src:"oxfordtimes.co.uk", tier:3, fee:"", truth:70, prob:75, light:"g", trend:"up", note:"Stan Mills missed training during transfer window amid 'tricky' circumstances", lastSeen:"2026-08-08T16:04:57Z", baseProb:75, dead:true, deadReason:"Missing training amid transfer window activity; no further credible reports of departure or interest"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-sydiepeck": {l:"Related news search: Sydie Peck", u:"https://news.google.com/search?q=Oxford%20United%20Sydie%20Peck%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  "gnews-cameronbrannagan": {l:"Related news search: Cameron Brannagan", u:"https://news.google.com/search?q=Oxford%20United%20Cameron%20Brannagan%20transfer&hl=en-GB&gl=GB"},
  oxfordTimesStanMills: {l:"Oxford Times", u:"https://news.google.com/rss/articles/CBMirAFBVV95cUxNSXlqR2tQYU1fMGZ2OGRHb1l5a2NkNWp1cFhGcS0yTDBvUzc4eHRkdmxYVHJrR2tXTS1BcDRHU0JWcEJjenhtN2xBVTdhQ3JtZlFvOEFQRXAwV21MRkxZOURLYkJvN2ZHazlRVURmVUpZcFhMS0Q1UExSLUNlV3J3NENNSVJTZWFnLWpKX1dOSDBsTHFaUHktT1d4VS1TTDhsLVM4Sld2TjQtMlBf?oc=5"}};

const LINKMAP = {
  "Sydie Peck": ["gnews-sydiepeck"],
  "Brodie Spencer": ["flw"],
  "Cameron Brannagan": ["gnews-cameronbrannagan"],
  "Stan Mills": ["oxfordTimesStanMills"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Oxford United · 2026/27 Season`,
  heroLede: `Transfer window active. Oxford United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
