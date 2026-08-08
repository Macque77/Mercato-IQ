/* ============================================================
   MERCATO IQ · CLUB DATA · UNION SAINT-GILLOISE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Union Saint-Gilloise", mono: "US", slug: "union-saint-gilloise",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
  breadcrumb: ["Belgium","Pro League"]
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
  queries: ["union-saint-gilloise transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Keo Boets", sub:"22 · GK · Belgium", club:"Sint-Truiden", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as fourth-choice goalkeeper depth on a one-year deal."}
];
const CONFIRMED_OUT = [
  {name:"Kjell Scherpen", sub:"26 · GK · Netherlands", club:"Ipswich Town", pos:"GK", fee:"~€8-10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Number-one keeper departs for the Premier League after one title-winning season, with a 40% sell-on owed to Brighton."},
  {name:"Sadiki", sub:"Unknown · Unknown · Unknown", club:"", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Player departure confirmed; player statement released"}
];
const INCOMING = [
  {name:"Fedde Leysen", sub:"PSV", club:"PSV", pos:"DEF", report:"Transfer from PSV confirmed", src:"transferfeed snapshot", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Already confirmed on page", lastSeen:"2026-08-08T11:19:01Z", baseProb:100}
];
const OUTGOING = [
  {name:"Anan Khalaili", sub:"21 · RWB · Israel", club:"Nottingham Forest", pos:"RWB", report:"Departure linked", src:"The Athletic", tier:3, fee:"£17m bid rejected", truth:50, prob:50, light:"y", trend:"up", note:"On page as of 29 Jul 2026", lastSeen:"2026-08-08T07:40:32Z", baseProb:50, dead:true, deadReason:"No recent credible link; stale rumour"},
  {name:"Anouar Ait El-Hadj", sub:"24 · MF", club:"Undisclosed", pos:"MF", report:"Departure linked", src:"La Dernière Heure", tier:3, fee:"Undisclosed", truth:50, prob:50, light:"y", trend:"up", note:"On page as of 3 Aug 2026", lastSeen:"2026-08-08T07:40:32Z", baseProb:50, dead:true, deadReason:"No recent credible link; stale rumour"},
  {name:"Mamadou Barry", sub:"CB", club:"Saudi Pro League club", pos:"CB", report:"Departure linked", src:"Voetbalkrant", tier:3, fee:"Undisclosed", truth:50, prob:50, light:"y", trend:"up", note:"On page as of 26 Jul 2026", lastSeen:"2026-08-08T07:40:32Z", baseProb:50, dead:true, deadReason:"No recent credible link; stale rumour"},
  {name:"Sadiki", sub:"Unknown · Unknown · Unknown", club:"Union Saint-Gilloise", pos:"Unknown", report:"Player departure confirmed; player statement released", src:"VoetbalPrimeur.be", tier:3, fee:"Unknown", truth:95, prob:95, light:"g", trend:"down", note:"Departure confirmed with player farewell statement", lastSeen:"2026-08-07T23:07:29Z", baseProb:95}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Union-Saint-Gilloise Official", u:"#"},
  voetbalkrantMilanHokke: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/nieuws/2026-06-29/union-biedt-ver-onder-de-vraagprijs-maar-krijgt-hulp-ik-wil-de-stap-graag-maken"},
  theAthleticviaYahooSportsAnanKhalaili: {l:"The Athletic (via Yahoo Sports)", u:"https://sports.yahoo.com/articles/nottingham-forest-17m-bid-anan-101500691.html"},
  voetbalkrantviaLaDernireHeureAnouarAitElHadj: {l:"Voetbalkrant (via La Dernière Heure)", u:"https://www.voetbalkrant.com/nieuws/2026-08-02/transfergeruchten-zorgen-voor-opvallende-afwezige-bij-union-sg"},
  voetbalkrantMamadouBarry: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/nieuws/2026-07-26/een-duo-met-wesley-hoedt-union-sg-kan-verdediger-naar-saudi-arabie-zien-vertrekken"},
  voetbalkrantKeoBoets: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/nieuws/2026-07-23/done-deal-union-sg-haalt-nieuwe-doelman-in-huis"},
  beINSportsKjellScherpen: {l:"beIN Sports", u:"https://www.beinsports.com/en-us/soccer/premier-league/articles/ipswich-continue-summer-spree-by-signing-six-foot-nine-goalkeeper-scherpen-2026-07-28"},
  pSVFeddeLeysen: {l:"PSV", u:"https://news.google.com/rss/articles/CBMioAFBVV95cUxOSFFrR2NZMERWb25DbVdiVWZ2QThEWW9fVnIyalNFenlOSTJjWDVDcmlZZFFKa1dvTW9vWk8xWnppQVF5Nks1Qmo3bEVRdTYxOEFGazRJZnRQaV9wSFJtNnJUVHpKNjBqd2xGalNXaEhDaS1HRi1WdDNUWVlEaGQ1X0hpRVJPemstaFl4QnJwS28zNnc3eG9SaGw4Ykk5WXlZ"},
  voetbalPrimeurbeSadiki: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMixgFBVV95cUxPS0dSZUs5b0c4cVN2aUhCb1M4dGx0S0ZKXzhTZ1kwbUF0X0FRR0lUeUtES0dDTEU2VkRjTWFudnNNam9CNW16U1hiS3JhX1pYX3dXRHdIWkpjd09BZXhkVnR4azBpLXNCSjJDQXowSkJ0Zm5ZSHVlRUpBNzM5cUU4eGhiZGN3b2I0X29UWEZLblptNEhfelpYTzVCTS1BaHJ3R1o5ZWVXNVg3eXVhQTd3MkYwQ0JZOHo0WXpHalhZTkRNaG10Q3c"},
  voetbalBelgieMilanHokke: {l:"VoetbalBelgie", u:"https://news.google.com/rss/articles/CBMirwFBVV95cUxPd0RhMmNJMG5VMkN3V2ZNcGlkb0tNMnZxcTNkdW9IQXQ0YWFQa2I2Vk5rSFB3UTJQNDJTNGFLVkxjYlVfOVh5X1dhTFdSaHNNakJ1Z2RlZTEyU1NNNU5MRWZfSmpYc1JURmZQU3YtbnFmbWhPUC0zN3h5V0ltRXZGa3g5NG1UTkM5VWptbHhfMGdMQjBfS2M0QjFzQTZvZnk2MFktTWZQY0NzelZWQ2ln"},
  unknownFeddeLeysen: {l:"unknown", u:"unknown"},
  voetbalPrimeurbeSadiki1: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMixgFBVV95cUxPS0dSZUs5b0c4cVN2aUhCb1M4dGx0S0ZKXzhTZ1kwbUF0X0FRR0lUeUtES0dDTEU2VkRjTWFudnNNam9CNW16U1giS3JhX1pYX3dXRHdIWkpjd09BZXhkVnR4azBpLXNCSjJDQXowSkJ0Zm5ZSHVlRUpBNzM5cUU4eGhiZGN3b2I0X29UWEZLblptNEhfelpYTzVCTS1BaHJ3R1o5ZWVXNVg3eXVhQTd3MkYwQ0JZOHo0WXpHalhZTkRNaG10Q3c"}};

const LINKMAP = {
  "Milan Hokke": ["voetbalkrantMilanHokke", "voetbalBelgieMilanHokke"],
  "Anan Khalaili": ["theAthleticviaYahooSportsAnanKhalaili"],
  "Anouar Ait El-Hadj": ["voetbalkrantviaLaDernireHeureAnouarAitElHadj"],
  "Mamadou Barry": ["voetbalkrantMamadouBarry"],
  "Keo Boets": ["voetbalkrantKeoBoets"],
  "Kjell Scherpen": ["beINSportsKjellScherpen"],
  "Fedde Leysen": ["pSVFeddeLeysen", "unknownFeddeLeysen"],
  "Sadiki": ["voetbalPrimeurbeSadiki", "voetbalPrimeurbeSadiki1"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Union Saint-Gilloise · 2026/27 Season`,
  heroLede: `Transfer window active. Union Saint-Gilloise preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};