/* ============================================================
   MERCATO IQ · CLUB DATA · CLUB BRUGGE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Club Brugge",
  mono: "CLU",
  slug: "club-brugge",
  primary: "#2E5CC8",
  primaryBright: "#2E5CC8",
  primaryDeep: "#2E5CC8",
  primaryRgb: "100,100,100",
  breadcrumb: ["Belgium", "Pro League"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Nicky Hayen",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "1st Pro League (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Club Brugge transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Club Brugge"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"David Njoku", sub:"23 · ST · Nigeria", club:"Udinese", pos:"ST", report:"1 Aug 2026", src:"HLN", tier:2, fee:"€18m", truth:60, prob:45, note:"HLN reports Brugge pursuing Nigerian striker from Udinese."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "hln": {l:"HLN", u:"https://www.hln.be/sport/voetbal"}
};

const LINKMAP = {
  "David Njoku": ["hln"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Club Brugge · 2026/27 Season`,
  heroLede: `Transfer window active. Club Brugge preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
