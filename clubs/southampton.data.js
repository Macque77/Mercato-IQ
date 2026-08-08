/* ============================================================
   MERCATO IQ · CLUB DATA · SOUTHAMPTON · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Southampton", mono: "S", slug: "southampton",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["England","Championship"]
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
  queries: ["southampton transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Cyle Larin", sub:"ST", club:"Mallorca", pos:"ST", fee:"£3.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent signing."},
  {name:"Daniel Peretz", sub:"GK", club:"Bayern Munich", pos:"GK", fee:"£6.05m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent signing."},
  {name:"Lewis Dobbin", sub:"23 · FW/W", club:"Aston Villa", pos:"FW", fee:"£9m + add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"The Athletic reports a medical already underway, effectively done, just awaiting the announcement."},
  {name:"Aaron Ramsdale", sub:"GK · England", club:"Newcastle United", pos:"GK", fee:"Free (loan return)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Newcastle declined to make his loan permanent after failing to qualify for Europe, so he returns to Southampton on a free."}
];
const CONFIRMED_OUT = [
  {name:"Jay Robinson", sub:"unknown · unknown · unknown", club:"AC Monza", pos:"unknown", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed loan switch to AC Monza"}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Shea Charles", sub:"20 · England · M", club:"Southampton", pos:"M", report:"Premier League move imminent; told it is 'when, not if'", src:"BBC", tier:2, fee:"~£30m valuation", truth:85, prob:80, light:"g", trend:"flat", note:"Exit nears", lastSeen:"2026-08-08T16:04:57Z", baseProb:80},
  {name:"Jay Robinson", sub:"21 · England · D", club:"Southampton", pos:"D", report:"Completed loan switch to AC Monza", src:"Southampton FC Official Site", tier:2, fee:"Loan", truth:100, prob:100, light:"g", trend:"up", note:"19-year-old winger expected to move to Italian club Monza", lastSeen:"2026-08-08T16:04:57Z", baseProb:100, dead:true, deadReason:"Loan completed to AC Monza; moved from rumour to outgoing"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-cylelarin": {l:"Related news search: Cyle Larin", u:"https://news.google.com/search?q=Southampton%20Cyle%20Larin%20transfer&hl=en-GB&gl=GB"},
  "gnews-danielperetz": {l:"Related news search: Daniel Peretz", u:"https://news.google.com/search?q=Southampton%20Daniel%20Peretz%20transfer&hl=en-GB&gl=GB"},
  "gnews-lewisdobbin": {l:"Related news search: Lewis Dobbin", u:"https://news.google.com/search?q=Southampton%20Lewis%20Dobbin%20transfer&hl=en-GB&gl=GB"},
  beinRamsdale: {l:"beIN Sports · Ramsdale", u:"https://www.beinsports.com/en-us/soccer/premier-league/articles/newcastle-let-ramsdale-return-to-southampton-as-schar-signs-new-contract-2026-06-02"},
  yorkshireeveningpostCharles: {l:"Yorkshire Evening Post · Charles", u:"https://www.yorkshireeveningpost.co.uk/sport/football/leeds-united/leeds-united-transfers-shea-charles-southampton-8815706"},
  bBCLoueyBenFarhat: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE1BdXFCT2hnR0ZrdGRkTHNyUzFBanl2c25Dblh3LWR4U280V2p0UzZjOV9OQlMtcHdaVGFvRjZKd3BPX3lySk9WZnZPdmYxQ0J3dV9lZy1GR2NTR3ozcExZSnVaeTNOek5WclE"},
  theLeaguePaperBBCSheaCharles: {l:"The League Paper / BBC", u:"https://news.google.com/rss/articles/CBMiiwJBVV95cUxPUnFaNUxQVGxuQVBfZEZRUVZmaDlieU5HLTFab0VveVp5bWNfZUVTSXVRbFVGd0ZLMFFlSzZfWnFkcFl1TlR5bEZzWGJBNThYWm1lcFN6b1JiZWpfTHhpQkpIa0k4b29yQWN3eVRHRE1NNThpZU5uZ2ZJd0xFWl9JRTh3SzNfQkFYTHRlWjBlMnZnWXpKcnJkNkRPMzlnMDNNVUR0X0k2VkJwZkNmdW9zQ1Vpbl9abkZWcWREakNrRHVTMDVDODkxTTFNUF8yRU54MVVYV1JsTHB5UlFnd3pmQ2RVaVVmNWV3UXZjNzFyaXIxT2RaVjFtYThaa3dwVXB0VDB0M2VJTld4UTg"},
  footballItaliaJayRobinson: {l:"Football Italia", u:"https://news.google.com/rss/articles/CBMigAFBVV95cUxPdFpuT19WaXhCV2dxZXYzbTBhS2VLeG8zOE5PdEZETWRYZ1Z6dlpsWVVJQVVKMTFIbnVwUFBTbFRIVV9ydjZ0d2pXZUJabHdQSDRSNUlGOFhhVjNfZnhFQW1wTXJkVkRBZUo5VTNXWGNUVFdZaXlWWk1uaEt2UVlfRdIBhgFBVV95cUxNQTFkYVM1Rk9HeFR4amFScEpNZHNsQTNpWmM3SEdDZGRaYVlFdEdpZzVtZWl1WFdxQ1R6WlhfNThSdmxUaDdwNFYtUU5CTjVfVDVTQUlod0ZCMmxPaE50UWhBSXJUSXpDNXp3VWVWRk9qaWtTRnpNdUI5RnBXSHhWWkVlNUk5Zw"},
  bBCSportLoueyBenFarhat: {l:"BBC Sport", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBoNl9CeWdMZTRsQ1JLRUFYMkI3bnBzd0tPR3ZBZWpVeHdIYWltYjFZazJVazhmbVNUYzhsMk9RTzFvcDY1NWNlMHk1Z1ktMC10bU5jbGE3dkZpeEx2VmtYMVlDSXZEc2c"},
  southamptonFCOfficialJayRobinson: {l:"Southampton FC Official", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxPNm9iWExaVTRQVGV6Y0VvOXFwUzVwUjdEazFuWVJNbWw2dnlsbUFHeWZJc2habXZMLURNSXNSSHdWbUIxYUVHWkVHekRDbGRzdVZIT2dRVV9YY2tiZWMtMzZCb19KLURvem1wTl9yYmlrVWtoY2JjcWRHUE9rdUtucGMxbXc5dGhwakZZVGl3"}};

const LINKMAP = {
  "Cyle Larin": ["gnews-cylelarin"],
  "Daniel Peretz": ["gnews-danielperetz"],
  "Lewis Dobbin": ["gnews-lewisdobbin"],
  "Aaron Ramsdale": ["beinRamsdale"],
  "Shea Charles": ["yorkshireeveningpostCharles", "theLeaguePaperBBCSheaCharles", "bBCSportLoueyBenFarhat"],
  "Louey Ben Farhat": ["bBCLoueyBenFarhat", "bBCSportLoueyBenFarhat"],
  "Jay Robinson": ["footballItaliaJayRobinson", "southamptonFCOfficialJayRobinson"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Southampton · 2026/27 Season`,
  heroLede: `Transfer window active. Southampton preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};