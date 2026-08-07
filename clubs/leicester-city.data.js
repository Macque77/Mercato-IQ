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
  {name:"Asmir Begovic", sub:"37 · Bosnia and Herzegovina · GK", club:"Everton", pos:"Goalkeeper", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Goalkeeper signed"}
];
const CONFIRMED_OUT = [
  {name:"Jeremy Monga", sub:"17 · Cameroon · W", club:"Manchester City", pos:"Winger", fee:"£10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed transfer to Manchester City"}
];
const INCOMING = [
  {name:"Admir Bristric", sub:"ST", club:"Olimpija Ljubljana (on loan at Bravo)", pos:"ST", report:"~2 wks ago", src:"Planet Nogomet / FLW", tier:2, fee:"€1.7-2m", truth:80, prob:85, light:'g', trend:'up', note:"Player already in England for a medical per reporting.", lastSeen:"2026-08-04T19:10:50Z", baseProb:85, dead:true, deadReason:"No recent update; rumour aged ~2 weeks with no confirmation"},
  {name:"Tommy Watson", sub:"W", club:"Brighton", pos:"W", report:"~3 days ago", src:"@SportsPeteO / FLW", tier:2, fee:"Loan", truth:75, prob:75, light:'g', trend:'up', note:"Loan agreement reportedly reached.", lastSeen:"2026-08-04T19:10:50Z", baseProb:75, dead:true, deadReason:"No corroboration in provided snippets; rumour unverified"},
  {name:"Liam Cullen", sub:"ST", club:"Swansea City", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:55, prob:45, light:'y', trend:'up', note:"Departure described as imminent.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Dom Ballard", sub:"FW", club:"Leyton Orient", pos:"FW", report:"~1 wk ago", src:"FLW", tier:3, fee:"£5m+", truth:45, prob:35, light:'y', trend:'flat', note:"Contested with Bristol City, valuation a sticking point.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"No recent update; rumour aged ~1 week with no confirmation"},
  {name:"Asmir Begovic", sub:"37 · Bosnia and Herzegovina · GK", club:"Free Agent", pos:"Goalkeeper", report:"Signed for Leicester City", src:"Various", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-07T17:40:24Z", baseProb:100},
  {name:"Conor Chaplin", sub:"26 · England · F", club:"Ipswich Town", pos:"Forward", report:"Leicester City sign former Ipswich Town forward", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-07T17:40:24Z", baseProb:100}
];
const OUTGOING = [
  {name:"Jeremy Monga", sub:"17 · Cameroon · W", club:"Manchester City", pos:"Winger", report:"Man City complete signing of 17-year-old Leicester City winger for £10m", src:"Sky Sports", tier:2, fee:"£10m", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed completed transfer", lastSeen:"2026-08-07T17:40:24Z", baseProb:100}
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
  skySportsJeremyMonga: {l:"Sky Sports", u:"https://news.google.com/rss/articles/CBMi1gFBVV95cUxOTW04czdJdUFaUGloM0hCTzJkUFpQU2JHRUM4MzJVOFU2a3REanV2X0VYclNyb0J2Tm54U1NMZGxpb3k3anNLTlZrejBJUmc5WW9sR0xUVS00UnM3bjlZM28zdmxxNHU1VVdnb2pkTzdnMWVlSE53V0hzTDdHa09qaHZzbDV2VHRLTW5uSUI4OUw1cmNHeWpyeUtZZUFHaV9vZkpYUVpvb1RLeFMxWTZuc0JrM2FMTHZJR0RlUEFZSmhRUF9UX3YzTXZUN0Q0N1I3QV9Td09n"}};

const LINKMAP = {
  "Admir Bristric": ["src-planetnogomet", "flw"],
  "Tommy Watson": ["orourke", "flw"],
  "Liam Cullen": ["gnews-liamcullen", "swanseaCityOfficialLiamCullen"],
  "Dom Ballard": ["flw"],
  "Asmir Begovic": ["lCFCOfficialAsmirBegovic"],
  "Conor Chaplin": ["bBCConorChaplin"],
  "Jeremy Monga": ["skySportsJeremyMonga"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Leicester City · 2026/27 Season`,
  heroLede: `Transfer window active. Leicester City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
