/* ============================================================
   MERCATO IQ · CLUB DATA · RIZESPOR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Rizespor", mono: "R", slug: "rizespor",
  primary: "#00843D", primaryBright: "#3FCB8C", primaryDeep: "#00532A",
  primaryRgb: "0,132,61",
  breadcrumb: ["Turkey","Süper Lig"]
};

const VOLATILE = {
  verified: "2026-07-29",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["rizespor transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ahmet Kutucu", sub:"FW · Turkey", club:"Galatasaray", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan move from Galatasaray officially announced by Çaykur Rizespor."},
  {name:"Tayyip Talha", sub:"MF · Turkey", club:"Beşiktaş", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Beşiktaş as part of Rizespor's summer rebuild."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Kartal Kayra", sub:"25 · MF · Turkey", club:"Beşiktaş", pos:"MF", report:"3 Aug 2026", src:"Fotomaç", tier:2, fee:"Undisclosed", truth:50, prob:30, light:"y", trend:"flat", note:"Rizespor's management has opened direct contact with Beşiktaş over the midfielder as part of their pre-season rebuild."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Rizespor Official", u:"#"},
  fotomaKartalKayra: {l:"Fotomaç", u:"https://www.fotomac.com.tr/rizespor/2026/08/03/rizede-rota-kartal-kayra"},
  fotomaAhmetKutucu: {l:"Fotomaç", u:"https://www.fotomac.com.tr/rizespor/2026/07/19/caykur-rizespor-ahmed-kutucunun-transferini-resmen-duyurdu"},
  fotomaTayyipTalha: {l:"Fotomaç", u:"https://www.fotomac.com.tr/rizespor/2026/07/20/rize-sov-basladi"}};

const LINKMAP = {
  "Kartal Kayra": ["fotomaKartalKayra"],
  "Ahmet Kutucu": ["fotomaAhmetKutucu"],
  "Tayyip Talha": ["fotomaTayyipTalha"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Rizespor · 2026/27 Season`,
  heroLede: `Transfer window active. Rizespor preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};