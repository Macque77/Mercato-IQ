/* ============================================================
   MERCATO IQ · CLUB DATA · AMMANFORD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Ammanford", mono: "AMM", slug: "ammanford",
  primary: "#1A1A1A", primaryBright: "#E8E8E8", primaryDeep: "#0A0A0A",
  primaryRgb: "26,26,26",
  breadcrumb: ["Wales","Cymru Premier"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Wyn Thomas",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Promoted, Cymru South 3rd (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["ammanford transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:35:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Jonathan Evans", sub:"33 · Wales · ST", club:"Aberystwyth Town", pos:"Forward", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Announced via the FAW's Cymru Leagues round-up. Evans was Aberystwyth's top scorer last season with 10 goals in 21 appearances, and gives newly promoted Ammanford experience up front for their first top-flight campaign. No fee disclosed, as is standard at this level."},
  {name:"Luc Owen", sub:"Wales · Undisclosed", club:"Undisclosed", pos:"Undisclosed", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed by the club after a pre-season trial spell. Ammanford have not disclosed his previous club, age or position, so treat the detail as thin until the FAW round-up carries it."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Ammanford Official", u:"#"},
  fAWCymruLeaguesJonathanEvans: {l:"FAW / Cymru Leagues", u:"https://faw.cymru/cymru-leagues/news/novira-cymru-leagues-latest-ammanford-strengthen-up-front-as-flint-bid-farewell-to-talisman/"},
  ammanfordAFCofficialLucOwen: {l:"Ammanford AFC (official)", u:"https://ammanfordafc.co.uk/"}};

const LINKMAP = {
  "Jonathan Evans": ["fAWCymruLeaguesJonathanEvans"],
  "Luc Owen": ["ammanfordAFCofficialLucOwen"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Ammanford · 2026/27 Season`,
  heroLede: `Transfer window active. Ammanford preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
