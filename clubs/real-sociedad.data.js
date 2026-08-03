/* ============================================================
   MERCATO IQ · CLUB DATA · REAL SOCIEDAD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Real Sociedad", mono: "RS", slug: "real-sociedad",
  primary: "#0067B1", primaryBright: "#5CA9FF", primaryDeep: "#00396A",
  primaryRgb: "0,103,177",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Pellegrino Matarazzo",
  dof: "Aitor Muguerza (Sporting Director)",
  europe: "UEFA Europa League (2026/27) - via 2026 Copa del Rey win",
  finish: "10th La Liga (2025/26), 46pts - Copa del Rey champions",
  owner: "Member-owned (Real Sociedad de Fútbol), Jokin Aperribay President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.futbolfantasy.com/laliga/equipos/real-sociedad/mercado-fichajes/verano-2026"],
  queries: ["Real Sociedad fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Real Sociedad"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Aritz Elustondo", sub:"31 · CB · Spain", club:"Departure confirmed, destination TBC", pos:"CB", fee:"Contract expired", free:true, status:"done", statusTxt:"DONE, CONFIRMED", note:"Announced 5 May 2026 that Elustondo would leave the club at the end of last season."}
];

const INCOMING = [
  {name:"Hidemasa Morita successor / Kamada", sub:"29 · CM · Japan", club:"Crystal Palace / free agent market", pos:"CM", report:"Jun 2026", src:"FútbolFantasy", tier:3, fee:"TBD", truth:35, prob:20, light:"o", trend:"flat", note:"Real Sociedad credited with monitoring Daichi Kamada as a potential midfield addition; no advanced negotiations reported."}
];

const OUTGOING = [
  {name:"Arsen Zakharyan", sub:"22 · AM · Russia", club:"Exit options being explored", pos:"AM", report:"Jun 2026", src:"FútbolFantasy", tier:3, fee:"TBD", truth:40, prob:25, light:"o", trend:"flat", note:"Club reportedly open to Zakharyan leaving after limited game-time; no concrete club interest confirmed."},
  {name:"Álex Remiro", sub:"31 · GK · Spain", club:"Aston Villa (interest)", pos:"GK", report:"Jun 2026", src:"FútbolFantasy", tier:3, fee:"TBD", truth:30, prob:15, light:"o", trend:"flat", note:"Background Premier League interest reported; nothing advanced."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Copa del Rey triumph</b>: beating Athletic Bilbao then Atlético Madrid en route to the title secures a European return via the cup route."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Real Sociedad's biggest 2026 story is silverware, not transfers: the Copa del Rey win over Atlético Madrid secures Europa League football, with the summer window itself so far modest."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Attacking midfield", w:35, x:"Zakharyan's uncertain future and Kamada links point to a possible reshuffle in the No.10 area."}
];

const WATCHLIST = [
  {name:"Arsen Zakharyan", club:"Real Sociedad", pos:"AM", dir:"out", age:"~6 weeks", tier:3, note:"Exit being explored but no concrete suitor confirmed."}
];

const HUB = {
  "aljazeera-copadelrey": {l:"Al Jazeera - Real Sociedad win Copa del Rey", u:"https://www.aljazeera.com/sports/2026/4/19/real-sociedad-upset-atletico-madrid-to-win-fourth-copa-del-rey-title"},
  "futbolfantasy-realsociedad": {l:"FútbolFantasy - Real Sociedad transfer tracker", u:"https://www.futbolfantasy.com/laliga/equipos/real-sociedad/mercado-fichajes/verano-2026"}
};

const LINKMAP = {
  "Aritz Elustondo": ["futbolfantasy-realsociedad"],
  "Hidemasa Morita successor / Kamada": ["futbolfantasy-realsociedad"],
  "Arsen Zakharyan": ["futbolfantasy-realsociedad"],
  "Álex Remiro": ["futbolfantasy-realsociedad"]
};
const WL_LINKMAP = {
  "Arsen Zakharyan": ["futbolfantasy-realsociedad"]
};

const PROSE = {
  heroH2: `Copa del Rey glory secures Europe - the transfer market has been quieter`,
  heroLede: `<b>Real Sociedad</b>'s 2026 headline is silverware: a fourth Copa del Rey, beating Athletic Bilbao and then Atlético Madrid, books their route into the <b>Europa League</b> despite a 10th-place league finish. The transfer market itself has been low-key by comparison, with only background links (Kamada, Zakharyan's future, Remiro interest) so far.`,
  metaRow: `<span>COACH: <b>Pellegrino Matarazzo</b></span> <span>EUROPE: <b>Europa League (Copa del Rey route)</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Trophy</div><div class="v">Copa del Rey</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 confirmed`, x: `No completed signings found as of 3 Aug 2026` },
  spendOut: { v: `€0 fee`, x: `Elustondo departed as contract expired` },
  methodLegend: ``
};
