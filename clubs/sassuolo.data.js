/* ============================================================
   MERCATO IQ · CLUB DATA · US SASSUOLO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "US Sassuolo", mono: "SAS", slug: "sassuolo",
  primary: "#00A650", primaryBright: "#63E6A0", primaryDeep: "#00602E",
  primaryRgb: "0,166,80",
  breadcrumb: ["Italy","Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Alberto Aquilani (since 13 Jun 2026, his first Serie A job, replacing Fabio Grosso who left for Fiorentina)",
  dof: "Club sporting management (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "11th Serie A (2025/26)",
  owner: "Carlo Rossi (Mapei/Squinzi family interests)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/sassuolo/"],
  queries: ["Sassuolo transfer news 2026", "Sassuolo Muharemovic Volpato Bowie", "Sassuolo Aquilani signings"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · US Sassuolo"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Tarik Muharemovic", sub:"22 · CB · Bosnia", club:"Leeds United", pos:"CB", fee:"€40m (Juventus receive €20m via sell-on)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 14 Jul. Newcastle, Sunderland and Bournemouth were also credited with interest before Leeds completed the deal; Juventus retain a 50% sell-on clause from a previous transfer, banking €20m of the fee."}
];

const INCOMING = [
  {name:"Kieron Bowie", sub:"21 · ST · Scotland", club:"Hellas Verona", pos:"ST", report:"31 Jul 2026", src:"Football Italia", tier:2, fee:"~€12m (Verona's asking price)", truth:60, prob:55, light:"g", trend:"up", note:"Sassuolo's interest was reported in early July with Verona demanding around €12m; later coverage lists the move as close to completion following the striker's drop into Serie B with Verona's relegation."},
  {name:"Ognjen Ugresic", sub:"22 · CM · Serbia", club:"Partizan Belgrade", pos:"CM", report:"12 Jul 2026", src:"Football Italia", tier:3, fee:"~€6m", truth:50, prob:25, light:"o", trend:"flat", note:"Sassuolo one of several clubs (also Udinese, Bologna, Club Brugge, Frankfurt, Monaco) in a genuine bidding war for the Partizan midfielder - competition makes any single suitor's chances modest."}
];

const OUTGOING = [
  {name:"Cristian Volpato", sub:"21 · AM · Australia", club:"Fiorentina", pos:"AM", report:"4 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:48, prob:25, light:"o", trend:"flat", note:"Volpato has said he's open to leaving for a 'great club' after the World Cup, with Fiorentina the club credited with concrete interest."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Tarik Muharemovic sale confirmed</b>: €40m deal with Leeds United, with Juventus banking €20m via a sell-on clause."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Alberto Aquilani's first Serie A job begins with a major Muharemovic sale banked and Kieron Bowie edging closer as his replacement, while Cristian Volpato's Fiorentina links develop in parallel."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Leandro Trossard to Sassuolo</b>: dead - the Arsenal winger signed for Besiktas instead."}
];

const POSITIONS = [
  {p:"Centre-back", w:55, x:"Muharemovic's sale to Leeds creates a direct need; Bowie is a forward target rather than a defensive one, so this slot remains genuinely open."},
  {p:"Attacking midfield", w:30, x:"Volpato's potential Fiorentina exit would open a creative slot to fill."}
];

const WATCHLIST = [
  {name:"Kieron Bowie", club:"Hellas Verona", pos:"ST", dir:"in", age:"~3 days", tier:2, note:"Reported close to completion following Verona's relegation to Serie B."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Sassuolo", u:"https://football-italia.net/category/teams/sassuolo/"},
  bwrao: {l:"Black & White & Read All Over", u:"https://www.blackwhitereadallover.com/"}
};

const LINKMAP = {
  "Tarik Muharemovic": ["footballItalia"],
  "Kieron Bowie": ["footballItalia"],
  "Ognjen Ugresic": ["footballItalia"],
  "Cristian Volpato": ["footballItalia"]
};
const WL_LINKMAP = {
  "Kieron Bowie": ["footballItalia"]
};

const PROSE = {
  heroH2: `Aquilani's first Serie A job: Muharemovic cashed in for €40m as Bowie edges closer`,
  heroLede: `Sassuolo enter 2026/27 under <b>Alberto Aquilani</b>, taking his first Serie A head-coaching job after <b>Fabio Grosso's</b> summer departure for Fiorentina, following an 11th-place finish. The big number this window is <b>Tarik Muharemovic's</b> €40m sale to Leeds United - though Juventus quietly bank €20m of that via a sell-on clause from his original move to Sassuolo. Scotland forward <b>Kieron Bowie</b> looks close to arriving from newly-relegated Hellas Verona as a replacement, while creative midfielder <b>Cristian Volpato</b> has said he's open to a 'great club' move, with Fiorentina the concrete interested party.`,
  metaRow: `<span>DECISION-MAKER: <b>Club sporting management</b></span> <span>HEAD COACH: <b>Alberto Aquilani</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">11<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `Bowie's move is reported as close to completion but not yet officially announced.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Volpato's Fiorentina links are genuine but not yet at an advanced negotiation stage.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `TBD - Bowie (~€12m) close`, x: `No permanent signings officially confirmed yet.` },
  spendOut: { v: `€40m banked`, x: `Muharemovic's sale to Leeds is the major confirmed departure of the window.` },
  methodLegend: ``
};
