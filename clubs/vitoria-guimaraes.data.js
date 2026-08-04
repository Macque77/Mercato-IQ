/* ============================================================
   MERCATO IQ · CLUB DATA · VITÓRIA SC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Vitória SC", mono: "VS", slug: "vitoria-guimaraes",
  primary: "#FFFFFF", primaryBright: "#FFFFFF", primaryDeep: "#B0B0B0",
  primaryRgb: "255,255,255",
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
  queries: ["vitoria-guimaraes transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Yeimar Mosquera", sub:"21 · CB · Colombia", club:"Aston Villa", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed until 2030; move facilitated by V Sports' 29% stake in Vitória's football company."},
  {name:"Patrick Ouotro", sub:"20 · ST/W · Côte d'Ivoire", club:"AS Nancy", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent deal signed until 2030."},
  {name:"Lohann Doucet", sub:"23 · MF · Burkina Faso", club:"Paris FC", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Three-year deal through 2029."}
];
const CONFIRMED_OUT = [
  {name:"Diogo Sousa", sub:"20 · MF · Portugal", club:"Strasbourg", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"€11m base fee plus up to €4m in add-ons; Vitória keeps a 10% sell-on clause."}
];
const INCOMING = [
  {name:"Ahmed Sidibé", sub:"24 · CB · France", club:"Venezia", pos:"CB", report:"31 Jul 2026", src:"A Bola", tier:2, fee:"Loan + option to buy", truth:85, prob:88, light:"g", trend:"flat", note:"In Portugal undergoing medical examinations after flying in to complete a season-long loan with purchase option from Venezia.", lastSeen:"2026-08-04T19:10:50Z", baseProb:88}
];
const OUTGOING = [
  {name:"Noah Saviolo", sub:"22 · W · Portugal", club:"Vitória Guimarães", pos:"W", report:"29 May 2026", src:"O Jogo (via Bola na Rede)", tier:3, fee:"Undisclosed", truth:45, prob:30, light:"y", trend:"flat", note:"U21 international winger pointed toward a Benfica move among three expected summer departures; no formal offer confirmed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Gonçalo Nogueira", sub:"22 · MF · Portugal", club:"Vitória Guimarães", pos:"MF", report:"29 May 2026", src:"O Jogo (via Bola na Rede)", tier:3, fee:"Undisclosed", truth:40, prob:30, light:"y", trend:"flat", note:"Listed among players expected to leave this summer; no destination club named yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Oumar Camara", sub:"19 · W", club:"Vitória Guimarães", pos:"W", report:"29 May 2026", src:"O Jogo (via Bola na Rede)", tier:3, fee:"Undisclosed", truth:40, prob:25, light:"o", trend:"flat", note:"Young winger tipped for a summer exit despite a productive 2025/26 (6 goals, 2 assists); no concrete suitor reported.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Vitoria-Guimaraes Official", u:"#"},
  aBolaAhmedSidib: {l:"A Bola", u:"https://www.abola.pt/noticias/mercado-v-guimaraes-sidibe-em-portugal-para-assinar-2026073110215251243"},
  oJogoviaBolanaRedeNoahSaviolo: {l:"O Jogo (via Bola na Rede)", u:"https://bolanarede.pt/especial-bola-na-rede/atualidade/vitoria-sc-3-protagonistas-de-saida-em-guimaraes/"},
  maisfutebolYeimarMosquera: {l:"Maisfutebol", u:"https://maisfutebol.iol.pt/transferencias/vitoria-guimaraes/oficial-mosquera-troca-aston-villa-pelo-v-guimaraes"},
  aBolaPatrickOuotro: {l:"A Bola", u:"https://www.abola.pt/noticias/mercado-oficial-vitoria-de-guimaraes-apresenta-internacional-costa-marfinense-2026072816300455490"},
  aBolaLohannDoucet: {l:"A Bola", u:"https://www.abola.pt/noticias/mercado-oficial-vitoria-de-guimaraes-apresenta-internacional-pelo-burkina-faso-2026071410465450183"},
  aBolaDiogoSousa: {l:"A Bola", u:"https://www.abola.pt/noticias/mercado-vitoria-de-guimaraes-encaixa-milhoes-com-venda-de-diogo-sousa-2026051215470159533"}};

const LINKMAP = {
  "Ahmed Sidibé": ["aBolaAhmedSidib"],
  "Noah Saviolo": ["oJogoviaBolanaRedeNoahSaviolo"],
  "Gonçalo Nogueira": ["oJogoviaBolanaRedeNoahSaviolo"],
  "Oumar Camara": ["oJogoviaBolanaRedeNoahSaviolo"],
  "Yeimar Mosquera": ["maisfutebolYeimarMosquera"],
  "Patrick Ouotro": ["aBolaPatrickOuotro"],
  "Lohann Doucet": ["aBolaLohannDoucet"],
  "Diogo Sousa": ["aBolaDiogoSousa"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Vitória SC · 2026/27 Season`,
  heroLede: `Transfer window active. Vitória SC preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};