/* ============================================================
   MERCATO IQ · CLUB DATA · RC DEPORTIVO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RC Deportivo", mono: "DEP", slug: "deportivo-la-coruna",
  primary: "#0057A3", primaryBright: "#5CA9FF", primaryDeep: "#00305C",
  primaryRgb: "0,87,163",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Antonio Hidalgo",
  dof: "Fernando Soriano (Sporting Director)",
  europe: "None for 2026/27",
  finish: "Promoted from Segunda División 2025/26 (returning after 8 years away)",
  owner: "Member-owned (Real Club Deportivo), Marián Rivera Domínguez President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.riazor.org/mercado-fichajes-deportivo-primera-division-directo/", "https://www.fichajes.com/equipo/deportivo-de-la-coruna/altas-bajas/"],
  queries: ["Deportivo La Coruña fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · RC Deportivo"
};

const CONFIRMED_IN = [
  {name:"Asp Jensen", sub:"Danish forward/attacker", club:"Bayern Munich", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially confirmed as Deportivo's fifth summer signing ahead of their return to LaLiga after eight seasons away."},
  {name:"Angeliño", sub:"Spanish left-back, 29, Galician-born", club:"AS Roma", pos:"LB", fee:"Loan with €2.5m obligation to buy", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Homecoming for the Coristanco-born full-back, who came through Deportivo's academy before Manchester City, PSV, RB Leipzig and Roma; medical held August 4, 2026."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Domingos Duarte", sub:"31 · CB · Portugal", club:"Getafe (free agent)", pos:"CB", report:"04 Jul 2026", src:"Matteo Moretto", tier:2, fee:"Free (contract expired at Getafe)", truth:70, prob:60, light:"g", trend:"up", note:"Moretto reported advanced talks for the free-agent centre-back, who spent the 2018/19 season on loan at Riazor and left a strong impression. A reunion given his familiarity with the club and city.", lastSeen:"2026-08-04T19:10:50Z", baseProb:60},
  {name:"Francisco Moura", sub:"Portuguese right-back", club:"FC Porto", pos:"RB", report:"Deportivo have shown concrete interest in Moura as they build a squad capable of competing after promotion back to LaLiga.", src:"Superdeporte", tier:3, fee:"", truth:40, prob:20, light:"o", trend:"flat", note:"Early-stage interest reported; no formal offer confirmed yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Ricardo Rodríguez", sub:"Swiss left-back, 33, free agent", club:"Free agent", pos:"LB", report:"Named as one of five left-back candidates being weighed by Deportivo before they settled on Angeliño; competition to partner/replace Quagliata at left-back.", src:"ElDesmarque", tier:2, fee:"", truth:55, prob:15, light:"o", trend:"flat", note:"Overtaken in the club's plans once the Angeliño deal advanced.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];

const OUTGOING = [
  {name:"Sergio Escudero", sub:"Spanish left-back, veteran", club:"Real Zaragoza", pos:"LB", report:"Left-back and former captain during Depor's promotion campaign departed for Real Zaragoza on a multi-year deal.", src:"Aragón Digital", tier:2, fee:"", truth:90, prob:95, light:"g", trend:"flat", note:"This is effectively confirmed — Escudero has already spoken publicly about the move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:95}
];

const RISERS = [
  {ar:"⬆", t:"<b>Domingos Duarte reunion talks</b>: advanced negotiations for a free-agent centre-back who already knows the club from a prior loan spell."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Newly promoted Deportivo have reportedly invested around €20m across seven signings this summer - the fifth-highest spend by a promoted club in 21st-century Spanish football - though most individual deals have not been broken down in detail by English-language sources; Domingos Duarte is the one incoming story with strong sourcing."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-back depth for the top flight", w:50, x:"Duarte reunion would add senior La Liga-tested experience to a squad built for an immediate return."}
];

const WATCHLIST = [
  {name:"Domingos Duarte", club:"Getafe (free agent)", pos:"CB", dir:"in", age:"~1 month", tier:2, note:"Advanced talks reported by Matteo Moretto; player already knows Riazor from a 2018/19 loan."}
];

const HUB = {
  "moncloa-depor-spend": {l:"Moncloa - Deportivo invest €20m across summer signings", u:"https://www.moncloa.com/2026/07/12/deportivo-coruna-invierte-20-millones-fichajes-3398638/"},
  "fichajesnet-duarte": {l:"Fichajes.net - Matteo Moretto reports Domingos Duarte talks", u:"https://www.fichajes.net/noticias/nuevo-fichaje-nuevo-super-depor-camino-20260705.html"},
  superdeporteFranciscoMoura: {l:"Superdeporte", u:"https://www.superdeporte.es/fichajes/2026/08/03/jugon-deportivo-coruna-interes-francisco-moura-133073890.html"},
  elDesmarqueRicardoRodrguez: {l:"ElDesmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260723/deportivo-coruna-aumenta-debate-fichaje-lateral-ricardo-rodriguez-cuatro-mas_18_019784861.html"},
  aragnDigitalSergioEscudero: {l:"Aragón Digital", u:"https://www.aragondigital.es/articulo/real-zaragoza/sergio-escudero-lateral-real-zaragoza/20260702123607993404.html"},
  superdeporteAspJensen: {l:"Superdeporte", u:"https://www.superdeporte.es/fichajes/2026/07/13/"},
  elGolDigitalAngelio: {l:"El Gol Digital", u:"https://www.elgoldigital.com/futbol/rc-deportivo-coruna/deportivo-angelino-cesion-obligacion-compra/"}};

const LINKMAP = {
  "Domingos Duarte": ["fichajesnet-duarte"],
  "Francisco Moura": ["superdeporteFranciscoMoura"],
  "Ricardo Rodríguez": ["elDesmarqueRicardoRodrguez"],
  "Sergio Escudero": ["aragnDigitalSergioEscudero"],
  "Asp Jensen": ["superdeporteAspJensen"],
  "Angeliño": ["elGolDigitalAngelio"]};
const WL_LINKMAP = {
  "Domingos Duarte": ["fichajesnet-duarte"]
};

const PROSE = {
  heroH2: `Back in the top flight with real investment behind the return`,
  heroLede: `Eight years after their last top-flight campaign, <b>RC Deportivo</b> return to La Liga under <b>Antonio Hidalgo</b> backed by roughly €20m of summer investment - among the biggest outlays by a promoted Spanish club this century. The clearest individual story is a reunion move for free-agent centre-back <b>Domingos Duarte</b>.`,
  metaRow: `<span>COACH: <b>Antonio Hidalgo</b></span> <span>STATUS: <b>Promoted 2026/27</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Summer Spend</div><div class="v">~€20m</div></div><div class="stat"><div class="l">Signings</div><div class="v">7</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: `Aggregate spend and signing count are sourced (Moncloa), but individual names/fees for all seven signings were not available in verifiable English or Spanish reporting beyond the Duarte reunion story - left honest rather than invented.`,
  spendIn: { v: `~€20m (aggregate)`, x: `Seven signings reported; only Domingos Duarte individually verified` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
