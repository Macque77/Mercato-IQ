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

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Lassine Sinayoko", sub:"26 · ST · Mali", club:"Paris FC", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed 21 Jul 2026 on a three-year deal, after skipping training to force the move through."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Kévin Danois", sub:"26 · CB · France", club:"Multiple (unspecified)", pos:"CB", report:"Jun 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:55, prob:34, light:"y", trend:"flat", note:"New Sporting Director David Wantier is reported to be targeting over €30m combined from sales of Danois and Sinayoko to fund the rebuild under Will Still."}
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
  "gffn-auxerre": {l:"Get French Football News · Auxerre", u:"https://www.getfootballnewsfrance.com/tag/auxerre/"}
};

const LINKMAP = {
  "Lassine Sinayoko": ["gffn-auxerre"],
  "Kévin Danois": ["gffn-auxerre"],
  "Mathys Detourbet": ["gffn-auxerre"]
};
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
