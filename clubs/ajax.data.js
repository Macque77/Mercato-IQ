/* ============================================================
   MERCATO IQ · CLUB DATA · AFC AJAX · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AFC Ajax",
  mono: "AFC",
  slug: "ajax",
  primary: "#DC143C",
  primaryBright: "#DC143C",
  primaryDeep: "#DC143C",
  primaryRgb: "100,100,100",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Francesco Farioli",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "2nd Eredivisie (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["AFC Ajax transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AFC Ajax"
};

const CONFIRMED_IN = [
  {name:"Marc-André ter Stegen", sub:"34 · GK · Germany", club:"free from Barcelona", pos:"GK", fee:"Free (Ajax covers a share of salary)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Long-time Barcelona No.1 joins Ajax; Romano reported him already travelling to sign."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Orkun Kökçü", sub:"24 · CM · Turkey", club:"Benfica", pos:"CM", report:"1 Aug 2026", src:"Sky Sports", tier:2, fee:"€30m", truth:52, prob:35, note:"Sky reports Ajax monitoring Benfica midfielder."}
];

const OUTGOING = [
  {name:"Mika Godts", sub:"20 · W · Belgium", club:"Paris Saint-Germain", pos:"W", report:"4 Aug 2026", src:"Fabrizio Romano", tier:1, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"flat", note:"Romano says the move is 'progressing well' with a player agreement reportedly reached, though no club-to-club fee is confirmed."}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"},
  fabrizioRomanoviaFootballTransfersMikaGodts: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-transfer-news-chelsea-trevoh-chalobah-barcelona-rodri-real-madrid-franco-mastantuono"},
  fabrizioRomanoviaFootballTransfersMarcAndrterStegen: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-bruno-guimaraes-enzo-fernandez-mykhailo-mudryk"}};

const LINKMAP = {
  "Orkun Kökçü": ["sky"],
  "Mika Godts": ["fabrizioRomanoviaFootballTransfersMikaGodts"],
  "Marc-André ter Stegen": ["fabrizioRomanoviaFootballTransfersMarcAndrterStegen"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AFC Ajax · 2026/27 Season`,
  heroLede: `Transfer window active. AFC Ajax preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
