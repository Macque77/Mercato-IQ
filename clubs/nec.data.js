/* ============================================================
   MERCATO IQ · CLUB DATA · N.E.C. NIJMEGEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "N.E.C.",
  mono: "NEC",
  slug: "nec",
  primary: "#E2001A",
  primaryBright: "#FF4D5E",
  primaryDeep: "#8A0010",
  primaryRgb: "226,0,26",
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
  queries: ["NEC Nijmegen transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · N.E.C."
};

const CONFIRMED_IN = [
  {name:"Clement Bischoff", sub:"Loan with option", club:"Red Bull Salzburg", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan includes purchase option."},
  {name:"Vito van Crooij", sub:"Loan return", club:"Sparta Rotterdam", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2027."},
  {name:"Perr Schuurs", sub:"Summer signing", club:"Torino", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029; former Ajax academy centre-back."},
  {name:"Tobias Storm", sub:"Summer signing", club:"Lyngby BK", pos:"FW", fee:"€1.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2030."},
  {name:"Kaj Sierhuis", sub:"Free transfer", club:"Fortuna Sittard", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029; chose NEC after a foreign move collapsed."},
  {name:"Adam Tahaui", sub:"Summer signing", club:"Vitesse", pos:"MF", fee:"€0.7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2030."},
  {name:"Jamiro Monteiro", sub:"Free transfer", club:"PEC Zwolle", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028."},
  {name:"Emre Mor", sub:"Free transfer, free agent", club:"Fenerbahçe", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028; joined as a free agent."},
  {name:"Dusan Tadic", sub:"Free transfer, free agent", club:"Al Wahda", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028; former Ajax captain returns to the Eredivisie."}
];

const CONFIRMED_OUT = [
  {name:"Danilo", sub:"Loan departure", club:"Rangers FC", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Rijk Janse", sub:"Free transfer", club:"FC Groningen", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2028."},
  {name:"Ahmetcan Kaplan", sub:"Loan departure", club:"Ajax", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Dirk Proper", sub:"Transfer", club:"SC Heerenveen", pos:"MF", fee:"€1.1m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2030."},
  {name:"Basar Önal", sub:"Big-money exit", club:"Lille", pos:"MF", fee:"€12.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract to 2029; NEC's marquee sale of the window."},
  {name:"Luc Nieuwenhuijs", sub:"Transfer", club:"Sparta Rotterdam", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Youssef El Kachati", sub:"Transfer abroad", club:"Reims", pos:"FW", fee:"€2m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Kodai Sano", sub:"Central midfielder", club:"PSV", pos:"MF", report:"PSV and NEC have reached an agreement in principle for the 22-year-old Japanese midfielder after both sides compromised from NEC's initial c.€20m asking price. Sano, currently away with NEC for their Champions League qualifier in Greece against Olympiakos, is expected to travel to Eindhoven imminently for a medical and to sign his contract.", src:"Tim Reedijk, VI.nl", tier:1, fee:"Undisclosed", truth:88, prob:92, light:"g", trend:"flat", note:"Breaking as of 4 August 2026; only medical/signing formalities remain.", lastSeen:"2026-08-04T19:10:50Z", baseProb:92}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  vInlKodaiSano: {l:"VI.nl", u:"https://www.vi.nl/nieuws/doorbraak-bij-psv-akkoord-met-nec-over-kodai-sano"},
  fCUpdatenlClementBischoff: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/07/overzicht-zomertransfers-eredivisie-202526-alle-transfers-op-een-rij"}};

const LINKMAP = {
  "Kodai Sano": ["vInlKodaiSano"],
  "Clement Bischoff": ["fCUpdatenlClementBischoff"],
  "Vito van Crooij": ["fCUpdatenlClementBischoff"],
  "Perr Schuurs": ["fCUpdatenlClementBischoff"],
  "Tobias Storm": ["fCUpdatenlClementBischoff"],
  "Kaj Sierhuis": ["fCUpdatenlClementBischoff"],
  "Adam Tahaui": ["fCUpdatenlClementBischoff"],
  "Jamiro Monteiro": ["fCUpdatenlClementBischoff"],
  "Emre Mor": ["fCUpdatenlClementBischoff"],
  "Dusan Tadic": ["fCUpdatenlClementBischoff"],
  "Danilo": ["fCUpdatenlClementBischoff"],
  "Rijk Janse": ["fCUpdatenlClementBischoff"],
  "Ahmetcan Kaplan": ["fCUpdatenlClementBischoff"],
  "Dirk Proper": ["fCUpdatenlClementBischoff"],
  "Basar Önal": ["fCUpdatenlClementBischoff"],
  "Luc Nieuwenhuijs": ["fCUpdatenlClementBischoff"],
  "Youssef El Kachati": ["fCUpdatenlClementBischoff"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `N.E.C. · 2026/27 Season`,
  heroLede: `Transfer window active. N.E.C. Nijmegen preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
