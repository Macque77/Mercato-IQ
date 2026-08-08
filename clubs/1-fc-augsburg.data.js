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
  {name:"Rodrigo Ribeiro", sub:"Loan-to-permanent option exercised", club:"Sporting CP", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Portuguese forward's loan spell converted into a permanent transfer, confirmed 27.05.2026."},
  {name:"Yannik Keitel", sub:"26 · Germany · MF", club:"VfB Stuttgart", pos:"Midfielder", fee:"Loan (extended)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Listed on the official Bundesliga transfer round-up as a loan extension rather than a fresh signing. No fee or option detail has been published, so the terms remain unclear."}
];

const CONFIRMED_OUT = [
  {name:"Cedric Zesiger", sub:"27 · CB · Switzerland", to:"permanent to BSC Young Boys", club:"BSC Young Boys", fee:"~€5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Swiss centre-back returns to his homeland, Augsburg's largest confirmed sale of the summer."},
  {name:"Elvis Rexhbeçaj", sub:"Kosovo · CM", club:"VfL Wolfsburg", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"kicker lists Rexhbeçaj among the summer arrivals at second-tier clubs, leaving Augsburg after the 2025/26 season. The fee has not been published and the structure of the exit is unclear, so it is logged as undisclosed rather than free."},
  {name:"Henri Koudossou", sub:"Permanent move completed", club:"Arminia Bielefeld", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed departure to Arminia Bielefeld, dated 25.06.2026."},
  {name:"Maximilian Bauer", sub:"Joins Arminia Bielefeld permanently", club:"Arminia Bielefeld", pos:"CB", fee:"Undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 25.05.2026 on the club's official departures list."},
  {name:"Elias Saad", sub:"Loaned to MLS side", club:"Nashville SC", pos:"LW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed loan move dated 16.07.2026."},
  {name:"Kyliane Dong", sub:"Loaned to Championship side", club:"Bolton Wanderers", pos:"CM", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed loan move dated 07.07.2026."},
  {name:"Felix Meiser", sub:"Joins fellow German second-tier side", club:"Fortuna Düsseldorf", pos:"CB", fee:"Undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed departure dated 10.07.2026."},
  {name:"Dimitris Giannoulis", sub:"Unknown · Greece · Unknown", club:"1-fc-augsburg", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed transfer back to Greece"}
];

const INCOMING = [
  {name:"Wolfsburg striker (potential comeback)", sub:"Unknown · Unknown · F", club:"Wolfsburg", pos:"F", report:"Augsburg considering a Wolfsburg striker in a possible comeback move", src:"fussballdaten.de", tier:3, fee:"", truth:45, prob:35, light:"y", trend:"flat", note:"No player name identified in snippet; considered but unconfirmed interest", lastSeen:"2026-08-07T01:42:32Z", baseProb:35, dead:true, deadReason:"no longer a current link"},
  {name:"Unknown Wolfsburg striker", sub:"Unknown · Unknown · Forward", club:"VfL Wolfsburg", pos:"Forward", report:"Augsburg considering a possible return of a Wolfsburg striker", src:"fussballdaten.de via Florian Plettenberg", tier:3, fee:"", truth:50, prob:40, light:"y", trend:"flat", note:"Player identity not disclosed in reports; described as potential comeback", lastSeen:"2026-08-08T18:06:11Z", baseProb:40}
];

const OUTGOING = [
  {name:"Mert Kömür", sub:"Unknown · Unknown · Unknown", club:"1-fc-augsburg", pos:"Unknown", report:"Hull City have made progress in talks to sign Kömür", src:"Unknown", tier:3, fee:"Undisclosed", truth:65, prob:55, light:"g", trend:"down", note:"Negotiations advancing with Hull City", lastSeen:"2026-08-08T18:06:11Z", baseProb:55},
  {name:"Chrislain Matsima", sub:"Unknown · Unknown · Defender", club:"1-fc-augsburg", pos:"Defender", report:"Crystal Palace have increased their offer for defender Matsima", src:"Sky.de", tier:2, fee:"", truth:75, prob:70, light:"g", trend:"up", note:"Improved bid from Crystal Palace; talks progressing", lastSeen:"2026-08-08T18:06:11Z", baseProb:70}
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
  fCAugsburgOfficialTomWisbereit: {l:"FC Augsburg Official", u:"https://www.fcaugsburg.de/en/news"},
  bundesligacomHennesBehrens: {l:"Bundesliga.com", u:"https://www.bundesliga.com/en/bundesliga/news/augsburg-sign-hennes-behrens-hoffenheim-38212"},
  bundesligacomoffiziellerTransfermarktYannikKeitel: {l:"Bundesliga.com (offizieller Transfermarkt)", u:"https://www.bundesliga.com/de/bundesliga/news/offizieller-transfermarkt-alle-wechsel-transfers-ubersicht-11850"},
  kickerFelixMeiser: {l:"kicker", u:"https://www.kicker.de/fc-augsburg/team-transfers"},
  kickerTomWisbereit: {l:"kicker", u:"https://www.kicker.de/fc-augsburg/team-news"},
  kickerElvisRexhbeaj: {l:"kicker", u:"https://www.kicker.de/die-sommer-neuzugaenge-der-zweitligisten-im-ueberblick-953724/artikel"},
  fussballdatendeWolfsburgstrikerpotentialcomeback: {l:"fussballdaten.de", u:"https://news.google.com/rss/articles/CBMirAFBVV95cUxQOHJwTWp0VnhLdHBlSkRrUWdodUw4UUtDaTJBTFBFS2U4SDc4WUZZSEEzazZ6QV9MTEhLdkRCUGhPZGx0ZS1wTkFvRzNOMkxYT19vRk5LU1MzRXZmM0Vmc19fa2VqMU1NT1owNnZ1cWQ1YS1qMWNaVlVFOGctdk9QzMxESDk2YjBNTHFYXzJUdGVUT05RTi1SOHpoRzlYV0oyOXI2N0RqbE0zcVZY"},
  merkurU20GermaninternationalBundesligatransfer: {l:"Merkur", u:"https://news.google.com/rss/articles/CBMi6AFBVV95cUxQb2NIMmxmMkxaTUlVbGtKMlJiSkNUaXZ2VnlVdVU2QjlZMC1Ja08wbDNjdGZtYWJwWWl2TmdSWUp6M3FDNzlNWnMzMWoxYnYxSWZSWjBNOGxZcEkreDFyNWEzb1VnRTNmYXZoaGFZQk5TYS00cFI3RGdyUjQ1aFBPUjRYQUwxZWhrWkxHNmpYWjR5VG1Qckhsc2lJckx5OHllQTlBMVAtTGFCanVlb2t3b3F2clRyVlBNeVFyeWxfRFhXUWIxWlo5bFhhdF9VcDFxY0V0X3hsdWJiOGdQVFNiOGhEMDNSbGx6"},
  skydeChrislainMatsima: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxQM0Ntc3dCcGZvN0ItejhQQlR4cEI2Q3AzZDN0TVVqZkxwakg0SEg4U1doLXJ4bTFXWng4OUZ3VVlFb3ZZOW10NXZ4WmlxU1NrSERUZjBvNWpwYTV4R0xZNjBrWDBBSGNyOE9ISk5hQlZuZUhjN2VXcXJYbmhIUjZ4TUdRS2Z3blVkdWxLS2dHMXBlcG1GdDdRaG8yM3QwbUtjOHdpS2paQktZVllMVTNOVUE2VTY0NndWaTRseDdFSQ"},
  fussballdatendeDefender25mbid: {l:"fussballdaten.de", u:"https://news.google.com/rss/articles/CBMiqAFBVV95cUxQa0lTZV8xV2ZxVXlqRGd0cV9WdlRNQUdXVUVDdl9YSS1uem5ZN3plVE0zYWRZNHkyd1NWbjlVTzJqcXBlR21fNzY1dzZFUnBNM19TNHZ6OGhlajh3OUg2NnhRS2VTSTUtNHZ0MkR2WFlvRVp5TlRjMzY2VU1lRFpOWVNJRDJ2MV9TNk5MSEtsdkVZWXlxenhOamdrTVdIdS12UldRbnIzS1I"},
  merkurDimitrisGiannoulis: {l:"Merkur", u:"https://news.google.com/rss/articles/CBMi8gFBVV95cUxOd29RczA3WFh5ZHYyRlFBT0lpUnZqcV9HZkJHNmdJTTV5b2kxak9WNWtVQzlJTThPdHJjZkt1eXpjQ3dOSlROQUt2LWRSU09NRkxybGhpNFl2bXJwX1VXZGJPN1Fjalg1WW5DTjFkTVotZ0NRZkZ2SDVjUlU1ZWdWRk93WDdtbVZCcXpYQjRLSTFGZVpWX0RHN2Jwd3N4MEo0Q01BQjVWWWtfeDNibGx2ZG5yRnRvZjk2dEhiQ2ZLakZtS2pUa2w5WVRvXzBUTndUMmt4bkwweUlPdVdkQXV0Z1dSMWg4M1JZRm5La21FMDB3Zw"},
  fussballdatendeUnknownWolfsburgstriker: {l:"fussballdaten.de", u:"https://news.google.com/rss/articles/CBMirAFBVV95cUxQOHJwTWp0VnhLdHBlSkRrUWdodUw4UUtDaTJBTFBFS2U4SDc4WUZZSEEzazZ6QV9MTEhLdkRCUGhPZGx0ZS1wTkFvRzNOMkxYT19vRk5LU1MzRXZmM0Vmc19fa2VqMU1NT1owNnZ1cWQ1YS1qMWNaVlVFOGctdk9QzMUEHDk2YjBNTHFYXzJUdGVUT01RTi1SOHpoRzlYV0oyOXI2N0RqbE0zcVZY"},
  skydeChrislainMatsima1: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxQM0Ntc3dCcGZvN0ItejhQQlR4cEI2Q3AzZDN0TVVqZkxwakg0SEg4U1doLXJ4bTFXWng4OUZ3VVlFb3ZZOW10NXZ4WmlxVVNrSERUZjBvNWpwYTV4R0xZNjBrWDBBSGNyOE9ISk5hQlZuZUhjN2VXcXJYbmhIUjZ4TUdRS2Z3blVkdWxLS2dHMXBlcG1GdDdRaG8yM3QwbUtjOHdpS2paQktZVllMVTNOVUE2VTY0NndWaTRseDdFSQ"}};

const LINKMAP = {
  "Mert Kömür": ["bBCSportMertKmr"],
  "Fabian Rieder": ["yahooSportsFabianRieder"],
  "Michael Gregoritsch": ["yahooSportsMichaelGregoritsch"],
  "Tom Wisbereit": ["fCAugsburgOfficialTomWisbereit", "kickerTomWisbereit"],
  "Calvin Brackelmann": ["fCAugsburgOfficialTomWisbereit"],
  "Rodrigo Ribeiro": ["fCAugsburgOfficialTomWisbereit"],
  "Cédric Zesiger": ["fCAugsburgOfficialTomWisbereit"],
  "Henri Koudossou": ["fCAugsburgOfficialTomWisbereit"],
  "Maximilian Bauer": ["fCAugsburgOfficialTomWisbereit"],
  "Elias Saad": ["fCAugsburgOfficialTomWisbereit"],
  "Kyliane Dong": ["fCAugsburgOfficialTomWisbereit"],
  "Felix Meiser": ["fCAugsburgOfficialTomWisbereit", "kickerFelixMeiser"],
  "Hennes Behrens": ["bundesligacomHennesBehrens"],
  "Yannik Keitel": ["bundesligacomoffiziellerTransfermarktYannikKeitel"],
  "Elvis Rexhbeçaj": ["kickerElvisRexhbeaj"],
  "Wolfsburg striker (potential comeback)": ["fussballdatendeWolfsburgstrikerpotentialcomeback"],
  "U20 German international (Bundesliga transfer)": ["merkurU20GermaninternationalBundesligatransfer"],
  "Chrislain Matsima": ["skydeChrislainMatsima", "skydeChrislainMatsima1"],
  "Defender (25m bid)": ["fussballdatendeDefender25mbid"],
  "Dimitris Giannoulis": ["merkurDimitrisGiannoulis"],
  "Unknown Wolfsburg striker": ["fussballdatendeUnknownWolfsburgstriker"]};
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
