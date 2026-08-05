/* ============================================================
   MERCATO IQ · CLUB DATA · ADO DEN HAAG · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "ADO Den Haag",
  mono: "ADO",
  slug: "ado-den-haag",
  primary: "#00843D",
  primaryBright: "#4DDB8C",
  primaryDeep: "#00522A",
  primaryRgb: "0,132,61",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-04",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "Promoted from Eerste Divisie (1st, 2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["ADO Den Haag transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · ADO Den Haag"
};

const CONFIRMED_IN = [
  {name:"Niclas Thiede", sub:"GK · Germany", club:"VfL Bochum", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as the club's new first-choice goalkeeper; manager said 'he fits well' with the squad."},
  {name:"Donát Bárány", sub:"ST · Hungary", club:"Debreceni VSC", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed despite carrying an injury concern; his competitive debut was delayed as a result."},
  {name:"Jan Zamburek", sub:"MF/DF · captain profile", club:"Heracles Almelo", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Picked up following Heracles's relegation from the Eredivisie."},
  {name:"Lasse Wilhelm", sub:"DF · Germany", club:"1. FC Saarbrücken", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free-transfer defender signed on a three-year deal."},
  {name:"Yannick Eduardo", sub:"ST", club:"TSG Hoffenheim (loan)", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"ADO reportedly outbid four other Eredivisie clubs to land the loan striker."}
];

const CONFIRMED_OUT = [
  {name:"Jari Vlak", sub:"MF/DF · captain", club:"CD Castellón (Spain)", pos:"MF", fee:"€0.6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sold to the Spanish second-tier side after a long spell as ADO captain."},
  {name:"Steven van der Sloot", sub:"DF (Right)", club:"Fortuna Düsseldorf (Germany)", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer to the German second division."},
  {name:"Taneli Hämäläinen", sub:"DF · Finland", club:"KuPS (Finland)", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer back to Finnish football."}
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
  fCUpdatenlNiclasThiede: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/ado/transfers"},
  voetbalPrimeurnlYannickEduardo: {l:"VoetbalPrimeur.nl", u:"https://www.voetbalprimeur.nl/clubs/ado-den-haag"}};

const LINKMAP = {
  "Niclas Thiede": ["fCUpdatenlNiclasThiede"],
  "Donát Bárány": ["fCUpdatenlNiclasThiede"],
  "Jan Zamburek": ["fCUpdatenlNiclasThiede"],
  "Lasse Wilhelm": ["fCUpdatenlNiclasThiede"],
  "Yannick Eduardo": ["voetbalPrimeurnlYannickEduardo"],
  "Jari Vlak": ["fCUpdatenlNiclasThiede"],
  "Steven van der Sloot": ["fCUpdatenlNiclasThiede"],
  "Taneli Hämäläinen": ["fCUpdatenlNiclasThiede"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `ADO Den Haag · 2026/27 Season`,
  heroLede: `Promoted back to the Eredivisie. ADO Den Haag preparing squad for top-flight football.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
