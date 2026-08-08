/* ============================================================
   MERCATO IQ · CLUB DATA · CAMBRIDGE UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Cambridge United", mono: "CU", slug: "cambridge-united",
  primary: "#F8B334", primaryBright: "#FFD97A", primaryDeep: "#8F6300",
  primaryRgb: "248,179,52",
  breadcrumb: ["England","League One"]
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
  queries: ["cambridge-united transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Callum Stead", sub:"", club:"Barnet", pos:"Striker", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as first summer signing"},
  {name:"Callum Perry", sub:"", club:"Coventry City", pos:"", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan"},
  {name:"Patrick Bauer", sub:"", club:"AFC Wimbledon", pos:"Defender", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from AFC Wimbledon"},
  {name:"Sean Raggett", sub:"", club:"Rotherham United", pos:"Defender", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan signing"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Callum Stead", sub:"Barnet · Striker", club:"Barnet", pos:"ST", report:"Signed as first summer signing", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"up", note:"First summer signing confirmed", lastSeen:"2026-08-08T16:04:56Z", baseProb:100},
  {name:"Callum Perry", sub:"Coventry City · ", club:"Coventry City", pos:"Unknown", report:"Season-long loan from Coventry City", src:"The Coventry Observer", tier:2, fee:"Loan", truth:100, prob:100, light:"g", trend:"up", note:"Season-long loan confirmed", lastSeen:"2026-08-08T16:04:56Z", baseProb:100},
  {name:"Patrick Bauer", sub:"AFC Wimbledon · Defender", club:"AFC Wimbledon", pos:"DEF", report:"Signed from AFC Wimbledon", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"up", note:"Defender signed confirmed", lastSeen:"2026-08-08T16:04:56Z", baseProb:100},
  {name:"Sean Raggett", sub:"Rotherham United · Defender", club:"Rotherham United", pos:"DEF", report:"Loan signing from Rotherham United", src:"BBC", tier:2, fee:"Loan", truth:100, prob:100, light:"g", trend:"up", note:"Defender loan confirmed", lastSeen:"2026-08-08T16:04:56Z", baseProb:100}
];
const OUTGOING = [
  {name:"Maldini Kacurri", sub:"Arsenal · Defender", club:"Arsenal", pos:"DEF", report:"Cambridge United joining chase for Albanian defender (implies departure interest)", src:"SportsBoom UK", tier:3, fee:"Unknown", truth:45, prob:35, light:"y", trend:"up", note:"Cambridge United reported to be in chase; unclear if player is leaving or incoming target", lastSeen:"2026-08-08T16:04:56Z", baseProb:35}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  bBCCallumStead: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE15bmpfQmduNVRYU1BORjd6MEFqRnZPMzRjdlNUVGhET0ZHM1kzUTZ5NDktanVkX0N6aUJpOHhVZU9RWlFuMHVGeHJYektVaG11OWlDNDBFa3A5aUZiWDZxci1rS1ExV00?oc=5"},
  theCoventryObserverCallumPerry: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMixAFBVV95cUxNSlE3bGlTcFZrQU0zUGhqczNJSUdoVG9GLWZ3X19jcjlXQS1HeXpKN19oeVJxMWtzS1NheVc0QnEtV1FLaWp3U0xieVpMM09tM0Nza0hfdGt3bmk2UmRna1VKd3VrODgtWlV0NTFFeXpGRmFGWVZHUGlHRzA2Y2Uzc1h1bnBSbGdBNnkzQ3hTMnNMLWoxelM0MnczN3EwUXN5MUc1d2pnbHBFMVBsd2NtXzhzbFI4dFZiUFI5dGJZUHc3YU5I?oc=5"},
  bBCPatrickBauer: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5qLXhEZEhXQUk0MmYydk1hMFdCRXFqSjVzY0VrQ3dwN1hFbDc2ZlA2dktXQUhVS3BYUDZreWFPT3ZZM09uTW14UHYtX204RHRjQ00wYXFaSldGTm9mZ05CeUtXaFFkb0U?oc=5"},
  bBCSeanRaggett: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9ZV050ZzZIWkJjNm5hYUkxTmNRanF2enVuLXNqTGxWSEtvQ21zUmhDanRRWTBKRWpudnJvOTZObnJiSEI0QkM5bFRpbWUtUFVqS19PVW9xQ1J4ZVpuRWpMRWxXbE1DQk0?oc=5"},
  cambridgeUnitedAdamMayor: {l:"Cambridge United", u:"https://news.google.com/rss/articles/CBMiekFVX3lxTE9ZTFRJTXB0aE1pU2hjbjRxRmpwZF9YYm42UDZEUHpvUDhmaTJ0dnRnczRUaUhGQVVNWXpVaVdJSnZBelkyTEphRUtvSTNNUktZcnJPUk1EYi1XSUtjX2ZEbVJoNlFWWUMtV2JzQjNpbHpPWDNtY0wya0ZB?oc=5"},
  sportsboomcoukMaldiniKacurri: {l:"sportsboom.co.uk", u:"https://news.google.com/rss/articles/CBMi2AFBVV95cUxQSEhEdTJtcy1mNmZGUzhEbU5aUGRkYXhibnNNdmdXVXo3R21LXzVwdHp6bFBudjdBRWtwWmxmUVhoS0d2VENfRjFjZ0N1QktUSkg3MVdZQlJmV2wyQ3NvVTJhWHN4RTZOM2ZmYm5tTlNUQk9TVXRYUFA2d0hVRzBfOV93SHhYZ0tRSW1TUDhwZ3NaT2xKdnpDMkFxeWpqdWswRW1FZjIxS2J6cXBTSzh4LWVMbENpdlJNV1RDZFYxcGxwbWk5cHYzV091ak9ySEQ0NU9RN281ZHc?oc=5"},
  cambridgeUnitedGoogleNewsHeath: {l:"Cambridge United (Google News)", u:"https://news.google.com/rss/articles/CBMiZEFVX3lxTE9LZTlJLXV0QzRMdzZoR1F1azlCVjExeGRvSVA4bnNwMWdnLVNJUkdXeE8yeXZjQ1ZTLWoyTlRCVUdZbTVmT05iMmZvd24zdC1iR3Z3OHFwLWlSVk5xX3E5cVFvcEk"},
  cambridgeUnitedGoogleNewsAdamMayor: {l:"Cambridge United (Google News)", u:"https://news.google.com/rss/articles/CBMiekFVX3lxTE9ZTFRJTXB0aE1pU2hjbjRxRmpwZF9YYm42UDZEUHpvUDhmaTJ0dnRnczRUaUhGQVVNWXpVaVdJSnZBelkyTEphRUtvSTNNUktZcnJPUk1EYi1XSUtjX2ZEbVJoNlFWWUMtV2JzQjNpbHpPWDNtY0wya0ZB"},
  bBCGoogleNewsCallumStead: {l:"BBC (Google News)", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE15bmpfQmduNVRYU1BORjd6MEFqRnZPMzRjdlNUVGhET0ZHM1kzUTZ5NDktanVkX0N6aUJpOHhVZU9RWlFuMHVGeHJYektVaG11OWlDNDBFa3A5aUZiWDZxci1rS1ExV00"},
  theCoventryObserverGoogleNewsCallumPerry: {l:"The Coventry Observer (Google News)", u:"https://news.google.com/rss/articles/CBMixAFBVV95cUxNSlE3bGlTcFZrQU0zUGhqczNJSUdoVG9GLWZ3X19jcjlXQS1HeXpKN19oeVJxMWtzS1NheVc0QnEtV1FLaWp3U0xieVpMM09tM0Nza0hfdGt3bmk2UmRna1VKd3VrODgtWlV0NTFFeXpGRmFGWVZHUGlHRzA2Y2Uzc1h1bnBSbGdBNnkzQ3hTMnNMLWoxelM0MnczN3EwUXN5MUc1d2pnbHBFMVBsd2NtXzhzbFI4dFZiUFI5dGJZUHc3YU5I"},
  bBCGoogleNewsPatrickBauer: {l:"BBC (Google News)", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5qLXhEZEhXQUk0MmYydk1hMFdCRXFqSjVzY0VrQ3dwN1hFbDc2ZlA2dktXQUhVS3BYUDZreWFPT3ZZM09uTW14UHYtX204RHRjQ00wYXFaSldGTm9mZ05CeUtXaFFkb0U"},
  bBCGoogleNewsSeanRaggett: {l:"BBC (Google News)", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9ZV050ZzZIWkJjNm5hYUkxTmNRanF2enVuLXNqTGxWSEtvQ21zUmhDanRRWTBKRWpudnJvOTZObnJiSEI0QkM5bFRpbWUtUFVqS19PVW9xQ1J4ZVpuRWpMRWxXbE1DQk0"},
  cambridgeUnitedHeath: {l:"Cambridge United", u:"https://news.google.com/rss/articles/CBMiZEFVX3lxTE9LZTlJLXV0QzRMdzZoR1F1azlCVjExeGRvSVA4bnNwMWdnLVNJUkdXeE8yeXZjQ1ZTLWoyTlRCVUdZbTVmT05iMmZvd24zdC1iR3Z3OHFwLWlSVk5xX3E5cVFvcEk?oc=5"}};

const LINKMAP = {
  "Luke Berry": ["flw"],
  "Callum Stead": ["bBCCallumStead", "bBCGoogleNewsCallumStead"],
  "Callum Perry": ["theCoventryObserverCallumPerry", "theCoventryObserverGoogleNewsCallumPerry"],
  "Patrick Bauer": ["bBCPatrickBauer", "bBCGoogleNewsPatrickBauer"],
  "Sean Raggett": ["bBCSeanRaggett", "bBCGoogleNewsSeanRaggett"],
  "Adam Mayor": ["cambridgeUnitedAdamMayor", "cambridgeUnitedGoogleNewsAdamMayor"],
  "Maldini Kacurri": ["sportsboomcoukMaldiniKacurri"],
  "Heath": ["cambridgeUnitedGoogleNewsHeath", "cambridgeUnitedHeath"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Cambridge United · 2026/27 Season`,
  heroLede: `Transfer window active. Cambridge United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};