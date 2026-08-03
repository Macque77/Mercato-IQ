/* ============================================================
   MERCATO IQ · CLUB DATA · ATALANTA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Atalanta",
  mono: "ATA",
  slug: "atalanta",
  primary: "#1B5AA5",
  primaryBright: "#5CA9FF",
  primaryDeep: "#0E3560",
  primaryRgb: "27,90,165",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Maurizio Sarri (since 15 Jun 2026, after Raffaele Palladino's exit)",
  dof: "Cristiano Giuntoli (Sporting Director, since May 2026, ex-Juventus and Napoli)",
  europe: "UEFA Conference League (2026/27) - the club's first-ever Conference League campaign",
  finish: "7th Serie A (2025/26)",
  owner: "Antonio Percassi (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/atalanta/", "https://en.atalanta.it/news"],
  queries: ["Atalanta transfer news 2026", "Atalanta Sarri Giuntoli signings", "Atalanta Gaetano Cagliari"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Atalanta"
};

const CONFIRMED_IN = [
  {name:"Gianluca Gaetano", sub:"23 · AM · Italy", to:"permanent from Cagliari", fee:"~€14m (with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 9 Jul. Requested directly by new coach Maurizio Sarri to add creativity in midfield, arriving from Cagliari for around €14m including add-ons."}
];

const CONFIRMED_OUT = [];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Gianluca Gaetano official</b>: attacking midfielder arrives from Cagliari for around €14m, a Sarri-requested signing."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Maurizio Sarri's first Atalanta window is understated so far - Gaetano is the only confirmed arrival as the club begins its first-ever Conference League campaign following a 7th-place finish."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Ademola Lookman links</b>: dead - the winger completed his move to Atlético Madrid back in the January 2026 window, well before this summer's market opened."}
];

const POSITIONS = [
  {p:"Attacking creativity / wide areas", w:55, x:"Replacing the creative output lost when Lookman departed in January remains the club's biggest ongoing task; Gaetano is a step in that direction rather than a full solution."}
];

const WATCHLIST = [];

const HUB = {
  footballItalia: {l:"Football Italia · Atalanta", u:"https://football-italia.net/category/teams/atalanta/"},
  club: {l:"Atalanta Official · News", u:"https://en.atalanta.it/news"}
};

const LINKMAP = {
  "Gianluca Gaetano": ["footballItalia","club"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Sarri's fresh start: Gaetano arrives as Giuntoli reshapes the sporting project for a maiden Conference League campaign`,
  heroLede: `Atalanta enter 2026/27 under <b>Maurizio Sarri</b>, appointed in June after Raffaele Palladino's departure, and reunited with sporting director <b>Cristiano Giuntoli</b> - the pair worked together during a transformative spell at Napoli between 2015 and 2018. A 7th-place finish means the club's first-ever UEFA Conference League campaign, a step down from recent Europa League football but still European action. The summer's only confirmed incoming so far is <b>Gianluca Gaetano</b>, a Sarri-requested creative midfielder signed from Cagliari for around €14m - business is otherwise quiet, with the club still working through life after <b>Ademola Lookman's</b> January departure to Atlético Madrid.`,
  metaRow: `<span>DECISION-MAKER: <b>Cristiano Giuntoli</b> (Sporting Director)</span> <span>HEAD COACH: <b>Maurizio Sarri</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">7<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">Conf. League</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No advanced outgoing deals reported for this window.`,
  pricingBanner: ``,
  excludedNote: `<b>Excluded as stale:</b> Ademola Lookman speculation - resolved in January 2026 with his move to Atlético Madrid, not part of this summer's business.`,
  spendIn: { v: `~€14m committed`, x: `Gaetano (~€14m) is the only confirmed signing so far this window.` },
  spendOut: { v: `None confirmed`, x: `No first-team departures reported as advanced this window.` },
  methodLegend: ``
};
