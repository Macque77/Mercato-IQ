/* ============================================================
   MERCATO IQ · CLUB DATA · US LECCE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "US Lecce",
  mono: "LEC",
  slug: "lecce",
  primary: "#FFE500",
  primaryBright: "#FFF066",
  primaryDeep: "#B3A000",
  primaryRgb: "255,229,0",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Eusebio Di Francesco",
  dof: "Club sporting management (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "17th Serie A (2025/26) - survived",
  owner: "Saverio Sticchi Damiani (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/lecce/"],
  queries: ["Lecce transfer news 2026", "Lecce Cavani Di Francesco", "Lecce Banda Hysaj"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · US Lecce"
};

const CONFIRMED_IN = [
  {name:"Willem Geubbels", sub:"Forward, French, 24", club:"Monaco", pos:"ST", fee:"€20m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Lecce's first major signing of the window; medical examinations scheduled for 4 August 2026."}
];

const CONFIRMED_OUT = [
  {name:"Ylber Ramadani", sub:"Midfielder, Albanian", club:"Corum FK (Turkey)", pos:"CDM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Emotional exit after a long association with the club; player thanked fans on departure."},
  {name:"Francesco Camarda", sub:"Striker, Italian, 21", club:"AC Milan", pos:"ST", fee:"n/a (loan recall)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Milan exercised their counter-option to end Camarda's loan spell at Lecce and retain him."},
  {name:"Kodor", sub:"Youth striker", club:"Romanian club (unspecified)", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Lecce retained a 50% sell-on/resale clause on the young striker."}
];

const INCOMING = [
  {name:"Edinson Cavani", sub:"39 · ST · Uruguay", club:"Free agent (ex-Boca Juniors)", pos:"ST", report:"18 Jul 2026", src:"Football Italia", tier:2, fee:"Free", truth:55, prob:30, light:"y", trend:"up", note:"Lecce are described as 'dreaming big' in pursuing the former Napoli striker, a free agent after rescinding his Boca Juniors contract; his return is complicated by a lumbar injury he's still recovering from."},
  {name:"Elseid Hysaj", sub:"32 · RB/CB · Albania", club:"Free agent (ex-Lazio)", pos:"RB", report:"14 Jul 2026", src:"Football Italia", tier:3, fee:"Free", truth:50, prob:30, light:"y", trend:"flat", note:"Lecce have made an offer to the experienced free-agent defender seeking a Serie A return."},
  {name:"Ardian Hoxha", sub:"Winger, Albanian", club:"Dinamo Zagreb", pos:"RW", report:"Lecce are tracking the Dinamo Zagreb winger as offensive reinforcement for the new Serie A campaign.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:45, prob:30, light:"y", trend:"flat", note:"Early-stage interest, no formal bid reported yet."},
  {name:"Enzo Le Borgne", sub:"Winger/Full-back, French", club:"Como", pos:"LW", report:"Lecce want Le Borgne back after his loan spell at Avellino, but face competition from Ligue 1 side Brest.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:40, prob:30, light:"y", trend:"flat", note:"Foreign competition (Brest) reported as a live threat to the deal."},
  {name:"Justin Addai", sub:"Left-back", club:"Qarabag", pos:"LB", report:"Lecce identified Addai as one of two left-back targets to reinforce the flank this window.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:38, prob:25, light:"o", trend:"flat", note:"Being considered alongside Gurassy for the same role."},
  {name:"Charles Gurassy", sub:"Left-back, French", club:"Nantes", pos:"LB", report:"Named as a second option at left-back alongside Addai as Lecce look to strengthen the defence.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:38, prob:25, light:"o", trend:"flat", note:"Twin-track pursuit with Addai for the same position."},
  {name:"Gabriele Alesi", sub:"Forward", club:"Catanzaro", pos:"ST", report:"Lecce scouts have been watching Alesi as a potential attacking addition.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:35, prob:20, light:"o", trend:"flat", note:"Very early stage scouting reported, no negotiation confirmed."}
];

const OUTGOING = [
  {name:"Tiago Gabriel", sub:"Centre-back, Portuguese", club:"AC Milan / Benfica", pos:"CB", report:"Both AC Milan and Benfica are monitoring the young centre-back as a potential summer departure from Lecce.", src:"TuttoMercatoWeb", tier:2, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"Double interest from a Serie A giant and a Portuguese top club adds credibility."},
  {name:"Lameck Banda", sub:"Winger, Zambian", club:"Undisclosed", pos:"RW", report:"Banda is reported to be unhappy and reluctant to return to Lecce, fuelling contract-dispute exit speculation.", src:"LecceNews24", tier:2, fee:"Undisclosed", truth:60, prob:40, light:"y", trend:"flat", note:"Situation described as an ongoing standoff between player and club over his future."},
  {name:"Nahuel Esteban", sub:"Forward, Argentine", club:"Spanish clubs (unspecified)", pos:"RW", report:"Interest from Spanish La Liga clubs is being monitored, with a departure possible before pre-season fully begins.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"No specific Spanish club named yet in reporting."},
  {name:"Walid Cheddira", sub:"Striker, Moroccan", club:"Two unnamed Serie A clubs", pos:"ST", report:"Cheddira's agent said Lecce are unlikely to exercise their purchase option, with two Serie A clubs already interested in a permanent deal.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:45, prob:40, light:"y", trend:"flat", note:"Agent quote adds some weight, but destination clubs unconfirmed."},
  {name:"Kacper Marchwinski", sub:"Attacking midfielder, Polish", club:"Poland (unspecified club)", pos:"CAM", report:"After two seasons of limited minutes, a return to a Polish club is being discussed for Marchwinski.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:35, prob:25, light:"o", trend:"flat", note:"Playing-time concerns are the stated driver of a possible exit."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Edinson Cavani interest</b>: Lecce 'dreaming big' in pursuit of the veteran free-agent striker, injury permitting."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Lameck Banda goes AWOL</b>: the striker missed pre-season training and hasn't been in contact for several days; the club has warned he 'will pay the consequences of his behaviour'."}
];

const NEW = [
  {ar:"✦", t:"Eusebio Di Francesco's Lecce are chasing an ambitious free-agent swoop for Edinson Cavani while dealing with a genuine off-field distraction in Lameck Banda's unexplained absence from training."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-forward", w:45, x:"Cavani would be a statement free-agent addition, though his recovery from a lumbar injury is a genuine complication."},
  {p:"Right-back", w:30, x:"Hysaj represents free, experienced Serie A cover at right-back."}
];

const WATCHLIST = [
  {name:"Edinson Cavani", club:"Free agent", pos:"ST", dir:"in", age:"~2 weeks", tier:2, note:"Lecce pursuing the veteran striker; his fitness after a lumbar injury remains a question."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Lecce", u:"https://football-italia.net/category/teams/lecce/"},
  tuttoMercatoWebArdianHoxha: {l:"TuttoMercatoWeb", u:"https://www.tuttomercatoweb.com/lecce"},
  lecceNews24LameckBanda: {l:"LecceNews24", u:"https://www.leccenews24.it/"}};

const LINKMAP = {
  "Edinson Cavani": ["footballItalia"],
  "Elseid Hysaj": ["footballItalia"],
  "Lameck Banda": ["footballItalia", "lecceNews24LameckBanda"],
  "Ardian Hoxha": ["tuttoMercatoWebArdianHoxha"],
  "Enzo Le Borgne": ["tuttoMercatoWebArdianHoxha"],
  "Justin Addai": ["tuttoMercatoWebArdianHoxha"],
  "Charles Gurassy": ["tuttoMercatoWebArdianHoxha"],
  "Gabriele Alesi": ["tuttoMercatoWebArdianHoxha"],
  "Tiago Gabriel": ["tuttoMercatoWebArdianHoxha"],
  "Nahuel Esteban": ["tuttoMercatoWebArdianHoxha"],
  "Walid Cheddira": ["tuttoMercatoWebArdianHoxha"],
  "Kacper Marchwinski": ["tuttoMercatoWebArdianHoxha"],
  "Willem Geubbels": ["lecceNews24LameckBanda"],
  "Ylber Ramadani": ["lecceNews24LameckBanda"],
  "Francesco Camarda": ["tuttoMercatoWebArdianHoxha"],
  "Kodor": ["tuttoMercatoWebArdianHoxha"]};
const WL_LINKMAP = {
  "Edinson Cavani": ["footballItalia"]
};

const PROSE = {
  heroH2: `Dreaming big: Lecce chase a free-agent Cavani reunion with Italian football`,
  heroLede: `US Lecce head into 2026/27 under <b>Eusebio Di Francesco</b> having survived in 17th place last season. The club's most eye-catching pursuit is a genuinely ambitious one: veteran striker <b>Edinson Cavani</b>, a free agent after rescinding his Boca Juniors contract, though a lumbar injury complicates any return to action. Free-agent full-back <b>Elseid Hysaj</b> has also received an offer as the club looks for experienced, low-cost reinforcements. Off the pitch, the club has had a genuine distraction to manage - striker <b>Lameck Banda</b> went missing from pre-season training and has been out of contact for several days, with the club warning of consequences on his return.`,
  metaRow: `<span>DECISION-MAKER: <b>Saverio Sticchi Damiani</b> (President)</span> <span>HEAD COACH: <b>Eusebio Di Francesco</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">17<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `No signings confirmed yet; Cavani and Hysaj are both live free-agent pursuits.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Free-agent business only`, x: `Both Cavani and Hysaj would arrive free if completed.` },
  spendOut: { v: `None reported`, x: `No outgoing business reported as advanced this window.` },
  methodLegend: ``
};
