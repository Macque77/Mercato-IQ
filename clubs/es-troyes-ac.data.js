/* ============================================================
   MERCATO IQ · CLUB DATA · ES TROYES AC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "ES Troyes AC",
  mono: "ESTAC",
  slug: "es-troyes-ac",
  primary: "#0033A0",
  primaryBright: "#5CA9FF",
  primaryDeep: "#001F4D",
  primaryRgb: "0,51,160",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD (Stéphane Dumont has been in charge since Aug 2024; no reported managerial change has surfaced ahead of 2026/27)",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "1st Ligue 2 (2025/26) - promoted as champions",
  owner: "City Football Group (majority stake since 3 Sep 2020)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.estac.fr/actualites", "https://www.getfootballnewsfrance.com/tag/troyes/"],
  queries: ["ES Troyes AC transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · ES Troyes AC"
};

const CONFIRMED_IN = [
  {name:"Patrick Beach", sub:"22 · GK · Australia", to:"permanent from Melbourne City", fee:"€1.7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed on a five-year deal after impressing at the 2026 FIFA World Cup; an intra-City Football Group move given Troyes and Melbourne City share the same ownership group."},
  {name:"Iron Gomis", sub:"24 · MF", to:"free transfer", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Made his ESTAC debut in late July after joining as a free agent."}
];

const CONFIRMED_OUT = [
  {name:"Sankhoun Diawara", sub:"20 · MF · Mali", club:"AC Milan", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed for Serie A giants AC Milan, confirmed 29 Jul 2026 - Troyes' most significant sale of the window."},
  {name:"Thierno Baldé", sub:"MF", club:"TBD", pos:"MF", fee:"TBD", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departure announced 3 Aug 2026."},
  {name:"Mathys Detourbet", sub:"Winger sold to Manchester City, loaned straight to Monaco", club:"Manchester City", pos:"RW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"The 19-year-old was sold via the City Football Group network before immediately being loaned to AS Monaco for 2026-27."}
];

const INCOMING = [];

const OUTGOING = [
];

const RISERS = [
  {ar:"⬆", t:"<b>Patrick Beach arrives from sister club Melbourne City</b>: World Cup-tested goalkeeper signs a five-year deal."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Sankhoun Diawara sold to AC Milan</b>: the young Malian midfielder's move to Serie A is Troyes' marquee sale."}
];

const NEW = [
  {ar:"✦", t:"Troyes return to Ligue 1 as Ligue 2 champions, leaning on parent club City Football Group's network for their first major signing."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "gffn-troyes": {l:"Get French Football News · Troyes", u:"https://www.getfootballnewsfrance.com/tag/troyes/"},
  "estac": {l:"ESTAC Official News", u:"https://www.estac.fr/actualites"},
  footMercatoviaLEstclairPatrickBeach: {l:"Foot Mercato (via L'Est Éclair)", u:"https://www.footmercato.net/a8676576281722061817-troyes-va-soffrir-lune-des-revelations-de-la-coupe-du-monde-2026"},
  ouestFranceIronGomis: {l:"Ouest-France", u:"https://www.ouest-france.fr/sport/football/ea-guingamp/mercato-ea-guingamp-iron-gomis-sest-engage-a-troyes-d4ed9866-812e-11f1-9d8e-98fb5a42b8f3"},
  sFGateAPMathysDetourbet: {l:"SFGate (AP)", u:"https://www.sfgate.com/sports/article/promoted-troyes-sells-forward-detourbet-to-22323461.php"},
  yahooSportsSankhounDiawara: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/official-milan-sign-diawara-troyes-111000761.html"}};

const LINKMAP = {
  "Patrick Beach": ["estac", "footMercatoviaLEstclairPatrickBeach"],
  "Iron Gomis": ["estac", "ouestFranceIronGomis"],
  "Sankhoun Diawara": ["gffn-troyes", "yahooSportsSankhounDiawara"],
  "Thierno Baldé": ["estac"],
  "Mathys Detourbet": ["gffn-troyes", "sFGateAPMathysDetourbet"]
};
const WL_LINKMAP = {
  "Mathys Detourbet": ["gffn-troyes"]
};

const PROSE = {
  heroH2: `Champions of Ligue 2 lean on the City Football Group network`,
  heroLede: `Troyes return to the top flight as Ligue 2 champions, and their first significant move of the window shows the value of City Football Group ownership: World Cup goalkeeper <b>Patrick Beach</b> arrives from sister club Melbourne City. The bigger story, though, is outgoing - <b>Sankhoun Diawara</b>'s move to AC Milan is a marquee sale for a promoted side, while Manchester City's long-running interest in teenager <b>Mathys Detourbet</b> continues to simmer.`,
  metaRow: `<span>DECISION-MAKER: <b>City Football Group</b> (Owner)</span> <span>HEAD COACH: <b>TBC</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">1<small>st</small> (Ligue 2)</div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In/Out</div><div class="v">2 / 2</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Detourbet's long-running Manchester City links remain unresolved as the summer progresses.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€1.7m confirmed`, x: `Beach's fee is the only one disclosed; Gomis arrived as a free agent.` },
  spendOut: { v: `Milan sale banked`, x: `Diawara's move to AC Milan is the highlight of a promoted side's summer business.` },
  methodLegend: ``
};
