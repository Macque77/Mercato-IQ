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
  europe: "UEFA Champions League (2026/27) - back-to-back title holders",
  finish: "1st Ligue 1 (2025/26) - champions",
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

const CONFIRMED_OUT = [
  {name:"Randal Kolo Muani", sub:"27 · ST · France", club:"Juventus", pos:"ST", fee:"Loan fee + ~€43-50m mandatory obligation", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departs on a loan-to-buy after a saga running back to his original January 2025 loan spell at Juventus - now converted into a permanent-track deal."},
  {name:"Gonçalo Ramos", sub:"25 · ST · Portugal", club:"AC Milan", pos:"ST", fee:"€80m+ (with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"The Portugal international departs for Milan in a marquee sale that funds further PSG business, as back-to-back Champions League winners reshape their forward line."}
];

const INCOMING = [
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>João Neves official</b>: Portuguese midfielder confirmed from Benfica for €60m."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Kolo Muani and Gonçalo Ramos depart</b>: both forwards move on (Juventus, AC Milan respectively) as PSG reshape their attacking options after back-to-back European titles."}
];

const NEW = [
  {ar:"✦", t:"Back-to-back Champions League winners reshape the forward line, moving on both Kolo Muani (Juventus) and Gonçalo Ramos (Milan) as Neves solidifies the midfield."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Left winger", w:70, x:"Market monitoring for potential Vinicius replacement as Ornstein reports Real Madrid winger targeted by Saudi Arabia."}
];

const WATCHLIST = [
  {name:"João Neves", club:"PSG", pos:"CM", dir:"in", age:"~19 days", tier:1, note:"OFFICIAL - Portuguese midfielder confirmed from Benfica."}
];

const HUB = {
  "gnews-jooneves": {l:"Related news search: João Neves", u:"https://news.google.com/search?q=Paris%20Saint-Germain%20Jo%C3%A3o%20Neves%20transfer&hl=en-GB&gl=GB"},
  "gnews-randalkolomuani": {l:"Related news search: Randal Kolo Muani", u:"https://news.google.com/search?q=Paris%20Saint-Germain%20Randal%20Kolo%20Muani%20transfer&hl=en-GB&gl=GB"},
  "gnews-gonaloramos": {l:"Related news search: Gonçalo Ramos", u:"https://news.google.com/search?q=Paris%20Saint-Germain%20Gon%C3%A7alo%20Ramos%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "João Neves": ["gnews-jooneves"],
  "Randal Kolo Muani": ["gnews-randalkolomuani"],
  "Gonçalo Ramos": ["gnews-gonaloramos"]
};
const WL_LINKMAP = {
  "João Neves": ["gnews-jooneves"]
};

const PROSE = {
  heroH2: `Back-to-back European champions reshape the forward line around João Neves`,
  heroLede: `PSG enter this window as both reigning Ligue 1 champions and back-to-back Champions League winners under <b>Luis Enrique</b>. With the trophy cabinet full, the summer's business has been about squad reshaping rather than a spending spree: <b>João Neves</b> arrives from Benfica for €60m to anchor the midfield long-term, while both <b>Randal Kolo Muani</b> (to Juventus, loan-to-buy) and <b>Gonçalo Ramos</b> (to AC Milan, €80m+) depart to make room and raise funds.`,
  metaRow: `<span>DECISION-MAKER: <b>Klaas-Jan Huntelaar</b> (Director)</span> <span>HEAD COACH: <b>Luis Enrique</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">1<small>st</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL x2</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Kolo Muani and Ramos departures reflect squad reshaping after a trophy-laden two seasons, not a financial need to sell.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€60m committed`, x: `Neves' arrival is the headline incoming business; no further deals reported as advanced.` },
  spendOut: { v: `€120m+ banked`, x: `Kolo Muani and Ramos departures raise significant funds while reshaping the forward line.` },
  methodLegend: ``
};
