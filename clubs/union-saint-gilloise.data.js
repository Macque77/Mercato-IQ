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
  {name:"Milan Hokke", sub:"CB · Netherlands", club:"ADO Den Haag", pos:"CB", report:"29 Jun 2026", src:"Voetbalkrant", tier:3, fee:"Below asking price", truth:55, prob:35, light:"y", trend:"flat", note:"Union's bid sits under ADO's valuation, but the player has signalled he wants the move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"No recent snippet support; retiring from live list"},
  {name:"Fedde Leysen", sub:"Unknown · Netherlands · Midfielder", club:"PSV", pos:"Midfielder", report:"Transfer from PSV to Royale Union Saint-Gilloise confirmed", src:"psv.nl", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official confirmation from PSV", lastSeen:"2026-08-07T14:38:27Z", baseProb:100}
];
const OUTGOING = [
  {name:"Anan Khalaili", sub:"21 · RWB · Israel", club:"Nottingham Forest", pos:"RWB", report:"29 Jul 2026", src:"The Athletic", tier:1, fee:"£17m bid rejected", truth:75, prob:40, light:"y", trend:"flat", note:"Forest's opening bid was rejected after Khalaili's record €25-32m Inter move collapsed on a failed medical; Bournemouth and Newcastle also circling.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"No recent snippet support; retiring from live list"},
  {name:"Anouar Ait El-Hadj", sub:"24 · MF", club:"Undisclosed", pos:"MF", report:"3 Aug 2026", src:"La Dernière Heure", tier:2, fee:"Undisclosed", truth:45, prob:20, light:"o", trend:"flat", note:"Pointedly left out of Union's Champions League squad for Bodø/Glimt amid exit speculation, though no destination is confirmed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No recent snippet support; retiring from live list"},
  {name:"Mamadou Barry", sub:"CB", club:"Saudi Pro League club", pos:"CB", report:"26 Jul 2026", src:"Voetbalkrant", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"Linked with a Saudi move alongside former teammate Wesley Hoedt.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No recent snippet support; retiring from live list"},
  {name:"Sadiki", sub:"Unknown · Unknown · Unknown", club:"Union Saint-Gilloise", pos:"Unknown", report:"Player departure confirmed; player statement released", src:"VoetbalPrimeur.be", tier:3, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Official departure confirmed by club", lastSeen:"2026-08-07T10:18:48Z", baseProb:100}
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
  voetbalPrimeurbeSadiki: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMixgFBVV95cUxPS0dSZUs5b0c4cVN2aUhCb1M4dGx0S0ZKXzhTZ1kwbUF0X0FRR0lUeUtES0dDTEU2VkRjTWFudnNNam9CNW16U1hiS3JhX1pYX3dXRHdIWkpjd09BZXhkVnR4azBpLXNCSjJDQXowSkJ0Zm5ZSHVlRUpBNzM5cUU4eGhiZGN3b2I0X29UWEZLblptNEhfelpYTzVCTS1BaHJ3R1o5ZWVXNVg3eXVhQTd3MkYwQ0JZOHo0WXpHalhZTkRNaG10Q3c"}};

const LINKMAP = {
  "Milan Hokke": ["voetbalkrantMilanHokke"],
  "Anan Khalaili": ["theAthleticviaYahooSportsAnanKhalaili"],
  "Anouar Ait El-Hadj": ["voetbalkrantviaLaDernireHeureAnouarAitElHadj"],
  "Mamadou Barry": ["voetbalkrantMamadouBarry"],
  "Keo Boets": ["voetbalkrantKeoBoets"],
  "Kjell Scherpen": ["beINSportsKjellScherpen"],
  "Fedde Leysen": ["pSVFeddeLeysen"],
  "Sadiki": ["voetbalPrimeurbeSadiki"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Union Saint-Gilloise · 2026/27 Season`,
  heroLede: `Transfer window active. Union Saint-Gilloise preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};