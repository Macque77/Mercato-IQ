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
  {name:"Billal Brahimi", sub:"MF", to:"permanent", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Experienced Ligue 1 addition as part of the club's promotion-season retention and reinforcement strategy."},
  {name:"Daouda Traore", sub:"Continues Le Mans' post-promotion strengthening", club:"Undisclosed parent club", pos:"N/A", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joins on loan as newly-promoted Le Mans FC continues reinforcing its squad for Ligue 1."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Rayan Bamba", sub:"22-year-old defender, returning from loan spell at Nancy", club:"Stade Rennais", pos:"RB", report:"Le Mans, newly promoted to Ligue 1, are set to take Rennes right-back Rayan Bamba on loan again to add competition at right-back after his 20-appearance Ligue 2 loan at Nancy.", src:"Foot Mercato", tier:2, fee:"Loan", truth:70, prob:65, light:"g", trend:"flat", note:"Reported alongside separate Actu.fr coverage of Le Mans needing right-back depth.", lastSeen:"2026-08-04T19:10:50Z", baseProb:65, dead:true, deadReason:"Existing rumour without fresh snippet confirmation; no materially new information in recent snippets"},
  {name:"Louis Mafouta", sub:"24 · France · F", club:"Guingamp", pos:"Attacker", report:"Official arrival from Guingamp until 2028", src:"L'Équipe", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Deal officially confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Yasser Larouci", sub:"24 · France · D", club:"Liverpool", pos:"Left-back", report:"Experienced left-back signing confirmed", src:"Ouest-France", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Deal officially announced", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];

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
  "ligue1-lemans": {l:"Ligue1.com · Troyes and Le Mans prepare for Ligue 1", u:"https://ligue1.com/en/articles/l1_article_5560-promoted-pair-troyes-and-le-mans-prepare-for-the-ligue-1-challenge"},
  actufrRayanBamba: {l:"Actu.fr", u:"https://actu.fr/pays-de-la-loire/le-mans_72181/mercato-un-nouveau-lateral-droit-devrait-apporter-de-la-concurrence-dans-les-rangs-du-mans-fc_64604081.html"},
  ouestFranceLouisMafouta: {l:"Ouest-France", u:"https://www.ouest-france.fr/sport/football/le-mans-fc/mercato-le-mans-fc-louis-mafouta-sur-le-depart-a-guingamp-et-en-route-vers-la-ligue-1-459503cc-7c68-11f1-a3cc-61ee167b6bba"},
  maxifootDaoudaTraore: {l:"Maxifoot", u:"https://www.msn.com/fr-fr/sport/football/mercato-le-mans-daouda-traor%C3%A9-arrive-en-pr%C3%AAt/ar-AA29fAz8"},
  lquipeLouisMafouta: {l:"L'Équipe", u:"https://news.google.com/rss/articles/CBMi2wFBVV95cUxPb2JxaEJrZVd2ZnExOGlFRElhWDJHMkwzaExGTFJDQ3dEcmxsRnhUUW9hZENIQTdlWGo5U2M1TzlwTzlWT3FaNlh0UlBtWDVCSVZpVE9tMkcwOTVmQ2I2X2xPMWtlcl8yM0tvVnp3ZGtMWUx2WDhnZ3NscUtOMXlhX0g3YzB1TElRSFN4TFJnejJ5cktDUjB0Z3I3NHBzZmpiMTdSSm9aZXk1amtzVlZ6Rk5tOUhNY1gzVmdUY2NaVXRxU0cwcVJhY3IyMXF4YUVFekVvRWRhUXB5NEk"},
  ouestFranceYasserLarouci: {l:"Ouest-France", u:"https://news.google.com/rss/articles/CBMi-AFBVV95cUxOQS1BWXhkc0ZVNzRhRmVFLVpXdWZSRUlrbl9PWTFZeVM0YV9OLVhXUU5MZVBVOEJGaWhCdTA0aEc3djYzRmpuTGRjY0N2ZS1zNm13MFlvTkRoZFpTQ05fWWtXOXB1VHJ4MklaaU9VejR4WXFFZ3RRbEVBeXE0cUtxeFZkTktrWktwbEctX0s4Ukp0dEl2bUpKNXo4OF9NMW5pQXlFajBZektBZ0dJNjE3cXBtWmFBSVdod1p6andmVmRNYm8zb05KVGlBU1hFVUxNemZQRnQ3b3gzbS16cDdQUVU0NTduclhPeXdrUWJBU0hiRHRYUnhmQQ"}};

const LINKMAP = {
  "Yasser Larouci": ["gffn-lemans", "ouestFranceYasserLarouci"],
  "Louis Mafouta": ["ligue1-lemans", "ouestFranceLouisMafouta", "lquipeLouisMafouta"],
  "Billal Brahimi": ["ligue1-lemans"],
  "Rayan Bamba": ["actufrRayanBamba"],
  "Daouda Traore": ["maxifootDaoudaTraore"]};
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
