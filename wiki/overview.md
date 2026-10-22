---
title: Overview
type: overview
status: current
updated: 2026-10-22
---

# Overview

## Purpose

A release timeline of the major LLM/MLLM foundation models of 2026. It is a GitHub Pages project that maintains a structured model catalog backed by official first-party sources and serves it as an interactive web timeline. Since the 2026-10-15 revision, inclusion is decided by **importance**, not by category (`scope.inclusion_exception`) — releases in adjacent categories (embedding, image/music generation, memory, ...) are included when they set an industry reference point.

## Primary Goal

On the user's instruction, periodically research new releases, add them to `models_catalog.json`, regenerate and validate the generated files (`data.js`, `조사 자료`), and push to `main` so GitHub Pages picks them up.

## Non-goals

- Third-party metrics — Chatbot Arena/ELO, Artificial Analysis, third-party leaderboards, and estimated or back-calculated scores never go into the score tables (`benchmark_policy` in `models_catalog.json`).
- Out-of-scope models — `scope.excluded` lists image/video-generation-only, OCR-only, ASR/TTS-only, embedding/reranker, reward/guard-only, simple quantized checkpoints, and intermediate checkpoints that are not standalone products; each judgment is kept in the excluded ledger (`excluded`) with its reason and source. **2026-10-15 revision: this list is a category classification, not a blocklist.** A release in one of these categories is still included if (1) it has an official first-party source from the developer and (2) it sets an industry reference point in that category (first, best, or largest) (`scope.inclusion_exception`). The first exception inclusions were EmbeddingGemma 2 (embedding), Qwen-Image-2.1 and Muse Image (image generation), and MiniMax Music 3.0 (music generation), with `category` set to `Embedding`, `Image generation`, and `Music generation` to separate them from LLM/MLLM. On 2026-10-22 Hy-Memory-30B-A3B (memory writer) was added as `Memory`.
- Server-side features — this is a purely static site with no build tool or backend.

## Hard Constraints

- Cite official first-party sources only: only developer-owned domains registered in `OFFICIAL_HOSTS` in `validate_data.py` are accepted as source URLs. A new publisher's domain must be added to that list to pass validation.
- `models_catalog.json` is the single SSOT. `data.js` and `조사 자료` are regenerated only by `python3 build_data.py` and never edited by hand.
- Parameters and benchmarks record only values printed in official material. Undisclosed values are shown as `정확한 수치 미공개`, and empty scores carry their reason in `benchmark_note`.
- The deploy pipeline (`deploy-pages.yml`) declares a `validate_data.py` run on push. Its `deploy` job sat in `waiting`/`pending` from 2026-09-19 to 10-01 and returned to success with the 2026-10-08 push — the state is intermittent, so the local `validate_data.py` run before pushing is the real gate. The live site is served by the native `pages build and deployment` from the `main` branch (`build_type: legacy`, observed 2026-10-22 via `gh api repos/DT-HJ/llm-timeline/pages`); see `current.md` Active Risks.

## Canonical References

- `README.md` — collection criteria, history of audit additions, footnotes on excluded-ledger reversals, deployment guide
- `models_catalog.json` — SSOT for models, the excluded ledger, organization metadata, family flows, and scope
- `validate_data.py` — validation rules (allowed hosts, forbidden metrics, allowed benchmark names, URL checks)
- `조사 자료` — generated per-model audit ledger (for human review)

## High-level Architecture

```text
Research official first-party material
  → models_catalog.json (SSOT, hand-edited)
  → build_data.py
  → data.js + 조사 자료 (generated, committed)
  → validate_data.py (structure, sources, scores, generated-file equality)
  → index.html + app.js + style.css (static dashboard)
  → push to main → GitHub Pages (branch build; deploy-pages.yml also runs validation)
```

## Terminology

- **SSOT**: `models_catalog.json` — the single source of truth for model names, release dates, parameters, official scores, and sources.
- **Excluded ledger**: the record of items judged out of scope, with reason and source. On a reversal the item moves to an active record and a README footnote records why (precedents: Muse Spark 1.2/1.3, Jev·Solar Jev, Laya).
- **parameter_status**: `verified` / `publisher-approximate` / `publisher-partial` / `undisclosed` — how strongly an official source backs the parameter value.
- **System One / structured decision·extraction**: a model class that returns a choice/score/noul decision with probabilities, or a typed value, instead of generating prose (Jev, Solar Jev, Laya, JEV-9B/27B, Strands Decider 2B, Clef/Clef-flash, H2O-Lightning-31B, Clairic). Included once officially released as a standalone API product with its own model ID.
- **Inclusion exception (2026-10-15)**: a release in a `scope.excluded` category is included if it has an official first-party source and sets an industry reference point (first, best, largest) in that category. Such records put a category-revealing value in `category` (`Embedding`, `Image generation`, `Music generation`, `Memory`, ...) to separate them from LLM/MLLM, and record the rationale in `note`.
- **Memory-specialized model (2026-10-22)**: a model dedicated to the write path of an external memory framework (Hy-Memory-30B-A3B). Not a general LLM/MLLM, but it is a standalone product with an official first-party source and open weights, so it is included under the `category: Memory` exception; its 0–100 aggregate on a 20% subsample goes into `benchmark_note` with conditions and values instead of the score table.
- **Excluded-ledger reversal**: when an exception inclusion or re-judgment moves a ledger item to an active record, delete that `excluded` entry and record why in a README footnote (precedents: Muse Spark 1.2/1.3, Jev·Solar Jev, Laya, EmbeddingGemma 2).
- **OFFICIAL_HOSTS / FORBIDDEN_BENCHMARK_TERMS / ALLOWED_BENCHMARK_NAMES / STALE_TEXT / BOT_PROTECTED_HOSTS**: the validation lists in `validate_data.py`.

## Quality Requirements

- Every number must appear directly at the official URL cited for it.
- Scores are accepted only on a 0–100 % scale. Non-% metrics (Elo, dollars, ratings) are recorded only in `benchmark_note` or audit-ledger notes. A 0–100 aggregate or subsample score (e.g. Hy-Memory's 4-harness average of 55.49) that is not a single % benchmark stays out of the score table; its conditions and value go into `benchmark_note`.
- The README's model count, organization count, and score totals are reconciled with the catalog on every update.
