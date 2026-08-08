/* ============================================================
   MERCATO IQ · CLUB DATA · HUDDERSFIELD TOWN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Huddersfield Town", mono: "HT", slug: "huddersfield-town",
  primary: "#0072CE", primaryBright: "#5CA9FF", primaryDeep: "#003D73",
  primaryRgb: "0,114,206",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Mid-table League One (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["huddersfield-town transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Derensili Sanches Fernandes", sub:"W", club:"Excelsior (Netherlands)", pos:"W", fee:"Multi-million fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported close to completion pending visa formalities."},
  {name:"Ibane Bowat", sub:"Unknown · Unknown · Unknown", club:"Unknown", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Transfer announced"},
  {name:"Ethan Brierley", sub:"Unknown · Unknown · Unknown", club:"Unknown", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move completed"}
];
const CONFIRMED_OUT = [
  {name:"Alfie May", sub:"ST", club:"Doncaster Rovers", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"See Doncaster entry."},
  {name:"Lee Nicholls", sub:"Unknown · Unknown · GK", club:"Preston North End", pos:"GK", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official transfer completed"},
  {name:"Ex-Huddersfield Town forward", sub:"Unknown", club:"Middlesbrough", pos:"FW", fee:"£2m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"£2m deal agreed with Middlesbrough"}
];
const INCOMING = [
  {name:"Archie Collins", sub:"MF", club:"Free agent", pos:"MF", report:"~1 wk ago", src:"FLW", tier:3, fee:"Free", truth:55, prob:35, light:'y', trend:'flat', note:"Seven-club race for the free agent including Millwall, Sheffield Wednesday and Leicester.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"No recent confirmation or update; stale rumour (>1 week, no snippet support)"},
  {name:"Ibane Bowat", sub:"", club:"", pos:"", report:"Transfer announced", src:"We Are Terriers", tier:3, fee:"", truth:95, prob:95, light:"g", trend:"flat", note:"Signing confirmed by club announcement", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Ethan Brierley", sub:"", club:"Brentford", pos:"", report:"Permanent move completed", src:"Brentford FC", tier:2, fee:"", truth:95, prob:95, light:"g", trend:"flat", note:"Permanent transfer from Brentford confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Dutch winger", sub:"", club:"", pos:"Winger", report:"Signs on significant fee, beats continental interest", src:"Yorkshire Post", tier:2, fee:"Significant", truth:75, prob:75, light:"g", trend:"flat", note:"Dutch winger signed for significant fee; full player identity not disclosed in headline", lastSeen:"2026-08-07T01:42:32Z", baseProb:75, dead:true, deadReason:"Generic descriptor; no confirmed player name provided in snippets"},
  {name:"Portsmouth and former Chelsea and Fulham defender", sub:"Unknown · Unknown · Defender", club:"Portsmouth", pos:"Defender", report:"Former Chelsea and Fulham defender joins Huddersfield Town as signing number six", src:"Yorkshire Post", tier:2, fee:"Unknown", truth:85, prob:85, light:"g", trend:"flat", note:"Signing number six; unable to confirm player identity from snippet", lastSeen:"2026-08-07T17:40:24Z", baseProb:85, dead:true, deadReason:"Vague descriptor; no specific player name identified in snippets"}
];
const OUTGOING = [
  {name:"Brodie Spencer", sub:"DF", club:"QPR / West Brom", pos:"DF", report:"~1 wk ago", src:"FLW exclusive", tier:3, fee:"Undisclosed", truth:55, prob:40, light:'y', trend:'flat', note:"Two Championship clubs reportedly interested.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link"},
  {name:"Ex-Huddersfield Town forward", sub:"", club:"Middlesbrough", pos:"Forward", report:"£2m deal agreed with Middlesbrough", src:"Yorkshire Post", tier:2, fee:"£2m", truth:70, prob:75, light:"g", trend:"flat", note:"Former Huddersfield player leaving Middlesbrough; specific identity unclear from headline", lastSeen:"2026-08-07T01:42:32Z", baseProb:75, dead:true, deadReason:"Generic descriptor referring to Middlesbrough £2m deal; no confirmed player name in available snippets"},
  {name:"Lee Nicholls", sub:"Goalkeeper", club:"Preston North End", pos:"GK", report:"Joined Preston North End", src:"Yorkshire Post", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Move to SPL side confirmed", lastSeen:"2026-08-07T23:07:30Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-derensilisanchesfernande": {l:"Related news search: Derensili Sanches Fernandes", u:"https://news.google.com/search?q=Huddersfield%20Town%20Derensili%20Sanches%20Fernandes%20transfer&hl=en-GB&gl=GB"},
  "gnews-alfiemay": {l:"Related news search: Alfie May", u:"https://news.google.com/search?q=Huddersfield%20Town%20Alfie%20May%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  weAreTerriersIbaneBowat: {l:"We Are Terriers", u:"https://news.google.com/rss/articles/CBMickFVX3lxTFBRb0NveFdsWlNISUZqNTgwZWQxZTUxek9GY2gtLWxPNmt4ckpYRm9ZVjBtUkJwU010dnpNaU1Gc1lHYWdDelBWdnhZQmhmeGs1TGh3WFNfYlRyeXkwZU1lb25jT0hlZlVxU0UtaWk0VGJfQQ?oc=5"},
  bBCDerensiliSanchesFernandes: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFA4bXg1SWtwUWpkM0NVTjdrNUlodm9laWtKQTZxZWp2eVozMk5SRG5ROHowazhjM3phY09uRndabHVBYU5BZ2NhWlRyXzVWLUlxNnIzREllZXNyalBUalJWTnZGOEdmOU0?oc=5"},
  brentfordFCEthanBrierley: {l:"Brentford FC", u:"https://news.google.com/rss/articles/CBMimAFBVV95cUxNMmRfbmV2T08zVXYzMnRCaG5DRExfenZvcFFfczhQX2pYLWNWdEZudXR4TW5uU3c3bGRPS19tWm1SUFhHa3d0UW5vbTVkai1ZZFowdWlkc3k3OWRmZWRleHlfak0yRUcwQzlqazQtWEFNTkV4V2NkbExtLUtTM1ZYTGlIMVY2Si1zeEJZdGduWmtmX1ZMVThPUg?oc=5"},
  yorkshirePostDutchwinger: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMi_gFBVV95cUxQZnJnMG9PWm44YVFObUs0eVhnZ0lEbllNX2wyeWV3aUZoRVRNUkxtYjN3YmpsRGUyNzVNdVVHQnlUcHc1VmJpZUhCV2tuQWtWbHlxMmtKTDZzRGlfbTRzMTI1QXFWUC01TUNHWjVSNGVwYVFTQTBvRWZBRkxUbFlXa0hSNTV1UlVHcnhqV0ZvMGdZQmREOTlCLUhzM2NXajVRU0txcUhFVXdDak5SbndHME81dGd5YzkyOFRUaEpibS1ZY2dNSkVibFFwTWdtbEcwakY4c1FPdHotNUFRQ2ZKSXJwUFNYTmpNa09pNE9ako3ZE82b1pOZU1IZzJIUQ?oc=5"},
  yorkshirePostExHuddersfieldTownforward: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMiwgFBVV95cUxObWJkUUhGeHZOckpwa3FSdWxUZy1nc2g5Ylo0R3JtREs2Y1F2UjJWVUdCUDROX19xUDlXZ1R6Q1J4M0hDQ2VIQnB2NVFDanFJcWZhRkUxeFFxREQ3MkJSWWV3T1ljaXV2d2l6elpPSUcyZW15ZTdBRHlxSUZhSkpQNHZkajhEOTFLTWN5Tlp5ZTNqVUNwRnU3aVUyRG0xQ3dQVFRXVjVyU3JaOS0yQ0habzJBbFhPdk5NczNpdzRsNlhDQQ?oc=5"},
  huddersfieldTownFCAshleyFletcher: {l:"Huddersfield Town FC", u:"https://news.google.com/rss/articles/CBMidkFVX3lxTFBBZVFmLXNMVHBjT1FlS3k1alpabDFHaThwOUwwMl8zbERNQ2hHa3ZTNUx5VmNpcmlNd1pEeHRSNDZWdGNZcldxWUZHUEw2T3ZLQ0tfc19KSkpRdVI0bmIyYl9tNUZyX1VuZWN3MlNySWd4NDBGRUE?oc=5"},
  huddersfieldTownFCLeeNicholls: {l:"Huddersfield Town FC", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxNY2txQS1kdlJlMVhUVnFhb1pCZGRMV0NNd0tpWFhEQjRidmItcWRkM1NidDhRZHVTbjZtbkRhcG1lQ2tHWkY0Y2loUXR2RVktQ05ORlpqbERWTVRxMDQ4UlJuUXo2SVN0SWVrZTV1QWYzNGQ3Mkt5YUpKMXlfVWNyWXloQVVUQVdLSEpTUnItb00?oc=5"},
  huddersfieldTownFCDerensiliSanchesFernandes: {l:"Huddersfield Town FC", u:"https://news.google.com/rss/articles/CBMihwFBVV95cUxNTWl4dUQ4bTlXX0xTcTE0dlZ1TEhzbE5VTTBIV0p0VjJHU212Tnc5clliN2RiT01RVlBndDliQ1M2bHhFRlBhdV94ZnFlcXFXVVBFc0lDZmp4bmtOTWxBOEc1N1IzQUFxdGZsdTNGcHFEbTNoRDU1aGNaMTRXdmE5bW1iV2JxS0E?oc=5"},
  unknownEthanBrierley: {l:"Unknown", u:"Unknown"},
  yorkshirePostPortsmouthandformerChelseaandFulhamdefender: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMi-AFBVV95cUxON1dCYXRjVUROamptWVR3Zm1JcXFaNk1JeGpLVVFVeUozVFNyc0NJZmdtb2hkWjB1ZFdmUnVCTlh5aW5sNmp3VDJ1clVWSkQtWjJNODdvZ1pFREVvd29zOFljVTZKNXVNQlZTci1vTFJ2Yk93eVIxX05jeGJtVHNZZW5EWmpsSG5WdEpSNmp6bzhORVhxdnlDSVdodlh2TTVwdldmeW55Y1RzUFJJTlJDaFJwQTRLQkNYSjZnRFFUakdtY2syTFMzUmFMb0hicEVldDFzSDlPU1VKRWN3ZHJMdk1vcEYzTm5yQm5rdU8zZWJibkNhcjQxaw?oc=5"},
  bBCDerensiliSanchesFernandes1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFA4bXg1SWtwUWpkM0NVTjdrNUlodm9laWtKQTZxZWp2eVozMk5SRG5ROHowazhjM3phY09uRndabHVBYU5BZ2NhWlRyXzVWLUlxNnIzREllZXNyalBUalJWTnZGOEdmOU0"},
  yorkshirePostLeeNicholls: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMiigJBVV95cUxNcHhob3pwc2FnTjY4dDcwODk5OUlseEY1ZEttekR2Z1Rub25oMXpCenZpVUR6cHdZNEdmNW5EVVhzajdnVjdDNjFucmNFaWhIenBOMkFIOFNRMTh0eGNtYVJKbTRmOW5NOVN1T2lnSjFaeWdyaTBsT0RzQjFTNXpaX0o5bGlxQ2xfdUx2ejZkQkMtTnZCcll0amROWGNnRVNBYjREb2Y1SUU1c09hbUFRbkpZQkdhQ2lFWDlQUFBwTkZXcUlwN3JKcmJTajZCNTNuN3JMRVBHSmluT2M5dlR0WHptSlQ5ZG1ZcGZrZzhyV0tfODlBbjZOcE4yaTdiYU5ESktSVkdkdXdxUQ"},
  weAreTerriersIbaneBowat1: {l:"We Are Terriers", u:"https://news.google.com/rss/articles/CBMickFVX3lxTFBRb0NveFdsWlNISUZqNTgwZWQxZTUxek9GY2gtLWxPNmt4ckpYRm9ZVjBtUkJwU010dnpNaU1Gc1lHYWdDelBWdnhZQmhmeGs1TGh3WFNfYlRyeXkwZU1lb25jT0hlZlVxU0UtaWk0VGJfQQ"},
  yorkshirePostExHuddersfieldTownforward1: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMiwgFBVV95cUxObWJkUUhGeHZOckpwa3FSdWxUZy1nc2g5Ylo0R3JtREs2Y1F2UjJWVUdCUDROX19xUDlXZ1R6Q1J4M0hDQ2VIQnB2NVFDanFJcWZhRkUxeFFxREQ3MkJSWWV3T1ljaXV2d2l6elpPSUcyZW15ZTdBRHlxSUZhSkpQNHZkajhEOTFLTWN5Tlp5ZTNqVUNwRnU3aVUyRG0xQ3dQVFRXVjVyU3JaOS0yQ0habzJBbFhPdk5NczNpdzRsNlhDQQ"},
  huddersfieldTownBaliMumba: {l:"Huddersfield Town", u:"https://news.google.com/rss/articles/CBMiggFBVV95cUxNSEdtYWRVZ3R5QmEwTzJ0Y21HWkYzZ0dVLVhKeTYwNHNxbHpfanZIQzNHdHV3Qzl1bkpha2ZDbmxZRWdRSEJtMllwcFJuRXNqRGJNMkoydDBmMVZNMGlZRGlrZzZ3SmN6TVdySU9WdHZTMVdhT1dRX1hXWThVR2p3M3pR?oc=5"},
  huddersfieldTownLeeNicholls: {l:"Huddersfield Town", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxNY2txQS1kdlJlMVhUVnFhb1pCZGRMV0NNd0tpWFhEQjRidmItcWRkM1NidDhRZHVTbjZtbkRhcG1lQ2tHWkY0Y2loUXR2RVktQ05ORlpqbERWTVRxMDQ4UlJuUXo2SVN0SWVrZTV1QWYzNGQ3Mmt5YUpKMXlfVWNyWXloQVVUQVdLSEpTUnItb00?oc=5"},
  googleNewsDerensiliSanchesFernandes: {l:"Google News", u:"https://news.google.com/rss/articles/CBMi_gFBVV95cUxQZnJnMG9PWm44YVFObUs0eVhnZ0lEbllNX2wyeWV3aUZoRVRNUkxtYjN3YmpsRGUyNzVNdVVHQnlUcHc1VmJpZUhCV2tuQWtWbHlxMmtKTDZzRGlfbTRzMTI1QXFWUC01TUNHWjVSNGVwYVFTQTBvRWZBRkxUbFlXa0hSNTV1UlVHcnhqV0ZvMGdZQmREOTlCLUhzM2NXajVRU0txcUhFVXdDak5SbndHME81dGd5YzkyOFRUaEpibS1ZY2dNSkVibFFwTWdtbEcwakY4c1FPdHotNUFRQ2ZKSXJwUFNYTmpNa09pNE9jako3ZE82b1pOZU1IZzJIUQ?oc=5"},
  googleNewsLeeNicholls: {l:"Google News", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxNY2txQS1kdlJlMVhUVnFhb1pCZGRMV0NNd0tpWFhEQjRidmItcWRkM1NidDhRZHVTbjZtbkRhcG1lQ2tHWkY0Y2loUXR2RVktY0ZFZGZOU1lUUT09?oc=5"}};

const LINKMAP = {
  "Derensili Sanches Fernandes": ["gnews-derensilisanchesfernande", "bBCDerensiliSanchesFernandes", "huddersfieldTownFCDerensiliSanchesFernandes", "bBCDerensiliSanchesFernandes1", "googleNewsDerensiliSanchesFernandes"],
  "Alfie May": ["gnews-alfiemay"],
  "Archie Collins": ["flw"],
  "Brodie Spencer": ["flw"],
  "Ibane Bowat": ["weAreTerriersIbaneBowat", "weAreTerriersIbaneBowat1"],
  "Ethan Brierley": ["brentfordFCEthanBrierley", "unknownEthanBrierley"],
  "Dutch winger": ["yorkshirePostDutchwinger"],
  "Ex-Huddersfield Town forward": ["yorkshirePostExHuddersfieldTownforward", "yorkshirePostExHuddersfieldTownforward1"],
  "Ashley Fletcher": ["huddersfieldTownFCAshleyFletcher"],
  "Lee Nicholls": ["huddersfieldTownFCLeeNicholls", "yorkshirePostLeeNicholls", "huddersfieldTownLeeNicholls", "googleNewsLeeNicholls"],
  "Portsmouth and former Chelsea and Fulham defender": ["yorkshirePostPortsmouthandformerChelseaandFulhamdefender"],
  "Bali Mumba": ["huddersfieldTownBaliMumba"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Huddersfield Town · 2026/27 Season`,
  heroLede: `Transfer window active. Huddersfield Town preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
