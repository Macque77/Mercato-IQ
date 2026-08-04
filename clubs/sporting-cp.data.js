/* ============================================================
   MERCATO IQ · CLUB DATA · SPORTING CP · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Sporting CP", mono: "SC", slug: "sporting-cp",
  primary: "#00843D", primaryBright: "#3FCB8C", primaryDeep: "#00532A",
  primaryRgb: "0,132,61",
  breadcrumb: ["Portugal","Liga Portugal"]
};

const VOLATILE = {
  verified: "2026-07-29",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["sporting-cp transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Yeremay Hernandez", sub:"23 · W · Spain", club:"Deportivo La Coruna", pos:"W", report:"13 Jun 2026", src:"A Bola / Record", tier:3, fee:"Undisclosed (two bids already rejected)", truth:40, prob:20, light:"o", trend:"flat", note:"A season-long pursuit with at least two rejected bids; Portuguese press suggest the winger is leaning towards Sporting, but no fresh August update has emerged - treat as warm rather than hot.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Nestory Irankunda", sub:"20 · W · Australia", club:"Watford", pos:"W", report:"31 Jul 2026", src:"Nicolo Schira", tier:1, fee:"~€22m (bonuses included)", truth:55, prob:45, light:"y", trend:"flat", note:"Schira: agreement in principle on personal terms to 2031, with Sporting racing other suitors to close the deal.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
];
const OUTGOING = [
  {name:"Daniel Braganca", sub:"24 · MF · Portugal", club:"Olympiacos", pos:"MF", report:"1 Aug 2026", src:"A Bola / Record / SportTV", tier:2, fee:"~€10m bid tabled", truth:55, prob:40, light:"y", trend:"up", note:"Olympiacos have tabled around €10m for the fringe midfielder, with A Bola describing his Sporting future as 'almost resolved' - i.e. leaving.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Morten Hjulmand", sub:"26 · MF · Denmark", club:"Real Madrid", pos:"MF", report:"Jul 2026", src:"Goal.com", tier:2, fee:"No formal bid reported", truth:45, prob:15, light:"o", trend:"flat", note:"The Sporting captain has himself called Real Madrid interest 'a great honour' - a long-running, still-live storyline, though no formal bid has been reported.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];
const RISERS = [
  {ar:"⬆", t:"<b>Daniel Braganca to Olympiacos advances</b>: A Bola describe his exit as 'almost resolved' after a ~€10m bid."}
];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Sporting's captain Morten Hjulmand has publicly acknowledged Real Madrid interest, while midfielder Daniel Braganca edges closer to an Olympiacos exit."}
];
const IGNORE = [];
const POSITIONS = [
  {p:"Central midfield", w:35, x:"Braganca's exit looks advanced; Hjulmand's Real Madrid links remain speculative without a formal bid."}
];
const WATCHLIST = [
  {name:"Daniel Braganca", club:"Olympiacos", pos:"MF", dir:"out", age:"~3 days", tier:2, note:"A Bola describe his Sporting future as 'almost resolved' after a ~€10m Olympiacos bid."}
];

const HUB = {
  recordBraganca: {l:"Record · Braganca", u:"https://www.record.pt/futebol/futebol-nacional/liga-betclic/sporting/detalhe/olympiacos-prepara-10-m-por-daniel-braganca-o-ponto-de-situacao-sobre-a-saida-do-camisola-23"},
  goalHjulmand: {l:"Goal.com · Hjulmand", u:"https://www.goal.com/en-us/lists/real-madrid-interest-a-great-honour-for-morten-hjulmand/blt1afc10fa0217d6e7"},
  aBolaYeremay: {l:"A Bola · Yeremay", u:"https://www.abola.pt/noticias/mercado-sporting-yeremay-ja-decidiu-o-futuro-e-leao-pode-sorrir-2026061321284002593"},
  nicoloSchiraNestoryIrankunda: {l:"Nicolo Schira", u:"https://www.transferfeed.com/transfers/nestory-irankunda-watford-sporting-cp/43982109"}};

const LINKMAP = {
  "Daniel Braganca": ["recordBraganca"],
  "Morten Hjulmand": ["goalHjulmand"],
  "Yeremay Hernandez": ["aBolaYeremay"],
  "Nestory Irankunda": ["nicoloSchiraNestoryIrankunda"]};
const WL_LINKMAP = {
  "Daniel Braganca": ["recordBraganca"]
};

const PROSE = {
  heroH2: `Sporting's captain acknowledges Real Madrid interest as Braganca nears an Olympiacos exit`,
  heroLede: `Sporting captain <b>Morten Hjulmand</b> has publicly called Real Madrid's interest in him "a great honour" - a live, if still informal, storyline with no bid yet tabled. More concretely, midfielder <b>Daniel Braganca</b> looks close to an Olympiacos move after a ~€10m bid, described by A Bola as leaving his Sporting future "almost resolved". A long pursuit of Deportivo winger <b>Yeremay Hernandez</b> also continues to simmer.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Braganca's Olympiacos move is the most advanced departure story; Hjulmand's Real Madrid links remain informal.`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};