/* ============================================================
   MERCATO IQ · CLUB DATA · DERBY COUNTY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Derby County", mono: "DC", slug: "derby-county",
  primary: "#FFFFFF", primaryBright: "#FFFFFF", primaryDeep: "#B0B0B0",
  primaryRgb: "255,255,255",
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
  queries: ["derby-county transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Bobby Clark", sub:"MF", club:"Free agent", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Derby's only confirmed incoming so far this summer; fee and full position detail were not specified in available reporting."}
];
const CONFIRMED_OUT = [
  {name:"Dajaune Brown", sub:"Striker", club:"Rochdale", pos:"Loan", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan switch to Rochdale confirmed"},
  {name:"Thompson", sub:"Unknown", club:"Mansfield Town", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departs for Mansfield Town"}
];
const INCOMING = [
  {name:"Divin Mubama", sub:"ST", club:"Manchester City", pos:"ST", report:"~1 wk ago", src:"Pete O'Rourke", tier:2, fee:"Loan", truth:65, prob:50, light:'y', trend:'up', note:"O'Rourke is a credible EFL-focused reporter and the logic stacks up given Derby's thin attacking options so far.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50, dead:true, deadReason:"No fresh snippet; incoming link not substantiated with details"},
  {name:"Stephen Mfuni", sub:"18 · CB", club:"Manchester City", pos:"CB", report:"~2 wks ago", src:"Football League World", tier:3, fee:"Loan", truth:50, prob:30, light:'y', trend:'flat', note:"Sensible fit being floated but still City's decision to make, nothing close yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"No fresh snippet; incoming link not substantiated with details"},
  {name:"Tommy Watson", sub:"20 · LW · England", club:"Brighton", pos:"LW", report:"~1 wk ago", src:"Sunderland Echo", tier:3, fee:"Loan", truth:45, prob:15, light:'o', trend:'flat', note:"Very early and one of six clubs in a crowded field, do not back Derby specifically to land him.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dead:true, deadReason:"No fresh snippet; incoming link not substantiated with details"}
];
const OUTGOING = [
  {name:"Dajaune Brown", sub:"unknown · unknown · Striker", club:"Rochdale", pos:"Striker", report:"Loan switch to Rochdale", src:"Derby County", tier:2, fee:"Loan", truth:95, prob:95, light:"g", trend:"flat", note:"Brown makes loan switch to Rochdale after joining Derby", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Thompson", sub:"unknown · unknown · unknown", club:"Mansfield Town", pos:"unknown", report:"Departs for Mansfield Town", src:"Derby County", tier:2, fee:"unknown", truth:95, prob:95, light:"g", trend:"flat", note:"Thompson transfer departure confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:95}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-bobbyclark": {l:"Related news search: Bobby Clark", u:"https://news.google.com/search?q=Derby%20County%20Bobby%20Clark%20transfer&hl=en-GB&gl=GB"},
  "orourke": {l:"Pete O'Rourke (Football Insider)", u:"https://x.com/talkSPORT_PeteO"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  "sunderlandecho": {l:"Sunderland Echo", u:"https://www.sunderlandecho.com/sport/football"},
  derbyshireLiveDajauneBrown: {l:"Derbyshire Live", u:"https://news.google.com/rss/articles/CBMipgFBVV95cUxNOExDTW8zWVl5Rkg3RUZDT0pGSnZLaHZac3RlaTJmX2tjS2ZqRmVJbGk5RUctM0ZmYVRpcU9wUDVCZzNqdGlseDhfTW1vdnRITmIzY1c4ckZ3bDh4N095bXdBV2tmN1NWU2ZYdmxQbnpfVUc0ajdUdDRTYUo4bFdOcnh4U194emRLNU0wN1BRdFQ1UXVFQzVLcFV6Wk1mVGEzNTdkSXlR?oc=5"},
  derbyCountyDajauneBrown: {l:"Derby County", u:"https://news.google.com/rss/articles/CBMiigFBVV95cUxORVFkVjlfNjZzZmoxM3NpS1NIRTQzbnVOVFdvREhrVEFaTUJnaEMtQnVEOWViLTJFenBxSlNwU2NCWEhjU2I1VVQ4SG93VDhkTW1xYnh2bFRsUmRFakF6Q1RQVFBtN3FsUUZPOFhBNHlJUkcyMlRVNEZORDBuZEFIZEVOX0RGYmdYQmc?oc=5"},
  derbyCountyThompson: {l:"Derby County", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxQN0VQOFVUbjhBUUJrWXh0YVdtWGltazdmdzB0WDA3cTNMYTJvZ1RqZXFnZFRoYkVycEJJNXF1UUQ0OFd0cURZYWxLbG4xVjgyalptbU01WUpsb3R5MUMydEJyNU1kcFVYWV83cEN3N0lGakYtOF9xOUQzc21QTmpnUEd0MmNRX0FyR0NlUUdB?oc=5"},
  derbyCountyOfficialDajauneBrown: {l:"Derby County (Official)", u:"https://news.google.com/rss/articles/CBMiigFBVV95cUxORVFkVjlfNjZzZmoxM3NpS1NIRTQzbnVOVFdvREhrVEFaTUJnaEMtQnVEOWViLTJFenBxSlNwS2NCWEhjU2I1VVQ4SG93VDhkTW1xYnh2bFRsUmRFakF6Q1RQVFBtN3FsUUZPOFhBNHlJUkcyMlRVNEZORDBuZEFIZEVOX0RGYmdYQmc"},
  derbyCountyOfficialThompson: {l:"Derby County (Official)", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxQN0VQOFVUbjhBUUJrWXh0YVdtWGltazdmdzB0WDA3cTNMYTJvZ1RqZXFnZFRoYkVycEJJNXF1UUQ0OFd0cURZYWxLbG4xVjgyalptbU01WUpsb3R5MUMydEJyNU1kcFVYWV83cEN3N0lGakYtOF9xOUQzc21QTmpnUEd0MmNRX0FyR0NlUUdB"}};

const LINKMAP = {
  "Bobby Clark": ["gnews-bobbyclark"],
  "Divin Mubama": ["orourke"],
  "Stephen Mfuni": ["flw"],
  "Tommy Watson": ["sunderlandecho"],
  "Dajaune Brown": ["derbyshireLiveDajauneBrown", "derbyCountyDajauneBrown", "derbyCountyOfficialDajauneBrown"],
  "Thompson": ["derbyCountyThompson", "derbyCountyOfficialThompson"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Derby County · 2026/27 Season`,
  heroLede: `Transfer window active. Derby County preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};