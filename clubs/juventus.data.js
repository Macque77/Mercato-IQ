/* ============================================================
   MERCATO IQ · CLUB DATA · JUVENTUS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Juventus",
  mono: "JUV",
  slug: "juventus",
  primary: "#000000",
  primaryBright: "#333333",
  primaryDeep: "#000000",
  primaryRgb: "0,0,0",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Massimiliano Allegri",
  dof: "Cristiano Giuntoli (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "2nd Serie A (2025/26)",
  owner: "Exor (Andrea Agnelli, President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Juventus transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Juventus"
};

const CONFIRMED_IN = [
  {name:"Joshua Zirkzee", sub:"23 · ST · Netherlands", to:"permanent from Manchester United", fee:"€42.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 15 Jul. The Dutch striker joins Juventus after one season at Old Trafford, bringing pace and technical ability to the frontline."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Paulo Dybala", sub:"30 · CAM/ST · Argentina", club:"AS Roma", pos:"CAM/ST", report:"20 Jul 2026", src:"Corriere della Sera", tier:2, fee:"Free agent", truth:95, prob:92, light:"g", trend:"up", note:"Dybala's Roma contract expires and Juventus are preparing to bring back the Argentine after his 2021 departure. Multiple Serie A sources confirm final negotiations underway."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Paulo Dybala return</b>: Advanced talks to bring the Argentine back to Turin as a free agent."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Juventus summer focus shifts to creative midfield depth with Dybala's likely return from Roma."}
];

const IGNORE = [];

const POSITIONS = [{p:"Attacking midfielder", w:70, x:"Dybala return addresses playmaking needs for 2026/27 campaign."}];

const WATCHLIST = [{name:"Paulo Dybala", club:"AS Roma", pos:"CAM/ST", dir:"in", age:"~13 days", tier:2, note:"Contract expires at Roma; Juventus preparing offer. Expected announcement within days."}];

const HUB = {
  club: {l:"Juventus Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Juventus · 2026/27 Season`,
  heroLede: `Transfer window active. Juventus preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
