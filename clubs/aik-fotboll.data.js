/* ============================================================
   MERCATO IQ · CLUB DATA · AIK FOTBOLL · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AIK Fotboll",
  mono: "AIK",
  slug: "aik-fotboll",
  primary: "#000000",
  primaryBright: "#000000",
  primaryDeep: "#000000",
  primaryRgb: "100,100,100",
  breadcrumb: ["Sweden", "Allsvenskan"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Tobias Weis",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "1st Allsvenskan (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["AIK Fotboll transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AIK Fotboll"
};

const CONFIRMED_IN = [
  {name:"Diogo Tomas", sub:"29 · Finland · CB", club:"ADO Den Haag", pos:"CB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Announced by AIK on 1 August. Deal runs to the end of the 2026 season with an option for two further campaigns, and he takes shirt 33. Expressen broke the agreement on the Friday before the club confirmed it. Tomas arrived out of contract after promotion with ADO Den Haag, and AIK only turned to him after a return move for Filip Benkovic collapsed late on."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Sotirios Papagiannopoulos", sub:"26 · CB · Greece", club:"AEK Athens", pos:"CB", report:"30 Jul 2026", src:"Sky Sports", tier:2, fee:"€6m", truth:54, prob:40, note:"Sky reports AIK monitoring Greek defender.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
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
  aIKFotbollofficialDiogoTomas: {l:"AIK Fotboll (official)", u:"https://www.aikfotboll.se/artiklar-och-nyheter/260801-diogo-tomas-till-aik-fotboll"}};

const LINKMAP = {
  "Sotirios Papagiannopoulos": ["sky"],
  "Diogo Tomas": ["aIKFotbollofficialDiogoTomas"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AIK Fotboll · 2026/27 Season`,
  heroLede: `Transfer window active. AIK Fotboll preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
