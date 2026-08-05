/* ============================================================
   MERCATO IQ · CLUB DATA · AJ AUXERRE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AJ Auxerre",
  mono: "AJA",
  slug: "aj-auxerre",
  primary: "#003D7C",
  primaryBright: "#4E8FDE",
  primaryDeep: "#00203F",
  primaryRgb: "0,61,124",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Will Still (appointed 4 Jun 2026, succeeding Christophe Pélissier despite Pélissier securing back-to-back Ligue 1 survivals)",
  dof: "David Wantier (Sporting Director)",
  europe: "None (2026/27)",
  finish: "15th Ligue 1 (2025/26)",
  owner: "James Zhou",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/auxerre/"],
  queries: ["AJ Auxerre transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AJ Auxerre"
};

const CONFIRMED_IN = [
  {name:"Sekou Fofana", sub:"Franco-Ivorian left-back signed from Lausanne-Sport", club:"Lausanne-Sport", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a four-year deal after 50 appearances for Lausanne since 2021."},
  {name:"Romain Faivre", sub:"Loan spell renewed for a second consecutive season", club:"AFC Bournemouth", pos:"CAM", fee:"Loan, no purchase option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Bournemouth and Auxerre agreed a fresh season-long loan without a buy option, extending Faivre's stay after his 2025-26 loan spell."}
];

const CONFIRMED_OUT = [
  {name:"Lassine Sinayoko", sub:"26 · ST · Mali", club:"Paris FC", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed 21 Jul 2026 on a three-year deal, after skipping training to force the move through."}
];

const INCOMING = [
  {name:"Tim Meyer", sub:"Swiss revelation targeted as defensive midfield reinforcement", club:"Grasshopper Zurich", pos:"CDM", report:"Auxerre have moved into the acquisition phase for the Swiss defensive midfielder, who impressed for Grasshoppers last season.", src:"TOP Mercato", tier:3, fee:"", truth:55, prob:40, light:"y", trend:"flat", note:"Early-stage interest reported by an aggregator outlet; no formal bid confirmed yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];

const OUTGOING = [
  {name:"Kévin Danois", sub:"26 · CB · France", club:"Multiple (unspecified)", pos:"CB", report:"Jun 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:55, prob:34, light:"y", trend:"flat", note:"New Sporting Director David Wantier is reported to be targeting over €30m combined from sales of Danois and Sinayoko to fund the rebuild under Will Still.", lastSeen:"2026-08-04T19:10:50Z", baseProb:34},
  {name:"Kevin Danois", sub:"West Ham and Newcastle monitoring, Hull City bid rejected", club:"West Ham United / Newcastle United (interest)", pos:"CM", report:"Two Premier League clubs are watching the 22-year-old midfielder closely after Hull City's ~€15m offer was seen as below Auxerre's €20m valuation.", src:"Les Transferts", tier:2, fee:"", truth:60, prob:35, light:"y", trend:"flat", note:"Danois is contracted through June 2029, giving Auxerre strong leverage; a departure this window looks unlikely unless valuation is met.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const RISERS = [];

const FALLERS = [
  {ar:"⬇", t:"<b>Sinayoko exits for Paris FC</b>: forced move completed after the striker skipped training to push the exit through."}
];

const NEW = [
  {ar:"✦", t:"A surprise change in the dugout: <b>Will Still</b> replaces Christophe Pélissier, who had just delivered a second consecutive Ligue 1 survival, as owner James Zhou opts for a change in direction."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [
  {name:"Mathys Detourbet", club:"AJ Auxerre", pos:"W", dir:"out", age:"~7mo", tier:2, note:"Manchester City have been credited with long-standing interest in the teenage winger."}
];

const HUB = {
  "gffn-auxerre": {l:"Get French Football News · Auxerre", u:"https://www.getfootballnewsfrance.com/tag/auxerre/"},
  tOPMercatoTimMeyer: {l:"TOP Mercato", u:"https://www.msn.com/fr-fr/sport/football/mercato-auxerre-passe-%C3%A0-l-action-pour-la-r%C3%A9v%C3%A9lation-suisse-tim-meyer/ar-AA29bvFJ"},
  lesTransfertsKevinDanois: {l:"Les Transferts", u:"https://www.les-transferts.com/rumeurs-transferts/aj-auxerre-deux-clubs-anglais-viseraient-kevin-danois/"},
  lquipeSekouFofana: {l:"L'Équipe", u:"https://www.lequipe.fr/Football/Actualites/Transferts-venant-de-lausanne-sport-le-lateral-gauche-sekou-fofana-va-signer-a-auxerre/1702581"},
  lquipeRomainFaivre: {l:"L'Équipe", u:"https://www.lequipe.fr/Football/Actualites/Mercato-romain-faivre-repart-sur-un-pret-avec-l-aj-auxerre/1700937"},
  maliactuLassineSinayoko: {l:"Maliactu", u:"https://maliactu.net/mercato-lassine-sinayoko-quitte-auxerre-et-sengage-pour-trois-ans-avec-le-paris-fc/"}};

const LINKMAP = {
  "Lassine Sinayoko": ["gffn-auxerre", "maliactuLassineSinayoko"],
  "Kévin Danois": ["gffn-auxerre"],
  "Mathys Detourbet": ["gffn-auxerre"],
  "Tim Meyer": ["tOPMercatoTimMeyer"],
  "Kevin Danois": ["lesTransfertsKevinDanois"],
  "Sekou Fofana": ["lquipeSekouFofana"],
  "Romain Faivre": ["lquipeRomainFaivre"]};
const WL_LINKMAP = {
  "Mathys Detourbet": ["gffn-auxerre"]
};

const PROSE = {
  heroH2: `Still's rebuild: sell to fund, after an unexpected change at the top`,
  heroLede: `Auxerre made the surprising choice to part ways with <b>Christophe Pélissier</b>, who had just secured back-to-back Ligue 1 survivals, in favour of <b>Will Still</b> - available since his Southampton dismissal. New Sporting Director <b>David Wantier</b> is reported to be targeting over €30m from player sales to fund the new manager's rebuild, with <b>Lassine Sinayoko</b> already sold to Paris FC and <b>Kévin Danois</b> expected to follow.`,
  metaRow: `<span>DECISION-MAKER: <b>James Zhou</b> (Owner)</span> <span>HEAD COACH: <b>Will Still</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">15<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Danois' sale is reported as part of the club's summer plan but not yet finalised.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `The Wantier plan is explicitly to sell first and reinvest - Danois is next in line after Sinayoko.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `None reported`, x: `No incoming deals confirmed while the club prioritises player sales.` },
  spendOut: { v: `€30m+ targeted`, x: `Sinayoko's sale is banked; Danois is reported as the next planned departure.` },
  methodLegend: ``
};
