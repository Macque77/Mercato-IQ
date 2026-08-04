/* ============================================================
   MERCATO IQ · CLUB DATA · PARMA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Parma", mono: "PAR", slug: "parma",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
  breadcrumb: ["Italy","Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Carlos Cuesta (continuing for 2026/27 after a first season that comfortably avoided relegation)",
  dof: "Club sporting management (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "12th Serie A (2025/26, 45 pts - level on points with Torino)",
  owner: "Kyle Krause (Krause Group)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/parma/"],
  queries: ["Parma transfer news 2026", "Parma Bonny Inter Suzuki", "Parma Cuesta signings"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Parma"
};

const CONFIRMED_IN = [
  {name:"Giovanni Daffara", sub:"22 · GK · Italy", to:"permanent from Juventus", fee:"€6m plus add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 30 Jun. Young goalkeeper arrives from Juventus as part of the club's post-Bonny rebuild."},
  {name:"Franco Ezequiel Carboni", sub:"22 · LB · Argentina", to:"from Inter", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Jul. Defensive addition arriving as part of the broader Inter-Parma relationship following the Bonny sale."}
];

const CONFIRMED_OUT = [
  {name:"Ange-Yoan Bonny", sub:"21 · ST · France U21", club:"Inter Milan", pos:"ST", fee:"~€25m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed departure - Bonny reunites with Cristian Chivu at Inter after his breakout final months at Parma (6 goals, 4 assists, helped the club beat relegation). Stuttgart tried to hijack the move but Inter won out."}
];

const INCOMING = [
  {name:"El Bilal Touré", sub:"24 · ST · Mali", club:"Atalanta", pos:"ST", report:"2 Aug 2026", src:"Gianluca Di Marzio", tier:2, fee:"Loan with conditional mandatory purchase", truth:55, prob:50, light:"y", trend:"flat", note:"Di Marzio describes the loan as in its closing stages."}
];

const OUTGOING = [
  {name:"Zion Suzuki", sub:"24 · GK · Japan", club:"Multiple (Juventus, Aston Villa, Leeds, Newcastle linked)", pos:"GK", report:"1-3 Jul 2026", src:"Football Italia", tier:2, fee:"~€30m (asking price)", truth:55, prob:30, light:"y", trend:"up", note:"Genuinely for sale with several Premier League and Serie A clubs credited with interest, though Daffara's arrival suggests Parma are already planning for his exit."},
  {name:"Mateo Pellegrino", sub:"24 · ST · Argentina", club:"Juventus (rumoured)", pos:"ST", report:"6-12 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:45, prob:20, light:"o", trend:"flat", note:"Juventus reportedly 'booked' the striker as a backup target after their opening offer was rejected by Parma; not an advanced negotiation."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Giovanni Daffara and Franco Carboni arrive</b>: goalkeeper and full-back reinforcements as Parma rebuild after Bonny's exit."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Ange-Yoan Bonny departs</b>: breakout striker sold to Inter for around €25m to reunite with Cristian Chivu."}
];

const NEW = [
  {ar:"✦", t:"Carlos Cuesta continues into a second season with Parma already reshaping the goalkeeping department (Daffara in, Suzuki genuinely for sale) after cashing in on Bonny."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Goalkeeper", w:50, x:"Daffara's arrival looks like direct succession planning for Suzuki, who is genuinely on the market."},
  {p:"Centre-forward", w:45, x:"Bonny's sale leaves a genuine gap up front; no confirmed replacement yet."}
];

const WATCHLIST = [
  {name:"Zion Suzuki", club:"Multiple", pos:"GK", dir:"out", age:"~1 month", tier:2, note:"For sale at around €30m with several Premier League and Serie A suitors credited."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Parma", u:"https://football-italia.net/category/teams/parma/"},
  gianlucaDiMarzioElBilalTour: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-notizie-giornata-2-agosto-2026-495426"}};

const LINKMAP = {
  "Giovanni Daffara": ["footballItalia"],
  "Franco Ezequiel Carboni": ["footballItalia"],
  "Ange-Yoan Bonny": ["footballItalia"],
  "Zion Suzuki": ["footballItalia"],
  "Mateo Pellegrino": ["footballItalia"],
  "El Bilal Touré": ["gianlucaDiMarzioElBilalTour"]};
const WL_LINKMAP = {
  "Zion Suzuki": ["footballItalia"]
};

const PROSE = {
  heroH2: `Cuesta stays on: Bonny cashes out to Inter as the goalkeeping department is quietly rebuilt`,
  heroLede: `Parma head into a second season under the club's young coach <b>Carlos Cuesta</b>, rewarded with a new deal after a first campaign that comfortably steered clear of relegation (12th, level on points with Torino). The headline outgoing is <b>Ange-Yoan Bonny's</b> sale to Inter for around €25m, reuniting the breakout striker with Cristian Chivu after his standout final months in Parma colours. Behind the scenes, <b>Giovanni Daffara's</b> arrival from Juventus looks like direct succession planning for <b>Zion Suzuki</b>, who is genuinely for sale at around €30m with interest from both Serie A and the Premier League.`,
  metaRow: `<span>DECISION-MAKER: <b>Kyle Krause</b> (Owner)</span> <span>HEAD COACH: <b>Carlos Cuesta</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">12<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Suzuki's sale looks like a matter of when, not if; Pellegrino interest is a lower-key backup pursuit for Juventus.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€6m+ committed`, x: `Daffara (€6m) and Carboni (undisclosed) are done.` },
  spendOut: { v: `~€25m banked, more to come`, x: `Bonny's sale to Inter is confirmed; Suzuki's expected exit (~€30m) would add significantly more.` },
  methodLegend: ``
};
