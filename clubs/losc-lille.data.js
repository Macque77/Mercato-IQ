/* ============================================================
   MERCATO IQ · CLUB DATA · LOSC LILLE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "LOSC Lille",
  mono: "LOSC",
  slug: "losc-lille",
  primary: "#C8102E",
  primaryBright: "#FF4C5E",
  primaryDeep: "#7A0C1E",
  primaryRgb: "200,16,46",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Davide Ancelotti (appointed 1 Jun 2026, succeeding Bruno Génésio, who had replaced Paulo Fonseca)",
  dof: "TBD (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "3rd Ligue 1 (2025/26)",
  owner: "Merlyn Partners (Luxembourg investment firm); Olivier Létang (President)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.getfootballnewsfrance.com/tag/lille/"],
  queries: ["LOSC Lille transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · LOSC Lille"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Thomas Meunier", sub:"29 · RB · Belgium", club:"Sunderland", pos:"RB", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left as a free agent 16 Jul 2026 after two seasons at the club."}
];

const INCOMING = [
  {name:"Gonçalo Inácio", sub:"23 · CB · Portugal", club:"Sporting CP", pos:"CB", report:"2 Aug 2026", src:"RMC Sport", tier:2, fee:"€35m", truth:58, prob:40, light:"y", trend:"flat", note:"RMC reports Lille monitoring the Portuguese defender from Sporting.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Milan Skriniar", sub:"31 · CB · Slovakia", club:"Paris Saint-Germain", pos:"CB", report:"30 Jul 2026", src:"L'Équipe", tier:2, fee:"€30m", truth:50, prob:30, light:"y", trend:"flat", note:"L'Équipe reports Lille interest in the PSG centre-back; PSG are not eager to sell.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Başar Önal", sub:"22 · CB · Turkey", club:"NEC Nijmegen", pos:"CB", report:"6 Jul 2026", src:"Get French Football News", tier:2, fee:"€9.5m + add-ons", truth:60, prob:48, light:"y", trend:"up", note:"Lille reported to be nearing a deal for the young Turkish defender.", lastSeen:"2026-08-04T19:10:50Z", baseProb:48}
];

const OUTGOING = [
  {name:"Ayyoub Bouaddi", sub:"18 · CM · France", club:"Multiple (linked)", pos:"CM", report:"28 Jun 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:55, prob:20, light:"o", trend:"flat", note:"Manchester City, Manchester United, Arsenal and Bayern Munich are all reported to be monitoring the highly-rated teenager, though no bid has landed yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Alexsandro", sub:"26 · CB · Brazil", club:"Ipswich Town (interest dismissed)", pos:"CB", report:"3 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:50, prob:12, light:"r", trend:"down", note:"Ipswich Town's interest has been dismissed by club officials, who want to keep the defender.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12}
];

const RISERS = [
  {ar:"⬆", t:"<b>Önal deal nearing completion</b>: Lille reported closing in on a €9.5m defensive signing from NEC Nijmegen."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Thomas Meunier leaves as a free agent</b>: the Belgian full-back joins Sunderland after two seasons."}
];

const NEW = [
  {ar:"✦", t:"Davide Ancelotti takes over in the Lille dugout for a Champions League campaign, the third managerial change at the club in little over a year."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [
  {name:"Ayyoub Bouaddi", club:"LOSC Lille", pos:"CM", dir:"out", age:"~5 days", tier:2, note:"Four major European clubs monitoring the 18-year-old."}
];

const HUB = {
  "rmcsport": {l:"RMC Sport", u:"https://rmcsport.bfmtv.com/football/"},
  "lequipe": {l:"L'Équipe", u:"https://www.lequipe.fr/Football/"},
  "gffn-lille": {l:"Get French Football News · Lille", u:"https://www.getfootballnewsfrance.com/tag/lille/"}
};

const LINKMAP = {
  "Gonçalo Inácio": ["rmcsport"],
  "Milan Skriniar": ["lequipe"],
  "Başar Önal": ["gffn-lille"],
  "Ayyoub Bouaddi": ["gffn-lille"],
  "Alexsandro": ["gffn-lille"],
  "Thomas Meunier": ["gffn-lille"]
};
const WL_LINKMAP = {
  "Ayyoub Bouaddi": ["gffn-lille"]
};

const PROSE = {
  heroH2: `Ancelotti's Champions League inheritance: a defence being rebuilt, a teenager everyone wants`,
  heroLede: `LOSC head into the Champions League under their third head coach in little over a year, <b>Davide Ancelotti</b>. With <b>Thomas Meunier</b> gone as a free agent, the club is chasing centre-back reinforcements - <b>Gonçalo Inácio</b>, <b>Milan Skriniar</b> and a reported near-done deal for <b>Başar Önal</b> - while resisting the pull of Europe's biggest clubs on 18-year-old midfielder <b>Ayyoub Bouaddi</b>.`,
  metaRow: `<span>DECISION-MAKER: <b>Olivier Létang</b> (President)</span> <span>HEAD COACH: <b>Davide Ancelotti</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">3<small>rd</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Önal (NEC Nijmegen) reported close to being finalised.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Bouaddi's situation is the one to watch all window - four major clubs circling a player Lille have no urgent need to sell.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Deals in progress`, x: `No fee confirmed yet, but Önal's move looks close.` },
  spendOut: { v: `Free exit`, x: `Meunier's departure is the only confirmed exit so far.` },
  methodLegend: ``
};
