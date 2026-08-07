/* ============================================================
   MERCATO IQ · CLUB DATA · SC PADERBORN 07 · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "SC Paderborn 07", mono: "SCP", slug: "sc-paderborn",
  primary: "#0055A4", primaryBright: "#3D8FDD", primaryDeep: "#00305E",
  primaryRgb: "0,85,164",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Ralf Kettemann",
  dof: "Sebastian Lange (Sporting Director)",
  europe: "None (promoted club)",
  finish: "3rd 2. Bundesliga (2025/26) - promoted via play-off win over VfL Wolfsburg (2-1 agg.), returning to the Bundesliga for the first time since 2019/20",
  owner: "TBD",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.bundesliga.com/en/bundesliga/clubs/sc-paderborn-07/news"],
  queries: ["SC Paderborn transfer news 2026", "Paderborn Bundesliga promotion squad"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · SC Paderborn 07"
};

const CONFIRMED_IN = [
  {name:"Tom Baack", sub:"27 · CM · Germany", to:"free from 1. FC Nürnberg", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 27 May, Paderborn's third signing following promotion. Sporting director Sebastian Lange: 'Tom will benefit us with his overview, his mentality and his experience.'"},
  {name:"Oliver Batista Meier", sub:"24 · W", to:"permanent from Preußen Münster", fee:"~€400k", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Winger signed for attacking depth ahead of the Bundesliga return."},
  {name:"Jano ter Horst", sub:"25 · CM", to:"permanent from Preußen Münster", fee:"~€300k", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Midfielder signed alongside club-mate Batista Meier from Preußen Münster."},
  {name:"Luka Durić", sub:"22 · ST", to:"permanent from TSG Hoffenheim", fee:"~€250k", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young striker brought in as attacking depth for the promotion campaign."}
];

const CONFIRMED_OUT = [
  {name:"Calvin Brackelmann", sub:"22 · CB", to:"free to FC Augsburg", club:"FC Augsburg", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; centre-back departs for a fellow Bundesliga side."},
  {name:"Filip Bilbija", sub:"23 · W", to:"free to Derby County", club:"Derby County", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; winger moves to the EFL Championship."}
];

const INCOMING = [
  {name:"Deniz Zeitler", sub:"Highly-rated attacking prospect", club:"TSG Hoffenheim", pos:"CAM", report:"Newly promoted Paderborn have opened talks with Hoffenheim over a move for young attacking prospect Zeitler, described as young, versatile and developable, fitting the club's recruitment profile.", src:"Sky Sports Germany / Neue Westfälische", tier:2, fee:"Unknown", truth:55, prob:40, light:"y", trend:"flat", note:"Early-stage talks reported; no fee or medical scheduled yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"Snippet references do not confirm this link; no fresh reporting found on Zeitler talks with Paderborn"},
  {name:"Batista Meier", sub:"Unknown · Unknown · Midfielder", club:"1. FC Nürnberg", pos:"Midfielder", report:"Transfer completed from 1. FC Nürnberg", src:"Westfalen-Blatt", tier:3, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Deal confirmed as perfect", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];

const OUTGOING = [
  {name:"Mats Daehli", sub:"Unknown · Unknown · Unknown", club:"Hannover 96", pos:"Unknown", report:"Hannover 96 player has filed transfer request to join SC Paderborn", src:"Neue Westfälische", tier:3, fee:"Unknown", truth:50, prob:45, light:"y", trend:"flat", note:"Transfer wish filed; speculation about potential move", lastSeen:"2026-08-07T01:42:32Z", baseProb:45}
];

const RISERS = [
  {ar:"⬆", t:"<b>Welcome back to the Bundesliga</b>: Paderborn secured promotion with a dramatic 2-1 aggregate play-off win over VfL Wolfsburg, returning to the top flight for the first time since 2019/20."}
];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield / wide areas", w:35, x:"Baack, ter Horst and Batista Meier form the core of a low-cost squad rebuild for the step up to the Bundesliga."}
];

const WATCHLIST = [];

const HUB = {
  bundesliga: {l:"Bundesliga.com · Official", u:"https://www.bundesliga.com/en/bundesliga/news/welcome-back-paderborn-promotion-play-off-win-37266"},
  sport1: {l:"Sport1", u:"https://www.sport1.de/news/fussball/bundesliga/2026/05/aufsteiger-paderborn-holt-baack-aus-nuernberg"},
  neueWestflischeDenizZeitler: {l:"Neue Westfälische", u:"https://www.nw.de/sport/"},
  skyGermanyZEITOliverBatistaMeier: {l:"Sky Germany / ZEIT", u:"https://www.zeit.de/"},
  tribalFootballYahooSportsFilipBilbija: {l:"Tribal Football / Yahoo Sports", u:"https://www.onefootball.com/"},
  westfalenBlattBatistaMeier: {l:"Westfalen-Blatt", u:"https://news.google.com/rss/articles/CBMioAFBVV95cUxOcjktVE5uUkZxWFk3eEl0UFJxQ21MS1M3YWEydFFsRnpwRk5tV2R3UTcyMUJkbmhZTUxCa2V0RlVzY0dkVDl2bmdKd2Y5TVFBZF9CbUc5WWtyamFYN0lCYUtUd2UxcGpRcDFXVE91YmtROWRBLUx0NGtPM2otQ2pBRXpFVlZTMkpyS0E1cjFEQnBQSEZTcHJCZ1dFZTNha01S"},
  neueWestflischeMatsDaehli: {l:"Neue Westfälische", u:"https://news.google.com/rss/articles/CBMizgFBVV95cUxPWGp2bWpKaXR1d0x2WXdBeUlMaGFpMy1PbUNQeHR6VnJhcGczaE5GS2JFc2dIVWVTLVpyTEhSQkQ2MUhhZi1sMUZtTUVqcGlwc1FiZnF1TTc0dmNYSC05WGVJVjd5b3FTaURId00wbnFObzZteF9PamRZTnZpTDZCb0pOVVlYaW84cFJrLUxDcWh2YnJTQmlET2kxcEYtS0hrWTRkMk01WTIxU2dxMHB3cE5FdFJ2dy15NDZnSWJmZUp1SDhoQnhnUm5iZUxOZw"}};

const LINKMAP = {
  "Tom Baack": ["sport1"],
  "Deniz Zeitler": ["neueWestflischeDenizZeitler"],
  "Oliver Batista Meier": ["skyGermanyZEITOliverBatistaMeier"],
  "Filip Bilbija": ["tribalFootballYahooSportsFilipBilbija"],
  "Batista Meier": ["westfalenBlattBatistaMeier"],
  "Mats Daehli": ["neueWestflischeMatsDaehli"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Back in the big time: Paderborn build a promotion squad on a shoestring after a dramatic play-off win`,
  heroLede: `SC Paderborn return to the Bundesliga for the first time since 2019/20 after edging VfL Wolfsburg 2-1 on aggregate in the promotion play-off, sealed by a 99th-minute winner. Under new head coach <b>Ralf Kettemann</b>, sporting director <b>Sebastian Lange</b> has built a low-cost squad around free-transfer midfielder <b>Tom Baack</b> and a pair of signings from Preußen Münster, with goalkeeper Dennis Seimen - on loan from Stuttgart - a standout of last season's promotion run.`,
  metaRow: `<span>DECISION-MAKER: <b>Sebastian Lange</b> (Sporting Director)</span> <span>HEAD COACH: <b>Ralf Kettemann</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Status</div><div class="v">Promoted</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">4</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Both confirmed departures were free-transfer exits with contracts expiring.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€950k + one free`, x: `Batista Meier (~€400k), ter Horst (~€300k) and Durić (~€250k) confirmed; Baack signed free.` },
  spendOut: { v: `None banked`, x: `Brackelmann and Bilbija both left as free agents.` },
  methodLegend: ``
};
