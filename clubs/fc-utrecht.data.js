/* ============================================================
   MERCATO IQ · CLUB DATA · FC UTRECHT · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Utrecht",
  mono: "UTR",
  slug: "fc-utrecht",
  primary: "#DA1A1A",
  primaryBright: "#FF5C5C",
  primaryDeep: "#7A0E0E",
  primaryRgb: "218,26,26",
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
  queries: ["FC Utrecht transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · FC Utrecht"
};

const CONFIRMED_IN = [
  {name:"Ángel Alarcón", sub:"winger", club:"FC Porto (Portugal)", pos:"FW", fee:"€2m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Joris van Overeem", sub:"midfielder, returns to Utrecht, named captain", club:"SC Heerenveen", pos:"MF", fee:"€0.7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Praised by sources as 'a connector' and an asset on and off the pitch."},
  {name:"Kevin Paredes", sub:"winger", club:"VfL Wolfsburg (Germany)", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Guus Offerhaus", sub:"midfielder", club:"Telstar", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Arthur Zagre", sub:"defender", club:"Excelsior", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];

const CONFIRMED_OUT = [
  {name:"Miguel Rodríguez", sub:"attacking midfielder", club:"Deportivo Alavés (Spain)", pos:"MF", fee:"€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Sébastien Haller", sub:"striker", club:"Sanfrecce Hiroshima (Japan)", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Souffian El Karouani", sub:"left-back", club:"Saudi Pro League club (Al-Qadsiah/Al-Shabab reported)", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sources disagree on the exact Saudi club; move to Saudi Arabia itself is consistently reported."},
  {name:"Nick Viergever", sub:"centre-back", club:"PEC Zwolle", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Mike van der Hoorn", sub:"centre-back", club:"AEK Larnaca (Cyprus)", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Tom de Graaff", sub:"goalkeeper", club:"PEC Zwolle", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];

const INCOMING = [
  {name:"Tyrell Malacia", sub:"26, left-back, free agent", club:"Manchester United", pos:"DF", report:"Named by Utrecht-watchers as one of several free-agent 'bargain' options on the market; the ex-Feyenoord full-back is seeking a club with regular game time after struggling with injuries at Man United.", src:"FCUpdate.nl (via UtrechtFans.nl)", tier:2, fee:"Free", truth:45, prob:20, light:"o", trend:"flat", note:"Speculative free-agent link, not an active negotiation."},
  {name:"Joël Veltman", sub:"34, centre-back, free agent", club:"Brighton & Hove Albion", pos:"DF", report:"Experienced defender training with Jong Ajax to stay fit while a permanent free-transfer destination is sought; flagged as a possible experienced squad addition for Utrecht.", src:"FCUpdate.nl (via UtrechtFans.nl)", tier:2, fee:"Free", truth:45, prob:25, light:"o", trend:"flat", note:""},
  {name:"Myron Boadu", sub:"25, striker, free agent", club:"PSV", pos:"FW", report:"Became available after PSV chose not to extend his contract; open to domestic or foreign offers, with Utrecht mentioned among possible suitors.", src:"FCUpdate.nl (via UtrechtFans.nl)", tier:2, fee:"Free", truth:45, prob:25, light:"o", trend:"flat", note:""},
  {name:"Jasper Cillessen", sub:"37, goalkeeper, free agent", club:"NEC", pos:"GK", report:"Veteran keeper listed as a potential experienced free-agent option for Utrecht's goalkeeping department.", src:"FCUpdate.nl (via UtrechtFans.nl)", tier:2, fee:"Free", truth:40, prob:15, light:"o", trend:"flat", note:""},
  {name:"Hans Hateboer", sub:"31, right-back, free agent", club:"Free agent (previously Italy/France)", pos:"DF", report:"Named as a potential 'return to the Netherlands' option after recent spells abroad.", src:"FCUpdate.nl (via UtrechtFans.nl)", tier:2, fee:"Free", truth:35, prob:15, light:"o", trend:"flat", note:""}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  utrechtFansnlTyrellMalacia: {l:"UtrechtFans.nl", u:"https://www.utrechtfans.nl/fc-utrecht-opgelet-vijf-transfervrije-buitenkansjes-op-de-markt/"},
  fCUpdatenlngelAlarcn: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/fc-utrecht/transfers"}};

const LINKMAP = {
  "Tyrell Malacia": ["utrechtFansnlTyrellMalacia"],
  "Joël Veltman": ["utrechtFansnlTyrellMalacia"],
  "Myron Boadu": ["utrechtFansnlTyrellMalacia"],
  "Jasper Cillessen": ["utrechtFansnlTyrellMalacia"],
  "Hans Hateboer": ["utrechtFansnlTyrellMalacia"],
  "Ángel Alarcón": ["fCUpdatenlngelAlarcn"],
  "Joris van Overeem": ["fCUpdatenlngelAlarcn"],
  "Kevin Paredes": ["fCUpdatenlngelAlarcn"],
  "Guus Offerhaus": ["fCUpdatenlngelAlarcn"],
  "Arthur Zagre": ["fCUpdatenlngelAlarcn"],
  "Miguel Rodríguez": ["fCUpdatenlngelAlarcn"],
  "Sébastien Haller": ["fCUpdatenlngelAlarcn"],
  "Souffian El Karouani": ["fCUpdatenlngelAlarcn"],
  "Nick Viergever": ["fCUpdatenlngelAlarcn"],
  "Mike van der Hoorn": ["fCUpdatenlngelAlarcn"],
  "Tom de Graaff": ["fCUpdatenlngelAlarcn"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Utrecht · 2026/27 Season`,
  heroLede: `Transfer window active. FC Utrecht preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
