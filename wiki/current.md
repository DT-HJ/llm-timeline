---
title: Current State
type: current
status: current
updated: 2026-10-17
---

# Current State

## Working

- 카탈로그: 활성 모델 215개, 제외 원장 36개, 표기 조직 59개, `as_of`·범위 2026-01-01 ~ 2026-10-17. 공식 점수 보유 189개 모델·누적 3,327점 (확인 2026-10-17, host local, `python3 validate_data.py` 출력)
- 검증·실측: `python3 validate_data.py` → `OK: 215 models, 36 excluded, 189 with official scores`, 생성물 일치 검사 PASS (2026-10-17, host local). `--check-urls` → 325개 출처 URL 스윕 **실패 0건**(경고는 HF 429 rate-limit과 봇 보호 호스트 `ifm.ai` 403뿐)
- 수록 판정 정책(2026-10-15 개정): 부류(`scope.excluded`)가 아니라 중요도로 결정한다 — 공식 1차 출처 + 업계 기준점(최초·최고·최대)을 세운 릴리스면 예외 수록(`scope.inclusion_exception`), 근거는 레코드 `note`와 README 각주. 판정 규칙·선례는 `components/catalog-pipeline.md`가 canonical
- 최근 감사 수록분(10/15~10/17, 16종): 10/15 7종(Step 5 Preview · Muse Wonder 2종 · EmbeddingGemma 2 · Qwen-Image-2.1 · Muse Image · MiniMax Music 3.0) → 10/16 8종(Nemotron 3.5 Super VL/Bolt · Muse Spark Open · LFM2.5-24B-A2B · Jais-3-375B-A23B · Step 3.7 Flash 소급 · MiniCPM-V 4.7 · Grok Voice 3.0) → 10/17 1종(DeepSeek-V4.1-Flash-1017). 모델별 상세·출처는 `models_catalog.json`·README 감사 추가분·`조사 자료`가 canonical
- 배포 파이프라인(코드 읽음): `deploy-pages.yml`은 push마다 `python3 validate_data.py`를 실행하도록 선언돼 있다(워크플로 파일은 `c2de7f5`(9/8) 이후 변경 없음). 2026-10-17 `3fe306e` 푸시에서 `deploy` job success(22초)·네이티브 `pages build and deployment` success(27초)를 관측했고, 라이브 `https://dt-hj.github.io/llm-timeline/data.js`에 신규 레코드가 반영된 것을 확인했다 (관측 2026-10-17, host local, `gh run list`·`curl`)
- 저장소 이전(2026-10-15): 원격 `hojin12312/llm-timeline` → **`DT-HJ/llm-timeline`**, Pages 주소도 `dt-hj.github.io/llm-timeline/`(200)로 변경 — 구 주소는 404. 레포 내 링크·배포 안내는 정정 완료
- README·`index.html` 헤더 기준 기간은 카탈로그 `scope.period`에서 파생된다(`SCOPE_DATA.period` → `auditPeriodLabel`) — 기간만 맞추면 나머지는 생성·파생값

## Partially Implemented

- 패밀리 계보: `data.js`의 `FAMILY_FLOWS`는 데이터만 존재하고 그리는 UI 뷰가 없음 — 10/15~10/17 감사 반영으로 총 22개 플로우 (코드 읽음)
- 카테고리 분기: `category`에 `Embedding`·`Image generation`·`Music generation` 값이 들어오며 카드 태그는 그대로 렌더되지만, 유형별 색상·필터는 미구현 (코드 읽음)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV 보내기 · 기업/유형/상태/오픈웨이트 필터 — README가 구현 과제로 명시 (코드 읽음; 해당 UI·핸들러 부재)

## Current Blockers

- 없음

## Active Risks / Unknowns

- **제외 원장 누계 표기 불일치**(신규): 10/16 감사까지 README 누계가 38건으로 적혀 있었으나 실제 원장은 36건이었다 — EmbeddingGemma 2 되돌림(10/15) 미반영 1건과 원장 미등재 1건(**GPT-Live-1.1 / 1.1 Quip**, 커밋 메시지에 함께 적힌 **Timestral**도 원장 없음). 10/17 감사에서 README를 원장 기준(36건)으로 정정했고, **미등재 항목을 원장에 등재할지는 운영자 판단 대기**
- **CI 검증 게이트 간헐 정지**: `deploy` job이 2026-09-19~10-01 `waiting`/`pending`에 머물렀다가 10/8(`23d27cf`)·10/17(`3fe306e`) 푸시에 success로 복귀했다. 원인 미확인이라 간헐 상태로 보고 **푸시 전 로컬 `validate_data.py`를 실질 게이트로 유지**
- **저장소 rename에 따른 구 링크 사망**: 구 Pages 주소는 404이고 구 저장소 URL은 리다이렉트만 가능하다. 레포 내 링크는 정정했으나 외부 문서·북마크가 구 주소를 참조하면 깨진다 — README 공지 외 대응 수단 없음
- **월 칩 하드코딩**: `index.html` 버튼과 `app.js` `months` 배열이 2026-01~10. 첫 2026-11 날짜 모델 수록 시 두 곳을 함께 갱신
- **출처 휘발성·파싱 함정**(canonical: `components/catalog-pipeline.md` Known Limitations): `qwencloud.com` 모델 페이지 404 사례(2026-10-15 `model-043`), HF 429 rate-limit·봇 보호 403, `dev.meta.ai`의 CSS-in-JS 벤치마크 표, `*.github.io` React 셸 — 다음 감사에서도 우선 점검 대상
- `.playwright-mcp/`는 미추적 작업 산출물 — 커밋 대상 아님
- SCHEMA 0.3.1 대비 템플릿 0.4.0 — 언어 정책(`wiki-language`·§5 마이그레이션 문단) 이전 제안, 사용자 승인 대기

## Next Logical Work

- 다음 감사 주기(2026-10-17 이후): 신규 릴리스 조사 → 수록/제외 판정 → `python3 build_data.py` → `python3 validate_data.py`(+`--check-urls`) → README 통계 갱신 → 커밋·푸시. 절차는 `runbooks/audit-update.md`
- 보류·재조사 항목: **Reflection AI Beam**(10월 말 가중치 공개 예고) · **Ling-3.1-flash** · **OpenCSG Agentic-27B** · **Heimr 570M** · **Muse Video**(프리뷰 예고만) · **Gemini 4 Argon**(2026-10-13 전면 GA 이후 모델 카드·API 문서 공개 여부 — 현재 발표문 단일 출처)
- 운영자 판단 대기: 제외 원장 미등재 2건 등재 여부 · "포함 부류라도 중요도가 낮은 파생·스냅샷은 보류할 수 있다" 조항을 기존 레코드 전반에 적용할지
- 푸시할 때마다 `gh run list`로 커스텀 `deploy` job이 실제로 실행되는지 확인
