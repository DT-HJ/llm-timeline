---
title: Current State
type: current
status: current
updated: 2026-10-22
---

# Current State

## Working

- Catalog: 225 active models, 41 excluded-ledger entries, 65 organizations as displayed, `as_of` and period 2026-01-01 ~ 2026-10-22. 190 models with official scores, 3,342 scores in total (checked 2026-10-22, host local, `python3 validate_data.py`)
- Validation: `validate_data.py` → `OK: 225 models, 41 excluded, 190 with official scores`, generated-file equality PASS. `--check-urls` → 351-URL sweep (including the two new ledger sources), **0 failures** — 53 HF 429 rate limits and 3 bot-protected `ifm.ai` 403s are warnings, not failures (2026-10-22, host local)
- Inclusion judgment: the 2026-10-15 inclusion exception (`scope.inclusion_exception`) — decided by official first-party source plus industry reference point, not by category. Adding Hy-Memory-30B-A3B as `category: Memory` on 2026-10-22 widened the exception categories to `Embedding`, `Image generation`, `Music generation`, `Memory`. Rules and precedents are canonical in `components/catalog-pipeline.md`
- Latest audit (2026-10-22, 10 models): 9 new (Mercury 3 · MemT-1.0 Flash/Nano · Clairic · H2O-Lightning-31B · Eleven Realtime v1 Max/Mini · Raon-1 mini · Spark-X2.6-4B) + 1 retroactive (Hy-Memory-30B-A3B). Details and sources are canonical in `models_catalog.json`, README, and `조사 자료`
- Excluded ledger: the two exclusions judged on 10/16 but never entered — OpenAI **GPT-Live-1.1 / 1.1 Quip** (deployment update without its own model ID or new capability scores) and Mistral **Timestral** (time-series forecasting only, non-% metrics) — were entered on 2026-10-22 by operator decision as `excluded-2026-10-15-2` and `-3`; sources re-checked that day (`deploymentsafety.openai.com/gpt-live-1-1`, `mistral.ai/news/timestral`)
- Deployment: Pages `build_type` is `legacy` (branch `main`, path `/`) — the live site is the raw branch; `deploy-pages.yml` additionally runs `validate_data.py` on push. The `3be62fb` push on 2026-10-22 had both `Deploy GitHub Pages` and the native `pages build and deployment` succeed, and the live page served `style.css?v=20261022`, `app.js?v=20261022`, the new assets (200), and 225 cards with no console errors (observed 2026-10-22, host local, `gh run`, `gh api`, `curl`, Playwright)
- Repository move (2026-10-15): `hojin12312/llm-timeline` → **`DT-HJ/llm-timeline`**, Pages at `dt-hj.github.io/llm-timeline/` (200). The old address returns 404; in-repo links were corrected
- The header period in README and `index.html` derives from `SCOPE_DATA.period` — keep the period right and the rest is generated
- Wiki: SCHEMA 0.4.0, `wiki-language: en` (2026-10-22, user-approved). All pages except `log.md` history are English; Korean remains only for file names (`조사 자료`), data strings (`정확한 수치 미공개`, `미공개`), and commit-style examples
- Dashboard UI overhaul (2026-10-22): webfonts, SVG flags, 5-colour category groups, type/open-weights/company filters, data-driven month chips, desktop scrollspy, light/dark theme, URL hash updates, manual `?v=` cache version on `style.css`/`app.js`. Browser-checked light at 1440·1024·820·390px and dark at 1440·1280·1024·820·390px, 0 console errors (2026-10-22, host local, Playwright). Structure and invariants are canonical in `components/web-dashboard.md`

## Partially Implemented

- Family lineage: `FAMILY_FLOWS` in `data.js` exists only as data with no UI view drawing it — 30 flows after the 10/22 audit (code read)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV export · status filter — listed as open work in README (code read; no such UI or handlers). Company, type, and open-weights filters were implemented on 2026-10-22

## Current Blockers

- None

## Active Risks / Unknowns

- **Intermittent CI validation gate**: the `deploy` job sat in `waiting`/`pending` from 2026-09-19 to 10-01, then succeeded on the 10/8, 10/17, and 10/22 pushes. Cause unknown — keep the local `validate_data.py` run before pushing as the real gate
- **Audit timing vs. late model-card updates**: Hy-Memory-30B-A3B went public on HF on 10/15, but the 10/16 audit commit (12:29 KST) preceded the card's final update (17:12 KST) and missed it. Next audit, re-check new HF repos from the previous window; record late-completed cards as retroactive additions with a README footnote
- **Exclusion judgments outside the ledger**: twice a judgment lived only in README or a commit message (resolved 2026-10-22). Enter every exclusion in `models_catalog.json` `excluded` in the same commit — the validator does not catch a missing entry
- **Dead links after the repository rename**: the old Pages 404s and the old repository URL only redirects. In-repo links are fixed; external documents and bookmarks cannot be fixed from here
- **New countries and Korean aliases are manual**: a new `country` code needs an SVG in `assets/flags/` plus an entry in `app.js` `FLAG_CODES` (otherwise a globe is shown); Korean search aliases are added by hand to the `buildIndexes` rules. Month chips are now generated from data and are no longer a manual step
- **External webfont dependency**: if jsDelivr or Google Fonts is unreachable, system fonts are used (no functional impact)
- **UI asset cache version is manual**: because Pages is `legacy` (raw branch), a workflow cannot stamp asset versions. Bump `?v=` in `index.html` whenever `style.css` or `app.js` changes, or old and new assets may mix for up to 10 minutes after a deploy
- **Source volatility and parsing traps** (canonical: `components/catalog-pipeline.md` Known Limitations): `qwencloud.com` 404 (2026-10-15, `model-043`), HF 429, intermittent TLS timeouts on `memory.hunyuan.tencent.com` (once on 10/22, 200 on retry), CSS-in-JS tables on `dev.meta.ai`, React shells on `*.github.io`

## Next Logical Work

- Next audit (after 2026-10-22): research new releases → include/exclude → `build_data.py` → `validate_data.py` (+`--check-urls`) → README statistics → commit and push. Procedure in `runbooks/audit-update.md`
- Re-check new HF repos from the previous audit window (10/15–10/16) for timing misses like Hy-Memory
- Pending or to re-investigate: **Reflection AI Beam** (weights promised for late October) · **Ling-3.1-flash** · **OpenCSG Agentic-27B** · **Heimr 570M** · **Muse Video** · **Gemini 4 Argon** (whether a model card or API docs appear — currently a single announcement source)
- Awaiting operator decision: whether to apply the clause "even in-scope categories may hold low-importance derivatives or snapshots" to existing records
- After each push, check the custom `deploy` job with `gh run list`
