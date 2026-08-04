/* ============================================================
   MERCATO IQ · CLUB DATA · BEŞIKTAŞ · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Beşiktaş", mono: "B", slug: "besiktas",
  primary: "#000000", primaryBright: "#C0C0C0", primaryDeep: "#000000",
  primaryRgb: "20,20,20",
  breadcrumb: ["Turkey","Süper Lig"]
};

const VOLATILE = {
  verified: "2026-07-29",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["besiktas transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Mohamed Salah", sub:"33 · FW · Egypt", club:"Free agent (ex-Liverpool)", pos:"FW", report:"26 Jul 2026", src:"Nicolo Schira / Football365", tier:2, fee:"Undisclosed", truth:52, prob:30, light:"y", trend:"down", note:"Reported agreement in principle through 2027 with a 2028 option, but Trabzonspor have since tabled a rival offer and Salah is said to be leaning that way instead - a genuinely contested two-horse race.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Darwin Nunez", sub:"27 · FW · Uruguay", club:"Al-Hilal", pos:"FW", report:"3 Aug 2026", src:"Sacha Tavolieri / SportBible", tier:2, fee:"Loan", truth:50, prob:28, light:"o", trend:"flat", note:"Al-Hilal willing to loan Nunez out after a disappointing spell; now a four-way Süper Lig chase alongside Galatasaray, Fenerbahce and Trabzonspor rather than an exclusive Besiktas move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:28},
  {name:"Mauro Icardi", sub:"33 · FW · Argentina", club:"Free agent (ex-Galatasaray)", pos:"FW", report:"3 Aug 2026", src:"Fotomac", tier:3, fee:"Free", truth:25, prob:10, light:"r", trend:"down", note:"Besiktas management have explicitly denied any interest; his agent says he wants to stay in Europe. Included as a live but low-credibility line, not a genuine pursuit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:10},
  {name:"Dusan Vlahovic", sub:"26 · FW · Serbia", club:"Juventus", pos:"FW", report:"31 Jul 2026", src:"SPORT (via Derick Kinoti)", tier:3, fee:"Undisclosed", truth:30, prob:12, light:"r", trend:"flat", note:"Besiktas reportedly offered an improved two-year deal, but Vlahovic is said to be fixated on a move to Barcelona instead.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Besiktas are chasing a marquee free-agent forward, with Mohamed Salah reportedly weighing a rival Trabzonspor offer and Darwin Nunez now a four-club Süper Lig scrap."}
];
const IGNORE = [];
const POSITIONS = [
  {p:"Centre-forward", w:40, x:"Multiple marquee forward names (Salah, Nunez, Vlahovic) linked, but each faces genuine competition from other Süper Lig or European clubs."}
];
const WATCHLIST = [
  {name:"Mohamed Salah", club:"Free agent", pos:"FW", dir:"in", age:"~1 wk", tier:2, note:"Contested with Trabzonspor's rival bid; Salah reportedly leaning towards the Trabzonspor terms."},
  {name:"Darwin Nunez", club:"Al-Hilal", pos:"FW", dir:"in", age:"~1 day", tier:2, note:"Now a four-way chase involving Galatasaray, Fenerbahce and Trabzonspor as well as Besiktas."}
];

const HUB = {
  football365Salah: {l:"Football365 · Salah", u:"https://www.football365.com/news/liverpool-mohamed-salah-agreement-next-club-nunez"},
  sportbibleNunez: {l:"SportBible · Nunez", u:"https://www.sportbible.com/football/football-news/darwin-nunez-in-talks-over-move-as-transfer-tug-of-war-begins-551522-20260803"},
  fotomacIcardi: {l:"Fotomac · Icardi", u:"https://www.fotomac.com.tr/besiktas/2026/08/03/mauro-icardi-besiktasa-transfer-olacak-mi-yonetimden-flas-karar"},
  peoplespersonVlahovic: {l:"The Peoples Person · Vlahovic", u:"https://thepeoplesperson.com/2026/07/31/dusan-vlahovic-man-united-target-makes-barcelona-call-after-besiktas-offer-313507/"}
};

const LINKMAP = {
  "Mohamed Salah": ["football365Salah"],
  "Darwin Nunez": ["sportbibleNunez"],
  "Mauro Icardi": ["fotomacIcardi"],
  "Dusan Vlahovic": ["peoplespersonVlahovic"]
};
const WL_LINKMAP = {
  "Mohamed Salah": ["football365Salah"],
  "Darwin Nunez": ["sportbibleNunez"]
};

const PROSE = {
  heroH2: `Besiktas chase a marquee free-agent forward amid a crowded Süper Lig scrap`,
  heroLede: `Besiktas are in the mix for two of the biggest free-agency and loan stories in Turkish football this summer: a reported agreement in principle with <b>Mohamed Salah</b> is now being tested by a rival Trabzonspor bid, while <b>Darwin Nunez</b> has become the subject of a four-club Süper Lig chase after Al-Hilal made him available on loan. Besiktas have also been linked with free agent <b>Mauro Icardi</b> (denied by the club) and Juventus forward <b>Dusan Vlahovic</b>, who is reportedly fixated on a Barcelona move instead.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};