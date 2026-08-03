/* ============================================================
   MERCATO IQ · CLUB DATA · GENOA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Genoa",
  mono: "GEN",
  slug: "genoa",
  primary: "#C8102E",
  primaryBright: "#FF4D5E",
  primaryDeep: "#7A0A1C",
  primaryRgb: "200,16,46",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Daniele De Rossi (appointed after Patrick Vieira's sacking following a winless start)",
  dof: "Club sporting management (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "16th Serie A (2025/26)",
  owner: "Dan Sucu",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/genoa/"],
  queries: ["Genoa transfer news 2026", "Genoa De Rossi Dovbyk Traore", "Genoa Ekhator Juventus"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Genoa"
};

const CONFIRMED_IN = [
  {name:"Mario Mitaj", sub:"23 · CB · Albania", to:"loan with option to buy from Al Ittihad", fee:"Loan + option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 31 Jul. Defensive reinforcement on loan with a route to a permanent deal."}
];

const CONFIRMED_OUT = [
  {name:"Jeff Ekhator", sub:"19 · ST · Italy", club:"Juventus", pos:"ST", fee:"€16m plus bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 Jul. Teenage striker, who had just made his senior Italy debut, cashes in with a move to Juventus."}
];

const INCOMING = [
  {name:"Hamed Junior Traore", sub:"25 · CM · Ivory Coast", club:"Olympique Marseille", pos:"CM", report:"12-14 Jul 2026", src:"Football Italia", tier:2, fee:"€8-10m (loan with option to buy)", truth:58, prob:42, light:"y", trend:"up", note:"Expected to complete a loan-with-option move for creative midfield reinforcement."}
];

const OUTGOING = [
  {name:"Artem Dovbyk", sub:"28 · ST · Ukraine", club:"AS Roma (staying, rumoured target)", pos:"ST", report:"4 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:45, prob:20, light:"o", trend:"flat", note:"Coach Daniele De Rossi reportedly wants a reunion with his former Roma striker, though complications remain and Bologna are also in the conversation for the same player."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Mario Mitaj arrives</b>: loan-with-option defensive addition from Al Ittihad."},
  {ar:"⬆", t:"<b>Hamed Junior Traore talks progress</b>: loan-with-option move from Marseille expected to complete."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Jeff Ekhator departs</b>: teenage Italy striker cashes in with a €16m move to Juventus."}
];

const NEW = [
  {ar:"✦", t:"Daniele De Rossi's Genoa are chasing a reunion with former Roma striker Artem Dovbyk while also progressing a Marseille loan deal for Hamed Junior Traore, funded in part by Ekhator's sale to Juventus."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Elliot Stroud transfer collapse</b>: the defender had reportedly signed a pre-contract with Genoa but instead completed a move to Hull City - Genoa are pursuing legal action against his agents rather than continuing to chase the deal."}
];

const POSITIONS = [
  {p:"Centre-forward", w:50, x:"The Dovbyk reunion is De Rossi's stated preference but faces genuine competition from Bologna for the same player."},
  {p:"Central midfield", w:35, x:"Traore's loan-with-option move is the most advanced incoming business."}
];

const WATCHLIST = [
  {name:"Artem Dovbyk", club:"AS Roma", pos:"ST", dir:"in", age:"~1 month", tier:3, note:"De Rossi wants a reunion with his old Roma forward, but Bologna are also in the mix."},
  {name:"Hamed Junior Traore", club:"Olympique Marseille", pos:"CM", dir:"in", age:"~3 weeks", tier:2, note:"Loan-with-option move expected to complete."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Genoa", u:"https://football-italia.net/category/teams/genoa/"}
};

const LINKMAP = {
  "Mario Mitaj": ["footballItalia"],
  "Jeff Ekhator": ["footballItalia"],
  "Hamed Junior Traore": ["footballItalia"],
  "Artem Dovbyk": ["footballItalia"]
};
const WL_LINKMAP = {
  "Artem Dovbyk": ["footballItalia"],
  "Hamed Junior Traore": ["footballItalia"]
};

const PROSE = {
  heroH2: `De Rossi chases a Dovbyk reunion as Genoa cash in on teenage striker Ekhator`,
  heroLede: `Genoa enter 2026/27 under <b>Daniele De Rossi</b>, appointed after Patrick Vieira was sacked following a winless start, with the club looking to move on from a 16th-place finish. De Rossi's stated preference is a reunion with <b>Artem Dovbyk</b>, his former Roma striker, though Bologna are also chasing the same player, complicating matters. <b>Hamed Junior Traore's</b> loan-with-option move from Marseille is progressing well for midfield creativity, and <b>Mario Mitaj</b> has already arrived on loan from Al Ittihad for defensive depth. The summer's biggest fee came the other way - teenage Italy international <b>Jeff Ekhator</b> departed for Juventus for €16m plus bonuses - while a reported pre-contract agreement with defender Elliot Stroud collapsed when he instead signed for Hull City, prompting Genoa to consider legal action against his representatives.`,
  metaRow: `<span>DECISION-MAKER: <b>Club sporting management</b></span> <span>HEAD COACH: <b>Daniele De Rossi</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">16<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Traore's loan-with-option move is the most advanced unconfirmed deal.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Dovbyk is a target, not a Genoa departure - listed here to track De Rossi's stated pursuit against Bologna's competing interest.`,
  pricingBanner: ``,
  excludedNote: `<b>Excluded as collapsed:</b> Elliot Stroud's reported pre-contract with Genoa - he instead joined Hull City, with legal action against his agents reportedly being considered.`,
  spendIn: { v: `Loan business so far`, x: `Mitaj (loan+option) is done; Traore (€8-10m loan+option) is progressing.` },
  spendOut: { v: `€16m banked`, x: `Ekhator's sale to Juventus is the confirmed fee of the window.` },
  methodLegend: ``
};
