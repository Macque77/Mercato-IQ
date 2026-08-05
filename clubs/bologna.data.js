/* ============================================================
   MERCATO IQ · CLUB DATA · BOLOGNA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bologna", mono: "BOL", slug: "bologna",
  primary: "#8B1E3F", primaryBright: "#C0526A", primaryDeep: "#4A0F21",
  primaryRgb: "139,30,63",
  breadcrumb: ["Italy","Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Domenico Tedesco (since 2 Jun 2026, replacing Vincenzo Italiano)",
  dof: "Claudio Fenucci (CEO/Director)",
  europe: "None confirmed for 2026/27 (8th-place finish; Coppa Italia berth went to Inter as league champions)",
  finish: "8th Serie A (2025/26)",
  owner: "Joey Saputo (Saputo family)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/bologna/"],
  queries: ["Bologna transfer news 2026", "Bologna Lucumi Rowe Castro Dovbyk", "Bologna Tedesco signings"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Bologna"
};

const CONFIRMED_IN = [
  {name:"Rahim Alhassane", sub:"22 · LB · France", to:"permanent from Real Oviedo", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 20 Jul. Left-back reinforcement for Tedesco's first Bologna squad."},
  {name:"Mikel Amondarain", sub:"22 · CM · Argentina", to:"permanent from Estudiantes", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed despite reported Nottingham Forest interest in the same player."},
  {name:"Artem Dovbyk", sub:"Striker, UKR, 28", club:"AS Roma", pos:"ST", fee:"Part of Castro swap deal", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Arrives as part of the operation that sent Santiago Castro to Roma; player said he chose the club for its directors and coach, calling himself 'ambitious.'"},
  {name:"Alhassane Ndiaye", sub:"Defender", club:"Undisclosed", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Recently presented to the club; deal reported as closed by Il Sussidiario."}
];

const CONFIRMED_OUT = [
  {name:"Federico Ravaglia", sub:"25 · GK · Italy", club:"Watford", pos:"GK", fee:"Undisclosed, with buy-back option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 31 Jul. Goalkeeper departs for Watford with Bologna retaining a buy-back clause."},
  {name:"Santiago Castro", sub:"Striker, ARG, 21", club:"AS Roma", pos:"ST", fee:"€35m + bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure to Roma, receiving the number 9 shirt there; part of the same operation bringing Artem Dovbyk to Bologna."},
  {name:"Marco Ravaglia", sub:"Goalkeeper, ITA", club:"Watford", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Definitive transfer completed with a buyback clause included for Bologna."}
];

const INCOMING = [
];

const OUTGOING = [
  {name:"Jhon Lucumi", sub:"27 · CB · Colombia", club:"Multiple (Juventus, Inter, Man Utd linked)", pos:"CB", report:"Jul 2026", src:"Football Italia", tier:2, fee:"€25m (asking price)", truth:55, prob:30, light:"y", trend:"up", note:"CEO Claudio Fenucci has confirmed the club promised Lucumi an exit for the right offer; Bologna already rejected a Besiktas bid of €12m plus Jean Onana as insufficient.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Jonathan Rowe", sub:"22 · W · England", club:"Multiple (Chelsea, Aston Villa, Everton linked)", pos:"W", report:"Jul 2026", src:"Football Italia", tier:2, fee:"€40-45m (asking price)", truth:52, prob:25, light:"o", trend:"flat", note:"Three Premier League clubs credited with interest, but Bologna's high asking price and Fenucci's public praise of the player suggest no active push to sell.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Juan Miranda", sub:"Left-back, ESP, 26", club:"Juventus (interest)", pos:"LB", report:"Juventus have registered interest and reportedly offered around €17m against Bologna's €25m valuation, but Bologna are instead seriously considering triggering a contract-renewal clause to keep him.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:45, prob:20, light:"o", trend:"flat", note:"Bologna's move toward a renewal significantly reduces the likelihood of a sale this window; Como mentioned as an alternative suitor.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Remo Freuler", sub:"Midfielder, SUI, 33", club:"Foreign clubs (unnamed)", pos:"CM", report:"Unnamed foreign offers have been reported for the veteran midfielder, though he is said to be unconvinced about leaving.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:30, prob:15, light:"o", trend:"flat", note:"Player reluctance reported as the main obstacle rather than club valuation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Thijs Dallinga", sub:"Forward, NED, 24", club:"Unspecified", pos:"ST", report:"A departure is being tied to incoming striker business, suggesting Dallinga could make way once Bologna's attack is reshaped post-Castro sale.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:35, prob:20, light:"o", trend:"flat", note:"Contingent on further Bologna forward signings rather than an active negotiation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];

const RISERS = [
  {ar:"⬆", t:"<b>Rahim Alhassane and Mikel Amondarain arrive</b>: Tedesco's first Bologna signings add left-back and midfield depth."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Federico Ravaglia departs</b>: goalkeeper sold to Watford, with a buy-back clause retained."}
];

const NEW = [
  {ar:"✦", t:"Domenico Tedesco's first Bologna window features three genuine sale candidates (Castro, Lucumi, Rowe) and one live incoming (Dovbyk) tangled up in the same Roma conversation."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-forward", w:60, x:"Castro's exit talks with Roma and the parallel Dovbyk loan discussion make the striker position genuinely fluid."},
  {p:"Centre-back / winger sales", w:45, x:"Both Lucumi and Rowe carry real Premier League and Serie A interest; neither is confirmed as departing."}
];

const WATCHLIST = [
  {name:"Santiago Castro", club:"AS Roma", pos:"ST", dir:"out", age:"~1 day", tier:2, note:"Negotiations reported with a potential Dovbyk swap attached."},
  {name:"Jhon Lucumi", club:"Multiple", pos:"CB", dir:"out", age:"~3 weeks", tier:2, note:"Club has promised an exit for the right offer; Besiktas bid already rejected."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Bologna", u:"https://football-italia.net/category/teams/bologna/"},
  club: {l:"Bologna FC 1909 Official", u:"https://www.bolognafc.it/en/news"},
  tuttoMercatoWebJuanMiranda: {l:"TuttoMercatoWeb", u:"https://www.tuttomercatoweb.com/bologna"},
  calciomercatoitSantiagoCastro: {l:"Calciomercato.it", u:"https://www.calciomercato.it/"}};

const LINKMAP = {
  "Rahim Alhassane": ["footballItalia"],
  "Mikel Amondarain": ["footballItalia", "tuttoMercatoWebJuanMiranda"],
  "Federico Ravaglia": ["footballItalia"],
  "Artem Dovbyk": ["footballItalia", "tuttoMercatoWebJuanMiranda"],
  "Santiago Castro": ["footballItalia", "calciomercatoitSantiagoCastro"],
  "Jhon Lucumi": ["footballItalia"],
  "Jonathan Rowe": ["footballItalia"],
  "Juan Miranda": ["tuttoMercatoWebJuanMiranda"],
  "Remo Freuler": ["tuttoMercatoWebJuanMiranda"],
  "Thijs Dallinga": ["tuttoMercatoWebJuanMiranda"],
  "Alhassane Ndiaye": ["tuttoMercatoWebJuanMiranda"],
  "Marco Ravaglia": ["tuttoMercatoWebJuanMiranda"]};
const WL_LINKMAP = {
  "Santiago Castro": ["footballItalia"],
  "Jhon Lucumi": ["footballItalia"]
};

const PROSE = {
  heroH2: `Tedesco's first window: three genuine sale candidates and a tangled Roma conversation over the No.9 shirt`,
  heroLede: `Bologna enter 2026/27 under new coach <b>Domenico Tedesco</b>, who replaced Vincenzo Italiano in June after a strong 8th-place finish that included a run to the Europa League quarter-finals (no European football is confirmed for this coming season, with Inter's title-and-cup double sending the Coppa Italia berth elsewhere). The squad has real earning potential this summer: <b>Santiago Castro</b> is in talks to join Roma for around €35m, with <b>Artem Dovbyk</b> potentially arriving the other way on loan - though Genoa's Daniele De Rossi is also chasing Dovbyk. <b>Jhon Lucumi</b> and <b>Jonathan Rowe</b> are both attracting genuine Premier League and Serie A interest, while CEO <b>Claudio Fenucci</b> has confirmed Lucumi was promised an exit for the right price. Incoming business so far has been modest: <b>Rahim Alhassane</b> and <b>Mikel Amondarain</b> add depth, and goalkeeper <b>Federico Ravaglia</b> has departed for Watford with a buy-back clause.`,
  metaRow: `<span>DECISION-MAKER: <b>Claudio Fenucci</b> (CEO)</span> <span>HEAD COACH: <b>Domenico Tedesco</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">8<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Castro, Lucumi and Rowe are all genuinely in-market, but none is confirmed as departing yet.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€3.5m+ committed`, x: `Alhassane (~€3.5m) and Amondarain (undisclosed) are done; a Dovbyk loan would add further business.` },
  spendOut: { v: `Potentially significant`, x: `Castro (€35m target price), Lucumi (€25m asking) and Rowe (€40-45m asking) could combine for a major summer of departures if all progress.` },
  methodLegend: ``
};
