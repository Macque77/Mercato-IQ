/* ============================================================
   MERCATO IQ · CLUB DATA · VENEZIA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Venezia", mono: "VEN", slug: "venezia",
  primary: "#FF7900", primaryBright: "#FFA85C", primaryDeep: "#8F4400",
  primaryRgb: "255,121,0",
  breadcrumb: ["Italy","Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Giovanni Stroppa (led Venezia to the 2025/26 Serie B title)",
  dof: "Club sporting management (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "Promoted - 2025/26 Serie B champions (81 pts)",
  owner: "Duncan Niederauer-led ownership group",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/venezia/"],
  queries: ["Venezia transfer news 2026", "Venezia Stroppa signings promoted", "Venezia Akor Adams Rrahmani"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Venezia"
};

const CONFIRMED_IN = [
  {name:"Albion Rrahmani", sub:"25 · ST · Kosovo", to:"permanent from Sparta Prague", fee:"€7.5m plus €2m add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 3 Jul. Marquee striker signing for the newly-promoted side."},
  {name:"Thierry Rendall Correia", sub:"26 · LB · Portugal", to:"free transfer from Valencia", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 22 Jun. Free-agent full-back reinforcement."},
  {name:"Korel Lisman", sub:"24 · W · Netherlands", to:"permanent from Lech Poznan", fee:"~€2m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 27 Jun. Wide-attack addition."},
  {name:"Ale Gomes", sub:"25 · CB · Portugal", to:"permanent from Real Zaragoza", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 4 Jul. Centre-back reinforcement for the Serie A step-up."},
  {name:"Redouane Halhal", sub:"23 · CB · Belgium", to:"permanent from KV Mechelen", fee:"€5m plus add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 31 Jul. Further defensive depth added late in the window."},
  {name:"Simon Sohm", sub:"24 · CM · Switzerland", to:"loan from Fiorentina with €10m option to buy", fee:"Loan + €10m option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 31 Jul. Midfield loan addition from Fiorentina with a route to a permanent deal."},
  {name:"Kornel Lisman", sub:"Striker, POL", club:"Real Zaragoza", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed through 2030."},
  {name:"Armel Bella-Kotchap", sub:"Centre-back, GER, 24", club:"Hellas Verona", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joined on a deal through 2030 with an option."},
  {name:"Ale Gomes Furtado", sub:"Defender, ESP/POR, class 2008", club:"Real Zaragoza", pos:"CB", fee:"~€2m plus bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young prospect acquisition for the academy/first-team pathway."},
  {name:"Akor Adams", sub:"Striker, NGA, 24", club:"Sevilla", pos:"ST", fee:"Reported club-record fee (~€8m range)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Described locally as a record signing for the club's attack."}
];

const CONFIRMED_OUT = [
  {name:"Michael Svoboda", sub:"25 · CB · Czech Republic", club:"Brighton", pos:"CB", fee:"€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Jul. Centre-back cashes in with a Premier League move."},
  {name:"Mattia Svoboda", sub:"Defender, captain, ITA/CZE", club:"Brighton & Hove Albion", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move for the former club captain to the Premier League."},
  {name:"Gaetano Oristanio", sub:"Forward, ITA, 22", club:"Torino", pos:"CAM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Medical exams completed as part of the move to Torino."},
  {name:"Albion Rrahmani", sub:"Striker, KOS", club:"Sparta Prague", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent departure to the Czech league."}
];

const INCOMING = [
  {name:"Takehiro Tomiyasu", sub:"Defender, JPN, 27, free agent", club:"Free agent (ex-Arsenal/Bologna)", pos:"CB", report:"Venezia are reported to be advancing in talks for the free-agent defender, ahead of rival interest from Torino and Sassuolo.", src:"Tuttomercatoweb", tier:2, fee:"Undisclosed", truth:50, prob:35, light:"y", trend:"flat", note:"Player currently training on trial with Crystal Palace.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Isak Oskarsson", sub:"Forward, ISL", club:"Real Sociedad", pos:"ST", report:"Being considered as a further attacking option for Venezia.", src:"Calciomercato.com", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"Early-stage scouting interest only.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Matteo Darmian", sub:"Defender, ITA, 36", club:"Inter", pos:"RB", report:"Named as a target for Venezia among a group of three Serie A clubs weighing a move for the veteran full-back.", src:"Calciomercato.com", tier:3, fee:"Undisclosed", truth:30, prob:15, light:"o", trend:"flat", note:"Speculative and competing with other suitors.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];

const OUTGOING = [
  {name:"Christian Adorante", sub:"Striker, ITA", club:"Sampdoria", pos:"ST", report:"Sampdoria's interest was rejected, with Venezia wanting to keep the forward.", src:"Calciomercato.com", tier:3, fee:"Undisclosed", truth:45, prob:15, light:"o", trend:"flat", note:"Club stance reported as firm to retain the player.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Alvin Okoro", sub:"Forward, ITA", club:"Arezzo", pos:"ST", report:"Arezzo have shown interest in taking the attacker, likely on loan.", src:"Calciomercato.com", tier:3, fee:"Undisclosed", truth:35, prob:20, light:"o", trend:"flat", note:"Lower-league loan-type move under discussion.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];

const RISERS = [
  {ar:"⬆", t:"<b>Six confirmed arrivals</b>: Rrahmani, Correia, Lisman, Gomes, Halhal and Sohm all in as newly-promoted Venezia build a Serie A-ready squad."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Michael Svoboda departs</b>: centre-back cashes in with a €5m move to Brighton."}
];

const NEW = [
  {ar:"✦", t:"Giovanni Stroppa's promoted side have been one of Serie A's busiest clubs this window, with six confirmed signings and a further striker (Akor Adams) at an advanced stage as they build for survival."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-forward depth", w:40, x:"Rrahmani is in; Akor Adams would add a genuine second senior striker option."},
  {p:"Defensive reinforcement", w:30, x:"Gomes, Halhal and Correia have already added considerable defensive depth for the step up to Serie A."}
];

const WATCHLIST = [
  {name:"Akor Adams", club:"Sevilla", pos:"ST", dir:"in", age:"~3 weeks", tier:2, note:"Talks at a very advanced stage for further striker reinforcement."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Venezia", u:"https://football-italia.net/category/teams/venezia/"},
  tuttomercatowebTakehiroTomiyasu: {l:"Tuttomercatoweb", u:"https://www.tuttomercatoweb.com/venezia"},
  calciomercatocomIsakOskarsson: {l:"Calciomercato.com", u:"https://www.calciomercato.com/venezia"},
  sOSFantaSimonSohm: {l:"SOS Fanta", u:"https://www.msn.com/it-it/sport/other/ufficiale-sohm-%C3%A8-un-nuovo-giocatore-del-venezia-il-comunicato-cifre-e-le-prime-parole-del-centrocampista/ar-AA29eUI8?ocid=BingNewsVerp"},
  skySportGaetanoOristanio: {l:"Sky Sport", u:"https://sport.sky.it/calciomercato/torino"}};

const LINKMAP = {
  "Albion Rrahmani": ["footballItalia", "calciomercatocomIsakOskarsson"],
  "Thierry Rendall Correia": ["footballItalia"],
  "Korel Lisman": ["footballItalia"],
  "Ale Gomes": ["footballItalia"],
  "Redouane Halhal": ["footballItalia"],
  "Simon Sohm": ["footballItalia", "sOSFantaSimonSohm"],
  "Michael Svoboda": ["footballItalia"],
  "Akor Adams": ["footballItalia", "calciomercatocomIsakOskarsson"],
  "Gaetano Oristanio": ["footballItalia", "skySportGaetanoOristanio"],
  "Takehiro Tomiyasu": ["tuttomercatowebTakehiroTomiyasu"],
  "Isak Oskarsson": ["calciomercatocomIsakOskarsson"],
  "Matteo Darmian": ["calciomercatocomIsakOskarsson"],
  "Christian Adorante": ["calciomercatocomIsakOskarsson"],
  "Alvin Okoro": ["calciomercatocomIsakOskarsson"],
  "Kornel Lisman": ["calciomercatocomIsakOskarsson"],
  "Armel Bella-Kotchap": ["calciomercatocomIsakOskarsson"],
  "Ale Gomes Furtado": ["calciomercatocomIsakOskarsson"],
  "Mattia Svoboda": ["calciomercatocomIsakOskarsson"]};
const WL_LINKMAP = {
  "Akor Adams": ["footballItalia"]
};

const PROSE = {
  heroH2: `Stroppa's promoted Venezia go big: six signings in as the club builds for Serie A survival`,
  heroLede: `Fresh off winning the 2025/26 Serie B title under <b>Giovanni Stroppa</b>, Venezia have been one of Serie A's most active clubs this summer, with six confirmed signings spanning defence, midfield and attack. Striker <b>Albion Rrahmani</b> arrives as the marquee addition, joined by loanee <b>Simon Sohm</b> from Fiorentina, defenders <b>Ale Gomes</b>, <b>Redouane Halhal</b> and <b>Thierry Rendall Correia</b>, and winger <b>Korel Lisman</b>. Sevilla's <b>Akor Adams</b> is reported at a 'very advanced stage' as further attacking reinforcement, while centre-back <b>Michael Svoboda</b> has cashed in with a move to Brighton. Stroppa has been open about the target: staying up, not just making up the numbers.`,
  metaRow: `<span>DECISION-MAKER: <b>Club ownership group</b></span> <span>HEAD COACH: <b>Giovanni Stroppa</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">Promoted</div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">6</div></div>`,
  positionPanel: ``,
  confirmedPending: `Akor Adams remains the most advanced unconfirmed pursuit.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Oristanio's exit looks likely but the destination club is not yet confirmed.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€14.5m+ committed`, x: `Rrahmani (€7.5m+€2m), Halhal (€5m) and Lisman (~€2m) carry fees; Correia arrived free and Gomes/Sohm undisclosed.` },
  spendOut: { v: `~€5m banked`, x: `Svoboda's sale to Brighton is the only confirmed fee so far.` },
  methodLegend: ``
};
