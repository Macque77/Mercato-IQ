/* ============================================================
   MERCATO IQ · CLUB DATA · MÁLAGA CF · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Málaga CF", mono: "MAL", slug: "malaga",
  primary: "#1257A6", primaryBright: "#5C93FF", primaryDeep: "#0A2F5C",
  primaryRgb: "18,87,166",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Juan Francisco Funes (\"Juanfran\")",
  dof: "Loren Juarros (Sporting Director)",
  europe: "None for 2026/27",
  finish: "Promoted from Segunda División 2025/26 via play-off (beat Almería 2-1 in the final)",
  owner: "Member-owned (Málaga CF)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.eldesmarque.com/futbol/mercado-de-fichajes/", "https://www.jornadaperfecta.com/blog/"],
  queries: ["Málaga CF fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Málaga CF"
};

const CONFIRMED_IN = [
  {name:"José Salinas", sub:"~26 · LB · Spain", to:"loan from RCD Espanyol", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 27 July 2026 as Málaga's fourth summer reinforcement. Salinas came through Elche's academy, helped them win promotion in 2024/25, then moved to Espanyol; he now joins Málaga's own promotion push."},
  {name:"Fernando Calero", sub:"Centre-back", club:"Espanyol", pos:"DF", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Málaga's first signing since returning to LaLiga after eight years away, brought in on a one-year deal with an option."},
  {name:"Juan Cruz", sub:"Winger (loan)", club:"Leganés", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Brought in on loan to add pace and one-on-one threat out wide for the promoted side."},
  {name:"Jose Salinas", sub:"LB, Spanish", club:"Espanyol", pos:"LB", fee:"Loan with purchase option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed on loan to shore up the left-back slot ahead of Malaga's return to Segunda Division after promotion from Primera RFEF."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Raúl Asencio", sub:"CB, Real Madrid outcast under Mourinho", club:"Real Madrid", pos:"DF", report:"Newly-promoted Málaga have emerged as suitors for the young centre-back Madrid are trying to move on, alongside RB Leipzig, as agent Jorge Mendes shops him around.", src:"El Gol Digital", tier:3, fee:"~€20m valuation", truth:50, prob:25, light:"o", trend:"flat", note:"Málaga's interest looks genuine but faces stiff competition from a Bundesliga side better placed financially to match Madrid's valuation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Diego Rico", sub:"LB, weighing La Liga return", club:"Getafe", pos:"DF", report:"Radio Marca reports Rico and his camp view a move to La Rosaleda favourably and are waiting on a formal Málaga offer, with Espanyol and Alavés also circling.", src:"Radio Marca Málaga", tier:2, fee:"Free transfer", truth:60, prob:40, light:"y", trend:"flat", note:"Reported as the player's stated preference among three suitors, which gives Málaga a real edge if they move quickly.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Carlos Dominguez", sub:"CB, Spanish", club:"Celta Vigo", pos:"CB", report:"Malaga are targeting a loan for Celta centre-back Dominguez to cover a run of defensive injuries as they prepare for the Segunda Division return.", src:"Superdeporte", tier:2, fee:"Loan", truth:60, prob:40, light:"y", trend:"flat", note:"Framed as a need-driven move after injuries to the back line.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Bryan Zaragoza", sub:"RW, Spanish", club:"Unattached/loan market", pos:"RW", report:"Malaga were mentioned as exploring a domestic opportunity for winger Zaragoza, though detail remains thin.", src:"Fichajes.com", tier:3, fee:"n/a", truth:40, prob:15, light:"o", trend:"flat", note:"Sparse coverage; treat as speculative until a concrete link club is confirmed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>José Salinas</b>: fourth summer signing arrives on loan from Espanyol to bolster the left side of defence for the club's return to the top flight."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Newly promoted Málaga, back in La Liga after winning the play-off final against Almería, are building their squad under sporting director Loren Juarros - with José Salinas the clearest, best-sourced incoming addition so far."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "jornadaperfecta-salinas": {l:"Jornada Perfecta - José Salinas signs for Málaga CF", u:"https://www.jornadaperfecta.com/blog/jose-salinas-malaga-anuncio-fichaje-26/"},
  "eldesmarque-malaga-market": {l:"El Desmarque - Málaga's summer transfer market plans under Loren Juarros", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260624/malaga-perfila-fichajes-lineas-rojas-loren-juarros-mercado_18_019538692.html"},
  elGolDigitalRalAsencio: {l:"El Gol Digital", u:"https://www.elgoldigital.com/futbol/malaga-cf/asencio-malaga-salida-real-madrid-2026"},
  radioMarcaMlagaDiegoRico: {l:"Radio Marca Málaga", u:"https://www.merchanendirecto.es/diego-rico-atrae-malaga-cf-y-espera-oferta/"},
  radioMarcaMlagaFernandoCalero: {l:"Radio Marca Málaga", u:"https://www.merchanendirecto.es/oficial-fernando-calero-malaga-2026-2027/"},
  ascensoDirectoJuanCruz: {l:"Ascenso Directo", u:"https://www.ascensodirecto.es/articulo/malaga-cf/malaga-cf-perfila-plantilla-asi-mercado-fichajes/20260731114118001623.html"},
  superdeporteCarlosDominguez: {l:"Superdeporte", u:"https://www.superdeporte.es/fichajes/2026/08/02/fichajes-malaga-fichajes-celta-laliga-carlos-dominguez-mercado-fichajes-laliga-133041461.html"},
  fichajescomMalagahubBryanZaragoza: {l:"Fichajes.com (Malaga hub)", u:"https://www.fichajes.com/equipo/malaga-cf/"},
  diarioSurJoseSalinas: {l:"Diario Sur", u:"https://www.diariosur.es/malagacf/jose-salinas-nuevo-jugador-malaga-lateral-izquierdo-20260727203910-nt.html"}};

const LINKMAP = {
  "José Salinas": ["jornadaperfecta-salinas", "eldesmarque-malaga-market", "ascensoDirectoJuanCruz"],
  "Raúl Asencio": ["elGolDigitalRalAsencio"],
  "Diego Rico": ["radioMarcaMlagaDiegoRico"],
  "Fernando Calero": ["radioMarcaMlagaFernandoCalero"],
  "Juan Cruz": ["ascensoDirectoJuanCruz"],
  "Carlos Dominguez": ["superdeporteCarlosDominguez"],
  "Bryan Zaragoza": ["fichajescomMalagahubBryanZaragoza"],
  "Jose Salinas": ["diarioSurJoseSalinas"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Back in La Liga after a play-off final win`,
  heroLede: `<b>Málaga CF</b> return to the top flight after beating Almería in the promotion play-off final, and under coach <b>Juanfran Funes</b> and sporting director <b>Loren Juarros</b> the squad-build is under way - <b>José Salinas</b>'s loan arrival from Espanyol is the summer's clearest, best-sourced signing to date.`,
  metaRow: `<span>COACH: <b>Juanfran Funes</b></span> <span>STATUS: <b>Promoted 2026/27</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Loan (no fee)`, x: `José Salinas from Espanyol` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
