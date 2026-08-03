/* ============================================================
   MERCATO IQ · CLUB DATA · BORUSSIA DORTMUND · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Borussia Dortmund",
  mono: "BVB",
  slug: "borussia-dortmund",
  primary: "#FFD700",
  primaryBright: "#FFED4E",
  primaryDeep: "#CC9900",
  primaryRgb: "255,215,0",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Nuri Şahin",
  dof: "Sven Mislintat (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "4th Bundesliga (2025/26)",
  owner: "Reinhold Hummels (President)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["Borussia Dortmund transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Borussia Dortmund"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Mats Wieffer", sub:"24 · CM · Netherlands", club:"AZ Alkmaar", pos:"CM", report:"2 Aug 2026", src:"Sky Deutschland / Christian Falk", tier:2, fee:"€25m", truth:62, prob:45, light:"y", trend:"up", note:"Falk reports Dortmund pursuing Dutch midfielder from AZ Alkmaar. Talks progressing steadily."},
  {name:"Moussa Diaby", sub:"25 · LW · France", club:"Bayer Leverkusen", pos:"LW", report:"1 Aug 2026", src:"Bild / Sky Deutschland", tier:2, fee:"€40m", truth:55, prob:35, light:"o", trend:"flat", note:"German media reports Dortmund as one of several clubs interested in Leverkusen winger. Deal unlikely given Leverkusen's asking price."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Midfield rebuild continues with the Wieffer and Diaby pursuits as Dortmund look to add depth ahead of deadline day."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Jude Bellingham to Real Madrid</b>: a recurring but outdated link - Bellingham completed his move to Real Madrid in 2023 and has been a first-team fixture there since; any 'in talks' framing is a recycled misattribution."}
];

const POSITIONS = [
  {p:"Attacking midfield", w:55, x:"Wieffer and Diaby pursuits point to a squad still looking to add creative/defensive-midfield depth."}
];

const WATCHLIST = [
  {name:"Mats Wieffer", club:"AZ Alkmaar", pos:"CM", dir:"in", age:"~1 day", tier:2, note:"Christian Falk: Dortmund pursuing Dutch midfielder from AZ."}
];

const HUB = {
  club: {l:"Borussia Dortmund Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Borussia Dortmund · 2026/27 Season`,
  heroLede: `Transfer window active. Borussia Dortmund preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
