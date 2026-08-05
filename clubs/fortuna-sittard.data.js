/* ============================================================
   MERCATO IQ · CLUB DATA · FORTUNA SITTARD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Fortuna Sittard",
  mono: "FOR",
  slug: "fortuna-sittard",
  primary: "#FFD400",
  primaryBright: "#FFE566",
  primaryDeep: "#8A7300",
  primaryRgb: "255,212,0",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-04",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Fortuna Sittard transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · Fortuna Sittard"
};

const CONFIRMED_IN = [
  {name:"Sven Simons", sub:"Summer signing", club:"FC Eindhoven", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029."},
  {name:"Lequincio Zeefuik", sub:"Loan arrival", club:"AZ", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan for 2026/27 season."},
  {name:"Shiloh 't Zand", sub:"Loan with purchase option", club:"Feyenoord", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan includes an option to buy."},
  {name:"Anthony Descotte", sub:"Loan arrival", club:"Sporting Charleroi", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Belgian striker on loan."},
  {name:"Nick de Groot", sub:"Summer signing", club:"FC Den Bosch", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029."},
  {name:"Siebe Wylin", sub:"Summer signing", club:"Club Brugge", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028; third Fortuna signing from Club Brugge this window."},
  {name:"Ole Romeny", sub:"Loan arrival", club:"Oxford United", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan."}
];

const CONFIRMED_OUT = [
  {name:"Neraysho Kasanwirjo", sub:"Loan departure", club:"Feyenoord", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Nick Marsman", sub:"Free transfer", club:"Go Ahead Eagles", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2027 at Go Ahead."},
  {name:"Paul Gladon", sub:"Transfer", club:"NAC Breda", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028."},
  {name:"Kaj Sierhuis", sub:"Free transfer", club:"NEC", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Chose NEC after a foreign move fell through."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Mohamed Ihattaren", sub:"Attacking midfielder, club captain", club:"FC Twente", pos:"MF", report:"Twente is described as the only serious Dutch suitor for Ihattaren, though manager Erik ten Hag had not yet made direct contact as of late July. Fortuna's technical director Joris Mathijsen says no club has formally approached the club yet, while Feyenoord and AZ have both reportedly cooled on the idea.", src:"FCUpdate.nl", tier:2, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"Situation unresolved with the league already underway; six goals/eleven assists in 30 games last season for Fortuna.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  fCUpdatenlMohamedIhattaren: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/07/joris-mathijsen-nog-geen-clubs-concreet-voor-mohamed-ihattaren"},
  fCUpdatenlSvenSimons: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/07/overzicht-zomertransfers-eredivisie-202526-alle-transfers-op-een-rij"}};

const LINKMAP = {
  "Mohamed Ihattaren": ["fCUpdatenlMohamedIhattaren"],
  "Sven Simons": ["fCUpdatenlSvenSimons"],
  "Lequincio Zeefuik": ["fCUpdatenlSvenSimons"],
  "Shiloh 't Zand": ["fCUpdatenlSvenSimons"],
  "Anthony Descotte": ["fCUpdatenlSvenSimons"],
  "Nick de Groot": ["fCUpdatenlSvenSimons"],
  "Siebe Wylin": ["fCUpdatenlSvenSimons"],
  "Ole Romeny": ["fCUpdatenlSvenSimons"],
  "Neraysho Kasanwirjo": ["fCUpdatenlSvenSimons"],
  "Nick Marsman": ["fCUpdatenlSvenSimons"],
  "Paul Gladon": ["fCUpdatenlSvenSimons"],
  "Kaj Sierhuis": ["fCUpdatenlSvenSimons"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Fortuna Sittard · 2026/27 Season`,
  heroLede: `Transfer window active. Fortuna Sittard preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
