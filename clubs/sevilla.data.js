/* ============================================================
   MERCATO IQ · CLUB DATA · SEVILLA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Sevilla", mono: "S", slug: "sevilla",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luis García Plaza (appointed March 2026, replacing Matías Almeyda)",
  dof: "Antonio Cordón (Sporting Director)",
  europe: "None for 2026/27",
  finish: "13th La Liga (2025/26), 43pts",
  owner: "José María del Nido Carrasco (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.eldesmarque.com/futbol/mercado-de-fichajes/", "https://www.elsevillista.es/"],
  queries: ["Sevilla FC fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Sevilla FC"
};

const CONFIRMED_IN = [
  {name:"Julio Díaz", sub:"21 · LB · Spain", to:"permanent from Atlético Madrid", fee:"~€1m + €0.5m variables (Atlético hold €2m buy-back)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 28 July 2026 - a five-year deal for the Spain U-19 European champion, Sevilla's fifth signing of the summer. Díaz progressed through Atlético's academy after starting out at Rayo Vallecano."},
  {name:"Gabriel Suazo", sub:"27 · LB · Chile", to:"permanent", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed as Sevilla's second summer signing, per Soccerway's official announcement coverage."},
  {name:"Fran González", sub:"Goalkeeper", club:"Real Madrid", pos:"GK", fee:"€3m (50% of economic rights)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sevilla's sixth signing of the summer, the 21-year-old goalkeeper arrives to compete with Odysseas Vlachodimos, with Real Madrid retaining a buy-back option."}
];

const CONFIRMED_OUT = [
  {name:"Tanguy Nianzou", sub:"Centre-back", club:"Lille", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Nianzou's exit to Ligue 1 side Lille frees up a first-team squad slot and registration room for Sevilla ahead of the new season."}
];

const INCOMING = [
  {name:"Antonio Raíllo", sub:"Free-agent centre-back", club:"Mallorca (free agent)", pos:"DF", report:"Sevilla have been strongly linked with the free-agent centre-back to lead a rebuilt defense after conceding 60 goals last season, though reports are contradictory on how advanced talks are.", src:"Vamos Mi Sevilla / El Chiringuito", tier:3, fee:"Free transfer", truth:45, prob:35, light:"y", trend:"flat", note:"Some outlets called the move imminent in late June while others insisted there was 'nothing' agreed with Raíllo, reflecting how unsettled Sevilla's central-defensive plans still are."},
  {name:"David Romero", sub:"Tigre striker, losing race to Parma", club:"Tigre (Argentina)", pos:"FW", report:"Sevilla have pushed for weeks to sign the Argentine forward for their attack, but Parma have reportedly gained the upper hand in the race for his signature.", src:"El Desmarque", tier:2, fee:"Undisclosed", truth:60, prob:30, light:"y", trend:"flat", note:"Sevilla's interest is genuine, but the player now looks more likely to end up in Italy after Parma stepped up their pursuit in early August."}
];

const OUTGOING = [
  {name:"Isaac Romero", sub:"Striker, Russian interest", club:"Unnamed Russian clubs", pos:"FW", report:"Sevilla are reportedly willing to sell Isaac Romero for around €4-5m amid financial pressure, with interest emerging from Russian football.", src:"Vamos Mi Sevilla (citing Estadio Deportivo)", tier:3, fee:"€4-5m (Sevilla's valuation)", truth:50, prob:30, light:"y", trend:"flat", note:"This looks driven by Sevilla's finances rather than sporting reasons, and Romero himself reportedly prefers to stay in Spain, which could complicate any move abroad."},
  {name:"Akor Adams", sub:"Striker, near Venezia move", club:"Venezia", pos:"FW", report:"Adams has reportedly agreed personal terms with Venezia, in a deal that could reach €20.5-23.5m including add-ons — what would be Sevilla's first major sale of the summer.", src:"El Pespunte / El Desmarque", tier:2, fee:"Up to €20.5-23.5m (reported)", truth:65, prob:65, light:"g", trend:"flat", note:"Multiple Spanish outlets describe this as close to being finalized, representing a large profit for Sevilla on a player bought for roughly €5.5m from Montpellier in January 2025."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Julio Díaz</b>: fifth summer signing lands from Atlético Madrid on a five-year deal."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Sevilla's rebuild under Luis García Plaza has focused on full-back depth, with Julio Díaz and Gabriel Suazo both arriving to strengthen the wide areas."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "eldesmarque-juliodiaz": {l:"El Desmarque - Julio Díaz signs for Sevilla FC", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260728/sevilla-fc-oficial-confirma-fichaje-julio-diaz-detalles_18_019831952.html"},
  "elsevillista-juliodiaz": {l:"ElSevillista - Julio Díaz signs for Sevilla FC", u:"https://www.elsevillista.es/2026/07/julio-diaz-ficha-por-el-sevilla-fc.html"},
  "soccerway-suazo": {l:"Soccerway - Gabriel Suazo, Sevilla's second signing", u:"https://es.soccerway.com/noticias/futbol-laliga-ea-sports-oficial-el-chileno-gabriel-suazo-segundo-fichaje-del-sevilla-fc/b9m3SsPj"},
  "beinsports-garciaplaza": {l:"beIN Sports - Sevilla announce García Plaza as Almeyda's successor", u:"https://www.beinsports.com/en-us/soccer/la-liga/articles/sevilla-announce-garcia-plaza-as-almeydas-successor-2026-03-25"},
  vamosMiSevillaAntonioRallo: {l:"Vamos Mi Sevilla", u:"https://www.vamosmisevillafc.com/antonio-raillo-sera-el-cuarto-fichaje-del-sevilla-fc/"},
  elDesmarqueDavidRomero: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260731/parma-entromete-negociacion-david-romero-sevilla_18_019856661.html"},
  vamosMiSevillaIsaacRomero: {l:"Vamos Mi Sevilla", u:"https://www.vamosmisevillafc.com/la-continuidad-de-isaac-romero-esta-en-el-aire-el-sevilla-fc-espera-una-potente-oferta-desde-rusia/"},
  elPespunteAkorAdams: {l:"El Pespunte", u:"https://www.elpespunte.es/articulo/deportes/akor-adams-paso-venezia-sevilla-ultima-primera-gran-venta-verano/20260720210902142017.html"},
  elDesmarqueJulioDaz: {l:"El Desmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260728/sevilla-fc-oficial-confirma-fichaje-julio-diaz-detalles_18_019831952.html"},
  vamosMiSevillaFranGonzlez: {l:"Vamos Mi Sevilla", u:"https://www.vamosmisevillafc.com/el-sevilla-fc-hace-oficial-su-sexto-fichaje-cifras-y-detalles-del-traspaso-de-fean-gonzalez/"},
  sevillaFCofficialTanguyNianzou: {l:"Sevilla FC (official)", u:"https://sevillafc.es/actualidad/noticias/acuerdo-traspaso-nianzou-lille-julio-2026"}};

const LINKMAP = {
  "Julio Díaz": ["eldesmarque-juliodiaz", "elsevillista-juliodiaz", "elDesmarqueJulioDaz"],
  "Gabriel Suazo": ["soccerway-suazo"],
  "Antonio Raíllo": ["vamosMiSevillaAntonioRallo"],
  "David Romero": ["elDesmarqueDavidRomero"],
  "Isaac Romero": ["vamosMiSevillaIsaacRomero"],
  "Akor Adams": ["elPespunteAkorAdams"],
  "Fran González": ["vamosMiSevillaFranGonzlez"],
  "Tanguy Nianzou": ["sevillaFCofficialTanguyNianzou"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Full-back reinforcements under a new head coach`,
  heroLede: `Under <b>Luis García Plaza</b>, who replaced Matías Almeyda in March, Sevilla's summer business has centred on the full-back positions: <b>Julio Díaz</b> arrives from Atlético Madrid's academy and <b>Gabriel Suazo</b> joins as the club's second permanent signing of the window.`,
  metaRow: `<span>COACH: <b>Luis García Plaza</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">2</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€1.5m+ committed`, x: `Julio Díaz fee; Suazo fee undisclosed` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
