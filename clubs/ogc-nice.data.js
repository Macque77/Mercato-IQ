/* ============================================================
   MERCATO IQ · CLUB DATA · OGC NICE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "OGC Nice",
  mono: "OGCN",
  slug: "ogc-nice",
  primary: "#ED1C24",
  primaryBright: "#FF6B6B",
  primaryDeep: "#1A1A1A",
  primaryRgb: "237,28,36",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Olivier Pantaloni (appointed 17 Jun 2026 as a free agent from FC Lorient, succeeding Claude Puel)",
  dof: "Vacant - Roger Ricort overseeing club finances, with a reported €70m savings target before the window closes",
  europe: "None (2026/27)",
  finish: "16th Ligue 1 (2025/26) - won relegation play-off 4-1 on aggregate vs AS Saint-Étienne",
  owner: "INEOS / Sir Jim Ratcliffe (since Jul 2019); Maurice Cohen (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.nice-premium.com/", "https://www.getfootballnewsfrance.com/tag/nice/"],
  queries: ["OGC Nice transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · OGC Nice"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Maxime Dupé", sub:"GK", club:"FC Nantes", pos:"GK", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed as a free agent, confirmed 24 Jun 2026."}
];

const INCOMING = [
  {name:"Franck Magri", sub:"ST", club:"Free agent (ex-Toulouse)", pos:"ST", report:"29 Jul 2026", src:"Get French Football News", tier:2, fee:"Free transfer", truth:48, prob:24, light:"o", trend:"flat", note:"The free-agent forward is on Nice's radar following Elye Wahi's loan departure."},
  {name:"James Tavernier", sub:"34 · RB · England", club:"Free agent (ex-Rangers)", pos:"RB", report:"1 Aug 2026", src:"Get French Football News", tier:2, fee:"Free transfer", truth:50, prob:24, light:"o", trend:"flat", note:"Nice are one of two French suitors (with Paris FC) for the veteran Rangers captain."},
  {name:"Robbie Ure", sub:"FW", club:"IK Sirius", pos:"FW", report:"4 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:45, prob:20, light:"o", trend:"flat", note:"The Allsvenskan top scorer is being tracked by Nice alongside Strasbourg and Lyon."},
  {name:"Kevin Carlos", sub:"MF", club:"Getafe", pos:"MF", report:"12 Jul 2026", src:"Get French Football News", tier:3, fee:"Loan with option", truth:40, prob:22, light:"o", trend:"flat", note:"Turkish side Samsunspor are reported to be pursuing the same player on a loan-with-option deal, complicating Nice's interest."}
];

const OUTGOING = [
  {name:"Mohamed-Ali Cho", sub:"22 · FW · France", club:"Hull City", pos:"FW", report:"2 Aug 2026", src:"Get French Football News", tier:2, fee:"€20m", truth:65, prob:58, light:"g", trend:"up", note:"Hull City's reported €20m offer is described as 'on the verge of finalising' - a big sale for a club needing to hit financial savings targets."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Cho-to-Hull City nearing completion</b>: a reported €20m fee would be a major boost to Nice's finances."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Dupé leaves for Nantes</b>: veteran goalkeeper exits as a free agent."}
];

const NEW = [
  {ar:"✦", t:"Nice survived the drop only via a 4-1 aggregate play-off win over Saint-Étienne, and the summer priority under new free-agent coach Olivier Pantaloni is squarely financial: Roger Ricort is targeting €70m in savings before the window shuts."}
];

const IGNORE = [
  {ar:"✕", t:"<b>William Mikelbrencis</b>: the free-agent Hamburg defender was linked with Nice in late July but instead received an offer from Valencia - the move to Nice appears dead."}
];

const POSITIONS = [];

const WATCHLIST = [
  {name:"Mohamed-Ali Cho", club:"OGC Nice", pos:"FW", dir:"out", age:"~1 day", tier:2, note:"Hull City's €20m bid reported close to being finalised."}
];

const HUB = {
  "gffn-nice": {l:"Get French Football News · Nice", u:"https://www.getfootballnewsfrance.com/tag/nice/"},
  "nicepremium": {l:"Nice Premium", u:"https://www.nice-premium.com/"}
};

const LINKMAP = {
  "Maxime Dupé": ["gffn-nice"],
  "Franck Magri": ["gffn-nice"],
  "James Tavernier": ["gffn-nice"],
  "Robbie Ure": ["gffn-nice"],
  "Kevin Carlos": ["gffn-nice"],
  "Mohamed-Ali Cho": ["gffn-nice"],
  "William Mikelbrencis": ["gffn-nice"]
};
const WL_LINKMAP = {
  "Mohamed-Ali Cho": ["gffn-nice"]
};

const PROSE = {
  heroH2: `Survival secured, now the accountants take over`,
  heroLede: `Nice stayed up only by beating Saint-Étienne 4-1 on aggregate in the relegation play-off, and this window is about balancing the books as much as the squad: Sporting Director figure <b>Roger Ricort</b> is reportedly targeting €70m in savings, with <b>Mohamed-Ali Cho</b>'s near-complete €20m move to Hull City doing much of the heavy lifting. New head coach <b>Olivier Pantaloni</b>, hired as a free agent after guiding Lorient to promotion, takes charge of a club in transition.`,
  metaRow: `<span>DECISION-MAKER: <b>Maurice Cohen</b> (President)</span> <span>HEAD COACH: <b>Olivier Pantaloni</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">16<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Cho's move to Hull City is reported as close to being finalised.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Cho's sale is the key piece of Nice's financial reset this summer.`,
  pricingBanner: ``,
  excludedNote: `Mikelbrencis' move collapsed after Valencia intervened - kept here for transparency, not as a live story.`,
  spendIn: { v: `Free-agent targets`, x: `Magri, Tavernier and Ure are all free-agent or low-cost targets rather than fee-based deals.` },
  spendOut: { v: `€20m expected`, x: `Cho's reported move to Hull City would be a significant boost toward the club's savings target.` },
  methodLegend: ``
};
