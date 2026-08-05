/* ============================================================
   MERCATO IQ · CLUB DATA · VILLARREAL · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Villarreal", mono: "V", slug: "villarreal",
  primary: "#FFE667", primaryBright: "#FFF3B0", primaryDeep: "#C7A800",
  primaryRgb: "255,230,103",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Íñigo Pérez",
  dof: "Miguel Ángel Tena (Sporting Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "3rd La Liga (2025/26), 72pts",
  owner: "Fernando Roig (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.futbolfantasy.com/laliga/equipos/villarreal/mercado-fichajes/verano-2026"],
  queries: ["Villarreal fichajes 2026"]
};

const REPORT_META = { label: "Updated 03 Aug 2026 · Villarreal", updated: "2026-08-03T18:00:00Z"};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Ramón Terrats", sub:"25 · CM · Spain", club:"Getafe", pos:"CM", fee:"~€2.5-3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit to Getafe."},
  {name:"Diego Conde", sub:"25 · GK · Spain", club:"Real Betis", pos:"GK", fee:"Loan with ~€3.5m purchase option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Closed as a loan move with a purchase option attached."},
  {name:"Jean Ives Valou", sub:"20 · CB · France", club:"Getafe", pos:"CB", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official loan exit to Getafe."},
  {name:"Dani Parejo", sub:"CM, Spain, veteran", club:"Unattached (destination not yet reported)", pos:"CM", fee:"Free / contract expired", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club confirmed the exit of the veteran midfielder after six years at Villarreal (announced 21 May 2026); his next destination had not been reported as of the latest coverage."}
];

const INCOMING = [
  {name:"Luis Milla", sub:"CM, Spain", club:"Getafe", pos:"CM", report:"Villarreal have identified Getafe's Luis Milla as their preferred replacement for the departing Dani Parejo, with Milla entering the final year of his contract and available cheaply.", src:"Diario AS", tier:2, fee:"", truth:60, prob:35, light:"y", trend:"flat", note:"Reported before Villarreal's managerial change (Marcelino out, Inigo Perez in from Rayo Vallecano), which could affect summer recruitment plans.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const OUTGOING = [
  {name:"Arnau Tenas", sub:"24 · GK · Spain", club:"Mallorca (interest)", pos:"GK", report:"Jul 2026", src:"FútbolFantasy", tier:3, fee:"Loan, wages co-funded", truth:45, prob:35, light:"y", trend:"up", note:"Mallorca reported as advancing negotiations for a goalkeeper loan with Villarreal helping fund wages; Elche also credited with background interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Ilias Akhomach", sub:"22 · W · Morocco/Spain", club:"Sevilla / Espanyol / Rayo Vallecano (interest)", pos:"W", report:"Jul 2026", src:"FútbolFantasy / OneFootball", tier:3, fee:"TBD", truth:40, prob:30, light:"y", trend:"flat", note:"Multiple clubs credited with loan interest in the winger; reports disagree on the front-runner (see also Rayo Vallecano's page).", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Pape Gueye", sub:"26 · CDM · Senegal", club:"Everton (interest)", pos:"CDM", report:"Jul 2026", src:"FútbolFantasy", tier:3, fee:"TBD", truth:35, prob:20, light:"o", trend:"up", note:"Everton reported to be accelerating a pursuit of the defensive midfielder.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];

const RISERS = [
  {ar:"⬆", t:"<b>Arnau Tenas exit gathering pace</b>: Mallorca reported to be advancing loan talks."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Villarreal's summer, coming off a third-place Champions League qualification, has so far been outgoing-heavy - Terrats, Conde and Valou have all left, with Tenas, Akhomach and Gueye all subjects of departure interest."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Goalkeeper and winger depth", w:40, x:"With Tenas and Akhomach both subjects of exit interest, replacements may be needed if either departs."}
];

const WATCHLIST = [
  {name:"Arnau Tenas", club:"Mallorca (interest)", pos:"GK", dir:"out", age:"~2 weeks", tier:3, note:"Advancing loan negotiations reported; Elche also monitoring."},
  {name:"Pape Gueye", club:"Everton (interest)", pos:"CDM", dir:"out", age:"~2 weeks", tier:3, note:"Everton reported to be accelerating their pursuit."}
];

const HUB = {
  "futbolfantasy-villarreal": {l:"FútbolFantasy - Villarreal transfer tracker", u:"https://www.futbolfantasy.com/laliga/equipos/villarreal/mercado-fichajes/verano-2026"},
  footballEspanaviaDiarioASLuisMilla: {l:"Football Espana (via Diario AS)", u:"https://www.football-espana.net/2026/05/08/villarreal-line-up-dani-parejo-replacement-this-summer"},
  footballEspanaDaniParejo: {l:"Football Espana", u:"https://www.football-espana.net/2026/05/21/villarreal-legend-announces-exit-from-club-after"}};

const LINKMAP = {
  "Ramón Terrats": ["futbolfantasy-villarreal"],
  "Diego Conde": ["futbolfantasy-villarreal"],
  "Jean Ives Valou": ["futbolfantasy-villarreal"],
  "Arnau Tenas": ["futbolfantasy-villarreal"],
  "Ilias Akhomach": ["futbolfantasy-villarreal"],
  "Pape Gueye": ["futbolfantasy-villarreal"],
  "Luis Milla": ["footballEspanaviaDiarioASLuisMilla"],
  "Dani Parejo": ["footballEspanaDaniParejo"]};
const WL_LINKMAP = {
  "Arnau Tenas": ["futbolfantasy-villarreal"],
  "Pape Gueye": ["futbolfantasy-villarreal"]
};

const PROSE = {
  heroH2: `A Champions League squad losing depth pieces`,
  heroLede: `Fresh off a third-place finish that secures Champions League football, <b>Íñigo Pérez</b>'s Villarreal have so far had a quieter, outgoing-focused window - permanent and loan exits for Terrats, Conde and Valou, with further departure interest circling Tenas, Akhomach and Gueye.`,
  metaRow: `<span>COACH: <b>Íñigo Pérez</b></span> <span>EUROPE: <b>Champions League</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Several exit stories remain live and unresolved heading into August.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 confirmed`, x: `No completed signings found as of 3 Aug 2026` },
  spendOut: { v: `~€2.5-3m+ confirmed`, x: `Terrats fee; Conde/Valou moved as loans` },
  methodLegend: ``
};
