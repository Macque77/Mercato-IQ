/* ============================================================
   MERCATO IQ · CLUB DATA · ATALANTA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Atalanta",
  mono: "ATA",
  slug: "atalanta",
  primary: "#1B5AA5",
  primaryBright: "#5CA9FF",
  primaryDeep: "#0E3560",
  primaryRgb: "27,90,165",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Maurizio Sarri (since 15 Jun 2026, after Raffaele Palladino's exit)",
  dof: "Cristiano Giuntoli (Sporting Director, since May 2026, ex-Juventus and Napoli)",
  europe: "UEFA Conference League (2026/27) - the club's first-ever Conference League campaign",
  finish: "7th Serie A (2025/26)",
  owner: "Antonio Percassi (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/atalanta/", "https://en.atalanta.it/news"],
  queries: ["Atalanta transfer news 2026", "Atalanta Sarri Giuntoli signings", "Atalanta Gaetano Cagliari"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Atalanta"
};

const CONFIRMED_IN = [
  {name:"Gianluca Gaetano", sub:"23 · AM · Italy", to:"permanent from Cagliari", fee:"~€14m (with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 9 Jul. Requested directly by new coach Maurizio Sarri to add creativity in midfield, arriving from Cagliari for around €14m including add-ons."},
  {name:"Jacopo Mirra", sub:"Defender, ITA, 20", club:"AS Roma", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ex-Roma youth defender signed for Atalanta's U23 project."}
];

const CONFIRMED_OUT = [
  {name:"Andrea Ceresoli", sub:"CB", club:"permanent to FC Nürnberg", pos:"CB", fee:"€1m + 15% resale clause", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Medical exams scheduled the following day per Di Marzio's live mercato digest."},
  {name:"Marco Palestra", sub:"Right-back/wing-back, ITA, 21", club:"Chelsea", pos:"RB", fee:"€60m + add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a seven-year deal through 2033 in a move Chelsea completed on 1 July 2026, reportedly hijacking Inter's pursuit; described as Atalanta's best financial return on a player sale in club history."}
];

const INCOMING = [
  {name:"Nicolas Raskin", sub:"Midfielder, BEL, 25", club:"Glasgow Rangers", pos:"CM", report:"Atalanta have 'locked onto' the Rangers midfielder, with Rangers holding fresh discussions over a move valued above £17m.", src:"Gianluca Di Marzio", tier:1, fee:"Undisclosed", truth:70, prob:45, light:"y", trend:"flat", note:"Raskin has made clear his intention to leave Rangers this summer after an impressive World Cup with Belgium; Real Betis and Hull City also credited with interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Rasmus Kristensen", sub:"Defender, DEN, 28", club:"Udinese", pos:"CB", report:"Atalanta are considering the Udinese/Danish defender as a squad reinforcement option.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Described as an option under consideration rather than an advanced negotiation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Pierre-Emile Hojbjerg", sub:"Midfielder, DEN, 30", club:"Marseille", pos:"CDM", report:"Interest from Atalanta has been noted, though reported complications around the deal persist.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:30, prob:12, light:"r", trend:"flat", note:"Unspecified complications reported, suggesting the move is not progressing smoothly.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12}
];

const OUTGOING = [
  {name:"El Bilal Touré", sub:"24 · ST · Mali", club:"Parma", pos:"ST", report:"2 Aug 2026", src:"Gianluca Di Marzio", tier:2, fee:"Loan with conditional mandatory purchase", truth:55, prob:50, light:"y", trend:"flat", note:"Di Marzio describes the loan as in its closing stages.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50},
  {name:"Matteo Bellanova", sub:"Right-back, ITA, 26", club:"Everton / Inter / Napoli (interest)", pos:"RB", report:"Everton lead a group of suitors that also includes Inter and Napoli, with Atalanta valuing the Italy international at €15-20m.", src:"TuttoMercatoWeb", tier:2, fee:"Undisclosed", truth:50, prob:30, light:"y", trend:"flat", note:"Multiple credible suitors named, but no formal bid confirmed yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Sergej Levak", sub:"Midfielder/Defender, CRO", club:"Cagliari", pos:"CB", report:"Cagliari have shown interest, but Atalanta are described as protective over the player and reluctant to sell.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Atalanta's reluctance reported to be a bigger obstacle than valuation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];

const RISERS = [
  {ar:"⬆", t:"<b>Gianluca Gaetano official</b>: attacking midfielder arrives from Cagliari for around €14m, a Sarri-requested signing."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Maurizio Sarri's first Atalanta window is understated so far - Gaetano is the only confirmed arrival as the club begins its first-ever Conference League campaign following a 7th-place finish."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Ademola Lookman links</b>: dead - the winger completed his move to Atlético Madrid back in the January 2026 window, well before this summer's market opened."}
];

const POSITIONS = [
  {p:"Attacking creativity / wide areas", w:55, x:"Replacing the creative output lost when Lookman departed in January remains the club's biggest ongoing task; Gaetano is a step in that direction rather than a full solution."}
];

const WATCHLIST = [];

const HUB = {
  footballItalia: {l:"Football Italia · Atalanta", u:"https://football-italia.net/category/teams/atalanta/"},
  club: {l:"Atalanta Official · News", u:"https://en.atalanta.it/news"},
  gianlucaDiMarzioElBilalTour: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-notizie-giornata-2-agosto-2026-495426"},
  bBCSportNicolasRaskin: {l:"BBC Sport", u:"https://www.bbc.com/sport/football/cddlpm3vv78o"},
  tuttoMercatoWebRasmusKristensen: {l:"TuttoMercatoWeb", u:"https://www.tuttomercatoweb.com/atalanta"},
  calciomercatocomJacopoMirra: {l:"Calciomercato.com", u:"https://www.calciomercato.com/squadra/atalanta"}};

const LINKMAP = {
  "Gianluca Gaetano": ["footballItalia","club", "tuttoMercatoWebRasmusKristensen"],
  "El Bilal Touré": ["gianlucaDiMarzioElBilalTour"],
  "Andrea Ceresoli": ["gianlucaDiMarzioElBilalTour"],
  "Nicolas Raskin": ["bBCSportNicolasRaskin"],
  "Rasmus Kristensen": ["tuttoMercatoWebRasmusKristensen"],
  "Pierre-Emile Hojbjerg": ["tuttoMercatoWebRasmusKristensen"],
  "Matteo Bellanova": ["tuttoMercatoWebRasmusKristensen"],
  "Sergej Levak": ["tuttoMercatoWebRasmusKristensen"],
  "Jacopo Mirra": ["calciomercatocomJacopoMirra"],
  "Marco Palestra": ["tuttoMercatoWebRasmusKristensen"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Sarri's fresh start: Gaetano arrives as Giuntoli reshapes the sporting project for a maiden Conference League campaign`,
  heroLede: `Atalanta enter 2026/27 under <b>Maurizio Sarri</b>, appointed in June after Raffaele Palladino's departure, and reunited with sporting director <b>Cristiano Giuntoli</b> - the pair worked together during a transformative spell at Napoli between 2015 and 2018. A 7th-place finish means the club's first-ever UEFA Conference League campaign, a step down from recent Europa League football but still European action. The summer's only confirmed incoming so far is <b>Gianluca Gaetano</b>, a Sarri-requested creative midfielder signed from Cagliari for around €14m - business is otherwise quiet, with the club still working through life after <b>Ademola Lookman's</b> January departure to Atlético Madrid.`,
  metaRow: `<span>DECISION-MAKER: <b>Cristiano Giuntoli</b> (Sporting Director)</span> <span>HEAD COACH: <b>Maurizio Sarri</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">7<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">Conf. League</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No advanced outgoing deals reported for this window.`,
  pricingBanner: ``,
  excludedNote: `<b>Excluded as stale:</b> Ademola Lookman speculation - resolved in January 2026 with his move to Atlético Madrid, not part of this summer's business.`,
  spendIn: { v: `~€14m committed`, x: `Gaetano (~€14m) is the only confirmed signing so far this window.` },
  spendOut: { v: `None confirmed`, x: `No first-team departures reported as advanced this window.` },
  methodLegend: ``
};
