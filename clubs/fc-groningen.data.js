/* ============================================================
   MERCATO IQ · CLUB DATA · FC GRONINGEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Groningen",
  mono: "GRO",
  slug: "fc-groningen",
  primary: "#00A650",
  primaryBright: "#4DDB8C",
  primaryDeep: "#00612F",
  primaryRgb: "0,166,80",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-04",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["FC Groningen transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · FC Groningen"
};

const CONFIRMED_IN = [
  {name:"Pelle Clement", sub:"midfielder, named captain", club:"Sparta Rotterdam", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Rijk Janse", sub:"midfielder", club:"NEC", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Nikolas Brandis", sub:"midfielder, Slovakia U20 international", club:"AS Trenčín (Slovakia)", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract until mid-2030; corroborated by VI.nl and Voetbalprimeur."}
];

const CONFIRMED_OUT = [
  {name:"Mats Seuntjens", sub:"34, forward, returns to former club", club:"NAC Breda", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Romano Postema", sub:"striker", club:"Viking FK (Norway)", pos:"FW", fee:"€0.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Excelled on loan at FC Emmen (24 goals) before this permanent move."},
  {name:"Rui Mendes", sub:"attacking midfielder", club:"Telstar", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Marvin Peersman", sub:"35, defender", club:"Telstar", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Thijs Oosting", sub:"midfielder", club:"PEC Zwolle", pos:"MF", fee:"€0.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Younes Taha", sub:"midfielder, end of loan spell", club:"FC Twente (parent club)", pos:"MF", fee:"Loan return", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan spell at Groningen ends; returns to parent club Twente."}
];

const INCOMING = [
  {name:"Malcolm Jeng", sub:"young midfielder", club:"Feyenoord (loan)", pos:"MF", report:"FC Groningen are seeking to bring Jeng in on loan; some reports instead link his parent club as Stade Reims with a loan-plus-purchase-option structure.", src:"FCUpdate.nl", tier:2, fee:"Loan", truth:40, prob:35, light:"y", trend:"flat", note:"Conflicting reports on parent club (Feyenoord vs. Stade Reims) — treat with caution."},
  {name:"Travis Hernes", sub:"midfielder, currently on loan at Groningen", club:"Newcastle United (England)", pos:"MF", report:"Groningen are reviewing an option to make Hernes's loan spell permanent through to mid-2030; described in some outlets as already a 'loan return' but the buy option is still under review.", src:"VI.nl", tier:2, fee:"Undisclosed (option to buy)", truth:55, prob:55, light:"g", trend:"flat", note:""},
  {name:"Nick Verschuren", sub:"defender", club:"Ajax", pos:"DF", report:"Groningen are considering making Verschuren's move permanent after a loan spell.", src:"FCUpdate.nl", tier:2, fee:"Undisclosed", truth:45, prob:30, light:"y", trend:"flat", note:""},
  {name:"Marley Dors", sub:"20, forward, emerging talent", club:"Almere City", pos:"FW", report:"Named as a young target for Groningen; under contract at Almere City through mid-2027.", src:"FCUpdate.nl", tier:2, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:""},
  {name:"Mikkel Desler", sub:"defender", club:"Unspecified current club", pos:"DF", report:"Reported as in negotiations with Groningen, per Dutch aggregator coverage citing VI.nl/Voetbalprimeur.", src:"Nieuwsbreak.nl (via VI.nl/Voetbalprimeur)", tier:3, fee:"Undisclosed", truth:30, prob:20, light:"o", trend:"flat", note:"Low-confidence aggregator report; player's current club unclear from available sourcing."}
];

const OUTGOING = [
  {name:"Thom van Bergen", sub:"forward, Jong Oranje international", club:"AZ Alkmaar", pos:"FW", report:"AZ have reportedly made multiple bids (€5m+) for Van Bergen, but Groningen are holding firm on their valuation; player is under contract to 2028.", src:"Transfernieuws.nl", tier:2, fee:"€5m+ (bid, rejected)", truth:55, prob:35, light:"y", trend:"flat", note:""}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  fCUpdatenlMalcolmJeng: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalnieuws/2026/05/de-transferzomer-van-fc-groningen-enorme-exodus-in-de-euroborg"},
  vInlTravisHernes: {l:"VI.nl", u:"https://www.vi.nl/nieuws/zomertransfers-eredivisie-seizoen-2026-27-alle-clubs-op-een-rij"},
  nieuwsbreaknlMikkelDesler: {l:"Nieuwsbreak.nl", u:"https://fcgroningen.nieuwsbreak.nl/"},
  transfernieuwsnlThomvanBergen: {l:"Transfernieuws.nl", u:"https://www.transfernieuws.nl/transfernieuws/club/fc-groningen"},
  fCUpdatenlPelleClement: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/groningen/transfers"}};

const LINKMAP = {
  "Malcolm Jeng": ["fCUpdatenlMalcolmJeng"],
  "Travis Hernes": ["vInlTravisHernes"],
  "Nick Verschuren": ["fCUpdatenlMalcolmJeng"],
  "Marley Dors": ["fCUpdatenlMalcolmJeng"],
  "Mikkel Desler": ["nieuwsbreaknlMikkelDesler"],
  "Thom van Bergen": ["transfernieuwsnlThomvanBergen"],
  "Pelle Clement": ["fCUpdatenlPelleClement"],
  "Rijk Janse": ["fCUpdatenlPelleClement"],
  "Nikolas Brandis": ["vInlTravisHernes"],
  "Mats Seuntjens": ["fCUpdatenlPelleClement"],
  "Romano Postema": ["fCUpdatenlPelleClement"],
  "Rui Mendes": ["fCUpdatenlPelleClement"],
  "Marvin Peersman": ["fCUpdatenlPelleClement"],
  "Thijs Oosting": ["fCUpdatenlPelleClement"],
  "Younes Taha": ["fCUpdatenlPelleClement"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Groningen · 2026/27 Season`,
  heroLede: `Transfer window active. FC Groningen preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
