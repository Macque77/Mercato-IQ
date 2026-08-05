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
  {name:"Orkun Kökçü", sub:"24 · CM · Turkey", club:"Benfica", pos:"CM", report:"1 Aug 2026", src:"Sky Sports", tier:2, fee:"€30m", truth:52, prob:35, note:"Sky reports Ajax monitoring Benfica midfielder.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Edson Álvarez", sub:"DM, 28, ex-Ajax captain, currently Fenerbahçe", club:"Fenerbahçe", pos:"MF", report:"Jordi Cruijff is reportedly discussing a reunion with former captain Álvarez to add steel to Ajax's midfield once the Mika Godts sale funds a late-window spending spree.", src:"Mike Verweij, De Telegraaf", tier:1, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"flat", note:"Described as the 'dream candidate' for the No.6 role but no formal proposal reported yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Tolu Arokodare", sub:"FW, 24, Wolverhampton Wanderers", club:"Wolverhampton Wanderers", pos:"FW", report:"Ajax are pushing for a season-long loan with a non-mandatory €18-20m option for the powerful Nigerian striker, whom Wolves bought for €26m from Genk a year ago.", src:"Mike Verweij, De Telegraaf", tier:1, fee:"Loan, ~€18-20m option", truth:65, prob:50, light:"y", trend:"flat", note:"Verweij predicts he 'can become a sensation' in the Eredivisie despite raw technical polish.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50},
  {name:"Noa Lang", sub:"FW, 26, PSV Eindhoven", club:"PSV Eindhoven", pos:"FW", report:"Named as a possible like-for-like replacement for Mika Godts if his PSG move is finalised, though talks have not progressed beyond internal planning.", src:"FCUpdate.nl", tier:2, fee:"Undisclosed", truth:40, prob:25, light:"o", trend:"flat", note:"One of several attacking names floated alongside a defensive midfielder and extra cover.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Bart van Rooij", sub:"RB, FC Twente — link firmly denied", club:"FC Twente", pos:"DF", report:"Earlier reports linked the Twente right-back to Ajax, but De Telegraaf's Mike Verweij has shut the rumour down, calling him 'absolutely not an option'.", src:"Mike Verweij, De Telegraaf", tier:1, fee:"~€10m (mooted)", truth:20, prob:8, light:"r", trend:"flat", note:"Verweij says Ajax's data team routinely checks contract situations across Europe without genuine transfer intent.", lastSeen:"2026-08-04T19:10:50Z", baseProb:8}
];

const OUTGOING = [
  {name:"Mika Godts", sub:"20 · W · Belgium", club:"Paris Saint-Germain", pos:"W", report:"4 Aug 2026", src:"Fabrizio Romano", tier:1, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"flat", note:"Romano says the move is 'progressing well' with a player agreement reportedly reached, though no club-to-club fee is confirmed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Kian Fitz-Jim", sub:"MF, 23, to Torino — contract to 2030", club:"Torino", pos:"MF", report:"Ajax and Torino are closing in on a deal that would send the midfielder to Serie A, with a resale percentage included; a contract until mid-2030 is reportedly ready for him to sign.", src:"Mike Verweij, De Telegraaf / Gianluca Di Marzio", tier:1, fee:"€3-4m", truth:80, prob:82, light:"g", trend:"flat", note:"Described as 'nearing agreement' rather than officially confirmed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:82}
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
  fabrizioRomanoviaFootballTransfersMarcAndrterStegen: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-bruno-guimaraes-enzo-fernandez-mykhailo-mudryk"},
  voetbalzoneMikeVerweijDeTelegraafEdsonlvarez: {l:"Voetbalzone (Mike Verweij, De Telegraaf)", u:"https://www.voetbalzone.nl/nieuws/transferzomer-ajax-neemt-bizarre-wending-er-komen-nog-zeker-vijf-spelers/blta894b8aaebe6f4b9"},
  voetbalzoneMikeVerweijDeTelegraafToluArokodare: {l:"Voetbalzone (Mike Verweij, De Telegraaf)", u:"https://www.voetbalzone.nl/nieuws/verweij-voorspelt-dat-ajax-target-sensatie-in-eredivisie-kan-worden/blte53c96773058de7d"},
  fCUpdatenlNoaLang: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/08/ajax-transferoffensief-nog-niet-voorbij-jordi-cruijff-heeft-nieuwe-plannen-klaarstaan"},
  ajax1nlMikeVerweijDeTelegraafBartvanRooij: {l:"Ajax1.nl (Mike Verweij, De Telegraaf)", u:"https://www.ajax1.nl/mike-verweij-zet-streep-door-ajax-transfer-absoluut-geen-optie/"},
  voetbalzoneMikeVerweijDeTelegraafKianFitzJim: {l:"Voetbalzone (Mike Verweij, De Telegraaf)", u:"https://www.voetbalzone.nl/nieuws/ajax-nadert-akkoord-over-uitgaande-transfer-van-vier-miljoen-euro/blt521ef7be8f0263fa"}};

const LINKMAP = {
  "Orkun Kökçü": ["sky"],
  "Mika Godts": ["fabrizioRomanoviaFootballTransfersMikaGodts"],
  "Marc-André ter Stegen": ["fabrizioRomanoviaFootballTransfersMarcAndrterStegen"],
  "Edson Álvarez": ["voetbalzoneMikeVerweijDeTelegraafEdsonlvarez"],
  "Tolu Arokodare": ["voetbalzoneMikeVerweijDeTelegraafToluArokodare"],
  "Noa Lang": ["fCUpdatenlNoaLang"],
  "Bart van Rooij": ["ajax1nlMikeVerweijDeTelegraafBartvanRooij"],
  "Kian Fitz-Jim": ["voetbalzoneMikeVerweijDeTelegraafKianFitzJim"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AFC Ajax · 2026/27 Season`,
  heroLede: `Transfer window active. AFC Ajax preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
