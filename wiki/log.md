# Wiki Log

## [2026-09-23] init | initial project memory

Source HEAD: 72e89df7888fbc3e8b05d725277cb5d1e4121a1b
Wiki:
- created SCHEMA.md, index.md, overview.md, current.md, components/catalog-pipeline.md, components/web-dashboard.md, runbooks/audit-update.md, AGENTS.md
Validation:
- python3 <skill-dir>/core/scripts/wiki_lint.py . — PASS (0 errors, 0 warnings)
Open:
- 라이브 GitHub Pages 배포 상태는 이번 런에서 확인하지 않음(레포 밖 대상)

## [2026-09-27] update | 9/24~9/27 감사 반영

Source HEAD: b2cbe6261685adc1694b55970f86c5b2f5ed037a
Wiki:
- updated current.md — 활성 모델 175→177, 조직 42→46, 공식 점수 160→161개 모델·2,992→2,994점, as_of 2026-09-27, 최근 수록 갱신
Validation:
- python3 <skill-dir>/core/scripts/wiki_lint.py . — PASS (0 errors, 0 warnings)
Open:
- 라이브 GitHub Pages 배포 상태는 이번 런에서 확인하지 않음(레포 밖 대상)

## [2026-09-29] update | 9/29 감사 반영 (신규 10종 수록)

Source HEAD: 1dab227c9914a26f85d89407ae7e0ba48e82aa44
Wiki:
- updated current.md — 활성 모델 177→187, 조직 46→51, 제외 원장 21→24, 공식 점수 161→168개 모델·2,994→3,030점, as_of·리스크·다음 작업 갱신
- updated components/catalog-pipeline.md — System One 예외 목록에 Laya·JEV 추가, gated/삭제 출처 제한을 Known Limitations에 기록
- updated overview.md — 제외 원장 되돌림 선례·System One 부류 예시에 Laya·JEV 반영
Validation:
- python3 /Users/studio/.claude/skills/wiki-update/core/scripts/wiki_lint.py . — PASS (0 errors, 1 warning: schema-version 0.3.1 vs template 0.4.0 — 선택적 마이그레이션)
Open:
- 라이브 GitHub Pages 배포 상태는 이번 런에서 확인하지 않음(레포 밖 대상)
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) 제안 — 승인 대기

## [2026-09-30] update | 9/30 감사 반영 (GPT-6.1 Sol·IQuest-Q1 신규 2종)

Source HEAD: b0c0b49911faf43f9df2395a540112d1f9d600ce
Wiki:
- updated current.md — 활성 모델 187→189, 조직 51→52, 공식 점수 168→170개 모델·3,030→3,049점, as_of 2026-09-30, 최근 수록·리스크·다음 작업 갱신
- updated components/catalog-pipeline.md — openai.com RSC 차트 페이로드와 `*.github.io` React 셸의 JS 번해 추출 방법을 Important Invariants에, 고속 서빙 티어 재판정과 국적 미공개 `company_meta` 관례를 Known Limitations에 기록
Validation:
- python3 validate_data.py — PASS (OK: 189 models, 24 excluded, 170 with official scores)
- python3 validate_data.py --check-urls — PASS (257 URL, HF 429·ifm.ai 403 경고만, 실패 없음)
Open:
- 라이브 GitHub Pages 배포 상태는 이번 런에서 확인하지 않음(레포 밖 대상)
- 1차 출처 미확보 후보 재조사: Ling 3.1 Flash · Kimi K3.1 · GPT-6.1 Astra
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) 제안 — 승인 대기

## [2026-09-30] update | 9/30 감사 wiki 정합 점검 (CI 게이트 이상 발견)

Source HEAD: a4d3652ad7b29ce2f1fba396ae3d8242672781eb
Wiki:
- updated current.md — CI 검증 게이트가 2026-09-20 이후 실행되지 않는 사실을 Active Risks에 기록(관측 근거 포함), 배포 관측(라이브 data.js 바이트 동일) 추가, Working·Next Logical Work 재분류
- updated components/catalog-pipeline.md — CI 불변식이 "선언"과 "실제 실행"을 구분하도록 qualify
- updated runbooks/audit-update.md — openai.com RSC 차트 페이로드·`*.github.io` React 번들 추출 절차와 차트 전용 벤치마크 처리, 푸시 전 로컬 검증 강의를 Failure Modes와 절차 8단계에 추가
- reviewed the hand-written 2026-09-30 log entry above (left as written)
- reviewed wiki/overview.md as changed in `1b1fd1a` inside this range — Laya·JEV-9B/27B 관련 편집이 카탈로그의 `type: System One / structured decision`과 일치해 그대로 유지
Validation:
- python3 <skill-dir>/core/scripts/wiki_lint.py . — PASS (0 errors, 1 warning: schema-version 0.3.1 vs template 0.4.0)
- python3 <skill-dir>/core/scripts/wiki_state.py budget . — current 1903/2000, bootstrap 3314/6000 (추정치, 모델 토크나이저 기준 아님)
Open:
- `deploy-pages.yml`의 `deploy` job이 2026-09-23T13:56Z부터 `waiting`인 원인은 미확인(환경 승인/규칙 추정). 게이트 복구 전까지 푸시 전 로컬 `validate_data.py`가 유일한 게이트
- 1차 출처 미확보 후보 재조사: Ling 3.1 Flash · Kimi K3.1 · GPT-6.1 Astra
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) — 사용자 승인 대기, 매 런 Open에 유지

## [2026-10-01] update | 10/1 감사 반영 (Gemini 4 Argon·Index-Translate·Darwin-180B-RSI 신규 3종)

Source HEAD: 02bfe54c91629d2cc6452b23e41b101c819eb9ba
Wiki:
- updated current.md — 활성 모델 189→192, 제외 원장 24→29, 표기 조직 52→54, 공식 점수 170→173개 모델·3,049→3,065점, as_of·범위 2026-10-01, 최근 수록·배포 관측·리스크·다음 작업 재계산
- updated components/catalog-pipeline.md — CI 게이트 정지 메커니즘(동시성 그룹 `pages`의 `waiting` job)을 선언/실제 실행 구분에 기록, 모델 카드 없이 발표문이 유일한 1차 출처인 릴리스(Gemini 4 Argon)를 Known Limitations에 추가
- updated runbooks/audit-update.md — Failure Modes에 "1차 출처 URL이 아직 없는 릴리스"·"릴리스 날짜 근거 불일치" 보류 규칙을 추가하고, 절차 4단계에 새 월 첫 수록 시 월 칩 동시 갱신 규칙 추가
- updated components/web-dashboard.md — 날짜 모델 없는 빈 월 칩의 `jumpToMonth` 동작(active 표시만 남음) 기록
- updated overview.md — 배포 게이트 hard constraint를 선언/실제 상태로 qualify
Validation:
- python3 validate_data.py — PASS (OK: 192 models, 29 excluded, 173 with official scores; 10/1 감사 작업 단위에서 실행)
- python3 validate_data.py --check-urls — PASS (268 URL 스윕, HF 429 rate-limit 25건·ifm.ai 봇 보호 403 2건 경고만, 실패 없음; 같은 작업 단위에서 실행)
- python3 <skill-dir>/core/scripts/wiki_lint.py . — PASS (0 errors, 1 warning: schema-version 0.3.1 vs template 0.4.0)
Open:
- 라이브 배포는 이번 작업 단위(감사·푸시)에서 확인함 — `hojin12312.github.io/llm-timeline/data.js`가 로컬과 바이트 동일(192개 모델, 2026-10-01 관측). 이 wiki 런은 네트워크 확인을 새로 수행하지 않았다. 커스텀 `Deploy GitHub Pages`는 이 푸시에도 `pending` — 게이트 복구는 `current.md` Next Logical Work
- 보류 3종 재조사: Ling-3.1-flash(Ant Ling 문서·가격표 미등재) · OpenCSG Agentic-27B(날짜 근거 불일치) · Heimr 570M(가중치·API 미공개)
- 미등록 후보: ZGCM-1(arXiv v1 2026-09-11 — 이번 창구 밖) · Kimi K3.1 · GPT-6.1 Astra · 스텔스 Space Bunny Alpha·Union Alpha/Pareto 26.9(10/10 발표 예고)
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) — 사용자 승인 대기, 매 런 Open에 유지

## [2026-10-08] update | 10/8 감사 반영 (Haiku 5.5·Mistral Large 4·Kolibri-1·Clef·Strands Decider·Tiny Aya L2-Thinker 신규 7종)

Source HEAD: 23d27cf5ef9a05da2135e7d58426e84df6bb965b
Wiki:
- updated current.md — 활성 모델 192→199, 제외 원장 29→33, 표기 조직 54→57, 공식 점수 173→178개 모델·3,065→3,125점, as_of·범위 2026-10-08, CI 게이트 복귀 관측·리스크·다음 작업 재계산
- updated components/catalog-pipeline.md — System One 수록 예외에 Strands Decider 2B·Clef·Clef-flash 추가, 기존 가중치 API 계층 미수록 판정(Decisions API), HF 공개 전환일·가중치 예고 프리뷰 관례, CI 10/8 success 관측 기록
- updated components/web-dashboard.md — 월 칩 하드코딩 범위 2026-01~09 → ~10
- updated overview.md — 배포 게이트 hard constraint를 10/8 success 관측으로 qualify, System One 예시 갱신
Validation:
- python3 validate_data.py — PASS (OK: 199 models, 33 excluded, 178 with official scores; 같은 작업 단위에서 실행)
- python3 validate_data.py --check-urls — PASS (285 URL 스윕, HF 429·ifm.ai 403 경고만, 실패 없음; 같은 작업 단위에서 실행)
- python3 /Users/studio/.claude/skills/wiki-update/core/scripts/wiki_lint.py . — PASS (0 errors, 1 warning: schema-version 0.3.1 vs template 0.4.0)
Open:
- Reflection AI Beam 가중치·기술 보고서·모델 카드 2026-10월 말 공개 예고 — 공개 시 재조사해 수록 판정
- 보류 3종 재조사: Ling-3.1-flash · OpenCSG Agentic-27B · Heimr 570M
- 스텔스 Space Bunny Alpha·Union Alpha/Pareto 26.9 발표 2026-10-10 예고 — 발표 후 재조사. Mistral Large 4 가중치 공개 시 `open_weights` 갱신
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) — 사용자 승인 대기, 매 런 Open에 유지

## [2026-10-15] update | 10/15 감사 반영 (Step 5 Preview·Muse Wonder 2종·EmbeddingGemma 2·Qwen-Image-2.1·Muse Image·MiniMax Music 3.0 신규 7종 + 범위 정책 개정)

Source HEAD: 47b824729933012853162f1f2344c5479dfd9070
Wiki:
- updated current.md — 활성 모델 199→206, 표기 조직 57(변동 없음), 공식 점수 178→182개 모델·3,125→3,191점, as_of·범위 2026-10-15, 범위 정책 개정(중요도 예외)과 저장소 rename 사실 추가, 리스크·다음 작업 재계산
- updated overview.md — Purpose·Non-goals를 "부류가 아니라 중요도로 수록 판정"으로 재작성, Terminology에 중요도 예외·되돌림 항목 추가
- updated components/catalog-pipeline.md — `scope.inclusion_exception` 인터페이스, 범위 판정 invariant, 2026-10-15 신규 도메인(stepfun.com·stepfun.ai·dev.meta.ai), AA 출처·Elo 제외 선별 규칙, dev.meta.ai CSS-in-JS 표 파싱·HF 커밋 로그로 가중치 공개 확인, qwencloud.com 404 사례
- updated components/web-dashboard.md — `category`에 Embedding/Image generation/Music generation 값이 들어오는 경로 기록
- updated runbooks/audit-update.md — 수록 판정 3단계를 중요도 기준으로 개정, Failure Modes에 "부류로 자동 제외" 추가
Validation:
- python3 validate_data.py — PASS (OK: 206 models, 33 excluded, 182 with official scores; 10/15 감사 작업 단위에서 실행)
- python3 validate_data.py --check-urls — 1차 302 URL 스윕에서 `www.qwencloud.com/models/qwen3.6-max-preview` 404 1건 발견 → 출처 제거·파라미터 출처를 Qwen 블로그로 교체 후 **재실측 301 URL PASS(실패 0건)**. HF 429·ifm.ai 봇 보호 403은 경고
- wiki_lint.py — 스킬 디렉터리가 이 머신에 없어 미실행
Open:
- 라이브 배포: `47b8247` 푸시 직후 `deploy-pages.yml`(Deploy GitHub Pages)과 네이티브 `pages build and deployment`가 모두 in_progress로 관측됨 — 구 주소(hojin12312.github.io/llm-timeline)는 404, 새 주소(dt-hj.github.io/llm-timeline)는 200
- StepFun 중간 세대(Step 3.6·3.7-Flash, 2026-05 공개) 소급 조사 · Gemini 4 Argon 10/13 GA 출처 갱신 · 중요도 기준에 따른 기존 레코드 점검 여부(운영자 판단)

## [2026-10-17] update | 10/15~10/17 감사 반영 (신규 16종 · 범위 정책 개정 · 스냅샷 리비전 규칙)

Source HEAD: 3fe306ef9c463b01be1764355b4bc5d234572005
Wiki:
- updated current.md — 활성 모델 206→215, 제외 원장 33→36, 공식 점수 182→189개 모델·3,191→3,327점, as_of·범위 2026-10-17, 10/17 배포 관측(`3fe306e` success + 라이브 data.js 반영) 추가, README 제외 원장 누계 정정(38→36) 리스크 신규, StepFun 중간 세대 공백 해소로 해당 리스크 제거, Next Logical Work 재계산 (추정 2382→1692/2000)
- updated components/catalog-pipeline.md — `OFFICIAL_HOSTS` 10/16 등록분(7개 호스트), 스냅샷 리비전 별도 레코드 수록 규칙(선례 0731·0813·1017 ↔ 배포 갱신 미집계 선례)과 스냅샷 ID 미노출 서빙 경로 판정 금지, `WebArena` 고정 평가 스위트 예외 3건, 제외 원장 누계가 기계 검증 대상이 아님(10/16 불일치 사례), 스냅샷 리비전 출처 3종 세트
- updated runbooks/audit-update.md — 수록 판정 3단계에 스냅샷 리비전 별도 수록 규칙 추가
- reviewed, no edit: components/web-dashboard.md·overview.md·index.md — 10/15·10/16 hand-written 변경(월 칩 2026-01~10, `category` 분기, 배포 게이트 qualify, 중요도 예외)을 코드·카탈로그와 대조해 정확함을 확인하고 그대로 두었다. log.md의 10/15 hand-written entry(`03cb112`가 Source HEAD 조정)도 내용을 바꾸지 않았다
Validation:
- python3 validate_data.py — PASS (`OK: 215 models, 36 excluded, 189 with official scores`, 생성물 일치 검사 포함; 10/17 감사 작업 단위에서 실행)
- python3 validate_data.py --check-urls — PASS (325 URL 스윕, 실패 0건. HF 429 rate-limit 다수·`ifm.ai` 봇 보호 403 2건은 경고 — 같은 작업 단위에서 실행)
- python3 <skill-dir>/core/scripts/wiki_lint.py . — PASS (0 errors, 1 warning: schema-version 0.3.1 vs template 0.4.0)
Open:
- 라이브 배포는 10/17 작업 단위에서 확인함(커스텀 `Deploy GitHub Pages` success 22초, 네이티브 `pages build and deployment` success 27초, `dt-hj.github.io/llm-timeline/data.js`에 신규 레코드 포함) — 이 wiki 런은 네트워크 확인을 새로 수행하지 않았다
- 제외 원장 미등재 2건(**GPT-Live-1.1 / 1.1 Quip**, 커밋 메시지에만 있는 **Timestral**)을 원장에 등재할지 — 운영자 판단 대기
- "포함 부류라도 중요도가 낮은 파생·스냅샷은 보류할 수 있다" 조항을 기존 215개 레코드에 적용할지 — 운영자 판단(자동 정리 금지)
- 보류·재조사: Reflection AI Beam(10월 말 가중치 공개 예고) · Ling-3.1-flash · OpenCSG Agentic-27B · Heimr 570M · Muse Video · Gemini 4 Argon(2026-10-13 전면 GA 후 모델 카드·API 문서 공개 여부)
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) — 사용자 승인 대기, 매 런 Open에 유지

## [2026-10-22] update | 10/22 감사 반영 (신규 9종 · Hy-Memory-30B-A3B 소급 · Memory 카테고리)

Source HEAD: 37b83e1905219a8b8edecfd542021f5abb95bf16
Wiki:
- updated current.md — 활성 모델 215→225, 제외 원장 39, 표기 조직 65, 공식 점수 190개 모델·3,342점, as_of·범위 2026-10-22, 10/22 감사 10종(신규 9 + Hy-Memory 소급)과 배포·URL 스윕 관측, Memory 카테고리·감사 타이밍 리스크 반영, 감사 검증(`validate_data.py`·`--check-urls`) 기록 (추정 1692→1465/2000)
- updated overview.md — Purpose/Non-goals/Terminology에 Memory 예외·Hy-Memory 예시, System One decision·extraction(Clairic·H2O-Lightning-31B), 0~100 집계·서브샘플 점수 원칙 추가
- updated components/catalog-pipeline.md — 2026-10-22 신규 호스트 6개, Memory 특화 모델 예외 invariant, 감사 시점 vs HF 카드 갱신 경합·Tencent TLS 재시도, CI 10/22 success 관측
- updated components/web-dashboard.md — category 값에 Memory(Hy-Memory-30B-A3B) 추가
- updated runbooks/audit-update.md — 수록 판정에 Memory 예외, Failure Modes에 감사 타이밍·공식 조직 귀속 확인 추가
- updated AGENTS.md — managed block의 `/wiki-update` 트리거 문장을 현재 canonical 문장으로 교체
- reviewed, no edit: index.md — 페이지 추가·이름 변경 없음, Current State 요약 유지
Validation:
- python3 /Users/studio/.agents/skills/wiki-update/core/scripts/wiki_lint.py . — PASS (0 errors, 1 warning: schema-version 0.3.1 vs template 0.4.0)
Open:
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) — 사용자 승인 대기, 매 런 Open에 유지
- 제외 원장 미등재 2건(**GPT-Live-1.1 / 1.1 Quip**, **Timestral**) 등재 여부 — 운영자 판단 대기
- 다음 감사에서 직전 창구(10/15~10/16) HF 신규 repo 재확인 · 보류·재조사: Reflection AI Beam · Ling-3.1-flash · OpenCSG Agentic-27B · Heimr 570M · Muse Video · Gemini 4 Argon

## [2026-10-22] update | 대시보드 UI 개편 (필터·다크 모드·스크롤스파이·월 칩 자동화·자산 캐시 버전)

Source HEAD: fef579e915de05eac859a92a845ba3f74a55efca
Wiki:
- updated components/web-dashboard.md — 현 구현으로 재작성: 필터 상태(activeGroup·openOnly·activeCompany), CATEGORY_GROUPS, 데이터 기반 월 칩, 스크롤스파이 잠금, 테마 키, 휠 축 상수-CSS 쌍 불변식, assets/flags·FLAG_CODES, Pages legacy 서빙과 수동 `?v=` 캐시 버전, benchmark_sources 중복 제거 보류 사유
- updated current.md — Working에 UI 개편·브라우저 확인 관측 추가, 카테고리 색상/필터 미구현 항목 삭제, 미구현 목록을 상태 필터·뷰·CSV로 축소, "월 칩 하드코딩" 리스크를 신규 국가·별칭 수동·웹폰트 의존·수동 캐시 버전 리스크로 교체
- updated runbooks/audit-update.md — 신규 국가 코드 시 국기 SVG·FLAG_CODES 추가, 월 칩 수동 추가 단계 삭제(자동 생성)
- reviewed, no edit: index.md·overview.md — 페이지 구성·상위 아키텍처(index.html + app.js + style.css 정적 대시보드) 변화 없음
Validation:
- python3 validate_data.py — PASS (`OK: 225 models, 39 excluded, 190 with official scores`)
- Playwright 수동 확인 — 라이트 1440·1024·820·390px, 다크 1440·1280·1024·820·390px; 휠 축 분리·필터 개수·월 칩 유지·스크롤스파이·해시·포커스 복원, 콘솔 에러 0 (host local)
- gh api repos/DT-HJ/llm-timeline/pages — build_type `legacy` (main `/`) → 워크플로 산출물 변형은 라이브에 반영되지 않음을 확인하고 SHA 스탬프 대신 수동 버전 채택
Open:
- SCHEMA 0.3.1 → 0.4.0 마이그레이션(언어 정책 문단) — 사용자 승인 대기, 매 런 Open에 유지
- 제외 원장 미등재 2건(**GPT-Live-1.1 / 1.1 Quip**, **Timestral**) 등재 여부 — 운영자 판단 대기

## [2026-10-22] update | UI overhaul review, excluded-ledger additions, SCHEMA 0.4.0 and English migration

Source HEAD: fa349406b3cbba3a843cf88a64268c5f95b0bda1
Wiki:
- reviewed, no edit: components/web-dashboard.md, runbooks/audit-update.md, current.md and log.md as changed in `3be62fb` (hand-made commit without the run trailer) — checked against `app.js` (`FLAG_CODES`, `THEME_KEY`, `CATEGORY_GROUPS`, `AXIS_*`, `lockScrollSpy`, `buildIndexes`, `setCompanyFilter`), `style.css` axis padding and `index.html` `?v=20261022`; accurate, kept as is
- reviewed, no edit: SCHEMA.md, index.md, overview.md, current.md, components/catalog-pipeline.md as changed in `fa34940` (user-approved work-unit commit made before this run's commit)
- SCHEMA migrated 0.3.1 → 0.4.0 (in `fa34940`); `wiki-language` ko → en by user approval — bootstrap set (index, overview, current) is English; components/ and runbooks/ stay largely Korean until substantively rewritten
- source range `37b83e1..fa34940` (20 paths: UI overhaul `fef579e`, excluded-ledger additions `7e7dfde`) is reflected in web-dashboard.md, current.md, and catalog-pipeline.md
Validation:
- python3 /Users/studio/.claude/skills/wiki-update/core/scripts/wiki_lint.py . — PASS (0 errors, 0 warnings)
Open:
- Push and the live Pages check for `7e7dfde`/`fa34940` and this entry are done after this commit, outside the wiki run

## [2026-10-22] maintenance | finish English migration of the remaining pages

Source HEAD: fa349406b3cbba3a843cf88a64268c5f95b0bda1
Wiki:
- rewrote components/catalog-pipeline.md, components/web-dashboard.md, runbooks/audit-update.md in English at the user's request (meaning preserved; Korean kept only for file names, data strings, and the commit-message format example); catalog-pipeline.md also corrects the excluded-ledger ID note (older entries keep `model-###` IDs) and records the 2026-10-22 URL sweep; audit-update.md adds the "exclusion recorded outside the ledger" failure mode
- updated current.md — replaced the "language migration in progress" risk with the finished state
- left old log.md entries in their original language (audit history is not rewritten, protocol §10)
Validation:
- python3 /Users/studio/.claude/skills/wiki-update/core/scripts/wiki_lint.py . — PASS (0 errors, 0 warnings)
Open:
- none
