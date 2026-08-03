/* ============================================================
   MERCATO IQ · CLUB DATA · ANGERS SCO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Angers SCO", mono: "SCO", slug: "angers-sco",
  primary: "#0A0A0A", primaryBright: "#8C8C8C", primaryDeep: "#000000",
  primaryRgb: "10,10,10",
  breadcrumb: ["France","Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Stéphane Gilli (strongly linked since 4 Jun 2026 following Alexandre Dujeux's exit; not yet fully confirmed in the latest reporting)",
  dof: "Laurent Boissier (Director of Sport)",
  europe: "None (2026/27)",
  finish: "13th Ligue 1 (2025/26)",
  owner: "Chabane family; Romain Chabane (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/angers/"],
  queries: ["Angers SCO transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Angers SCO"
};

const CONFIRMED_IN = [
  {name:"Branco van den Boomen", sub:"27 · CM · Netherlands", to:"free transfer after terminating Ajax contract", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Jul 2026. Experienced Ligue 1-tested midfielder returns to France after his Ajax spell was cut short."}
];

const CONFIRMED_OUT = [];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Van den Boomen signs as a free agent</b>: experienced midfielder arrives after leaving Ajax by mutual consent."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Angers' coaching search continues: Stéphane Gilli, available since his February exit from Paris FC, is the reported frontrunner to replace Alexandre Dujeux."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "gffn-angers": {l:"Get French Football News · Angers", u:"https://www.getfootballnewsfrance.com/tag/angers/"}
};

const LINKMAP = {
  "Branco van den Boomen": ["gffn-angers"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A new coach search and one seasoned free-agent arrival`,
  heroLede: `Angers finished a comfortable 13th in their return season and enter this window still resolving their bench: <b>Alexandre Dujeux</b> departed in June and <b>Stéphane Gilli</b> - out of work since leaving Paris FC in February - is the reported favourite to replace him. On the pitch, free-agent midfielder <b>Branco van den Boomen</b> has already arrived after terminating his Ajax contract.`,
  metaRow: `<span>DECISION-MAKER: <b>Romain Chabane</b> (President)</span> <span>HEAD COACH: <b>TBC</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">13<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Head coach appointment still to be finalised; Stéphane Gilli remains the most strongly linked candidate.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Free transfer`, x: `Van den Boomen arrives on a free after his Ajax exit.` },
  spendOut: { v: `None reported`, x: `No confirmed departures this window.` },
  methodLegend: ``
};
