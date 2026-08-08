/* ============================================================
   MERCATO IQ · CLUB DATA · QUEENS PARK RANGERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Queens Park Rangers", mono: "QPR", slug: "qpr",
  primary: "#1E3A8A", primaryBright: "#6FA8FF", primaryDeep: "#0F1F4A",
  primaryRgb: "30,58,138",
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
  queries: ["qpr transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Glen Kamara", sub:"MF · Finland", club:"Rennes", pos:"MF", fee:"Loan (option to buy)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"BBC confirmation corroborated by prior Fabrizio Romano reporting on the paperwork stage, as solid as EFL transfer news gets."},
  {name:"Justin Obikwu", sub:"", club:"Coventry City", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent deal from Coventry City"},
  {name:"Richard Kone", sub:"", club:"Wycombe Wanderers", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joined Queens Park Rangers"},
  {name:"Isaac Hayden", sub:"Midfielder · England · MF", club:"Newcastle United", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed by Queens Park Rangers"},
  {name:"Rhys Norrington-Davies", sub:"Defender · Wales · LB", club:"Fulham", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed by Queens Park Rangers"},
  {name:"Koki Saito", sub:"Forward · Japan · FW", club:"Urawa Red Diamonds", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed by Queens Park Rangers"},
  {name:"Nicolas Madsen", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed transfer"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Justin Obikwu", sub:"Unknown · Unknown · Unknown", club:"Coventry City", pos:"Unknown", report:"Coventry City youngster Justin Obikwu joins Queens Park Rangers in permanent deal", src:"The Coventry Observer", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Permanent deal confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Richard Kone", sub:"Unknown · Unknown · Unknown", club:"Wycombe Wanderers", pos:"Unknown", report:"Richard Kone joins Queens Park Rangers", src:"Wycombe Wanderers Football Club", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Nicolas Madsen", sub:"", club:"", pos:"", report:"Confirmed transfer to Queens Park Rangers", src:"OneFootball", tier:3, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100},
  {name:"Isaac Hayden", sub:"", club:"", pos:"", report:"Signed by Queens Park Rangers", src:"BBC", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100},
  {name:"Rhys Norrington-Davies", sub:"", club:"", pos:"", report:"Signed by Queens Park Rangers", src:"BBC", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100},
  {name:"Koki Saito", sub:"", club:"", pos:"", report:"Signed by Queens Park Rangers", src:"BBC", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-glenkamara": {l:"Related news search: Glen Kamara", u:"https://news.google.com/search?q=Queens%20Park%20Rangers%20Glen%20Kamara%20transfer&hl=en-GB&gl=GB"},
  oneFootballNicolasMadsen: {l:"OneFootball", u:"https://news.google.com/rss/articles/CBMiWEFVX3lxTFBrNUF2NGNTUEFSQk9iak51LUwtZU44QlVGcE53NzRNTzlOd0ExZ1NNdkI0VmtYUjIzN3JweER0LURjOU9LWUtxeGhyNVA4WHpCejBvS2psb0s?oc=5"},
  theCoventryObserverJustinObikwu: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMixwFBVV95cUxOWkh1UExzUFhjS2tHcXMyOWZqOHMtTkZwTjZCR0NadjRwZW9Sb240a3ZJQXFZVzdIMnhVVHgtZ0J2TElYaDExS2RZclQ0bWdEVE94cW5jbEtPMmxpZllOWnh4b2M3RmZMV3VpUnJuWWRZNnpmUndCX1pYbzJ0SVRrc3p6QVZ6cG14NFFVckFzNUE0aEZRdFdaUzlDemtpT2xxdE5HVGNHZlozM2tpWW9iSDNWb1MzUVBoOENZbFFXVjBtcjJaUHJv?oc=5"},
  bBCIsaacHayden: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9kSXc0NjE5M2ZkTkJBcm5IRFd6d2xWYmFUQUNpUFV2eFFxT2ZvV0wzcUhTanNHNlh2bGdDVXh3aThkaEl1UWEwdTk5TENvMXJyYlJ2TmJobDlIU05TYmdKZndrMEpySzA?oc=5"},
  wycombeWanderersFootballClubRichardKone: {l:"Wycombe Wanderers Football Club", u:"https://news.google.com/rss/articles/CBMihwFBVV95cUxOajBzem1GZzhPOUtJZmYyQUo3c1RvaU9YcmVoWlFUSm5NYjlFNVVVTjNoaWVhckZORy1lWEVRdzVuQnluVm9KQm9JVTA0SkFFRWtVRTlMLThmMjBPcDJ1anBfYkZpMXozTXVIeWZkdHNWMF9NYkJmSGN3cnVZNlp4Mi1KSGZzZWc?oc=5"},
  theCoventryObserverJustinObikwu1: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMixwFBVV95cUxOWkh1UExzUFhjS2tHcXMyOWZqOHMtTkZwTjZCR0NadjRwZW9Sb200a3ZJQXFZVzdIMnhVVHgtZ0J2TElYaDExS2RZclQ0bWdEVE94cW5jbEtPMmxpZllOWnh4b2M3RmZMV3VpUnJuWWRZNnpmUndCX1pYbzJ0SVRrc3p6QVZ6cG14NFFVckFzNUE0aEZRdFdaUzlDemtpT2xxdE5HVGNHZlozM2tpWW9iSDNWb1MzUVBoOENZbFFXVjBtcjJaUHJv?oc=5"},
  theCoventryObserverJustinObikwu2: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMixwFBVV95cUxOWkh1UExzUFhjS2tHcXMyOWZqOHMtTkZwTjZCR0NadjRwZW9Sb200a3ZJQXFZVzdIMnhVVHgtZ0J2TElYaDExS2RZclQ0bWdEVE94cW5jbEtPMmxpZllOWnh4b2M3RmZMV3VpUnJuWWRZNnpmUndCX1pYbzJ0SVRrc3p6QVZ6cG14NFFVckFzNUE0aEZRdFdaUzlDemtpT2xxdE5HVGNHZlozM2tpWW9iSDNWb1MzUVBoOENZbFFXVjBtcjJaUHJv"},
  wycombeWanderersFootballClubRichardKone1: {l:"Wycombe Wanderers Football Club", u:"https://news.google.com/rss/articles/CBMihwFBVV95cUxOajBzem1GZzhPOUtJZmYyQUo3c1RvaU9YcmVoWlFUSm5NYjlFNVVVTjNoaWVhckZORy1lWEVRdzVuQnluVm9KQm9JVTA0SkFFRWtVRTlMLThmMjBPcDJ1anBfYkZpMXozTXVIeWZkdHNWMF9NYkJmSGN3cnVZNlp4Mi1KSGZzZWc"},
  oneFootballNicolasMadsen1: {l:"OneFootball", u:"https://news.google.com/rss/articles/CBMiWEFVX3lxTFBrNUF2NGNTUEFSQk9iak51LUwtZU44QlVGcE53NzRNTzlOd0ExZ1NNdkI0VmtYUjIzN3JweER0LURjOU9LWUtxeGhyNVA4WHpCejBvS2psb0s"},
  bBCIsaacHayden1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9kSXc0NjE5M2ZkTkJBcm5IRFd6d2xWYmFUQUNpUFV2eFFxT2ZvV0wzcUhTanNHNlh2bGdDVXh3aThkaEl1UWEwdTk5TENvMXJyYlJ2TmJobDlIU05TYmdKZndrMEpySzA"},
  theCoventryObserverJustinObikwu3: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMixwFBVV95cUxOWkh1UExzUFhjS2tHcXMyOWZqOHMtTkZwTjZCR0NadjRwZW9Sb280a3ZJQXFZVzdIMnhVVHgtZ0J2TElYaDExS2RZclQ0bWdEVE94cW5jbEtPMmxpZllOWnh4b2M3RmZMV3VpUnJuWWRZNnpmUndCX1pYbzJ0SVRrd3p6QVZ6cG14NFFVckFzNUE0aEZRdFdaUzlDemtpT2xxdE5HVGNHZlozM2tpWW9iSDNWb1MzUVBoOENZbFFXVjBtcjJaUHJv"}};

const LINKMAP = {
  "Glen Kamara": ["gnews-glenkamara"],
  "Nicolas Madsen": ["oneFootballNicolasMadsen", "oneFootballNicolasMadsen1"],
  "Justin Obikwu": ["theCoventryObserverJustinObikwu", "theCoventryObserverJustinObikwu1", "theCoventryObserverJustinObikwu2", "theCoventryObserverJustinObikwu3"],
  "Isaac Hayden": ["bBCIsaacHayden", "bBCIsaacHayden1"],
  "Rhys Norrington-Davies": ["bBCIsaacHayden", "bBCIsaacHayden1"],
  "Koki Saito": ["bBCIsaacHayden", "bBCIsaacHayden1"],
  "Richard Kone": ["wycombeWanderersFootballClubRichardKone", "wycombeWanderersFootballClubRichardKone1"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Queens Park Rangers · 2026/27 Season`,
  heroLede: `Transfer window active. Queens Park Rangers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};