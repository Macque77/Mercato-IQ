/* ============================================================
   MERCATO IQ · CLUB DATA · ARMINIA BIELEFELD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Arminia Bielefeld", mono: "AB", slug: "arminia-bielefeld",
  primary: "#1E3A8A", primaryBright: "#6FA8FF", primaryDeep: "#0F1F4A",
  primaryRgb: "30,58,138",
  breadcrumb: ["Germany","2. Bundesliga"]
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
  queries: ["arminia-bielefeld transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Unknown Leipzig talent", sub:"Unknown · Unknown · Unknown", club:"RB Leipzig", pos:"Unknown", report:"Arminia Bielefeld have loaned in a talent from Leipzig (Neuzugang Nummer zwei)", src:"Neue Westfälische", tier:3, fee:"Loan", truth:75, prob:80, light:"g", trend:"flat", note:"Reported as second new signing; player identity not disclosed in snippet", lastSeen:"2026-08-07T01:42:32Z", baseProb:80, dead:true, deadReason:"On-page entry lacks player name; cannot confirm without identifying information"}
];
const OUTGOING = [
  {name:"Mael Corboz", sub:"unknown · unknown · unknown", club:"Arminia Bielefeld", pos:"unknown", report:"Mael Corboz transfers from Arminia Bielefeld to Grenoble Foot", src:"Sky.de", tier:2, fee:"unknown", truth:95, prob:90, light:"g", trend:"flat", note:"Transfer confirmed by Sky.de", lastSeen:"2026-08-08T18:06:11Z", baseProb:90},
  {name:"Lannert", sub:"unknown · unknown · unknown", club:"Arminia Bielefeld", pos:"unknown", report:"Lannert transfers from Arminia Bielefeld", src:"Radio Bielefeld", tier:3, fee:"unknown", truth:80, prob:75, light:"g", trend:"down", note:"Transfer confirmed in recent headline", lastSeen:"2026-08-08T18:06:11Z", baseProb:75},
  {name:"Stefan Kersken", sub:"unknown · unknown · GK", club:"Arminia Bielefeld", pos:"GK", report:"Goalkeeper Kersken reportedly has interest in an England move; Sky reports interest", src:"Sky.de / Radio Bielefeld", tier:2, fee:"unknown", truth:70, prob:60, light:"g", trend:"up", note:"Rumour of interest in England move; reports are speculative", lastSeen:"2026-08-08T18:06:11Z", baseProb:60}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Arminia-Bielefeld Official", u:"#"},
  neueWestflischeUnknownLeipzigtalent: {l:"Neue Westfälische", u:"https://news.google.com/rss/articles/CBMi0wFBVV95cUxOWkhVaEVQNDc4cWdSaV9aREwzTjJoV0ZDN0JrdkM2SUFyRE1jVUs5RGtXS1lWS2hlWjZ3UUhiXzdNVlJzanVkMU9mb21vT1ZnR2VZeUI4UkV3SmU2cFMwbjdaRTJ4ZEswcjVuTGpiSVpVeVBFOVVPT29uYUNJTHBETE51UWR1WnJ0Vk0wQVE2OGYxeUctQ3RTR1YwVmNkWkhSeVdoclpfcmVfeDFSczZkS3hCVlkwb2liS1NXQ1BLTXByNi1aZTl1NXFpMzVwM1hwQWN3?oc=5"},
  skydeMaelCorboz: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMisgFBVV95cUxPejhSdV9IXzJEcXVNak5HendaSVhiU0dGSzR5VG0ycW9RQ0JuUVB2Y2lqY0wyRkNUZW9VOEpRSU5yN2MyMVF1QVhpdU9lT1o1Nl9HRlZBZTJhbndGTEREVUlPZ3BRMUQ0djNvZWc4VWVjNkVfek9UMGZxYWNBeW1LWjFoM3gtLS1KSkhjX1Y0TGFHX1k5NHpzS3JRa0w4d2RzejIwXzlISVBhLTFUQ1hiQ3hB?oc=5"},
  radioBielefeldLannert: {l:"Radio Bielefeld", u:"https://news.google.com/rss/articles/CBMitwFBVV95cUxQUGM4d2w5R2xIYnlSb1drTFJjNDFFckVHX01MazNTRUNib1JWV0dJNU9RRWhyZVA4RHd3VDE5eW84X0RXSm5yZmxDX3JxR0F0QkwwVF9BUGtxMGg4dXo3a2hYNDY5UGMxNVlYU1dIMnVhV25RTnkzUm1HbWFxT3Z0bGViYk02UWFRRnNkdXlVaUFvNjdvR2JXQmpSOEhGMm16ek81ZFVMdWswS0F5QUpFLXhveWZBMHc?oc=5"},
  skyRadioBielefeldStefanKersken: {l:"Sky / Radio Bielefeld", u:"https://news.google.com/rss/articles/CBMi1gFBVV95cUxNV0dmMFljTnhCVnFXZ1F5ODg3a3JCdVlwaXVJT1NZbnBDUGJnbEl0QktLaDhpVlZ3UTZBbVl6YnlMYmVjVTEzY3hVOTlWSEwyWDN5eXFJSGU0aDFPaWIzSVpiYVhBTGNFeWlCU3NscGZxZkQtcWpDQndPV3hPMGY0cGx0TXI1NUpWbEtJdjFnU1BWR3BKQ3NBMENZd0pQRzNjdV83Zl9JVlBUcTEwUUpSb21SXzhJQXEwQnFJZWhERDVGWjE1N0NaZEdYVlMybDMwR190NENn?oc=5"},
  skydeMaelCorboz1: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMisgFBVV95cUxPejhSdV9IXzJEcXVNak5HendaSVhiU0dGSzR5VG0ycW9RQ0JuUVB2Y2lqY0wyRkNUZW9VOEpRSU5yN2MyMVF1QVhpdU9lT1o1Nl9HRlZBZTJhbndGTEREVUlPZ3BRMUQ0djNvZWc4VWVjNkVfek9UMGZxYWNBeW1LWjFoM3gtLS1KSkhjX1Y0TGFHX1k5NHpzS3JRa0w4d2RzejIwXzlISVBhLTFUQ1hiQ3hB"},
  radioBielefeldSkydeStefanKersken: {l:"Radio Bielefeld / Sky.de", u:"https://news.google.com/rss/articles/CBMi1gFBVV95cUxNV0dmMFljTnhCVnFXZ1F5ODg3a3JCdVlwaXVJT1NZbnBDUGJnbEl0QktLaDhpVlZ3UTZBbVl6YnlMYmVjVTEzY3hVOTlWSEwyWDN5eXFJSGU0aDFPaWIzSVpiYVhBTGNFeWlCU3NscGZxZkQtcWpDQndPV3hPMGY0cGx0TXI1NUpWbEtJdjFnU1BWR3BKQ3NBMENZd0pQRzNjdV83Zl9JVlBUcTEwUUpSb21SXzhJQXEwQnFJZWhERDVGWjE1N0NaZEdYVlMybDMwR190NENn"},
  radioBielefeldLannert1: {l:"Radio Bielefeld", u:"https://news.google.com/rss/articles/CBMitwFBVV95cUxQUGM4d2w5R2xIYnlSb1drTFJjNDFFckVHX01MazNTRUNib1JWV0dJNU9RRWhyZVA4RHd3VDE5eW84X0RXSm5yZmxDX3JxR0F0QkwwVF9BUGtxMGg4dXo3a2hYNDY5UGMxNVlYU1dIMnVhV25RTnkzUm1HbWFxT3Z0bGViYk02UWFRRnNkdXlVaUFvNjdvR2JXQmpSOEhGMm16ek81ZFVMdWswS0F5QUpFLXhveWZBMHc"}};

const LINKMAP = {
  "Unknown Leipzig talent": ["neueWestflischeUnknownLeipzigtalent"],
  "Mael Corboz": ["skydeMaelCorboz", "skydeMaelCorboz1"],
  "Lannert": ["radioBielefeldLannert", "radioBielefeldLannert1"],
  "Stefan Kersken": ["skyRadioBielefeldStefanKersken", "radioBielefeldSkydeStefanKersken"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Arminia Bielefeld · 2026/27 Season`,
  heroLede: `Transfer window active. Arminia Bielefeld preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};