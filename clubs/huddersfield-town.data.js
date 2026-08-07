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
  {name:"Derensili Sanches Fernandes", sub:"W", club:"Excelsior (Netherlands)", pos:"W", fee:"Multi-million fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported close to completion pending visa formalities."}
];
const CONFIRMED_OUT = [
  {name:"Alfie May", sub:"ST", club:"Doncaster Rovers", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"See Doncaster entry."}
];
const INCOMING = [
  {name:"Archie Collins", sub:"MF", club:"Free agent", pos:"MF", report:"~1 wk ago", src:"FLW", tier:3, fee:"Free", truth:55, prob:35, light:'y', trend:'flat', note:"Seven-club race for the free agent including Millwall, Sheffield Wednesday and Leicester.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Ibane Bowat", sub:"", club:"", pos:"", report:"Transfer announced", src:"We Are Terriers", tier:3, fee:"", truth:95, prob:95, light:"g", trend:"flat", note:"Signing confirmed by club announcement", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Derensili Sanches Fernandes", sub:"", club:"", pos:"Winger", report:"Four-year deal signed", src:"BBC", tier:2, fee:"", truth:95, prob:95, light:"g", trend:"flat", note:"Confirmed signing on four-year contract", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Ethan Brierley", sub:"", club:"Brentford", pos:"", report:"Permanent move completed", src:"Brentford FC", tier:2, fee:"", truth:95, prob:95, light:"g", trend:"flat", note:"Permanent transfer from Brentford confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Dutch winger", sub:"", club:"", pos:"Winger", report:"Signs on significant fee, beats continental interest", src:"Yorkshire Post", tier:2, fee:"Significant", truth:75, prob:75, light:"g", trend:"flat", note:"Dutch winger signed for significant fee; full player identity not disclosed in headline", lastSeen:"2026-08-07T01:42:32Z", baseProb:75}
];
const OUTGOING = [
  {name:"Brodie Spencer", sub:"DF", club:"QPR / West Brom", pos:"DF", report:"~1 wk ago", src:"FLW exclusive", tier:3, fee:"Undisclosed", truth:55, prob:40, light:'y', trend:'flat', note:"Two Championship clubs reportedly interested.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link"},
  {name:"Ex-Huddersfield Town forward", sub:"", club:"Middlesbrough", pos:"Forward", report:"£2m deal agreed with Middlesbrough", src:"Yorkshire Post", tier:2, fee:"£2m", truth:70, prob:75, light:"g", trend:"flat", note:"Former Huddersfield player leaving Middlesbrough; specific identity unclear from headline", lastSeen:"2026-08-07T01:42:32Z", baseProb:75}
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
  yorkshirePostExHuddersfieldTownforward: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMiwgFBVV95cUxObWJkUUhGeHZOckpwa3FSdWxUZy1nc2g5Ylo0R3JtREs2Y1F2UjJWVUdCUDROX19xUDlXZ1R6Q1J4M0hDQ2VIQnB2NVFDanFJcWZhRkUxeFFxREQ3MkJSWWV3T1ljaXV2d2l6elpPSUcyZW15ZTdBRHlxSUZhSkpQNHZkajhEOTFLTWN5Tlp5ZTNqVUNwRnU3aVUyRG0xQ3dQVFRXVjVyU3JaOS0yQ0habzJBbFhPdk5NczNpdzRsNlhDQQ?oc=5"}};

const LINKMAP = {
  "Derensili Sanches Fernandes": ["gnews-derensilisanchesfernande", "bBCDerensiliSanchesFernandes"],
  "Alfie May": ["gnews-alfiemay"],
  "Archie Collins": ["flw"],
  "Brodie Spencer": ["flw"],
  "Ibane Bowat": ["weAreTerriersIbaneBowat"],
  "Ethan Brierley": ["brentfordFCEthanBrierley"],
  "Dutch winger": ["yorkshirePostDutchwinger"],
  "Ex-Huddersfield Town forward": ["yorkshirePostExHuddersfieldTownforward"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Huddersfield Town · 2026/27 Season`,
  heroLede: `Transfer window active. Huddersfield Town preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
