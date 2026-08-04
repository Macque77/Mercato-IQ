/* ============================================================
   MERCATO IQ · CLUB DATA · FC AUGSBURG · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Augsburg", mono: "FCA", slug: "1-fc-augsburg",
  primary: "#BA3733", primaryBright: "#FF6259", primaryDeep: "#6E1F1C",
  primaryRgb: "186,55,51",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Jess Thorup",
  dof: "TBD (Director)",
  europe: "None (2025/26 9th - no European qualification)",
  finish: "9th Bundesliga (2025/26)",
  owner: "Member-owned (FC Augsburg 1907 e.V.)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.fcaugsburg.de/en/"],
  queries: ["FC Augsburg transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · FC Augsburg"
};

const CONFIRMED_IN = [
  {name:"Hennes Behrens", sub:"20 · CB · Germany", to:"permanent from TSG Hoffenheim", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young centre-back signed as a squad-depth addition."},
  {name:"Sima Suso", sub:"22 · W", to:"permanent from Fortuna Düsseldorf", fee:"~€1.7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Winger signed to bolster attacking options."}
];

const CONFIRMED_OUT = [
  {name:"Cedric Zesiger", sub:"27 · CB · Switzerland", to:"permanent to BSC Young Boys", club:"BSC Young Boys", fee:"~€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Swiss centre-back returns to his homeland, Augsburg's largest confirmed sale of the summer."},
  {name:"Elvis Rexhbecaj", sub:"28 · CM", to:"free to VfL Wolfsburg", club:"VfL Wolfsburg", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; midfielder departs on a free transfer."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-back", w:25, x:"Zesiger's sale is offset by Behrens's arrival, though a further like-for-like addition would round out the position."}
];

const WATCHLIST = [];

const HUB = {
  club: {l:"FC Augsburg Official", u:"https://www.fcaugsburg.de/en/"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Augsburg reload quietly after a solid 9th-place finish`,
  heroLede: `Jess Thorup's Augsburg have had a low-key summer without European football to plan for: centre-back <b>Hennes Behrens</b> arrives from Hoffenheim as long-term cover following <b>Cedric Zesiger</b>'s sale to Young Boys, and winger Sima Suso adds attacking depth from Fortuna Düsseldorf. No major incoming or outgoing sagas have developed at this stage of the window.`,
  metaRow: `<span>HEAD COACH: <b>Jess Thorup</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">9<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">2</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No rumoured departures beyond the confirmed business reported at this stage.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€5.2m committed`, x: `Behrens (€3.5m) and Suso (€1.7m) confirmed.` },
  spendOut: { v: `~€5m banked`, x: `Zesiger's sale to Young Boys is the headline fee; Rexhbecaj left free.` },
  methodLegend: ``
};
