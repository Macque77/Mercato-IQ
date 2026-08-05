/* ============================================================
   MERCATO IQ · CLUB DATA · GETAFE CF · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Getafe CF", mono: "GET", slug: "getafe",
  primary: "#1B3F8B", primaryBright: "#5C93FF", primaryDeep: "#0D1F45",
  primaryRgb: "27,63,139",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "José Bordalás",
  dof: "Ramón Martínez (Sporting Director)",
  europe: "UEFA Conference League (2026/27)",
  finish: "7th La Liga (2025/26), 51pts",
  owner: "Angel Torres (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.fichajes.com/equipo/getafe-cf/altas-bajas/", "https://noticiasgetafecf.es/"],
  queries: ["Getafe CF fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Getafe CF"
};

const CONFIRMED_IN = [
  {name:"Ramón Terrats", sub:"25 · CM · Spain", to:"permanent from Villarreal", fee:"~€2.5-3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent arrival, cross-verified against Villarreal's own summer transfer record."},
  {name:"Jean Ives Valou", sub:"20 · CB · France", to:"loan from Villarreal", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan for the young centre-back, adding defensive depth for Bordalás ahead of Conference League football."},
  {name:"Martín Satriano", sub:"Permanent striker signing", club:"Olympique Lyonnais", pos:"FW", fee:"Permanent deal completed after loan spell", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Uruguayan forward's loan was converted into a permanent transfer, signing through 2030."},
  {name:"Zaid Romero", sub:"Defensive reinforcement", club:"Club Brugge", pos:"DF", fee:"€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Argentine centre-back joins on a deal through June 2029 to bolster Bordalás's back line."},
  {name:"Mario Martín", sub:"Buy-option exercised", club:"Real Madrid", pos:"DF", fee:"€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Getafe triggered their purchase option on the Real Madrid loanee, tying him down through 2030."},
  {name:"Sebastián Boselli", sub:"Uruguayan centre-back", club:"River Plate", pos:"DF", fee:"Signed from River Plate (initial loan made permanent)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Uruguayan international defender arrived from River Plate to add depth and physicality centrally."},
  {name:"Saba Sazonov", sub:"CB, Georgian international, 24", club:"Torino", pos:"CB", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed until June 2027 with a one-year extension option; Bordalas' fifth summer signing as Getafe prepare for Conference League football."},
  {name:"Andres Garcia", sub:"RB, Spanish", club:"Unattached (returning from Greece)", pos:"RB", fee:"n/a", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported to have completed his return to Spanish football with Getafe; limited independent corroboration found beyond initial report."}
];

const CONFIRMED_OUT = [
  {name:"Domingos Duarte", sub:"31 · CB · Portugal", club:"RC Deportivo (advanced talks)", pos:"CB", fee:"Free (contract expired)", free:true, status:"done", statusTxt:"DONE, CONTRACT EXPIRED", note:"Left Getafe as a free agent; in advanced talks to rejoin Deportivo La Coruña, where he spent a loan spell in 2018/19."},
  {name:"Mauro Arambarri", sub:"Long-serving captain sold", club:"River Plate", pos:"MF", fee:"€3m (for 50% of rights)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"After eight seasons and 267 appearances, Arambarri was sold to River Plate at the request of manager Eduardo Coudet."},
  {name:"Luis Milla", sub:"Midfield sale", club:"Como", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Midfielder departs for Serie A side Como after his spell at the Coliseum."},
  {name:"Coba Gomes", sub:"Move to Saudi Arabia", club:"Al Kholood", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Defender leaves the club for Saudi side Al Kholood."},
  {name:"Juan Iglesias", sub:"Free transfer", club:"Sevilla", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Right-back leaves on a free to sign a four-year deal at Sevilla after standing out defensively for Getafe."},
  {name:"Peter Federico", sub:"Move to Poland", club:"Górnik Zabrze", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Real Madrid academy product moves on permanently to Ekstraklasa side Górnik Zabrze on a three-year deal."}
];

const INCOMING = [
  {name:"Matías Galarza", sub:"Paraguayan midfield target", club:"River Plate", pos:"MF", report:"Getafe made an early move and formal bid (reported around €4m) for Galarza, with coach José Bordalás keen, but Racing Strasbourg are said to hold the advantage.", src:"Tuttomercato / El Intransigente", tier:3, fee:"Approx €4m offered", truth:60, prob:30, light:"y", trend:"flat", note:"Seen as Getafe's answer to Arambarri's departure, but French competition means the move is far from secured.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Mounsef Bakrar", sub:"Forward reinforcement", club:"Dinamo Zagreb", pos:"FW", report:"Getafe have tabled an offer of around €3.5m for Algerian forward Bakrar, but he reportedly prefers a move to Egyptian giants Al Ahly.", src:"Africafoot (via FutbolFantasy)", tier:3, fee:"€3.5m offered", truth:55, prob:20, light:"o", trend:"flat", note:"Even with a concrete bid on the table, the player's stated preference for Al Ahly makes this a tough sell for Getafe.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Giorgi Kochorashvili", sub:"Midfield depth option", club:"Sporting CP", pos:"MF", report:"Getafe are named among several clubs (with Sevilla, Levante and Deportivo) tracking Kochorashvili's potential exit from Sporting.", src:"El Desmarque / Galicia Press", tier:3, fee:"Undisclosed", truth:50, prob:12, light:"r", trend:"flat", note:"Reports suggest Deportivo currently lead the race, leaving Getafe as one of several distant suitors rather than favourites.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12},
  {name:"Luis Vazquez", sub:"ST, Argentine, 25", club:"Anderlecht", pos:"ST", report:"Getafe want to re-sign the loan striker who impressed in the second half of last season, but Birmingham City have entered the race with a higher wage offer.", src:"AS", tier:2, fee:"~€2m", truth:65, prob:35, light:"y", trend:"flat", note:"Vazquez scored 3 goals and added 1 assist in 17 games on loan at Getafe previously; Bordalas wants him back but faces Championship competition.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Enes Unal", sub:"ST, Turkish international, 28", club:"Bournemouth", pos:"ST", report:"Getafe are one of three La Liga clubs (with Sevilla and Alaves) asking Bournemouth about a loan for Unal, who wants regular minutes after a quiet season on the south coast.", src:"FutbolFantasy / Marca", tier:2, fee:"Loan", truth:60, prob:30, light:"y", trend:"flat", note:"Three-way competition for the same loan makes any single move less likely.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Ramón Terrats and Jean Ives Valou</b>: both arrive from Villarreal to strengthen Bordalás's midfield and defence for a Conference League campaign."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Getafe qualified for the Conference League via their 2025/26 league finish and have used Villarreal's rebuild to bring in two squad reinforcements (Terrats, Valou) while Domingos Duarte left as a free agent."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "futbolfantasy-villarreal": {l:"FútbolFantasy - Villarreal summer transfer tracker (Terrats/Valou departures corroborated)", u:"https://www.futbolfantasy.com/laliga/equipos/villarreal/mercado-fichajes/verano-2026"},
  "fichajesnet-duarte": {l:"Fichajes.net - Domingos Duarte talks with Deportivo La Coruña", u:"https://www.fichajes.net/noticias/nuevo-fichaje-nuevo-super-depor-camino-20260705.html"},
  todoMercadoWebMatasGalarza: {l:"TodoMercadoWeb", u:"https://www.todomercadoweb.es/laliga/getafe-cf-acelera-operaciones-matias-galarza-549216"},
  futbolFantasyAfricafootMounsefBakrar: {l:"FutbolFantasy (Africafoot)", u:"https://www.futbolfantasy.com/laliga/noticias/147558-el-getafe-irrumpe-con-una-oferta-por-mounsef-bakrar"},
  elDesmarqueGiorgiKochorashvili: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260713/opcion-giorgi-kochorashvili-salida-sporting-portugal_18_019695802.html"},
  infobaeMartnSatriano: {l:"Infobae", u:"https://www.infobae.com/america/agencias/2026/03/30/el-getafe-consigue-el-traspaso-de-martin-satriano/"},
  getafeNewsZaidRomero: {l:"GetafeNews", u:"https://getafenews.com/news/getafe-refuerza-su-defensa-0dcd"},
  infobaeMarioMartn: {l:"Infobae", u:"https://www.infobae.com/espana/agencias/2026/05/28/el-getafe-cf-ejecuta-la-opcion-de-compra-ante-el-real-madrid-por-mario-martin/"},
  infobaeRamnTerrats: {l:"Infobae", u:"https://www.infobae.com/espana/agencias/2026/07/08/el-getafe-confirma-el-fichaje-de-ramon-terrats/"},
  infobaeSebastinBoselli: {l:"Infobae", u:"https://www.infobae.com/america/agencias/2026/01/16/el-central-uruguayo-de-river-plate-sebastian-boselli-cedido-al-getafe/"},
  elDesmarqueMauroArambarri: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260617/getafe-traspasa-arambarri-river-contrato-cantidad_18_019478212.html"},
  flashscoreLuisMilla: {l:"Flashscore", u:"https://www.flashscore.es/noticias/futbol-fichajes-luis-milla-traspasado-por-el-getafe-al-como/MBCIEeOO/"},
  futbolFantasyCobaGomes: {l:"FutbolFantasy", u:"https://www.futbolfantasy.com/mercado-de-fichajes-del-getafe-altas-bajas/verano-2026"},
  elDesmarqueJuanIglesias: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260611/sevilla-fc-oficial-llegada-juan-iglesias_18_019418467.html"},
  getafeCFofficialPeterFederico: {l:"Getafe CF (official)", u:"https://www.getafecf.com/noticias/peter-federico-se-marcha-traspasado-al-gornik-zabrze"},
  yahooDeportesviaASLuisVazquez: {l:"Yahoo Deportes (via AS)", u:"https://es-us.noticias.yahoo.com/deportes/getafe-volver-apostar-argentino-luis-152000646.html"},
  fichajescomGetafehubGiorgiKochorashvili: {l:"Fichajes.com (Getafe hub)", u:"https://www.fichajes.com/equipo/getafe-cf/"},
  futbolFantasyEnesUnal: {l:"FutbolFantasy", u:"https://www.futbolfantasy.com/laliga/noticias/148192-sevilla-getafe-y-alaves-piden-la-cesion-de-enes-unal"},
  marcaSabaSazonov: {l:"Marca", u:"https://www.marca.com/futbol/getafe.html"}};

const LINKMAP = {
  "Ramón Terrats": ["futbolfantasy-villarreal", "infobaeRamnTerrats"],
  "Jean Ives Valou": ["futbolfantasy-villarreal"],
  "Domingos Duarte": ["fichajesnet-duarte"],
  "Matías Galarza": ["todoMercadoWebMatasGalarza"],
  "Mounsef Bakrar": ["futbolFantasyAfricafootMounsefBakrar"],
  "Giorgi Kochorashvili": ["elDesmarqueGiorgiKochorashvili", "fichajescomGetafehubGiorgiKochorashvili"],
  "Martín Satriano": ["infobaeMartnSatriano"],
  "Zaid Romero": ["getafeNewsZaidRomero"],
  "Mario Martín": ["infobaeMarioMartn"],
  "Sebastián Boselli": ["infobaeSebastinBoselli"],
  "Mauro Arambarri": ["elDesmarqueMauroArambarri"],
  "Luis Milla": ["flashscoreLuisMilla"],
  "Coba Gomes": ["futbolFantasyCobaGomes"],
  "Juan Iglesias": ["elDesmarqueJuanIglesias"],
  "Peter Federico": ["getafeCFofficialPeterFederico"],
  "Luis Vazquez": ["yahooDeportesviaASLuisVazquez"],
  "Enes Unal": ["futbolFantasyEnesUnal"],
  "Saba Sazonov": ["marcaSabaSazonov"],
  "Andres Garcia": ["fichajescomGetafehubGiorgiKochorashvili"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Villarreal's rebuild funds Getafe's Conference League prep`,
  heroLede: `Qualified for the <b>Conference League</b> under <b>José Bordalás</b>, Getafe have added two pieces from Villarreal's squad reshuffle - <b>Ramón Terrats</b> permanently and <b>Jean Ives Valou</b> on loan - while veteran centre-back <b>Domingos Duarte</b> has departed as a free agent, closing in on a reunion with Deportivo La Coruña.`,
  metaRow: `<span>COACH: <b>José Bordalás</b></span> <span>EUROPE: <b>Conference League</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">2</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€2.5-3m + loan`, x: `Terrats fee; Valou on loan` },
  spendOut: { v: `€0 fee`, x: `Duarte left as free agent` },
  methodLegend: ``
};
