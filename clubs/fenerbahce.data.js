/* ============================================================
   MERCATO IQ · CLUB DATA · FENERBAHÇE SK · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Fenerbahçe SK",
  mono: "FEN",
  slug: "fenerbahce",
  primary: "#FDB913",
  primaryBright: "#FDB913",
  primaryDeep: "#FDB913",
  primaryRgb: "100,100,100",
  breadcrumb: ["Turkey", "Super Lig"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "José Mourinho",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "2nd Super Lig (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Fenerbahçe SK transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Fenerbahçe SK"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Mehmet Topal", sub:"36 · CM · Turkey", club:"Free agent (Fenerbahçe)", pos:"CM", report:"2 Aug 2026", src:"Sky Sports Turkey", tier:2, fee:"Contract renewal", truth:78, prob:85, note:"Sky reports Fenerbahçe close to veteran midfield legend extension.", lastSeen:"2026-08-04T19:10:50Z", baseProb:85},
  {name:"Mason Greenwood", sub:"24 · ST · England", club:"Marseille", pos:"ST", report:"14 Jul 2026", src:"Fabrizio Romano", tier:1, fee:"Undisclosed (Man Utd retains 10%+ sell-on)", truth:60, prob:45, light:"y", trend:"flat", note:"Romano described the move as in its final stages, with no buy-back clause activation from Manchester United.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
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
  fabrizioRomanoviaFootballTransfersMasonGreenwood: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/07/fabrizio-romano-transfer-news-arsenal-leandro-trossard-man-utd-youri-tielemans-real-madrid-michael-olise"}};

const LINKMAP = {
  "Mehmet Topal": ["sky"],
  "Mason Greenwood": ["fabrizioRomanoviaFootballTransfersMasonGreenwood"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Fenerbahçe SK · 2026/27 Season`,
  heroLede: `Transfer window active. Fenerbahçe SK preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
