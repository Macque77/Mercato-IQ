/* ============================================================
   MERCATO IQ · CLUB DATA · FC LORIENT · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Lorient",
  mono: "FCL",
  slug: "fc-lorient",
  primary: "#FF6600",
  primaryBright: "#FF9640",
  primaryDeep: "#B34700",
  primaryRgb: "255,102,0",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD (Olivier Pantaloni left in April 2026 for Nice; Will Still was linked in April before joining Auxerre instead - no confirmed permanent successor found)",
  dof: "Laurent Koscielny (Sporting Director)",
  europe: "None (2026/27)",
  finish: "9th Ligue 1 (2025/26)",
  owner: "Black Knight Football Club (sole shareholder since 28 Jan 2026); Loïc Féry (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.fclorient.bzh/actualites", "https://www.getfootballnewsfrance.com/tag/lorient/"],
  queries: ["FC Lorient transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · FC Lorient"
};

const CONFIRMED_IN = [
  {name:"Souleymane Faye", sub:"FW", to:"loan", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joined on loan as Lorient add forward depth."},
  {name:"Gabin Bernardeau", sub:"MF", to:"permanent", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Announced signing: 'Je suis très heureux d'être ici.'"}
];

const CONFIRMED_OUT = [
  {name:"Pablo Pagis", sub:"25 · FW · France", club:"Paris FC", pos:"FW", fee:"€15m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported finalised 15 Jul 2026 - Lorient's biggest sale of the window."},
  {name:"Isaac Monnier", sub:"DF", club:"SC Bastia", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sent out on loan to the Ligue 2 side."}
];

const INCOMING = [
];

const OUTGOING = [
  {name:"Bamba Dieng", sub:"Striker, still without a club end of July", club:"Hull City / Middlesbrough (linked)", pos:"ST", report:"Dieng has left Lorient and remains a free agent; English Championship sides Hull City and Middlesbrough are reported to be competing for his signature.", src:"Foot Mercato", tier:3, fee:"Free agent", truth:45, prob:35, light:"y", trend:"flat", note:"No destination confirmed as of early August; a prior move to a Turkish club fell through.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const RISERS = [
  {ar:"⬆", t:"<b>Pagis sale to Paris FC banked</b>: €15m fee funds further business as Lorient prepare for a new head coach era."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Lorient are still searching for a permanent head coach after Olivier Pantaloni's acrimonious April exit ('I refuse to work in these conditions') - he has since taken the OGC Nice job as a free agent."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Head coach", w:80, x:"The most pressing item on Lorient's summer agenda: no permanent successor to Pantaloni has been confirmed."}
];

const WATCHLIST = [];

const HUB = {
  "gffn-lorient": {l:"Get French Football News · Lorient", u:"https://www.getfootballnewsfrance.com/tag/lorient/"},
  "fclorient": {l:"FC Lorient Official News", u:"https://www.fclorient.bzh/actualites"},
  leTelegrammeSouleymaneFaye: {l:"Le Telegramme", u:"https://www.letelegramme.fr/sports/football/fc-lorient/clause-liberatoire-a-80-millions-deuros-espagne-et-senegal-qui-est-souleymane-faye-troisieme-recrue-du-fc-lorient-7094260.php"},
  oneFootballFootMercatoBambaDieng: {l:"OneFootball / Foot Mercato", u:"https://onefootball.com"},
  footMercatoPabloPagis: {l:"Foot Mercato", u:"https://www.footmercato.net"}};

const LINKMAP = {
  "Souleymane Faye": ["fclorient", "leTelegrammeSouleymaneFaye"],
  "Gabin Bernardeau": ["fclorient"],
  "Pablo Pagis": ["gffn-lorient", "footMercatoPabloPagis"],
  "Isaac Monnier": ["fclorient"],
  "Bamba Dieng": ["oneFootballFootMercatoBambaDieng"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A coaching vacancy overshadows a productive market`,
  heroLede: `Lorient's summer has been complicated by an unresolved search for a permanent head coach, after <b>Olivier Pantaloni</b>'s bitter April exit ('I refuse to work in these conditions') - he has since resurfaced at OGC Nice as a free agent. On the pitch, Sporting Director <b>Laurent Koscielny</b> has banked €15m selling <b>Pablo Pagis</b> to Paris FC, while loan business (in and out) continues to shape the squad.`,
  metaRow: `<span>DECISION-MAKER: <b>Loïc Féry</b> (President)</span> <span>HEAD COACH: <b>TBC</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">9<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: `Head coach appointment remains unresolved - the single biggest open question of Lorient's summer.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Loan/free deals`, x: `Faye (loan in) and Bernardeau add to the squad without a major fee reported.` },
  spendOut: { v: `€15m banked`, x: `Pagis' sale to Paris FC is the standout piece of business.` },
  methodLegend: ``
};
