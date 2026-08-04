/* ============================================================
   MERCATO IQ · CLUB DATA · REAL BETIS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Real Betis", mono: "RB", slug: "real-betis",
  primary: "#00954C", primaryBright: "#2ECC71", primaryDeep: "#005A2E",
  primaryRgb: "0,149,76",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Manuel Pellegrini",
  dof: "Ramón Alarcón (Sporting Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "5th La Liga (2025/26), 60pts",
  owner: "Angel Haro (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.managingmadrid.com/", "https://www.transfermarkt.us/real-betis-balompie/transfers/verein/150"],
  queries: ["Real Betis fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Real Betis"
};

const CONFIRMED_IN = [
  {name:"Fran García", sub:"26 · LB · Spain", to:"permanent from Real Madrid", fee:"~£3.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Made surplus at the Bernabéu by Marc Cucurella's arrival; Betis land a title-winning left-back to strengthen their Champions League squad."},
  {name:"Dani Ceballos", sub:"Midfielder, boyhood-club return", club:"Real Madrid", pos:"MF", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ceballos agreed to terminate the final year of his Real Madrid contract to return to Betis for free, accepting a significant pay cut for the homecoming."},
  {name:"Diego Conde", sub:"Goalkeeper, on loan", club:"Villarreal", pos:"GK", fee:"Loan with option to buy", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Conde arrives on a season-long loan with a purchase option as Pellegrini's plan to replace departing veteran Pau López."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Fábio Silva", sub:"Forward, exit push from Dortmund", club:"Borussia Dortmund", pos:"FW", report:"Betis named as one of five La Liga clubs (with Villarreal, Celta, Real Sociedad, Espanyol) monitoring Silva as he pushes to leave Dortmund and return to Spain.", src:"Fichajes.net (via Rudy Galletti)", tier:2, fee:"Undisclosed", truth:55, prob:25, light:"o", trend:"flat", note:"Silva is reportedly unsettled in Germany and keen on a return to Spanish football, with Betis just one of several suitors circling and nothing concrete advanced yet."},
  {name:"Franjo Ivanović", sub:"Croatia international · ST", club:"Benfica", pos:"ST", report:"Ivanović has reportedly rejected Hull City to prioritise Betis, with Pellegrini using Champions League football as a recruiting pitch, but Benfica insist on an outright sale rather than a loan.", src:"Estadio Deportivo / OneFootball", tier:2, fee:"Permanent deal demanded by Benfica; fee TBD", truth:58, prob:35, light:"y", trend:"flat", note:"Troy Parrott is a named alternative if the Ivanović deal structure can't be resolved."}
];

const OUTGOING = [
  {name:"Ez Abde", sub:"Winger wanted by Roma and Newcastle", club:"AS Roma", pos:"FW", report:"Roma have bid around €35m plus add-ons and Newcastle have also shown interest, but Betis are refusing to drop below Abde's €60m release clause.", src:"Fichajes.net", tier:2, fee:"€60m release clause (Betis will not negotiate below it)", truth:60, prob:20, light:"o", trend:"flat", note:"Betis sporting director Manu Fajardo is holding firm on the full release clause, and Newcastle's lack of Champions League football is also working against a deal, so a sale looks unlikely at current prices."},
  {name:"Rodrigo Marina", sub:"Striker", club:"US Avellino (Serie B, interest)", pos:"ST", report:"Betis are negotiating Marina's sale as part of a wider forward-line reshuffle alongside the Ivanović pursuit.", src:"Estadio Deportivo", tier:2, fee:"Undisclosed", truth:55, prob:38, light:"y", trend:"flat", note:"No agreement reached as of early Aug; part of Betis freeing squad space for a marquee forward arrival."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Fran García</b>: title-winning Real Madrid left-back arrives permanently, a coup for a first Champions League campaign in years."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Betis' clearest summer statement is landing Fran García from Real Madrid as they prepare for a Champions League return under Manuel Pellegrini."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Squad depth for European football", w:45, x:"Champions League qualification typically drives further squad-depth business late in the window; nothing further confirmed yet."}
];

const WATCHLIST = [];

const HUB = {
  "managingmadrid-frangarcia": {l:"Managing Madrid - Fran García/Betis fee agreement reporting", u:"https://www.managingmadrid.com/109880/betis-real-madrid-fran-garcia-2026-news"},
  "teamtalk-rmdone": {l:"TeamTalk - Real Madrid completed transfers summer 2026 (Fran García listed)", u:"https://www.teamtalk.com/news/every-completed-real-madrid-transfer-summer-2026-signings-sales-loans"},
  fichajesnetFbioSilva: {l:"Fichajes.net", u:"https://www.fichajes.net/noticias/batalla-3-bandas-espana-fabio-silva-20260803.html"},
  fichajesnetEzAbde: {l:"Fichajes.net", u:"https://www.fichajes.net/noticias/roma-no-llega-pide-betis-abde-20260729.html"},
  realMadridofficialFranGarca: {l:"Real Madrid (official)", u:"https://www.realmadrid.com/en-US/news/club/announcements/comunicado-oficial-fran-garcia-08-07-2026"},
  mundoBetisDaniCeballos: {l:"MundoBetis", u:"https://mundobetis.com/2026/06/26/oficial-dani-ceballos-deja-el-real-madrid-para-volver-al-real-betis/"},
  getSpanishFootballNewsDiegoConde: {l:"Get Spanish Football News", u:"https://getfootballnewsspain.com/official-real-betis-sign-villarreal-star/"},
  estadioDeportivoFranjoIvanovi: {l:"Estadio Deportivo", u:"https://www.estadiodeportivo.com/futbol/betis/posible-solucion-fichaje-ivanovic-baza-favor-del-betis-20260731-543477.html"},
  estadioDeportivoRodrigoMarina: {l:"Estadio Deportivo", u:"https://www.estadiodeportivo.com/futbol/betis/movimientos-del-betis-delantera-aparece-tapado-negocia-venta-rodrigo-marina-20260730-543371.html"},
  managingMadridFranGarca: {l:"Managing Madrid", u:"https://www.managingmadrid.com/109880/betis-real-madrid-fran-garcia-2026-news"}};

const LINKMAP = {
  "Fran García": ["managingmadrid-frangarcia", "teamtalk-rmdone", "realMadridofficialFranGarca", "managingMadridFranGarca"],
  "Fábio Silva": ["fichajesnetFbioSilva"],
  "Ez Abde": ["fichajesnetEzAbde"],
  "Dani Ceballos": ["mundoBetisDaniCeballos"],
  "Diego Conde": ["getSpanishFootballNewsDiegoConde"],
  "Franjo Ivanović": ["estadioDeportivoFranjoIvanovi"],
  "Rodrigo Marina": ["estadioDeportivoRodrigoMarina"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A Champions League summer starts with a Bernabéu import`,
  heroLede: `Real Betis return to the Champions League for 2026/27 under <b>Manuel Pellegrini</b>, and their first major move is landing <b>Fran García</b> permanently from Real Madrid - a title-winning left-back made available by Marc Cucurella's arrival at the Bernabéu.`,
  metaRow: `<span>COACH: <b>Manuel Pellegrini</b></span> <span>EUROPE: <b>Champions League</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~£3.4m`, x: `Fran García fee` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
