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
  {name:"Ebeneezer Akinsanmiro", sub:"20 · CM · Nigeria", to:"loan with obligation to buy from Inter", fee:"€7.5m plus 10% of any future sale", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 29 Jul. Midfield reinforcement joining with an obligation to buy attached."},
  {name:"Ebenezer Akinsanmiro", sub:"Midfielder, Nigerian, 21", club:"Inter", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official on 1 August 2026; new manager Ivan Juric was reported as decisive in convincing him to join."},
  {name:"Gustavo Varela", sub:"Attacker, Portuguese", club:"Benfica", pos:"RW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Deal finalised and officially announced on 27 July 2026."},
  {name:"Ricardo Mangas", sub:"Right-back, Portuguese", club:"Sporting CP", pos:"RB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as a surprise addition around 24 July 2026 after medical tests."}
];

const CONFIRMED_OUT = [
  {name:"Luca Ravanelli", sub:"Centre-back, Italian", club:"Sampdoria", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed Serie B move on 24 July 2026."},
  {name:"Reita", sub:"Forward", club:"Catanzaro", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent departure confirmed in late July 2026."},
  {name:"Keita Balde", sub:"Forward, Senegalese", club:"Free agent", pos:"LW", fee:"n/a", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Cut from the squad; club stated he is \"not part of our technical project\"."}
];

const INCOMING = [
  {name:"Tyrese Asante", sub:"22 · CB · Ghana", club:"Maccabi Tel Aviv", pos:"CB", report:"23 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:45, prob:22, light:"o", trend:"flat", note:"Targeted as defensive depth; talks reported without a concrete agreement yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Caleb Okoli", sub:"25 · CB · Italy", club:"Leicester City", pos:"CB", report:"3 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:42, prob:18, light:"o", trend:"flat", note:"Early-stage interest linked; no bid reported.", lastSeen:"2026-08-04T19:10:50Z", baseProb:18},
  {name:"Marco Massolin", sub:"Midfielder", club:"Inter", pos:"CM", report:"Monza are reported close to a second deal with Inter, bringing Massolin in alongside Akinsanmiro.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:50, prob:40, light:"y", trend:"flat", note:"Piggybacking on the good relations established via the Akinsanmiro transfer.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Emil Audero", sub:"Goalkeeper, Italian", club:"Undisclosed (free agent/loan market)", pos:"GK", report:"Monza are said to be pushing hard to close a deal for the experienced goalkeeper.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:45, prob:35, light:"y", trend:"flat", note:"Described as an advancing negotiation (\"stringe per Audero\").", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Cuello", sub:"Forward", club:"Multiple suitors", pos:"RW", report:"Monza have concrete contacts for Cuello, who is also being chased by other Serie A/B clubs.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:40, prob:30, light:"y", trend:"flat", note:"Competition from other clubs makes the outcome uncertain.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Pawel Dawidowicz", sub:"Centre-back, Polish", club:"Verona", pos:"CB", report:"Dawidowicz has been proposed to Monza as well as four other Serie B clubs.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:35, prob:20, light:"o", trend:"flat", note:"Wide circulation of the player to multiple clubs suggests early-stage speculation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Daniele Rugani", sub:"Centre-back, Italian", club:"Juventus", pos:"CB", report:"Rugani is mentioned as a possible defensive target, with Bologna also credited with interest.", src:"TuttoMercatoWeb", tier:3, fee:"Undisclosed", truth:35, prob:20, light:"o", trend:"flat", note:"Named alongside Bologna as a rival suitor.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
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
  footballItalia: {l:"Football Italia · Monza", u:"https://football-italia.net/category/teams/monza/"},
  tuttoMercatoWebMarcoMassolin: {l:"TuttoMercatoWeb", u:"https://www.tuttomercatoweb.com/monza"},
  mBNewsLucaViscardiEbenezerAkinsanmiro: {l:"MB News (Luca Viscardi)", u:"https://www.mbnews.it/"}};

const LINKMAP = {
  "Ebeneezer Akinsanmiro": ["footballItalia"],
  "Gustavo Varela": ["footballItalia", "tuttoMercatoWebMarcoMassolin"],
  "Ricardo Mangas": ["footballItalia", "tuttoMercatoWebMarcoMassolin"],
  "Tyrese Asante": ["footballItalia"],
  "Caleb Okoli": ["footballItalia"],
  "Marco Massolin": ["tuttoMercatoWebMarcoMassolin"],
  "Emil Audero": ["tuttoMercatoWebMarcoMassolin"],
  "Cuello": ["tuttoMercatoWebMarcoMassolin"],
  "Pawel Dawidowicz": ["tuttoMercatoWebMarcoMassolin"],
  "Daniele Rugani": ["tuttoMercatoWebMarcoMassolin"],
  "Ebenezer Akinsanmiro": ["mBNewsLucaViscardiEbenezerAkinsanmiro"],
  "Luca Ravanelli": ["tuttoMercatoWebMarcoMassolin"],
  "Reita": ["tuttoMercatoWebMarcoMassolin"],
  "Keita Balde": ["tuttoMercatoWebMarcoMassolin"]};
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
