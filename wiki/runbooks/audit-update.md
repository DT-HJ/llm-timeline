---
title: Audit Update
type: runbook
status: current
updated: 2026-10-22
---

# Runbook: Audit Update

## Purpose

The recurring procedure for researching new LLM/MLLM releases, bringing the catalog up to date, and pushing it to GitHub.

## Preconditions

- The `main` branch is clean and in sync with `origin`.
- Untracked outputs such as `.playwright-mcp/` (ignored via `.gitignore`) stay out of commits.
- The Telegram Notice bot for completion reports is configured (a machine-local personal config file — its path and credentials are not recorded in this repository).

## Procedure

1. **Research**: use official first-party material only — developer announcement blogs, model cards (HF), official docs. Capture release date, parameters, context, and official scores verbatim.
2. **Duplicate check**: check whether the release is already in `models_catalog.json` `models[]` or `excluded[]`. If it is in the excluded ledger, decide whether to move it back (reversal).
3. **Inclusion judgment**: `scope.excluded` is a **category classification** — never exclude on category alone (2026-10-15 revision). If (1) there is an official first-party source from the developer and (2) the release sets an industry reference point in its category (first, best, largest), add it as an active record with the category value (`Embedding`, `Image generation`, `Music generation`, `Memory`, ...) in `category`. A memory-specialized model is included as `Memory` when it is a standalone product dedicated to the write path of an external memory framework (2026-10-22 Hy-Memory-30B-A3B precedent — 0–100 aggregate / 20% subsample scores go into `benchmark_note`, not the score table). Only items that miss the bar go into `excluded[]` with an `id` (`excluded-YYYY-MM-DD-N`), reason, and official source — **in the same commit that reports the judgment** (two judgments once lived only in README/commit messages; see `components/catalog-pipeline.md`). Atypical models released as standalone API products with their own model IDs, such as System One / structured decision models, are judged by the same criteria. **An official snapshot revision of the same model line** (e.g. `DeepSeek-V4.1-Flash-1017`) gets its own record when it has its own official model ID (HF repo) and new official scores, and the old revision's record is kept (2026-10-17 precedent — rules and the precedent list are in Important Invariants of `components/catalog-pipeline.md`).
4. **Edit the catalog**: change `models_catalog.json` only.
   - New record: the next `model-###` ID, with fields in the same order as existing records.
   - Parameters: the officially stated value + `parameter_status`; undisclosed values are `정확한 수치 미공개` + `undisclosed`.
   - Scores: only officially printed ones go into `benchmarks{}`, each with its source URL in `benchmark_sources{}`. Otherwise an empty object + the reason in `benchmark_note`.
   - `release_date_source` and `parameter_source` must also be listed in `official_sources`.
   - A new organization gets `country`/`flag`/`color`/`badge` in `company_meta` (appended at the end by convention — the UI uses only `country`). For a country code not seen before, download `assets/flags/<code>.svg` and add the code to `app.js` `FLAG_CODES` (`assets/flags/README.md`). If search aliases are needed, also update the Korean alias rules in `app.js` `buildIndexes`.
   - Update `family_flows` when a family advances a generation. Update `as_of` and `scope.reviewed_on`.
   - Month chips are generated from the dates in `TIMELINE_DATA` (since 2026-10-22) — the first model of a new month needs no change to `index.html` or `app.js`.
5. **Register hosts**: if a newly cited publisher domain is missing from `OFFICIAL_HOSTS` in `validate_data.py`, add it.
6. **Regenerate and validate**: `python3 build_data.py` → `python3 validate_data.py`. If possible, also `python3 validate_data.py --check-urls`.
7. **Update README**: header statistics (model and organization counts), the audit-additions section, the excluded-ledger count (count the catalog directly), the organization list, and reversal / importance-exception footnotes. If a policy was revised, also fix the Non-goals in `wiki/overview.md` and step 3 of this runbook.
8. **Commit and push**: after `git diff --check`, commit in the existing style (`feat: ... (총 N개 / M개 조직)`) and `git push origin main`. **Do not rely on the CI validation gate** — the `validate_data.py` run in `deploy-pages.yml` may be stalled (check the facts in `current.md`), so pass validation locally before pushing. Confirm the live deploy with `gh run list`.
9. **Notify**: report completion through the local Telegram Notice bot (follow the procedure in the machine-local config doc).

## Expected Output

- `validate_data.py` prints `OK: N models, M excluded, K with official scores`.
- After the push, `git status -sb` shows `## main...origin/main` in sync.

## Verification

- `python3 validate_data.py` PASS is the same condition as the deploy gate.
- If `--check-urls` fails, open the URL manually to tell a real dead link (404/410) from a bot challenge.

## Failure Modes

- **Automatic exclusion by category**: skipping a release only because its category is named in `scope.excluded` misses important releases (the reason EmbeddingGemma 2, Qwen-Image-2.1, Muse Image, and MiniMax Music 3.0 were added retroactively on 2026-10-15). When a first-party source exists and only the category differs, judge inclusion first.
- **Exclusion recorded outside the ledger**: a judgment written only in README or a commit message is invisible to the catalog and to the validator (GPT-Live-1.1 / 1.1 Quip and Timestral, judged 10/16, entered 10/22). Always add the `excluded[]` entry in the same commit.
- **JS-shell doc pages** (Upstage Console, ...): when static HTML is empty, extract the body from the Next.js/RSC payload. Two cases confirmed on 2026-09-30:
  - **openai.com `/index/*` announcements**: `curl` and plain GETs get 403, so the body is read through a mirror rendering. Even announcements with no absolute values in the text (only improvement margins) yield per-effort scores by parsing the RSC payload's `\"data\":{\"values\":[...]}` chart data — OpenAI announcements repeat this pattern every audit, so assume it by default.
  - **An organization's own GitHub Pages site (`*.github.io`)**: if the static HTML is a React shell, the body is in the `assets/App-*.js` bundle. HF model cards often give the same table only as an image, so the project site is used as the text source. Passing requires `github.io` in `OFFICIAL_HOSTS`.
- **Bot-challenge 403**: hosts registered in `BOT_PROTECTED_HOSTS` pass with a warning. A persistent 403 from an unregistered host is a failure — replace it with another official source, or add the host after a manual check.
- **Charts but no printed table**: if a benchmark is provided only as a chart image, do not guess scores; leave an empty score with the reason in `benchmark_note`. Conversely, if the chart JSON is available as text, cite those values as the first-party source.
- **Forbidden metrics**: benchmark names caught by `FORBIDDEN_BENCHMARK_TERMS` stay out of the score table and are described in `note`/`benchmark_note`. For a fixed evaluation suite, add an exact-name exception to `ALLOWED_BENCHMARK_NAMES`.
- **Committing a validation failure**: the workflow is declared as blocking deploys, but the real gate has stalled before (as of 2026-09-30; facts in `current.md`) — always pass local validation before pushing. Never leave validation failures to CI.
- **A release with no first-party source URL yet**: if there is a public announcement but no official doc, model card, or weights, do not include it; record it in `excluded[]` as pending (precedents: Ling-3.1-flash 2026-09-30 — not listed in Ant Ling's official docs or price list; iFLYTEK Spark X2.5 2026-09-07). Re-investigate once an official page appears.
- **No first-party source for the release date**: if the model card has no date and the repository creation date disagrees with the announcement date, hold the date instead of fixing it (precedent: OpenCSG Agentic-27B — Hugging Face repository 2026-09-11 vs. announcement 2026-09-30). When the repository's public date is used as `date`, record its basis (Hugging Face API `createdAt`) in `note` (precedent: Darwin-180B-RSI `model-200`).
- **Audit timing vs. a late card update**: if an HF repository opens just before an audit and its model card and benchmarks are completed after the audit commit, it is missed as a candidate (precedent: Hy-Memory-30B-A3B — public on HF 10/15, card updated 10/16 17:12 KST, audit 10/16 12:29 KST). In the next audit, re-check the previous window's new HF repos, and record a late-completed card as a retroactive addition with a README footnote.
- **HF organization of uncertain official attribution**: cross-check against the model's listing on the developer's own site (precedent: iFLYTEK Spark-X2.6 — official attribution of `XHToken` confirmed by its listing in the `xfyun.cn` MaaS model square).

## Relevant Files

- `models_catalog.json`, `build_data.py`, `validate_data.py`, `README.md`
