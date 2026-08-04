/* ============================================================
   MERCATO IQ · CLUB DATA · PEC ZWOLLE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "PEC Zwolle", mono: "PZ", slug: "pec-zwolle",
  primary: "#0057A8", primaryBright: "#5CA9FF", primaryDeep: "#00335F",
  primaryRgb: "0,87,168",
  breadcrumb: ["Netherlands","Eredivisie"]
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
  queries: ["pec-zwolle transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Leandro Rousseau", sub:"23 · ST · Belgium", club:"Patro Eisden", pos:"ST", report:"28 Jul 2026", src:"VoetbalPrimeur.nl", tier:2, fee:"~€1m valuation", truth:60, prob:25, light:"o", trend:"flat", note:"PEC are one of four suitors (with Gent, Saint-Étienne and Hertha BSC) chasing the in-form Belgian striker, who'd compete with Koen Kostons up top."},
  {name:"Kévin Monzialo", sub:"ST", club:"FC Den Bosch", pos:"ST", report:"May 2026", src:"Mounir Boualin / Brabants Dagblad", tier:2, fee:"Foreign offers reportedly over €1m", truth:55, prob:25, light:"o", trend:"flat", note:"On PEC's forward shortlist after 18 goals and 14 assists in the Keuken Kampioen Divisie, but foreign clubs are also said to have tabled bids north of €1m."}
];
const OUTGOING = [
  {name:"Jasper Schendelaar", sub:"25 · GK · Netherlands", club:"PEC Zwolle", pos:"GK", report:"8 Jul 2026", src:"Voetbal International", tier:1, fee:"~€1.5m (Transfermarkt est.)", truth:70, prob:45, light:"y", trend:"flat", note:"Sparta Rotterdam's top keeper target following Joël Drommel's PSV return; PEC are willing to sell but no formal bid has landed yet."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Pec-Zwolle Official", u:"#"},
  voetbalPrimeurnlLeandroRousseau: {l:"VoetbalPrimeur.nl", u:"https://www.voetbalprimeur.nl/nieuws/2116775/pec-target-rousseau-geniet-interesse-uit-vier-landen.html"},
  fCUpdatenlKvinMonzialo: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/05/de-transferzomer-van-pec-zwolle-grote-leegloop-dwingt-gerry-hamstra-tot-actie"},
  voetbalInternationalJasperSchendelaar: {l:"Voetbal International", u:"https://www.vi.nl/nieuws/sparta-wil-schendelaar-pec-in-afwachting-van-bod"}};

const LINKMAP = {
  "Leandro Rousseau": ["voetbalPrimeurnlLeandroRousseau"],
  "Kévin Monzialo": ["fCUpdatenlKvinMonzialo"],
  "Jasper Schendelaar": ["voetbalInternationalJasperSchendelaar"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `PEC Zwolle · 2026/27 Season`,
  heroLede: `Transfer window active. PEC Zwolle preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};