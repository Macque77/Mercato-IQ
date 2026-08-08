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
  {name:"Yanis Zouaoui", sub:"Unknown · Unknown · Unknown", club:"Nantes", pos:"Unknown", report:"Nantes on the brink of full agreement with Le Havre for Yanis Zouaoui", src:"Score.fr", tier:3, fee:"Undisclosed", truth:80, prob:75, light:"g", trend:"down", note:"6e recrue estivale for Nantes", lastSeen:"2026-08-08T07:40:33Z", baseProb:75},
  {name:"Elias Jelert", sub:"Unknown · Unknown · Latéral", club:"Galatasaray", pos:"Latéral", report:"Le Havre discusses loan of Elias Jelert to Galatasaray", src:"MercatoLive", tier:3, fee:"Loan", truth:65, prob:60, light:"g", trend:"flat", note:"", lastSeen:"2026-08-08T07:40:33Z", baseProb:60}
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
  mediaSportifJuniorMwanga: {l:"MediaSportif", u:"https://mediasportif.fr/"},
  madeInFOOTJuniorMwanga: {l:"MadeInFOOT", u:"https://news.google.com/rss/articles/CBMitAFBVV95cUxQcVhmTk9DNTBkOWpLVFdQTXRqT2VrTDZndW15OEwtQ1V5UGtUVk9SZFRBNnd4RkVBd1pJVnJPb01PYkpETjlxLUlybjlHeVdOS3Jad3lpQjlXODNGS3B5R2IzUkVwWlB3d1ltUzk4Mnowbi0tWHdydzdyNVF6cFR5SWR1Sm1qX25UWl9KaUZ4YjA1QWROZjFuMEM4N1A2QlFHM0h0WG1OV19mTjRoOE51bzh5Q3o"},
  scorefrYanisZouaoui: {l:"score.fr", u:"https://news.google.com/rss/articles/CBMitgFBVV95cUxOWEhCRTIySzBvU0xEMDd1a0xIRmFqTTY0dWxQNHVnSUdwUDB6Vi1aYnpETEd3clMtdl9JTTNCaVB2czJETXMzemJfZjJINm1qaGV1RTFUNFhxMG12UVVrTk5TbU00RjQ5NTFhWE50OHBRN2pOeWljaUlPN3NSdHpJTkIxUmdueVd2Z2R0OERkYVhxOERlNVM5YjdxdmFOSUlINllWYzRDdVZKREpPSThDRHNFSmhMdw"},
  madeInFOOTJuniorMwanga1: {l:"MadeInFOOT", u:"https://news.google.com/rss/articles/CBMitAFBVV95cUxQcVhmTk9DNTBkOWpLVFdQTXRqT2VrTDZndW15OEwtQ1V5UGtUVk9SZFRBNnd4RkVBd1pJVnJPb01PYkpETjlxLUlybjlHeVdOS3Jad3lpQjlXODNGS3B5R2IzUkVwWlB3d1ltUzk4Mnowbi0tWHdydzdyNVF6cFR5SWR1Sm1qX25UWl9KaUZ4YjA1QWROZjFuMEM4N1A2QlFHM0h0WG1OV19mTjRoOE51bzh5Q3o?oc=5"},
  scorefrYanisZouaoui1: {l:"Score.fr", u:"https://news.google.com/rss/articles/CBMitgFBVV95cUxOWEhCRTIySzBvU0xEMDd1a0xIRmFqTTY0dWxQNHVnSUdwUDB6Vi1aYnpETEd3clMtdl9JTTNCaVB2czJETXMzemJfZjJINm1qaGV1RTFUNFhxMG12UVVrTk5TbU40RjQ5NTFhWE50OHBRN2pOeWljaUlPN3NSdHpJTkIxUmdueVd2Z2R0OERkYVhxOERlNVM5YjdxdmFOSUlINllWYzRDdVZKREpPSThDRHNFSmhMdw?oc=5"},
  mercatoLiveEliasJelert: {l:"MercatoLive", u:"https://news.google.com/rss/articles/CBMipAFBVV95cUxPaTN4QndqSGZuZzVLQk9vV2RPaXVfa0VNaUVRY0V0djZRZTZoa2xxSU5vamc4X2hmOW9CTm92MWFmLXlqZU5IUk9Qbm9ueE5XNl9vRTlsTXl3cXppS2p4M2g2NVNiaWlBbUttaFBJTmxPNVRqR2FqSUFiNXg4bWdPZ1F1SnJDV01vUW9sZFRCX2t3TXFrek82LW1NYzdKeTV2WUpTcw?oc=5"}};

const LINKMAP = {
  "Josh Maja": ["gffn-lehavre", "lEquipeJoshMaja"],
  "Amir Richardson": ["gffn-lehavre"],
  "Arouna Sangante": ["gffn-lehavre"],
  "Timothée Pembélé": ["gffn-lehavre"],
  "Yanis Zouaoui": ["lEquipeYanisZouaoui", "lEquipeYanisZouaoui1", "scorefrYanisZouaoui", "scorefrYanisZouaoui1"],
  "Kaito Mizuta": ["footNationalKaitoMizuta"],
  "Junior Mwanga": ["mediaSportifJuniorMwanga", "madeInFOOTJuniorMwanga", "madeInFOOTJuniorMwanga1"],
  "Elias Jelert": ["mercatoLiveEliasJelert"]};
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
