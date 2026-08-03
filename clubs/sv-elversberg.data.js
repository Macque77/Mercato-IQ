/* ============================================================
   MERCATO IQ · CLUB DATA · SV ELVERSBERG · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "SV 07 Elversberg", mono: "ELV", slug: "sv-elversberg",
  primary: "#0057A8", primaryBright: "#3D8FDD", primaryDeep: "#00305E",
  primaryRgb: "0,87,168",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Horst Steffen",
  dof: "TBD (Director)",
  europe: "None (Bundesliga debut season)",
  finish: "4th 2. Bundesliga (2025/26) - promoted, first-ever Bundesliga season",
  owner: "TBD",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.sv-elversberg.de/"],
  queries: ["SV Elversberg transfer news 2026", "SV Elversberg Bundesliga debut Neuzugang"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · SV Elversberg"
};

const CONFIRMED_IN = [
  {name:"Cole Campbell", sub:"18 · CM · England", to:"permanent from Borussia Dortmund", fee:"~€6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young English midfielder signed from Dortmund's academy pipeline - a significant statement fee for a newly-promoted side."},
  {name:"Maurice Krattenmacher", sub:"20 · CM · Germany", to:"permanent from Bayern Munich", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young midfielder arrives from the champions as Elversberg build a squad for their first-ever Bundesliga season."},
  {name:"Luca Sirch", sub:"25 · CM", to:"free from 1. FC Kaiserslautern", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Experienced 2. Bundesliga midfielder signed as squad depth."},
  {name:"Francis Onyeka", sub:"21 · CM · Nigeria", to:"loan from Bayer Leverkusen", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Nigerian midfielder joins on loan for first-team Bundesliga experience."},
  {name:"Noah Darvich", sub:"20 · CM · Germany", to:"loan from VfB Stuttgart", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young midfielder loaned in from Stuttgart for regular game-time."}
];

const CONFIRMED_OUT = [];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Ambitious summer rebuild</b>: five confirmed arrivals, including a €6m academy prospect from Dortmund, as Elversberg prepare for a maiden Bundesliga campaign."}
];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield", w:40, x:"The bulk of the summer's investment - Campbell, Krattenmacher, Sirch, Onyeka and Darvich - has gone into building central midfield depth for the step up in level."}
];

const WATCHLIST = [];

const HUB = {
  club: {l:"SV Elversberg Official", u:"https://www.sv-elversberg.de/"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `History made: Elversberg build for a maiden Bundesliga season with a busy midfield rebuild`,
  heroLede: `SV 07 Elversberg's promotion to the Bundesliga is a first in the club's history, and Horst Steffen's side have used the summer to add significant central-midfield depth for the step up: <b>Cole Campbell</b> arrives from Borussia Dortmund's academy for around €6m, <b>Maurice Krattenmacher</b> joins from champions Bayern Munich, and loan signings <b>Francis Onyeka</b> (Bayer Leverkusen) and <b>Noah Darvich</b> (VfB Stuttgart) add further top-flight pedigree.`,
  metaRow: `<span>HEAD COACH: <b>Horst Steffen</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Status</div><div class="v">Debut</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">5</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No confirmed departures reported as the focus has been squarely on building the squad for the Bundesliga.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€6m+ committed`, x: `Campbell's €6m fee is the headline figure; Krattenmacher's fee is undisclosed, with Sirch signed free and Onyeka/Darvich arriving on loan.` },
  spendOut: { v: `None reported`, x: `No confirmed sales this window.` },
  methodLegend: ``
};
