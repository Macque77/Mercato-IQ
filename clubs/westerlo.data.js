/* ============================================================
   MERCATO IQ · CLUB DATA · KVC WESTERLO · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026): this slug previously contained
   mismatched data for a different club (a data-generation bug
   from an earlier automated pass). Corrected to the real club
   this slug represents.
   ============================================================ */

const BRAND = {
  club: "KVC Westerlo", mono: "WES", slug: "westerlo",
  primary: "#FFCC00", primaryBright: "#FFE066", primaryDeep: "#8F7200",
  primaryRgb: "255,204,0",
  breadcrumb: ["Belgium","Pro League"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["KVC Westerlo transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:30:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Fabio Ferraro", sub:"23 · LB", club:"FCV Dender EH", pos:"LB", fee:"€700k + bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signs a three-year deal, returning to Belgian top flight via Charleroi's former RWDM/Dender pathway."},
  {name:"Norman Bassette", sub:"ST", club:"Coventry City", pos:"ST", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joins on loan from Coventry, having previously been on Belgium's international radar."}
];
const CONFIRMED_OUT = [
  {name:"Bryan Reynolds", sub:"25 · RB · USA", club:"Stade Rennais", pos:"RB", fee:"~€4.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"American international leaves for Ligue 1 after 146 appearances, having previously rejected an initial Rangers bid."},
  {name:"Emin Bayram", sub:"CB · Turkey", club:"Istanbul Başakşehir", pos:"CB", fee:"~€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Turkish defender completes a three-year move after 94 appearances for Westerlo."}
];
const INCOMING = [
  {name:"Issiaka Kamate", sub:"MF", club:"Inter Milan", pos:"MF", report:"3 Jun 2026", src:"Nico Schira", tier:1, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"Nico Schira reported Westerlo closing in on an agreement with Inter for the player; no public update since early June.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"No recent credible reporting; presumed outdated entry or completed transfer details insufficient to verify as current live link"},
  {name:"Cisse Sandra", sub:"Unknown · Unknown · Midfielder", club:"Club Brugge", pos:"Midfielder", report:"Transfer from Club Brugge completed; fee reported as €18 million", src:"VoetbalPrimeur.be / VoetbalFocus / Lokaalnieuws.online", tier:3, fee:"€18m", truth:100, prob:100, light:"g", trend:"flat", note:"Official confirmation of transfer; multiple sources cite €18m fee", lastSeen:"2026-08-07T14:38:27Z", baseProb:100}
];
const OUTGOING = [
  {name:"Jarne Rommens", sub:"Unknown · Unknown · Unknown", club:"Rangers", pos:"Unknown", report:"On way to Rangers; among the most expensive outgoing transfers", src:"VoetbalPrimeur.be", tier:3, fee:"Unknown", truth:85, prob:80, light:"g", trend:"down", note:"Transfer in advanced stages to Rangers", lastSeen:"2026-08-07T14:38:27Z", baseProb:80}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"KVC Westerlo Official", u:"#"},
  the72viaWalesOnlineCameronCongreve: {l:"The72 (via WalesOnline)", u:"https://the72.co.uk/2026/08/02/swansea-city-cameron-congreve-westerlo-exit/"},
  voetbalkrantviaNicoSchiraIssiakaKamate: {l:"Voetbalkrant (via Nico Schira)", u:"https://www.voetbalkrant.com/nieuws/2026-06-03/westerlo-heel-dicht-bij-overeenkomst-met-speler-van-inter-milan"},
  voetbalkrantviaSachaTavolieriFabioFerraro: {l:"Voetbalkrant (via Sacha Tavolieri)", u:"https://www.voetbalkrant.com/nieuws/2026-07-20/westerlo-slaat-opnieuw-toe-op-transfermarkt-akkoord-met-dender-is-rond"},
  sporzaNormanBassette: {l:"Sporza", u:"https://sporza.be/nl/2026/07/17/zomertransfers-jpl-westerlo-strikt-nieuwe-spits-met-norman-bassette-die-door-tedesco-al-rode-duivel-was~1784279414332/"},
  voetbalkrantviaSachaTavolieriBryanReynolds: {l:"Voetbalkrant (via Sacha Tavolieri)", u:"https://www.voetbalkrant.com/nieuws/2026-07-09/westerlo-blijft-cashen-tweede-uitgaande-toptransfer-op-een-dag"},
  voetbalkrantEminBayram: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/nieuws/2026-07-08/westerlo-verkoopt-opnieuw-sterkhouder-voor-miljoenenbedrag"},
  voetbalFocusCisseSandra: {l:"VoetbalFocus", u:"https://news.google.com/rss/articles/CBMihAFBVV95cUxPYkIyaU1zV0prZVg5cW1meXZKbHZZaUtqbmtEUlIzMTJJd3piTmNFWkpwTFJ1VWZzZ3QxakkyaUdSdlJHNThsamFONnpiZVpNTTNyUXdyWjYyMmFKU1RjaEZhWkJVdHBPQ2Z0VURsb2ZVRVQzdkV1T1lxOXFXNEN3aEEtVEo"},
  voetbalPrimeurbeJarneRommens: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMimgFBVV95cUxNLWhFUXlaTkNoQjE0NXc5aTFxS2xSOGpHcEZzbGpnak1FS0dDbHd4RnNWcEx0X0NTVVBydno1T3VDZGFOVU8zSmJwRTdhMWJ3S2tyOUlxbnFZbVlWNXFudG9NWUtreXcwYmsxOEp0MEdVVlJOcWNqTXk2enMzMWQxTVlyZGs5RzZwdVVGbjZqN2dpV0dscFdydmpR"},
  voetbalPrimeurbeFerri: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMirwFBVV95cUxOTndPYkhNbjlCWWRPTm9BNm8zLVZ1c0tlLXd2RGlBUWRtQklIUzEwSjF5cDhhNXhIeXVCT0ptWEpxZHlRWUdTMEg2Q3V6MjkwUEd3NjdOamVTa2tjQlVyYlB0UmZkLVZoNWQ4S1B1SWZYNERlajB6SjRRTzliMjlqTU5fOWtxci14cW1XbzBWM1BHd21VWTVfOTV3dGRwamhiRFF4Z1pYTE9tRTVqbTE4"},
  voetbalPrimeurbeJarneRommens1: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMimgFBVV95cUxNLWhFUXlaTkNoQjE0NXc5aTFxS2xSOGpHcEZzbGpnak1FS0dDbHd4RnNWcEx0X0NTVVBydno1T3VDZGFUNU8zSmJwRTdhMWJ3S2tyOUlxbnFZbVlWNXFudG9NWUtreXcwYmsxOEp0MEdVVlJOcWNqTXk2enMzMWQxTVlyZGs5RzZwdVVGbjZqN2dpV0dscFdydmpR"},
  voetbalFocusCameronCongreve: {l:"VoetbalFocus", u:"https://news.google.com/rss/articles/CBMieEFVX3lxTFBvbXM2M2t4Ukc2ajR6TWdnRXRxdW5za3Npa05rRy1oajVEdGVVQnRHTW1OM0FPYVg0Y3g2dzk1VTBRRlFMdU0wY2pRWnJyXzdldjdWTnNpSlVzZzlOb3g3S3FkZmlVTVRucGZWU3U2eXVBRXkxTGRwSg"},
  voetbalPrimeurbeCisseSandra: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiwwFBVV95cUxOcHJBLVkyZk9uRW5NRmZuVlkzZnA1Q3VnUGVVaV9RYVJvQk5hOWRHUE8yeE1ReW82ZXVRX1JBSTRTVVZ4NjFfZ2xjLWFROUVVT3dKZDNhOGxvSEFwYi1kaXdUU0FuODdncV9GN1JXT3ZYRFVTYUNvdVRteWw3MTRfMng4dW43R0ZENktkdThuYzNSRWNVV2lLVkRfcEJnbktkcWtYTUxYek5ZOGN1Q2U3Sk1Mbkt4WEpOcFZrMkxHeXNHT2M"}};

const LINKMAP = {
  "Cameron Congreve": ["the72viaWalesOnlineCameronCongreve", "voetbalFocusCameronCongreve"],
  "Issiaka Kamate": ["voetbalkrantviaNicoSchiraIssiakaKamate"],
  "Fabio Ferraro": ["voetbalkrantviaSachaTavolieriFabioFerraro"],
  "Norman Bassette": ["sporzaNormanBassette"],
  "Bryan Reynolds": ["voetbalkrantviaSachaTavolieriBryanReynolds"],
  "Emin Bayram": ["voetbalkrantEminBayram"],
  "Cisse Sandra": ["voetbalFocusCisseSandra", "voetbalPrimeurbeCisseSandra"],
  "Jarne Rommens": ["voetbalPrimeurbeJarneRommens", "voetbalPrimeurbeJarneRommens1"],
  "Ferri": ["voetbalPrimeurbeFerri"],
  "Congreve": ["voetbalFocusCameronCongreve"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `KVC Westerlo · 2026/27 Season`,
  heroLede: `Transfer window active. KVC Westerlo preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
