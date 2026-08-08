/* ============================================================
   MERCATO IQ · CLUB DATA · LEYTON ORIENT · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Leyton Orient", mono: "LO", slug: "leyton-orient",
  primary: "#DA020E", primaryBright: "#FF6259", primaryDeep: "#7A0108",
  primaryRgb: "218,2,14",
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
  queries: ["leyton-orient transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Joseph Olowu", sub:"Centre-back · Stockport County", club:"Stockport County", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Stockport County"},
  {name:"Tony Springett", sub:"Goalkeeper · Norwich City", club:"Norwich City", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joined after leaving Norwich City"},
  {name:"Jaze Kabia", sub:"Forward", club:"Cork City", pos:"Forward", fee:"Club record", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club record signing"},
  {name:"Somto Boniface", sub:"Unknown · Unknown · Unknown", club:"Ipswich Town", pos:"Unknown", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan deal from Ipswich Town"}
];
const CONFIRMED_OUT = [
  {name:"Dom Ballard", sub:"Striker · Bristol City", club:"Bristol City", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joined Bristol City from Leyton Orient"}
];
const INCOMING = [
  {name:"Joseph Olowu", sub:"centre-back · position confirmed", club:"Stockport County", pos:"CB", report:"Leyton Orient sign centre-back from Stockport County", src:"BBC", tier:2, fee:"undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-08T07:40:33Z", baseProb:100},
  {name:"Tony Springett", sub:"goalkeeper · Norwich City departure", club:"Norwich City", pos:"GK", report:"Tony Springett joins Leyton Orient after leaving Norwich City", src:"BBC", tier:2, fee:"undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-08T07:40:33Z", baseProb:100},
  {name:"Jaze Kabia", sub:"Douglas native · position unknown", club:"Cork City", pos:"unknown", report:"Leyton Orient sign Jaze Kabia in club-record deal", src:"BBC, RTE.ie, Echo Live", tier:2, fee:"Club record (undisclosed)", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed club-record signing", lastSeen:"2026-08-08T07:40:33Z", baseProb:100},
  {name:"Somto Boniface", sub:"Ipswich Town · Defender", club:"Ipswich Town", pos:"Defender", report:"Ipswich defender signs loan deal with Leyton Orient", src:"BBC", tier:2, fee:"Loan", truth:95, prob:95, light:"g", trend:"flat", note:"Loan signing confirmed", lastSeen:"2026-08-08T10:03:40Z", baseProb:95}
];
const OUTGOING = [
  {name:"Dom Ballard", sub:"striker · Leyton Orient departure", club:"Bristol City", pos:"ST", report:"Bristol City closing in on Dom Ballard signing with Leyton Orient striker at Robins HPC", src:"Bristol Live", tier:2, fee:"undisclosed", truth:90, prob:85, light:"g", trend:"up", note:"Advanced talks; player at medical", lastSeen:"2026-08-08T07:40:33Z", baseProb:85}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-alfiegilchrist": {l:"Related news search: Alfie Gilchrist", u:"https://news.google.com/search?q=Leyton%20Orient%20Alfie%20Gilchrist%20transfer&hl=en-GB&gl=GB"},
  "gnews-owendale": {l:"Related news search: Owen Dale", u:"https://news.google.com/search?q=Leyton%20Orient%20Owen%20Dale%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  bBCJosephOlowu: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9IYncxWW81SUpON0NLdXRoMDBDUU80M05ybElBRlJUd01yZkhacDdRSExfaDlBMTNOY041Z283bjBrdDZ1SXRFSkRIa3R4bmZBU1hIUXpHczlqSEpyS0szMlY0TDFWTkE"},
  bBCTonySpringett: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE81RWh2WVh2ZUJZX0Rpa0dyNlJjS1lPWVZfRWxKa0haR2V4bTA5dVByXzhNUHlSb3ZKaUU3MzFtc2sxamNyQS1LeEtMOVFqc2RFcnNwaXVsWXdkVGpCUHVLSDNzaE1xeUk"},
  bBCTariqAlSadi: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9ub3VsTEdiM0xtOHl0RmJrc21tdkh2ZHNWRTE0Sm9yZUt0U2JqQ3RSUl9pb0JlQ0hTMHEyY09ub09LdFdIdkJ1a0J5NmQ3OTF4OTRWNmpuMHZxVFBDTnQ5UHpzQVZwYWs"},
  bBCDomBallard: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE53WVBZeEtkcnNtYWlsc3hyUWU0RDBNRG5TQnVDX3RCaHpxLUk4cWctbTVYNmM3OEhsVDlBOGFyTzRRbE9IUmlEaldsbWNqVEotOVFsTEZ2bUN0RG1CNUV1T2doYmtOc095T1E"},
  irishExaminerJazeKabia: {l:"Irish Examiner", u:"https://news.google.com/rss/articles/CBMibkFVX3lxTE9jNlpNQlJsMWF4YWI4aHZQXzBlUURTbEFGSlZkWmhyVFdoMDNPMzZrSGZfNjBjaUJZWXZfa1RqRWgtSTUzU1hMaTE3N05LM2E0STBCbmoyd1FyUWdpOVpJVXZETHRIXzN6cEFpWlJR"},
  bBCTariqAlSadi1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9ub3VsTEdiM0xtOHl0RmJrc21tdkh2ZHNWRTU0Sm9yZUt0U2JqQ3RSUl9pb0JlQ0hTMHEyY09ub09LdFdIdkJ1a0J5NmQ3OTF4OTRWNmpuMHZxVFBDTnQ5UHpzQVZwYWs"},
  bristolLiveDomBallard: {l:"Bristol Live", u:"https://news.google.com/rss/articles/CBMiogFBVV95cUxNMmhzeGN2YTk1ZlhGN3FtTjlNN2tHQVlfVEw5VVJlZmY1ZEVwNTBrY25tS3VFcUhHOENrYXRWc0dmdVNDMFJXTDlTUmpvbnczcjRLbi1YOUdxQ1VkSEZ3NTZaZWtTZVBlUE5oUzRyeWxBVktXR3Z2V0RRTkVQMnp1TUl3SU9vcE5Rb2tVNGNlWTJVV2pBVmZtSXYzN0wzMm9XYWc"},
  bBCTariqAlSadi2: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE1keGFKa2tpSFlQU1FXT3lfRENDUG9SQVU3U1FwVDBNVDI2eTViZDlIUGlkeTNweUpwbjVsNm41LWJ2YU9mMS14RGxIQmZJLUVRMFZFZjg0cUdSa0U3TzZJMExsTU04V3ZBZnc"},
  bBCJosephOlowu1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9IYncxWW81SUpON0NLdXRoMDBDUU80M05ybElBRlJUd01yZkhacDdRSExfaDlBMTNOY041Z243bjBrdDZ1SXRFSkRIa3R4bmZBU1hIUXpHczlqSEpyS0szMlY0TDFWTkE"},
  rTEJazeKabia: {l:"RTE", u:"https://news.google.com/rss/articles/CBMiogFBVV95cUxPT1RPYzh0dHowdk5TVUNIWmdqdmRzQzRyY1U0VWQ4S3VvOXpnbFh0VV9RQjFjOGRtbTEzUFdmMi1iTnhuZUc0bVg2VUlkaXlGQjF4TlIxWndUNzBkTWdGaDBRMkFmSFBUbnRFMkJSMWhEbGh0V01KX2lJV0hBRVZlRGppNE5ZdElaZWFtbVktRmU0Q19SRkhWWWJNX1RfUF9fVXc"},
  bBCTariqAlSadi3: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE1keGFKa2tpSFlQU1FXT3lfRENDUG9SQUU3U1FwVDBNVDI2eTViZDlIUGlkeTNweUpwbjVsNm41LWJ2YU9mMS14RGxIQmZJLUVRMFZFZjg0cUdSa0U3TzZJMExsTU04V3ZBZnc"},
  bBCJosephOlowu2: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9IYncxWW81SUpON0NLdXRoMDBDUU80M05ybElBRlJUd01yZkhacDdRSExfaDlBMTNOY081Z243bjBrdDZ1SXRFSkRIa3R4bmZBU1hIUXpHczlqSEpyS0szMlY0TDFWTkE"},
  bBCSomtoBoniface: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1hX3RDaEotZGxheWZhdUNKM2JhZjdNSm1ibl9HRzk5eUZMMFllbktlLXcxVUdyREtmQmJnemFUQVJiMC1JOFpBQVdhMWxHN3cxVWZHb1BHNm04a05zcTNCSVdEY28tYkU"},
  bBCJosephOlowu3: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9IYncxWW81SUpON0NLdXRoMDBDUU80M05ybElBRlJUd01yZkhacDdRSExfaDlBMTNOY001Z283bjBrdDZ1SXRFSkRIa3R4bmZBU1hIUXpHczlqSEpyS0szMlY0TDFWTkE"},
  echoLiveJazeKabia: {l:"Echo Live", u:"https://news.google.com/rss/articles/CBMiYkFVX3lxTE9sRG16VVhKd1JXclpkRXZ6TTFCaTRqbTZxbG5sWmFMXzNoemlGOVpFbGJBeGhZNjBMbExBTUdJLXFwMDhPRFEtY1IzLVp0NDFpZHozTkZaeFFfM3J2ZGEyTWR3"},
  unknownTonySpringett: {l:"Unknown", u:"Unknown"}};

const LINKMAP = {
  "Alfie Gilchrist": ["gnews-alfiegilchrist"],
  "Owen Dale": ["gnews-owendale"],
  "Dom Ballard": ["flw", "bBCDomBallard", "bristolLiveDomBallard"],
  "Joseph Olowu": ["bBCJosephOlowu", "bBCJosephOlowu1", "bBCJosephOlowu2", "bBCJosephOlowu3"],
  "Tony Springett": ["bBCTonySpringett", "unknownTonySpringett"],
  "Tariq Al Sadi": ["bBCTariqAlSadi", "bBCTariqAlSadi1", "bBCTariqAlSadi2", "bBCTariqAlSadi3"],
  "Jaze Kabia": ["irishExaminerJazeKabia", "rTEJazeKabia", "echoLiveJazeKabia"],
  "Somto Boniface": ["bBCSomtoBoniface"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Leyton Orient · 2026/27 Season`,
  heroLede: `Transfer window active. Leyton Orient preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
