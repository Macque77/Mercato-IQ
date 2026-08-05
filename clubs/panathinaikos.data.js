/* ============================================================
   MERCATO IQ · CLUB DATA · PANATHINAIKOS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Panathinaikos", mono: "P", slug: "panathinaikos",
  primary: "#00843D", primaryBright: "#3FCB8C", primaryDeep: "#00532A",
  primaryRgb: "0,132,61",
  breadcrumb: ["Greece","Super League"]
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
  queries: ["panathinaikos transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Stefan de Vrij", sub:"34 · CB · Netherlands", club:"Inter Milan", pos:"CB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Two-year deal (~€3m/season net) after his Inter contract expired; beat out Benfica and Olympiacos for his signature."},
  {name:"Kings Kangwa", sub:"27 · MF · Zambia", club:"Hapoel Beer Sheva", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move on a four-year contract to 2030 after 29 goals and 20 assists in two seasons in Israel."},
  {name:"Etienne Camara", sub:"22 · DM · France", club:"Sporting Charleroi", pos:"DM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club's first summer signing, beating Olympiacos to the 22-year-old defensive midfielder."}
];
const CONFIRMED_OUT = [
  {name:"Karol Świderski", sub:"FW · Poland", club:"Widzew Łódź", pos:"FW", fee:"~€1m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left after being told he was not part of next season's plans."}
];
const INCOMING = [
  {name:"Maksim Borisko", sub:"26 · GK · Russia", club:"Baltika Kaliningrad", pos:"GK", report:"8 Jun 2026", src:"Vanya Karpov (via Gazzetta.gr)", tier:2, fee:"~€2.1m", truth:40, prob:25, light:"o", trend:"flat", note:"Russian media links him as a Nistrup-approved alternative to Kotarsky; Trabzonspor also monitoring but player reportedly favours Greece.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Antoine Makoumbou", sub:"MF · Congo", club:"Samsunspor", pos:"MF", report:"10 Jun 2026", src:"Turkish media (via Foxbet.gr)", tier:3, fee:"Undisclosed", truth:30, prob:15, light:"o", trend:"flat", note:"Panathinaikos and PAOK both linked; his contract runs to 2029, which complicates a move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Panathinaikos Official", u:"#"},
  gazzettagrMaksimBorisko: {l:"Gazzetta.gr", u:"https://www.gazzetta.gr/football/superleague/2545562/panathinaikos-o-mporisko-sti-lista-toy-nistroyp"},
  foxbetgrAntoineMakoumbou: {l:"Foxbet.gr", u:"https://www.foxbet.gr/309132/metagrafes-panathinaikos"},
  pAOgrStefandeVrij: {l:"PAO.gr", u:"https://www.pao.gr/en/category/transfer/"},
  pAOgrKingsKangwa: {l:"PAO.gr", u:"https://www.pao.gr/en/transfer/kings-kangwa-joins-panathinaikos/"},
  hellazeuEtienneCamara: {l:"Hellaz.eu", u:"https://hellaz.eu/portal/panathinaikos-sign-french-midfielder-etienne-camara-club-s-first-summer-transfer-595751.html"},
  footballTransferscomKarolwiderski: {l:"FootballTransfers.com", u:"https://www.footballtransfers.com/en/players/karol-swiderski"}};

const LINKMAP = {
  "Maksim Borisko": ["gazzettagrMaksimBorisko"],
  "Antoine Makoumbou": ["foxbetgrAntoineMakoumbou"],
  "Stefan de Vrij": ["pAOgrStefandeVrij"],
  "Kings Kangwa": ["pAOgrKingsKangwa"],
  "Etienne Camara": ["hellazeuEtienneCamara"],
  "Karol Świderski": ["footballTransferscomKarolwiderski"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Panathinaikos · 2026/27 Season`,
  heroLede: `Transfer window active. Panathinaikos preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};