/* ============================================================
   MERCATO IQ · CLUB DATA · KILMARNOCK · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Kilmarnock", mono: "KIL", slug: "kilmarnock",
  primary: "#00338D", primaryBright: "#6FA8FF", primaryDeep: "#001A47",
  primaryRgb: "0,51,141",
  breadcrumb: ["Scotland","Premiership"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "TBD (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["kilmarnock transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ieuan Owen", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Calum Ferrie", sub:"GK", club:"Undisclosed", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Roshaun Mathurin", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Mark O'Hara", sub:"MF", club:"Undisclosed", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned to the club."},
  {name:"Bailey Rice", sub:"MF", club:"Rangers", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan signing from Rangers."},
  {name:"Findlay Curtis", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joined in the January window."},
  {name:"Johnly Yfeko", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Made his debut against St Johnstone."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Unnamed Kilmarnock player", sub:"Undisclosed", club:"Rangers", pos:"N/A", report:"~1 wk ago", src:"Yahoo Sports opinion", tier:4, fee:"Undisclosed", truth:30, prob:20, light:'o', trend:'flat', note:"Suggested as a follow-up Rangers target after the Bailey Rice loan, opinion-based."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-ieuanowen": {l:"Related news search: Ieuan Owen", u:"https://news.google.com/search?q=Kilmarnock%20Ieuan%20Owen%20transfer&hl=en-GB&gl=GB"},
  "gnews-calumferrie": {l:"Related news search: Calum Ferrie", u:"https://news.google.com/search?q=Kilmarnock%20Calum%20Ferrie%20transfer&hl=en-GB&gl=GB"},
  "gnews-roshaunmathurin": {l:"Related news search: Roshaun Mathurin", u:"https://news.google.com/search?q=Kilmarnock%20Roshaun%20Mathurin%20transfer&hl=en-GB&gl=GB"},
  "gnews-markohara": {l:"Related news search: Mark O'Hara", u:"https://news.google.com/search?q=Kilmarnock%20Mark%20O%27Hara%20transfer&hl=en-GB&gl=GB"},
  "gnews-baileyrice": {l:"Related news search: Bailey Rice", u:"https://news.google.com/search?q=Kilmarnock%20Bailey%20Rice%20transfer&hl=en-GB&gl=GB"},
  "gnews-findlaycurtis": {l:"Related news search: Findlay Curtis", u:"https://news.google.com/search?q=Kilmarnock%20Findlay%20Curtis%20transfer&hl=en-GB&gl=GB"},
  "gnews-johnlyyfeko": {l:"Related news search: Johnly Yfeko", u:"https://news.google.com/search?q=Kilmarnock%20Johnly%20Yfeko%20transfer&hl=en-GB&gl=GB"},
  "yahoosport": {l:"Yahoo Sports", u:"https://uk.sports.yahoo.com/"}
};

const LINKMAP = {
  "Ieuan Owen": ["gnews-ieuanowen"],
  "Calum Ferrie": ["gnews-calumferrie"],
  "Roshaun Mathurin": ["gnews-roshaunmathurin"],
  "Mark O'Hara": ["gnews-markohara"],
  "Bailey Rice": ["gnews-baileyrice"],
  "Findlay Curtis": ["gnews-findlaycurtis"],
  "Johnly Yfeko": ["gnews-johnlyyfeko"],
  "Unnamed Kilmarnock player": ["yahoosport"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Kilmarnock · 2026/27 Season`,
  heroLede: `Transfer window active. Kilmarnock preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
