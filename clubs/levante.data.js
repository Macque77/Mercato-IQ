/* ============================================================
   MERCATO IQ · CLUB DATA · LEVANTE UD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Levante UD", mono: "LEV", slug: "levante",
  primary: "#0F3B6D", primaryBright: "#5C93FF", primaryDeep: "#081F3D",
  primaryRgb: "15,59,109",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luís Castro",
  dof: "Sporting department led by Felipe Miñambres",
  europe: "None for 2026/27",
  finish: "16th La Liga (2025/26), 42pts",
  owner: "Meriton Holdings-linked ownership (Levante UD)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.fichajes.com/equipo/levante-ud/altas-bajas/"],
  queries: ["Levante UD fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Levante UD"
};

const CONFIRMED_IN = [
  {name:"Dani Requena", sub:"24 · CM · Spain", to:"loan (with ~€1m purchase option) from Villarreal", fee:"Loan + option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Cross-verified via Villarreal's own summer transfer record as an official exit to Levante."},
  {name:"Aïssa Mandi", sub:"Centre-back", club:"Lille", pos:"DF", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Experienced ex-Betis defender returns to LaLiga on a two-year deal to lead Luis Castro's backline."},
  {name:"Yanis Musuayi", sub:"Forward", club:"Club Brugge", pos:"FW", fee:"€2.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed through 2030 as the direct replacement lined up immediately after Espí's departure to Real Madrid."},
  {name:"Hugo Sotelo", sub:"CM, Spanish, from Celta Vigo area", club:"Celta Vigo (youth/loan pathway)", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Levante's fourth signing of the summer, a Vigo-born central midfielder who signed at the club's Ciutat de Valencia offices."},
  {name:"Mathew Ryan", sub:"GK, Australian international", club:"Free agent return", pos:"GK", fee:"n/a", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returns to Levante's goalkeeping ranks for the 2026/27 season."}
];

const CONFIRMED_OUT = [
  {name:"Carlos Espi", sub:"CAM/Winger, Spanish, 21", club:"Real Madrid", pos:"CAM", fee:"€25m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"One of the biggest sales in Levante's history; club president Pablo Sanchez confirmed Real Madrid's interest dated back to June. Espi scored 20 goals in 66 appearances over three seasons."},
  {name:"Unai Elgezabal", sub:"CB, Basque, 24", club:"SD Eibar", pos:"CB", fee:"Free/undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departs after two seasons and a promotion campaign; did not feature in preseason training while paperwork was finalised. Levante are said to be chasing Matturro's return as defensive cover."}
];

const INCOMING = [];

const OUTGOING = [];
const DEAD = [
  {name:"Arnau Tenas", sub:"24 · GK · Spain", club:"Paris Saint-Germain", pos:"GK", report:"17 Jul 2026", src:"FútbolFantasy", tier:3, fee:"TBD", truth:35, prob:15, light:"o", trend:"flat", note:"Levante credited with background interest alongside Elche and Mallorca; Mallorca appear the most advanced of the three suitors.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dead:true, deadReason:"Duplicate entry on page; no fresh snippet support", dir:"in", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Jeremy Toljan", sub:"RB, German, free agent", club:"Free agent", pos:"RB", report:"Levante explored signing free agent right-back Toljan as defensive cover but talks broke down without an agreement.", src:"Fichajes.com", tier:3, fee:"Free transfer (failed)", truth:55, prob:8, light:"r", trend:"flat", note:"Negotiations reported to have collapsed in early August, so a deal now looks unlikely.", lastSeen:"2026-08-04T19:10:50Z", baseProb:8, dead:true, deadReason:"No recent snippet evidence; entry incomplete", dir:"in", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Karl Etta Eyong", sub:"FW, six Europe's-elite suitors", club:"Barcelona", pos:"FW", report:"Barcelona are described as most keen, with Real Madrid, Man City, Man United, Arsenal and Chelsea all credited with interest in the young Cameroonian less than a year after he joined from Villarreal.", src:"Mundo Deportivo", tier:2, fee:"€30m (Spanish clubs) / €40m (foreign clubs) release clause", truth:55, prob:20, light:"o", trend:"flat", note:"Eyong reportedly hopes to push for a January move while staying on loan at Levante for now, since financial fair-play rules blocked a summer Barcelona deal.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No recent snippet evidence; outgoing claim unsupported", dir:"out", deadAt:"2026-08-06T14:21:38Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Dani Requena</b>: midfield reinforcement arrives on loan from Villarreal with an option to make it permanent."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Levante's clearest confirmed summer business is the Dani Requena loan from Villarreal; goalkeeper interest in Arnau Tenas remains background noise behind Mallorca's more advanced pursuit."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "futbolfantasy-villarreal": {l:"FútbolFantasy - Villarreal summer transfer tracker (Requena exit corroborated)", u:"https://www.futbolfantasy.com/laliga/equipos/villarreal/mercado-fichajes/verano-2026"},
  "futbolfantasy-elche": {l:"FútbolFantasy - Elche transfer tracker (Tenas three-way interest)", u:"https://www.futbolfantasy.com/laliga/equipos/elche/mercado-fichajes/verano-2026"},
  mundoDeportivoviaGoalcomKarlEttaEyong: {l:"Mundo Deportivo (via Goal.com)", u:"https://www.goal.com/en-us/lists/high-flying-striker-pushing-for-january-move-just-months-after-joining-la-liga-side-with-man-city-man-utd-cheslea-arsenal-and-barcelona-interest/blta6c5c5d6a2b896bd"},
  elDesmarqueAssaMandi: {l:"ElDesmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260716/aissa-mandi-vuelve-laliga-fichaje-oficial_18_019730258.html"},
  elGolDigitalYanisMusuayi: {l:"El Gol Digital", u:"https://www.elgoldigital.com/futbol/levante-ud/musuayi-delantero-brujas-fichaje"},
  defensaCentralCarlosEsp: {l:"Defensa Central", u:"https://defensacentral.com/actualidad/arancha-rodriguez-periodista-mourinho-es-ha-pedido-expresamente-fichaje-carlos-espi-madrid-no-va-activar-clausula-por-tema-iva-pero-levante-si-va-recibir-25-millones_341503_102.html"},
  fichajescomLevantehubJeremyToljan: {l:"Fichajes.com (Levante hub)", u:"https://www.fichajes.com/equipo/levante-ud/"},
  aSHugoSotelo: {l:"AS", u:"https://as.com/futbol/primera/oficial-hugo-sotelo-cuarto-fichaje-f202607-n/"},
  elGolDigitalYanisMusuayi1: {l:"El Gol Digital", u:"https://www.elgoldigital.com/futbol/levante-ud/musuayi-delantero-brujas-fichaje/"},
  marcaCarlosEspi: {l:"Marca", u:"https://www.marca.com/futbol/levante/2026/08/04/pablo-sanchez-sobre-espi-real-madrid-detras-junio.html"},
  superdeporteUnaiElgezabal: {l:"Superdeporte", u:"https://www.superdeporte.es/levante-ud/2026/08/04/unai-elgezabal-marcha-levante-ud-133095158.html"}};

const LINKMAP = {
  "Dani Requena": ["futbolfantasy-villarreal"],
  "Arnau Tenas": ["futbolfantasy-elche"],
  "Karl Etta Eyong": ["mundoDeportivoviaGoalcomKarlEttaEyong"],
  "Aïssa Mandi": ["elDesmarqueAssaMandi"],
  "Yanis Musuayi": ["elGolDigitalYanisMusuayi", "elGolDigitalYanisMusuayi1"],
  "Carlos Espí": ["defensaCentralCarlosEsp"],
  "Jeremy Toljan": ["fichajescomLevantehubJeremyToljan"],
  "Hugo Sotelo": ["aSHugoSotelo"],
  "Mathew Ryan": ["fichajescomLevantehubJeremyToljan"],
  "Carlos Espi": ["marcaCarlosEspi"],
  "Unai Elgezabal": ["superdeporteUnaiElgezabal"]};
const WL_LINKMAP = {
  "Arnau Tenas": ["futbolfantasy-elche"]
};

const PROSE = {
  heroH2: `A modest but real midfield reinforcement`,
  heroLede: `Under <b>Luís Castro</b>, Levante's confirmed summer business is a loan for <b>Dani Requena</b> from Villarreal, with a purchase option attached. Background interest in goalkeeper Arnau Tenas exists but Mallorca appear ahead in that particular race.`,
  metaRow: `<span>COACH: <b>Luís Castro</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Loan + ~€1m option`, x: `Dani Requena from Villarreal` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
