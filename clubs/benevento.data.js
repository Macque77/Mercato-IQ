/* ============================================================
   MERCATO IQ · CLUB DATA · BENEVENTO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Benevento", mono: "B", slug: "benevento",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
  breadcrumb: ["Italy","Serie B"]
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
  queries: ["benevento transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Simone Verdi", sub:"FW", club:"Free agent", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Annual deal with option to extend to 2028."},
  {name:"Leonardo Sernicola", sub:"DF", club:"Cremonese", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029."},
  {name:"Pietro Beruatto", sub:"DF", club:"Pisa", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029."},
  {name:"Sylla", sub:"GK", club:"Free agent", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Two-year deal plus option to 2029."},
  {name:"Logan Gaspar", sub:"W", club:"Free agent", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Brazilian winger, three-year deal."},
  {name:"Siatounis", sub:"MF", club:"Potenza", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Three-year deal."},
  {name:"Schimmenti", sub:"FW", club:"Free agent", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Three-year deal."}
];
const CONFIRMED_OUT = [
  {name:"Viscardi", sub:"DF", club:"Audace Cerignola", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit to Serie C."},
  {name:"Starita", sub:"FW", club:"Sorrento", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit to Serie C."},
  {name:"Castaldi", sub:"MF", club:"Sorrento", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loaned out to Serie C."}
];
const INCOMING = [
  {name:"Cherubini", sub:"FW", club:"Roma", pos:"FW", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:50, prob:30, light:'y', trend:'flat', note:"Interest reported, competition from Las Palmas noted."},
  {name:"De Luca", sub:"FW", club:"Undisclosed", pos:"FW", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:45, prob:30, light:'y', trend:'flat', note:"General attacking reinforcement target, nothing firm."},
  {name:"Merkaj", sub:"FW", club:"Sudtirol", pos:"FW", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:45, prob:30, light:'y', trend:'flat', note:"Being monitored only."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-simoneverdi": {l:"Related news search: Simone Verdi", u:"https://news.google.com/search?q=Benevento%20Simone%20Verdi%20transfer&hl=en-GB&gl=GB"},
  "gnews-leonardosernicola": {l:"Related news search: Leonardo Sernicola", u:"https://news.google.com/search?q=Benevento%20Leonardo%20Sernicola%20transfer&hl=en-GB&gl=GB"},
  "gnews-pietroberuatto": {l:"Related news search: Pietro Beruatto", u:"https://news.google.com/search?q=Benevento%20Pietro%20Beruatto%20transfer&hl=en-GB&gl=GB"},
  "gnews-sylla": {l:"Related news search: Sylla", u:"https://news.google.com/search?q=Benevento%20Sylla%20transfer&hl=en-GB&gl=GB"},
  "gnews-logangaspar": {l:"Related news search: Logan Gaspar", u:"https://news.google.com/search?q=Benevento%20Logan%20Gaspar%20transfer&hl=en-GB&gl=GB"},
  "gnews-siatounis": {l:"Related news search: Siatounis", u:"https://news.google.com/search?q=Benevento%20Siatounis%20transfer&hl=en-GB&gl=GB"},
  "gnews-schimmenti": {l:"Related news search: Schimmenti", u:"https://news.google.com/search?q=Benevento%20Schimmenti%20transfer&hl=en-GB&gl=GB"},
  "gnews-viscardi": {l:"Related news search: Viscardi", u:"https://news.google.com/search?q=Benevento%20Viscardi%20transfer&hl=en-GB&gl=GB"},
  "gnews-starita": {l:"Related news search: Starita", u:"https://news.google.com/search?q=Benevento%20Starita%20transfer&hl=en-GB&gl=GB"},
  "gnews-castaldi": {l:"Related news search: Castaldi", u:"https://news.google.com/search?q=Benevento%20Castaldi%20transfer&hl=en-GB&gl=GB"},
  "tuttomercato": {l:"Tuttomercatoweb", u:"https://www.tuttomercatoweb.com/"}
};

const LINKMAP = {
  "Simone Verdi": ["gnews-simoneverdi"],
  "Leonardo Sernicola": ["gnews-leonardosernicola"],
  "Pietro Beruatto": ["gnews-pietroberuatto"],
  "Sylla": ["gnews-sylla"],
  "Logan Gaspar": ["gnews-logangaspar"],
  "Siatounis": ["gnews-siatounis"],
  "Schimmenti": ["gnews-schimmenti"],
  "Viscardi": ["gnews-viscardi"],
  "Starita": ["gnews-starita"],
  "Castaldi": ["gnews-castaldi"],
  "Cherubini": ["tuttomercato"],
  "De Luca": ["tuttomercato"],
  "Merkaj": ["tuttomercato"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Benevento · 2026/27 Season`,
  heroLede: `Transfer window active. Benevento preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};