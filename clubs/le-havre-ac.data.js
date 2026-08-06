/* ============================================================
   MERCATO IQ · CLUB DATA · LE HAVRE AC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Le Havre AC",
  mono: "HAC",
  slug: "le-havre-ac",
  primary: "#4169E1",
  primaryBright: "#7FA8FF",
  primaryDeep: "#001F54",
  primaryRgb: "65,105,225",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Didier Digard (contract extended through 2027, confirmed 11 Jun 2026)",
  dof: "Demba Ba (Sporting Director, appointed 19 Jun 2026, succeeding Mathieu Bodmer)",
  europe: "None (2026/27)",
  finish: "14th Ligue 1 (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/le-havre/"],
  queries: ["Le Havre AC transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Le Havre AC"
};

const CONFIRMED_IN = [
  {name:"Josh Maja", sub:"27 · ST · Nigeria", to:"free transfer from West Bromwich Albion", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 Aug 2026, a free-agent striker signing to lead the line."},
  {name:"Amir Richardson", sub:"23 · MF · Morocco", to:"loan return from Fiorentina", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 18 Jul 2026 - the academy product returns on loan to the club that developed him."},
  {name:"Kaito Mizuta", sub:"Attacking midfielder, first summer signing", club:"Undisclosed previous club", pos:"CAM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a 3-year deal, officialised as Le Havre's first recruit of the close season."},
  {name:"Junior Mwanga", sub:"23 · France · DM", club:"Strasbourg", pos:"DM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported as officially completed, with French outlets talking up a long contract. Only secondary French outlets have carried the detail so far, so treat the terms as unconfirmed."}
];

const CONFIRMED_OUT = [
  {name:"Arouna Sangante", sub:"22 · CB · France", club:"Sevilla FC", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 16 Jun 2026 on a five-year deal - a significant sale to La Liga."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Timothée Pembélé", sub:"24 · LB · France", club:"Sunderland", pos:"LB", report:"15 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:60, prob:52, light:"g", trend:"up", note:"Sunderland are reported to be set to complete a permanent deal for the defender after his loan spell.", lastSeen:"2026-08-04T19:10:50Z", baseProb:52},
  {name:"Yanis Zouaoui", sub:"28 · Algeria · LB", club:"Nantes", pos:"LB", report:"Nantes are on the brink of a full agreement with Le Havre for the left-back, who has a year left on his contract in Normandy. Talks are described as very advanced and the Canaries do not intend to stop there.", src:"L'Equipe", tier:2, fee:"Undisclosed", truth:80, prob:70, light:"g", trend:"down", note:"Originally an L'Equipe story since relayed by several French outlets. The fee has not been reported.", lastSeen:"2026-08-06T10:49:40Z", baseProb:70}
];

const RISERS = [
  {ar:"⬆", t:"<b>Demba Ba's mercato begins</b>: new Sporting Director lands free-agent striker Josh Maja as his first move."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Sangante sold to Sevilla</b>: a five-year deal takes the young centre-back to La Liga."}
];

const NEW = [
  {ar:"✦", t:"Former Chelsea striker Demba Ba takes charge of Le Havre's transfer strategy as Sporting Director, arriving with a trusted recruitment team from USL Dunkerque, backed by an €18m capital injection from ownership."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [
  {name:"Timothée Pembélé", club:"Le Havre AC", pos:"LB", dir:"out", age:"~3 weeks", tier:2, note:"Sunderland reported set to make his loan move permanent."}
];

const HUB = {
  "gffn-lehavre": {l:"Get French Football News · Le Havre", u:"https://www.getfootballnewsfrance.com/tag/le-havre/"},
  lEquipeYanisZouaoui: {l:"L'Equipe", u:"https://www.lequipe.fr"},
  footNationalKaitoMizuta: {l:"Foot National", u:"https://www.msn.com/fr-fr/sport/football/le-havre-tient-sa-premi%C3%A8re-recrue-de-l-%C3%A9t%C3%A9/ar-AA27pbz8"},
  lEquipeJoshMaja: {l:"L'Equipe", u:"https://www.lequipe.fr/Football/Actualites/Libre-de-tout-contrat-josh-maja-revient-en-ligue-1-et-rejoint-le-havre/1708263"},
  lEquipeYanisZouaoui1: {l:"L'Equipe", u:"https://www.lequipe.fr/Football/"},
  mediaSportifJuniorMwanga: {l:"MediaSportif", u:"https://mediasportif.fr/"}};

const LINKMAP = {
  "Josh Maja": ["gffn-lehavre", "lEquipeJoshMaja"],
  "Amir Richardson": ["gffn-lehavre"],
  "Arouna Sangante": ["gffn-lehavre"],
  "Timothée Pembélé": ["gffn-lehavre"],
  "Yanis Zouaoui": ["lEquipeYanisZouaoui", "lEquipeYanisZouaoui1"],
  "Kaito Mizuta": ["footNationalKaitoMizuta"],
  "Junior Mwanga": ["mediaSportifJuniorMwanga"]};
const WL_LINKMAP = {
  "Timothée Pembélé": ["gffn-lehavre"]
};

const PROSE = {
  heroH2: `Demba Ba's mercato: a fresh striker in, a defender banked to Sevilla`,
  heroLede: `Le Havre's transfer strategy is now in the hands of former Chelsea striker <b>Demba Ba</b>, appointed Sporting Director in June with an explicit brief: keep HAC in Ligue 1 for good while preserving the club's youth development identity. <b>Josh Maja</b> arrives as a free-agent striker, <b>Arouna Sangante</b>'s sale to Sevilla brings in funds, and <b>Timothée Pembélé</b> looks set to complete a permanent move to Sunderland.`,
  metaRow: `<span>DECISION-MAKER: <b>Demba Ba</b> (Sporting Director)</span> <span>HEAD COACH: <b>Didier Digard</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">14<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In/Out</div><div class="v">2 / 1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Pembélé's permanent move to Sunderland reported as close to completion.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Free + loan deals`, x: `Maja arrives on a free transfer; Richardson returns on loan.` },
  spendOut: { v: `Sangante sale banked`, x: `A five-year deal to Sevilla is the standout departure.` },
  methodLegend: ``
};
