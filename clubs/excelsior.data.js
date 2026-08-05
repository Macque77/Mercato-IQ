/* ============================================================
   MERCATO IQ · CLUB DATA · SBV EXCELSIOR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "SBV Excelsior",
  mono: "EXC",
  slug: "excelsior",
  primary: "#C8102E",
  primaryBright: "#FF5C6E",
  primaryDeep: "#6E0918",
  primaryRgb: "200,16,46",
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
  queries: ["SBV Excelsior transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · SBV Excelsior"
};

const CONFIRMED_IN = [
  {name:"Celton Biai", sub:"Summer signing", club:"FC Dordrecht", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028."},
  {name:"David Garden", sub:"Summer signing", club:"Quick Boys", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028; presented as a quick-impact forward."},
  {name:"Kasey Bos", sub:"Loan arrival", club:"FSV Mainz 05", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Nolan Martens", sub:"Loan return", club:"De Graafschap", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2027."},
  {name:"Daniël van Vianen", sub:"Summer signing", club:"FC Dordrecht", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2027."},
  {name:"Marlon van de Wetering", sub:"Summer signing", club:"FC Eindhoven", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029."},
  {name:"Yakub Finey", sub:"Summer signing", club:"GIF Sundsvall", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029."},
  {name:"Jan Plug", sub:"Loan arrival", club:"Feyenoord", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Ilano Silva Timas", sub:"Summer signing", club:"MVV", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029; rose from amateur football to the Eredivisie in two years."},
  {name:"Valentin Sulzbacher", sub:"Summer signing", club:"RB Salzburg", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029."}
];

const CONFIRMED_OUT = [
  {name:"Calvin Raatsie", sub:"Transfer with option", club:"FC Dordrecht", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028 with a club option."},
  {name:"Jerolldino Bergraaf", sub:"Loan departure", club:"AZ", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Moves to AZ's reserve/development squad after one Eredivisie season."},
  {name:"Ilias Bronkhorst", sub:"Transfer abroad", club:"Huddersfield Town", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028."},
  {name:"Lewis Schouten", sub:"Loan return", club:"AZ", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned to parent club."},
  {name:"Arthur Zagré", sub:"Transfer", club:"FC Utrecht", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029."},
  {name:"Derensili Sanches Fernandes", sub:"Big-money exit", club:"Huddersfield Town", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Rotterdam-born forward scored 20 goals in 104 games over three seasons; deal agreed, reunites with Bronkhorst at Huddersfield."}
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
  fCUpdatenlCeltonBiai: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/07/overzicht-zomertransfers-eredivisie-202526-alle-transfers-op-een-rij"},
  fCUpdatenlDerensiliSanchesFernandes: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/07/excelsior-verkoopt-sanches-fernandes-voor-miljoenenbedrag-aan-huddersfield-town"}};

const LINKMAP = {
  "Celton Biai": ["fCUpdatenlCeltonBiai"],
  "David Garden": ["fCUpdatenlCeltonBiai"],
  "Kasey Bos": ["fCUpdatenlCeltonBiai"],
  "Nolan Martens": ["fCUpdatenlCeltonBiai"],
  "Daniël van Vianen": ["fCUpdatenlCeltonBiai"],
  "Marlon van de Wetering": ["fCUpdatenlCeltonBiai"],
  "Yakub Finey": ["fCUpdatenlCeltonBiai"],
  "Jan Plug": ["fCUpdatenlCeltonBiai"],
  "Ilano Silva Timas": ["fCUpdatenlCeltonBiai"],
  "Valentin Sulzbacher": ["fCUpdatenlCeltonBiai"],
  "Calvin Raatsie": ["fCUpdatenlCeltonBiai"],
  "Jerolldino Bergraaf": ["fCUpdatenlCeltonBiai"],
  "Ilias Bronkhorst": ["fCUpdatenlCeltonBiai"],
  "Lewis Schouten": ["fCUpdatenlCeltonBiai"],
  "Arthur Zagré": ["fCUpdatenlCeltonBiai"],
  "Derensili Sanches Fernandes": ["fCUpdatenlDerensiliSanchesFernandes"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `SBV Excelsior · 2026/27 Season`,
  heroLede: `Transfer window active. SBV Excelsior preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
