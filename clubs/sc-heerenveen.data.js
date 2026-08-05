/* ============================================================
   MERCATO IQ · CLUB DATA · SC HEERENVEEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "SC Heerenveen",
  mono: "SC ",
  slug: "sc-heerenveen",
  primary: "#0066CC",
  primaryBright: "#0066CC",
  primaryDeep: "#0066CC",
  primaryRgb: "100,100,100",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Kees van Wonderen",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "8th Eredivisie (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["SC Heerenveen transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · SC Heerenveen"
};

const CONFIRMED_IN = [
  {name:"Darling Bladi", sub:"Forward/Attacker", club:"Real Betis (Spain)", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from the La Liga club."}
];

const CONFIRMED_OUT = [
  {name:"Eser Gürbüz", sub:"AM (Right)/FW (Left)", club:"Willem II (loan)", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loaned out without a buy option attached."},
  {name:"Joris van Overeem", sub:"MF/DM (Centre)", club:"FC Utrecht", pos:"MF", fee:"€0.7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Described as an 'oude bekende' (familiar face) returning to Utrecht after four years away."},
  {name:"Nordin Bakker", sub:"GK", club:"FC Midtjylland (Denmark)", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed departure to the Danish Superliga."}
];

const INCOMING = [
  {name:"Tomás Bisuma", sub:"23 · CM · Uruguay", club:"Fiorentina", pos:"CM", report:"30 Jul 2026", src:"Sky Sports", tier:2, fee:"€15m", truth:54, prob:40, note:"Sky reports Heerenveen interest in Fiorentina midfielder.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"},
  fCUpdatenlDarlingBladi: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/heerenveen/transfers"}};

const LINKMAP = {
  "Tomás Bisuma": ["sky"],
  "Darling Bladi": ["fCUpdatenlDarlingBladi"],
  "Eser Gürbüz": ["fCUpdatenlDarlingBladi"],
  "Joris van Overeem": ["fCUpdatenlDarlingBladi"],
  "Nordin Bakker": ["fCUpdatenlDarlingBladi"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `SC Heerenveen · 2026/27 Season`,
  heroLede: `Transfer window active. SC Heerenveen preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
