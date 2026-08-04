/* ============================================================
   MERCATO IQ · CLUB DATA · AS ROMA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AS Roma",
  mono: "ROM",
  slug: "as-roma",
  primary: "#FDBF08",
  primaryBright: "#FFD000",
  primaryDeep: "#E6A200",
  primaryRgb: "253,191,8",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Gian Piero Gasperini (since Jun 2025, after Claudio Ranieri's retirement from coaching)",
  dof: "Florent Ghisolfi (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "3rd Serie A (2025/26)",
  owner: "Friedkin Group (Dan Friedkin, Chairman)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/roma/", "https://www.goal.com/"],
  queries: ["AS Roma transfer news 2026", "Roma Gasperini Ghisolfi Castro Dovbyk", "Roma Guirassy Cagliari Romano"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AS Roma"
};

const CONFIRMED_IN = [
  {name:"Konstantinos Koulierakis", sub:"CB · Greece", club:"permanent from Wolfsburg", pos:"CB", fee:"€17m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Di Marzio posted arrival images; official signing with medicals and signature to follow."}
];

const CONFIRMED_OUT = [
  {name:"Paulo Dybala", sub:"30 · CAM/ST · Argentina", club:"Juventus", pos:"CAM/ST", fee:"Free agent", free:true, status:"done", statusTxt:"DONE, EXIT", note:"Contract expired 30 Jun. Dybala departs as free agent; Juventus completed signing."},
  {name:"Alessandro Romano", sub:"20 · CB · Italy", club:"Cagliari", pos:"CB", fee:"Loan, €5m plus add-ons obligation to buy", free:false, status:"done", statusTxt:"DONE, LOAN OUT", note:"Confirmed 1 Jul. Young centre-back sent out on loan with an obligation to buy attached, a squad-management move as Roma trims its defensive numbers."},
  {name:"Mattia Viti", sub:"CB · Italy", club:"permanent to Sampdoria", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move after a loan spell, four-year contract, medicals confirmed via Di Marzio."}
];

const INCOMING = [
  {name:"Serhou Guirassy", sub:"24 · ST · Guinea", club:"RB Leipzig", pos:"ST", report:"31 Jul 2026", src:"Matteo Moretto / Fabrizio Romano (Sky Italia)", tier:2, fee:"€30m", truth:58, prob:40, light:"y", trend:"up", note:"Romano and Moretto report Roma in talks with Leipzig for young striker. Deal not finalised but discussions advanced."},
  {name:"Santiago Castro", sub:"21 · ST · Argentina", club:"Bologna", pos:"ST", report:"2 Aug 2026", src:"Football Italia", tier:2, fee:"€35m", truth:55, prob:35, light:"y", trend:"up", note:"Roma reported in negotiations for Bologna's young striker, with Artem Dovbyk potentially moving the opposite way on loan as part of the same conversation - though Genoa are also chasing Dovbyk, complicating any swap."},
  {name:"Jeremie Freuler", sub:"29 · CM · Switzerland", club:"Atalanta", pos:"CM", report:"28 Jul 2026", src:"Corriere della Sera", tier:2, fee:"€15m", truth:45, prob:28, light:"o", trend:"flat", note:"Roma monitoring Atalanta's midfielder as squad depth option. Atalanta not eager sellers."},
  {name:"Richard Ríos", sub:"CDM · Colombia", club:"Palmeiras", pos:"CDM", report:"Jul 2026", src:"Gianluca Di Marzio", tier:2, fee:"Roma offer €25m vs Palmeiras ask ~€30m", truth:55, prob:40, light:"y", trend:"flat", note:"Di Marzio: gap between the clubs is 'just 5 million euros'; Manchester United also inquiring."},
  {name:"Diego Moreira", sub:"21 · LWB · Portugal", club:"Strasbourg", pos:"LWB", report:"15 Jul 2026", src:"Nicolo Schira", tier:1, fee:"Undisclosed", truth:50, prob:30, light:"y", trend:"flat", note:"Roma have reportedly offered a contract to 2031, with direct talks expected between the clubs."}
];

const OUTGOING = [
  {name:"Artem Dovbyk", sub:"28 · ST · Ukraine", club:"Bologna (loan, rumoured)", pos:"ST", report:"4 Jul 2026", src:"Football Italia", tier:2, fee:"Loan (part of possible Castro swap)", truth:48, prob:25, light:"o", trend:"flat", note:"Bologna manager links floated alongside the Castro talks, with Genoa's Daniele De Rossi also reportedly keen on a reunion with his former Roma striker - two suitors chasing the same man muddies the picture."}
];

const RISERS = [];

const FALLERS = [
  {ar:"⬇", t:"<b>Paulo Dybala exits</b>: Argentine leaves on free transfer to Juventus."}
];

const NEW = [
  {ar:"✦", t:"Roma rebuild the forward line under Gasperini following a genuine 3rd-place, Champions League-securing finish - Guirassy and Castro both in the mix as Dovbyk's future is discussed with two different suitors."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Striker", w:75, x:"Dovbyk's future is unsettled and Roma have two live pursuits (Guirassy, Castro) rather than a settled incoming plan."},
  {p:"Central midfield depth", w:35, x:"Freuler monitored as a squad option; Atalanta resistant to selling."}
];

const WATCHLIST = [
  {name:"Serhou Guirassy", club:"RB Leipzig", pos:"ST", dir:"in", age:"~4 days", tier:2, note:"Romano and Moretto: Roma in advanced talks with Leipzig for forward."},
  {name:"Santiago Castro", club:"Bologna", pos:"ST", dir:"in", age:"~1 day", tier:2, note:"Negotiations reported with a potential Dovbyk swap attached."}
];

const HUB = {
  "gnews-paulodybala": {l:"Related news search: Paulo Dybala", u:"https://news.google.com/search?q=AS%20Roma%20Paulo%20Dybala%20transfer&hl=en-GB&gl=GB"},
  "moretto": {l:"Matteo Moretto", u:"https://x.com/MatteMoretto"},
  "romano": {l:"Fabrizio Romano", u:"https://x.com/FabrizioRomano"},
  "corriere": {l:"Corriere della Sera", u:"https://www.corriere.it/sport/"},
  "footballItalia": {l:"Football Italia · AS Roma", u:"https://football-italia.net/category/teams/roma/"},
  "cagliariclub": {l:"Cagliari Calcio Official", u:"https://cagliaricalcio.com/en/news/"},
  "gnews-serhouguirassy": {l:"Related news search: Serhou Guirassy", u:"https://news.google.com/search?q=AS%20Roma%20Serhou%20Guirassy%20transfer&hl=en-GB&gl=GB"},
  gianlucaDiMarzioviaGiallorossinetRichardRos: {l:"Gianluca Di Marzio (via Giallorossi.net)", u:"https://www.giallorossi.net/calciomercato-roma-di-marzio-offerta-di-25-milioni-per-rios-distanza-di-soli-5-col-palmeiras/"},
  nicoloSchiraviaSportingpediaDiegoMoreira: {l:"Nicolo Schira (via Sportingpedia)", u:"https://www.sportingpedia.com/2026/07/15/diego-moreira-set-to-swap-strasbourg-for-as-roma/"},
  gianlucaDiMarzioKonstantinosKoulierakis: {l:"Gianluca Di Marzio", u:"https://x.com/DiMarzio/status/2083512575757594801"},
  gianlucaDiMarzioMattiaViti: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-notizie-giornata-30-luglio-495350"}};

const LINKMAP = {
  "Paulo Dybala": ["gnews-paulodybala"],
  "Serhou Guirassy": ["moretto", "romano"],
  "Jeremie Freuler": ["corriere"],
  "Santiago Castro": ["footballItalia"],
  "Artem Dovbyk": ["footballItalia"],
  "Alessandro Romano": ["cagliariclub"],
  "Richard Ríos": ["gianlucaDiMarzioviaGiallorossinetRichardRos"],
  "Diego Moreira": ["nicoloSchiraviaSportingpediaDiegoMoreira"],
  "Konstantinos Koulierakis": ["gianlucaDiMarzioKonstantinosKoulierakis"],
  "Mattia Viti": ["gianlucaDiMarzioMattiaViti"]};
const WL_LINKMAP = {
  "Serhou Guirassy": ["gnews-serhouguirassy"],
  "Paulo Dybala": ["gnews-paulodybala"],
  "Santiago Castro": ["footballItalia"]
};

const PROSE = {
  heroH2: `Gasperini's first Roma window: a genuine Champions League finish, a forward-line rethink`,
  heroLede: `AS Roma head into 2026/27 in the Champions League on merit, having finished a genuine <b>3rd in Serie A</b> in <b>Gian Piero Gasperini's</b> first season since replacing Claudio Ranieri. The main summer question is the centre-forward slot: <b>Artem Dovbyk's</b> future is being discussed with two different suitors (Bologna and Genoa's Daniele De Rossi, his old Roma boss), while Roma themselves are chasing both <b>Serhou Guirassy</b> from RB Leipzig and Bologna's <b>Santiago Castro</b> as possible incomings - with a Castro-for-Dovbyk swap floated as one route through. <b>Paulo Dybala's</b> free-agent departure to Juventus closes an era, and young defender <b>Alessandro Romano</b> has been loaned to Cagliari with an obligation to buy.`,
  metaRow: `<span>DECISION-MAKER: <b>Florent Ghisolfi</b> (Director)</span> <span>HEAD COACH: <b>Gian Piero Gasperini</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">3<small>rd</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `No incoming deals confirmed yet; Guirassy and Castro both remain at the negotiation stage.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Dovbyk's situation is genuinely unresolved, with two separate suitors reported rather than one advanced move.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `TBD - no signings confirmed`, x: `Guirassy (€30m) and Castro (€35m) are the two live pursuits for the same centre-forward need.` },
  spendOut: { v: `Free + loan business`, x: `Dybala left as a free agent; Romano loaned to Cagliari with a buy obligation.` },
  methodLegend: ``
};
