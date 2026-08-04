/* ============================================================
   MERCATO IQ · CLUB DATA · R CHARLEROI SC · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026): this slug previously contained
   mismatched data for a different club (a data-generation bug
   from an earlier automated pass). Corrected to the real club
   this slug represents.
   ============================================================ */

const BRAND = {
  club: "R Charleroi SC", mono: "CHA", slug: "charleroi",
  primary: "#000000", primaryBright: "#C0C0C0", primaryDeep: "#000000",
  primaryRgb: "20,20,20",
  breadcrumb: ["Belgium","Pro League"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["R Charleroi SC transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:30:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Isaac Cissé", sub:"MF · Ivory Coast", club:"Undisclosed", pos:"MF", fee:"Reported ~5x market value", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ivorian midfielder signed for a fee well above his listed market value."}
];
const CONFIRMED_OUT = [
  {name:"Yacine Titraoui", sub:"MF · Algeria", club:"RC Lens", pos:"CM", fee:"€8m + 20% sell-on", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Algerian international completed a big-money move to Ligue 1 after Charleroi rejected an earlier €7m Olympiakos bid."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Aiham Ousou", sub:"Captain · CB", club:"Ludogorets", pos:"CB", report:"18 Jul 2026", src:"La Dernière Heure", tier:2, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"Charleroi risk losing their captain to the Bulgarian champions right before the season starts; club reluctant to sell."},
  {name:"Étienne Camara", sub:"MF", club:"Panathinaikos", pos:"MF", report:"8 Jun 2026", src:"Voetbalkrant", tier:3, fee:"Undisclosed", truth:45, prob:25, light:"o", trend:"flat", note:"Greek giants tabled a fresh offer for the Charleroi midfielder; valuation gap remains between the clubs."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"R Charleroi SC Official", u:"#"},
  voetbalkrantviaLaDernireHeureAihamOusou: {l:"Voetbalkrant (via La Dernière Heure)", u:"https://www.voetbalkrant.com/nieuws/2026-07-18/jpl-club-ziet-kapitein-plots-vertrekken"},
  voetbalkranttienneCamara: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/nieuws/2026-06-08/dit-wil-griekse-topclub-allemaal-op-tafel-leggen-voor-speler-van-charleroi"},
  voetbalkrantIsaacCiss: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/belgie/charleroi/transfers"},
  sporzaYacineTitraoui: {l:"Sporza", u:"https://sporza.be/nl/2026/07/17/zomertransfers-jpl-charleroi-casht-stevig-op-smaakmaker-yacine-titraoui-die-naar-rc-lens-vertrekt~1784279414332/"}};

const LINKMAP = {
  "Aiham Ousou": ["voetbalkrantviaLaDernireHeureAihamOusou"],
  "Étienne Camara": ["voetbalkranttienneCamara"],
  "Isaac Cissé": ["voetbalkrantIsaacCiss"],
  "Yacine Titraoui": ["sporzaYacineTitraoui"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `R Charleroi SC · 2026/27 Season`,
  heroLede: `Transfer window active. R Charleroi SC preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
