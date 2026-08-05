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
  {name:"Darwin Nunez", sub:"27 · FW · Uruguay", club:"Al-Hilal", pos:"FW", report:"3 Aug 2026", src:"Sacha Tavolieri / SportBible", tier:2, fee:"Loan", truth:50, prob:28, light:"o", trend:"flat", note:"Al-Hilal willing to loan Nunez out after a disappointing spell; now a four-way Süper Lig chase alongside Galatasaray, Fenerbahce and Trabzonspor rather than an exclusive Besiktas move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:28},
  {name:"Mauro Icardi", sub:"33 · FW · Argentina", club:"Free agent (ex-Galatasaray)", pos:"FW", report:"3 Aug 2026", src:"Fotomac", tier:3, fee:"Free", truth:25, prob:10, light:"r", trend:"down", note:"Besiktas management have explicitly denied any interest; his agent says he wants to stay in Europe. Included as a live but low-credibility line, not a genuine pursuit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:10},
  {name:"Dusan Vlahovic", sub:"26 · FW · Serbia", club:"Juventus", pos:"FW", report:"31 Jul 2026", src:"SPORT (via Derick Kinoti)", tier:3, fee:"Undisclosed", truth:30, prob:12, light:"r", trend:"flat", note:"Besiktas reportedly offered an improved two-year deal, but Vlahovic is said to be fixated on a move to Barcelona instead.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Besiktas have missed out on Mohamed Salah, who joined rivals Trabzonspor, and are one of four Süper Lig clubs chasing loaned-out Al-Hilal forward Darwin Nunez."}
];
const IGNORE = [];
const POSITIONS = [
  {p:"Centre-forward", w:40, x:"Marquee forward names (Nunez, Vlahovic) remain linked after Salah joined Trabzonspor, but each faces genuine competition from other Süper Lig or European clubs."}
];
const WATCHLIST = [
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
  heroLede: `Besiktas have missed out on <b>Mohamed Salah</b>, who chose a rival Trabzonspor move, but remain in the mix for one of the summer's biggest loan stories: <b>Darwin Nunez</b> has become the subject of a four-club Süper Lig chase after Al-Hilal made him available on loan. Besiktas have also been linked with free agent <b>Mauro Icardi</b> (denied by the club) and Juventus forward <b>Dusan Vlahovic</b>, who is reportedly fixated on a Barcelona move instead.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};