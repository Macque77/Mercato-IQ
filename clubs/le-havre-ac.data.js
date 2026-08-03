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
  {name:"Amir Richardson", sub:"23 · MF · Morocco", to:"loan return from Fiorentina", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 18 Jul 2026 - the academy product returns on loan to the club that developed him."}
];

const CONFIRMED_OUT = [
  {name:"Arouna Sangante", sub:"22 · CB · France", club:"Sevilla FC", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 16 Jun 2026 on a five-year deal - a significant sale to La Liga."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Timothée Pembélé", sub:"24 · LB · France", club:"Sunderland", pos:"LB", report:"15 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:60, prob:52, light:"g", trend:"up", note:"Sunderland are reported to be set to complete a permanent deal for the defender after his loan spell."}
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
  "gffn-lehavre": {l:"Get French Football News · Le Havre", u:"https://www.getfootballnewsfrance.com/tag/le-havre/"}
};

const LINKMAP = {
  "Josh Maja": ["gffn-lehavre"],
  "Amir Richardson": ["gffn-lehavre"],
  "Arouna Sangante": ["gffn-lehavre"],
  "Timothée Pembélé": ["gffn-lehavre"]
};
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
