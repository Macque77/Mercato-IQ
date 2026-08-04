/* ============================================================
   MERCATO IQ · CLUB DATA · BORUSSIA MÖNCHENGLADBACH · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Borussia Mönchengladbach", mono: "BMG", slug: "borussia-mönchengladbach",
  primary: "#00923F", primaryBright: "#1EC85C", primaryDeep: "#00542A",
  primaryRgb: "0,146,63",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Eugen Polanski",
  dof: "Roland Virkus (Sporting Director)",
  europe: "None (2025/26)",
  finish: "13th Bundesliga (2025/26)",
  owner: "Member-owned (Borussia VfL 1900 Mönchengladbach e.V.), Rolf Königs President",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.rp-online.de/sport/fussball/borussia/", "https://bmg-news.de/"],
  queries: ["Borussia Mönchengladbach transfer news 2026", "Gladbach Rocco Reitz RB Leipzig", "Gladbach Neuzugang Sommer 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Borussia Mönchengladbach"
};

const CONFIRMED_IN = [
  {name:"David Herold", sub:"22 · CB · Germany", to:"permanent from Karlsruher SC", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young centre-back signed as squad depth following captain Rocco Reitz's departure to RB Leipzig."},
  {name:"Isac Lidberg", sub:"25 · ST · Sweden", to:"permanent from SV Darmstadt 98", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Swedish forward brought in for attacking depth."},
  {name:"Yukhym Konoplya", sub:"24 · RB · Ukraine", to:"free from Shakhtar Donetsk", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Experienced Ukraine international right-back joins on a free transfer."}
];

const CONFIRMED_OUT = [
  {name:"Rocco Reitz", sub:"24 · CM · Germany", to:"permanent to RB Leipzig", club:"RB Leipzig", fee:"~€20-21m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club captain and academy graduate departs for a Bundesliga rival in a deal agreed in principle back in March and completed this summer - a significant loss for Polanski's midfield."},
  {name:"Marvin Friedrich", sub:"30 · CB · Germany", to:"free to 1. FC Union Berlin", club:"1. FC Union Berlin", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Centre-back returns to a former club on a free transfer after his Gladbach contract expired."},
  {name:"Jonas Omlin", sub:"32 · GK · Switzerland", to:"free to FC Basel", club:"FC Basel", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Long-serving goalkeeper leaves on a free transfer, returning to Switzerland."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Rocco Reitz departure confirmed</b>: the club captain's €20m+ move to RB Leipzig is done, closing a saga that began with talks in March."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Squad rebuild after captain's exit</b>: Polanski must reshape midfield following Reitz's sale, with Herold and Lidberg brought in as lower-cost replacements elsewhere on the pitch."}
];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield", w:45, x:"Reitz's exit leaves a leadership and creative void that has not yet been directly replaced with a like-for-like signing."},
  {p:"Centre-back", w:30, x:"Herold brought in as depth following Friedrich's free departure to Union Berlin."}
];

const WATCHLIST = [];

const HUB = {
  bundesliga: {l:"Bundesliga.com · Official", u:"https://www.bundesliga.com/en/bundesliga"},
  gfn: {l:"Get German Football News", u:"https://www.getfootballnewsgermany.com/"},
  rbl: {l:"RB Leipzig Official", u:"https://rbleipzig.com/en/news/rocco-reitz-transfer-new-signing-summer-gladbach-rb-leipzig"},
  club: {l:"Borussia Mönchengladbach Official", u:"https://www.borussia.de/en"}
};

const LINKMAP = {
  "Rocco Reitz": ["gfn","rbl"],
  "Marvin Friedrich": ["bundesliga"],
  "David Herold": ["club"],
  "Isac Lidberg": ["club"],
  "Yukhym Konoplya": ["club"],
  "Jonas Omlin": ["club"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Reitz cashes out: Gladbach sell their captain to RB Leipzig and rebuild around a leaner squad`,
  heroLede: `Eugen Polanski's side head into 2026/27 without European football after a 13th-place finish, and the summer's defining story is the departure of academy graduate and captain <b>Rocco Reitz</b> to RB Leipzig for around €20-21m - a deal effectively agreed back in March. The money has been reinvested modestly: centre-back <b>David Herold</b> from Karlsruhe, forward <b>Isac Lidberg</b> from Darmstadt, and free-transfer full-back <b>Yukhym Konoplya</b> from Shakhtar Donetsk. Goalkeeper Jonas Omlin and defender Marvin Friedrich have also left on frees.`,
  metaRow: `<span>DECISION-MAKER: <b>Roland Virkus</b> (Sporting Director)</span> <span>HEAD COACH: <b>Eugen Polanski</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">13<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">3</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Reitz's sale to Leipzig is the headline outgoing business; no further major departures reported.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€7m committed`, x: `Herold and Lidberg fees plus Konoplya on a free.` },
  spendOut: { v: `~€20-21m banked`, x: `Reitz's sale to RB Leipzig is the dominant figure; Friedrich and Omlin left for free.` },
  methodLegend: ``
};
