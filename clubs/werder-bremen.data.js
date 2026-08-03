/* ============================================================
   MERCATO IQ · CLUB DATA · WERDER BREMEN · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026 refresh, verified via live search):
   - Removed a fabricated "Niclas Füllkrug free agent contract
     renewal" entry - Füllkrug left Werder for Dortmund in 2023,
     then West Ham (Aug 2024), and has been on loan at AC Milan
     since Jan 2026. He has no connection to Werder this window.
   ============================================================ */

const BRAND = {
  club: "Werder Bremen",
  mono: "WER",
  slug: "werder-bremen",
  primary: "#033D0B",
  primaryBright: "#033D0B",
  primaryDeep: "#033D0B",
  primaryRgb: "100,100,100",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Ole Werner",
  dof: "Peter Niemeyer (Sporting Director)",
  europe: "None (2025/26 - no European qualification)",
  finish: "15th Bundesliga (2025/26)",
  owner: "Member-owned (SV Werder Bremen von 1899 e.V.)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Werder Bremen transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Werder Bremen"
};

const CONFIRMED_IN = [
  {name:"Alexander Schlager", sub:"29 · GK · Austria", to:"free from RB Salzburg", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Austrian international goalkeeper signed on a free transfer, giving Ole Werner senior competition for the No.1 shirt after Backhaus's departure."},
  {name:"Oskar Wójcik", sub:"20 · CM · Poland", to:"permanent from Cracovia", fee:"~€3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young Polish midfielder signed for squad depth."}
];

const CONFIRMED_OUT = [
  {name:"Mio Backhaus", sub:"20 · GK · Germany", to:"permanent to SC Freiburg", fee:"~€12m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young goalkeeper sold to a fellow Bundesliga side, prompting the Schlager signing."},
  {name:"Leonardo Bittencourt", sub:"32 · AM · Germany", to:"free to Energie Cottbus", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; experienced attacking midfielder drops down to 3. Liga."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [
  {ar:"✕", t:"<b>Niclas Füllkrug 'free agent' contract renewal</b>: incorrect - Füllkrug has been at West Ham United since August 2024 and is currently on loan at AC Milan; he has no live connection to Werder Bremen this window."}
];

const POSITIONS = [
  {p:"Goalkeeper", w:20, x:"Schlager brought in to replace the sold Backhaus."}
];

const WATCHLIST = [];

const HUB = {
  "kicker": {l:"Kicker", u:"https://www.kicker.de/"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Quiet rebuild: Backhaus sold, Schlager signed as Werder look to bounce back from 15th`,
  heroLede: `After a difficult 15th-place finish, Ole Werner's Werder Bremen have sold highly-rated young goalkeeper <b>Mio Backhaus</b> to SC Freiburg for around €12m, immediately replacing him with free-agent Austrian international <b>Alexander Schlager</b> from RB Salzburg. Polish midfielder Oskar Wójcik adds squad depth, while attacking midfielder Leonardo Bittencourt has dropped down to 3. Liga side Energie Cottbus on a free transfer.`,
  metaRow: `<span>DECISION-MAKER: <b>Peter Niemeyer</b> (Sporting Director)</span> <span>HEAD COACH: <b>Ole Werner</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">15<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">2</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  spendIn: { v: `~€3m + one free`, x: `Wójcik (€3m) confirmed; Schlager signed free.` },
  spendOut: { v: `~€12m banked`, x: `Backhaus's sale to Freiburg is the headline fee; Bittencourt left free.` },
  methodLegend: ``
};
