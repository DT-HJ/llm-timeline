---
title: Current State
type: current
status: current
updated: 2026-10-26
---

# Current State

## Working

- Catalog: 242 active models, 51 excluded-ledger entries, 70 organizations as displayed (README counts `company_meta` keys; 68 distinct model companies), `as_of` and period 2026-01-01 ~ 2026-10-26. 206 models with official scores, 3,553 scores in total (checked 2026-10-26, host local, `python3 validate_data.py`)
- Validation: `validate_data.py` → `OK: 242 models, 51 excluded, 206 with official scores`, generated-file equality PASS. `--check-urls` → 373-URL sweep, **0 failures**, 8 warnings (5 HF 429, 3 bot-protected `ifm.ai` 403), run on 2026-10-26 at 236 models; the URLs added afterwards (Ornith-1.0 records, nine ledger sources) were only spot-checked with HTTP 200 (host local)
- Inclusion judgment: the 2026-10-15 inclusion exception (`scope.inclusion_exception`) — official first-party source plus industry reference point, not category. Exception categories: `Embedding`, `Image generation`, `Music generation`, `Memory`. Rules and precedents are canonical in `components/catalog-pipeline.md`
- Latest audits: 2026-10-25 (5 new: Flint · M3.1-Flash · Atria Dawn · Dory · Kimi K3.1 Pro; 2 holds released: Beam · Ling-3.1-flash; Gemini 4 Argon corrected to GA 10/13). 2026-10-26: 1 new (Nanbeige4.3-33B) + 9 retroactive found by an HF sweep — Sage-A1.5 (10/15), Ornith-1.5 ×4 (8/18 ×3, 10/16 ×1), Ornith-1.0 ×3 (6/21–23), Terminal-RSI-27B (10/21). Details and sources are canonical in `models_catalog.json`, README, and `조사 자료`
- Excluded ledger: nine entries `excluded-2026-10-26-1`…`-9` were added by operator decision for HF finds that were not included — Ling-3.0-flash-Sante, GLiDE, Youtu-Parsing-Omni, LightOnOCR-3-4B, KLM-1.5, Nanbeige4.3-33B-Base, Spark-X2.6-4B-Base, NCM checkpoints, Qwen3-8B-DSpine-b16
- Deployment: Pages `build_type` is `legacy` (branch `main`, path `/`) — the live site is the raw branch; `deploy-pages.yml` also runs `validate_data.py` on push. The four 2026-10-26 pushes (`fbe164a`, `3284f59`, `a44d526`, `762ce76`) each had `Deploy GitHub Pages` and `pages build and deployment` succeed, and the live `data.js` held the new records and ledger entries (observed 2026-10-26, host local, `gh run list`, `curl`). Repository: `DT-HJ/llm-timeline`, Pages at `dt-hj.github.io/llm-timeline/`
- The header period in README and `index.html` derives from `SCOPE_DATA.period` — keep the period right and the rest is generated
- Wiki: SCHEMA 0.4.0, `wiki-language: en`. Dashboard structure, filters, theming, and the manual `?v=` cache version are canonical in `components/web-dashboard.md` (no UI code changed since 2026-10-22)

## Partially Implemented

- Family lineage: `FAMILY_FLOWS` in `data.js` exists only as data with no UI view drawing it — 33 flows after the 10/26 audit, including the new Ornith 1.0 → 1.5 flow (code read)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV export · status filter — listed as open work in README (code read; no such UI or handlers)

## Current Blockers

- None

## Active Risks / Unknowns

- **HF coverage gaps**: the 2026-10-26 sweep found models missed by earlier audits, from 10/15 (Sage-A1.5) back to 2026-06-21 (Ornith was absent for four months). The sweep method in `runbooks/audit-update.md` is not exhaustive (top-100 listings plus major organizations); run it each audit and check family siblings of anything found. Late card updates can also race an audit (Hy-Memory-30B-A3B, 10/16)
- **Intermittent CI validation gate**: the `deploy` job sat in `waiting`/`pending` from 2026-09-19 to 10-01, then succeeded on later pushes, including all four on 2026-10-26. Cause unknown — keep the local `validate_data.py` run before pushing as the real gate
- **Exclusion judgments outside the ledger**: enter every exclusion in `models_catalog.json` `excluded` in the same commit — the validator does not check `excluded` contents or the README ledger count
- **Unknown organization origin**: Ornith, Terminal-RSI, GLiDE's Fastino, LightOn and MinimaLabs have no first-party country statement and are recorded as `미공개` (🌐) rather than guessed
- **New countries and Korean aliases are manual**: a new `country` code needs an SVG in `assets/flags/` plus an entry in `app.js` `FLAG_CODES`; Korean search aliases are hand-added in `buildIndexes`
- **UI asset cache version is manual**: Pages is `legacy`, so bump `?v=` in `index.html` whenever `style.css` or `app.js` changes
- **Source volatility** (canonical: `components/catalog-pipeline.md` Known Limitations): `qwencloud.com` 404 (`model-043`), HF 429, `memory.hunyuan.tencent.com` TLS timeouts, CSS-in-JS tables on `dev.meta.ai`, React shells on `*.github.io`
- **Dead links after the repository rename**: the old Pages address 404s; in-repo links are fixed, external bookmarks cannot be

## Next Logical Work

- Next audit (after 2026-10-26): run the HF sweep, research new releases → include/exclude → `build_data.py` → `validate_data.py` (+`--check-urls`) → README statistics → commit and push. Procedure in `runbooks/audit-update.md`
- Re-investigate: **OpenCSG Agentic-27B** and **Heimr 570M** (held in the ledger, no official HF repo), **Muse Video** (in neither the catalog nor the ledger), the Ornith-1.0 blog's **31B dense** member (no HF repo found 2026-10-26)
- Awaiting operator decision: whether to apply the clause "even in-scope categories may hold low-importance derivatives or snapshots" to existing records
- After each push, check the custom `deploy` job with `gh run list`
