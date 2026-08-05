/* ============================================================
   MERCATO IQ · CLUB DATA · RACING SANTANDER · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Racing de Santander", mono: "RAC", slug: "racing-santander",
  primary: "#00843D", primaryBright: "#4DDB8C", primaryDeep: "#00461F",
  primaryRgb: "0,132,61",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "José Alberto López",
  dof: "Sebastián Ceria (majority shareholder, Grupo Orlegi)",
  europe: "None for 2026/27",
  finish: "Promoted from Segunda División 2025/26 (return after a 14-year absence from La Liga)",
  owner: "Grupo Orlegi (Sebastián Ceria, top shareholder)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.eldesmarque.com/futbol/liga-1a-division/", "https://www.fichajes.com/equipo/real-racing-club-de-santander/altas-bajas/"],
  queries: ["Racing Santander fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Racing Santander"
};

const CONFIRMED_IN = [
  {name:"Sergio Canales", sub:"MF · Spain", club:"CF Monterrey", pos:"MF", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Marquee free-agent return for Racing's La Liga comeback after 14 years, deal until 2027 plus option."},
  {name:"Facundo González", sub:"DF · Uruguay", club:"Juventus", pos:"DF", fee:"Promotion-triggered purchase clause", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official signing until 2029."},
  {name:"Asier Villalibre", sub:"FW · Spain", club:"Deportivo Alavés", pos:"FW", fee:"Promotion-triggered purchase clause", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official signing until 2029."}
];
const CONFIRMED_OUT = [
  {name:"Yeray Cabanzón", sub:"W · Spain", club:"Real Valladolid", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure, contract to 2029."},
  {name:"Javi Castro", sub:"DF · Spain", club:"Cádiz CF", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official three-year deal."},
  {name:"Mario García", sub:"LB · Spain", club:"Widzew Łódź", pos:"LB", fee:"~€500k plus sell-on", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure to Poland."}
];
const INCOMING = [
  {name:"Matteo Prati", sub:"22 · CM · Italy", club:"Cagliari (on loan at Torino)", pos:"CM", report:"13 Jul 2026", src:"Nicolò Schira (via Pablo Sánchez / El Desmarque)", tier:1, fee:"Undisclosed", truth:70, prob:35, light:"y", trend:"flat", note:"Schira reports Racing chasing the Italy U21 midfielder as Cagliari and Torino discuss his future.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Jofre Torrents", sub:"19 · LB · Spain", club:"Barcelona Atlètic", pos:"LB", report:"29 Jul 2026", src:"Juan Pérez / El Desmarque", tier:2, fee:"Loan (part of Salinas deal package)", truth:55, prob:40, light:"y", trend:"flat", note:"Requested by Racing as a loan makeweight/replacement inside the Jorge Salinas–Barcelona negotiation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];
const OUTGOING = [
  {name:"Jorge Salinas", sub:"19 · CB/LB · Spain", club:"Racing Santander", pos:"CB", report:"29 Jul 2026", src:"Juan Pérez / El Desmarque", tier:2, fee:"€8m bid vs €16m release clause", truth:75, prob:50, light:"y", trend:"flat", note:"Barcelona's €8m offer falls short of the clause (raised to €16m after promotion); Racing want Jofre Torrents, Xavi Espart or Héctor Fort on loan as part of any deal.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50},
  {name:"Gustavo Puerta", sub:"23 · CM · Colombia", club:"Racing Santander", pos:"CM", report:"16 Jul 2026", src:"Pablo Sánchez / El Desmarque", tier:2, fee:"€16m bid (Racing want more)", truth:70, prob:55, light:"g", trend:"flat", note:"Bologna are leading suitors for the Colombia international midfielder; Racing consider the €16m offer insufficient but a deal is reportedly close.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55}
];
const RISERS = [];
const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Racing return to La Liga after a 14-year absence with roughly €60m of budget flexibility, though top shareholder Sebastián Ceria has said sales will come before 'important signings' - meaning the club's business is still being shaped as of 3 August 2026, with no individual deals confirmed yet in verifiable reporting."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Squad-wide reinforcement for the top flight", w:45, x:"Club leadership has signalled a wait-and-see approach: player sales first, then reinvestment into 'important' signings."}
];

const WATCHLIST = [];

const HUB = {
  "eldesmarque-racing-budget": {l:"El Desmarque - Racing's budget and transfer plans for 2026/27", u:"https://www.eldesmarque.com/futbol/liga-1a-division/20260706/racing-santander-avisa-cartera-millonaria-fichajes-importantes-cambios-estadio_18_019637585.html"},
  elDesmarqueMatteoPrati: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260713/racing-santander-fichaje-serie-a-internacional-italia_18_019703648.html"},
  elDesmarqueJofreTorrents: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260729/barca-salinas-racing-cesiones_18_019837867.html"},
  elDesmarqueGustavoPuerta: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260716/racing-santander-millonada-fichaje-gustavo-puerta_18_019737461.html"},
  elDesmarqueSergioCanales: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260606/racing-santander-cuenta-fichajes-vuelta-sergio-canales_18_019373884.html"},
  ftbolFantasyFacundoGonzlez: {l:"FútbolFantasy", u:"https://www.futbolfantasy.com/laliga/equipos/racing/mercado-fichajes/verano-2026"}};

const LINKMAP = {
  "Matteo Prati": ["elDesmarqueMatteoPrati"],
  "Jofre Torrents": ["elDesmarqueJofreTorrents"],
  "Jorge Salinas": ["elDesmarqueGustavoPuerta"],
  "Gustavo Puerta": ["elDesmarqueGustavoPuerta"],
  "Sergio Canales": ["elDesmarqueSergioCanales"],
  "Facundo González": ["ftbolFantasyFacundoGonzlez"],
  "Asier Villalibre": ["ftbolFantasyFacundoGonzlez"],
  "Yeray Cabanzón": ["ftbolFantasyFacundoGonzlez"],
  "Javi Castro": ["ftbolFantasyFacundoGonzlez"],
  "Mario García": ["ftbolFantasyFacundoGonzlez"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Back after 14 years, waiting on sales before signings`,
  heroLede: `<b>Racing de Santander</b> return to La Liga for the first time in 14 years. Top shareholder <b>Sebastián Ceria</b> has been explicit that player sales will come first, with "important signings" to follow once the market situation is clearer - so, honestly, no individual transfer story had been verifiably confirmed as of 3 August 2026.`,
  metaRow: `<span>COACH: <b>José Alberto López</b></span> <span>STATUS: <b>Promoted 2026/27</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Budget Flexibility</div><div class="v">~€60m</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: `No individual signings were invented to fill this page - club leadership itself has said signings will follow sales, so this is reported as a genuinely quiet window so far.`,
  spendIn: { v: `€0 confirmed`, x: `~€60m of stated flexibility, contingent on sales` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
