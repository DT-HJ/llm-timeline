# ⚡ 2026 LLM & MLLM Release Timeline

> **2026년 주요 LLM / MLLM 파운데이션 모델 출시 타임라인 및 세대별 진화 계보**  
> 기준 기간: **2026-01-01 ~ 2026-10-22** | 수록 모델: **225개** | 표기 조직: **65개**

본 레포지토리는 2026년에 발표된 전 세계 주요 LLM, MLLM, Omni 파운데이션 모델의 릴리즈 내역을 공식 1차 자료와 함께 구조화하여 인터랙티브한 웹 타임라인으로 제공하는 **GitHub Pages** 프로젝트입니다.

**2026-10-22 감사 추가분 (10개: 신규 9 + 소급 1):**
- 신규 릴리스(9): Inception Labs **Mercury 3**(10/19, 텍스트 확산 LLM — Mercury 1 대비 40배 이상 규모·1,068 tok/s·1M 컨텍스트·$0.20/$0.70, 신규 조직 🇺🇸), MemTensor **MemT-1.0-Flash · MemT-1.0-Nano**(10/19, native memory를 attention과 병렬로 실행하는 memory-native 파운데이션 모델 — 288B-A17B / 36B-A3B, 128K history에서 저장 66×·추론 1.86× 개선, MIT/Apache 2.0, 신규 조직 🇨🇳), Cloudflare **Clairic**(10/19, 첫 System One extraction model — typed value 추출·추정·예측, Workers AI 프리뷰·open weights 예고), H2O.ai **H2O-Lightning-31B**(10/20, Gemma 4 31B IT 기반 System One decision model — 131,072 컨텍스트·typed choice/noul/score, H2O 비상업 라이선스, 신규 조직 🇺🇸), ElevenLabs **Eleven Realtime v1 Max · v1 Mini**(10/20, full-duplex S2S voice agent — 90+ 언어·17,000+ voice·OpenAI Realtime 호환, 신규 조직 🇺🇸), KRAFTON **Raon-1 mini**(10/21, KRAFTON AI가 처음부터 학습한 첫 Raon 텍스트 LLM — 28.8B-A4.3B 하이브리드 선형 어텐션 MoE·262,144 컨텍스트·Apache 2.0, 신규 조직 🇰🇷), iFLYTEK **Spark-X2.6-4B**(10/21, Spark-X2.5-4B와 동일 아키텍처를 post-training으로 개선한 온디바이스 4B·1M 컨텍스트, 2026-09-08 보류했던 Spark X2.5의 후속, 신규 조직 🇨🇳)
- 소급 수록(1): Tencent **Hy-Memory-30B-A3B**(10/15, Hy3-A3B 기반 30B-A3B 메모리 writer — Mem0·Hy-Memory·MemOS·EverMemOS 4개 하네스 6지표 평균 55.49, Apache 2.0, 신규 카테고리 `Memory`). 10/16 감사 커밋(12:29 KST)이 모델 카드 최종 갱신(17:12 KST)보다 앞서 후보에서 누락됐고, 이번 재조사에서 소급 수록했습니다.
- 벤치마크: Raon-1 mini의 HF 공식 카드 표에서 15개 % 점수만 신규 수록했습니다(누적 190개 모델·3,342개 점수). 같은 표의 AA-Omniscience·AA-LCR·GDP.pdf는 Artificial Analysis 결과 출처라 제외하고, GDPVal(judge score)·AutomationBench(public split)·Chatbot Korean(internal)의 평가 조건은 `benchmark_note`에 남겼습니다. Mercury 3·MemT-1.0·Clairic·H2O-Lightning-31B·Eleven Realtime은 공식 자료에 % 점수표가 없거나(차트·그림·리더보드 원자료) 제3자 평가(Artificial Analysis·Speech Agent Arena Elo)뿐이어서 빈 점수로 두고 사유를 원장에 기록했습니다. Spark-X2.6-4B는 카드 벤치마크가 SVG 이미지로만 제공돼 빈 점수입니다. Hy-Memory-30B-A3B는 4개 하네스 6지표 평균 55.49(0~100 집계·20% 서브샘플)만 공식 카드에 있어 점수표 대신 `benchmark_note`에 조건을 남겼습니다.
- 제외 원장: 신규 3건 — **Cohere Rerank 5**(10/21, 리랭커 — RCP-nDCG 비% 지표·검색 파이프라인 구성요소), **Nemotron 3.5 Embed 1B·8B / Rerank 8B**(10/20, 멀티모달 임베딩·리랭커 — nDCG@10 비% 지표), **Voxtral 3**(10/20, ASR/TTS 전용 — Voice Agent SDK는 기존 LLM 오케스트레이션 제품 계층). 총 **39개 항목**.
- 1차 도메인 추가: `krafton.ai`(KRAFTON AI Raon 공식 사이트), `inceptionlabs.ai`(Mercury 3 발표문·모델 페이지), `memtensor.cn`(MemT-1.0 공식 사이트), `elevenlabs.io`(Eleven Realtime 발표문·문서), `xfyun.cn`(iFLYTEK MaaS — Spark-X2.6 공식 등재), `tencent.com`(Hy-Memory 2.0 공식 페이지)
- 재조사 확인: **Qwen3.6-27B**(10/21 일부 게이트웨이 노출)는 2026-04-22 기수록 `model-046`과 동일 모델이고, **MiniMax M3.1 Flash**(10/19 GA)는 `model-192` M3.1-Flash-Preview와 동일 모델 ID의 정식 출시라 중복 집계하지 않았습니다.
- 기타: 신규 패밀리 8개(Raon·Mercury·MemT·Hy-Memory·Clairic·H2O-Lightning·Eleven Realtime·Spark)를 `family_flows`에 연결하고 `as_of`·`scope.period`·`reviewed_on`을 2026-10-22로 갱신했습니다. 10월 월 칩은 이미 있어 `index.html`·`app.js` 변경은 없습니다.

**2026-10-17 감사 추가분 (1개):**
- 신규 릴리스(1): DeepSeek **DeepSeek-V4.1-Flash-1017**(10/17, V4.1-Flash의 1017 리비전 — CED 인과 인코더-디코더 아키텍처·1M 컨텍스트·텍스트/이미지 입력·MIT 가중치를 그대로 계승한 공식 표현 그대로의 minor update로, 공식 카드가 구 리비전 대비 11개 벤치마크 개선을 병기: HLE w/o tools 36.8→42.6, Terminal-Bench 4.0 31.2→42.3, DeepSWE v1.1 74.2→77.0. 같은 날 동일 모델명 `deepseek-flash`의 서빙이 이 리비전으로 교체되고 DeepSeek 웹·앱 모델도 함께 갱신됐으며 API 호출 방식·가격은 불변, 공식 API에는 검색·fetch가 함께 열렸습니다. 0731·0813 스냅샷 선례(별도 공식 모델 ID + 신규 공식 점수)에 따라 별도 레코드로 수록하고, 구 2026-09-10 리비전은 `model-152`에 그대로 보존했습니다)
- 벤치마크: 공식 HF 카드의 `DS-V4.1-Flash-1017` 열 11개 점수를 수록했습니다(누적 189개 모델·3,327개 점수). 카드가 비교용으로 병기한 제3자 모델(Kimi K3·GLM-5.3·GPT-5.6 Sol·Opus 5) 열과 HLE 텍스트 전용 부분집합 값(44.0†)은 점수표에서 제외하고 `benchmark_note`에 사유를 남겼습니다.
- 제외 원장: 오늘 신규 판정 없음. 다만 이전 감사(10/16) README의 누계 표기(38건)가 실제 원장(36건)과 어긋나 있어 **원장 기준으로 정정**했습니다 — 10-08의 EmbeddingGemma 2 되돌림 1건이 누계에 남아 있었고, 10-16 감사가 기록 예정으로 적은 **GPT-Live-1.1 / 1.1 Quip**(배포 갱신) 항목은 원장에 등재돼 있지 않습니다(등재 여부는 운영자 판단 필요).
- 기타: `family_flows`의 DeepSeek 계보에 V4.1-Flash-1017을 연결하고, `model-152` note에 리비전 승계 사실을 기록했습니다. 10월 월 칩은 이미 있어 `index.html`·`app.js` 변경은 없습니다.

**2026-10-16 감사 추가분 (8개):**
- 신규 릴리스(8): NVIDIA **Nemotron 3.5 Super VL**(10/15, 120B-A12B Mamba-2 하이브리드 MoE VLM — C-RADIO vision encoder·1M 컨텍스트·MTP 내장 추측 디코딩·OpenMDW-1.1 오픈 가중치, Nemotron Coalition 협업, 약 26T 사전학습 + Indic 10B 토큰 — 3.5 세대 플래그십), NVIDIA **Nemotron 3.5 Bolt 74B-A9B 24GB**(10/15, Star Elastic 아키텍처 탐색으로 Super VL 120B-A12B를 74B-A9B·24GB IQ2 2비트로 압축한 로컬 에이전트 VLM — RTX Spark 노트북(10/16 정식 출시)·GeForce RTX·DGX Spark·DGX Station 대상, LiLiCorr drafter 동시 공개), Meta **Muse Spark Open**(10/15, Meta의 첫 오픈웨이트 모델 — 816B-A42B MoE·1M 통합 컨텍스트·100개 이상 언어 학습·Muse Model License, Muse Spark 1.3 베이스 + 오픈웨이트용 안전 포스트트레이닝, 2대의 Apple M5 Ultra Mac Studio(각 512GB 통합 메모리)에서 MLX로 데스크톱 구동 공개), Liquid AI **LFM2.5-24B-A2B**(10/13, 24B-A2.45B sparse MoE — 온디바이스 에이전트 지향·131K 컨텍스트·어휘 128K 확장·33T 사전학습·OpenClaw/Hermes Agent/Pi/OpenCode 하네스 내 agentic RL·LFM Open License v1.0, Apple M5 Max 184 tok/s — 신규 조직 🇺🇸), IFM **Jais-3-375B-A23B**(10/15, K2 Horizon 플릿의 첫 언어 특화 적응(Jais 3) 플래그십 — 375B-A23B sparse MoE·512K 컨텍스트·IFM(Inception42와 공동) 감사 컬렉션에서 아랍어 벤치마크 33개 % 점수 추출), StepFun **Step 3.7 Flash**(5/29 소급, 196B 언어 백본 + 1.8B ViT sparse MoE·토큰당 약 11B 활성·256K 컨텍스트·Apache 2.0 가중치 공개 — Step 5 Preview 공식 카드가 'Step-3.7-Flash에서 직접 이동했다'고 서술한 중간 세대 공백의 소급 수록), OpenBMB **MiniCPM-V 4.7 35B-A3B**(10/12, MiniCPM-V 시리즈 첫 MoE — 온디바이스 원홀 실행을 내세우는 35B-A3B + 1B 변형·Apache 2.0 — 신규 조직 🇨🇳), xAI **Grok Voice 3.0**(10/14, full-duplex speech-to-speech 옴니 모델 — GPT-Live-1(model-137)과 같은 full-duplex 부류로 ASR/TTS-only 제외 규정에 들지 않아 수록, Voice Agent API $0.08/분)
- 벤치마크: 공식 카드·발표문·모델 페이지에 인쇄된 점수만 수록해 **신규 125개 점수**를 반영했습니다(누적 188개 모델·3,316개 점수). Nemotron 3.5 Super VL은 HF 공식 카드 표의 'SuperGA BF16' 열 36개 점수를 수록하고 AA-Omniscience 3종·AA-LCR v1.1·GDPval-AA v2(AA 결과 출처·비% Elo)·LMArena v3 proxy를 제외했으며, Nemotron 3.5 Bolt 74B-A9B 24GB는 카드에 유일하게 실린 % 점수 표 13개를 전부 수록하고 WebArena (vision)만 고정 평가 스위트 예외로 등록했습니다. LFM2.5-24B-A2B는 카드 15개 벤치마크를 수록하고 AA-Omniscience -24.90(음수 척도)만 제외했습니다. Muse Spark Open은 카드 17개를 수록하고 AA Intelligence Index·GDPval-AA v2·FORTRESS adversarial(낮을수록 좋음)·StrongREJECT v2(adaptive)는 점수표에서 빼고, Jais-3-375B-A23B는 IFM/Arabic-Benchmark-Auditing 감사 컬렉션 33개 % 점수만 추출해 AraGen 3C3H 합성 열·AA-LCR (Ar)·SimpleQA Verified (Ar) 합성 지표는 제외했습니다. MiniCPM-V 4.7은 카드 표가 이미지로만 있어 빈 점수로 두었고, Grok Voice 3.0도 발표문의 모든 수치가 Artificial Analysis·ServiceNow 제3자 측정이라 빈 점수 사유를 원장에 남겼습니다.
- 제외 원장: 신규 4건 — **Ultramarine 1 Flash**(Paper Instruments, 10/14 — GLM-5.3 Flash 기반 비검증형 RL 후학습·오픈 API는 개방됐으나 가중치 미공개(CEO 발표 약 2주 후 예고). 개발사 1차 출처는 확보했으므로 가중치 공개 시 즉시 재검토), **Natura-1**(Nature Will, 10/13 — 물리 세계 로봇 조작 50B MoE 파운데이션 모델, 운영자 판단 사항으로 보류), **MAI-Base-2**(Microsoft AI, 10/15 — 2.8T-A80B 사전학습 완료 공표·포스트트레이닝 중·가중치/API/모델 카드 없음), **GPT-Live-1.1 / 1.1 Quip**(10/15 — ChatGPT·Codex·dots 음성 모델 버전 갱신, 별도 모델 ID·신규 점수·API 없음, 배포 갱신 선례). 기존 **Reflection AI Beam** 항목(10/8)도 10/16 재확인 기준(HF reflection-ai org 빈 것 재확인 — 가중치 여전히 미공개)으로 갱신했습니다.
- 1차 도메인 추가: `blogs.nvidia.com`(Nemotron 3.5 Super VL·Bolt 발표문), `developer.nvidia.com`(Nemotron 3.5 기술 블로그 — Hermes Bench·LangChain 표), `pytorch.org`(Muse Spark Open PyTorch 공식 배포 블로그), `liquid.ai`(Liquid AI 공식 발표문), `microsoft.ai`(MAI-Base-2 발표 — 제외 원장 출처), `naturewill.com`(Natura-1 — 제외 원장 출처), `paperinstruments.com`(Ultramarine 1 Flash — 제외 원장 출처)
- 기타: StepFun 중간 세대 소급 수록에 따라 패밀리 계보를 Step 3.5 Flash → Step 3.7 Flash → Step 5 Preview로 정리했고, NVIDIA Nemotron·Meta Muse Spark 계열에 10/15 추가분 연결도 반영했습니다. 신규 패밀리 Jais(1건)와 LFM2.5(1건)도 같은 계보 원장에 기록했습니다.

**2026-10-15 감사 추가분 (7개):**
- **범위 정책 개정 (중요도 예외):** 수록 여부를 부류만으로 결정하지 않습니다. `scope.excluded`에 있는 부류(임베딩 · 이미지 생성 · 음악 생성 등)라도 ① 개발사 공식 1차 출처가 있고 ② 그 부류에서 최초·최고·최대 규모 등 업계 기준점을 세운 릴리스면 수록합니다. 반대로 포함 부류라도 중요도가 낮은 파생·스냅샷은 보류할 수 있습니다 — 수록은 룰 충족이 아니라 중요도 판단으로 결정합니다(정책 원문: `models_catalog.json`의 `scope.inclusion_exception`).
- 신규 릴리스(7): Meta **Muse Wonder · Muse Wonder Full**(10/12, Meta Superintelligence Labs 첫 프론티어급 모델 — 1M 컨텍스트·텍스트/이미지/비디오/오디오 입력, Muse Wonder는 Model API($4/$20 per 1M)·Muse Code, Muse Wonder Full은 Muse Code 구독(Power·Maximum Usage) 전용), StepFun **Step 5 Preview**(9/20, 600B-A27B 스파스 MoE·1M 컨텍스트·이미지/비디오 입력·92층 narrow-deep — Step 4.x 세대를 건너뛴 차세대 플래그십, 가중치는 10/15 공개), Google DeepMind **EmbeddingGemma 2**(10/6, 740M 멀티모달 임베딩 — 텍스트·코드·이미지·비디오·오디오를 단일 768차원 공간으로, Apache 2.0, 온디바이스용), Alibaba **Qwen-Image-2.1**(9/20, 7B 통합 생성·편집 + RGBA 투명 이미지·최대 10장 레퍼런스, 오픈 웨이트), Meta **Muse Image**(7/7, MSL 첫 미디어 생성 모델 — 검색·코드 실행 도구를 부리는 에이전트형 생성, 8/25 Model API 이미지당 $0.01), MiniMax **MiniMax Music 3.0**(8/13, 8B Global + 0.6B Local Hybrid-LM + 2.4B flow-matching + 123M Flow-VAE — 가사+구조화 캡션으로 최대 5분 완성곡, 오픈 웨이트)
- 벤치마크: 공식 모델 카드·모델 페이지에 인쇄된 점수만 수록해 **신규 66개 점수**를 반영했습니다(누적 182개 모델·3,191개 점수). Step 5 Preview는 HF 공식 카드의 high effort 열에서 36개만 넣고 AA-LCR v1.1·AutomationBench-AA·Terminal-Bench 4.0-AA(결과 출처 Artificial Analysis)와 GDPval-AA v2 1571·AA-Briefcase 1417(Elo)·AA Intelligence Index를 제외했으며, Muse Wonder 시리즈도 Harvey LAB-AA·AutomationBench-AA·Terminal-Bench 4.0-AA·AA Intelligence Index를 같은 이유로 뺐습니다. EmbeddingGemma 2는 모델 카드 768d 전체 표 8개를 수록했고, Muse Image·Qwen-Image-2.1·MiniMax Music 3.0은 공식 자료에 % 척도 평가표가 없어 빈 점수로 두고 사유를 원장에 기록했습니다(Muse Image의 성능 근거는 Arena 인간 선호 Elo뿐).
- 제외 원장: 신규 1건 **Muse Voice Transcribe**(Meta Model API 전사 전용 — ASR/TTS-only), **EmbeddingGemma 2** 제외 기록은 삭제(아래 되돌림 각주).
- 1차 도메인 추가: `stepfun.com`(StepFun 공식 모델 페이지 — Step 5 Preview, 기존 `static.stepfun.com` 블로그 CDN을 포괄), `stepfun.ai`(StepFun 개발자 문서 — 모델 ID·입출력·기능), `dev.meta.ai`(Meta Model API 모델 문서 — Muse Wonder 시리즈·Muse Image 모델 ID와 벤치마크 표)
- 출처 정정: `--check-urls` 전수 스윕(302개 URL)에서 **Qwen3.6-Max-Preview**(`model-043`)의 `qwencloud.com` 모델 페이지가 HTTP 404로 사망한 것을 확인했습니다 — 같은 호스트의 다른 모델 페이지는 200이라 봇 챌린지가 아니라 실제 삭제입니다. 공식 출처 목록에서 제거하고 파라미터 출처를 Qwen 공식 블로그로 교체했으며(파라미터 값은 원래 `정확한 수치 미공개`), 경위는 해당 레코드 `note`에 남겼습니다. 남은 경고는 HF 429 rate-limit과 봇 보호 호스트(`ifm.ai`)의 403뿐입니다.

**2026-10-08 감사 추가분 (7개):**
- 신규 릴리스(7): AWS Strands Labs **Strands Decider 2B**(10/1, Qwen3.5-2B torso+LoRA+pointer head — AWS 산하 첫 System One 오픈 모델, 신규 조직 🇺🇸), Cloudflare **Clef · Clef-flash**(10/1, Workers AI 팀 첫 자체 모델 — 27B·9B 멀티모달 System One 결정 모델, Jev/SystemOne 호환 API, 신규 조직 🇺🇸), Aleph Alpha **Kolibri-1**(10/3, 78.1B-A3.46B MoE 독일어·영어 소버린 추론·1M 컨텍스트·Apache 2.0 — 신규 조직 🇩🇪), Mistral AI **Mistral Large 4**(10/6, 1.05T-A52B 네이티브 멀티모달 granular MoE·1M 컨텍스트, Mistral Studio 퍼블릭 프리뷰), Cohere Labs **Tiny Aya L2-Thinker**(10/6, 3.35B in-language(L2) 추론 연구 릴리스 — 60개 언어 93%+ 프롬프트 언어 추론·다국어 추론 데이터 동시 공개), Anthropic **Claude Haiku 5.5**(10/7, Claude 5.5 패밀리 세 번째·Haiku급 첫 모델 — Haiku 4.5 대비 평균 ~75% 절감·1M 컨텍스트·128K 출력·effort 조절)
- 벤치마크: 공식 발표문·모델 카드에 인쇄된 점수만 수록해 **신규 60개 점수**를 반영했습니다(누적 178개 모델·3,125개 점수). Haiku 5.5의 GDPval-AA·AA-Briefcase는 Artificial Analysis 비% 지표라 제외했고, Strands Decider는 분수·0~1 분율 평가만 공개돼 빈 점수로 두고 사유를 원장에 기록했으며, Tiny Aya L2-Thinker는 공식 카드에 점수 표가 없어 마찬가지로 처리했습니다. Mistral Large 4의 AA-Briefcase Elo·인간평가 평점 등 비% 지표도 점수 표에서 제외했습니다.
- 제외 원장 신규 기록(4): **Reflection AI Beam**(10/5 공식 발표된 501B-A23B MoE — 가중치·기술 보고서·모델 카드·공개 API가 없고 웨이트리스트만 운영해 보류, 이달 말 가중치 공개 시 재검토), **OpenAI Decisions API**(10/6 퍼블릭 베타 `/v1/decisions` — `gpt-6-luna` 가중치의 제품 계층으로 별도 모델 ID 없음), **EmbeddingGemma 2**(740M 멀티모달 임베딩 전용 — 범위 밖), **GPT-6 Sol/Luna October 업데이트**(10/7 ChatGPT 전면 배포와 함께 반영된 기존 model-179/180의 배포 갱신 — 별도 모델 ID·신규 점수 없음)
- 1차 도메인 추가: `aleph-alpha.com`(Kolibri-1 발표), `cloudflare.com`(Clef 발표·Workers AI changelog), `mistral.ai`(Mistral Large 4 발표·공식 문서), `reflection.ai`(Beam 발표 — 제외 원장 출처)
- 기타: 첫 10월 모델 등장에 따라 `index.html`·`app.js`에 `2026-10` 월 칩을 추가하고 정렬 라벨을 10월 기준으로 갱신했습니다.

**2026-10-01 감사 추가분 (3개):**
- 신규 릴리스(3): Google DeepMind **Gemini 4 Argon**(9/30, Gemini 4 세대 첫 프론티어 모델 — Fairwind Program 신뢰 사이버 방어자 한정 단계적 배포·미국 정부 사전 접근 절차 참여, 출력 상한 64K→1M 토큰, 도입가 $2/$10 per 1M(이후 $4/$20), DeepSWE v1.1 77.9%·AutomationBench 51.3%·LVBench 91.7%·CWE-bench v1 68%), Bilibili **Index-Translate**(9/30, 150개 언어 번역 특화 패밀리 — 2B·9B dense + 35B-A3B preview MoE, Apache 2.0, 음성·더빙·장문 체크포인트 동시 공개 — 신규 조직 🇨🇳), VIDRAFT **Darwin-180B-RSI**(9/28, Qwen3.8-Flash-Next 기반 180B MoE(512 experts 중 10 활성)·262,144 컨텍스트·검증된 자체 답 재학습 RSI + ZTC 신뢰도 프러브 — 신규 조직 🇰🇷, 9/30 감사 누락분 소급)
- 벤치마크: 공식 카드·발표문 인쇄 점수만 수록해 **신규 16개 점수**를 반영했습니다(누적 173개 모델·3,065개 점수). Gemini 4 Argon은 발표문 본문에 수치로 인쇄된 4개만 기록하고 Vals Index·Harvey Legal Agent Benchmark·Gray Swan IPI(차트 이미지 한정)와 제3자 보도 수치는 제외했으며, Index-Translate는 0~1 척도 COMET-22 계열을 점수 표에서 빼고 0~100 척도 WMT26 Judge와 일반 능력 정답률만 수록했고, Darwin-180B-RSI는 다수결·thinking budget 등 평가 조건을 원장 메모에 보존했습니다.
- 제외 원장 신규 기록(5): **Ling-3.1-flash**(약 560B-A25B·1M 컨텍스트 공개 보도 — Ant Ling 공식 문서·모델 카드·가중치 미등재로 1차 출처 미확보, 보류), **OpenCSG Agentic-27B**(27.36B dense LoRA DPO — 모델 카드에 날짜 표기 없음·저장소 생성일(9/11)과 발표일(9/30) 불일치로 보류), **Heimr 570M**(Sevren 실험 모델 연구 공지 — 가중치·API 미공개), **NVIDIA Kumo Tabular**(표 형식 데이터 파운데이션 모델 3종 — 범위 밖), **EEVE ROSETTA**(2025-10·11 공개분의 재보도 — 기간 외)
- 재조사 확인: **ZGCM-1**(중관춘학원 7B 완전 오픈 — arXiv v1 2026-09-11로 이번 창구 밖, 차기 감사 재검토), **Solar Mini 4**(10/1 국내 보도 — 기존 model-183의 재보도, AAII 지수는 인용 불가 지표), **TypeSafe AI Jev**(10/1 InfoQ 보도 — 기존 model-184의 재보도), **Meta-SecAlign-8B/70B**(2026-07 공개 — 기간 외), **OpenAI Dots**(DevDay 개인 에이전트 제품 — 모델 아님)

**2026-09-30 감사 추가분 (2개):**
- 신규 릴리스(2): OpenAI **GPT-6.1 Sol**(9/29, DevDay 2026 발표 — GPT-6 Sol 대비 에이전틱 코딩·컴퓨터 유스·전문 업무 성능 격상, Astra 표준 토큰 가격의 1/5 수준($2/$10 per 1M, 캐시 읽기 $0.10 — GPT-6 Sol 대비 50% 추가 인하), 1,050,000 컨텍스트·지식 컷오프 2026-04-30), IQuest **IQuest-Q1**(9/28, 320B-A15B 스파스 MoE CLI 에이전트 파운데이션 모델·524,288 컨텍스트·MOPD+모델 머징 후학습 — 신규 조직 🌐 국가 미공개)
- 벤치마크: 공식 발표문 차트·시스템 카드 애드endum·프로젝트 사이트 차트의 인쇄 점수만 수록해 **신규 19개 점수**를 반영했습니다(누적 170개 모델·3,049개 점수). GPT-6.1 Sol의 발표문 본문은 절대값 대신 개선폭만 서술하므로 effort별 수치는 발표문 차트 데이터에서, HealthBench 4종은 시스템 카드 애드endum Table 7에서 확인했습니다. 사실 오류 응답 비율(Low effort 7.7% vs GPT-6 Sol 11.4%)·작업당 실행 비용은 % 척도 성능 지표가 아니므로 제외했습니다. IQuest-Q1의 8개 점수는 프로젝트 사이트(React 셸)를 `assets/App-*.js` 번들에서 추출해 확인했으며, 비교 모델 점수는 '공개 보고값·자체 측정' 혼용 표기라 인용하지 않았습니다.
- 재조사 확인: **GLM-5.3-FlashX**(docs.z.ai에 별도 모델 코드로 등재되나 동일 가중치 고속 서빙 티어 — 2026-09-23 감사 원장 판정 유지), **Qwen3.8-Max-Prime**(동일 패턴), **Ling 3.1 Flash**(API 게이트웨이 목록에만 등장, InclusionAI 1차 발표·모델 카드 미확보), **Kimi K3.1**(API 레지스트리 식별자 유출 — 공식 발표 없음), **Qwen-Audio-3.1 / Gemini 3.8 Flash TTS**(ASR·TTS 음성 전용 — 범위 제외 기준), **Bongard-Mini**(T5-Gemma 2 4B 기반 분류 체크포인트, 독립 API 제품 아님 — 범위 제외 기준), **GPT-6.1 Astra**(안전성 검토 연기 보도만 있고 공식 발표 없음)
- 1차 도메인 추가: `github.io`(IQuest 공식 프로젝트 사이트 — 기술 보고서·평가 차트)

**2026-09-29 감사 추가분 (10개):**
- 신규 릴리스(10): Anthropic **Claude Sonnet 5.5**(9/28, Claude 5.5 패밀리 두 번째 — Sonnet 5 대비 출력 30%+ 고속·사이버 세이프가드 첫 탑재), H Company **Holo4-27B · Holo4-35B-A3B · Holotron4-30B-A3B**(9/28, 컴퓨터유스 VLM 패밀리 — 신규 조직 🇫🇷), Tsinghua SIGS Robot Lab **VeriLoop E2**(9/22, Qwen3.8-27B 포스트트레인 27B — 신규 조직 🇨🇳), AutoTrust AI **JEV-9B · JEV-27B**(9/23·9/28, System One 부류 — 신규 조직 🇸🇬), MiniMax **M3.1-Flash-Preview**(9/27, 1M 컨텍스트·멀티모달 입력 프리뷰), Perceptron **Mk1.5**(9/25, embodied agent 제어 MLLM — 신규 조직 🇺🇸), Convai Innovations **Laya**(9/18 — 제외 원장 되돌림 이관, 신규 조직 🇮🇳)
- 벤치마크: 공식 카드·발표문 인쇄 점수만 수록해 **신규 36개 점수**를 반영했습니다(누적 168개 모델·3,030개 점수). Perceptron Mk1.5(차트 이미지 한정)·MiniMax M3.1-Flash-Preview(문서 사양만)·Laya(0~1 분율 표기)는 빈 점수로 두고 원장에 사유를 기록했습니다. Sonnet 5.5의 GDPval-AA·AA-Briefcase(Artificial Analysis 비% 지표)와 Holo4·JEV의 비% 지표(태스크당 비용·KL·지연)는 점수 표에서 제외했습니다.
- 제외 원장 신규 기록(4): **Aion 3.5 / 3.5 Mini**(GLM 기반 멀티모델 협업 롤플레잉 시스템 — 단일 가중치 아님), **Ember-1**(Kimi K3 포스트트레인 연구 프리뷰 — 2주 한정 서빙 옵션), **Jev Router**(기존 model-184 Jev의 라우팅 엔드포인트), **Space Bunny Alpha**(스텔스 — MiniMax M3.1-Flash-Preview 연계 추정만 있어 보류)
- 1차 도메인 추가: `minimax.io`(MiniMax 개발자 문서 — M3.1-Flash-Preview 사양), `perceptron.inc`(Perceptron 공식 블로그 — Mk1.5 발표)

**2026-09-27 감사 추가분 (2개):**
- 신규 릴리스(2): Contrastive-LM **CLM-8B**(9/23, Stanford·NVIDIA Research의 System One 모델 — 텍스트 생성 없이 state+action 임베딩 유사도로 행동 선택, frozen Qwen3-8B backbone + 20M projection head ×2, Apache 2.0 — 신규 조직 🇺🇸), Apple **LensVLM-9B**(9/22, 9B VLM — 렌더링된 텍스트 이미지 스캔 후 학습된 도구로 관련 페이지만 선택적 확장, Qwen3.5-9B-Base 기반 — 신규 조직 🇺🇸)
- 벤치마크: CLM-8B의 공식 GitHub README에 인쇄된 **신규 2개 점수**를 반영했습니다(누적 161개 모델·2,994개 점수). 두 점수 모두 lightweight fine-tuning된 projection head 기반 verifier 결과(38 held-out DeepSWE·30 held-out Terminal-Bench 2.1 tasks, H100 측정)이며 zero-shot CLM v0.1은 각각 79.78%·85.39%. LensVLM-9B는 공식 모델 카드·논문에 % 단위 공개 벤치마크 점수가 없어 빈 점수로 두고 원장에 사유를 기록했습니다.
- 재조사 확인: Kimi K2.6(9/24 보도 기사 — 실제 출시 2026-04-20, 기존 model-044와 동일 모델의 재보도), Tencent Hy4-preview(9/25 보도 — 실제 출시 2026-08-28, 기존 model-112와 동일), DeepSeek-V3.1-Terminus(9/26 보도 — 실제 출시 2025-09-22, 기간 외), MiniMax-M1(9/26 보도 — 실제 출시 2025-06-16, 기간 외), Gemini 3.8 Live GA(9/24 — 기존 model-158의 배포 확장), Qwen 4 preview(9/22 알리바바 아프살라 컨퍼런스 — 미출시, 학습 중), Qwen3.8-Max-Prime(9/23 — 동일 가중치의 고속 서빙 티어, GLM-5.3-FlashX와 동일 패턴으로 제외)
- 1차 도메인 추가: `github.com`(Contrastive-LM CLM-8B 공식 저장소), `machinelearning.apple.com`(Apple ML Research — LensVLM-9B 논문 페이지)

**2026-09-23 감사 추가분 (14개):**
- 신규 릴리스(8): xAI **Grok 4.7**(9/21, 더 큰 베이스+장기 RL, 500K 컨텍스트), Yandex **AliceAI-Foundation-80B-A3B-Base**(9/21, 80B-A3B 오픈가중치 파운데이션 — 신규 조직 🇷🇺), Anthropic **Claude Opus 5.5**(9/22, Claude 5.5 패밀리 첫 모델), OpenAI **GPT-6 Sol · GPT-6 Luna**(9/22, GPT-6 범용·고효율 티어 — API 가격 50% 인하), Xiaomi **MiMo-V2.6-Pro · MiMo-V2.6-Flash**(9/22, 1.02T-A42B / 309B-A15B 네이티브 옴니모달·1M 컨텍스트·MIT), Upstage **Solar Mini 4**(9/22, 35B-A3B·512K)
- 기간 내 누락 정정(4): Upstage **Solar Pro 4**(8/6, `solar-pro4` 상용 에이전틱 플래그십 — 이전 감사 누락분 소급), Nex-AGI **Nex-N2.5-mini · Nex-N2.5-Pro · Nex-N2.5-Max**(9/8, 35B-A3B/397B-A17B 멀티모달 + 1.6T 텍스트 MoE 에이전틱 패밀리 — 신규 조직 🇨🇳, Apache 2.0)
- 범위 재검토 수록(2): TypeSafe AI **Jev**(9/15, 최초의 System One 모델 — 얼리 액세스, `jev-latest`, 신규 조직 🇺🇸), Upstage **Solar Jev**(9/22, Solar Mini 4 기반 `/v1/systemone` 엔드포인트 — 베타, 512K). 산문을 생성하지 않고 choice/score/noul 결정+교정 확률만 반환하는 구조화 결정 모델이지만, 독립 API 제품·별도 모델 ID로 공식 출시되어 재검토 끝에 수록했습니다(되돌림 경위는 하단 각주 참조).
- 벤치마크: 공식 카드·발표문에 인쇄된 점수만 수록해 **신규 127개 점수**를 반영했습니다(누적 160개 모델·2,992개 점수). Solar Mini 4·Jev·Solar Jev는 공식 문서에 % 수치가 없어 빈 점수로 두고 원장에 사유를 기록했습니다. Solar Pro 4 표에서 * 표시가 없는 값(Terminal-Bench v2.1·AA-LCR·τ³-Banking·GDPval-AA·GPQA)은 Artificial Analysis 등 외부 측정분이라 제외했고, GDPval-AA Elo 계열(Opus 5.5 1846, Nex·MiMo·Grok의 AA Briefcase류)과 Grok 4.7의 점수 척도 지표도 점수 표에서 제외했습니다.
- 제외 원장 신규 기록(4): **GLM-5.3-FlashX**(GLM-5.3-Flash와 동일 가중치의 고속 서빙 티어), **Laya**(텍스트를 생성하지 않는 비LLM 결정 모델), **Apollo**(고대그리스어 도메인 특화 프로젝트), **gpt-oss-120b/20b**(2025-08-05 출시 — 기간 외)
- 1차 도메인 추가: `upstage.ai`(Upstage 공식 블로그·Console 문서 — Solar Pro 4/Solar Mini 4/Solar Jev), `nex-agi.com`(Nex-N2.5 패밀리 파라미터 공표), `typesafe.ai`(TypeSafe AI 공식 블로그·문서 — Jev/System One)

**2026-09-19 감사 추가분 (6개):**
- 신규 릴리스(4): Ant Group/InclusionAI **Realtime-Venus-Omni · Realtime-Venus-Audio**(9/16, 풀듀플렉스 옴니·오디오 9B 체크포인트 2종, Apache 2.0), GenON **Hunmin-397B-A17B-CUA**(9/18, 397B-A17B 컴퓨터 사용 특화 VLM — 신규 조직 🇰🇷), Alibaba **Qwen3.8-Omni-Flash**(9/18, 네이티브 옴니·1M 컨텍스트·에이전틱 툴콜, API 전용)
- 기간 내 누락 정정(2): Sber **GigaChat 3.5 Reasoning**(9/10, 432B-A28B 하이브리드 MoE·MIT — 신규 조직 🇷🇺), Moonshot AI **Kimi K2.8 Preview**(9/11, `kimi-for-coding` 라우트·이미지/비디오 입력)
- 벤치마크: 공식 카드·기술 보고서·발표문에 인쇄된 점수만 수록해 **신규 148개 점수**를 반영했습니다(누적 149개 모델·2,865개 점수). Kimi K2.8 Preview는 공식 문서에 수치가 없어 빈 점수로 두고 원장에 사유를 기록했습니다. GigaChat 카드의 Arena 블록은 MiniMax-M2.7 심판·GPT-5.2 베이스라인으로 개발사가 직접 계산한 지표라 수록했고, 합산 'Average' 행·토큰 효율 표는 제외했습니다.
- 제외 원장 신규 기록(9): **Bonsai 2 27B**·**DeepSeek-V4.1-Flash-NVFP4**(단순 양자화), **Grok Voice Transcribe 2.0**(ASR 전용), **Jev**(텍스트를 생성하지 않는 비LLM 결정 모델), **Odyssey-3**·**Astronex-World 1.0**(월드/비디오 생성 모델), **NASA-IBM Lunar FM**(도메인 특화), **Kimi K3 on Amazon Bedrock**(기존 모델 배포 확장), **Union Alpha/Pareto 26.9**(스텔스 출시 — 개발사 공식 발표 예정일 전이라 보류)
- 1차 도메인 추가: `kimi.com`(Kimi Code 공식 문서 — 출시 노트·모델 구성)

**2026-09-16 감사 추가분 (13개):**
- 신규 릴리스(11): Tencent **Gander**(9/9, 9B 옴니 인터랙션), DeepSeek **DeepSeek-V4.1-Flash**(9/10, 552B CED MoE·1M 컨텍스트), Ant Group/InclusionAI **Ling-3.0-flash-VL**(9/10, 124B-A5.5B), Cohere **North Small Translate**(9/10, 218B-A25B 번역 특화), Cognition **SWE-2**(9/10, Kimi K3 포스트트레인 코딩 모델), Shanghai AI Lab **Atria-Dawn-Preview**(9/11, 744B MoE), Google DeepMind **Gemini 3.8 Live · 3.8 Live Extended Thinking**(9/15), Salesforce **Koa**(9/15, Nemotron 3 Super 포스트트레인 CRM 추론), Accio-Lab **Occamy-1.0**(9/15, 35B-A3B co-work), Gensyn **open-1b**(9/15, 전 학습 과정 검증 가능 1.61B)
- 기간 내 누락 정정(2): ByteDance **Seed2.1 Pro · Seed2.1 Turbo**(6/23) — 이전 감사에서 누락된 플래그십 패밀리를 소급 수록
- 이번 감사는 각 모델이 공식 카드·기술 보고서·발표문에 인쇄한 벤치마크 점수를 전부 수록하는 것을 기준으로 했습니다(신규 124개 점수 포함, 누적 444개). Elo·달러·레이팅 등 % 척도가 아닌 지표와 제3자 지표(AA 지수, Arena 순위)는 감사 원장 메모에 기록만 하고 점수 표에는 넣지 않았습니다.
- 제외 원장 신규 기록(3): **Gemini Omni 1.1 Flash**(비디오 생성 전용), **GPT-Live-1 API 확장**(기존 모델의 배포 확장), **Gemini 3.5 Transcribe**(전사 전용)
- **벤치마크 전면 감사(9/16):** 공식 점수가 비어 있던 모델의 1차 출처(모델 카드 표·기술 보고서·발표문 차트·SVG/이미지 표·arXiv 논문)를 일제 재확인해 **42개 모델에 1,400여 개 점수를 추가 수록**했습니다 — 누적 **128개 모델·1,854개 점수**. 대상: Anthropic 전 플래그십(Fable 5/5.1, Mythos 5, Opus 5/4.8/4.7, Sonnet 5), OpenAI(GPT-5.4/Pro), Meta Muse Spark 전 세대(1.1~1.3), Qwen3.5 전 변형·Qwen3.6-Max-Preview·Qwen3.8-2.4T-A95B, GLM-5.3/Flash, Granite 4.1/4.2, EXAONE 4.5·K-EXAONE 2.0, Motif-3, LongCat-Flash-Omni, Nemotron-3-Nano-Omni, Kimi K2.7 Code, MiniMax-M2.7/M3, MiMo-V2.5, Ling-2.6-1T/3.0-tiny/3.0-flash, Tencent Hy3/Hy3-preview/Hy4-preview, Mistral Small 4, North Mini Code, Tiny Aya 변형군, ERNIE 5.0/5.1, Grok 4.6, Inkling, Gemini 3.5/3.6/3.7 Flash·Flash-Lite, A.X K1. 수치가 아예 미공개이거나 출처가 사망·게이트·이미지 한정 판독 불가인 모델은 빈 점수 사유를 각 원장 메모에 기록했습니다.
- **빈 벤치마크 전수 재조사(9/16, 2차):** 1차 감사 후 남은 빈 점수 26개 레코드를 모두 재검증해 **16개 모델에 860여 개 점수를 추가**하고 **GPT-5.4 nano**(3/17, `model-165`)를 신규 수록했습니다 — 누적 **144개 모델·2,717개 점수**. 대상: Seed 2.0(공식 모델카드 PDF 전체 표 — 기존 404 링크 대신 ByteDance CDN 카드로 대체), GPT-5.3 Instant·GPT-Live-1/mini(배포 안전 문서의 공식 안전·HealthBench 표), GLM-5-Turbo/GLM-5V-Turbo(GLM-5V 문서 비교 표), Qwen3.5-Omni-Flash(기술 보고서 Flash 열), Qwen3.6-Plus/3.7-Max/3.7-Plus(qwen.ai 3.7 발표 표), DeepSeek-V4-Flash/Pro(HF 카드 기반·instruct 표), HyperCLOVA X SEED 4B(CLOVA 기술 블로그), Gemini 3.5 Flash Cyber(datavis 인코딩 차트 데이터), Qwen3.8-Max(qwen.ai 8/3 발표 전체 표), Gemini 3.8 Live(τ-Voice 평가 차트), GPT-5.6·GPT-6 Astra(발표 표 누락분 보강). Qwen3.8-Max-Preview/0902 스냅샷, Command A+, Motif-3-Beta, GPT-6 Astra Pro, GPT-5.6 Sol Pro, Koa, Gensyn open-1b, Tiny Aya base는 1차 출처에 수치가 없음을 재확인하고 사유를 원장에 기록했습니다.

**2026-09-08 감사 추가분 (18개):**
- 신규 릴리스(5): OpenAI **GPT-6 Astra · GPT-6 Astra Pro**(9/3), Google DeepMind **Gemini 3.8 Flash · 3.8 Flash Cyber**(9/2), Meta **Muse Spark 1.3**(9/2)
- 기간 내 누락 정정(7): OpenAI **GPT-Live-1 · GPT-Live-1 mini**(7/8), **GPT-5.6 Sol Pro**(7/9), **GPT-5.6-Cyber**(8/10), Meta **Muse Spark 1.2**(8/5), **Muse Glimmer**(8/10), NVIDIA **Nemotron-3.5-Lightning-30B-A3B**(8/11)
- 신규 조직 수록(6): **Institute of Foundation Models(IFM · MBZUAI, UAE)** 의 **K2 Horizon** 함대 6종(9/3) — 0.9B · 3.7B · 7B · 32B · MoVA-36B-A4B · 375B-A23B, Apache 2.0으로 가중치+코드+학습 데이터(+레시피)까지 공개

모델명·파라미터·벤치마크는 [`models_catalog.json`](models_catalog.json)을 단일 진실 공급원(SSOT)으로 사용합니다. 예를 들어 공식 GLM-5.3-Flash 모델 카드는 이 모델을 **총 320B / 활성 18B**로 명시하므로, 과거의 약 30B 표기는 제거했습니다. ([공식 모델 카드](https://huggingface.co/zai-org/GLM-5.3-Flash))

---

## 🌐 라이브 데모 (GitHub Pages)

- **URL:** [https://dt-hj.github.io/llm-timeline/](https://dt-hj.github.io/llm-timeline/) (2026-10-15 저장소 이전 `hojin12312` → `DT-HJ`에 따라 Pages 주소도 변경 — 구 주소는 404)
*(GitHub 레포지토리 Settings > Pages에서 배포 소스를 `main` 브랜치 또는 `GitHub Actions`로 설정 시 활성화됩니다)*

---

## ✨ 핵심 기능

1. **⏱️ 인터랙티브 타임라인 (단일 뷰)**
   - 감사 기간(`SCOPE_DATA.period`) 전체의 출시 내역을 월별·일자별 시간축으로 시각화하고, 첫 컬럼마다 월 라벨을 축 위에 표시
   - 날짜 노드(원)·날짜·모델 수는 sticky 헤더로 상단에 고정되고, 모델 카드만 세로로 스크롤 — 화면 밖 모델을 볼 때도 시간축이 그대로 유지
   - 마우스 위치로 스크롤 축을 분리: 가로 시간축 라인 위/부근에서 휠 = 좌우 시간축 스크롤, 그 아래에서 휠 = 모델 카드 세로 스크롤
   - 카드에 기업(SVG 국기), 카테고리 색상 띠·태그, 파라미터, 아키텍처 요약(3줄)을 표시 — 전체 사양은 상세 모달에서 확인
   - 카테고리 5색 그룹: LLM · 추론 · 멀티모달(MLLM/Multimodal) · 옴니 · 특수 목적(이미지·음악 생성, 임베딩, 메모리 등 중요도 예외 부류)
   - 모바일에서는 고정 폭 수평 캔버스 대신 터치 친화적인 세로 릴리즈 스트림으로 자동 전환
2. **🔎 실시간 검색 · 필터 · 월 이동 · 정렬 전환**
   - 단축키 `/`로 통합 검색 (모델명·제공사·패밀리·한국어 별칭 매칭)
   - 유형(카테고리 그룹)·오픈 웨이트·기업 필터 — 각 칩에 다른 필터를 적용한 상태의 개수 표시
   - 월 칩은 데이터에서 자동 생성(월별 개수 표시, 결과 없는 월은 비활성) — 새 달 모델을 수록해도 코드 수정 불필요
   - 가로 스크롤 위치에 맞춰 현재 월 칩이 자동 강조(scrollspy), `좌우 이동` 스크롤 버튼
   - 최신순 ⇄ 과거순 토글 (월 칩 순서도 함께 반전)
   - 라이트/다크 테마 (기본은 OS 설정, 헤더 토글로 고정)
   - 모델 상세·비교 모달을 열면 URL 해시(`#model=…`, `#compare=A,B`)가 갱신되어 그대로 공유 가능
3. **📋 모델 상세 인스펙터 모달**
   - 세부 아키텍처(MoE, MLA, GDLA, MTP 등), 총/활성 파라미터, 지원 모달리티, 컨텍스트 윈도우, 라이선스·오픈웨이트·변형·가용성 상세
   - 공식 발표 점수를 각 공식 출처 링크와 함께 표시, **인용 복사**로 Markdown 인용(모델명·제공사·출시일·유형·파라미터·공식 출처·점수+출처)을 클립보드에 복사
4. **⚖️ 두 모델 상호 비교 모달**
   - 카드·모달에서 최대 2개 선택, 스펙과 공식 벤치마크를 병합한 비교표 제공, 비교 결과를 Markdown으로 복사
5. **🧬 패밀리 계보 데이터 (UI 미구현)**
   - `data.js`의 `FAMILY_FLOWS`와 감사 원장에 20개 대표 패밀리(Qwen, DeepSeek, Claude, GPT, Gemini, GLM, Kimi, Muse Spark, K2 Horizon, Seed/Doubao, Ling 3.0, Grok, Solar, Nex, JEV 등)의 세대 교체·분기 경로(step)가 데이터로 들어 있습니다
   - 다만 현재 `index.html`·`app.js`에는 이 데이터를 그리는 뷰가 없습니다. **Generational Flow View · Card Grid View · Matrix Table View · CSV 내보내기 · 상태 필터**는 구현 과제로 남아 있습니다(기업·유형·오픈웨이트 필터는 구현됨). 타임라인·카드·모달에서는 `family`·`company` 필드로 패밀리 정보를 표시합니다.

### 📱 모바일 UI

- 검색창·정렬·GitHub 링크·테마 토글을 모바일 전용 툴바로 재배치하고, 월 칩과 필터 칩은 한 줄 가로 스크롤 행으로 배치
- 화면 하단에 전체 보기·검색·비교 빠른 메뉴를 고정하고 안전 영역(safe area)을 반영
- 모델 상세 및 비교 화면은 바텀시트로 열리며, 비교표는 표 내부에서만 가로 스크롤
- 주요 버튼과 입력 컨트롤은 최소 44px 터치 영역을 사용하고, 세로 페이지 스크롤을 가로 휠 처리기가 가로채지 않도록 분리

---

## 📊 데이터 수집·검증 기준 (Scope & Methodology)

- **모델명:** 모델 카드·기술 보고서·공식 제품 문서·개발사 발표문에 적힌 공식 표시명을 사용합니다. 비공식 별칭이나 체크포인트 이름을 제품명으로 합치지 않습니다.
- **파라미터 수:** 공식 자료가 직접 명시한 총/활성 파라미터만 기록합니다. 미공개 값은 `정확한 수치 미공개`로 표시하며, 가중치 파일 용량·모델 등급·양자화 크기·제3자 추정치를 파라미터 수로 대체하지 않습니다.
- **공식 벤치마크:** 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 공개한 점수만 기록합니다. Chatbot Arena/ELO, Artificial Analysis, 제3자 리더보드, 역산·추정 점수는 표시하지 않습니다.
- **조건 보존:** benchmark 버전, 데이터셋, 모드, 평가 조건이 공식 자료에 기재된 경우 모델별 감사 원장의 메모에 보존합니다. 서로 다른 프로토콜의 점수는 동일 순위로 비교하지 않습니다.
- **출처 연결:** 출시일·파라미터·각 점수에 공식 1차 출처 URL을 따로 연결합니다. 공식 URL에 해당 수치가 직접 기재되지 않은 경우 그 수치는 넣지 않습니다.
- **1차 도메인 목록:** `validate_data.py`의 `OFFICIAL_HOSTS`에 등록된 개발사 자체 도메인만 공식 출처로 인정합니다. 2026-09-08에 Meta AI Research 블로그(`research.meta.ai`)와 Google 공식 블로그(`blog.google`)를 추가했습니다 — Muse Spark 1.3과 Gemini 3.8 Flash Cyber는 `ai.meta.com`·`deepmind.google`이 아니라 그곳에만 1차 발표문이 있습니다. 같은 날 IFM(MBZUAI) 편입으로 `ifm.ai`를 추가했습니다. 2026-09-16에는 `cognition.com`(SWE-2), `salesforce.com`(Koa), `gensyn.ai`(open-1b 검증 레코드), `ai.google.dev`(Gemini Live API 모델 ID), 그리고 `arxiv.org`(개발사가 직접 게재한 공식 기술 보고서 — ERNIE 5.0, Tiny Aya)를 추가했습니다. 2026-09-19에는 `kimi.com`(Kimi Code 문서), 2026-09-23에는 `upstage.ai`(Solar Pro 4/Solar Mini 4 블로그·Console 문서)와 `nex-agi.com`(Nex-N2.5 파라미터 공표)을, 2026-09-29에는 `minimax.io`(MiniMax 개발자 문서)와 `perceptron.inc`(Perceptron 공식 블로그)를, 2026-09-30에는 `github.io`(자체 조직의 GitHub Pages 프로젝트 사이트 — IQuest-Q1 기술 보고서)를 추가했습니다. 2026-10-08에는 `aleph-alpha.com`(Kolibri-1 발표), `cloudflare.com`(Clef 발표·Workers AI changelog), `mistral.ai`(Mistral Large 4 발표·공식 문서), `reflection.ai`(Beam 발표 — 제외 원장 출처)를 추가했습니다. 2026-10-15에는 `stepfun.com`(StepFun 공식 모델 페이지 — 기존 `static.stepfun.com` 블로그 CDN을 포괄), `stepfun.ai`(StepFun 개발자 문서 — Step 5 Preview 모델 ID·입출력), `dev.meta.ai`(Meta Model API 모델 문서 — Muse Wonder 시리즈·Muse Image)를 추가했습니다. 2026-10-16에는 `blogs.nvidia.com`(Nemotron 3.5 Super VL·Bolt 발표문), `developer.nvidia.com`(Nemotron 3.5 기술 블로그 — Hermes Bench·LangChain 표), `pytorch.org`(Muse Spark Open PyTorch 공식 배포 블로그), `liquid.ai`(LFM2.5-24B-A2B 발표문), `microsoft.ai`(MAI-Base-2 발표 — 제외 원장 출처), `naturewill.com`(Natura-1 — 제외 원장 출처), `paperinstruments.com`(Ultramarine 1 Flash — 제외 원장 출처)를 추가했습니다. 2026-10-22에는 `krafton.ai`(KRAFTON AI Raon 공식 사이트 — Raon-1 mini), `inceptionlabs.ai`(Inception Labs — Mercury 3), `memtensor.cn`(MemTensor — MemT-1.0), `elevenlabs.io`(ElevenLabs — Eleven Realtime), `xfyun.cn`(iFLYTEK MaaS — Spark-X2.6)를 추가했습니다. 같은 날 소급 수록한 Hy-Memory-30B-A3B를 위해 `tencent.com`(Hy-Memory 2.0 공식 페이지 — memory.hunyuan.tencent.com)을 추가했습니다.
- **재현 가능한 검증:** `validate_data.py`가 모든 점수의 출처·범위·금지된 제3자 지표·생성 파일의 SSOT 일치를 검사합니다.

- **포함 대상:**
  - 대규모 언어 모델 (LLM)
  - 멀티모달 / 비전-언어 / 텍스트·이미지·음성·영상 통합 옴니 모델 (MLLM / VLM / Omni)
  - **중요도 예외(2026-10-15 개정):** 아래 제외 부류에 속해도 그 부류에서 최초·최고·최대 규모 등 업계 기준점을 세운 릴리스는 수록합니다 — 임베딩(`EmbeddingGemma 2`), 이미지 생성·편집(`Qwen-Image-2.1` · `Muse Image`), 음악 생성(`MiniMax Music 3.0`). 수록은 부류 충족이 아니라 중요도 판단으로 결정하며, 반대로 포함 부류라도 중요도가 낮은 파생·스냅샷·서빙 변형은 보류할 수 있습니다.
- **제외 기준:**
  - 이미지 단독 생성 모델
  - 비디오 단독 생성 모델 (예: ByteDance Seedance)
  - OCR 전용 / ASR·TTS 음성 전용 모델
  - 임베딩 및 리랭커 모델
  - 보상/가드레일 전용 모델
  - 단순 양자화 체크포인트 (FP8, NVFP4, INT4, GGUF 등)
  - 독립 제품을 대표하지 않는 중간/베이스 체크포인트
  - 위 부류는 부류 자체로 수록이 막히지 않습니다 — 중요도 예외 기준(공식 1차 출처 + 업계 기준점)을 만족하면 예외 수록하며, 근거는 각 레코드 `note`에 남깁니다.
- **포함 기업 (65개 표기 조직):**
   - **미국 (US):** OpenAI, Anthropic, Google DeepMind, Meta, xAI, NVIDIA, IBM, Poolside, Thinking Machines Lab, Arcee AI, Motif Technologies, Cognition (SWE), Salesforce (Koa), Gensyn (open-1b), Accio-Lab (Occamy), TypeSafe AI (Jev), Contrastive-LM (CLM), Apple (LensVLM), Perceptron (Mk1.5), AWS Strands Labs (Strands Decider), Cloudflare (Clef), Liquid AI (LFM2.5), Inception Labs (Mercury), ElevenLabs (Eleven Realtime), H2O.ai (H2O-Lightning)
   - **한국 (KR):** NAVER Cloud (HyperCLOVA X SEED 4B), Upstage (Solar), LG AI Research (EXAONE / K-EXAONE), SK Telecom (A.X), GenON (Hunmin), VIDRAFT (Darwin), KRAFTON (Raon)
  - **중국 (CN):** Alibaba (Qwen), DeepSeek, Baidu (ERNIE), ByteDance (Seed), Moonshot AI (Kimi), Z.ai (GLM), MiniMax, StepFun, Meituan (LongCat), Xiaomi (MiMo), Ant Group (Ling/Ring), Tencent (Hy), Shanghai Artificial Intelligence Laboratory (Atria), Nex-AGI (Nex), Tsinghua SIGS Robot Lab (VeriLoop), Bilibili (Index-Translate), OpenBMB/ModelBest (MiniCPM-V 4.7), MemTensor (MemT), iFLYTEK (Spark)
   - **중동 (AE):** Institute of Foundation Models / MBZUAI (K2 Horizon)
   - **유럽/기타:** Mistral AI (프랑스), H Company (프랑스, Holo4), Aleph Alpha (독일, Kolibri), Cohere/Cohere Labs (캐나다), Sarvam AI (인도), Convai Innovations (인도, Laya), AutoTrust AI (싱가포르, JEV), Sber (러시아, GigaChat), Yandex (러시아, AliceAI)
   - **국적 미공개:** IQuest (IQuest-Q1) — 모델 카드 언어가 영어·중국어이고 공식 출처에 본사·국적 표기가 없어 추정하지 않고 미상으로 두었습니다.

공식 점수가 확인되지 않은 모델은 빈 점수로 표시합니다. 이는 누락이 아니라 공식 발표 점수만 제공한다는 감사 정책의 결과입니다. 원래 목록에서 공식 출시 시점·공식 제품명·별도 모델 ID가 확인되지 않거나 중복인 5개 항목과, 2026-09-08 감사에서 1차 출처 미확보로 보류한 1개 항목(iFLYTEK Spark X2.5), 2026-09-16 감사에서 범위 제외로 판정한 3개 항목(Gemini Omni 1.1 Flash · GPT-Live-1 API 확장 · Gemini 3.5 Transcribe)과, 2026-09-19 감사에서 범위 제외·보류로 판정한 8개 항목(단순 양자화 2 · ASR 전용 1 · 도메인 특화/월드모델 3 · 배포 확장 1 · 스텔스 보류 1), 2026-09-23 감사에서 범위 제외로 판정해 원장에 남은 3개 항목(동일 가중치 서빙 티어 1 · 도메인 특화 1 · 기간 외 1 — 비LLM 결정 모델로 분류됐던 Laya는 09-29 되돌림으로 이관)과, 2026-09-29 감사에서 범위 제외·보류로 판정한 4개 항목(멀티모델 협업 시스템 1 · 포스트트레인 연구 프리뷰 1 · 라우팅 엔드포인트 1 · 스텔스 보류 1), 2026-10-01 감사에서 1차 출처 미확보·날짜 근거 미확보·범위 제외로 판정한 5개 항목(1차 출처 미확보 1 · 날짜 근거 미확보 1 · 비공개 연구 모델 1 · 범위 밖 1 · 기간 외 1)과, 2026-10-08 감사에서 보류·범위 제외·중복 배포로 판정한 3개 항목(아티팩트 미공개 보류 1 · 기존 모델 API 계층 1 · 기존 모델 배포 갱신 1 — 임베딩 전용 1건은 10-15 범위 개정으로 활성 레코드 이관)과, 2026-10-15 감사에서 ASR/TTS 전용으로 판정한 1개 항목(Muse Voice Transcribe — Muse 계열 전수 점검)과, 2026-10-16 감사에서 가중치 미공개 보류 2건(**Ultramarine 1 Flash** — API만 개방·가중치 약 2주 후 예고, **MAI-Base-2** — 사전학습 완료 공표·포스트트레이닝 중)·범위 밖 1건(**Natura-1** — 물리 세계 로봇 조작 파운데이션)을 신규 기록하고 **Reflection AI Beam** 보류 기록을 10/16 재확인 기준으로 갱신했습니다. 2026-10-22 감사에서는 리랭커·임베딩·ASR/TTS 전용 3건(**Cohere Rerank 5**·**Nemotron 3.5 Embed/Rerank**·**Voxtral 3**)을 신규 기록해 총 **39개 항목**은 [`조사 자료`](조사%20자료)의 제외 원장에 보존했습니다.

> **2026-09-08 제외 원장 되돌림:** 2026-09-04 감사에서 "공식 발표문을 확인하지 못했다"며 보류했던 **Muse Spark 1.2**(구 `model-098`)와 **Muse Spark 1.3**(구 `model-115`)은, Meta의 1차 발표문이 `ai.meta.com`이 아니라 **Meta AI Research 블로그(`research.meta.ai`)** 에 있음을 확인하고 활성 레코드(`model-136`, `model-131`)로 이관했습니다. 제외 원장에서 두 항목을 삭제했고, 그 경위는 각 모델의 감사 원장 메모에 남아 있습니다.
>
> **2026-09-23 제외 원장 되돌림:** 2026-09-19·09-23 감사에서 "텍스트를 생성하지 않는 비LLM 결정 모델"로 제외했던 **Jev**(TypeSafe AI, 9/15)와 **Solar Jev**(Upstage, 9/22)를 재검토 끝에 활성 레코드(`model-184`, `model-185`)로 이관했습니다. 두 모델은 산문 생성 없이 choice/score/noul 결정+교정 확률만 반환하지만, 독립 API 제품·별도 모델 ID로 공식 출시된 신종 파운데이션 모델 부류(System One / structured decision)라는 판단입니다. 같은 부류로 제외 원장에 남은 **Laya**는 공식 출시 상세가 더 제한적이라 일단 원장에 유지했습니다.
>
> **2026-09-29 제외 원장 되돌림:** 위 판정으로 원장에 남겨 뒀던 **Laya**(Convai Innovations, 9/18)를 재검토해 활성 레코드(`model-188`)로 이관했습니다. pip/npm 배포·self-host HTTP 서버·3종 공개 체크포인트를 갖춘 독립 제품으로 Jev·Solar Jev와 같은 System One 부류라는 판단입니다. 같은 날 AutoTrust AI의 **JEV-9B**·**JEV-27B**도 같은 부류로 신규 수록했습니다.
>
> **2026-10-15 범위 개정 & 제외 원장 되돌림:** 2026-10-08 감사에서 "텍스트·코드·이미지·비디오·오디오를 단일 768차원 공간에 매핑하는 임베딩 전용 모델"이라며 제외 원장(`excluded-2026-10-08-3`)에 남겼던 **EmbeddingGemma 2**를 활성 레코드(`model-214`)로 이관했습니다. 같은 날 범위 정책을 "부류가 아니라 중요도로 판단한다"로 개정해, 이미지 생성(**Qwen-Image-2.1** `model-213` · **Muse Image** `model-210`)과 음악 생성(**MiniMax Music 3.0** `model-211`)도 같은 근거로 수록했습니다. 네 모델 모두 `category`를 `Embedding` · `Image generation` · `Music generation`으로 두어 LLM/MLLM과 구분되며, 각 레코드 `note`와 위 감사 추가분에 근거를 남겼습니다. 같은 점검에서 Meta Model API의 전사 전용 모델 **Muse Voice Transcribe**는 제외 원장(`excluded-2026-10-15-1`)에 신규 기록했습니다.

> **2026-09-08 신규 조직 편입 & 보류 각주:** IFM(MBZUAI) **K2 Horizon**은 "가장 큰 완전 오픈소스 릴리스"를 내건 신규 프론티어 랩이라 추적 조직에 편입했습니다(1차 출처: `ifm.ai`, `huggingface.co/IFM/*`). 반대로 **iFLYTEK Spark X2.5**(9/7, 보도 기준 293B-A30B MoE·256K)는 讯飞 공식 API 카탈로그 페이지가 JavaScript 셸만 응답해 파라미터·출시일을 1차 출처에서 인용할 수 없고, Hugging Face `XHToken`("SparkLLM Team")이 科大讯飞의 공식 조직인지도 확인하지 못해 제외 원장에 보류 기록으로 남겼습니다.

---

## 💻 로컬에서 실행하기

별도의 빌드 도구(`npm`, `node_modules` 등)가 전혀 필요하지 않으며, 순수 웹 표준(HTML5 + Vanilla JS + 정적 `style.css`)으로 동작합니다. 외부 리소스는 웹폰트(Pretendard·JetBrains Mono)뿐이며 렌더링을 막지 않도록 비동기 로드합니다 — 폰트 CDN에 접근할 수 없으면 시스템 폰트로 표시됩니다.

```bash
# 1. 레포지토리 클론
git clone https://github.com/DT-HJ/llm-timeline.git
cd llm-timeline

# 2. 로컬 웹서버 실행 (Python 내장 서버)
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속하시면 즉시 확인하실 수 있습니다.

---

## 🚀 GitHub Pages 배포 설정 방법

본 레포지토리의 웹 페이지를 온라인에 배포하려면:

1. **GitHub 레포지토리** (`DT-HJ/llm-timeline`) 방문
2. 상단 메뉴의 **Settings** 클릭
3. 좌측 메뉴의 **Pages** 클릭
4. **Build and deployment** 섹션의 **Source**에서:
   - **Deploy from a branch** 선택 후, Branch를 `main` / `/ (root)` 로 지정하고 **Save**  
   *(또는 **GitHub Actions**를 선택하면 내장된 `.github/workflows/deploy-pages.yml`을 통해 자동 배포됩니다)*
5. 잠시 후 상단에 생성된 `https://dt-hj.github.io/llm-timeline/` 주소로 접속 가능합니다.

---

## 📁 프로젝트 구조

```
llm-timeline/
├── index.html                       # 메인 인터랙티브 대시보드 웹 애플리케이션
├── models_catalog.json               # 모델명·파라미터·공식 점수·출처 SSOT
├── data.js                          # SSOT에서 생성된 모델 데이터셋 (직접 수정 금지)
├── app.js                           # 타임라인 렌더링, 검색·필터·월 이동, 모달·비교, 테마 전환
├── style.css                        # 색상 토큰(라이트/다크), 타임라인 스파인, sticky 시간축 헤더, 반응형 모바일 레이아웃
├── assets/                          # 파비콘, 국가 국기 SVG(flag-icons, MIT — assets/flags/README.md)
├── build_data.py                    # models_catalog.json → data.js 생성기
├── validate_data.py                 # 구조·출처·점수·생성물 일치 검증기
├── .nojekyll                        # GitHub Pages 정적 자산 로딩 보장
├── .github/workflows/
│   └── deploy-pages.yml             # GitHub Actions 자동 배포 워크플로우
├── 조사 자료                         # 모델별 공식 출처 감사 원장 (Markdown, build_data.py 생성)
└── README.md                        # 프로젝트 설명 및 배포 안내 문서
```

### 데이터 갱신

```bash
python3 build_data.py
python3 validate_data.py
python3 validate_data.py --check-urls
```

`data.js`는 직접 편집하지 않습니다. 새 모델이나 정정 사항은 `models_catalog.json`과 감사 원장에 반영하고, 구조 검증을 통과한 뒤 생성 파일을 커밋합니다.

`--check-urls`는 출처 서버에 예의를 지키도록 발행사(host) 단위로 직렬화하고 짧게 대기한 뒤 재시도합니다. 그리고 결과를 두 갈래로 나눕니다.
- **경고(실패 아님):** 429·503 같은 rate limit, 그리고 `BOT_PROTECTED_HOSTS`(현재 `ifm.ai`, `openai.com`)의 지속 403 — 자동 요청에 간헐적으로 JavaScript 챌린지를 돌려보내는 사이트로, 해당 페이지는 각각 2026-09-08·2026-09-16에 내용을 직접 열어 확인했습니다.
- **실패:** 404·410 등 실제로 사라진 출처, 그리고 보호 목록에 없는 호스트의 지속 403.
