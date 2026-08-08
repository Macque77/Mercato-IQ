/* ============================================================
   MERCATO IQ · CLUB DATA · OH LEUVEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "OH Leuven", mono: "OL", slug: "oh-leuven",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
  breadcrumb: ["Belgium","Pro League"]
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
  queries: ["oh-leuven transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Jamie Lawrence", sub:"23 · CB · Germany", club:"WSG Tirol", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"2.01m Bayern-academy defender signs until 2029 after two seasons in the Austrian Bundesliga."},
  {name:"Van Den Heuvel", sub:"Unknown · Unknown · Unknown", club:"Celtic", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Transfer from Celtic confirmed; described as having significant potential and right mentality"},
  {name:"Juma Van Den Heuvel", sub:"Unknown · Unknown · Unknown", club:"Celtic", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Transfer from Celtic confirmed; described as having much potential and right mentality"}
];
const CONFIRMED_OUT = [
  {name:"Unknown Player", sub:"Unknown · Unknown · Unknown", club:"OH Leuven", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"JPL champion departing to Eredivisie - official transfer"},
  {name:"Sory Kaba", sub:"Unknown · Unknown · Unknown", club:"OH Leuven", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure from OH Leuven; JPL champion departing to Eredivisie"}
];
const INCOMING = [
  {name:"Van Den Heuvel", sub:"Unknown · Unknown · Defender", club:"Celtic", pos:"Defender", report:"Transfer from Celtic confirmed", src:"VoetbalPrimeur.be", tier:3, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"up", note:"Described as having significant potential and right mentality", lastSeen:"2026-08-08T16:04:56Z", baseProb:95, dead:true, deadReason:"no longer a current link"},
  {name:"Unknown striker from Westerlo", sub:"Unknown · Unknown · Forward", club:"Westerlo", pos:"Forward", report:"OH Leuven signs striker from Westerlo", src:"VoetbalBelgie", tier:3, fee:"Undisclosed", truth:85, prob:85, light:"g", trend:"up", note:"Player identity not yet confirmed in snippets", lastSeen:"2026-08-08T16:04:56Z", baseProb:85, dead:true, deadReason:"no longer a current link"},
  {name:"Unknown striker", sub:"Unknown · Unknown · Forward", club:"Westerlo", pos:"Forward", report:"OH Leuven signs striker from Westerlo", src:"VoetbalBelgie", tier:3, fee:"Undisclosed", truth:70, prob:70, light:"g", trend:"flat", note:"Striker from Westerlo; identity not yet confirmed in snippets", lastSeen:"2026-08-08T18:06:10Z", baseProb:70}
];
const OUTGOING = [
  {name:"Aurélie Reynders", sub:"18 · Belgium · Forward", club:"OH Leuven", pos:"Forward", report:"Most expensive outgoing transfer from Belgium; dreaming of Barcelona move", src:"Sporza", tier:2, fee:"Undisclosed", truth:75, prob:60, light:"g", trend:"down", note:"Young talent targeting top clubs; speculation about Barcelona interest", lastSeen:"2026-08-08T18:06:10Z", baseProb:60},
  {name:"Nyakossi", sub:"Unknown · Unknown · Unknown", club:"OH Leuven", pos:"Unknown", report:"Expected to generate significant/gigantic transfer fee", src:"Unknown", tier:3, fee:"Unknown", truth:50, prob:50, light:"y", trend:"down", note:"Limited information; awaiting confirmed departure", lastSeen:"2026-08-08T18:06:10Z", baseProb:50},
  {name:"Sory Kaba", sub:"Unknown · Unknown · Forward", club:"OH Leuven", pos:"Forward", report:"Official departure from OH Leuven", src:"VoetbalPrimeur.be", tier:3, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Officially departed; destination unknown from snippet", lastSeen:"2026-08-08T16:04:56Z", baseProb:95}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Oh-Leuven Official", u:"#"},
  getBelgianDutchFootballNewsJelleVanNeck: {l:"Get Belgian & Dutch Football News", u:"https://sports.yahoo.com/articles/oh-leuven-kv-mechelen-interested-081000771.html"},
  voetbalkrantviaSachaTavolieriDavisOpoku: {l:"Voetbalkrant (via Sacha Tavolieri)", u:"https://www.voetbalkrant.com/nieuws/2026-07-27/18-jarig-toptalent-van-oh-leuven-eerste-keuze-bij-feyenoord"},
  voetbalkrantJamieLawrence: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/nieuws/2026-07-20/opvallende-transfer-voor-oh-leuven-ex-bayern-talent-tekent-tot-2029"},
  rOBtvShinYamada: {l:"ROBtv", u:"https://news.google.com/rss/articles/CBMikwFBVV95cUxQUFVmTnc5MElxVFBpMlZ3d21EM2tEejJ0VlFEcUJsR1VIOE9FQWRxTmpIWm5DRDRBYzZqMWhPajNCbDZ4SEt2dl9SOWViTXYwYlp5T3kzRm9SdFZ4X0dUWjBOcHJwVVNpN3locDdBNW4wV3dfU3A0MHNDNFpqb2xhWnRUaWlETWwxVWltWEF6NlJMbEU"},
  voetbalPrimeurbeVanDenHeuvel: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiogFBVV95cUxQYkp5U0dTeXRneVhGNDZLdlpTdmJpQ0M4Y2FDa1RQQ2FubjBZd3dSVzU0S0p5UHBSaEpVeWFwS0ZwOHIyanpOV29nM2wzQlpvcDBnMGJIUEN4bF91RTZUX2xKLU12eDZFT0VvUTdxcFpQZ3YwaVAzTW1KZThNR3hUWmpuQ0dsYzFXVldnRWlfZUpqSVEtQlpEOWJiZ3J0Nl9zMEE"},
  sporzabeAurlieReynders: {l:"sporza.be", u:"https://news.google.com/rss/articles/CBMi4AFBVV95cUxPaE9sZGdSbVhGMnBQb1N4RDBvZzY5Yzl1WFR5NEpQaUdXendSN041aGZTRnZIOS1TUkxfTkhlVGRfR19MMHA5SVpiU3lTdVBwV21NNElGcjZlRU5Yb2Z0ZFlwaXNSMEQzQlRSeFdWeS1ST0ZXaVpsdEdJbS1Qb2lEUWVaMHV1TERfX1VRcjVmTkJUOUpuUnZ1b1o5cWNka19Id3JIVTZUcUZmR0N1RGZ6OWw2ajBaQTJHLWxwQkZIVFpQck5WYVpOYzhzSUl3bWNmaXQzaUNNMV9aUkdyY2IzcA"},
  voetbalPrimeurbeNyakossi: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiqgFBVV95cUxQQzIwT1ZBVnBRdWpidHlvLWMxYVIyWVhsbnNibVlzVVdHSkdFcXFtRHBKRDFsa0pjMWxjSjFGaUE2dzJ0Z1VXVzdoVFlXNXNmd2ZRbU9ydnQwOVBaaGh5VkJxLWt0M24wTVU4MlpUVndUQ1hhV1pSQ2RXSjJ0RS12Y0ZBOUtrNnVMT0RUMTV1SDExM3pCSEk5ZmJ4eDhneWk4UzlRVjZXYU1aUQ"},
  voetbalkrantcomUnknownPlayer: {l:"Voetbalkrant.com", u:"https://news.google.com/rss/articles/CBMisAFBVV95cUxPbGF6MU9RM0psVUZBYm9ZX2VLWjkzMGFYUW5kcDBIRXZLb0JMUWVVSE1TcDNmLThGeHBSa0VGcld1bVRKcjR5NkZ3VWtZOVVMSm81am5GUXpqX3FUNWFXNDZFZEVfVlppV0NBUVB5cU9LMXktVVNlZ0FzUHA1MHdqdlBLLVEyWlBKTTBvZ18wYk1aQXU0amdfQV9DcDQwWG90N3l2eGtDMDNYT3BvNnM4d9IBtgFBVV95cUxNUUdmb0czejB3YlhLZGhaNFNRUHlPY09wa0Vmb3hFU19jVTE5b2dJZHVnSXBzdm9xQkUyWEZtUE5TamFLUHN1WGc3cjJjSDctMVpEOTRxdHozb1hsMlpReGV2V2N0T0luYWs2cUsxbEhsX1NMSlZBOEhIaUtPY1dubEVocjhab0h6SlFVc1QyanhUM1kyWlpMTTFNMl90UWhtaDlqSzRZaGY2bktuVDQ2VWpTbWtuQQ"},
  robtvbeShinYamada: {l:"robtv.be", u:"https://news.google.com/rss/articles/CBMikwFBVV95cUxQUFVmTnc5MElxVFBpMlZ3d21EM2tEejJ0VlFEcUJsR1VIOE9FQWRxTmpIWm5DRDRBYzZqMWhPajNCbDZ4SEt2dl9SOWViTXYwYlp5T3kzRm9SdFZ4X0dUWjBOcHJwVVNpN3locDdBNW4wV3dfU3A0MHNDNFpqb2xhWnRUaWlETWwxVWltWEF6NlJMbEU?oc=5"},
  voetbalkrantcomUnknownexBayerntalent: {l:"Voetbalkrant.com", u:"https://news.google.com/rss/articles/CBMitAFBVV95cUxONHBwMEtaSlJoaGwwUy0xWklOblhnZjkzWGFPMWp1bC1nbXdkcmZwSUFxclloSjdVZG1HNERvZkg4YWpVZHptaVBET1FlSVY0Y2U2dXhHdERleGJ5S19wVDlzRjY2LWxkODBoRE1mVWVaMy1IWVJUamJmRWRVQm0tMG5FVDZub0liZW5ISGFHbU9VVGM4bGhTa0RNZFFHRzY1VlU3M3VmcmNUTVdicGFxQ3ViZjfSAboBQVVfeXFMTlNsbW80ZG5SLU55eFUzWndTeW5KNE5ZS0MzRTZuWlhmci1IamNRNXVHMl9kVmdFY0I4T0JEd1ladjlGcWpaeHlGUXB1aXBtOXIyQmQ1dVpoTENFOEJHSHcwZ0ZVbWQ3WDdxTUpncTlhNzJMcUpmUGtBNHBuTkR5RzIzOS1qb0pGenRvcEM4NVYtTDdsMUM5ZEg1TzBmbXN0WVBNUkRWUTVTcjhPeXZNYmNtSDlDV0p1Vnln?oc=5"},
  robtvbeAurlieReynders: {l:"robtv.be", u:"https://news.google.com/rss/articles/CBMi_gFBVV95cUxOdm9WWmpPa253My1OYVhGRC1PWmZveEs1OUNKNDZ5ZzQ5T1RmNWZ4MnhXWmNzXzJHQzhSalJacnpwVWc5NTdtdW9YcktBd3RVd2NDMlNDOXExTG5CZzViVjJPMzEwOHFoZmh1YjgxRjZuZUpIZnl5S282SkN1SUUtNHRmcmF3dlRfSkR6d0dDZEtHa1U1NkVNd0tZYXlocGZyRFZ1MVNFMVJ6MTlpZVN4UmJia3hBdDBISTJGX0huUk84RHdUcGRueFRQQWdfdy01YURCS1VNT24wY0JucFZHbm1UcjFoOTMyZ24yemx0ZE5qcU1UNmc3RnR3VE1LQQ?oc=5"},
  voetbalkrantcomUnknownexBayernplayer: {l:"Voetbalkrant.com", u:"https://news.google.com/rss/articles/CBMitAFBVV95cUxONHBwMEtaSlJoaGwwUy0xWklOblhnZjkzWGFPMWp1bC1nbXdkcmZwSUFxclloSjdVZG1HNERvZkg4YWpVZHptaVBET1FlSVY0Y2U2dXhHdERleGJ5S19wVDlzRjY2LWxkODBoRE1mVWVaMy1IWVJUamJmRWRVQm0tMG5FVDZub0liZW5ISGFHbU9VVGM4bGhTa0RNZFFHRzY1VlU3M3VmcmNUTVdicGFxQ3ViZjfSAboBQVVfeXFMTlNsbW80ZG5SLU55eFUzWndTeW5KNE5ZS0MzRTZuWlhmci1IamNRNXVHMl9kVmdFY0I4T0JEd1ladjlGcWpaeHlGUXB1aXBtOXIyQmQ1dVpoTENFOEJHSHcwZ0ZVbWQ3WDdxTUpncTlhNzJMcUpmUGtBNHBuTkR5RzIzOS1qb0pGenRvcEM4NVYtTDdsMUM5ZEg1TzBmbXN0WVBNUkRWUTVTcjhPeXZNYmNtSDlDV0p1Vnln"},
  voetbalPrimeurbeSoryKaba: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMihAFBVV95cUxOZnBtYXFYeXN3UlcyMF84c09Dcl9yTXlYQzNILTktN1JzUDVQMnAtWkwxcXpnVGdjYkQ1dHlJYUZnNVVQYlo4WHFld2NiZkdkcHJZbEhURm9NYVdEcjhFaENkVl9say1iY192VEQ3MU11UHhZU1lSYk5VblQ5RkpoNjRaV2E"},
  voetbalPrimeurbeVanDenHeuvel1: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiogFBVV95cUxQYkp5U0dTeXRneVhGNDZLdlpTdmJpQ0M4Y2FDa1RQQ2FubjBZd3dSV281S0p5UHBSaEpVeWFwS0ZwOHIyanpOV29nM2wzQlpvcDBnMGJIUEN4bF91RTZUX2xKLU12eDZFT0VvUTdxcFpQZ3YwaVAzTW1KZThNR3hUWmpuQ0dsYzFXVldnRWlfZUpqSVEtQlpEOWJiZ3J0Nl9zMEE"},
  voetbalBelgieUnknownstrikerfromWesterlo: {l:"VoetbalBelgie", u:"https://news.google.com/rss/articles/CBMie0FVX3lxTE1FYW5GNzNWby1JZmVLb0M4T0UwZEpSWEFGNl9BSWwyVUEzbjJhU0RQZlI5UllhSE9qMWRRVnFhdVZoWWotTVZFZ1RUdEoyNkNVNkYxeEVyeS1weVZaSDNUSXVKR09rclVqZkE1TFIyb2tubW1sdFFGZ1MwOA"},
  voetbalPrimeurbeSoryKaba1: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMihAFBVV95cUxOZnBtYXFYeXN3UlcyMF84c09Dcl9yTXlYQzNILTktN1JzUDVQMnAtWkwxcXpnVGdjYkQ1dHlJYUZnNVVQYlo4WHFld2NiZkdkcHJZbEhURm9NYVdEcjhFaENkVl9say1iY192VEQ3MU11UHhZU1lSYk5VblQ5RkpoNjRaV2E?oc=5"},
  voetbalPrimeurbeVanDenHeuvel2: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiogFBVV95cUxQYkp5U0dTeXRneVhGNDZLdlpTdmJpQ0M4Y2FDa1RQQ2FubjBZd3dSVzU0S0p5UHBSaEpVeWFwS0ZwOHIyanpOV29nM2wzQlpvcDBnMGJIUEN4bF91RTZUX2xKLU12eDZFT0VvUTdxcFpQZ3YwaVAzTW1KZThNR3hUWmpuQ0dsYzFXVldnRWlfZUpqSVEtQlpEOWJiZ3J0Nl9zMEE?oc=5"}};

const LINKMAP = {
  "Jelle Van Neck": ["getBelgianDutchFootballNewsJelleVanNeck"],
  "Davis Opoku": ["voetbalkrantviaSachaTavolieriDavisOpoku"],
  "Jamie Lawrence": ["voetbalkrantJamieLawrence"],
  "Shin Yamada": ["rOBtvShinYamada", "robtvbeShinYamada"],
  "Van Den Heuvel": ["voetbalPrimeurbeVanDenHeuvel", "voetbalPrimeurbeVanDenHeuvel1", "voetbalPrimeurbeVanDenHeuvel2"],
  "Aurélie Reynders": ["sporzabeAurlieReynders", "robtvbeAurlieReynders"],
  "Nyakossi": ["voetbalPrimeurbeNyakossi"],
  "Unknown Player": ["voetbalkrantcomUnknownPlayer"],
  "Unknown ex-Bayern talent": ["voetbalkrantcomUnknownexBayerntalent", "voetbalkrantcomUnknownexBayernplayer"],
  "Unknown ex-Bayern player": ["voetbalkrantcomUnknownexBayernplayer"],
  "Sory Kaba": ["voetbalPrimeurbeSoryKaba", "voetbalPrimeurbeSoryKaba1", "voetbalkrantcomUnknownPlayer"],
  "Unknown striker from Westerlo": ["voetbalBelgieUnknownstrikerfromWesterlo"],
  "Unknown": ["voetbalkrantcomUnknownexBayerntalent"],
  "Unknown striker": ["voetbalBelgieUnknownstrikerfromWesterlo"],
  "Juma Van Den Heuvel": ["voetbalPrimeurbeVanDenHeuvel"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `OH Leuven · 2026/27 Season`,
  heroLede: `Transfer window active. OH Leuven preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};