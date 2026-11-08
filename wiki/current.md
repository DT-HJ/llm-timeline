---
title: Current State
type: current
status: current
updated: 2026-11-08
---

# Current State

## Working

- Catalog: 258 active models, 59 excluded-ledger entries, 74 organizations as displayed (README counts `company_meta` keys), `as_of` and period 2026-01-01 ~ 2026-11-06. 219 models with official scores, 3,797 scores in total (checked 2026-11-08, host local, `python3 validate_data.py` and a direct count of `models_catalog.json`)
- Validation: `validate_data.py` → `OK: 258 models, 59 excluded, 219 with official scores`, generated-file equality PASS (re-run 2026-11-08). `--check-urls` ran in the 2026-11-06 audit before the push: 0 failures, warnings mostly HF 429; the exact warning count was not preserved (not re-run by this wiki run). OpenAI pages return 403 to `curl` and were read through a mirror rendering
- Inclusion judgment: the 2026-10-15 inclusion exception (`scope.inclusion_exception`) — official first-party source plus industry reference point, not category. Exception categories: `Embedding`, `Image generation`, `Music generation`, `Memory`. Rules and precedents are canonical in `components/catalog-pipeline.md`
- Latest audit: 2026-11-06 (16 new, 2 records updated, 8 ledger entries `excluded-2026-11-06-1`…`-8`). New: GPT-6.1 Terra, GPT-6 Cyber (limited), Gemini 4 Carbon (limited), LFM3 ×6, Kanana-2-v-decide-3b-2611, Sarvam-Prism, Mage-VL-Cowork, SenseNova-Loop-9B-Preview, NorthCUA Pro/Mini/Nano. Updated: Kimi K3.1 Pro (weights 11/2), Mistral Large 4 (GA and weights 10/29). Details and sources are canonical in `models_catalog.json`, README, and `조사 자료`; audit rules learned are in `components/catalog-pipeline.md`
- Deployment: Pages `build_type` is `legacy` (branch `main`, path `/`) — the live site is the raw branch; `deploy-pages.yml` also runs `validate_data.py` on push. The 2026-11-06 push (`21a6c57`) had `Deploy GitHub Pages` and `pages build and deployment` succeed, and live `data.js` matched the local file (observed 2026-11-06 in the audit session; `gh run list` re-read 2026-11-08, host local). Repository: `DT-HJ/llm-timeline`, Pages at `dt-hj.github.io/llm-timeline/`
- The header period in README and `index.html` derives from `SCOPE_DATA.period` — keep the period right and the rest is generated
- Wiki: SCHEMA 0.4.0, `wiki-language: en`. Dashboard structure, filters, theming, and the manual `?v=` cache version are canonical in `components/web-dashboard.md` (no UI code changed since 2026-10-22)

## Partially Implemented

- Family lineage: `FAMILY_FLOWS` in `data.js` exists only as data with no UI view drawing it — 34 flows after the 11/06 audit, including the new Liquid LFM flow (code read)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV export · status filter — listed as open work in README (code read; no such UI or handlers)

## Current Blockers

- None

## Active Risks / Unknowns

- **Limited-access records are provisional**: Gemini 4 Carbon (modalities `text`, context `미공개` — the announcement states neither) and GPT-6 Cyber keep first-announcement dates (Argon precedent). Update them when general availability or a card appears
- **HF coverage gaps**: the 2026-10-26 sweep found models missed by earlier audits (back to 2026-06-21). The sweep in `runbooks/audit-update.md` is a net, not a census; run it each audit and check family siblings of anything found. Late card updates can also race an audit
- **Third-party provenance inside provider tables**: a table row sourced from Artificial Analysis (marked "(AA)" or in a methodology PDF) is excluded even when printed on the vendor's page (Gemini 4 Carbon, Mistral Large 4). Check footnotes before keying a score
- **Intermittent CI validation gate**: the `deploy` job sat in `waiting`/`pending` from 2026-09-19 to 10-01, then succeeded on later pushes, including the 2026-11-06 one. Cause unknown — keep the local `validate_data.py` run before pushing as the real gate
- **Exclusion judgments outside the ledger**: enter every exclusion in `models_catalog.json` `excluded` in the same commit — the validator does not check `excluded` contents or the README ledger count
- **Unknown organization origin**: Ornith, Terminal-RSI, GLiDE's Fastino, LightOn, MinimaLabs, SenseNova and beipo-ai have no first-party country statement and are recorded as `미공개` (🌐) rather than guessed
- **New countries and Korean aliases are manual**: a new `country` code needs an SVG in `assets/flags/` plus an entry in `app.js` `FLAG_CODES`; Korean search aliases are hand-added in `buildIndexes`
- **UI asset cache version is manual**: Pages is `legacy`, so bump `?v=` in `index.html` whenever `style.css` or `app.js` changes
- **Source volatility** (canonical: `components/catalog-pipeline.md` Known Limitations): `qwencloud.com` 404 (`model-043`), HF 429, `memory.hunyuan.tencent.com` TLS timeouts, CSS-in-JS tables on `dev.meta.ai`, React shells on `*.github.io`, bot-protected `openai.com`
- **Dead links after the repository rename**: the old Pages address 404s; in-repo links are fixed, external bookmarks cannot be

## Next Logical Work

- Next audit (after 2026-11-06): run the HF sweep, research new releases → include/exclude → `build_data.py` → `validate_data.py` (+`--check-urls`) → README statistics → commit and push. Procedure in `runbooks/audit-update.md`
- Re-investigate: **Ling-3.1-flash-1019** (in the ledger because only Artificial Analysis-measured numbers exist; include if official scores appear), **OpenCSG Agentic-27B**, **Heimr 570M**, **Muse Video**, the Ornith-1.0 **31B dense** member, Gemini 4 Carbon general availability
- Awaiting operator decision: whether to apply the clause "even in-scope categories may hold low-importance derivatives or snapshots" to existing records
- After each push, check the custom `deploy` job with `gh run list`
