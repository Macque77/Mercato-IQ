/* ============================================================
   MERCATO IQ · CLUB DATA · FC SCHALKE 04 · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Schalke 04", mono: "S04", slug: "schalke-04",
  primary: "#004B9F", primaryBright: "#5CA9FF", primaryDeep: "#002E5E",
  primaryRgb: "0,75,159",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD (Director)",
  europe: "None (promoted club)",
  finish: "1st 2. Bundesliga (2025/26) - promoted, returning after a three-year absence",
  owner: "Member-owned (FC Schalke 04 e.V.)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://schalke04.de/"],
  queries: ["Schalke 04 transfer news 2026", "Maximilian Wöber Schalke", "Schalke Junior Adamu"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · FC Schalke 04"
};

const CONFIRMED_IN = [
  {name:"Maximilian Wöber", sub:"27 · CB · Austria", to:"free from Leeds United", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 22 Jul: Austrian international centre-back signs as a free agent after his Leeds contract expired; he spent the previous season on loan at Werder Bremen. A significant defensive upgrade for a promoted side."},
  {name:"Junior Adamu", sub:"25 · ST · Austria", to:"permanent from SC Freiburg", fee:"~€800k", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 11 Jun: Austrian forward arrives following a loan at Celtic, giving Schalke an experienced Bundesliga-level striker for the promotion push."},
  {name:"Satoshi Tanaka", sub:"22 · CB", to:"permanent from Fortuna Düsseldorf", fee:"~€1m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Japanese centre-back signed for defensive depth ahead of the club's Bundesliga return."},
  {name:"Robin Gosens", sub:"32 · LB/WB · Germany", to:"loan from AC Fiorentina", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Experienced Germany international full-back joins on loan, adding significant top-flight experience for the newly-promoted squad."}
];

const CONFIRMED_OUT = [];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Wöber signs free from Leeds</b>: a notable defensive coup for a promoted side, adding Austrian international quality at centre-back."},
  {ar:"⬆", t:"<b>Gosens arrives on loan from Fiorentina</b>: experienced left-back brings Bundesliga and international pedigree to support the promotion squad."}
];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Defence", w:40, x:"Wöber, Gosens and Tanaka together represent a significant defensive rebuild to prepare for the step up from 2. Bundesliga."}
];

const WATCHLIST = [];

const HUB = {
  newsde: {l:"news.de", u:"https://www.news.de/sport/859647837/transferticker-fussball-bundesliga-sommer-2026-hsv-daka-wechsel-zugaenge-abgaenge-saison-26-27-adeyemi-bvb-woeber-schalke/1/"},
  baden24: {l:"Baden24", u:"https://www.baden24.de/sport/sc-freiburg/transfer-ticker-sport-club-scf-sommer-neuzugang-abgang-wechsel-infos-news-94318691.html"}
};

const LINKMAP = {
  "Maximilian Wöber": ["newsde"],
  "Junior Adamu": ["baden24"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Back in the Bundesliga: Schalke rebuild the defence for the top flight with Wöber and Gosens`,
  heroLede: `Schalke return to the Bundesliga after winning the 2. Bundesliga title, ending a three-year absence, and have moved decisively to shore up the defence for the step up: Austrian international <b>Maximilian Wöber</b> arrives free from Leeds United, experienced Germany full-back <b>Robin Gosens</b> joins on loan from Fiorentina, and forward <b>Junior Adamu</b> gives the attack proven Bundesliga-level quality following his move from Freiburg.`,
  metaRow: `<span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">1<small>st</small> 2.BL</div></div><div class="stat gold"><div class="l">Status</div><div class="v">Promoted</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">4</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No major departures reported as the squad is being reinforced ahead of the Bundesliga return.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€1.8m + two frees/loan`, x: `Tanaka (€1m) and Adamu (~€800k) confirmed; Wöber signed free, Gosens arrives on loan.` },
  spendOut: { v: `None reported`, x: `No confirmed departures at this stage of the window.` },
  methodLegend: ``
};
