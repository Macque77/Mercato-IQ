/* ============================================================
   MERCATO IQ · CLUB DATA · FIORENTINA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Fiorentina",
  mono: "FIO",
  slug: "fiorentina",
  primary: "#5B2A83",
  primaryBright: "#8B4FC4",
  primaryDeep: "#2E1547",
  primaryRgb: "91,42,131",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Fabio Grosso (since 8 Jun 2026, arriving from Sassuolo)",
  dof: "Daniele Pradè (Sporting Director)",
  europe: "None for 2026/27",
  finish: "15th Serie A (2025/26)",
  owner: "Rocco Commisso (Owner/President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/fiorentina/", "https://www.violanation.com/"],
  queries: ["Fiorentina transfer news 2026", "Fiorentina Atta Dragusin Kean", "Fiorentina Grosso signings"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Fiorentina"
};

const CONFIRMED_IN = [
  {name:"Arthur Atta", sub:"20 · CM · France", to:"permanent from Udinese", fee:"€40m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 11 Jul after medicals on the 9th. The headline signing of the summer - a significant fee for a highly-rated young midfielder."},
  {name:"Radu Dragusin", sub:"24 · CB · Romania", to:"permanent from Tottenham", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreed 5 Jul, medical completed 7 Jul. Centre-back reinforcement from the Premier League."},
  {name:"Viery Fernandes Santos Lopes", sub:"22 · CB · Brazil", to:"permanent from Gremio", fee:"€15m (with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 Jul. Further defensive investment from Brazil."},
  {name:"João Mário", sub:"Juventus academy", club:"permanent from Juventus", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed via Di Marzio's live mercato digest, days after medicals were reported as imminent."},
  {name:"Joao Mario", sub:"Defender, Portugal, 22", club:"Juventus", pos:"CB", fee:"Loan with right of redemption", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Deal finalized with medicals held on 3 August 2026; reported as a return to Fiorentina for the young defender under coach Paolo Vanoli/Daniele Galloppa's staff."}
];

const CONFIRMED_OUT = [
  {name:"Lucas Beltran", sub:"25 · ST · Argentina", club:"River Plate", pos:"ST", fee:"€6m plus 50% of any future sale", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Jul. Striker returns to Argentina with Fiorentina retaining a significant sell-on interest."},
  {name:"Jacopo Fazzini", sub:"22 · AM · Italy", club:"Cagliari", pos:"AM", fee:"€8m (loan + option to buy)", free:false, status:"done", statusTxt:"DONE, LOAN OUT", note:"Confirmed 13 Jul. Sent out on loan with a route to a permanent Cagliari deal."},
  {name:"Simon Sohm", sub:"24 · CM · Switzerland", club:"Venezia", pos:"CM", fee:"Loan + €10m option to buy", free:false, status:"done", statusTxt:"DONE, LOAN OUT", note:"Confirmed 31 Jul. Loaned to newly-promoted Venezia with an option to make the move permanent."}
];

const INCOMING = [
  {name:"Kristian Thorstvedt", sub:"25 · CM · Norway", club:"Sassuolo", pos:"CM", report:"2 Jul 2026", src:"Football Italia", tier:2, fee:"~€15m (asking price)", truth:55, prob:35, light:"y", trend:"up", note:"A meeting between the clubs was scheduled after Fiorentina's initial approach; Sassuolo's asking price is around €15m.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Alexis Rugani", sub:"22 · CB · Italy", club:"Juventus", pos:"CB", report:"5 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:50, prob:30, light:"y", trend:"up", note:"Reported as 'back on the table' after earlier interest cooled.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Christ Inao Oulai", sub:"20 · CM · Ivory Coast", club:"Trabzonspor", pos:"CM", report:"4 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:50, prob:28, light:"o", trend:"flat", note:"Ongoing negotiations reported, not yet at an advanced stage.", lastSeen:"2026-08-04T19:10:50Z", baseProb:28},
  {name:"Tomas Aranda", sub:"20 · CM · Argentina", club:"Boca Juniors", pos:"CM", report:"5 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:45, prob:22, light:"o", trend:"flat", note:"Fiorentina's interest is complicated by competition from Arsenal for the same player.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Luca Koleosho", sub:"21 · W · Italy", club:"Burnley", pos:"W", report:"3-7 Jul 2026", src:"Football Italia", tier:3, fee:"€11m plus bonuses (bid made)", truth:45, prob:15, light:"o", trend:"down", note:"Fiorentina made an €11m bid but Paris FC are reported to have outbid them for the winger.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Franco Mastantuono", sub:"19 · AM · Argentina", club:"Real Madrid", pos:"AM", report:"4 Aug 2026", src:"Fabrizio Romano", tier:1, fee:"Loan", truth:55, prob:35, light:"y", trend:"flat", note:"A loan exit from Madrid is 'progressing' per Romano, with Mastantuono leading the race to join Fiorentina for regular football.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Jaden Philogene", sub:"Winger, England, 24", club:"Ipswich Town", pos:"RW", report:"Fiorentina are exploring an idea to sign Philogene as attacking reinforcement, listed among the club's live transfer targets.", src:"Calciomercato.com", tier:2, fee:"Undisclosed", truth:45, prob:25, light:"o", trend:"flat", note:"Mentioned only briefly as an 'idea' within a wider live-blog roundup; not yet an advanced negotiation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];

const OUTGOING = [
  {name:"Moise Kean", sub:"26 · ST · Italy", club:"Como / Fenerbahce (rumoured)", pos:"ST", report:"21-23 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:40, prob:18, light:"o", trend:"flat", note:"Kean's representatives have been shopping him around, but coach Fabio Grosso says he'd be happy if the striker stays and hasn't pushed for a sale.", lastSeen:"2026-08-04T19:10:50Z", baseProb:18},
  {name:"Nicolò Fagioli", sub:"25 · CM · Italy", club:"Newcastle United", pos:"CM", report:"2 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:40, prob:15, light:"o", trend:"flat", note:"Monitoring stage only; no bid reported.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Dodo", sub:"Right-back, Brazil, 27", club:"Inter / Napoli", pos:"RB", report:"Dodo is emerging as a top target for Inter after missing out on Marco Palestra, with Napoli also showing strong interest as they look for a right-back alternative.", src:"Yahoo Sports", tier:2, fee:"Undisclosed valuation", truth:65, prob:45, light:"y", trend:"flat", note:"Both Milan clubs (Inter primarily) and Napoli linked; Fiorentina yet to signal willingness to sell.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
];
const DEAD = [];

const RISERS = [
  {ar:"⬆", t:"<b>Arthur Atta official</b>: €40m marquee midfield arrival from Udinese headlines Grosso's first window."},
  {ar:"⬆", t:"<b>Radu Dragusin and Viery Lopes arrive</b>: fresh centre-back options from Tottenham and Gremio."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Lucas Beltran departs</b>: striker returns to River Plate with Fiorentina keeping a 50% sell-on interest."}
];

const NEW = [
  {ar:"✦", t:"Fabio Grosso's first Fiorentina window is defined by a major €40m Atta investment and a defensive overhaul, while Moise Kean's future stays unresolved amid outside interest."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield", w:50, x:"Atta's arrival is the headline, but Thorstvedt, Rugani, Oulai and Aranda are all still being explored as further additions."},
  {p:"Centre-forward", w:35, x:"Kean's future carries genuine outside interest but no advanced move; Grosso wants him to stay."}
];

const WATCHLIST = [
  {name:"Moise Kean", club:"Como / Fenerbahce", pos:"ST", dir:"out", age:"~11 days", tier:3, note:"Agent shopping the player around; club has not pushed for a sale."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Fiorentina", u:"https://football-italia.net/category/teams/fiorentina/"},
  violaNation: {l:"Viola Nation", u:"https://www.violanation.com/"},
  fabrizioRomanoviaFootballTransfersFrancoMastantuono: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-transfer-news-chelsea-trevoh-chalobah-barcelona-rodri-real-madrid-franco-mastantuono"},
  gianlucaDiMarzioJooMrio: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/joao-mario-fiorentina-juventus-trattativa-news-495419"},
  derbyDerbyDerbyFrancoMastantuono: {l:"DerbyDerbyDerby", u:"https://www.derbyderbyderby.it/calciomercato/fiorentina-equasi-fatta-per-mastantuono-dal-real-madrid-arrivera-in-prestito/"},
  calciomercatocomviaMSNJadenPhilogene: {l:"Calciomercato.com (via MSN)", u:"https://www.msn.com/it-it/sport/calcio/calciomercato-live-adzic-verso-il-cagliari-idea-philogene-per-la-fiorentina-ufficiali-akinsanmiro-al-monza-akpoguma-al-frosinone-e-antonio-silva-al-bournemouth/ar-AA28L228"},
  yahooSportsDodo: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/dodo-strong-option-inter-palestra-140000000.html"},
  skySportMoiseKean: {l:"Sky Sport", u:"https://sport.sky.it/calciomercato/2026/08/03/kean-como-fiorentina-calciomercato-news"},
  fanpageitVitoLamorteJoaoMario: {l:"Fanpage.it (Vito Lamorte)", u:"https://www.fanpage.it/sport/live/calciomercato-3-agosto-2026/"}};

const LINKMAP = {
  "Arthur Atta": ["footballItalia"],
  "Radu Dragusin": ["footballItalia"],
  "Viery Fernandes Santos Lopes": ["footballItalia"],
  "Lucas Beltran": ["footballItalia"],
  "Jacopo Fazzini": ["footballItalia"],
  "Simon Sohm": ["violaNation"],
  "Kristian Thorstvedt": ["footballItalia"],
  "Alexis Rugani": ["footballItalia"],
  "Christ Inao Oulai": ["footballItalia"],
  "Tomas Aranda": ["footballItalia"],
  "Luca Koleosho": ["footballItalia"],
  "Pietro Comuzzo": ["footballItalia"],
  "Moise Kean": ["violaNation", "skySportMoiseKean"],
  "Nicolò Fagioli": ["footballItalia"],
  "Franco Mastantuono": ["fabrizioRomanoviaFootballTransfersFrancoMastantuono", "derbyDerbyDerbyFrancoMastantuono"],
  "João Mário": ["gianlucaDiMarzioJooMrio"],
  "Jaden Philogene": ["calciomercatocomviaMSNJadenPhilogene"],
  "Dodo": ["yahooSportsDodo"],
  "Joao Mario": ["fanpageitVitoLamorteJoaoMario"]};
const WL_LINKMAP = {
  "Moise Kean": ["violaNation"],
  "Kristian Thorstvedt": ["footballItalia"]
};

const PROSE = {
  heroH2: `Grosso's first window: a €40m Atta statement and a defensive rebuild`,
  heroLede: `Fiorentina head into 2026/27 under new coach <b>Fabio Grosso</b>, who arrived from Sassuolo after a disappointing 15th-place finish. The club has made a genuine statement in midfield with <b>Arthur Atta's</b> €40m arrival from Udinese, backed up by defensive reinforcements <b>Radu Dragusin</b> (Tottenham) and <b>Viery Fernandes Santos Lopes</b> (Gremio). Outgoing business has included <b>Lucas Beltran's</b> return to River Plate and loan exits for <b>Jacopo Fazzini</b> (Cagliari) and <b>Simon Sohm</b> (Venezia). The biggest open question is <b>Moise Kean's</b> future - genuinely of interest elsewhere, but with Grosso making clear he wants the striker to stay - while <b>Pietro Comuzzo</b> is in advanced talks to join Torino.`,
  metaRow: `<span>DECISION-MAKER: <b>Daniele Pradè</b> (Sporting Director)</span> <span>HEAD COACH: <b>Fabio Grosso</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">15<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: `Thorstvedt and Rugani remain the most advanced further midfield/defensive pursuits.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Kean's situation is genuinely open but not an active sale process; Comuzzo's Torino move is more advanced.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€55m+ committed`, x: `Atta (€40m), Lopes (€15m) and Dragusin (undisclosed) are done.` },
  spendOut: { v: `~€6m banked, more via loans`, x: `Beltran's sale nets an initial €6m plus a future sell-on; Fazzini and Sohm both left on loan with buy options.` },
  methodLegend: ``
};
