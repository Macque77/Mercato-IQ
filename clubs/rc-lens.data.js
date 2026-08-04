/* ============================================================
   MERCATO IQ · CLUB DATA · RC LENS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RC Lens",
  mono: "RCL",
  slug: "rc-lens",
  primary: "#C8102E",
  primaryBright: "#FDB927",
  primaryDeep: "#7A0C1E",
  primaryRgb: "200,16,46",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Dino Toppmöller (appointed 16 Jun 2026 from Eintracht Frankfurt, succeeding Pierre Sage, who left for Crystal Palace)",
  dof: "TBD (Director)",
  europe: "UEFA Champions League (2026/27) - group stage, as 2025/26 runners-up",
  finish: "2nd Ligue 1 (2025/26) - Coupe de France winners",
  owner: "Joseph Oughourlian (majority shareholder and President)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.getfootballnewsfrance.com/tag/lens/"],
  queries: ["RC Lens transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · RC Lens"
};

const CONFIRMED_IN = [
  {name:"Michaël Cuisance", sub:"26 · CM · France", to:"permanent from Hertha BSC", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 26 Jun 2026 - the first summer signing of the Dino Toppmöller era."},
  {name:"Saud Abdulhamid", sub:"25 · RB · Saudi Arabia", to:"permanent, purchase option triggered from AS Roma", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 4 Jun 2026 - Lens make his loan move permanent."}
];

const CONFIRMED_OUT = [
  {name:"Adrien Thomasson", sub:"29 · AM · France", club:"Stade Rennais", pos:"AM", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed 28 May 2026 on a three-year deal after his contract expired."},
  {name:"Mamadou Sangaré", sub:"RC Lens", club:"permanent to Brentford", pos:"MF", fee:"£41m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club-record sale to Brentford; Romano reported a verbal agreement with medical the same day."}
];

const INCOMING = [
  {name:"Rafael Leão", sub:"27 · LW · Portugal", club:"AC Milan", pos:"LW", report:"1 Aug 2026", src:"L'Équipe", tier:2, fee:"€70m", truth:45, prob:22, light:"o", trend:"flat", note:"L'Équipe reports Lens monitoring; Milan unlikely to sell their star winger."},
  {name:"Jonathan David", sub:"26 · ST · Canada", club:"LOSC Lille", pos:"ST", report:"31 Jul 2026", src:"Sky Sports France", tier:2, fee:"€45m", truth:52, prob:32, light:"y", trend:"flat", note:"Sky reports Lens interest in Lille's striker; a deal between Ligue 1 rivals remains unlikely but not dismissed."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Michaël Cuisance arrives from Hertha BSC</b>: Toppmöller's first signing as Lens prepare for Champions League football."},
  {ar:"⬆", t:"<b>Saud Abdulhamid made permanent</b>: option triggered on the Roma loanee's move."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Pierre Sage departs for Crystal Palace</b>: the Coach of the Season winner leaves after just one campaign, taking the Coupe de France and a runners-up Ligue 1 finish with him."}
];

const NEW = [
  {ar:"✦", t:"Dino Toppmöller, fresh from Eintracht Frankfurt, inherits a Champions League squad and a Coupe de France trophy as Lens' new head coach."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [
  {name:"Jonathan David", club:"LOSC Lille", pos:"ST", dir:"in", age:"~3 days", tier:2, note:"Sky Sports France reports Lens interest in the Canadian striker."}
];

const HUB = {
  "lequipe": {l:"L'Équipe", u:"https://www.lequipe.fr/Football/"},
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"},
  "gffn-lens": {l:"Get French Football News · Lens", u:"https://www.getfootballnewsfrance.com/tag/lens/"},
  fabrizioRomanoviaEmpireoftheKopMamadouSangar: {l:"Fabrizio Romano (via Empire of the Kop)", u:"https://www.empireofthekop.com/2026/07/31/medical-booked-for-liverpool-target-ahead-of-41m-transfer-fabrizio-romano/"}};

const LINKMAP = {
  "Rafael Leão": ["lequipe"],
  "Jonathan David": ["sky"],
  "Michaël Cuisance": ["gffn-lens"],
  "Saud Abdulhamid": ["gffn-lens"],
  "Adrien Thomasson": ["gffn-lens"],
  "Mamadou Sangaré": ["fabrizioRomanoviaEmpireoftheKopMamadouSangar"]};
const WL_LINKMAP = {
  "Jonathan David": ["sky"]
};

const PROSE = {
  heroH2: `Toppmöller inherits a Champions League squad after Sage's shock exit`,
  heroLede: `RC Lens enter a Champions League season under a brand-new head coach: <b>Dino Toppmöller</b>, arriving from Eintracht Frankfurt, replaces <b>Pierre Sage</b>, who left for Crystal Palace just months after being named Ligue 1's Coach of the Season for delivering a runners-up finish and the club's first-ever Coupe de France. On the pitch, <b>Michaël Cuisance</b> and a permanent deal for <b>Saud Abdulhamid</b> mark the start of the summer's business.`,
  metaRow: `<span>DECISION-MAKER: <b>Joseph Oughourlian</b> (President/Owner)</span> <span>HEAD COACH: <b>Dino Toppmöller</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">2<small>nd</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat gold"><div class="l">Confirmed In/Out</div><div class="v">2 / 1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Two deals in`, x: `Cuisance arrives permanently; Abdulhamid's loan is made permanent.` },
  spendOut: { v: `Free exit`, x: `Thomasson leaves for Rennes as his contract expired.` },
  methodLegend: ``
};
