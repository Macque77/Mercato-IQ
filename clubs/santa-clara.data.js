/* ============================================================
   MERCATO IQ · CLUB DATA · SANTA CLARA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Santa Clara", mono: "SC", slug: "santa-clara",
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
  queries: ["santa-clara transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"João Vasconcelos", sub:"MF", club:"Sporting de Braga", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Alysson", sub:"DF · Brazil", club:"Alverca (loan return)", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Vitinho", sub:"MF · Brazil", club:"Cruzeiro", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];
const CONFIRMED_OUT = [
  {name:"João Afonso", sub:"GK", club:"FC Porto", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Reinaldo", sub:"MF · Brazil", club:"Levski Sofia", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];
const INCOMING = [
  {name:"Rômulo Júnior", sub:"22 · CB · Brazil", club:"Atlético Mineiro", pos:"CB", report:"1 Jul 2026", src:"Gabriel Machado / Antena do Futebol (via A Bola, 26 Jun)", tier:3, fee:"Loan + €4m option (80% economic rights)", truth:72, prob:40, light:"y", trend:"flat", note:"Brazilian outlets said the loan was 'agreed' with a buy option in early July, but the 22-year-old centre-back was absent from Santa Clara's official 11-man reinforcement list unveiled on 1 August, suggesting the move has stalled or fallen through.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Daniel Fuzato", sub:"28 · GK · Brazil", club:"Vasco da Gama", pos:"GK", report:"10 Jun 2026", src:"NetVasco", tier:3, fee:"Undisclosed", truth:50, prob:12, light:"r", trend:"flat", note:"Early-stage monitoring reported after João Afonso's exit to Porto, but Santa Clara has since filled the gloves with ex-Nacional keeper Lucas França, making this move look unlikely to progress further.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Santa-Clara Official", u:"#"},
  aBolaRmuloJnior: {l:"A Bola", u:"https://www.abola.pt/noticias/mercado-santa-clara-acorianos-na-pista-de-central-que-se-estreou-pelo-sporting-2026062620432401554"},
  netVascoDanielFuzato: {l:"NetVasco", u:"https://www.netvasco.com.br/n/386557/santa-clara-por-esta-interessado-na-contratacao-de-daniel-fuzato"},
  rTPAoresJooVasconcelos: {l:"RTP Açores", u:"https://acores.rtp.pt/desporto/medio-joao-vasconcelos-deixa-sporting-de-braga-e-reforca-santa-clara/"},
  soccerwayAlysson: {l:"Soccerway", u:"https://pt.soccerway.com/noticias/futebol-liga-portugal-oficial-defesa-brasileiro-alysson-deixa-alverca-e-reforca-santa-clara/jFJpSMZQ"},
  jornalAores9Vitinho: {l:"Jornal Açores9", u:"https://jornalacores9.pt/2026/07/13/medio-brasileiro-vitinho-reforca-o-santa-clara/"},
  jornalAores9JooAfonso: {l:"Jornal Açores9", u:"https://jornalacores9.pt/2026/05/25/guarda-redes-joao-afonso-e-reforco-do-fc-porto-proveniente-do-santa-clara/"},
  jornalAores9Reinaldo: {l:"Jornal Açores9", u:"https://jornalacores9.pt/2026/06/04/futebolista-brasileiro-reinaldo-deixa-santa-clara-e-assina-pelo-levski-sofia/"}};

const LINKMAP = {
  "Rômulo Júnior": ["aBolaRmuloJnior"],
  "Daniel Fuzato": ["netVascoDanielFuzato"],
  "João Vasconcelos": ["rTPAoresJooVasconcelos"],
  "Alysson": ["soccerwayAlysson"],
  "Vitinho": ["jornalAores9Vitinho"],
  "João Afonso": ["jornalAores9JooAfonso"],
  "Reinaldo": ["jornalAores9Reinaldo"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Santa Clara · 2026/27 Season`,
  heroLede: `Transfer window active. Santa Clara preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};