/* ============================================================
   MERCATO IQ · CLUB DATA · LE MANS FC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Le Mans FC",
  mono: "LMFC",
  slug: "le-mans-fc",
  primary: "#8B0000",
  primaryBright: "#D4A017",
  primaryDeep: "#4A0000",
  primaryRgb: "139,0,0",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Patrick Videira",
  dof: "TBD - Bruno Cheyrou (Football Advisor, ex-Lyon/PSG sporting director); Alexandre Jeannin & Sébastien Sirot (recruitment); Olivier Thomas (Sporting Coordinator, from Jul 2026)",
  europe: "None (2026/27)",
  finish: "Promoted from Ligue 2 (2025/26) - confirmed 27 Apr 2026 by the LFP Disciplinary Committee following an abandoned final-day match at Bastia",
  owner: "OutField investment consortium - Novak Djokovic, Felipe Massa and Kevin Magnussen (stakes since Aug 2025), joined by Thibaut Courtois (Feb 2026); Thierry Gomez (Chairman)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://ligue1.com/en/articles/l1_article_5560-promoted-pair-troyes-and-le-mans-prepare-for-the-ligue-1-challenge", "https://www.getfootballnewsfrance.com/tag/le-mans/"],
  queries: ["Le Mans FC transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Le Mans FC"
};

const CONFIRMED_IN = [
  {name:"Yasser Larouci", sub:"25 · LB · Algeria", to:"permanent, free agent (ex-Liverpool)", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 14 Jul 2026 on a three-year contract - a notable free-agent pickup for a newly-promoted side."},
  {name:"Louis Mafouta", sub:"ST", to:"permanent", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed after head coach Patrick Videira specifically requested 'a recognised finisher with the desire to prove himself at Ligue 1 level.'"},
  {name:"Billal Brahimi", sub:"MF", to:"permanent", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Experienced Ligue 1 addition as part of the club's promotion-season retention and reinforcement strategy."}
];

const CONFIRMED_OUT = [];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Larouci signs as a free agent</b>: former Liverpool left-back arrives on a three-year deal."},
  {ar:"⬆", t:"<b>Mafouta and Brahimi add Ligue 1 experience</b>: both signed to help secure survival on a budget described as one of the smallest in the division (~€25m)."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Le Mans' unusual ownership group - including tennis champion Novak Djokovic and F1 drivers Felipe Massa and Kevin Magnussen via the OutField consortium, joined by Thibaut Courtois - backs a modest but targeted rebuild for the club's Ligue 1 return."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "gffn-lemans": {l:"Get French Football News · Le Mans", u:"https://www.getfootballnewsfrance.com/tag/le-mans/"},
  "ligue1-lemans": {l:"Ligue1.com · Troyes and Le Mans prepare for Ligue 1", u:"https://ligue1.com/en/articles/l1_article_5560-promoted-pair-troyes-and-le-mans-prepare-for-the-ligue-1-challenge"}
};

const LINKMAP = {
  "Yasser Larouci": ["gffn-lemans"],
  "Louis Mafouta": ["ligue1-lemans"],
  "Billal Brahimi": ["ligue1-lemans"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A small budget, a star-studded boardroom, and a targeted rebuild`,
  heroLede: `Le Mans return to Ligue 1 for the first time in sixteen years backed by one of French football's more unusual ownership groups - the OutField consortium, whose investors include <b>Novak Djokovic</b>, <b>Felipe Massa</b> and <b>Kevin Magnussen</b>, joined more recently by <b>Thibaut Courtois</b>. On a budget of around €25m, one of the smallest in the division, head coach <b>Patrick Videira</b> has prioritised experience: free-agent full-back <b>Yasser Larouci</b>, striker <b>Louis Mafouta</b> and midfielder <b>Billal Brahimi</b> all arrive with top-flight know-how.`,
  metaRow: `<span>DECISION-MAKER: <b>Thierry Gomez</b> (Chairman)</span> <span>HEAD COACH: <b>Patrick Videira</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">Promoted</div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: `No genuine outgoing rumours have surfaced yet for a squad still being built up, not sold from.`,
  spendIn: { v: `Free + undisclosed fees`, x: `Larouci arrives free; Mafouta and Brahimi's fees are undisclosed but modest given the club's ~€25m budget.` },
  spendOut: { v: `None reported`, x: `No confirmed departures this window.` },
  methodLegend: ``
};
