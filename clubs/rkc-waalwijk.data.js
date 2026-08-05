/* ============================================================
   MERCATO IQ · CLUB DATA · RKC WAALWIJK · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RKC Waalwijk", mono: "RW", slug: "rkc-waalwijk",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
  breadcrumb: ["Netherlands","Eredivisie"]
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
  queries: ["rkc-waalwijk transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Jordy de Wijs", sub:"Experienced centre-back returns to NL", club:"Fortuna Düsseldorf", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"31-year-old ex-PSV/Hull City/QPR defender signed on a free after Düsseldorf's relegation to 3. Liga; contract to mid-2028. Announced 18 May 2026."},
  {name:"Jesse van de Haar", sub:"Signed as Van der Leij's replacement", club:"FC Utrecht", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"21-year-old forward joins on a 3-year deal (to mid-2029) after loan spells at De Graafschap and SK Beveren. Announced 17 June 2026."},
  {name:"Finn Stokkers", sub:"Free-agent forward reinforcement", club:"Go Ahead Eagles", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"30-year-old forward signed on a free transfer, contract to June 2029."},
  {name:"Azzedine Dkidak", sub:"Left-back signed from amateur/1e Divisie side", club:"Spakenburg", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed transfer per club/league transfer records."},
  {name:"Thijs van Leeuwen", sub:"Attacking midfielder joins on free", club:"FC Den Bosch", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed free transfer per club/league transfer records."},
  {name:"Niek Schiks", sub:"Young goalkeeper on loan", club:"PSV", pos:"GK", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan move confirmed per club/league transfer records."}
];
const CONFIRMED_OUT = [
  {name:"Tim van der Leij", sub:"Breakout striker sold to the Bundesliga", club:"VfB Stuttgart", pos:"FW", fee:"€1m+ (rising with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"20-year-old scored 17 goals in 38 games in his debut pro season before completing a move to Stuttgart, joining fellow Dutchman Ramon Hendriks. Announced 18 June 2026."},
  {name:"Denilho Cleonise", sub:"Released on a free transfer", club:"Destination unconfirmed", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left RKC on a free transfer; next club not yet reported."},
  {name:"Richard van der Venne", sub:"Dropped to Eerste Divisie", club:"TOP Oss", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed free transfer per club/league transfer records."},
  {name:"Melle Witteveen", sub:"Released on a free transfer", club:"Destination unconfirmed", pos:"MF/DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left RKC on a free transfer; next club not yet reported."}
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
  club: {l:"Rkc-Waalwijk Official", u:"#"},
  vInlJordydeWijs: {l:"VI.nl", u:"https://www.vi.nl/nieuws/jordy-de-wijs-keert-bij-rkc-terug-naar-nederland"},
  vInlJessevandeHaar: {l:"VI.nl", u:"https://www.vi.nl/nieuws/rkc-waalwijk-pikt-versterking-op-bij-fc-utrecht"},
  fCUpdatenlFinnStokkers: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/rkc-waalwijk/transfers"},
  vInlTimvanderLeij: {l:"VI.nl", u:"https://www.vi.nl/nieuws/rkc-aanvaller-van-der-leij-rondt-droomtransfer-naar-stuttgart-af"}};

const LINKMAP = {
  "Jordy de Wijs": ["vInlJordydeWijs"],
  "Jesse van de Haar": ["vInlJessevandeHaar"],
  "Finn Stokkers": ["fCUpdatenlFinnStokkers"],
  "Azzedine Dkidak": ["fCUpdatenlFinnStokkers"],
  "Thijs van Leeuwen": ["fCUpdatenlFinnStokkers"],
  "Niek Schiks": ["fCUpdatenlFinnStokkers"],
  "Tim van der Leij": ["vInlTimvanderLeij"],
  "Denilho Cleonise": ["fCUpdatenlFinnStokkers"],
  "Richard van der Venne": ["fCUpdatenlFinnStokkers"],
  "Melle Witteveen": ["fCUpdatenlFinnStokkers"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `RKC Waalwijk · 2026/27 Season`,
  heroLede: `Transfer window active. RKC Waalwijk preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};