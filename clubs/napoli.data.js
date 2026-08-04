/* ============================================================
   MERCATO IQ · CLUB DATA · NAPOLI · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Napoli",
  mono: "NAP",
  slug: "napoli",
  primary: "#0090D0",
  primaryBright: "#4DC3FF",
  primaryDeep: "#004D73",
  primaryRgb: "0,144,208",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Massimiliano Allegri (since summer 2026, after Antonio Conte's exit; Allegri had previously left AC Milan)",
  dof: "Giovanni Manna (Sporting Director, ex-Juventus)",
  europe: "UEFA Champions League (2026/27)",
  finish: "2nd Serie A (2025/26)",
  owner: "Aurelio De Laurentiis (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/napoli/"],
  queries: ["Napoli transfer news 2026", "Napoli Hojlund Lukaku Vlahovic", "Napoli Allegri Manna signings"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Napoli"
};

const CONFIRMED_IN = [
  {name:"Rasmus Hojlund", sub:"23 · ST · Denmark", to:"permanent from Manchester United", fee:"~€50m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed. Napoli's marquee striker investment of the summer, with Kevin De Bruyne publicly backing the young Dane to prove a bargain."},
  {name:"Costantino Favasuli", sub:"RB", club:"permanent from Catanzaro", pos:"RB", fee:"€8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Schira: personal terms agreed to 2031 plus option, described as 'one step away' from completion."}
];

const CONFIRMED_OUT = [
  {name:"Alessio Zerbin", sub:"25 · W · Italy", club:"Frosinone", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 24 Jul. Winger leaves for regular Serie A football after being at the club since 2017."},
  {name:"Luis Hasa", sub:"20 · MF · Albania", club:"Frosinone", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 24 Jul, part of the same double deal with Frosinone as Zerbin."},
  {name:"Miguel Gutiérrez", sub:"24 · LB · Spain", club:"permanent to Bayer Leverkusen", pos:"LB", fee:"~€25-30m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Di Marzio reports the deal as agreed, positioned as Leverkusen's successor to Alejandro Grimaldo."}
];

const INCOMING = [
  {name:"Juan Jesus", sub:"34 · CB · Brazil", club:"Free agent", pos:"CB", report:"26 Jul 2026", src:"Football Italia", tier:2, fee:"Free", truth:50, prob:28, light:"o", trend:"flat", note:"A free-agent return is being considered after Alessandro Buongiorno's knee surgery ruled him out for three-plus months, leaving a genuine defensive gap."},
  {name:"Benoit Badiashile", sub:"25 · CB · France", club:"Chelsea", pos:"CB", report:"26 Jul 2026", src:"Football Italia", tier:3, fee:"Loan (conditional on Chelsea's approval)", truth:45, prob:20, light:"o", trend:"flat", note:"Back on Napoli's radar as defensive cover, but only if Chelsea sanction a loan exit."},
  {name:"Exequiel Zeballos", sub:"22 · W · Argentina", club:"Boca Juniors", pos:"W", report:"23 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:42, prob:18, light:"o", trend:"flat", note:"Napoli's director has warned Boca they'll only pay under the 'right conditions' - an early-stage interest rather than an advanced deal."}
];

const OUTGOING = [
  {name:"Romelu Lukaku", sub:"33 · ST · Belgium", club:"Multiple (unspecified)", pos:"ST", report:"25 Jul 2026", src:"Football Italia", tier:2, fee:"Undisclosed", truth:55, prob:32, light:"y", trend:"up", note:"Lukaku's agent has stated the striker won't accept a backup role behind Hojlund and wants to leave - a genuine, escalating situation rather than idle speculation."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Rasmus Hojlund official</b>: ~€50m marquee striker investment arrives from Manchester United."},
  {ar:"⬆", t:"<b>Kevin De Bruyne and Andre-Frank Zambo Anguissa confirmed staying</b>: sporting director Manna rules out exits for both key players."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Alessandro Buongiorno faces long lay-off</b>: knee surgery rules the centre-back out for three-plus months, forcing a defensive rethink."},
  {ar:"⬇", t:"<b>Romelu Lukaku situation escalates</b>: agent says the striker won't accept a backup role behind Hojlund."}
];

const NEW = [
  {ar:"✦", t:"Massimiliano Allegri's first Napoli window is headlined by the €50m Hojlund arrival, but Romelu Lukaku's brewing exit demand and Buongiorno's long-term injury are the two genuine complications to watch."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-forward", w:45, x:"Hojlund is in; Lukaku's future is now a genuine open question given his agent's comments."},
  {p:"Centre-back", w:50, x:"Buongiorno's long lay-off makes Juan Jesus and Badiashile realistic, if early-stage, considerations."}
];

const WATCHLIST = [
  {name:"Romelu Lukaku", club:"Multiple", pos:"ST", dir:"out", age:"~9 days", tier:2, note:"Agent says he won't accept a backup role; a genuine departure situation is developing."},
  {name:"Juan Jesus", club:"Free agent", pos:"CB", dir:"in", age:"~8 days", tier:2, note:"Free-agent return under consideration after Buongiorno's long-term injury."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Napoli", u:"https://football-italia.net/category/teams/napoli/"},
  nicoloSchiraviaNapoliMagazineCostantinoFavasuli: {l:"Nicolo Schira (via Napoli Magazine)", u:"https://www.napolimagazine.com/in-evidenza/articolo/mercato-schira-napoli-favasuli-a-un-passo-c-l-accordo-col-terzino-cifre-e-dettagli-03-08-2026"},
  gianlucaDiMarzioMiguelGutirrez: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-notizie-giornata-30-luglio-495350"}};

const LINKMAP = {
  "Rasmus Hojlund": ["footballItalia"],
  "Alessio Zerbin": ["footballItalia"],
  "Luis Hasa": ["footballItalia"],
  "Juan Jesus": ["footballItalia"],
  "Benoit Badiashile": ["footballItalia"],
  "Exequiel Zeballos": ["footballItalia"],
  "Romelu Lukaku": ["footballItalia"],
  "Costantino Favasuli": ["nicoloSchiraviaNapoliMagazineCostantinoFavasuli"],
  "Miguel Gutiérrez": ["gianlucaDiMarzioMiguelGutirrez"]};
const WL_LINKMAP = {
  "Romelu Lukaku": ["footballItalia"],
  "Juan Jesus": ["footballItalia"]
};

const PROSE = {
  heroH2: `Allegri's first window: Hojlund's €50m arrival overshadowed by a brewing Lukaku exit demand`,
  heroLede: `Napoli enter 2026/27 under <b>Massimiliano Allegri</b>, who succeeded Antonio Conte after the club's genuine 2nd-place finish secured Champions League football. The marquee move is <b>Rasmus Hojlund's</b> arrival from Manchester United for around €50m, with <b>Kevin De Bruyne</b> and <b>Andre-Frank Zambo Anguissa</b> both publicly confirmed as staying. The complication is <b>Romelu Lukaku</b>: his agent has said he won't accept a backup role behind Hojlund, setting up a genuine exit situation. Defensively, <b>Alessandro Buongiorno's</b> knee surgery (three-plus months out) has forced the club to consider free agent <b>Juan Jesus</b> and a conditional Chelsea loan for <b>Benoit Badiashile</b>, while <b>Alessio Zerbin</b> and <b>Luis Hasa</b> have both departed for newly-promoted Frosinone.`,
  metaRow: `<span>DECISION-MAKER: <b>Giovanni Manna</b> (Sporting Director)</span> <span>HEAD COACH: <b>Massimiliano Allegri</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">2<small>nd</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Lukaku's situation is genuinely escalating rather than settled speculation.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€50m committed`, x: `Hojlund (~€50m) is the confirmed major signing; further defensive additions remain at an early stage.` },
  spendOut: { v: `Limited so far`, x: `Zerbin and Hasa departures to Frosinone are confirmed; Lukaku's potential exit would be the significant one.` },
  methodLegend: ``
};
