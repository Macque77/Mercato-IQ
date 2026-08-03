/* ============================================================
   MERCATO IQ · CLUB DATA · UDINESE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Udinese",
  mono: "UDI",
  slug: "udinese",
  primary: "#1A1A1A",
  primaryBright: "#595959",
  primaryDeep: "#000000",
  primaryRgb: "26,26,26",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Kosta Runjaic (Serie A Coach of the Month, May 2026)",
  dof: "Club sporting management (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "10th Serie A (2025/26)",
  owner: "Pozzo family - reportedly fielding a takeover approach from a Guggenheim Partners-linked investor",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/udinese/", "https://www.udinese.it/eng/news"],
  queries: ["Udinese transfer news 2026", "Udinese Atta Zaniolo Fiorentina", "Udinese Pozzo takeover Guggenheim"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Udinese"
};

const CONFIRMED_IN = [
  {name:"Unai Gómez", sub:"22 · CM · Spain", to:"permanent from Athletic Club", fee:"€4.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Jul. Midfield reinforcement from La Liga."},
  {name:"Giorgi Chakvetadze", sub:"25 · AM · Georgia", to:"permanent from Watford", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 Jul. Attacking midfield addition."},
  {name:"Omar Haktab Traoré", sub:"24 · RB · Morocco", to:"free transfer", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Jul. Free-agent full-back signing."},
  {name:"Mergim Vojvoda", sub:"30 · RB · Kosovo", to:"permanent from Como", fee:"€1.6m (with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 19 Jul. Further full-back depth added late in the window."}
];

const CONFIRMED_OUT = [
  {name:"Arthur Atta", sub:"20 · CM · France", club:"Fiorentina", pos:"CM", fee:"€40m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 11 Jul after medicals on the 9th. A major fee for the highly-rated young midfielder, headlining Udinese's summer business."},
  {name:"Martin Payero", sub:"27 · CM · Argentina", club:"Watford", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 31 Jul. Further midfield departure to Watford."},
  {name:"Simone Pafundi", sub:"20 · AM · Italy", club:"Catanzaro", pos:"AM", fee:"Loan with option to buy", free:false, status:"done", statusTxt:"DONE, LOAN OUT", note:"Confirmed 31 Jul. Young playmaker loaned out for regular football."}
];

const INCOMING = [
  {name:"Ognjen Ugresic", sub:"22 · CM · Serbia", club:"Partizan Belgrade", pos:"CM", report:"12 Jul 2026", src:"Football Italia", tier:3, fee:"~€6m", truth:50, prob:20, light:"o", trend:"flat", note:"One of several clubs (also Sassuolo, Bologna, Club Brugge, Frankfurt, Monaco) chasing the same midfielder - genuine interest but heavy competition."}
];

const OUTGOING = [
  {name:"Nicolò Zaniolo", sub:"27 · AM · Italy", club:"AC Milan / Lazio (rumoured)", pos:"AM", report:"29 Jun - 14 Jul 2026", src:"Football Italia", tier:2, fee:"Undisclosed", truth:58, prob:32, light:"y", trend:"up", note:"A genuinely messy situation: Zaniolo was offered to Milan amid a salary dispute, Lazio have shown interest, and the player presented a medical certificate to skip training - real friction rather than idle speculation."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Arthur Atta sale confirmed</b>: €40m fee banked from Fiorentina, the headline transfer of Udinese's summer."},
  {ar:"⬆", t:"<b>Four incomings confirmed</b>: Gómez, Chakvetadze, Traoré and Vojvoda all add fresh depth."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Nicolò Zaniolo situation sours</b>: salary dispute sees him offered to Milan and skipping training with a medical certificate."}
];

const NEW = [
  {ar:"✦", t:"Udinese have banked a major €40m fee for Atta, but the Zaniolo saga and reported Pozzo family takeover talks with a Guggenheim Partners-linked investor are the two bigger off-pitch stories this window."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield", w:55, x:"Atta and Payero's exits leave a genuine gap; Gómez and Chakvetadze address part of it, and Ugresic remains a live but contested target."},
  {p:"Attacking midfield", w:40, x:"Zaniolo's messy exit situation and Pafundi's loan both open up the No.10 area."}
];

const WATCHLIST = [
  {name:"Nicolò Zaniolo", club:"AC Milan / Lazio", pos:"AM", dir:"out", age:"~3 weeks", tier:2, note:"Salary dispute has turned genuinely tense, with the player skipping training via a medical certificate."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Udinese", u:"https://football-italia.net/category/teams/udinese/"},
  footitalia: {l:"FootItalia.com", u:"https://www.footitalia.com/"}
};

const LINKMAP = {
  "Unai Gómez": ["footballItalia"],
  "Giorgi Chakvetadze": ["footballItalia"],
  "Omar Haktab Traoré": ["footballItalia"],
  "Mergim Vojvoda": ["footballItalia"],
  "Arthur Atta": ["footballItalia"],
  "Martin Payero": ["footballItalia"],
  "Simone Pafundi": ["footballItalia"],
  "Ognjen Ugresic": ["footballItalia"],
  "Nicolò Zaniolo": ["footitalia"]
};
const WL_LINKMAP = {
  "Nicolò Zaniolo": ["footitalia"]
};

const PROSE = {
  heroH2: `A €40m Atta windfall, a messy Zaniolo saga, and takeover talk swirling around the Pozzo family`,
  heroLede: `Udinese, under Coach of the Month <b>Kosta Runjaic</b>, have banked the biggest fee of their summer with <b>Arthur Atta's</b> €40m sale to Fiorentina, reinvesting in <b>Unai Gómez</b>, <b>Giorgi Chakvetadze</b>, <b>Omar Haktab Traoré</b> and <b>Mergim Vojvoda</b>. The messier story is <b>Nicolò Zaniolo</b>: a salary dispute has seen him offered to Milan, linked with Lazio, and reportedly skipping training behind a medical certificate. Off the pitch, the long-standing <b>Pozzo family</b> ownership is reportedly fielding a takeover approach from an investor linked to Guggenheim Partners - a genuine story to watch alongside the football business.`,
  metaRow: `<span>DECISION-MAKER: <b>Pozzo family</b> (Ownership)</span> <span>HEAD COACH: <b>Kosta Runjaic</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">10<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">4</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Zaniolo's situation is genuinely tense rather than settled speculation.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€6.1m+ committed`, x: `Gómez (€4.5m) and Vojvoda (€1.6m) carry fees; Chakvetadze and Traoré arrived free/undisclosed.` },
  spendOut: { v: `€40m+ banked`, x: `Atta's sale to Fiorentina is the major fee, with Payero's exit adding further, undisclosed income.` },
  methodLegend: ``
};
