/* ============================================================
   MERCATO IQ · CLUB DATA · TOULOUSE FC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Toulouse FC", mono: "TFC", slug: "toulouse-fc",
  primary: "#5B2A70", primaryBright: "#9A5FC0", primaryDeep: "#331942",
  primaryRgb: "91,42,112",
  breadcrumb: ["France","Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Jens Berthel Askou (appointed 21 May 2026 from Motherwell, succeeding Carles Martínez Novell, who left for Bayer Leverkusen)",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "10th Ligue 1 (2025/26)",
  owner: "RedBird Capital Partners (85% stake since Jul 2020); Olivier Cloarec (President, from Jul 2025)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/toulouse/"],
  queries: ["Toulouse FC transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Toulouse FC"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Charlie Cresswell", sub:"23 · CB · England", club:"Stade Rennais", pos:"CB", fee:"€25m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreed 1 Aug 2026 - Toulouse's biggest sale of the window."}
];

const INCOMING = [
  {name:"Gift Orban", sub:"Nigerian striker resurfaces as a cut-price target", club:"Olympique Lyonnais", pos:"ST", report:"Toulouse are ready to move for the Lyon flop at a reduced price, almost a year after a move nearly happened in the previous summer window before collapsing.", src:"MSN Sport", tier:3, fee:"Undisclosed (reduced price)", truth:40, prob:30, light:"y", trend:"flat", note:"Previous transfer attempt fell through last summer; Orban has struggled for minutes at Lyon since."}
];

const OUTGOING = [
  {name:"Guillaume Restes", sub:"22 · GK · France", club:"Marseille / Aston Villa (competing)", pos:"GK", report:"30 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:52, prob:26, light:"o", trend:"flat", note:"Marseille and Aston Villa are both reported to be competing for the young goalkeeper."},
  {name:"Cristian Casseres Jr.", sub:"Venezuelan midfielder wanted by multiple suitors", club:"Olympique Lyonnais / RC Lens", pos:"CDM", report:"Lyon are reportedly trying to beat Lens to the signature of the Toulouse midfielder, the latest twist after Sevilla had an earlier bid rejected and Genoa also showed renewed Serie A interest.", src:"Les Transferts (via Nova Sports)", tier:3, fee:"Undisclosed", truth:45, prob:30, light:"y", trend:"flat", note:"Casseres is under contract to 2027; Toulouse have previously rejected a Sevilla bid and fought off Genoa interest, but Ligue 1 rivals Lyon and Lens are now competing for him."},
  {name:"Yann Gboho", sub:"Ivorian winger drawing foreign interest", club:"Unnamed English club", pos:"LW", report:"An English club has reportedly positioned itself for Ligue 1's top dribbler this summer, after an unnamed Italian side previously showed winter interest.", src:"MSN Sport", tier:3, fee:"Undisclosed", truth:35, prob:20, light:"o", trend:"flat", note:"No club has been formally named; Gboho joined Toulouse from Cercle Bruges in January 2024 for around €2.5m."}
];

const RISERS = [];

const FALLERS = [
  {ar:"⬇", t:"<b>Cresswell sold to Rennes for €25m</b>: a significant departure from the back line under new coach Askou."}
];

const NEW = [
  {ar:"✦", t:"Jens Berthel Askou, previously of Scottish Premiership side Motherwell, takes over from Carles Martínez Novell, who left for Bayer Leverkusen in the Bundesliga."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [
  {name:"Guillaume Restes", club:"Toulouse FC", pos:"GK", dir:"out", age:"~4 days", tier:2, note:"Marseille and Aston Villa credited with interest."}
];

const HUB = {
  "gffn-toulouse": {l:"Get French Football News · Toulouse", u:"https://www.getfootballnewsfrance.com/tag/toulouse/"},
  mSNSportGiftOrban: {l:"MSN Sport", u:"https://www.msn.com/fr-fr/sport/football/mercato-toulouse-le-t%C3%A9f%C3%A9c%C3%A9-pr%C3%AAt-%C3%A0-s-offrir-un-ancien-flop-de-l-ol-%C3%A0-prix-cass%C3%A9/ar-AA288cab"},
  lesTransfertsCristianCasseresJr: {l:"Les Transferts", u:"https://www.les-transferts.com/rumeurs-transferts/lol-veut-doubler-lens-pour-ce-milieu-de-toulouse/"},
  mSNSportYannGboho: {l:"MSN Sport", u:"https://www.msn.com"},
  laDepecheMaxifootCharlieCresswell: {l:"La Depeche / Maxifoot", u:"https://news.maxifoot.fr/rennes/"}};

const LINKMAP = {
  "Charlie Cresswell": ["gffn-toulouse", "laDepecheMaxifootCharlieCresswell"],
  "Guillaume Restes": ["gffn-toulouse"],
  "Gift Orban": ["mSNSportGiftOrban"],
  "Cristian Casseres Jr.": ["lesTransfertsCristianCasseresJr"],
  "Yann Gboho": ["mSNSportYannGboho"]};
const WL_LINKMAP = {
  "Guillaume Restes": ["gffn-toulouse"]
};

const PROSE = {
  heroH2: `A new coach and a first big sale as Toulouse reshape under Askou`,
  heroLede: `Toulouse's summer has been defined by change in the dugout: <b>Jens Berthel Askou</b> arrives from Motherwell to replace <b>Carles Martínez Novell</b>, who left for Bayer Leverkusen. On the pitch, centre-back <b>Charlie Cresswell</b> has been sold to Stade Rennais for €25m, and goalkeeper <b>Guillaume Restes</b> is drawing interest from both Marseille and Aston Villa.`,
  metaRow: `<span>DECISION-MAKER: <b>Olivier Cloarec</b> (President)</span> <span>HEAD COACH: <b>Jens Berthel Askou</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">10<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Restes' situation is the one to watch, with two clubs from different leagues credited with interest.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `None reported`, x: `No confirmed incoming deals this window.` },
  spendOut: { v: `€25m banked`, x: `Cresswell's sale to Rennes is the only confirmed departure so far.` },
  methodLegend: ``
};
