/* ============================================================
   MERCATO IQ · CLUB DATA · CAGLIARI · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Cagliari", mono: "CAG", slug: "cagliari",
  primary: "#B30000", primaryBright: "#FF6259", primaryDeep: "#6B0000",
  primaryRgb: "179,0,0",
  breadcrumb: ["Italy","Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Fabio Pisacane (contract extended to 2028)",
  dof: "Vacant - Nereo Bonato departed; President Giulini leading the search for a new sporting director",
  europe: "None for 2026/27",
  finish: "14th Serie A (2025/26)",
  owner: "Tommaso Giulini (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/cagliari/", "https://cagliaricalcio.com/en/news/"],
  queries: ["Cagliari transfer news 2026", "Cagliari Winks Fazzini Romano", "Cagliari Gaetano Atalanta"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Cagliari"
};

const CONFIRMED_IN = [
  {name:"Harry Winks", sub:"29 · CM · England", to:"permanent from Leicester City", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 13 Jul. The former Tottenham midfielder returns to Italian football, saying he's 'really happy to be back in Italy.'"},
  {name:"Jacopo Fazzini", sub:"22 · AM · Italy", to:"loan from Fiorentina, €8m total option to buy", fee:"€8m (loan + option)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 13 Jul. Creative addition on loan with a route to a permanent deal."},
  {name:"Alessandro Romano", sub:"20 · CB · Italy", to:"loan from AS Roma with obligation to buy", fee:"€5m plus add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 Jul. Young centre-back joins with an obligation to buy attached once conditions are met."},
  {name:"Demi Akarakiri", sub:"18 · CM · England", to:"free transfer from Everton", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 4 Jul. Teenage midfielder signed as a free agent for the development pathway."}
];

const CONFIRMED_OUT = [
  {name:"Gianluca Gaetano", sub:"23 · AM · Italy", club:"Atalanta", pos:"AM", fee:"~€14m (with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 9 Jul. Sold to Atalanta at the direct request of new coach Maurizio Sarri."}
];

const INCOMING = [
  {name:"Daniel Maldini", sub:"Attacking midfielder/forward, Italy, 24", club:"Atalanta", pos:"CAM", report:"Cagliari are pushing to land Maldini on loan from Atalanta as part of a parallel operation potentially linked to the Esposito exit.", src:"Fabrizio Romano", tier:1, fee:"Loan, undisclosed buy option", truth:75, prob:55, light:"g", trend:"flat", note:"Reported as more advanced than the Esposito side of the deal; not yet confirmed as an official swap.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Unnamed Juventus prospect / loan replacement", sub:"Attacker, replacement plan if Esposito leaves", club:"Juventus", pos:"ST", report:"Cagliari are lining up a loan striker from Juventus as cover in case Sebastiano Esposito is sold before deadline day.", src:"Sportmediaset", tier:2, fee:"Loan (undisclosed)", truth:55, prob:40, light:"y", trend:"flat", note:"Player not yet named publicly; framed as a contingency plan tied to the Esposito situation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];

const OUTGOING = [
  {name:"Yerry Mina", sub:"31 · CB · Colombia", club:"Fenerbahce (rumoured)", pos:"CB", report:"9 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"Turkish interest reported in the experienced centre-back, but nothing beyond exploratory contact confirmed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Sebastiano Esposito", sub:"Striker, Italy, 23", club:"Atalanta", pos:"ST", report:"Relations between Esposito and Cagliari have broken down over a contract dispute; Cagliari are asking around €18m for the striker, with Atalanta the strongest suitor and Napoli also monitoring. Inter retain a resale percentage.", src:"FC Internews", tier:2, fee:"Asking price approx. €18m", truth:75, prob:60, light:"g", trend:"flat", note:"Cagliari reportedly cut Esposito's wages amid the standoff ('metodo Koopmeiners'); situation is fluid with multiple outlets confirming the rift.", lastSeen:"2026-08-04T19:10:50Z", baseProb:60}
];

const RISERS = [
  {ar:"⬆", t:"<b>Harry Winks, Jacopo Fazzini, Alessandro Romano and Demi Akarakiri all arrive</b>: a busy month of squad-building across midfield and defence."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Gianluca Gaetano departs</b>: creative midfielder sold to Atalanta for around €14m."}
];

const NEW = [
  {ar:"✦", t:"Cagliari have been among Serie A's most active clubs on incomings this window, with four confirmed additions balanced by Gaetano's exit to Atalanta - all while the club searches for a permanent replacement for outgoing sporting director Nereo Bonato."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Thomas Berenbruch loan</b>: fell through - the Inter youngster opted for Utrecht instead of Cagliari."}
];

const POSITIONS = [
  {p:"Central defence", w:35, x:"Romano's loan addresses depth, though Mina's future adds a small question mark at the other end of the defensive spectrum."},
  {p:"Central/attacking midfield", w:30, x:"Winks and Fazzini both arrived to freshen the middle of the park after Gaetano's departure."}
];

const WATCHLIST = [
  {name:"Yerry Mina", club:"Fenerbahce", pos:"CB", dir:"out", age:"~3 weeks", tier:3, note:"Turkish interest reported but nothing advanced."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Cagliari", u:"https://football-italia.net/category/teams/cagliari/"},
  club: {l:"Cagliari Calcio Official", u:"https://cagliaricalcio.com/en/news/"},
  gonfialaRetecitingFabrizioRomanoDanielMaldini: {l:"Gonfia la Rete (citing Fabrizio Romano)", u:"https://www.gonfialarete.com/2026/08/04/calciomercato-prove-di-scambio-tra-cagliari-e-atalanta-il-punto-della-situazione/"},
  sportmediasetviaMSNUnnamedJuventusprospectloanreplacement: {l:"Sportmediaset (via MSN)", u:"https://www.msn.com/it-it/sport/calcio/cagliari-esposito-che-intrigo-la-percentuale-per-linter-il-sostituto-dalla-juve-e-il-napoli-alla-finestra"},
  fCInternewsviaMSNSebastianoEsposito: {l:"FC Internews (via MSN)", u:"https://www.msn.com/it-it/sport/calcio/il-cagliari-chiede-18-milioni-per-esposito-intanto-arriva-il-sostituto"}};

const LINKMAP = {
  "Harry Winks": ["footballItalia","club"],
  "Jacopo Fazzini": ["footballItalia","club"],
  "Alessandro Romano": ["footballItalia","club"],
  "Demi Akarakiri": ["footballItalia","club"],
  "Gianluca Gaetano": ["footballItalia"],
  "Yerry Mina": ["footballItalia"],
  "Daniel Maldini": ["gonfialaRetecitingFabrizioRomanoDanielMaldini"],
  "Unnamed Juventus prospect / loan replacement": ["sportmediasetviaMSNUnnamedJuventusprospectloanreplacement"],
  "Sebastiano Esposito": ["fCInternewsviaMSNSebastianoEsposito"]};
const WL_LINKMAP = {
  "Yerry Mina": ["footballItalia"]
};

const PROSE = {
  heroH2: `Pisacane's rebuild: four fresh faces in as Gaetano cashes out to Atalanta`,
  heroLede: `Cagliari head into 2026/27 with coach <b>Fabio Pisacane</b> rewarded with a contract extension to 2028 after steering the club to 14th place, even as the sporting-director chair sits vacant following <b>Nereo Bonato's</b> exit. On the pitch it has been a genuinely busy window: <b>Harry Winks</b>, <b>Jacopo Fazzini</b>, <b>Alessandro Romano</b> and <b>Demi Akarakiri</b> have all arrived to refresh the midfield and defence, funded in part by <b>Gianluca Gaetano's</b> sale to Atalanta - a deal made directly at new Atalanta coach Maurizio Sarri's request. <b>Yerry Mina's</b> future carries some Turkish interest, but nothing beyond speculation so far.`,
  metaRow: `<span>DECISION-MAKER: <b>Tommaso Giulini</b> (President)</span> <span>HEAD COACH: <b>Fabio Pisacane</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">14<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">4</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Mina's situation is speculative rather than an active sale process.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€13m+ committed`, x: `Fazzini (€8m loan+option) and Romano (€5m) carry fees; Winks and Akarakiri arrived free/undisclosed.` },
  spendOut: { v: `~€14m banked`, x: `Gaetano's sale to Atalanta is the major outgoing fee of the window so far.` },
  methodLegend: ``
};
