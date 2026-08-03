/* ============================================================
   MERCATO IQ · CLUB DATA · PARIS FC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Paris FC", mono: "PFC", slug: "paris-fc",
  primary: "#001E62", primaryBright: "#3D6BC4", primaryDeep: "#000E33",
  primaryRgb: "0,30,98",
  breadcrumb: ["France","Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Liam Rosenior (appointed 30 Jun 2026, succeeding Antoine Kombouaré - his second job of the year after a turbulent, brief Chelsea spell)",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "11th Ligue 1 (2025/26)",
  owner: "Agache Sport (Arnault family, 52.4% stake)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/paris-fc/"],
  queries: ["Paris FC transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Paris FC"
};

const CONFIRMED_IN = [
  {name:"Lassine Sinayoko", sub:"26 · ST · Mali", to:"permanent from AJ Auxerre", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 21 Jul 2026 on a three-year deal, after skipping Auxerre training to push the move through."},
  {name:"Pablo Pagis", sub:"25 · FW · France", to:"permanent from FC Lorient", fee:"€15m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported finalised 15 Jul 2026; the club's biggest outlay of the window so far."},
  {name:"Andria Kvirikadze", sub:"20 · CM · Georgia", to:"permanent from Dinamo Tbilisi academy", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 Jul 2026, a development signing from the Georgian top flight."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"James Tavernier", sub:"34 · RB · England", club:"Free agent (ex-Rangers)", pos:"RB", report:"1 Aug 2026", src:"Get French Football News", tier:2, fee:"Free transfer", truth:50, prob:26, light:"o", trend:"flat", note:"Paris FC are one of two French suitors (with Nice) for the veteran Rangers captain, now a free agent."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Pagis deal from Lorient finalised</b>: €15m outlay is Paris FC's marquee signing of the window."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Liam Rosenior's whirlwind year continues: sacked by Chelsea in April, he's now in the Paris FC dugout as of late June, and wants to keep hold of Ilan Kebbal despite Coventry City interest."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [
  {name:"James Tavernier", club:"Free agent", pos:"RB", dir:"in", age:"~2 days", tier:2, note:"Also being pursued by OGC Nice."}
];

const HUB = {
  "gffn-parisfc": {l:"Get French Football News · Paris FC", u:"https://www.getfootballnewsfrance.com/tag/paris-fc/"}
};

const LINKMAP = {
  "Lassine Sinayoko": ["gffn-parisfc"],
  "Pablo Pagis": ["gffn-parisfc"],
  "Andria Kvirikadze": ["gffn-parisfc"],
  "James Tavernier": ["gffn-parisfc"]
};
const WL_LINKMAP = {
  "James Tavernier": ["gffn-parisfc"]
};

const PROSE = {
  heroH2: `Rosenior's reset: three signings in, a Rangers legend on the radar`,
  heroLede: `Paris FC's dugout carousel has finally settled - for now - on <b>Liam Rosenior</b>, whose 2026 has taken him from Strasbourg to Chelsea to the sack to the French capital inside eight months. On the pitch, the club has been busy: <b>Lassine Sinayoko</b> arrives from Auxerre, <b>Pablo Pagis</b> completes a €15m move from Lorient, and Georgian prospect <b>Andria Kvirikadze</b> has joined from Dinamo Tbilisi's academy.`,
  metaRow: `<span>DECISION-MAKER: <b>Agache Sport / Arnault family</b></span> <span>HEAD COACH: <b>Liam Rosenior</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">11<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Rosenior has publicly stated he wants to retain midfielder Ilan Kebbal despite interest from Coventry City.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€15m+ committed`, x: `Pagis is the headline fee; Sinayoko and Kvirikadze add further squad depth.` },
  spendOut: { v: `None reported`, x: `No confirmed departures this window.` },
  methodLegend: ``
};
