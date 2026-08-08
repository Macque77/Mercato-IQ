/* ============================================================
   MERCATO IQ · CLUB DATA · DONCASTER ROVERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Doncaster Rovers", mono: "DR", slug: "doncaster-rovers",
  primary: "#C8102E", primaryBright: "#FF6B7A", primaryDeep: "#6E0A1A",
  primaryRgb: "200,16,46",
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
  queries: ["doncaster-rovers transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Alfie May", sub:"ST", club:"Huddersfield Town", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Deal agreed per credible reporting, pending formal announcement."}
];
const CONFIRMED_OUT = [
  {name:"Owen Bailey", sub:"Unknown · Unknown · Unknown", club:"Doncaster Rovers", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed move to League Two outfit"}
];
const INCOMING = [
  {name:"Jordan Thomas", sub:"Unknown · Unknown · Unknown", club:"Cheltenham Town", pos:"Unknown", report:"Agrees move from Cheltenham Town", src:"On-page rumour", tier:3, fee:"Unknown", truth:75, prob:75, light:"g", trend:"down", note:"On-page entry retained; no fresh snippet confirmation", lastSeen:"2026-08-08T04:21:32Z", baseProb:75}
];
const OUTGOING = [
  {name:"Owen Bailey", sub:"Unknown · Unknown · Winger", club:"Doncaster Rovers", pos:"Winger", report:"Completed move to League Two outfit", src:"Unknown", tier:3, fee:"Unknown", truth:95, prob:95, light:"g", trend:"up", note:"Winger completed move to League Two club", lastSeen:"2026-08-07T14:38:27Z", baseProb:95}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-alfiemay": {l:"Related news search: Alfie May", u:"https://news.google.com/search?q=Doncaster%20Rovers%20Alfie%20May%20transfer&hl=en-GB&gl=GB"},
  "src-benwignall": {l:"Ben Wignall", u:"https://news.google.com/search?q=Ben%20Wignall%20Doncaster%20Rovers%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  "gnews-owenbailey": {l:"Related news search: Owen Bailey", u:"https://news.google.com/search?q=Doncaster%20Rovers%20Owen%20Bailey%20transfer&hl=en-GB&gl=GB"},
  doncasterFreePressLukeMolyneux: {l:"Doncaster Free Press", u:"https://news.google.com/rss/articles/CBMigwJBVV95cUxQWmVaYUd5Q2ZLX24yTWNPRzRzRi1SOEZfdVM3aTdEUlNXNzNUMFE4Q2U2UDRBUGVrVGtXNTh5T05mWEpSV01TVFBwbXdmX05CczB1eGF0bzcyQVZ1NVhZVkJHQUUyd2VFYXI1LUhXUGhNenRmRXc4VTRSaU1OOTVMZDZ5ZjhiWjFUaWt5NnNFWW1kME9xTUFuX2c4QzZZeVZPaV90MTlBVVBjby1TcFVlTFNacUw1NTRqMjBWaG5aYlcyeC1BM2xTRjJOX2dKcm42andHbFg1WDEweERiMHZBbWsxWk9NTG4xdEVETHBMTDdaT2lPV2hiMG1ndVppMVJ3M1Z3"},
  yorkshirePostOwenBailey: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMi8wFBVV95cUxPNjlWNHFvTy1CODRDVlE5VU9oUWY0WW1SZXNfUmM0bF83RlozTGJwbmZrQzJMeVlwNXg3SzVOMGVYNTdjUFZtR0RvOVR1NUtsX2tVLW9ZZzlMelB3dnUxcEFRd0Z2Z1BXTVYxX012aXVfVXNOMGhnUjkxVVlFdkJGWHB3LTJXTUJiZUFMX3d5UENHaFdpb20tN0pDY2I0alpCQnpGc1BMbGsyY1pxT1M0c0lqa01YVGpnY3VlUlB2Mmlhc0FWM3RHd2ZmUUxIaFpYb2Y4V1FfY081ZTJYMzRDMldZZmRjYUZaeHpLaVhTekZRRVU"},
  gloucestershireLiveJordanThomas: {l:"Gloucestershire Live", u:"https://news.google.com/rss/articles/CBMiswFBVV95cUxQT1pxVUx3b3NYU1dQMHJ4YnR0QlI4dkU4alZSZGhQS2d5dkxpQ3U3UldUUDMtdXNBME83MldWNzM1NUEyZU9GQnEtU184TGthemVGSDB6cXZfUkpVUlVXSUE2cHF4T29KM0pldndLdW9QQjBRbVhIWWRpVlhpRjk0MnViVVZtZXJUam9CWkdfVEdOQU1wT1Z0eFBlYmJiUndNZWhhWVZ4R0FXa3c4WnlhT0lBVdIBuAFBVV95cUxNZVAwU0ZQR2VBM1BPNzdzeWxjalh5WU55Tmlhak9sajM5S2JyOFljQ1NPbEIxNHNDQ2lzWHBiQjY0UVVSdGc3Zmt3SXBQQTdBbmVYNEpkQnZUdmtlQTRQdlU3S1V4VUx4WlVkc24xOWF5Nm1HRGhPRWdsZmhQR0gzOTlrQmM0YXd0RWNISER6WWFtMldCWTVMTWZvR25rWW5SamtPWXpmNF9MMEpjS1BRVTZWZWF3N2hq"},
  doncasterFreePressLukeMolyneux1: {l:"Doncaster Free Press", u:"https://news.google.com/rss/articles/CBMigwJBVV95cUxQWmVaYUd5Q2ZLX24yTWNPRzRzRi1SOEZfdUM3aTdEUlNXNzNUMFE4Q2U2UDRBUGVrVGtXNTh5T05mWEpSV01TVFBwbXdmX05CczB1eGF0bzcyQVZ1NVhZVkJHQUUyd2VFYXI1LUhXUGhNenRmRXc4VTRSaU1OOTVMZDZ5ZjhiWjFUaWt5NnNFWW1kME9xTUFuX2c4QzZZeVZPaV90MTlBVVBjby1TcFVlTFNacUw1NTRqMjBWaG5aYlcyeC1BM2xTRjJOX2dKcm42aldHbFg1WDEweERiMHZBbWsxWk9NTG4xdEVETHBMTDdaT2lPV2hiMG1ndVppMVJ3M1Z3"},
  gloucestershireLiveJordanThomas1: {l:"Gloucestershire Live", u:"https://news.google.com/rss/articles/CBMiswFBVV95cUxQT1pxVUx3b3NYU1dQMHJ4YnR0QlI4dkU4alZSZGhQS2d5dkxpQ3U3UldUUDMtdXNBME83MldWNzM1NUEyZU9GQnEtU084TGthemVGSDB6cXZfUkpVUlVXSUE2cHF4T29KM0pldndLdW9QQjBRbVhIWWRpVlhpRjk0MnViVVZtZXJUam9CWkdfVEdOQU1wT1Z0eFBlYmJiUndNZWhhWVZ4R0FXa3c4WnlhT0lBVdIBuAFBVV95cUxNZVAwU0ZQR2VBM1BPNzdzeWxjalh5WU55Tmlhak9sajM5S2JyOFljQ1NPbEIxNHNDQ2lzWHBiQjY0UVVSdGc3Zkt3SXBQQTdBbmVYNEpkQnZUdmtlQTRQdlU3S1V4VUx4WlVkc24xOWF5Nm1HRGhPRWdsZmhQR0gzOTlrQmM0YXd0RWNISER6WWFtMldCWTVMTWZvR25rWW5SamtPWXpmNF9MMEpjS1BRVTZWZWF3N2hq?oc=5"},
  doncasterFreePressLukeMolyneux2: {l:"Doncaster Free Press", u:"https://news.google.com/rss/articles/CBMigwJBVV95cUxQWmVaYUd5Q2ZLX24yTWNPRzRzRi1SOEZfdVM3aTdEUlNXNzNUMFE4Q2U2UDRBUGVrVGtXNTh5T05mWEpSV01TVFBwbXdmX05CczB1eGF0bzcyQVZ1NVhZVkJHQUUyd2VFYXI1LUhXUGhNenRmRXc4VTRSaU1OOTVMZDZ5ZjhiWjFUaWt5NnNFWW1kME9xTUFuX2c4QzZZeVZPaV90MTlBVVBjby1TcFVlTFNacUw1NTRqMjBWaG5aYlcyeC1BM2xTRjJOX2dKcm42aldHbFg1WDEweERiMHZBbWsxWk9NTG4xdEVETHBMTDdaT2lPV2hiMG1ndVppMVJ3M1Z3?oc=5"},
  yorkshirePostOwenBailey1: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMi6gFBVV95cUxQSTUzLVZUcVMxTHAyaFozUFJwZC02ZnhSWXNYdndxbkcyb0ZzWU5VM09IWWNoakhoS0Z3TVFRd2Zma081Ukk2T0l4NThYNjFGTWpaZTFsRTRLdmFFMjlXZVhJOS1kQVdMcEpRN05ldkU3UnJGNW91VG1JNDlwUmViREVDNkE1cmEzeHNtVG1HeGxxc25sWDA1VjRQLWFUV1IxTFBVSXVkOGxoUlNZd1JFazBrR2tyRlhSNG4tcGQ4RzdFVzFsMjRIdmh2YzY4cnJQcGE1MWZvT2NGMWF0UkptbGRQc2J1U05JTFE?oc=5"},
  gloucestershireLiveJordanThomas2: {l:"Gloucestershire Live", u:"https://news.google.com/rss/articles/CBMiswFBVV95cUxQT1pxVUx3b3NYU1dQMHJ4YnR0QlI4dkU4alZSZGhQS2d5dkxpQ3U3UldUUDMtdXNBME83MldWNzM1NUEyZU9GQnEtU184TGthemVGSDB6cXZfUkpVUlVXSUE2cHF4T29KM0pldndLdW9QQjBRbVhIWWRpVlhpRjk0MnViVVZtZXJUam9CWkdfVEdOQU1wT1Z0eFBlYmJiUndNZWhhWVZ4R0FXa3c4WnlhT0lBVdIBuAFBVV95cUxNZVAwU0ZQR2VBM1BPNzdzeWxjalh5WU55Tmlhak9sajM5S2JyOFljQ1NPbEIxNHNDQ2lzWHBiQjY0UVVSdGc3Zkt3SXBQQTdBbmVYNEpkQnZUdmtlQTRQdlU3S1V4VUx4WlVkc24xOWF5Nm1HRGhPRWdsZmhQR0gzOTlrQmM0YXd0RWNISER6WWFtMldCWTVMTWZvR25rWW5SamtPWXpmNF9MMEpjS1BRVTZWZWF3N2hq"},
  doncasterFreePressLukeMolyneux3: {l:"Doncaster Free Press", u:"https://news.google.com/rss/articles/CBMi-gFBVV95cUxOaW54V3JvaG5wNy1NRmo5YjNTV19xUGdqWXU1Mm04eXJNR0tpU2tmaTdWMURiXzFSZEg0YnAzOXo4cnFYWGM2MHZXbE1CMW5yRUNBYzVEckx6cnhJRTJNUWtlTnFaQVI2T0lyTW91aXJYeVdWZ2VyQm9scllPeWRFb2lNRHR1YlVCNUtXbWswa2FkWlJ2S1NESG9DcGRLX2xwSm1CVlVEcGl1UEFqZUU0a1ZvbER6c2tXQWRDaGhIaE9hR25hOG85eFZBbjY3YUZOQklPMzhBVGhsOHBRYnd2c2czWWd5RXUtaU4tQWQ5YUF5OU9ZTWF2ODRB"},
  doncasterFreePressLukeMolyneux4: {l:"Doncaster Free Press", u:"https://news.google.com/rss/articles/CBMi7gFBVV95cUxQcXEwSVQwSFZIQ3ExRzgzNDRlTnNoRlk1d0JEWkhtRjF2N2ZuNmJvaXFqQy1tRmFWdV9JVWlWRWNydGdHb3d3TTBJMUFSTGUwY0llRWN4cTBaNjJHTU5sTmsweGtDZGpsTzd6dFpxb1VQOEdmSXdXeXFLTGUwN3d6TEpTRHd1MnRzbFJrdEwzTmE2X1QtblRJVzJBX2xhV3NIRENwSFVqVkVRcDJYdldVWkp2Z2NQMTVoaDB5S1ByR3FuVGFGc3Y4M19PcVVlRmZhSGppNzI5NDFGSExuVC1tcGs0Z1ViTDg5UHJqekRn"},
  doncasterFreePressGlennMiddleton: {l:"Doncaster Free Press", u:"https://news.google.com/rss/articles/CBMi9wFBVV95cUxOb1RVQmJ0cEdRcVdKaUdjTml2OGJTR1BFcWdUd1dudjl6bDVXVlpUdTFXUnFMUTQwWGpFRzNIZk9zSDUtZ0ludXhoNWJPSURtOTZ4YWZCbDFxQ3N0WF85VEtUOWs0Z1FFWVktcjBrcER0Ukl6VW5RdlptUjdxQzFiLW5ic1g3M25wUy1vQkZSVjVRR081WUhXWmlTTXdrb0ZFMVc3SEVEN2gwTUhSNjlsRDZVNDJ3dnp4OVJVdnhBNkY3dTc4S09QZ1FiUV9pUElCMWRSY3o3VGJSMklycDc1UU82YVNFR0t6cUJkY3ZBOTRLMGw2RjNV"}};

const LINKMAP = {
  "Alfie May": ["gnews-alfiemay"],
  "Luke Molyneux": ["src-benwignall", "flw", "doncasterFreePressLukeMolyneux", "doncasterFreePressLukeMolyneux1", "doncasterFreePressLukeMolyneux2", "doncasterFreePressLukeMolyneux3", "doncasterFreePressLukeMolyneux4"],
  "Owen Bailey": ["gnews-owenbailey", "yorkshirePostOwenBailey", "yorkshirePostOwenBailey1"],
  "Jordan Thomas": ["gloucestershireLiveJordanThomas", "gloucestershireLiveJordanThomas1", "gloucestershireLiveJordanThomas2"],
  "Glenn Middleton": ["doncasterFreePressGlennMiddleton"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Doncaster Rovers · 2026/27 Season`,
  heroLede: `Transfer window active. Doncaster Rovers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
