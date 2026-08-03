/* ============================================================
   MERCATO IQ · CLUB DATA · US LECCE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "US Lecce",
  mono: "LEC",
  slug: "lecce",
  primary: "#FFE500",
  primaryBright: "#FFF066",
  primaryDeep: "#B3A000",
  primaryRgb: "255,229,0",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Eusebio Di Francesco",
  dof: "Club sporting management (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "17th Serie A (2025/26) - survived",
  owner: "Saverio Sticchi Damiani (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/lecce/"],
  queries: ["Lecce transfer news 2026", "Lecce Cavani Di Francesco", "Lecce Banda Hysaj"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · US Lecce"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Edinson Cavani", sub:"39 · ST · Uruguay", club:"Free agent (ex-Boca Juniors)", pos:"ST", report:"18 Jul 2026", src:"Football Italia", tier:2, fee:"Free", truth:55, prob:30, light:"y", trend:"up", note:"Lecce are described as 'dreaming big' in pursuing the former Napoli striker, a free agent after rescinding his Boca Juniors contract; his return is complicated by a lumbar injury he's still recovering from."},
  {name:"Elseid Hysaj", sub:"32 · RB/CB · Albania", club:"Free agent (ex-Lazio)", pos:"RB", report:"14 Jul 2026", src:"Football Italia", tier:3, fee:"Free", truth:50, prob:30, light:"y", trend:"flat", note:"Lecce have made an offer to the experienced free-agent defender seeking a Serie A return."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Edinson Cavani interest</b>: Lecce 'dreaming big' in pursuit of the veteran free-agent striker, injury permitting."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Lameck Banda goes AWOL</b>: the striker missed pre-season training and hasn't been in contact for several days; the club has warned he 'will pay the consequences of his behaviour'."}
];

const NEW = [
  {ar:"✦", t:"Eusebio Di Francesco's Lecce are chasing an ambitious free-agent swoop for Edinson Cavani while dealing with a genuine off-field distraction in Lameck Banda's unexplained absence from training."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-forward", w:45, x:"Cavani would be a statement free-agent addition, though his recovery from a lumbar injury is a genuine complication."},
  {p:"Right-back", w:30, x:"Hysaj represents free, experienced Serie A cover at right-back."}
];

const WATCHLIST = [
  {name:"Edinson Cavani", club:"Free agent", pos:"ST", dir:"in", age:"~2 weeks", tier:2, note:"Lecce pursuing the veteran striker; his fitness after a lumbar injury remains a question."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Lecce", u:"https://football-italia.net/category/teams/lecce/"}
};

const LINKMAP = {
  "Edinson Cavani": ["footballItalia"],
  "Elseid Hysaj": ["footballItalia"],
  "Lameck Banda": ["footballItalia"]
};
const WL_LINKMAP = {
  "Edinson Cavani": ["footballItalia"]
};

const PROSE = {
  heroH2: `Dreaming big: Lecce chase a free-agent Cavani reunion with Italian football`,
  heroLede: `US Lecce head into 2026/27 under <b>Eusebio Di Francesco</b> having survived in 17th place last season. The club's most eye-catching pursuit is a genuinely ambitious one: veteran striker <b>Edinson Cavani</b>, a free agent after rescinding his Boca Juniors contract, though a lumbar injury complicates any return to action. Free-agent full-back <b>Elseid Hysaj</b> has also received an offer as the club looks for experienced, low-cost reinforcements. Off the pitch, the club has had a genuine distraction to manage - striker <b>Lameck Banda</b> went missing from pre-season training and has been out of contact for several days, with the club warning of consequences on his return.`,
  metaRow: `<span>DECISION-MAKER: <b>Saverio Sticchi Damiani</b> (President)</span> <span>HEAD COACH: <b>Eusebio Di Francesco</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">17<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `No signings confirmed yet; Cavani and Hysaj are both live free-agent pursuits.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Free-agent business only`, x: `Both Cavani and Hysaj would arrive free if completed.` },
  spendOut: { v: `None reported`, x: `No outgoing business reported as advanced this window.` },
  methodLegend: ``
};
