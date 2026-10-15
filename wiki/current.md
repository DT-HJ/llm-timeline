---
title: Current State
type: current
status: current
updated: 2026-10-15
---

# Current State

## Working

- 카탈로그: 활성 모델 206개, 제외 원장 33개, 표기 조직 57개, `as_of` 2026-10-15, 범위 2026-01-01 ~ 2026-10-15. 공식 점수 보유 182개 모델·누적 3,191점 (확인 2026-10-15, host local, `python3 validate_data.py` 출력)
- 검증: `python3 validate_data.py` → `OK: 206 models, 33 excluded, 182 with official scores`, 생성물 일치 검사 PASS (2026-10-15, host local)
- URL 실측: `python3 validate_data.py --check-urls` → 302개 출처 스윕 PASS (2026-10-15, host local). 경고는 HF 429와 `ifm.ai` 봇 보호 403뿐. **출처 사망 1건 정정**: `model-043`(Qwen3.6-Max-Preview)의 `https://www.qwencloud.com/models/qwen3.6-max-preview`가 404(같은 호스트 다른 모델 페이지는 200 → 봇 챌린지 아님). 공식 출처에서 제거하고 `parameter_source`를 Qwen 블로그로 교체, 레코드 `note`에 경위 기록
- **범위 정책 개정 (2026-10-15)**: `scope.scope`에 "중요도 예외" 항목, `scope.inclusion_exception` 키 신설 — 부류(`scope.excluded`)만으로 수록 여부를 결정하지 않는다. 공식 1차 출처가 있고 그 부류에서 업계 기준점(최초·최고·최대)을 세운 릴리스면 수록하고, 반대로 포함 부류라도 중요도가 낮은 파생·스냅샷·서빙 변형은 보류할 수 있다. 예외 수록 근거는 레코드 `note` + README 각주에 남긴다.
- 10/15 감사 수록(신규 7종): **Muse Wonder · Muse Wonder Full**(`model-215/216`, Meta MSL 첫 프론티어급 — 1M·텍스트/이미지/비디오/오디오 입력. Full은 Muse Code 구독 전용이라 Model API 미제공), **Step 5 Preview**(`model-212`, 600B-A27B 스파스 MoE·92층·1M·이미지/비디오 입력, 가중치 10/15 공개), **EmbeddingGemma 2**(`model-214`, 740M 멀티모달 임베딩·Apache 2.0 — 제외 원장에서 이관), **Qwen-Image-2.1**(`model-213`, 7B 통합 생성·편집·RGBA), **Muse Image**(`model-210`, MSL 첫 이미지 생성 모델 — 7/7 출시 소급 수록), **MiniMax Music 3.0**(`model-211`, 8B Global + 0.6B Local Hybrid-LM + 2.4B flow-matching + 123M Flow-VAE)
- 제외 원장 변경: `excluded-2026-10-08-3`(EmbeddingGemma 2) 삭제 — 되돌림 이관, `excluded-2026-10-15-1`(Muse Voice Transcribe · ASR/TTS 전용) 신규. 순증감 0이라 총계 33개 유지
- 1차 도메인 신규: `stepfun.com`(= 기존 `static.stepfun.com`을 접미 일치로 포괄), `stepfun.ai`(platform.stepfun.ai 개발자 문서), `dev.meta.ai`(Meta Model API 모델 문서)
- README·`index.html` 헤더 문구·`app.js` 정렬 라벨을 같은 커밋에서 10/15 기준으로 갱신(`SCOPE_DATA.period`가 헤더의 SSOT이므로 카탈로그 `scope.period`만 맞추면 나머지는 파생)
- **저장소 이전 (2026-10-15 관측)**: 원격이 `hojin12312/llm-timeline` → **`DT-HJ/llm-timeline`** 으로 rename됐다. 푸시는 구 URL의 리다이렉트로 성공했고 로컬 `origin`을 새 URL로 갱신했다. **GitHub Pages 주소도 `hojin12312.github.io/llm-timeline/`(404)에서 `dt-hj.github.io/llm-timeline/`(200)로 변경** — README 라이브 URL·클론 URL·배포 안내와 `index.html` 헤더 GitHub 링크 2곳을 새 주소로 정정했다.
- 배포 파이프라인(코드 읽음): `deploy-pages.yml`은 push마다 `python3 validate_data.py`를 실행하도록 선언돼 있다(워크플로 파일은 `c2de7f5`(9/8) 이후 변경 없음)

## Partially Implemented

- 패밀리 계보: `data.js`의 `FAMILY_FLOWS`는 데이터만 존재하고 그리는 UI 뷰가 없음 — 이번 감사로 `Step`(Step 3.5 Flash → Step 5 Preview)과 `Muse Wonder`(Muse Wonder → Muse Wonder Full) 플로우를 추가해 총 22개가 됐다 (코드 읽음)
- 카테고리 분기: `category`에 `Embedding`·`Image generation`·`Music generation` 값이 처음 들어왔다. 카드 태그는 `m.category || m.type`을 그대로 렌더하므로 별도 코드 변경 없이 표시되지만, 유형별 색상·필터는 미구현 (코드 읽음)

## Not Yet Implemented

- Generational Flow View · Card Grid View · Matrix Table View · CSV 보내기 · 기업/유형/상태/오픈웨이트 필터 — README가 구현 과제로 명시 (코드 읽음; 해당 UI·핸들러 부재)

## Current Blockers

- 없음

## Active Risks / Unknowns

- **Qwen Cloud 모델 페이지 휘발성**(신규): `qwencloud.com/models/<slug>` 형태 출처가 404로 죽는 사례가 생김(2026-10-15 Qwen3.6-Max-Preview). 같은 호스트의 형제 페이지가 200이면 실제 삭제이므로 다른 공식 출처(블로그·docs)로 교체하고 경위를 `note`에 남긴다 — 다음 감사에서도 Qwencloud 출처는 우선 점검 대상.
- **저장소 rename에 따른 구 링크 사망**: 구 Pages 주소(`hojin12312.github.io/llm-timeline/`)는 404이고 구 저장소 URL은 리다이렉트만 가능하다. 레포 내 링크는 정정했으나 외부 문서·북마크가 구 주소를 참조하면 깨진다 — README 공지 외에 대응 수단은 없음
- **StepFun 중간 세대 공백** (신규): 카탈로그의 StepFun 레코드는 Step 3.5 Flash(`model-010`, 2026-02-12)와 Step 5 Preview(`model-212`, 2026-09-20)뿐인데, 공식 HF 조직 `stepfun-ai`에는 Step 3.7-Flash 계열(2026-05 공개)과 Step 3.5 Flash-Base 등이 있다. Step 5 카드도 "Step-3.7-Flash에서 Step 5로 이동"이라 서술하므로 중간 세대가 미수록 상태다 — 다음 감사 과제
- **Muse Wonder 파라미터 미공개**: 시스템 카드·모델 페이지·발표문 어디에도 파라미터 수가 없다(`undisclosed`). 가중치·기술 보고서가 나오면 갱신
- **CI 검증 게이트 간헐 정지** (관측 2026-10-08, host local, `gh run list`): `deploy` job이 2026-09-19~10-01 사이 `waiting`/`pending`에 머물렀다가 `23d27cf` 푸시에 복귀. 원인 미확인이라 간헐 상태로 본다 — **푸시 전 로컬 `validate_data.py`를 게이트로 유지**
- **월 칩 하드코딩**: `index.html` 버튼과 `app.js` `months` 배열이 2026-01~10. 첫 2026-11 날짜 모델 수록 시 두 곳을 함께 갱신
- `.playwright-mcp/`는 미추적 작업 산출물 — 커밋 대상 아님
- SCHEMA 0.3.1 대비 템플릿 0.4.0 — 언어 정책(`wiki-language`·§5 마이그레이션 문단) 이전 제안, 승인 대기
- 출처 함정 상세(openai.com RSC 차트·`*.github.io` React 셸·HF 429/gated·봇 403 호스트)는 `components/catalog-pipeline.md`의 Important Invariants·Known Limitations가 canonical. **`dev.meta.ai`도 추가됨** — 정적 HTML에 벤치마크 표가 CSS-in-JS로 들어 있어 curl한 HTML에서 행 라벨 전체 → 열별 값 순서로 매핑해야 한다

## Next Logical Work

- **StepFun 중간 세대 소급 조사**: Step 3.6·3.7-Flash와 Step 3.5 Flash 파생(공식 HF `stepfun-ai` 조직, 2026-05 공개분) — 타임라인 계보 공백 해소
- **Gemini 4 Argon 출처 갱신**: 2026-10-13 전면 GA(`blog.google` 발표)로 모델 카드·API 문서가 열렸는지 재확인. 현재는 발표문 단일 출처
- 보류 항목 재조사: **Reflection AI Beam**(가중치 공개 시) · **Ling-3.1-flash** · **OpenCSG Agentic-27B** · **Heimr 570M** · **Muse Video**(프리뷰 예고만)
- **중요도 기준 정리**: 새 정책의 "포함 부류라도 중요도가 낮으면 보류" 조항을 적용해 기존 206개 레코드의 파생·스냅샷을 점검할지 결정 필요(운영자 판단 사항 — 자동 정리 금지)
- 다음 감사 주기(2026-10-16 이후): 신규 릴리스 조사 → 수록/제외 판정 → `build_data.py` → `validate_data.py`(+`--check-urls`) → README 통계 → 커밋·푸시. 절차는 `runbooks/audit-update.md`
- CI 게이트 재확인: 10/8에 복귀했으나 정지 이력이 있으므로 다음 푸시에서도 `deploy` job이 실행되는지 `gh run list`로 확인
