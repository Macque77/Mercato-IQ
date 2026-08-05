/* ============================================================
   MERCATO IQ · CLUB DATA · SC TELSTAR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "SC Telstar",
  mono: "TEL",
  slug: "telstar",
  primary: "#E30613",
  primaryBright: "#FF6B75",
  primaryDeep: "#7A0000",
  primaryRgb: "227,6,19",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-04",
  coach: "Henk Brugge",
  dof: "TBD",
  europe: "TBD",
  finish: "Retained Eredivisie status (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Telstar transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · SC Telstar"
};

const CONFIRMED_IN = [
  {name:"Harrie Kuster", sub:"20-year-old attacking midfielder, scored 10 goals in 34 games on loan at RKC last season", club:"FC Twente", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed until mid-2029 with a one-year option"},
  {name:"Isaiah Ahmed", sub:"20-year-old midfielder, reunites with head coach Henk Brugge", club:"SC Heerenveen", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed until 2029"},
  {name:"Fabiano Rust", sub:"21-year-old forward, ex-Feyenoord/ADO Den Haag academy, signed after a four-week trial", club:"Jong Feyenoord", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed until mid-2028 with a one-year option"},
  {name:"Prince Adu-Addae Junior Aning", sub:"22-year-old left-back, ex-Ajax academy, four seasons at Dortmund II", club:"Borussia Dortmund II", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract had expired; signed until mid-2028 with a one-year option"},
  {name:"Marvin Peersman", sub:"Free agent signing", club:"FC Groningen", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract until mid-2028"},
  {name:"Rui Mendes", sub:"Portuguese forward, contract at Groningen terminated at start of pre-season", club:"FC Groningen", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed for 2 years, until mid-2028"},
  {name:"Emirhan Demircan", sub:"21-year-old winger, Turkish youth international, ex-Bayern Munich II", club:"FC Utrecht", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan to gain first-team minutes"}
];

const CONFIRMED_OUT = [
  {name:"Tyrese Noslin", sub:"23-year-old winger, capped breakout season with Curaçao World Cup 2026 appearance", club:"Barnsley FC (England)", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a three-year deal in England despite a year left on his Telstar contract; club received compensation"},
  {name:"Sem van Duijn", sub:"22-year-old forward, 5 goals/2 assists on loan helping Telstar retain Eredivisie status", club:"AZ Alkmaar", pos:"FW", fee:"N/A (loan return)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan spell ended; AZ rewarded him with a contract extension to mid-2031"},
  {name:"Danny Bakker", sub:"31-year-old defender, former Telstar captain, central to 2024/25 Eredivisie promotion", club:"FC Anyang (South Korea)", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; also courted by Bali United (Indonesia) before choosing FC Anyang"},
  {name:"Guus Offerhaus", sub:"Permanent move", club:"FC Utrecht", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract until mid-2029"},
  {name:"Devon Koswal", sub:"Moves abroad on a long-term deal", club:"Sandefjord (Norway)", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract until end-2029"}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  voetbalInternationalVInlHarrieKuster: {l:"Voetbal International (VI.nl)", u:"https://www.vi.nl/nieuws/telstar-neemt-talentvolle-kuster-over-van-twente"},
  voetbalInternationalVInlIsaiahAhmed: {l:"Voetbal International (VI.nl)", u:"https://www.vi.nl/nieuws/telstar-haalt-oude-bekende-van-brugge-op-bij-heerenveen"},
  voetbalInternationalVInlFabianoRust: {l:"Voetbal International (VI.nl)", u:"https://www.vi.nl/nieuws/telstar-legt-voormalig-talenten-ajax-en-feyenoord-vast-na-proefperiode"},
  voetbalInternationalVInlMarvinPeersman: {l:"Voetbal International (VI.nl)", u:"https://www.vi.nl/nieuws/zomertransfers-eredivisie-seizoen-2026-27-alle-clubs-op-een-rij"},
  voetbalInternationalVInlRuiMendes: {l:"Voetbal International (VI.nl)", u:"https://www.vi.nl/nieuws/telstar-pikt-opnieuw-speler-met-fc-groningen-verleden-op"},
  voetbalInternationalVInlEmirhanDemircan: {l:"Voetbal International (VI.nl)", u:"https://www.vi.nl/nieuws/fc-utrecht-laat-voormalig-bayern-talent-vlieguren-maken-bij-telstar"},
  voetbalInternationalVInlTyreseNoslin: {l:"Voetbal International (VI.nl)", u:"https://www.vi.nl/nieuws/overstap-naar-engeland-maakt-droomzomer-van-wk-ganger-noslin-compleet"},
  voetbalInternationalVInlSemvanDuijn: {l:"Voetbal International (VI.nl)", u:"https://www.vi.nl/nieuws/az-beloont-van-duijn-na-succesvolle-tijd-bij-telstar-dat-is-heel-goed-uitgepakt"},
  voetbalInternationalVInlDannyBakker: {l:"Voetbal International (VI.nl)", u:"https://www.vi.nl/nieuws/zuid-koreanen-bevestigen-komst-van-transfervrije-bakker"}};

const LINKMAP = {
  "Harrie Kuster": ["voetbalInternationalVInlHarrieKuster"],
  "Isaiah Ahmed": ["voetbalInternationalVInlIsaiahAhmed"],
  "Fabiano Rust": ["voetbalInternationalVInlFabianoRust"],
  "Prince Adu-Addae Junior Aning": ["voetbalInternationalVInlFabianoRust"],
  "Marvin Peersman": ["voetbalInternationalVInlMarvinPeersman"],
  "Rui Mendes": ["voetbalInternationalVInlRuiMendes"],
  "Emirhan Demircan": ["voetbalInternationalVInlEmirhanDemircan"],
  "Tyrese Noslin": ["voetbalInternationalVInlTyreseNoslin"],
  "Sem van Duijn": ["voetbalInternationalVInlSemvanDuijn"],
  "Danny Bakker": ["voetbalInternationalVInlDannyBakker"],
  "Guus Offerhaus": ["voetbalInternationalVInlMarvinPeersman"],
  "Devon Koswal": ["voetbalInternationalVInlMarvinPeersman"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `SC Telstar · 2026/27 Season`,
  heroLede: `Nicknamed "De Witte Leeuwen," Telstar preparing squad for another season in the Eredivisie under new coach Henk Brugge.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
