/* ============================================================
   MERCATO IQ · CLUB DATA · PSV EINDHOVEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "PSV Eindhoven",
  mono: "PSV",
  slug: "psv-eindhoven",
  primary: "#DD0000",
  primaryBright: "#FF3333",
  primaryDeep: "#990000",
  primaryRgb: "221,0,0",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Peter Bosz",
  dof: "Marcel Brands (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "1st Eredivisie (2025/26)",
  owner: "PSV N.V.",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["PSV Eindhoven transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · PSV Eindhoven"
};

const CONFIRMED_IN = [
  {name:"Sven Mijnans", sub:"AM/MF · captain profile", club:"AZ Alkmaar", pos:"MF", fee:"€13m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"PSV's marquee early-window signing from AZ."},
  {name:"Matej Kovář", sub:"GK", club:"Bayer Leverkusen (Germany)", pos:"GK", fee:"€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as new first-choice goalkeeper from the Bundesliga club."}
];

const CONFIRMED_OUT = [
  {name:"Hirving Lozano", sub:"28 · RW · Mexico", club:"Bayern Munich", pos:"RW", fee:"€21m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 25 Jun as a permanent departure. Bayern take the Mexican winger for a fresh push on the right flank."},
  {name:"Robin van Duiven", sub:"FW · captain profile", club:"Real Valladolid (Spain)", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer to Spain's second tier."},
  {name:"Niek Schiks", sub:"GK", club:"RKC Waalwijk", pos:"GK", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loaned out for regular first-team minutes after losing his spot to Kovář."},
  {name:"Guus Verkooijen", sub:"MF/AM · captain profile", club:"SV Darmstadt 98 (Germany)", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer to the German second division."},
  {name:"Ismael Saibari", sub:"MF/AM · captain profile", club:"Bayern Munich (Germany)", pos:"MF", fee:"€50m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"PSV's headline outgoing sale of the summer, a permanent move to the Bundesliga champions."}
];

const INCOMING = [
  {name:"Xavi Simons", sub:"21 · CAM · Netherlands", club:"PSV Eindhoven (loan from Leipzig)", pos:"CAM", report:"1 Aug 2026", src:"Sky Deutschland / Christian Falk", tier:2, fee:"Loan + option", truth:75, prob:65, light:"g", trend:"up", note:"Falk confirms PSV negotiating loan deal extension with RB Leipzig for talented Dutch playmaker."},
  {name:"Kodai Sano", sub:"MF, 22 · Japan", club:"NEC Nijmegen", pos:"MF", report:"VI reports PSV and NEC have reached agreement; Sano, currently with NEC for a Europa/Champions League qualifier in Greece against Olympiacos, is set to have a medical and sign shortly. Would be PSV's second major summer signing after Sven Mijnans.", src:"Voetbal International", tier:1, fee:"Reduced from NEC's initial ~€20m asking price; final figure undisclosed", truth:90, prob:92, light:"g", trend:"flat", note:"4 Aug 2026."}
];

const OUTGOING = [
  {name:"Joël Drommel", sub:"GK", club:"Multiple suitors, destination undecided", pos:"GK", report:"Listed among PSV's active outgoing dossiers as the club reassesses its goalkeeping pecking order after Kovář's arrival, but no concrete destination reported yet.", src:"VoetbalPrimeur.nl", tier:3, fee:"Undisclosed", truth:50, prob:25, light:"o", trend:"flat", note:"Late Jul 2026."}
];

const RISERS = [];

const FALLERS = [
  {ar:"⬇", t:"<b>Hirving Lozano</b>: permanent departure to Bayern Munich now done and official."}
];

const NEW = [
  {ar:"✦", t:"PSV's attacking rebuild centres on the Simons loan extension after Lozano's permanent Bayern Munich exit."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Attacking midfield", w:55, x:"Simons loan extension critical for Dutch champions' attacking identity."}
];

const WATCHLIST = [
  {name:"Xavi Simons", club:"PSV Eindhoven (loan)", pos:"CAM", dir:"in", age:"~2 days", tier:2, note:"Christian Falk: PSV negotiating loan extension with RB Leipzig for Dutch talent."}
];

const HUB = {
  "gnews-hirvinglozano": {l:"Related news search: Hirving Lozano", u:"https://news.google.com/search?q=PSV%20Eindhoven%20Hirving%20Lozano%20transfer&hl=en-GB&gl=GB"},
  "skydeutschland": {l:"Sky Sport Deutschland", u:"https://sportnews.bz/"},
  "falk": {l:"Christian Falk (Sky Deutschland)", u:"https://x.com/Cfbayern"},
  "gnews-xavisimons": {l:"Related news search: Xavi Simons", u:"https://news.google.com/search?q=PSV%20Eindhoven%20Xavi%20Simons%20transfer&hl=en-GB&gl=GB"},
  voetbalInternationalKodaiSano: {l:"Voetbal International", u:"https://www.vi.nl/nieuws/doorbraak-bij-psv-akkoord-met-nec-over-kodai-sano"},
  voetbalPrimeurnlJolDrommel: {l:"VoetbalPrimeur.nl", u:"https://www.voetbalprimeur.nl/clubs/psv"},
  fCUpdatenlSvenMijnans: {l:"FCUpdate.nl", u:"https://www.fcupdate.nl/voetbalteams/nederland/psv/transfers"}};

const LINKMAP = {
  "Hirving Lozano": ["gnews-hirvinglozano"],
  "Xavi Simons": ["skydeutschland", "falk"],
  "Kodai Sano": ["voetbalInternationalKodaiSano"],
  "Joël Drommel": ["voetbalPrimeurnlJolDrommel"],
  "Sven Mijnans": ["fCUpdatenlSvenMijnans"],
  "Matej Kovář": ["fCUpdatenlSvenMijnans"],
  "Robin van Duiven": ["fCUpdatenlSvenMijnans"],
  "Niek Schiks": ["fCUpdatenlSvenMijnans"],
  "Guus Verkooijen": ["fCUpdatenlSvenMijnans"],
  "Ismael Saibari": ["fCUpdatenlSvenMijnans"]};
const WL_LINKMAP = {
  "Xavi Simons": ["gnews-xavisimons"]
};

const PROSE = {
  heroH2: `PSV Eindhoven · 2026/27 Season`,
  heroLede: `Transfer window active. PSV Eindhoven preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
