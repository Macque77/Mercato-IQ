/* ============================================================
   MERCATO IQ · CLUB DATA · GO AHEAD EAGLES · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Go Ahead Eagles",
  mono: "GAE",
  slug: "go-ahead-eagles",
  primary: "#FFCC00",
  primaryBright: "#FFE066",
  primaryDeep: "#8A6E00",
  primaryRgb: "255,204,0",
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
  queries: ["Go Ahead Eagles transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · Go Ahead Eagles"
};

const CONFIRMED_IN = [
  {name:"Kjetil Haug", sub:"Summer signing", club:"Toulouse", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029; part of a reported €1.5m combined outlay with Galvez."},
  {name:"Calvin Twigt", sub:"Loan return", club:"Willem II", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned from loan; contract to 2028."},
  {name:"Nick Marsman", sub:"Free transfer", club:"Fortuna Sittard", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2027; expected to challenge for the No.1 shirt."},
  {name:"Tomas Galvez", sub:"Summer signing", club:"Manchester City", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2030."},
  {name:"Erik Flataker", sub:"Summer signing", club:"AIK", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2030."}
];

const CONFIRMED_OUT = [
  {name:"Luca Everink", sub:"Transfer", club:"FC Emmen", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028."},
  {name:"Kenzo Goudmijn", sub:"Loan departure", club:"Derby County", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Sven Jansen", sub:"Transfer", club:"TOP Oss", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2027."},
  {name:"Milan Smit", sub:"Loan return", club:"Stoke City", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned to parent club."},
  {name:"Aske Adelgaard", sub:"Transfer", club:"FC Twente", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2030."},
  {name:"Jakob Breum", sub:"Transfer abroad", club:"Saint-Étienne", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2030."},
  {name:"Jari De Busser", sub:"Transfer", club:"AZ", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2031; AZ paid a significant fee."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Joris Kramer", sub:"Centre-back, club captain", club:"Ajax / Feyenoord / PSV / AZ (domestic interest)", pos:"DF", report:"Go Ahead director Jan Willem van Dop said the club wants to keep its 29-year-old captain this season after fending off a bid from FC Groningen and an unnamed Turkish club. Kramer was given an informal window until 1 August to explore a move to one of the traditional 'big' Dutch clubs if a serious, respectful offer arrived; Robin Pröpper (FC Twente) has been floated as a possible successor if he does leave.", src:"FCUpdate.nl", tier:2, fee:"Undisclosed", truth:55, prob:20, light:"o", trend:"flat", note:"Self-imposed 1 August deadline has now passed with no confirmed move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  vInlCalvinTwigt: {l:"VI.nl", u:"https://www.vi.nl/nieuws/willem-ii-verhoogt-bod-op-twigt-go-ahead-houdt-voet-bij-stuk"},
  fCUpdatenlJorisKramer: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/07/blijft-joris-kramer-bij-go-ahead-eagles-dit-is-de-stand-van-zaken"},
  footballTransferscomKjetilHaug: {l:"FootballTransfers.com", u:"https://www.footballtransfers.com/nl/transfernieuws/nl-eredivisie/2026/07/go-ahead-eagles-staat-voor-beslissingen-zeven-contracten-lopen-af"},
  fCUpdatenlCalvinTwigt: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/07/overzicht-zomertransfers-eredivisie-202526-alle-transfers-op-een-rij"}};

const LINKMAP = {
  "Calvin Twigt": ["vInlCalvinTwigt", "fCUpdatenlCalvinTwigt"],
  "Joris Kramer": ["fCUpdatenlJorisKramer"],
  "Kjetil Haug": ["footballTransferscomKjetilHaug"],
  "Nick Marsman": ["fCUpdatenlCalvinTwigt"],
  "Tomas Galvez": ["footballTransferscomKjetilHaug"],
  "Erik Flataker": ["footballTransferscomKjetilHaug"],
  "Luca Everink": ["fCUpdatenlCalvinTwigt"],
  "Kenzo Goudmijn": ["fCUpdatenlCalvinTwigt"],
  "Sven Jansen": ["fCUpdatenlCalvinTwigt"],
  "Milan Smit": ["fCUpdatenlCalvinTwigt"],
  "Aske Adelgaard": ["fCUpdatenlCalvinTwigt"],
  "Jakob Breum": ["fCUpdatenlCalvinTwigt"],
  "Jari De Busser": ["fCUpdatenlCalvinTwigt"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Go Ahead Eagles · 2026/27 Season`,
  heroLede: `Transfer window active. Go Ahead Eagles preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
