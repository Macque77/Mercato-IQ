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
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Jelle Van Neck", sub:"22 · GK · Belgium", club:"Olympique de Marseille", pos:"GK", report:"17 Jul 2026", src:"Get Belgian & Dutch Football News", tier:2, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"OH Leuven seen as offering better first-team chances than rival suitor Mechelen for the ex-Club Brugge academy keeper.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];
const OUTGOING = [
  {name:"Davis Opoku", sub:"18 · RB · Belgium", club:"Feyenoord", pos:"RB", report:"27 Jul 2026", src:"Sacha Tavolieri", tier:1, fee:"Undisclosed", truth:70, prob:30, light:"y", trend:"flat", note:"Feyenoord's top choice to replace Givairo Read, with Porto also watching; Opoku is contracted to OHL until 2028.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
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
  voetbalkrantJamieLawrence: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/nieuws/2026-07-20/opvallende-transfer-voor-oh-leuven-ex-bayern-talent-tekent-tot-2029"}};

const LINKMAP = {
  "Jelle Van Neck": ["getBelgianDutchFootballNewsJelleVanNeck"],
  "Davis Opoku": ["voetbalkrantviaSachaTavolieriDavisOpoku"],
  "Jamie Lawrence": ["voetbalkrantJamieLawrence"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `OH Leuven · 2026/27 Season`,
  heroLede: `Transfer window active. OH Leuven preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};