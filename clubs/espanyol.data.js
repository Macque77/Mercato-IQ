/* ============================================================
   MERCATO IQ · CLUB DATA · RCD ESPANYOL · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RCD Espanyol", mono: "ESP", slug: "espanyol",
  primary: "#003DA5", primaryBright: "#5C93FF", primaryDeep: "#001F52",
  primaryRgb: "0,61,165",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Manolo González",
  dof: "Francisco Rufete (Sporting Director)",
  europe: "None for 2026/27",
  finish: "11th La Liga (2025/26), 46pts",
  owner: "Rastar Group (Chen Yansheng, President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.futbolfantasy.com/laliga/equipos/espanyol/mercado-fichajes/verano-2026"],
  queries: ["RCD Espanyol fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · RCD Espanyol"
};

const CONFIRMED_IN = [
  {name:"Álex Calatrava", sub:"26 · AM/W · Spain", to:"permanent from CD Castellón", fee:"~€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 July 2026 as Espanyol's first signing of the summer. The deal was structured to close before 1 July, taking advantage of his release clause dropping from €10m to €5m after that date."}
];

const CONFIRMED_OUT = [
  {name:"José Salinas", sub:"~26 · LB · Spain", club:"Málaga (loan)", pos:"LB", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 27 July 2026 - the left-back, who came through Elche's academy and made his La Liga debut at Espanyol last season, joins Málaga's promotion push on loan."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Álex Calatrava</b>: first summer signing lands from Castellón before his release clause increased."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Espanyol's summer so far balances one attacking-midfield addition (Calatrava) with a loan exit for young left-back José Salinas to newly-promoted Málaga."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "lagrada-calatrava": {l:"La Grada - Álex Calatrava is Espanyol's first signing of 2026-27", u:"https://lagrada.org/oficial-alex-calatrava-es-el-primer-fichaje-del-espanyol-2026-27/"},
  "jornadaperfecta-salinas": {l:"Jornada Perfecta - José Salinas joins Málaga on loan", u:"https://www.jornadaperfecta.com/blog/jose-salinas-malaga-anuncio-fichaje-26/"}
};

const LINKMAP = {
  "Álex Calatrava": ["lagrada-calatrava"],
  "José Salinas": ["jornadaperfecta-salinas"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A clean, early first signing sets the tone`,
  heroLede: `Under <b>Manolo González</b>, Espanyol moved quickly to beat a release-clause deadline and land <b>Álex Calatrava</b> from Castellón as their first summer signing, while young left-back <b>José Salinas</b> heads out on loan to newly-promoted Málaga for regular football.`,
  metaRow: `<span>COACH: <b>Manolo González</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€5m`, x: `Calatrava fee` },
  spendOut: { v: `Loan (no fee)`, x: `Salinas out on loan to Málaga` },
  methodLegend: ``
};
