/* ============================================================
   MERCATO IQ · CLUB DATA · BORUSSIA MÖNCHENGLADBACH · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Borussia Mönchengladbach", mono: "BMG", slug: "borussia-mönchengladbach",
  primary: "#00923F", primaryBright: "#1EC85C", primaryDeep: "#00542A",
  primaryRgb: "0,146,63",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Eugen Polanski",
  dof: "Roland Virkus (Sporting Director)",
  europe: "None (2025/26)",
  finish: "13th Bundesliga (2025/26)",
  owner: "Member-owned (Borussia VfL 1900 Mönchengladbach e.V.), Rolf Königs President",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.rp-online.de/sport/fussball/borussia/", "https://bmg-news.de/"],
  queries: ["Borussia Mönchengladbach transfer news 2026", "Gladbach Rocco Reitz RB Leipzig", "Gladbach Neuzugang Sommer 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Borussia Mönchengladbach"
};

const CONFIRMED_IN = [
  {name:"David Herold", sub:"22 · CB · Germany", to:"permanent from Karlsruher SC", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young centre-back signed as squad depth following captain Rocco Reitz's departure to RB Leipzig."},
  {name:"Isac Lidberg", sub:"25 · ST · Sweden", to:"permanent from SV Darmstadt 98", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Swedish forward brought in for attacking depth."},
  {name:"Yukhym Konoplya", sub:"24 · RB · Ukraine", to:"free from Shakhtar Donetsk", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Experienced Ukraine international right-back joins on a free transfer."},
  {name:"Daiki Hashioka", sub:"Japan international full-back", club:"Slavia Prague", pos:"RB", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan from Slavia Prague, announced 30 July 2026."},
  {name:"Zento Uno", sub:"Japan international midfielder", club:"Unattached/JPN club (pre-move)", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed 18 June 2026, described by the club as its new Japan international midfielder."},
  {name:"Enzo Leopold", sub:"Young forward", club:"Hannover 96", pos:"RW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed 27 May 2026."},
  {name:"Yukhym Konoplia", sub:"Ukrainian right-back", club:"Undisclosed", pos:"RB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed 29 May 2026."},
  {name:"Hugo Bolin", sub:"Midfielder", club:"Undisclosed", pos:"CM", fee:"Permanent", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed 18 March 2026, ahead of the summer window."},
  {name:"Daniel Batz", sub:"Goalkeeper", club:"Undisclosed", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed 18 May 2026."}
];

const CONFIRMED_OUT = [
  {name:"Rocco Reitz", sub:"24 · CM · Germany", to:"permanent to RB Leipzig", club:"RB Leipzig", fee:"~€20-21m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club captain and academy graduate departs for a Bundesliga rival in a deal agreed in principle back in March and completed this summer - a significant loss for Polanski's midfield."},
  {name:"Marvin Friedrich", sub:"30 · CB · Germany", to:"free to 1. FC Union Berlin", club:"1. FC Union Berlin", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Centre-back returns to a former club on a free transfer after his Gladbach contract expired."},
  {name:"Jonas Omlin", sub:"32 · GK · Switzerland", to:"free to FC Basel", club:"FC Basel", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Long-serving goalkeeper leaves on a free transfer, returning to Switzerland."},
  {name:"Giovanni Reyna", sub:"USA international attacking midfielder", club:"RC Strasbourg", pos:"CAM", fee:"€3M", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 4 August 2026 ('Fix!' per Sport1 transfer ticker) after a single Bundesliga season at Gladbach."},
  {name:"Shio Fukuda", sub:"Japanese full-back", club:"Karlsruher SC", pos:"LB", fee:"Permanent", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed 12 June 2026."},
  {name:"Yannik Engelhardt", sub:"Midfielder (loan return)", club:"SC Freiburg", pos:"CM", fee:"N/A (loan return)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned to parent club Freiburg permanently on 15 July 2026 after a 2025/26 loan spell at Gladbach."}
];

const INCOMING = [
  {name:"Jan Leszczynski", sub:"unknown · Poland · defender", club:"Legia Warsaw", pos:"D", report:"Transfer imminent from Legia Warsaw", src:"Sky.de", tier:2, fee:"Undisclosed", truth:85, prob:80, light:"g", trend:"flat", note:"Reported as 'vor Transfer' (before transfer)", lastSeen:"2026-08-07T01:42:32Z", baseProb:80},
  {name:"Isac Lidberg", sub:"unknown · Sweden · forward", club:"Darmstadt 98", pos:"F", report:"Signed from Darmstadt 98", src:"Sky.de", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Reported as 'holt' (brings in/signs)", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Enzo Leopold", sub:"unknown · Germany · defender", club:"Hannover 96", pos:"D", report:"Transfer imminent from Hannover 96 captain", src:"Sky.de", tier:2, fee:"Undisclosed", truth:85, prob:80, light:"g", trend:"flat", note:"Reported as 'kurz vor Verpflichtung' (about to sign)", lastSeen:"2026-08-07T01:42:32Z", baseProb:80}
];

const OUTGOING = [
  {name:"Rocco Reitz", sub:"unknown · Germany · midfielder", club:"RB Leipzig", pos:"M", report:"Transferred to RB Leipzig", src:"Sky.de", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Reported as completed transfer 'wechselt...nach Leipzig' (switches to Leipzig)", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Marvin Friedrich", sub:"unknown · Germany · defender", club:"Union Berlin", pos:"D", report:"Transferred to Union Berlin", src:"Sky.de", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Reported as completed transfer 'wechselt...zu Union Berlin' (switches to Union Berlin)", lastSeen:"2026-08-07T01:42:32Z", baseProb:95}
];

const RISERS = [
  {ar:"⬆", t:"<b>Rocco Reitz departure confirmed</b>: the club captain's €20m+ move to RB Leipzig is done, closing a saga that began with talks in March."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Squad rebuild after captain's exit</b>: Polanski must reshape midfield following Reitz's sale, with Herold and Lidberg brought in as lower-cost replacements elsewhere on the pitch."}
];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield", w:45, x:"Reitz's exit leaves a leadership and creative void that has not yet been directly replaced with a like-for-like signing."},
  {p:"Centre-back", w:30, x:"Herold brought in as depth following Friedrich's free departure to Union Berlin."}
];

const WATCHLIST = [];

const HUB = {
  bundesliga: {l:"Bundesliga.com · Official", u:"https://www.bundesliga.com/en/bundesliga"},
  gfn: {l:"Get German Football News", u:"https://www.getfootballnewsgermany.com/"},
  rbl: {l:"RB Leipzig Official", u:"https://rbleipzig.com/en/news/rocco-reitz-transfer-new-signing-summer-gladbach-rb-leipzig"},
  club: {l:"Borussia Mönchengladbach Official", u:"https://www.borussia.de/en"},
  bundesligacomDaikiHashioka: {l:"Bundesliga.com", u:"https://www.bundesliga.com/en/bundesliga/clubs/borussia-moenchengladbach/news"},
  wikipediaclubtransferlogEnzoLeopold: {l:"Wikipedia (club transfer log)", u:"https://en.wikipedia.org/wiki/2026%E2%80%9327_Borussia_M%C3%B6nchengladbach_season"},
  sport1TransfertickerGiovanniReyna: {l:"Sport1 Transferticker", u:"https://www.sport1.de/transfermarkt"},
  skydeJanLeszczynski: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMiygFBVV95cUxNcE1RTkRTYXNFU1FoZlNtSmRYYUdVdEFpWkhuRUdnTUpmcWotbEdjbk9acXRWUGFMT0x2SkpvMHNYeFdDNEIyWmVHMlh3c0oyaVI3ZXhRcS1PYUJFWnVLeGRKdDFya0QwMzF5bnRqT0lCT011OURzRl8tMVFOcFF5NFlUQ21HdE85SzJBeV9NREVZYjEwOGgwZHFfWTNzbEIxZmpJc2k5SDB5eXBOUEZKaTc3dGFlR0dfQUExLWdoa0VJNWMzU2xrWldR?oc=5"},
  skydeIsacLidberg: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMisgFBVV95cUxObGRpVnk2Q2dxR0hMbEx4M3BPcWl5dGctaUlYX2FKSHlBZGRBVldWcFhTTVNNQmlNY2dVZjg1a19KTFYwOU5xcUZnMmYzSXN3VHIxaUxsS19nRnRCNlR3MFJUQ2RiTWlkVHltaXZseHRMTy01WTgtdHRmM0dWTU1vOHFveV9xNkg0TE1wTTR2SzBtTXRwRlBnUHI5Z3hlQ29vUFpCU3NuM3dMclVOc1Q1cUxn?oc=5"},
  skydeEnzoLeopold: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMi0gFBVV95cUxQVHFSTzBTT2dlQVZmekVlcFVPQzFFaWhVaWJKT1ljdzRiUW1FNkhzNDR2dzI2dlZkcWpFc0hNdmxtaDI2aTBrcWpIR2lPdDdoaFJaTkxEZXJKMC1xUjRpLW9NNUU1d1Y1Qnlhb3Zpb2g0ODF3X2lVMjIyMVpYYjd1UHNhSHVKVVhDUE9zQTdFN1JoZmEtZnJwa1ZjYjdyU3V6WlF2OVZYMERwb3hNakI1dTlqaVdMVHNOT1hneGhEUGIycHl4VUJMRWx2c3dzaVJwVVE?oc=5"},
  skydeRoccoReitz: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMitwFBVV95cUxNUHhKVmswWFhjQVdwSnNZc1RPdUV4YzFLNXFlUHdxOFQ1R2xzWnZoSWhlTWZaaGdoMVAwQ2s3SXZNYmZ3MGxpN19CU1VhTFZQMXZQWUZlWllvY0NqSEhUcmdGMDYwTDRBc0phcENxdkdteFNpQzY1UXAzOFAtcHNXV0VqdnFZQTJMdXRfbVNIMFUzaE1abGR5X05KTVdobVVmVWxsSUZERU83VDNwb01nRlhGYVF4SEk?oc=5"},
  skydeMarvinFriedrich: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMiwgFBVV95cUxNMWUyalk5LWFBTGJ2dkt6cy1OME9wRTIzYWZVcjdEcEhYcTdwQ2R1Y21NVzVEbWV3NHJLZjVmblJlSnNRMFdRM2dsc2xtUElaRFBmLUZqdWFva0RabUtmOWdjTDhqempmWnVNNGFOYUlad2NJN0c3d1E1RnNXaC1NdlFvV1pzakRYc3o4YTVZdzNGWTg5UjNDSkFLVExNTzVOeDVNRjNrelh0bVFRQVJWSmRQOFEwTGZiS1hRZmNSczd4Zw?oc=5"}};

const LINKMAP = {
  "Rocco Reitz": ["gfn","rbl", "wikipediaclubtransferlogEnzoLeopold", "skydeRoccoReitz"],
  "Marvin Friedrich": ["bundesliga", "wikipediaclubtransferlogEnzoLeopold", "skydeMarvinFriedrich"],
  "David Herold": ["club", "wikipediaclubtransferlogEnzoLeopold"],
  "Isac Lidberg": ["club", "wikipediaclubtransferlogEnzoLeopold", "skydeIsacLidberg"],
  "Yukhym Konoplya": ["club"],
  "Jonas Omlin": ["club", "wikipediaclubtransferlogEnzoLeopold"],
  "Daiki Hashioka": ["bundesligacomDaikiHashioka"],
  "Zento Uno": ["bundesligacomDaikiHashioka"],
  "Enzo Leopold": ["wikipediaclubtransferlogEnzoLeopold", "skydeEnzoLeopold"],
  "Yukhym Konoplia": ["wikipediaclubtransferlogEnzoLeopold"],
  "Hugo Bolin": ["wikipediaclubtransferlogEnzoLeopold"],
  "Daniel Batz": ["wikipediaclubtransferlogEnzoLeopold"],
  "Giovanni Reyna": ["sport1TransfertickerGiovanniReyna"],
  "Shio Fukuda": ["wikipediaclubtransferlogEnzoLeopold"],
  "Yannik Engelhardt": ["bundesligacomDaikiHashioka"],
  "Jan Leszczynski": ["skydeJanLeszczynski"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Reitz cashes out: Gladbach sell their captain to RB Leipzig and rebuild around a leaner squad`,
  heroLede: `Eugen Polanski's side head into 2026/27 without European football after a 13th-place finish, and the summer's defining story is the departure of academy graduate and captain <b>Rocco Reitz</b> to RB Leipzig for around €20-21m - a deal effectively agreed back in March. The money has been reinvested modestly: centre-back <b>David Herold</b> from Karlsruhe, forward <b>Isac Lidberg</b> from Darmstadt, and free-transfer full-back <b>Yukhym Konoplya</b> from Shakhtar Donetsk. Goalkeeper Jonas Omlin and defender Marvin Friedrich have also left on frees.`,
  metaRow: `<span>DECISION-MAKER: <b>Roland Virkus</b> (Sporting Director)</span> <span>HEAD COACH: <b>Eugen Polanski</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">13<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">3</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Reitz's sale to Leipzig is the headline outgoing business; no further major departures reported.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€7m committed`, x: `Herold and Lidberg fees plus Konoplya on a free.` },
  spendOut: { v: `~€20-21m banked`, x: `Reitz's sale to RB Leipzig is the dominant figure; Friedrich and Omlin left for free.` },
  methodLegend: ``
};
