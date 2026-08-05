/* ============================================================
   MERCATO IQ · CLUB DATA · TRABZONSPOR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Trabzonspor", mono: "T", slug: "trabzonspor",
  primary: "#7A1F2B", primaryBright: "#B0475A", primaryDeep: "#4A121A",
  primaryRgb: "122,31,43",
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
  queries: ["trabzonspor transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Mohamed Salah", sub:"34 · Egypt · FW", club:"Liverpool", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Marquee free-transfer arrival on a reported two-year deal after leaving Liverpool. Reported terms include a €17m salary, a €5m bonus and a 20% share of jersey sales; he is travelling to Turkey to complete formalities."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Darwin Nunez", sub:"27 · FW · Uruguay", club:"Al-Hilal", pos:"FW", report:"3 Aug 2026", src:"Sacha Tavolieri / SportBible", tier:2, fee:"Loan", truth:48, prob:24, light:"o", trend:"flat", note:"One of four Süper Lig clubs (with Besiktas, Galatasaray, Fenerbahce) now credited with interest in the loaned-out Al-Hilal forward.", lastSeen:"2026-08-04T19:10:50Z", baseProb:24}
];
const OUTGOING = [];
const RISERS = [
  {ar:"⬆", t:"<b>Mohamed Salah signing completed</b>: the free agent has joined on a reported two-year deal, chosen ahead of a rival Besiktas approach."}
];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Trabzonspor have signed free agent Mohamed Salah on a reported two-year deal, and are one of four clubs credited with interest in loaned-out Al-Hilal forward Darwin Nunez."}
];
const IGNORE = [];
const POSITIONS = [
  {p:"Centre-forward", w:45, x:"The marquee free-agent signing of Mohamed Salah, secured ahead of Besiktas, transforms the forward line."}
];
const WATCHLIST = [];

const HUB = {
  footballtransfersSalah: {l:"FootballTransfers · Salah", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/mohamed-salah-inclined-to-accept-eur34m-trabzonspor-offer"},
  sportbibleNunez: {l:"SportBible · Nunez", u:"https://www.sportbible.com/football/football-news/darwin-nunez-in-talks-over-move-as-transfer-tug-of-war-begins-551522-20260803"},
  skySportsMohamedSalah: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13569969/mohamed-salah-former-liverpool-forward-set-to-join-turkish-club-trabzonspor-on-free-transfer-after-leaving-anfield"}};

const LINKMAP = {
  "Mohamed Salah": ["footballtransfersSalah", "skySportsMohamedSalah"],
  "Darwin Nunez": ["sportbibleNunez"]
};
const WL_LINKMAP = {
  "Mohamed Salah": ["footballtransfersSalah"]
};

const PROSE = {
  heroH2: `Trabzonspor lead the race for a marquee free agent`,
  heroLede: `Trabzonspor have completed a marquee free-agent signing in <b>Mohamed Salah</b>, who joins on a reported two-year deal worth around €34m a year, chosen ahead of a rival Besiktas approach. The club are also one of four Süper Lig sides credited with interest in Al-Hilal's loaned-out forward <b>Darwin Nunez</b>.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};