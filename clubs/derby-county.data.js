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
  {name:"Thompson", sub:"Unknown", club:"Mansfield Town", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departs for Mansfield Town"},
  {name:"Liam Thompson", sub:"", club:"Mansfield Town", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Transfer to Mansfield Town confirmed"}
];
const INCOMING = [
  {name:"Divin Mubama", sub:"ST", club:"Manchester City", pos:"ST", report:"Incoming transfer", src:"Pete O'Rourke", tier:3, fee:"Loan", truth:50, prob:50, light:"y", trend:"flat", note:"On-page rumour, no fresh snippet provided", lastSeen:"2026-08-08T04:21:32Z", baseProb:50},
  {name:"Stephen Mfuni", sub:"18 · CB", club:"Manchester City", pos:"CB", report:"Incoming transfer", src:"Football League World", tier:3, fee:"Loan", truth:50, prob:50, light:"y", trend:"up", note:"On-page rumour, no fresh snippet provided", lastSeen:"2026-08-08T04:21:32Z", baseProb:50},
  {name:"Tommy Watson", sub:"20 · LW · England", club:"Brighton", pos:"LW", report:"Incoming transfer", src:"Sunderland Echo", tier:3, fee:"Loan", truth:50, prob:50, light:"y", trend:"up", note:"On-page rumour, no fresh snippet provided", lastSeen:"2026-08-08T04:21:32Z", baseProb:50}
];
const OUTGOING = [
  {name:"Dajaune Brown", sub:"unknown · unknown · Striker", club:"Rochdale", pos:"Striker", report:"Loan switch to Rochdale", src:"Derby County", tier:2, fee:"Loan", truth:95, prob:95, light:"g", trend:"flat", note:"Brown makes loan switch to Rochdale after joining Derby", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Thompson", sub:"unknown · unknown · unknown", club:"Mansfield Town", pos:"unknown", report:"Departs for Mansfield Town", src:"Derby County", tier:2, fee:"unknown", truth:95, prob:95, light:"g", trend:"flat", note:"Thompson transfer departure confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:95, dead:true, deadReason:"Identified as Liam Thompson, confirmed transfer to Mansfield Town completed"}
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
  derbyCountyOfficialThompson: {l:"Derby County (Official)", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxQN0VQOFVUbjhBUUJrWXh0YVdtWGltazdmdzB0WDA3cTNMYTJvZ1RqZXFnZFRoYkVycEJJNXF1UUQ0OFd0cURZYWxLbG4xVjgyalptbU01WUpsb3R5MUMydEJyNU1kcFVYWV83cEN3N0lGakYtOF9xOUQzc21QTmpnUEd0MmNRX0FyR0NlUUdB"},
  derbyshireLiveDajauneBrown1: {l:"Derbyshire Live", u:"https://news.google.com/rss/articles/CBMipgFBVV95cUxNOExDTW8zWVl5Rkg3RUZDT0pGSnZLaHZac3RlaTJmX2tjS2ZqRmVJbGk5RUctM0ZmYVRpcU9wUDVCZzNqdGlseDhfTW1vdnRITmIzY1c4ckZ3bDh4N091bXdBV2tmN1NWU2ZYdmxQbnpfVUc0ajdUdDRTYUo4bFdOcnh4U194emRLNU0wN1BRdFQ1UXVFQzVLcFV6Wk1mVGEzNTdkSXlR"},
  derbyshireLiveLiamThompson: {l:"Derbyshire Live", u:"https://news.google.com/rss/articles/CBMiqwFBVV95cUxPX1RRTkJKMzlxcXR4TlpRdGFjR1dOcU1oMVZLcl80U3Q3Y0pKb2RkUmR1QVBsWUhGUVRkc3ZfVGM3WXk5eGdYWVlQclNDb05iZ2ZtMFItY1dJUld1aDQzUkFJR1N0RGdTY1RvTE5uVXZ1MkR1Y0M2N1hMSmFHQmpIZGFDWUliT3VJRTlJY1ByX1U2OUV2b0VQWmUyMHVMTGJlLUVCem5iN29CM2c"}};

const LINKMAP = {
  "Bobby Clark": ["gnews-bobbyclark"],
  "Divin Mubama": ["orourke"],
  "Stephen Mfuni": ["flw"],
  "Tommy Watson": ["sunderlandecho"],
  "Dajaune Brown": ["derbyshireLiveDajauneBrown", "derbyCountyDajauneBrown", "derbyCountyOfficialDajauneBrown", "derbyshireLiveDajauneBrown1"],
  "Thompson": ["derbyCountyThompson", "derbyCountyOfficialThompson"],
  "Liam Thompson": ["derbyshireLiveLiamThompson", "derbyCountyThompson"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Derby County · 2026/27 Season`,
  heroLede: `Transfer window active. Derby County preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};