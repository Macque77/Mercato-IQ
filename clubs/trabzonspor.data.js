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

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Mohamed Salah", sub:"33 · FW · Egypt", club:"Free agent (ex-Liverpool)", pos:"FW", report:"1 Aug 2026", src:"Robin Bairner / Yagiz Sabuncuoglu (FootballTransfers)", tier:2, fee:"~€34m total (2-yr deal)", truth:60, prob:46, light:"y", trend:"up", note:"Reported to be the more advanced of two rival Süper Lig offers - roughly €17m/season across two years - with Salah said to be 'positively inclined' pending family consultation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:46},
  {name:"Darwin Nunez", sub:"27 · FW · Uruguay", club:"Al-Hilal", pos:"FW", report:"3 Aug 2026", src:"Sacha Tavolieri / SportBible", tier:2, fee:"Loan", truth:48, prob:24, light:"o", trend:"flat", note:"One of four Süper Lig clubs (with Besiktas, Galatasaray, Fenerbahce) now credited with interest in the loaned-out Al-Hilal forward.", lastSeen:"2026-08-04T19:10:50Z", baseProb:24}
];
const OUTGOING = [];
const RISERS = [
  {ar:"⬆", t:"<b>Mohamed Salah offer said to be leading</b>: two-year, ~€34m proposal reportedly favoured by the player over a rival Besiktas approach."}
];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Trabzonspor have emerged as the more advanced of two Süper Lig suitors for free agent Mohamed Salah, and are one of four clubs credited with interest in loaned-out Al-Hilal forward Darwin Nunez."}
];
const IGNORE = [];
const POSITIONS = [
  {p:"Centre-forward", w:45, x:"A marquee free-agent forward signing (Salah) would be transformative, with Trabzonspor reportedly leading the race over Besiktas."}
];
const WATCHLIST = [
  {name:"Mohamed Salah", club:"Free agent", pos:"FW", dir:"in", age:"~3 days", tier:2, note:"Reportedly the more advanced of two rival Süper Lig bids; player said to be leaning this way pending family consultation."}
];

const HUB = {
  footballtransfersSalah: {l:"FootballTransfers · Salah", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/mohamed-salah-inclined-to-accept-eur34m-trabzonspor-offer"},
  sportbibleNunez: {l:"SportBible · Nunez", u:"https://www.sportbible.com/football/football-news/darwin-nunez-in-talks-over-move-as-transfer-tug-of-war-begins-551522-20260803"}
};

const LINKMAP = {
  "Mohamed Salah": ["footballtransfersSalah"],
  "Darwin Nunez": ["sportbibleNunez"]
};
const WL_LINKMAP = {
  "Mohamed Salah": ["footballtransfersSalah"]
};

const PROSE = {
  heroH2: `Trabzonspor lead the race for a marquee free agent`,
  heroLede: `Trabzonspor are reported to hold the stronger hand in the chase for free agent <b>Mohamed Salah</b>, with a two-year, roughly €34m offer said to be the player's preferred option over a rival Besiktas approach. The club are also one of four Süper Lig sides credited with interest in Al-Hilal's loaned-out forward <b>Darwin Nunez</b>.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};