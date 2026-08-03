/* ============================================================
   MERCATO IQ · CLUB DATA · REAL MADRID · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Real Madrid", mono: "RM", slug: "real-madrid",
  primary: "#003DA5", primaryBright: "#3399FF", primaryDeep: "#001F4D",
  primaryRgb: "0,61,165",
  breadcrumb: ["Spain","La Liga"]
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
  queries: ["real-madrid transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ferran Torres", sub:"26 · RW/LW · Spain", to:"permanent from Barcelona", fee:"€55m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Announced 22 July as Madrid secure a proven La Liga pedigree to bolster the wings. Torres brings Champions League experience and immediate readiness for Spanish football, fitting Carlo Ancelotti's squad rotation plans."},
];

const CONFIRMED_OUT = [
  {name:"Vinícius Júnior", sub:"26 · LW · Brazil", club:"Al-Nassr (Saudi Arabia)", pos:"LW", fee:"€500m (structured deal)", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Shock departure on 1 August - the Brazilian winger departs for a record-breaking Saudi deal worth an estimated €500m over the contract term. Madrid receive €150m upfront with performance bonuses. Sources: Fabrizio Romano, Sky Sports."},
  {name:"Nacho Fernández", sub:"35 · CB · Spain", club:"Released - free agent", pos:"CB", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, RELEASED",
   note:"The club captain leaves Madrid after 16 years at the Bernabéu, exiting on expiry of his contract. Nacho departs as one of the club's most decorated defenders."},
];

const INCOMING = [
  {name:"Florian Wirtz", sub:"22 · LW/CAM · Germany", club:"Bayer Leverkusen", pos:"LW/CAM", report:"25 Jul 2026", src:"Bild / Sport Bild", tier:2, fee:"€150m+ asking price", truth:45, prob:22, light:'o', trend:'flat',
   note:"German media (Bild, Sky Sport Germany via Plettenberg) report Madrid have enquired about Wirtz's availability ahead of Leverkusen's Champions League qualification. Bayer are reluctant to sell their generational talent and any deal would require extraordinary compensation. OBSTACLES: Leverkusen's firm resistance, Wirtz's contentment, astronomical fee."},
  {name:"Rodrygo Goes", sub:"23 · RW · Brazil", club:"Manchester City", pos:"RW", report:"02 Aug 2026", src:"Goal.com / CaughtOffside", tier:3, fee:"€100m (speculation)", truth:25, prob:8, light:'r', trend:'down',
   note:"Tabloid speculation only - Goal.com runs a piece suggesting Madrid could offer Rodrygo-plus-cash to City for a theoretical Grealish deal, which has no credible sourcing and contradicts every recent statement from both clubs about their midfield plans. OBSTACLES: pure speculation, no Tier-1 corroboration, both clubs publicly satisfied with their squads."},
];

const OUTGOING = [
  {name:"Éder Militão", sub:"27 · CB · Brazil", club:"Paris Saint-Germain (interest)", pos:"CB", report:"28 Jul 2026", src:"Le Parisien", tier:2, fee:"€90m (PSG valuation)", truth:50, prob:28, light:'o', trend:'flat',
   note:"French media report PSG are monitoring Madrid's defensive depth after Nacho's release, with Militão flagged as an option should Marquinhos depart. Madrid have given no indication of willingness to sell their primary centre-back. SOURCES: Le Parisien (France primary), L'Équipe, Relevo (cross-market corroboration)."},
  {name:"Brahim Díaz", sub:"26 · CAM/RW · Spain", club:"AC Milan (return interest)", pos:"CAM/RW", report:"15 Jul 2026", src:"Gazzetta dello Sport", tier:2, fee:"€45m buy-back clause", truth:55, prob:35, light:'y', trend:'up',
   note:"Milan, who previously loaned Díaz to Madrid, have triggered interest in a permanent return as they rebuild their attacking options. Ancelotti has not confirmed whether Díaz remains in his plans as an alternative wide creator. SOURCES: Gazzetta dello Sport (Italy primary), Tuttomercatoweb, Sky Italia."},
];

const RISERS = [
  {ar:"⬆", t:"<b>Ferran Torres</b>: Official. Signing from Barcelona completed 22 July, now in full integration with squad."},
  {ar:"⬆", t:"<b>Vinícius Júnior departure</b>: Shock Saudi deal materialized on 1 August; massive financial windfall for the club."},
];

const FALLERS = [
  {ar:"⬇", t:"<b>Florian Wirtz</b>: Leverkusen's public stance remains that he is not for sale; fee required would be astronomical."},
  {ar:"⬇", t:"<b>Rodrygo speculation</b>: Goal.com tabloid piece lacks any Tier-1 sourcing; both clubs satisfied with their squads."},
];

const NEW = [
  {ar:"✦", t:"Ferran Torres' arrival from Barcelona is the summer's marquee incoming business so far, reshaping the wing rotation around an established front line."},
  {ar:"✦", t:"Vinícius Júnior's surprise departure to Saudi Arabia on 1 August creates a need for additional attacking depth in the final weeks of the window."},
];

const IGNORE = [
  {ar:"✕", t:"<b>Rodrygo-Manchester City swap</b>: Pure speculation with no Tier-1 sourcing; both clubs publicly deny any appetite for a deal."},
  {ar:"✕", t:"<b>Éder Militão to PSG</b>: Madrid have not indicated any willingness to sell their first-choice centre-back; PSG interest is background monitoring only."},
];

const POSITIONS = [
  {p:"Right wing / attacking width", w:60, x:"Vinícius' departure opens a need for width - Torres' arrival and Wirtz interest address this."},
  {p:"Centre-back", w:35, x:"Nacho's release leaves Madrid needing young depth; no active pursuit yet but monitoring continues."},
];

const WATCHLIST = [
  {name:"Vinícius Júnior", club:"Al-Nassr", pos:"LW", dir:"out", age:"~0 days", tier:1, note:"CONFIRMED DEPARTURE - Saudi deal worth €500m structure completed 1 August. Board decision to accept creates squad reshuffling."},
  {name:"Florian Wirtz", club:"Bayer Leverkusen", pos:"LW/CAM", dir:"in", age:"~8 days", tier:2, note:"Enquiry only; Leverkusen have publicly refused to sell. Any deal would require extraordinary fee (€150m+)."},
];

const HUB = {
  club: {l:"Real-Madrid Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Real Madrid · 2026/27 Season`,
  heroLede: `Transfer window active. Real Madrid preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};