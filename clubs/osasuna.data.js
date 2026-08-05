/* ============================================================
   MERCATO IQ · CLUB DATA · CA OSASUNA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "CA Osasuna", mono: "CO", slug: "osasuna",
  primary: "#D2001C", primaryBright: "#FF6259", primaryDeep: "#7A0011",
  primaryRgb: "210,0,28",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luis Miguel Ramis (appointed 2026, replacing Jagoba Arrasate)",
  dof: "Braulio Vázquez (Sporting Director)",
  europe: "None for 2026/27",
  finish: "17th La Liga (2025/26), 42pts",
  owner: "Member-owned (Peña Athletic Osasuna), Luis Sabalza President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://elsadar.com/category/actualidad/fichajes-actualidad/", "https://www.fichajes.com/equipo/ca-osasuna/altas-bajas/"],
  queries: ["Osasuna fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · CA Osasuna"
};

const CONFIRMED_IN = [
  {name:"Jonathan Dubasin", sub:"RW, Spanish, from Sporting Gijon", club:"Sporting Gijon", pos:"RW", fee:"€4m (+€1m variables)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a four-year deal through June 2030 with a €40m release clause after scoring 16 goals last season; one of Osasuna's key attacking additions."}
];
const CONFIRMED_OUT = [
  {name:"Víctor Muñoz", sub:"W · Spain", club:"Liverpool", pos:"W", fee:"€40m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official, club-record outgoing sale to Liverpool."},
  {name:"Sheraldo Becker", sub:"W · Netherlands", club:"Mainz 05", pos:"W", fee:"Loan-to-permanent clause activated", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official permanent move."},
  {name:"Javi Galán", sub:"LB · Spain", club:"Celta Vigo", pos:"LB", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official free departure."}
];
const INCOMING = [
  {name:"Pablo García", sub:"20 · LW/RW · Spain", club:"Real Betis", pos:"W", report:"23 Jun 2026", src:"Flavio Pace / El Gol Digital", tier:2, fee:"€10m+ demanded / €30m clause", truth:45, prob:12, light:"r", trend:"flat", note:"Osasuna are one of several suitors (with Alavés, Ajax, Club Brugge, Stuttgart, Inter Miami) for this Betis academy winger.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12},
  {name:"Abel Ruiz", sub:"26 · ST · Spain", club:"Girona FC", pos:"ST", report:"24 Apr 2026", src:"Miguel Rubio / TodoMercadoWeb", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Named on Osasuna's leaked striker wishlist as the 'differentiating' but expensive attacking option.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"César Tárrega", sub:"24 · CB · Spain", club:"Valencia CF", pos:"CB", report:"24 Apr 2026", src:"Miguel Rubio / TodoMercadoWeb", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Listed among Osasuna's centre-back targets for defensive rejuvenation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Kieran Tierney", sub:"LB, Scottish international, 29", club:"Celtic", pos:"LB", report:"Osasuna are making enquiries about a deal for Celtic left-back Tierney after missing out on their first-choice target at the position.", src:"67 Hail Hail / Inside Futbol", tier:2, fee:"", truth:60, prob:30, light:"y", trend:"flat", note:"Described as an enquiry stage rather than an advanced negotiation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Lizancos", sub:"RB, Spanish, 22", club:"Burgos CF", pos:"RB", report:"Osasuna raised their offer for Burgos right-back Lizancos to roughly €2-2.5m, potentially including winger Arguibide going the other way on loan, but Burgos are holding firm and refusing to sell cheaply.", src:"Diario de Navarra", tier:2, fee:"~€2-2.5m", truth:75, prob:50, light:"y", trend:"flat", note:"Burgos publicly stated 'no vamos a malvender' (we won't sell cheap), indicating a prolonged negotiation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50},
  {name:"Alex Moreno", sub:"LB, Spanish", club:"Multiple suitors", pos:"LB", report:"Osasuna are among several La Liga clubs showing interest in full-back Alex Moreno as squad depth options are assessed.", src:"Fichajes.com", tier:3, fee:"", truth:45, prob:20, light:"o", trend:"flat", note:"Reported as one of several interested parties rather than a leading suitor.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];
const OUTGOING = [
  {name:"Ante Budimir", sub:"ST, Croatian international, 35", club:"Unspecified (market interest)", pos:"ST", report:"Budimir's release clause reportedly reset to €20m after a lower €8m window expired on 1 August without being triggered, keeping the door open for suitors this month.", src:"Noticias de Navarra", tier:2, fee:"€20m release clause", truth:70, prob:20, light:"o", trend:"flat", note:"No specific buying club named yet; treat as a clause/valuation story rather than an active negotiation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];
const RISERS = [];
const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Osasuna go into 2026/27 under new coach Luis Miguel Ramis, who replaces long-serving Jagoba Arrasate. No genuinely sourced summer 2026 transfer stories (in or out) had emerged as of 3 August 2026 - the honest position is a squad still being assessed under the new coaching staff."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "elsadar-fichajes": {l:"El Sadar - Osasuna transfer news", u:"https://elsadar.com/category/actualidad/fichajes-actualidad/"},
  ftbolFantasyJonathanDubasin: {l:"FútbolFantasy", u:"https://www.futbolfantasy.com/laliga/noticias/147494-osasuna-prepara-una-nueva-ofensiva-por-jonathan-dubasin"},
  elGolDigitalPabloGarca: {l:"El Gol Digital", u:"https://www.elgoldigital.com/futbol/real-betis-balompie/pablo-garcia-betis-osasuna-brujas-ajax-inter-miami-mercado-10-millones-2026/"},
  todoMercadoWebAbelRuiz: {l:"TodoMercadoWeb", u:"https://www.todomercadoweb.es/laliga/filtran-la-lista-de-la-compra-del-ca-osasuna-para-el-mercado-de-fichajes-547876"},
  ftbolFantasyVctorMuoz: {l:"FútbolFantasy", u:"https://www.futbolfantasy.com/laliga/equipos/osasuna/mercado-fichajes/verano-2026"},
  s67HailHailKieranTierney: {l:"67 Hail Hail", u:"https://www.67hailhail.com/transfers/osasuna-turn-to-celtic-star-kieran-tierney-after-transfer-blow/"},
  diariodeNavarraLizancos: {l:"Diario de Navarra", u:"https://www.diariodenavarra.es/noticias/deportes/futbol/osasuna/2026/07/31/ofensiva-osasuna-lizancos-burgos-firme-no-malvender-830264-32.html"},
  fichajescomOsasunahubAlexMoreno: {l:"Fichajes.com (Osasuna hub)", u:"https://www.fichajes.com/equipo/ca-osasuna/"},
  noticiasdeNavarraAnteBudimir: {l:"Noticias de Navarra", u:"https://www.noticiasdenavarra.com/osasuna/2026/08/01/budimir-vuelve-costar-20-millones-11394205.html"},
  sportJonathanDubasin: {l:"Sport", u:"https://www.sport.es/es/noticias/futbol/osasuna-ata-dubasin-2030-cuatro-132846227"}};

const LINKMAP = {
  "Jonathan Dubasin": ["ftbolFantasyJonathanDubasin", "sportJonathanDubasin"],
  "Pablo García": ["elGolDigitalPabloGarca"],
  "Abel Ruiz": ["todoMercadoWebAbelRuiz"],
  "César Tárrega": ["todoMercadoWebAbelRuiz"],
  "Víctor Muñoz": ["ftbolFantasyVctorMuoz"],
  "Sheraldo Becker": ["ftbolFantasyJonathanDubasin"],
  "Javi Galán": ["ftbolFantasyJonathanDubasin"],
  "Kieran Tierney": ["s67HailHailKieranTierney"],
  "Lizancos": ["diariodeNavarraLizancos"],
  "Alex Moreno": ["fichajescomOsasunahubAlexMoreno"],
  "Ante Budimir": ["noticiasdeNavarraAnteBudimir"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A new coach, and a window still taking shape`,
  heroLede: `<b>Luis Miguel Ramis</b> takes charge of Osasuna for 2026/27, succeeding <b>Jagoba Arrasate</b>. As of 3 August 2026 no credibly sourced incoming or outgoing transfer stories for this specific summer window had been found - reported honestly here rather than padded out.`,
  metaRow: `<span>COACH: <b>Luis Miguel Ramis</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
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
