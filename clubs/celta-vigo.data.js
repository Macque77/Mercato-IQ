/* ============================================================
   MERCATO IQ · CLUB DATA · RC CELTA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RC Celta", mono: "RC", slug: "celta-vigo",
  primary: "#8AC3EE", primaryBright: "#C9E6FF", primaryDeep: "#3E7EA8",
  primaryRgb: "138,195,238",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Claudio Giráldez",
  dof: "Marián Mouriño (President) · Ángel Falcón (Sporting Director)",
  europe: "UEFA Europa League (2026/27)",
  finish: "6th La Liga (2025/26), 54pts",
  owner: "Celta de Vigo SAD, Marián Mouriño President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://thehardtackle.com/", "https://www.fichajes.com/equipo/real-club-celta-de-vigo/altas-bajas/"],
  queries: ["Celta Vigo fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · RC Celta"
};

const CONFIRMED_IN = [
  {name:"Abdoulaye Faye", sub:"Senegalese left-back, 21", club:"Bayer Leverkusen", pos:"LB", fee:"Loan, €300,000 loan fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Second consecutive season out on loan after a spell at Lorient; Leverkusen extended his contract before sending him to Vigo."}
];
const CONFIRMED_OUT = [
  {name:"Miguel Rodríguez", sub:"Academy winger sold", club:"Deportivo Alavés", pos:"FW", fee:"€2.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Former Celta academy prospect who spent two seasons at Utrecht (15 goals in 50+ games) moves to Alavés under Quique Sánchez Flores, in a deal frustrating some Celta fans given his development elsewhere."}
];

const INCOMING = [
  {name:"Altay Bayindir", sub:"28 · GK · Turkey", club:"Manchester United", pos:"GK", report:"03 Aug 2026", src:"Faro de Vigo / Sport Witness", tier:2, fee:"Season-long loan, no fee", truth:75, prob:65, light:"g", trend:"up", note:"Bayindir was set to undergo his medical 'within hours' of this report, with completion expected by Monday at the latest. Coach Claudio Giráldez wants an experienced back-up goalkeeper after Ionut Radu's injury concerns; Bayindir lost his United starting spot to Senne Lammens after a poor run of six Premier League games without a clean sheet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:65},
  {name:"Fer López", sub:"Target to bring back from Wolves", club:"Wolverhampton Wanderers", pos:"MF", report:"Celta want to re-sign their former academy playmaker, sold to Wolves for over €20m last summer and loaned back in the second half of 2025/26, but talks are reportedly frozen.", src:"El Desmarque / Galicia Press", tier:2, fee:"Loan sought (permanent deal unaffordable for Celta)", truth:78, prob:40, light:"y", trend:"flat", note:"Coach Claudio Giráldez views Fer López as his top midfield priority, but Wolves want a big fee and negotiations have stalled amid Celta's tight budget.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Hugo Bueno", sub:"Vigo-born left-back target", club:"Wolverhampton Wanderers", pos:"DF", report:"Celta are also exploring a move for Wolves left-back Hugo Bueno, a Vigo native who left the club's academy as a teenager and had a loan spell at Feyenoord.", src:"Mundo Celeste (via Galicia Press)", tier:3, fee:"Undisclosed (valued around €12m)", truth:55, prob:25, light:"o", trend:"flat", note:"Wolves' relegation to the Championship could make this move easier, but nothing concrete has progressed beyond initial interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Denis Suárez", sub:"Homecoming midfielder", club:"Deportivo Alavés", pos:"MF", report:"Sporting director Marco Garcés and coach Giráldez both want Denis Suárez back at Balaídos, with the player himself said to be willing.", src:"El Desmarque", tier:2, fee:"Undisclosed", truth:75, prob:45, light:"y", trend:"flat", note:"The move reportedly hinges on Celta first completing up to seven separate departures to free up squad space and budget.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Giorgi Kochorashvili", sub:"Fallback midfield option", club:"Sporting CP", pos:"MF", report:"The Georgian is on Celta's radar as an alternative to Fer López, though he's not a top priority and rivals Deportivo appear to be leading the race.", src:"Galicia Press", tier:3, fee:"Undisclosed", truth:50, prob:15, light:"o", trend:"flat", note:"Reports suggest Celta would only pursue this seriously if their other midfield targets fall through, with Sevilla, Levante and Getafe also credited with interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];

const OUTGOING = [
  {name:"Ilaix Moriba", sub:"Sale needed for FFP", club:"Aston Villa", pos:"MF", report:"Aston Villa (Unai Emery) and Brighton are both credited with interest in Moriba, who Celta view as their most sellable asset this summer.", src:"El Desmarque", tier:2, fee:"Villa reportedly around €20m, Brighton around €25m", truth:70, prob:40, light:"y", trend:"flat", note:"Celta reportedly need roughly €18m in sales to balance the books, making a Moriba exit financially attractive despite his form.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Williot Swedberg", sub:"Prized winger attracting suitors", club:"Atalanta", pos:"FW", report:"Atalanta have been credited with interest in Swedberg, Celta's most valuable asset, as a possible squad sale this summer.", src:"El Desmarque", tier:2, fee:"Undisclosed", truth:65, prob:30, light:"y", trend:"flat", note:"Swedberg recently signed a new deal to 2029, which suggests Celta would only sell for a significant fee rather than being desperate to offload him.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Borja Iglesias", sub:"Big-money Liga MX offer", club:"Club América", pos:"FW", report:"Club América are reported to have set Borja Iglesias's exit price at around $10m (approx €9m) and want to meet him during Spain's World Cup stay in the US.", src:"AS (via Fichajes.net)", tier:2, fee:"Approx €9m / $10m", truth:68, prob:25, light:"o", trend:"flat", note:"Iglesias only returned to Celta from Betis relatively recently and is a fan favourite, so a swift exit to Mexico this summer looks far from certain.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Unai Núñez", sub:"Spanish centre-back, 27", club:"Unattached / TBD", pos:"CB", report:"Celta had hoped to sell Núñez this summer but received no offers with a transfer fee attached; club is resigning itself to keeping him unless a club agrees to cover 60-70% of his wages.", src:"ElDesmarque", tier:2, fee:"", truth:65, prob:20, light:"o", trend:"flat", note:"No suitor has emerged willing to meet wage conditions; departure now considered unlikely before deadline day.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];

const RISERS = [
  {ar:"⬆", t:"<b>Altay Bayindir loan</b>: medical being lined up, with completion expected imminently."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Celta's one live incoming story is a season-long loan for Manchester United goalkeeper Altay Bayindir, addressing a goalkeeping injury concern behind Ionut Radu."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Goalkeeper depth", w:55, x:"Radu's injury concerns are driving the Bayindir loan pursuit as senior cover."}
];

const WATCHLIST = [
  {name:"Altay Bayindir", club:"Manchester United", pos:"GK", dir:"in", age:"~0 days", tier:2, note:"Medical being arranged; loan expected to be completed imminently per Faro de Vigo."}
];

const HUB = {
  "hardtackle-bayindir1": {l:"The Hard Tackle - Celta eyeing loan for Bayindir", u:"https://thehardtackle.com/transfer-news/2026/08/02/celta-vigo-eyeing-loan-move-for-altay-bayindir/"},
  "hardtackle-bayindir2": {l:"The Hard Tackle - Bayindir closing in, medical lined up", u:"https://thehardtackle.com/transfer-news/2026/08/03/altay-bayindir-closing-in-on-joining-celta-vigo-medical-lined-up/"},
  elDesmarqueFerLpez: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260724/celta-vigo-interes-fichaje-wolverhampton-fer-lopez_18_019799379.html"},
  galiciaPressHugoBueno: {l:"Galicia Press", u:"https://www.galiciapress.es/articulo/deportes/2026-07-24/5964835-celta-pretende-fichar-futbolista-escapo-radar-hace-anos-reforzar-retaguardia"},
  elDesmarqueDenisSurez: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260704/denis-suarez-vuelta-celta-claudio-giraldez-retirada-iago-aspas_18_019628723.html"},
  galiciaPressGiorgiKochorashvili: {l:"Galicia Press", u:"https://www.galiciapress.es/articulo/deportes/2026-07-31/5971936-celta-depor-comparten-objetivo-portugal-pero-riazor-toman-ventaja-fichaje-muy-disputado"},
  elDesmarqueIlaixMoriba: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/liga-1a-division/20260520/celta-vigo-aston-villa-unai-emery-interes-ilaix-moriba_18_019209190.html"},
  elDesmarqueWilliotSwedberg: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260115/celta-vigo-atalanta-interesado-fichaje-williot-swedberg_18_018070655.html"},
  aSFichajesnetBorjaIglesias: {l:"AS / Fichajes.net", u:"https://www.fichajes.net/noticias/oferton-borja-iglesias-adios-celta-20260708.html"},
  galiciaPressMiguelRodrguez: {l:"Galicia Press", u:"https://www.galiciapress.es/articulo/deportes/2026-07-27/5966700-futuro-deportivista-exjoya-celta-vigo-marca-actualidad-fichajes-balaidos"},
  galiciaPressDenisSurez: {l:"Galicia Press", u:"https://www.galiciapress.es/articulo/deportes/2026-07-22/5961199-alaves-deja-denis-suarez-minutos-pretemporada-alimenta-ilusion-fichaje-celta"},
  mSNDeportesBorjaIglesias: {l:"MSN Deportes", u:"https://www.msn.com/es-mx/noticias/other/club-am%C3%A9rica-va-por-borja-iglesias-pero-el-celta-pone-un-precio-millonario-se-aleja-el-fichaje-de-las-%C3%A1guilas/ar-AA27EMOb"},
  elDesmarqueUnaiNez: {l:"ElDesmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260804/celta-vigo-asume-realidad-unai-nunez-cambia-guion-completo-ultima-opcion_18_019886663.html"},
  yahooSportsSkySportsAbdoulayeFaye: {l:"Yahoo Sports / Sky Sports", u:"https://sports.yahoo.com/articles/official-bayer-leverkusen-pocket-300-151500694.html"}};

const LINKMAP = {
  "Altay Bayindir": ["hardtackle-bayindir1", "hardtackle-bayindir2"],
  "Fer López": ["elDesmarqueFerLpez"],
  "Hugo Bueno": ["galiciaPressHugoBueno"],
  "Denis Suárez": ["elDesmarqueDenisSurez", "galiciaPressDenisSurez"],
  "Giorgi Kochorashvili": ["galiciaPressGiorgiKochorashvili"],
  "Ilaix Moriba": ["elDesmarqueIlaixMoriba"],
  "Williot Swedberg": ["elDesmarqueWilliotSwedberg"],
  "Borja Iglesias": ["aSFichajesnetBorjaIglesias", "mSNDeportesBorjaIglesias"],
  "Miguel Rodríguez": ["galiciaPressMiguelRodrguez"],
  "Unai Núñez": ["elDesmarqueUnaiNez"],
  "Abdoulaye Faye": ["yahooSportsSkySportsAbdoulayeFaye"]};
const WL_LINKMAP = {
  "Altay Bayindir": ["hardtackle-bayindir2"]
};

const PROSE = {
  heroH2: `A goalkeeping loan is Celta's live deadline-window story`,
  heroLede: `Fresh off a Europa League-qualifying sixth-place finish, <b>Claudio Giráldez</b>'s side are moving to add senior goalkeeping cover: <b>Altay Bayindir</b> is closing in on a season-long loan from Manchester United, with a medical understood to be imminent.`,
  metaRow: `<span>COACH: <b>Claudio Giráldez</b></span> <span>EUROPE: <b>Europa League</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div><div class="stat gold"><div class="l">Live Loan</div><div class="v">Bayindir</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 fee`, x: `Bayindir move structured as a loan` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
