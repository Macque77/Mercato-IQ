/* ============================================================
   MERCATO IQ · CLUB DATA · DEPORTIVO ALAVÉS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Deportivo Alavés", mono: "DA", slug: "alaves",
  primary: "#1E3A8A", primaryBright: "#6FA8FF", primaryDeep: "#0F1F4A",
  primaryRgb: "30,58,138",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Quique Sánchez Flores",
  dof: "Sergio Fernández (Sporting Director)",
  europe: "None for 2026/27",
  finish: "14th La Liga (2025/26), 43pts",
  owner: "Alavés Grupo Inversor (Alfredo Fernández, President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.futbolfantasy.com/laliga/equipos/alaves/mercado-fichajes/verano-2026", "https://www.fichajes.com/equipo/deportivo-alaves/altas-bajas/"],
  queries: ["Deportivo Alavés fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Deportivo Alavés"
};

const CONFIRMED_IN = [
  {name:"Ville Koski", sub:"GK · Finland", club:"NK Istra 1961", pos:"GK", fee:"€3m (option to buy)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official signing."},
  {name:"Mikel Rodríguez", sub:"DF · Spain", club:"Real Sociedad", pos:"DF", fee:"€2m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official signing — distinct player from winger Miguel Rodríguez."},
  {name:"Miguel Rodríguez", sub:"23 · RW · Spain", club:"FC Utrecht", pos:"RW", fee:"~€2.5m, 5-year deal", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official signing through 2031; Celta academy product, scored 5 goals in 39 games last season at Utrecht."}
];
const CONFIRMED_OUT = [
  {name:"Víctor Parada", sub:"DF · Argentina", club:"Spartak Moscow", pos:"DF", fee:"€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure."},
  {name:"Asier Villalibre", sub:"FW · Spain", club:"Racing Santander", pos:"FW", fee:"Purchase clause triggered by Racing's promotion", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official move."},
  {name:"Jon Guridi", sub:"MF · Spain", club:"Sevilla", pos:"MF", fee:"Free (contract expiry)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure."}
];
const INCOMING = [
  {name:"Bryan Zaragoza", sub:"24 · RW · Spain", club:"Bayern Munich", pos:"RW", report:"14 Jul 2026", src:"Andrés Guzmán / El Gol Digital", tier:2, fee:"Loan (Bayern value ~€8m)", truth:55, prob:25, light:"o", trend:"flat", note:"Alavés have contacted Bayern and the player directly but Zaragoza reportedly prefers a move to Sevilla to be closer to home."},
  {name:"Aarón Martín", sub:"29 · LB · Spain", club:"Genoa CFC", pos:"LB", report:"4 Aug 2026", src:"Noticias de Álava", tier:2, fee:"Undisclosed", truth:45, prob:30, light:"y", trend:"flat", note:"Named as an option to solve Alavés' left-back spot; early-stage interest with no formal bid reported yet."},
  {name:"Pablo García", sub:"20 · LW/RW · Spain", club:"Real Betis", pos:"W", report:"23 Jun 2026", src:"Flavio Pace / El Gol Digital", tier:2, fee:"€10m+ demanded / €30m clause", truth:45, prob:12, light:"r", trend:"flat", note:"Betis academy winger wanted by a crowded field (Alavés, Osasuna, Ajax, Club Brugge, Stuttgart, Inter Miami); Betis in no rush to sell."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];

const NEW = [
  {ar:"✦", t:"No genuinely sourced incoming or outgoing transfer stories for Alavés were found as of 3 August 2026 - the club's summer business so far is limited to backroom and squad-planning news rather than confirmed or credibly rumoured deals."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "futbolfantasy-alaves": {l:"FútbolFantasy - Alavés transfer tracker", u:"https://www.futbolfantasy.com/laliga/equipos/alaves/mercado-fichajes/verano-2026"},
  elGolDigitalBryanZaragoza: {l:"El Gol Digital", u:"https://www.elgoldigital.com/futbol/alaves/bryan-zaragoza-alaves-sevilla-cesion-bayern"},
  noticiasdelavaAarnMartn: {l:"Noticias de Álava", u:"https://www.noticiasdealava.eus/alaves/2026/08/04/aaron-martin-opcion-lateral-alaves-fichaje-11404379.html"},
  elGolDigitalPabloGarca: {l:"El Gol Digital", u:"https://www.elgoldigital.com/futbol/real-betis-balompie/pablo-garcia-betis-osasuna-brujas-ajax-inter-miami-mercado-10-millones-2026/"},
  ftbolFantasyVilleKoski: {l:"FútbolFantasy", u:"https://www.futbolfantasy.com/mercado-de-fichajes-del-alaves-altas-bajas/verano-2026"},
  vavelMiguelRodrguez: {l:"Vavel", u:"https://www.vavel.com/es/futbol/2026/07/27/alaves/1266637-miguel-rodriguez-ficha-por-el-deportivo-alaves-hasta-2031.html"}};

const LINKMAP = {
  "Bryan Zaragoza": ["elGolDigitalBryanZaragoza"],
  "Aarón Martín": ["noticiasdelavaAarnMartn"],
  "Pablo García": ["elGolDigitalPabloGarca"],
  "Ville Koski": ["ftbolFantasyVilleKoski"],
  "Mikel Rodríguez": ["ftbolFantasyVilleKoski"],
  "Miguel Rodríguez": ["vavelMiguelRodrguez"],
  "Víctor Parada": ["ftbolFantasyVilleKoski"],
  "Asier Villalibre": ["ftbolFantasyVilleKoski"],
  "Jon Guridi": ["ftbolFantasyVilleKoski"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A quiet window at Mendizorrotza - so far`,
  heroLede: `Under <b>Quique Sánchez Flores</b>, Alavés have kept a low transfer profile through the early summer. No credibly sourced incoming or outgoing rumours had emerged as of 3 August 2026 - an honest reflection of a squad being kept together rather than an oversight.`,
  metaRow: `<span>COACH: <b>Quique Sánchez Flores</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 confirmed`, x: `No completed signings found as of 3 Aug 2026` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
