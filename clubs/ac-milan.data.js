/* ============================================================
   MERCATO IQ · CLUB DATA · AC MILAN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AC Milan",
  mono: "MIL",
  slug: "ac-milan",
  primary: "#DC143C",
  primaryBright: "#FF3333",
  primaryDeep: "#990000",
  primaryRgb: "220,20,60",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Ruben Amorim (since pre-season 2026/27, replacing Massimiliano Allegri)",
  dof: "Geoffrey Moncada (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "2nd Serie A (2025/26)",
  owner: "Gerry Cardinale / RedBird Capital",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://sempremilan.com/category/transfer-news", "https://football-italia.net/category/teams/milan/"],
  queries: ["AC Milan transfer news 2026", "AC Milan Goncalo Ramos Gila official", "AC Milan Karetsas Alajbegovic Leao"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AC Milan"
};

const CONFIRMED_IN = [
  {name:"Jadon Sancho", sub:"24 · LW/RW · England", to:"permanent from Manchester United", fee:"Free agent", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 20 Jul. English winger joins as a free agent after his Manchester United departure, adding pace and creativity to Milan's attack."},
  {name:"Gonçalo Ramos", sub:"25 · ST · Portugal", to:"permanent from Paris Saint-Germain", fee:"€80m+ (with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Milan's marquee striker signing of the summer - the Portugal international arrives from PSG to lead the line under new coach Ruben Amorim."},
  {name:"Mario Gila", sub:"25 · CB · Spain", to:"permanent from Lazio", fee:"~€30m (with bonuses)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"A direct Serie A rival raid - the Spanish centre-back strengthens Milan's defensive options."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Konstantinos Karetsas", sub:"18 · AM · Belgium/Greece", club:"Genk", pos:"AM", report:"1 Aug 2026", src:"Football Italia", tier:2, fee:"~€40m", truth:60, prob:35, light:"y", trend:"up", note:"Described as Milan's 'current favourite' for the attacking-midfield slot, though Borussia Dortmund are also credited with interest at the same valuation."},
  {name:"Kerim Alajbegović", sub:"18 · W · Bosnia", club:"Bayer Leverkusen", pos:"W", report:"1 Aug 2026", src:"Football Italia", tier:3, fee:"€25-30m", truth:45, prob:20, light:"o", trend:"flat", note:"Named as an alternative to Karetsas, but Juventus and Premier League clubs are also credited with interest in the same player."},
  {name:"Can Uzun", sub:"20 · AM · Turkey/Germany", club:"Eintracht Frankfurt", pos:"AM", report:"1 Aug 2026", src:"Football Italia", tier:3, fee:"~€25m", truth:42, prob:18, light:"o", trend:"flat", note:"A third name floated for the same attacking-midfield slot; nothing beyond exploratory interest reported yet."}
];

const OUTGOING = [
  {name:"Rafael Leão", sub:"27 · LW · Portugal", club:"Multiple (unspecified)", pos:"LW", report:"1 Aug 2026", src:"Football Italia", tier:2, fee:"€60-80m (expected)", truth:55, prob:32, light:"y", trend:"up", note:"Milan are expected to sell Leão and other first-team fringe pieces to help fund the Karetsas/Alajbegović/Uzun pursuit and further defensive reinforcement."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Gonçalo Ramos official</b>: €80m+ marquee striker arrival from PSG headlines the summer."},
  {ar:"⬆", t:"<b>Mario Gila official</b>: Serie A rival raid on Lazio's centre-back strengthens the defence."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Ruben Amorim's first Milan window nets Ramos and Gila for over €100m combined; Karetsas, Alajbegović and Uzun are all in the mix for a further creative addition, likely funded by selling Leão."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Attacking midfield / No.10", w:70, x:"Karetsas the current favourite, with Alajbegović and Can Uzun as alternates - all three remain live given Milan need to sell before further buying."},
  {p:"Full-back / centre-back depth", w:45, x:"A further left-sided full-back and possibly another centre-back are still wanted alongside Gila."}
];

const WATCHLIST = [];

const HUB = {
  sempremilan: {l:"SempreMilan · Transfer News", u:"https://sempremilan.com/category/transfer-news"},
  footballItalia: {l:"Football Italia · AC Milan", u:"https://football-italia.net/category/teams/milan/"},
  club: {l:"AC Milan Official · Transfer Window", u:"https://www.acmilan.com/en/transfer-window"}
};

const LINKMAP = {
  "Jadon Sancho": ["club"],
  "Gonçalo Ramos": ["footballItalia","club"],
  "Mario Gila": ["footballItalia","club"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Amorim's first window: Gonçalo Ramos and Mario Gila arrive for over €100m combined`,
  heroLede: `AC Milan enter the new season under <b>Ruben Amorim</b>, hired to replace Massimiliano Allegri after a 2nd-place finish secured Champions League football. The headline business is a genuine statement: <b>Gonçalo Ramos</b> arrives from PSG for upwards of €80m to lead the line, and <b>Mario Gila</b> joins from direct Serie A rival Lazio for around €30m to add defensive steel. With <b>Jadon Sancho</b> already in on a free from Manchester United, the remaining work is creative: Milan are said to favour Genk's teenage playmaker <b>Konstantinos Karetsas</b>, with Kerim Alajbegović and Can Uzun as alternates, most likely funded by selling <b>Rafael Leão</b>.`,
  metaRow: `<span>DECISION-MAKER: <b>Geoffrey Moncada</b> (Director)</span> <span>HEAD COACH: <b>Ruben Amorim</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">2<small>nd</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: `Karetsas, Alajbegović and Can Uzun are all reported at exploratory-to-advanced stages for the same creative-midfield role; expect only one to actually land.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `A Leão sale (and other fringe departures) is expected to fund the remaining creative-midfield pursuit.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€110m+ committed`, x: `Ramos and Gila are done; a further creative-midfield signing (Karetsas most likely) would add €25-40m more.` },
  spendOut: { v: `€60-80m expected`, x: `A Leão sale remains the primary lever to fund further incomings.` },
  methodLegend: ``
};
