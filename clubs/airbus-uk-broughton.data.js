/* ============================================================
   MERCATO IQ · CLUB DATA · AIRBUS UK BROUGHTON · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Airbus UK Broughton", mono: "AUB", slug: "airbus-uk-broughton",
  primary: "#0033A0", primaryBright: "#6EA8FF", primaryDeep: "#001A52",
  primaryRgb: "0,51,160",
  breadcrumb: ["Wales","Cymru Premier"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Mark Allen",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Promoted, Cymru North runners-up (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["airbus-uk-broughton transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:35:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Brandon Diau", sub:"CB · former Bayer Leverkusen academy", club:"Free agent", pos:"Centre back", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed by the FAW's own Cymru Leagues channel, which describes the 6ft 6in defender as Airbus's third summer arrival ahead of their return to the top flight. A second spell in Welsh football after Flint Town United. No fee was disclosed and a free transfer would be normal at this level, so treat the fee line as unconfirmed."}
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
  club: {l:"Airbus UK Broughton Official", u:"#"},
  fAWCymruLeaguesBrandonDiau: {l:"FAW Cymru Leagues", u:"https://faw.cymru/cymru-leagues/news/novira-cymru-leagues-latest-ammanford-strengthen-up-front-as-flint-bid-farewell-to-talisman/"}};

const LINKMAP = {
  "Brandon Diau": ["fAWCymruLeaguesBrandonDiau"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Airbus UK Broughton · 2026/27 Season`,
  heroLede: `Transfer window active. Airbus UK Broughton preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
