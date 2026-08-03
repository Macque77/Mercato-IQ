/* ============================================================
   MERCATO IQ · CLUB DATA · PARIS SAINT-GERMAIN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Paris Saint-Germain",
  mono: "PSG",
  slug: "paris-saint-germain",
  primary: "#004687",
  primaryBright: "#0066CC",
  primaryDeep: "#002654",
  primaryRgb: "0,70,135",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luis Enrique",
  dof: "Klaas-Jan Huntelaar (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "2nd Ligue 1 (2025/26)",
  owner: "Qatar Sports Investments",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["Paris Saint-Germain transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Paris Saint-Germain"
};

const CONFIRMED_IN = [
  {name:"João Neves", sub:"20 · CM · Portugal", to:"permanent from Benfica", fee:"€60m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 15 Jul. Young midfielder joins from Benfica on long-term deal. Key part of PSG's midfield future."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Vinicius Jr", sub:"26 · LW · Brazil", club:"Al-Nassr (Saudi Arabia)", pos:"LW", report:"1 Aug 2026", src:"David Ornstein / The Athletic", tier:1, fee:"€500m (structured)", truth:100, prob:95, light:"g", trend:"up", note:"Ornstein confirms: Real Madrid winger departs to Saudi Arabia in record deal. PSG now monitoring replacement winger options."},
  {name:"Jude Bellingham", sub:"21 · CAM/RW · England", club:"Borussia Dortmund", pos:"CAM/RW", report:"1 Aug 2026", src:"Sky Sports / Alex Crook", tier:2, fee:"€130m", truth:35, prob:15, light:"r", trend:"down", note:"Crook reports PSG unlikely bidder for Dortmund midfielder; Real Madrid frontrunner. PSG focused elsewhere."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>João Neves official</b>: Portuguese midfielder confirmed from Benfica for €60m."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"PSG completing midfield reinforcements with Neves arrival; eye on winger options."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Left winger", w:70, x:"Market monitoring for potential Vinicius replacement as Ornstein reports Real Madrid winger targeted by Saudi Arabia."}
];

const WATCHLIST = [
  {name:"João Neves", club:"PSG", pos:"CM", dir:"in", age:"~19 days", tier:1, note:"OFFICIAL - Portuguese midfielder confirmed from Benfica."}
];

const HUB = {
  club: {l:"Paris Saint-Germain Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Paris Saint-Germain · 2026/27 Season`,
  heroLede: `Transfer window active. Paris Saint-Germain preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
