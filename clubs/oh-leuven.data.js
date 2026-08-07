/* ============================================================
   MERCATO IQ · CLUB DATA · OH LEUVEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "OH Leuven", mono: "OL", slug: "oh-leuven",
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
  queries: ["oh-leuven transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Jamie Lawrence", sub:"23 · CB · Germany", club:"WSG Tirol", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"2.01m Bayern-academy defender signs until 2029 after two seasons in the Austrian Bundesliga."}
];
const CONFIRMED_OUT = [
  {name:"Unknown Player", sub:"Unknown · Unknown · Unknown", club:"OH Leuven", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"JPL champion departing to Eredivisie - official transfer"}
];
const INCOMING = [
  {name:"Jelle Van Neck", sub:"22 · GK · Belgium", club:"Olympique de Marseille", pos:"GK", report:"17 Jul 2026", src:"Get Belgian & Dutch Football News", tier:2, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"OH Leuven seen as offering better first-team chances than rival suitor Mechelen for the ex-Club Brugge academy keeper.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"No recent snippet evidence of activity; appears stale"},
  {name:"Van Den Heuvel", sub:"Unknown · Unknown · Unknown", club:"Celtic", pos:"Unknown", report:"Transfer from Celtic with potential and right mentality", src:"VoetbalPrimeur.be", tier:3, fee:"Undisclosed", truth:85, prob:90, light:"g", trend:"flat", note:"Described as having much potential", lastSeen:"2026-08-07T10:18:48Z", baseProb:90}
];
const OUTGOING = [
  {name:"Davis Opoku", sub:"18 · RB · Belgium", club:"Feyenoord", pos:"RB", report:"27 Jul 2026", src:"Sacha Tavolieri", tier:1, fee:"Undisclosed", truth:70, prob:30, light:"y", trend:"flat", note:"Feyenoord's top choice to replace Givairo Read, with Porto also watching; Opoku is contracted to OHL until 2028.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"On outgoing list but no recent snippet confirms departure; lack of fresh reporting"},
  {name:"Aurélie Reynders", sub:"18 · Belgium · Forward", club:"OH Leuven", pos:"Forward", report:"Most expensive outgoing transfer from Belgium; dreams of Barcelona", src:"sporza.be", tier:2, fee:"Undisclosed", truth:80, prob:75, light:"g", trend:"flat", note:"Young talent potentially outgrowing the club", lastSeen:"2026-08-07T10:18:48Z", baseProb:75},
  {name:"Nyakossi", sub:"Unknown · Unknown · Unknown", club:"OH Leuven", pos:"Unknown", report:"Expected to generate significant transfer fee", src:"VoetbalPrimeur.be", tier:3, fee:"Undisclosed", truth:70, prob:65, light:"g", trend:"flat", note:"Jackpot transfer expected", lastSeen:"2026-08-07T10:18:48Z", baseProb:65}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Oh-Leuven Official", u:"#"},
  getBelgianDutchFootballNewsJelleVanNeck: {l:"Get Belgian & Dutch Football News", u:"https://sports.yahoo.com/articles/oh-leuven-kv-mechelen-interested-081000771.html"},
  voetbalkrantviaSachaTavolieriDavisOpoku: {l:"Voetbalkrant (via Sacha Tavolieri)", u:"https://www.voetbalkrant.com/nieuws/2026-07-27/18-jarig-toptalent-van-oh-leuven-eerste-keuze-bij-feyenoord"},
  voetbalkrantJamieLawrence: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/nieuws/2026-07-20/opvallende-transfer-voor-oh-leuven-ex-bayern-talent-tekent-tot-2029"},
  rOBtvShinYamada: {l:"ROBtv", u:"https://news.google.com/rss/articles/CBMikwFBVV95cUxQUFVmTnc5MElxVFBpMlZ3d21EM2tEejJ0VlFEcUJsR1VIOE9FQWRxTmpIWm5DRDRBYzZqMWhPajNCbDZ4SEt2dl9SOWViTXYwYlp5T3kzRm9SdFZ4X0dUWjBOcHJwVVNpN3locDdBNW4wV3dfU3A0MHNDNFpqb2xhWnRUaWlETWwxVWltWEF6NlJMbEU"},
  voetbalPrimeurbeVanDenHeuvel: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiogFBVV95cUxQYkp5U0dTeXRneVhGNDZLdlpTdmJpQ0M4Y2FDa1RQQ2FubjBZd3dSVzU0S0p5UHBSaEpVeWFwS0ZwOHIyanpOV29nM2wzQlpvcDBnMGJIUEN4bF91RTZUX2xKLU12eDZFT0VvUTdxcFpQZ3YwaVAzTW1KZThNR3hUWmpuQ0dsYzFXVldnRWlfZUpqSVEtQlpEOWJiZ3J0Nl9zMEE"},
  sporzabeAurlieReynders: {l:"sporza.be", u:"https://news.google.com/rss/articles/CBMi4AFBVV95cUxPaE9sZGdSbVhGMnBQb1N4RDBvZzY5Yzl1WFR5NEpQaUdXendSN041aGZTRnZIOS1TUkxfTkhlVGRfR19MMHA5SVpiU3lTdVBwV21NNElGcjZlRU5Yb2Z0ZFlwaXNSMEQzQlRSeFdWeS1ST0ZXaVpsdEdJbS1Qb2lEUWVaMHV1TERfX1VRcjVmTkJUOUpuUnZ1b1o5cWNka19Id3JIVTZUcUZmR0N1RGZ6OWw2ajBaQTJHLWxwQkZIVFpQck5WYVpOYzhzSUl3bWNmaXQzaUNNMV9aUkdyY2IzcA"},
  voetbalPrimeurbeNyakossi: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiqgFBVV95cUxQQzIwT1ZBVnBRdWpidHlvLWMxYVIyWVhsbnNibVlzVVdHSkdFcXFtRHBKRDFsa0pjMWxjSjFGaUE2dzJ0Z1VXVzdoVFlXNXNmd2ZRbU9ydnQwOVBaaGh5VkJxLWt0M24wTVU4MlpUVndUQ1hhV1pSQ2RXSjJ0RS12Y0ZBOUtrNnVMT0RUMTV1SDExM3pCSEk5ZmJ4eDhneWk4UzlRVjZXYU1aUQ"},
  voetbalkrantcomUnknownPlayer: {l:"Voetbalkrant.com", u:"https://news.google.com/rss/articles/CBMisAFBVV95cUxPbGF6MU9RM0psVUZBYm9ZX2VLWjkzMGFYUW5kcDBIRXZLb0JMUWVVSE1TcDNmLThGeHBSa0VGcld1bVRKcjR5NkZ3VWtZOVVMSm81am5GUXpqX3FUNWFXNDZFZEVfVlppV0NBUVB5cU9LMXktVVNlZ0FzUHA1MHdqdlBLLVEyWlBKTTBvZ18wYk1aQXU0amdfQV9DcDQwWG90N3l2eGtDMDNYT3BvNnM4d9IBtgFBVV95cUxNUUdmb0czejB3YlhLZGhaNFNRUHlPY09wa0Vmb3hFU19jVTE5b2dJZHVnSXBzdm9xQkUyWEZtUE5TamFLUHN1WGc3cjJjSDctMVpEOTRxdHozb1hsMlpReGV2V2N0T0luYWs2cUsxbEhsX1NMSlZBOEhIaUtPY1dubEVocjhab0h6SlFVc1QyanhUM1kyWlpMTTFNMl90UWhtaDlqSzRZaGY2bktuVDQ2VWpTbWtuQQ"}};

const LINKMAP = {
  "Jelle Van Neck": ["getBelgianDutchFootballNewsJelleVanNeck"],
  "Davis Opoku": ["voetbalkrantviaSachaTavolieriDavisOpoku"],
  "Jamie Lawrence": ["voetbalkrantJamieLawrence"],
  "Shin Yamada": ["rOBtvShinYamada"],
  "Van Den Heuvel": ["voetbalPrimeurbeVanDenHeuvel"],
  "Aurélie Reynders": ["sporzabeAurlieReynders"],
  "Nyakossi": ["voetbalPrimeurbeNyakossi"],
  "Unknown Player": ["voetbalkrantcomUnknownPlayer"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `OH Leuven · 2026/27 Season`,
  heroLede: `Transfer window active. OH Leuven preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};