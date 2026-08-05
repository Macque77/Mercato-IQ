/* ============================================================
   MERCATO IQ · CLUB DATA · COMO 1907 · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Como 1907", mono: "COM", slug: "como",
  primary: "#0057A8", primaryBright: "#5CA9FF", primaryDeep: "#00335F",
  primaryRgb: "0,87,168",
  breadcrumb: ["Italy","Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Cesc Fàbregas (turned down Chelsea approach to stay)",
  dof: "No permanent sporting director publicly named - recruitment led jointly by ownership and Fàbregas",
  europe: "UEFA Champions League (2026/27) - the club's first-ever European campaign",
  finish: "4th Serie A (2025/26)",
  owner: "Hartono family (Indonesia); Mirwan Suwarso, President",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/como/"],
  queries: ["Como transfer news 2026", "Como Chalobah Kean Fabregas", "Como Champions League signings"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Como"
};

const CONFIRMED_IN = [
  {name:"Trevoh Chalobah", sub:"Centre-back, England, 26", club:"Chelsea", pos:"CB", fee:"€30m plus €6m in add-ons (approx. £31m)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Fabrizio Romano confirmed a verbal agreement; medicals scheduled. Reported by several outlets as Como's marquee summer signing."}
];

const CONFIRMED_OUT = [
  {name:"Mergim Vojvoda", sub:"30 · RB · Kosovo", club:"Udinese", pos:"RB", fee:"€1.6m (with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 19 Jul. Full-back departs for Udinese in a modest fee deal."},
  {name:"Konstantinos Koulierakis", sub:"Centre-back, Greece, 21", club:"Roma", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported as officially completed to Roma rather than Como, closing that transfer avenue for Fabregas' side."}
];

const INCOMING = [
  {name:"Moise Kean", sub:"26 · ST · Italy", club:"Fiorentina", pos:"ST", report:"23 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:40, prob:18, light:"o", trend:"flat", note:"Kean's representatives have been shopping the striker to Como (and Fenerbahce), with Como said to have made contact citing Champions League football as a selling point; Fiorentina coach Fabio Grosso says he'd be happy if Kean stays but won't rule out a sale.", lastSeen:"2026-08-04T19:10:50Z", baseProb:18},
  {name:"Yan Couto", sub:"Right-back, Brazil, 24", club:"Borussia Dortmund", pos:"RB", report:"Como are closing in on Yan Couto from Borussia Dortmund, with the move described as close to completion though slowed by Dortmund's administrative processes.", src:"Calciomercato.com", tier:2, fee:"Undisclosed (loan/permanent details still being finalized)", truth:75, prob:70, light:"g", trend:"flat", note:"Gianluca Di Marzio previously reported Como reopening contacts with Dortmund on a loan-based structure.", lastSeen:"2026-08-04T19:10:50Z", baseProb:70}
];

const OUTGOING = [
  {name:"Alvaro Morata", sub:"Striker, Spain, 33", club:"Undisclosed", pos:"ST", report:"Morata is reported as departing Como this summer amid the club's need to balance the books after heavy spending.", src:"TuttoMercatoWeb", tier:2, fee:"Undisclosed", truth:55, prob:50, light:"y", trend:"flat", note:"Como face financial fair-play pressure and may need further departures after major incoming signings.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50}
];

const RISERS = [
  {ar:"⬆", t:"<b>Trevoh Chalobah pursuit advances</b>: Como return with an improved bid after Chelsea's initial rejection, narrowing the gap to the Blues' €35m valuation."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Como are recruiting with Champions League ambition for the first time in the club's history, with a genuine Chalobah negotiation underway and contact made over Moise Kean."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-back", w:60, x:"Chalobah is a live, advancing negotiation as Como look to add Champions League-ready defensive depth."},
  {p:"Centre-forward", w:35, x:"Kean interest is at an early, contact-only stage rather than an advanced negotiation."}
];

const WATCHLIST = [
  {name:"Trevoh Chalobah", club:"Chelsea", pos:"CB", dir:"in", age:"~9 days", tier:2, note:"Como have improved their bid after an initial €30m offer was rejected."},
  {name:"Moise Kean", club:"Fiorentina", pos:"ST", dir:"in", age:"~11 days", tier:3, note:"Kean's agent has shopped him to Como; contact made but no offer confirmed."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Como", u:"https://football-italia.net/category/teams/como/"},
  calciomercatocomYanCouto: {l:"Calciomercato.com", u:"https://www.msn.com/it-it/sport"},
  skySportMoiseKean: {l:"Sky Sport", u:"https://sport.sky.it/calciomercato/2026/08/03/kean-como-fiorentina-calciomercato-news"},
  tuttoMercatoWebAlvaroMorata: {l:"TuttoMercatoWeb", u:"https://www.tuttomercatoweb.com/como"},
  yahooSportscitingFabrizioRomanoTrevohChalobah: {l:"Yahoo Sports (citing Fabrizio Romano)", u:"https://sports.yahoo.com/articles/como-agree-31m-deal-sign"}};

const LINKMAP = {
  "Mergim Vojvoda": ["footballItalia"],
  "Trevoh Chalobah": ["footballItalia", "yahooSportscitingFabrizioRomanoTrevohChalobah"],
  "Moise Kean": ["footballItalia", "skySportMoiseKean"],
  "Yan Couto": ["calciomercatocomYanCouto"],
  "Alvaro Morata": ["tuttoMercatoWebAlvaroMorata"],
  "Konstantinos Koulierakis": ["calciomercatocomYanCouto"]};
const WL_LINKMAP = {
  "Trevoh Chalobah": ["footballItalia"],
  "Moise Kean": ["footballItalia"]
};

const PROSE = {
  heroH2: `First-ever Champions League season: Fàbregas stays, Chalobah pursuit heats up`,
  heroLede: `Como's remarkable rise continues: a 4th-place finish secures the club's first-ever Champions League campaign, and head coach <b>Cesc Fàbregas</b> has turned down interest from Chelsea to stay and lead it. Recruitment is matching the ambition - Como have gone back in with an improved bid for Chelsea centre-back <b>Trevoh Chalobah</b> after an initial €30m offer was rejected, and have made contact over Fiorentina's <b>Moise Kean</b>, using Champions League football as part of the pitch. Outgoing business has been limited to full-back <b>Mergim Vojvoda's</b> modest move to Udinese.`,
  metaRow: `<span>DECISION-MAKER: <b>Mirwan Suwarso</b> (President)</span> <span>HEAD COACH: <b>Cesc Fàbregas</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">4<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `No signings confirmed yet; Chalobah is the most advanced pursuit.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Only Vojvoda's modest sale to Udinese confirmed; no other departures reported as advanced.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `TBD - no signings confirmed`, x: `Chalobah (€30-35m) is the live target as Como push to close the gap on Chelsea's valuation.` },
  spendOut: { v: `~€1.6m banked`, x: `Vojvoda's sale to Udinese is the only confirmed departure.` },
  methodLegend: ``
};
