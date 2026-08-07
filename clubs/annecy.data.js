/* ============================================================
   MERCATO IQ · CLUB DATA · FC ANNECY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Annecy", mono: "FA", slug: "annecy",
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
  queries: ["annecy transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Lucas Mounguenou", sub:"Unknown · Unknown · Unknown", club:"PSG", pos:"Unknown", report:"Lucas Mounguenou signed to Annecy (Official)", src:"Les Titis du PSG", tier:3, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Abdel Hbouch", sub:"Unknown · Unknown · Unknown", club:"FC Annecy", pos:"Unknown", report:"Clubs from Ligue 2 interested in Abdel Hbouch", src:"Le Dauphiné Libéré", tier:2, fee:"Unknown", truth:70, prob:40, light:"y", trend:"flat", note:"Outgoing interest from other Ligue 2 clubs", lastSeen:"2026-08-07T01:42:32Z", baseProb:40}
];
const OUTGOING = [
  {name:"Abdel Hbouch", sub:"Unknown · Unknown · Unknown", club:"FC Annecy", pos:"Unknown", report:"Clubs from Ligue 2 interested in Abdel Hbouch from Annecy", src:"Le Dauphiné Libéré", tier:2, fee:"Unknown", truth:70, prob:40, light:"y", trend:"flat", note:"Interest from other Ligue 2 clubs", lastSeen:"2026-08-07T01:42:32Z", baseProb:40}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Annecy Official", u:"#"},
  lesTitisduPSGLucasMounguenou: {l:"Les Titis du PSG", u:"https://news.google.com/rss/articles/CBMirgFBVV95cUxPR1dTVlVpb3lIc0IzMVY5UHJCOWNuVzZSWUQ0T2hYN2Y2SDhBbTYzZUlXYzBxQ3ZHTU5WRmVBNnhFWkxEZmo0cmJZQTJyTExFWDdnSi1maGFFRmVZY2xfUGpWck5TM3VfMWZ1UkZTVHN6OFlSSFBQdzhQQzBkOVU4UlpUc1c0Q2xVYkpHWm0tV3NLVzF0VG1ayllRRGl0VGMzTXhmbktmdkM5YzJrY2c"},
  fCAnnecyBenHamedTour: {l:"FC Annecy", u:"https://news.google.com/rss/articles/CBMijwFBVV95cUxPdHdaM3MtU0NvSFhtUlktTEtOb3gyeGNLdTNfa1kwZWNnUEpENzlRZEhwU3BCUGRnQUNaalEwWkdDQ0M3Q3pIVlRNdUJPY3E4YlBkOU1yRi00b0RibE5QSkpEQkRfSEF2bVE2VnBqMkdRZ2hIdW9MR2pHckRMMTNXZHRQMUdwaGVNMzA1X2VIYw"},
  leDauphinLibrAbdelHbouch: {l:"Le Dauphiné Libéré", u:"https://news.google.com/rss/articles/CBMipAFBVV95cUxPeXRCNDZRaEVlcU4xWWVOVUxWT3ZnQjdBejFhWnpjaU93WGIxZTNqXzcyWWhkMFQtcG9kNFJFR0xkY2VLalBrVHdxNHhjbHQ0dTZ0WDRnX1dEXzFUR09YamluOEIwa2xnZTZ0dGQ5TUw2TEh5ZUtZS2VwOXlIZlNFWF9HVnpVeHZKeTBzR0NmX3J2dVJQZHBBRVMwemZvb2g3NDZObA"}};

const LINKMAP = {
  "Lucas Mounguenou": ["lesTitisduPSGLucasMounguenou"],
  "Ben Hamed Touré": ["fCAnnecyBenHamedTour"],
  "Abdel Hbouch": ["leDauphinLibrAbdelHbouch"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Annecy · 2026/27 Season`,
  heroLede: `Transfer window active. FC Annecy preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};