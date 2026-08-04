/* ============================================================
   MERCATO IQ · CLUB DATA · FC AUGSBURG · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Augsburg", mono: "FCA", slug: "1-fc-augsburg",
  primary: "#BA3733", primaryBright: "#FF6259", primaryDeep: "#6E1F1C",
  primaryRgb: "186,55,51",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Jess Thorup",
  dof: "TBD (Director)",
  europe: "None (2025/26 9th - no European qualification)",
  finish: "9th Bundesliga (2025/26)",
  owner: "Member-owned (FC Augsburg 1907 e.V.)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.fcaugsburg.de/en/"],
  queries: ["FC Augsburg transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · FC Augsburg"
};

const CONFIRMED_IN = [
  {name:"Hennes Behrens", sub:"20 · CB · Germany", to:"permanent from TSG Hoffenheim", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young centre-back signed as a squad-depth addition."},
  {name:"Sima Suso", sub:"22 · W", to:"permanent from Fortuna Düsseldorf", fee:"~€1.7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Winger signed to bolster attacking options."},
  {name:"Fabian Rieder", sub:"Swiss international midfielder completes move", club:"Stade Rennais", pos:"CAM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"23-year-old Switzerland international signed after Augsburg won out in a late transfer battle; previously on loan at Stuttgart."},
  {name:"Michael Gregoritsch", sub:"Austria international rejoins on permanent deal", club:"Brøndby IF", pos:"ST", fee:"€500,000", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Augsburg exercised a permanent option on the Austrian forward, who previously played for the club until 2022 before Freiburg and a loan at Brøndby."},
  {name:"Tom Wisbereit", sub:"Germany youth international goalkeeper joins", club:"Unattached/Youth", pos:"GK", fee:"Undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Germany youth international goalkeeper confirmed by the club's official transfer list, dated 14.07.2026."},
  {name:"Calvin Brackelmann", sub:"Centre-back signed from Arminia Bielefeld", club:"Arminia Bielefeld", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed on Augsburg's official transfer list, dated 29.05.2026."},
  {name:"Rodrigo Ribeiro", sub:"Loan-to-permanent option exercised", club:"Sporting CP", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Portuguese forward's loan spell converted into a permanent transfer, confirmed 27.05.2026."}
];

const CONFIRMED_OUT = [
  {name:"Cedric Zesiger", sub:"27 · CB · Switzerland", to:"permanent to BSC Young Boys", club:"BSC Young Boys", fee:"~€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Swiss centre-back returns to his homeland, Augsburg's largest confirmed sale of the summer."},
  {name:"Elvis Rexhbecaj", sub:"28 · CM", to:"free to VfL Wolfsburg", club:"VfL Wolfsburg", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; midfielder departs on a free transfer."},
  {name:"Cédric Zesiger", sub:"Returns to Switzerland", club:"BSC Young Boys", pos:"CB", fee:"Undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Swiss centre-back left to return to Bern, confirmed 03.07.2026."},
  {name:"Henri Koudossou", sub:"Permanent move completed", club:"Arminia Bielefeld", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed departure to Arminia Bielefeld, dated 25.06.2026."},
  {name:"Maximilian Bauer", sub:"Joins Arminia Bielefeld permanently", club:"Arminia Bielefeld", pos:"CB", fee:"Undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 25.05.2026 on the club's official departures list."},
  {name:"Elias Saad", sub:"Loaned to MLS side", club:"Nashville SC", pos:"LW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed loan move dated 16.07.2026."},
  {name:"Kyliane Dong", sub:"Loaned to Championship side", club:"Bolton Wanderers", pos:"CM", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed loan move dated 07.07.2026."},
  {name:"Felix Meiser", sub:"Joins fellow German second-tier side", club:"Fortuna Düsseldorf", pos:"CB", fee:"Undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed departure dated 10.07.2026."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Mert Kömür", sub:"Hull City 'making progress'; Galatasaray also circling", club:"Hull City", pos:"RW", report:"Hull City have reportedly made progress in talks over the winger, with head coach Manuel Baum also fielding questions on his future amid Galatasaray interest.", src:"BBC Sport", tier:2, fee:"Undisclosed", truth:65, prob:35, light:"y", trend:"flat", note:"Described as 'positive talks' by Hull's camp; Galatasaray interest adds competition.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-back", w:25, x:"Zesiger's sale is offset by Behrens's arrival, though a further like-for-like addition would round out the position."}
];

const WATCHLIST = [];

const HUB = {
  club: {l:"FC Augsburg Official", u:"https://www.fcaugsburg.de/en/"},
  bBCSportMertKmr: {l:"BBC Sport", u:"https://www.bbc.com/sport/football/articles/c4gx0z9z6vpo"},
  yahooSportsFabianRieder: {l:"Yahoo Sports", u:"https://sports.yahoo.com/article/official-rennes-fabian-rieder-signs-162400632.html"},
  yahooSportsMichaelGregoritsch: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/official-augsburg-confirm-permanent-signing-113000240.html"},
  fCAugsburgOfficialTomWisbereit: {l:"FC Augsburg Official", u:"https://www.fcaugsburg.de/en/news"}};

const LINKMAP = {
  "Mert Kömür": ["bBCSportMertKmr"],
  "Fabian Rieder": ["yahooSportsFabianRieder"],
  "Michael Gregoritsch": ["yahooSportsMichaelGregoritsch"],
  "Tom Wisbereit": ["fCAugsburgOfficialTomWisbereit"],
  "Calvin Brackelmann": ["fCAugsburgOfficialTomWisbereit"],
  "Rodrigo Ribeiro": ["fCAugsburgOfficialTomWisbereit"],
  "Cédric Zesiger": ["fCAugsburgOfficialTomWisbereit"],
  "Henri Koudossou": ["fCAugsburgOfficialTomWisbereit"],
  "Maximilian Bauer": ["fCAugsburgOfficialTomWisbereit"],
  "Elias Saad": ["fCAugsburgOfficialTomWisbereit"],
  "Kyliane Dong": ["fCAugsburgOfficialTomWisbereit"],
  "Felix Meiser": ["fCAugsburgOfficialTomWisbereit"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Augsburg reload quietly after a solid 9th-place finish`,
  heroLede: `Jess Thorup's Augsburg have had a low-key summer without European football to plan for: centre-back <b>Hennes Behrens</b> arrives from Hoffenheim as long-term cover following <b>Cedric Zesiger</b>'s sale to Young Boys, and winger Sima Suso adds attacking depth from Fortuna Düsseldorf. No major incoming or outgoing sagas have developed at this stage of the window.`,
  metaRow: `<span>HEAD COACH: <b>Jess Thorup</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">9<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">2</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No rumoured departures beyond the confirmed business reported at this stage.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€5.2m committed`, x: `Behrens (€3.5m) and Suso (€1.7m) confirmed.` },
  spendOut: { v: `~€5m banked`, x: `Zesiger's sale to Young Boys is the headline fee; Rexhbecaj left free.` },
  methodLegend: ``
};
