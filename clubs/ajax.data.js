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
  {name:"Marc-Andre ter Stegen", sub:"34 · Germany · GK", club:"FC Barcelona", pos:"Goalkeeper", fee:"Loan (season-long)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed by both clubs after weeks of delay caused by a wrangle over who covers the goalkeeper's wages, which the two boards eventually split. ESPN report there is no option to buy, with Ter Stegen contracted at Barcelona until 2028. A request from new head coach Michel, who worked with him at Girona."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Orkun Kökçü", sub:"unknown · Turkey · Midfield", club:"Benfica", pos:"Midfield", report:"Transfer linked", src:"On-page", tier:3, fee:"Unknown", truth:50, prob:50, light:"y", trend:"up", note:"Incoming rumour dated 1 Aug 2026", lastSeen:"2026-08-06T14:21:37Z", baseProb:50},
  {name:"Noa Lang", sub:"unknown · Netherlands · Winger", club:"Club Brugge", pos:"Winger", report:"Named as possible like-for-like replacement; open to return", src:"vi.nl", tier:3, fee:"Unknown", truth:55, prob:55, light:"g", trend:"up", note:"Lang stands open for return according to vi.nl transfer report", lastSeen:"2026-08-06T14:21:37Z", baseProb:55},
  {name:"Bart van Rooij", sub:"unknown · Netherlands · Defender", club:"FC Twente", pos:"Right-back", report:"Earlier reports linked the Twente right-back to Ajax", src:"On-page", tier:3, fee:"Unknown", truth:40, prob:40, light:"y", trend:"up", note:"Right-back linked from Twente", lastSeen:"2026-08-06T14:21:37Z", baseProb:40},
  {name:"Barcelona defender", sub:"unknown · unknown · Defender", club:"Barcelona", pos:"Defender", report:"Ajax making moves for Barcelona defender", src:"vi.nl", tier:3, fee:"Unknown", truth:45, prob:45, light:"y", trend:"flat", note:"Defender identity not specified in snippet", lastSeen:"2026-08-06T14:21:37Z", baseProb:45}
];

const OUTGOING = [
  {name:"Mika Godts", sub:"unknown · Belgium · Forward", club:"PSG", pos:"Forward", report:"PSG lodged official bid of more than €40m", src:"On-page", tier:3, fee:"€40m+", truth:70, prob:70, light:"g", trend:"down", note:"Official bid received from PSG", lastSeen:"2026-08-06T14:21:37Z", baseProb:70},
  {name:"Kian Fitz-Jim", sub:"unknown · unknown · Midfield", club:"Torino", pos:"Midfield", report:"Ajax and Torino closing in on deal", src:"On-page", tier:3, fee:"Unknown", truth:65, prob:65, light:"g", trend:"down", note:"Deal reportedly closing with Torino", lastSeen:"2026-08-06T14:21:37Z", baseProb:65}
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
  voetbalzoneMikeVerweijDeTelegraafKianFitzJim: {l:"Voetbalzone (Mike Verweij, De Telegraaf)", u:"https://www.voetbalzone.nl/nieuws/ajax-nadert-akkoord-over-uitgaande-transfer-van-vier-miljoen-euro/blt521ef7be8f0263fa"},
  fabrizioRomanoXMikaGodts: {l:"Fabrizio Romano (X)", u:"https://x.com/FabrizioRomano/status/2083923908403605760"},
  aFCAjaxofficialMarcAndreterStegen: {l:"AFC Ajax (official)", u:"https://x.com/AFCAjax/status/2084542603547259241"},
  vinlNoaLang: {l:"vi.nl", u:"https://www.vi.nl/"},
  voetbalInternationaalBarcelonadefender: {l:"Voetbal Internationaal", u:"https://www.vi.nl/nieuws/ajax-maakt-werk-van-komst-barcelona-verdediger"}};

const LINKMAP = {
  "Orkun Kökçü": ["sky"],
  "Mika Godts": ["fabrizioRomanoviaFootballTransfersMikaGodts", "fabrizioRomanoXMikaGodts"],
  "Marc-André ter Stegen": ["fabrizioRomanoviaFootballTransfersMarcAndrterStegen"],
  "Edson Álvarez": ["voetbalzoneMikeVerweijDeTelegraafEdsonlvarez"],
  "Tolu Arokodare": ["voetbalzoneMikeVerweijDeTelegraafToluArokodare"],
  "Noa Lang": ["fCUpdatenlNoaLang", "vinlNoaLang"],
  "Bart van Rooij": ["ajax1nlMikeVerweijDeTelegraafBartvanRooij"],
  "Kian Fitz-Jim": ["voetbalzoneMikeVerweijDeTelegraafKianFitzJim"],
  "Marc-Andre ter Stegen": ["aFCAjaxofficialMarcAndreterStegen"],
  "Barcelona defender": ["voetbalInternationaalBarcelonadefender"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AFC Ajax · 2026/27 Season`,
  heroLede: `Transfer window active. AFC Ajax preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
