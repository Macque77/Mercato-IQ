/* ============================================================
   MERCATO IQ · CLUB DATA · BAYER LEVERKUSEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bayer Leverkusen", mono: "B04", slug: "bayer-leverkusen",
  primary: "#E32219", primaryBright: "#FF6259", primaryDeep: "#8A0F0A",
  primaryRgb: "227,34,25",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Carles Martínez Novell (took over 1 Jul 2026)",
  dof: "Simon Rolfes (Sporting Director)",
  europe: "UEFA Europa League (2026/27)",
  finish: "6th Bundesliga (2025/26)",
  owner: "Bayer AG (works club); Fernando Carro (CEO)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.bundesliga.com/en/bundesliga", "https://www.bayer04.de/en-us/news"],
  queries: ["Bayer Leverkusen transfer news 2026", "Kerim Alajbegovic Juventus", "Bayer Leverkusen Grimaldo Atletico"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Bayer Leverkusen"
};

const CONFIRMED_IN = [
  {name:"Afonso Moreira", sub:"21 · W · Portugal", to:"permanent from Olympique Lyon", fee:"~€29.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Leverkusen's marquee summer arrival, brought in to add width and directness following Grimaldo's exit."},
  {name:"Kennet Eichhorn", sub:"19 · CB · Germany", to:"permanent from Hertha BSC", fee:"~€9m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young German centre-back for squad depth and future development."},
  {name:"Aleksa Damjanović", sub:"20 · ST · Serbia", to:"permanent from Crvena Zvezda (Roter Stern Belgrad)", fee:"~€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Serbian forward signed as a long-term striker option."}
];

const CONFIRMED_OUT = [
  {name:"Kerim Alajbegović", sub:"18 · AM/W · Bosnia", to:"permanent to Juventus", fee:"~€33-40m (reports vary)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Aug: a Bundesliga record fee for a teenager never having played a first-team minute for Leverkusen, following a breakout loan at RB Salzburg and a Goal-of-the-Tournament nomination at the 2026 World Cup. Sporting director Simon Rolfes cited 'fierce competition' in his positions. Chelsea also pursued him before Juventus won the race."},
  {name:"Alejandro Grimaldo", sub:"30 · LB", to:"permanent to Atlético Madrid", fee:"~€22m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 30 Jun: the Spain left-back returns home to Atlético after three trophy-laden years in Leverkusen, prompting the Afonso Moreira signing on the opposite flank."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Alajbegović to Juventus official</b>: record teenage sale banks a huge fee for a player who never featured for the first team."},
  {ar:"⬆", t:"<b>Grimaldo to Atlético confirmed</b>: marquee departure funds the Afonso Moreira signing from Lyon."}
];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Left-back", w:30, x:"Grimaldo's departure has been directly addressed via reshuffled full-back options; monitor for further incoming depth."},
  {p:"Attacking midfield / wide forward", w:35, x:"Alajbegović's sale leaves a talented academy gap, partially offset by Moreira and Damjanović incoming."}
];

const WATCHLIST = [];

const HUB = {
  bundesliga: {l:"Bundesliga.com · Official", u:"https://www.bundesliga.com/en/bundesliga/news/kerim-alajbegovic-joins-juventus-bosnian-talent-38351"},
  bundesliga2: {l:"Bundesliga.com · Grimaldo", u:"https://www.bundesliga.com/en/bundesliga/news/alejandro-grimaldo-leaves-bayer-leverkusen-atletico-madrid-37906"},
  gfn: {l:"Get German Football News", u:"https://www.getfootballnewsgermany.com/"},
  espn: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49227873/spain-alex-grimaldo-joins-atletico-madrid-bayer-leverkusen"},
  bein: {l:"beIN Sports", u:"https://www.beinsports.com/en-us/soccer/bundesliga/articles/everkusen-set-for-historic-kerim-alajbegovic-transfer-2026-07-31"},
  yahoo: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/juventus-beat-chelsea-race-sign-152500320.html"}
};

const LINKMAP = {
  "Kerim Alajbegović": ["bundesliga","bein","yahoo"],
  "Alejandro Grimaldo": ["bundesliga2","espn"],
  "Afonso Moreira": ["gfn"],
  "Kennet Eichhorn": ["gfn"],
  "Aleksa Damjanović": ["gfn"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Two record sales fund the rebuild: Grimaldo and Alajbegović depart as Leverkusen reload under a new coach`,
  heroLede: `Under new head coach <b>Carles Martínez Novell</b>, who succeeded Xabi Alonso's departure to Real Madrid, Leverkusen head into a Europa League campaign after a 6th-place finish. The summer's two defining sales are both confirmed: long-time left-back <b>Alejandro Grimaldo</b> returns home to Atlético Madrid for around €22m, and 18-year-old academy sensation <b>Kerim Alajbegović</b> - never having played a first-team minute for the club - moves to Juventus in a Bundesliga record teenage deal reported between €33m and €40m. The proceeds have funded <b>Afonso Moreira</b> from Lyon (~€29.5m) and defensive depth in Kennet Eichhorn and Aleksa Damjanović.`,
  metaRow: `<span>DECISION-MAKER: <b>Simon Rolfes</b> (Sporting Director)</span> <span>HEAD COACH: <b>Carles Martínez Novell</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">6<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">UEL</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Both headline sales are done deals; no further departures reported at this stage.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€43.5m committed`, x: `Moreira (€29.5m), Eichhorn (€9m) and Damjanović (€5m) all confirmed.` },
  spendOut: { v: `~€55-62m banked`, x: `Grimaldo (~€22m) and Alajbegović (~€33-40m) combine for the largest sales of Leverkusen's summer.` },
  methodLegend: ``
};
