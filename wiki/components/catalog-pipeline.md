---
title: Catalog Pipeline
type: component
status: current
updated: 2026-10-22
---

# Catalog Pipeline

## Responsibility

모델 데이터의 단일 진실 공급원(SSOT) 유지, 브라우저 데이터셋·감사 원장 생성, 그리고 공식 출처 정책의 기계적 검증을 담당한다.

## Interface

- `models_catalog.json` 최상위 키: `schema_version`, `as_of`, `benchmark_policy`, `parameter_policy`, `models[]`, `excluded[]`, `company_meta`, `family_flows[]`, `unconfirmed[]`, `scope`. `scope`는 `period`·`scope[]`·`excluded[]`·`inclusion_exception`·`reviewed_on`을 갖는다(2026-10-15에 `inclusion_exception` 추가).
- 모델 레코드 주요 필드: `id`(`model-###`), `name`, `date`/`sortDate`(`YYYY-MM-DD`, `~DD` 접미 허용), `company`, `family`, `type`, `category`, `status`, `parameters` + `parameter_status`, `architecture`, `modalities[]`, `focus[]`, `open_weights`, `license`, `context`, `languages`, `variants[]`, `reasoning_effort[]`, `availability`, `note`, `benchmarks{}` + `benchmark_sources{}` + `benchmark_note`, `official_id`, `official_sources[]`(`{label,url}`), `release_date_source`, `parameter_source`, `verification{status,reviewed_on,policy}`.
- `build_data.py`: 카탈로그 → `data.js`(`TIMELINE_DATA`, `COMPANY_META`, `FAMILY_FLOWS`, `UNCONFIRMED_DATA`, `SCOPE_DATA`, `AUDIT_EXCLUDED` 전역 상수)와 `조사 자료`(모델별 감사 원장 + 제외 원장 + 패밀리 흐름) 생성.
- `validate_data.py`: 구조·출처·점수 검증 + `data.js`와 SSOT의 일치 검사. `--check-urls`로 전 출처 URL 실측 가능.

## Current Implementation

- `models_catalog.json`을 수작업으로 편집 → `python3 build_data.py` 재생성 → `python3 validate_data.py` 검증의 3단 흐름.
- `validate_catalog`: ID·이름 중복, 날짜 형식(`2026-\d{2}-\d{2}(~\d{2})?`), `parameter_status` 어휘, `release_date_source`·`parameter_source`가 `official_sources`에도 나열됐는지, HF `official_id`와 출처 일치, 점수 0~100 숫자·출처 존재 여부를 검사. **`scope`·`excluded`의 내용 자체는 구조 검증 대상이 아니다** — 정책 문구는 `data.js`로 그대로 미러링될 뿐이므로 정책 개정은 카탈로그·README·wiki를 손으로 맞춰야 한다.
- `is_official_url`: `OFFICIAL_HOSTS`의 정확 호스트 또는 서브도메인 + `https`만 허용.
- `FORBIDDEN_BENCHMARK_TERMS`(`arena`, `elo`, `artificial analysis`, `aaii`, `codearena` 등)가 벤치마크명에 포함되면 `ALLOWED_BENCHMARK_NAMES` 정확 명칭 예외가 없는 한 오류. 2026-10-16에 `WebArena Verified`·`WebArena (vision)`·`webarena-verified` 고정 평가 스위트 예외가 추가됐다.
- `STALE_TEXT`: 과거 정정된 잘못된 표기(예: `~30B`, `MiMo-V2-Pro`)가 활성 레코드/생성물에 재등장하면 오류.
- `check_urls`: 호스트별 직렬화 + 재시도. 429·503은 경고, `BOT_PROTECTED_HOSTS`(`ifm.ai`, `openai.com`)의 지속 403도 경고, 그 외 호스트의 지속 403과 404/410은 실패.
- CI: `deploy-pages.yml`이 push마다 `python3 validate_data.py`를 실행하도록 선언돼 있다(워크플로 파일은 `c2de7f5` 이후 변경 없음). 선언과 실제 실행은 다르다 — 2026-09-19~10-01 사이 이 워크플로의 `deploy` job은 동시성 그룹 `pages`를 붙잡은 `waiting` 잔여 job 추정으로 `waiting`/`pending`에 머물렀으나, 2026-10-08 `23d27cf`·2026-10-22 `d978560`·`37b83e1` 푸시에는 각각 success로 복귀했다(간헐 상태 — 관측 2026-10-22, host local, `gh run list`; 상세·미확인 사유는 `current.md` Active Risks). 사이트 반영은 네이티브 `pages build and deployment`가 처리한다.

## Important Invariants

- `data.js`·`조사 자료`는 절대 수작업 편집하지 않는다 — 반드시 카탈로그를 수정하고 `build_data.py`로 재생성.
- 공식 자료가 직접 명시하지 않은 파라미터·점수는 넣지 않는다. 미공개 파라미터는 `정확한 수치 미공개` + `parameter_status: "undisclosed"`, 빈 점수는 `benchmark_note`에 사유를 기록.
- 신규 발행사 도메인을 출처로 쓰기 전에 `OFFICIAL_HOSTS`에 추가한다(서브도메인은 접미 일치로 자동 허용). 2026-10-15 신규 등록: `stepfun.com`(기존 `static.stepfun.com`을 포괄), `stepfun.ai`, `dev.meta.ai`. 2026-10-16 신규 등록: `blogs.nvidia.com`, `developer.nvidia.com`, `pytorch.org`, `liquid.ai`, 그리고 제외 원장 출처 전용 `microsoft.ai`·`naturewill.com`·`paperinstruments.com`. 2026-10-22 신규 등록: `krafton.ai`(Raon-1 mini), `inceptionlabs.ai`(Mercury 3), `memtensor.cn`(MemT-1.0), `elevenlabs.io`(Eleven Realtime), `xfyun.cn`(iFLYTEK Spark-X2.6), `tencent.com`(Hy-Memory 2.0 — memory.hunyuan.tencent.com 서브도메인 포괄)
- **범위는 부류가 아니라 중요도로 판정한다(2026-10-15 개정)**: `scope.excluded`는 부류 분류일 뿐 수록 차단 목록이 아니다. 공식 1차 출처 + 업계 기준점(최초·최고·최대)을 만족하면 예외 수록하며 `scope.inclusion_exception`에 정책 원문을 둔다. 예외 레코드는 `category`에 부류값(`Embedding`·`Image generation`·`Music generation`·`Memory`)을 넣어 LLM/MLLM과 구분하고 근거를 `note`에 남긴다. 부류 분류만으로 수록을 보류한 항목은 제외 원장에 남긴다.
- **동일 모델 라인의 공식 스냅샷 리비전은 별도 레코드로 수록한다(2026-10-17 선례)**: 별도 공식 모델 ID(HF 리포)와 신규 공식 점수가 있으면 구 리비전 레코드를 보존한 채 새 레코드를 추가하고, 새 레코드 `note`에 승계 사실을, 구 레코드 `note`에 교체 사실을 남긴다(선례: DeepSeek-V4-Flash-0731 `model-096`, V4-Pro-0813 `model-102`, V4.1-Flash-1017 `model-225` ↔ 구 리비전 `model-152`). 반대로 별도 모델 ID·신규 점수가 없는 배포·버전 갱신은 중복 집계하지 않는다(선례: GPT-6 Sol / GPT-6 Luna October 2026 update, GPT-Live-1.1 / 1.1 Quip). 벤더가 릴리스마다 모델 ID를 바꾸지 않고 별칭(DeepSeek `deepseek-flash`)으로 최신 스냅샷을 가리키는 경우, 스냅샷 ID를 노출하지 않는 서빙 경로(OpenCode Go → OrcaRouter 등)의 스냅샷 판정은 벤더 체인지로그·모델 카드를 근거로 삼고 서빙 경로 자체를 출처로 쓰지 않는다
- 제외 판정 항목은 삭제하지 않고 `excluded` 원장에 사유·공식 출처와 함께 보존한다. 재판정으로 활성 레코드로 옮길 때(되돌림)는 원장 항목을 삭제하고 README 각주에 경위를 남긴다.
- 점수는 % 척도만. Elo·가격·속도 같은 비% 지표는 `note`/`benchmark_note`에 서술형으로만 기록.
- **System One / structured decision 예외(2026-09-23 선례)**: 산문을 생성하지 않는 결정 모델도 독립 API 제품·별도 모델 ID로 공식 출시되면 수록 대상이다(Jev `model-184`, Solar Jev `model-185`, Laya `model-188`, JEV-9B `model-189`, JEV-27B `model-197`, Strands Decider 2B `model-203`, Clef `model-204`, Clef-flash `model-205`). `type`에 `System One / structured decision`, `category: LLM`으로 분류한다. Laya는 2026-09-29 재검토로 되돌림 이관했다 — pip/npm 배포·self-host 서버·3종 공개 체크포인트를 갖춘 독립 제품이라고 판정. 반대로 같은 엔드포인트라도 기존 가중치의 제품 계층이면 별도 모델로 집계하지 않는다(OpenAI Decisions API — `gpt-6-luna` 사용, 제외 원장 2026-10-08).
- **메모리 특화 모델 예외(2026-10-22 선례)**: 외부 메모리 프레임워크의 write path를 전담하는 독립 모델은 `category: Memory`로 수록한다. Hy-Memory-30B-A3B(Tencent, 30B total/3B active, Hy3-A3B 기반) — 공식 HF 카드·Hy-Memory 2.0 공식 페이지·arXiv 2610.22196·GitHub, Apache 2.0. 4개 하네스 6지표 평균 55.49는 0~100 집계·20% 서브샘플이라 점수표 대신 `benchmark_note`에 조건을 남겼다. 기반 모델의 파생이지만 독립 제품명·공개 가중치·공식 벤치마크가 있어 중요도 예외로 판정했다.
- **JS 셸 공식 출처 2종(2026-09-30 확인)**: (1) openai.com `/index/*` 발표문은 봇 챌린지로 403을 주지만 HTML의 RSC 페이로드에 차트 데이터(`\"data\":{\"values\":[...]}`)가 JSON으로 들어 있어, 본문에 절대값을 적지 않는 발표문에서도 effort별 점수를 추출할 수 있다. (2) 자체 조직 GitHub Pages 사이트(`*.github.io`)는 정적 HTML이 React 셸이면 본문이 `assets/App-*.js` 번들에 들어 있다. 둘 다 `OFFICIAL_HOSTS`에 호스트(각각 `openai.com`, `github.io`)가 있어야 통과한다.
- **고속 서빙 티어 재판정(2026-09-30)**: 동일 가중치의 속도 전용 서빙 티어(GLM-5.3-FlashX, Qwen3.8-Max-Prime)는 별도 모델 코드가 공식 문서에 있어도 기존 판정을 유지해 제외 원장에 둔다.

## Relevant Paths

- `models_catalog.json`, `build_data.py`, `validate_data.py`, `data.js`, `조사 자료`
- `.github/workflows/deploy-pages.yml`

## Tests / Validation

- `python3 validate_data.py` — 전수 구조·출처·일치 검증(배포 게이트와 동일).
- `python3 validate_data.py --check-urls` — 전 출처 URL 실측(호스트당 직렬화로 시간 소요).

## Known Limitations

- `--check-urls`는 봇 챌린지를 쓰는 발행사 사이트에서 간헐 403을 낸다(경고 목록 참조). 자동 판정과 실제 링크 사망을 구분하려면 수동 확인이 필요하다.
- HF 출처가 누적되면서 `--check-urls` 전수 스윕은 429 rate-limit 경고를 다수 낸다 — 경고는 실패가 아니다. 반면 gated 데이터셋(401)과 삭제된 HF 포럼 글(404)은 출처로 쓸 수 없다(2026-09-29 VeriLoop E2: 포럼 공지 삭제 → 릴리스 출처를 모델 카드로 교체, gated 평가 데이터셋 제외).
- **발행사 모델 페이지는 예고 없이 404가 된다**: 2026-10-15 스윕에서 `https://www.qwencloud.com/models/qwen3.6-max-preview`가 404(`model-043`)였다. 같은 호스트의 형제 페이지(`/models/qwen3.7-max`·`/models/qwen3.6-plus`)가 200이면 봇 챌린지가 아니라 실제 삭제이므로, 해당 출처를 목록에서 빼고 다른 공식 출처(발표 블로그·docs)로 교체하며 경위를 레코드 `note`에 남긴다.
- Upstage Console 문서처럼 JS 셸만 응답하는 공식 페이지는 정적 HTML에 내용이 없어, 페이지의 RSC/Next.js 페이로드를 파싱해야 실제 스펙을 읽을 수 있다(2026-09-23 Solar Jev 조사에서 사용). 같은 이유로 openai.com 발표문 차트와 `*.github.io` 프로젝트 사이트는 `assets/*.js` 번들을 파싱한다(2026-09-30 GPT-6.1 Sol·IQuest-Q1 조사).
- `company_meta.country`는 ISO 국가 코드로만 채운 관례가 있었으나, 2026-09-30에 IQuest를 `country: "미공개"`·`flag: "🌐"`로 추가했다 — 1차 출처에 본사가 없는 조직은 추정하지 않고 미상으로 둔다.
- 공식 모델 카드·API 문서보다 발표문이 먼저 나오는 릴리스가 있다 — Gemini 4 Argon(2026-09-30)은 2026-10-01 확인 시점에 `deepmind.google` 모델 카드와 Gemini API·Vertex AI 문서에 미등재여서 발표문(`blog.google`)이 유일한 1차 출처였다. 이 경우 `release_date_source`·`parameter_source`도 발표문으로 두고, 카드가 공개되면 재확인한다.
- HF 리포 `createdAt`은 공개일이 아닐 수 있다 — 비공개 생성 후 공개 전환이면 전환일을 출시일로 쓰고 근거를 `note`에 남긴다(선례: Strands Decider 2B — `createdAt` 2026-09-30이나 공개 전환 10/1을 출시일로 기록). 가중치 공개가 예고만 된 API 프리뷰는 `open_weights: false`로 두고 가중치가 나오면 갱신한다(선례: Mistral Large 4 — "이달 말 공개 예정"이라 false).
- **가중치 공개 예고 후 실제 공개 여부는 HF 커밋 로그로 확인한다** — Step 5 Preview은 발표문이 "10/15 가중치 공개"라 했고 실제로 10/13~15 사이 `stepfun-ai/Step-5-Preview-BF16`이 약 610GB BF16 체크포인트로 채워졌다(`/api/models/{id}/tree/main`으로 파일 크기, `/commits/main`으로 업로드 시점 확인). 발표문에 적힌 조직과 공식 조직이 다를 때는 공식 조직을 `official_id`로 쓴다(SNSLab 미러 대신 `stepfun-ai`를 채택).
- `dev.meta.ai` 벤치마크 표는 CSS-in-JS로 렌더된다 — readable 추출은 표를 평탄화해 행↔값 매핑을 잃으므로 `curl`한 HTML에서 행 라벨 전체 → 열별 값 순서를 세어 매핑해야 한다(2026-10-15 Muse Wonder 조사). 값은 제3자 재측정치로 교차 확인했다.
- 2026-10-15 감사에서 확립한 벤치마크 선별 규칙: 같은 표에 섞여 있어도 **결과 출처가 Artificial Analysis인 항목(`-AA` 접미·`AA Intelligence Index`)과 Elo 척도 값은 점수표에서 제외**하고 `benchmark_note`에 남긴다(선례: Muse Glimmer → Muse Wonder·Step 5 Preview). 반대로 개발사가 인용한 제3자 실행 결과(DeepSWE 1.1/Datacurve, SWE-Marathon/Abundant AI)는 벤치마크명에 출처를 남겨 수록한다.
- **Excluded-ledger counts and README totals are not machine-checked** — `validate_catalog` does not look inside `scope` or `excluded`, so the two numbers are reconciled by hand. The 10/16 audit produced a README total of 38 against 36 ledger entries, corrected in the 10/17 audit: a 10/15 reversal was still counted, and two exclusions judged on 10/16 (GPT-Live-1.1 / 1.1 Quip and Timestral) existed only in the README or commit message. Both were entered on 2026-10-22 by operator decision (`excluded-2026-10-15-2`, `-3`). Write every exclusion judgment to `models_catalog.json` `excluded` in the same commit that reports it, and count the catalog directly whenever statistics change.
- **감사 시점과 HF 카드 최종 갱신이 경합할 수 있다**: Hy-Memory-30B-A3B는 10/15 HF에 공개됐지만 모델 카드 최종 갱신이 10/16 17:12 KST였고 10/16 감사 커밋은 12:29 KST여서 후보에서 누락됐다(10/22 소급 수록, `model-235`). 직전 감사 창구의 HF 신규 repo를 다음 감사에서 재확인하고, 카드가 늦게 완성되면 소급 수록 + README 각주로 남긴다.
- **발행사 페이지의 TLS handshake가 간헐 실패할 수 있다**: 2026-10-22 첫 URL 스윕에서 `memory.hunyuan.tencent.com`이 `_ssl.c:1064 handshake operation timed out` 1회를 냈고 같은 URL의 재시도는 200이었다. 실제 링크 사망과 구분하기 위해 재시도하고, 실패가 반복될 때만 출처 교체를 검토한다.
- **스냅샷 리비전은 출처 3종을 세트로 쓴다**(2026-10-17 DeepSeek-V4.1-Flash-1017): 리비전 HF 카드(점수·라이선스·컨텍스트), 벤더 체인지로그(날짜가 있는 릴리스 노트·API·가격 변경 유무), 프롬프트 인코딩 문서(reasoning effort 같은 인터페이스 상세). 체인지로그는 같은 날 다른 사안(웹 검색 API 개방 등)도 함께 다루므로 모델 레코드에는 모델 관련 문장만 인용한다.

## Related Pages

- [Audit Update runbook](../runbooks/audit-update.md)
- [Web Dashboard](web-dashboard.md)
