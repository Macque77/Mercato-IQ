#!/usr/bin/env python3
"""Generate the public Journalist Power Rankings page (rankings.html).

Reads the reliability engine's live output (score.build) and renders a self-contained,
themed, static page committed to the repo root so GitHub Pages serves it. This is the
marketing asset + proof-of-data: "who's the most reliable transfer reporter, by the
numbers", plus a live board of transfers ranked by completion likelihood.

Honest by design: it shows a prominent caveat that scores are currently built from how
journalists are QUOTED in mainstream coverage (not their primary X posts), and marks the
dataset PROVISIONAL until enough history has accrued.

Usage:  python3 intelligence/build_rankings.py [--out rankings.html] [--min N]
"""
import html
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
sys.path.insert(0, HERE)
import score  # noqa: E402


def esc(s):
    return html.escape(str(s if s is not None else ''))


def pct(x):
    return f"{round(x * 100)}%" if isinstance(x, (int, float)) else "—"


def cls_for(x, good=0.6, mid=0.4):
    if not isinstance(x, (int, float)):
        return 'na'
    return 'hi' if x >= good else ('mid' if x >= mid else 'lo')


def rank_rows(ranked):
    out = []
    for i, r in enumerate(ranked, 1):
        cal = r.get('calibration') or {}
        cal_txt = ' · '.join(f"{k[:3]} {pct(v)}" for k, v in sorted(
            cal.items(), key=lambda kv: {'here-we-go': 3, 'advanced': 2, 'talks': 1, 'interest': 0}.get(kv[0], 0), reverse=True))
        lead = f"{r['avg_lead_days']}d" if r.get('avg_lead_days') is not None else "—"
        out.append(f"""<tr>
      <td class="rk">{i}</td>
      <td class="src">{esc(r['source'])}<span class="tier">T{r.get('tier',3)}</span></td>
      <td class="n"><span class="score {cls_for(r.get('score'))}">{r['score']:.2f}</span></td>
      <td class="n">{pct(r.get('accuracy'))}</td>
      <td class="n">{pct(r.get('originality'))}</td>
      <td class="n">{r.get('right',0)}</td>
      <td class="n bad">{r.get('false_reports',0)}</td>
      <td class="n bad">{r.get('confident_miss',0)}</td>
      <td class="n">{lead}</td>
      <td class="n">{pct(r.get('fee_accuracy')) if r.get('fee_accuracy') is not None else '—'}</td>
      <td class="cal">{esc(cal_txt) or '—'}</td>
    </tr>""")
    return '\n'.join(out)


def live_rows(live):
    out = []
    for s in live[:40]:
        c = s['completion_likelihood']
        band = 'hi' if c >= 0.66 else ('mid' if c >= 0.4 else 'lo')
        srcs = ', '.join(s['sources'][:3]) + ('…' if s['source_count'] > 3 else '')
        out.append(f"""<tr>
      <td class="n"><span class="conf {band}">{round(c*100)}%</span></td>
      <td class="pl">{esc(s['player'])}</td>
      <td class="to">{esc(s['to_club'])}</td>
      <td><span class="stage s-{esc(s['stage'])}">{esc(s['stage'])}</span></td>
      <td class="srcs">{esc(srcs)}</td>
    </tr>""")
    return '\n'.join(out)


TEMPLATE = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Transfer Journalist Power Rankings · Mercato-IQ</title>
<meta name="description" content="Which transfer reporters are actually right — ranked by measured accuracy, exclusivity and lead time. Plus live transfers by completion likelihood.">
<style>
  :root{{
    --ground:#eaeef0;--panel:#fff;--panel-2:#f4f7f8;--ink:#0c1719;--ink-soft:#46595d;
    --line:#d3dcdf;--line-strong:#b7c5c9;--brand:#0b7f97;--brand-ink:#075c6e;
    --hi:#17925f;--mid:#bd8718;--lo:#c0453c;
    --mono:ui-monospace,"SF Mono","Cascadia Mono","Roboto Mono",Menlo,Consolas,monospace;
    --sans:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }}
  @media (prefers-color-scheme:dark){{:root{{
    --ground:#081416;--panel:#0f1e21;--panel-2:#132a2e;--ink:#e6eef0;--ink-soft:#8ea4a8;
    --line:#1d3236;--line-strong:#2c474c;--brand:#2fbdd6;--brand-ink:#7fe0ef;
    --hi:#31c98a;--mid:#e0ac48;--lo:#e46a60;
  }}}}
  *{{box-sizing:border-box}}
  body{{margin:0;font-family:var(--sans);color:var(--ink);background:var(--ground);line-height:1.5;
    -webkit-font-smoothing:antialiased}}
  .wrap{{max-width:1040px;margin:0 auto;padding:clamp(20px,5vw,52px) clamp(14px,4vw,40px)}}
  .eyebrow{{font:600 12px/1 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--brand-ink)}}
  h1{{font-size:clamp(28px,5vw,44px);line-height:1.04;letter-spacing:-.02em;font-weight:800;margin:.3em 0 .2em}}
  .lede{{font-size:clamp(16px,2.2vw,19px);color:var(--ink-soft);max-width:64ch;margin:0}}
  h2{{font-size:clamp(19px,2.6vw,24px);font-weight:750;margin:44px 0 6px;letter-spacing:-.01em}}
  .note{{color:var(--ink-soft);margin:0 0 16px;max-width:70ch;font-size:14.5px}}
  .caveat{{background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--mid);
    border-radius:12px;padding:14px 18px;margin:22px 0 0;font-size:14px;color:var(--ink-soft)}}
  .caveat b{{color:var(--ink)}}
  .tbl-wrap{{overflow-x:auto;border:1px solid var(--line);border-radius:12px;margin-top:8px}}
  table{{border-collapse:collapse;width:100%;min-width:720px;background:var(--panel);font-size:14px}}
  th,td{{padding:11px 12px;text-align:left;border-bottom:1px solid var(--line);white-space:nowrap}}
  thead th{{font:600 11px/1.1 var(--mono);letter-spacing:.05em;text-transform:uppercase;color:var(--ink-soft);
    position:sticky;top:0;background:var(--panel-2)}}
  td.n,th.n{{text-align:right;font-family:var(--mono);font-variant-numeric:tabular-nums}}
  tbody tr:last-child td{{border-bottom:0}}
  tbody tr:hover{{background:var(--panel-2)}}
  .rk{{font-family:var(--mono);color:var(--ink-soft);width:2ch}}
  .src{{font-weight:650}}
  .tier{{font:600 10px/1 var(--mono);color:var(--ink-soft);margin-left:7px;border:1px solid var(--line-strong);
    border-radius:99px;padding:2px 5px}}
  .score{{font-family:var(--mono);font-weight:700;padding:2px 7px;border-radius:6px}}
  .score.hi,.conf.hi{{color:#fff;background:var(--hi)}} .score.mid,.conf.mid{{color:#fff;background:var(--mid)}}
  .score.lo,.conf.lo{{color:#fff;background:var(--lo)}} .score.na{{color:var(--ink-soft)}}
  td.bad{{color:var(--lo)}} .cal{{font:500 12px/1 var(--mono);color:var(--ink-soft);white-space:normal}}
  .conf{{font-family:var(--mono);font-weight:700;padding:3px 8px;border-radius:6px}}
  .pl{{font-weight:640}} .to{{color:var(--ink-soft)}}
  .stage{{font:600 10px/1 var(--mono);letter-spacing:.04em;text-transform:uppercase;padding:3px 7px;border-radius:99px;
    border:1px solid var(--line-strong);color:var(--ink-soft)}}
  .stage.s-here-we-go{{color:#fff;background:var(--hi);border-color:transparent}}
  .stage.s-advanced{{color:var(--hi);border-color:var(--hi)}}
  .srcs{{color:var(--ink-soft);font-size:13px;white-space:normal}}
  .foot{{margin-top:44px;color:var(--ink-soft);font-size:13px;border-top:1px solid var(--line);padding-top:18px}}
  .prov{{display:inline-block;font:600 10px/1 var(--mono);letter-spacing:.1em;text-transform:uppercase;
    color:var(--mid);border:1px solid var(--mid);border-radius:99px;padding:4px 9px;margin-left:10px;vertical-align:middle}}
  a{{color:var(--brand-ink)}}
</style>
</head>
<body>
<div class="wrap">
  <div class="eyebrow">Mercato-IQ · Reliability index</div>
  <h1>Transfer Journalist Power Rankings <span class="prov">Provisional</span></h1>
  <p class="lede">Everyone reports the rumours. This ranks the reporters — by how often they're
  actually right, how often they break it first, and how far ahead. Scored automatically against
  what really happened.</p>

  <div class="caveat"><b>How to read this (honestly):</b> scores are computed from
  {n_claims} tracked claims and {n_res} resolved outcomes. The dataset is still young, so treat
  early positions as indicative. Attribution currently comes from how reporters are <b>quoted in
  mainstream coverage</b>, not their primary posts — so lead-times are conservative. Both improve
  as history accrues.</div>

  <h2>Reporter reliability</h2>
  <p class="note">Ranked by a volume-adjusted reliability score. <b>Excl</b> = exclusivity (how often
  they broke it vs re-reported). <b>False</b> = player went elsewhere. <b>Miss</b> = claimed
  advanced/here-we-go but it collapsed. <b>Lead</b> = days ahead of confirmation. <b>Cal</b> =
  completion rate by the confidence they claimed.</p>
  <div class="tbl-wrap"><table>
    <thead><tr>
      <th class="rk">#</th><th>Reporter</th><th class="n">Score</th><th class="n">Acc</th>
      <th class="n">Excl</th><th class="n">Right</th><th class="n">False</th><th class="n">Miss</th>
      <th class="n">Lead</th><th class="n">Fee</th><th>Calibration</th>
    </tr></thead>
    <tbody>
{rank_rows}
    </tbody>
  </table></div>

  <h2>Live transfers by completion likelihood</h2>
  <p class="note">Every open story, scored for how likely it is to actually complete — combining the
  stage it's reached with the measured reliability of the reporters carrying it.</p>
  <div class="tbl-wrap"><table>
    <thead><tr><th class="n">Likely</th><th>Player</th><th>To</th><th>Stage</th><th>Sources</th></tr></thead>
    <tbody>
{live_rows}
    </tbody>
  </table></div>

  <div class="foot">Generated automatically by the Mercato-IQ reliability engine. Methodology:
  claims are captured from live coverage, clustered into stories, and resolved against confirmed
  moves; reporters are scored on the resolved set. Volume-adjusted so a small sample can't top a
  large track record. Provisional while the dataset accrues.</div>
</div>
</body>
</html>"""


def main():
    out_path = os.path.join(REPO, 'rankings.html')
    if '--out' in sys.argv:
        out_path = os.path.join(REPO, sys.argv[sys.argv.index('--out') + 1])
    min_resolved = 3
    if '--min' in sys.argv:
        min_resolved = int(sys.argv[sys.argv.index('--min') + 1])

    ranked, thin, live, tally = score.build(min_resolved)
    import claim_store as cs
    n_claims = len(cs.load_claims())
    n_res = tally.get('completed', 0) + tally.get('false', 0) + tally.get('collapsed', 0)

    page = TEMPLATE.format(
        rank_rows=rank_rows(ranked), live_rows=live_rows(live),
        n_claims=n_claims, n_res=n_res)
    with open(out_path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(page)
    print(f"Wrote {os.path.relpath(out_path, REPO)}: {len(ranked)} ranked reporter(s), "
          f"{len(live)} live stories.")


if __name__ == '__main__':
    main()
