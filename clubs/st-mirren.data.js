/* ============================================================
   MERCATO IQ · CLUB DATA · ST MIRREN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "St Mirren", mono: "STM", slug: "st-mirren",
  primary: "#2B2B2B", primaryBright: "#C0C0C0", primaryDeep: "#161616",
  primaryRgb: "43,43,43",
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
  queries: ["st-mirren transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Samuel Ramos", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"First summer signing."},
  {name:"Ryan Carr", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Second summer signing."},
  {name:"Chris Mochrie", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Justin Thomas", sub:"W", club:"Undisclosed", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed citing a shared vision with the head coach."}
];
const CONFIRMED_OUT = [
  {name:"Tunmise Sobowale", sub:"DF", club:"Shamrock Rovers", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move after an earlier loan spell."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Sule, Mallan and Reid", sub:"Various", club:"Undisclosed", pos:"VAR", report:"~1 wk ago", src:"Daily Record", tier:3, fee:"Undisclosed", truth:35, prob:25, light:'o', trend:'flat', note:"Developing situations referenced in a transfer-latest piece, direction unclear."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"St Mirren Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `St Mirren · 2026/27 Season`,
  heroLede: `Transfer window active. St Mirren preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
