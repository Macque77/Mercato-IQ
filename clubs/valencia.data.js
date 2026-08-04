/* ============================================================
   MERCATO IQ · CLUB DATA · VALENCIA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Valencia", mono: "V", slug: "valencia",
  primary: "#EE8707", primaryBright: "#FFAD4D", primaryDeep: "#8F5104",
  primaryRgb: "238,135,7",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Carlos Corberán",
  dof: "Miguel Ángel Corona (Sporting Director)",
  europe: "None for 2026/27",
  finish: "9th La Liga (2025/26), 49pts",
  owner: "Peter Lim (Meriton Holdings)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.fichajes.com/equipo/valencia-cf/altas-bajas/", "https://www.deportevalenciano.com/valencia-cf"],
  queries: ["Valencia CF fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Valencia CF"
};

const CONFIRMED_IN = [
  {name:"Ryunosuke Sato", sub:"Forward, Japan international", club:"FC Tokyo", pos:"FW", fee:"Around €4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"The 19-year-old Japan international's move reportedly broke the transfer-fee record previously held by countryman Take Kubo, and he has signed through 2031."},
  {name:"Aliou Dieng", sub:"CM/CDM, Mali, 28", club:"Al-Ahly", pos:"CDM", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a three-year contract after arriving as a free agent once the 2025-26 season concluded."}
];

const CONFIRMED_OUT = [
  {name:"Baptiste Santamaría", sub:"30 · CM · France", club:"PAOK", pos:"CM", fee:"Free (contract terminated)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 13 July 2026 - Santamaría leaves for the Greek champions on a free transfer."}
];

const INCOMING = [
  {name:"Kingsley Ehizibue", sub:"Free-agent right-back, emergency fix", club:"Udinese (free agent)", pos:"DF", report:"After missing out on Thomas Meunier, Andrés García and Daijiro Chirino, Valencia have turned to the free-agent Dutch-Nigerian right-back as a low-cost solution to a position in crisis.", src:"El Desmarque (Jorge Ruiz)", tier:2, fee:"Free transfer", truth:55, prob:45, light:"y", trend:"flat", note:"Valencia's right-back options collapsed one by one through July, leaving Ehizibue as essentially the last realistic name on the list with the window closing fast and money short.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
];

const OUTGOING = [
  {name:"Hugo Duro", sub:"Striker made available", club:"Unspecified suitors", pos:"FW", report:"Valencia have set a €12m price tag on Duro to help balance the books, though the club's own reporting suggests few clubs have been willing to meet that valuation.", src:"Fichajes.net / Deporte Valenciano", tier:3, fee:"€12m (asking price)", truth:45, prob:15, light:"o", trend:"flat", note:"This reads more like a financial necessity being floated by the club than a live approach from any specific suitor, and Duro is not believed to be pushing to leave himself.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Javi Guerra", sub:"CM, Spain, 22", club:"Barcelona", pos:"CM", report:"Barcelona had until 1 August 2026 to trigger Javi Guerra's 40m euro release clause before it rose to 60m; Hansi Flick was said to be keen amid Barca's midfield injury/rift issues, but the club had taken no concrete steps as the deadline neared.", src:"Barca Blaugranes", tier:3, fee:"€40-60m release clause", truth:40, prob:25, light:"o", trend:"flat", note:"Guerra said in May: \"I have a contract. I renewed last year, so I think it's clear that I want to stay here.\" Unclear as of early August whether Barcelona acted before the 1 August deadline; unnamed Italian and English clubs also reportedly monitoring him.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Valencia's summer has so far been dominated by loan returns (Sergi Canós, Cenk Özkacar, Alberto Marí, Largie Ramazani, Lucas Beltrán) and a free departure for Baptiste Santamaría - no new permanent incoming signing confirmed yet under Carlos Corberán."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield", w:35, x:"Santamaría's exit leaves a squad spot open, though no direct incoming replacement has been reported yet."}
];

const WATCHLIST = [];

const HUB = {
  "fichajes-valencia": {l:"Fichajes.com - Valencia CF altas y bajas 2026/27", u:"https://www.fichajes.com/equipo/valencia-cf/altas-bajas/"},
  elDesmarqueKingsleyEhizibue: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260714/primera-oferta-chirino-rechazada-negociacion_18_019716572.html"},
  fichajesnetHugoDuro: {l:"Fichajes.net", u:"https://www.fichajes.net/noticias/hugo-duro-rampa-salida-mestalla-20260603.html"},
  valenciaCFofficialRyunosukeSato: {l:"Valencia CF (official)", u:"https://www.valenciacf.com/official-statement-ryunosuke-sato"},
  footballEspanaviaBarcaBlaugranesJaviGuerra: {l:"Football Espana (via Barca Blaugranes)", u:"https://www.football-espana.net/2026/07/30/javi-guerra-barcelona-transfer-deadline"},
  footballEspanaviaMarcaAliouDieng: {l:"Football Espana (via Marca)", u:"https://www.football-espana.net/2026/04/03/la-liga-transfer-round-up-valencia-seal-free-transfer-of-mali-international"}};

const LINKMAP = {
  "Baptiste Santamaría": ["fichajes-valencia"],
  "Kingsley Ehizibue": ["elDesmarqueKingsleyEhizibue"],
  "Hugo Duro": ["fichajesnetHugoDuro"],
  "Ryunosuke Sato": ["valenciaCFofficialRyunosukeSato"],
  "Javi Guerra": ["footballEspanaviaBarcaBlaugranesJaviGuerra"],
  "Aliou Dieng": ["footballEspanaviaMarcaAliouDieng"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A window of loan returns rather than new faces`,
  heroLede: `Under <b>Carlos Corberán</b>, Valencia's summer so far has been about reintegrating returning loanees rather than making a marquee signing; the one confirmed departure is <b>Baptiste Santamaría</b>, who leaves for PAOK as a free agent.`,
  metaRow: `<span>COACH: <b>Carlos Corberán</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 confirmed`, x: `No completed signings found as of 3 Aug 2026` },
  spendOut: { v: `€0 fee`, x: `Santamaría left on contract termination` },
  methodLegend: ``
};
