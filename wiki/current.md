---
title: Current State
type: current
status: current
updated: 2026-10-22
---

# Current State

## Working

- 카탈로그: 활성 모델 225개, 제외 원장 39개, 표기 조직 65개, `as_of`·범위 2026-01-01 ~ 2026-10-22. 공식 점수 보유 190개 모델·누적 3,342점 (확인 2026-10-22, host local, `python3 validate_data.py`)
- 검증·실측: `validate_data.py` → `OK: 225 models, 39 excluded, 190 with official scores`, 생성물 일치 PASS. `--check-urls` → 349개 URL 스윕 **실패 0건** — HF 429·`ifm.ai` 403, `memory.hunyuan.tencent.com` TLS handshake timeout 1회(재시도 PASS)는 경고 (2026-10-22, host local)
- 수록 판정: 2026-10-15 중요도 예외(`scope.inclusion_exception`) — 부류가 아니라 공식 1차 출처+업계 기준점으로 판단. 2026-10-22 Hy-Memory-30B-A3B를 `category: Memory`로 추가해 예외 부류가 `Embedding`·`Image generation`·`Music generation`·`Memory`로 확장됐다. 판정 규칙·선례는 `components/catalog-pipeline.md` canonical
- 최근 감사(2026-10-22, 10종): 신규 9종(Mercury 3 · MemT-1.0 Flash/Nano · Clairic · H2O-Lightning-31B · Eleven Realtime v1 Max/Mini · Raon-1 mini · Spark-X2.6-4B) + 소급 1종(Hy-Memory-30B-A3B). 상세·출처는 `models_catalog.json`·README·`조사 자료` canonical
- 배포: `deploy-pages.yml`은 push마다 `validate_data.py`를 실행하도록 선언(워크플로는 `c2de7f5`(9/8) 이후 변경 없음). 2026-10-22 `d978560`·`37b83e1` 푸시에서 `Deploy GitHub Pages`(24s·33s)와 네이티브 `pages build and deployment` 모두 success, 라이브 `data.js`에서 225개 레코드·Hy-Memory 확인 (관측 2026-10-22, host local, `gh run list`·`curl`)
- 저장소 이전(2026-10-15): `hojin12312/llm-timeline` → **`DT-HJ/llm-timeline`**, Pages도 `dt-hj.github.io/llm-timeline/`(200). 구 주소는 404, 레포 내 링크는 정정
- README·`index.html` 헤더 기간은 `SCOPE_DATA.period`에서 파생 — 기간만 맞추면 나머지는 생성값

## Partially Implemented

- 패밀리 계보: `data.js`의 `FAMILY_FLOWS`는 데이터만 존재하고 그리는 UI 뷰가 없음 — 10/22 감사 반영으로 총 30개 플로우 (코드 읽음)
- 카테고리 분기: `category`에 `Embedding`·`Image generation`·`Music generation`·`Memory`가 들어오며 카드 태그는 렌더되지만 유형별 색상·필터는 미구현 (코드 읽음)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV 보내기 · 기업/유형/상태/오픈웨이트 필터 — README가 구현 과제로 명시 (코드 읽음; 해당 UI·핸들러 부재)

## Current Blockers

- 없음

## Active Risks / Unknowns

- **제외 원장 미등재 2건**: **GPT-Live-1.1 / 1.1 Quip**, 커밋 메시지에만 있는 **Timestral** — 등재 여부 운영자 판단 대기
- **CI 검증 게이트 간헐 정지**: `deploy` job이 2026-09-19~10-01 `waiting`/`pending`에 머물렀다가 10/8·10/17·10/22 푸시에 success로 복귀. 원인 미확인 — 푸시 전 로컬 `validate_data.py`를 실질 게이트로 유지
- **감사 시점과 모델 카드 최종 갱신의 경합**: Hy-Memory-30B-A3B는 10/15 HF 공개됐지만 10/16 감사 커밋(12:29 KST)이 카드 최종 갱신(17:12 KST)보다 앞서 누락됐다. 다음 감사에서 직전 창구 HF 신규 repo를 재확인하고, 늦게 완성된 카드는 소급 수록 + README 각주로 남긴다
- **저장소 rename에 따른 구 링크 사망**: 구 Pages 404·구 저장소 URL 리다이렉트만 가능. 레포 내 링크는 정정, 외부 문서·북마크는 대응 수단 없음
- **월 칩 하드코딩**: `index.html` 버튼과 `app.js` `months`가 2026-01~10. 첫 2026-11 날짜 수록 시 두 곳 함께 갱신
- **출처 휘발성·파싱 함정**(canonical: `components/catalog-pipeline.md` Known Limitations): `qwencloud.com` 404(2026-10-15 `model-043`), HF 429, `memory.hunyuan.tencent.com` 간헐 TLS timeout(10/22 1회, 재시도 200), `dev.meta.ai` CSS-in-JS 표, `*.github.io` React 셸
- SCHEMA 0.3.1 vs 0.4.0 — 언어 정책(`wiki-language`·§5) 이전 제안, 사용자 승인 대기

## Next Logical Work

- 다음 감사(2026-10-22 이후): 신규 릴리스 조사 → 수록/제외 판정 → `build_data.py` → `validate_data.py`(+`--check-urls`) → README 통계 → 커밋·푸시. 절차는 `runbooks/audit-update.md`
- 직전 감사 창구(10/15~10/16)의 HF 신규 repo 재확인 — Hy-Memory 같은 타이밍 누락 점검
- 보류·재조사: **Reflection AI Beam**(10월 말 가중치 예고) · **Ling-3.1-flash** · **OpenCSG Agentic-27B** · **Heimr 570M** · **Muse Video** · **Gemini 4 Argon**(모델 카드·API 문서 공개 여부 — 현재 발표문 단일 출처)
- 운영자 판단 대기: 제외 원장 미등재 2건 등재 여부 · "포함 부류라도 중요도 낮은 파생·스냅샷은 보류 가능" 조항의 기존 레코드 적용 여부
- 푸시할 때마다 `gh run list`로 커스텀 `deploy` job 실행 확인
