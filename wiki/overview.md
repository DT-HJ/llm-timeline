---
title: Overview
type: overview
status: current
updated: 2026-10-15
---

# Overview

## Purpose

2026년 주요 LLM·MLLM 파운데이션 모델 출시 타임라인. 공식 1차 자료와 함께 구조화된 모델 카탈로그를 유지하고, 인터랙티브 웹 타임라인으로 제공하는 GitHub Pages 프로젝트다. 2026-10-15 개정으로 수록 범위는 부류가 아니라 **중요도**로 결정한다(`scope.inclusion_exception`) — 인접 부류(임베딩·이미지/음악 생성 등) 릴리스도 업계 기준점을 세우면 수록한다.

## Primary Goal

사용자 지시에 따라 주기적으로 신규 릴리스를 조사해 `models_catalog.json`에 수록하고, 생성물(`data.js`, `조사 자료`)을 재생성·검증한 뒤 `main`에 푸시해 GitHub Pages에 반영한다.

## Non-goals

- 제3자 지표 수록 — Chatbot Arena/ELO, Artificial Analysis, 제3자 리더보드, 추정·역산 점수는 점수 표에 넣지 않는다(`models_catalog.json`의 `benchmark_policy`).
- 범위 외 모델 — `scope.excluded`가 이미지/비디오 단독 생성, OCR 전용, ASR/TTS 전용, 임베딩·리랭커, 보상/가드레일 전용, 단순 양자화 체크포인트, 독립 제품이 아닌 중간 체크포인트를 나열하고, 각 판정은 제외 원장(`excluded`)에 사유·출처와 함께 보존한다. **2026-10-15 개정: 이 목록은 부류 분류일 뿐 수록 차단 목록이 아니다.** 부류에 속해도 ① 개발사 공식 1차 출처가 있고 ② 그 부류에서 최초·최고·최대 규모 등 업계 기준점을 세운 릴리스는 수록한다(`scope.inclusion_exception`). 첫 예외 수록은 EmbeddingGemma 2(임베딩), Qwen-Image-2.1·Muse Image(이미지 생성), MiniMax Music 3.0(음악 생성) 4종이며 `category`를 각각 `Embedding`·`Image generation`·`Music generation`으로 두어 LLM/MLLM과 구분한다.
- 서버 사이드 기능 — 빌드 도구·백엔드 없는 순수 정적 사이트다.

## Hard Constraints

- 공식 1차 출처만 인용한다: `validate_data.py`의 `OFFICIAL_HOSTS`에 등록된 개발사 자체 도메인만 출처 URL로 허용. 신규 발행사 도메인은 목록에 추가해야 검증을 통과한다.
- `models_catalog.json`이 유일한 SSOT다. `data.js`와 `조사 자료`는 `python3 build_data.py`로만 재생성하며 직접 편집하지 않는다.
- 파라미터·벤치마크는 공식 자료에 인쇄된 값만 기록한다. 미공개는 `정확한 수치 미공개`로 표시하고, 빈 점수에는 `benchmark_note`로 사유를 남긴다.
- 배포 파이프라인(`deploy-pages.yml`)은 push 시 `validate_data.py`를 실행하도록 선언돼 있다. `deploy` job은 2026-09-19~10-01 사이 `waiting`/`pending`으로 멈춰 있다가 2026-10-08 푸시에 success로 복귀했다 — 간헐 상태이므로 푸시 전 로컬 `validate_data.py`가 실질 게이트이고, 사이트 반영은 네이티브 `pages build and deployment`가 처리한다(`current.md` Active Risks).

## Canonical References

- `README.md` — 수집 기준, 감사 추가분 이력, 제외 원장 되돌림 각주, 배포 안내
- `models_catalog.json` — 모델·제외 원장·조직 메타·패밀리 플로우·scope SSOT
- `validate_data.py` — 검증 규칙(허용 호스트, 금지 지표, 허용 벤치마크 명칭, URL 체크)
- `조사 자료` — 생성된 모델별 감사 원장(사람 검토용)

## High-level Architecture

```text
공식 1차 자료 조사
  → models_catalog.json (SSOT, 수작업 편집)
  → build_data.py
  → data.js + 조사 자료 (생성물, 커밋 포함)
  → validate_data.py (구조·출처·점수·생성물 일치 검증)
  → index.html + app.js + style.css (정적 대시보드)
  → GitHub Actions deploy-pages.yml → GitHub Pages
```

## Terminology

- **SSOT**: `models_catalog.json` — 모델명·출시일·파라미터·공식 점수·출처의 단일 진실 공급원.
- **제외 원장(excluded ledger)**: 수록 범위 밖으로 판정한 항목의 사유·출처 기록. 되돌림(reversal) 시 활성 레코드로 이관하고 README 각주에 경위를 남긴다(선례: Muse Spark 1.2/1.3, Jev·Solar Jev, Laya).
- **parameter_status**: `verified` / `publisher-approximate` / `publisher-partial` / `undisclosed` — 파라미터 값의 공식 근거 수준.
- **System One / structured decision**: 산문을 생성하지 않고 choice/score/noul 결정+확률만 반환하는 모델 부류(Jev, Solar Jev, Laya, JEV-9B/27B, Strands Decider 2B, Clef/Clef-flash). 독립 API 제품·별도 모델 ID로 공식 출시되면 수록한다.
- **중요도 예외(inclusion exception, 2026-10-15)**: `scope.excluded` 부류에 속해도 공식 1차 출처가 있고 그 부류에서 업계 기준점(최초·최고·최대)을 세우면 수록한다. 예외 수록 레코드는 `category`에 부류를 드러내는 값(`Embedding`·`Image generation`·`Music generation` 등)을 넣어 LLM/MLLM과 구분하고, 근거를 `note`에 남긴다.
- **제외 원장 되돌림(reversal)**: 예외 수록·재판정으로 원장 항목을 활성 레코드로 옮길 때는 해당 `excluded` 항목을 삭제하고 README 각주에 경위를 남긴다(선례: Muse Spark 1.2/1.3, Jev·Solar Jev, Laya, EmbeddingGemma 2).
- **OFFICIAL_HOSTS / FORBIDDEN_BENCHMARK_TERMS / ALLOWED_BENCHMARK_NAMES / STALE_TEXT / BOT_PROTECTED_HOSTS**: `validate_data.py`의 검증 목록들.

## Quality Requirements

- 모든 수치는 인용한 공식 URL에 직접 기재돼 있어야 한다.
- 점수는 0~100 % 척도만 허용. Elo·달러·레이팅 등 비% 지표는 `benchmark_note`/감사 원장 메모에만 기록한다.
- README의 수록 모델 수·조직 수·점수 누계는 갱신 시마다 카탈로그와 일치시킨다.
