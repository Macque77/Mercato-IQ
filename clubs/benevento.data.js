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
  club: {l:"Benevento Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Benevento · 2026/27 Season`,
  heroLede: `Transfer window active. Benevento preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};