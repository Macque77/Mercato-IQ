/* ============================================================
   MERCATO IQ · CLUB DATA · RC STRASBOURG ALSACE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RC Strasbourg Alsace",
  mono: "RCSA",
  slug: "rc-strasbourg",
  primary: "#0072CE",
  primaryBright: "#5CB3FF",
  primaryDeep: "#003C6B",
  primaryRgb: "0,114,206",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Gary O'Neil (appointed Jan 2026, succeeding Liam Rosenior, who left for Chelsea)",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "8th Ligue 1 (2025/26)",
  owner: "BlueCo (Chelsea FC's ownership consortium - Todd Boehly/Clearlake Capital), since Jun 2023",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/strasbourg/"],
  queries: ["RC Strasbourg transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · RC Strasbourg Alsace"
};

const CONFIRMED_IN = [
  {name:"Genesis Antwi", sub:"DF", to:"loan from Chelsea", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 3 Aug 2026 - the first Chelsea player to move to Strasbourg under the BlueCo multi-club structure."}
];

const CONFIRMED_OUT = [
  {name:"Valentín Barco", sub:"22 · LB · Argentina", club:"Chelsea", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Aug 2026 - a multi-club move within the BlueCo group."}
];

const INCOMING = [
  {name:"Mykhailo Mudryk", sub:"25 · W · Ukraine", club:"Chelsea", pos:"W", report:"3 Aug 2026", src:"Get French Football News", tier:2, fee:"Loan", truth:50, prob:32, light:"y", trend:"flat", note:"Chelsea are reported to be considering loaning the winger to their sister club."},
  {name:"Giovanni Reyna", sub:"24 · AM · USA", club:"Borussia Mönchengladbach", pos:"AM", report:"31 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:48, prob:26, light:"o", trend:"flat", note:"Talks are reported to be underway over the American international's future."},
  {name:"Filip Jörgensen", sub:"24 · GK · Denmark", club:"Chelsea", pos:"GK", report:"28 Jul 2026", src:"Get French Football News", tier:2, fee:"Loan", truth:52, prob:30, light:"y", trend:"flat", note:"Reported as a potential third Chelsea player to join Strasbourg on loan this window."},
  {name:"Ibrahima Ba", sub:"DF · Senegal", club:"Famalicão", pos:"CB", report:"16 Jul 2026", src:"Get French Football News", tier:3, fee:"TBD", truth:45, prob:24, light:"o", trend:"flat", note:"Reported to be rejecting Benfica in order to join Strasbourg instead."},
  {name:"Robbie Ure", sub:"FW", club:"IK Sirius", pos:"FW", report:"4 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:45, prob:20, light:"o", trend:"flat", note:"The Allsvenskan top scorer is being tracked by Strasbourg alongside Nice and Lyon."}
];

const OUTGOING = [
  {name:"Diego Moreira", sub:"21 · LWB · Portugal", club:"AS Roma", pos:"LWB", report:"15 Jul 2026", src:"Nicolo Schira", tier:1, fee:"Undisclosed", truth:50, prob:30, light:"y", trend:"flat", note:"Roma have reportedly offered a contract to 2031, with direct talks expected between the clubs."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Antwi becomes the first Chelsea loanee to arrive</b>: BlueCo's multi-club pipeline into Strasbourg begins to flow."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Barco departs for Chelsea</b>: a multi-club move sends the Argentine full-back up the BlueCo ladder."}
];

const NEW = [
  {ar:"✦", t:"With up to three Chelsea loanees potentially arriving this window (Antwi, Mudryk, Jörgensen), Strasbourg's identity as BlueCo's development satellite is deepening under new coach Gary O'Neil."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Chelsea pipeline", w:70, x:"Up to three additional loanees (Mudryk, Jörgensen, plus Antwi already confirmed) reflect BlueCo's multi-club strategy in full swing."}
];

const WATCHLIST = [
  {name:"Mykhailo Mudryk", club:"Chelsea", pos:"W", dir:"in", age:"~1 day", tier:2, note:"Potential loan move as part of BlueCo's multi-club pipeline."}
];

const HUB = {
  "gffn-strasbourg": {l:"Get French Football News · Strasbourg", u:"https://www.getfootballnewsfrance.com/tag/strasbourg/"},
  nicoloSchiraviaSportingpediaDiegoMoreira: {l:"Nicolo Schira (via Sportingpedia)", u:"https://www.sportingpedia.com/2026/07/15/diego-moreira-set-to-swap-strasbourg-for-as-roma/"}};

const LINKMAP = {
  "Genesis Antwi": ["gffn-strasbourg"],
  "Valentín Barco": ["gffn-strasbourg"],
  "Mykhailo Mudryk": ["gffn-strasbourg"],
  "Giovanni Reyna": ["gffn-strasbourg"],
  "Filip Jörgensen": ["gffn-strasbourg"],
  "Ibrahima Ba": ["gffn-strasbourg"],
  "Robbie Ure": ["gffn-strasbourg"],
  "Diego Moreira": ["nicoloSchiraviaSportingpediaDiegoMoreira"]};
const WL_LINKMAP = {
  "Mykhailo Mudryk": ["gffn-strasbourg"]
};

const PROSE = {
  heroH2: `The BlueCo pipeline in full flow: Chelsea loanees start arriving`,
  heroLede: `Strasbourg's identity as Chelsea's multi-club satellite under owners <b>BlueCo</b> is becoming clearer by the week: defender <b>Genesis Antwi</b> is the first confirmed Chelsea loanee to arrive, with <b>Mykhailo Mudryk</b> and goalkeeper <b>Filip Jörgensen</b> both reported as further candidates. Meanwhile <b>Valentín Barco</b> has moved the other way to Chelsea, and coach <b>Gary O'Neil</b>, who replaced Liam Rosenior back in January, continues to shape the squad around the group's resources.`,
  metaRow: `<span>DECISION-MAKER: <b>BlueCo</b> (Ownership Consortium)</span> <span>HEAD COACH: <b>Gary O'Neil</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">8<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In/Out</div><div class="v">1 / 1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Mudryk and Jörgensen loans both reported as under consideration but not yet confirmed.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Multi-club loans`, x: `Antwi's loan arrival, with more Chelsea loanees potentially to follow.` },
  spendOut: { v: `Multi-club exit`, x: `Barco's move to Chelsea completes a like-for-like swap within the BlueCo group.` },
  methodLegend: ``
};
