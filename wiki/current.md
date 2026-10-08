---
title: Current State
type: current
status: current
updated: 2026-10-08
---

# Current State

## Working

- 카탈로그: 활성 모델 199개, 제외 원장 33개, 표기 조직 57개, `as_of` 2026-10-08, 범위 2026-01-01 ~ 2026-10-08. 공식 점수 보유 178개 모델·누적 3,125점 (확인 2026-10-08, host local, `python3 validate_data.py` 출력)
- 검증: `python3 validate_data.py` → `OK: 199 models, 33 excluded, 178 with official scores`, 생성물 일치 검사 PASS (2026-10-08, host local)
- URL 실측: `python3 validate_data.py --check-urls` → 285개 출처 스윕 PASS (2026-10-08, host local). 경고는 HF 429 25건·`ifm.ai` 봇 보호 403 2건뿐, 실패 없음
- 10/8 감사 수록(커밋 `23d27cf`): 신규 7종 — **Strands Decider 2B**(`model-203`, AWS Strands Labs 첫 System One 오픈 모델, 신규 조직 🇺🇸), **Clef·Clef-flash**(`model-204/205`, Cloudflare Workers AI 첫 자체 모델 27B·9B 멀티모달 결정 모델, 신규 조직 🇺🇸), **Kolibri-1**(`model-206`, Aleph Alpha 78.1B-A3.46B 독일어·영어 MoE·1M, 신규 조직 🇩🇪), **Mistral Large 4**(`model-207`, 1.05T-A52B 네이티브 멀티모달 퍼블릭 프리뷰 — 가중치는 이달 말 예고라 `open_weights: false`), **Tiny Aya L2-Thinker**(`model-208`, Cohere Labs 3.35B in-language 추론), **Claude Haiku 5.5**(`model-209`, 1M 컨텍스트·128K 출력·effort 조절)
- 제외 원장 신규 4건: Reflection AI Beam(501B-A23B 발표만, 가중치·카드·API 미공개 — 이달 말 가중치 예고로 보류) · OpenAI Decisions API(`gpt-6-luna` 제품 계층, 별도 모델 ID 없음) · EmbeddingGemma 2(임베딩 전용) · GPT-6 Sol/Luna October 갱신(배포 업데이트)
- 첫 2026-10 모델 수록으로 `index.html` 월 버튼·`app.js` `months` 배열·정렬 라벨을 같은 커밋에서 10월까지 갱신
- 배포 관측 (2026-10-08, host local, `gh run list` + 라이브 `data.js` GET): `23d27cf` 푸시 후 네이티브 `pages build and deployment`와 커스텀 `Deploy GitHub Pages` **둘 다 success** — 라이브 `data.js`에 Haiku 5.5 포함 `2026-10` 모델 7건 반영 확인. 커스텀 워크플로는 9/19 이후 첫 실행(Active Risks 참조)
- 배포 파이프라인(코드 읽음): `deploy-pages.yml`은 push마다 `python3 validate_data.py`를 실행하도록 선언돼 있다(워크플로 파일은 `c2de7f5`(9/8) 이후 변경 없음)

## Partially Implemented

- 패밀리 계보: `data.js`의 `FAMILY_FLOWS`는 데이터만 존재하고 그리는 UI 뷰가 없음 — Claude 플로우 끝에 `Haiku 5.5` 추가 (코드 읽음)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV 보내기 · 기업/유형/상태/오픈웨이트 필터 — README가 구현 과제로 명시 (코드 읽음; 해당 UI·핸들러 부재)

## Current Blockers

- 없음

## Active Risks / Unknowns

- **CI 검증 게이트 간헐 정지** (관측 갱신 2026-10-08, host local, `gh run list`): `deploy` job이 2026-09-19~10-01 사이 `waiting`/`pending`으로 실행되지 않았으나 `23d27cf` 푸시에는 22초 만에 success로 복귀. 정지 원인(동시성 그룹 `pages`의 잔여 `waiting` job 추정)은 미확인이라 간헐 상태로 본다 — **푸시 전 로컬 `validate_data.py`를 게이트로 유지**
- **월 칩 하드코딩**: `index.html` 버튼과 `app.js` `months` 배열이 2026-01~10. 첫 2026-11 날짜 모델 수록 시 두 곳을 함께 갱신(날짜 모델 없는 빈 월 칩은 `jumpToMonth`가 active 표시만 남김)
- `.playwright-mcp/`는 미추적 작업 산출물 — 커밋 대상 아님 (확인 2026-10-08, `git status`)
- SCHEMA 0.3.1 대비 템플릿 0.4.0 — 언어 정책(`wiki-language`·§5 마이그레이션 문단) 이전 제안, 승인 대기
- 출처 함정 상세(openai.com RSC 차트 페이로드·`*.github.io` React 셸·HF 429/gated·봇 403 호스트)는 `components/catalog-pipeline.md`의 Important Invariants·Known Limitations가 canonical

## Next Logical Work

- 보류 4종 재조사(공식 아티팩트 공개 시 수록 판정): **Reflection AI Beam**(가중치·기술 보고서·모델 카드 2026-10월 말 공개 예고) · **Ling-3.1-flash**(Ant Ling 문서·가격표 미등재) · **OpenCSG Agentic-27B**(카드에 날짜 표기 없음, 저장소 2026-09-11 vs 발표 9/30 불일치) · **Heimr 570M**(가중치·API 미공개)
- 미등록 후보: **ZGCM-1**(중관춘학원 7B, arXiv v1 2026-09-11 — 창구 밖) · **Kimi K3.1**(API 식별자 유출만) · **GPT-6.1 Astra**(공식 발표 없음) · 스텔스 **Space Bunny Alpha**·**Union Alpha/Pareto 26.9**(개발사 발표 2026-10-10 예고) · **Mistral Large 4 가중치** 공개 시 `open_weights`·출처 갱신
- 다음 감사 주기(2026-10-09 이후): 신규 릴리스 조사 → 수록/제외 판정 → `build_data.py` → `validate_data.py`(+`--check-urls`) → README 통계 → 커밋·푸시. 절차는 `runbooks/audit-update.md`
- CI 게이트 재확인: `deploy` job이 10/8에 복귀했으나 정지 이력이 있으므로 다음 푸시에서도 실행되는지 `gh run list`로 확인 — 재정지 시 `github-pages` environment 규칙/승인과 동시성 그룹 잔여 job 조사
