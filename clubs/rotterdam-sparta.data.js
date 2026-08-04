/* ============================================================
   MERCATO IQ · CLUB DATA · SPARTA ROTTERDAM · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Sparta Rotterdam", mono: "SR", slug: "rotterdam-sparta",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
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
  queries: ["rotterdam-sparta transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Pelle Clement", sub:"MF · Netherlands", club:"Sparta Rotterdam", pos:"MF", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left Sparta's midfield on a free transfer to join FC Groningen, deepening the club's need for reinforcements."},
  {name:"Joshua Kitolano", sub:"MF · Netherlands", club:"Sparta Rotterdam", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed for Norwegian side Bodø/Glimt, another midfield exit Sparta have had to replace."}
];
const INCOMING = [
  {name:"Jasper Schendelaar", sub:"25 · GK · Netherlands", club:"PEC Zwolle", pos:"GK", report:"8 Jul 2026", src:"Voetbal International", tier:1, fee:"~€1.5m (Transfermarkt est.)", truth:70, prob:45, light:"y", trend:"flat", note:"Identified as Sparta's No.1 goalkeeper target to challenge Filip Bednarek; talks ongoing but technical director Gerard Nijkamp says the clubs remain 'some distance apart'."},
  {name:"Dirk Proper", sub:"24 · AM · Netherlands", club:"NEC Nijmegen", pos:"AM", report:"26 Jul 2026", src:"Voetbal International", tier:1, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"Sparta lack a genuine No.10 and Nijkamp confirmed Proper has 'certainly been discussed' as an option, though no bid is in yet."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Rotterdam-Sparta Official", u:"#"},
  voetbalInternationalJasperSchendelaar: {l:"Voetbal International", u:"https://www.vi.nl/nieuws/sparta-wil-schendelaar-pec-in-afwachting-van-bod"},
  voetbalPrimeurnlVIDirkProper: {l:"VoetbalPrimeur.nl (VI)", u:"https://www.voetbalprimeur.nl/nieuws/2116141/sparta-zoekt-nieuwe-spelmaker-en-keeper.html"},
  footballTransferscomPelleClement: {l:"FootballTransfers.com", u:"https://www.footballtransfers.com/nl/transfernieuws/nl-eredivisie/2026/07/sparta-rotterdam-moet-middenveld-om-deze-reden-voorzien-van-transfers"}};

const LINKMAP = {
  "Jasper Schendelaar": ["voetbalInternationalJasperSchendelaar"],
  "Dirk Proper": ["voetbalPrimeurnlVIDirkProper"],
  "Pelle Clement": ["footballTransferscomPelleClement"],
  "Joshua Kitolano": ["footballTransferscomPelleClement"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Sparta Rotterdam · 2026/27 Season`,
  heroLede: `Transfer window active. Sparta Rotterdam preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};