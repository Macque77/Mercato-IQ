/* ============================================================
   MERCATO IQ · CLUB DATA · LAZIO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Lazio",
  mono: "LAZ",
  slug: "lazio",
  primary: "#6CACE4",
  primaryBright: "#A8D8FF",
  primaryDeep: "#1E4D7B",
  primaryRgb: "108,172,228",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Gennaro Gattuso (officially announced 23 Jun 2026, after Maurizio Sarri's mutually-agreed exit for Atalanta)",
  dof: "Angelo Fabiani (Sporting Director)",
  europe: "None for 2026/27",
  finish: "9th Serie A (2025/26)",
  owner: "Claudio Lotito (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://thelaziali.com/category/lazio-transfer-news-rumours-targets/", "https://football-italia.net/category/teams/lazio/"],
  queries: ["Lazio transfer news 2026", "Lazio Gattuso Fabiani Dominguez", "Lazio Gila Milan Provedel Inter"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Lazio"
};

const CONFIRMED_IN = [
  {name:"Danilho Doekhi", sub:"27 · CB · Netherlands", to:"free transfer from Union Berlin", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 14 Jul on a deal until June 2029. Free-agent defensive reinforcement to help offset Gila's exit."}
];

const CONFIRMED_OUT = [
  {name:"Mario Gila", sub:"25 · CB · Spain", club:"AC Milan", pos:"CB", fee:"~€30m (€25m + €5m add-ons; 50% owed to Real Madrid)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 10 Jul. A direct Serie A rival sale - half the fee is owed to Real Madrid under a sell-on clause from Gila's original transfer."},
  {name:"Ivan Provedel", sub:"27 · GK · Italy", club:"Inter Milan", pos:"GK", fee:"€3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 8 Jul. Goalkeeper departs for the reigning champions as backup to Yann Sommer."}
];

const INCOMING = [
  {name:"Sergi Dominguez", sub:"23 · CB · Spain", club:"Dinamo Zagreb", pos:"CB", report:"12 Jul 2026", src:"Football Italia", tier:2, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"up", note:"Advanced negotiations reported for the centre-back as Lazio look to rebuild their defensive options after Gila's exit."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Danilho Doekhi arrives free</b>: experienced Dutch centre-back signed on a free transfer until 2029."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Mario Gila and Ivan Provedel both depart</b>: two starters sold to Serie A rivals (Milan and Inter) in the same week."}
];

const NEW = [
  {ar:"✦", t:"Gennaro Gattuso's first Lazio window has been shaped by two significant sales to domestic rivals, with Sergi Dominguez the live pursuit to help rebuild the back line - all against a backdrop of a reported €19m sponsorship deal at risk after Polymarket was banned in Italy."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Diogo Leite to Lazio</b>: reported 'probably not' happening despite earlier speculation linking the defender."}
];

const POSITIONS = [
  {p:"Centre-back", w:60, x:"Gila's sale to Milan leaves a genuine gap; Doekhi has arrived and Dominguez is the live further target."}
];

const WATCHLIST = [
  {name:"Sergi Dominguez", club:"Dinamo Zagreb", pos:"CB", dir:"in", age:"~3 weeks", tier:2, note:"Advanced negotiations reported for further defensive reinforcement."}
];

const HUB = {
  thelaziali: {l:"The Laziali", u:"https://thelaziali.com/category/lazio-transfer-news-rumours-targets/"},
  footballItalia: {l:"Football Italia · Lazio", u:"https://football-italia.net/category/teams/lazio/"}
};

const LINKMAP = {
  "Danilho Doekhi": ["thelaziali"],
  "Mario Gila": ["footballItalia"],
  "Ivan Provedel": ["footballItalia"],
  "Sergi Dominguez": ["thelaziali"]
};
const WL_LINKMAP = {
  "Sergi Dominguez": ["thelaziali"]
};

const PROSE = {
  heroH2: `Gattuso's reset: Gila and Provedel both sold to rivals as Dominguez targeted for the back line`,
  heroLede: `Lazio enter 2026/27 under <b>Gennaro Gattuso</b>, who finally took charge in June after <b>Maurizio Sarri's</b> mutually-agreed departure for Atalanta following public friction with president <b>Claudio Lotito</b>. The window has been dominated by outgoing business to domestic rivals: <b>Mario Gila</b> joined Milan for around €30m (half owed to Real Madrid) and <b>Ivan Provedel</b> moved to champions Inter for €3m. <b>Danilho Doekhi</b> has arrived on a free transfer to help fill the gap, with <b>Sergi Dominguez</b> from Dinamo Zagreb the live further target. All of this comes against a backdrop of financial uncertainty, with Lazio reportedly at risk of losing a €19m sponsorship deal after the Polymarket platform was banned in Italy.`,
  metaRow: `<span>DECISION-MAKER: <b>Angelo Fabiani</b> (Sporting Director)</span> <span>HEAD COACH: <b>Gennaro Gattuso</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">9<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Dominguez remains the most advanced unconfirmed pursuit.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No further departures reported as advanced beyond the confirmed Gila and Provedel sales.`,
  pricingBanner: ``,
  excludedNote: `<b>Excluded as unlikely:</b> Diogo Leite links, reported as 'probably not' materialising.`,
  spendIn: { v: `Free + Dominguez pending`, x: `Doekhi arrived free; Dominguez remains the live paid target.` },
  spendOut: { v: `~€33m banked`, x: `Gila (~€30m) and Provedel (€3m) both sold to Serie A rivals.` },
  methodLegend: ``
};
