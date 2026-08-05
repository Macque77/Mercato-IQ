/* ============================================================
   MERCATO IQ · CLUB DATA · ALBACETE BALOMPIÉ · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Albacete Balompié", mono: "AB", slug: "albacete",
  primary: "#FFFFFF", primaryBright: "#FFFFFF", primaryDeep: "#C0C0C0",
  primaryRgb: "255,255,255",
  breadcrumb: ["Spain","La Liga 2"]
};

const VOLATILE = {
  verified: "2026-07-29",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["albacete transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Carlos Marin", sub:"Spain · GK", club:"Cordoba", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported as completed by a local Albacete blog rather than a tier-1 source or the club's own channels, so treat the fee and contract length as unconfirmed. Presented as the first of the summer moves, closing the goalkeeping position."},
  {name:"Mario Soberon", sub:"Spain · ST", club:"", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Described as the club's second summer reinforcement in a Segunda-focused outlet. Previous club and terms were not stated in the report, so they are left blank rather than guessed."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Albacete Official", u:"#"},
  s5maseldescuentoCarlosMarin: {l:"5 mas el descuento", u:"https://www.5maseldescuento.es/2026/08/al-albacete-le-queda-como-minimo-un-fichaje-mas-si-toche-mantiene-su-hoja-de-ruta/"},
  fondoSegundaMarioSoberon: {l:"Fondo Segunda", u:"https://fondosegunda.com/albacete-anuncia-fichaje-nuevo-delantero/"}};

const LINKMAP = {
  "Carlos Marin": ["s5maseldescuentoCarlosMarin"],
  "Mario Soberon": ["fondoSegundaMarioSoberon"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Albacete Balompié · 2026/27 Season`,
  heroLede: `Transfer window active. Albacete Balompié preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};