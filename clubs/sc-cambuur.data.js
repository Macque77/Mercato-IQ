/* ============================================================
   MERCATO IQ · CLUB DATA · SC CAMBUUR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "SC Cambuur",
  mono: "CAM",
  slug: "sc-cambuur",
  primary: "#0072CE",
  primaryBright: "#66B2FF",
  primaryDeep: "#003E73",
  primaryRgb: "0,114,206",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-04",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "Promoted from Eerste Divisie (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["SC Cambuur transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · SC Cambuur"
};

const CONFIRMED_IN = [
  {name:"Lucas Jetten", sub:"DF (Left)", club:"Ajax", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer from Ajax's academy pathway."},
  {name:"Skye Vink", sub:"FW/AM", club:"Ajax", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move away from Ajax; publicly criticised his exit from the club shortly after leaving."},
  {name:"Ryan van de Pavert", sub:"DF (Right)/MF", club:"Ajax (loan)", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan from Jong Ajax to get regular senior football."},
  {name:"Sami Bouhoudane", sub:"Attacker", club:"PSV Eindhoven (Jong PSV)", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed 3 August after developing in PSV's academy system."},
  {name:"Daan Visser", sub:"MF", club:"FC Utrecht (loan)", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan move completed 31 July to add midfield depth."},
  {name:"Rafik El Arguioui", sub:"MF", club:"FC Utrecht (loan)", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Cambuur described him as 'the type of player we didn't have yet' on arrival."},
  {name:"Morgan Costarelli", sub:"DF", club:"Lille II (France)", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Lille's reserve side."}
];

const CONFIRMED_OUT = [
  {name:"Kian Visser", sub:"GK", club:"TPS (Finland)", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer to Finnish top flight."},
  {name:"B. Marsman", sub:"DF (Left/Right)", club:"Roda JC", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move to Roda JC."},
  {name:"Jort van der Sande", sub:"FW/AM", club:"Bali United (Indonesia)", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed a move to Indonesia's top flight on 1 July."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  fCUpdatenlLucasJetten: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/cambuur/transfers"},
  voetbalPrimeurnlDaanVisser: {l:"VoetbalPrimeur.nl", u:"https://www.voetbalprimeur.nl/clubs/sc-cambuur"},
  utrechtFansnlRafikElArguioui: {l:"UtrechtFans.nl", u:"https://www.utrechtfans.nl/cambuur-blij-met-el-arguioui-type-speler-die-we-nog-niet-hadden/"}};

const LINKMAP = {
  "Lucas Jetten": ["fCUpdatenlLucasJetten"],
  "Skye Vink": ["fCUpdatenlLucasJetten"],
  "Ryan van de Pavert": ["fCUpdatenlLucasJetten"],
  "Sami Bouhoudane": ["fCUpdatenlLucasJetten"],
  "Daan Visser": ["voetbalPrimeurnlDaanVisser"],
  "Rafik El Arguioui": ["utrechtFansnlRafikElArguioui"],
  "Morgan Costarelli": ["fCUpdatenlLucasJetten"],
  "Kian Visser": ["fCUpdatenlLucasJetten"],
  "B. Marsman": ["fCUpdatenlLucasJetten"],
  "Jort van der Sande": ["voetbalPrimeurnlDaanVisser"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `SC Cambuur · 2026/27 Season`,
  heroLede: `Returning to the Eredivisie after a three-year absence. SC Cambuur preparing squad for top-flight football.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
