/* ============================================================
   MERCATO IQ · CLUB DATA · OLYMPIQUE LYONNAIS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Olympique Lyonnais",
  mono: "OL",
  slug: "olympique-lyon",
  primary: "#0056A8", primaryBright: "#5CA9FF", primaryDeep: "#00325F",
  primaryRgb: "0,86,168",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Paulo Fonseca (contract to Jun 2027; returned in December 2025 after a nine-month suspension from the DNCG financial oversight body)",
  dof: "TBD (Director)",
  europe: "UEFA Europa League (2026/27) - via third qualifying round/play-offs",
  finish: "4th Ligue 1 (2025/26)",
  owner: "Eagle Football Group (77.49%); Michele Kang (President, from 30 Jun 2025, after John Textor's resignation)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.getfootballnewsfrance.com/tag/lyon/"],
  queries: ["Olympique Lyonnais transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Olympique Lyonnais"
};

const CONFIRMED_IN = [
  {name:"Julien Duranville", sub:"20 · W · Belgium", to:"permanent from Borussia Dortmund", fee:"€5m + up to €3.5m bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Jul 2026 on a five-year contract - a calculated gamble on a highly-rated but injury-hit winger."},
  {name:"Mohamed Ouédraogo", sub:"20 · CM · Burkina Faso", to:"permanent from SCR Altach", fee:"€2.2m + up to €0.6m bonuses, 10% resale clause", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 3 Jul 2026, a development midfield signing from Austria."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Florian Thauvin", sub:"33 · RW · France", club:"Free agent (Udinese)", pos:"RW", report:"1 Aug 2026", src:"RMC Sport", tier:2, fee:"Free agent", truth:62, prob:48, light:"y", trend:"flat", note:"RMC reports Lyon in talks with the veteran winger after his Udinese exit."},
  {name:"Madison Ingram", sub:"20 · CM · England", club:"Chelsea", pos:"CM", report:"28 Jul 2026", src:"Fabrizio Romano", tier:1, fee:"€30m", truth:71, prob:55, light:"g", trend:"up", note:"Romano reports Chelsea are open to a loan move for the young midfielder to Lyon."},
  {name:"Loïs Openda", sub:"26 · ST · Belgium", club:"Juventus", pos:"ST", report:"25 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:60, prob:52, light:"g", trend:"up", note:"Reported to be set to join Lyon as the club looks to freshen up its attack."},
  {name:"Cluver Sambi Mbungu", sub:"17 · W · France", club:"SM Caen", pos:"W", report:"9 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:55, prob:45, light:"y", trend:"up", note:"Reported nearing completion, with Lyon said to be overtaking both PSG and Bundesliga interest for the teenage prospect."},
  {name:"Felix Bacher", sub:"22 · CB · Austria", club:"Estoril", pos:"CB", report:"21 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:50, prob:38, light:"y", trend:"flat", note:"Lyon reported in advanced negotiations for the Austrian centre-back."}
];

const OUTGOING = [
  {name:"Pavel Šulc", sub:"25 · AM · Czech Republic", club:"Lyon", pos:"AM", report:"18 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:48, prob:24, light:"o", trend:"flat", note:"Leeds United reported to have opened talks over the playmaker's situation."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Duranville arrives from Dortmund</b>: a five-year bet on the Belgian winger's talent."},
  {ar:"⬆", t:"<b>Openda reportedly set to join from Juventus</b>: fresh forward reinforcement for Fonseca's side."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Paulo Fonseca, back in charge after a lengthy suspension linked to the club's financial oversight case, says he's staying: 'I have a year left. I'm not concerned about this situation... I'm staying.'"}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Forward line", w:60, x:"Openda and Thauvin links both point to fresh attacking depth being prioritised this window."}
];

const WATCHLIST = [
  {name:"Loïs Openda", club:"Juventus", pos:"ST", dir:"in", age:"~9 days", tier:2, note:"Reported to be set to complete a move to Lyon."}
];

const HUB = {
  "rmcsport": {l:"RMC Sport", u:"https://rmcsport.bfmtv.com/football/"},
  "romano": {l:"Fabrizio Romano", u:"https://x.com/FabrizioRomano"},
  "gffn-lyon": {l:"Get French Football News · Lyon", u:"https://www.getfootballnewsfrance.com/tag/lyon/"}
};

const LINKMAP = {
  "Florian Thauvin": ["rmcsport"],
  "Madison Ingram": ["romano"],
  "Julien Duranville": ["gffn-lyon"],
  "Mohamed Ouédraogo": ["gffn-lyon"],
  "Loïs Openda": ["gffn-lyon"],
  "Cluver Sambi Mbungu": ["gffn-lyon"],
  "Felix Bacher": ["gffn-lyon"],
  "Pavel Šulc": ["gffn-lyon"]
};
const WL_LINKMAP = {
  "Loïs Openda": ["gffn-lyon"]
};

const PROSE = {
  heroH2: `Fonseca stays put, and Lyon rebuild around two confirmed signings`,
  heroLede: `After a turbulent 2025/26 dominated by financial oversight and a lengthy managerial suspension, <b>Paulo Fonseca</b> has publicly committed his future to Lyon. On the pitch, <b>Julien Duranville</b> and <b>Mohamed Ouédraogo</b> are confirmed arrivals, while reported interest in Juventus striker <b>Loïs Openda</b> and Caen teenager <b>Cluver Sambi Mbungu</b> - the latter reportedly beating PSG to the punch - point to an ambitious squad rebuild for the Europa League campaign ahead.`,
  metaRow: `<span>DECISION-MAKER: <b>Michele Kang</b> (President)</span> <span>HEAD COACH: <b>Paulo Fonseca</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">4<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">Europa League</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: `Openda and Sambi Mbungu both reported as advancing towards completion.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Šulc's future is being watched after reported Leeds United interest.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€7m+ confirmed`, x: `Duranville and Ouédraogo's combined fees, with further deals reportedly in progress.` },
  spendOut: { v: `None confirmed`, x: `No departures confirmed this window.` },
  methodLegend: ``
};
