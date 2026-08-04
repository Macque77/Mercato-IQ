/* ============================================================
   MERCATO IQ · CLUB DATA · WILLEM II · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Willem II",
  mono: "WIL",
  slug: "willem-ii",
  primary: "#E2001A",
  primaryBright: "#FF4D5E",
  primaryDeep: "#8A0010",
  primaryRgb: "226,0,26",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-04",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "Promoted from Eerste Divisie (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Willem II transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · Willem II"
};

const CONFIRMED_IN = [
  {name:"Kasper Boogaard", sub:"MF, 20 · captain profile", club:"AZ Alkmaar (loan)", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan from AZ to gain regular first-team minutes."},
  {name:"Finn Stam", sub:"DF, 23 · captain profile", club:"AZ Alkmaar (Jong AZ)", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer on a contract running to 2029."},
  {name:"Jaden Slory", sub:"AM/FW", club:"Feyenoord (loan)", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"One-season loan to get first-team football away from Feyenoord's squad."},
  {name:"Hidde ter Avest", sub:"DF (Right), 29", club:"Oxford United (England)", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free-agent signing after a spell in English football; 183 Eredivisie appearances in his career."},
  {name:"Eser Gürbüz", sub:"AM/Winger, 19", club:"SC Heerenveen (loan)", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan without a buy option, per Heerenveen."},
  {name:"Sebas Wermenbol", sub:"AM, 19", club:"Free agent", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed on a two-year contract."},
  {name:"Mats Leentje Lemmens", sub:"DF", club:"RWDM (Belgium)", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer after RWDM's off-field difficulties in Belgium."}
];

const CONFIRMED_OUT = [
  {name:"Boris Lambert", sub:"DF/MF", club:"KV Kortrijk (Belgium)", pos:"DF", fee:"€0.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sold to the Belgian Pro League side."},
  {name:"Nick Doodeman", sub:"FW/MF", club:"FC Volendam", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract not renewed; moved on a free transfer."},
  {name:"Raffael Behounek", sub:"DF", club:"Wolfsberger AC (Austria)", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer to the Austrian Bundesliga."},
  {name:"Emilio Kehrer", sub:"AM/FW", club:"FC Winterthur (Switzerland)", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed for Swiss top-flight football."},
  {name:"Siegert Baartmans", sub:"FW", club:"FC Eindhoven (loan)", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loaned out for regular game time."}
];

const INCOMING = [
  {name:"Nils Rossen", sub:"MF, 21", club:"Telstar", pos:"MF", report:"Willem II have tabled a bid with Telstar for the young midfielder as they look to add competition centrally.", src:"Brabants Dagblad (via Tilbo transfer blog)", tier:3, fee:"Bid submitted, undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"Late Jul 2026."},
  {name:"Gijs Besselink", sub:"MF", club:"FC Twente", pos:"MF", report:"Named as a target but Twente have shown no willingness to let him leave.", src:"Tilbo transfer blog", tier:3, fee:"N/A, Twente unwilling to sell", truth:45, prob:15, light:"o", trend:"flat", note:"Late Jul 2026."}
];

const OUTGOING = [
  {name:"Jeff Hardeveld", sub:"DF (Left), 31", club:"Telstar", pos:"DF", report:"Voetbal International reports Telstar interest in the experienced left-back.", src:"Voetbal International", tier:1, fee:"Undisclosed", truth:65, prob:35, light:"y", trend:"flat", note:"Late Jul 2026."}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  tilbocomtransferblogNilsRossen: {l:"Tilbo.com transfer blog", u:"https://www.tilbo.com/het-grote-transfergeruchtenblog-2026-2027/"},
  fCUpdatenlKasperBoogaard: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/willem-ii/transfers"},
  voetbalPrimeurnlFinnStam: {l:"VoetbalPrimeur.nl", u:"https://www.voetbalprimeur.nl/clubs/willem-ii"}};

const LINKMAP = {
  "Nils Rossen": ["tilbocomtransferblogNilsRossen"],
  "Calvin Twigt": ["tilbocomtransferblogNilsRossen"],
  "Gijs Besselink": ["tilbocomtransferblogNilsRossen"],
  "Jeff Hardeveld": ["tilbocomtransferblogNilsRossen"],
  "Kasper Boogaard": ["fCUpdatenlKasperBoogaard"],
  "Finn Stam": ["voetbalPrimeurnlFinnStam"],
  "Jaden Slory": ["fCUpdatenlKasperBoogaard"],
  "Hidde ter Avest": ["fCUpdatenlKasperBoogaard"],
  "Eser Gürbüz": ["fCUpdatenlKasperBoogaard"],
  "Sebas Wermenbol": ["tilbocomtransferblogNilsRossen"],
  "Mats Leentje Lemmens": ["voetbalPrimeurnlFinnStam"],
  "Boris Lambert": ["fCUpdatenlKasperBoogaard"],
  "Nick Doodeman": ["fCUpdatenlKasperBoogaard"],
  "Raffael Behounek": ["tilbocomtransferblogNilsRossen"],
  "Emilio Kehrer": ["fCUpdatenlKasperBoogaard"],
  "Siegert Baartmans": ["voetbalPrimeurnlFinnStam"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Willem II · 2026/27 Season`,
  heroLede: `Bounced straight back up after a one-year absence. Willem II preparing squad for top-flight football.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
