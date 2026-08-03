/* ============================================================
   MERCATO IQ · CLUB DATA · LOSC LILLE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "LOSC Lille",
  mono: "LOS",
  slug: "losc-lille",
  primary: "#CC0000",
  primaryBright: "#CC0000",
  primaryDeep: "#CC0000",
  primaryRgb: "100,100,100",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Paulo Fonseca",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "2nd Ligue 1 (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["LOSC Lille transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · LOSC Lille"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Gonçalo Inácio", sub:"23 · CB · Portugal", club:"Sporting CP", pos:"CB", report:"2 Aug 2026", src:"RMC Sport", tier:2, fee:"€35m", truth:58, prob:40, note:"RMC reports Lille monitoring Portuguese defender from Sporting."},
  {name:"Milan Skriniar", sub:"29 · CB · Slovakia", club:"Paris Saint-Germain", pos:"CB", report:"30 Jul 2026", src:"L'Équipe", tier:2, fee:"€30m", truth:50, prob:30, note:"L'Équipe reports Lille interest in PSG centre-back; PSG not eager to sell."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  club: {l:"LOSC Lille Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `LOSC Lille · 2026/27 Season`,
  heroLede: `Transfer window active. LOSC Lille preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
