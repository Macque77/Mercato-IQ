/* ============================================================
   MERCATO IQ · CLUB DATA · AC MONZA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AC Monza",
  mono: "MON",
  slug: "monza",
  primary: "#E4032E",
  primaryBright: "#FF4D6D",
  primaryDeep: "#8C0019",
  primaryRgb: "228,3,46",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Salvatore Bocchetti (contract until 2027, appointed mid-way through the promotion-winning Serie B campaign)",
  dof: "Club sporting management in transition (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "Promoted via the Serie B play-offs (2025/26)",
  owner: "Beckett Lynes Ventures (US investment fund) - ended the Berlusconi/Fininvest era on takeover, with Adriano Galliani also departing",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/monza/"],
  queries: ["Monza transfer news 2026", "Monza Bocchetti signings promoted", "Monza Beckett Lynes ownership"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AC Monza"
};

const CONFIRMED_IN = [
  {name:"Ebeneezer Akinsanmiro", sub:"20 · CM · Nigeria", to:"loan with obligation to buy from Inter", fee:"€7.5m plus 10% of any future sale", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 29 Jul. Midfield reinforcement joining with an obligation to buy attached."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Gustavo Varela", sub:"21 · ST · Portugal", club:"Benfica", pos:"ST", report:"24 Jul 2026", src:"Football Italia", tier:2, fee:"€2m plus up to €1.5m add-ons", truth:62, prob:48, light:"y", trend:"up", note:"Agreement reported reached between the clubs for the young striker, pending official confirmation."},
  {name:"Ricardo Mangas", sub:"23 · RB · Portugal", club:"Sporting CP", pos:"RB", report:"23 Jul 2026", src:"Football Italia", tier:2, fee:"Loan with conditional obligation to buy", truth:55, prob:35, light:"y", trend:"up", note:"Loan move with an obligation to buy that would trigger under certain conditions."},
  {name:"Tyrese Asante", sub:"22 · CB · Ghana", club:"Maccabi Tel Aviv", pos:"CB", report:"23 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:45, prob:22, light:"o", trend:"flat", note:"Targeted as defensive depth; talks reported without a concrete agreement yet."},
  {name:"Caleb Okoli", sub:"25 · CB · Italy", club:"Leicester City", pos:"CB", report:"3 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:42, prob:18, light:"o", trend:"flat", note:"Early-stage interest linked; no bid reported."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Ebeneezer Akinsanmiro official</b>: midfielder joins on a loan-with-obligation deal from Inter."},
  {ar:"⬆", t:"<b>Gustavo Varela agreement reached</b>: young Benfica striker set to complete a move pending official confirmation."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Monza's promotion summer has come with a genuinely historic ownership change - American fund Beckett Lynes Ventures has bought the club, ending the Berlusconi/Fininvest era, with long-time figurehead Adriano Galliani also departing (rumoured to be eyeing a return to Milan)."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-forward", w:40, x:"Varela's reported agreement would add fresh attacking depth for the Serie A step-up."},
  {p:"Full-back / centre-back depth", w:35, x:"Mangas, Asante and Okoli are all being explored as defensive reinforcements at varying stages."}
];

const WATCHLIST = [
  {name:"Gustavo Varela", club:"Benfica", pos:"ST", dir:"in", age:"~10 days", tier:2, note:"Agreement reported reached, pending official confirmation."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Monza", u:"https://football-italia.net/category/teams/monza/"}
};

const LINKMAP = {
  "Ebeneezer Akinsanmiro": ["footballItalia"],
  "Gustavo Varela": ["footballItalia"],
  "Ricardo Mangas": ["footballItalia"],
  "Tyrese Asante": ["footballItalia"],
  "Caleb Okoli": ["footballItalia"]
};
const WL_LINKMAP = {
  "Gustavo Varela": ["footballItalia"]
};

const PROSE = {
  heroH2: `New owners, new era: Monza rebuild under Bocchetti after ending the Berlusconi years`,
  heroLede: `AC Monza return to Serie A via the play-offs under coach <b>Salvatore Bocchetti</b>, but the bigger story this summer is off the pitch: American fund <b>Beckett Lynes Ventures</b> has completed a takeover that ends the club's long Berlusconi/Fininvest ownership era, with figurehead <b>Adriano Galliani</b> also departing (with speculation over a return to Milan). On the pitch, <b>Ebeneezer Akinsanmiro</b> has arrived from Inter on a loan-with-obligation deal, and Benfica striker <b>Gustavo Varela</b> is reported to have an agreement in place pending official confirmation, with further defensive reinforcements (<b>Ricardo Mangas</b>, <b>Tyrese Asante</b>) being explored.`,
  metaRow: `<span>DECISION-MAKER: <b>Beckett Lynes Ventures</b> (Ownership)</span> <span>HEAD COACH: <b>Salvatore Bocchetti</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">Promoted</div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Varela's reported agreement is the most advanced unconfirmed deal.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€7.5m+ committed`, x: `Akinsanmiro (€7.5m + 10% sell-on) is done; Varela (~€2-3.5m) is close.` },
  spendOut: { v: `None reported`, x: `No outgoing business reported as advanced this window.` },
  methodLegend: ``
};
