/* ============================================================
   MERCATO IQ · CLUB DATA · ESTORIL PRAIA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Estoril Praia", mono: "EP", slug: "estoril",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
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
  queries: ["estoril transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Fernando Medrano", sub:"26 · LB · Spain", club:"CD Mirandés", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer after relegation with Mirandés; one of La Liga 2's standout left-backs."}
];
const CONFIRMED_OUT = [
  {name:"Kévin Boma", sub:"DF", club:"RB Salzburg", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departure confirmed; fee undisclosed."}
];
const INCOMING = [
  {name:"Ilias Kostis", sub:"23 · CB · Greece", club:"Atlético Madrid", pos:"CB", report:"26 Jul 2026", src:"Record (via Bola na Rede)", tier:2, fee:"Loan or permanent (TBD)", truth:60, prob:55, light:"g", trend:"flat", note:"Negotiations between Estoril and Atlético ongoing, resolution expected within days; addresses defensive gaps left by Boma and Bacher exits."}
];
const OUTGOING = [
  {name:"Felix Bacher", sub:"DF", club:"Estoril Praia", pos:"DF", report:"26 Jul 2026", src:"Record (via Bola na Rede)", tier:2, fee:"€4m+", truth:55, prob:50, light:"y", trend:"flat", note:"Increasingly likely to join Lyon under Paulo Fonseca for a fee above €4m; talks progressing but unconfirmed."},
  {name:"Yanis Begraoui", sub:"ST · Morocco", club:"Estoril Praia", pos:"ST", report:"26 May 2026", src:"O Jogo (via Bola na Rede)", tier:3, fee:"Valuation rising", truth:50, prob:40, light:"y", trend:"flat", note:"Third-top scorer in Primeira Liga last season; drawing significant unnamed interest with his stock rising ahead of the 2026 World Cup."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Estoril Official", u:"#"},
  recordviaBolanaRedeIliasKostis: {l:"Record (via Bola na Rede)", u:"https://bolanarede.pt/especial-bola-na-rede/atualidade/estoril-praia-responde-as-saidas-e-ja-negoceia-contratacao-de-defesa-com-o-atletico-madrid/"},
  oJogoviaBolanaRedeYanisBegraoui: {l:"O Jogo (via Bola na Rede)", u:"https://bolanarede.pt/especial-bola-na-rede/atualidade/estoril-praia-prepara-se-para-2-saidas-e-define-setor-prioritario-a-reforcar-no-mercado-de-verao/"},
  matteoMorettoviaBolanaRedeFernandoMedrano: {l:"Matteo Moretto (via Bola na Rede)", u:"https://bolanarede.pt/especial-bola-na-rede/atualidade/estoril-praia-garante-contratacao-de-peso-a-custo-zero-e-garante-jogador-que-foi-destaque-da-la-liga-2/"}};

const LINKMAP = {
  "Ilias Kostis": ["recordviaBolanaRedeIliasKostis"],
  "Felix Bacher": ["recordviaBolanaRedeFelixBacher"],
  "Yanis Begraoui": ["oJogoviaBolanaRedeYanisBegraoui"],
  "Fernando Medrano": ["matteoMorettoviaBolanaRedeFernandoMedrano"],
  "Kévin Boma": ["recordviaBolanaRedeKvinBoma"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Estoril Praia · 2026/27 Season`,
  heroLede: `Transfer window active. Estoril Praia preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};