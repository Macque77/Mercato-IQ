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

const CONFIRMED_IN = [
  {name:"Nick Verschuren", sub:"Ajax academy graduate, made captain material", club:"Ajax", pos:"DF", fee:"€0.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"22-year-old centre-back had 12 years in Ajax's academy and a loan at Volendam but never a first-team appearance; Sparta bought out his contract (was until 2028) and signed him to 2030. Announced 30 June 2026."},
  {name:"Robin van Cruijsen", sub:"New '10' after Volendam's relegation", club:"FC Volendam", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Attacking midfielder joined to fill Sparta's long-stated need for a playmaker; made his first appearance in a friendly vs MSV Duisburg. Announced 1 August 2026."},
  {name:"Bas Kuipers", sub:"Reunion with coach Rogier Meijer", club:"FC Twente", pos:"DF", fee:"€0.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"31-year-old left-back signed to mid-2028; described as an 'old acquaintance' of coach Rogier Meijer."},
  {name:"Luc Nieuwenhuijs", sub:"Confirmed incoming transfer", club:"NEC Nijmegen", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed per club/league transfer records."}
];
const CONFIRMED_OUT = [
  {name:"Pelle Clement", sub:"MF · Netherlands", club:"Sparta Rotterdam", pos:"MF", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left Sparta's midfield on a free transfer to join FC Groningen, deepening the club's need for reinforcements."},
  {name:"Joshua Kitolano", sub:"MF · Netherlands", club:"Sparta Rotterdam", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed for Norwegian side Bodø/Glimt, another midfield exit Sparta have had to replace."},
  {name:"Tobias Lauritsen", sub:"Serie B move to join Lorenzo Insigne", club:"Sampdoria", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"28-year-old Norwegian striker leaves after 4 seasons (52 goals, 22 assists in 144 games) on a free transfer following medical in Italy. Announced 17 July 2026."},
  {name:"Tijs Velthuis", sub:"Captain sold to PEC Zwolle", club:"PEC Zwolle", pos:"DF", fee:"€0.2m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed sale per club/league transfer records."},
  {name:"Lance Duijvestijn", sub:"Captain moves to Germany", club:"Darmstadt 98", pos:"MF/AM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed per club/league transfer records."},
  {name:"Jaïr Haakmat", sub:"Free transfer within Eredivisie", club:"FC Volendam", pos:"MF/W", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed per club/league transfer records."},
  {name:"Youri Schoonderwaldt", sub:"Goalkeeper departs", club:"VVV-Venlo", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed per club/league transfer records."}
];
const INCOMING = [
  {name:"Jasper Schendelaar", sub:"25 · GK · Netherlands", club:"PEC Zwolle", pos:"GK", report:"8 Jul 2026", src:"Voetbal International", tier:1, fee:"~€1.5m (Transfermarkt est.)", truth:70, prob:45, light:"y", trend:"flat", note:"Identified as Sparta's No.1 goalkeeper target to challenge Filip Bednarek; talks ongoing but technical director Gerard Nijkamp says the clubs remain 'some distance apart'.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Dirk Proper", sub:"24 · AM · Netherlands", club:"NEC Nijmegen", pos:"AM", report:"26 Jul 2026", src:"Voetbal International", tier:1, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"Sparta lack a genuine No.10 and Nijkamp confirmed Proper has 'certainly been discussed' as an option, though no bid is in yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];
const OUTGOING = [
  {name:"Marvin Young", sub:"Wants to leave amid domestic/foreign interest", club:"Interest reported, no club confirmed", pos:"FW/MF", report:"Young has indicated he wants to depart Sparta this summer, with reported interest from clubs both in the Netherlands and abroad.", src:"Sjoerd Keizer, VI", tier:1, fee:"Undisclosed", truth:60, prob:40, light:"y", trend:"flat", note:"No concrete offer confirmed yet; technical director Nijkamp says the club will act on any workable offer.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Shunsuke Mito", sub:"Seeking a move abroad", club:"Foreign interest reported, no club confirmed", pos:"MF", report:"Mito is also reported to be seeking an exit, with foreign clubs said to be interested; Sparta's technical director says a departure could open funds for further incomings.", src:"Sjoerd Keizer, VI", tier:1, fee:"Undisclosed", truth:60, prob:35, light:"y", trend:"flat", note:"Framed by VI as part of Sparta's push for a 'record sale' this window.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];
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
  footballTransferscomPelleClement: {l:"FootballTransfers.com", u:"https://www.footballtransfers.com/nl/transfernieuws/nl-eredivisie/2026/07/sparta-rotterdam-moet-middenveld-om-deze-reden-voorzien-van-transfers"},
  vInlMarvinYoung: {l:"VI.nl", u:"https://www.vi.nl/pro/het-verlanglijstje-van-sparta-een-10-schendelaar-en-recordverkoop"},
  vInlNickVerschuren: {l:"VI.nl", u:"https://www.vi.nl/nieuws/sparta-pikt-defensieve-versterking-op-bij-ajax"},
  vInlRobinvanCruijsen: {l:"VI.nl", u:"https://www.vi.nl/nieuws/van-cruijsen-laat-zich-voor-het-eerst-zien-bij-sparta-intelligente-speler"},
  fCUpdatenlBasKuipers: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/sparta-rotterdam/transfers"},
  vInlTobiasLauritsen: {l:"VI.nl", u:"https://www.vi.nl/nieuws/lauritsen-verzilvert-transfervrije-status-en-wordt-ploeggenoot-van-insigne"}};

const LINKMAP = {
  "Jasper Schendelaar": ["voetbalInternationalJasperSchendelaar"],
  "Dirk Proper": ["voetbalPrimeurnlVIDirkProper"],
  "Pelle Clement": ["footballTransferscomPelleClement", "fCUpdatenlBasKuipers"],
  "Joshua Kitolano": ["footballTransferscomPelleClement", "fCUpdatenlBasKuipers"],
  "Marvin Young": ["vInlMarvinYoung"],
  "Shunsuke Mito": ["vInlMarvinYoung"],
  "Nick Verschuren": ["vInlNickVerschuren"],
  "Robin van Cruijsen": ["vInlRobinvanCruijsen"],
  "Bas Kuipers": ["fCUpdatenlBasKuipers"],
  "Luc Nieuwenhuijs": ["fCUpdatenlBasKuipers"],
  "Tobias Lauritsen": ["vInlTobiasLauritsen"],
  "Tijs Velthuis": ["fCUpdatenlBasKuipers"],
  "Lance Duijvestijn": ["fCUpdatenlBasKuipers"],
  "Jaïr Haakmat": ["fCUpdatenlBasKuipers"],
  "Youri Schoonderwaldt": ["fCUpdatenlBasKuipers"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Sparta Rotterdam · 2026/27 Season`,
  heroLede: `Transfer window active. Sparta Rotterdam preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};