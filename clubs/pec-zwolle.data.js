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

const CONFIRMED_IN = [
  {name:"Ibrahim Cissoko", sub:"AM/FW (Left)", club:"Toulouse FC (France)", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from the French Ligue 1 club to add attacking depth."},
  {name:"Tobias Sommer Sørensen", sub:"MF · Denmark", club:"Unattached (Denmark)", pos:"MF", fee:"~€0.7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed through mid-2029 as part of PEC's growing Danish contingent."},
  {name:"Elias Sørensen", sub:"FW (Right/Centre) · Norway", club:"Vålerenga (Norway)", pos:"FW", fee:"~€0.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Norwegian side Vålerenga."},
  {name:"Nick Viergever", sub:"DF (Centre)", club:"FC Utrecht", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free-agent centre-back who reportedly turned down foreign offers to begin his 19th Eredivisie season at PEC."},
  {name:"Thijs Oosting", sub:"MF (Centre)/FW (Left)", club:"FC Groningen", pos:"MF", fee:"~€0.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer from Groningen."},
  {name:"Tijs Velthuis", sub:"DF (Centre)", club:"Sparta Rotterdam", pos:"DF", fee:"~€0.2m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move from Sparta Rotterdam."},
  {name:"Tom de Graaff", sub:"GK", club:"FC Utrecht", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed to replace the injury-hit Jasper Schendelaar as first-choice goalkeeper."}
];
const CONFIRMED_OUT = [
  {name:"Thomas Buitink", sub:"FW (Centre/Right)", club:"Sparta Nijkerk", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer down to the amateur ranks."},
  {name:"Kaj de Rooij", sub:"FW/AM (Left)", club:"Real Valladolid (Spain)", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer to Spain's second tier."},
  {name:"Anselmo Garcia McNulty", sub:"DF (Centre/Left)", club:"1. FC Magdeburg (Germany)", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer to the German Bundesliga."},
  {name:"Jamiro Monteiro", sub:"MF/AM (Centre)", club:"NEC Nijmegen", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left on a free transfer at the end of his contract; confirmed by technical director Gerry Hamstra."}
];
const INCOMING = [
  {name:"Leandro Rousseau", sub:"23 · ST · Belgium", club:"Patro Eisden", pos:"ST", report:"28 Jul 2026", src:"VoetbalPrimeur.nl", tier:2, fee:"~€1m valuation", truth:60, prob:25, light:"o", trend:"flat", note:"PEC are one of four suitors (with Gent, Saint-Étienne and Hertha BSC) chasing the in-form Belgian striker, who'd compete with Koen Kostons up top."},
  {name:"Kévin Monzialo", sub:"ST", club:"FC Den Bosch", pos:"ST", report:"May 2026", src:"Mounir Boualin / Brabants Dagblad", tier:2, fee:"Foreign offers reportedly over €1m", truth:55, prob:25, light:"o", trend:"flat", note:"On PEC's forward shortlist after 18 goals and 14 assists in the Keuken Kampioen Divisie, but foreign clubs are also said to have tabled bids north of €1m."}
];
const OUTGOING = [
  {name:"Jasper Schendelaar", sub:"25 · GK · Netherlands", club:"PEC Zwolle", pos:"GK", report:"8 Jul 2026", src:"Voetbal International", tier:1, fee:"~€1.5m (Transfermarkt est.)", truth:70, prob:45, light:"y", trend:"flat", note:"Sparta Rotterdam's top keeper target following Joël Drommel's PSV return; PEC are willing to sell but no formal bid has landed yet."},
  {name:"Ryan Thomas", sub:"MF", club:"Open to bids (no confirmed suitor)", pos:"MF", report:"Club has indicated 'the door remains open' for a departure if an offer arrives, though no suitor is named yet.", src:"PEC Zwolle Nieuws", tier:3, fee:"N/A", truth:45, prob:15, light:"o", trend:"flat", note:"27 Jul 2026."}
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
  voetbalInternationalJasperSchendelaar: {l:"Voetbal International", u:"https://www.vi.nl/nieuws/sparta-wil-schendelaar-pec-in-afwachting-van-bod"},
  pECZwolleNieuwsRyanThomas: {l:"PEC Zwolle Nieuws", u:"https://peczwollenieuws.nl/"},
  fCUpdatenlIbrahimCissoko: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/pec/transfers"},
  voetbalPrimeurnlNickViergever: {l:"VoetbalPrimeur.nl", u:"https://www.voetbalprimeur.nl/clubs/pec-zwolle"}};

const LINKMAP = {
  "Leandro Rousseau": ["voetbalPrimeurnlLeandroRousseau"],
  "Kévin Monzialo": ["fCUpdatenlKvinMonzialo"],
  "Jasper Schendelaar": ["voetbalInternationalJasperSchendelaar"],
  "Ryan Thomas": ["pECZwolleNieuwsRyanThomas"],
  "Ibrahim Cissoko": ["fCUpdatenlIbrahimCissoko"],
  "Tobias Sommer Sørensen": ["fCUpdatenlIbrahimCissoko"],
  "Elias Sørensen": ["fCUpdatenlIbrahimCissoko"],
  "Nick Viergever": ["voetbalPrimeurnlNickViergever"],
  "Thijs Oosting": ["voetbalPrimeurnlNickViergever"],
  "Tijs Velthuis": ["fCUpdatenlIbrahimCissoko"],
  "Tom de Graaff": ["voetbalPrimeurnlNickViergever"],
  "Thomas Buitink": ["fCUpdatenlIbrahimCissoko"],
  "Kaj de Rooij": ["fCUpdatenlIbrahimCissoko"],
  "Anselmo Garcia McNulty": ["fCUpdatenlIbrahimCissoko"],
  "Jamiro Monteiro": ["voetbalPrimeurnlNickViergever"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `PEC Zwolle · 2026/27 Season`,
  heroLede: `Transfer window active. PEC Zwolle preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};