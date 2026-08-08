/* ============================================================
   MERCATO IQ · CLUB DATA · LEICESTER CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Leicester City", mono: "LC", slug: "leicester-city",
  primary: "#003090", primaryBright: "#4D8FFF", primaryDeep: "#001A4D",
  primaryRgb: "0,48,144",
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
  queries: ["leicester-city transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Liam Cullen", sub:"24 · Wales · W", club:"Swansea City", pos:"Winger", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Transfer completed from Swansea City"},
  {name:"Asmir Begovic", sub:"37 · Bosnia and Herzegovina · GK", club:"Everton", pos:"Goalkeeper", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Goalkeeper signed"},
  {name:"Conor Chaplin", sub:"26 · England · F", club:"Ipswich Town", pos:"F", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Former Ipswich Town forward signed"}
];
const CONFIRMED_OUT = [
  {name:"Jeremy Monga", sub:"17 · Cameroon · W", club:"Manchester City", pos:"Winger", fee:"£10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed transfer to Manchester City"}
];
const INCOMING = [
  {name:"Liam Cullen", sub:"Unknown · Unknown · Forward", club:"Swansea City", pos:"Forward", report:"Liam Cullen completes transfer to Leicester City", src:"Swansea City official", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"up", note:"Transfer completed", lastSeen:"2026-08-08T10:03:40Z", baseProb:100},
  {name:"Conor Chaplin", sub:"Unknown · Unknown · Forward", club:"Ipswich Town", pos:"Forward", report:"Leicester City sign former Ipswich Town forward", src:"BBC", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer completed", lastSeen:"2026-08-08T10:03:40Z", baseProb:100}
];
const OUTGOING = [
  {name:"Jeremy Monga", sub:"17 · Unknown · Unknown", club:"Manchester City", pos:"Unknown", report:"Man City complete signing of 17-year-old Leicester", src:"transferfeed snapshot", tier:3, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer completed to Manchester City", lastSeen:"2026-08-08T10:03:40Z", baseProb:100},
  {name:"Abdul Fatawu", sub:"Winger", club:"Ipswich Town", pos:"W", report:"Ipswich complete £20m deal for Leicester City winger Abdul Fatawu", src:"BBC", tier:2, fee:"£20m", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T14:10:32Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "src-planetnogomet": {l:"Planet Nogomet", u:"https://news.google.com/search?q=Planet%20Nogomet%20Leicester%20City%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  "orourke": {l:"Pete O'Rourke (Football Insider)", u:"https://x.com/talkSPORT_PeteO"},
  "gnews-liamcullen": {l:"Related news search: Liam Cullen", u:"https://news.google.com/search?q=Leicester%20City%20Liam%20Cullen%20transfer&hl=en-GB&gl=GB"},
  lCFCOfficialAsmirBegovic: {l:"LCFC Official", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxOSzZ2bzJadDBYZDFMYUtGQ1p3bWllQjlJZ0ZCRVJXcFlHSzlnUWFxRFJVVks0dmdUbjA1bjZyWE42WEM4b0RpMVBFZEJJN0N5UTlzQUgxZDR0djRGMDVrMFp5bVFMajJxVVQ3S0RpVkVENXZJcVM1OEJpMzUyUC1XTW5ZUUtRRTNsUGs3NmN3"},
  swanseaCityOfficialLiamCullen: {l:"Swansea City Official", u:"https://news.google.com/rss/articles/CBMihAFBVV95cUxQeG90ZXE2ZFQ3MmpxVW5lY1VpWjMxLXh0MGxuR0JnRzdnNE43NVBJTGMwQkhqUXZydWJzemtubmpBRkJwQ2h4amdOU1UxS1g3RjY4dHZkeS1wSVdEWTNoekpqanFENGxwSG5ucXpBbUYtVTVqMVowUUpCTWxxc19aMlRlbzM"},
  bBCConorChaplin: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBYU1hicnQxOEozRERVNnhxRmxFTmFHbHJKYU51MUN2TlFPSzZVZjF4TEEwOEpqbWxBQ1ZaZW0zOFB5ZnJiaENvS1Z0SU4yVVFtT0U3MjdIUVczYVozTG1sRnl1U2NkZGs"},
  skySportsJeremyMonga: {l:"Sky Sports", u:"https://news.google.com/rss/articles/CBMi1gFBVV95cUxOTW04czdJdUFaUGloM0hCTzJkUFpQU2JHRUM4MzJVOFU2a3REanV2X0VYclNyb0J2Tm54U1NMZGxpb3k3anNLTlZrejBJUmc5WW9sR0xUVS00UnM3bjlZM28zdmxxNHU1VVdnb2pkTzdnMWVlSE53V0hzTDdHa09qaHZzbDV2VHRLTW5uSUI4OUw1cmNHeWpyeUtZZUFHaV9vZkpYUVpvb1RLeFMxWTZuc0JrM2FMTHZJR0RlUEFZSmhRUF9UX3YzTXZUN0Q0N1I3QV9Td09n"},
  leicesterCityOfficialAlexMcCarthy: {l:"Leicester City Official", u:"https://news.google.com/rss/articles/CBMiigFBVV95cUxNbXZOQngzYnJuVjRFb3hZelJhcTUtNWM3Q2FIUGhfYkVyRmtwXzFtd0lxUnRfNE9razZIUzg3ZjFFUGNpMS1GMm9XcllXM21kQU9vQmd3RnN4aGhyR0pwdk4tM0VWRGNsQ01lSkxObmhzQ1FlV2QxLTQ4SFdZVy1zX1pYUnNsUmpFWEE"},
  leicesterMercuryTommyWatson: {l:"Leicester Mercury", u:"https://news.google.com/rss/articles/CBMisgFBVV95cUxNRVJ2MThpNlI5SG1BZ1JEZkkyajNCVFU1cF85eWU2d0tMQ1E2ZHhyUDU1T2dlR1JoYkhfS25GM0prM2F0TDVMMEFvRkVUMmszTVNwMEUwd2drWTJtbFlTMEhaaUVNVUF4MGZqYmo5T0wwUDhsZi0xdExZUVNUWFJEU1ZzUTFROG1IVEVZVHhKT0tmT2tZUFN2dUg3aklkR2R6RTVVQlZBc3BXNnRGYllsd3R3?oc=5"},
  swanseaCityLiamCullen: {l:"Swansea City", u:"https://news.google.com/rss/articles/CBMihAFBVV95cUxQeG90ZXE2ZFQ3MmpxVW5lY1VpWjMxLXh0MGxuR0JnRzdnNE43NVBJTGMwQkhqUXZydWJzemtubmpBRkJwQ2h4amdOU1UxS1g3RjY4dHZkeS1wSVdEWTNoekpqanFENGxwSG5ucXpBbUYtVTVqMVowUUpCTWxxc19aMlRlbzM?oc=5"},
  lCFCOfficialWebsiteAlexMcCarthy: {l:"LCFC Official Website", u:"https://news.google.com/rss/articles/CBMiigFBVV95cUxNbXZOQngzYnJuVjRFb3hZelJhcTUtNWM3Q2FIUGhfYkVyRmtwXzFtd0lxUnRfNE9razZIUzg3ZjFFUGNpMS1GMm9XcllXM21kQU9vQmd3RnN4aGhyR0pwdk4tM0VWRGNsQ01lSkxObmhzQ1FlV2QxLTQ4SFdZVy1zX1pYUnNsUmpFWEE?oc=5"},
  lCFCOfficialWebsiteAlexMcCarthy1: {l:"LCFC Official Website", u:"https://news.google.com/rss/articles/CBMiigFBVV95cUxNbXZOQngzYnJuVjRFb3hZelJhcTUtNWM3Q2FIUGhfYkVyRmtwXzFtd0lxUnRfNE9yazZIUzg3ZjFFUGNpMS1GMm9XcllXM21kQU9vQmd3RnN4aGhyR0pwdk4tM0VWRGNsQ01lSkxObmhzQ1FlV2QxLTQ4SFdZVy1zX1pYUnNsUmpFWEE"},
  bBCAbdulFatawu: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9KblZhQkNYN2t3dHQ5OVVvOU5BNWtlVGtPM1VBY2VIRTZFSFNuQ3JINDZBV0gybks2YXpsU2k3MTdZeDBMRllrU3JDcnFaN2VZMFA1VnJDZXVUNEFmcDNtOGZ3UGZPdGs"}};

const LINKMAP = {
  "Admir Bristric": ["src-planetnogomet", "flw"],
  "Tommy Watson": ["orourke", "flw", "leicesterMercuryTommyWatson"],
  "Liam Cullen": ["gnews-liamcullen", "swanseaCityOfficialLiamCullen", "swanseaCityLiamCullen"],
  "Dom Ballard": ["flw"],
  "Asmir Begovic": ["lCFCOfficialAsmirBegovic"],
  "Conor Chaplin": ["bBCConorChaplin"],
  "Jeremy Monga": ["skySportsJeremyMonga"],
  "Alex McCarthy": ["leicesterCityOfficialAlexMcCarthy", "lCFCOfficialWebsiteAlexMcCarthy", "lCFCOfficialWebsiteAlexMcCarthy1"],
  "Abdul Fatawu": ["bBCAbdulFatawu"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Leicester City · 2026/27 Season`,
  heroLede: `Transfer window active. Leicester City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
