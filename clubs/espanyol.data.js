/* ============================================================
   MERCATO IQ · CLUB DATA · RCD ESPANYOL · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RCD Espanyol", mono: "ESP", slug: "espanyol",
  primary: "#003DA5", primaryBright: "#5C93FF", primaryDeep: "#001F52",
  primaryRgb: "0,61,165",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Manolo González",
  dof: "Francisco Rufete (Sporting Director)",
  europe: "None for 2026/27",
  finish: "11th La Liga (2025/26), 46pts",
  owner: "Rastar Group (Chen Yansheng, President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.futbolfantasy.com/laliga/equipos/espanyol/mercado-fichajes/verano-2026"],
  queries: ["RCD Espanyol fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · RCD Espanyol"
};

const CONFIRMED_IN = [
  {name:"Álex Calatrava", sub:"26 · AM/W · Spain", to:"permanent from CD Castellón", fee:"~€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 July 2026 as Espanyol's first signing of the summer. The deal was structured to close before 1 July, taking advantage of his release clause dropping from €10m to €5m after that date."},
  {name:"Quilindschy Hartman", sub:"Left-back reinforcement", club:"Burnley", pos:"DF", fee:"Loan with purchase option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Premier League-experienced left-back arrives to replace Carlos Romero, though he's still working back from injury."},
  {name:"Gabriel Moscardó", sub:"Midfield pivot on loan", club:"Paris Saint-Germain", pos:"MF", fee:"Loan (via Braga) until 2027", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Brazilian pivot arrives on loan to add physicality and depth in central midfield at low cost."}
];

const CONFIRMED_OUT = [
  {name:"José Salinas", sub:"~26 · LB · Spain", club:"Málaga (loan)", pos:"LB", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 27 July 2026 - the left-back, who came through Elche's academy and made his La Liga debut at Espanyol last season, joins Málaga's promotion push on loan."},
  {name:"Carlos Romero", sub:"Loan spell ended", club:"Villarreal", pos:"DF", fee:"Loan return", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left-back's breakout loan spell earned him a new deal to 2031 back at Villarreal, ending his Espanyol stint."},
  {name:"Cyril Ngonge", sub:"Loan spell ended", club:"Napoli", pos:"FW", fee:"Loan return", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Belgian forward's loan expired and he has returned to parent club Napoli ahead of the new season."},
  {name:"Fernando Calero", sub:"Free transfer", club:"Málaga", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Centre-back leaves on a free to become Málaga's first signing of their return to the top flight."},
  {name:"José Gragera", sub:"Loan exit", club:"Burgos", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Midfielder squeezed out of the preseason plans is loaned to Burgos for regular game time."},
  {name:"Justin Smith", sub:"Squad departure", club:"Eldense", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Fringe midfielder moves on permanently to Eldense to find regular football."},
  {name:"Omar Sadik", sub:"Loan exit", club:"Ceuta", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young forward heads out on loan to get minutes in the second tier."}
];

const INCOMING = [
  {name:"Igor Julio", sub:"Priority centre-back target", club:"Brighton & Hove Albion", pos:"DF", report:"Monchi's Espanyol are negotiating for Brazilian centre-back Igor Julio, but Brighton have rejected the proposed loan-with-obligation structure as insufficient.", src:"Matteo Moretto", tier:1, fee:"Loan with buy option proposed; Brighton want more guaranteed money upfront", truth:85, prob:40, light:"y", trend:"flat", note:"Sky Sports' Christopher Reidy says English sources consider Espanyol's current offer unrealistic, meaning a deal likely requires a restructured proposal to progress."},
  {name:"Oğuz Aydın", sub:"Turkish international winger", club:"Fenerbahçe", pos:"FW", report:"Moretto lists Espanyol among several European clubs (alongside Feyenoord, Hamburg and Rangers) tracking Fenerbahçe winger Oğuz Aydın after his World Cup form.", src:"Matteo Moretto", tier:1, fee:"Undisclosed", truth:80, prob:15, light:"o", trend:"flat", note:"Aydın is under contract to 2028 and Turkish clubs are reluctant to sell key domestic-slot players cheaply, so this looks like an early, competitive scouting situation rather than an advanced deal."},
  {name:"Bryan Zaragoza", sub:"Loan move eyed for the wing", club:"Bayern Munich", pos:"FW", report:"Monchi is said to be pushing for a loan deal for Bayern winger Bryan Zaragoza to bolster the attacking flanks.", src:"Fichajes.net", tier:3, fee:"Loan proposed; wage-sharing (~€4m salary) the main obstacle", truth:55, prob:20, light:"o", trend:"flat", note:"Zaragoza reportedly has multiple European suitors and Bayern would need to subsidise his salary for a loan to work, making this a longer-shot target."}
];

const OUTGOING = [
  {name:"Miguel Rubio", sub:"Loan exit nearing completion", club:"Real Valladolid", pos:"DF", report:"Real Valladolid are finalising a loan deal to bring back defender Miguel Rubio, seeing off competition from Real Oviedo.", src:"Radio MARCA Valladolid", tier:2, fee:"Loan", truth:78, prob:65, light:"g", trend:"flat", note:"Rubio has fallen down the pecking order at Espanyol and a return to Zorrilla appears close to being finalised ahead of several other Segunda suitors."},
  {name:"Pablo Ramón", sub:"Departure being finalised", club:"Racing de Santander", pos:"DF", report:"Racing Santander are in talks to sign defender Pablo Ramón, with the exit described as increasingly likely by local outlets.", src:"La Grada", tier:3, fee:"Undisclosed", truth:60, prob:55, light:"g", trend:"flat", note:"Part of Espanyol's wider squad trim, with Ramón squeezed out after his loan spells failed to secure a regular first-team role."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Álex Calatrava</b>: first summer signing lands from Castellón before his release clause increased."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Espanyol's summer so far balances one attacking-midfield addition (Calatrava) with a loan exit for young left-back José Salinas to newly-promoted Málaga."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "lagrada-calatrava": {l:"La Grada - Álex Calatrava is Espanyol's first signing of 2026-27", u:"https://lagrada.org/oficial-alex-calatrava-es-el-primer-fichaje-del-espanyol-2026-27/"},
  "jornadaperfecta-salinas": {l:"Jornada Perfecta - José Salinas joins Málaga on loan", u:"https://www.jornadaperfecta.com/blog/jose-salinas-malaga-anuncio-fichaje-26/"},
  matteoMorettoviaLaGradaIgorJulio: {l:"Matteo Moretto (via La Grada)", u:"https://lagrada.org/espanyol-negocia-igor-julio-brighton-fichaje-central/"},
  matteoMorettoviaLaGradaOuzAydn: {l:"Matteo Moretto (via La Grada)", u:"https://lagrada.org/oguz-aydin-espanyol-fenerbahce-interes-matteo-moretto/"},
  fichajesnetBryanZaragoza: {l:"Fichajes.net", u:"https://www.fichajes.net/noticias/bryan-zaragoza-suma-nuevo-pretendiente-laliga-20260725.html"},
  radioMARCAviaPericosesMiguelRubio: {l:"Radio MARCA (via Pericos.es)", u:"https://pericos.es/2026/07/29/miguel-rubio-ultima-su-salida-del-espanyol-el-real-valladolid-apura-su-fichaje/"},
  laGradaPabloRamn: {l:"La Grada", u:"https://lagrada.org/operacion-salida-espanyol-pablo-ramon-racing-miguel-rubio-mercado-fichajes/"},
  laGradalexCalatrava: {l:"La Grada", u:"https://lagrada.org/espanyol-mercado-fichajes-agosto-2026-monchi-altas-cedidos-necesidades/"},
  infobaeCarlosRomero: {l:"Infobae", u:"https://www.infobae.com/espana/agencias/2026/05/29/carlos-romero-vuelve-al-villarreal-tras-su-cesion-al-espanyol-y-amplia-contrato-hasta-2031/"},
  laGradaCyrilNgonge: {l:"La Grada", u:"https://lagrada.org/espanyol-cedidos-regresan-clubes-romero-terrats-pickel-ngonge/"},
  fichajesnetFernandoCalero: {l:"Fichajes.net", u:"https://www.fichajes.net/noticias/malaga-oficializa-primer-fichaje-regreso-primera-20260714.html"},
  laGradaJosSalinas: {l:"La Grada", u:"https://lagrada.org/jose-salinas-cedido-malaga-espanyol/"},
  laGradaJosGragera: {l:"La Grada", u:"https://lagrada.org/balance-mercado-espanyol-fichajes-salidas-piezas-pendientes-2026/"},
  futbolFantasyJustinSmith: {l:"FutbolFantasy", u:"https://www.futbolfantasy.com/laliga/equipos/espanyol/mercado-fichajes/verano-2026"}};

const LINKMAP = {
  "Álex Calatrava": ["lagrada-calatrava", "laGradalexCalatrava"],
  "José Salinas": ["jornadaperfecta-salinas", "laGradaJosSalinas"],
  "Igor Julio": ["matteoMorettoviaLaGradaIgorJulio"],
  "Oğuz Aydın": ["matteoMorettoviaLaGradaOuzAydn"],
  "Bryan Zaragoza": ["fichajesnetBryanZaragoza"],
  "Miguel Rubio": ["radioMARCAviaPericosesMiguelRubio"],
  "Pablo Ramón": ["laGradaPabloRamn"],
  "Quilindschy Hartman": ["laGradalexCalatrava"],
  "Gabriel Moscardó": ["laGradalexCalatrava"],
  "Carlos Romero": ["infobaeCarlosRomero"],
  "Cyril Ngonge": ["laGradaCyrilNgonge"],
  "Fernando Calero": ["fichajesnetFernandoCalero"],
  "José Gragera": ["laGradaJosGragera"],
  "Justin Smith": ["futbolFantasyJustinSmith"],
  "Omar Sadik": ["futbolFantasyJustinSmith"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A clean, early first signing sets the tone`,
  heroLede: `Under <b>Manolo González</b>, Espanyol moved quickly to beat a release-clause deadline and land <b>Álex Calatrava</b> from Castellón as their first summer signing, while young left-back <b>José Salinas</b> heads out on loan to newly-promoted Málaga for regular football.`,
  metaRow: `<span>COACH: <b>Manolo González</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€5m`, x: `Calatrava fee` },
  spendOut: { v: `Loan (no fee)`, x: `Salinas out on loan to Málaga` },
  methodLegend: ``
};
