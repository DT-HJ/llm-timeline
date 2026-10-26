// 2026 Major LLM / MLLM Release Timeline Dataset
// Auto-generated from models_catalog.json. Do not hand-edit data.js.

const TIMELINE_DATA = [
  {
    "id": "model-034",
    "name": "MiMo-V2-Flash",
    "date": "2026-01-06",
    "sortDate": "2026-01-06",
    "month": "2026-01",
    "monthName": "January",
    "company": "Xiaomi",
    "family": "MiMo",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "309B total / 15B active (MoE)",
    "architecture": "Sparse MoE with hybrid attention",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Corrected from the repository’s non-official “MiMo-V2-Pro” label to Xiaomi’s official MiMo-V2-Flash release.",
    "benchmarks": {
      "MMLU-Pro": 84.9,
      "GPQA Diamond": 83.7,
      "LiveCodeBench v6": 80.6,
      "SWE-bench AgentLess": 30.8,
      "SWE-bench Verified": 73.4,
      "SWE-bench Multilingual": 71.7,
      "Terminal-Bench 2.0": 38.5,
      "BrowseComp": 45.4,
      "τ²-Bench": 80.3
    },
    "official_id": "XiaomiMiMo/MiMo-V2-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://huggingface.co/papers/2601.02780"
      }
    ],
    "release_date_source": "https://huggingface.co/papers/2601.02780",
    "parameter_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "GPQA Diamond": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "LiveCodeBench v6": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "SWE-bench AgentLess": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "SWE-bench Verified": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "SWE-bench Multilingual": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "Terminal-Bench 2.0": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "BrowseComp": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash",
      "τ²-Bench": "https://huggingface.co/XiaomiMiMo/MiMo-V2-Flash"
    },
    "benchmark_note": "Xiaomi MiMo 공식 기술 보고서/모델 카드 수치입니다. AgentLess와 일반 agent benchmark는 설정이 다릅니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-125",
    "name": "A.X K1",
    "date": "2026-01-07",
    "sortDate": "2026-01-07",
    "month": "2026-01",
    "monthName": "January",
    "company": "SK Telecom",
    "family": "A.X",
    "type": "LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "519B total / 33B active (MoE)",
    "architecture": "Decoder-only Transformer + sparse MoE (MLA)",
    "modalities": [
      "language",
      "code"
    ],
    "focus": [
      "Sovereign AI",
      "Korean public administration",
      "enterprise AX",
      "agent workflows"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "131,072",
    "languages": "Korean, English",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face)",
    "note": "Official SK Telecom model card reports 519B total / 33B active parameters; the model card is released under Apache 2.0.",
    "benchmarks": {
      "KMMLU (thinking)": 80.2,
      "KMMLU-Redux (thinking)": 77.9,
      "KMMLU-Pro (thinking)": 68.1,
      "CLIcK (thinking)": 84.9,
      "KoBALT (thinking)": 48.8,
      "MMLU-Pro (thinking)": 81.5,
      "GPQA-Diamond (thinking)": 74.0,
      "IFBench (prompt-loose) (thinking)": 64.7,
      "IFEval (prompt-strict) (thinking)": 80.4,
      "IFEval-ko (prompt-strict) (thinking)": 81.0,
      "AIME25 (thinking)": 89.8,
      "AIME25-ko (thinking)": 86.9,
      "HRM8K (thinking)": 89.4,
      "KMO25 (thinking)": 93.0,
      "LiveCodeBench v6 (25.2.1–25.5.1) (thinking)": 75.8,
      "LiveCodeBench-ko (thinking)": 73.1,
      "HumanEval+ (thinking)": 87.2,
      "HumanEval+ ko (thinking)": 90.2,
      "MBPP+ (thinking)": 93.0,
      "SciCode (thinking)": 32.4,
      "Humanity’s Last Exam (thinking)": 8.6,
      "τ² Telecom (thinking)": 58.1,
      "KMMLU (non-thinking)": 73.0,
      "KMMLU-Redux (non-thinking)": 68.3,
      "KMMLU-Pro (non-thinking)": 60.3,
      "CLIcK (non-thinking)": 77.2,
      "IFBench (non-thinking)": 44.3,
      "IFEval (non-thinking)": 78.6,
      "HumanEval+ (non-thinking)": 79.9,
      "HumanEval+ ko (non-thinking)": 75.6,
      "MBPP+ (non-thinking)": 85.7
    },
    "official_id": "skt/A.X-K1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/skt/A.X-K1"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://news.sktelecom.com/218112"
      }
    ],
    "release_date_source": "https://news.sktelecom.com/218112",
    "parameter_source": "https://huggingface.co/skt/A.X-K1",
    "benchmark_sources": {
      "KMMLU (thinking)": "https://huggingface.co/skt/A.X-K1",
      "KMMLU-Redux (thinking)": "https://huggingface.co/skt/A.X-K1",
      "KMMLU-Pro (thinking)": "https://huggingface.co/skt/A.X-K1",
      "CLIcK (thinking)": "https://huggingface.co/skt/A.X-K1",
      "KoBALT (thinking)": "https://huggingface.co/skt/A.X-K1",
      "MMLU-Pro (thinking)": "https://huggingface.co/skt/A.X-K1",
      "GPQA-Diamond (thinking)": "https://huggingface.co/skt/A.X-K1",
      "IFBench (prompt-loose) (thinking)": "https://huggingface.co/skt/A.X-K1",
      "IFEval (prompt-strict) (thinking)": "https://huggingface.co/skt/A.X-K1",
      "IFEval-ko (prompt-strict) (thinking)": "https://huggingface.co/skt/A.X-K1",
      "AIME25 (thinking)": "https://huggingface.co/skt/A.X-K1",
      "AIME25-ko (thinking)": "https://huggingface.co/skt/A.X-K1",
      "HRM8K (thinking)": "https://huggingface.co/skt/A.X-K1",
      "KMO25 (thinking)": "https://huggingface.co/skt/A.X-K1",
      "LiveCodeBench v6 (25.2.1–25.5.1) (thinking)": "https://huggingface.co/skt/A.X-K1",
      "LiveCodeBench-ko (thinking)": "https://huggingface.co/skt/A.X-K1",
      "HumanEval+ (thinking)": "https://huggingface.co/skt/A.X-K1",
      "HumanEval+ ko (thinking)": "https://huggingface.co/skt/A.X-K1",
      "MBPP+ (thinking)": "https://huggingface.co/skt/A.X-K1",
      "SciCode (thinking)": "https://huggingface.co/skt/A.X-K1",
      "Humanity’s Last Exam (thinking)": "https://huggingface.co/skt/A.X-K1",
      "τ² Telecom (thinking)": "https://huggingface.co/skt/A.X-K1",
      "KMMLU (non-thinking)": "https://huggingface.co/skt/A.X-K1",
      "KMMLU-Redux (non-thinking)": "https://huggingface.co/skt/A.X-K1",
      "KMMLU-Pro (non-thinking)": "https://huggingface.co/skt/A.X-K1",
      "CLIcK (non-thinking)": "https://huggingface.co/skt/A.X-K1",
      "IFBench (non-thinking)": "https://huggingface.co/skt/A.X-K1",
      "IFEval (non-thinking)": "https://huggingface.co/skt/A.X-K1",
      "HumanEval+ (non-thinking)": "https://huggingface.co/skt/A.X-K1",
      "HumanEval+ ko (non-thinking)": "https://huggingface.co/skt/A.X-K1",
      "MBPP+ (non-thinking)": "https://huggingface.co/skt/A.X-K1"
    },
    "benchmark_note": "공식 HF 모델 카드의 Thinking Mode / Non-Thinking Mode 두 표 전부 수록. AA-LCR(제3자 지표)은 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-001",
    "name": "LongCat-Flash-Thinking-2601",
    "date": "2026-01-20",
    "sortDate": "2026-01-20",
    "month": "2026-01",
    "monthName": "January",
    "company": "Meituan",
    "family": "LongCat",
    "type": "LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "560B total / 27B average active (MoE; 18.6–31.3B dynamic)",
    "architecture": "Sparse MoE with dynamic activation",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "MoE; publisher reports 560B total and dynamic activation of 18.6–31.3B (about 27B average).",
    "benchmarks": {
      "LiveCodeBench": 82.8,
      "AIME 2025": 100.0,
      "IMOAnswerBench": 86.8,
      "τ²-Bench": 88.2,
      "BrowseComp": 73.1
    },
    "official_id": "meituan-longcat/LongCat-Flash-Thinking-2601",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/meituan-longcat/LongCat-Flash-Thinking-2601"
      },
      {
        "label": "공식 벤치마크 발표",
        "url": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html"
      }
    ],
    "release_date_source": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
    "parameter_source": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
    "benchmark_sources": {
      "LiveCodeBench": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
      "AIME 2025": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
      "IMOAnswerBench": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
      "τ²-Bench": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html",
      "BrowseComp": "https://tech.meituan.com/2026/01/20/LongCat-Flash-Thinking-2601.html"
    },
    "benchmark_note": "AIME-25는 Heavy Thinking Mode 결과(공식 발표 표의 Avg@16 계열)이며, LCB/BrowseComp 등은 발표문 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-002",
    "name": "Kimi K2.5",
    "date": "2026-01-27",
    "sortDate": "2026-01-27",
    "month": "2026-01",
    "monthName": "January",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "1T total / 32B active (MoE)",
    "architecture": "Native multimodal sparse MoE",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Native multimodal MoE; publisher reports 1T total and 32B active.",
    "benchmarks": {
      "SWE-bench Verified": 76.8,
      "SWE-bench Pro": 50.7,
      "SWE-bench Multilingual": 73.0,
      "Terminal-Bench 2.0": 50.8,
      "LiveCodeBench v6": 85.0,
      "AIME 2025": 96.1,
      "GPQA Diamond": 87.6,
      "MMLU-Pro": 87.1,
      "MMMU-Pro": 78.5
    },
    "official_id": "moonshotai/Kimi-K2.5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/moonshotai/Kimi-K2.5"
      }
    ],
    "release_date_source": "https://huggingface.co/moonshotai/Kimi-K2.5",
    "parameter_source": "https://huggingface.co/moonshotai/Kimi-K2.5",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "SWE-bench Pro": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "SWE-bench Multilingual": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "Terminal-Bench 2.0": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "LiveCodeBench v6": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "AIME 2025": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "GPQA Diamond": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "MMLU-Pro": "https://huggingface.co/moonshotai/Kimi-K2.5",
      "MMMU-Pro": "https://huggingface.co/moonshotai/Kimi-K2.5"
    },
    "benchmark_note": "공식 모델 카드 자기 보고 수치. 도구 사용 여부와 reasoning 설정은 원문 조건이 benchmark마다 다릅니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-003",
    "name": "Trinity-Large-Preview",
    "date": "2026-01-27",
    "sortDate": "2026-01-27",
    "month": "2026-01",
    "monthName": "January",
    "company": "Arcee AI",
    "family": "Trinity",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "398B total / ~13B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [
      "Trinity-Large-Preview",
      "Trinity-Large-Base",
      "Trinity-Large-TrueBase"
    ],
    "reasoning_effort": [],
    "availability": "",
    "note": "Sparse MoE; the publisher describes the active count as approximately 13B.",
    "benchmarks": {
      "MMLU": 87.2,
      "MMLU-Pro": 75.2,
      "GPQA Diamond": 63.3,
      "AIME 2025": 24.0
    },
    "official_id": "arcee-ai/Trinity-Large-Preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/arcee-ai/Trinity-Large-Preview"
      }
    ],
    "release_date_source": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
    "parameter_source": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
    "benchmark_sources": {
      "MMLU": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
      "MMLU-Pro": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
      "GPQA Diamond": "https://huggingface.co/arcee-ai/Trinity-Large-Preview",
      "AIME 2025": "https://huggingface.co/arcee-ai/Trinity-Large-Preview"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-01",
    "name": "Trinity-Large-Base",
    "date": "2026-01-27",
    "sortDate": "2026-01-27",
    "month": "2026-01",
    "monthName": "January",
    "company": "Arcee AI",
    "family": "Trinity",
    "type": "LLM",
    "category": "LLM",
    "status": "Base",
    "parameters": "398B total / 13B active (MoE)",
    "architecture": "Sparse MoE",
    "open_weights": true,
    "note": "Sparse MoE pretraining checkpoint.",
    "benchmarks": {
      "MATH-500": 65.2,
      "MMLU": 82.58,
      "MMLU-Pro": 66.02,
      "GPQA Diamond": 43.94
    },
    "official_id": "arcee-ai/Trinity-Large-Base",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/arcee-ai/Trinity-Large-Base"
      }
    ],
    "release_date_source": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
    "parameter_source": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
    "benchmark_sources": {
      "MATH-500": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
      "MMLU": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
      "MMLU-Pro": "https://huggingface.co/arcee-ai/Trinity-Large-Base",
      "GPQA Diamond": "https://huggingface.co/arcee-ai/Trinity-Large-Base"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-02",
    "name": "Trinity-Large-TrueBase",
    "date": "2026-01-27",
    "sortDate": "2026-01-27",
    "month": "2026-01",
    "monthName": "January",
    "company": "Arcee AI",
    "family": "Trinity",
    "type": "LLM",
    "category": "LLM",
    "status": "TrueBase",
    "parameters": "398B total / 13B active (MoE)",
    "architecture": "Sparse MoE",
    "open_weights": true,
    "note": "Sparse MoE pre-anneal pretraining checkpoint.",
    "benchmarks": {
      "MATH-500": 48.2,
      "MMLU": 78.45,
      "MMLU-Pro": 51.6,
      "GPQA Diamond": 40.91
    },
    "official_id": "arcee-ai/Trinity-Large-TrueBase",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase"
      }
    ],
    "release_date_source": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
    "parameter_source": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
    "benchmark_sources": {
      "MATH-500": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
      "MMLU": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
      "MMLU-Pro": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase",
      "GPQA Diamond": "https://huggingface.co/arcee-ai/Trinity-Large-TrueBase"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-004",
    "name": "Claude Opus 4.6",
    "date": "2026-02-05",
    "sortDate": "2026-02-05",
    "month": "2026-02",
    "monthName": "February",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 80.8,
      "Terminal-Bench 2.0": 65.4,
      "GPQA Diamond": 91.3,
      "MMLU": 91.1
    },
    "official_id": "6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf"
      }
    ],
    "release_date_source": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
    "parameter_source": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
    "benchmark_sources": {
      "SWE-bench Verified": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
      "Terminal-Bench 2.0": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
      "GPQA Diamond": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf",
      "MMLU": "https://www-cdn.anthropic.com/6a5fa276ac68b9aeb0c8b6af5fa36326e0e166dd.pdf"
    },
    "benchmark_note": "Anthropic System Card의 제공자 측 평가 수치만 수록했습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-005",
    "name": "LongCat-Flash-Lite",
    "date": "2026-02-05",
    "sortDate": "2026-02-05",
    "month": "2026-02",
    "monthName": "February",
    "company": "Meituan",
    "family": "LongCat",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "68.5B total / 2.9–4.5B active (MoE + N-gram embedding; >30B embedding)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "공식 카드의 활성 파라미터 표기 범위(2.9B~4.5B)를 보존했습니다.",
    "benchmarks": {
      "SWE-bench Verified": 54.4,
      "Terminal-Bench 2.0": 33.75,
      "SWE-bench Multilingual": 38.1,
      "GPQA Diamond": 66.78,
      "MMLU": 85.52,
      "MMLU-Pro": 78.29,
      "MATH-500": 96.8
    },
    "official_id": "meituan-longcat/LongCat-Flash-Lite",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite"
      }
    ],
    "release_date_source": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
    "parameter_source": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "Terminal-Bench 2.0": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "SWE-bench Multilingual": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "GPQA Diamond": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "MMLU": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "MMLU-Pro": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite",
      "MATH-500": "https://huggingface.co/meituan-longcat/LongCat-Flash-Lite"
    },
    "benchmark_note": "공식 모델 카드 자기 보고 수치이며, 각 benchmark의 shot/tool 조건은 카드 원문을 따릅니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-006",
    "name": "GPT-5.3-Codex",
    "date": "2026-02-06",
    "sortDate": "2026-02-06",
    "month": "2026-02",
    "monthName": "February",
    "company": "OpenAI",
    "family": "GPT",
    "type": "LLM / agentic coding",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 56.8,
      "Terminal-Bench 2.0": 77.3,
      "OSWorld-Verified": 64.7,
      "Cyber CTF": 77.6
    },
    "official_id": "introducing-gpt-5-3-codex",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-3-codex/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-3-codex/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-3-codex/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/introducing-gpt-5-3-codex/",
      "Terminal-Bench 2.0": "https://openai.com/index/introducing-gpt-5-3-codex/",
      "OSWorld-Verified": "https://openai.com/index/introducing-gpt-5-3-codex/",
      "Cyber CTF": "https://openai.com/index/introducing-gpt-5-3-codex/"
    },
    "benchmark_note": "OpenAI 공식 발표의 공개 평가 표 수치입니다. SWE-Bench Pro는 Public Dataset 조건입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-007",
    "name": "ERNIE 5.0",
    "date": "2026-02-06",
    "sortDate": "2026-02-06",
    "month": "2026-02",
    "monthName": "February",
    "company": "Baidu",
    "family": "ERNIE",
    "type": "MLLM / unified omni model",
    "category": "Omni",
    "status": "GA",
    "parameters": "2.4T total",
    "architecture": "Unified Omni Model",
    "modalities": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SimpleQA": 74.01,
      "ChineseSimpleQA": 86.03,
      "MMLU-Pro": 83.8,
      "HLE": 25.81,
      "GPQA-Diamond": 86.36,
      "AIME 2025": 89.06,
      "HMMT 2025": 79.58,
      "LiveCodeBench v6": 76.21,
      "HumanEval+": 94.48,
      "MBPP+": 82.54,
      "ZebraLogic": 96.5,
      "BBEH": 66.63,
      "IFEval": 93.35,
      "MultiChallenge": 65.98,
      "Multi-IF": 85.56,
      "TAU2-Bench": 78.79,
      "ACEBench-en": 87.7,
      "ACEBench-zh": 89.6,
      "BFCL v4": 66.47,
      "BrowseComp-zh": 64.71,
      "SpreadSheetBench": 40.08,
      "MMMU-Pro": 68.63,
      "MathVista": 84.8,
      "MathVerse": 85.13,
      "MathVision": 74.34,
      "VisualPuzzle": 64.82,
      "VisuLogic": 32.0,
      "VLMAreBlind": 91.38,
      "ChartQA": 87.8,
      "AI2D": 96.89,
      "DocVQA": 95.45,
      "ChartXiv-RQ": 67.1,
      "ChartXiv-DQ": 89.05,
      "SimpleVQA": 67.64,
      "HallusionBench": 63.87,
      "MMStar": 75.54,
      "BLINK": 70.02,
      "CV-Bench": 87.19,
      "CountBench": 96.54,
      "VideoMME": 81.35,
      "Video-MMMU": 81.11,
      "MMVU": 72.24,
      "MMAU": 80.8,
      "TUT2017": 61.42,
      "CochlScene": 74.6,
      "ClothoAQA": 74.41,
      "VocalSound": 92.01
    },
    "official_id": "ernie5.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://ernie.baidu.com/blog/posts/ernie5.0/"
      },
      {
        "label": "기술 보고서 (arXiv)",
        "url": "https://arxiv.org/abs/2602.04705"
      }
    ],
    "release_date_source": "https://ernie.baidu.com/blog/posts/ernie5.0/",
    "parameter_source": "https://ernie.baidu.com/blog/posts/ernie5.0/",
    "benchmark_sources": {
      "SimpleQA": "https://arxiv.org/abs/2602.04705",
      "ChineseSimpleQA": "https://arxiv.org/abs/2602.04705",
      "MMLU-Pro": "https://arxiv.org/abs/2602.04705",
      "HLE": "https://arxiv.org/abs/2602.04705",
      "GPQA-Diamond": "https://arxiv.org/abs/2602.04705",
      "AIME 2025": "https://arxiv.org/abs/2602.04705",
      "HMMT 2025": "https://arxiv.org/abs/2602.04705",
      "LiveCodeBench v6": "https://arxiv.org/abs/2602.04705",
      "HumanEval+": "https://arxiv.org/abs/2602.04705",
      "MBPP+": "https://arxiv.org/abs/2602.04705",
      "ZebraLogic": "https://arxiv.org/abs/2602.04705",
      "BBEH": "https://arxiv.org/abs/2602.04705",
      "IFEval": "https://arxiv.org/abs/2602.04705",
      "MultiChallenge": "https://arxiv.org/abs/2602.04705",
      "Multi-IF": "https://arxiv.org/abs/2602.04705",
      "TAU2-Bench": "https://arxiv.org/abs/2602.04705",
      "ACEBench-en": "https://arxiv.org/abs/2602.04705",
      "ACEBench-zh": "https://arxiv.org/abs/2602.04705",
      "BFCL v4": "https://arxiv.org/abs/2602.04705",
      "BrowseComp-zh": "https://arxiv.org/abs/2602.04705",
      "SpreadSheetBench": "https://arxiv.org/abs/2602.04705",
      "MMMU-Pro": "https://arxiv.org/abs/2602.04705",
      "MathVista": "https://arxiv.org/abs/2602.04705",
      "MathVerse": "https://arxiv.org/abs/2602.04705",
      "MathVision": "https://arxiv.org/abs/2602.04705",
      "VisualPuzzle": "https://arxiv.org/abs/2602.04705",
      "VisuLogic": "https://arxiv.org/abs/2602.04705",
      "VLMAreBlind": "https://arxiv.org/abs/2602.04705",
      "ChartQA": "https://arxiv.org/abs/2602.04705",
      "AI2D": "https://arxiv.org/abs/2602.04705",
      "DocVQA": "https://arxiv.org/abs/2602.04705",
      "ChartXiv-RQ": "https://arxiv.org/abs/2602.04705",
      "ChartXiv-DQ": "https://arxiv.org/abs/2602.04705",
      "SimpleVQA": "https://arxiv.org/abs/2602.04705",
      "HallusionBench": "https://arxiv.org/abs/2602.04705",
      "MMStar": "https://arxiv.org/abs/2602.04705",
      "BLINK": "https://arxiv.org/abs/2602.04705",
      "CV-Bench": "https://arxiv.org/abs/2602.04705",
      "CountBench": "https://arxiv.org/abs/2602.04705",
      "VideoMME": "https://arxiv.org/abs/2602.04705",
      "Video-MMMU": "https://arxiv.org/abs/2602.04705",
      "MMVU": "https://arxiv.org/abs/2602.04705",
      "MMAU": "https://arxiv.org/abs/2602.04705",
      "TUT2017": "https://arxiv.org/abs/2602.04705",
      "CochlScene": "https://arxiv.org/abs/2602.04705",
      "ClothoAQA": "https://arxiv.org/abs/2602.04705",
      "VocalSound": "https://arxiv.org/abs/2602.04705"
    },
    "benchmark_note": "공식 기술 보고서(arXiv:2602.04705)의 사후학습(instruct)·멀티모달·오디오 표 값. 프리트레인(Base) 표는 별도 체크포인트라 미수록(보고서 참조). OCRBench 878은 0-1000 척도라 % 점수표에서 제외. 오디오 표 중 비% 지표(WER·BLEU 성격)는 제외하고 정확도형만 수록.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-008",
    "name": "GLM-5",
    "date": "2026-02-11",
    "sortDate": "2026-02-11",
    "month": "2026-02",
    "monthName": "February",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "744B total / 40B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Sparse MoE; publisher model card reports 744B total and 40B active.",
    "benchmarks": {
      "SWE-bench Verified": 77.8,
      "SWE-bench Multilingual": 73.3,
      "Terminal-Bench 2.0": 60.7,
      "GPQA Diamond": 86.0,
      "AIME 2026": 92.7,
      "HLE": 30.5,
      "BrowseComp": 62.0
    },
    "official_id": "zai-org/GLM-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/zai-org/GLM-5",
      "SWE-bench Multilingual": "https://huggingface.co/zai-org/GLM-5",
      "Terminal-Bench 2.0": "https://huggingface.co/zai-org/GLM-5",
      "GPQA Diamond": "https://huggingface.co/zai-org/GLM-5",
      "AIME 2026": "https://huggingface.co/zai-org/GLM-5",
      "HLE": "https://huggingface.co/zai-org/GLM-5",
      "BrowseComp": "https://huggingface.co/zai-org/GLM-5"
    },
    "benchmark_note": "Z.ai 공식 모델 카드의 자기 보고 수치입니다. GLM-5.2/5.3의 수치를 이 레코드에 섞지 않았습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-009",
    "name": "MiniMax-M2.5",
    "date": "2026-02-12",
    "sortDate": "2026-02-12",
    "month": "2026-02",
    "monthName": "February",
    "company": "MiniMax",
    "family": "MiniMax M",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 80.2,
      "BrowseComp": 76.3,
      "AIME 2025": 86.3,
      "GPQA Diamond": 85.2
    },
    "official_id": "MiniMaxAI/MiniMax-M2.5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5"
      }
    ],
    "release_date_source": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
    "parameter_source": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
      "BrowseComp": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
      "AIME 2025": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5",
      "GPQA Diamond": "https://huggingface.co/MiniMaxAI/MiniMax-M2.5"
    },
    "benchmark_note": "MiniMax 공식 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-010",
    "name": "Step 3.5 Flash",
    "date": "2026-02-12",
    "sortDate": "2026-02-12",
    "month": "2026-02",
    "monthName": "February",
    "company": "StepFun",
    "family": "Step",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "196.81B total / ~11B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Sparse MoE; official model card reports 196.81B total and about 11B active.",
    "benchmarks": {
      "AIME 2025": 97.3,
      "IMOAnswerBench": 85.4,
      "LiveCodeBench v6": 86.4,
      "SWE-bench Verified": 74.4,
      "Terminal-Bench 2.0": 51.0
    },
    "official_id": "stepfun-ai/Step-3.5-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/stepfun-ai/Step-3.5-Flash"
      },
      {
        "label": "공식 벤치마크 발표",
        "url": "https://static.stepfun.com/blog/step-3.5-flash/"
      }
    ],
    "release_date_source": "https://huggingface.co/stepfun-ai/Step-3.5-Flash",
    "parameter_source": "https://huggingface.co/stepfun-ai/Step-3.5-Flash",
    "benchmark_sources": {
      "AIME 2025": "https://static.stepfun.com/blog/step-3.5-flash/",
      "IMOAnswerBench": "https://static.stepfun.com/blog/step-3.5-flash/",
      "LiveCodeBench v6": "https://static.stepfun.com/blog/step-3.5-flash/",
      "SWE-bench Verified": "https://static.stepfun.com/blog/step-3.5-flash/",
      "Terminal-Bench 2.0": "https://static.stepfun.com/blog/step-3.5-flash/"
    },
    "benchmark_note": "StepFun 공식 발표/모델 카드 수치입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-011",
    "name": "Seed 2.0",
    "date": "2026-02-14",
    "sortDate": "2026-02-14",
    "month": "2026-02",
    "monthName": "February",
    "company": "ByteDance",
    "family": "Seed / Doubao",
    "type": "MLLM / agentic foundation model",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 87.0,
      "HLE (no tool, text only)": 32.4,
      "SimpleQA Verified": 36.0,
      "HealthBench": 57.7,
      "HealthBench Hard": 29.1,
      "SuperGPQA": 68.7,
      "LPFQA": 52.6,
      "Encyclo-K": 65.7,
      "AIME 2026": 94.2,
      "AIME 2025": 98.3,
      "HMMT Feb 2025": 97.3,
      "HMMT Nov 2025": 93.3,
      "MathArena Apex": 20.3,
      "MathArena Apex (shortlist)": 82.1,
      "BeyondAIME": 86.5,
      "IMOAnswerBench (no tool)": 89.3,
      "AetherCode": 60.6,
      "LiveCodeBench v6": 87.8,
      "GPQA Diamond": 88.9,
      "Superchem (text-only)": 51.6,
      "BABE": 50.0,
      "PhyBench": 74.0,
      "FrontierSci-research": 25.0,
      "FrontierSci-olympiad": 74.0,
      "ARC-AGI-1": 85.4,
      "ARC-AGI-2": 37.5,
      "KORBench": 77.5,
      "ProcBench": 96.6,
      "MRCR v2 (8-needle)": 54.0,
      "Graphwalks BFS (<128K)": 68.9,
      "Graphwalks Parents (<128K)": 97.6,
      "LongBench v2 (128K)": 63.8,
      "Frames": 84.5,
      "DeR2 Bench": 58.2,
      "CL-Bench": 20.8,
      "Global PIQA": 92.3,
      "MMMLU": 88.1,
      "Disco-X": 82.0,
      "MultiChallenge": 68.3,
      "COLLIE": 93.9,
      "MARS-Bench": 85.6,
      "Inverse IFEval": 78.9,
      "LongFact-Objects": 92.9,
      "LongFact-Concepts": 92.8,
      "FactScore": 71.2,
      "Putnam-200 (pass@8)": 35.5,
      "Complex IF in-house (overall)": 75.26,
      "Complex IF: Format": 46.0,
      "Complex IF: Conditional": 88.19,
      "Complex IF: Content": 87.76,
      "Complex IF: Phrasing": 85.31,
      "Complex IF: Tone": 76.45,
      "Complex IF: Emoji": 93.62,
      "Complex IF: Few-shot": 65.31,
      "Complex IF: Chinese": 80.0,
      "Complex IF: English": 67.41,
      "MathVista": 89.8,
      "MathVision": 88.8,
      "DynaMath": 68.9,
      "MathKangaroo": 90.5,
      "MathCanvas": 61.9,
      "MMMU": 85.4,
      "MMMU-Pro": 78.2,
      "EMMA": 72.0,
      "SFE": 55.6,
      "HiPhO": 74.1,
      "XLRS-Bench (macro)": 54.6,
      "PhyX (open-ended)": 72.1,
      "LogicVista": 81.9,
      "VPCT": 76.0,
      "ZeroBench (main)": 12.0,
      "ZeroBench (sub)": 47.6,
      "ArcAGI1-Image": 88.8,
      "ArcAGI2-Image": 43.3,
      "VisuLogic": 47.4,
      "VLMsAreBiased": 77.4,
      "VLMsAreBlind": 98.6,
      "VisFactor": 36.8,
      "RealWorldQA": 86.0,
      "BabyVision": 60.6,
      "SimpleVQA": 71.4,
      "HallusionBench": 68.0,
      "MME-CC": 57.0,
      "MMStar": 83.0,
      "MUIRBench": 81.8,
      "MTVQA": 51.1,
      "WorldVQA": 49.9,
      "VibeEval": 81.4,
      "ViVerBench": 75.9,
      "CountBench": 95.5,
      "FSC-147 (MAE↓)": 11.3,
      "Point-Bench": 81.4,
      "BLINK": 79.5,
      "MMSIBench (circular)": 32.5,
      "TreeBench": 64.7,
      "RefSpatialBench": 72.6,
      "DA-2K": 92.3,
      "All-Angles": 72.1,
      "ERQA": 68.5,
      "ChartQAPro": 71.2,
      "OCRBench v2": 62.5,
      "CharXiv-DQ": 93.5,
      "CharXiv-RQ": 80.5,
      "DUDE": 72.4,
      "MMLongBench": 74.8,
      "LongDocURL": 74.7,
      "MMLongBench-Doc": 61.4,
      "VideoMMMU": 86.9,
      "MMVU": 78.2,
      "VideoSimpleQA": 71.9,
      "VideoReasonBench": 77.8,
      "Morse-500": 37.4,
      "VideoHolmes (w/ subtitles)": 67.4,
      "Minerva (w/ subtitles)": 66.5,
      "TVBench": 75.0,
      "ContPhy": 67.4,
      "TempCompass": 89.6,
      "EgoTempo": 71.8,
      "MotionBench": 75.2,
      "TOMATO": 59.9,
      "TOMATO (thinking w/ tracking)": 65.3,
      "VideoMME (w/ subtitles)": 89.5,
      "CGBench": 65.0,
      "LongVideoBench": 80.3,
      "VideoEval-Pro": 48.0,
      "LVBench": 76.4,
      "CrossVid": 60.3,
      "OVBench": 69.2,
      "LiveSports-3K": 78.0,
      "OVOBench": 77.0,
      "ODVBench": 72.5,
      "ViSpeak": 78.5,
      "CGBench (w/ VideoCut)": 66.8,
      "LVBench (w/ VideoCut)": 80.0,
      "ZeroVideo": 14.5,
      "ZeroVideo (w/ VideoCut)": 27.9,
      "Terminal Bench 2.0 (Terminus2)": 55.8,
      "SWE-Lancer": 49.4,
      "SWE Bench Verified": 76.5,
      "Multi-SWE-Bench": 45.2,
      "SWE-Bench Pro": 46.9,
      "SWE Multilingual": 71.7,
      "Scicode": 48.5,
      "SWE-Evo": 8.5,
      "Aider Polyglot": 80.0,
      "ArtifactsBench": 66.6,
      "CodeSimpleQA": 58.0,
      "SpreadsheetBench Verified": 79.1,
      "BrowseComp": 77.3,
      "BrowseComp-zh": 82.4,
      "HLE-text": 54.2,
      "HLE-Verified": 73.6,
      "WideSearch": 74.7,
      "FinSearchComp": 70.2,
      "DeepSearchQA": 77.4,
      "Seal-0": 49.5,
      "τ2-Bench (retail)": 90.4,
      "τ2-Bench (telecom)": 94.2,
      "MCP-Mark": 54.7,
      "BFCL-v4": 73.4,
      "VitaBench": 47.0,
      "DeepConsult": 61.1,
      "DeepResearchBench": 53.3,
      "ResearchRubrics": 50.7,
      "Minedojo-Verified": 49.0,
      "MM-BrowseComp": 48.8,
      "HLE-VL": 39.2,
      "Scicode (adv. tasks)": 52.1,
      "FrontierSci-research (adv. tasks)": 23.3,
      "Superchem (text-only, adv. tasks)": 53.0,
      "KORBench (adv. tasks)": 77.2,
      "CL-Bench (adv. tasks)": 21.5,
      "HealthBench Hard (adv. tasks)": 28.3,
      "BIObench": 53.5,
      "AInstein Bench": 47.7,
      "NL2Repo-Bench": 27.9,
      "NL2Repo (pass@1)": 3.0,
      "ToB-Complex Workflows": 64.7,
      "ToB-Reference Q&A": 72.4,
      "GDPVal-Diamond": 21.3,
      "XPert Bench": 64.5,
      "ToB-K12 Education": 62.8,
      "ToB-Compositional Tasks": 59.1,
      "ToB-Text Classification": 69.0,
      "ToB-Information Extraction": 52.0,
      "World Travel (VLM)": 12.0,
      "World Travel (TEXT)": 23.3
    },
    "official_id": "seed2-0-%25E6%25AD%25A3%25E5%BC%258F%25E5%25B8%2583",
    "official_sources": [
      {
        "label": "공식 모델 페이지",
        "url": "https://seed.bytedance.com/zh/seed2"
      },
      {
        "label": "Seed2.0 공식 모델 카드(PDF)",
        "url": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf"
      }
    ],
    "release_date_source": "https://seed.bytedance.com/zh/seed2",
    "parameter_source": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
    "benchmark_sources": {
      "MMLU-Pro": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HLE (no tool, text only)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SimpleQA Verified": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HealthBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HealthBench Hard": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SuperGPQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LPFQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Encyclo-K": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "AIME 2026": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "AIME 2025": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HMMT Feb 2025": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HMMT Nov 2025": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MathArena Apex": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MathArena Apex (shortlist)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "BeyondAIME": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "IMOAnswerBench (no tool)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "AetherCode": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LiveCodeBench v6": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "GPQA Diamond": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Superchem (text-only)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "BABE": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "PhyBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "FrontierSci-research": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "FrontierSci-olympiad": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ARC-AGI-1": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ARC-AGI-2": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "KORBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ProcBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MRCR v2 (8-needle)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Graphwalks BFS (<128K)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Graphwalks Parents (<128K)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LongBench v2 (128K)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Frames": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "DeR2 Bench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "CL-Bench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Global PIQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MMMLU": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Disco-X": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MultiChallenge": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "COLLIE": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MARS-Bench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Inverse IFEval": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LongFact-Objects": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LongFact-Concepts": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "FactScore": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Putnam-200 (pass@8)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF in-house (overall)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF: Format": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF: Conditional": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF: Content": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF: Phrasing": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF: Tone": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF: Emoji": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF: Few-shot": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF: Chinese": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Complex IF: English": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MathVista": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MathVision": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "DynaMath": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MathKangaroo": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MathCanvas": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MMMU": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MMMU-Pro": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "EMMA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SFE": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HiPhO": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "XLRS-Bench (macro)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "PhyX (open-ended)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LogicVista": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VPCT": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ZeroBench (main)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ZeroBench (sub)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ArcAGI1-Image": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ArcAGI2-Image": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VisuLogic": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VLMsAreBiased": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VLMsAreBlind": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VisFactor": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "RealWorldQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "BabyVision": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SimpleVQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HallusionBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MME-CC": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MMStar": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MUIRBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MTVQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "WorldVQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VibeEval": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ViVerBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "CountBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "FSC-147 (MAE↓)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Point-Bench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "BLINK": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MMSIBench (circular)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "TreeBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "RefSpatialBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "DA-2K": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "All-Angles": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ERQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ChartQAPro": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "OCRBench v2": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "CharXiv-DQ": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "CharXiv-RQ": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "DUDE": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MMLongBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LongDocURL": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MMLongBench-Doc": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VideoMMMU": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MMVU": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VideoSimpleQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VideoReasonBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Morse-500": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VideoHolmes (w/ subtitles)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Minerva (w/ subtitles)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "TVBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ContPhy": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "TempCompass": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "EgoTempo": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MotionBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "TOMATO": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "TOMATO (thinking w/ tracking)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VideoMME (w/ subtitles)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "CGBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LongVideoBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VideoEval-Pro": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LVBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "CrossVid": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "OVBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LiveSports-3K": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "OVOBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ODVBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ViSpeak": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "CGBench (w/ VideoCut)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "LVBench (w/ VideoCut)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ZeroVideo": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ZeroVideo (w/ VideoCut)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Terminal Bench 2.0 (Terminus2)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SWE-Lancer": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SWE Bench Verified": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Multi-SWE-Bench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SWE-Bench Pro": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SWE Multilingual": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Scicode": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SWE-Evo": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Aider Polyglot": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ArtifactsBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "CodeSimpleQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "SpreadsheetBench Verified": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "BrowseComp": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "BrowseComp-zh": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HLE-text": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HLE-Verified": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "WideSearch": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "FinSearchComp": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "DeepSearchQA": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Seal-0": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "τ2-Bench (retail)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "τ2-Bench (telecom)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MCP-Mark": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "BFCL-v4": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "VitaBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "DeepConsult": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "DeepResearchBench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ResearchRubrics": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Minedojo-Verified": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "MM-BrowseComp": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HLE-VL": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Scicode (adv. tasks)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "FrontierSci-research (adv. tasks)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "Superchem (text-only, adv. tasks)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "KORBench (adv. tasks)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "CL-Bench (adv. tasks)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "HealthBench Hard (adv. tasks)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "BIObench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "AInstein Bench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "NL2Repo-Bench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "NL2Repo (pass@1)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ToB-Complex Workflows": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ToB-Reference Q&A": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "GDPVal-Diamond": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "XPert Bench": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ToB-K12 Education": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ToB-Compositional Tasks": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ToB-Text Classification": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "ToB-Information Extraction": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "World Travel (VLM)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf",
      "World Travel (TEXT)": "https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf"
    },
    "benchmark_note": "Seed2.0 공식 모델 카드(PDF)의 Seed2.0 Pro 열 전체 수치입니다(언어·비전·비디오·에이전틱·고급 과제 표). Codeforces(3020 rating)는 비% 지표라 제외, OmniDocBench 1.5 편집거리 0.099↓·IMO 2025 35/42·CMO 2025 114/126도 비% 채점이라 메모에만 기록. 카드의 Chatbot Arena 언급(서문)은 제3자 리더보드라 제외. Seed2.0 Lite·Mini 열과 구 블로그 링크(seed.bytedance.com/en/blog, 현재 404)는 참고용 — 카드의 Lite/Mini 수치는 별도 항목이 없어 미수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-012",
    "name": "Qwen3.5-397B-A17B",
    "date": "2026-02-16",
    "sortDate": "2026-02-16",
    "month": "2026-02",
    "monthName": "February",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "397B total / 17B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 87.8,
      "MMLU-Redux": 94.9,
      "SuperGPQA": 70.4,
      "IFEval": 92.6
    },
    "official_id": "Qwen/Qwen3.5-397B-A17B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
      "MMLU-Redux": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
      "SuperGPQA": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B",
      "IFEval": "https://huggingface.co/Qwen/Qwen3.5-397B-A17B"
    },
    "benchmark_note": "Qwen 공식 모델 카드의 Qwen3.5-397B-A17B 열 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-013",
    "name": "Claude Sonnet 4.6",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 79.6,
      "SWE-bench Multilingual": 75.9,
      "Terminal-Bench 2.0": 59.1,
      "GPQA Diamond": 89.9,
      "MMLU": 89.3
    },
    "official_id": "78073f739564e986ff3e28522761a7a0b4484f84.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf"
      }
    ],
    "release_date_source": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
    "parameter_source": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
    "benchmark_sources": {
      "SWE-bench Verified": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
      "SWE-bench Multilingual": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
      "Terminal-Bench 2.0": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
      "GPQA Diamond": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf",
      "MMLU": "https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf"
    },
    "benchmark_note": "Anthropic System Card의 제공자 측 평가 수치만 수록했습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-014",
    "name": "Tiny Aya",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Multilingual Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "70+",
    "variants": [
      "Tiny Aya Global",
      "Tiny Aya Earth",
      "Tiny Aya Fire",
      "Tiny Aya Water"
    ],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "CohereLabs/tiny-aya-base",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-base"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-base",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-base",
    "benchmark_sources": {},
    "benchmark_note": "HF 카드가 gated(접근 제한)라 공식 논문(arXiv:2603.11510) 기준 — 베이스 체크포인트 자체 평가 표는 없고 Global/Earth/Fire/Water 변형 평가만 게재 — 점수 미수록.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-03",
    "name": "Tiny Aya Global",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Multilingual Dense Transformer (70+ Languages)",
    "open_weights": true,
    "note": "",
    "benchmarks": {
      "Global MMLU": 44.9,
      "INCLUDE": 45.1,
      "Global PIQA": 68.3,
      "mDolly (66 langs)": 86.9,
      "mArenaHard-v2 (66 langs)": 67.4,
      "GlobalMGSM (35 langs)": 52.8,
      "Flores (66 langs, ChrF)": 43.5,
      "WMT24++ (55 langs, ChrF)": 46.0,
      "mDolly language-consistency pass rate": 97.4,
      "mArenaHard language-consistency pass rate": 91.4,
      "GlobalMGSM language-consistency pass rate": 96.9,
      "MultiJail min safe rate (10 langs)": 87.0,
      "MultiJail mean safe rate": 91.1,
      "XSTest over-refusal (lower=better)": 10.4,
      "XSTest under-refusal (lower=better)": 15.5,
      "BLEnD SQA avg (source-lang prompts)": 32.33,
      "BLEnD SQA avg (English prompts)": 38.59
    },
    "official_id": "CohereLabs/tiny-aya-global",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-global"
      },
      {
        "label": "공식 논문 (arXiv)",
        "url": "https://arxiv.org/abs/2603.11510"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-global",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-global",
    "benchmark_sources": {
      "Global MMLU": "https://arxiv.org/abs/2603.11510",
      "INCLUDE": "https://arxiv.org/abs/2603.11510",
      "Global PIQA": "https://arxiv.org/abs/2603.11510",
      "mDolly (66 langs)": "https://arxiv.org/abs/2603.11510",
      "mArenaHard-v2 (66 langs)": "https://arxiv.org/abs/2603.11510",
      "GlobalMGSM (35 langs)": "https://arxiv.org/abs/2603.11510",
      "Flores (66 langs, ChrF)": "https://arxiv.org/abs/2603.11510",
      "WMT24++ (55 langs, ChrF)": "https://arxiv.org/abs/2603.11510",
      "mDolly language-consistency pass rate": "https://arxiv.org/abs/2603.11510",
      "mArenaHard language-consistency pass rate": "https://arxiv.org/abs/2603.11510",
      "GlobalMGSM language-consistency pass rate": "https://arxiv.org/abs/2603.11510",
      "MultiJail min safe rate (10 langs)": "https://arxiv.org/abs/2603.11510",
      "MultiJail mean safe rate": "https://arxiv.org/abs/2603.11510",
      "XSTest over-refusal (lower=better)": "https://arxiv.org/abs/2603.11510",
      "XSTest under-refusal (lower=better)": "https://arxiv.org/abs/2603.11510",
      "BLEnD SQA avg (source-lang prompts)": "https://arxiv.org/abs/2603.11510",
      "BLEnD SQA avg (English prompts)": "https://arxiv.org/abs/2603.11510"
    },
    "benchmark_note": "공식 arXiv 논문(2603.11510) 표 4·5·6·7·19·20 값. 표 5·6 값은 ±표준편차 병기(예: mDolly 86.9±6.2). 표 6은 언어 일관성 line-level pass rate. mArenaHard는 고정 평가 스위트(mArenaHard-v2). XSTest는 과잉거부율 — 낮을수록 좋음. NormAd는 지역별 값만 게재돼 종합값 미수록. HF 카드는 gated라 논문을 1차 출처로 사용.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-04",
    "name": "Tiny Aya Earth",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Regional Specialization Transformer",
    "open_weights": true,
    "note": "",
    "benchmarks": {
      "MultiJail min safe rate (10 langs)": 77.5,
      "MultiJail mean safe rate": 87.8,
      "XSTest over-refusal (lower=better)": 10.4,
      "XSTest under-refusal (lower=better)": 19.0,
      "BLEnD SQA avg (source-lang prompts)": 31.94,
      "BLEnD SQA avg (English prompts)": 40.09
    },
    "official_id": "CohereLabs/tiny-aya-earth",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-earth"
      },
      {
        "label": "공식 논문 (arXiv)",
        "url": "https://arxiv.org/abs/2603.11510"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-earth",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-earth",
    "benchmark_sources": {
      "MultiJail min safe rate (10 langs)": "https://arxiv.org/abs/2603.11510",
      "MultiJail mean safe rate": "https://arxiv.org/abs/2603.11510",
      "XSTest over-refusal (lower=better)": "https://arxiv.org/abs/2603.11510",
      "XSTest under-refusal (lower=better)": "https://arxiv.org/abs/2603.11510",
      "BLEnD SQA avg (source-lang prompts)": "https://arxiv.org/abs/2603.11510",
      "BLEnD SQA avg (English prompts)": "https://arxiv.org/abs/2603.11510"
    },
    "benchmark_note": "공식 arXiv 논문(2603.11510)의 Tiny Aya Earth 행(표 7 안전 평가·표 19/20 BLEnD SQA 평균). XSTest·refusal 지표는 낮을수록 좋음. 지역별 NormAd 정확도는 표 16/17 참조(종합 미게재).",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-05",
    "name": "Tiny Aya Fire",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Regional Specialization Transformer",
    "open_weights": true,
    "note": "",
    "benchmarks": {
      "MultiJail min safe rate (10 langs)": 78.1,
      "MultiJail mean safe rate": 90.0,
      "XSTest over-refusal (lower=better)": 10.4,
      "XSTest under-refusal (lower=better)": 15.0,
      "BLEnD SQA avg (source-lang prompts)": 33.31,
      "BLEnD SQA avg (English prompts)": 41.0
    },
    "official_id": "CohereLabs/tiny-aya-fire",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-fire"
      },
      {
        "label": "공식 논문 (arXiv)",
        "url": "https://arxiv.org/abs/2603.11510"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-fire",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-fire",
    "benchmark_sources": {
      "MultiJail min safe rate (10 langs)": "https://arxiv.org/abs/2603.11510",
      "MultiJail mean safe rate": "https://arxiv.org/abs/2603.11510",
      "XSTest over-refusal (lower=better)": "https://arxiv.org/abs/2603.11510",
      "XSTest under-refusal (lower=better)": "https://arxiv.org/abs/2603.11510",
      "BLEnD SQA avg (source-lang prompts)": "https://arxiv.org/abs/2603.11510",
      "BLEnD SQA avg (English prompts)": "https://arxiv.org/abs/2603.11510"
    },
    "benchmark_note": "공식 arXiv 논문(2603.11510)의 Tiny Aya Fire 행(표 7 안전 평가·표 19/20 BLEnD SQA 평균). XSTest·refusal 지표는 낮을수록 좋음. 지역별 NormAd 정확도는 표 16/17 참조(종합 미게재).",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-06",
    "name": "Tiny Aya Water",
    "date": "2026-02-17",
    "sortDate": "2026-02-17",
    "month": "2026-02",
    "monthName": "February",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "architecture": "Regional Specialization Transformer",
    "open_weights": true,
    "note": "",
    "benchmarks": {
      "MultiJail min safe rate (10 langs)": 82.9,
      "MultiJail mean safe rate": 89.7,
      "XSTest over-refusal (lower=better)": 10.0,
      "XSTest under-refusal (lower=better)": 19.5,
      "BLEnD SQA avg (source-lang prompts)": 32.39,
      "BLEnD SQA avg (English prompts)": 39.57
    },
    "official_id": "CohereLabs/tiny-aya-water",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-water"
      },
      {
        "label": "공식 논문 (arXiv)",
        "url": "https://arxiv.org/abs/2603.11510"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/tiny-aya-water",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-water",
    "benchmark_sources": {
      "MultiJail min safe rate (10 langs)": "https://arxiv.org/abs/2603.11510",
      "MultiJail mean safe rate": "https://arxiv.org/abs/2603.11510",
      "XSTest over-refusal (lower=better)": "https://arxiv.org/abs/2603.11510",
      "XSTest under-refusal (lower=better)": "https://arxiv.org/abs/2603.11510",
      "BLEnD SQA avg (source-lang prompts)": "https://arxiv.org/abs/2603.11510",
      "BLEnD SQA avg (English prompts)": "https://arxiv.org/abs/2603.11510"
    },
    "benchmark_note": "공식 arXiv 논문(2603.11510)의 Tiny Aya Water 행(표 7 안전 평가·표 19/20 BLEnD SQA 평균). XSTest·refusal 지표는 낮을수록 좋음. 지역별 NormAd 정확도는 표 16/17 참조(종합 미게재).",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-015",
    "name": "Qwen3.5-122B-A10B",
    "date": "2026-02-24",
    "sortDate": "2026-02-24",
    "month": "2026-02",
    "monthName": "February",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "122B total / 10B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 86.7,
      "GPQA Diamond": 86.6,
      "SWE-bench Verified": 72.0,
      "Terminal-Bench 2.0": 49.4
    },
    "official_id": "Qwen/Qwen3.5-122B-A10B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
      "GPQA Diamond": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
      "SWE-bench Verified": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
      "Terminal-Bench 2.0": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B"
    },
    "benchmark_note": "Qwen 공식 모델 카드의 122B 모델 열 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-016",
    "name": "Qwen3.5-35B-A3B",
    "date": "2026-02-24",
    "sortDate": "2026-02-24",
    "month": "2026-02",
    "monthName": "February",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 69.2,
      "SWE-bench Multilingual": 60.3,
      "SWE-bench Pro": 44.6,
      "Terminal-Bench 2.0": 40.5
    },
    "official_id": "Qwen/Qwen3.5-35B-A3B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
      "SWE-bench Multilingual": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
      "SWE-bench Pro": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
      "Terminal-Bench 2.0": "https://huggingface.co/Qwen/Qwen3.5-35B-A3B"
    },
    "benchmark_note": "Qwen 공식 Qwen3.5-35B-A3B 발표/카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-017",
    "name": "Qwen3.5-27B",
    "date": "2026-02-24",
    "sortDate": "2026-02-24",
    "month": "2026-02",
    "monthName": "February",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "27B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 86.1,
      "MMLU-Redux": 93.2,
      "C-Eval": 90.5,
      "SuperGPQA": 65.6,
      "IFEval": 95.0,
      "IFBench": 76.5,
      "MultiChallenge": 60.8,
      "LongBench v2": 60.6,
      "HLE w/ CoT": 24.3,
      "GPQA Diamond": 85.5,
      "HMMT Feb 25": 92.0,
      "HMMT Nov 25": 89.8,
      "SWE-bench Verified": 72.4,
      "Terminal Bench 2": 41.6,
      "LiveCodeBench v6": 80.7,
      "OJBench": 40.1,
      "FullStackBench en": 60.1,
      "FullStackBench zh": 57.4,
      "BFCL-V4": 68.5,
      "TAU2-Bench": 79.0,
      "VITA-Bench": 41.9,
      "DeepPlanning": 22.6,
      "HLE w/ tool": 48.5,
      "Browsecomp": 61.0,
      "Browsecomp-zh": 62.1,
      "WideSearch": 61.1,
      "Seal-0": 47.2,
      "MMMLU": 85.9,
      "MMLU-ProX": 82.2,
      "NOVA-63": 58.1,
      "INCLUDE": 81.6,
      "Global PIQA": 87.5,
      "PolyMATH": 71.2,
      "WMT24++": 77.6,
      "MAXIFE": 88.0,
      "MMMU": 82.3,
      "MMMU-Pro": 75.0,
      "MathVision": 86.0,
      "Mathvista(mini)": 87.8,
      "DynaMath": 87.7,
      "ZEROBench": 10.0,
      "ZEROBench_sub": 36.2,
      "VlmsAreBlind": 96.9,
      "BabyVision (thinking)": 44.6,
      "BabyVision (non-thinking)": 34.8,
      "RealWorldQA": 83.7,
      "MMStar": 81.0,
      "MMBench EN-DEV-v1.1": 92.6,
      "SimpleVQA": 56.0,
      "HallusionBench": 70.0,
      "OmniDocBench1.5": 88.9,
      "CharXiv(RQ)": 79.5,
      "MMLongBench-Doc": 60.2,
      "CC-OCR": 81.0,
      "AI2D_TEST": 92.9,
      "OCRBench": 89.4,
      "ERQA": 60.5,
      "CountBench": 97.8,
      "RefCOCO(avg)": 90.9,
      "ODInW13": 41.1,
      "EmbSpatialBench": 84.5,
      "RefSpatialBench": 67.7,
      "LingoQA": 82.0,
      "Hypersim": 13.0,
      "SUNRGBD": 35.4,
      "Nuscene": 15.2,
      "VideoMME (w sub.)": 87.0,
      "VideoMME (w/o sub.)": 82.8,
      "VideoMMMU": 82.3,
      "MLVU": 85.9,
      "MVBench": 74.6,
      "LVBench": 73.6,
      "MMVU": 73.3,
      "ScreenSpot Pro": 70.3,
      "OSWorld-Verified": 56.2,
      "AndroidWorld": 64.2,
      "TIR-Bench (thinking)": 59.8,
      "TIR-Bench (non-thinking)": 42.3,
      "V* (thinking)": 93.7,
      "V* (non-thinking)": 89.0,
      "SLAKE": 80.0,
      "PMC-VQA": 62.4,
      "MedXpertQA-MM": 62.4
    },
    "official_id": "Qwen/Qwen3.5-27B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-27B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-27B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-27B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MMLU-Redux": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "C-Eval": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "SuperGPQA": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "IFEval": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "IFBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MultiChallenge": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "LongBench v2": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "HLE w/ CoT": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "GPQA Diamond": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "HMMT Feb 25": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "HMMT Nov 25": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "SWE-bench Verified": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "Terminal Bench 2": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "LiveCodeBench v6": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "OJBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "FullStackBench en": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "FullStackBench zh": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "BFCL-V4": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "TAU2-Bench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "VITA-Bench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "DeepPlanning": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "HLE w/ tool": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "Browsecomp": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "Browsecomp-zh": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "WideSearch": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "Seal-0": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MMMLU": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MMLU-ProX": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "NOVA-63": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "INCLUDE": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "Global PIQA": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "PolyMATH": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "WMT24++": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MAXIFE": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MMMU": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MMMU-Pro": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MathVision": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "Mathvista(mini)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "DynaMath": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "ZEROBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "ZEROBench_sub": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "VlmsAreBlind": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "BabyVision (thinking)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "BabyVision (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "RealWorldQA": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MMStar": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MMBench EN-DEV-v1.1": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "SimpleVQA": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "HallusionBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "OmniDocBench1.5": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "CharXiv(RQ)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MMLongBench-Doc": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "CC-OCR": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "AI2D_TEST": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "OCRBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "ERQA": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "CountBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "RefCOCO(avg)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "ODInW13": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "EmbSpatialBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "RefSpatialBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "LingoQA": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "Hypersim": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "SUNRGBD": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "Nuscene": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "VideoMME (w sub.)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "VideoMME (w/o sub.)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "VideoMMMU": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MLVU": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MVBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "LVBench": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MMVU": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "ScreenSpot Pro": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "OSWorld-Verified": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "AndroidWorld": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "TIR-Bench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "TIR-Bench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "V* (thinking)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "V* (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "SLAKE": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "PMC-VQA": "https://huggingface.co/Qwen/Qwen3.5-27B",
      "MedXpertQA-MM": "https://huggingface.co/Qwen/Qwen3.5-27B"
    },
    "benchmark_note": "공식 HF 모델 카드 표 기준. 지식/언어 표는 Thinking 단일 모드, 비전 표의 'a/b' 값은 Thinking/Non-thinking 순(카드 각주). AA-LCR(Artificial Analysis 장문맥 지표) 66.1과 Codeforces 레이팅 1899는 제3자 지표·비% 척도라 점수표에서 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-018",
    "name": "Qwen3.5-9B",
    "date": "2026-03-02",
    "sortDate": "2026-03-02",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "9B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 82.5,
      "MMLU-Redux": 91.1,
      "C-Eval": 88.2,
      "SuperGPQA": 58.2,
      "GPQA Diamond": 81.7,
      "IFEval": 91.5,
      "IFBench": 64.5,
      "MultiChallenge": 54.5,
      "LongBench v2": 55.2,
      "HMMT Feb 25": 83.2,
      "HMMT Nov 25": 82.9,
      "LiveCodeBench v6": 65.6,
      "OJBench": 29.2,
      "BFCL-V4": 66.1,
      "TAU2-Bench": 79.1,
      "VITA-Bench": 29.8,
      "DeepPlanning": 18.0,
      "MMMLU": 81.2,
      "MMLU-ProX": 76.3,
      "NOVA-63": 55.9,
      "INCLUDE": 75.6,
      "Global PIQA": 83.2,
      "PolyMATH": 57.3,
      "WMT24++": 72.6,
      "MAXIFE": 83.4,
      "MMMU": 78.4,
      "MMMU-Pro": 70.1,
      "MathVision": 78.9,
      "Mathvista(mini)": 85.7,
      "We-Math": 75.2,
      "DynaMath": 83.6,
      "ZEROBench": 3.0,
      "ZEROBench_sub": 31.1,
      "VlmsAreBlind": 93.7,
      "BabyVision (thinking)": 28.6,
      "BabyVision (non-thinking)": 25.8,
      "RealWorldQA": 80.3,
      "MMStar": 79.7,
      "MMBench EN-DEV-v1.1": 90.1,
      "SimpleVQA": 51.2,
      "HallusionBench": 69.3,
      "OmniDocBench1.5": 87.7,
      "CharXiv(RQ)": 73.0,
      "MMLongBench-Doc": 57.7,
      "CC-OCR": 79.3,
      "AI2D_TEST": 90.2,
      "OCRBench": 89.2,
      "ERQA": 55.5,
      "CountBench": 97.2,
      "RefCOCO(avg)": 89.7,
      "EmbSpatialBench": 83.0,
      "RefSpatialBench": 58.5,
      "LingoQA": 80.4,
      "Hypersim": 13.5,
      "Nuscene": 11.8,
      "VideoMME (w sub.)": 84.5,
      "VideoMME (w/o sub.)": 78.4,
      "VideoMMMU": 78.9,
      "MLVU": 84.4,
      "MVBench": 74.4,
      "LVBench": 70.0,
      "MMVU": 67.8,
      "ScreenSpot Pro": 65.2,
      "OSWorld-Verified": 41.8,
      "AndroidWorld": 57.8,
      "TIR-Bench (thinking)": 45.6,
      "TIR-Bench (non-thinking)": 31.9,
      "V* (thinking)": 90.1,
      "V* (non-thinking)": 88.5,
      "SLAKE": 79.0,
      "PMC-VQA": 57.9,
      "MedXpertQA-MM": 49.9
    },
    "official_id": "Qwen/Qwen3.5-9B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-9B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-9B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-9B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MMLU-Redux": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "C-Eval": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "SuperGPQA": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "GPQA Diamond": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "IFEval": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "IFBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MultiChallenge": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "LongBench v2": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "HMMT Feb 25": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "HMMT Nov 25": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "LiveCodeBench v6": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "OJBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "BFCL-V4": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "TAU2-Bench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "VITA-Bench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "DeepPlanning": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MMMLU": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MMLU-ProX": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "NOVA-63": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "INCLUDE": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "Global PIQA": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "PolyMATH": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "WMT24++": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MAXIFE": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MMMU": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MMMU-Pro": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MathVision": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "Mathvista(mini)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "We-Math": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "DynaMath": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "ZEROBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "ZEROBench_sub": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "VlmsAreBlind": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "BabyVision (thinking)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "BabyVision (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "RealWorldQA": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MMStar": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MMBench EN-DEV-v1.1": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "SimpleVQA": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "HallusionBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "OmniDocBench1.5": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "CharXiv(RQ)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MMLongBench-Doc": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "CC-OCR": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "AI2D_TEST": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "OCRBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "ERQA": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "CountBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "RefCOCO(avg)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "EmbSpatialBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "RefSpatialBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "LingoQA": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "Hypersim": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "Nuscene": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "VideoMME (w sub.)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "VideoMME (w/o sub.)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "VideoMMMU": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MLVU": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MVBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "LVBench": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MMVU": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "ScreenSpot Pro": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "OSWorld-Verified": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "AndroidWorld": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "TIR-Bench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "TIR-Bench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "V* (thinking)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "V* (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "SLAKE": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "PMC-VQA": "https://huggingface.co/Qwen/Qwen3.5-9B",
      "MedXpertQA-MM": "https://huggingface.co/Qwen/Qwen3.5-9B"
    },
    "benchmark_note": "공식 HF 모델 카드 표 기준(Qwen3.5-9B 열). 언어 표는 Thinking 모드 값. 비전 표 'a/b' 값은 Thinking/Non-thinking 순. AA-LCR 63.0은 제3자 지표라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-019",
    "name": "Qwen3.5-4B",
    "date": "2026-03-02",
    "sortDate": "2026-03-02",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "4B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 79.1,
      "MMLU-Redux": 88.8,
      "C-Eval": 85.1,
      "SuperGPQA": 52.9,
      "GPQA Diamond": 76.2,
      "IFEval": 89.8,
      "IFBench": 59.2,
      "MultiChallenge": 49.0,
      "LongBench v2": 50.0,
      "HMMT Feb 25": 74.0,
      "HMMT Nov 25": 76.8,
      "LiveCodeBench v6": 55.8,
      "OJBench": 24.1,
      "BFCL-V4": 50.3,
      "TAU2-Bench": 79.9,
      "VITA-Bench": 22.0,
      "DeepPlanning": 17.6,
      "MMMLU": 76.1,
      "MMLU-ProX": 71.5,
      "NOVA-63": 54.3,
      "INCLUDE": 71.0,
      "Global PIQA": 78.9,
      "PolyMATH": 51.1,
      "WMT24++": 66.6,
      "MAXIFE": 78.0,
      "MMMU": 77.6,
      "MMMU-Pro": 66.3,
      "MathVision": 74.6,
      "Mathvista(mini)": 85.1,
      "We-Math": 75.4,
      "DynaMath": 83.3,
      "ZEROBench": 3.0,
      "ZEROBench_sub": 26.3,
      "VlmsAreBlind": 92.6,
      "BabyVision (thinking)": 16.0,
      "BabyVision (non-thinking)": 19.1,
      "RealWorldQA": 79.5,
      "MMStar": 78.3,
      "MMBench EN-DEV-v1.1": 89.4,
      "SimpleVQA": 43.4,
      "HallusionBench": 65.0,
      "OmniDocBench1.5": 86.2,
      "CharXiv(RQ)": 70.8,
      "MMLongBench-Doc": 54.2,
      "CC-OCR": 76.7,
      "AI2D_TEST": 89.6,
      "OCRBench": 85.0,
      "ERQA": 54.0,
      "CountBench": 96.3,
      "RefCOCO(avg)": 88.1,
      "EmbSpatialBench": 81.3,
      "RefSpatialBench": 54.6,
      "LingoQA": 74.4,
      "Hypersim": 12.5,
      "Nuscene": 9.9,
      "VideoMME (w sub.)": 83.5,
      "VideoMME (w/o sub.)": 76.9,
      "VideoMMMU": 74.1,
      "MLVU": 82.8,
      "MVBench": 71.2,
      "LVBench": 66.4,
      "MMVU": 64.9,
      "ScreenSpot Pro": 60.3,
      "OSWorld-Verified": 35.6,
      "AndroidWorld": 58.6,
      "TIR-Bench (thinking)": 38.9,
      "TIR-Bench (non-thinking)": 29.9,
      "V* (thinking)": 84.3,
      "V* (non-thinking)": 86.4,
      "SLAKE": 76.1,
      "PMC-VQA": 55.5,
      "MedXpertQA-MM": 42.9
    },
    "official_id": "Qwen/Qwen3.5-4B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-4B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-4B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-4B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MMLU-Redux": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "C-Eval": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "SuperGPQA": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "GPQA Diamond": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "IFEval": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "IFBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MultiChallenge": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "LongBench v2": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "HMMT Feb 25": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "HMMT Nov 25": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "LiveCodeBench v6": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "OJBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "BFCL-V4": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "TAU2-Bench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "VITA-Bench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "DeepPlanning": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MMMLU": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MMLU-ProX": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "NOVA-63": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "INCLUDE": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "Global PIQA": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "PolyMATH": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "WMT24++": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MAXIFE": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MMMU": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MMMU-Pro": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MathVision": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "Mathvista(mini)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "We-Math": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "DynaMath": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "ZEROBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "ZEROBench_sub": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "VlmsAreBlind": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "BabyVision (thinking)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "BabyVision (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "RealWorldQA": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MMStar": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MMBench EN-DEV-v1.1": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "SimpleVQA": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "HallusionBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "OmniDocBench1.5": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "CharXiv(RQ)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MMLongBench-Doc": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "CC-OCR": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "AI2D_TEST": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "OCRBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "ERQA": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "CountBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "RefCOCO(avg)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "EmbSpatialBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "RefSpatialBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "LingoQA": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "Hypersim": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "Nuscene": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "VideoMME (w sub.)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "VideoMME (w/o sub.)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "VideoMMMU": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MLVU": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MVBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "LVBench": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MMVU": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "ScreenSpot Pro": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "OSWorld-Verified": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "AndroidWorld": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "TIR-Bench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "TIR-Bench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "V* (thinking)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "V* (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "SLAKE": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "PMC-VQA": "https://huggingface.co/Qwen/Qwen3.5-4B",
      "MedXpertQA-MM": "https://huggingface.co/Qwen/Qwen3.5-4B"
    },
    "benchmark_note": "공식 HF 모델 카드 표 기준(Qwen3.5-4B 열). 언어 표는 Thinking 모드 값. 비전 표 'a/b' 값은 Thinking/Non-thinking 순. AA-LCR 57.0은 제3자 지표라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-020",
    "name": "Qwen3.5-2B",
    "date": "2026-03-02",
    "sortDate": "2026-03-02",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "2B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro (non-thinking)": 55.3,
      "MMLU-Redux (non-thinking)": 69.2,
      "C-Eval (non-thinking)": 65.2,
      "SuperGPQA (non-thinking)": 30.4,
      "IFEval (non-thinking)": 61.2,
      "MMMLU (non-thinking)": 56.9,
      "MMLU-Pro (thinking)": 66.5,
      "MMLU-Redux (thinking)": 79.6,
      "C-Eval (thinking)": 73.2,
      "SuperGPQA (thinking)": 37.5,
      "GPQA (thinking)": 51.6,
      "IFEval (thinking)": 78.6,
      "IFBench (thinking)": 41.3,
      "MultiChallenge (thinking)": 33.7,
      "LongBench v2 (thinking)": 38.7,
      "HMMT Feb 25 (thinking)": 22.9,
      "HMMT Nov 25 (thinking)": 19.6,
      "BFCL-V4 (thinking)": 43.6,
      "TAU2-Bench (thinking)": 48.8,
      "MMMLU (thinking)": 63.1,
      "MMLU-ProX (thinking)": 52.3,
      "NOVA-63 (thinking)": 46.4,
      "INCLUDE (thinking)": 55.4,
      "Global PIQA (thinking)": 69.3,
      "PolyMATH (thinking)": 26.1,
      "WMT24++ (thinking)": 45.8,
      "MAXIFE (thinking)": 60.6,
      "MMMU (thinking)": 64.2,
      "MMMU (non-thinking)": 64.2,
      "MMMU-Pro (thinking)": 50.3,
      "MMMU-Pro (non-thinking)": 47.7,
      "Mathvista(mini) (thinking)": 76.7,
      "Mathvista(mini) (non-thinking)": 73.9,
      "DynaMath (thinking)": 73.6,
      "DynaMath (non-thinking)": 69.6,
      "ZEROBench (thinking)": 1.0,
      "ZEROBench (non-thinking)": 0.0,
      "ZEROBench_sub (thinking)": 17.1,
      "ZEROBench_sub (non-thinking)": 18.6,
      "VlmsAreBlind (thinking)": 75.8,
      "VlmsAreBlind (non-thinking)": 74.3,
      "RealWorldQA (thinking)": 74.5,
      "RealWorldQA (non-thinking)": 71.2,
      "MMStar (thinking)": 71.7,
      "MMStar (non-thinking)": 68.0,
      "MMBench EN-DEV-v1.1 (thinking)": 83.3,
      "MMBench EN-DEV-v1.1 (non-thinking)": 81.3,
      "SimpleVQA (thinking)": 38.5,
      "SimpleVQA (non-thinking)": 39.5,
      "HallusionBench (thinking)": 58.0,
      "HallusionBench (non-thinking)": 51.3,
      "MMLongBench-Doc (thinking)": 45.4,
      "MMLongBench-Doc (non-thinking)": 38.8,
      "AI2D_TEST (thinking)": 83.3,
      "AI2D_TEST (non-thinking)": 81.5,
      "CC-OCR (thinking)": 72.9,
      "CC-OCR (non-thinking)": 75.8,
      "OmniDocBench1.5 (thinking)": 79.8,
      "OmniDocBench1.5 (non-thinking)": 80.9,
      "CharXiv(RQ) (thinking)": 58.8,
      "CharXiv(RQ) (non-thinking)": 52.6,
      "OCRBench (thinking)": 84.5,
      "OCRBench (non-thinking)": 85.4,
      "RefCOCO(avg) (thinking)": 84.8,
      "RefCOCO(avg) (non-thinking)": 84.3,
      "CountBench (thinking)": 91.4,
      "CountBench (non-thinking)": 86.8,
      "ODInW13 (thinking)": 35.9,
      "ODInW13 (non-thinking)": 40.5,
      "ERQA (thinking)": 43.8,
      "ERQA (non-thinking)": 33.0,
      "EmbSpatialBench (thinking)": 77.9,
      "EmbSpatialBench (non-thinking)": 66.4,
      "RefSpatialBench (thinking)": 32.9,
      "RefSpatialBench (non-thinking)": 30.0,
      "Hypersim (thinking)": 12.4,
      "Hypersim (non-thinking)": 12.4,
      "SUNRGBD (thinking)": 28.7,
      "SUNRGBD (non-thinking)": 25.6,
      "Nuscene (thinking)": 6.9,
      "Nuscene (non-thinking)": 8.5,
      "SLAKE (thinking)": 74.4,
      "SLAKE (non-thinking)": 67.5,
      "PMC-VQA (thinking)": 48.8,
      "PMC-VQA (non-thinking)": 54.0,
      "MedXpertQA-MM (thinking)": 26.9,
      "MedXpertQA-MM (non-thinking)": 19.1
    },
    "official_id": "Qwen/Qwen3.5-2B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-2B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-2B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-2B",
    "benchmark_sources": {
      "MMLU-Pro (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMLU-Redux (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "C-Eval (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "SuperGPQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "IFEval (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMMLU (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMLU-Pro (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMLU-Redux (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "C-Eval (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "SuperGPQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "GPQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "IFEval (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "IFBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MultiChallenge (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "LongBench v2 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "HMMT Feb 25 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "HMMT Nov 25 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "BFCL-V4 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "TAU2-Bench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMMLU (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMLU-ProX (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "NOVA-63 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "INCLUDE (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "Global PIQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "PolyMATH (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "WMT24++ (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MAXIFE (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMMU (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMMU (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMMU-Pro (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMMU-Pro (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "Mathvista(mini) (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "Mathvista(mini) (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "DynaMath (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "DynaMath (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "ZEROBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "ZEROBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "ZEROBench_sub (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "ZEROBench_sub (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "VlmsAreBlind (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "VlmsAreBlind (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "RealWorldQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "RealWorldQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMStar (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMStar (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMBench EN-DEV-v1.1 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMBench EN-DEV-v1.1 (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "SimpleVQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "SimpleVQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "HallusionBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "HallusionBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMLongBench-Doc (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MMLongBench-Doc (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "AI2D_TEST (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "AI2D_TEST (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "CC-OCR (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "CC-OCR (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "OmniDocBench1.5 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "OmniDocBench1.5 (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "CharXiv(RQ) (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "CharXiv(RQ) (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "OCRBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "OCRBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "RefCOCO(avg) (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "RefCOCO(avg) (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "CountBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "CountBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "ODInW13 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "ODInW13 (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "ERQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "ERQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "EmbSpatialBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "EmbSpatialBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "RefSpatialBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "RefSpatialBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "Hypersim (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "Hypersim (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "SUNRGBD (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "SUNRGBD (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "Nuscene (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "Nuscene (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "SLAKE (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "SLAKE (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "PMC-VQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "PMC-VQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MedXpertQA-MM (thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B",
      "MedXpertQA-MM (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-2B"
    },
    "benchmark_note": "공식 HF 모델 카드 표 기준(Qwen3.5-2B 열). 언어 표는 모드별(Thinking/Non-thinking) 구분 표기. 비전 표 'a/b' 값은 Thinking/Non-thinking 순. AA-LCR 25.6은 제3자 지표라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-021",
    "name": "Qwen3.5-0.8B",
    "date": "2026-03-02",
    "sortDate": "2026-03-02",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "0.8B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro (non-thinking)": 29.7,
      "MMLU-Redux (non-thinking)": 48.5,
      "C-Eval (non-thinking)": 46.4,
      "SuperGPQA (non-thinking)": 16.9,
      "IFEval (non-thinking)": 52.1,
      "MMMLU (non-thinking)": 34.1,
      "MMLU-Pro (thinking)": 42.3,
      "MMLU-Redux (thinking)": 59.5,
      "C-Eval (thinking)": 50.5,
      "SuperGPQA (thinking)": 21.3,
      "GPQA (thinking)": 11.9,
      "IFEval (thinking)": 44.0,
      "IFBench (thinking)": 21.0,
      "MultiChallenge (thinking)": 18.9,
      "LongBench v2 (thinking)": 26.1,
      "BFCL-V4 (thinking)": 25.3,
      "TAU2-Bench (thinking)": 11.6,
      "MMMLU (thinking)": 44.3,
      "MMLU-ProX (thinking)": 34.6,
      "NOVA-63 (thinking)": 42.4,
      "INCLUDE (thinking)": 40.6,
      "Global PIQA (thinking)": 59.4,
      "PolyMATH (thinking)": 8.2,
      "WMT24++ (thinking)": 27.2,
      "MAXIFE (thinking)": 39.2,
      "MMMU (thinking)": 49.0,
      "MMMU (non-thinking)": 47.4,
      "MMMU-Pro (thinking)": 31.2,
      "MMMU-Pro (non-thinking)": 31.4,
      "Mathvista(mini) (thinking)": 62.2,
      "Mathvista(mini) (non-thinking)": 58.6,
      "DynaMath (thinking)": 49.9,
      "DynaMath (non-thinking)": 46.5,
      "ZEROBench (thinking)": 0.0,
      "ZEROBench (non-thinking)": 0.0,
      "ZEROBench_sub (thinking)": 12.9,
      "ZEROBench_sub (non-thinking)": 11.4,
      "VlmsAreBlind (thinking)": 59.4,
      "VlmsAreBlind (non-thinking)": 57.3,
      "RealWorldQA (thinking)": 63.4,
      "RealWorldQA (non-thinking)": 61.6,
      "MMStar (thinking)": 58.3,
      "MMStar (non-thinking)": 55.9,
      "MMBench EN-DEV-v1.1 (thinking)": 69.9,
      "MMBench EN-DEV-v1.1 (non-thinking)": 68.0,
      "SimpleVQA (thinking)": 31.3,
      "SimpleVQA (non-thinking)": 30.4,
      "HallusionBench (thinking)": 53.1,
      "HallusionBench (non-thinking)": 46.7,
      "MMLongBench-Doc (thinking)": 33.6,
      "MMLongBench-Doc (non-thinking)": 28.1,
      "AI2D_TEST (thinking)": 69.9,
      "AI2D_TEST (non-thinking)": 68.7,
      "CC-OCR (thinking)": 63.2,
      "CC-OCR (non-thinking)": 66.7,
      "OmniDocBench1.5 (thinking)": 61.0,
      "OmniDocBench1.5 (non-thinking)": 70.6,
      "CharXiv(RQ) (thinking)": 41.3,
      "CharXiv(RQ) (non-thinking)": 38.2,
      "OCRBench (thinking)": 74.5,
      "OCRBench (non-thinking)": 79.1,
      "RefCOCO(avg) (thinking)": 79.3,
      "RefCOCO(avg) (non-thinking)": 77.8,
      "CountBench (thinking)": 77.0,
      "CountBench (non-thinking)": 68.6,
      "ODInW13 (thinking)": 31.6,
      "ODInW13 (non-thinking)": 33.2,
      "ERQA (thinking)": 34.5,
      "ERQA (non-thinking)": 23.8,
      "EmbSpatialBench (thinking)": 68.6,
      "EmbSpatialBench (non-thinking)": 54.6,
      "RefSpatialBench (thinking)": 23.5,
      "RefSpatialBench (non-thinking)": 21.7,
      "Hypersim (thinking)": 11.9,
      "Hypersim (non-thinking)": 11.0,
      "SUNRGBD (thinking)": 26.1,
      "SUNRGBD (non-thinking)": 23.3,
      "Nuscene (thinking)": 5.7,
      "Nuscene (non-thinking)": 7.0,
      "SLAKE (thinking)": 62.6,
      "SLAKE (non-thinking)": 59.5,
      "PMC-VQA (thinking)": 40.4,
      "PMC-VQA (non-thinking)": 45.5,
      "MedXpertQA-MM (thinking)": 17.1,
      "MedXpertQA-MM (non-thinking)": 25.3
    },
    "official_id": "Qwen/Qwen3.5-0.8B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.5-0.8B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
    "benchmark_sources": {
      "MMLU-Pro (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMLU-Redux (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "C-Eval (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "SuperGPQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "IFEval (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMMLU (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMLU-Pro (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMLU-Redux (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "C-Eval (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "SuperGPQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "GPQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "IFEval (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "IFBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MultiChallenge (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "LongBench v2 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "BFCL-V4 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "TAU2-Bench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMMLU (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMLU-ProX (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "NOVA-63 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "INCLUDE (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "Global PIQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "PolyMATH (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "WMT24++ (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MAXIFE (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMMU (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMMU (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMMU-Pro (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMMU-Pro (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "Mathvista(mini) (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "Mathvista(mini) (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "DynaMath (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "DynaMath (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "ZEROBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "ZEROBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "ZEROBench_sub (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "ZEROBench_sub (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "VlmsAreBlind (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "VlmsAreBlind (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "RealWorldQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "RealWorldQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMStar (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMStar (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMBench EN-DEV-v1.1 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMBench EN-DEV-v1.1 (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "SimpleVQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "SimpleVQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "HallusionBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "HallusionBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMLongBench-Doc (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MMLongBench-Doc (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "AI2D_TEST (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "AI2D_TEST (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "CC-OCR (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "CC-OCR (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "OmniDocBench1.5 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "OmniDocBench1.5 (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "CharXiv(RQ) (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "CharXiv(RQ) (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "OCRBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "OCRBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "RefCOCO(avg) (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "RefCOCO(avg) (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "CountBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "CountBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "ODInW13 (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "ODInW13 (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "ERQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "ERQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "EmbSpatialBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "EmbSpatialBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "RefSpatialBench (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "RefSpatialBench (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "Hypersim (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "Hypersim (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "SUNRGBD (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "SUNRGBD (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "Nuscene (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "Nuscene (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "SLAKE (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "SLAKE (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "PMC-VQA (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "PMC-VQA (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MedXpertQA-MM (thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "MedXpertQA-MM (non-thinking)": "https://huggingface.co/Qwen/Qwen3.5-0.8B"
    },
    "benchmark_note": "공식 HF 모델 카드 표 기준(Qwen3.5-0.8B 열). 언어 표는 모드별 구분. 비전 표 'a/b' 값은 Thinking/Non-thinking 순. AA-LCR 4.7은 제3자 지표라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-022",
    "name": "GPT-5.3 Instant",
    "date": "2026-03-03",
    "sortDate": "2026-03-03",
    "month": "2026-03",
    "monthName": "March",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Production Benchmarks: violent illicit": 92.6,
      "Production Benchmarks: nonviolent illicit": 92.1,
      "Production Benchmarks: self-harm": 89.5,
      "Production Benchmarks: biology": 100.0,
      "Production Benchmarks: sexual content": 86.6,
      "Production Benchmarks: extremism": 98.1,
      "Production Benchmarks: hate": 86.8,
      "Production Benchmarks: graphic violence": 78.1,
      "Dynamic Mental Health: mental health": 98.5,
      "Dynamic Mental Health: emotional reliance": 99.2,
      "Dynamic Mental Health: self-harm": 91.1,
      "HealthBench": 54.1,
      "HealthBench Hard": 25.9,
      "HealthBench Consensus": 95.3
    },
    "official_id": "gpt-5-3-instant.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf"
      }
    ],
    "release_date_source": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
    "parameter_source": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
    "benchmark_sources": {
      "Production Benchmarks: violent illicit": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Production Benchmarks: nonviolent illicit": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Production Benchmarks: self-harm": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Production Benchmarks: biology": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Production Benchmarks: sexual content": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Production Benchmarks: extremism": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Production Benchmarks: hate": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Production Benchmarks: graphic violence": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Dynamic Mental Health: mental health": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Dynamic Mental Health: emotional reliance": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "Dynamic Mental Health: self-harm": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "HealthBench": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "HealthBench Hard": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf",
      "HealthBench Consensus": "https://deploymentsafety.openai.com/gpt-5-3-instant/gpt-5-3-instant.pdf"
    },
    "benchmark_note": "공식 시스템 카드(deploymentsafety)의 안전·건강 평가표 수치입니다. Production Benchmarks·Dynamic Mental Health는 not_unsafe(정책 준수 응답 비율, 0~1 → % 환산). 능력 벤치마크는 카드에 없습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-023",
    "name": "GPT-5.4",
    "date": "2026-03-05",
    "sortDate": "2026-03-05",
    "month": "2026-03",
    "monthName": "March",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "GDPval": 83.0,
      "FinanceAgent v1.1": 56.0,
      "Investment Banking Modeling Tasks (Internal)": 87.3,
      "OfficeQA": 68.1,
      "SWE-bench Pro": 57.7,
      "Terminal-Bench 2.0": 75.1,
      "OSWorld-Verified": 75.0,
      "WebArena-Verified": 67.3,
      "Online-Mind2Web": 92.8,
      "MMMU-Pro (no tools)": 81.2,
      "MMMU-Pro (w/ tools)": 82.1,
      "BrowseComp": 82.7,
      "MCP-Atlas": 67.2,
      "Toolathlon": 54.6,
      "Tau2-bench Telecom": 98.9,
      "Tau2-bench Telecom (no reasoning)": 64.3,
      "Frontier Science Research": 33.0,
      "FrontierMath Tier 1-3": 47.6,
      "FrontierMath Tier 4": 27.1,
      "GPQA Diamond": 92.8,
      "Humanity's Last Exam (without tools)": 39.8,
      "Humanity's Last Exam (w/ tools)": 52.1,
      "GraphWalks BFS 0-128K": 93.0,
      "GraphWalks BFS 256K-1M": 21.4,
      "GraphWalks Parents 0-128K": 89.8,
      "GraphWalks Parents 256K-1M": 32.4,
      "OpenAI MRCR v2 8-needle 4K-8K": 97.3,
      "OpenAI MRCR v2 8-needle 8K-16K": 91.4,
      "OpenAI MRCR v2 8-needle 16K-32K": 97.2,
      "OpenAI MRCR v2 8-needle 32K-64K": 90.5,
      "OpenAI MRCR v2 8-needle 64K-128K": 86.0,
      "OpenAI MRCR v2 8-needle 128K-256K": 79.3,
      "OpenAI MRCR v2 8-needle 256K-512K": 57.5,
      "OpenAI MRCR v2 8-needle 512K-1M": 36.6,
      "ARC-AGI-1 (Verified)": 93.7,
      "ARC-AGI-2 (Verified)": 73.3
    },
    "official_id": "introducing-gpt-5-4",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-4/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-4/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-4/",
    "benchmark_sources": {
      "GDPval": "https://openai.com/index/introducing-gpt-5-4/",
      "FinanceAgent v1.1": "https://openai.com/index/introducing-gpt-5-4/",
      "Investment Banking Modeling Tasks (Internal)": "https://openai.com/index/introducing-gpt-5-4/",
      "OfficeQA": "https://openai.com/index/introducing-gpt-5-4/",
      "SWE-bench Pro": "https://openai.com/index/introducing-gpt-5-4/",
      "Terminal-Bench 2.0": "https://openai.com/index/introducing-gpt-5-4/",
      "OSWorld-Verified": "https://openai.com/index/introducing-gpt-5-4/",
      "WebArena-Verified": "https://openai.com/index/introducing-gpt-5-4/",
      "Online-Mind2Web": "https://openai.com/index/introducing-gpt-5-4/",
      "MMMU-Pro (no tools)": "https://openai.com/index/introducing-gpt-5-4/",
      "MMMU-Pro (w/ tools)": "https://openai.com/index/introducing-gpt-5-4/",
      "BrowseComp": "https://openai.com/index/introducing-gpt-5-4/",
      "MCP-Atlas": "https://openai.com/index/introducing-gpt-5-4/",
      "Toolathlon": "https://openai.com/index/introducing-gpt-5-4/",
      "Tau2-bench Telecom": "https://openai.com/index/introducing-gpt-5-4/",
      "Tau2-bench Telecom (no reasoning)": "https://openai.com/index/introducing-gpt-5-4/",
      "Frontier Science Research": "https://openai.com/index/introducing-gpt-5-4/",
      "FrontierMath Tier 1-3": "https://openai.com/index/introducing-gpt-5-4/",
      "FrontierMath Tier 4": "https://openai.com/index/introducing-gpt-5-4/",
      "GPQA Diamond": "https://openai.com/index/introducing-gpt-5-4/",
      "Humanity's Last Exam (without tools)": "https://openai.com/index/introducing-gpt-5-4/",
      "Humanity's Last Exam (w/ tools)": "https://openai.com/index/introducing-gpt-5-4/",
      "GraphWalks BFS 0-128K": "https://openai.com/index/introducing-gpt-5-4/",
      "GraphWalks BFS 256K-1M": "https://openai.com/index/introducing-gpt-5-4/",
      "GraphWalks Parents 0-128K": "https://openai.com/index/introducing-gpt-5-4/",
      "GraphWalks Parents 256K-1M": "https://openai.com/index/introducing-gpt-5-4/",
      "OpenAI MRCR v2 8-needle 4K-8K": "https://openai.com/index/introducing-gpt-5-4/",
      "OpenAI MRCR v2 8-needle 8K-16K": "https://openai.com/index/introducing-gpt-5-4/",
      "OpenAI MRCR v2 8-needle 16K-32K": "https://openai.com/index/introducing-gpt-5-4/",
      "OpenAI MRCR v2 8-needle 32K-64K": "https://openai.com/index/introducing-gpt-5-4/",
      "OpenAI MRCR v2 8-needle 64K-128K": "https://openai.com/index/introducing-gpt-5-4/",
      "OpenAI MRCR v2 8-needle 128K-256K": "https://openai.com/index/introducing-gpt-5-4/",
      "OpenAI MRCR v2 8-needle 256K-512K": "https://openai.com/index/introducing-gpt-5-4/",
      "OpenAI MRCR v2 8-needle 512K-1M": "https://openai.com/index/introducing-gpt-5-4/",
      "ARC-AGI-1 (Verified)": "https://openai.com/index/introducing-gpt-5-4/",
      "ARC-AGI-2 (Verified)": "https://openai.com/index/introducing-gpt-5-4/"
    },
    "benchmark_note": "OpenAI 공식 발표문 Evaluations 표 전수 수록(기본 xhigh 리즈닝, 명시된 경우 별도 표기). OSWorld-Verified 75.0%는 인간 성능 72.4% 상회(각주). BrowseComp는 벤치마크 답변 사이트 블록리스트 적용. 비% 지표는 제외·메모 기록: OmniDocBench 정규화 편집거리 0.109(no reasoning, 낮을수록 우수), 발표 본문의 '프레젠테이션 선호도 68.0%'·'스프레드시트 87.3%'는 Investment Banking Modeling Tasks와 동일 항목.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-024",
    "name": "GPT-5.4 Pro",
    "date": "2026-03-05",
    "sortDate": "2026-03-05",
    "month": "2026-03",
    "monthName": "March",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "GDPval": 82.0,
      "FinanceAgent v1.1": 61.5,
      "Investment Banking Modeling Tasks (Internal)": 83.6,
      "BrowseComp": 89.3,
      "Frontier Science Research": 36.7,
      "FrontierMath Tier 1-3": 50.0,
      "FrontierMath Tier 4": 38.0,
      "GPQA Diamond": 94.4,
      "Humanity's Last Exam (without tools)": 42.7,
      "Humanity's Last Exam (w/ tools)": 58.7,
      "ARC-AGI-1 (Verified)": 94.5,
      "ARC-AGI-2 (Verified)": 83.3
    },
    "official_id": "introducing-gpt-5-4",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-4/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-4/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-4/",
    "benchmark_sources": {
      "GDPval": "https://openai.com/index/introducing-gpt-5-4/",
      "FinanceAgent v1.1": "https://openai.com/index/introducing-gpt-5-4/",
      "Investment Banking Modeling Tasks (Internal)": "https://openai.com/index/introducing-gpt-5-4/",
      "BrowseComp": "https://openai.com/index/introducing-gpt-5-4/",
      "Frontier Science Research": "https://openai.com/index/introducing-gpt-5-4/",
      "FrontierMath Tier 1-3": "https://openai.com/index/introducing-gpt-5-4/",
      "FrontierMath Tier 4": "https://openai.com/index/introducing-gpt-5-4/",
      "GPQA Diamond": "https://openai.com/index/introducing-gpt-5-4/",
      "Humanity's Last Exam (without tools)": "https://openai.com/index/introducing-gpt-5-4/",
      "Humanity's Last Exam (w/ tools)": "https://openai.com/index/introducing-gpt-5-4/",
      "ARC-AGI-1 (Verified)": "https://openai.com/index/introducing-gpt-5-4/",
      "ARC-AGI-2 (Verified)": "https://openai.com/index/introducing-gpt-5-4/"
    },
    "benchmark_note": "OpenAI 공식 발표문 Evaluations 표의 GPT-5.4 Pro 컬럼(xhigh 리즈닝). BrowseComp 89.3%는 당시 SOTA로 명시. 나머지 행(코딩·컴퓨터 사용·롱컨텍스트 등)은 Pro 컬럼이 '—'로 미게시.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-025",
    "name": "Sarvam-30B",
    "date": "2026-03-06",
    "sortDate": "2026-03-06",
    "month": "2026-03",
    "monthName": "March",
    "company": "Sarvam AI",
    "family": "Sarvam",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "30B total / 2.4B active (non-embedding)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official card distinguishes non-embedding active parameters.",
    "benchmarks": {
      "MATH-500": 97.0,
      "HumanEval": 92.1,
      "MBPP": 92.7,
      "LiveCodeBench": 70.0,
      "MMLU": 85.1,
      "MMLU-Pro": 80.0,
      "GPQA Diamond": 66.5,
      "SWE-bench Verified": 34.0,
      "BrowseComp": 35.5
    },
    "official_id": "sarvamai/sarvam-30b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/sarvamai/sarvam-30b"
      }
    ],
    "release_date_source": "https://huggingface.co/sarvamai/sarvam-30b",
    "parameter_source": "https://huggingface.co/sarvamai/sarvam-30b",
    "benchmark_sources": {
      "MATH-500": "https://huggingface.co/sarvamai/sarvam-30b",
      "HumanEval": "https://huggingface.co/sarvamai/sarvam-30b",
      "MBPP": "https://huggingface.co/sarvamai/sarvam-30b",
      "LiveCodeBench": "https://huggingface.co/sarvamai/sarvam-30b",
      "MMLU": "https://huggingface.co/sarvamai/sarvam-30b",
      "MMLU-Pro": "https://huggingface.co/sarvamai/sarvam-30b",
      "GPQA Diamond": "https://huggingface.co/sarvamai/sarvam-30b",
      "SWE-bench Verified": "https://huggingface.co/sarvamai/sarvam-30b",
      "BrowseComp": "https://huggingface.co/sarvamai/sarvam-30b"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-026",
    "name": "Sarvam-105B",
    "date": "2026-03-06",
    "sortDate": "2026-03-06",
    "month": "2026-03",
    "monthName": "March",
    "company": "Sarvam AI",
    "family": "Sarvam",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "105B total / 10.3B active",
    "architecture": "Indic Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MATH-500": 98.6,
      "LiveCodeBench": 71.7,
      "MMLU": 90.6,
      "MMLU-Pro": 81.7,
      "IFEval": 84.8,
      "GPQA Diamond": 78.7,
      "SWE-bench Verified": 45.0,
      "BrowseComp": 49.5
    },
    "official_id": "sarvamai/sarvam-105b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/sarvamai/sarvam-105b"
      }
    ],
    "release_date_source": "https://huggingface.co/sarvamai/sarvam-105b",
    "parameter_source": "https://huggingface.co/sarvamai/sarvam-105b",
    "benchmark_sources": {
      "MATH-500": "https://huggingface.co/sarvamai/sarvam-105b",
      "LiveCodeBench": "https://huggingface.co/sarvamai/sarvam-105b",
      "MMLU": "https://huggingface.co/sarvamai/sarvam-105b",
      "MMLU-Pro": "https://huggingface.co/sarvamai/sarvam-105b",
      "IFEval": "https://huggingface.co/sarvamai/sarvam-105b",
      "GPQA Diamond": "https://huggingface.co/sarvamai/sarvam-105b",
      "SWE-bench Verified": "https://huggingface.co/sarvamai/sarvam-105b",
      "BrowseComp": "https://huggingface.co/sarvamai/sarvam-105b"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-027",
    "name": "Nemotron 3 Super",
    "date": "2026-03-10",
    "sortDate": "2026-03-10",
    "month": "2026-03",
    "monthName": "March",
    "company": "NVIDIA",
    "family": "Nemotron 3",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "120B total / 12B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model title is Nemotron-3-Super-120B-A12B.",
    "benchmarks": {
      "MMLU-Pro": 83.73,
      "GPQA Diamond": 79.23,
      "LiveCodeBench": 81.19,
      "Terminal-Bench Core 2.0": 31.0
    },
    "official_id": "nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16"
      }
    ],
    "release_date_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
    "parameter_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
      "GPQA Diamond": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
      "LiveCodeBench": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16",
      "Terminal-Bench Core 2.0": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16"
    },
    "benchmark_note": "수치는 모델 제공자가 공식 모델 카드·기술 보고서·공식 발표문에 직접 명시한 자기 보고 값만 수록했습니다. 원문 설정이 다른 수치는 직접적인 순위 비교에 사용하지 마세요.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-028",
    "name": "LongCat-Flash-Omni",
    "date": "2026-03-11",
    "sortDate": "2026-03-11",
    "month": "2026-03",
    "monthName": "March",
    "company": "Meituan",
    "family": "LongCat",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "560B total / 27B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "LongCat-Flash-Omni official card; do not confuse with an unofficial “2603” suffix.",
    "benchmarks": {
      "OmniBench": 61.38,
      "WorldSense": 60.89,
      "DailyOmni": 82.38,
      "UNO-Bench": 49.9,
      "MMBench-ENtest": 87.5,
      "MMBench-ZHtest": 88.7,
      "RealWorldQA": 74.8,
      "MMStar": 70.9,
      "MathVistamini": 77.9,
      "MMMUval": 70.7,
      "MMVet": 69.0,
      "BLINK": 63.1,
      "MuirBench": 77.1,
      "Mantis": 84.8,
      "ChartQA": 87.6,
      "DocVQA": 91.8,
      "OCRBench": 84.9,
      "RefCOCO-avg": 92.3,
      "CountBench": 92.4,
      "VisualWebBench": 78.7,
      "ScreenSpot-v2": 91.2,
      "AndroidControllow": 91.2,
      "AndroidControlhigh": 75.6,
      "MVBench": 75.2,
      "NextQA": 86.2,
      "TempCompass": 82.2,
      "VideoMME (w/o audio)": 76.2,
      "VideoMME (w/ audio)": 78.2,
      "LongVideoBench": 69.3,
      "MMVU": 67.1,
      "Video-MMMU": 67.5,
      "MMAU": 75.9,
      "VocalSound": 92.76,
      "TUT2017": 65.43,
      "ClothoAQA": 72.83,
      "Nonspeech7k": 93.79,
      "CochlScene": 70.02,
      "MELD": 54.6,
      "LibriSpeech test-clean (WER, lower=better)": 1.57,
      "LibriSpeech test-other (WER, lower=better)": 4.01,
      "AISHELL-1 (WER, lower=better)": 0.63,
      "AISHELL-2 (WER, lower=better)": 2.78,
      "Fleurs zh (WER, lower=better)": 3.99,
      "Fleurs en (WER, lower=better)": 5.02,
      "CommonVoice 15 zh (WER, lower=better)": 4.98,
      "CommonVoice 15 en (WER, lower=better)": 13.59,
      "WenetSpeech test-meeting (WER, lower=better)": 6.69,
      "WenetSpeech test-net (WER, lower=better)": 6.09,
      "CoVost2 en→zh (BLEU)": 47.23,
      "CoVost2 zh→en (BLEU)": 27.32,
      "OpenAudioBench LlamaQuestions": 83.33,
      "OpenAudioBench ReasoningQA": 79.71,
      "OpenAudioBench TriviaQA": 86.2,
      "OpenAudioBench Webquestions": 76.0,
      "VoiceBench OpenBookQA": 93.41,
      "VoiceBench SDQA": 82.46,
      "VoiceBench MMSU": 81.95,
      "VoiceBench AdvBench": 100.0,
      "VoiceBench IFEval": 77.99,
      "MMLU(acc)": 90.3,
      "MMLU-Pro(acc)": 82.73,
      "CEval(acc)": 91.68,
      "CMMLU(acc)": 89.39,
      "IFEval(acc)": 82.44,
      "COLLIE(acc)": 45.69,
      "Meeseeks-zh(acc)": 39.05,
      "MATH500(acc)": 97.6,
      "AIME24(avg@10)": 72.92,
      "BeyondAIME(avg@10)": 47.4,
      "GPQA-diamond(acc)": 74.41,
      "DROP(f1)": 83.53,
      "ZebraLogic(acc)": 86.0,
      "GraphWalks-128k(precision)": 56.0,
      "LiveCodeBench(pass@1)": 52.64,
      "Humaneval+(pass@1)": 90.85,
      "MBPP+(pass@1)": 80.16,
      "OmniDocBench EN (edit distance, lower=better)": 22.8,
      "OmniDocBench ZH (edit distance, lower=better)": 29.0
    },
    "official_id": "meituan-longcat/LongCat-Flash-Omni",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni"
      }
    ],
    "release_date_source": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
    "parameter_source": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
    "benchmark_sources": {
      "OmniBench": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "WorldSense": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "DailyOmni": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "UNO-Bench": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MMBench-ENtest": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MMBench-ZHtest": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "RealWorldQA": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MMStar": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MathVistamini": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MMMUval": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MMVet": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "BLINK": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MuirBench": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "Mantis": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "ChartQA": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "DocVQA": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "OCRBench": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "RefCOCO-avg": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "CountBench": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "VisualWebBench": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "ScreenSpot-v2": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "AndroidControllow": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "AndroidControlhigh": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MVBench": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "NextQA": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "TempCompass": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "VideoMME (w/o audio)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "VideoMME (w/ audio)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "LongVideoBench": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MMVU": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "Video-MMMU": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MMAU": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "VocalSound": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "TUT2017": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "ClothoAQA": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "Nonspeech7k": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "CochlScene": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MELD": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "LibriSpeech test-clean (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "LibriSpeech test-other (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "AISHELL-1 (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "AISHELL-2 (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "Fleurs zh (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "Fleurs en (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "CommonVoice 15 zh (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "CommonVoice 15 en (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "WenetSpeech test-meeting (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "WenetSpeech test-net (WER, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "CoVost2 en→zh (BLEU)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "CoVost2 zh→en (BLEU)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "OpenAudioBench LlamaQuestions": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "OpenAudioBench ReasoningQA": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "OpenAudioBench TriviaQA": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "OpenAudioBench Webquestions": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "VoiceBench OpenBookQA": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "VoiceBench SDQA": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "VoiceBench MMSU": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "VoiceBench AdvBench": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "VoiceBench IFEval": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MMLU(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MMLU-Pro(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "CEval(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "CMMLU(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "IFEval(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "COLLIE(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "Meeseeks-zh(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MATH500(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "AIME24(avg@10)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "BeyondAIME(avg@10)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "GPQA-diamond(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "DROP(f1)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "ZebraLogic(acc)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "GraphWalks-128k(precision)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "LiveCodeBench(pass@1)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "Humaneval+(pass@1)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "MBPP+(pass@1)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "OmniDocBench EN (edit distance, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni",
      "OmniDocBench ZH (edit distance, lower=better)": "https://huggingface.co/meituan-longcat/LongCat-Flash-Omni"
    },
    "benchmark_note": "공식 HF 모델 카드 표의 LongCat-Flash-Omni Instruct 열 값. ASR(WER)과 OmniDocBench(편집거리)는 낮을수록 좋은 지표 — 이름에 명기. VoiceBench AlpacaEval/CommonEval(0-5점 척도)은 % 아니라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-030",
    "name": "GLM-5-Turbo",
    "date": "2026-03-15",
    "sortDate": "2026-03-15",
    "month": "2026-03",
    "monthName": "March",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "CC-Backend": 20.5,
      "CC-Frontend": 69.4,
      "CC-Repo-Exploration": 68.9,
      "PinchBench (Best)": 86.5,
      "PinchBench (Avg)": 81.1,
      "ClawEval (Pass^3)": 51.0,
      "ClawEval (Pass@3)": 72.1,
      "ZClawBench": 60.6
    },
    "official_id": "glm-5-turbo",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://docs.z.ai/guides/llm/glm-5-turbo"
      },
      {
        "label": "벤치마크 출처",
        "url": "https://docs.z.ai/guides/vlm/glm-5v-turbo"
      }
    ],
    "release_date_source": "https://docs.z.ai/guides/llm/glm-5-turbo",
    "parameter_source": "https://docs.z.ai/guides/llm/glm-5-turbo",
    "benchmark_sources": {
      "CC-Backend": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "CC-Frontend": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "CC-Repo-Exploration": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "PinchBench (Best)": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "PinchBench (Avg)": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "ClawEval (Pass^3)": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "ClawEval (Pass@3)": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "ZClawBench": "https://docs.z.ai/guides/vlm/glm-5v-turbo"
    },
    "benchmark_note": "docs.z.ai의 GLM-5V-Turbo 페이지 내 코딩·에이전트 비교 표의 GLM-5-Turbo 열 수치입니다. 자체 페이지의 ZClawBench 레이더 차트는 수치 미표기. OpenClaw 계열 내부 평가(CC-Backend/Frontend/Repo-Exploration, PinchBench, ClawEval, ZClawBench) — 제공사 공식 문서에 게재된 값만 수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-031",
    "name": "Mistral Small 4 119B A6B",
    "date": "2026-03-16",
    "sortDate": "2026-03-16",
    "month": "2026-03",
    "monthName": "March",
    "company": "Mistral AI",
    "family": "Mistral Small",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "119B total / 6.5B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [
      "general chat",
      "configurable reasoning",
      "coding",
      "agents",
      "text + image input"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model title includes 119B A6B; 6.5B is the activated count.",
    "benchmarks": {
      "GPQA Diamond (instruct)": 59.1,
      "GPQA Diamond (reasoning)": 71.2,
      "MMLU Pro (instruct)": 73.5,
      "MMLU Pro (reasoning)": 78.0,
      "IFBench (instruct)": 35.7,
      "IFBench (reasoning)": 48.0,
      "Arena Hard (instruct)": 55.8,
      "Arena Hard (reasoning)": 58.3,
      "MMMU-Pro (instruct)": 46.3,
      "MMMU-Pro (reasoning)": 60.0,
      "AIME25 (reasoning)": 83.8,
      "Collie (reasoning)": 62.9,
      "LiveCodeBench (reasoning)": 63.6
    },
    "official_id": "mistralai/Mistral-Small-4-119B-2603",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603"
      }
    ],
    "release_date_source": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
    "parameter_source": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
    "benchmark_sources": {
      "GPQA Diamond (instruct)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "GPQA Diamond (reasoning)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "MMLU Pro (instruct)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "MMLU Pro (reasoning)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "IFBench (instruct)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "IFBench (reasoning)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "Arena Hard (instruct)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "Arena Hard (reasoning)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "MMMU-Pro (instruct)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "MMMU-Pro (reasoning)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "AIME25 (reasoning)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "Collie (reasoning)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603",
      "LiveCodeBench (reasoning)": "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603"
    },
    "benchmark_note": "공식 HF 모델 카드의 internal benchmark 이미지 값(Instruct/Reasoning 모드 구분). 카드의 비교 차트(LCR·LiveCodeBench·AIME25)는 Reasoning 모드 값만 수록. AA LCR 71.2는 제3자 지표라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-032",
    "name": "GPT-5.4 Mini",
    "date": "2026-03-18",
    "sortDate": "2026-03-18",
    "month": "2026-03",
    "monthName": "March",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-Bench Pro (Public)": 54.4,
      "Terminal-Bench 2.0": 60.0,
      "Toolathlon": 42.9,
      "GPQA Diamond": 88.0,
      "OSWorld-Verified": 72.1,
      "MCP Atlas": 57.7,
      "τ2-bench (telecom)": 93.4,
      "HLE w/ tool": 41.5,
      "HLE w/o tools": 28.2,
      "MMMU Pro w/ Python": 78.0,
      "MMMU Pro": 76.6,
      "OpenAI MRCR v2 8-needle 64K–128K": 47.7,
      "OpenAI MRCR v2 8-needle 128K–256K": 33.6,
      "Graphwalks BFS 0K–128K": 76.3,
      "Graphwalks Parents 0–128K": 71.5,
      "Troubleshooting Virology (pass@1)": 46.5,
      "ProtocolQA Open-Ended (pass@1)": 33.64,
      "Tacit Knowledge and Troubleshooting (cons@32)": 71.67,
      "TroubleshootingBench (pass@1)": 31.91,
      "CTF (pass@12)": 81.32,
      "CVE-Bench (pass@1)": 83.33,
      "Monorepo-Bench (pass@1)": 54.0,
      "OPQA v0 (pass@1)": 7.5
    },
    "official_id": "gpt-5.4-mini",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://developers.openai.com/api/docs/models/gpt-5.4-mini"
      },
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/"
      },
      {
        "label": "GPT-5.4 System Card",
        "url": "https://deploymentsafety.openai.com/gpt-5-4-thinking/"
      }
    ],
    "release_date_source": "https://developers.openai.com/api/docs/models/gpt-5.4-mini",
    "parameter_source": "https://developers.openai.com/api/docs/models/gpt-5.4-mini",
    "benchmark_sources": {
      "SWE-Bench Pro (Public)": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "Terminal-Bench 2.0": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "Toolathlon": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "GPQA Diamond": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "OSWorld-Verified": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "MCP Atlas": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "τ2-bench (telecom)": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "HLE w/ tool": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "HLE w/o tools": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "MMMU Pro w/ Python": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "MMMU Pro": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "OpenAI MRCR v2 8-needle 64K–128K": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "OpenAI MRCR v2 8-needle 128K–256K": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "Graphwalks BFS 0K–128K": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "Graphwalks Parents 0–128K": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "Troubleshooting Virology (pass@1)": "https://deploymentsafety.openai.com/gpt-5-4-thinking/",
      "ProtocolQA Open-Ended (pass@1)": "https://deploymentsafety.openai.com/gpt-5-4-thinking/",
      "Tacit Knowledge and Troubleshooting (cons@32)": "https://deploymentsafety.openai.com/gpt-5-4-thinking/",
      "TroubleshootingBench (pass@1)": "https://deploymentsafety.openai.com/gpt-5-4-thinking/",
      "CTF (pass@12)": "https://deploymentsafety.openai.com/gpt-5-4-thinking/",
      "CVE-Bench (pass@1)": "https://deploymentsafety.openai.com/gpt-5-4-thinking/",
      "Monorepo-Bench (pass@1)": "https://deploymentsafety.openai.com/gpt-5-4-thinking/",
      "OPQA v0 (pass@1)": "https://deploymentsafety.openai.com/gpt-5-4-thinking/"
    },
    "benchmark_note": "OpenAI 공식 발표문의 gpt-5.4-mini(xhigh) 열 + GPT-5.4 Thinking 시스템 카드 부록의 mini 열. 발표문의 OmniDocBench 1.5 정규화 편집거리 0.1263(↓, 비% 지표)은 제외·메모 기록. 카드 괄호 값(예: 47.0%*)은 위임 설정 등 대안 조건이라 본문 값만 수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-165",
    "name": "GPT-5.4 nano",
    "date": "2026-03-17",
    "sortDate": "2026-03-17",
    "month": "2026-03",
    "monthName": "March",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-Bench Pro (Public)": 52.4,
      "Terminal-Bench 2.0": 46.3,
      "Toolathlon": 35.5,
      "GPQA Diamond": 82.8,
      "OSWorld-Verified": 39.0,
      "MCP Atlas": 56.1,
      "τ2-bench (telecom)": 92.5,
      "HLE w/ tool": 37.7,
      "HLE w/o tools": 24.3,
      "MMMU Pro w/ Python": 69.5,
      "MMMU Pro": 66.1,
      "OpenAI MRCR v2 8-needle 64K–128K": 44.2,
      "OpenAI MRCR v2 8-needle 128K–256K": 33.1,
      "Graphwalks BFS 0K–128K": 73.4,
      "Graphwalks Parents 0–128K": 50.8
    },
    "official_id": "gpt-5.4-nano",
    "official_sources": [
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/"
      },
      {
        "label": "OpenAI API 모델 문서",
        "url": "https://developers.openai.com/api/docs/models/gpt-5.4-nano"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
    "benchmark_sources": {
      "SWE-Bench Pro (Public)": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "Terminal-Bench 2.0": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "Toolathlon": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "GPQA Diamond": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "OSWorld-Verified": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "MCP Atlas": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "τ2-bench (telecom)": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "HLE w/ tool": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "HLE w/o tools": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "MMMU Pro w/ Python": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "MMMU Pro": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "OpenAI MRCR v2 8-needle 64K–128K": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "OpenAI MRCR v2 8-needle 128K–256K": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "Graphwalks BFS 0K–128K": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/",
      "Graphwalks Parents 0–128K": "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/"
    },
    "benchmark_note": "OpenAI 공식 발표문의 gpt-5.4-nano(xhigh) 열 수치입니다. OmniDocBench 1.5 편집거리 0.2419(↓)는 비% 지표라 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-033",
    "name": "MiniMax-M2.7",
    "date": "2026-03-18",
    "sortDate": "2026-03-18",
    "month": "2026-03",
    "monthName": "March",
    "company": "MiniMax",
    "family": "MiniMax M",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-Bench Pro": 56.2,
      "Multi-SWE Bench": 52.7,
      "VIBE-Pro": 55.6,
      "MLE-Bench Lite": 66.6,
      "Toolathlon": 46.3,
      "MM-ClawBench": 62.7
    },
    "official_id": "MiniMaxAI/MiniMax-M2.7",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7"
      }
    ],
    "release_date_source": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7",
    "parameter_source": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7",
    "benchmark_sources": {
      "SWE-Bench Pro": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7",
      "Multi-SWE Bench": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7",
      "VIBE-Pro": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7",
      "MLE-Bench Lite": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7",
      "Toolathlon": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7",
      "MM-ClawBench": "https://huggingface.co/MiniMaxAI/MiniMax-M2.7"
    },
    "benchmark_note": "공식 HF 모델 카드의 benchmark_overview 차트 이미지 값. 카드의 GDPval-AA(50)·'Artificial Analysis'(50) 지표는 제3자 지표라 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-036",
    "name": "Qwen3.5-Omni-Flash",
    "date": "2026-03-30",
    "sortDate": "2026-03-30",
    "month": "2026-03",
    "monthName": "March",
    "company": "Alibaba",
    "family": "Qwen3.5",
    "type": "MLLM / omni",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 기술 보고서: 수백B급)",
    "architecture": "Multimodal Omni MoE",
    "modalities": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "QwenCloud and the technical report identify the product, but do not disclose an exact count.",
    "benchmarks": {
      "MMLU-Pro": 79.9,
      "MMLU-Redux": 90.0,
      "SuperGPQA": 54.9,
      "C-Eval": 86.0,
      "IFEval": 85.2,
      "IFBench": 38.4,
      "LongBench v2": 46.4,
      "GPQA": 76.4,
      "LiveCodeBench v6": 56.6,
      "HMMT Nov 25": 59.0,
      "IMOAnswerBench": 51.5,
      "BFCL-V4": 55.3,
      "TAU2Bench": 78.0,
      "MMAU": 80.4,
      "MMAR": 74.0,
      "MMSU": 72.2,
      "RUL-MuchoMusic": 60.5,
      "SongFormBench-HarmonixSet (acc)": 80.6,
      "SongFormBench-CN (acc)": 86.7,
      "VoiceBench": 87.8,
      "URO-Bench-pro (U)": 64.1,
      "URO-Bench-pro (R)": 83.8,
      "URO-Bench-pro (O)": 98.7,
      "WildSpeech-Bench": 72.2,
      "Fleurs S2TT xx↔zh (BLEU)": 26.9,
      "Fleurs S2TT xx↔en (BLEU)": 32.0,
      "Fleurs S2TT xx↔zh/en (BLEU)": 29.4,
      "Fleurs ASR top60 (WER↓)": 10.75,
      "CV15 zh (WER↓)": 4.25,
      "CV15 yue (WER↓)": 3.45,
      "CV15 zh-tw (WER↓)": 2.68,
      "CV15 en (WER↓)": 5.9,
      "Librispeech clean (WER↓)": 1.3,
      "Librispeech other (WER↓)": 2.43,
      "Weneetspeech net (WER↓)": 4.41,
      "Weneetspeech meeting (WER↓)": 5.51,
      "Kespeech (WER↓)": 4.47,
      "MIR-1K vocal-only (WER↓)": 4.94,
      "Opencpop (WER↓)": 1.11
    },
    "official_id": "qwen3.5-omni-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.5-omni-flash"
      },
      {
        "label": "공식 기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2604.15804"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.5-omni-flash",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.5-omni-flash",
    "benchmark_sources": {
      "MMLU-Pro": "https://arxiv.org/abs/2604.15804",
      "MMLU-Redux": "https://arxiv.org/abs/2604.15804",
      "SuperGPQA": "https://arxiv.org/abs/2604.15804",
      "C-Eval": "https://arxiv.org/abs/2604.15804",
      "IFEval": "https://arxiv.org/abs/2604.15804",
      "IFBench": "https://arxiv.org/abs/2604.15804",
      "LongBench v2": "https://arxiv.org/abs/2604.15804",
      "GPQA": "https://arxiv.org/abs/2604.15804",
      "LiveCodeBench v6": "https://arxiv.org/abs/2604.15804",
      "HMMT Nov 25": "https://arxiv.org/abs/2604.15804",
      "IMOAnswerBench": "https://arxiv.org/abs/2604.15804",
      "BFCL-V4": "https://arxiv.org/abs/2604.15804",
      "TAU2Bench": "https://arxiv.org/abs/2604.15804",
      "MMAU": "https://arxiv.org/abs/2604.15804",
      "MMAR": "https://arxiv.org/abs/2604.15804",
      "MMSU": "https://arxiv.org/abs/2604.15804",
      "RUL-MuchoMusic": "https://arxiv.org/abs/2604.15804",
      "SongFormBench-HarmonixSet (acc)": "https://arxiv.org/abs/2604.15804",
      "SongFormBench-CN (acc)": "https://arxiv.org/abs/2604.15804",
      "VoiceBench": "https://arxiv.org/abs/2604.15804",
      "URO-Bench-pro (U)": "https://arxiv.org/abs/2604.15804",
      "URO-Bench-pro (R)": "https://arxiv.org/abs/2604.15804",
      "URO-Bench-pro (O)": "https://arxiv.org/abs/2604.15804",
      "WildSpeech-Bench": "https://arxiv.org/abs/2604.15804",
      "Fleurs S2TT xx↔zh (BLEU)": "https://arxiv.org/abs/2604.15804",
      "Fleurs S2TT xx↔en (BLEU)": "https://arxiv.org/abs/2604.15804",
      "Fleurs S2TT xx↔zh/en (BLEU)": "https://arxiv.org/abs/2604.15804",
      "Fleurs ASR top60 (WER↓)": "https://arxiv.org/abs/2604.15804",
      "CV15 zh (WER↓)": "https://arxiv.org/abs/2604.15804",
      "CV15 yue (WER↓)": "https://arxiv.org/abs/2604.15804",
      "CV15 zh-tw (WER↓)": "https://arxiv.org/abs/2604.15804",
      "CV15 en (WER↓)": "https://arxiv.org/abs/2604.15804",
      "Librispeech clean (WER↓)": "https://arxiv.org/abs/2604.15804",
      "Librispeech other (WER↓)": "https://arxiv.org/abs/2604.15804",
      "Weneetspeech net (WER↓)": "https://arxiv.org/abs/2604.15804",
      "Weneetspeech meeting (WER↓)": "https://arxiv.org/abs/2604.15804",
      "Kespeech (WER↓)": "https://arxiv.org/abs/2604.15804",
      "MIR-1K vocal-only (WER↓)": "https://arxiv.org/abs/2604.15804",
      "Opencpop (WER↓)": "https://arxiv.org/abs/2604.15804"
    },
    "benchmark_note": "Qwen3.5-Omni 공식 기술 보고서(arXiv:2604.15804)의 Qwen3.5-Omni-Flash 열 수치입니다. AA-LCR(46.0)은 제3자 지표라 제외, SpeechRole(119.8)은 100 초과 척도라 제외, SongFormBench hr.5f/hr3f·URO-Bench 하위지표는 acc/U·R·O 열만 수록. WER·BLEU는 비% 지표지만 % 환산 가능한 0~100 범위라 방향(↓)을 명기해 수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-037",
    "name": "GLM-5V-Turbo",
    "date": "2026-04-01",
    "sortDate": "2026-04-01",
    "month": "2026-04",
    "monthName": "April",
    "company": "Z.ai",
    "family": "GLM",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Vision-Language MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Design2Code": 94.8,
      "Flame-VLM-Code": 93.8,
      "Vision2Web": 31.0,
      "ImageMining": 30.7,
      "BrowseComp-VL": 51.9,
      "MMSearch": 72.9,
      "MMSearch-Plus": 30.0,
      "SimpleVQA": 78.2,
      "FACTS": 58.6,
      "V*": 89.0,
      "OSWorld": 62.3,
      "AndroidWorld": 75.7,
      "WebVoyager": 88.5,
      "CC-Backend": 22.8,
      "CC-Frontend": 68.4,
      "CC-Repo-Exploration": 72.2,
      "PinchBench (Best)": 87.0,
      "PinchBench (Avg)": 80.7,
      "ClawEval (Pass^3)": 57.7,
      "ClawEval (Pass@3)": 75.0,
      "ZClawBench": 57.6
    },
    "official_id": "glm-5v-turbo",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://docs.z.ai/guides/vlm/glm-5v-turbo"
      }
    ],
    "release_date_source": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
    "parameter_source": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
    "benchmark_sources": {
      "Design2Code": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "Flame-VLM-Code": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "Vision2Web": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "ImageMining": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "BrowseComp-VL": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "MMSearch": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "MMSearch-Plus": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "SimpleVQA": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "FACTS": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "V*": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "OSWorld": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "AndroidWorld": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "WebVoyager": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "CC-Backend": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "CC-Frontend": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "CC-Repo-Exploration": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "PinchBench (Best)": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "PinchBench (Avg)": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "ClawEval (Pass^3)": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "ClawEval (Pass@3)": "https://docs.z.ai/guides/vlm/glm-5v-turbo",
      "ZClawBench": "https://docs.z.ai/guides/vlm/glm-5v-turbo"
    },
    "benchmark_note": "docs.z.ai 공식 문서의 GLM-5V-Turbo 표 전체 수치입니다(비전 코딩·검색·에이전트·OpenClaw 계열). 수치 없는 레이더 차트(VBVR-Bench 등)는 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-038",
    "name": "Qwen3.6-Plus",
    "date": "2026-04-02",
    "sortDate": "2026-04-02",
    "month": "2026-04",
    "monthName": "April",
    "company": "Alibaba",
    "family": "Qwen3.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal Bench 2.0-Terminus": 61.6,
      "SWE-Verified": 78.8,
      "SWE-Pro": 56.6,
      "SWE-Multilingual": 73.8,
      "NL2Repo": 34.4,
      "SciCode": 41.4,
      "Qwenclaw": 57.2,
      "CoWorkBench": 64.5,
      "ClawEval": 57.1,
      "Skillsbench": 45.7,
      "BFCL-V4": 68.9,
      "MCP-Mark": 48.2,
      "MCP-Atlas": 74.1,
      "Vitabench": 42.8,
      "SpreadSheetBench-v1": 80.2,
      "Kernel Bench L3 (win rate)": 48.0,
      "HLE w/ tools": 50.2,
      "QwenWorldBench": 47.6,
      "GPQA Diamond": 90.4,
      "HLE": 28.8,
      "LiveCodeBench": 87.1,
      "HMMT 2026 Feb": 87.8,
      "IMOAnswerBench": 83.8,
      "CritPT": 2.9,
      "MathArena Apex": 8.8,
      "MMLU-Pro": 88.5,
      "MMLU-Redux": 94.5,
      "SuperGPQA": 71.6,
      "IFEval": 94.3,
      "IFBench": 74.2,
      "MRCR-v2 128k": 85.9,
      "WMT24++": 84.3,
      "MAXIFE": 88.2,
      "MMMLU": 89.5,
      "MMLU-ProX": 84.7,
      "NOVA-63": 57.9,
      "INCLUDE": 86.2,
      "Global PIQA": 89.8,
      "PolyMATH": 77.4
    },
    "official_id": "qwen3.6-plus",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.6-plus"
      },
      {
        "label": "Qwen 공식 블로그(Qwen3.7 발표)",
        "url": "https://qwen.ai/blog?id=qwen3.7"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.6-plus",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.6-plus",
    "benchmark_sources": {
      "Terminal Bench 2.0-Terminus": "https://qwen.ai/blog?id=qwen3.7",
      "SWE-Verified": "https://qwen.ai/blog?id=qwen3.7",
      "SWE-Pro": "https://qwen.ai/blog?id=qwen3.7",
      "SWE-Multilingual": "https://qwen.ai/blog?id=qwen3.7",
      "NL2Repo": "https://qwen.ai/blog?id=qwen3.7",
      "SciCode": "https://qwen.ai/blog?id=qwen3.7",
      "Qwenclaw": "https://qwen.ai/blog?id=qwen3.7",
      "CoWorkBench": "https://qwen.ai/blog?id=qwen3.7",
      "ClawEval": "https://qwen.ai/blog?id=qwen3.7",
      "Skillsbench": "https://qwen.ai/blog?id=qwen3.7",
      "BFCL-V4": "https://qwen.ai/blog?id=qwen3.7",
      "MCP-Mark": "https://qwen.ai/blog?id=qwen3.7",
      "MCP-Atlas": "https://qwen.ai/blog?id=qwen3.7",
      "Vitabench": "https://qwen.ai/blog?id=qwen3.7",
      "SpreadSheetBench-v1": "https://qwen.ai/blog?id=qwen3.7",
      "Kernel Bench L3 (win rate)": "https://qwen.ai/blog?id=qwen3.7",
      "HLE w/ tools": "https://qwen.ai/blog?id=qwen3.7",
      "QwenWorldBench": "https://qwen.ai/blog?id=qwen3.7",
      "GPQA Diamond": "https://qwen.ai/blog?id=qwen3.7",
      "HLE": "https://qwen.ai/blog?id=qwen3.7",
      "LiveCodeBench": "https://qwen.ai/blog?id=qwen3.7",
      "HMMT 2026 Feb": "https://qwen.ai/blog?id=qwen3.7",
      "IMOAnswerBench": "https://qwen.ai/blog?id=qwen3.7",
      "CritPT": "https://qwen.ai/blog?id=qwen3.7",
      "MathArena Apex": "https://qwen.ai/blog?id=qwen3.7",
      "MMLU-Pro": "https://qwen.ai/blog?id=qwen3.7",
      "MMLU-Redux": "https://qwen.ai/blog?id=qwen3.7",
      "SuperGPQA": "https://qwen.ai/blog?id=qwen3.7",
      "IFEval": "https://qwen.ai/blog?id=qwen3.7",
      "IFBench": "https://qwen.ai/blog?id=qwen3.7",
      "MRCR-v2 128k": "https://qwen.ai/blog?id=qwen3.7",
      "WMT24++": "https://qwen.ai/blog?id=qwen3.7",
      "MAXIFE": "https://qwen.ai/blog?id=qwen3.7",
      "MMMLU": "https://qwen.ai/blog?id=qwen3.7",
      "MMLU-ProX": "https://qwen.ai/blog?id=qwen3.7",
      "NOVA-63": "https://qwen.ai/blog?id=qwen3.7",
      "INCLUDE": "https://qwen.ai/blog?id=qwen3.7",
      "Global PIQA": "https://qwen.ai/blog?id=qwen3.7",
      "PolyMATH": "https://qwen.ai/blog?id=qwen3.7"
    },
    "benchmark_note": "qwen.ai Qwen3.7 발표 블로그 표의 Qwen3.6-Plus 열 전체 수치입니다. QwenWebDev(1500)·QwenSVG(1432)·Kernel Bench L3 속도배율(1.03×)은 Elo/비% 지표라 제외 — Kernel Bench L3은 승률(48%)만 수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-039",
    "name": "GLM-5.1",
    "date": "2026-04-07",
    "sortDate": "2026-04-07",
    "month": "2026-04",
    "monthName": "April",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 카드에는 754B model size만 표기; 총/활성 파라미터 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "공식 카드의 model size를 총 파라미터 수로 간주하지 않습니다.",
    "benchmarks": {
      "SWE-bench Pro": 58.4,
      "NL2Repo": 42.7,
      "Terminal-Bench 2.0": 63.5,
      "BrowseComp": 68.0,
      "GPQA Diamond": 86.2,
      "AIME 2025": 95.3
    },
    "official_id": "zai-org/GLM-5.1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5.1"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5.1",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5.1",
    "benchmark_sources": {
      "SWE-bench Pro": "https://huggingface.co/zai-org/GLM-5.1",
      "NL2Repo": "https://huggingface.co/zai-org/GLM-5.1",
      "Terminal-Bench 2.0": "https://huggingface.co/zai-org/GLM-5.1",
      "BrowseComp": "https://huggingface.co/zai-org/GLM-5.1",
      "GPQA Diamond": "https://huggingface.co/zai-org/GLM-5.1",
      "AIME 2025": "https://huggingface.co/zai-org/GLM-5.1"
    },
    "benchmark_note": "GLM-5.1 공식 카드 수치이며, active parameter 미공개 사실을 유지했습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-040",
    "name": "Muse Spark",
    "date": "2026-04-08",
    "sortDate": "2026-04-08",
    "month": "2026-04",
    "monthName": "April",
    "company": "Meta",
    "family": "Muse Spark",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Humanity's Last Exam (Contemplating)": 58.0,
      "Frontier Science Research (Contemplating)": 38.0
    },
    "official_id": "introducing-muse-spark-msl",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://ai.meta.com/blog/introducing-muse-spark-msl/"
      }
    ],
    "release_date_source": "https://ai.meta.com/blog/introducing-muse-spark-msl/",
    "parameter_source": "https://ai.meta.com/blog/introducing-muse-spark-msl/",
    "benchmark_sources": {
      "Humanity's Last Exam (Contemplating)": "https://ai.meta.com/blog/introducing-muse-spark-msl/",
      "Frontier Science Research (Contemplating)": "https://ai.meta.com/blog/introducing-muse-spark-msl/"
    },
    "benchmark_note": "공식 발표문에 수치로 명시된 점수는 Contemplating 모드(멀티에이전트 병렬 오케스트레이션) 2개뿐. 발표문의 평가 차트·methodology 문서는 능력 점수를 이미지·정성 방식으로만 게시. 안전 평가(Scaling Framework)는 Safety & Preparedness Report로 분리 — 능력 벤치마크 아님.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-126",
    "name": "EXAONE 4.5",
    "date": "2026-04-09",
    "sortDate": "2026-04-09",
    "month": "2026-04",
    "monthName": "April",
    "company": "LG AI Research",
    "family": "EXAONE",
    "type": "MLLM",
    "category": "Multimodal",
    "status": "GA",
    "parameters": "33B total / 33B active (31.7B language + 1.29B vision)",
    "architecture": "Unified vision-language model",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Document understanding",
      "visual reasoning",
      "STEM & scientific intelligence"
    ],
    "open_weights": true,
    "license": "EXAONE AI Model License",
    "context": "128K",
    "languages": "Korean, English",
    "variants": [
      "32B VLM"
    ],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face)",
    "note": "Official model card and LG AI Research materials call this model EXAONE 4.5; the 33B designation is retained in the official model ID and parameter specification.",
    "benchmarks": {
      "MMMU": 78.7,
      "MMMU-Pro": 68.6,
      "MedXpertQA-MM": 42.1,
      "MathVision": 75.2,
      "MathVista (mini)": 85.0,
      "WeMath": 79.1,
      "LogicVista": 73.8,
      "BabyVision": 18.8,
      "AI2D": 89.0,
      "ChartQAPro": 62.2,
      "CharXiv (RQ)": 71.7,
      "OCRBench v2": 63.2,
      "OmniDocBench v1.5": 81.2,
      "MMStar": 74.9,
      "BLINK": 68.8,
      "HallusionBench": 63.7,
      "KMMMU": 42.7,
      "K-Viscuit": 80.1,
      "KRETA": 91.9,
      "AIME 2025": 92.9,
      "AIME 2026": 92.6,
      "GPQA-Diamond": 80.5,
      "LiveCodeBench v6": 81.4,
      "MMLU-Pro": 83.3,
      "τ 2 -Bench (Retail)": 77.9,
      "τ 2 -Bench (Airline)": 56.5,
      "τ 2 -Bench (Telecom)": 73.0,
      "IFBench": 62.6,
      "IFEval": 89.6,
      "KMMLU-Pro": 67.6,
      "KoBALT": 52.1
    },
    "official_id": "LGAI-EXAONE/EXAONE-4.5-33B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B"
      }
    ],
    "release_date_source": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
    "parameter_source": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
    "benchmark_sources": {
      "MMMU": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "MMMU-Pro": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "MedXpertQA-MM": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "MathVision": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "MathVista (mini)": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "WeMath": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "LogicVista": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "BabyVision": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "AI2D": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "ChartQAPro": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "CharXiv (RQ)": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "OCRBench v2": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "OmniDocBench v1.5": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "MMStar": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "BLINK": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "HallusionBench": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "KMMMU": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "K-Viscuit": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "KRETA": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "AIME 2025": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "AIME 2026": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "GPQA-Diamond": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "LiveCodeBench v6": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "MMLU-Pro": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "τ 2 -Bench (Retail)": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "τ 2 -Bench (Airline)": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "τ 2 -Bench (Telecom)": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "IFBench": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "IFEval": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "KMMLU-Pro": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B",
      "KoBALT": "https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B"
    },
    "benchmark_note": "공식 HF 모델 카드의 EXAONE 4.5 33B (Reasoning) 열 값. AA-LCR 50.6은 제3자(Artificial Analysis) 지표라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-041",
    "name": "Qwen3.6-35B-A3B",
    "date": "2026-04-16",
    "sortDate": "2026-04-16",
    "month": "2026-04",
    "monthName": "April",
    "company": "Alibaba",
    "family": "Qwen3.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 73.4,
      "SWE-bench Multilingual": 67.2,
      "SWE-bench Pro": 49.5,
      "Terminal-Bench 2.0": 51.5,
      "NL2Repo": 29.4
    },
    "official_id": "Qwen/Qwen3.6-35B-A3B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.6-35B-A3B"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://qwen.ai/blog?id=qwen3.6-35b-a3b"
      }
    ],
    "release_date_source": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.6-35B-A3B",
    "benchmark_sources": {
      "SWE-bench Verified": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
      "SWE-bench Multilingual": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
      "SWE-bench Pro": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
      "Terminal-Bench 2.0": "https://qwen.ai/blog?id=qwen3.6-35b-a3b",
      "NL2Repo": "https://qwen.ai/blog?id=qwen3.6-35b-a3b"
    },
    "benchmark_note": "Qwen 공식 발표 표 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-042",
    "name": "Claude Opus 4.7",
    "date": "2026-04-16",
    "sortDate": "2026-04-16",
    "month": "2026-04",
    "monthName": "April",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 87.6,
      "SWE-bench Pro": 64.3,
      "SWE-bench Multilingual": 80.5,
      "SWE-bench Multimodal": 34.5,
      "Terminal-Bench 2.1": 66.1,
      "Humanity's Last Exam (without tools)": 46.9,
      "Humanity's Last Exam (w/ tools)": 54.7,
      "BrowseComp": 79.8,
      "DeepSearchQA (F1)": 89.4,
      "GPQA Diamond": 94.2,
      "USAMO 2026": 69.3,
      "GraphWalks BFS 256K": 76.9,
      "GraphWalks BFS 1M": 40.3,
      "GraphWalks Parents 256K": 93.6,
      "GraphWalks Parents 1M": 56.6,
      "ChartQAPro (no tools)": 67.6,
      "ChartQAPro (w/ tools)": 69.8,
      "ChartMuseum (no tools)": 70.3,
      "ChartMuseum (w/ tools)": 85.9,
      "LAB-Bench FigQA (no tools)": 79.3,
      "LAB-Bench FigQA (w/ tools)": 85.4,
      "CharXiv Reasoning (no tools)": 81.3,
      "CharXiv Reasoning (w/ tools)": 90.1,
      "ScreenSpot-Pro (no tools)": 79.5,
      "ScreenSpot-Pro (w/ tools)": 87.6,
      "OSWorld-Verified": 82.8,
      "OfficeQA": 76.3,
      "OfficeQA Pro": 65.0,
      "Finance Agent v2": 51.51,
      "MCP-Atlas": 79.1,
      "Toolathlon (Pass@1)": 59.3,
      "Toolathlon (Pass@3)": 66.7,
      "Toolathlon (Pass³)": 52.8,
      "AutomationBench": 9.9,
      "HealthBench Professional": 51.9
    },
    "official_id": "Claude%20Opus%204.7%20System%20Card.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf"
      },
      {
        "label": "Opus 4.8 시스템 카드 (Claude 패밀리 비교)",
        "url": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf"
      }
    ],
    "release_date_source": "https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf",
    "parameter_source": "https://www-cdn.anthropic.com/037f06850df7fbe871e206dad004c3db5fd50340/Claude%20Opus%204.7%20System%20Card.pdf",
    "benchmark_sources": {
      "SWE-bench Verified": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "SWE-bench Pro": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "SWE-bench Multilingual": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "SWE-bench Multimodal": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Terminal-Bench 2.1": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Humanity's Last Exam (without tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Humanity's Last Exam (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "BrowseComp": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "DeepSearchQA (F1)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GPQA Diamond": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "USAMO 2026": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GraphWalks BFS 256K": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GraphWalks BFS 1M": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GraphWalks Parents 256K": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GraphWalks Parents 1M": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ChartQAPro (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ChartQAPro (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ChartMuseum (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ChartMuseum (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "LAB-Bench FigQA (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "LAB-Bench FigQA (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "CharXiv Reasoning (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "CharXiv Reasoning (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ScreenSpot-Pro (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ScreenSpot-Pro (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "OSWorld-Verified": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "OfficeQA": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "OfficeQA Pro": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Finance Agent v2": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "MCP-Atlas": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Toolathlon (Pass@1)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Toolathlon (Pass@3)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Toolathlon (Pass³)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "AutomationBench": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "HealthBench Professional": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf"
    },
    "benchmark_note": "Opus 4.8 시스템 카드의 Claude 패밀리 비교열에 게시된 Opus 4.7 재측정치(표준 설정: adaptive thinking·max effort·5회 평균). BrowseComp·OSWorld는 카드 각주의 신규 블록리스트·컨텍스트 압축·줌툴 버그 수정 반영 재측정값이라 구 카드와 상이. Terminal-Bench 2.1은 Harbor/Terminus-2 하네스. 비% 지표 제외·메모 기록: GDPval-AA Elo 1753, Vending-Bench 2 최종 잔고 $10,937(Max)/$7,971(High), FrontierSWE 종합 3위(mean@5 4.15·best@5 3.68), ProgramBench 에피소드 예산별 71~84% 범위, Finance Agent 구버전 v1.1 기준 63.4%(v2와 직접 비교 불가).",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-043",
    "name": "Qwen3.6-Max-Preview",
    "date": "2026-04-20",
    "sortDate": "2026-04-20",
    "month": "2026-04",
    "monthName": "April",
    "company": "Alibaba",
    "family": "Qwen3.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "2026-10-15 출처 재점검: `--check-urls` 전수 스윕에서 qwencloud.com 모델 페이지(`/models/qwen3.6-max-preview`)가 HTTP 404로 사망한 것을 확인(같은 호스트의 `/models/qwen3.7-max`·`/models/qwen3.6-plus`는 200이라 봇 챌린지가 아니라 실제 삭제)해 공식 1차 출처 목록에서 제거하고, 파라미터 출처를 Qwen 공식 블로그로 교체했습니다. 파라미터는 원래부터 `정확한 수치 미공개`라 값 변경은 없습니다.",
    "benchmarks": {
      "SuperGPQA": 73.9,
      "QwenChineseBench": 84.0,
      "QwenClawBench": 59.0,
      "SkillsBench": 55.6,
      "ToolcallFormatIFBench": 86.1,
      "SciCode": 47.0,
      "NL2Repo": 42.9,
      "Terminal-Bench 2.0 (Terminus-2)": 65.4,
      "SWE-bench Pro": 57.3
    },
    "official_id": "qwen3.6-max-preview",
    "official_sources": [
      {
        "label": "공식 출시 발표",
        "url": "https://qwen.ai/blog?id=qwen3.6-max-preview"
      }
    ],
    "release_date_source": "https://qwen.ai/blog?id=qwen3.6-max-preview",
    "parameter_source": "https://qwen.ai/blog?id=qwen3.6-max-preview",
    "benchmark_sources": {
      "SuperGPQA": "https://qwen.ai/blog?id=qwen3.6-max-preview",
      "QwenChineseBench": "https://qwen.ai/blog?id=qwen3.6-max-preview",
      "QwenClawBench": "https://qwen.ai/blog?id=qwen3.6-max-preview",
      "SkillsBench": "https://qwen.ai/blog?id=qwen3.6-max-preview",
      "ToolcallFormatIFBench": "https://qwen.ai/blog?id=qwen3.6-max-preview",
      "SciCode": "https://qwen.ai/blog?id=qwen3.6-max-preview",
      "NL2Repo": "https://qwen.ai/blog?id=qwen3.6-max-preview",
      "Terminal-Bench 2.0 (Terminus-2)": "https://qwen.ai/blog?id=qwen3.6-max-preview",
      "SWE-bench Pro": "https://qwen.ai/blog?id=qwen3.6-max-preview"
    },
    "benchmark_note": "공식 Qwen 블로그의 평가 차트 이미지(qwen3.6_max_preview_score.png) 값. AA-Omniscience Index(10.0)·GDPval-AA(51.0)·QwenWebBench(Elo 1532)는 제3자 지표·레이팅이라 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-15",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-044",
    "name": "Kimi K2.6",
    "date": "2026-04-20",
    "sortDate": "2026-04-20",
    "month": "2026-04",
    "monthName": "April",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "1T total / 32B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 80.2,
      "SWE-bench Multilingual": 76.7,
      "SWE-bench Pro": 58.6,
      "Terminal-Bench 2.0": 66.7,
      "LiveCodeBench v6": 89.6,
      "AIME 2026": 96.4,
      "GPQA Diamond": 90.5,
      "MMMU-Pro": 79.4
    },
    "official_id": "moonshotai/Kimi-K2.6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/moonshotai/Kimi-K2.6"
      }
    ],
    "release_date_source": "https://huggingface.co/moonshotai/Kimi-K2.6",
    "parameter_source": "https://huggingface.co/moonshotai/Kimi-K2.6",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "SWE-bench Multilingual": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "SWE-bench Pro": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "Terminal-Bench 2.0": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "LiveCodeBench v6": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "AIME 2026": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "GPQA Diamond": "https://huggingface.co/moonshotai/Kimi-K2.6",
      "MMMU-Pro": "https://huggingface.co/moonshotai/Kimi-K2.6"
    },
    "benchmark_note": "Kimi K2.6 공식 모델 카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-046",
    "name": "Qwen3.6-27B",
    "date": "2026-04-22",
    "sortDate": "2026-04-22",
    "month": "2026-04",
    "monthName": "April",
    "company": "Alibaba",
    "family": "Qwen3.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "27B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 53.5,
      "SWE-bench Multilingual": 71.3,
      "Terminal-Bench 2.0": 59.3,
      "NL2Repo": 36.2,
      "MMLU-Pro": 86.2
    },
    "official_id": "Qwen/Qwen3.6-27B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.6-27B"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://qwen.ai/blog?id=qwen3.6-27b"
      }
    ],
    "release_date_source": "https://qwen.ai/blog?id=qwen3.6-27b",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.6-27B",
    "benchmark_sources": {
      "SWE-bench Pro": "https://qwen.ai/blog?id=qwen3.6-27b",
      "SWE-bench Multilingual": "https://qwen.ai/blog?id=qwen3.6-27b",
      "Terminal-Bench 2.0": "https://qwen.ai/blog?id=qwen3.6-27b",
      "NL2Repo": "https://qwen.ai/blog?id=qwen3.6-27b",
      "MMLU-Pro": "https://qwen.ai/blog?id=qwen3.6-27b"
    },
    "benchmark_note": "Qwen 공식 발표 표 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-047",
    "name": "MiMo-V2.5",
    "date": "2026-04-23",
    "sortDate": "2026-04-23",
    "month": "2026-04",
    "monthName": "April",
    "company": "Xiaomi",
    "family": "MiMo",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "310B total / 15B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MiMo Coding Bench": 71.8,
      "Claw-Eval Text": 62.3,
      "Terminal-Bench 2.0": 65.8,
      "SWE-Bench Pro": 56.1,
      "CharXiv RQ": 81.0,
      "MMMU-Pro": 77.9,
      "HR-Bench (4k)": 88.5,
      "OmniDocBench": 87.2,
      "Claw-Eval Multimodal": 23.8,
      "Video-MME": 87.7,
      "DailyOmni": 83.5,
      "VideoHolmes": 64.0
    },
    "official_id": "XiaomiMiMo/MiMo-V2.5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5"
      }
    ],
    "release_date_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
    "parameter_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
    "benchmark_sources": {
      "MiMo Coding Bench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "Claw-Eval Text": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "Terminal-Bench 2.0": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "SWE-Bench Pro": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "CharXiv RQ": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "MMMU-Pro": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "HR-Bench (4k)": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "OmniDocBench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "Claw-Eval Multimodal": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "Video-MME": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "DailyOmni": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5",
      "VideoHolmes": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5"
    },
    "benchmark_note": "공식 HF 모델 카드의 코딩/멀티모달 벤치마크 이미지(mimo-v2.5-multimodal-bench 등) 값.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-048",
    "name": "MiMo-V2.5-Pro",
    "date": "2026-04-23",
    "sortDate": "2026-04-23",
    "month": "2026-04",
    "monthName": "April",
    "company": "Xiaomi",
    "family": "MiMo",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "1.02T total / 42B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMLU-Pro": 68.5,
      "GPQA Diamond": 66.7,
      "AIME 2025": 37.3,
      "SWE-bench AgentLess": 35.7
    },
    "official_id": "XiaomiMiMo/MiMo-V2.5-Pro",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro"
      }
    ],
    "release_date_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
    "parameter_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
      "GPQA Diamond": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
      "AIME 2025": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro",
      "SWE-bench AgentLess": "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro"
    },
    "benchmark_note": "MiMo-V2.5-Pro 공식 모델 카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-049",
    "name": "GPT-5.5",
    "date": "2026-04-23",
    "sortDate": "2026-04-23",
    "month": "2026-04",
    "monthName": "April",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 58.6,
      "Terminal-Bench 2.0": 82.7,
      "OSWorld-Verified": 78.7,
      "BrowseComp": 84.4,
      "CyberGym": 81.8
    },
    "official_id": "introducing-gpt-5-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-5/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-5/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-5/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/introducing-gpt-5-5/",
      "Terminal-Bench 2.0": "https://openai.com/index/introducing-gpt-5-5/",
      "OSWorld-Verified": "https://openai.com/index/introducing-gpt-5-5/",
      "BrowseComp": "https://openai.com/index/introducing-gpt-5-5/",
      "CyberGym": "https://openai.com/index/introducing-gpt-5-5/"
    },
    "benchmark_note": "OpenAI GPT-5.5 공식 발표의 자기 보고/공식 평가 표 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-050",
    "name": "GPT-5.5 Pro",
    "date": "2026-04-23",
    "sortDate": "2026-04-23",
    "month": "2026-04",
    "monthName": "April",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "BrowseComp": 90.1,
      "GDPval": 82.3
    },
    "official_id": "introducing-gpt-5-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-5-5/"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-5-5/",
    "parameter_source": "https://openai.com/index/introducing-gpt-5-5/",
    "benchmark_sources": {
      "BrowseComp": "https://openai.com/index/introducing-gpt-5-5/",
      "GDPval": "https://openai.com/index/introducing-gpt-5-5/"
    },
    "benchmark_note": "GPT-5.5 Pro 공식 발표에서 명시한 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-051",
    "name": "DeepSeek-V4 Preview",
    "date": "2026-04-24",
    "sortDate": "2026-04-24",
    "month": "2026-04",
    "monthName": "April",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "Pro 1.6T / 49B active; Flash 284B / 13B active (preview family)",
    "architecture": "Sparse MoE family",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "A family announcement, not an additional third checkpoint; the two published sizes are listed explicitly.",
    "benchmarks": {},
    "official_id": "v4-preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepseek.com/en/news/v4-preview/"
      },
      {
        "label": "DeepSeek-V4 기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2606.19348"
      }
    ],
    "release_date_source": "https://deepseek.com/en/news/v4-preview/",
    "parameter_source": "https://deepseek.com/en/news/v4-preview/",
    "benchmark_sources": {},
    "benchmark_note": "V4 Preview는 패밀리 행입니다 — 기술 보고서의 수치는 변형별 항목에 수록: DeepSeek-V4-Flash(model-052, Flash-Base/Non-Think/High/Max 열), DeepSeek-V4-Pro(model-053, Pro-Base/Non-Think/High/Max 열).",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-052",
    "name": "DeepSeek-V4-Flash",
    "date": "2026-04-24",
    "sortDate": "2026-04-24",
    "month": "2026-04",
    "monthName": "April",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "284B total / 13B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "AGIEval (EM, base)": 82.6,
      "MMLU (EM, base)": 88.7,
      "MMLU-Redux (EM, base)": 89.4,
      "MMLU-Pro (EM, base)": 68.3,
      "MMMLU (EM, base)": 88.8,
      "C-Eval (EM, base)": 92.1,
      "CMMLU (EM, base)": 90.4,
      "MultiLoKo (EM, base)": 42.2,
      "Simple-QA verified (EM, base)": 30.1,
      "SuperGPQA (EM, base)": 46.5,
      "FACTS Parametric (EM, base)": 33.9,
      "TriviaQA (EM, base)": 82.8,
      "BBH (EM, base)": 86.9,
      "DROP (F1, base)": 88.6,
      "HellaSwag (EM, base)": 85.7,
      "WinoGrande (EM, base)": 79.5,
      "CLUEWSC (EM, base)": 82.2,
      "BigCodeBench (pass@1, base)": 56.8,
      "HumanEval (pass@1, base)": 69.5,
      "GSM8K (EM, base)": 90.8,
      "MATH (EM, base)": 57.4,
      "MGSM (EM, base)": 85.7,
      "CMath (EM, base)": 93.6,
      "LongBench-V2 (EM, base)": 44.7,
      "MMLU-Pro (EM, non-think)": 83.0,
      "MMLU-Pro (EM, think-high)": 86.4,
      "MMLU-Pro (EM, think-max)": 86.2,
      "SimpleQA-Verified (non-think)": 23.1,
      "SimpleQA-Verified (think-high)": 28.9,
      "SimpleQA-Verified (think-max)": 34.1,
      "Chinese-SimpleQA (non-think)": 71.5,
      "Chinese-SimpleQA (think-high)": 73.2,
      "Chinese-SimpleQA (think-max)": 78.9,
      "GPQA Diamond (non-think)": 71.2,
      "GPQA Diamond (think-high)": 87.4,
      "GPQA Diamond (think-max)": 88.1,
      "HLE (non-think)": 8.1,
      "HLE (think-high)": 29.4,
      "HLE (think-max)": 34.8,
      "LiveCodeBench (non-think)": 55.2,
      "LiveCodeBench (think-high)": 88.4,
      "LiveCodeBench (think-max)": 91.6,
      "HMMT 2026 Feb (non-think)": 40.8,
      "HMMT 2026 Feb (think-high)": 91.9,
      "HMMT 2026 Feb (think-max)": 94.8,
      "IMOAnswerBench (non-think)": 41.9,
      "IMOAnswerBench (think-high)": 85.1,
      "IMOAnswerBench (think-max)": 88.4,
      "MathArena Apex (non-think)": 1.0,
      "MathArena Apex (think-high)": 19.1,
      "MathArena Apex (think-max)": 33.0,
      "MathArena Apex Shortlist (non-think)": 9.3,
      "MathArena Apex Shortlist (think-high)": 72.1,
      "MathArena Apex Shortlist (think-max)": 85.7,
      "MRCR 1M (non-think)": 37.5,
      "MRCR 1M (think-high)": 76.9,
      "MRCR 1M (think-max)": 78.7,
      "CorpusQA 1M (non-think)": 15.5,
      "CorpusQA 1M (think-high)": 59.3,
      "CorpusQA 1M (think-max)": 60.5,
      "Terminal Bench 2.0 (non-think)": 49.1,
      "Terminal Bench 2.0 (think-high)": 56.6,
      "Terminal Bench 2.0 (think-max)": 56.9,
      "SWE Verified (non-think)": 73.7,
      "SWE Verified (think-high)": 78.6,
      "SWE Verified (think-max)": 79.0,
      "SWE Pro (non-think)": 49.1,
      "SWE Pro (think-high)": 52.3,
      "SWE Pro (think-max)": 52.6,
      "SWE Multilingual (non-think)": 69.7,
      "SWE Multilingual (think-high)": 70.2,
      "SWE Multilingual (think-max)": 73.3,
      "BrowseComp (think-high)": 53.5,
      "BrowseComp (think-max)": 73.2,
      "HLE w/ tools (think-high)": 40.3,
      "HLE w/ tools (think-max)": 45.1,
      "MCPAtlas (non-think)": 64.0,
      "MCPAtlas (think-high)": 67.4,
      "MCPAtlas (think-max)": 69.0,
      "Toolathlon (non-think)": 40.7,
      "Toolathlon (think-high)": 43.5,
      "Toolathlon (think-max)": 47.8
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://deepseek.com/en/news/v4-preview/"
      },
      {
        "label": "DeepSeek-V4 기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2606.19348"
      }
    ],
    "release_date_source": "https://deepseek.com/en/news/v4-preview/",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
    "benchmark_sources": {
      "AGIEval (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MMLU (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MMLU-Redux (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MMLU-Pro (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MMMLU (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "C-Eval (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "CMMLU (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MultiLoKo (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Simple-QA verified (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SuperGPQA (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "FACTS Parametric (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "TriviaQA (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "BBH (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "DROP (F1, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HellaSwag (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "WinoGrande (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "CLUEWSC (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "BigCodeBench (pass@1, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HumanEval (pass@1, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "GSM8K (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MATH (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MGSM (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "CMath (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "LongBench-V2 (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MMLU-Pro (EM, non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MMLU-Pro (EM, think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MMLU-Pro (EM, think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SimpleQA-Verified (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SimpleQA-Verified (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SimpleQA-Verified (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Chinese-SimpleQA (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Chinese-SimpleQA (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Chinese-SimpleQA (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "GPQA Diamond (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "GPQA Diamond (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "GPQA Diamond (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HLE (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HLE (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HLE (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "LiveCodeBench (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "LiveCodeBench (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "LiveCodeBench (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HMMT 2026 Feb (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HMMT 2026 Feb (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HMMT 2026 Feb (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "IMOAnswerBench (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "IMOAnswerBench (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "IMOAnswerBench (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MathArena Apex (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MathArena Apex (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MathArena Apex (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MathArena Apex Shortlist (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MathArena Apex Shortlist (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MathArena Apex Shortlist (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MRCR 1M (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MRCR 1M (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MRCR 1M (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "CorpusQA 1M (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "CorpusQA 1M (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "CorpusQA 1M (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Terminal Bench 2.0 (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Terminal Bench 2.0 (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Terminal Bench 2.0 (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SWE Verified (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SWE Verified (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SWE Verified (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SWE Pro (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SWE Pro (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SWE Pro (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SWE Multilingual (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SWE Multilingual (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "SWE Multilingual (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "BrowseComp (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "BrowseComp (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HLE w/ tools (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "HLE w/ tools (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MCPAtlas (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MCPAtlas (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "MCPAtlas (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Toolathlon (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Toolathlon (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash",
      "Toolathlon (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash"
    },
    "benchmark_note": "DeepSeek-V4 기술 보고서·공식 HF 카드의 Flash 수치 전체입니다 — base 표(Flash-Base 열)와 reasoning-mode 표(Non-Think/High/Max 세 모드). 기존 'MMLU-Pro' 단일 값은 base 열로 재명명. Codeforces(2816/3052 rating)·GDPval-AA(Elo)는 비%/제3자 지표라 제외·메모 기록. BrowseComp·HLE w/ tools의 non-think 열은 카드가 '-'라 미수록.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-053",
    "name": "DeepSeek-V4-Pro",
    "date": "2026-04-24",
    "sortDate": "2026-04-24",
    "month": "2026-04",
    "monthName": "April",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "1.6T total / 49B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "AGIEval (EM, base)": 83.1,
      "MMLU (EM, base)": 90.1,
      "MMLU-Redux (EM, base)": 90.8,
      "MMLU-Pro (EM, base)": 73.5,
      "MMMLU (EM, base)": 90.3,
      "C-Eval (EM, base)": 93.1,
      "CMMLU (EM, base)": 90.8,
      "MultiLoKo (EM, base)": 51.1,
      "Simple-QA verified (EM, base)": 55.2,
      "SuperGPQA (EM, base)": 53.9,
      "FACTS Parametric (EM, base)": 62.6,
      "TriviaQA (EM, base)": 85.6,
      "BBH (EM, base)": 87.5,
      "DROP (F1, base)": 88.7,
      "HellaSwag (EM, base)": 88.0,
      "WinoGrande (EM, base)": 81.5,
      "CLUEWSC (EM, base)": 85.2,
      "BigCodeBench (pass@1, base)": 59.2,
      "HumanEval (pass@1, base)": 76.8,
      "GSM8K (EM, base)": 92.6,
      "MATH (EM, base)": 64.5,
      "MGSM (EM, base)": 84.4,
      "CMath (EM, base)": 90.9,
      "LongBench-V2 (EM, base)": 51.5,
      "MMLU-Pro (EM, non-think)": 82.9,
      "MMLU-Pro (EM, think-high)": 87.1,
      "MMLU-Pro (EM, think-max)": 87.5,
      "SimpleQA-Verified (non-think)": 45.0,
      "SimpleQA-Verified (think-high)": 46.2,
      "SimpleQA-Verified (think-max)": 57.9,
      "Chinese-SimpleQA (non-think)": 75.8,
      "Chinese-SimpleQA (think-high)": 77.7,
      "Chinese-SimpleQA (think-max)": 84.4,
      "GPQA Diamond (non-think)": 72.9,
      "GPQA Diamond (think-high)": 89.1,
      "GPQA Diamond (think-max)": 90.1,
      "HLE (non-think)": 7.7,
      "HLE (think-high)": 34.5,
      "HLE (think-max)": 37.7,
      "LiveCodeBench (non-think)": 56.8,
      "LiveCodeBench (think-high)": 89.8,
      "LiveCodeBench (think-max)": 93.5,
      "HMMT 2026 Feb (non-think)": 31.7,
      "HMMT 2026 Feb (think-high)": 94.0,
      "HMMT 2026 Feb (think-max)": 95.2,
      "IMOAnswerBench (non-think)": 35.3,
      "IMOAnswerBench (think-high)": 88.0,
      "IMOAnswerBench (think-max)": 89.8,
      "MathArena Apex (non-think)": 0.4,
      "MathArena Apex (think-high)": 27.4,
      "MathArena Apex (think-max)": 38.3,
      "MathArena Apex Shortlist (non-think)": 9.2,
      "MathArena Apex Shortlist (think-high)": 85.5,
      "MathArena Apex Shortlist (think-max)": 90.2,
      "MRCR 1M (non-think)": 44.7,
      "MRCR 1M (think-high)": 83.3,
      "MRCR 1M (think-max)": 83.5,
      "CorpusQA 1M (non-think)": 35.6,
      "CorpusQA 1M (think-high)": 56.5,
      "CorpusQA 1M (think-max)": 62.0,
      "Terminal Bench 2.0 (non-think)": 59.1,
      "Terminal Bench 2.0 (think-high)": 63.3,
      "Terminal Bench 2.0 (think-max)": 67.9,
      "SWE Verified (non-think)": 73.6,
      "SWE Verified (think-high)": 79.4,
      "SWE Verified (think-max)": 80.6,
      "SWE Pro (non-think)": 52.1,
      "SWE Pro (think-high)": 54.4,
      "SWE Pro (think-max)": 55.4,
      "SWE Multilingual (non-think)": 69.8,
      "SWE Multilingual (think-high)": 74.1,
      "SWE Multilingual (think-max)": 76.2,
      "BrowseComp (think-high)": 80.4,
      "BrowseComp (think-max)": 83.4,
      "HLE w/ tools (think-high)": 44.7,
      "HLE w/ tools (think-max)": 48.2,
      "MCPAtlas (non-think)": 69.4,
      "MCPAtlas (think-high)": 74.2,
      "MCPAtlas (think-max)": 73.6,
      "Toolathlon (non-think)": 46.3,
      "Toolathlon (think-high)": 49.0,
      "Toolathlon (think-max)": 51.8
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Pro",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://deepseek.com/en/news/v4-preview/"
      },
      {
        "label": "DeepSeek-V4 기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2606.19348"
      }
    ],
    "release_date_source": "https://deepseek.com/en/news/v4-preview/",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
    "benchmark_sources": {
      "AGIEval (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MMLU (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MMLU-Redux (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MMLU-Pro (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MMMLU (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "C-Eval (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "CMMLU (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MultiLoKo (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Simple-QA verified (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SuperGPQA (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "FACTS Parametric (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "TriviaQA (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "BBH (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "DROP (F1, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HellaSwag (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "WinoGrande (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "CLUEWSC (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "BigCodeBench (pass@1, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HumanEval (pass@1, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "GSM8K (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MATH (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MGSM (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "CMath (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "LongBench-V2 (EM, base)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MMLU-Pro (EM, non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MMLU-Pro (EM, think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MMLU-Pro (EM, think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SimpleQA-Verified (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SimpleQA-Verified (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SimpleQA-Verified (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Chinese-SimpleQA (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Chinese-SimpleQA (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Chinese-SimpleQA (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "GPQA Diamond (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "GPQA Diamond (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "GPQA Diamond (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HLE (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HLE (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HLE (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "LiveCodeBench (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "LiveCodeBench (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "LiveCodeBench (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HMMT 2026 Feb (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HMMT 2026 Feb (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HMMT 2026 Feb (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "IMOAnswerBench (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "IMOAnswerBench (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "IMOAnswerBench (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MathArena Apex (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MathArena Apex (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MathArena Apex (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MathArena Apex Shortlist (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MathArena Apex Shortlist (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MathArena Apex Shortlist (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MRCR 1M (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MRCR 1M (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MRCR 1M (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "CorpusQA 1M (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "CorpusQA 1M (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "CorpusQA 1M (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Terminal Bench 2.0 (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Terminal Bench 2.0 (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Terminal Bench 2.0 (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SWE Verified (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SWE Verified (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SWE Verified (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SWE Pro (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SWE Pro (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SWE Pro (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SWE Multilingual (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SWE Multilingual (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "SWE Multilingual (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "BrowseComp (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "BrowseComp (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HLE w/ tools (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "HLE w/ tools (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MCPAtlas (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MCPAtlas (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "MCPAtlas (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Toolathlon (non-think)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Toolathlon (think-high)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
      "Toolathlon (think-max)": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro"
    },
    "benchmark_note": "DeepSeek-V4 기술 보고서·공식 HF 카드의 Pro 수치 전체입니다 — base 표(Pro-Base 열)와 reasoning-mode 표(Non-Think/High/Max). 기존 'MMLU-Pro'는 base 열로 재명명. Codeforces(2919/3206 rating)·GDPval-AA(Elo 1554)는 제외·메모 기록. BrowseComp·HLE w/ tools의 non-think 열은 '-'라 미수록.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-054",
    "name": "Hy3-preview",
    "date": "2026-04-24",
    "sortDate": "2026-04-24",
    "month": "2026-04",
    "monthName": "April",
    "company": "Tencent",
    "family": "Hy / Hunyuan",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "295B total / 21B active + 3.8B MTP (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "256K",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face / GitHub)",
    "note": "MTP is reported separately from the 295B backbone.",
    "benchmarks": {
      "SWE-bench Multilingual": 68.3,
      "SWE-bench Verified": 74.4,
      "SWE-bench Pro": 46.0,
      "Terminal-Bench 2.1": 58.0,
      "NL2repo": 35.3,
      "DeepSWE": 0.9,
      "Hy-Backend 2.0 (internal)": 12.2,
      "Hy-SWE Max (internal)": 30.0,
      "Hy-CompanyBench (internal)": 8.3,
      "BrowseComp": 67.1,
      "WideSearch": 67.8,
      "DeepSearchQA": 82.8,
      "MCP Atlas (public)": 66.1,
      "Toolathlon": 32.1,
      "Apex-Agent (pass@1)": 12.4,
      "ClawEval (pass^3)": 55.0,
      "WildClawBench (35, text-only)": 45.3,
      "SkillsBench (79, text-only)": 29.1,
      "e-bench (internal)": 10.9,
      "Hy-FinModelBench (internal)": 26.6,
      "ProdBench (internal, pass^3)": 10.3,
      "Hy-SkillsWorld (internal)": 26.4,
      "HLE (w/ tools, text-only)": 35.4,
      "Hy-Euler pro (w/ tools, internal)": 2.3,
      "GPQA Diamond": 87.2,
      "HLE (no tools, text-only)": 30.0,
      "FrontierScience-Research": 19.0,
      "FrontierScience-Olympiad": 70.0,
      "USAMO 2026": 37.3,
      "MathArena Apex": 12.6,
      "ArxivMath": 46.1,
      "HorizonMath (pass@12)": 1.8,
      "Hy-Math (internal)": 26.1,
      "PHYBench": 71.4,
      "CMT-Benchmark": 19.4,
      "IMOAnswerBench": 84.3,
      "SuperChem": 47.0,
      "CL-bench": 22.8,
      "CL-bench life": 15.7,
      "Terminal-Bench 2.0": 54.4,
      "WideSearch (card chart)": 70.2,
      "AdvancedIF": 79.5,
      "LongBench v2": 65.4,
      "Hy-Backend (internal, v1)": 54.7,
      "Hy-Vibe (internal)": 50.5,
      "Tsinghua Qiuzhen Math PhD-qualifying (清华求真书院数学博资考)": 88.4,
      "CHSBO 2025": 87.8
    },
    "official_id": "tencent/Hy3-preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/tencent/Hy3-preview"
      },
      {
        "label": "Hy3 모델 카드 (benchmark-appendix)",
        "url": "https://huggingface.co/tencent/Hy3"
      }
    ],
    "release_date_source": "https://huggingface.co/tencent/Hy3-preview",
    "parameter_source": "https://huggingface.co/tencent/Hy3-preview",
    "benchmark_sources": {
      "SWE-bench Multilingual": "https://huggingface.co/tencent/Hy3",
      "SWE-bench Verified": "https://huggingface.co/tencent/Hy3",
      "SWE-bench Pro": "https://huggingface.co/tencent/Hy3",
      "Terminal-Bench 2.1": "https://huggingface.co/tencent/Hy3",
      "NL2repo": "https://huggingface.co/tencent/Hy3",
      "DeepSWE": "https://huggingface.co/tencent/Hy3",
      "Hy-Backend 2.0 (internal)": "https://huggingface.co/tencent/Hy3",
      "Hy-SWE Max (internal)": "https://huggingface.co/tencent/Hy3",
      "Hy-CompanyBench (internal)": "https://huggingface.co/tencent/Hy3",
      "BrowseComp": "https://huggingface.co/tencent/Hy3",
      "WideSearch": "https://huggingface.co/tencent/Hy3",
      "DeepSearchQA": "https://huggingface.co/tencent/Hy3",
      "MCP Atlas (public)": "https://huggingface.co/tencent/Hy3",
      "Toolathlon": "https://huggingface.co/tencent/Hy3",
      "Apex-Agent (pass@1)": "https://huggingface.co/tencent/Hy3",
      "ClawEval (pass^3)": "https://huggingface.co/tencent/Hy3",
      "WildClawBench (35, text-only)": "https://huggingface.co/tencent/Hy3",
      "SkillsBench (79, text-only)": "https://huggingface.co/tencent/Hy3",
      "e-bench (internal)": "https://huggingface.co/tencent/Hy3",
      "Hy-FinModelBench (internal)": "https://huggingface.co/tencent/Hy3",
      "ProdBench (internal, pass^3)": "https://huggingface.co/tencent/Hy3",
      "Hy-SkillsWorld (internal)": "https://huggingface.co/tencent/Hy3",
      "HLE (w/ tools, text-only)": "https://huggingface.co/tencent/Hy3",
      "Hy-Euler pro (w/ tools, internal)": "https://huggingface.co/tencent/Hy3",
      "GPQA Diamond": "https://huggingface.co/tencent/Hy3",
      "HLE (no tools, text-only)": "https://huggingface.co/tencent/Hy3",
      "FrontierScience-Research": "https://huggingface.co/tencent/Hy3",
      "FrontierScience-Olympiad": "https://huggingface.co/tencent/Hy3",
      "USAMO 2026": "https://huggingface.co/tencent/Hy3",
      "MathArena Apex": "https://huggingface.co/tencent/Hy3",
      "ArxivMath": "https://huggingface.co/tencent/Hy3",
      "HorizonMath (pass@12)": "https://huggingface.co/tencent/Hy3",
      "Hy-Math (internal)": "https://huggingface.co/tencent/Hy3",
      "PHYBench": "https://huggingface.co/tencent/Hy3",
      "CMT-Benchmark": "https://huggingface.co/tencent/Hy3",
      "IMOAnswerBench": "https://huggingface.co/tencent/Hy3",
      "SuperChem": "https://huggingface.co/tencent/Hy3",
      "CL-bench": "https://huggingface.co/tencent/Hy3",
      "CL-bench life": "https://huggingface.co/tencent/Hy3",
      "Terminal-Bench 2.0": "https://huggingface.co/tencent/Hy3-preview",
      "WideSearch (card chart)": "https://huggingface.co/tencent/Hy3-preview",
      "AdvancedIF": "https://huggingface.co/tencent/Hy3-preview",
      "LongBench v2": "https://huggingface.co/tencent/Hy3-preview",
      "Hy-Backend (internal, v1)": "https://huggingface.co/tencent/Hy3-preview",
      "Hy-Vibe (internal)": "https://huggingface.co/tencent/Hy3-preview",
      "Tsinghua Qiuzhen Math PhD-qualifying (清华求真书院数学博资考)": "https://huggingface.co/tencent/Hy3-preview",
      "CHSBO 2025": "https://huggingface.co/tencent/Hy3-preview"
    },
    "benchmark_note": "Hy3 카드 benchmark-appendix 표의 Hy3 preview 열(instruct) + Hy3-preview 카드 자체 차트 이미지 값 병합. WideSearch는 카드 차트 70.2 / 후속 부록 67.8로 평가 버전 상이 — 둘 다 표기. AA-LCR(66.3)은 제외. 카드의 Hy3 preview-Base 표(베이스 체크포인트 평가)는 별도 아티팩트라 미수록.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-055",
    "name": "Laguna M.1",
    "date": "2026-04-28",
    "sortDate": "2026-04-28",
    "month": "2026-04",
    "monthName": "April",
    "company": "Poolside",
    "family": "Laguna",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "225B total / 23B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card reports 225B total / 23B activated.",
    "benchmarks": {
      "SWE-bench Verified": 74.6,
      "SWE-bench Multilingual": 63.1,
      "SWE-bench Pro": 49.2,
      "Terminal-Bench 2.0": 45.8
    },
    "official_id": "poolside/Laguna-M.1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/poolside/Laguna-M.1"
      }
    ],
    "release_date_source": "https://huggingface.co/poolside/Laguna-M.1",
    "parameter_source": "https://huggingface.co/poolside/Laguna-M.1",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/poolside/Laguna-M.1",
      "SWE-bench Multilingual": "https://huggingface.co/poolside/Laguna-M.1",
      "SWE-bench Pro": "https://huggingface.co/poolside/Laguna-M.1",
      "Terminal-Bench 2.0": "https://huggingface.co/poolside/Laguna-M.1"
    },
    "benchmark_note": "Poolside 공식 모델 카드 자기 평가(동일 harness/조건) 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-056",
    "name": "Laguna XS.2",
    "date": "2026-04-28",
    "sortDate": "2026-04-28",
    "month": "2026-04",
    "monthName": "April",
    "company": "Poolside",
    "family": "Laguna",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "33B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 69.9,
      "SWE-bench Multilingual": 57.7,
      "SWE-bench Pro": 46.3,
      "Terminal-Bench 2.0": 35.7
    },
    "official_id": "poolside/Laguna-XS.2",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/poolside/Laguna-XS.2"
      }
    ],
    "release_date_source": "https://huggingface.co/poolside/Laguna-XS.2",
    "parameter_source": "https://huggingface.co/poolside/Laguna-XS.2",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/poolside/Laguna-XS.2",
      "SWE-bench Multilingual": "https://huggingface.co/poolside/Laguna-XS.2",
      "SWE-bench Pro": "https://huggingface.co/poolside/Laguna-XS.2",
      "Terminal-Bench 2.0": "https://huggingface.co/poolside/Laguna-XS.2"
    },
    "benchmark_note": "Poolside 공식 모델 카드 자기 평가(동일 harness/조건) 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-057",
    "name": "Nemotron-3-Nano-Omni-30B-A3B-Reasoning",
    "date": "2026-04-28",
    "sortDate": "2026-04-28",
    "month": "2026-04",
    "monthName": "April",
    "company": "NVIDIA",
    "family": "Nemotron",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "31B backbone / ~3B active (30B-A3B model class)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The official checkpoint title says 30B-A3B; the card’s backbone metadata is about 31B.",
    "benchmarks": {
      "CVBench2D": 83.95,
      "OCRBenchV2 (EN)": 67.04,
      "OSWorld": 47.4,
      "Charxiv Reasoning": 63.6,
      "MMlongBench Doc": 57.5,
      "MathVista_MINI": 82.8,
      "OCR_Reasoning": 54.14,
      "Video MME": 72.2,
      "World Sense": 55.4,
      "Daily Omni": 74.52,
      "Voice interaction": 89.39
    },
    "official_id": "nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8"
      }
    ],
    "release_date_source": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
    "parameter_source": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
    "benchmark_sources": {
      "CVBench2D": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "OCRBenchV2 (EN)": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "OSWorld": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "Charxiv Reasoning": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "MMlongBench Doc": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "MathVista_MINI": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "OCR_Reasoning": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "Video MME": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "World Sense": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "Daily Omni": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8",
      "Voice interaction": "https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8"
    },
    "benchmark_note": "공식 HF 모델 카드의 Nemotron 3 Nano Omni 열(BF16 기준). 카드의 양자화 정밀도 비교표(FP8/NVFP4) 값은 별도 명기하지 않음 — BF16 기준치만 수록.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-058",
    "name": "Granite 4.1",
    "date": "2026-04-29",
    "sortDate": "2026-04-29",
    "month": "2026-04",
    "monthName": "April",
    "company": "IBM",
    "family": "Granite",
    "type": "LLM + MLLM family",
    "category": "MLLM",
    "status": "GA",
    "parameters": "Language: 3B, 8B, 30B dense; Vision: 4B (3.4B LLM + 0.6B vision encoder/projectors)",
    "architecture": "Mamba2 + Transformer Hybrid",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Family row intentionally lists the official language and vision sizes instead of inventing one size.",
    "benchmarks": {},
    "official_id": "ibm-granite/granite-4.1-30b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/ibm-granite/granite-4.1-30b"
      },
      {
        "label": "공식 비전 모델 카드",
        "url": "https://huggingface.co/ibm-granite/granite-vision-4.1-4b"
      },
      {
        "label": "공식 모델 컬렉션",
        "url": "https://huggingface.co/collections/ibm-granite/granite-41-language-models"
      }
    ],
    "release_date_source": "https://huggingface.co/ibm-granite/granite-4.1-30b",
    "parameter_source": "https://huggingface.co/collections/ibm-granite/granite-41-language-models",
    "benchmark_sources": {},
    "benchmark_note": "Granite 4.1 패밀리 행입니다 — 벤치마크는 변형 항목(Granite 4.1 Language=model-var-07, Granite-Vision-4.1-4B=model-var-08)에 각각 수록. 패밀리 통합 표는 공식 카드에 없음.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-07",
    "name": "Granite 4.1 Language",
    "date": "2026-04-29",
    "sortDate": "2026-04-29",
    "month": "2026-04",
    "monthName": "April",
    "company": "IBM",
    "family": "Granite",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3B, 8B, 30B dense language variants",
    "architecture": "Mamba2 + Transformer Hybrid",
    "open_weights": true,
    "note": "",
    "benchmarks": {
      "MMLU (3B)": 67.02,
      "MMLU-Pro (3B)": 49.83,
      "BBH (3B)": 75.83,
      "AGI EVAL (3B)": 65.16,
      "GPQA (3B)": 31.7,
      "SimpleQA (3B)": 3.68,
      "AlpacaEval 2.0 (3B)": 38.57,
      "IFEval Avg (3B)": 82.3,
      "ArenaHard (3B)": 37.8,
      "MTBench Avg (3B)": 7.57,
      "GSM8K (3B)": 86.88,
      "GSM Symbolic (3B)": 81.32,
      "Minerva Math (3B)": 67.94,
      "DeepMind Math (3B)": 64.64,
      "HumanEval (3B)": 81.71,
      "HumanEval+ (3B)": 76.83,
      "MBPP (3B)": 71.16,
      "MBPP+ (3B)": 62.17,
      "CRUXEval-O (3B)": 40.75,
      "BigCodeBench (3B)": 32.19,
      "MULTIPLE (3B)": 52.54,
      "Eval+ Avg (3B)": 67.05,
      "BFCL v3 (3B)": 60.8,
      "MMMLU (3B)": 57.61,
      "INCLUDE (3B)": 52.05,
      "MGSM (3B)": 70.0,
      "SALAD-Bench (3B)": 93.95,
      "AttaQ (3B)": 81.88,
      "Tulu3 Safety Eval Avg (3B)": 66.84,
      "MMLU (8B)": 73.84,
      "MMLU-Pro (8B)": 55.99,
      "BBH (8B)": 80.51,
      "AGI EVAL (8B)": 72.43,
      "GPQA (8B)": 41.96,
      "SimpleQA (8B)": 4.82,
      "AlpacaEval 2.0 (8B)": 50.08,
      "IFEval Avg (8B)": 87.06,
      "ArenaHard (8B)": 68.98,
      "MTBench Avg (8B)": 8.61,
      "GSM8K (8B)": 92.49,
      "GSM Symbolic (8B)": 83.7,
      "Minerva Math (8B)": 80.1,
      "DeepMind Math (8B)": 80.07,
      "HumanEval (8B)": 85.37,
      "HumanEval+ (8B)": 79.88,
      "MBPP (8B)": 87.3,
      "MBPP+ (8B)": 73.81,
      "CRUXEval-O (8B)": 47.63,
      "BigCodeBench (8B)": 35.0,
      "MULTIPLE (8B)": 60.26,
      "Eval+ Avg (8B)": 80.21,
      "BFCL v3 (8B)": 68.27,
      "MMMLU (8B)": 64.84,
      "INCLUDE (8B)": 58.89,
      "MGSM (8B)": 82.32,
      "SALAD-Bench (8B)": 95.8,
      "AttaQ (8B)": 81.19,
      "Tulu3 Safety Eval Avg (8B)": 75.57,
      "MMLU (30B)": 80.16,
      "MMLU-Pro (30B)": 64.09,
      "BBH (30B)": 83.74,
      "AGI EVAL (30B)": 77.8,
      "GPQA (30B)": 45.76,
      "SimpleQA (30B)": 6.81,
      "AlpacaEval 2.0 (30B)": 56.16,
      "IFEval Avg (30B)": 89.65,
      "ArenaHard (30B)": 71.02,
      "MTBench Avg (30B)": 8.61,
      "GSM8K (30B)": 94.16,
      "GSM Symbolic (30B)": 75.7,
      "Minerva Math (30B)": 81.32,
      "DeepMind Math (30B)": 81.93,
      "HumanEval (30B)": 88.41,
      "HumanEval+ (30B)": 85.37,
      "MBPP (30B)": 85.45,
      "MBPP+ (30B)": 73.54,
      "CRUXEval-O (30B)": 55.75,
      "BigCodeBench (30B)": 38.77,
      "MULTIPLE (30B)": 62.31,
      "Eval+ Avg (30B)": 82.66,
      "BFCL v3 (30B)": 73.68,
      "MMMLU (30B)": 73.71,
      "INCLUDE (30B)": 67.26,
      "MGSM (30B)": 71.12,
      "SALAD-Bench (30B)": 96.41,
      "AttaQ (30B)": 85.76,
      "Tulu3 Safety Eval Avg (30B)": 78.19
    },
    "official_id": "ibm-granite/granite-4.1-30b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/ibm-granite/granite-4.1-30b"
      },
      {
        "label": "공식 모델 컬렉션",
        "url": "https://huggingface.co/collections/ibm-granite/granite-41-language-models"
      }
    ],
    "release_date_source": "https://huggingface.co/ibm-granite/granite-4.1-30b",
    "parameter_source": "https://huggingface.co/collections/ibm-granite/granite-41-language-models",
    "benchmark_sources": {
      "MMLU (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MMLU-Pro (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "BBH (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "AGI EVAL (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "GPQA (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "SimpleQA (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "AlpacaEval 2.0 (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "IFEval Avg (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "ArenaHard (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MTBench Avg (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "GSM8K (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "GSM Symbolic (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "Minerva Math (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "DeepMind Math (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "HumanEval (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "HumanEval+ (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MBPP (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MBPP+ (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "CRUXEval-O (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "BigCodeBench (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MULTIPLE (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "Eval+ Avg (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "BFCL v3 (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MMMLU (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "INCLUDE (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MGSM (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "SALAD-Bench (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "AttaQ (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "Tulu3 Safety Eval Avg (3B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MMLU (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MMLU-Pro (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "BBH (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "AGI EVAL (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "GPQA (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "SimpleQA (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "AlpacaEval 2.0 (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "IFEval Avg (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "ArenaHard (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MTBench Avg (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "GSM8K (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "GSM Symbolic (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "Minerva Math (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "DeepMind Math (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "HumanEval (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "HumanEval+ (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MBPP (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MBPP+ (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "CRUXEval-O (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "BigCodeBench (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MULTIPLE (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "Eval+ Avg (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "BFCL v3 (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MMMLU (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "INCLUDE (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MGSM (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "SALAD-Bench (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "AttaQ (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "Tulu3 Safety Eval Avg (8B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MMLU (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MMLU-Pro (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "BBH (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "AGI EVAL (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "GPQA (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "SimpleQA (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "AlpacaEval 2.0 (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "IFEval Avg (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "ArenaHard (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MTBench Avg (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "GSM8K (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "GSM Symbolic (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "Minerva Math (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "DeepMind Math (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "HumanEval (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "HumanEval+ (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MBPP (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MBPP+ (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "CRUXEval-O (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "BigCodeBench (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MULTIPLE (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "Eval+ Avg (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "BFCL v3 (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MMMLU (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "INCLUDE (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "MGSM (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "SALAD-Bench (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "AttaQ (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b",
      "Tulu3 Safety Eval Avg (30B)": "https://huggingface.co/ibm-granite/granite-4.1-30b"
    },
    "benchmark_note": "공식 HF 모델 카드(Granite 4.1 패밀리 표)의 3B/8B/30B Dense 열 값을 크기별로 전부 수록. MTBench Avg는 10점 척도 — 그대로 표기. AlpacaEval·MTBench는 % 아님에 주의.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-var-08",
    "name": "Granite-Vision-4.1-4B",
    "date": "2026-04-29",
    "sortDate": "2026-04-29",
    "month": "2026-04",
    "monthName": "April",
    "company": "IBM",
    "family": "Granite",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "4B total (3.4B LLM + 0.6B vision encoder/projectors)",
    "architecture": "Vision-language model",
    "open_weights": true,
    "note": "",
    "benchmarks": {
      "Extraction benchmarks average (7 tasks)": 86.5
    },
    "official_id": "ibm-granite/granite-vision-4.1-4b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/ibm-granite/granite-vision-4.1-4b"
      }
    ],
    "release_date_source": "https://huggingface.co/ibm-granite/granite-vision-4.1-4b",
    "parameter_source": "https://huggingface.co/ibm-granite/granite-vision-4.1-4b",
    "benchmark_sources": {
      "Extraction benchmarks average (7 tasks)": "https://huggingface.co/ibm-granite/granite-vision-4.1-4b"
    },
    "benchmark_note": "공식 HF 모델 카드 차트의 'Average Across 7 Extraction Benchmarks' 단일 종합값.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-059",
    "name": "ERNIE 5.1",
    "date": "2026-05-09",
    "sortDate": "2026-05-09",
    "month": "2026-05",
    "monthName": "May",
    "company": "Baidu",
    "family": "ERNIE",
    "type": "LLM / agentic foundation model",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 발표는 5.0 대비 상대 규모만 제시)",
    "architecture": "Agentic Foundation Model",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Relative size language is not converted into an invented absolute parameter count.",
    "benchmarks": {
      "AIME 2026 (w/ tools)": 99.6
    },
    "official_id": "ernie-5.1-0508-release",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/"
      }
    ],
    "release_date_source": "https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/",
    "parameter_source": "https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/",
    "benchmark_sources": {
      "AIME 2026 (w/ tools)": "https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/"
    },
    "benchmark_note": "공식 릴리스 페이지가 수치로 공개한 유일 벤치마크. 페이지의 리더보드 순위 주장(AI 종합 1위 등)은 제3자 순위 지표라 점수로 수록하지 않음.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-060",
    "name": "Gemini 3.5 Flash",
    "date": "2026-05-19",
    "sortDate": "2026-05-19",
    "month": "2026-05",
    "monthName": "May",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [
      "agents",
      "coding",
      "multimodal reasoning"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal-bench 2.1 (Terminus-2)": 76.2,
      "SWE-Bench Pro (Public)": 55.1,
      "MCP Atlas": 83.6,
      "Toolathlon": 56.5,
      "OSWorld-Verified": 78.4,
      "Finance Agent v2": 57.9,
      "CharXiv Reasoning (no tools)": 84.2,
      "MMMU-Pro (no tools)": 83.6,
      "Blueprint-Bench 2": 33.6,
      "MRCR v2 8-needle (128k avg)": 77.3,
      "MRCR v2 8-needle (1M pointwise)": 26.6,
      "Humanity's Last Exam": 40.2,
      "ARC-AGI-2": 72.1
    },
    "official_id": "gemini-3-5-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-5-flash/"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
    "benchmark_sources": {
      "Terminal-bench 2.1 (Terminus-2)": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "SWE-Bench Pro (Public)": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "MCP Atlas": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "Toolathlon": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "OSWorld-Verified": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "Finance Agent v2": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "CharXiv Reasoning (no tools)": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "MMMU-Pro (no tools)": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "Blueprint-Bench 2": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "MRCR v2 8-needle (128k avg)": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "MRCR v2 8-needle (1M pointwise)": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "Humanity's Last Exam": "https://deepmind.google/models/model-cards/gemini-3-5-flash/",
      "ARC-AGI-2": "https://deepmind.google/models/model-cards/gemini-3-5-flash/"
    },
    "benchmark_note": "공식 모델 카드 평가 표의 Gemini 3.5 Flash 열 값. GDPval-AA(Elo 1656)는 제외. 카드 안전 평가는 'vs Gemini 3 Flash' 증감폭(pp)이라 절대점수 아님 — 미수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-061",
    "name": "Qwen3.7-Max",
    "date": "2026-05-20",
    "sortDate": "2026-05-20",
    "month": "2026-05",
    "monthName": "May",
    "company": "Alibaba",
    "family": "Qwen3.7",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal Bench 2.0-Terminus": 69.7,
      "SWE-Verified": 80.4,
      "SWE-Pro": 60.6,
      "SWE-Multilingual": 78.3,
      "NL2Repo": 47.2,
      "SciCode": 53.5,
      "Qwenclaw": 64.3,
      "CoWorkBench": 67.2,
      "ClawEval": 65.2,
      "Skillsbench": 59.2,
      "BFCL-V4": 75.0,
      "MCP-Mark": 60.8,
      "MCP-Atlas": 76.4,
      "Vitabench": 47.9,
      "SpreadSheetBench-v1": 87.0,
      "Kernel Bench L3 (win rate)": 96.0,
      "HLE w/ tools": 53.5,
      "QwenWorldBench": 57.3,
      "GPQA Diamond": 92.4,
      "HLE": 41.4,
      "LiveCodeBench": 91.6,
      "HMMT 2026 Feb": 97.1,
      "IMOAnswerBench": 90.0,
      "CritPT": 11.4,
      "MathArena Apex": 44.5,
      "MMLU-Pro": 89.6,
      "MMLU-Redux": 95.0,
      "SuperGPQA": 73.6,
      "IFEval": 94.3,
      "IFBench": 79.1,
      "MRCR-v2 128k": 90.4,
      "WMT24++": 85.8,
      "MAXIFE": 89.2,
      "MMMLU": 90.3,
      "MMLU-ProX": 87.0,
      "NOVA-63": 59.0,
      "INCLUDE": 86.2,
      "Global PIQA": 91.4,
      "PolyMATH": 86.5
    },
    "official_id": "qwen3.7-max",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.7-max"
      },
      {
        "label": "Qwen 공식 블로그(Qwen3.7 발표)",
        "url": "https://qwen.ai/blog?id=qwen3.7"
      },
      {
        "label": "Qwen 공식 블로그(Qwen3.8 발표)",
        "url": "https://qwen.ai/blog?id=qwen3.8"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.7-max",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.7-max",
    "benchmark_sources": {
      "Terminal Bench 2.0-Terminus": "https://qwen.ai/blog?id=qwen3.7",
      "SWE-Verified": "https://qwen.ai/blog?id=qwen3.7",
      "SWE-Pro": "https://qwen.ai/blog?id=qwen3.7",
      "SWE-Multilingual": "https://qwen.ai/blog?id=qwen3.7",
      "NL2Repo": "https://qwen.ai/blog?id=qwen3.7",
      "SciCode": "https://qwen.ai/blog?id=qwen3.7",
      "Qwenclaw": "https://qwen.ai/blog?id=qwen3.7",
      "CoWorkBench": "https://qwen.ai/blog?id=qwen3.7",
      "ClawEval": "https://qwen.ai/blog?id=qwen3.7",
      "Skillsbench": "https://qwen.ai/blog?id=qwen3.7",
      "BFCL-V4": "https://qwen.ai/blog?id=qwen3.7",
      "MCP-Mark": "https://qwen.ai/blog?id=qwen3.7",
      "MCP-Atlas": "https://qwen.ai/blog?id=qwen3.7",
      "Vitabench": "https://qwen.ai/blog?id=qwen3.7",
      "SpreadSheetBench-v1": "https://qwen.ai/blog?id=qwen3.7",
      "Kernel Bench L3 (win rate)": "https://qwen.ai/blog?id=qwen3.7",
      "HLE w/ tools": "https://qwen.ai/blog?id=qwen3.7",
      "QwenWorldBench": "https://qwen.ai/blog?id=qwen3.7",
      "GPQA Diamond": "https://qwen.ai/blog?id=qwen3.7",
      "HLE": "https://qwen.ai/blog?id=qwen3.7",
      "LiveCodeBench": "https://qwen.ai/blog?id=qwen3.7",
      "HMMT 2026 Feb": "https://qwen.ai/blog?id=qwen3.7",
      "IMOAnswerBench": "https://qwen.ai/blog?id=qwen3.7",
      "CritPT": "https://qwen.ai/blog?id=qwen3.7",
      "MathArena Apex": "https://qwen.ai/blog?id=qwen3.7",
      "MMLU-Pro": "https://qwen.ai/blog?id=qwen3.7",
      "MMLU-Redux": "https://qwen.ai/blog?id=qwen3.7",
      "SuperGPQA": "https://qwen.ai/blog?id=qwen3.7",
      "IFEval": "https://qwen.ai/blog?id=qwen3.7",
      "IFBench": "https://qwen.ai/blog?id=qwen3.7",
      "MRCR-v2 128k": "https://qwen.ai/blog?id=qwen3.7",
      "WMT24++": "https://qwen.ai/blog?id=qwen3.7",
      "MAXIFE": "https://qwen.ai/blog?id=qwen3.7",
      "MMMLU": "https://qwen.ai/blog?id=qwen3.7",
      "MMLU-ProX": "https://qwen.ai/blog?id=qwen3.7",
      "NOVA-63": "https://qwen.ai/blog?id=qwen3.7",
      "INCLUDE": "https://qwen.ai/blog?id=qwen3.7",
      "Global PIQA": "https://qwen.ai/blog?id=qwen3.7",
      "PolyMATH": "https://qwen.ai/blog?id=qwen3.7"
    },
    "benchmark_note": "qwen.ai Qwen3.7 발표 블로그 표의 Qwen3.7-Max 열 전체 수치입니다. QwenWebDev(1568)·QwenSVG(1608)는 Elo 척도라 제외, Kernel Bench L3은 승률(96%)만 수록(속도배율 1.98× 제외). Qwen3.8 발표 블로그 표의 Qwen3.7-Max 열(Terminal Bench 2.1 74.5 등)은 3.8-Max 출시 시점 재측정 비교치라 본 항목에는 미수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-062",
    "name": "Command A+",
    "date": "2026-05-20",
    "sortDate": "2026-05-20",
    "month": "2026-05",
    "monthName": "May",
    "company": "Cohere",
    "family": "Command",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "218B total / 25B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [
      "sovereign / agentic enterprise AI"
    ],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card reports 218B total and 25B active.",
    "benchmarks": {},
    "official_id": "CohereLabs/command-a-plus-05-2026-bf16",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16",
    "parameter_source": "https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16",
    "benchmark_sources": {},
    "benchmark_note": "공식 HF 모델 카드에 벤치마크 표 없음 — 점수 미수록.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-063",
    "name": "Mistral Medium 3.5 128B",
    "date": "2026-05-22",
    "sortDate": "2026-05-22",
    "month": "2026-05",
    "monthName": "May",
    "company": "Mistral AI",
    "family": "Mistral Medium",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "128B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [
      "agents",
      "coding",
      "knowledge work"
    ],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 77.6,
      "τ³-Telecom": 91.4
    },
    "official_id": "mistralai/Mistral-Medium-3.5-128B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B"
      }
    ],
    "release_date_source": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B",
    "parameter_source": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B",
      "τ³-Telecom": "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B"
    },
    "benchmark_note": "Mistral 공식 모델 카드의 제공자 측 평가 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-064",
    "name": "Claude Opus 4.8",
    "date": "2026-05-28",
    "sortDate": "2026-05-28",
    "month": "2026-05",
    "monthName": "May",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 88.6,
      "SWE-bench Pro": 69.2,
      "SWE-bench Multilingual": 84.4,
      "SWE-bench Multimodal": 38.4,
      "Terminal-Bench 2.1": 82.7,
      "Humanity's Last Exam (without tools)": 49.8,
      "Humanity's Last Exam (w/ tools)": 57.9,
      "BrowseComp": 84.3,
      "BrowseComp (multi-agent)": 88.5,
      "DeepSearchQA (F1)": 93.1,
      "DRACO": 80.4,
      "GPQA Diamond": 93.6,
      "USAMO 2026": 96.7,
      "ArxivMath": 71.82,
      "GraphWalks BFS 256K": 85.9,
      "GraphWalks BFS 1M": 68.1,
      "GraphWalks Parents 256K": 99.3,
      "GraphWalks Parents 1M": 83.3,
      "ChartQAPro (no tools)": 69.4,
      "ChartQAPro (w/ tools)": 72.3,
      "ChartMuseum (no tools)": 75.8,
      "ChartMuseum (w/ tools)": 89.7,
      "LAB-Bench FigQA (no tools)": 80.4,
      "LAB-Bench FigQA (w/ tools)": 87.3,
      "CharXiv Reasoning (no tools)": 80.5,
      "CharXiv Reasoning (w/ tools)": 89.9,
      "ScreenSpot-Pro (no tools)": 82.3,
      "ScreenSpot-Pro (w/ tools)": 87.9,
      "OSWorld-Verified": 83.4,
      "OfficeQA": 77.6,
      "OfficeQA Pro": 66.2,
      "Finance Agent v2": 53.92,
      "Legal Agent Benchmark (all-pass)": 9.62,
      "Legal Agent Benchmark (criterion-pass)": 89.01,
      "MCP-Atlas": 82.2,
      "Toolathlon (Pass@1)": 59.9,
      "Toolathlon (Pass@3)": 67.6,
      "Toolathlon (Pass³)": 48.1,
      "AutomationBench": 15.5,
      "HealthBench Professional": 55.8,
      "GDPval-AA (pairwise win rate)": 66.7,
      "FrontierCode (Diamond, xhigh)": 13.4,
      "GDP.pdf (no tools)": 22.5,
      "Blueprint-Bench 2": 14.5,
      "BioMysteryBench (hard)": 40.0,
      "BioMysteryBench (human solved)": 80.4,
      "ExploitBench (Cap%)": 40.0
    },
    "official_id": "0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf"
      },
      {
        "label": "Claude Fable 5/Mythos 5 발표 비교표",
        "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
      }
    ],
    "release_date_source": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
    "parameter_source": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
    "benchmark_sources": {
      "SWE-bench Verified": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "SWE-bench Pro": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "SWE-bench Multilingual": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "SWE-bench Multimodal": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Terminal-Bench 2.1": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Humanity's Last Exam (without tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Humanity's Last Exam (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "BrowseComp": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "BrowseComp (multi-agent)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "DeepSearchQA (F1)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "DRACO": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GPQA Diamond": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "USAMO 2026": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ArxivMath": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GraphWalks BFS 256K": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GraphWalks BFS 1M": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GraphWalks Parents 256K": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GraphWalks Parents 1M": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ChartQAPro (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ChartQAPro (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ChartMuseum (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ChartMuseum (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "LAB-Bench FigQA (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "LAB-Bench FigQA (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "CharXiv Reasoning (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "CharXiv Reasoning (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ScreenSpot-Pro (no tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "ScreenSpot-Pro (w/ tools)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "OSWorld-Verified": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "OfficeQA": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "OfficeQA Pro": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Finance Agent v2": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Legal Agent Benchmark (all-pass)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Legal Agent Benchmark (criterion-pass)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "MCP-Atlas": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Toolathlon (Pass@1)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Toolathlon (Pass@3)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "Toolathlon (Pass³)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "AutomationBench": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "HealthBench Professional": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "GDPval-AA (pairwise win rate)": "https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf",
      "FrontierCode (Diamond, xhigh)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "GDP.pdf (no tools)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Blueprint-Bench 2": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "BioMysteryBench (hard)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "BioMysteryBench (human solved)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "ExploitBench (Cap%)": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
    },
    "benchmark_note": "Opus 4.8 시스템 카드 능력 평가 섹션 + Fable 5 발표 비교표 병합. 카드 표준 설정: adaptive thinking·max effort·5회 평균. Terminal-Bench 2.1은 비교표 82.7%를 수록 — 시스템 카드는 Harbor 리더보드 Terminus-2 하네스 기준 74.6%를 별도 보고(하네스 차이). Legal Agent Benchmark는 카드 기준 all-pass 9.62%/criterion-pass 89.01%(Fable 5 표엔 10.4%). HealthBench Professional은 카드 55.8%(Fable 5 표엔 56.9%). 비% 지표는 점수표 제외·메모 기록: GDPval-AA Elo 1890(GPT-5.5 대비 +121 Elo·쌍대 승률 66.7%), Vending-Bench 2 최종 잔고 $2,992(Max)/$5,787(High), FrontierSWE 종합 1위(mean@5 2.74·best@5 2.26), ProgramBench 에피소드 예산별 79~88% 범위.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-065",
    "name": "MiniMax-M3",
    "date": "2026-06-01",
    "sortDate": "2026-06-01",
    "month": "2026-06",
    "monthName": "June",
    "company": "MiniMax",
    "family": "MiniMax M",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "428B total / ~23B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card uses approximately 23B for activation.",
    "benchmarks": {
      "SWE-Bench Verified": 80.5,
      "SWE-Bench Pro": 59.0,
      "Terminal Bench 2.1": 66.0,
      "SWE Atlas-QnA": 37.9,
      "NL2Repo": 42.1,
      "SWE Atlas-Test Writing": 30.8,
      "SWE-fficiency": 34.8,
      "LiveSQLBench": 40.2,
      "CL-bench": 20.5,
      "VIBE-V2": 50.1,
      "SVG-Bench": 63.7,
      "PostTrainBench": 37.1,
      "KernelBench Hard": 28.8,
      "PaperBench": 52.6,
      "BrowseComp": 83.5,
      "DRACO": 73.2,
      "GDPval-rubrics": 74.8,
      "BankerToolBench": 76.1,
      "OfficeQA Pro": 45.1,
      "SpreadSheetBench-v1": 89.4,
      "LOCA-Bench (256k)": 49.3,
      "MCP Atlas": 74.2,
      "Apex-Agents": 27.7,
      "Claw-Eval": 74.5,
      "OSWorld-Verified": 75.2,
      "OmniDocBench": 91.6,
      "MMMU-Pro": 78.1,
      "Video-MMMU": 84.6,
      "VideoMME (w/ sub)": 85.4,
      "IMO 2025 (pts /42)": 35.0,
      "USAMO 2026 (pts /42)": 36.0
    },
    "official_id": "MiniMaxAI/MiniMax-M3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3"
      }
    ],
    "release_date_source": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
    "parameter_source": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
    "benchmark_sources": {
      "SWE-Bench Verified": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "SWE-Bench Pro": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "Terminal Bench 2.1": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "SWE Atlas-QnA": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "NL2Repo": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "SWE Atlas-Test Writing": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "SWE-fficiency": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "LiveSQLBench": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "CL-bench": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "VIBE-V2": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "SVG-Bench": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "PostTrainBench": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "KernelBench Hard": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "PaperBench": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "BrowseComp": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "DRACO": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "GDPval-rubrics": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "BankerToolBench": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "OfficeQA Pro": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "SpreadSheetBench-v1": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "LOCA-Bench (256k)": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "MCP Atlas": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "Apex-Agents": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "Claw-Eval": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "OSWorld-Verified": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "OmniDocBench": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "MMMU-Pro": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "Video-MMMU": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "VideoMME (w/ sub)": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "IMO 2025 (pts /42)": "https://huggingface.co/MiniMaxAI/MiniMax-M3",
      "USAMO 2026 (pts /42)": "https://huggingface.co/MiniMaxAI/MiniMax-M3"
    },
    "benchmark_note": "공식 HF 모델 카드의 벤치마크 이미지 표 값. IMO 2025·USAMO 2026은 /42 만점 점수(원점수 그대로 표기). YC-Bench(수익 $2.1M, 통화 지표)는 제외.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-066",
    "name": "Qwen3.7-Plus",
    "date": "2026-06-02",
    "sortDate": "2026-06-02",
    "month": "2026-06",
    "monthName": "June",
    "company": "Alibaba",
    "family": "Qwen3.7",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "MMMU-Pro": 79.0,
      "MathVision (w/o CI)": 90.3,
      "BabyVision (w/o CI)": 64.7,
      "BabyVision (w/ CI)": 70.4,
      "HLE-VL (w/ tools)": 25.6,
      "ZeroBench (pass@5, w/o CI)": 19.0,
      "ZeroBench (pass@5, w/ CI)": 19.0,
      "ZeroBench-Sub": 41.0,
      "LogicVista": 84.3,
      "HiPhO": 84.1,
      "PhyX": 80.0,
      "SLAKE": 83.2,
      "MedXpertQA-MM": 71.0,
      "PMC-VQA": 63.4,
      "OSWorld-Verified": 73.3,
      "OSWorld 2.0 (binary)": 2.8,
      "OSWorld 2.0 (partial)": 21.5,
      "ScreenSpot Pro": 79.0,
      "WebArena-Verified": 55.3,
      "AndroidWorld": 81.0,
      "MobileWorld": 51.2,
      "ClawEval-MM (pass@3)": 57.4,
      "ClawEval-MM (avg)": 60.1,
      "Vision2Web": 42.1,
      "QwenBlenderBench": 41.5,
      "Parametric CAD Bench": 73.8,
      "RecreationBench": 30.2,
      "PresentBench": 65.7,
      "CharXiv RQ (w/o CI)": 85.8,
      "CharXiv RQ (w/ CI)": 85.9,
      "OmniDocBench 1.5": 91.4,
      "OCR-Bench-V2 (EN)": 70.7,
      "OCR-Bench-V2 (ZH)": 67.1,
      "CC-OCR-Bench-V2": 72.7,
      "MTVQA-Test": 51.2,
      "MADQA": 87.1,
      "QwenVisualOffice": 32.4,
      "RealWorldQA": 86.9,
      "ERQA": 69.8,
      "LingoQA": 83.4,
      "SURDS": 77.2,
      "SimpleVQA": 70.3,
      "WorldVQA": 43.9,
      "MMStar": 83.2,
      "PerceptionBench": 51.1,
      "CountQA": 77.0,
      "RefAdv-S": 80.2,
      "Dense200": 60.7,
      "COCO": 74.2,
      "VisFactor": 42.8,
      "VLMsAreBiased": 36.6,
      "VideoMME (w/ subtitles)": 88.0,
      "VideoMME v2 (w/ subtitles)": 59.7,
      "VideoMMMU": 85.4,
      "MMVU": 76.6,
      "MLVU (M-Avg)": 87.4,
      "TVBench": 78.2,
      "LVBench": 76.2,
      "LVBench (w/ memory)": 74.5,
      "EgoLife (w/ memory)": 68.8,
      "VideoDR (w/ search)": 41.0
    },
    "official_id": "qwen3.7-plus",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.7-plus"
      },
      {
        "label": "Qwen 공식 블로그(Qwen3.8 발표)",
        "url": "https://qwen.ai/blog?id=qwen3.8"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.7-plus",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.7-plus",
    "benchmark_sources": {
      "MMMU-Pro": "https://qwen.ai/blog?id=qwen3.8",
      "MathVision (w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "BabyVision (w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "BabyVision (w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "HLE-VL (w/ tools)": "https://qwen.ai/blog?id=qwen3.8",
      "ZeroBench (pass@5, w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "ZeroBench (pass@5, w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "ZeroBench-Sub": "https://qwen.ai/blog?id=qwen3.8",
      "LogicVista": "https://qwen.ai/blog?id=qwen3.8",
      "HiPhO": "https://qwen.ai/blog?id=qwen3.8",
      "PhyX": "https://qwen.ai/blog?id=qwen3.8",
      "SLAKE": "https://qwen.ai/blog?id=qwen3.8",
      "MedXpertQA-MM": "https://qwen.ai/blog?id=qwen3.8",
      "PMC-VQA": "https://qwen.ai/blog?id=qwen3.8",
      "OSWorld-Verified": "https://qwen.ai/blog?id=qwen3.8",
      "OSWorld 2.0 (binary)": "https://qwen.ai/blog?id=qwen3.8",
      "OSWorld 2.0 (partial)": "https://qwen.ai/blog?id=qwen3.8",
      "ScreenSpot Pro": "https://qwen.ai/blog?id=qwen3.8",
      "WebArena-Verified": "https://qwen.ai/blog?id=qwen3.8",
      "AndroidWorld": "https://qwen.ai/blog?id=qwen3.8",
      "MobileWorld": "https://qwen.ai/blog?id=qwen3.8",
      "ClawEval-MM (pass@3)": "https://qwen.ai/blog?id=qwen3.8",
      "ClawEval-MM (avg)": "https://qwen.ai/blog?id=qwen3.8",
      "Vision2Web": "https://qwen.ai/blog?id=qwen3.8",
      "QwenBlenderBench": "https://qwen.ai/blog?id=qwen3.8",
      "Parametric CAD Bench": "https://qwen.ai/blog?id=qwen3.8",
      "RecreationBench": "https://qwen.ai/blog?id=qwen3.8",
      "PresentBench": "https://qwen.ai/blog?id=qwen3.8",
      "CharXiv RQ (w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "CharXiv RQ (w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "OmniDocBench 1.5": "https://qwen.ai/blog?id=qwen3.8",
      "OCR-Bench-V2 (EN)": "https://qwen.ai/blog?id=qwen3.8",
      "OCR-Bench-V2 (ZH)": "https://qwen.ai/blog?id=qwen3.8",
      "CC-OCR-Bench-V2": "https://qwen.ai/blog?id=qwen3.8",
      "MTVQA-Test": "https://qwen.ai/blog?id=qwen3.8",
      "MADQA": "https://qwen.ai/blog?id=qwen3.8",
      "QwenVisualOffice": "https://qwen.ai/blog?id=qwen3.8",
      "RealWorldQA": "https://qwen.ai/blog?id=qwen3.8",
      "ERQA": "https://qwen.ai/blog?id=qwen3.8",
      "LingoQA": "https://qwen.ai/blog?id=qwen3.8",
      "SURDS": "https://qwen.ai/blog?id=qwen3.8",
      "SimpleVQA": "https://qwen.ai/blog?id=qwen3.8",
      "WorldVQA": "https://qwen.ai/blog?id=qwen3.8",
      "MMStar": "https://qwen.ai/blog?id=qwen3.8",
      "PerceptionBench": "https://qwen.ai/blog?id=qwen3.8",
      "CountQA": "https://qwen.ai/blog?id=qwen3.8",
      "RefAdv-S": "https://qwen.ai/blog?id=qwen3.8",
      "Dense200": "https://qwen.ai/blog?id=qwen3.8",
      "COCO": "https://qwen.ai/blog?id=qwen3.8",
      "VisFactor": "https://qwen.ai/blog?id=qwen3.8",
      "VLMsAreBiased": "https://qwen.ai/blog?id=qwen3.8",
      "VideoMME (w/ subtitles)": "https://qwen.ai/blog?id=qwen3.8",
      "VideoMME v2 (w/ subtitles)": "https://qwen.ai/blog?id=qwen3.8",
      "VideoMMMU": "https://qwen.ai/blog?id=qwen3.8",
      "MMVU": "https://qwen.ai/blog?id=qwen3.8",
      "MLVU (M-Avg)": "https://qwen.ai/blog?id=qwen3.8",
      "TVBench": "https://qwen.ai/blog?id=qwen3.8",
      "LVBench": "https://qwen.ai/blog?id=qwen3.8",
      "LVBench (w/ memory)": "https://qwen.ai/blog?id=qwen3.8",
      "EgoLife (w/ memory)": "https://qwen.ai/blog?id=qwen3.8",
      "VideoDR (w/ search)": "https://qwen.ai/blog?id=qwen3.8"
    },
    "benchmark_note": "qwen.ai Qwen3.8 발표 블로그 멀티모달 표의 Qwen3.7-Plus 열 전체 수치입니다(본문 표가 3.7-Plus 열을 제공하는 유일한 1차 출처). 쌍값은 각주 기준으로 분리: MathVision·BabyVision·CharXiv RQ·ZeroBench는 w/o CI / w/ CI, OSWorld 2.0은 binary / partial, ClawEval-MM은 Pass@3 / 평균. MathVision w/ CI 열은 '--'(미공개).",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-067",
    "name": "Nemotron 3 Ultra",
    "date": "2026-06-04",
    "sortDate": "2026-06-04",
    "month": "2026-06",
    "monthName": "June",
    "company": "NVIDIA",
    "family": "Nemotron 3",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "550B total / 55B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model title is Nemotron-3-Ultra-550B-A55B.",
    "benchmarks": {
      "Terminal-Bench 2.1": 56.4,
      "SWE-bench Verified": 70.7,
      "SWE-bench Multilingual": 67.7,
      "LiveCodeBench v6": 89.0,
      "GPQA Diamond": 87.0,
      "MMLU-Pro": 86.8
    },
    "official_id": "nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16"
      }
    ],
    "release_date_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
    "parameter_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "SWE-bench Verified": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "SWE-bench Multilingual": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "LiveCodeBench v6": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "GPQA Diamond": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
      "MMLU-Pro": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16"
    },
    "benchmark_note": "NVIDIA 공식 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-068",
    "name": "Claude Fable 5",
    "date": "2026-06-09",
    "sortDate": "2026-06-09",
    "month": "2026-06",
    "monthName": "June",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 80.3,
      "FrontierCode (Diamond, xhigh)": 29.3,
      "GDP.pdf (no tools)": 29.8,
      "Blueprint-Bench 2": 38.6,
      "AutomationBench": 17.4,
      "OSWorld-Verified": 85.0,
      "Legal Agent Benchmark": 13.3,
      "Humanity's Last Exam (without tools)": 59.0,
      "Humanity's Last Exam (w/ tools)": 64.5,
      "BioMysteryBench (hard)": 46.1,
      "BioMysteryBench (human solved)": 83.9,
      "Terminal-Bench 2.1": 88.0,
      "ExploitBench (Cap%)": 78.0,
      "HealthBench Professional": 66.0,
      "Terminal-Bench Science 0.1": 24.7,
      "Terminal-Bench 4.0": 42.0,
      "OSWorld 2.0 (partial)": 72.9,
      "OSWorld 2.0 (strict)": 36.1,
      "AutomationBench (Fable 5.1 시점 재측정)": 17.1,
      "CursorBench 3.2.0": 70.5
    },
    "official_id": "claude-fable-5-mythos-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
      },
      {
        "label": "Claude Fable 5.1 제품 페이지 비교표",
        "url": "https://www.anthropic.com/claude/fable"
      }
    ],
    "release_date_source": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    "parameter_source": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    "benchmark_sources": {
      "SWE-bench Pro": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "FrontierCode (Diamond, xhigh)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "GDP.pdf (no tools)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Blueprint-Bench 2": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "AutomationBench": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "OSWorld-Verified": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Legal Agent Benchmark": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Humanity's Last Exam (without tools)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Humanity's Last Exam (w/ tools)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "BioMysteryBench (hard)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "BioMysteryBench (human solved)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Terminal-Bench 2.1": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "ExploitBench (Cap%)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "HealthBench Professional": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Terminal-Bench Science 0.1": "https://www.anthropic.com/claude/fable",
      "Terminal-Bench 4.0": "https://www.anthropic.com/claude/fable",
      "OSWorld 2.0 (partial)": "https://www.anthropic.com/claude/fable",
      "OSWorld 2.0 (strict)": "https://www.anthropic.com/claude/fable",
      "AutomationBench (Fable 5.1 시점 재측정)": "https://www.anthropic.com/claude/fable",
      "CursorBench 3.2.0": "https://www.anthropic.com/claude/fable"
    },
    "benchmark_note": "Anthropic 공식 발표표 기준. 표는 Mythos 5/Fable 5 중 높은 값을 표시하며 대부분 1~3pp 차이. 별표(*) 항목(HLE 2종·BioMysteryBench 2종·Terminal-Bench 2.1·ExploitBench·HealthBench Professional)은 세이프가드 차단으로 Fable 5 단독 점수가 Opus 4.8 수준에 가까워져 큰 차이가 나며, 사실상 Mythos 5(세이프가드 해제) 수치. GDPval-AA 1932는 Elo형 척도라 % 점수표에서 제외. Fable 5.1 공식 비교표의 Fable 5 재측정 컬럼 병기: HLE는 57.8(no tools)/63.8(w tools)로 런칭표와 ±1~2pp 차이(세이프가드 개입 영향), OSWorld 2.0은 2026-08 태스크 릴리스 기준. GDPval-AA v2 1723은 Elo형이라 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-069",
    "name": "Claude Mythos 5",
    "date": "2026-06-09",
    "sortDate": "2026-06-09",
    "month": "2026-06",
    "monthName": "June",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "restricted / vetted users",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 80.3,
      "FrontierCode (Diamond, xhigh)": 29.3,
      "GDP.pdf (no tools)": 29.8,
      "Blueprint-Bench 2": 38.6,
      "AutomationBench": 17.4,
      "OSWorld-Verified": 85.0,
      "Legal Agent Benchmark": 13.3,
      "Humanity's Last Exam (without tools)": 59.0,
      "Humanity's Last Exam (w/ tools)": 64.5,
      "BioMysteryBench (hard)": 46.1,
      "BioMysteryBench (human solved)": 83.9,
      "Terminal-Bench 2.1": 88.0,
      "ExploitBench (Cap%)": 78.0,
      "HealthBench Professional": 66.0
    },
    "official_id": "claude-fable-5-mythos-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
      }
    ],
    "release_date_source": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    "parameter_source": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    "benchmark_sources": {
      "SWE-bench Pro": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "FrontierCode (Diamond, xhigh)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "GDP.pdf (no tools)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Blueprint-Bench 2": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "AutomationBench": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "OSWorld-Verified": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Legal Agent Benchmark": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Humanity's Last Exam (without tools)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Humanity's Last Exam (w/ tools)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "BioMysteryBench (hard)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "BioMysteryBench (human solved)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "Terminal-Bench 2.1": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "ExploitBench (Cap%)": "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      "HealthBench Professional": "https://www.anthropic.com/news/claude-fable-5-mythos-5"
    },
    "benchmark_note": "Anthropic 공식 발표표의 'Mythos 5 / Fable 5' 공동 컬럼. 표는 두 모델 중 높은 값을 표시(비별표 항목 1~3pp 이내). 별표(*) 항목(HLE·BioMysteryBench·Terminal-Bench 2.1·ExploitBench·HealthBench Professional)은 Fable 5의 세이프가드 폴백으로 격차가 커 사실상 Mythos 5 수치에 가까움. GDPval-AA 1932는 Elo형 척도라 % 점수표에서 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-070",
    "name": "North Mini Code",
    "date": "2026-06-09",
    "sortDate": "2026-06-09",
    "month": "2026-06",
    "monthName": "June",
    "company": "Cohere",
    "family": "North",
    "type": "LLM / coding",
    "category": "LLM",
    "status": "GA",
    "parameters": "30B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal-Bench v2": 36.0,
      "Terminal-Bench Hard": 31.1,
      "SWE-Bench Verified": 67.6,
      "SWE-Bench Pro": 40.2,
      "SciCode": 38.2,
      "LiveCodeBench v6": 70.3
    },
    "official_id": "CohereLabs/North-Mini-Code-1.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0"
      }
    ],
    "release_date_source": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0",
    "parameter_source": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0",
    "benchmark_sources": {
      "Terminal-Bench v2": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0",
      "Terminal-Bench Hard": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0",
      "SWE-Bench Verified": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0",
      "SWE-Bench Pro": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0",
      "SciCode": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0",
      "LiveCodeBench v6": "https://huggingface.co/CohereLabs/North-Mini-Code-1.0"
    },
    "benchmark_note": "공식 HF 모델 카드 벤치마크 이미지의 North Mini Code 열 값.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-071",
    "name": "Kimi K2.7 Code",
    "date": "2026-06-12",
    "sortDate": "2026-06-12",
    "month": "2026-06",
    "monthName": "June",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM / coding",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Code Multimodal MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Kimi Code Bench v2": 62.0,
      "Program Bench": 53.6,
      "MLS Bench Lite": 35.1,
      "Kimi Claw 24/7 Bench": 46.9,
      "MCP Atlas": 76.0,
      "MCP Mark Verified": 81.1
    },
    "official_id": "moonshotai/Kimi-K2.7-Code",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/moonshotai/Kimi-K2.7-Code"
      }
    ],
    "release_date_source": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
    "parameter_source": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
    "benchmark_sources": {
      "Kimi Code Bench v2": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
      "Program Bench": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
      "MLS Bench Lite": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
      "Kimi Claw 24/7 Bench": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
      "MCP Atlas": "https://huggingface.co/moonshotai/Kimi-K2.7-Code",
      "MCP Mark Verified": "https://huggingface.co/moonshotai/Kimi-K2.7-Code"
    },
    "benchmark_note": "공식 HF 모델 카드 비교표의 Kimi K2.7 Code 열 값.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-072",
    "name": "Ling-2.6-1T",
    "date": "2026-06-13~21",
    "sortDate": "2026-06-13",
    "month": "2026-06",
    "monthName": "June",
    "company": "Ant Group / InclusionAI",
    "family": "Ling",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "1T total (active count 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The official card names the 1T family but does not state active parameters.",
    "benchmarks": {
      "AIME26": 87.4,
      "SWE-bench Verified (openhands)": 72.2,
      "PinchBench (Avg Score)": 87.4,
      "Claw-Eval (pass^3)": 51.0,
      "BFCL-V4": 70.64,
      "TAU2-Bench": 78.36,
      "IFBench": 57.0,
      "MRCR (16K-256K)": 80.37
    },
    "official_id": "inclusionAI/Ling-2.6-1T",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ling-2.6-1T"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
    "parameter_source": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
    "benchmark_sources": {
      "AIME26": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
      "SWE-bench Verified (openhands)": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
      "PinchBench (Avg Score)": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
      "Claw-Eval (pass^3)": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
      "BFCL-V4": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
      "TAU2-Bench": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
      "IFBench": "https://huggingface.co/inclusionAI/Ling-2.6-1T",
      "MRCR (16K-256K)": "https://huggingface.co/inclusionAI/Ling-2.6-1T"
    },
    "benchmark_note": "공식 HF 모델 카드 벤치마크 차트 이미지의 Non-Reasoning 막대 값. 카드의 AAII(Artificial Analysis Intelligence Index) 차트는 제3자 지표라 제외.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-073",
    "name": "Ring-2.6-1T",
    "date": "2026-06-13~21",
    "sortDate": "2026-06-13",
    "month": "2026-06",
    "monthName": "June",
    "company": "Ant Group / InclusionAI",
    "family": "Ring",
    "type": "reasoning LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "1T total (active count 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "high",
      "xhigh"
    ],
    "availability": "",
    "note": "The official card names the 1T family but does not state active parameters.",
    "benchmarks": {
      "GPQA Diamond": 88.27,
      "AIME 2026": 95.83,
      "τ²-Telecom": 95.32
    },
    "official_id": "inclusionAI/Ring-2.6-1T",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ring-2.6-1T"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ring-2.6-1T",
    "parameter_source": "https://huggingface.co/inclusionAI/Ring-2.6-1T",
    "benchmark_sources": {
      "GPQA Diamond": "https://huggingface.co/inclusionAI/Ring-2.6-1T",
      "AIME 2026": "https://huggingface.co/inclusionAI/Ring-2.6-1T",
      "τ²-Telecom": "https://huggingface.co/inclusionAI/Ring-2.6-1T"
    },
    "benchmark_note": "Ring-2.6-1T 공식 모델 카드 자기 보고 수치입니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-074",
    "name": "HyperCLOVA X SEED 4B",
    "date": "2026-06-15",
    "sortDate": "2026-06-15",
    "month": "2026-06",
    "monthName": "June",
    "company": "NAVER Cloud",
    "family": "HyperCLOVA X SEED",
    "type": "MLLM / lightweight omni",
    "category": "Omni",
    "status": "GA",
    "parameters": "4B backbone (8B teacher에서 pruning/distillation)",
    "architecture": "Lightweight Omni (Edge/Defense)",
    "modalities": [
      "language",
      "vision",
      "audio"
    ],
    "focus": [
      "edge / on-device / defense environments"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The 8B figure is the teacher/reference model, not the released SEED checkpoint.",
    "benchmarks": {
      "WeMath": 66.6,
      "MATH-Vision": 55.6,
      "KoNET": 74.6,
      "KoNET (GED)": 92.6,
      "Pix2Struct-Ko": 83.0,
      "HTMLBench-Ko": 54.6,
      "VideoChatGPT-Ko": 2.72,
      "DocVQA": 92.9,
      "InfoVQA": 74.0,
      "ScreenQA": 92.3,
      "AI2D": 83.7,
      "ScienceQA": 96.6,
      "POPE": 88.8,
      "Video-MME": 60.6,
      "VideoMMMU": 55.0,
      "LongVideoBench": 57.5,
      "AV-SpeakerBench": 42.2,
      "GSM8K": 95.0,
      "AIME 2025": 60.6,
      "GPQA": 54.0,
      "IFEval": 77.8
    },
    "official_id": "pressReleasesDetail?seq=10034395",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.navercorp.com/media/pressReleasesDetail?seq=10034395"
      },
      {
        "label": "NAVER CLOVA 공식 기술 블로그",
        "url": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D"
      }
    ],
    "release_date_source": "https://www.navercorp.com/media/pressReleasesDetail?seq=10034395",
    "parameter_source": "https://www.navercorp.com/media/pressReleasesDetail?seq=10034395",
    "benchmark_sources": {
      "WeMath": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "MATH-Vision": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "KoNET": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "KoNET (GED)": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "Pix2Struct-Ko": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "HTMLBench-Ko": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "VideoChatGPT-Ko": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "DocVQA": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "InfoVQA": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "ScreenQA": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "AI2D": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "ScienceQA": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "POPE": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "Video-MME": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "VideoMMMU": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "LongVideoBench": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "AV-SpeakerBench": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "GSM8K": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "AIME 2025": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "GPQA": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D",
      "IFEval": "https://clova.ai/en/tech-blog/seeing-and-hearing-the-field-for-ourselves-building-our-own-encoders-and-hyperclova-x-seed-4b%7D"
    },
    "benchmark_note": "NAVER CLOVA 공식 기술 블로그에 인쇄된 HyperCLOVA X SEED 4B 절대 수치 전체입니다. 본문의 대비폭(8B Omni 대비 +51.7 등)과 MM-Vet(+8.2 델타만 공개)은 절대 수치가 아니라 미수록. VideoChatGPT-Ko 2.72는 5점 척도 원점수라 그대로 기록.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-075",
    "name": "GLM-5.2",
    "date": "2026-06-16",
    "sortDate": "2026-06-16",
    "month": "2026-06",
    "monthName": "June",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 카드에는 753B model size만 표기; 총/활성 파라미터 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "공식 카드의 model size를 총 파라미터 수로 간주하지 않습니다.",
    "benchmarks": {
      "AIME 2026": 99.2,
      "GPQA Diamond": 91.2,
      "SWE-bench Pro": 62.1,
      "Terminal-Bench 2.1": 81.0,
      "NL2Repo": 48.9,
      "DeepSWE": 46.2
    },
    "official_id": "zai-org/GLM-5.2",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5.2"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5.2",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5.2",
    "benchmark_sources": {
      "AIME 2026": "https://huggingface.co/zai-org/GLM-5.2",
      "GPQA Diamond": "https://huggingface.co/zai-org/GLM-5.2",
      "SWE-bench Pro": "https://huggingface.co/zai-org/GLM-5.2",
      "Terminal-Bench 2.1": "https://huggingface.co/zai-org/GLM-5.2",
      "NL2Repo": "https://huggingface.co/zai-org/GLM-5.2",
      "DeepSWE": "https://huggingface.co/zai-org/GLM-5.2"
    },
    "benchmark_note": "GLM-5.2 공식 모델 카드 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-076",
    "name": "LongCat-2.0",
    "date": "2026-06-30",
    "sortDate": "2026-06-30",
    "month": "2026-06",
    "monthName": "June",
    "company": "Meituan",
    "family": "LongCat",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "1.6T total / ~48B average active (MoE; 33–56B dynamic)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Multilingual": 77.3,
      "SWE-bench Pro": 59.5,
      "Terminal-Bench 2.1": 70.8,
      "BrowseComp": 79.9,
      "GPQA Diamond": 88.9
    },
    "official_id": "meituan-longcat/LongCat-2.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/meituan-longcat/LongCat-2.0"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://tech.meituan.com/2026/06/30/LongCat2.0.html"
      }
    ],
    "release_date_source": "https://tech.meituan.com/2026/06/30/LongCat2.0.html",
    "parameter_source": "https://tech.meituan.com/2026/06/30/LongCat2.0.html",
    "benchmark_sources": {
      "SWE-bench Multilingual": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "SWE-bench Pro": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "Terminal-Bench 2.1": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "BrowseComp": "https://huggingface.co/meituan-longcat/LongCat-2.0",
      "GPQA Diamond": "https://huggingface.co/meituan-longcat/LongCat-2.0"
    },
    "benchmark_note": "LongCat-2.0 공식 모델 카드 수치입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-077",
    "name": "Claude Sonnet 5",
    "date": "2026-06-30",
    "sortDate": "2026-06-30",
    "month": "2026-06",
    "monthName": "June",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 63.2,
      "Terminal-Bench 2.1": 80.4,
      "Humanity's Last Exam (without tools)": 43.2,
      "Humanity's Last Exam (w/ tools)": 57.4,
      "OSWorld-Verified": 81.2
    },
    "official_id": "claude-sonnet-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/news/claude-sonnet-5"
      }
    ],
    "release_date_source": "https://www.anthropic.com/news/claude-sonnet-5",
    "parameter_source": "https://www.anthropic.com/news/claude-sonnet-5",
    "benchmark_sources": {
      "SWE-bench Pro": "https://www.anthropic.com/news/claude-sonnet-5",
      "Terminal-Bench 2.1": "https://www.anthropic.com/news/claude-sonnet-5",
      "Humanity's Last Exam (without tools)": "https://www.anthropic.com/news/claude-sonnet-5",
      "Humanity's Last Exam (w/ tools)": "https://www.anthropic.com/news/claude-sonnet-5",
      "OSWorld-Verified": "https://www.anthropic.com/news/claude-sonnet-5"
    },
    "benchmark_note": "Anthropic 공식 발표표(Sonnet 5 / Sonnet 4.6 / Opus 4.8 참고 컬럼). GDPval-AA v2 1618은 Elo형 척도라 % 점수표에서 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-078",
    "name": "Laguna XS 2.1",
    "date": "2026-07-02",
    "sortDate": "2026-07-02",
    "month": "2026-07",
    "monthName": "July",
    "company": "Poolside",
    "family": "Laguna",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "33B total / 3B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 70.9,
      "SWE-bench Multilingual": 63.1,
      "SWE-bench Pro": 47.6,
      "Terminal-Bench 2.0": 37.5
    },
    "official_id": "poolside/Laguna-XS-2.1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/poolside/Laguna-XS-2.1"
      }
    ],
    "release_date_source": "https://huggingface.co/poolside/Laguna-XS-2.1",
    "parameter_source": "https://huggingface.co/poolside/Laguna-XS-2.1",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/poolside/Laguna-XS-2.1",
      "SWE-bench Multilingual": "https://huggingface.co/poolside/Laguna-XS-2.1",
      "SWE-bench Pro": "https://huggingface.co/poolside/Laguna-XS-2.1",
      "Terminal-Bench 2.0": "https://huggingface.co/poolside/Laguna-XS-2.1"
    },
    "benchmark_note": "Poolside 공식 모델 카드에 기재된 자기 평가 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-079",
    "name": "Hy3",
    "date": "2026-07-06",
    "sortDate": "2026-07-06",
    "month": "2026-07",
    "monthName": "July",
    "company": "Tencent",
    "family": "Hy / Hunyuan",
    "type": "LLM",
    "category": "LLM",
    "status": "Stable",
    "parameters": "295B total / 21B active + 3.8B MTP (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "256K",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face / GitHub)",
    "note": "",
    "benchmarks": {
      "SWE-bench Multilingual": 75.8,
      "SWE-bench Verified": 78.0,
      "SWE-bench Pro": 57.9,
      "Terminal-Bench 2.1": 71.7,
      "NL2repo": 45.6,
      "DeepSWE": 28.0,
      "Hy-Backend 2.0 (internal)": 25.0,
      "Hy-SWE Max (internal)": 49.0,
      "Hy-CompanyBench (internal)": 41.7,
      "BrowseComp": 84.2,
      "WideSearch": 76.4,
      "DeepSearchQA": 91.0,
      "MCP Atlas (public)": 79.1,
      "Toolathlon": 48.5,
      "Apex-Agent (pass@1)": 25.6,
      "ClawEval (pass^3)": 68.5,
      "WildClawBench (35, text-only)": 53.6,
      "SkillsBench (79, text-only)": 55.3,
      "e-bench (internal)": 50.2,
      "Hy-FinModelBench (internal)": 69.0,
      "ProdBench (internal, pass^3)": 23.0,
      "Hy-SkillsWorld (internal)": 45.8,
      "HLE (w/ tools, text-only)": 53.2,
      "Hy-Euler pro (w/ tools, internal)": 24.2,
      "GPQA Diamond": 90.4,
      "HLE (no tools, text-only)": 37.0,
      "FrontierScience-Research": 21.3,
      "FrontierScience-Olympiad": 74.8,
      "USAMO 2026": 72.0,
      "MathArena Apex": 38.7,
      "ArxivMath": 52.2,
      "HorizonMath (pass@12)": 7.1,
      "Hy-Math (internal)": 60.9,
      "PHYBench": 77.4,
      "CMT-Benchmark": 37.8,
      "IMOAnswerBench": 90.0,
      "SuperChem": 54.9,
      "CL-bench": 23.8,
      "CL-bench life": 17.0
    },
    "official_id": "tencent/Hy3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/tencent/Hy3"
      }
    ],
    "release_date_source": "https://huggingface.co/tencent/Hy3",
    "parameter_source": "https://huggingface.co/tencent/Hy3",
    "benchmark_sources": {
      "SWE-bench Multilingual": "https://huggingface.co/tencent/Hy3",
      "SWE-bench Verified": "https://huggingface.co/tencent/Hy3",
      "SWE-bench Pro": "https://huggingface.co/tencent/Hy3",
      "Terminal-Bench 2.1": "https://huggingface.co/tencent/Hy3",
      "NL2repo": "https://huggingface.co/tencent/Hy3",
      "DeepSWE": "https://huggingface.co/tencent/Hy3",
      "Hy-Backend 2.0 (internal)": "https://huggingface.co/tencent/Hy3",
      "Hy-SWE Max (internal)": "https://huggingface.co/tencent/Hy3",
      "Hy-CompanyBench (internal)": "https://huggingface.co/tencent/Hy3",
      "BrowseComp": "https://huggingface.co/tencent/Hy3",
      "WideSearch": "https://huggingface.co/tencent/Hy3",
      "DeepSearchQA": "https://huggingface.co/tencent/Hy3",
      "MCP Atlas (public)": "https://huggingface.co/tencent/Hy3",
      "Toolathlon": "https://huggingface.co/tencent/Hy3",
      "Apex-Agent (pass@1)": "https://huggingface.co/tencent/Hy3",
      "ClawEval (pass^3)": "https://huggingface.co/tencent/Hy3",
      "WildClawBench (35, text-only)": "https://huggingface.co/tencent/Hy3",
      "SkillsBench (79, text-only)": "https://huggingface.co/tencent/Hy3",
      "e-bench (internal)": "https://huggingface.co/tencent/Hy3",
      "Hy-FinModelBench (internal)": "https://huggingface.co/tencent/Hy3",
      "ProdBench (internal, pass^3)": "https://huggingface.co/tencent/Hy3",
      "Hy-SkillsWorld (internal)": "https://huggingface.co/tencent/Hy3",
      "HLE (w/ tools, text-only)": "https://huggingface.co/tencent/Hy3",
      "Hy-Euler pro (w/ tools, internal)": "https://huggingface.co/tencent/Hy3",
      "GPQA Diamond": "https://huggingface.co/tencent/Hy3",
      "HLE (no tools, text-only)": "https://huggingface.co/tencent/Hy3",
      "FrontierScience-Research": "https://huggingface.co/tencent/Hy3",
      "FrontierScience-Olympiad": "https://huggingface.co/tencent/Hy3",
      "USAMO 2026": "https://huggingface.co/tencent/Hy3",
      "MathArena Apex": "https://huggingface.co/tencent/Hy3",
      "ArxivMath": "https://huggingface.co/tencent/Hy3",
      "HorizonMath (pass@12)": "https://huggingface.co/tencent/Hy3",
      "Hy-Math (internal)": "https://huggingface.co/tencent/Hy3",
      "PHYBench": "https://huggingface.co/tencent/Hy3",
      "CMT-Benchmark": "https://huggingface.co/tencent/Hy3",
      "IMOAnswerBench": "https://huggingface.co/tencent/Hy3",
      "SuperChem": "https://huggingface.co/tencent/Hy3",
      "CL-bench": "https://huggingface.co/tencent/Hy3",
      "CL-bench life": "https://huggingface.co/tencent/Hy3"
    },
    "benchmark_note": "공식 HF 모델 카드 benchmark-appendix 표의 Hy3 열 값 전수 수록(사내 internal 지표·텍스트전용 부분집합 조건 포함해 명기). AA-LCR 73.4는 제3자 지표라 제외. 본문 차트는 동일 값의 시각화.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-137",
    "name": "GPT-Live-1",
    "date": "2026-07-08",
    "sortDate": "2026-07-08",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-Live",
    "type": "MLLM / omni (full-duplex voice)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Full-duplex voice model (continuous listen + speak), delegates search/reasoning to GPT-5.5",
    "modalities": [
      "audio",
      "text"
    ],
    "focus": [
      "Realtime voice",
      "Full-duplex dialogue",
      "Delegated reasoning"
    ],
    "open_weights": false,
    "license": "Proprietary (ChatGPT Voice)",
    "context": "",
    "languages": "",
    "variants": [
      "GPT-Live-1 instant",
      "GPT-Live-1 Medium",
      "GPT-Live-1 High"
    ],
    "reasoning_effort": [
      "instant",
      "medium",
      "high (delegated GPT-5.5 effort)"
    ],
    "availability": "ChatGPT Voice 전 세계 롤아웃(Go/Plus/Pro 기본 음성), API는 발표 당시 예정",
    "note": "ASR→LLM→TTS 캐스케이드가 아닌 단일 full-duplex 음성 모델이라 'ASR/TTS 음성 전용 제외' 규정에 해당하지 않는다고 판단해 수록했습니다. 검색·추론은 백그라운드에서 GPT-5.5에 위임합니다. 공식 발표문·시스템 카드에 수치 점수는 없고 인간 평점 선호도(Advanced Voice Mode 대비)와 내부 τ3-Voice Telecom 결과만 텍스트로 명시되어 점수 칸은 비워 두었습니다.",
    "benchmarks": {
      "Voice-native production: sexual": 97.0,
      "Voice-native production: illicit behavior": 95.0,
      "Voice-native production: mental health": 90.0,
      "Voice-native production: personal data": 96.0,
      "Voice-native production: emotional reliance": 82.0,
      "Voice-native production: self-harm": 97.0,
      "Voice-native synthetic: sexual": 95.0,
      "Voice-native synthetic: illicit behavior": 98.0,
      "Voice-native synthetic: mental health": 85.0,
      "Voice-native synthetic: personal data": 98.0,
      "Voice-native synthetic: emotional reliance": 93.0,
      "Voice-native synthetic: self-harm": 96.0,
      "Voice-native synthetic: hate": 100.0,
      "Voice-native synthetic: gore": 93.0
    },
    "official_id": "introducing-gpt-live",
    "official_sources": [
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/introducing-gpt-live/"
      },
      {
        "label": "GPT-Live System Card",
        "url": "https://deploymentsafety.openai.com/gpt-live"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-live/",
    "parameter_source": "https://openai.com/index/introducing-gpt-live/",
    "benchmark_sources": {
      "Voice-native production: sexual": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: illicit behavior": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: mental health": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: personal data": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: emotional reliance": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: self-harm": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: sexual": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: illicit behavior": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: mental health": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: personal data": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: emotional reliance": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: self-harm": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: hate": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: gore": "https://deploymentsafety.openai.com/gpt-live"
    },
    "benchmark_note": "GPT-Live 시스템 카드의 음성 네이티브 안전 평가(2026-08-04 재측정 반영본, not_unsafe 0~1 → % 환산)입니다. 능력 벤치마크는 카드에 없습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-138",
    "name": "GPT-Live-1 mini",
    "date": "2026-07-08",
    "sortDate": "2026-07-08",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-Live",
    "type": "MLLM / omni (full-duplex voice)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Full-duplex voice model (small tier), delegates to GPT-5.5 Instant",
    "modalities": [
      "audio",
      "text"
    ],
    "focus": [
      "Realtime voice",
      "Full-duplex dialogue"
    ],
    "open_weights": false,
    "license": "Proprietary (ChatGPT Voice)",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "ChatGPT Voice Free 사용자 기본 음성",
    "note": "GPT-Live-1과 같은 발표(2026-07-08)로 공개된 소형 티어이며 ChatGPT Voice Free 기본 모델입니다. GPT-Live-1 (instant)와 마찬가지로 백그라운드 추론에 GPT-5.5 Instant를 사용합니다. 공식 자료에 수치 점수가 없습니다.",
    "benchmarks": {
      "Voice-native production: sexual": 92.0,
      "Voice-native production: illicit behavior": 91.0,
      "Voice-native production: mental health": 85.0,
      "Voice-native production: personal data": 96.0,
      "Voice-native production: emotional reliance": 78.0,
      "Voice-native production: self-harm": 95.0,
      "Voice-native synthetic: sexual": 95.0,
      "Voice-native synthetic: illicit behavior": 95.0,
      "Voice-native synthetic: mental health": 80.0,
      "Voice-native synthetic: personal data": 98.0,
      "Voice-native synthetic: emotional reliance": 87.0,
      "Voice-native synthetic: self-harm": 95.0,
      "Voice-native synthetic: hate": 99.0,
      "Voice-native synthetic: gore": 90.0
    },
    "official_id": "introducing-gpt-live",
    "official_sources": [
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/introducing-gpt-live/"
      },
      {
        "label": "GPT-Live System Card",
        "url": "https://deploymentsafety.openai.com/gpt-live"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-live/",
    "parameter_source": "https://openai.com/index/introducing-gpt-live/",
    "benchmark_sources": {
      "Voice-native production: sexual": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: illicit behavior": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: mental health": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: personal data": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: emotional reliance": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native production: self-harm": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: sexual": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: illicit behavior": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: mental health": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: personal data": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: emotional reliance": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: self-harm": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: hate": "https://deploymentsafety.openai.com/gpt-live",
      "Voice-native synthetic: gore": "https://deploymentsafety.openai.com/gpt-live"
    },
    "benchmark_note": "GPT-Live 시스템 카드의 음성 네이티브 안전 평가(2026-08-04 재측정 반영본, not_unsafe 0~1 → % 환산)입니다. 능력 벤치마크는 카드에 없습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-080",
    "name": "Muse Spark 1.1",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "Meta",
    "family": "Muse Spark",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal-Bench 2.1 (mini-swe-agent)": 76.2,
      "DeepSWE v1.1 (mini-swe-agent)": 53.0,
      "Meta Internal Coding Bench": 68.3
    },
    "official_id": "introducing-muse-spark-meta-model-api",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/"
      },
      {
        "label": "Muse Spark 1.2 발표 비교 차트",
        "url": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2"
      }
    ],
    "release_date_source": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/",
    "parameter_source": "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/",
    "benchmark_sources": {
      "Terminal-Bench 2.1 (mini-swe-agent)": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
      "DeepSWE v1.1 (mini-swe-agent)": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
      "Meta Internal Coding Bench": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2"
    },
    "benchmark_note": "Muse Spark 1.2 발표 비교 차트에 게시된 1.1 수치(xhigh, mini-swe-agent 하네스). Muse Spark 1.1 Evaluation Report는 안전·정향 평가(BioTIER·WMDP·AgentDojo·MASK 등) 중심으로 능력 점수표 미게시.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-081",
    "name": "GPT-5.6 Sol",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-5.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 64.6,
      "Terminal-Bench 2.1": 88.8,
      "BrowseComp": 90.4,
      "Agents' Last Exam": 52.7,
      "Management Consulting Tasks": 43.2,
      "Big Finance Bench": 53.0,
      "DeepSWE v1.1": 72.7,
      "HealthBench Professional": 60.5,
      "OSWorld 2.0": 62.6,
      "BenchCAD": 70.6,
      "BenchCAD (w/ Python tool)": 83.4,
      "Capture-the-Flag Challenges": 96.7,
      "SEC-Bench Pro": 71.2,
      "ExploitBench": 73.5,
      "ExploitGym": 33.7,
      "Internal Research Debugging Eval": 68.3,
      "KernelGen 1P": 61.1,
      "NanoGPT": 9.69,
      "PostTrainBench Lite": 50.3,
      "RSI Index": 57.9,
      "MMMU Pro (no tools)": 83.0,
      "MMMU Pro (w/ tools)": 84.6,
      "GPQA Diamond": 94.6,
      "FrontierMath Tier 1–3 (v2)": 89.0,
      "FrontierMath Tier 4 (v2)": 83.0,
      "AutomationBench": 18.1,
      "Toolathlon": 58.0,
      "MRCR v2 256K–512K (8-needle)": 91.5,
      "MRCR v2 512K–1M (8-needle)": 73.8,
      "GraphWalks BFS 256K": 90.7,
      "GraphWalks BFS 1M": 77.1,
      "ARC-AGI-3": 7.78
    },
    "official_id": "gpt-5-6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/gpt-5-6/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-5-6/",
    "parameter_source": "https://openai.com/index/gpt-5-6/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/gpt-5-6/",
      "Terminal-Bench 2.1": "https://openai.com/index/gpt-5-6/",
      "BrowseComp": "https://openai.com/index/gpt-5-6/",
      "Agents' Last Exam": "https://openai.com/index/gpt-5-6/",
      "Management Consulting Tasks": "https://openai.com/index/gpt-5-6/",
      "Big Finance Bench": "https://openai.com/index/gpt-5-6/",
      "DeepSWE v1.1": "https://openai.com/index/gpt-5-6/",
      "HealthBench Professional": "https://openai.com/index/gpt-5-6/",
      "OSWorld 2.0": "https://openai.com/index/gpt-5-6/",
      "BenchCAD": "https://openai.com/index/gpt-5-6/",
      "BenchCAD (w/ Python tool)": "https://openai.com/index/gpt-5-6/",
      "Capture-the-Flag Challenges": "https://openai.com/index/gpt-5-6/",
      "SEC-Bench Pro": "https://openai.com/index/gpt-5-6/",
      "ExploitBench": "https://openai.com/index/gpt-5-6/",
      "ExploitGym": "https://openai.com/index/gpt-5-6/",
      "Internal Research Debugging Eval": "https://openai.com/index/gpt-5-6/",
      "KernelGen 1P": "https://openai.com/index/gpt-5-6/",
      "NanoGPT": "https://openai.com/index/gpt-5-6/",
      "PostTrainBench Lite": "https://openai.com/index/gpt-5-6/",
      "RSI Index": "https://openai.com/index/gpt-5-6/",
      "MMMU Pro (no tools)": "https://openai.com/index/gpt-5-6/",
      "MMMU Pro (w/ tools)": "https://openai.com/index/gpt-5-6/",
      "GPQA Diamond": "https://openai.com/index/gpt-5-6/",
      "FrontierMath Tier 1–3 (v2)": "https://openai.com/index/gpt-5-6/",
      "FrontierMath Tier 4 (v2)": "https://openai.com/index/gpt-5-6/",
      "AutomationBench": "https://openai.com/index/gpt-5-6/",
      "Toolathlon": "https://openai.com/index/gpt-5-6/",
      "MRCR v2 256K–512K (8-needle)": "https://openai.com/index/gpt-5-6/",
      "MRCR v2 512K–1M (8-needle)": "https://openai.com/index/gpt-5-6/",
      "GraphWalks BFS 256K": "https://openai.com/index/gpt-5-6/",
      "GraphWalks BFS 1M": "https://openai.com/index/gpt-5-6/",
      "ARC-AGI-3": "https://openai.com/index/gpt-5-6/"
    },
    "benchmark_note": "공식 발표 페이지(openai.com/index/gpt-5-6)의 GPT-5.6 평가표 전체 수치로 보강했습니다. GDPval-AA v2(Elo)·Artificial Analysis Intelligence Index는 제3자 지표라 제외. Sol Pro 열은 미게재 — model-139 참조.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-082",
    "name": "GPT-5.6 Terra",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-5.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 63.4,
      "Terminal-Bench 2.1": 87.4,
      "BrowseComp": 87.5,
      "DeepSWE": 69.6
    },
    "official_id": "gpt-5-6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/gpt-5-6/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-5-6/",
    "parameter_source": "https://openai.com/index/gpt-5-6/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/gpt-5-6/",
      "Terminal-Bench 2.1": "https://openai.com/index/gpt-5-6/",
      "BrowseComp": "https://openai.com/index/gpt-5-6/",
      "DeepSWE": "https://openai.com/index/gpt-5-6/"
    },
    "benchmark_note": "OpenAI GPT-5.6 공식 발표의 Terra 열 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-083",
    "name": "GPT-5.6 Luna",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT-5.6",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 62.7,
      "Terminal-Bench 2.1": 84.7,
      "BrowseComp": 83.3,
      "DeepSWE": 67.2
    },
    "official_id": "gpt-5-6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/gpt-5-6/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-5-6/",
    "parameter_source": "https://openai.com/index/gpt-5-6/",
    "benchmark_sources": {
      "SWE-bench Pro": "https://openai.com/index/gpt-5-6/",
      "Terminal-Bench 2.1": "https://openai.com/index/gpt-5-6/",
      "BrowseComp": "https://openai.com/index/gpt-5-6/",
      "DeepSWE": "https://openai.com/index/gpt-5-6/"
    },
    "benchmark_note": "OpenAI GPT-5.6 공식 발표의 Luna 열 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-139",
    "name": "GPT-5.6 Sol Pro",
    "date": "2026-07-09",
    "sortDate": "2026-07-09",
    "month": "2026-07",
    "monthName": "July",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "ChatGPT Pro / Enterprise 전용",
    "note": "GPT-5.6 공식 발표문 Availability 절에 \"Pro and Enterprise users can also select GPT-5.6 Sol Pro\"로 명시된 상위 티어입니다. 발표문 벤치마크 표는 Sol / Sol Ultra / Terra / Luna 열로만 공개되어 Sol Pro 고유 점수는 기록하지 않았습니다. 표의 'Sol Ultra'는 별도 모델이 아니라 ultra effort(멀티에이전트) 설정으로 판단해 레코드로 만들지 않았습니다.",
    "benchmarks": {},
    "official_id": "gpt-5-6",
    "official_sources": [
      {
        "label": "OpenAI GPT-5.6 공식 발표문",
        "url": "https://openai.com/index/gpt-5-6/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-5-6/",
    "parameter_source": "https://openai.com/index/gpt-5-6/",
    "benchmark_sources": {},
    "benchmark_note": "공식 발표 페이지에 GPT-5.6 본체 평가만 게재, Sol Pro 고유 수치 없음 — 점수 미수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-084",
    "name": "Motif-3-Beta",
    "date": "2026-07-14",
    "sortDate": "2026-07-14",
    "month": "2026-07",
    "monthName": "July",
    "company": "Motif Technologies",
    "family": "Motif",
    "type": "LLM",
    "category": "LLM",
    "status": "Beta",
    "parameters": "~314B total / ~13B active (MoE)",
    "architecture": "Sparse MoE with GDLA/MTP",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "Motif-Technologies/Motif-3-Beta",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Motif-Technologies/Motif-3-Beta"
      }
    ],
    "release_date_source": "https://huggingface.co/Motif-Technologies/Motif-3-Beta",
    "parameter_source": "https://huggingface.co/Motif-Technologies/Motif-3-Beta",
    "benchmark_sources": {},
    "benchmark_note": "공식 HF 모델 카드가 AAII(Artificial Analysis Intelligence Index) 44만 게재 — 제3자 지표라 점수 미수록.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-085",
    "name": "Inkling",
    "date": "2026-07-15",
    "sortDate": "2026-07-15",
    "month": "2026-07",
    "monthName": "July",
    "company": "Thinking Machines Lab",
    "family": "Inkling",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "975B total / 41B active (MoE)",
    "architecture": "Native multimodal sparse MoE",
    "modalities": [
      "text",
      "image",
      "audio"
    ],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "HLE (text only)": 29.7,
      "HLE (w/ tools)": 46.0,
      "AIME 2026": 97.1,
      "GPQA Diamond": 87.2,
      "SWE-Bench Verified": 77.6,
      "SWE-Bench Pro (Public)": 54.3,
      "Terminal Bench 2.1 (best harness)": 63.8,
      "MCP Atlas": 76.0,
      "Tau 3 Banking": 23.7,
      "Toolathlon Verified": 45.5,
      "BrowseComp (w/ context mgmt)": 77.1,
      "SimpleQA Verified": 43.9,
      "IFBench": 79.8,
      "Global-MMLU-Lite": 88.7,
      "MMMU Pro (Standard 10)": 73.5,
      "CharXiv RQ": 78.1,
      "CharXiv RQ (w/ Python)": 82.0,
      "Audio MC": 56.6,
      "MMAU": 77.2,
      "VoiceBench": 91.4,
      "FORTRESS Adversarial": 78.0,
      "FORTRESS Benign": 95.9,
      "StrongREJECT": 98.6
    },
    "official_id": "inkling",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://thinkingmachines.ai/model-card/inkling/"
      }
    ],
    "release_date_source": "https://thinkingmachines.ai/model-card/inkling/",
    "parameter_source": "https://thinkingmachines.ai/model-card/inkling/",
    "benchmark_sources": {
      "HLE (text only)": "https://thinkingmachines.ai/model-card/inkling/",
      "HLE (w/ tools)": "https://thinkingmachines.ai/model-card/inkling/",
      "AIME 2026": "https://thinkingmachines.ai/model-card/inkling/",
      "GPQA Diamond": "https://thinkingmachines.ai/model-card/inkling/",
      "SWE-Bench Verified": "https://thinkingmachines.ai/model-card/inkling/",
      "SWE-Bench Pro (Public)": "https://thinkingmachines.ai/model-card/inkling/",
      "Terminal Bench 2.1 (best harness)": "https://thinkingmachines.ai/model-card/inkling/",
      "MCP Atlas": "https://thinkingmachines.ai/model-card/inkling/",
      "Tau 3 Banking": "https://thinkingmachines.ai/model-card/inkling/",
      "Toolathlon Verified": "https://thinkingmachines.ai/model-card/inkling/",
      "BrowseComp (w/ context mgmt)": "https://thinkingmachines.ai/model-card/inkling/",
      "SimpleQA Verified": "https://thinkingmachines.ai/model-card/inkling/",
      "IFBench": "https://thinkingmachines.ai/model-card/inkling/",
      "Global-MMLU-Lite": "https://thinkingmachines.ai/model-card/inkling/",
      "MMMU Pro (Standard 10)": "https://thinkingmachines.ai/model-card/inkling/",
      "CharXiv RQ": "https://thinkingmachines.ai/model-card/inkling/",
      "CharXiv RQ (w/ Python)": "https://thinkingmachines.ai/model-card/inkling/",
      "Audio MC": "https://thinkingmachines.ai/model-card/inkling/",
      "MMAU": "https://thinkingmachines.ai/model-card/inkling/",
      "VoiceBench": "https://thinkingmachines.ai/model-card/inkling/",
      "FORTRESS Adversarial": "https://thinkingmachines.ai/model-card/inkling/",
      "FORTRESS Benign": "https://thinkingmachines.ai/model-card/inkling/",
      "StrongREJECT": "https://thinkingmachines.ai/model-card/inkling/"
    },
    "benchmark_note": "공식 모델 카드 표의 Inkling 열 값. GDPVal-AA(Elo 1238)·AA Omniscience(2.1)은 제3자 지표라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-086",
    "name": "Grok 4.5",
    "date": "2026-07-16",
    "sortDate": "2026-07-16",
    "month": "2026-07",
    "monthName": "July",
    "company": "xAI / SpaceXAI",
    "family": "Grok",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [
      "coding",
      "agents",
      "knowledge work"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 64.7,
      "Terminal-Bench 2.1": 83.3,
      "DeepSWE": 53.0,
      "SWE-Marathon": 29.0
    },
    "official_id": "grok-4-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://x.ai/news/grok-4-5"
      }
    ],
    "release_date_source": "https://x.ai/news/grok-4-5",
    "parameter_source": "https://x.ai/news/grok-4-5",
    "benchmark_sources": {
      "SWE-bench Pro": "https://x.ai/news/grok-4-5",
      "Terminal-Bench 2.1": "https://x.ai/news/grok-4-5",
      "DeepSWE": "https://x.ai/news/grok-4-5",
      "SWE-Marathon": "https://x.ai/news/grok-4-5"
    },
    "benchmark_note": "xAI 공식 Grok 4.5 발표에서 Grok 열에 직접 제시한 수치만 수록했습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-087",
    "name": "Kimi K3",
    "date": "2026-07-17",
    "sortDate": "2026-07-17",
    "month": "2026-07",
    "monthName": "July",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "2.8T total / 104B active + 401M vision encoder (MoE)",
    "architecture": "Sparse MoE with KDA and gated MLA",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Long-Context Reasoning",
      "Multimodal",
      "Code & Math",
      "MoE Efficiency"
    ],
    "open_weights": true,
    "license": "Kimi K3 License (Open Weights)",
    "context": "1M (1,000,000 tokens)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face (moonshotai/Kimi-K3), Kimi API",
    "note": "Official Kimi K3 model summary reports 2.8T total, 104B active, and a 401M vision encoder.",
    "benchmarks": {
      "GPQA Diamond": 93.5,
      "DeepSWE": 67.5,
      "Terminal-Bench 2.1": 88.3,
      "FrontierSWE": 81.2,
      "SWE-Marathon": 42.0
    },
    "official_id": "moonshotai/Kimi-K3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/moonshotai/Kimi-K3"
      }
    ],
    "release_date_source": "https://huggingface.co/moonshotai/Kimi-K3",
    "parameter_source": "https://huggingface.co/moonshotai/Kimi-K3",
    "benchmark_sources": {
      "GPQA Diamond": "https://huggingface.co/moonshotai/Kimi-K3",
      "DeepSWE": "https://huggingface.co/moonshotai/Kimi-K3",
      "Terminal-Bench 2.1": "https://huggingface.co/moonshotai/Kimi-K3",
      "FrontierSWE": "https://huggingface.co/moonshotai/Kimi-K3",
      "SWE-Marathon": "https://huggingface.co/moonshotai/Kimi-K3"
    },
    "benchmark_note": "Kimi K3 공식 모델 카드 수치입니다. 카드가 외부 leaderboard를 인용한 행은 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-088",
    "name": "Qwen3.8-Max-Preview",
    "date": "2026-07-19",
    "sortDate": "2026-07-19",
    "month": "2026-07",
    "monthName": "July",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개 (preview ID에 별도 파라미터 공개 없음)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {},
    "official_id": "qwen3.8-max-preview",
    "official_sources": [
      {
        "label": "공식 API 문서",
        "url": "https://docs.qwencloud.com/token-plan/personal/token-plan-personal-overview"
      }
    ],
    "release_date_source": "https://docs.qwencloud.com/token-plan/personal/token-plan-personal-overview",
    "parameter_source": "https://docs.qwencloud.com/token-plan/personal/token-plan-personal-overview",
    "benchmark_sources": {},
    "benchmark_note": "프리뷰 시기의 별도 벤치마크 표는 미공개 — 정식 출시(8/3) 표 전체 수치는 model-097(Qwen3.8-Max)에 수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-089",
    "name": "Gemini 3.6 Flash",
    "date": "2026-07-21",
    "sortDate": "2026-07-21",
    "month": "2026-07",
    "monthName": "July",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-Bench Pro (Public)": 58.7,
      "DeepSWE v1.1": 49.0,
      "Terminal-bench 2.1 (Terminus-2)": 78.0,
      "MLE-Bench": 63.9,
      "OSWorld-Verified": 83.0,
      "CharXiv Reasoning (no tools)": 85.2,
      "CharXiv Reasoning (w/ tools)": 89.4,
      "GDM-MRCR v2 8-needle (128k avg)": 91.8,
      "GDM-MRCR v2 8-needle (1M pointwise)": 54.0
    },
    "official_id": "gemini-3-6-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-6-flash/"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
    "benchmark_sources": {
      "SWE-Bench Pro (Public)": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
      "DeepSWE v1.1": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
      "Terminal-bench 2.1 (Terminus-2)": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
      "MLE-Bench": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
      "OSWorld-Verified": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
      "CharXiv Reasoning (no tools)": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
      "CharXiv Reasoning (w/ tools)": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
      "GDM-MRCR v2 8-needle (128k avg)": "https://deepmind.google/models/model-cards/gemini-3-6-flash/",
      "GDM-MRCR v2 8-needle (1M pointwise)": "https://deepmind.google/models/model-cards/gemini-3-6-flash/"
    },
    "benchmark_note": "공식 모델 카드 평가 표의 Gemini 3.6 Flash 열 값. GDPVal-AA v2(Elo 1421)는 제외. 안전 평가는 증감폭(pp)이라 미수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-090",
    "name": "Gemini 3.5 Flash-Lite",
    "date": "2026-07-21",
    "sortDate": "2026-07-21",
    "month": "2026-07",
    "monthName": "July",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-Bench Pro (Public)": 54.2,
      "Terminal-bench 2.1 (Terminus-2)": 54.0,
      "MLE-Bench": 39.2,
      "OSWorld-Verified": 74.0,
      "CharXiv Reasoning (no tools)": 74.5,
      "CharXiv Reasoning (w/ tools)": 76.5,
      "GDM-MRCR v2 8-needle (128k avg)": 72.2,
      "GDM-MRCR v2 8-needle (1M pointwise)": 21.3
    },
    "official_id": "gemini-3-5-flash-lite",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
    "benchmark_sources": {
      "SWE-Bench Pro (Public)": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
      "Terminal-bench 2.1 (Terminus-2)": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
      "MLE-Bench": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
      "OSWorld-Verified": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
      "CharXiv Reasoning (no tools)": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
      "CharXiv Reasoning (w/ tools)": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
      "GDM-MRCR v2 8-needle (128k avg)": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
      "GDM-MRCR v2 8-needle (1M pointwise)": "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/"
    },
    "benchmark_note": "공식 모델 카드 평가 표의 Gemini 3.5 Flash-Lite 열 값. GDPVal-AA v2(Elo 1140)는 제외. 안전 평가는 증감폭(pp)이라 미수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-091",
    "name": "Gemini 3.5 Flash Cyber",
    "date": "2026-07-21",
    "sortDate": "2026-07-21",
    "month": "2026-07",
    "monthName": "July",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [
      "cybersecurity"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "CyberGym (CodeMender, max 5 calls)": 83.2,
      "Big Sleep Evaluation": 72.0,
      "Chrome Production Commit Scanning": 72.0
    },
    "official_id": "introducing-gemini-3-5-flash-cyber",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/"
      }
    ],
    "release_date_source": "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/",
    "parameter_source": "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/",
    "benchmark_sources": {
      "CyberGym (CodeMender, max 5 calls)": "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/",
      "Big Sleep Evaluation": "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/",
      "Chrome Production Commit Scanning": "https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/"
    },
    "benchmark_note": "공식 블로그의 datavis 차트 데이터(iframe config JSON)에서 정확한 값을 추출했습니다 — CyberGym 83.2%(CodeMender 하니스, 최대 5회 호출), Big Sleep 72%, Chrome 프로덕션 커밋 스캔 파이프라인 72%.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-092",
    "name": "Laguna S 2.1",
    "date": "2026-07-21",
    "sortDate": "2026-07-21",
    "month": "2026-07",
    "monthName": "July",
    "company": "Poolside",
    "family": "Laguna",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "118B total / ~8B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card reports 118B total and about 8B activated.",
    "benchmarks": {
      "Terminal-Bench 2.1": 70.2,
      "SWE-bench Multilingual": 78.5,
      "SWE-bench Pro": 59.4,
      "DeepSWE": 40.4,
      "Toolathlon Verified": 49.7
    },
    "official_id": "poolside/Laguna-S-2.1",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/poolside/Laguna-S-2.1"
      }
    ],
    "release_date_source": "https://huggingface.co/poolside/Laguna-S-2.1",
    "parameter_source": "https://huggingface.co/poolside/Laguna-S-2.1",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/poolside/Laguna-S-2.1",
      "SWE-bench Multilingual": "https://huggingface.co/poolside/Laguna-S-2.1",
      "SWE-bench Pro": "https://huggingface.co/poolside/Laguna-S-2.1",
      "DeepSWE": "https://huggingface.co/poolside/Laguna-S-2.1",
      "Toolathlon Verified": "https://huggingface.co/poolside/Laguna-S-2.1"
    },
    "benchmark_note": "Poolside 공식 모델 카드 자기 평가 수치입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-093",
    "name": "Solar Open 2",
    "date": "2026-07-22",
    "sortDate": "2026-07-22",
    "month": "2026-07",
    "monthName": "July",
    "company": "Upstage",
    "family": "Solar Open",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "250B total / 15B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "~1M",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official model card title is Solar Open 2; 250B-A15B is the official repository/model variant identifier.",
    "benchmarks": {
      "MMLU-Pro": 86.2,
      "GPQA Diamond": 86.3,
      "LiveCodeBench v6": 92.4,
      "AIME 2026": 95.7,
      "SWE-bench Verified": 70.4
    },
    "official_id": "upstage/Solar-Open2-250B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/upstage/Solar-Open2-250B"
      }
    ],
    "release_date_source": "https://huggingface.co/upstage/Solar-Open2-250B",
    "parameter_source": "https://huggingface.co/upstage/Solar-Open2-250B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/upstage/Solar-Open2-250B",
      "GPQA Diamond": "https://huggingface.co/upstage/Solar-Open2-250B",
      "LiveCodeBench v6": "https://huggingface.co/upstage/Solar-Open2-250B",
      "AIME 2026": "https://huggingface.co/upstage/Solar-Open2-250B",
      "SWE-bench Verified": "https://huggingface.co/upstage/Solar-Open2-250B"
    },
    "benchmark_note": "Upstage 공식 모델 카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-094",
    "name": "Claude Opus 5",
    "date": "2026-07-24",
    "sortDate": "2026-07-24",
    "month": "2026-07",
    "monthName": "July",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal-Bench Science 0.1": 29.0,
      "Terminal-Bench 4.0": 52.3,
      "OSWorld 2.0 (partial)": 75.4,
      "OSWorld 2.0 (strict)": 39.6,
      "Humanity's Last Exam (without tools)": 56.6,
      "Humanity's Last Exam (w/ tools)": 63.6,
      "AutomationBench": 26.9,
      "CursorBench 3.2.0": 70.0
    },
    "official_id": "claude-opus-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/news/claude-opus-5"
      },
      {
        "label": "Claude Fable 5.1 제품 페이지 비교표",
        "url": "https://www.anthropic.com/claude/fable"
      }
    ],
    "release_date_source": "https://www.anthropic.com/news/claude-opus-5",
    "parameter_source": "https://www.anthropic.com/news/claude-opus-5",
    "benchmark_sources": {
      "Terminal-Bench Science 0.1": "https://www.anthropic.com/claude/fable",
      "Terminal-Bench 4.0": "https://www.anthropic.com/claude/fable",
      "OSWorld 2.0 (partial)": "https://www.anthropic.com/claude/fable",
      "OSWorld 2.0 (strict)": "https://www.anthropic.com/claude/fable",
      "Humanity's Last Exam (without tools)": "https://www.anthropic.com/claude/fable",
      "Humanity's Last Exam (w/ tools)": "https://www.anthropic.com/claude/fable",
      "AutomationBench": "https://www.anthropic.com/claude/fable",
      "CursorBench 3.2.0": "https://www.anthropic.com/claude/fable"
    },
    "benchmark_note": "Fable 5.1 공식 비교표의 Opus 5 컬럼(Anthropic 직접 측정·게시). Opus 5 발표문은 Frontier-Bench v0.1·CursorBench 3.2·ARC-AGI 3·DeepSearchQA·AutomationBench 등을 에포트-곡선 차트로만 게시해 단일 대표값 없음(차트 원문은 발표문 참조). Terminal-Bench Science 0.1은 SE ±3.5~4.5pt(공개 리더보드 30.0%와 재현 29.0%가 오차 내 일치). OSWorld 2.0은 2026-08 태스크 릴리스 기준. GDPval-AA v2 1824는 Elo형 척도라 % 점수표에서 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-128",
    "name": "A.X K2",
    "date": "2026-07-29",
    "sortDate": "2026-07-29",
    "month": "2026-07",
    "monthName": "July",
    "company": "SK Telecom",
    "family": "A.X",
    "type": "LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "688B total / 33B active (MoE)",
    "architecture": "Decoder-only Transformer + sparse MoE (MLA/SGA)",
    "modalities": [
      "text"
    ],
    "focus": [
      "Agent workflows",
      "Korean language and culture",
      "Sovereign AI"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "Korean, English",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face)",
    "note": "Official SK Telecom model card reports 688B total / 33B active parameters. The related vision/audio models are separate releases.",
    "benchmarks": {
      "AIME 2026": 97.1
    },
    "official_id": "skt/A.X-K2",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/skt/A.X-K2"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://news.sktelecom.com/228501"
      }
    ],
    "release_date_source": "https://news.sktelecom.com/228501",
    "parameter_source": "https://huggingface.co/skt/A.X-K2",
    "benchmark_sources": {
      "AIME 2026": "https://huggingface.co/skt/A.X-K2"
    },
    "benchmark_note": "SK Telecom 공식 A.X K2 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-095",
    "name": "Inkling-Small",
    "date": "2026-07-30",
    "sortDate": "2026-07-30",
    "month": "2026-07",
    "monthName": "July",
    "company": "Thinking Machines Lab",
    "family": "Inkling",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "276B total / 12B active (MoE)",
    "architecture": "Native multimodal sparse MoE",
    "modalities": [
      "text",
      "image",
      "audio"
    ],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Verified": 80.2,
      "SWE-bench Pro": 55.9
    },
    "official_id": "inkling-small",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://thinkingmachines.ai/model-card/inkling-small/"
      }
    ],
    "release_date_source": "https://thinkingmachines.ai/model-card/inkling-small/",
    "parameter_source": "https://thinkingmachines.ai/model-card/inkling-small/",
    "benchmark_sources": {
      "SWE-bench Verified": "https://thinkingmachines.ai/model-card/inkling-small/",
      "SWE-bench Pro": "https://thinkingmachines.ai/model-card/inkling-small/"
    },
    "benchmark_note": "Thinking Machines Lab 공식 model card의 Inkling-Small/자기 평가 열 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-096",
    "name": "DeepSeek-V4-Flash-0731",
    "date": "2026-07-31",
    "sortDate": "2026-07-31",
    "month": "2026-07",
    "monthName": "July",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "Public beta / official Flash release",
    "parameters": "정확한 수치 미공개 (0731 snapshot 공식 카드에 총/활성 파라미터 별도 표기 없음)",
    "architecture": "Sparse MoE with CSA/HCA",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal-Bench 2.1": 82.7,
      "NL2Repo": 54.2,
      "CyberGym": 76.7,
      "DeepSWE": 54.4,
      "Toolathlon Verified": 70.3
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Flash-0731",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731"
      }
    ],
    "release_date_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
      "NL2Repo": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
      "CyberGym": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
      "DeepSWE": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731",
      "Toolathlon Verified": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731"
    },
    "benchmark_note": "DeepSeek 공식 0731 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-129",
    "name": "K-EXAONE 2.0",
    "date": "2026-07-31",
    "sortDate": "2026-07-31",
    "month": "2026-07",
    "monthName": "July",
    "company": "LG AI Research",
    "family": "EXAONE",
    "type": "LLM",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "750B total / 37B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [
      "language",
      "code"
    ],
    "focus": [
      "Sovereign AI",
      "Korean deep reasoning",
      "materials science / industrial AI"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "Korean, English",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face / Sovereign AI)",
    "note": "Corrected from the unsupported ~260B/~28B estimate. The official model card reports 750B total / 37B active parameters.",
    "benchmarks": {
      "MMLU-Pro": 83.5,
      "GPQA-Diamond": 82.2,
      "Humanity's Last Exam": 18.3,
      "AIME 2026": 92.3,
      "HMMT Feb 2026": 78.4,
      "IMO Answer": 78.6,
      "SciCode": 37.4,
      "SWE Bench Verified": 68.2,
      "Terminal-Bench 2.1": 43.8,
      "τ 3 -Banking": 14.2,
      "Claw-Eval": 77.7,
      "IFEval": 92.4,
      "IFBench": 72.6,
      "OpenAI-MRCR": 94.4,
      "Ko-LongBench": 89.6,
      "KMMLU-Pro": 69.1,
      "Click": 84.2,
      "HRM8K-KSM": 91.1,
      "MMMLU": 86.6,
      "GlobalMMLU-Lite": 86.6,
      "PolyMath": 71.3,
      "KGC-Safety": 99.8,
      "ROK-Fortress": 89.5
    },
    "official_id": "LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B"
      },
      {
        "label": "공식 출시 발표",
        "url": "https://www.lgresearch.ai/news/view?seq=678"
      }
    ],
    "release_date_source": "https://www.lgresearch.ai/news/view?seq=678",
    "parameter_source": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
    "benchmark_sources": {
      "MMLU-Pro": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "GPQA-Diamond": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "Humanity's Last Exam": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "AIME 2026": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "HMMT Feb 2026": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "IMO Answer": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "SciCode": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "SWE Bench Verified": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "Terminal-Bench 2.1": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "τ 3 -Banking": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "Claw-Eval": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "IFEval": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "IFBench": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "OpenAI-MRCR": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "Ko-LongBench": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "KMMLU-Pro": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "Click": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "HRM8K-KSM": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "MMMLU": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "GlobalMMLU-Lite": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "PolyMath": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "KGC-Safety": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B",
      "ROK-Fortress": "https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B"
    },
    "benchmark_note": "공식 HF 모델 카드의 K-EXAONE 2.0 열 값. AA-LCR 56.2는 제3자 지표라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-097",
    "name": "Qwen3.8-Max",
    "date": "2026-08-03",
    "sortDate": "2026-08-03",
    "month": "2026-08",
    "monthName": "August",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "2.4T total / 95B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal Bench 2.1": 86.6,
      "SWE-bench Pro": 67.7,
      "DeepSWE 1.1": 56.6,
      "NL2Repo-Bench": 55.9,
      "FrontierSWE": 73.5,
      "MLS-Bench-Lite": 41.0,
      "PaperBench": 93.0,
      "AndroidBench": 75.1,
      "QwenSWEBench": 80.7,
      "QwenQoderBench": 58.4,
      "CoWorkBench": 74.8,
      "WorkSpaceBench": 67.7,
      "JobBench": 53.4,
      "SkillsBench": 70.2,
      "Agents' Last Exam (pass)": 27.0,
      "Agents' Last Exam (score)": 52.4,
      "Automation-Bench (Pass@1)": 27.3,
      "Toolathlon Verified (Pass@1)": 72.5,
      "WideSearch": 81.9,
      "HLE w/ tools": 56.2,
      "GPQA Diamond": 92.6,
      "HLE": 43.6,
      "IFBench": 82.8,
      "OneMillion-Bench (expert score)": 52.5,
      "HealthBench": 60.2,
      "PLawBench": 73.2,
      "PRBench-Legal": 57.6,
      "PRBench-Finance": 58.3,
      "MRCR v2 256K (8-needle)": 92.9,
      "LongBench v2": 66.3,
      "MMMU-Pro": 82.3,
      "MathVision (w/o CI)": 95.2,
      "MathVision (w/ CI)": 97.7,
      "BabyVision (w/o CI)": 82.0,
      "BabyVision (w/ CI)": 91.3,
      "HLE-VL (w/ tools)": 52.2,
      "ZeroBench (pass@5, w/o CI)": 24.0,
      "ZeroBench (pass@5, w/ CI)": 49.0,
      "ZeroBench-Sub": 48.5,
      "LogicVista": 91.9,
      "HiPhO": 90.0,
      "PhyX": 83.5,
      "SLAKE": 90.8,
      "MedXpertQA-MM": 80.4,
      "PMC-VQA": 66.2,
      "OSWorld-Verified": 86.1,
      "OSWorld 2.0 (binary)": 19.4,
      "OSWorld 2.0 (partial)": 46.7,
      "ScreenSpot Pro": 84.5,
      "WebArena-Verified": 66.8,
      "AndroidWorld": 85.3,
      "MobileWorld": 77.8,
      "ClawEval-MM (pass@3)": 77.2,
      "ClawEval-MM (avg)": 74.8,
      "Vision2Web": 69.0,
      "QwenBlenderBench": 69.9,
      "Parametric CAD Bench": 91.5,
      "RecreationBench": 51.7,
      "PresentBench": 79.6,
      "CharXiv RQ (w/o CI)": 88.4,
      "CharXiv RQ (w/ CI)": 93.5,
      "OmniDocBench 1.5": 92.1,
      "OCR-Bench-V2 (EN)": 74.2,
      "OCR-Bench-V2 (ZH)": 68.3,
      "CC-OCR-Bench-V2": 79.6,
      "MTVQA-Test": 56.6,
      "MADQA": 91.8,
      "QwenVisualOffice": 44.6,
      "RealWorldQA": 88.0,
      "ERQA": 77.8,
      "LingoQA": 84.8,
      "SURDS": 77.8,
      "SimpleVQA": 75.0,
      "WorldVQA": 53.2,
      "MMStar": 85.9,
      "PerceptionBench": 63.5,
      "CountQA": 82.4,
      "RefAdv-S": 80.2,
      "Dense200": 87.0,
      "COCO": 78.7,
      "VisFactor": 60.8,
      "VLMsAreBiased": 88.3,
      "VideoMME (w/ subtitles)": 90.4,
      "VideoMME v2 (w/ subtitles)": 68.3,
      "VideoMMMU": 88.7,
      "MMVU": 82.4,
      "MLVU (M-Avg)": 90.8,
      "TVBench": 81.9,
      "LVBench": 81.8,
      "LVBench (w/ memory)": 85.6,
      "EgoLife (w/ memory)": 80.3,
      "VideoDR (w/ search)": 73.2
    },
    "official_id": "document-2021044032125272064",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.alibabagroup.com/en-US/document-2021044032125272064"
      },
      {
        "label": "Qwen 공식 블로그(Qwen3.8 발표)",
        "url": "https://qwen.ai/blog?id=qwen3.8"
      }
    ],
    "release_date_source": "https://www.alibabagroup.com/en-US/document-2021044032125272064",
    "parameter_source": "https://qwen.ai/blog?id=qwen3.8",
    "benchmark_sources": {
      "Terminal Bench 2.1": "https://qwen.ai/blog?id=qwen3.8",
      "SWE-bench Pro": "https://qwen.ai/blog?id=qwen3.8",
      "DeepSWE 1.1": "https://qwen.ai/blog?id=qwen3.8",
      "NL2Repo-Bench": "https://qwen.ai/blog?id=qwen3.8",
      "FrontierSWE": "https://qwen.ai/blog?id=qwen3.8",
      "MLS-Bench-Lite": "https://qwen.ai/blog?id=qwen3.8",
      "PaperBench": "https://qwen.ai/blog?id=qwen3.8",
      "AndroidBench": "https://qwen.ai/blog?id=qwen3.8",
      "QwenSWEBench": "https://qwen.ai/blog?id=qwen3.8",
      "QwenQoderBench": "https://qwen.ai/blog?id=qwen3.8",
      "CoWorkBench": "https://qwen.ai/blog?id=qwen3.8",
      "WorkSpaceBench": "https://qwen.ai/blog?id=qwen3.8",
      "JobBench": "https://qwen.ai/blog?id=qwen3.8",
      "SkillsBench": "https://qwen.ai/blog?id=qwen3.8",
      "Agents' Last Exam (pass)": "https://qwen.ai/blog?id=qwen3.8",
      "Agents' Last Exam (score)": "https://qwen.ai/blog?id=qwen3.8",
      "Automation-Bench (Pass@1)": "https://qwen.ai/blog?id=qwen3.8",
      "Toolathlon Verified (Pass@1)": "https://qwen.ai/blog?id=qwen3.8",
      "WideSearch": "https://qwen.ai/blog?id=qwen3.8",
      "HLE w/ tools": "https://qwen.ai/blog?id=qwen3.8",
      "GPQA Diamond": "https://qwen.ai/blog?id=qwen3.8",
      "HLE": "https://qwen.ai/blog?id=qwen3.8",
      "IFBench": "https://qwen.ai/blog?id=qwen3.8",
      "OneMillion-Bench (expert score)": "https://qwen.ai/blog?id=qwen3.8",
      "HealthBench": "https://qwen.ai/blog?id=qwen3.8",
      "PLawBench": "https://qwen.ai/blog?id=qwen3.8",
      "PRBench-Legal": "https://qwen.ai/blog?id=qwen3.8",
      "PRBench-Finance": "https://qwen.ai/blog?id=qwen3.8",
      "MRCR v2 256K (8-needle)": "https://qwen.ai/blog?id=qwen3.8",
      "LongBench v2": "https://qwen.ai/blog?id=qwen3.8",
      "MMMU-Pro": "https://qwen.ai/blog?id=qwen3.8",
      "MathVision (w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "MathVision (w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "BabyVision (w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "BabyVision (w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "HLE-VL (w/ tools)": "https://qwen.ai/blog?id=qwen3.8",
      "ZeroBench (pass@5, w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "ZeroBench (pass@5, w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "ZeroBench-Sub": "https://qwen.ai/blog?id=qwen3.8",
      "LogicVista": "https://qwen.ai/blog?id=qwen3.8",
      "HiPhO": "https://qwen.ai/blog?id=qwen3.8",
      "PhyX": "https://qwen.ai/blog?id=qwen3.8",
      "SLAKE": "https://qwen.ai/blog?id=qwen3.8",
      "MedXpertQA-MM": "https://qwen.ai/blog?id=qwen3.8",
      "PMC-VQA": "https://qwen.ai/blog?id=qwen3.8",
      "OSWorld-Verified": "https://qwen.ai/blog?id=qwen3.8",
      "OSWorld 2.0 (binary)": "https://qwen.ai/blog?id=qwen3.8",
      "OSWorld 2.0 (partial)": "https://qwen.ai/blog?id=qwen3.8",
      "ScreenSpot Pro": "https://qwen.ai/blog?id=qwen3.8",
      "WebArena-Verified": "https://qwen.ai/blog?id=qwen3.8",
      "AndroidWorld": "https://qwen.ai/blog?id=qwen3.8",
      "MobileWorld": "https://qwen.ai/blog?id=qwen3.8",
      "ClawEval-MM (pass@3)": "https://qwen.ai/blog?id=qwen3.8",
      "ClawEval-MM (avg)": "https://qwen.ai/blog?id=qwen3.8",
      "Vision2Web": "https://qwen.ai/blog?id=qwen3.8",
      "QwenBlenderBench": "https://qwen.ai/blog?id=qwen3.8",
      "Parametric CAD Bench": "https://qwen.ai/blog?id=qwen3.8",
      "RecreationBench": "https://qwen.ai/blog?id=qwen3.8",
      "PresentBench": "https://qwen.ai/blog?id=qwen3.8",
      "CharXiv RQ (w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "CharXiv RQ (w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "OmniDocBench 1.5": "https://qwen.ai/blog?id=qwen3.8",
      "OCR-Bench-V2 (EN)": "https://qwen.ai/blog?id=qwen3.8",
      "OCR-Bench-V2 (ZH)": "https://qwen.ai/blog?id=qwen3.8",
      "CC-OCR-Bench-V2": "https://qwen.ai/blog?id=qwen3.8",
      "MTVQA-Test": "https://qwen.ai/blog?id=qwen3.8",
      "MADQA": "https://qwen.ai/blog?id=qwen3.8",
      "QwenVisualOffice": "https://qwen.ai/blog?id=qwen3.8",
      "RealWorldQA": "https://qwen.ai/blog?id=qwen3.8",
      "ERQA": "https://qwen.ai/blog?id=qwen3.8",
      "LingoQA": "https://qwen.ai/blog?id=qwen3.8",
      "SURDS": "https://qwen.ai/blog?id=qwen3.8",
      "SimpleVQA": "https://qwen.ai/blog?id=qwen3.8",
      "WorldVQA": "https://qwen.ai/blog?id=qwen3.8",
      "MMStar": "https://qwen.ai/blog?id=qwen3.8",
      "PerceptionBench": "https://qwen.ai/blog?id=qwen3.8",
      "CountQA": "https://qwen.ai/blog?id=qwen3.8",
      "RefAdv-S": "https://qwen.ai/blog?id=qwen3.8",
      "Dense200": "https://qwen.ai/blog?id=qwen3.8",
      "COCO": "https://qwen.ai/blog?id=qwen3.8",
      "VisFactor": "https://qwen.ai/blog?id=qwen3.8",
      "VLMsAreBiased": "https://qwen.ai/blog?id=qwen3.8",
      "VideoMME (w/ subtitles)": "https://qwen.ai/blog?id=qwen3.8",
      "VideoMME v2 (w/ subtitles)": "https://qwen.ai/blog?id=qwen3.8",
      "VideoMMMU": "https://qwen.ai/blog?id=qwen3.8",
      "MMVU": "https://qwen.ai/blog?id=qwen3.8",
      "MLVU (M-Avg)": "https://qwen.ai/blog?id=qwen3.8",
      "TVBench": "https://qwen.ai/blog?id=qwen3.8",
      "LVBench": "https://qwen.ai/blog?id=qwen3.8",
      "LVBench (w/ memory)": "https://qwen.ai/blog?id=qwen3.8",
      "EgoLife (w/ memory)": "https://qwen.ai/blog?id=qwen3.8",
      "VideoDR (w/ search)": "https://qwen.ai/blog?id=qwen3.8"
    },
    "benchmark_note": "qwen.ai 공식 발표 블로그(2026-08-03)의 Qwen3.8-Max 열 전체 수치입니다(코딩·에이전트·언어 표 + 멀티모달 표). 쌍값 분리는 각주 기준: MathVision·BabyVision·CharXiv RQ·ZeroBench=w/o CI / w/ CI, OSWorld 2.0=binary / partial, ClawEval-MM=Pass@3 / 평균, Agents' Last Exam=Pass / Score. QwenReactBench(1724)·QwenSVGBench(1713)는 Elo 척도라 제외·메모 기록. 내부 벤치마크(RecreationBench·QwenBlenderBench·QwenVisualOffice·Parametric CAD Bench·OneMillion-Bench 등)는 제공사가 공식 발표에 인쇄한 값이라 수록. 8/3 Alibaba Group 발표문의 Text Arena 5위·Vision Arena 2위·Frontend Code Arena 4위는 리더보드 순위라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-136",
    "name": "Muse Spark 1.2",
    "date": "2026-08-05",
    "sortDate": "2026-08-05",
    "month": "2026-08",
    "monthName": "August",
    "company": "Meta",
    "family": "Muse Spark",
    "type": "MLLM / coding",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Hosted coding-focused model (Muse Code beta의 구동 모델)",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "Agentic Coding",
      "Complex debugging",
      "Codebase understanding"
    ],
    "open_weights": false,
    "license": "Proprietary (Muse Code / Meta Model API)",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Muse Code (macOS/Linux beta), Meta Model API",
    "note": "2026-09-04 감사에서는 \"공식 발표문을 확인하지 못한다\"며 제외 원장(model-098)에 보류됐습니다. Meta AI Research 블로그(research.meta.ai)의 'Introducing Muse Code and Muse Spark 1.2'(2026-08-05)를 확인해 활성 레코드로 이관하고 구 model-098 제외 항목을 삭제했습니다. 모달리티 중 video는 Muse Code 데모(동영상 입력 해석) 근거이며, 파라미터는 1차 자료에 없습니다. 발표문 자체에 수치 점수가 없어 별도 평가 리포트의 값은 기록하지 않았습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1": 82.9,
      "DeepSWE v1.1 (Muse Code)": 59.3,
      "DeepSWE v1.1 (mini-swe-agent, Datacurve LB)": 55.0,
      "Meta Internal Coding Bench": 70.6,
      "JobBench": 61.6,
      "OSWorld 2.0 (partial)": 47.6,
      "OSWorld 2.0 (binary)": 17.9,
      "DeepSearchQA": 85.9,
      "Agentic IF Index (Internal)": 46.2,
      "AutomationBench": 38.2,
      "OpenAI MRCR v2 8-needle 256K-512K": 66.3,
      "OpenAI MRCR v2 8-needle 512K-1M": 55.5,
      "SWE-Atlas-QnA": 46.2
    },
    "official_id": "introducing-muse-code-and-muse-spark-1-2",
    "official_sources": [
      {
        "label": "Meta AI Research 공식 발표문",
        "url": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2"
      },
      {
        "label": "Meta 평가·기술 포스트",
        "url": "https://research.meta.ai/blog/multimodal-intelligence-of-muse-spark-1-2"
      },
      {
        "label": "Muse Spark 1.3 스코어카드 비교 컬럼",
        "url": "https://research.meta.ai/blog/introducing-muse-spark-1-3"
      }
    ],
    "release_date_source": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
    "parameter_source": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
      "DeepSWE v1.1 (Muse Code)": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
      "Meta Internal Coding Bench": "https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2",
      "DeepSWE v1.1 (mini-swe-agent, Datacurve LB)": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "JobBench": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "OSWorld 2.0 (partial)": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "OSWorld 2.0 (binary)": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "DeepSearchQA": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "Agentic IF Index (Internal)": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "AutomationBench": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "OpenAI MRCR v2 8-needle 256K-512K": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "OpenAI MRCR v2 8-needle 512K-1M": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "SWE-Atlas-QnA": "https://research.meta.ai/blog/introducing-muse-spark-1-3"
    },
    "benchmark_note": "xhigh 에포트. TB 2.1·DeepSWE·MICB는 1.2 발표 차트(Muse Code 하네스), 나머지는 Muse Spark 1.3 스코어카드의 1.2 컬럼(공통 내부 프레임워크; OSWorld 2.0은 06.24 버전 — 다른 모델은 08.08). DeepSWE는 하네스별 2값: Muse Code 59.3 / Datacurve 리더보드 mini-swe-agent 55.0. GDPVal-AA v2 1615는 Elo형 척도라 % 점수표에서 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-099",
    "name": "Motif-3",
    "date": "2026-08-10",
    "sortDate": "2026-08-10",
    "month": "2026-08",
    "monthName": "August",
    "company": "Motif Technologies",
    "family": "Motif",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "~314B total / ~13.2B active (MoE)",
    "architecture": "MoE, GDLA, MTP",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The technical report/model card uses approximate values.",
    "benchmarks": {
      "GDPVal v2": 38.7,
      "τ²-Bench Telecom": 94.7,
      "τ³-Banking": 35.3,
      "ITBench*": 51.5,
      "SWE-Bench Verified": 76.2,
      "Terminal-Bench 2.1": 74.9,
      "SciCode": 40.6,
      "IMOAnswerBench": 83.2,
      "Apex-Shortlist": 75.5,
      "GPQA Diamond": 83.4,
      "HLE": 37.0,
      "CritPt": 6.6,
      "IFBench": 78.2
    },
    "official_id": "Motif-Technologies/Motif-3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Motif-Technologies/Motif-3"
      }
    ],
    "release_date_source": "https://huggingface.co/Motif-Technologies/Motif-3",
    "parameter_source": "https://huggingface.co/Motif-Technologies/Motif-3",
    "benchmark_sources": {
      "GDPVal v2": "https://huggingface.co/Motif-Technologies/Motif-3",
      "τ²-Bench Telecom": "https://huggingface.co/Motif-Technologies/Motif-3",
      "τ³-Banking": "https://huggingface.co/Motif-Technologies/Motif-3",
      "ITBench*": "https://huggingface.co/Motif-Technologies/Motif-3",
      "SWE-Bench Verified": "https://huggingface.co/Motif-Technologies/Motif-3",
      "Terminal-Bench 2.1": "https://huggingface.co/Motif-Technologies/Motif-3",
      "SciCode": "https://huggingface.co/Motif-Technologies/Motif-3",
      "IMOAnswerBench": "https://huggingface.co/Motif-Technologies/Motif-3",
      "Apex-Shortlist": "https://huggingface.co/Motif-Technologies/Motif-3",
      "GPQA Diamond": "https://huggingface.co/Motif-Technologies/Motif-3",
      "HLE": "https://huggingface.co/Motif-Technologies/Motif-3",
      "CritPt": "https://huggingface.co/Motif-Technologies/Motif-3",
      "IFBench": "https://huggingface.co/Motif-Technologies/Motif-3"
    },
    "benchmark_note": "공식 HF 모델 카드의 Motif 3 열 값. GDPVal v2는 카드 표기 그대로의 % 점수(38.7). AA 계열 지표(OmniScience Accuracy/Non-Hallucination)는 제3자 지표라 제외.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-140",
    "name": "GPT-5.6-Cyber",
    "date": "2026-08-10",
    "sortDate": "2026-08-10",
    "month": "2026-08",
    "monthName": "August",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "GPT-5.6 Sol 기반 사이버 업무 특화 파인튜닝",
    "modalities": [],
    "focus": [
      "Cybersecurity",
      "Zero-day discovery",
      "Exploit development"
    ],
    "open_weights": false,
    "license": "Proprietary (Daybreak Red 접근 제한)",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Daybreak Red 승인 기관 전용",
    "note": "Daybreak Blue/Red 이원화 발표(2026-08-10)와 함께 공개된 방어자 전용 사이버 모델입니다. Preparedness Framework 사이버 평가에서 High(기존 GPT-5.5-Cyber·Sol과 동일한 수준)로 판단되어 Critical에는 도달하지 않았습니다. Gemini 3.5/3.8 Flash Cyber와 동일한 '제한 접근 사이버 전용 변형' 기준으로 수록했습니다.",
    "benchmarks": {
      "Advanced Cybersecurity Completion Rate (internal)": 95.0
    },
    "official_id": "expanding-daybreak-as-the-cyber-defense-window-narrows",
    "official_sources": [
      {
        "label": "OpenAI Daybreak 확장 공식 발표문",
        "url": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/"
      }
    ],
    "release_date_source": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/",
    "parameter_source": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/",
    "benchmark_sources": {
      "Advanced Cybersecurity Completion Rate (internal)": "https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/"
    },
    "benchmark_note": "OpenAI가 같은 발표문에 명시한 내부 평가 값입니다(고급 사이버 요청 완수율: GPT-5.6-Cyber 95.0%, GPT-5.6 Sol 1.5%, Daybreak Blue 2.0%, GPT-5.5-Cyber 57.3%). ExploitGym·ExploitBench는 'Sol 및 5.5-Cyber보다 우수'라는 서술만 있고 수치가 없어 기록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-141",
    "name": "Muse Glimmer",
    "date": "2026-08-10",
    "sortDate": "2026-08-10",
    "month": "2026-08",
    "monthName": "August",
    "company": "Meta",
    "family": "Muse Glimmer",
    "type": "MLLM / agentic foundation model",
    "category": "MLLM",
    "status": "GA",
    "parameters": "총 29.6B dense (~1.8B ViT-G/14 perception encoder 포함)",
    "architecture": "Dense causal transformer + frozen ViT-G/14 perception encoder, Muse Spark logit distillation",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Local agents",
      "Tool use",
      "Agentic Coding",
      "On-device inference"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "131,072+",
    "languages": "100개 이상 언어",
    "variants": [
      "BF16",
      "K-Quant-Dynamic (32GB)",
      "K-Quant-17GB (24GB)",
      "DFlash drafter"
    ],
    "reasoning_effort": [
      "low",
      "medium",
      "high",
      "xhigh"
    ],
    "availability": "Hugging Face meta-models/Muse-Glimmer-30B, llama.cpp / MLX / ExecuTorch / vLLM / SGLang / Ollama / LM Studio / OpenRouter 등",
    "note": "Meta가 Llama 4 이후 처음 공개한 오픈웨이트 모델이며 24/32GB 소비자 GPU 구동을 전제로 양자화·DFlash 스펙큘러 드코딩까지 함께 배포합니다. 벤치마크는 Hugging Face 공식 모델 카드의 Muse Glimmer-30B High Reasoning 열 값입니다. 카드에 함께 실린 AA 접미 지표(GPQA Diamond (AA), HLE Text (AA), AA-LCR, GDPVal-AA v2)는 제3자 지표 정책상 뺐고, audio 입출력은 미지원입니다.",
    "benchmarks": {
      "MCP Atlas (Public)": 75.5,
      "DeepSearch QA": 74.6,
      "SWE-Bench Pro": 51.2,
      "SWE-Bench Verified": 76.0,
      "TerminalBench 2.1": 51.7,
      "Charxiv Reasoning": 78.8,
      "IFBench": 77.0,
      "AIME 2026": 94.7,
      "WMDP (Bio)": 86.5
    },
    "official_id": "meta-models/Muse-Glimmer-30B",
    "official_sources": [
      {
        "label": "Meta AI Research 공식 발표문",
        "url": "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/meta-models/Muse-Glimmer-30B"
      }
    ],
    "release_date_source": "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model",
    "parameter_source": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
    "benchmark_sources": {
      "MCP Atlas (Public)": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "DeepSearch QA": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "SWE-Bench Pro": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "SWE-Bench Verified": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "TerminalBench 2.1": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "Charxiv Reasoning": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "IFBench": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "AIME 2026": "https://huggingface.co/meta-models/Muse-Glimmer-30B",
      "WMDP (Bio)": "https://huggingface.co/meta-models/Muse-Glimmer-30B"
    },
    "benchmark_note": "Meta 공식 Hugging Face 모델 카드의 High Reasoning 설정 점수입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-142",
    "name": "Nemotron-3.5-Lightning-30B-A3B",
    "date": "2026-08-11",
    "sortDate": "2026-08-11",
    "month": "2026-08",
    "monthName": "August",
    "company": "NVIDIA",
    "family": "Nemotron",
    "type": "LLM / reasoning",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "30B total / 3B active (MoE; BF16·NVFP4 체크포인트)",
    "architecture": "Hybrid MoE — interleaved Mamba-2 + MoE + Attention layers, MTP",
    "modalities": [
      "text"
    ],
    "focus": [
      "Long-running agents",
      "High-throughput execution",
      "Low latency"
    ],
    "open_weights": true,
    "license": "OpenMDW-1.1",
    "context": "Up to 1M tokens",
    "languages": "English (+coding), Spanish, French, German, Italian, Japanese",
    "variants": [
      "BF16",
      "NVFP4",
      "DSpark draft",
      "DFlash draft",
      "GGUF"
    ],
    "reasoning_effort": [
      "enable_thinking on/off (chat template)"
    ],
    "availability": "Hugging Face, ModelScope, OpenRouter, build.nvidia.com NIM, OCI 등",
    "note": "Nemotron 3 Nano 30B-A3B의 후속으로, 상시 실행 에이전트의 실행 레이어를 겨냥한 효율 모델입니다. 벤치마크는 NVFP4 공식 체크포인트 기준 값입니다. 카드의 AA-* 지표(AA-Omniscience, GDPval-AA-V2, AA-LCR)는 제3자 지표 정책상 제외했습니다.",
    "benchmarks": {
      "MMLU Pro": 81.62,
      "GPQA Diamond (no tools)": 75.57,
      "HLE (text-only, no tools)": 10.47,
      "SciCode": 31.38,
      "SWE-bench Verified": 52.8,
      "Terminal-Bench 2.1": 23.46,
      "PinchBench": 83.43,
      "BrowseComp": 36.81,
      "IFBench (loose)": 72.88
    },
    "official_id": "nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4"
      }
    ],
    "release_date_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
    "parameter_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
    "benchmark_sources": {
      "MMLU Pro": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "GPQA Diamond (no tools)": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "HLE (text-only, no tools)": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "SciCode": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "SWE-bench Verified": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "Terminal-Bench 2.1": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "PinchBench": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "BrowseComp": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4",
      "IFBench (loose)": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4"
    },
    "benchmark_note": "NVIDIA가 NeMo Gym / NeMo Evaluator 하네스로 측정한 공식 표의 NVFP4 열 값입니다 (BF16 열은 별도).",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-100",
    "name": "Qwen3.8-2.4T-A95B",
    "date": "2026-08-12",
    "sortDate": "2026-08-12",
    "month": "2026-08",
    "monthName": "August",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "2.4T total / 95B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Official open checkpoint is Qwen3.8-2.4T-A95B.",
    "benchmarks": {
      "Terminal Bench 2.1": 86.6,
      "SWE-bench Pro": 67.7,
      "DeepSWE 1.1": 56.6,
      "NL2Repo-Bench": 55.9,
      "FrontierSWE": 73.5,
      "MLS-Bench-Lite": 41.0,
      "PaperBench": 93.0,
      "AndroidBench": 75.1,
      "QwenSWEBench": 80.7,
      "QwenQoderBench": 58.4,
      "CoWorkBench": 74.8,
      "WorkSpaceBench": 67.7,
      "JobBench": 53.4,
      "SkillsBench": 70.2,
      "Automation-Bench (Pass@1)": 27.3,
      "Toolathlon Verified (Pass@1)": 72.5,
      "WideSearch": 81.9,
      "HLE w/ tools": 56.2,
      "GPQA Diamond": 92.6,
      "HLE": 43.6,
      "IFBench": 82.8,
      "HealthBench": 60.2,
      "PLawBench": 73.2,
      "PRBench-Legal": 57.6,
      "PRBench-Finance": 58.3,
      "MRCR v2 256K (8-needle)": 92.9,
      "LongBench v2": 66.3,
      "Agents' Last Exam (pass)": 27.0,
      "Agents' Last Exam (score)": 52.4,
      "OneMillion-Bench (expert score)": 52.5,
      "MMMU-Pro": 82.3,
      "MathVision (w/o CI)": 95.2,
      "MathVision (w/ CI)": 97.7,
      "BabyVision (w/o CI)": 82.0,
      "BabyVision (w/ CI)": 91.3,
      "HLE-VL (w/ tools)": 52.2,
      "ZeroBench (pass@5, w/o CI)": 24.0,
      "ZeroBench (pass@5, w/ CI)": 49.0,
      "ZeroBench-Sub": 48.5,
      "LogicVista": 91.9,
      "HiPhO": 90.0,
      "PhyX": 83.5,
      "SLAKE": 90.8,
      "MedXpertQA-MM": 80.4,
      "PMC-VQA": 66.2,
      "OSWorld-Verified": 86.1,
      "OSWorld 2.0 (binary)": 19.4,
      "OSWorld 2.0 (partial)": 46.7,
      "ScreenSpot Pro": 84.5,
      "WebArena-Verified": 66.8,
      "AndroidWorld": 85.3,
      "MobileWorld": 77.8,
      "ClawEval-MM (pass@3)": 77.2,
      "ClawEval-MM (avg)": 74.8,
      "Vision2Web": 69.0,
      "QwenBlenderBench": 69.9,
      "Parametric CAD Bench": 91.5,
      "RecreationBench": 51.7,
      "PresentBench": 79.6,
      "CharXiv RQ (w/o CI)": 88.4,
      "CharXiv RQ (w/ CI)": 93.5,
      "OmniDocBench 1.5": 92.1,
      "OCR-Bench-V2 (EN)": 74.2,
      "OCR-Bench-V2 (ZH)": 68.3,
      "CC-OCR-Bench-V2": 79.6,
      "MTVQA-Test": 56.6,
      "MADQA": 91.8,
      "QwenVisualOffice": 44.6,
      "RealWorldQA": 88.0,
      "ERQA": 77.8,
      "LingoQA": 84.8,
      "SURDS": 77.8,
      "SimpleVQA": 75.0,
      "WorldVQA": 53.2,
      "MMStar": 85.9,
      "PerceptionBench": 63.5,
      "CountQA": 82.4,
      "RefAdv-S": 80.2,
      "Dense200": 87.0,
      "COCO": 78.7,
      "VisFactor": 60.8,
      "VLMsAreBiased": 88.3,
      "VideoMME (w/ subtitles)": 90.4,
      "VideoMME v2 (w/ subtitles)": 68.3,
      "VideoMMMU": 88.7,
      "MMVU": 82.4,
      "MLVU (M-Avg)": 90.8,
      "TVBench": 81.9,
      "LVBench": 81.8,
      "LVBench (w/ memory)": 85.6,
      "EgoLife (w/ memory)": 80.3,
      "VideoDR (w/ search)": 73.2
    },
    "official_id": "Qwen/Qwen3.8-2.4T-A95B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B"
      },
      {
        "label": "Qwen 공식 블로그(Qwen3.8 발표)",
        "url": "https://qwen.ai/blog?id=qwen3.8"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
    "benchmark_sources": {
      "Terminal Bench 2.1": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "SWE-bench Pro": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "DeepSWE 1.1": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "NL2Repo-Bench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "FrontierSWE": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "MLS-Bench-Lite": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "PaperBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "AndroidBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "QwenSWEBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "QwenQoderBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "CoWorkBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "WorkSpaceBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "JobBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "SkillsBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "Automation-Bench (Pass@1)": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "Toolathlon Verified (Pass@1)": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "WideSearch": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "HLE w/ tools": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "GPQA Diamond": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "HLE": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "IFBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "HealthBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "PLawBench": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "PRBench-Legal": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "PRBench-Finance": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "MRCR v2 256K (8-needle)": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "LongBench v2": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "Agents' Last Exam (pass)": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "Agents' Last Exam (score)": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "OneMillion-Bench (expert score)": "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B",
      "MMMU-Pro": "https://qwen.ai/blog?id=qwen3.8",
      "MathVision (w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "MathVision (w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "BabyVision (w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "BabyVision (w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "HLE-VL (w/ tools)": "https://qwen.ai/blog?id=qwen3.8",
      "ZeroBench (pass@5, w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "ZeroBench (pass@5, w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "ZeroBench-Sub": "https://qwen.ai/blog?id=qwen3.8",
      "LogicVista": "https://qwen.ai/blog?id=qwen3.8",
      "HiPhO": "https://qwen.ai/blog?id=qwen3.8",
      "PhyX": "https://qwen.ai/blog?id=qwen3.8",
      "SLAKE": "https://qwen.ai/blog?id=qwen3.8",
      "MedXpertQA-MM": "https://qwen.ai/blog?id=qwen3.8",
      "PMC-VQA": "https://qwen.ai/blog?id=qwen3.8",
      "OSWorld-Verified": "https://qwen.ai/blog?id=qwen3.8",
      "OSWorld 2.0 (binary)": "https://qwen.ai/blog?id=qwen3.8",
      "OSWorld 2.0 (partial)": "https://qwen.ai/blog?id=qwen3.8",
      "ScreenSpot Pro": "https://qwen.ai/blog?id=qwen3.8",
      "WebArena-Verified": "https://qwen.ai/blog?id=qwen3.8",
      "AndroidWorld": "https://qwen.ai/blog?id=qwen3.8",
      "MobileWorld": "https://qwen.ai/blog?id=qwen3.8",
      "ClawEval-MM (pass@3)": "https://qwen.ai/blog?id=qwen3.8",
      "ClawEval-MM (avg)": "https://qwen.ai/blog?id=qwen3.8",
      "Vision2Web": "https://qwen.ai/blog?id=qwen3.8",
      "QwenBlenderBench": "https://qwen.ai/blog?id=qwen3.8",
      "Parametric CAD Bench": "https://qwen.ai/blog?id=qwen3.8",
      "RecreationBench": "https://qwen.ai/blog?id=qwen3.8",
      "PresentBench": "https://qwen.ai/blog?id=qwen3.8",
      "CharXiv RQ (w/o CI)": "https://qwen.ai/blog?id=qwen3.8",
      "CharXiv RQ (w/ CI)": "https://qwen.ai/blog?id=qwen3.8",
      "OmniDocBench 1.5": "https://qwen.ai/blog?id=qwen3.8",
      "OCR-Bench-V2 (EN)": "https://qwen.ai/blog?id=qwen3.8",
      "OCR-Bench-V2 (ZH)": "https://qwen.ai/blog?id=qwen3.8",
      "CC-OCR-Bench-V2": "https://qwen.ai/blog?id=qwen3.8",
      "MTVQA-Test": "https://qwen.ai/blog?id=qwen3.8",
      "MADQA": "https://qwen.ai/blog?id=qwen3.8",
      "QwenVisualOffice": "https://qwen.ai/blog?id=qwen3.8",
      "RealWorldQA": "https://qwen.ai/blog?id=qwen3.8",
      "ERQA": "https://qwen.ai/blog?id=qwen3.8",
      "LingoQA": "https://qwen.ai/blog?id=qwen3.8",
      "SURDS": "https://qwen.ai/blog?id=qwen3.8",
      "SimpleVQA": "https://qwen.ai/blog?id=qwen3.8",
      "WorldVQA": "https://qwen.ai/blog?id=qwen3.8",
      "MMStar": "https://qwen.ai/blog?id=qwen3.8",
      "PerceptionBench": "https://qwen.ai/blog?id=qwen3.8",
      "CountQA": "https://qwen.ai/blog?id=qwen3.8",
      "RefAdv-S": "https://qwen.ai/blog?id=qwen3.8",
      "Dense200": "https://qwen.ai/blog?id=qwen3.8",
      "COCO": "https://qwen.ai/blog?id=qwen3.8",
      "VisFactor": "https://qwen.ai/blog?id=qwen3.8",
      "VLMsAreBiased": "https://qwen.ai/blog?id=qwen3.8",
      "VideoMME (w/ subtitles)": "https://qwen.ai/blog?id=qwen3.8",
      "VideoMME v2 (w/ subtitles)": "https://qwen.ai/blog?id=qwen3.8",
      "VideoMMMU": "https://qwen.ai/blog?id=qwen3.8",
      "MMVU": "https://qwen.ai/blog?id=qwen3.8",
      "MLVU (M-Avg)": "https://qwen.ai/blog?id=qwen3.8",
      "TVBench": "https://qwen.ai/blog?id=qwen3.8",
      "LVBench": "https://qwen.ai/blog?id=qwen3.8",
      "LVBench (w/ memory)": "https://qwen.ai/blog?id=qwen3.8",
      "EgoLife (w/ memory)": "https://qwen.ai/blog?id=qwen3.8",
      "VideoDR (w/ search)": "https://qwen.ai/blog?id=qwen3.8"
    },
    "benchmark_note": "공식 HF 모델 카드 비교표의 Qwen3.8-Max 열 값(= 2.4T-A95B 오픈 체크포인트의 API 명칭). QwenReactBench 1724·QwenSVGBench 1713은 레이팅 척도(>100)라 제외. 추가: 동일 모델(Qwen3.8-Max = 2.4T-A95B 오픈웨이트)의 qwen.ai 발표 블로그 멀티모달 표 전체 수치(비전·문서·공간·비디오)를 블로그 출처로 병기 — 텍스트 표 값은 HF 카드와 동일 확인.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-101",
    "name": "Grok 4.6",
    "date": "2026-08-12",
    "sortDate": "2026-08-12",
    "month": "2026-08",
    "monthName": "August",
    "company": "xAI / SpaceXAI",
    "family": "Grok",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "long-running agents",
      "coding",
      "visual work",
      "knowledge work"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "CursorBench v3.2": 69.9,
      "DeepSWE v1.1": 65.9,
      "FrontierCode v1.1 (Extended)": 61.3,
      "APEX-Agents": 57.5,
      "Terminal-Bench v3.0": 26.0,
      "APEX-SWE": 56.4,
      "Harvey LAB (Vals)": 15.8
    },
    "official_id": "grok-4-6",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://x.ai/news/grok-4-6"
      }
    ],
    "release_date_source": "https://x.ai/news/grok-4-6",
    "parameter_source": "https://x.ai/news/grok-4-6",
    "benchmark_sources": {
      "CursorBench v3.2": "https://x.ai/news/grok-4-6",
      "DeepSWE v1.1": "https://x.ai/news/grok-4-6",
      "FrontierCode v1.1 (Extended)": "https://x.ai/news/grok-4-6",
      "APEX-Agents": "https://x.ai/news/grok-4-6",
      "Terminal-Bench v3.0": "https://x.ai/news/grok-4-6",
      "APEX-SWE": "https://x.ai/news/grok-4-6",
      "Harvey LAB (Vals)": "https://x.ai/news/grok-4-6"
    },
    "benchmark_note": "xAI 공식 발표 페이지의 평가 표/차트 중 Grok 4.6 (High) 열 값. DeepSWE는 Datacurve가 수행한 mini-swe-agent 하네스. AA Intelligence Index(61)·GDPVal-AA v2(Elo 1753)·AA-Briefcase(1577)는 제3자 지표·레이팅이라 제외. 페이지 각주: 경쟁사 수치는 각 개발사 시스템 카드·공개 리더보드 인용.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-102",
    "name": "DeepSeek-V4-Pro-0813",
    "date": "2026-08-13",
    "sortDate": "2026-08-13",
    "month": "2026-08",
    "monthName": "August",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (0813 snapshot 공식 카드에 총/활성 파라미터 별도 표기 없음)",
    "architecture": "Sparse MoE with CSA/HCA",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal-Bench 2.1": 87.9,
      "NL2Repo": 61.5,
      "CyberGym": 83.3,
      "DeepSWE": 62.7,
      "Toolathlon Verified": 74.1
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Pro-0813",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813"
      }
    ],
    "release_date_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
      "NL2Repo": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
      "CyberGym": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
      "DeepSWE": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813",
      "Toolathlon Verified": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813"
    },
    "benchmark_note": "DeepSeek 공식 0813 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-103",
    "name": "Gemini 3.7 Flash",
    "date": "2026-08-13",
    "sortDate": "2026-08-13",
    "month": "2026-08",
    "monthName": "August",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [
      "coding",
      "agents",
      "knowledge work"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "FrontierCode 1.1": 43.6,
      "DeepSWE v1.1": 65.3,
      "Terminal-bench 2.1": 85.8,
      "Terminal-bench 3.0": 14.9,
      "AutomationBench (private set)": 30.4,
      "Harvey LAB-AA": 90.7,
      "GDP.pdf": 34.0,
      "CharXiv Reasoning (no tools)": 84.5,
      "CharXiv Reasoning (w/ tools)": 88.7,
      "LVBench": 85.4,
      "GDM-MRCR v2 8-needle (128k avg)": 97.0,
      "OSWorld-2.0": 47.9,
      "Agent's Last Exam (pass rate)": 26.3,
      "HLE-Verified": 53.6,
      "BioMysteryBench (human solvable)": 87.1,
      "BioMysteryBench (human difficult)": 43.5,
      "LABBench2": 82.1
    },
    "official_id": "gemini-3-7-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-7-flash/"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
    "benchmark_sources": {
      "FrontierCode 1.1": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "DeepSWE v1.1": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "Terminal-bench 2.1": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "Terminal-bench 3.0": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "AutomationBench (private set)": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "Harvey LAB-AA": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "GDP.pdf": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "CharXiv Reasoning (no tools)": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "CharXiv Reasoning (w/ tools)": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "LVBench": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "GDM-MRCR v2 8-needle (128k avg)": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "OSWorld-2.0": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "Agent's Last Exam (pass rate)": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "HLE-Verified": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "BioMysteryBench (human solvable)": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "BioMysteryBench (human difficult)": "https://deepmind.google/models/model-cards/gemini-3-7-flash/",
      "LABBench2": "https://deepmind.google/models/model-cards/gemini-3-7-flash/"
    },
    "benchmark_note": "공식 모델 카드 평가 표의 Gemini 3.7 Flash 열 값. AA Intelligence Index(56)·Code Arena(Elo 1588)·GDPVal-AA v2(Elo 1525)는 제3자 지표·레이팅이라 제외. 안전 평가는 증감폭(pp)이라 미수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-104",
    "name": "Qwen3.8-27B",
    "date": "2026-08-14",
    "sortDate": "2026-08-14",
    "month": "2026-08",
    "monthName": "August",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "27B dense",
    "architecture": "Dense Transformer",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-bench Pro": 61.7,
      "Terminal-Bench 2.1": 73.0,
      "DeepSWE": 42.2
    },
    "official_id": "Qwen/Qwen3.8-27B",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.8-27B"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.8-27B",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.8-27B",
    "benchmark_sources": {
      "SWE-bench Pro": "https://huggingface.co/Qwen/Qwen3.8-27B",
      "Terminal-Bench 2.1": "https://huggingface.co/Qwen/Qwen3.8-27B",
      "DeepSWE": "https://huggingface.co/Qwen/Qwen3.8-27B"
    },
    "benchmark_note": "Qwen 공식 Qwen3.8-27B 모델 카드 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-105",
    "name": "GLM-5.3",
    "date": "2026-08-14",
    "sortDate": "2026-08-14",
    "month": "2026-08",
    "monthName": "August",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (공식 카드에는 753B model size만 표기; 총/활성 파라미터 미공개)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "GLM-5.2 계열이라는 이유로 GLM-5의 744B/40B 수치를 복사하지 않았습니다. 공식 카드의 model size도 총 파라미터 수로 간주하지 않습니다.",
    "benchmarks": {
      "Terminal Bench 2.1": 88.2,
      "Terminal Bench 3.0": 28.3,
      "DeepSWE (v1.1)": 66.9,
      "NL2Repo": 58.0,
      "ProgramBench (Almost Solved)": 19.0,
      "FrontierSWE": 78.1,
      "SWE-Marathon (v1.1)": 42.5,
      "PostTrainBench": 39.8,
      "CyberGym": 84.5,
      "ExploitBench": 54.4,
      "Toolathlon Verified": 73.0,
      "AutomationBench (v1.0.6)": 48.2,
      "Agents' Last Exam (ALE-CLI)": 28.5,
      "HLE w/ Tools": 62.5
    },
    "official_id": "zai-org/GLM-5.3",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5.3"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5.3",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5.3",
    "benchmark_sources": {
      "Terminal Bench 2.1": "https://huggingface.co/zai-org/GLM-5.3",
      "Terminal Bench 3.0": "https://huggingface.co/zai-org/GLM-5.3",
      "DeepSWE (v1.1)": "https://huggingface.co/zai-org/GLM-5.3",
      "NL2Repo": "https://huggingface.co/zai-org/GLM-5.3",
      "ProgramBench (Almost Solved)": "https://huggingface.co/zai-org/GLM-5.3",
      "FrontierSWE": "https://huggingface.co/zai-org/GLM-5.3",
      "SWE-Marathon (v1.1)": "https://huggingface.co/zai-org/GLM-5.3",
      "PostTrainBench": "https://huggingface.co/zai-org/GLM-5.3",
      "CyberGym": "https://huggingface.co/zai-org/GLM-5.3",
      "ExploitBench": "https://huggingface.co/zai-org/GLM-5.3",
      "Toolathlon Verified": "https://huggingface.co/zai-org/GLM-5.3",
      "AutomationBench (v1.0.6)": "https://huggingface.co/zai-org/GLM-5.3",
      "Agents' Last Exam (ALE-CLI)": "https://huggingface.co/zai-org/GLM-5.3",
      "HLE w/ Tools": "https://huggingface.co/zai-org/GLM-5.3"
    },
    "benchmark_note": "공식 HF 모델 카드 비교표의 GLM-5.3 열 값. ExploitGym(2h/6h 시도 횟수, 비% 척도)과 GDPval-AA v2(Elo 1769)는 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-106",
    "name": "DeepSeek-V4-Flash-Vision-Exp",
    "date": "2026-08-21",
    "sortDate": "2026-08-21",
    "month": "2026-08",
    "monthName": "August",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Experimental",
    "parameters": "정확한 수치 미공개 (Flash backbone·vision module을 합산한 총/활성 수치 공식 별도 표기 없음)",
    "architecture": "Vision-language sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Vision experiment is tracked against the V4 Flash backbone; vision modules are not folded into the backbone count.",
    "benchmarks": {
      "Terminal-Bench 2.1": 83.9,
      "NL2Repo": 57.7,
      "CyberGym": 75.3,
      "DeepSWE": 59.3,
      "Toolathlon Verified": 75.9
    },
    "official_id": "deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp"
      }
    ],
    "release_date_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
      "NL2Repo": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
      "CyberGym": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
      "DeepSWE": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp",
      "Toolathlon Verified": "https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp"
    },
    "benchmark_note": "DeepSeek 공식 vision experiment 모델 카드 수치입니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-107",
    "name": "Ling-3.0-tiny",
    "date": "2026-08-21~22",
    "sortDate": "2026-08-21",
    "month": "2026-08",
    "monthName": "August",
    "company": "Ant Group / InclusionAI",
    "family": "Ling 3.0",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "7.9B total / 1.3B active (MoE)",
    "architecture": "Dense Linear Attention",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "BFCL-v4 (FC)": 62.72,
      "Terminal-Bench 2.1": 27.7,
      "ArtifactsBench": 47.93,
      "SciCode": 24.2,
      "GPQA Diamond": 73.4,
      "HLE": 9.3,
      "HMMT-Feb26": 70.31,
      "IMO-AnswerBench": 71.03,
      "IFBench": 63.61,
      "LIFEBench": 62.3,
      "Multi-IF": 83.15
    },
    "official_id": "inclusionAI/Ling-3.0-tiny",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ling-3.0-tiny"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
    "parameter_source": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
    "benchmark_sources": {
      "BFCL-v4 (FC)": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "Terminal-Bench 2.1": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "ArtifactsBench": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "SciCode": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "GPQA Diamond": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "HLE": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "HMMT-Feb26": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "IMO-AnswerBench": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "IFBench": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "LIFEBench": "https://huggingface.co/inclusionAI/Ling-3.0-tiny",
      "Multi-IF": "https://huggingface.co/inclusionAI/Ling-3.0-tiny"
    },
    "benchmark_note": "공식 HF 모델 카드 벤치마크 이미지의 Ling-3.0-tiny (Thinking) 값. AA 계열(GDPval v2-AA Elo 772, AA-LCR 58.7, AA-Omniscience Accuracy 8.52 / Non-Hallucination 69.54, TAU3-Banking-AA 20.8)은 제3자 지표라 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-108",
    "name": "Ling-3.0-flash",
    "date": "2026-08-21~22",
    "sortDate": "2026-08-21",
    "month": "2026-08",
    "monthName": "August",
    "company": "Ant Group / InclusionAI",
    "family": "Ling 3.0",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "124B total / 5.1B active (MoE)",
    "architecture": "Sparse MoE with KDA/MLA hybrid attention",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": [
      "256K native",
      "expandable toward 1M"
    ],
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "SWE-Bench Pro": 56.6,
      "SWE-Bench Multilingual": 72.4,
      "Terminal-Bench 2.1": 57.0,
      "ArtifactsBench": 77.0,
      "MiniAppBench": 25.3,
      "AntSWEBench": 52.2,
      "MCP-Atlas": 65.5,
      "SkillsBench": 44.8,
      "BFCL-v4": 73.0,
      "WideSearch": 73.6,
      "BrowseComp (w/ ctx mgmt)": 72.2,
      "BrowseComp (multi-agent)": 82.0,
      "Draco": 70.4,
      "IFBench": 74.5,
      "SysBench": 93.6,
      "LIFEBench": 77.3,
      "AIME26": 93.2,
      "HMMT-Feb26": 87.0,
      "IMO-AnswerBench": 83.7,
      "HLE": 22.7,
      "LiveCodeBench (2408-2505)": 82.8,
      "MRCR 128K": 90.8,
      "MRCR 256K": 81.1,
      "Multi-IF": 87.7
    },
    "official_id": "inclusionAI/Ling-3.0-flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ling-3.0-flash"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
    "parameter_source": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
    "benchmark_sources": {
      "SWE-Bench Pro": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "SWE-Bench Multilingual": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "Terminal-Bench 2.1": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "ArtifactsBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "MiniAppBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "AntSWEBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "MCP-Atlas": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "SkillsBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "BFCL-v4": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "WideSearch": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "BrowseComp (w/ ctx mgmt)": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "BrowseComp (multi-agent)": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "Draco": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "IFBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "SysBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "LIFEBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "AIME26": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "HMMT-Feb26": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "IMO-AnswerBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "HLE": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "LiveCodeBench (2408-2505)": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "MRCR 128K": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "MRCR 256K": "https://huggingface.co/inclusionAI/Ling-3.0-flash",
      "Multi-IF": "https://huggingface.co/inclusionAI/Ling-3.0-flash"
    },
    "benchmark_note": "공식 HF 모델 카드 벤치마크 이미지의 Ling-3.0-flash 열 값. AA 접미 지표(Tau3-banking-AA 28.0, GDPVal v2-AA Elo 1107, AA-LCR 65.1)는 제3자 지표라 제외. BrowseComp는 컨텍스트 관리/멀티에이전트 두 설정 병기.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-109",
    "name": "Granite 4.2",
    "date": "2026-08-25",
    "sortDate": "2026-08-25",
    "month": "2026-08",
    "monthName": "August",
    "company": "IBM",
    "family": "Granite",
    "type": "LLM family",
    "category": "LLM",
    "status": "GA",
    "parameters": "3B, 8B, 30B dense language variants",
    "architecture": "Reasoning & Agentic Transformer",
    "modalities": [],
    "focus": [
      "native reasoning",
      "coding",
      "tool use",
      "agents"
    ],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "τ³-bench (3B)": 50.99,
      "τ³-bench (AVG) (3B)": 45.78,
      "BFCL (v4) (3B)": 52.41,
      "ProfBench (3B)": 32.1,
      "AIME25 (3B)": 78.33,
      "HMMT Feb25 (3B)": 66.67,
      "GPQA (3B)": 54.8,
      "LiveCodeBench v6 (3B)": 69.71,
      "SciCode (3B)": 24.11,
      "MMLU-Pro (3B)": 67.84,
      "MMLU-ProX lite (IBM) (3B)": 27.78,
      "Arena-Hard-V2 (3B)": 34.96,
      "IFBench (prompt) (3B)": 74.33,
      "RULER 64K (3B)": 67.52,
      "RULER 128K (3B)": 55.3,
      "SWE Bench Multilingual (8B)": 30.78,
      "SWE Bench Pro (8B)": 19.11,
      "SWE Bench Verified (8B)": 47.67,
      "Terminal-Bench 2.1 (8B)": 20.56,
      "τ³-bench (8B)": 66.34,
      "τ³-bench (AVG) (8B)": 58.06,
      "BFCL (v4) (8B)": 52.39,
      "ProfBench (8B)": 41.2,
      "BirdBench (8B)": 41.07,
      "AIME25 (8B)": 86.67,
      "HMMT Feb25 (8B)": 78.33,
      "GPQA (8B)": 64.14,
      "LiveCodeBench v6 (8B)": 73.24,
      "SciCode (8B)": 36.09,
      "MMLU-Pro (8B)": 74.04,
      "MMLU-ProX lite (IBM) (8B)": 61.06,
      "Arena-Hard-V2 (8B)": 65.19,
      "IFBench (prompt) (8B)": 79.33,
      "RULER 64K (8B)": 80.99,
      "RULER 128K (8B)": 71.41,
      "SWE Bench Multilingual (30B)": 41.89,
      "SWE Bench Pro (30B)": 33.29,
      "SWE Bench Verified (30B)": 57.0,
      "Terminal-Bench 2.1 (30B)": 29.24,
      "τ³-bench (30B)": 68.05,
      "τ³-bench (AVG) (30B)": 62.0,
      "BFCL (v4) (30B)": 61.39,
      "ProfBench (30B)": 42.9,
      "BirdBench (30B)": 41.85,
      "AIME25 (30B)": 89.17,
      "HMMT Feb25 (30B)": 89.17,
      "GPQA (30B)": 66.41,
      "LiveCodeBench v6 (30B)": 75.77,
      "SciCode (30B)": 38.76,
      "MMLU-Pro (30B)": 77.6,
      "MMLU-ProX lite (IBM) (30B)": 66.64,
      "Arena-Hard-V2 (30B)": 67.93,
      "IFBench (prompt) (30B)": 77.17,
      "RULER 64K (30B)": 89.96,
      "RULER 128K (30B)": 81.38
    },
    "official_id": "ibm-granite/granite-4.2-30b",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/ibm-granite/granite-4.2-30b"
      },
      {
        "label": "공식 모델 컬렉션",
        "url": "https://huggingface.co/collections/ibm-granite/granite-42-language-models"
      }
    ],
    "release_date_source": "https://huggingface.co/ibm-granite/granite-4.2-30b",
    "parameter_source": "https://huggingface.co/collections/ibm-granite/granite-42-language-models",
    "benchmark_sources": {
      "τ³-bench (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "τ³-bench (AVG) (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "BFCL (v4) (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "ProfBench (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "AIME25 (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "HMMT Feb25 (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "GPQA (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "LiveCodeBench v6 (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "SciCode (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "MMLU-Pro (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "MMLU-ProX lite (IBM) (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "Arena-Hard-V2 (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "IFBench (prompt) (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "RULER 64K (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "RULER 128K (3B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "SWE Bench Multilingual (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "SWE Bench Pro (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "SWE Bench Verified (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "Terminal-Bench 2.1 (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "τ³-bench (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "τ³-bench (AVG) (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "BFCL (v4) (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "ProfBench (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "BirdBench (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "AIME25 (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "HMMT Feb25 (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "GPQA (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "LiveCodeBench v6 (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "SciCode (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "MMLU-Pro (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "MMLU-ProX lite (IBM) (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "Arena-Hard-V2 (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "IFBench (prompt) (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "RULER 64K (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "RULER 128K (8B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "SWE Bench Multilingual (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "SWE Bench Pro (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "SWE Bench Verified (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "Terminal-Bench 2.1 (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "τ³-bench (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "τ³-bench (AVG) (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "BFCL (v4) (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "ProfBench (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "BirdBench (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "AIME25 (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "HMMT Feb25 (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "GPQA (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "LiveCodeBench v6 (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "SciCode (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "MMLU-Pro (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "MMLU-ProX lite (IBM) (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "Arena-Hard-V2 (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "IFBench (prompt) (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "RULER 64K (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b",
      "RULER 128K (30B)": "https://huggingface.co/ibm-granite/granite-4.2-30b"
    },
    "benchmark_note": "공식 HF 모델 카드(Granite 4.2 패밀리 표)의 3B/8B/30B 열 값을 크기별로 전부 수록. GDPval(Elo)은 제외. 3B는 SWE-Bench 계열 미평가(카드상 NA).",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-110",
    "name": "Qwen3.8-Flash-Next",
    "date": "2026-08-26",
    "sortDate": "2026-08-26",
    "month": "2026-08",
    "monthName": "August",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "125B main / 6B active + 51B N-gram embedding + 4B MTP",
    "architecture": "Hybrid sparse architecture with N-gram embedding",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "The N-gram embedding and MTP are reported separately by the official card.",
    "benchmarks": {
      "DeepSWE": 58.7,
      "SWE-bench Pro": 62.5,
      "SWE-bench Multilingual": 81.0,
      "NL2Repo": 48.1,
      "Toolathlon Verified": 73.5
    },
    "official_id": "Qwen/Qwen3.8-Flash-Next",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next"
      }
    ],
    "release_date_source": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
    "parameter_source": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
    "benchmark_sources": {
      "DeepSWE": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "SWE-bench Pro": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "SWE-bench Multilingual": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "NL2Repo": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next",
      "Toolathlon Verified": "https://huggingface.co/Qwen/Qwen3.8-Flash-Next"
    },
    "benchmark_note": "Qwen 공식 Qwen3.8-Flash-Next 모델 카드의 자기 보고 수치입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-04",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-111",
    "name": "GLM-5.3-Flash",
    "date": "2026-08-26",
    "sortDate": "2026-08-26",
    "month": "2026-08",
    "monthName": "August",
    "company": "Z.ai",
    "family": "GLM",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "320B total / 18B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "Corrected from the erroneous ~30B/~3B entry: the official card reports 320B total / 18B active.",
    "benchmarks": {
      "Terminal Bench 2.1": 84.3,
      "DeepSWE (v1.1)": 63.4,
      "Agents' Last Exam (ALE-CLI)": 26.3,
      "AutomationBench": 48.8,
      "HLE w/ Tools": 55.3
    },
    "official_id": "zai-org/GLM-5.3-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/zai-org/GLM-5.3-Flash"
      }
    ],
    "release_date_source": "https://huggingface.co/zai-org/GLM-5.3-Flash",
    "parameter_source": "https://huggingface.co/zai-org/GLM-5.3-Flash",
    "benchmark_sources": {
      "Terminal Bench 2.1": "https://huggingface.co/zai-org/GLM-5.3-Flash",
      "DeepSWE (v1.1)": "https://huggingface.co/zai-org/GLM-5.3-Flash",
      "Agents' Last Exam (ALE-CLI)": "https://huggingface.co/zai-org/GLM-5.3-Flash",
      "AutomationBench": "https://huggingface.co/zai-org/GLM-5.3-Flash",
      "HLE w/ Tools": "https://huggingface.co/zai-org/GLM-5.3-Flash"
    },
    "benchmark_note": "공식 HF 모델 카드의 벤치마크 차트 이미지(bench_53.png) 값. GDPVal-AA v2(Elo 1773)는 제외.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-112",
    "name": "Hy4-preview",
    "date": "2026-08-28",
    "sortDate": "2026-08-28",
    "month": "2026-08",
    "monthName": "August",
    "company": "Tencent",
    "family": "Hy / Hunyuan",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "770B backbone / 49B active + 10B MTP total / 0.7B MTP active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [],
    "focus": [],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": ">1M",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Open Weights (Hugging Face / GitHub)",
    "note": "Backbone and MTP counts are reported separately in the official model card.",
    "benchmarks": {
      "SWE-bench Multilingual": 82.9,
      "SWE-bench Pro": 65.7,
      "DeepSWE": 64.3,
      "SWE Atlas - Codebase Q&A": 64.0,
      "SWE Atlas - Test Writing": 57.8,
      "SWE Atlas - Refactoring": 53.3,
      "SWE-Marathon": 31.9,
      "Terminal-Bench 2.1": 85.4,
      "NL2Repo-Bench": 58.9,
      "CyberGym": 78.4,
      "ProgramBench": 17.5,
      "PostTrainBench V1.1": 35.6,
      "Harbor-Index": 39.6,
      "Hy-Backend 2.0 (internal)": 35.2,
      "Hy-SWE Max Verified (internal)": 64.2,
      "Hy-CompanyBench V2 (internal)": 62.4,
      "WideSearch": 83.9,
      "OneMillionBench (w/ tools)": 65.4,
      "DRACO": 77.2,
      "Hy-LifeSearch (internal)": 49.2,
      "Hy-BrowseComp-Pro2 (internal)": 56.1,
      "OfficeQA Pro": 66.2,
      "MCP-Atlas (public)": 83.7,
      "Toolathlon-Verified": 74.1,
      "APEX-Agents (pass@1)": 37.1,
      "SkillsBench (79, text-only)": 62.9,
      "JobBench": 61.7,
      "WorkspaceBench": 60.2,
      "Agents' Last Exam (ALE-CLI)": 22.8,
      "AutomationBench (v1.0.6)": 32.1,
      "BankerToolBench": 78.6,
      "E-Bench (internal)": 77.1,
      "E-Bench-Code (internal)": 79.0,
      "Hy-FinAgentBench (internal)": 79.7,
      "Hy-FinmodelBench v2 (internal)": 57.0,
      "BioMysteryBench": 71.3,
      "HLE (w/ tools, text-only)": 55.4,
      "CritPt (official)": 16.9,
      "GPQA Diamond": 92.3,
      "HLE (no tools, text-only)": 43.4,
      "SUPERChem": 66.4,
      "ArXivMath": 66.6,
      "HorizonMath (pass@4)": 8.8,
      "MathArena Apex 2025": 74.2,
      "BrokenArXiv": 54.6
    },
    "official_id": "tencent/Hy4-preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/tencent/Hy4-preview"
      }
    ],
    "release_date_source": "https://huggingface.co/tencent/Hy4-preview",
    "parameter_source": "https://huggingface.co/tencent/Hy4-preview",
    "benchmark_sources": {
      "SWE-bench Multilingual": "https://huggingface.co/tencent/Hy4-preview",
      "SWE-bench Pro": "https://huggingface.co/tencent/Hy4-preview",
      "DeepSWE": "https://huggingface.co/tencent/Hy4-preview",
      "SWE Atlas - Codebase Q&A": "https://huggingface.co/tencent/Hy4-preview",
      "SWE Atlas - Test Writing": "https://huggingface.co/tencent/Hy4-preview",
      "SWE Atlas - Refactoring": "https://huggingface.co/tencent/Hy4-preview",
      "SWE-Marathon": "https://huggingface.co/tencent/Hy4-preview",
      "Terminal-Bench 2.1": "https://huggingface.co/tencent/Hy4-preview",
      "NL2Repo-Bench": "https://huggingface.co/tencent/Hy4-preview",
      "CyberGym": "https://huggingface.co/tencent/Hy4-preview",
      "ProgramBench": "https://huggingface.co/tencent/Hy4-preview",
      "PostTrainBench V1.1": "https://huggingface.co/tencent/Hy4-preview",
      "Harbor-Index": "https://huggingface.co/tencent/Hy4-preview",
      "Hy-Backend 2.0 (internal)": "https://huggingface.co/tencent/Hy4-preview",
      "Hy-SWE Max Verified (internal)": "https://huggingface.co/tencent/Hy4-preview",
      "Hy-CompanyBench V2 (internal)": "https://huggingface.co/tencent/Hy4-preview",
      "WideSearch": "https://huggingface.co/tencent/Hy4-preview",
      "OneMillionBench (w/ tools)": "https://huggingface.co/tencent/Hy4-preview",
      "DRACO": "https://huggingface.co/tencent/Hy4-preview",
      "Hy-LifeSearch (internal)": "https://huggingface.co/tencent/Hy4-preview",
      "Hy-BrowseComp-Pro2 (internal)": "https://huggingface.co/tencent/Hy4-preview",
      "OfficeQA Pro": "https://huggingface.co/tencent/Hy4-preview",
      "MCP-Atlas (public)": "https://huggingface.co/tencent/Hy4-preview",
      "Toolathlon-Verified": "https://huggingface.co/tencent/Hy4-preview",
      "APEX-Agents (pass@1)": "https://huggingface.co/tencent/Hy4-preview",
      "SkillsBench (79, text-only)": "https://huggingface.co/tencent/Hy4-preview",
      "JobBench": "https://huggingface.co/tencent/Hy4-preview",
      "WorkspaceBench": "https://huggingface.co/tencent/Hy4-preview",
      "Agents' Last Exam (ALE-CLI)": "https://huggingface.co/tencent/Hy4-preview",
      "AutomationBench (v1.0.6)": "https://huggingface.co/tencent/Hy4-preview",
      "BankerToolBench": "https://huggingface.co/tencent/Hy4-preview",
      "E-Bench (internal)": "https://huggingface.co/tencent/Hy4-preview",
      "E-Bench-Code (internal)": "https://huggingface.co/tencent/Hy4-preview",
      "Hy-FinAgentBench (internal)": "https://huggingface.co/tencent/Hy4-preview",
      "Hy-FinmodelBench v2 (internal)": "https://huggingface.co/tencent/Hy4-preview",
      "BioMysteryBench": "https://huggingface.co/tencent/Hy4-preview",
      "HLE (w/ tools, text-only)": "https://huggingface.co/tencent/Hy4-preview",
      "CritPt (official)": "https://huggingface.co/tencent/Hy4-preview",
      "GPQA Diamond": "https://huggingface.co/tencent/Hy4-preview",
      "HLE (no tools, text-only)": "https://huggingface.co/tencent/Hy4-preview",
      "SUPERChem": "https://huggingface.co/tencent/Hy4-preview",
      "ArXivMath": "https://huggingface.co/tencent/Hy4-preview",
      "HorizonMath (pass@4)": "https://huggingface.co/tencent/Hy4-preview",
      "MathArena Apex 2025": "https://huggingface.co/tencent/Hy4-preview",
      "BrokenArXiv": "https://huggingface.co/tencent/Hy4-preview"
    },
    "benchmark_note": "공식 HF 모델 카드 benchmark.jpg/benchmark-appendix.jpg 표의 Hy4 preview 열 값 전수 수록. GDPval-AA V2(Elo 1678)는 제외. 사내 internal 지표는 명기.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-113",
    "name": "Claude Fable 5.1",
    "date": "2026-09-01",
    "sortDate": "2026-09-01",
    "month": "2026-09",
    "monthName": "September",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "",
    "note": "",
    "benchmarks": {
      "Terminal-Bench Science 0.1": 52.6,
      "Terminal-Bench 4.0": 55.8,
      "OSWorld 2.0 (partial)": 77.9,
      "OSWorld 2.0 (strict)": 41.7,
      "Humanity's Last Exam (without tools)": 60.9,
      "Humanity's Last Exam (w/ tools)": 65.0,
      "AutomationBench": 31.4,
      "CursorBench 3.2.0": 73.4
    },
    "official_id": "fable",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/claude/fable"
      }
    ],
    "release_date_source": "https://www.anthropic.com/claude/fable",
    "parameter_source": "https://www.anthropic.com/claude/fable",
    "benchmark_sources": {
      "Terminal-Bench Science 0.1": "https://www.anthropic.com/claude/fable",
      "Terminal-Bench 4.0": "https://www.anthropic.com/claude/fable",
      "OSWorld 2.0 (partial)": "https://www.anthropic.com/claude/fable",
      "OSWorld 2.0 (strict)": "https://www.anthropic.com/claude/fable",
      "Humanity's Last Exam (without tools)": "https://www.anthropic.com/claude/fable",
      "Humanity's Last Exam (w/ tools)": "https://www.anthropic.com/claude/fable",
      "AutomationBench": "https://www.anthropic.com/claude/fable",
      "CursorBench 3.2.0": "https://www.anthropic.com/claude/fable"
    },
    "benchmark_note": "Anthropic 공식 제품 페이지 기준. 프로덕션 세이프가드를 켠 상태로 평가 — 개입된 태스크는 OSWorld 2.0에서 Fable 5.1·Fable 5 모두 0점 처리(AutomationBench는 Fable 5가 0점), 그 외 사이버·바이오 태스크는 Opus 4.8/Opus 5가 대신 수행해 점수가 낮아질 수 있음. Terminal-Bench 4.0은 세이프가드 해제형 Mythos 5.1이 60.9%. Terminal-Bench Science 0.1은 SE ±3.5~4.5pt (공개 리더보드: Opus 5 30.0%, Fable 5 21.4% — Anthropic 재현 29.0%/24.7%). OSWorld 2.0은 2026년 8월 태스크 릴리스 기준이라 이전 공표값과 직접 비교 불가. GDPval-AA v2 1853은 Elo형 척도라 % 점수표에서 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-114",
    "name": "Claude Mythos 5.1",
    "date": "2026-09-01",
    "sortDate": "2026-09-01",
    "month": "2026-09",
    "monthName": "September",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "",
    "modalities": [],
    "focus": [],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "restricted",
    "note": "",
    "benchmarks": {
      "Terminal-Bench 4.0": 60.9
    },
    "official_id": "mythos",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/claude/mythos"
      }
    ],
    "release_date_source": "https://www.anthropic.com/claude/mythos",
    "parameter_source": "https://www.anthropic.com/claude/mythos",
    "benchmark_sources": {
      "Terminal-Bench 4.0": "https://www.anthropic.com/claude/mythos"
    },
    "benchmark_note": "Fable 5.1과 동일 기반 모델(세이프가드 완화형). Anthropic Mythos 페이지 비교표에서 Mythos 5.1 고유 수치는 Terminal-Bench 4.0 60.9%만 병기됐고 나머지 행은 Fable 5.1 값이 게시됨(세이프가드 개입 차이 설명 각주).",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-130",
    "name": "Qwen3.8-Max-0902",
    "date": "2026-09-02",
    "sortDate": "2026-09-02",
    "month": "2026-09",
    "monthName": "September",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (0902 snapshot 페이지에 별도 파라미터 공개 없음)",
    "architecture": "Hosted multimodal model",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "Agentic Coding",
      "Cowork",
      "Multimodal",
      "Tool Use"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial API (QwenCloud)",
    "context": "1M (1,000,000 tokens)",
    "languages": "Multilingual",
    "variants": [
      "qwen3.8-max-0902"
    ],
    "reasoning_effort": [],
    "availability": "QwenCloud API (qwen3.8-max-0902), DashScope",
    "note": "공식 QwenCloud 페이지의 0902 snapshot/API ID를 별도 레코드로 기록했습니다. Qwen3.8-Max 본체의 2.4T 수치를 이 snapshot에 자동 전이하지 않습니다.",
    "benchmarks": {},
    "official_id": "qwen3.8-max-0902",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.qwencloud.com/models/qwen3.8-max-0902"
      }
    ],
    "release_date_source": "https://www.qwencloud.com/models/qwen3.8-max-0902",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.8-max-0902",
    "benchmark_sources": {},
    "benchmark_note": "0902는 9/5부터 qwen3.8-max 엔드포인트에 적용된 스냅샷입니다. 별도 0902 전용 벤치마크 표는 미공개 — 8/3 출시 버전의 공식 표 전체 수치는 model-097(Qwen3.8-Max)에 수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-131",
    "name": "Muse Spark 1.3",
    "date": "2026-09-02",
    "sortDate": "2026-09-02",
    "month": "2026-09",
    "monthName": "September",
    "company": "Meta",
    "family": "Muse Spark",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Hosted agentic/coding model (Muse Code, Meta Model API)",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Agentic Coding",
      "Long-horizon agents",
      "Multitasking"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial API (Meta Model API)",
    "context": "",
    "languages": "",
    "variants": [
      "muse-spark-1.3"
    ],
    "reasoning_effort": [
      "xhigh (max reasoning added 2026-09-04)"
    ],
    "availability": "Muse Code, Meta Model API",
    "note": "공식 발표문은 reasoning mode 중 max가 추가 안전 테스트 이후 제공된다고 명시했습니다 (max reasoning 실제 제공일은 2026-09-04). 총/활성 파라미터와 컨텍스트 윈도우는 1차 자료에 숫자로 명시되지 않아 비워 두었습니다. 이 모델은 2026-09-04 감사에서 '공식 발표문 미확인'으로 제외 원장(model-115)에 보류됐었으나, 2026-09-08에 Meta AI Research 블로그에서 1차 발표문을 확인해 활성 레코드로 되돌렸습니다 (구 model-115 제외 항목은 삭제).",
    "benchmarks": {
      "JobBench": 64.9,
      "OSWorld 2.0 (partial)": 66.9,
      "OSWorld 2.0 (binary)": 32.0,
      "DeepSearchQA": 90.3,
      "Agentic IF Index (Internal)": 57.8,
      "AutomationBench": 49.6,
      "OpenAI MRCR v2 8-needle 256K-512K": 98.5,
      "OpenAI MRCR v2 8-needle 512K-1M": 98.1,
      "DeepSWE v1.1": 75.4,
      "SWE-Atlas-QnA": 59.4,
      "Terminal-Bench 2.1": 88.8
    },
    "official_id": "introducing-muse-spark-1-3",
    "official_sources": [
      {
        "label": "Meta AI Research 공식 발표문",
        "url": "https://research.meta.ai/blog/introducing-muse-spark-1-3"
      }
    ],
    "release_date_source": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
    "parameter_source": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
    "benchmark_sources": {
      "JobBench": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "OSWorld 2.0 (partial)": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "OSWorld 2.0 (binary)": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "DeepSearchQA": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "Agentic IF Index (Internal)": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "AutomationBench": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "OpenAI MRCR v2 8-needle 256K-512K": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "OpenAI MRCR v2 8-needle 512K-1M": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "DeepSWE v1.1": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "SWE-Atlas-QnA": "https://research.meta.ai/blog/introducing-muse-spark-1-3",
      "Terminal-Bench 2.1": "https://research.meta.ai/blog/introducing-muse-spark-1-3"
    },
    "benchmark_note": "공식 스코어카드(max reasoning). OSWorld 2.0은 08.08 버전, AutomationBench는 public v3 태스크셋, MRCR은 o200k_base 재빈 8-needle 변형. methodology 문서: 리더보드·자사 모델카드 값을 포함해 '비교 가능한 최고 primary-metric' 보고. GDPVal-AA v2 1754는 Elo형 척도라 % 점수표에서 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-132",
    "name": "Gemini 3.8 Flash",
    "date": "2026-09-02",
    "sortDate": "2026-09-02",
    "month": "2026-09",
    "monthName": "September",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Based on Gemini 3.7 Flash (official model card)",
    "modalities": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "focus": [
      "coding",
      "agents",
      "knowledge work",
      "cybersecurity-trained core"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial API",
    "context": "1M 입력 / 64K 출력 (공식 모델 카드)",
    "languages": "",
    "variants": [
      "gemini-3-8-flash"
    ],
    "reasoning_effort": [
      "customizable effort levels"
    ],
    "availability": "Gemini app, AI Mode, Gemini API (gemini-3-8-flash), Vertex AI, introductory $0.75/$3.75 per 1M (2026-12-31까지)",
    "note": "3주 만의 3.7 Flash 후속이며 6주 사이 세 번째 Flash 릴리스입니다. 공식 모델 카드에는 벤치마크 수치 표가 채워져 있지 않아(2026-09-08 확인), 숫자는 공식 블로그에 텍스트로 명시된 값만 기록했습니다.",
    "benchmarks": {
      "HLE-Verified": 54.9
    },
    "official_id": "gemini-3-8-flash",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://deepmind.google/models/model-cards/gemini-3-8-flash/"
      },
      {
        "label": "Google 공식 발표문",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      },
      {
        "label": "Vertex AI 모델 문서",
        "url": "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/3-8-flash"
      }
    ],
    "release_date_source": "https://deepmind.google/models/model-cards/gemini-3-8-flash/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-8-flash/",
    "benchmark_sources": {
      "HLE-Verified": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
    },
    "benchmark_note": "Google 공식 발표문에 텍스트로 명시된 HLE-Verified 값입니다. 차트 이미지만 공개된 지표는 기록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-133",
    "name": "Gemini 3.8 Flash Cyber",
    "date": "2026-09-02",
    "sortDate": "2026-09-02",
    "month": "2026-09",
    "monthName": "September",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Same shared core as Gemini 3.8 Flash, cyber-permissive mitigations",
    "modalities": [],
    "focus": [
      "cybersecurity",
      "vulnerability discovery",
      "automated patching"
    ],
    "open_weights": false,
    "license": "Proprietary (Fairwind Program gated access)",
    "context": "",
    "languages": "",
    "variants": [
      "gemini-3-8-flash-cyber"
    ],
    "reasoning_effort": [],
    "availability": "Fairwind Program 승인 방어를 통한 제한 제공",
    "note": "Gemini 3.5 Flash Cyber와 같이 제한 접근 사이버 방어 전용 변형입니다. 2026-09-08 기준 deepmind.google 모델 카드가 없는 404이며, Google/Fairwind 페이지 기준으로 기록했습니다.",
    "benchmarks": {
      "CWE-Bench (pass@1)": 47.2
    },
    "official_id": "3-8-flash-and-3-8-flash-cyber",
    "official_sources": [
      {
        "label": "Google 공식 발표문",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      },
      {
        "label": "Fairwind Program",
        "url": "https://deepmind.google/fairwind-program/"
      }
    ],
    "release_date_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
    "parameter_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/",
    "benchmark_sources": {
      "CWE-Bench (pass@1)": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
    },
    "benchmark_note": "Google 공식 발표문에 텍스트로 명시된 CWE-Bench pass@1 값입니다(Collinear 운영 벤치마크).",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-134",
    "name": "GPT-6 Astra",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Hosted frontier multimodal model (text + image input, text output)",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Computer Use",
      "Browsing",
      "Agentic Coding",
      "Cybersecurity",
      "Science",
      "Professional Work"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial API",
    "context": "1,050,000 (max output 128,000)",
    "languages": "Multilingual",
    "variants": [
      "gpt-6-astra"
    ],
    "reasoning_effort": [
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "availability": "2026-09-03 Daybreak 기관 대상 우선 출시 후 ChatGPT Plus/Pro/Business/Enterprise, OpenAI API(gpt-6-astra), Azure, AWS Bedrock으로 확대; $10/$50 per 1M",
    "note": "GPT-5.6(Sol/Terra/Luna)와 별도 세대인 GPT-6 계열 첫 모델이며 Pre-Preparedness Framework 사이버 Critical 임계점에 도달한 첫 모델입니다. API 모델 gpt-6-astra는 2026-09-04 공개. openai.com 발표문은 봇 차단(403)으로 미러 렌더링으로 전문을 확인했고, 수치는 전부 해당 발표문의 공식 평가 표에 인쇄된 값입니다.",
    "benchmarks": {
      "Terminal-Bench 4.0": 57.9,
      "DeepSWE v1.1": 74.1,
      "FrontierCode 1.1 Extended": 64.5,
      "FrontierMath Tier 4 (v2)": 97.6,
      "GPQA Diamond": 96.0,
      "Humanity's Last Exam (w/ tools)": 57.2,
      "ARC-AGI-3": 99.9,
      "ARC-AGI-2": 95.0,
      "BrowseComp": 91.5,
      "Agents' Last Exam": 59.3,
      "OSWorld 2.0": 72.6,
      "ScreenSpot-Pro": 92.7,
      "Terminal-Bench Science 0.1": 64.6,
      "BenchCAD": 95.9,
      "ExploitBench": 100.0,
      "ExploitGym": 42.4,
      "SRE-Bench": 88.0,
      "HealthBench Professional": 63.4,
      "FrontierCode 1.1 Main": 53.3,
      "Internal Database Migration Tasks": 63.9,
      "AutomationBench": 41.4,
      "OpenScore String Quartets": 84.0,
      "Internal Design Tasks": 50.0,
      "Internal Data Science Tasks": 40.9,
      "GeneBench Pro": 37.1,
      "MedChemBench": 49.3,
      "LifeSciBench": 60.3,
      "ExploitBench June–August 2026": 39.0,
      "SEC-Bench Pro": 85.4,
      "ARC-AGI-1": 98.5,
      "MRCR v2 256K–512K (8-needle)": 100.0,
      "MRCR v2 512K–1M (8-needle)": 96.3,
      "Internal computer-use safety (↓)": 2.4,
      "Internal CU safety auto-review (↓)": 1.8,
      "Internal jailbreak (↓)": 0.0,
      "ExploitGym honeypot (↓)": 0.0,
      "Impossible ExploitGym": 100.0,
      "Internal hallucination (↓)": 4.2
    },
    "official_id": "gpt-6-astra",
    "official_sources": [
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/gpt-6-astra/"
      },
      {
        "label": "OpenAI API 모델 문서",
        "url": "https://developers.openai.com/api/docs/models/gpt-6-astra"
      },
      {
        "label": "GPT-6 Astra System Card",
        "url": "https://deploymentsafety.openai.com/gpt-6-astra"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-6-astra/",
    "parameter_source": "https://developers.openai.com/api/docs/models/gpt-6-astra",
    "benchmark_sources": {
      "Terminal-Bench 4.0": "https://openai.com/index/gpt-6-astra/",
      "DeepSWE v1.1": "https://openai.com/index/gpt-6-astra/",
      "FrontierCode 1.1 Extended": "https://openai.com/index/gpt-6-astra/",
      "FrontierMath Tier 4 (v2)": "https://openai.com/index/gpt-6-astra/",
      "GPQA Diamond": "https://openai.com/index/gpt-6-astra/",
      "Humanity's Last Exam (w/ tools)": "https://openai.com/index/gpt-6-astra/",
      "ARC-AGI-3": "https://openai.com/index/gpt-6-astra/",
      "ARC-AGI-2": "https://openai.com/index/gpt-6-astra/",
      "BrowseComp": "https://openai.com/index/gpt-6-astra/",
      "Agents' Last Exam": "https://openai.com/index/gpt-6-astra/",
      "OSWorld 2.0": "https://openai.com/index/gpt-6-astra/",
      "ScreenSpot-Pro": "https://openai.com/index/gpt-6-astra/",
      "Terminal-Bench Science 0.1": "https://openai.com/index/gpt-6-astra/",
      "BenchCAD": "https://openai.com/index/gpt-6-astra/",
      "ExploitBench": "https://openai.com/index/gpt-6-astra/",
      "ExploitGym": "https://openai.com/index/gpt-6-astra/",
      "SRE-Bench": "https://openai.com/index/gpt-6-astra/",
      "HealthBench Professional": "https://openai.com/index/gpt-6-astra/",
      "FrontierCode 1.1 Main": "https://openai.com/index/gpt-6-astra/",
      "Internal Database Migration Tasks": "https://openai.com/index/gpt-6-astra/",
      "AutomationBench": "https://openai.com/index/gpt-6-astra/",
      "OpenScore String Quartets": "https://openai.com/index/gpt-6-astra/",
      "Internal Design Tasks": "https://openai.com/index/gpt-6-astra/",
      "Internal Data Science Tasks": "https://openai.com/index/gpt-6-astra/",
      "GeneBench Pro": "https://openai.com/index/gpt-6-astra/",
      "MedChemBench": "https://openai.com/index/gpt-6-astra/",
      "LifeSciBench": "https://openai.com/index/gpt-6-astra/",
      "ExploitBench June–August 2026": "https://openai.com/index/gpt-6-astra/",
      "SEC-Bench Pro": "https://openai.com/index/gpt-6-astra/",
      "ARC-AGI-1": "https://openai.com/index/gpt-6-astra/",
      "MRCR v2 256K–512K (8-needle)": "https://openai.com/index/gpt-6-astra/",
      "MRCR v2 512K–1M (8-needle)": "https://openai.com/index/gpt-6-astra/",
      "Internal computer-use safety (↓)": "https://openai.com/index/gpt-6-astra/",
      "Internal CU safety auto-review (↓)": "https://openai.com/index/gpt-6-astra/",
      "Internal jailbreak (↓)": "https://openai.com/index/gpt-6-astra/",
      "ExploitGym honeypot (↓)": "https://openai.com/index/gpt-6-astra/",
      "Impossible ExploitGym": "https://openai.com/index/gpt-6-astra/",
      "Internal hallucination (↓)": "https://openai.com/index/gpt-6-astra/"
    },
    "benchmark_note": "OpenAI GPT-6 Astra 공식 발표문의 공식 평가 표(Astra 열) 수치이며, 발표문 기준 '모든 effort 중 최대' 점수입니다. ARC-AGI-3는 OpenAI responses API 하네스, OSWorld 2.0/Agents' Last Exam/SRE-Bench/ExploitBench는 에이전트·하네스 포함 측정이고 ExploitBench·ExploitGym은 프로덕션 세이프가드 없이 측정했습니다. 발표문에 함께 실린 Artificial Analysis 지수 표는 제3자 지표 정책상 기록하지 않았습니다. 보강: 동일 발표 페이지의 나머지 행 전체(컴퓨터 사용·전문직·과학/헬스·사이버·장문맥·추론·내부 안전 평가)를 추가했습니다. OpenScore String Quartets는 0.84(0~1 척도)를 %로 환산. 내부 안전 지표는 낮을수록 좋은 값이라 (↓) 표기. Artificial Analysis Intelligence Index는 제3자 지표라 제외. Astra Pro 열은 미게재 — model-135 참조.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-135",
    "name": "GPT-6 Astra Pro",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Hosted frontier model (pro-tier reasoning)",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Professional Work",
      "Agentic Coding",
      "Research"
    ],
    "open_weights": false,
    "license": "Proprietary Commercial Subscription",
    "context": "",
    "languages": "",
    "variants": [
      "gpt-6-astra-pro (ChatGPT Pro/Business/Enterprise tier)"
    ],
    "reasoning_effort": [],
    "availability": "ChatGPT Pro / Business / Enterprise 전용",
    "note": "공식 발표문 Availability 절에 명시된 상위 변형입니다. 2026-09-08 기준으로 개발자 문서의 API 모델 목록에는 gpt-6-astra만 노출되어 개별 API 모델 ID와 고유 사양·점수는 기록하지 않았습니다.",
    "benchmarks": {},
    "official_id": "gpt-6-astra",
    "official_sources": [
      {
        "label": "OpenAI 공식 발표문",
        "url": "https://openai.com/index/gpt-6-astra/"
      }
    ],
    "release_date_source": "https://openai.com/index/gpt-6-astra/",
    "parameter_source": "https://openai.com/index/gpt-6-astra/",
    "benchmark_sources": {},
    "benchmark_note": "공식 발표 페이지에 정량 벤치마크 표 미게재(정성적 주장 중심) — 점수 미수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-143",
    "name": "K2-Horizon-375B-A23B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "375B total / ~23B active (sparse MoE)",
    "architecture": "Sparse MoE, shared core architecture/vocabulary across the fleet",
    "modalities": [
      "text"
    ],
    "focus": [
      "Agentic tool use",
      "Terminal workflows",
      "Enterprise reasoning"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "FP8"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "K2 Horizon 함대의 플래그십. IFM(구 LLM360 계열)이 프리트레인~에이전틱 포스트트레인 전체 라이프사이클(중간 체크포인트·학습 데이터 또는 구성 레시피·혼합비·코드·설정·로그·평가)까지 공개한 완전 오픈 릴리스입니다. 공식 블로그 기준 프리트레인은 약 10조 합성 토큰 규모이며, 병렬 토큰 생성 'diffusion distillation'으로 응답 품질을 유지하면서 약 3배 가속했다고 명시했습니다.",
    "benchmarks": {
      "tau3-Banking": 34.0,
      "Toolathlon Verified": 65.3,
      "Automation Bench Public": 25.3,
      "Apex-Agents (pass@1)": 24.8,
      "MCPMark": 67.7,
      "BrowseComp": 72.8,
      "WildClawBench": 50.9,
      "Terminal-Bench 2.1": 70.2,
      "SciCode": 42.7,
      "SWE-Atlas-QnA (strict)": 48.4,
      "SWE Bench Pro (strict)": 42.6,
      "Humanity's Last Exam (without tools)": 32.0,
      "GPQA Diamond": 87.3,
      "CritPt": 8.6
    },
    "official_id": "IFM/K2-Horizon-375B-A23B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-375B-A23B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
    "benchmark_sources": {
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Toolathlon Verified": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Automation Bench Public": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Apex-Agents (pass@1)": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "MCPMark": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "BrowseComp": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "WildClawBench": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "SWE-Atlas-QnA (strict)": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "SWE Bench Pro (strict)": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "Humanity's Last Exam (without tools)": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-375B-A23B",
      "CritPt": "https://huggingface.co/IFM/K2-Horizon-375B-A23B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 K2-Horizon-375B-A23B 열 값(%)입니다. 카드에 함께 실린 GDPVal-AA(Elo)·AA-LCR·AA-Omniscience는 제3자 지표 정책상 제외했습니다. 단, Terminal-Bench 2.1 70.2는 IFM 스스로 공개한 보상 해킹 감사에서 712 트라이얼 중 24개가 플래그되어 이를 제외하면 **66.9%**로 낮아집니다(공식 블로그에 감사 절차와 함께 명시). 카드 주석: SWE-Atlas-QnA/SWE Bench Pro strict = 인터넷 없음, BrowseComp는 DeepSeek-V3.2 제안 Discard-all@95k 컨텍스트 프로토콜, WildClawBench·Apex-Agents는 영어 텍스트 모달리티 부분집합.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-144",
    "name": "K2-Horizon-MoVA-36B-A4B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "36B total / ~4B active (sparse MoE)",
    "architecture": "Sparse MoE + Mixture-of-Value Attention (MoVA), 신규 아키텍처",
    "modalities": [
      "text"
    ],
    "focus": [
      "Local hosting",
      "Cost-efficient agents",
      "Active-parameter efficiency"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "FP8",
      "GGUF"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "IFM이 새로 공개한 Mixture-of-Value Attention(MoVA) 적용 모델로,attention 단계에 expert routing을 넣어 활성화 파라미터를 4B로 줄이면서 더 큰 모델을 넘보는 성능을 목표했습니다. 공식 발표문은 로컬 호스팅용 가성비 모델로 위치づけ했습니다.",
    "benchmarks": {
      "tau3-Banking": 26.8,
      "Terminal-Bench 2.1": 58.6,
      "SciCode": 38.9,
      "Humanity's Last Exam (without tools)": 25.2,
      "GPQA Diamond": 80.8,
      "CritPt": 2.1
    },
    "official_id": "IFM/K2-Horizon-MoVA-36B-A4B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
    "benchmark_sources": {
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "Humanity's Last Exam (without tools)": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B",
      "CritPt": "https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 K2-Horizon-MoVA-36B-A4B 열 값(%)입니다. 카드 주석: \"Scores in %, Bold marks the best score in each row\". AA-* 계열 지표는 정책상 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-145",
    "name": "K2-Horizon-32B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "Preview",
    "parameters": "32B dense",
    "architecture": "Dense decoder-only, 공유 어휘·인터페이스",
    "modalities": [
      "text"
    ],
    "focus": [
      "Local hosting",
      "On-premise servers",
      "Laptop deployment"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "FP8",
      "GGUF"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "공식 모델 카드가 본 문서를 **K2-Horizon-32B-Stage1**으로 표기하고 \"final checkpoint to be released\" 경고를 붉은 색으로 명시했습니다. 그래서 상태를 Preview로 두고, 이후 최종 체크포인트가 올라오면 상태를 GA로 올려야 합니다. Hugging Face 저장소 이름은 K2-Horizon-32B입니다.",
    "benchmarks": {
      "tau3-Banking": 22.5,
      "Terminal-Bench 2.1": 36.6,
      "SciCode": 30.2,
      "Humanity's Last Exam (without tools)": 22.8,
      "GPQA Diamond": 82.3,
      "CritPt": 1.4
    },
    "official_id": "IFM/K2-Horizon-32B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-32B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-32B",
    "benchmark_sources": {
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-32B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-32B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-32B",
      "Humanity's Last Exam (without tools)": "https://huggingface.co/IFM/K2-Horizon-32B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-32B",
      "CritPt": "https://huggingface.co/IFM/K2-Horizon-32B"
    },
    "benchmark_note": "IFM 공식 모델 카드(Stage 1 체크포인트 기준) 표의 자기 열 값(%). 최종 체크포인트 기준이 아니므로 재확인 필요합니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-146",
    "name": "K2-Horizon-7B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "7B dense (7B-core)",
    "architecture": "Dense decoder-only",
    "modalities": [
      "text"
    ],
    "focus": [
      "On-device agents",
      "Software engineering",
      "Deep research"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "FP8",
      "GGUF",
      "7B-Uno adapter"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "IFM이 '10B 미만 최고 성능'을 주장한 온디바이스 모델로, 스마트폰 구동을 명시했습니다. 같은 발표에서 7B는 SWE-bench·BrowseComp 중심의 소프트웨어 엔지니어링·딥 리서치 강점을 강조됐습니다. 카드에 multimodal 어댑터(7B-Uno)가 함께 올라오지만 어댑터는 별도 레코드로 만들지 않았습니다.",
    "benchmarks": {
      "HMMT Feb 2026": 73.3,
      "SWE-bench Verified": 70.6,
      "HLE": 18.6,
      "SciCode": 31.6,
      "Terminal-Bench 2.1": 39.1,
      "tau3-Banking": 25.8,
      "BrowseComp": 59.0
    },
    "official_id": "IFM/K2-Horizon-7B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-7B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-7B",
    "benchmark_sources": {
      "HMMT Feb 2026": "https://huggingface.co/IFM/K2-Horizon-7B",
      "SWE-bench Verified": "https://huggingface.co/IFM/K2-Horizon-7B",
      "HLE": "https://huggingface.co/IFM/K2-Horizon-7B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-7B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-7B",
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-7B",
      "BrowseComp": "https://huggingface.co/IFM/K2-Horizon-7B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 자기 열 값(%). 카드 주석: BrowseComp는 DeepSeek-V3.2 제안 Discard-all@95k 컨텍스트 프로토콜 기준이며 비교 모델은 다른 하네스를 쓸 수 있음.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-147",
    "name": "K2-Horizon-3.7B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.7B dense (3.7B-core)",
    "architecture": "Dense decoder-only",
    "modalities": [
      "text"
    ],
    "focus": [
      "Fine-tuning base",
      "On-device reasoning",
      "Phone deployment"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "524,288 (512K)",
    "languages": "영어 중심(카드 language: en)",
    "variants": [
      "BF16",
      "GGUF"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "IFM이 '4B 미만 최고 추론'을 주장한 파인튜닝 친화 사이즈. 프레스 릴리스는 개발자·연구자용 파인튜닝 베이스이며 더 큰 모델과 동등 이상의 추론을 낸다고 설명했습니다.",
    "benchmarks": {
      "HMMT Feb 2026": 70.5,
      "SWE-bench Verified": 68.6,
      "GPQA Diamond": 65.4,
      "HLE": 12.9,
      "SciCode": 25.9,
      "Terminal-Bench 2.1": 25.1,
      "tau3-Banking": 17.7,
      "BFCL v4": 50.9
    },
    "official_id": "IFM/K2-Horizon-3.7B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-3.7B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-3.7B",
    "benchmark_sources": {
      "HMMT Feb 2026": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "SWE-bench Verified": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "HLE": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "SciCode": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "Terminal-Bench 2.1": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "tau3-Banking": "https://huggingface.co/IFM/K2-Horizon-3.7B",
      "BFCL v4": "https://huggingface.co/IFM/K2-Horizon-3.7B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 자기 열 값(%). 카드 주석: \"Baseline protocols may differ\".",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-148",
    "name": "K2-Horizon-0.9B",
    "date": "2026-09-03",
    "sortDate": "2026-09-03",
    "month": "2026-09",
    "monthName": "September",
    "company": "Institute of Foundation Models",
    "family": "K2 Horizon",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "~0.9B dense (0.9B-class)",
    "architecture": "Dense decoder-only, 함대 중 축약된 어휘 사용",
    "modalities": [
      "text"
    ],
    "focus": [
      "Wearables",
      "Edge",
      "Tool use on tiny models"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (모델·코드), 학습 데이터셋은 ODC-BY 등 개별 라이선스",
    "context": "131,072 (128K)",
    "languages": "영어 중심(카드 language: en), 0.9B는 축약 어휘",
    "variants": [
      "BF16",
      "GGUF",
      "0.9B-Uno adapter"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face IFM org, vLLM / SGLang / Ollama 출시 당일(day-0) 지원, Cerebras 하드웨어",
    "note": "시계·안경 같은 초저전력 디바이스를 겨냥한 함대 최 소형. IFM은 이 크기급에서 수학·추론·툴 유스 SOTA를 주장했습니다. 카드 기준 0.9B는 함대와 다른 축약 어휘를 사용합니다.",
    "benchmarks": {
      "AIME 2025": 41.7,
      "AIME 2026": 48.5,
      "HMMT Feb 2026": 25.8,
      "GPQA Diamond": 27.3,
      "HumanEval+": 79.9,
      "MBPP+": 68.0,
      "LiveCodeBench v6": 37.4,
      "BFCL v4": 28.0
    },
    "official_id": "IFM/K2-Horizon-0.9B",
    "official_sources": [
      {
        "label": "IFM 공식 발표문",
        "url": "https://ifm.ai/blog/k2/"
      },
      {
        "label": "IFM 공식 프레스 릴리스",
        "url": "https://ifm.ai/k2/press-release/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IFM/K2-Horizon-0.9B"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/k2/",
    "parameter_source": "https://huggingface.co/IFM/K2-Horizon-0.9B",
    "benchmark_sources": {
      "AIME 2025": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "AIME 2026": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "HMMT Feb 2026": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "GPQA Diamond": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "HumanEval+": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "MBPP+": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "LiveCodeBench v6": "https://huggingface.co/IFM/K2-Horizon-0.9B",
      "BFCL v4": "https://huggingface.co/IFM/K2-Horizon-0.9B"
    },
    "benchmark_note": "IFM 공식 모델 카드 표의 자기 열 값(%). 카드 주석: K2-Horizon-0.9B 강조, Qwen3.5-2B를 더 큰 참조 모델로 포함, 프로토콜·출처는 카드의 Technical Appendix.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-149",
    "name": "Seed2.1 Pro",
    "date": "2026-06-23",
    "sortDate": "2026-06-23",
    "month": "2026-06",
    "monthName": "June",
    "company": "ByteDance",
    "family": "Seed / Doubao",
    "type": "MLLM / agentic foundation model",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "차세대 에이전트 지향 모델(공식 카드에 구조 세부 미공개)",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "고부가가치 오피스 에이전트",
      "코드 엔지니어링",
      "멀티모달·비디오 이해",
      "장문 컨텍스트"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Doubao 앱·Volcano Engine(중국)·BytePlus ModelArk(국제)",
    "note": "Seed2.1 패밀리의 플래그십 Pro. 공식 페이지는 Pro와 Turbo 두 모델을 함께 공개했으며, 실세계 생산성(에이전트·코딩·멀티모달 이해)에 초점을 둡니다. 직전 감사 주기(9/8)에서 누락되어 이번에 소급 수록합니다.",
    "benchmarks": {
      "KINA": 48.3,
      "SuperGPQA": 70.8,
      "BeyondAIME": 87.0,
      "Workspace Bench": 53.0,
      "Agent Startup Bench": 68.8,
      "xDailyBench": 61.0,
      "NL2Repo-Bench": 47.0,
      "ProgramBench": 50.3,
      "Terminal Bench 2.1": 71.0,
      "SWE-Atlas": 35.2,
      "MathVision (w. Tool)": 92.6,
      "MMMU-Pro (w. Tool)": 81.6,
      "WorldVQA": 53.0,
      "ZEROBench (w. Tool)": 18.0,
      "BabyVision": 73.7,
      "CharXiv-RQ (w. Tool)": 85.4,
      "ERQA": 72.0,
      "MMLongBench-128K": 78.3,
      "VideoMME": 89.2,
      "TOMATO": 79.5,
      "Minerva": 70.7,
      "OVOBench": 80.7,
      "VideoSimpleQA": 76.4
    },
    "official_id": "Doubao-Seed-2.1-Pro",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://seed.bytedance.com/en/seed2_1"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity"
      }
    ],
    "release_date_source": "https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity",
    "parameter_source": "https://seed.bytedance.com/en/seed2_1",
    "benchmark_sources": {
      "KINA": "https://seed.bytedance.com/en/seed2_1",
      "SuperGPQA": "https://seed.bytedance.com/en/seed2_1",
      "BeyondAIME": "https://seed.bytedance.com/en/seed2_1",
      "Workspace Bench": "https://seed.bytedance.com/en/seed2_1",
      "Agent Startup Bench": "https://seed.bytedance.com/en/seed2_1",
      "xDailyBench": "https://seed.bytedance.com/en/seed2_1",
      "NL2Repo-Bench": "https://seed.bytedance.com/en/seed2_1",
      "ProgramBench": "https://seed.bytedance.com/en/seed2_1",
      "Terminal Bench 2.1": "https://seed.bytedance.com/en/seed2_1",
      "SWE-Atlas": "https://seed.bytedance.com/en/seed2_1",
      "MathVision (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "MMMU-Pro (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "WorldVQA": "https://seed.bytedance.com/en/seed2_1",
      "ZEROBench (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "BabyVision": "https://seed.bytedance.com/en/seed2_1",
      "CharXiv-RQ (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "ERQA": "https://seed.bytedance.com/en/seed2_1",
      "MMLongBench-128K": "https://seed.bytedance.com/en/seed2_1",
      "VideoMME": "https://seed.bytedance.com/en/seed2_1",
      "TOMATO": "https://seed.bytedance.com/en/seed2_1",
      "Minerva": "https://seed.bytedance.com/en/seed2_1",
      "OVOBench": "https://seed.bytedance.com/en/seed2_1",
      "VideoSimpleQA": "https://seed.bytedance.com/en/seed2_1"
    },
    "benchmark_note": "Seed2.1 공식 페이지(seed.bytedance.com/en/seed2_1) 평가 표의 해당 모델 열 값(%)입니다. ProgramBench는 공식 표가 'All@1/Almost@1/Score' 형태의 3중 값(Pro '0/1/50.3', Turbo '0/0/49.4')으로 표기해 최종 Score만 수록했습니다. 괄호로 병기된 보조 수치(Pro: MathVision 94.5, MMMU-Pro 82.7, ZEROBench 22.0, CharXiv-RQ 86.4 / Turbo: 92.7, 82.2, 20.0, 83.6)는 별도 설정 값으로 기본값만 수록했습니다. 본문의 GDPVal 언급은 정량 점수 없이 질적 SOTA 주장이라 수록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-150",
    "name": "Seed2.1 Turbo",
    "date": "2026-06-23",
    "sortDate": "2026-06-23",
    "month": "2026-06",
    "monthName": "June",
    "company": "ByteDance",
    "family": "Seed / Doubao",
    "type": "MLLM / agentic foundation model",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "차세대 에이전트 지향 모델(공식 카드에 구조 세부 미공개)",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "고부가가치 오피스 에이전트",
      "코드 엔지니어링",
      "멀티모달·비디오 이해",
      "장문 컨텍스트"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Doubao 앱·Volcano Engine(중국)·BytePlus ModelArk(국제, dola-seed-2-1-turbo-260628)",
    "note": "Seed2.1 패밀리의 경량 Turbo. Pro와 동일한 공식 평가 표로 발표되었으며 일부 항목(BeyondAIME, Workspace Bench)에서 Pro를 상회합니다.",
    "benchmarks": {
      "KINA": 46.6,
      "SuperGPQA": 67.4,
      "BeyondAIME": 88.0,
      "Workspace Bench": 54.7,
      "Agent Startup Bench": 54.0,
      "xDailyBench": 56.4,
      "NL2Repo-Bench": 43.7,
      "ProgramBench": 49.4,
      "Terminal Bench 2.1": 67.6,
      "SWE-Atlas": 30.6,
      "MathVision (w. Tool)": 90.1,
      "MMMU-Pro (w. Tool)": 80.1,
      "WorldVQA": 48.6,
      "ZEROBench (w. Tool)": 11.0,
      "BabyVision": 62.9,
      "CharXiv-RQ (w. Tool)": 82.5,
      "ERQA": 71.3,
      "MMLongBench-128K": 76.9,
      "VideoMME": 89.0,
      "TOMATO": 56.8,
      "Minerva": 65.9,
      "OVOBench": 79.2,
      "VideoSimpleQA": 71.4
    },
    "official_id": "Doubao-Seed-2.1-Turbo",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://seed.bytedance.com/en/seed2_1"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity"
      }
    ],
    "release_date_source": "https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity",
    "parameter_source": "https://seed.bytedance.com/en/seed2_1",
    "benchmark_sources": {
      "KINA": "https://seed.bytedance.com/en/seed2_1",
      "SuperGPQA": "https://seed.bytedance.com/en/seed2_1",
      "BeyondAIME": "https://seed.bytedance.com/en/seed2_1",
      "Workspace Bench": "https://seed.bytedance.com/en/seed2_1",
      "Agent Startup Bench": "https://seed.bytedance.com/en/seed2_1",
      "xDailyBench": "https://seed.bytedance.com/en/seed2_1",
      "NL2Repo-Bench": "https://seed.bytedance.com/en/seed2_1",
      "ProgramBench": "https://seed.bytedance.com/en/seed2_1",
      "Terminal Bench 2.1": "https://seed.bytedance.com/en/seed2_1",
      "SWE-Atlas": "https://seed.bytedance.com/en/seed2_1",
      "MathVision (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "MMMU-Pro (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "WorldVQA": "https://seed.bytedance.com/en/seed2_1",
      "ZEROBench (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "BabyVision": "https://seed.bytedance.com/en/seed2_1",
      "CharXiv-RQ (w. Tool)": "https://seed.bytedance.com/en/seed2_1",
      "ERQA": "https://seed.bytedance.com/en/seed2_1",
      "MMLongBench-128K": "https://seed.bytedance.com/en/seed2_1",
      "VideoMME": "https://seed.bytedance.com/en/seed2_1",
      "TOMATO": "https://seed.bytedance.com/en/seed2_1",
      "Minerva": "https://seed.bytedance.com/en/seed2_1",
      "OVOBench": "https://seed.bytedance.com/en/seed2_1",
      "VideoSimpleQA": "https://seed.bytedance.com/en/seed2_1"
    },
    "benchmark_note": "Seed2.1 공식 페이지(seed.bytedance.com/en/seed2_1) 평가 표의 해당 모델 열 값(%)입니다. ProgramBench는 공식 표가 'All@1/Almost@1/Score' 형태의 3중 값(Pro '0/1/50.3', Turbo '0/0/49.4')으로 표기해 최종 Score만 수록했습니다. 괄호로 병기된 보조 수치(Pro: MathVision 94.5, MMMU-Pro 82.7, ZEROBench 22.0, CharXiv-RQ 86.4 / Turbo: 92.7, 82.2, 20.0, 83.6)는 별도 설정 값으로 기본값만 수록했습니다. 본문의 GDPVal 언급은 정량 점수 없이 질적 SOTA 주장이라 수록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-151",
    "name": "Gander",
    "date": "2026-09-09",
    "sortDate": "2026-09-09",
    "month": "2026-09",
    "monthName": "September",
    "company": "Tencent",
    "family": "Gander",
    "type": "MLLM / omni (full-duplex audio-visual)",
    "category": "Omni",
    "status": "GA",
    "parameters": "9B",
    "architecture": "Brain–Cerebellum 프레임워크 + 스트리밍 Thinker-Talker(MiniCPM-o-4.5 기반), 1초 단위의 인과적 시간 유닛",
    "modalities": [
      "text",
      "audio",
      "image",
      "video"
    ],
    "focus": [
      "Full-duplex 음성 상호작용",
      "스트리밍 비디오 이해",
      "에이전트 태스크 오케스트레이션"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [
      "Thinker",
      "Talker"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face Gander-Omni/Gander(Thinker·Talker 체크포인트), Gander 런타임(GitHub)",
    "note": "Tencent Hunyuan Speech Team·Zhejiang Univ. 등의 옴니 인터랙션 에이전트(arXiv:2609.08977). 음성·영상 스트림을 1초 유닛으로 처리하며 장기 실행 태스크를 백그라운드 Brain(기본 Codex/GPT-5.6 워커)에 위임합니다. 모델 카드에는 총 파라미터 표기가 없고 기술 보고서 Table 4의 '9B' 표기를 따릅니다.",
    "benchmarks": {
      "Full-Duplex-Bench v3 (ToolSel F1)": 75.9,
      "Full-Duplex-Bench v3 (ArgAcc)": 50.3,
      "Full-Duplex-Bench v3 (RespQual)": 49.0,
      "Full-Duplex-Bench v3 (Pass@1)": 40.0,
      "Full-Duplex-Bench v3 (Take-turn)": 100.0,
      "Full-Duplex-Bench v3 (Interrupt)": 8.0,
      "Full-Duplex-Bench v3 (Filler)": 51.6,
      "SpokenQA Llama Questions": 75.6,
      "SpokenQA Web Questions": 59.3,
      "VoiceBench AlpacaEval (1-5)": 3.96,
      "VoiceBench SD-QA": 46.84,
      "WorldSense (AV)": 49.62,
      "Daily-Omni (AV)": 78.53
    },
    "official_id": "Gander-Omni/Gander",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Gander-Omni/Gander"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/papers/2609.08977"
      }
    ],
    "release_date_source": "https://huggingface.co/Gander-Omni/Gander",
    "parameter_source": "https://huggingface.co/papers/2609.08977",
    "benchmark_sources": {
      "Full-Duplex-Bench v3 (ToolSel F1)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (ArgAcc)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (RespQual)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (Pass@1)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (Take-turn)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (Interrupt)": "https://huggingface.co/papers/2609.08977",
      "Full-Duplex-Bench v3 (Filler)": "https://huggingface.co/papers/2609.08977",
      "SpokenQA Llama Questions": "https://huggingface.co/papers/2609.08977",
      "SpokenQA Web Questions": "https://huggingface.co/papers/2609.08977",
      "VoiceBench AlpacaEval (1-5)": "https://huggingface.co/papers/2609.08977",
      "VoiceBench SD-QA": "https://huggingface.co/papers/2609.08977",
      "WorldSense (AV)": "https://huggingface.co/papers/2609.08977",
      "Daily-Omni (AV)": "https://huggingface.co/papers/2609.08977"
    },
    "benchmark_note": "기술 보고서(arXiv:2609.08977, HF Papers 게재본) Table 3~5의 Gander 열 값입니다. Full-Duplex-Bench v3의 앞 4개 지표는 보고서 원문이 0~1 분수(ToolSel 0.759, ArgAcc 0.503, RespQual 0.490, Pass@1 0.400)로 표기해 %로 환산했습니다. Interrupt는 낮을수록 좋은 지표, Filler는 상호작용 특성 지표입니다. AlpacaEval은 1–5 척도. WorldSense/Daily-Omni는 audio-visual 조건 값이며, back-brain-only 행(Pass@1 0.520 등)은 프론트 체계가 아닌 별도 조건이라 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-152",
    "name": "DeepSeek-V4.1-Flash",
    "date": "2026-09-10",
    "sortDate": "2026-09-10",
    "month": "2026-09",
    "monthName": "September",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "552B backbone / 8B active(prefill)·16B active(decode), Engram 메모리 196B 별도 희소 접근",
    "architecture": "CED(20층 인과 인코더+20층 디코더) MoE — 384 routed+1 shared expert, 토큰당 6 routed 활성; CSA2+FP4 KV 캐시(토큰당 890B), DeepSeek-ViT 비전 인코더",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "에이전틱 코딩",
      "초장문(1M) 워크로드",
      "KV 캐시 압축 효율"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "1M (1,000,000)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "1-100 연속 조절(평가는 100=max)"
    ],
    "availability": "Hugging Face deepseek-ai/DeepSeek-V4.1-Flash, deepseek-recipe 툴킷",
    "note": "V4-Flash 후속. CED 아키텍처로 prefill 8B/decode 16B 활성화, KV 캐시를 V4-Flash 대비 약 1/4로 축소. 45T 토큰 멀티모달 사전학습, 1M 컨텍스트. Jinja 채팅 템플릿 대신 encoding.py·deepseek-recipe 제공. 2026-10-17에 동일 모델명(deepseek-flash)의 서빙이 V4.1-Flash-1017 리비전으로 교체됐습니다(model-225) — 이 레코드의 수치는 2026-09-10 리비전 기준입니다.",
    "benchmarks": {
      "GPQA Diamond (Pass@1)": 90.9,
      "HLE (Pass@1)": 36.8,
      "MathArena Apex (Pass@1)": 65.6,
      "Terminal-Bench 2.1 (Pass@1)": 90.6,
      "Terminal-Bench 3.0 (Pass@1)": 30.0,
      "Terminal-Bench 4.0 (Pass@1)": 31.2,
      "DeepSWE v1.1 (Resolved)": 74.2,
      "ProgramBench (Almost@1)": 20.3,
      "NL2Repo-Bench (Score)": 64.0,
      "CyberGym (Pass@1)": 88.1,
      "SEC-Bench Pro (Pass@1)": 62.8,
      "ExploitGym (Pass@1)": 15.3,
      "HLE w/ tools (Pass@1)": 63.9,
      "AutomationBench (Pass@1)": 54.8,
      "Agent's Last Exam (Pass@1)": 31.8,
      "Chartography w/ tools (Pass@1)": 78.9,
      "BabyVision w/ tools (Pass@1)": 89.6,
      "ZeroBench-main w/ tools (Pass@5)": 49.0
    },
    "official_id": "deepseek-ai/DeepSeek-V4.1-Flash",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
      }
    ],
    "release_date_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
    "benchmark_sources": {
      "GPQA Diamond (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "HLE (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "MathArena Apex (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Terminal-Bench 2.1 (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Terminal-Bench 3.0 (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Terminal-Bench 4.0 (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "DeepSWE v1.1 (Resolved)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "ProgramBench (Almost@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "NL2Repo-Bench (Score)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "CyberGym (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "SEC-Bench Pro (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "ExploitGym (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "HLE w/ tools (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "AutomationBench (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Agent's Last Exam (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "Chartography w/ tools (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "BabyVision w/ tools (Pass@1)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash",
      "ZeroBench-main w/ tools (Pass@5)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
    },
    "benchmark_note": "공식 카드(기술 보고서)의 instruct 비교 표 DS-V4.1-Flash 열 값입니다(모두 reasoning_effort=100, temperature=1.0, top_p=0.95). HLE 36.8은 전체 세트이며 괄호의 39.1†은 텍스트 전용 부분집합입니다. Codeforces(3471 rating)는 % 척도가 아니라 제외했습니다. 별도 'Performance across agent scaffolds' 표(DeepSWE v1.1·Terminal-Bench 2.1을 8개 하니스로 측정)는 동일 벤치마크의 프로토콜 변형이라 수록하지 않고, DeepSWE v1.1 74.2는 mini-SWE 하니스, 기타 코드 에이전트 지표는 DSH Minimal 기준입니다. Base 모델 표는 미배포 DeepSeek-V4.1-Flash-Base 기준이라 이 레코드에 포함하지 않았습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-153",
    "name": "Ling-3.0-flash-VL",
    "date": "2026-09-10",
    "sortDate": "2026-09-10",
    "month": "2026-09",
    "monthName": "September",
    "company": "Ant Group / InclusionAI",
    "family": "Ling 3.0",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "124B total / 5.5B active (MoE)",
    "architecture": "Sparse MoE + 42층 KDA/Gated-MLA 하이브리드(5:1), ViT 인코더 + 2층 MLP 프로젝터, VideoRoPE",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "비전-언어 추론",
      "GUI·에이전트 작업",
      "장문 컨텍스트"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "256K (YaRN 확장 레시피 제공)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "thinking on/off (기본 on)"
    ],
    "availability": "Hugging Face inclusionAI/Ling-3.0-flash-VL, SGLang·vLLM 공식 레시피",
    "note": "Ling-3.0-flash의 언어·추론·장문 능력에 네이티브 이미지/비디오 이해를 결합한 비전-언어 MoE. 카드가 명시한 컨텍스트는 최대 256K입니다.",
    "benchmarks": {
      "CountBench": 97.33,
      "WorldVQA": 45.67,
      "MMMU-Pro": 79.0,
      "MathVision": 84.87,
      "Humanity's Last Exam-MM": 19.88,
      "OmniDocBench1.5": 91.35,
      "CharXiv_RQ": 81.3,
      "MMSearch": 79.0,
      "ClawEval-MM": 59.9,
      "WebVoyager": 90.83,
      "Vision2Web": 57.69,
      "AntBench-Medical": 0.96
    },
    "official_id": "inclusionAI/Ling-3.0-flash-VL",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
    "parameter_source": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
    "benchmark_sources": {
      "CountBench": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "WorldVQA": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "MMMU-Pro": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "MathVision": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "Humanity's Last Exam-MM": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "OmniDocBench1.5": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "CharXiv_RQ": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "MMSearch": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "ClawEval-MM": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "WebVoyager": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "Vision2Web": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL",
      "AntBench-Medical": "https://huggingface.co/inclusionAI/Ling-3.0-flash-VL"
    },
    "benchmark_note": "공식 모델 카드 벤치마크 표(이미지)의 Ling-3.0-flash-VL 열 값입니다. AntBench-Medical은 사내 벤치마크로 카드가 '0.96 / 0.93' 두 지표를 병기해 첫 값을 수록했습니다. Artificial Analysis Intelligence Index 42는 제3자 지표 정책상 제외했습니다. 카드 주석: *는 공식 테스트 설정의 API 수집 값, 밑줄은 Python 툴 호출 없는 환경 값.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-154",
    "name": "North Small Translate",
    "date": "2026-09-10",
    "sortDate": "2026-09-10",
    "month": "2026-09",
    "monthName": "September",
    "company": "Cohere",
    "family": "North",
    "type": "LLM / translation-specialized",
    "category": "LLM",
    "status": "GA",
    "parameters": "218B total / 25B active (MoE)",
    "architecture": "Sparse MoE",
    "modalities": [
      "text"
    ],
    "focus": [
      "기계 번역(50+ 언어)",
      "엔터프라이즈 번역"
    ],
    "open_weights": true,
    "license": "CC BY-NC 4.0",
    "context": "16K in / 16K out",
    "languages": "50+ 언어",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Cohere 플랫폼 + 오픈 웨이트",
    "note": "Cohere의 번역 특화 MoE. 단일 목적 모델이지만 LLM 계열로 분류해 수록합니다(범위 제외 항목에 해당하지 않음).",
    "benchmarks": {
      "WMT26 (all-language)": 83.6
    },
    "official_id": "North-Small-Translate-1.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://cohere.com/blog/north-small-translate"
      }
    ],
    "release_date_source": "https://cohere.com/blog/north-small-translate",
    "parameter_source": "https://cohere.com/blog/north-small-translate",
    "benchmark_sources": {
      "WMT26 (all-language)": "https://cohere.com/blog/north-small-translate"
    },
    "benchmark_note": "Cohere 공식 발표문에 명시된 유일한 정량 점수(WMT26 전체 언어 점수 83.6)입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-155",
    "name": "SWE-2",
    "date": "2026-09-10",
    "sortDate": "2026-09-10",
    "month": "2026-09",
    "monthName": "September",
    "company": "Cognition",
    "family": "SWE",
    "type": "LLM / agentic coding",
    "category": "LLM",
    "status": "GA",
    "parameters": "2.8T (Kimi K3 베이스 포스트트레인 — SWE-2 자체 수치는 별도 표기 없음)",
    "architecture": "Kimi K3(2.8T) 포스트트레인, 단일 RL 런으로 전 노력 수준 학습(비용 페널티 R=S−λe·C)",
    "modalities": [
      "text"
    ],
    "focus": [
      "에이전틱 코딩",
      "비용-성능 파레토 프런티어"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "medium",
      "high",
      "max"
    ],
    "availability": "Devin Desktop·CLI·Web·Fusion",
    "note": "Cognition의 최신 코딩 모델. SWE-1.7 인프라 위에서 멀티-조(兆) 파라미터 규모 RL을 처음 적용했고, FrontierCode 1.1 Main 50.0%로 Fable 5.1과 1pt 이내이면서 64% 저렴하다고 공식 발표했습니다. 호스티드 전용(가중치 미공개).",
    "benchmarks": {
      "FrontierCode 1.1 Main": 50.0,
      "DeepSWE 1.1": 73.0,
      "Terminal-Bench 2.1": 92.8,
      "Terminal-Bench 4": 27.3
    },
    "official_id": "swe-2",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://cognition.com/blog/swe-2"
      }
    ],
    "release_date_source": "https://cognition.com/blog/swe-2",
    "parameter_source": "https://cognition.com/blog/swe-2",
    "benchmark_sources": {
      "FrontierCode 1.1 Main": "https://cognition.com/blog/swe-2",
      "DeepSWE 1.1": "https://cognition.com/blog/swe-2",
      "Terminal-Bench 2.1": "https://cognition.com/blog/swe-2",
      "Terminal-Bench 4": "https://cognition.com/blog/swe-2"
    },
    "benchmark_note": "Cognition 공식 발표의 코딩 벤치마크 표 SWE-2 열 값(%) 4개 전체를 수록했습니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-156",
    "name": "Atria-Dawn-Preview",
    "date": "2026-09-11",
    "sortDate": "2026-09-11",
    "month": "2026-09",
    "monthName": "September",
    "company": "Shanghai Artificial Intelligence Laboratory",
    "family": "Atria",
    "type": "LLM / agentic foundation model",
    "category": "LLM",
    "status": "Preview",
    "parameters": "744B (GLM-5.2 MoE 파운데이션 기반)",
    "architecture": "GLM-5.2 MoE 파운데이션 위 에이전틱 모델(glm_moe_dsa)",
    "modalities": [
      "text"
    ],
    "focus": [
      "딥리서치·탐색",
      "코딩·머신러닝 자동화",
      "문서 딜리버리",
      "사이버보안"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "256K",
    "languages": "",
    "variants": [
      "Atria-Dawn-Preview-FP8"
    ],
    "reasoning_effort": [
      "reasoning_effort high 지원"
    ],
    "availability": "Hugging Face internlm/Atria-Dawn-Preview, ModelScope, 지역별 API 콘솔",
    "note": "Shanghai AI Lab의 차세대 에이전틱 모델 프리뷰. Discovery·Creation·Delivery·Cybersecurity 4개 차원의 종단 간 딜리버리를 목표로 합니다.",
    "benchmarks": {
      "DeepSearchQA": 96.0,
      "BrowseComp": 92.5,
      "WideSearch": 81.9,
      "DeepResearch Bench II": 51.1,
      "MLE-bench Lite": 86.2,
      "SWE-bench Pro": 59.6,
      "Terminal-Bench 2.1": 78.3,
      "BFCL v4": 77.0,
      "AutomationBench": 53.8,
      "SkillsBench": 66.4,
      "τ³-Bench Banking": 41.2,
      "Workspace-Bench": 65.0,
      "Workspace-Bench-Lite": 68.2,
      "JobBench": 50.3,
      "CyberGym": 86.5
    },
    "official_id": "internlm/Atria-Dawn-Preview",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/internlm/Atria-Dawn-Preview"
      }
    ],
    "release_date_source": "https://huggingface.co/internlm/Atria-Dawn-Preview",
    "parameter_source": "https://huggingface.co/internlm/Atria-Dawn-Preview",
    "benchmark_sources": {
      "DeepSearchQA": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "BrowseComp": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "WideSearch": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "DeepResearch Bench II": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "MLE-bench Lite": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "SWE-bench Pro": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "Terminal-Bench 2.1": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "BFCL v4": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "AutomationBench": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "SkillsBench": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "τ³-Bench Banking": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "Workspace-Bench": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "Workspace-Bench-Lite": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "JobBench": "https://huggingface.co/internlm/Atria-Dawn-Preview",
      "CyberGym": "https://huggingface.co/internlm/Atria-Dawn-Preview"
    },
    "benchmark_note": "공식 모델 카드 평가 표의 Atria Dawn Preview 열 값 15개입니다. GDPval(1583)은 Elo 척도라 정책상 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-157",
    "name": "Occamy-1.0",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Accio-Lab",
    "family": "Occamy",
    "type": "MLLM / agentic",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B total / 3B active (MoE)",
    "architecture": "Qwen3.6-35B-A3B 포스트트레인(40층, 256 experts·8 routed+1 shared, 비전 인코더 동결) — Marathon/Sprint 전문가 SFT+HDPO 후 uniform merge+SAO",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "장기 co-work 에이전트",
      "툴 호출",
      "터미널 코딩",
      "상태 추적·복구"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144 (SFT 시퀀스 131,072)",
    "languages": "",
    "variants": [
      "BF16",
      "FP8",
      "NVFP4",
      "GGUF (Q4_K_M/Q8_0)",
      "MTP(실험)"
    ],
    "reasoning_effort": [
      "enable_thinking on/off"
    ],
    "availability": "Hugging Face Accio-Lab/occamy-1.0, SGLang·vLLM, OpenAI 호환 API",
    "note": "Accio-Lab의 co-work 특화 에이전틱 모델(arXiv:2609.11977). 기술 보고서는 9/4 공개, HF 카드·체크포인트 공개와 보도는 9/15 기준이라 릴리스일을 9/15로 잡았습니다. RL 인프라 Dressage를 함께 오픈소스화했습니다.",
    "benchmarks": {
      "Claw-Eval (average)": 82.2,
      "Claw-Eval (Pass³)": 71.4,
      "WildClawBench": 49.16,
      "CommerceAgentBench": 37.38,
      "OfficeQA Pro": 48.1,
      "τ³-Bench (Banking)": 37.1,
      "AutomationBench (Pass¹)": 27.6,
      "AutomationBench (partial)": 69.1,
      "BFCL v4": 65.4,
      "VitaBench": 41.75,
      "Terminal-Bench 2.1": 59.0,
      "IFEval": 91.53
    },
    "official_id": "Accio-Lab/occamy-1.0",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Accio-Lab/occamy-1.0"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/papers/2609.11977"
      }
    ],
    "release_date_source": "https://huggingface.co/Accio-Lab/occamy-1.0",
    "parameter_source": "https://huggingface.co/Accio-Lab/occamy-1.0",
    "benchmark_sources": {
      "Claw-Eval (average)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "Claw-Eval (Pass³)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "WildClawBench": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "CommerceAgentBench": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "OfficeQA Pro": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "τ³-Bench (Banking)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "AutomationBench (Pass¹)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "AutomationBench (partial)": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "BFCL v4": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "VitaBench": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "Terminal-Bench 2.1": "https://huggingface.co/Accio-Lab/occamy-1.0",
      "IFEval": "https://huggingface.co/Accio-Lab/occamy-1.0"
    },
    "benchmark_note": "공식 모델 카드 Full Evaluation 표의 Occamy-1.0 열 값입니다. Business Arena($79,868, 통화 지표)와 GDPval(1,128, Elo)는 % 척도가 아니라 제외했습니다. 카드 주석상 * 표시는 공식 카드·제3자 인용 값, †는 공개 태스크 재현 값.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-158",
    "name": "Gemini 3.8 Live",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM / omni (live voice)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "라이브 대화 모델 — 근실시간 시각 입력, 백그라운드 툴 실행, 97개 언어 자동 전환",
    "modalities": [
      "audio",
      "text",
      "image"
    ],
    "focus": [
      "실시간 음성 대화",
      "보이스 에이전트",
      "백그라운드 태스크 실행"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "97개 언어 자동 감지·전환",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Gemini API·Google AI Studio(개발자), Gemini Enterprise(프라이빗 프리뷰), Search Live",
    "note": "규모·비용 효율에 초점을 둔 라이브 대화 모델. 공식 발표는 이 모델의 정량 벤치마크 수치를 제시하지 않았습니다(Speech Agent Arena 2위 언급만 있어 제3자 순위라 미수록). 오디오 출력에는 SynthID 워터마크.",
    "benchmarks": {
      "τ-Voice": 30.1
    },
    "official_id": "gemini-3.8-live",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-8-audio/"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://ai.google.dev/gemini-api/docs/live-api"
      }
    ],
    "release_date_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-8-audio/",
    "benchmark_sources": {
      "τ-Voice": "https://deepmind.google/models/model-cards/gemini-3-8-audio/"
    },
    "benchmark_note": "공식 모델 평가 문서(gemini-3-8-audio Evals & Methodology PDF) 차트에서 정확한 값을 판독한 수치입니다 — Artificial Analysis τ-Voice 30.1%. ServiceNow EVA-Bench는 산점도라 정확한 값 미표기, Sierra τ³-Banking·Big Bench Audio는 Extended Thinking 값만 게재. AA Speech-to-Speech Index·시간당 비용·Speech Agent Arena 순위는 지표 성격상 제외.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-159",
    "name": "Gemini 3.8 Live Extended Thinking",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM / omni (live voice)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "3.8 Live에 다단계 추론을 더한 상위 모델 — 말하면서 동시에 추론, 라이브 진행 상황 내레이션",
    "modalities": [
      "audio",
      "text",
      "image"
    ],
    "focus": [
      "복잡한 음성 태스크",
      "병렬 추론",
      "보이스 에이전트"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "extended thinking"
    ],
    "availability": "Gemini API·Google AI Studio, Gemini Live, Workspace(Docs/Gmail/Keep Live)·Search Live",
    "note": "고복잡도 태스크용 라이브 대화 모델. EVA-Bench(ServiceNow) 파레토 개선은 차트만 제시되어 수치 미수록.",
    "benchmarks": {
      "τ-Voice": 68.6,
      "τ-Voice-banking": 35.1,
      "Big Bench Audio": 97.7
    },
    "official_id": "gemini-3.8-live-extended-thinking",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://deepmind.google/models/model-cards/gemini-3-8-audio/"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://ai.google.dev/gemini-api/docs/live-api"
      }
    ],
    "release_date_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/",
    "parameter_source": "https://deepmind.google/models/model-cards/gemini-3-8-audio/",
    "benchmark_sources": {
      "τ-Voice": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/",
      "τ-Voice-banking": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/",
      "Big Bench Audio": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
    },
    "benchmark_note": "Google 공식 발표문에 인쇄된 수치 3개(τ-Voice 68.6%, Sierra τ-Voice-banking 35.1%, Big Bench Audio 97.7%)입니다. 발표문이 인용한 Artificial Analysis Speech-to-Speech Quality Index(82.6)와 Speech Agent Arena 2위는 제3자 지표·순위라 수록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-160",
    "name": "Koa",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Salesforce",
    "family": "Koa",
    "type": "LLM / reasoning (CRM)",
    "category": "Reasoning",
    "status": "Preview",
    "parameters": "정확한 수치 미공개 (NVIDIA Nemotron 3 Super 포스트트레인)",
    "architecture": "NVIDIA Nemotron 3 Super 포스트트레인 — 합성 CRM 시나리오 학습(고객 데이터 미사용)",
    "modalities": [
      "text"
    ],
    "focus": [
      "CRM 추론·툴 사용",
      "Agentforce 워크플로"
    ],
    "open_weights": false,
    "license": "Proprietary",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "선별 파일럿(2026년 겨울 GA 예정), 가중치·추론 모두 Salesforce 관리",
    "note": "Salesforce의 첫 자체 추론 모델. 기술 보고서는 arXiv:2609.15066(비공식 호스트라 출처 미등록). 공식 발표는 'Salesforce CRM 벤치마크에서 선도 모델과 동등 이상, 오류 1/3 수준'이라고만 명시하고 정량 점수를 공개하지 않아 benchmarks는 비워 둡니다.",
    "benchmarks": {},
    "official_id": "koa",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.salesforce.com/au/news/stories/koa-reasoning-model/"
      }
    ],
    "release_date_source": "https://www.salesforce.com/au/news/stories/koa-reasoning-model/",
    "parameter_source": "https://www.salesforce.com/au/news/stories/koa-reasoning-model/",
    "benchmark_sources": {},
    "benchmark_note": "공식 발표가 '오류 1/3 수준' 등 정성적 주장만 — 정량 벤치마크 미공개, 점수 미수록.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-161",
    "name": "Gensyn open-1b",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "Gensyn",
    "family": "open-1b",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "1.61B total (1.08B non-embedding)",
    "architecture": "Decoder-only Transformer — 전 학습 과정 검증 가능(100스텝 간격 체크포인트·스텝별 상태 해시)",
    "modalities": [
      "text"
    ],
    "focus": [
      "검증 가능한 학습(Replayable training)",
      "레퍼런스/연구용 소형 LM"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "4,096",
    "languages": "영어(코드·STEM 텍스트 포함)",
    "variants": [
      "open-1b-base",
      "open-1b-midtrained-93B",
      "open-1b-sft"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face Gensyn org(3개 체크포인트), 검증 레코드 open1b.gensyn.ai",
    "note": "학습 과정 전체를 독립 검증할 수 있는 첫 LM — 400B 토큰·80,957 옵티마이저 스텝의 데이터·코드·중간 체크포인트·스텝별 해시를 공개했습니다. 수록 레코드는 채팅 가능한 SFT 제품 모델이며 base/midtrained 체크포인트는 변형으로 묶습니다. 공식 카드에 벤치마크 점수는 없습니다.",
    "benchmarks": {},
    "official_id": "Gensyn/open-1b-sft",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/Gensyn/open-1b-sft"
      },
      {
        "label": "공식 1차 출처",
        "url": "https://open1b.gensyn.ai"
      }
    ],
    "release_date_source": "https://huggingface.co/Gensyn/open-1b-sft",
    "parameter_source": "https://huggingface.co/Gensyn/open-1b-sft",
    "benchmark_sources": {},
    "benchmark_note": "공식 페이지가 학습 검증 인프라 설명 위주, 표준 벤치마크 점수 미게재 — 점수 미수록.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-166",
    "name": "GigaChat 3.5 Reasoning",
    "date": "2026-09-10",
    "sortDate": "2026-09-10",
    "month": "2026-09",
    "monthName": "September",
    "company": "Sber",
    "family": "GigaChat",
    "type": "LLM / reasoning",
    "category": "Reasoning",
    "status": "GA",
    "parameters": "432B total / 28B active (MoE)",
    "architecture": "Hybrid MoE — MLA + GatedDeltaNet linear attention, GatedNorm, 3 MTP heads",
    "modalities": [
      "text"
    ],
    "focus": [
      "Reasoning",
      "Russian",
      "Agentic Tool Use"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "262K tokens",
    "languages": "Russian, English",
    "variants": [
      "GigaChat3.5-432B-A28B-Reasoning-bf16"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face (ai-sage), giga.chat",
    "note": "Sber의 첫 온라인 RL 추론 모델 — 6개 도메인 전문가를 독립 RL로 학습시킨 뒤 OPD(on-policy distillation)로 병합했습니다. 9/10 공식 발표(Habr 기업 블로그 habr.com/ru/companies/sberbank/articles/1080596)와 같은 날 HF 가중치가 공개됐습니다. 카드 열 이름은 'GigaChat 3.5 Ultra Reasoning'이고 배포 리포 표기는 GigaChat 3.5 Reasoning입니다. 기간 내(9/10) 릴리스인데 지난 감사에서 누락돼 소급 수록합니다.",
    "benchmarks": {
      "AIME 2025 (mean@32)": 89.0,
      "AIME 2026 (mean@32)": 92.0,
      "HMMT 2025 (mean@8)": 83.13,
      "IMOAnswerBench": 73.0,
      "GPQA-Diamond": 82.32,
      "IFBench": 77.0,
      "StructEval": 85.0,
      "MERA-2.0": 42.3,
      "Function Calling V4": 58.59,
      "TAU3-bench": 47.8,
      "Natural Plan": 80.19,
      "Live Code Bench v6": 85.4,
      "SWE-bench Verified": 64.7,
      "Terminal-Bench 2": 30.3,
      "Pollux": 67.9,
      "Arena Hard Logs V3": 56.5,
      "Arena Hard Ru": 60.7,
      "Ru LLM Arena": 64.0
    },
    "official_id": "ai-sage/GigaChat3.5-432B-A28B-Reasoning",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning"
      }
    ],
    "release_date_source": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
    "parameter_source": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
    "benchmark_sources": {
      "AIME 2025 (mean@32)": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "AIME 2026 (mean@32)": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "HMMT 2025 (mean@8)": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "IMOAnswerBench": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "GPQA-Diamond": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "IFBench": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "StructEval": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "MERA-2.0": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "Function Calling V4": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "TAU3-bench": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "Natural Plan": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "Live Code Bench v6": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "SWE-bench Verified": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "Terminal-Bench 2": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "Pollux": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "Arena Hard Logs V3": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "Arena Hard Ru": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning",
      "Ru LLM Arena": "https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B-Reasoning"
    },
    "benchmark_note": "공식 HF 모델 카드 비교표의 'GigaChat 3.5 Ultra Reasoning' 열 전부 수록. Arena 블록(Pollux·Arena Hard Logs V3·Arena Hard Ru·Ru LLM Arena)은 카드 각주상 MiniMax-M2.7 심판·GPT-5.2 베이스라인으로 개발사가 직접 계산한 승률 지표이며 제3자 크라우드 리더보드가 아니므로 수록했습니다. 'Average' 행은 합산 행이라 제외, 추론 토큰 절감 표(27~41%)는 점수가 아니라 제외. IMOAnswerBench는 Qwen-3-235B-Instruct-2507 심판, TAU3는 4개 도메인 평균, SWE-bench Verified·Terminal-Bench 2는 mini-swe-agent 3시간 제한 조건입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-19",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-167",
    "name": "Kimi K2.8 Preview",
    "date": "2026-09-11",
    "sortDate": "2026-09-11",
    "month": "2026-09",
    "monthName": "September",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM / coding",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개",
    "architecture": "Kimi K2.x 계열 독점 모델 (미공개)",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "Agentic Coding",
      "Long Context"
    ],
    "open_weights": false,
    "license": "",
    "context": "1M (1,048,576 tokens)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "low",
      "high",
      "max"
    ],
    "availability": "Kimi Code / Kimi API (model ID kimi-for-coding), all membership tiers",
    "note": "Moonshot 공식 What's New 문서 기준 9/11에 Kimi Code의 kimi-for-coding 라우트가 K2.8 Preview로 인플레이스 업그레이드됐습니다. 공식 모델 구성 문서는 이미지·비디오 입력과 low/high/max(기본 max) reasoning_effort를 명시합니다. 기간 내(9/11) 릴리스인데 지난 감사에서 누락돼 소급 수록합니다.",
    "benchmarks": {},
    "official_id": "kimi-for-coding",
    "official_sources": [
      {
        "label": "공식 출시 노트",
        "url": "https://www.kimi.com/code/docs/en/kimi-code/whats-new.html"
      },
      {
        "label": "공식 모델 구성 문서",
        "url": "https://www.kimi.com/code/docs/en/kimi-code/models.html"
      }
    ],
    "release_date_source": "https://www.kimi.com/code/docs/en/kimi-code/whats-new.html",
    "parameter_source": "https://www.kimi.com/code/docs/en/kimi-code/models.html",
    "benchmark_sources": {},
    "benchmark_note": "공식 출시 노트·모델 구성 문서에 벤치마크 수치가 없습니다(제공사 정성 서술 'performance close to K3'·'K2.7 Code 대비 코딩·에이전트 개선'만 존재).",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-19",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-168",
    "name": "Realtime-Venus-Omni",
    "date": "2026-09-16",
    "sortDate": "2026-09-16",
    "month": "2026-09",
    "monthName": "September",
    "company": "Ant Group / InclusionAI",
    "family": "Realtime-Venus",
    "type": "MLLM / omni (full-duplex audio-visual)",
    "category": "Omni",
    "status": "GA",
    "parameters": "9B",
    "architecture": "MiniCPM-o 4.5 / Omni-Flow base — SigLIP2 vision + Whisper-Medium audio + Qwen3-8B LM + streaming flow-matching speech decoder",
    "modalities": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "focus": [
      "Full-Duplex Interaction",
      "Audio-Visual Understanding",
      "Async Delegation"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "40,960 tokens",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face / ModelScope (inclusionAI/Realtime-Venus)",
    "note": "Venus Team(Ant Group)·Tsinghua의 풀듀플렉스 옴니 프런트엔드. 발표 없이 arXiv 보고서(9/12)와 HF 체크포인트 저장소(9/16)만 공개된 조용한 릴리스로, 체크포인트 공개일 9/16을 릴리스일로 잡았습니다. Realtime-Venus-Harness의 비동기 위임(delegate)과 학습 없는 장기 비디오 메모리를 지원합니다.",
    "benchmarks": {
      "StreamingBench": 70.2,
      "OVO-Bench": 64.7,
      "ProactiveVideoQA (PAUC)": 46.2,
      "OmniPro (probe)": 29.0,
      "WorldSense": 54.0,
      "Daily-Omni": 81.3,
      "OmniVideoBench": 39.2,
      "LVOmniBench": 38.9,
      "MMAU": 76.9,
      "MMAU-Pro": 62.0,
      "MMAR": 65.2,
      "MMSU": 64.6,
      "Llama Questions (speech)": 83.3,
      "Speech TriviaQA": 73.6,
      "Speech CMMLU": 67.5,
      "FDB-v1.5 interruption C_RESPOND↑": 60.0,
      "FDB-v1.5 interruption C_RESUME↓": 37.0,
      "FDB-v1.5 backchannel C_RESPOND↓": 2.0,
      "FDB-v1.5 backchannel C_RESUME↑": 92.0,
      "FDB-v1.5 others-directed C_RESPOND↓": 6.0,
      "FDB-v1.5 others-directed C_RESUME↑": 90.0,
      "FDB-v1.5 background C_RESPOND↓": 12.0,
      "FDB-v1.5 background C_RESUME↑": 85.0,
      "FDB-v3 tool selection F1": 86.0,
      "FDB-v3 argument accuracy": 53.1,
      "FDB-v3 Pass@1": 43.0,
      "Delegate Benchmark (overall routing)": 75.93,
      "Delegate Benchmark (external·delegation recall)": 68.33,
      "Delegate Benchmark (routine·specificity)": 84.44,
      "Delegate Benchmark (reasoning routing)": 75.0
    },
    "official_id": "inclusionAI/Realtime-Venus",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Realtime-Venus"
      },
      {
        "label": "공식 기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2609.13814"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Realtime-Venus",
    "parameter_source": "https://huggingface.co/inclusionAI/Realtime-Venus",
    "benchmark_sources": {
      "StreamingBench": "https://arxiv.org/abs/2609.13814",
      "OVO-Bench": "https://arxiv.org/abs/2609.13814",
      "ProactiveVideoQA (PAUC)": "https://arxiv.org/abs/2609.13814",
      "OmniPro (probe)": "https://arxiv.org/abs/2609.13814",
      "WorldSense": "https://arxiv.org/abs/2609.13814",
      "Daily-Omni": "https://arxiv.org/abs/2609.13814",
      "OmniVideoBench": "https://arxiv.org/abs/2609.13814",
      "LVOmniBench": "https://arxiv.org/abs/2609.13814",
      "MMAU": "https://arxiv.org/abs/2609.13814",
      "MMAU-Pro": "https://arxiv.org/abs/2609.13814",
      "MMAR": "https://arxiv.org/abs/2609.13814",
      "MMSU": "https://arxiv.org/abs/2609.13814",
      "Llama Questions (speech)": "https://arxiv.org/abs/2609.13814",
      "Speech TriviaQA": "https://arxiv.org/abs/2609.13814",
      "Speech CMMLU": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 interruption C_RESPOND↑": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 interruption C_RESUME↓": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 backchannel C_RESPOND↓": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 backchannel C_RESUME↑": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 others-directed C_RESPOND↓": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 others-directed C_RESUME↑": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 background C_RESPOND↓": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 background C_RESUME↑": "https://arxiv.org/abs/2609.13814",
      "FDB-v3 tool selection F1": "https://arxiv.org/abs/2609.13814",
      "FDB-v3 argument accuracy": "https://arxiv.org/abs/2609.13814",
      "FDB-v3 Pass@1": "https://arxiv.org/abs/2609.13814",
      "Delegate Benchmark (overall routing)": "https://arxiv.org/abs/2609.13814",
      "Delegate Benchmark (external·delegation recall)": "https://arxiv.org/abs/2609.13814",
      "Delegate Benchmark (routine·specificity)": "https://arxiv.org/abs/2609.13814",
      "Delegate Benchmark (reasoning routing)": "https://arxiv.org/abs/2609.13814"
    },
    "benchmark_note": "Realtime-Venus 기술 보고서(arXiv:2609.13814) Table 2·4·5·6·7·8 수치입니다. AlpacaEval judge 점수(4.75/5)는 % 척도가 아니라 제외, FDB-v1.5의 0~1 수치는 초록이 %로 환산한 값을 그대로 따랐습니다. Table 3의 메모리 증강(+memory) 구간별 수치는 별도 구성이라 합산 수록하지 않고 여기에만 기록합니다(LVOmniBench 60~90분 구간 47.06 등).",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-19",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-169",
    "name": "Realtime-Venus-Audio",
    "date": "2026-09-16",
    "sortDate": "2026-09-16",
    "month": "2026-09",
    "monthName": "September",
    "company": "Ant Group / InclusionAI",
    "family": "Realtime-Venus",
    "type": "MLLM / omni (full-duplex voice)",
    "category": "Omni",
    "status": "GA",
    "parameters": "9B",
    "architecture": "MiniCPM-o 4.5 / Omni-Flow base — Whisper-Medium audio + Qwen3-8B LM + streaming flow-matching speech decoder (vision tower unused at inference)",
    "modalities": [
      "audio",
      "text"
    ],
    "focus": [
      "Full-Duplex Spoken Dialogue",
      "Audio Understanding",
      "Async Delegation"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "40,960 tokens",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face / ModelScope (inclusionAI/Realtime-Venus)",
    "note": "Realtime-Venus의 오디오 전용 체크포인트(오디오·텍스트 입력 → 텍스트·음성 출력). Omni와 같은 스트리밍 백본에서 별도 학습됐습니다. 발표 없는 조용한 릴리스라 체크포인트 공개일 9/16을 릴리스일로 잡았습니다(기술 보고서 9/12).",
    "benchmarks": {
      "MMAU": 78.0,
      "MMAU-Pro": 63.2,
      "MMAR": 65.6,
      "MMSU": 66.8,
      "Llama Questions (speech)": 83.8,
      "Speech TriviaQA": 75.7,
      "Speech CMMLU": 67.8,
      "FDB-v1.5 interruption C_RESPOND↑": 75.0,
      "FDB-v1.5 interruption C_RESUME↓": 23.0,
      "FDB-v1.5 backchannel C_RESPOND↓": 0.0,
      "FDB-v1.5 backchannel C_RESUME↑": 97.0,
      "FDB-v1.5 others-directed C_RESPOND↓": 11.0,
      "FDB-v1.5 others-directed C_RESUME↑": 88.0,
      "FDB-v1.5 background C_RESPOND↓": 11.0,
      "FDB-v1.5 background C_RESUME↑": 86.0,
      "FDB-v3 tool selection F1": 85.0,
      "FDB-v3 argument accuracy": 54.2,
      "FDB-v3 Pass@1": 48.0,
      "Delegate Benchmark (overall routing)": 68.89,
      "Delegate Benchmark (external·delegation recall)": 92.22,
      "Delegate Benchmark (routine·specificity)": 39.44,
      "Delegate Benchmark (reasoning routing)": 75.0
    },
    "official_id": "inclusionAI/Realtime-Venus",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/inclusionAI/Realtime-Venus"
      },
      {
        "label": "공식 기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2609.13814"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Realtime-Venus",
    "parameter_source": "https://huggingface.co/inclusionAI/Realtime-Venus",
    "benchmark_sources": {
      "MMAU": "https://arxiv.org/abs/2609.13814",
      "MMAU-Pro": "https://arxiv.org/abs/2609.13814",
      "MMAR": "https://arxiv.org/abs/2609.13814",
      "MMSU": "https://arxiv.org/abs/2609.13814",
      "Llama Questions (speech)": "https://arxiv.org/abs/2609.13814",
      "Speech TriviaQA": "https://arxiv.org/abs/2609.13814",
      "Speech CMMLU": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 interruption C_RESPOND↑": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 interruption C_RESUME↓": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 backchannel C_RESPOND↓": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 backchannel C_RESUME↑": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 others-directed C_RESPOND↓": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 others-directed C_RESUME↑": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 background C_RESPOND↓": "https://arxiv.org/abs/2609.13814",
      "FDB-v1.5 background C_RESUME↑": "https://arxiv.org/abs/2609.13814",
      "FDB-v3 tool selection F1": "https://arxiv.org/abs/2609.13814",
      "FDB-v3 argument accuracy": "https://arxiv.org/abs/2609.13814",
      "FDB-v3 Pass@1": "https://arxiv.org/abs/2609.13814",
      "Delegate Benchmark (overall routing)": "https://arxiv.org/abs/2609.13814",
      "Delegate Benchmark (external·delegation recall)": "https://arxiv.org/abs/2609.13814",
      "Delegate Benchmark (routine·specificity)": "https://arxiv.org/abs/2609.13814",
      "Delegate Benchmark (reasoning routing)": "https://arxiv.org/abs/2609.13814"
    },
    "benchmark_note": "Realtime-Venus 기술 보고서(arXiv:2609.13814) Table 4·5·6·7·8 수치입니다. AlpacaEval judge 점수(4.81/5, MiniCPM-o 4.5와 동률)는 % 척도가 아니라 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-19",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-170",
    "name": "Hunmin-397B-A17B-CUA",
    "date": "2026-09-18",
    "sortDate": "2026-09-18",
    "month": "2026-09",
    "monthName": "September",
    "company": "GenON",
    "family": "Hunmin",
    "type": "MLLM / computer-use agent",
    "category": "MLLM",
    "status": "GA",
    "parameters": "397B total / 17B active (MoE)",
    "architecture": "Qwen3.5-397B-A17B base + Qwen-CUA low-rank capability transfer + SFT & Agent RL (GRPO)",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "Computer Use",
      "GUI Grounding",
      "Korean"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "Korean, English",
    "variants": [
      "Hunmin-397B-A17B-CUA-FP8"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face (mncai/Hunmin-397B-A17B-CUA)",
    "note": "제논(GenON, 구 마인즈앤컴퍼니 — 영문 보도는 Xenon으로 표기)의 컴퓨터 조작 특화 VLM. 공식 배포명은 '훈민 VLM 397B'이고 HF 리포·카드 표기는 Hunmin-397B-A17B-CUA입니다. B200 8장으로 FP8 QLoRA 후학습. HF 리포는 9/7에 조용히 올라왔고 회사의 공식 발표는 9/18이라 발표일을 릴리스일로 잡았습니다. FP8 리포(mncai/Hunmin-397B-A17B-CUA-FP8)는 양자화 변형으로 별도 모델로 세지 않습니다.",
    "benchmarks": {
      "ScreenSpot-Pro": 75.6,
      "ScreenSpot-Pro (zoom-in)": 76.6,
      "ScreenSpot-v2": 96.2,
      "OSWorld-G": 79.9,
      "OSWorld-G-R": 86.8,
      "OSWorld (360)": 70.5,
      "WindowsAgentArena (153)": 50.9,
      "KMMLU-Redux": 81.4,
      "KMMLU-Pro": 76.1,
      "IFEval-Ko": 85.1,
      "K-MMBench": 92.5,
      "K-SEED": 81.5,
      "K-MMStar": 80.3,
      "K-DTCBench": 98.2
    },
    "official_id": "mncai/Hunmin-397B-A17B-CUA",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA"
      },
      {
        "label": "공식 평가 방법론 리포트",
        "url": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA/resolve/main/Hunmin-397B-A17B-CUA-methodology.pdf"
      }
    ],
    "release_date_source": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
    "parameter_source": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
    "benchmark_sources": {
      "ScreenSpot-Pro": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "ScreenSpot-Pro (zoom-in)": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "ScreenSpot-v2": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "OSWorld-G": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "OSWorld-G-R": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "OSWorld (360)": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "WindowsAgentArena (153)": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "KMMLU-Redux": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "KMMLU-Pro": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "IFEval-Ko": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "K-MMBench": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "K-SEED": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "K-MMStar": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA",
      "K-DTCBench": "https://huggingface.co/mncai/Hunmin-397B-A17B-CUA"
    },
    "benchmark_note": "공식 HF 모델 카드 표 수치입니다. 카드 명시 조건: 컴퓨터 사용 평가는 모두 image_max=5이고 베이스라인은 개발사가 같은 환경에서 재현 측정한 값입니다. K-LLaVA-W judge 점수(128.0)는 % 척도가 아니라 제외했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-19",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-171",
    "name": "Qwen3.8-Omni-Flash",
    "date": "2026-09-18",
    "sortDate": "2026-09-18",
    "month": "2026-09",
    "monthName": "September",
    "company": "Alibaba",
    "family": "Qwen3.8",
    "type": "MLLM / omni",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "architecture": "Native omni-modal on Qwen3.8-Flash-Next architecture",
    "modalities": [
      "text",
      "image",
      "audio",
      "video"
    ],
    "focus": [
      "Omni Understanding",
      "Agentic AV Workflows",
      "Tool Use"
    ],
    "open_weights": false,
    "license": "",
    "context": "1M (max input 991,808 / thinking 983,616, max output 131,072)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Qianwen AI Platform / QwenCloud / Alibaba Cloud Model Studio API (model ID qwen3.8-omni-flash)",
    "note": "Qwen의 차세대 네이티브 옴니모달 모델 — 텍스트·이미지·오디오·비디오 입력, 텍스트 출력, 함수 호출·웹 검색 내장, 1M 컨텍스트. 공식 발표는 29개 평가 평균이 Qwen3.5-Omni-Plus 대비 25%+ 향상됐다고 보고합니다. 실시간 변형 qwen3.8-omni-flash-realtime과 Qwen-MM-Plugins·Qwen-Live Harness를 함께 공개했습니다.",
    "benchmarks": {
      "WildClawBench-MM": 71.0,
      "UniClawBench": 69.6,
      "AgenticVBench": 36.8,
      "OmniGAIA": 74.0,
      "DailyOmni": 85.1,
      "WorldSense": 68.5,
      "AVUT": 86.6,
      "JoinAVBench": 75.9,
      "OmniVideoBench": 63.4,
      "Video-MME-v2": 65.0,
      "LVOmniBench": 63.3,
      "OmniCloze": 63.2,
      "OmniCap-IF (CSR)": 80.6,
      "OmniCap-IF (ISR)": 28.2,
      "QIVD": 69.6,
      "StreamingBench": 80.8,
      "AliMeeting Test (DER↓)": 3.4,
      "AliMeeting Test (cpWER↓)": 17.2,
      "AISHELL-4 (DER↓)": 2.8,
      "AISHELL-4 (cpWER↓)": 11.2,
      "MagicData-RAMC (DER↓)": 5.7,
      "MagicData-RAMC (cpWER↓)": 14.1,
      "MLC-SLM en (DER↓)": 4.0,
      "MLC-SLM en (cpWER↓)": 14.2,
      "WenetSpeech Net (WER↓)": 4.8,
      "WenetSpeech Meeting (WER↓)": 4.6,
      "FLEURS-ASR (WER↓)": 9.3,
      "FLEURS-S2TT (BLEU)": 31.8,
      "SpotSoundBench": 67.2,
      "MMAU": 81.8,
      "MMAR": 79.8,
      "MMSU": 82.1,
      "LongAudioSpan (Accuracy)": 82.7,
      "LongAudioSpan (Rubric)": 71.8,
      "LongAudioSpan (Chain)": 48.2,
      "MuchoMusic-RUL": 72.6,
      "HumMusQA": 75.8,
      "MusTBench": 50.6,
      "Audio MultiChallenge": 71.5,
      "WildSpeech": 74.3,
      "VoiceBench": 91.6,
      "DeepSWE 1.1": 57.8,
      "SWE-bench Pro": 63.3,
      "SWE-bench Multilingual": 80.5,
      "NL2Repo-Bench": 48.9,
      "CoWorkBench": 75.3,
      "IFBench": 81.5,
      "GPQA Diamond": 91.0,
      "HLE": 36.5,
      "LiveCodeBench v6": 92.6,
      "ClawEval-MM (Pass@3)": 60.4,
      "ClawEval-MM (Average)": 61.9,
      "AndroidWorld": 87.1,
      "Vision2Web": 62.9,
      "ERQA": 71.0,
      "LVBench": 76.9,
      "RealWorldQA": 87.7,
      "MathVision (without CI)": 91.8,
      "MathVision (with CI)": 96.2,
      "CharXiv-RQ (without CI)": 83.5,
      "CharXiv-RQ (with CI)": 91.4,
      "OmniVideoBench (Qwen Code)": 67.8,
      "Video-MME-v2 (Qwen Code)": 71.3,
      "LVOmniBench (Qwen Code)": 73.6
    },
    "official_id": "qwen3.8-omni-flash",
    "official_sources": [
      {
        "label": "공식 출시 발표",
        "url": "https://qwen.ai/blog?id=qwen3.8-omni-flash"
      },
      {
        "label": "공식 모델 페이지",
        "url": "https://www.qwencloud.com/models/qwen3.8-omni-flash"
      }
    ],
    "release_date_source": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
    "parameter_source": "https://www.qwencloud.com/models/qwen3.8-omni-flash",
    "benchmark_sources": {
      "WildClawBench-MM": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "UniClawBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "AgenticVBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "OmniGAIA": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "DailyOmni": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "WorldSense": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "AVUT": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "JoinAVBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "OmniVideoBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "Video-MME-v2": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "LVOmniBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "OmniCloze": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "OmniCap-IF (CSR)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "OmniCap-IF (ISR)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "QIVD": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "StreamingBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "AliMeeting Test (DER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "AliMeeting Test (cpWER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "AISHELL-4 (DER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "AISHELL-4 (cpWER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MagicData-RAMC (DER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MagicData-RAMC (cpWER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MLC-SLM en (DER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MLC-SLM en (cpWER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "WenetSpeech Net (WER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "WenetSpeech Meeting (WER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "FLEURS-ASR (WER↓)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "FLEURS-S2TT (BLEU)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "SpotSoundBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MMAU": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MMAR": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MMSU": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "LongAudioSpan (Accuracy)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "LongAudioSpan (Rubric)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "LongAudioSpan (Chain)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MuchoMusic-RUL": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "HumMusQA": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MusTBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "Audio MultiChallenge": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "WildSpeech": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "VoiceBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "DeepSWE 1.1": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "SWE-bench Pro": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "SWE-bench Multilingual": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "NL2Repo-Bench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "CoWorkBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "IFBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "GPQA Diamond": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "HLE": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "LiveCodeBench v6": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "ClawEval-MM (Pass@3)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "ClawEval-MM (Average)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "AndroidWorld": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "Vision2Web": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "ERQA": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "LVBench": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "RealWorldQA": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MathVision (without CI)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "MathVision (with CI)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "CharXiv-RQ (without CI)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "CharXiv-RQ (with CI)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "OmniVideoBench (Qwen Code)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "Video-MME-v2 (Qwen Code)": "https://qwen.ai/blog?id=qwen3.8-omni-flash",
      "LVOmniBench (Qwen Code)": "https://qwen.ai/blog?id=qwen3.8-omni-flash"
    },
    "benchmark_note": "qwen.ai 공식 발표문(2026-09-18) 비교표의 Qwen3.8-Omni-Flash 열 전부 수록. DER·cpWER·WER는 낮을수록 좋은 지표라 ↓를 명기했습니다. Realtime API 지연 표(TPS·TTFT·RTF)는 % 점수가 아니라 제외, '(Qwen Code)' 접미 행은 같은 모델을 Qwen Code 에이전트 하네스로 돌린 발표문 별도 열입니다. 발표문 각주의 시간당 가격 절감(음성 -98%·AV -93%)은 가격 지표라 점수로 수록하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-19",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-172",
    "name": "Solar Pro 4",
    "date": "2026-08-06",
    "sortDate": "2026-08-06",
    "month": "2026-08",
    "monthName": "August",
    "company": "Upstage",
    "family": "Solar",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [],
    "focus": [
      "agentic workflows",
      "tool calling",
      "long-document reasoning",
      "terminal tasks"
    ],
    "open_weights": false,
    "license": "",
    "context": "512K (최대 출력 128K)",
    "languages": "English, Korean, Japanese",
    "variants": [],
    "reasoning_effort": [
      "low",
      "high"
    ],
    "availability": "Upstage Console·SolarChat·OpenRouter·Hermes Agent",
    "note": "Solar Pro 3 후속 상용 플래그십. 512K 컨텍스트·최대 128K 출력, EN/KO/JA 입출력, reasoning effort high/low. OpenAI 호환 API(모델 ID solar-pro4, 스냅샷 solar-pro4-260806), SolarChat·OpenRouter·Hermes Agent 제공. $0.30/$1.20 per 1M.",
    "benchmarks": {
      "BrowseComp": 49.2,
      "SWE-bench Verified (openhands)": 70.6,
      "MCP-Atlas": 61.4,
      "APEX-Agents": 18.7,
      "MMLU-Pro": 86.3,
      "LiveCodeBench": 87.8,
      "AIME 2026": 95.3,
      "KMMLU-Pro": 79.2,
      "KBL (law)": 77.5,
      "KorMedMCQA (medicine)": 93.2,
      "Ko-GDPval": 87.3,
      "Arena-Hard v2 (Japanese)": 81.9,
      "MMLU (Japanese)": 89.5,
      "IFEval (Japanese)": 81.6
    },
    "benchmark_sources": {
      "BrowseComp": "https://www.upstage.ai/blog/en/solar-pro-4",
      "SWE-bench Verified (openhands)": "https://www.upstage.ai/blog/en/solar-pro-4",
      "MCP-Atlas": "https://www.upstage.ai/blog/en/solar-pro-4",
      "APEX-Agents": "https://www.upstage.ai/blog/en/solar-pro-4",
      "MMLU-Pro": "https://www.upstage.ai/blog/en/solar-pro-4",
      "LiveCodeBench": "https://www.upstage.ai/blog/en/solar-pro-4",
      "AIME 2026": "https://www.upstage.ai/blog/en/solar-pro-4",
      "KMMLU-Pro": "https://www.upstage.ai/blog/en/solar-pro-4",
      "KBL (law)": "https://www.upstage.ai/blog/en/solar-pro-4",
      "KorMedMCQA (medicine)": "https://www.upstage.ai/blog/en/solar-pro-4",
      "Ko-GDPval": "https://www.upstage.ai/blog/en/solar-pro-4",
      "Arena-Hard v2 (Japanese)": "https://www.upstage.ai/blog/en/solar-pro-4",
      "MMLU (Japanese)": "https://www.upstage.ai/blog/en/solar-pro-4",
      "IFEval (Japanese)": "https://www.upstage.ai/blog/en/solar-pro-4"
    },
    "benchmark_note": "Upstage 공식 블로그 비교표 중 * 표시(사내 평가 환경 자체 측정)만 수록. 비표시 값인 Terminal-Bench v2.1 57.0·GDPval-AA v2 38.8·τ³-Banking 23.0·AA-LCR 71.0·GPQA Diamond 89.0은 Artificial Analysis 등 외부 측정/제3자 지표라 제외. KBL=한국어 법률, KorMedMCQA=한국어 의료, Ko-GDPval=한국어 사무작업 자체 벤치마크.",
    "official_id": "solar-pro4",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.upstage.ai/blog/en/solar-pro-4"
      }
    ],
    "release_date_source": "https://www.upstage.ai/blog/en/solar-pro-4",
    "parameter_source": "https://www.upstage.ai/blog/en/solar-pro-4",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-173",
    "name": "Nex-N2.5-mini",
    "date": "2026-09-08",
    "sortDate": "2026-09-08",
    "month": "2026-09",
    "monthName": "September",
    "company": "Nex-AGI",
    "family": "Nex",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B total / 3B active (MoE)",
    "parameter_status": "verified",
    "architecture": "Qwen3.5 MoE 계열",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "agentic tasks",
      "computer use",
      "web browsing",
      "long-horizon tasks"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "none",
      "medium",
      "high"
    ],
    "availability": "Hugging Face·ModelScope·OpenRouter",
    "note": "Qwen3.5 계열 멀티모달 베이스 위에서 컴퓨터 사용·웹브라우징·시각 기반 에이전트 능력을 강화한 에이전틱 모델. reasoning_effort none/medium(기본)/high, Apache 2.0, OpenRouter 제공.",
    "benchmarks": {
      "Terminal-Bench 2.1": 73.4,
      "SWE-bench Pro": 43.8,
      "DeepSWE v1.1": 36.1,
      "AutomationBench (v1.0.6)": 32.3,
      "Toolathlon Verified": 54.6,
      "JobBench": 28.5,
      "BrowseComp": 83.4,
      "OSWorld-Verified": 71.2,
      "OSWorld-2": 30.5,
      "WebTest": 48.6,
      "WebArena-Verified": 63.4,
      "OSWorld-G": 82.9,
      "Vision2Web": 52.9,
      "SWE-MM": 25.5,
      "OmniDoc": 89.7
    },
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "SWE-bench Pro": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "DeepSWE v1.1": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "AutomationBench (v1.0.6)": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "Toolathlon Verified": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "JobBench": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "BrowseComp": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "OSWorld-Verified": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "OSWorld-2": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "WebTest": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "WebArena-Verified": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "OSWorld-G": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "Vision2Web": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "SWE-MM": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
      "OmniDoc": "https://huggingface.co/nex-agi/Nex-N2.5-mini"
    },
    "benchmark_note": "Nex-AGI 공식 HF 카드의 비교표 중 Nex-N2.5-mini 열 값(개발사 직접 게시). GDPval-AA v2 1446은 Elo형 척도라 % 점수표에서 제외.",
    "official_id": "nex-agi/Nex-N2.5-mini",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/nex-agi/Nex-N2.5-mini"
      },
      {
        "label": "Nex-AGI 공식 사이트",
        "url": "https://nex-agi.com/"
      }
    ],
    "release_date_source": "https://huggingface.co/nex-agi/Nex-N2.5-mini",
    "parameter_source": "https://nex-agi.com/",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-174",
    "name": "Nex-N2.5-Pro",
    "date": "2026-09-08",
    "sortDate": "2026-09-08",
    "month": "2026-09",
    "monthName": "September",
    "company": "Nex-AGI",
    "family": "Nex",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "397B total / 17B active (MoE)",
    "parameter_status": "verified",
    "architecture": "Qwen3.5 MoE 계열",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "agentic tasks",
      "computer use",
      "web browsing",
      "long-horizon tasks"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "none",
      "medium",
      "high"
    ],
    "availability": "Hugging Face·ModelScope·OpenRouter",
    "note": "Qwen3.5 계열 멀티모달 베이스 위에서 컴퓨터 사용·웹브라우징·시각 기반 에이전트 능력을 강화한 에이전틱 모델. reasoning_effort none/medium(기본)/high, Apache 2.0, OpenRouter 제공.",
    "benchmarks": {
      "Terminal-Bench 2.1": 82.7,
      "SWE-bench Pro": 61.2,
      "DeepSWE v1.1": 55.8,
      "AutomationBench (v1.0.6)": 44.2,
      "Toolathlon Verified": 68.5,
      "JobBench": 41.4,
      "BrowseComp": 89.7,
      "OSWorld-Verified": 82.2,
      "OSWorld-2": 56.4,
      "WebTest": 52.8,
      "WebArena-Verified": 67.6,
      "OSWorld-G": 87.4,
      "Vision2Web": 68.2,
      "SWE-MM": 38.2,
      "OmniDoc": 92.2
    },
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "SWE-bench Pro": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "DeepSWE v1.1": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "AutomationBench (v1.0.6)": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "Toolathlon Verified": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "JobBench": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "BrowseComp": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "OSWorld-Verified": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "OSWorld-2": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "WebTest": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "WebArena-Verified": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "OSWorld-G": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "Vision2Web": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "SWE-MM": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
      "OmniDoc": "https://huggingface.co/nex-agi/Nex-N2.5-Pro"
    },
    "benchmark_note": "Nex-AGI 공식 HF 카드의 비교표 중 Nex-N2.5-Pro 열 값(개발사 직접 게시). GDPval-AA v2 1628은 Elo형 척도라 % 점수표에서 제외.",
    "official_id": "nex-agi/Nex-N2.5-Pro",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/nex-agi/Nex-N2.5-Pro"
      },
      {
        "label": "Nex-AGI 공식 사이트",
        "url": "https://nex-agi.com/"
      }
    ],
    "release_date_source": "https://huggingface.co/nex-agi/Nex-N2.5-Pro",
    "parameter_source": "https://nex-agi.com/",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-175",
    "name": "Nex-N2.5-Max",
    "date": "2026-09-08",
    "sortDate": "2026-09-08",
    "month": "2026-09",
    "monthName": "September",
    "company": "Nex-AGI",
    "family": "Nex",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "1.6T (MoE)",
    "parameter_status": "publisher-partial",
    "architecture": "DeepSeek-V4 계열 MoE",
    "modalities": [
      "text"
    ],
    "focus": [
      "agentic tasks",
      "computer use",
      "web browsing",
      "long-horizon tasks"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "none",
      "medium",
      "high"
    ],
    "availability": "Hugging Face·ModelScope·OpenRouter",
    "note": "DeepSeek-V4-Pro-Base 기반 1.6T MoE 텍스트 전용 모델 — 조 패밀리 최초 조 단위 post-training. reasoning_effort none/medium(기본)/high, Apache 2.0, OpenRouter 제공.",
    "benchmarks": {
      "Terminal-Bench 2.1": 86.1,
      "SWE-bench Pro": 65.7,
      "DeepSWE v1.1": 65.6,
      "AutomationBench (v1.0.6)": 50.2,
      "Toolathlon Verified": 74.7,
      "JobBench": 53.6,
      "BrowseComp": 92.6
    },
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/nex-agi/Nex-N2.5-Max",
      "SWE-bench Pro": "https://huggingface.co/nex-agi/Nex-N2.5-Max",
      "DeepSWE v1.1": "https://huggingface.co/nex-agi/Nex-N2.5-Max",
      "AutomationBench (v1.0.6)": "https://huggingface.co/nex-agi/Nex-N2.5-Max",
      "Toolathlon Verified": "https://huggingface.co/nex-agi/Nex-N2.5-Max",
      "JobBench": "https://huggingface.co/nex-agi/Nex-N2.5-Max",
      "BrowseComp": "https://huggingface.co/nex-agi/Nex-N2.5-Max"
    },
    "benchmark_note": "Nex-AGI 공식 HF 카드의 비교표 중 Nex-N2.5-Max 열 값(개발사 직접 게시). GDPval-AA v2 1713은 Elo형 척도라 % 점수표에서 제외.",
    "official_id": "nex-agi/Nex-N2.5-Max",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/nex-agi/Nex-N2.5-Max"
      },
      {
        "label": "Nex-AGI 공식 사이트",
        "url": "https://nex-agi.com/"
      }
    ],
    "release_date_source": "https://huggingface.co/nex-agi/Nex-N2.5-Max",
    "parameter_source": "https://nex-agi.com/",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-176",
    "name": "Grok 4.7",
    "date": "2026-09-21",
    "sortDate": "2026-09-21",
    "month": "2026-09",
    "monthName": "September",
    "company": "xAI / SpaceXAI",
    "family": "Grok",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "long-running agents",
      "coding",
      "visual work",
      "knowledge work"
    ],
    "open_weights": false,
    "license": "",
    "context": "500K",
    "languages": "",
    "variants": [
      "grok-4.7-fast"
    ],
    "reasoning_effort": [],
    "availability": "xAI API·Grok 앱",
    "note": "Grok 4.6보다 큰 베이스 모델 + 더 긴 RL. 장시간 작업·자기 검증·긴 컨텍스트 개선. 500K 컨텍스트, 지식 컷오프 2026-05. API ID grok-4.7, $2/$6 per 1M(프롬프트 200K 초과 시 $4/$12), fast 변형은 2배 속도·2배 가격.",
    "benchmarks": {
      "DeepSWE v1.1": 71.0,
      "EEBench": 64.0,
      "CursorBench 4.0": 46.3,
      "Terminal-Bench 4.0": 37.6,
      "Harvey LAB (Vals)": 19.6,
      "HealthBench Professional": 56.7,
      "LatchBio Biosafety": 62.4,
      "HackerBench v0.3 risky pass-through (↓)": 3.3
    },
    "benchmark_sources": {
      "DeepSWE v1.1": "https://x.ai/news/grok-4-7",
      "EEBench": "https://x.ai/news/grok-4-7",
      "CursorBench 4.0": "https://x.ai/news/grok-4-7",
      "Terminal-Bench 4.0": "https://x.ai/news/grok-4-7",
      "Harvey LAB (Vals)": "https://x.ai/news/grok-4-7",
      "HealthBench Professional": "https://x.ai/news/grok-4-7",
      "LatchBio Biosafety": "https://x.ai/news/grok-4-7",
      "HackerBench v0.3 risky pass-through (↓)": "https://x.ai/news/grok-4-7"
    },
    "benchmark_note": "xAI 공식 발표 평가 표 값(에포트별 최고값 기재; DeepSWE 71.0은 high effort 명시). AA Briefcase v1.1 1657은 %가 아닌 점수 척도라 제외. LatchBio Biosafety·HackerBench v0.3(↓ 위험 프롬프트 통과율, 낮을수록 우수)은 발표문에 함께 게시된 공식 안전성 평가.",
    "official_id": "grok-4.7",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://x.ai/news/grok-4-7"
      },
      {
        "label": "공식 모델 문서(컨텍스트·가격)",
        "url": "https://docs.x.ai/developers/models"
      }
    ],
    "release_date_source": "https://x.ai/news/grok-4-7",
    "parameter_source": "https://docs.x.ai/developers/models",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-177",
    "name": "AliceAI-Foundation-80B-A3B-Base",
    "date": "2026-09-21",
    "sortDate": "2026-09-21",
    "month": "2026-09",
    "monthName": "September",
    "company": "Yandex",
    "family": "AliceAI",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "80B total / 3B active (MoE)",
    "parameter_status": "verified",
    "architecture": "Hybrid KDA + Gated Attention MoE",
    "modalities": [
      "text"
    ],
    "focus": [
      "Russian language",
      "factual knowledge",
      "long context",
      "open pretraining"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "Russian, English",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face·ModelScope",
    "note": "처음부터 학습한 오픈가중치 파운데이션 베이스 모델 — 독립 공개 제품으로 수록(베이스 체크포인트 제외 규정의 'distinct product' 예외). 하이브리드 KDA+Gated Attention에 MoE 레이어 결합, 262,144 컨텍스트, RU/EN, Apache 2.0.",
    "benchmarks": {
      "WikiWebFacts": 86.5,
      "HardMultiQA": 67.9,
      "CultCat": 86.5,
      "TriviaQA": 79.0,
      "EduBench Russian": 74.2,
      "EduBench Literature": 73.8,
      "EduBench History": 82.0,
      "EduBench English": 76.1,
      "ExpertFactsQA Medicine": 63.6,
      "ExpertFactsQA Law": 49.6,
      "EGE CoT": 90.5,
      "MMLU-Pro CoT": 66.8,
      "SuperGPQA CoT": 44.3,
      "MATH-500": 91.1,
      "EduBench Math": 79.3,
      "EduBench Math University": 70.1,
      "BigCodeBench 1-shot pass@1": 48.3,
      "LiveCodeBench v5-6 CoT 1-shot pass@1": 50.5,
      "FinQA 128k": 74.1,
      "LongMemEval 128k": 64.6,
      "AIME 2026 pass@32": 96.7,
      "IMO Answerbench pass@8": 88.7,
      "LiveCodeBench v5-6 pass@1": 60.4
    },
    "benchmark_sources": {
      "WikiWebFacts": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "HardMultiQA": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "CultCat": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "TriviaQA": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "EduBench Russian": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "EduBench Literature": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "EduBench History": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "EduBench English": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "ExpertFactsQA Medicine": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "ExpertFactsQA Law": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "EGE CoT": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "MMLU-Pro CoT": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "SuperGPQA CoT": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "MATH-500": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "EduBench Math": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "EduBench Math University": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "BigCodeBench 1-shot pass@1": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "LiveCodeBench v5-6 CoT 1-shot pass@1": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "FinQA 128k": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "LongMemEval 128k": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "AIME 2026 pass@32": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "IMO Answerbench pass@8": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
      "LiveCodeBench v5-6 pass@1": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base"
    },
    "benchmark_note": "Yandex 공식 HF 모델 카드의 비교 표 중 AliceAI-Foundation-80B-A3B-Base 열 값. pass@k·CoT·shot 조건은 벤치마크명에 보존. WikiWebFacts·HardMultiQA·CultCat·EduBench·ExpertFactsQA 등은 카드에 함께 공개된 자체 평가셋.",
    "official_id": "yandex/AliceAI-Foundation-80B-A3B-Base",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base"
      }
    ],
    "release_date_source": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
    "parameter_source": "https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-178",
    "name": "Claude Opus 5.5",
    "date": "2026-09-22",
    "sortDate": "2026-09-22",
    "month": "2026-09",
    "monthName": "September",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "agentic coding",
      "computer use",
      "knowledge work"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Claude API·AWS Bedrock·Google Cloud Vertex AI·Microsoft Foundry",
    "note": "Claude 5.5 패밀리 첫 모델. Fable 5.1급 성능에 Opus 5 대비 실행 비용 40% 절감·출력 30% 이상 향상. $4/$20 per 1M, 캐시 읽기 $0.20. Claude Platform·AWS·Google Cloud·Azure 제공, Sonnet/Haiku 5.5는 후속 예정.",
    "benchmarks": {
      "Terminal-Bench 4.0": 66.4,
      "FrontierCode 1.1 Main": 54.4,
      "CursorBench 4.0": 57.8,
      "AutomationBench": 40.0,
      "Humanity's Last Exam (w/ tools)": 67.7,
      "Terminal-Bench Science 0.1": 58.7,
      "OSWorld 2.0 (partial)": 81.8,
      "Chartography (w/ tools)": 89.0
    },
    "benchmark_sources": {
      "Terminal-Bench 4.0": "https://www.anthropic.com/claude-opus-5-5",
      "FrontierCode 1.1 Main": "https://www.anthropic.com/claude-opus-5-5",
      "CursorBench 4.0": "https://www.anthropic.com/claude-opus-5-5",
      "AutomationBench": "https://www.anthropic.com/claude-opus-5-5",
      "Humanity's Last Exam (w/ tools)": "https://www.anthropic.com/claude-opus-5-5",
      "Terminal-Bench Science 0.1": "https://www.anthropic.com/claude-opus-5-5",
      "OSWorld 2.0 (partial)": "https://www.anthropic.com/claude-opus-5-5",
      "Chartography (w/ tools)": "https://www.anthropic.com/claude-opus-5-5"
    },
    "benchmark_note": "Anthropic 공식 발표 평가 표 값(명시 없는 한 adaptive thinking max effort; Terminal-Bench 4.0만 xhigh). 프로덕션 safeguard가 개입된 태스크는 Opus 4.8/5가 완료해 점수가 하향될 수 있음을 각주로 명시. AutomationBench는 Zapier가 측정·보고한 값을 Anthropic이 게시. GDPval-AA v2.1 1846은 Elo형 척도라 % 점수표에서 제외.",
    "official_id": "claude-opus-5-5",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://www.anthropic.com/claude-opus-5-5"
      }
    ],
    "release_date_source": "https://www.anthropic.com/claude-opus-5-5",
    "parameter_source": "https://www.anthropic.com/claude-opus-5-5",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-179",
    "name": "GPT-6 Sol",
    "date": "2026-09-22",
    "sortDate": "2026-09-22",
    "month": "2026-09",
    "monthName": "September",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "professional work",
      "coding",
      "computer use",
      "agents"
    ],
    "open_weights": false,
    "license": "",
    "context": "1,050,000 (max input 922,000 / max output 128,000)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "none",
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "availability": "ChatGPT Work·Codex·OpenAI API",
    "note": "GPT-6 패밀리의 범용 티어. GPT-5.6 Sol 대비 API 가격 50% 인하($2/$10 per 1M, 캐시 읽기 90% 할인). 지식 컷오프 2026-04-20. ChatGPT Work·Codex·API(gpt-6-sol) 제공.",
    "benchmarks": {
      "AutomationBench": 33.2,
      "Agents' Last Exam": 56.4,
      "DeepSWE v1.1": 68.8,
      "OSWorld 2.0 (partial)": 60.5
    },
    "benchmark_sources": {
      "AutomationBench": "https://openai.com/index/introducing-gpt-6-sol-and-luna/",
      "Agents' Last Exam": "https://openai.com/index/introducing-gpt-6-sol-and-luna/",
      "DeepSWE v1.1": "https://openai.com/index/introducing-gpt-6-sol-and-luna/",
      "OSWorld 2.0 (partial)": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
    },
    "benchmark_note": "OpenAI 공식 발표문 명시 점수: AutomationBench 1.0.6 33.2%(xhigh), Agents' Last Exam V1 56.4%(max), DeepSWE v1.1 68.8%(max), OSWorld 2.0 offline partial 60.5%(xhigh). FrontierCode 개선 폭은 절대 점수 미표기라 미수록.",
    "official_id": "gpt-6-sol",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
      },
      {
        "label": "공식 모델 문서",
        "url": "https://developers.openai.com/api/docs/models/gpt-6-sol"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-6-sol-and-luna/",
    "parameter_source": "https://developers.openai.com/api/docs/models/gpt-6-sol",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-180",
    "name": "GPT-6 Luna",
    "date": "2026-09-22",
    "sortDate": "2026-09-22",
    "month": "2026-09",
    "monthName": "September",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "high-volume tasks",
      "cost-efficient agents",
      "coding"
    ],
    "open_weights": false,
    "license": "",
    "context": "1,050,000 (max input 922,000 / max output 128,000)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "none",
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "availability": "ChatGPT·Codex·OpenAI API",
    "note": "GPT-6 패밀리의 고효율·고처리량 티어. GPT-5.6 Luna 대비 50% 인하($0.10/$0.50 per 1M). 지식 컷오프 2026-05-18. ChatGPT(무료·Go 포함 데스크톱 앱)·Codex·API(gpt-6-luna) 제공.",
    "benchmarks": {
      "DeepSWE v1.1": 66.6
    },
    "benchmark_sources": {
      "DeepSWE v1.1": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
    },
    "benchmark_note": "OpenAI 공식 발표문에서 Luna의 절대 점수는 DeepSWE v1.1 66.6%(max)만 명시. AutomationBench high에서 GPT-5.6 Luna 대비 +5.4pt·OSWorld 2.0에서 GPT-5.6 Sol(medium) 상회 등 개선 서술은 절대값 미표기라 미수록.",
    "official_id": "gpt-6-luna",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
      },
      {
        "label": "공식 모델 문서",
        "url": "https://developers.openai.com/api/docs/models/gpt-6-luna"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-6-sol-and-luna/",
    "parameter_source": "https://developers.openai.com/api/docs/models/gpt-6-luna",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-181",
    "name": "MiMo-V2.6-Pro",
    "date": "2026-09-22",
    "sortDate": "2026-09-22",
    "month": "2026-09",
    "monthName": "September",
    "company": "Xiaomi",
    "family": "MiMo",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "1.02T total / 42B active (MoE)",
    "parameter_status": "verified",
    "architecture": "Sparse MoE (hybrid SWA/GA) + omni encoders + MTP",
    "modalities": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "focus": [
      "coding agents",
      "general agents",
      "cybersecurity",
      "visual agents"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "1M (1,000,000 tokens)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face·ModelScope·MiMo Studio·Xiaomi MiMo API·OpenRouter",
    "note": "MiMo-V2.6 시리즈 플래그십 RL 체크포인트. 텍스트·이미지·비디오·오디오를 단일 모델로 처리하는 네이티브 옴니모달, 1M 컨텍스트, SWA/GA 하이브리드 + 5-layer MTP 추론 디코더. MIT 라이선스, SGLang/vLLM·MiMo Studio·Open Platform API 제공.",
    "benchmarks": {
      "DeepSWE v1.1": 71.9,
      "ProgramBench": 26.5,
      "MiMo Code Bench": 63.2,
      "AutomationBench (v1.0.6)": 53.1,
      "Toolathlon-Verified": 76.9,
      "Agents' Last Exam": 31.6,
      "Terminal-Bench 4.0": 34.9,
      "Terminal-Bench 2.1": 89.9,
      "OSWorld-Verified": 82.0,
      "JobBench": 62.0,
      "CyberGym": 94.0,
      "MiMo Cyber Bench": 80.2,
      "ExploitGym": 17.8,
      "ExploitBench": 47.9,
      "SEC-Bench Pro": 66.3,
      "MiMo VisualCoding": 72.3
    },
    "benchmark_sources": {
      "DeepSWE v1.1": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "ProgramBench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "MiMo Code Bench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "AutomationBench (v1.0.6)": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "Toolathlon-Verified": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "Agents' Last Exam": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "Terminal-Bench 4.0": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "Terminal-Bench 2.1": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "OSWorld-Verified": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "JobBench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "CyberGym": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "MiMo Cyber Bench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "ExploitGym": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "ExploitBench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "SEC-Bench Pro": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "MiMo VisualCoding": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL"
    },
    "benchmark_note": "Xiaomi MiMo 공식 HF 모델 카드의 비교 표 중 MiMo-V2.6-Pro 열 값(개발사 직접 게시). GDPval-AA 2.1 1673은 Elo형 척도라 제외.",
    "official_id": "XiaomiMiMo/MiMo-V2.6-Pro-RL",
    "official_sources": [
      {
        "label": "공식 모델 카드·기술 보고서",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL"
      },
      {
        "label": "공식 블로그",
        "url": "https://mimo.xiaomi.com/mimo-v2-6"
      }
    ],
    "release_date_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
    "parameter_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-182",
    "name": "MiMo-V2.6-Flash",
    "date": "2026-09-22",
    "sortDate": "2026-09-22",
    "month": "2026-09",
    "monthName": "September",
    "company": "Xiaomi",
    "family": "MiMo",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "309B total / 15B active (MoE)",
    "parameter_status": "verified",
    "architecture": "Sparse MoE (hybrid SWA/GA) + omni encoders + MTP",
    "modalities": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "focus": [
      "coding agents",
      "general agents",
      "cybersecurity",
      "visual agents"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "1M (1,000,000 tokens)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face·ModelScope·MiMo Studio·Xiaomi MiMo API·OpenRouter",
    "note": "MiMo-V2.6 시리즈 경량 티어. 텍스트·이미지·비디오·오디오를 단일 모델로 처리하는 네이티브 옴니모달, 1M 컨텍스트, SWA/GA 하이브리드 + 5-layer MTP 추론 디코더. MIT 라이선스, SGLang/vLLM·MiMo Studio·Open Platform API 제공.",
    "benchmarks": {
      "DeepSWE v1.1": 67.9,
      "ProgramBench": 26.0,
      "MiMo Code Bench": 61.2,
      "AutomationBench (v1.0.6)": 52.3,
      "Toolathlon-Verified": 73.6,
      "Agents' Last Exam": 27.6,
      "Terminal-Bench 4.0": 28.8,
      "Terminal-Bench 2.1": 87.6,
      "OSWorld-Verified": 80.8,
      "JobBench": 61.2,
      "CyberGym": 95.1,
      "MiMo Cyber Bench": 77.2,
      "ExploitGym": 6.0,
      "ExploitBench": 25.3,
      "SEC-Bench Pro": 47.5,
      "MiMo VisualCoding": 71.5
    },
    "benchmark_sources": {
      "DeepSWE v1.1": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "ProgramBench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "MiMo Code Bench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "AutomationBench (v1.0.6)": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "Toolathlon-Verified": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "Agents' Last Exam": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "Terminal-Bench 4.0": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "Terminal-Bench 2.1": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "OSWorld-Verified": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "JobBench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "CyberGym": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "MiMo Cyber Bench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "ExploitGym": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "ExploitBench": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "SEC-Bench Pro": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "MiMo VisualCoding": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL"
    },
    "benchmark_note": "Xiaomi MiMo 공식 HF 모델 카드의 비교 표 중 MiMo-V2.6-Flash 열 값(개발사 직접 게시). Flash 열은 GDPval-AA 점수 미표기.",
    "official_id": "XiaomiMiMo/MiMo-V2.6-Flash-RL",
    "official_sources": [
      {
        "label": "공식 모델 카드·기술 보고서",
        "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL"
      },
      {
        "label": "공식 블로그",
        "url": "https://mimo.xiaomi.com/mimo-v2-6"
      }
    ],
    "release_date_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
    "parameter_source": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-183",
    "name": "Solar Mini 4",
    "date": "2026-09-22",
    "sortDate": "2026-09-22",
    "month": "2026-09",
    "monthName": "September",
    "company": "Upstage",
    "family": "Solar",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "35B total / 3B active",
    "parameter_status": "verified",
    "architecture": "",
    "modalities": [
      "text"
    ],
    "focus": [
      "chat",
      "reasoning",
      "structured outputs",
      "tool calling"
    ],
    "open_weights": false,
    "license": "",
    "context": "512K (최대 출력 128K)",
    "languages": "English, Korean, Japanese",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Upstage Console·Playground·on-premises",
    "note": "Solar Mini 3 후속 경량 모델. 512K 컨텍스트·최대 128K 출력, EN/KO/JA, 학습 컷오프 2026-02. chat·reasoning·structured outputs·tool calling 지원. API ID solar-mini4(스냅샷 solar-mini4-260922).",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "Upstage 공식 모델 문서에 벤치마크 점수 미공개(2026-09-23 확인).",
    "official_id": "solar-mini4",
    "official_sources": [
      {
        "label": "공식 모델 문서",
        "url": "https://console.upstage.ai/docs/models/solar-mini-4"
      }
    ],
    "release_date_source": "https://console.upstage.ai/docs/models/solar-mini-4",
    "parameter_source": "https://console.upstage.ai/docs/models/solar-mini-4",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-184",
    "name": "Jev",
    "date": "2026-09-15",
    "sortDate": "2026-09-15",
    "month": "2026-09",
    "monthName": "September",
    "company": "TypeSafe AI",
    "family": "System One",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text"
    ],
    "focus": [
      "structured decisions",
      "classification",
      "routing",
      "scoring",
      "verification"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "TypeSafe API·Playground·Python SDK",
    "note": "TypeSafe AI의 첫 공개 System One 모델(얼리 액세스). 텍스트 생성 없이 state+typed questions(choice/score/noul, 최대 255지선다)에 calibrated 확률·신뢰도를 반환하는 구조화 결정 모델 — 텍스트 미생성 모델이지만 독립 API 제품·별도 모델 ID로 공식 출시되어 수록. RLCD 학습·병렬 샘플링, POST /v1/systemone(모델 ID jev-latest, 스냅샷 jev-1.13.0), 입력 $0.042/1M·출력 무료, 70–500ms.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 발표문·문서에 % 단위 벤치마크 점수 미공개 — workflow evals는 기준 모델(GPT-6 Astra·Fable 5.1 평균) 대비 속도·비용 Pareto 차트로만 제시되어 점수 표 미수록.",
    "official_id": "jev-latest",
    "official_sources": [
      {
        "label": "공식 발표 블로그",
        "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
      },
      {
        "label": "공식 문서",
        "url": "https://docs.typesafe.ai/introduction/quickstart"
      }
    ],
    "release_date_source": "https://typesafe.ai/blog/introducing-system-one-models-and-jev",
    "parameter_source": "https://typesafe.ai/blog/introducing-system-one-models-and-jev",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-185",
    "name": "Solar Jev",
    "date": "2026-09-22",
    "sortDate": "2026-09-22",
    "month": "2026-09",
    "monthName": "September",
    "company": "Upstage",
    "family": "Solar",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "Beta",
    "parameters": "35B total / 3B active (Solar Mini 4 기반)",
    "parameter_status": "verified",
    "architecture": "",
    "modalities": [
      "text"
    ],
    "focus": [
      "structured decisions",
      "routing",
      "classification",
      "policy checks"
    ],
    "open_weights": false,
    "license": "",
    "context": "512K",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Upstage Console API (POST /v1/systemone)",
    "note": "Solar Mini 4를 System One 엔드포인트로 서빙하는 구조화 결정 모델(베타). Jev와 동일한 /v1/systemone 스키마로 choice/score/noul+확률을 반환하고 산문을 생성하지 않아 단일 forward pass·출력 토큰 무료. 512K 컨텍스트, 한국어 이해 강점. 텍스트 미생성 모델이지만 별도 모델 ID의 독립 API 제품으로 수록.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 문서에 벤치마크 점수 미공개(2026-09-23 확인, 베타 단계).",
    "official_id": "solar-jev",
    "official_sources": [
      {
        "label": "공식 모델 카탈로그",
        "url": "https://console.upstage.ai/docs/models/history"
      },
      {
        "label": "System One API 레퍼런스",
        "url": "https://console.upstage.ai/api/systemone"
      }
    ],
    "release_date_source": "https://console.upstage.ai/docs/models/history",
    "parameter_source": "https://console.upstage.ai/docs/models/history",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-23",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-186",
    "name": "CLM-8B",
    "date": "2026-09-23",
    "sortDate": "2026-09-23",
    "month": "2026-09",
    "monthName": "September",
    "company": "Contrastive-LM",
    "family": "CLM",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "GA",
    "parameters": "8B (frozen Qwen3-8B backbone + 20M trainable projection head ×2)",
    "parameter_status": "verified",
    "architecture": "",
    "modalities": [
      "text"
    ],
    "focus": [
      "structured decisions",
      "classification",
      "routing",
      "scoring",
      "verification"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "GitHub·Hugging Face·TypeSafe-compatible API",
    "note": "Stanford·NVIDIA Research의 Contrastive Language Models(CLM) 첫 공개 모델. 텍스트 생성 없이 state+action 임베딩 코사인 유사도로 후보 행동을 선택하는 System One 모델. frozen Qwen3-8B backbone + 20M projection head ×2, 60M Nemotron Q&A 쌍·30M 합성 하드 네거티브·1M 에이전트 궤적 학습. Jev 대비 최대 9× 낮은 레이턴시, fine-tuning 후 DeepSWE 81.6%·Terminal-Bench 2.1 87.6%.",
    "benchmarks": {
      "Terminal-Bench 2.1": 87.6,
      "DeepSWE": 81.6
    },
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://github.com/Contrastive-LM/CLM",
      "DeepSWE": "https://github.com/Contrastive-LM/CLM"
    },
    "benchmark_note": "공식 GitHub README의 수치. 두 점수 모두 lightweight fine-tuning된 projection head 기반 verifier 결과(38 held-out DeepSWE·30 held-out Terminal-Bench 2.1 tasks, H100 측정)이며 zero-shot CLM v0.1은 각각 79.78%·85.39%.",
    "official_id": "clm-latest",
    "official_sources": [
      {
        "label": "공식 GitHub 저장소",
        "url": "https://github.com/Contrastive-LM/CLM"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/Contrastive-LM/CLM-v0.1-8B"
      }
    ],
    "release_date_source": "https://github.com/Contrastive-LM/CLM",
    "parameter_source": "https://github.com/Contrastive-LM/CLM",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-27",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-187",
    "name": "LensVLM-9B",
    "date": "2026-09-22",
    "sortDate": "2026-09-22",
    "month": "2026-09",
    "monthName": "September",
    "company": "Apple",
    "family": "LensVLM",
    "type": "MLLM / VLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "9B",
    "parameter_status": "verified",
    "architecture": "",
    "modalities": [
      "image",
      "text"
    ],
    "focus": [
      "document understanding",
      "long context",
      "compression",
      "selective expansion"
    ],
    "open_weights": true,
    "license": "Apple Machine Learning Research Model License",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face·GitHub·vLLM·SGLang",
    "note": "Apple의 9B VLM. 텍스트를 렌더링된 이미지로 스캔한 뒤 학습된 도구(learned tools)로 관련 페이지만 선택적으로 비압축 형태로 확장하는 LensVLM 프레임워크 적용. Qwen3.5-9B-Base 기반, 5×/10×/15× 압축 설정 지원. 4.3× 유효 압축에서 full-text 상한과 유사한 정확도 유지.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 모델 카드·논문에 % 단위 공개 벤치마크 점수 미게재 — 논문의 QA Acc(68.9% @5× 등)는 압축률별 내부 평가라 단일 수치로 표기하지 않음.",
    "official_id": "apple/LensVLM-9B",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/apple/LensVLM-9B"
      },
      {
        "label": "논문 (arXiv)",
        "url": "https://arxiv.org/abs/2605.07019"
      },
      {
        "label": "Apple ML Research",
        "url": "https://machinelearning.apple.com/research/lensvlm-context-expansion"
      }
    ],
    "release_date_source": "https://huggingface.co/apple/LensVLM-9B",
    "parameter_source": "https://huggingface.co/apple/LensVLM-9B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-27",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-188",
    "name": "Laya",
    "date": "2026-09-18",
    "sortDate": "2026-09-18",
    "month": "2026-09",
    "monthName": "September",
    "company": "Convai Innovations",
    "family": "Laya",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "GA",
    "parameters": "421M (laya-multilingual 322M·laya-typed-decisions 421M 형제 체크포인트)",
    "parameter_status": "verified",
    "architecture": "ModernBERT-large encoder + two-layer decision head (비자기회귀)",
    "modalities": [
      "text"
    ],
    "focus": [
      "structured decisions",
      "classification",
      "routing",
      "scoring",
      "guardrails"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "512 (multilingual 1,024, max_len 8,192 지원)",
    "languages": "English (다국어 체크포인트 100+ 언어)",
    "variants": [
      "laya",
      "laya-multilingual",
      "laya-typed-decisions"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face·PyPI·npm·GitHub·laya-serve/MCP",
    "note": "Convai Innovations의 비자기회귀 System 1 결정 모델 — state+typed questions(choice/score/noul)를 단일 forward pass(테스트 환경 ~33ms)로 처리해 교정 확률을 반환. RLCD(엄밀 적절 스코어링 규칙 RL)로 학습, laya-typed-decisions는 개발사 비공개 데이터셋 사용. 9/23 감사에서 '텍스트 미생성'으로 제외됐으나 pip/npm 패키지·self-host HTTP 서버·3종 공개 체크포인트를 갖춘 독립 제품으로, System One 예외 규정(Jev·Solar Jev·CLM-8B 선례)에 따라 되돌림 수록.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 카드의 정확도는 0~1 분율 표기(typed-decisions 0.766·AG News 0.950·DAIR Emotion 0.595 등, routed 기준) — % 비환산 원칙에 따라 점수표에 미수록.",
    "official_id": "convaiinnovations/laya",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/convaiinnovations/laya"
      },
      {
        "label": "공식 GitHub 저장소",
        "url": "https://github.com/NandhaKishorM/laya"
      }
    ],
    "release_date_source": "https://huggingface.co/convaiinnovations/laya",
    "parameter_source": "https://huggingface.co/convaiinnovations/laya",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-189",
    "name": "JEV-9B",
    "date": "2026-09-23",
    "sortDate": "2026-09-23",
    "month": "2026-09",
    "monthName": "September",
    "company": "AutoTrust AI",
    "family": "JEV",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "GA",
    "parameters": "9B (Qwen3.5-9B backbone + 40.2M trained System 1 params)",
    "parameter_status": "verified",
    "architecture": "Blocks of Experts — frozen Qwen3.5-9B + detachable decision block",
    "modalities": [
      "text"
    ],
    "focus": [
      "structured decisions",
      "routing",
      "classification",
      "agentic workflows"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "English",
    "variants": [],
    "reasoning_effort": [
      "enable_thinking on/off (System 2)"
    ],
    "availability": "Hugging Face·vLLM (OpenAI-compatible)",
    "note": "AutoTrust AI의 첫 System 1+System 2 통합 오픈 모델. 동일 가중치로 System 2(Qwen3.5-9B, bit-identical)와 System 1(40.2M 결정 블록, typed decisions)을 요청별 라우팅. TypeSafe Jev 1.13과 KL≈0.019로 분포 수준 구분 불가라고 발표. 후속 상위 모델 JEV-27B(9/28).",
    "benchmarks": {
      "HumanEval (System 2)": 70.7,
      "decision-models-under-pressure (16 options)": 90.0
    },
    "benchmark_sources": {
      "HumanEval (System 2)": "https://huggingface.co/autotrust/JEV-9B",
      "decision-models-under-pressure (16 options)": "https://huggingface.co/autotrust/JEV-9B"
    },
    "benchmark_note": "공식 카드 인쇄값(AutoTrust 재측정). System 1 충실도 지표(KL≈0.019, noul AUROC 0.994 등)는 % 척도가 아니라 점수표 미수록. 6종 공개 결정 벤치마크(JevBench·Kev·OpenJev·Nimble·VitaminC·MASSIVE-en)는 JEV-9B 행 미측정.",
    "official_id": "autotrust/JEV-9B",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/autotrust/JEV-9B"
      }
    ],
    "release_date_source": "https://huggingface.co/autotrust/JEV-9B",
    "parameter_source": "https://huggingface.co/autotrust/JEV-9B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-190",
    "name": "VeriLoop E2",
    "date": "2026-09-22",
    "sortDate": "2026-09-22",
    "month": "2026-09",
    "monthName": "September",
    "company": "Tsinghua SIGS Robot Lab",
    "family": "VeriLoop",
    "type": "MLLM / reasoning",
    "category": "MLLM",
    "status": "GA",
    "parameters": "27B (Qwen3.8-27B post-trained)",
    "parameter_status": "verified",
    "architecture": "Qwen3.8-27B post-trained — VeriLoop-Governed Recurrence(생성·검증 권한 분리) 대응 설계",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "code agents",
      "mathematics",
      "scientific reasoning",
      "long-horizon verifiable problem solving"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "",
    "variants": [
      "BF16",
      "GGUF (BF16→IQ1_M ladder)"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face·vLLM·llama.cpp(GGUF)",
    "note": "Tsinghua SIGS Robot Lab의 27B 포스트트레인 모델 — 1,841,831 레코드로 학습. VGR 프레임워크는 생성과 검증 권한을 분리하고 외부 Harness가 증거 수용·롤백·완료 판정을 관리(모델은 Verifiable Action Protocol로 행동). 9종 공개 벤치 평가와 평가 증거 데이터셋을 함께 공개(데이터셋은 gated).",
    "benchmarks": {
      "SWE-bench Pro": 76.2,
      "Terminal-Bench 2.1": 88.8,
      "Terminal-Bench 3.0": 29.7,
      "Terminal-Bench 4.0": 37.9,
      "DeepSWE v1.1": 64.6,
      "SWE-Marathon v1.1": 45.0,
      "AIME 2026": 98.3,
      "GPQA Diamond": 93.9,
      "MathArena Apex 2025": 89.6
    },
    "benchmark_sources": {
      "SWE-bench Pro": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
      "Terminal-Bench 2.1": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
      "Terminal-Bench 3.0": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
      "Terminal-Bench 4.0": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
      "DeepSWE v1.1": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
      "SWE-Marathon v1.1": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
      "AIME 2026": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
      "GPQA Diamond": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
      "MathArena Apex 2025": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2"
    },
    "benchmark_note": "공식 모델 카드 인쇄값.",
    "official_id": "tsinghua-sigs-robot-lab/VeriLoop-E2",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2"
      }
    ],
    "release_date_source": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
    "parameter_source": "https://huggingface.co/tsinghua-sigs-robot-lab/VeriLoop-E2",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-191",
    "name": "Perceptron Mk1.5",
    "date": "2026-09-25",
    "sortDate": "2026-09-25",
    "month": "2026-09",
    "monthName": "September",
    "company": "Perceptron",
    "family": "Perceptron Mk",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "focus": [
      "embodied agents",
      "object tracking",
      "egocentric video",
      "tool use",
      "sub-agents",
      "visual reasoning"
    ],
    "open_weights": false,
    "license": "",
    "context": "32K (멀티모달)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Perceptron Platform·SDK(pip)·OpenRouter",
    "note": "Perceptron의 embodied agent 제어 MLLM — 텍스트·이미지·비디오·오디오 입력을 텍스트와 좌표(points/boxes/polygons)·clips·object tracks로 출력. Mk1 대비 네이티브 오디오·비디오 트래킹·웹검색·서브에이전트 호출 추가, 종단간 2~5× 단축을 공식 주장. API ID perceptron-mk1.5, $0.15/$1.50 per 1M 토큰.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 발표의 벤치마크는 차트 이미지로만 게시(비디오 트래킹·에고센트릭 비디오·오디오비주얼·검색 툴 비교 표)돼 인쇄 % 수치를 확인할 수 없어 점수표 미수록.",
    "official_id": "perceptron-mk1.5",
    "official_sources": [
      {
        "label": "공식 발표",
        "url": "https://www.perceptron.inc/blog/introducing-perceptron-mk1-5"
      }
    ],
    "release_date_source": "https://www.perceptron.inc/blog/introducing-perceptron-mk1-5",
    "parameter_source": "https://www.perceptron.inc/blog/introducing-perceptron-mk1-5",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-192",
    "name": "MiniMax M3.1-Flash-Preview",
    "date": "2026-09-27",
    "sortDate": "2026-09-27",
    "month": "2026-09",
    "monthName": "September",
    "company": "MiniMax",
    "family": "MiniMax M",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "coding",
      "bug fixing",
      "feature development",
      "regression testing"
    ],
    "open_weights": false,
    "license": "",
    "context": "1M (1,000,000 tokens)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "availability": "MiniMax Code·Token Plan",
    "note": "MiniMax의 최신 텍스트 생성 모델 — 9/27 MiniMax Code에 선공개 후 9/28 공개 테스트. 네이티브 멀티모달 입력(텍스트·이미지·비디오, 텍스트 출력)·1M 컨텍스트·5단계 thinking depth. 현재 MiniMax Code·Token Plan에서만 제공(종량제 API 미오픈). 개발자 커뮤니티는 OpenRouter 스텔스 'Space Bunny Alpha'와 동일 모델 가능성을 추정했으나 공식 확인 없음(제외 원장 참조). [2026-10-25 승계] 2026-10-17 HF에 오픈웨이트 정식 릴리스 MiniMax M3.1-Flash(model-239, 428B-A23B·MiniMax Community License·공식 벤치마크 14개)가 공개돼 별도 레코드로 추가했습니다 — 이 Preview 레코드는 스냅샷 선례에 따라 유지합니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "모델 카드·공식 벤치마크 미공개 — 공식 문서에 사양(1M 컨텍스트·멀티모달·thinking depth)만 기재.",
    "official_id": "MiniMax-M3.1-Flash-Preview",
    "official_sources": [
      {
        "label": "공식 모델 문서",
        "url": "https://platform.minimax.io/docs/guides/models-intro"
      }
    ],
    "release_date_source": "https://platform.minimax.io/docs/guides/models-intro",
    "parameter_source": "https://platform.minimax.io/docs/guides/models-intro",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-193",
    "name": "Claude Sonnet 5.5",
    "date": "2026-09-28",
    "sortDate": "2026-09-28",
    "month": "2026-09",
    "monthName": "September",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "agentic coding",
      "computer use",
      "knowledge work"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Claude apps·Claude API·AWS Bedrock·Google Cloud Vertex AI·Microsoft Foundry",
    "note": "Claude 5.5 패밀리 두 번째 모델 — Sonnet 5 대비 출력 30%+ 고속·작업당 최대 30% 저렴($2/$10 per 1M 유지), Max effort에서 Opus 5.5와 FrontierCode 동률. Anthropic 최초로 실시간 사이버 리스크 분류·고위험 요청 Sonnet 5 폴백·추론 추출 차단 세이프가드를 탑재한 Sonnet. API ID claude-sonnet-5-5; Haiku 5.5는 후속 예정.",
    "benchmarks": {
      "Terminal-Bench 4.0": 70.6,
      "FrontierCode 1.1 Main (Max)": 46.2,
      "FrontierCode 1.1 Main (Xhigh)": 52.1,
      "CursorBench 4.0": 55.5,
      "Humanity's Last Exam (w/ tools)": 64.5,
      "OSWorld 2.1 (partial)": 80.1,
      "Chartography (no tools)": 61.6
    },
    "benchmark_sources": {
      "Terminal-Bench 4.0": "https://www.anthropic.com/claude-sonnet-5-5",
      "FrontierCode 1.1 Main (Max)": "https://www.anthropic.com/claude-sonnet-5-5",
      "FrontierCode 1.1 Main (Xhigh)": "https://www.anthropic.com/claude-sonnet-5-5",
      "CursorBench 4.0": "https://www.anthropic.com/claude-sonnet-5-5",
      "Humanity's Last Exam (w/ tools)": "https://www.anthropic.com/claude-sonnet-5-5",
      "OSWorld 2.1 (partial)": "https://www.anthropic.com/claude-sonnet-5-5",
      "Chartography (no tools)": "https://www.anthropic.com/claude-sonnet-5-5"
    },
    "benchmark_note": "Anthropic 공식 발표 표 값. FrontierCode는 effort 열별(Max 46.2/Xhigh 52.1) 병기 — 공식 각주에 따르면 Max에서는 코드리뷰 스킬 기동으로 하향. GDPval-AA v2.1 1844·AA-Briefcase v1.1 1811은 Artificial Analysis가 사전 배포본을 측정한 비% 지표라 점수표에서 제외.",
    "official_id": "claude-sonnet-5-5",
    "official_sources": [
      {
        "label": "공식 모델 페이지",
        "url": "https://www.anthropic.com/claude-sonnet-5-5"
      }
    ],
    "release_date_source": "https://www.anthropic.com/claude-sonnet-5-5",
    "parameter_source": "https://www.anthropic.com/claude-sonnet-5-5",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-194",
    "name": "Holo4-27B",
    "date": "2026-09-28",
    "sortDate": "2026-09-28",
    "month": "2026-09",
    "monthName": "September",
    "company": "H Company",
    "family": "Holo4",
    "type": "MLLM / computer-use agent",
    "category": "MLLM",
    "status": "GA",
    "parameters": "27B (dense)",
    "parameter_status": "verified",
    "architecture": "Qwen3.8-27B 기반 dense",
    "modalities": [
      "image",
      "text"
    ],
    "focus": [
      "computer use",
      "GUI grounding",
      "tool calls",
      "agentic workflows"
    ],
    "open_weights": true,
    "license": "CC BY-NC 4.0",
    "context": "262,144",
    "languages": "",
    "variants": [
      "BF16",
      "FP8",
      "NVFP4",
      "Q4 GGUF"
    ],
    "reasoning_effort": [],
    "availability": "H Models API·Hugging Face·vLLM·SGLang",
    "note": "H Company의 컴퓨터유스 VLM — GUI·코드·MCP·API 인터페이스를 단일 모델로 사용해 데스크톱·웹·Android·샌드박스를 구동. Qwen3.8-27B 기반 27B dense, SFT+RL(Agentic Task Factory 환경 생성)로 학습, 평가 트라젝토리 전량 공개. OSWorld 85.2%는 $0.08/task, OSWorld 2.0 61.7%는 $1.22/task 설정 측정. 비상업 라이선스.",
    "benchmarks": {
      "OSWorld": 85.2,
      "OSWorld 2.0": 61.7,
      "AutomationBench": 45.4
    },
    "benchmark_sources": {
      "OSWorld": "https://huggingface.co/Hcompany/Holo4-27B",
      "OSWorld 2.0": "https://huggingface.co/Hcompany/Holo4-27B",
      "AutomationBench": "https://huggingface.co/Hcompany/Holo4-27B"
    },
    "benchmark_note": "공식 모델 카드·블로그 인쇄값. 비교 대상 모델 전체 표는 이미지로 게시돼 텍스트 인쇄분만 수록.",
    "official_id": "Hcompany/Holo4-27B",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/Hcompany/Holo4-27B"
      },
      {
        "label": "공식 발표 (HF Blog)",
        "url": "https://huggingface.co/blog/Hcompany/holo4"
      }
    ],
    "release_date_source": "https://huggingface.co/blog/Hcompany/holo4",
    "parameter_source": "https://huggingface.co/Hcompany/Holo4-27B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-195",
    "name": "Holo4-35B-A3B",
    "date": "2026-09-28",
    "sortDate": "2026-09-28",
    "month": "2026-09",
    "monthName": "September",
    "company": "H Company",
    "family": "Holo4",
    "type": "MLLM / computer-use agent",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B-A3B (MoE)",
    "parameter_status": "verified",
    "architecture": "Qwen3.6-35B-A3B 기반 MoE",
    "modalities": [
      "image",
      "text"
    ],
    "focus": [
      "computer use",
      "GUI grounding",
      "tool calls",
      "agentic workflows"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "",
    "variants": [
      "BF16",
      "FP8"
    ],
    "reasoning_effort": [],
    "availability": "H Models API·Hugging Face·vLLM·SGLang",
    "note": "H Company의 컴퓨터유스 VLM — Qwen3.6-35B-A3B 기반 MoE로 활성 파라미터가 작아 서빙 효율을 노린 Apache 2.0 개방 가중치. 같은 Holo4 포스트트레이닝(SFT+RL)·262K 컨텍스트·4종 인터페이스(GUI/코드/MCP/API) 지원.",
    "benchmarks": {
      "OSWorld 2.0": 30.9,
      "AutomationBench": 34.5
    },
    "benchmark_sources": {
      "OSWorld 2.0": "https://huggingface.co/Hcompany/Holo4-35B-A3B",
      "AutomationBench": "https://huggingface.co/Hcompany/Holo4-35B-A3B"
    },
    "benchmark_note": "공식 모델 카드·블로그 인쇄값. 비교 대상 모델 전체 표는 이미지로 게시돼 텍스트 인쇄분만 수록.",
    "official_id": "Hcompany/Holo4-35B-A3B",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/Hcompany/Holo4-35B-A3B"
      },
      {
        "label": "공식 발표 (HF Blog)",
        "url": "https://huggingface.co/blog/Hcompany/holo4"
      }
    ],
    "release_date_source": "https://huggingface.co/blog/Hcompany/holo4",
    "parameter_source": "https://huggingface.co/Hcompany/Holo4-35B-A3B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-196",
    "name": "Holotron4-30B-A3B",
    "date": "2026-09-28",
    "sortDate": "2026-09-28",
    "month": "2026-09",
    "monthName": "September",
    "company": "H Company",
    "family": "Holo4",
    "type": "MLLM / computer-use agent",
    "category": "MLLM",
    "status": "GA",
    "parameters": "30B-A3B",
    "parameter_status": "verified",
    "architecture": "NemotronH Nano Omni(NVIDIA Nemotron 3 Nano Omni) 기반",
    "modalities": [
      "image",
      "text"
    ],
    "focus": [
      "computer use",
      "GUI grounding",
      "tool calls",
      "agentic workflows"
    ],
    "open_weights": true,
    "license": "NVIDIA Open Model Agreement",
    "context": "262,144",
    "languages": "",
    "variants": [
      "BF16",
      "FP8"
    ],
    "reasoning_effort": [],
    "availability": "H Models API·Hugging Face·vLLM·SGLang",
    "note": "H Company의 Holotron4 Nano — 자사 Holo4 포스트트레이닝 스택을 Nemotron 3 Nano Omni에 적용해 만든 30B-A3B 컴퓨터유스 VLM(NVIDIA Nemotron Coalition 협업). GUI 워크플로·MCP/API/코드 샌드박스 환경에서 베이스 대비 절대 %p 개선을 공식 보고.",
    "benchmarks": {
      "OSWorld": 76.3,
      "OSWorld 2.0": 7.9,
      "AutomationBench": 35.6,
      "PinchBench": 88.6,
      "ALE (Linux, code)": 8.5
    },
    "benchmark_sources": {
      "OSWorld": "https://huggingface.co/Hcompany/Holotron4-30B-A3B",
      "OSWorld 2.0": "https://huggingface.co/Hcompany/Holotron4-30B-A3B",
      "AutomationBench": "https://huggingface.co/Hcompany/Holotron4-30B-A3B",
      "PinchBench": "https://huggingface.co/Hcompany/Holotron4-30B-A3B",
      "ALE (Linux, code)": "https://huggingface.co/Hcompany/Holotron4-30B-A3B"
    },
    "benchmark_note": "공식 모델 카드·블로그 인쇄값. 비교 대상 모델 전체 표는 이미지로 게시돼 텍스트 인쇄분만 수록.",
    "official_id": "Hcompany/Holotron4-30B-A3B",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/Hcompany/Holotron4-30B-A3B"
      },
      {
        "label": "공식 발표 (HF Blog)",
        "url": "https://huggingface.co/blog/Hcompany/holo4"
      }
    ],
    "release_date_source": "https://huggingface.co/blog/Hcompany/holo4",
    "parameter_source": "https://huggingface.co/Hcompany/Holotron4-30B-A3B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-197",
    "name": "JEV-27B",
    "date": "2026-09-28",
    "sortDate": "2026-09-28",
    "month": "2026-09",
    "monthName": "September",
    "company": "AutoTrust AI",
    "family": "JEV",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "GA",
    "parameters": "27B (Qwen3.8-27B backbone + 108.9M trained System 1 params)",
    "parameter_status": "verified",
    "architecture": "Blocks of Experts — frozen Qwen3.8-27B + detachable decision block",
    "modalities": [
      "text"
    ],
    "focus": [
      "structured decisions",
      "routing",
      "classification",
      "fraud screening",
      "agentic workflows"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "English",
    "variants": [],
    "reasoning_effort": [
      "enable_thinking on/off (System 2)"
    ],
    "availability": "Hugging Face·vLLM (OpenAI-compatible)·HF Space 데모",
    "note": "AutoTrust AI의 2세대 System 1+System 2 통합 오픈 모델 — 동일 가중치 하나로 typed decisions(System 1, choice/score/noul+교정확률)와 일반 생성(System 2, 미수정 Qwen3.8-27B)을 요청별 라우팅. 6종 공개 결정 벤치마크 평균에서 TypeSafe Jev 1.13 대비 +0.22pt를 자체 측정치로 보고.",
    "benchmarks": {
      "JevBench": 88.7,
      "Kev": 83.75,
      "OpenJev text": 73.89,
      "Nimble": 92.91,
      "VitaminC": 77.46,
      "MASSIVE-en": 87.71,
      "Six-group mean": 84.07,
      "HumanEval (System 2)": 78.0
    },
    "benchmark_sources": {
      "JevBench": "https://huggingface.co/autotrust/JEV-27B",
      "Kev": "https://huggingface.co/autotrust/JEV-27B",
      "OpenJev text": "https://huggingface.co/autotrust/JEV-27B",
      "Nimble": "https://huggingface.co/autotrust/JEV-27B",
      "VitaminC": "https://huggingface.co/autotrust/JEV-27B",
      "MASSIVE-en": "https://huggingface.co/autotrust/JEV-27B",
      "Six-group mean": "https://huggingface.co/autotrust/JEV-27B",
      "HumanEval (System 2)": "https://huggingface.co/autotrust/JEV-27B"
    },
    "benchmark_note": "공식 카드가 AutoTrust 자체 측정으로 게시한 값(2026-09-27 카드 업데이트). System 1 충실도(KL≈0.017)·지연·처리량 등 비% 지표는 점수표 제외.",
    "official_id": "autotrust/JEV-27B",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/autotrust/JEV-27B"
      },
      {
        "label": "공식 데모 (HF Spaces)",
        "url": "https://huggingface.co/spaces/autotrust/JEV-27B-Demo"
      }
    ],
    "release_date_source": "https://huggingface.co/autotrust/JEV-27B",
    "parameter_source": "https://huggingface.co/autotrust/JEV-27B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-29",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-198",
    "name": "GPT-6.1 Sol",
    "date": "2026-09-29",
    "sortDate": "2026-09-29",
    "month": "2026-09",
    "monthName": "September",
    "company": "OpenAI",
    "family": "GPT",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "agentic coding",
      "computer use",
      "professional work",
      "scientific research"
    ],
    "open_weights": false,
    "license": "",
    "context": "1,050,000 (max input 922,000 / max output 128,000)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "availability": "ChatGPT Work·Codex·OpenAI API (Responses API)",
    "note": "GPT-6 Sol의 업그레이드로, 에이전틱 코딩·컴퓨터 유스·전문 업무에서 GPT-6 Astra에 근접한 지능을 Astra 표준 입력·출력 토큰 가격의 1/5 수준($2/$10 per 1M, 캐시 읽기 $0.10 — GPT-6 Sol 대비 50% 추가 인하) 에서 제공. 지식 컷오프 2026-04-30. ChatGPT Work·Codex·API(gpt-6.1-sol)에 발표 당일부터 제공되며 ChatGPT Chat는 미지원. 도구 호출은 Responses API가 필요하고 Chat Completions는 도구 호출 미지원. US·EU 데이터 레지덴시를 지원하되 EU에서는 Fast mode 불가. reasoning effort는 low·medium(기본)·high·xhigh·max를 지원하고 none·minimal은 미지원. Preparedness Framework 기준 사이버 Critical·생물/화학 High 등급으로, Astra와 동일한 세이프가드 스택을 적용한다. Codex용 Ultrafast 티어는 발표 후 수일 내 제공 예정.",
    "benchmarks": {
      "DeepSWE v1.1 (High)": 75.2,
      "DeepSWE v1.1 (Max)": 71.9,
      "GDP.pdf (High)": 32.0,
      "AutomationBench 1.0.6 (Medium)": 31.7,
      "AutomationBench 1.0.6 (Max)": 36.1,
      "OSWorld 2.0 offline partial (Max)": 71.4,
      "Terminal-Bench Science 0.1 (Max)": 57.0,
      "HealthBench Professional (length-adjusted)": 64.2,
      "HealthBench (length-adjusted)": 58.5,
      "HealthBench Hard (length-adjusted)": 36.2,
      "HealthBench Consensus (length-adjusted)": 96.0
    },
    "benchmark_sources": {
      "DeepSWE v1.1 (High)": "https://openai.com/index/introducing-gpt-6-1-sol",
      "DeepSWE v1.1 (Max)": "https://openai.com/index/introducing-gpt-6-1-sol",
      "GDP.pdf (High)": "https://openai.com/index/introducing-gpt-6-1-sol",
      "AutomationBench 1.0.6 (Medium)": "https://openai.com/index/introducing-gpt-6-1-sol",
      "AutomationBench 1.0.6 (Max)": "https://openai.com/index/introducing-gpt-6-1-sol",
      "OSWorld 2.0 offline partial (Max)": "https://openai.com/index/introducing-gpt-6-1-sol",
      "Terminal-Bench Science 0.1 (Max)": "https://openai.com/index/introducing-gpt-6-1-sol",
      "HealthBench Professional (length-adjusted)": "https://deploymentsafety.openai.com/gpt-6-1-sol",
      "HealthBench (length-adjusted)": "https://deploymentsafety.openai.com/gpt-6-1-sol",
      "HealthBench Hard (length-adjusted)": "https://deploymentsafety.openai.com/gpt-6-1-sol",
      "HealthBench Consensus (length-adjusted)": "https://deploymentsafety.openai.com/gpt-6-1-sol"
    },
    "benchmark_note": "DeepSWE v1.1·GDP.pdf·AutomationBench 1.0.6·OSWorld 2.0·Terminal-Bench Science 0.1은 공식 발표문 차트의 effort별 데이터 값이고, HealthBench 4종은 시스템 카드 애드endum Table 7의 length-adjusted 값이다. 발표문 본문은 절대값 대신 개선폭만 서술하므로 수치는 발표문 차트 데이터에서 확인했다(DeepSWE High 75.2 = GPT-6 Sol 최고 68.8 대비 +6.4p, OSWorld Max 71.4 = GPT-6 Sol 64.4 대비 +7.0p). OSWorld 2.0은 v2026.08.08 릴리스 오프라인 세트 partial reward, AutomationBench는 47개 도구 기반 업무 워크플로다. 사실 오류 응답 비율(Low effort 7.7%, GPT-6 Sol 11.4%)·작업당 실행 비용(DeepSWE High $0.65, Terminal-Bench Science Max $5.47)은 % 척도 성능 지표가 아니므로 점수 표에서 제외했다.",
    "official_id": "gpt-6.1-sol",
    "official_sources": [
      {
        "label": "공식 1차 출처 (발표문)",
        "url": "https://openai.com/index/introducing-gpt-6-1-sol"
      },
      {
        "label": "공식 모델 문서",
        "url": "https://developers.openai.com/api/docs/models/gpt-6.1-sol"
      },
      {
        "label": "GPT-6.1 Sol 시스템 카드 애드endum",
        "url": "https://deploymentsafety.openai.com/gpt-6-1-sol"
      }
    ],
    "release_date_source": "https://openai.com/index/introducing-gpt-6-1-sol",
    "parameter_source": "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-30",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-199",
    "name": "IQuest-Q1",
    "date": "2026-09-28",
    "sortDate": "2026-09-28",
    "month": "2026-09",
    "monthName": "September",
    "company": "IQuest",
    "family": "IQuest",
    "type": "LLM / agentic coding",
    "category": "LLM",
    "status": "GA",
    "parameters": "320B total / 15B active (MoE, 256 experts 중 8개 활성)",
    "parameter_status": "publisher-approximate",
    "architecture": "Sparse MoE — 88 transformer layers, hidden 3,072, Q/KV heads 48/8, 3 SWA + 1 FA 하이브리드 어텐션(sliding window 4,096), partial RoPE 32차원, MTP",
    "modalities": [
      "text"
    ],
    "focus": [
      "agentic coding",
      "CLI agents",
      "multi-step tool use",
      "reasoning"
    ],
    "open_weights": true,
    "license": "iquest-q1 (모델 카드 선언형 비표준 라이선스)",
    "context": "524,288",
    "languages": "English, Chinese",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face 가중치·SGLang·vLLM·Claude Code(Anthropic Messages 게이트웨이)·Codex(OpenAI Responses 게이트웨이)",
    "note": "CLI 에이전트 특화 오픈 소스 스파스 MoE. 합성 환경에서 만든 과제·환경 쌍(실제 API·MCP 서버·워크스페이스 파일, 저장소 실행 환경)으로 사전·미드트레이닝한 뒤 여러 하네스의 도구·컨텍스트 관리를 유지한 단일 정책 RL을 수행하고, MOPD(multi-teacher on-policy distillation)와 단계·expert 간 안정적 모델 머징으로 RL에서 나온 4개 expert를 하나로 통합했다. 카드 권장 샘플링은 temperature 1.0·top-p 0.95·top-k 20. 가중치는 SGLang·vLLM으로 직접 서빙하는 오픈 가중치 제품이며, 멀티모달 입력은 미지원이다.",
    "benchmarks": {
      "DeepSWE v1.1": 64.6,
      "NL2Repo": 63.0,
      "Terminal-Bench 2.1": 83.2,
      "JobBench": 55.7,
      "CyberGym": 84.5,
      "Agents' Last Exam": 29.6,
      "Humanity's Last Exam (no tools)": 39.2,
      "IQuest-CLIBench": 53.7
    },
    "benchmark_sources": {
      "DeepSWE v1.1": "https://iquestlab.github.io/",
      "NL2Repo": "https://iquestlab.github.io/",
      "Terminal-Bench 2.1": "https://iquestlab.github.io/",
      "JobBench": "https://iquestlab.github.io/",
      "CyberGym": "https://iquestlab.github.io/",
      "Agents' Last Exam": "https://iquestlab.github.io/",
      "Humanity's Last Exam (no tools)": "https://iquestlab.github.io/",
      "IQuest-CLIBench": "https://iquestlab.github.io/"
    },
    "benchmark_note": "공식 프로젝트 사이트(iquestlab.github.io) 평가 차트에 인쇄된 IQuest-Q1 수치. 사이트 정적 HTML이 React 셸이라 본문을 assets/App-*.js 번들에서 추출해 확인했다. 수치는 temperature 1.0·top-p 0.95·top-k 20 기준이며, DeepSWE v1.1은 mini-SWE-agent, 그 외 벤치마크는 Claude Code 하네스, Agents' Last Exam은 Claude Code 2.1.258, CyberGym은 6시간·Terminal-Bench 2.1은 8시간 제한 조건이다. IQuest-CLIBench는 IQuest 자체 인하우스 벤치마크, Humanity's Last Exam은 도구 없이 측정했다. 사이트는 비교 모델 점수를 '공개 보고값 우선, 없을 경우 자체 측정'으로 혼용하므로 다른 모델의 수치는 인용하지 않았다. Hugging Face 모델 카드는 동일 표를 이미지로만 제공해 텍스트 인용은 프로젝트 사이트를 출처로 삼았다.",
    "official_id": "IQuestLab/IQuest-Q1",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/IQuestLab/IQuest-Q1"
      },
      {
        "label": "공식 프로젝트 사이트 (기술 보고서)",
        "url": "https://iquestlab.github.io/"
      },
      {
        "label": "공식 저장소",
        "url": "https://github.com/IQuestLab/IQuest-Q1"
      }
    ],
    "release_date_source": "https://huggingface.co/IQuestLab/IQuest-Q1",
    "parameter_source": "https://huggingface.co/IQuestLab/IQuest-Q1",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-09-30",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-200",
    "name": "Darwin-180B-RSI",
    "date": "2026-09-28",
    "sortDate": "2026-09-28",
    "month": "2026-09",
    "monthName": "September",
    "company": "VIDRAFT",
    "family": "Darwin",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "180B total / 512 routed experts 중 10 활성 (MoE; 활성 파라미터 수 미공개)",
    "parameter_status": "publisher-partial",
    "architecture": "MoE + 하이브리드 어텐션(linear 36 + full 12 layers), 48 layers, 512 routed experts(10 active) + shared expert",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "추론",
      "수학·과학",
      "법률(LEXam)",
      "재귀적 자기개선(RSI)"
    ],
    "open_weights": true,
    "license": "Qwen Community License 1.0 (Qwen3.8-Flash-Next 파생)",
    "context": "262,144",
    "languages": "Korean / English",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face 오픈 웨이트 (FINAL-Bench/Darwin-180B-RSI)",
    "note": "VIDRAFT(KR)의 Darwin 패밀리 플래그십 추론 모델. 부모 모델 Qwen3.8-Flash-Next의 512개 라우티드 expert·라우터·비전 인코더를 그대로 유지한 채 선택적 병합과 검증된 자체 답 재학습(RSI)만 적용했고, 모델 내부 상태에서 정답 확률을 토큰 생성 없이 1회 판독하는 ZTC(Zero-Token Confidence) 프러브를 함께 배포합니다. 모델 카드에 릴리스 날짜 표기가 없어 Hugging Face 저장소 공개일(2026-09-28, Hugging Face API createdAt)을 date로 사용했고 같은 날 국내 보도가 나갔습니다.",
    "benchmarks": {
      "AIME 2026": 100.0,
      "HMMT Feb 2026": 100.0,
      "GPQA Diamond": 94.44,
      "MMLU-Pro": 88.12,
      "MMMU-Pro": 79.48,
      "LEXam": 68.94,
      "LEXam-hard": 45.72
    },
    "official_id": "FINAL-Bench/Darwin-180B-RSI",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI"
      },
      {
        "label": "Darwin 패밀리 논문 (MRI trust-weighted merging)",
        "url": "https://arxiv.org/abs/2605.14386"
      }
    ],
    "release_date_source": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI",
    "parameter_source": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI",
    "benchmark_sources": {
      "AIME 2026": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI",
      "HMMT Feb 2026": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI",
      "GPQA Diamond": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI",
      "MMLU-Pro": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI",
      "MMMU-Pro": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI",
      "LEXam": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI",
      "LEXam-hard": "https://huggingface.co/FINAL-Bench/Darwin-180B-RSI"
    },
    "benchmark_note": "모델 카드 Results 표에 인쇄된 자체 측정값입니다. AIME 2026·HMMT Feb 2026는 16샘플 다수결(평균 98.75·96.59), GPQA Diamond는 최대 16샘플 다수결, MMMU-Pro는 maj@3, MMLU-Pro는 단일 샘플, LEXam은 maj@4(단일 샘플 60.54), LEXam-hard는 단일 샘플(심판 DeepSeek-R1-0528)입니다. 공통 조건은 thinking budget 131,072 토큰(LEXam 계열 32,768)·temperature 1.0·top_p 0.95·bf16·vLLM TP8이며, 카드는 이 값들을 Hugging Face 공식 벤치마크 리더보드 게재값으로 소개합니다. ZTC 프러브 AUROC 0.64와 추론 길이·서빙 비용류 지표는 % 척도 성능 지표가 아니므로 점수 표에서 제외했습니다.",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-01",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-201",
    "name": "Index-Translate",
    "date": "2026-09-30",
    "sortDate": "2026-09-30",
    "month": "2026-09",
    "monthName": "September",
    "company": "Bilibili",
    "family": "Index-Translate",
    "type": "LLM / translation-specialized",
    "category": "LLM",
    "status": "GA (35B-A3B는 preview)",
    "parameters": "2B / 9B dense + 35B total·3B active (MoE, preview)",
    "parameter_status": "verified",
    "architecture": "Qwen3.5 기반 (2B·9B dense, 35B-A3B MoE)",
    "modalities": [
      "text"
    ],
    "focus": [
      "기계 번역(150개 언어)",
      "번역 지시 수행(용어·형식·구조·스타일)",
      "저자원 언어 번역"
    ],
    "open_weights": true,
    "license": "Apache-2.0",
    "context": "262,144 (max_position_embeddings; 권장 서빙 32,768)",
    "languages": "150개 언어",
    "variants": [
      "Index-Translate-2B",
      "Index-Translate-9B",
      "Index-Translate-35B-A3B-preview"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face·ModelScope 오픈 웨이트(Apache-2.0), 온라인 데모",
    "note": "Bilibili Index LLM 팀의 다국어 번역 모델 패밀리(150개 언어). 텍스트 번역 3종과 함께 음성→자막(Index-Echo S2TT)·음성→음성(S2ST)·음절 수 제어 더빙(Index-Homura)·장문 번역(Index-NativeLong, 모델 ID는 Index-Nailong) 체크포인트를 같은 컬렉션으로 공개했습니다. 단일 목적 모델이지만 LLM 계열로 분류해 수록하는 선례(Cohere North Small Translate)를 따랐습니다.",
    "benchmarks": {
      "C-Eval": 77.6,
      "GPQA-Diamond": 49.1,
      "INCLUDE": 68.8,
      "MMMLU": 71.9,
      "WMT26 Judge": 76.76
    },
    "official_id": "IndexTeam/Index-Translate-35B-A3B-preview",
    "official_sources": [
      {
        "label": "공식 모델 카드 (35B-A3B preview)",
        "url": "https://huggingface.co/IndexTeam/Index-Translate-35B-A3B-preview"
      },
      {
        "label": "공식 기술 보고서",
        "url": "https://arxiv.org/abs/2609.40181"
      },
      {
        "label": "공식 저장소",
        "url": "https://github.com/bilibili/Index-Translate"
      }
    ],
    "release_date_source": "https://arxiv.org/abs/2609.40181",
    "parameter_source": "https://huggingface.co/IndexTeam/Index-Translate-35B-A3B-preview",
    "benchmark_sources": {
      "C-Eval": "https://huggingface.co/IndexTeam/Index-Translate-35B-A3B-preview",
      "GPQA-Diamond": "https://huggingface.co/IndexTeam/Index-Translate-35B-A3B-preview",
      "INCLUDE": "https://huggingface.co/IndexTeam/Index-Translate-35B-A3B-preview",
      "MMMLU": "https://huggingface.co/IndexTeam/Index-Translate-35B-A3B-preview",
      "WMT26 Judge": "https://huggingface.co/IndexTeam/Index-Translate-35B-A3B-preview"
    },
    "benchmark_note": "기술 보고서와 모델 카드의 35B-A3B preview 열에 인쇄된 값입니다. C-Eval·GPQA-Diamond·INCLUDE·MMMLU는 번역 체크포인트의 일반 능력을 본 매칭 평가 서브셋 정답률(%)이고, WMT26 Judge는 0~100 척도 reference-free GPT-5.6-Sol 심판 점수(20개 대상 언어 평균)입니다. 주력 번역 지표인 FLORES COMET-22 0.8794·WMT24++ COMET-22 0.8586·instTrans 품질/IF 0.6901/0.8336·저자원 페어 off-target 2.4%는 0~1 척도이거나 낮을수록 좋은 지표라 점수 표에 넣지 않았습니다.",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-01",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-202",
    "name": "Gemini 4 Argon",
    "date": "2026-09-30",
    "sortDate": "2026-09-30",
    "month": "2026-09",
    "monthName": "September",
    "company": "Google DeepMind",
    "family": "Gemini",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image",
      "video",
      "audio",
      "pdf"
    ],
    "focus": [
      "장기 호라이즌 추론",
      "실무 소프트웨어 엔지니어링",
      "법률·금융 지식 업무",
      "사이버 방어",
      "창작 글쓰기"
    ],
    "open_weights": false,
    "license": "",
    "context": "1,048,576 (입력·출력 통합 한도) — 최대 출력 동기 호출 기본 65,536, long decode 시 1,048,576",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "low",
      "medium",
      "high"
    ],
    "availability": "Gemini API 유료 티어(모델 ID gemini-4-argon)·Google AI Studio·Android Studio·Vertex AI(Google Cloud), Gemini 앱·검색 AI Mode(Google AI Ultra·Pro 구독자), Google Antigravity(Ultra), Gemini for business, Fairwind Program(승인된 사이버 방어자 대상 사이버 가드레일 없는 버전). 도입가 $2/$10 per 1M(캐시 입력 95% 할인), 2026-11-30 이후 $4/$20, 무료 티어 미제공. Batch·Flex·Priority 추론 지원",
    "note": "2026-02 Gemini 3.1 Pro 이후 7개월 만의 Google 플래그십이자 Gemini 4 세대의 첫 모델입니다. 2026-09-30에 Fairwind Program 신뢰 사이버 방어자 한정으로 발표(미국 정부 사전 접근 절차 참여)한 뒤, **2026-10-13 일반 공개(GA)** — Gemini API 변경 기록에 'Gemini 4 Argon (gemini-4-argon) generally available (GA)'로 등재됐고 Gemini 앱·AI Mode·Antigravity·Vertex AI로 확대됐습니다. 레코드 날짜는 최초 발표일(9/30)을 유지하고 GA일은 이 note와 출처에 남겼습니다. Gemini API 모델 페이지는 입력 텍스트·이미지·비디오·오디오·PDF, 출력 텍스트, thinking low/medium/high, 함수 호출·코드 실행·컴퓨터 유스(Preview)·검색/지도 그라운딩·구조화 출력을 지원하고 Live API·이미지/오디오 생성·명시적 캐싱은 미지원이라고 밝힙니다. 출력 상한을 이전 세대 64K에서 최대 1M 토큰(long decode)으로 확대했습니다. 9/30 발표문은 내부 사용 사례와 안전 조치(오남용 거부·내부 활성 모니터링·간접 프롬프트 인젝션 방어·CoT/행동 모니터링)를 설명합니다. 2026-10-25 정정: 10/1 확인 당시 Gemini API·Vertex AI 문서에 미등재였던 상태가 해소됐는데 같은 날 감사 때 9/30 발표문만 보고 '한정 배포 유지'로 잘못 판단했다가 운영자 지적으로 바로잡았습니다.",
    "benchmarks": {
      "DeepSWE v1.1": 77.9,
      "AutomationBench": 51.3,
      "LVBench": 91.7,
      "CWE-bench v1": 68.0,
      "ERQA": 87.0
    },
    "official_id": "gemini-4-argon",
    "official_sources": [
      {
        "label": "Google 공식 발표문(9/30, Fairwind 한정 공개)",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/"
      },
      {
        "label": "Google 공식 GA 발표문(10/13)",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/"
      },
      {
        "label": "개발자 블로그(10/13)",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/"
      },
      {
        "label": "Gemini API 모델 페이지",
        "url": "https://ai.google.dev/gemini-api/docs/models/gemini-4-argon"
      },
      {
        "label": "Gemini API 변경 기록(2026-10-13 GA 항목)",
        "url": "https://ai.google.dev/gemini-api/docs/changelog"
      },
      {
        "label": "Fairwind Program 공식 안내",
        "url": "https://deepmind.google/fairwind-program/"
      }
    ],
    "release_date_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
    "parameter_source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
    "benchmark_sources": {
      "DeepSWE v1.1": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
      "AutomationBench": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
      "LVBench": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
      "CWE-bench v1": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
      "ERQA": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/"
    },
    "benchmark_note": "공식 발표문 본문에 수치로 인쇄된 점수를 기록했습니다: 9/30 발표문의 DeepSWE v1.1 77.9%(SOTA 주장)·AutomationBench(Zapier) 51.3%·LVBench(장영상 이해) 91.7%·CWE-bench v1 68%(1위 동률), 10/13 GA 발표문의 ERQA 87%(체화 추론, 다른 모델 점수 미표기). 제외: Vals Index(1위 서술만, 절대값 없음)·Gray Swan IPI(공격 성공률 0.7%, 낮을수록 좋은 비점수 지표)·Gamow Labs 비공개 평가 RareBench 57%·LabBench 52.2%(파트너 사설 평가)·내부/파트너 성능 개선 수치, 제3자 보도 수치.",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-25",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-203",
    "name": "Strands Decider 2B",
    "date": "2026-10-01",
    "sortDate": "2026-10-01",
    "month": "2026-10",
    "monthName": "October",
    "company": "AWS Strands Labs",
    "family": "Strands Decider",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "GA",
    "parameters": "2B (Qwen3.5-2B-Base torso + rank-16 LoRA + ~1M pointer head)",
    "parameter_status": "verified",
    "architecture": "Qwen3.5-2B 텍스트 디코더 torso에 rank-16 LoRA 어댑터 + typed-decision pointer head(choice/score/noul 옵션 스코어링)",
    "modalities": [
      "text"
    ],
    "focus": [
      "structured decisions",
      "classification",
      "routing",
      "scoring",
      "guardrails"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face 오픈 가중치(Apache 2.0)·pip 패키지(strands-decider) CLI·/v1/systemone 로컬 HTTP 서버",
    "note": "AWS Strands Labs의 첫 System One(structured decision) 오픈 모델 — 산문을 생성하지 않고 typed questions(choice/score/noul)의 옵션별 교정 확률을 반환하는 v19 체크포인트. 소비자 GPU 중앙값 ~115ms·로컬 구동 가능. 코드·학습 레시피·데이터 인벤토리·평가는 GitHub 리포에 동일 Apache 2.0으로 공개. 공개일 2026-10-01(HF 리포는 9/30 생성 후 10/1 공개 전환 — 카드에 날짜 미표기로 공개일 근거를 여기에 기록).",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 카드의 JevBench 공개 과제는 167/231 분수·Brier 0.348·ECE 0.050으로, 내부 평가 정확도는 0~1 분율(held-out short 0.641·contractnli 0.872·musique 0.884 등)로 표기 — % 비환산 원칙에 따라 점수표 미수록.",
    "official_id": "StrandsAgents/strands-decider-2B-hobson-v19",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/StrandsAgents/strands-decider-2B-hobson-v19"
      },
      {
        "label": "공식 코드·레시피 리포지토리",
        "url": "https://github.com/strands-labs/strands-decider"
      }
    ],
    "release_date_source": "https://huggingface.co/StrandsAgents/strands-decider-2B-hobson-v19",
    "parameter_source": "https://huggingface.co/StrandsAgents/strands-decider-2B-hobson-v19",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-204",
    "name": "Clef",
    "date": "2026-10-01",
    "sortDate": "2026-10-01",
    "month": "2026-10",
    "monthName": "October",
    "company": "Cloudflare",
    "family": "Clef",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "GA",
    "parameters": "27B (Qwen3.8-27B 포스트트레인 + joint schema head)",
    "parameter_status": "verified",
    "architecture": "Qwen3.8-27B backbone(비전 인코더 유지) + joint schema head — 모든 질문·옵션을 단일 forward pass로 스코어링",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "structured decisions",
      "classification",
      "routing",
      "scoring",
      "agentic workflows"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "64K",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Cloudflare Workers AI(@cf/cloudflare/clef)·Hugging Face 오픈 가중치(Apache 2.0)·Jev/SystemOne 호환 API",
    "note": "Cloudflare Workers AI 팀이 직접 학습한 첫 모델 — 27B 멀티모달 System One 결정 모델. 텍스트·JSON·이미지·비디오 state를 받아 typed questions 옵션별 확률을 반환하고 Jev/SystemOne API와 완전 호환. 64K 컨텍스트(Jev 32K의 2배), 자체 Jev Decision Index 평가에서 비교군 1위, 중앙값 지연 209.3ms(Jev 524.1ms 대비). Clef 도메인 분류를 Cloudflare Threat Intelligence에 자체 적용 중. 고객 데이터로 Clef를 파인튜닝하는 FDE·RL 플랫폼도 함께 발표.",
    "benchmarks": {
      "BFCL (case exact)": 98.47,
      "ToolRet (nDCG@10)": 69.19,
      "API-Bank (accuracy)": 91.93,
      "Home appliances (case exact)": 82.95,
      "When2Call (accuracy)": 72.37,
      "BANKING77 (macro-F1)": 94.2,
      "CLINC150+OOS (macro-F1)": 97.43,
      "BRIGHT (nDCG@10)": 45.91,
      "Amazon ESCI (macro-F1)": 57.48,
      "PhishNChips (accuracy)": 79.6,
      "Invoice processing (workflow)": 64.7,
      "Customer service (workflow)": 76.3,
      "Security incidents (workflow)": 62.9,
      "Agent trace observability (workflow)": 68.5
    },
    "benchmark_sources": {
      "BFCL (case exact)": "https://blog.cloudflare.com/clef-decision-models/",
      "ToolRet (nDCG@10)": "https://blog.cloudflare.com/clef-decision-models/",
      "API-Bank (accuracy)": "https://blog.cloudflare.com/clef-decision-models/",
      "Home appliances (case exact)": "https://blog.cloudflare.com/clef-decision-models/",
      "When2Call (accuracy)": "https://blog.cloudflare.com/clef-decision-models/",
      "BANKING77 (macro-F1)": "https://blog.cloudflare.com/clef-decision-models/",
      "CLINC150+OOS (macro-F1)": "https://blog.cloudflare.com/clef-decision-models/",
      "BRIGHT (nDCG@10)": "https://blog.cloudflare.com/clef-decision-models/",
      "Amazon ESCI (macro-F1)": "https://blog.cloudflare.com/clef-decision-models/",
      "PhishNChips (accuracy)": "https://blog.cloudflare.com/clef-decision-models/",
      "Invoice processing (workflow)": "https://blog.cloudflare.com/clef-decision-models/",
      "Customer service (workflow)": "https://blog.cloudflare.com/clef-decision-models/",
      "Security incidents (workflow)": "https://blog.cloudflare.com/clef-decision-models/",
      "Agent trace observability (workflow)": "https://blog.cloudflare.com/clef-decision-models/"
    },
    "benchmark_note": "공식 발표문의 Jev Decision Index 평가표·TypeSafe workflow evals 인쇄값(Cloudflare 자체 측정). 지연(중앙값 209.3ms·p95 238.6ms)은 비% 지표라 점수표 제외.",
    "official_id": "Cloudflare/clef",
    "official_sources": [
      {
        "label": "공식 발표문",
        "url": "https://blog.cloudflare.com/clef-decision-models/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/Cloudflare/clef"
      }
    ],
    "release_date_source": "https://blog.cloudflare.com/clef-decision-models/",
    "parameter_source": "https://huggingface.co/Cloudflare/clef",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-205",
    "name": "Clef-flash",
    "date": "2026-10-01",
    "sortDate": "2026-10-01",
    "month": "2026-10",
    "monthName": "October",
    "company": "Cloudflare",
    "family": "Clef",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "GA",
    "parameters": "9B (Qwen3.5-9B 포스트트레인 + joint schema head)",
    "parameter_status": "verified",
    "architecture": "Qwen3.5-9B backbone(비전 인코더 유지) + joint schema head — Clef의 저지연 경량형",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "structured decisions",
      "classification",
      "routing",
      "scoring",
      "agentic workflows"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "64K",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Cloudflare Workers AI(@cf/cloudflare/clef-flash)·Hugging Face 오픈 가중치(Apache 2.0)·Jev/SystemOne 호환 API",
    "note": "Clef의 지연 중시 변형 — 9B(Qwen3.5-9B 포스트트레인)로 중앙값 지연 38.8ms·p95 122.4ms라 에이전트 핫패스용. Jev Decision Index 대부분 행에서 Clef·Jev를 앞서거나 근접(BFCL case exact 98.76·Home appliances 97.73·API-Bank 93.11로 비교군 최고).",
    "benchmarks": {
      "BFCL (case exact)": 98.76,
      "ToolRet (nDCG@10)": 66.43,
      "API-Bank (accuracy)": 93.11,
      "Home appliances (case exact)": 97.73,
      "When2Call (accuracy)": 65.58,
      "BANKING77 (macro-F1)": 90.93,
      "CLINC150+OOS (macro-F1)": 66.77,
      "BRIGHT (nDCG@10)": 39.26,
      "Amazon ESCI (macro-F1)": 57.39,
      "PhishNChips (accuracy)": 75.05,
      "Invoice processing (workflow)": 57.1,
      "Customer service (workflow)": 77.0,
      "Security incidents (workflow)": 61.7,
      "Agent trace observability (workflow)": 69.8
    },
    "benchmark_sources": {
      "BFCL (case exact)": "https://blog.cloudflare.com/clef-decision-models/",
      "ToolRet (nDCG@10)": "https://blog.cloudflare.com/clef-decision-models/",
      "API-Bank (accuracy)": "https://blog.cloudflare.com/clef-decision-models/",
      "Home appliances (case exact)": "https://blog.cloudflare.com/clef-decision-models/",
      "When2Call (accuracy)": "https://blog.cloudflare.com/clef-decision-models/",
      "BANKING77 (macro-F1)": "https://blog.cloudflare.com/clef-decision-models/",
      "CLINC150+OOS (macro-F1)": "https://blog.cloudflare.com/clef-decision-models/",
      "BRIGHT (nDCG@10)": "https://blog.cloudflare.com/clef-decision-models/",
      "Amazon ESCI (macro-F1)": "https://blog.cloudflare.com/clef-decision-models/",
      "PhishNChips (accuracy)": "https://blog.cloudflare.com/clef-decision-models/",
      "Invoice processing (workflow)": "https://blog.cloudflare.com/clef-decision-models/",
      "Customer service (workflow)": "https://blog.cloudflare.com/clef-decision-models/",
      "Security incidents (workflow)": "https://blog.cloudflare.com/clef-decision-models/",
      "Agent trace observability (workflow)": "https://blog.cloudflare.com/clef-decision-models/"
    },
    "benchmark_note": "공식 발표문의 Jev Decision Index 평가표·TypeSafe workflow evals 인쇄값(Cloudflare 자체 측정). 지연(중앙값 38.8ms·p95 122.4ms)은 비% 지표라 점수표 제외.",
    "official_id": "Cloudflare/clef-flash",
    "official_sources": [
      {
        "label": "공식 발표문",
        "url": "https://blog.cloudflare.com/clef-decision-models/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/Cloudflare/clef-flash"
      }
    ],
    "release_date_source": "https://blog.cloudflare.com/clef-decision-models/",
    "parameter_source": "https://huggingface.co/Cloudflare/clef-flash",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-206",
    "name": "Kolibri-1",
    "date": "2026-10-03",
    "sortDate": "2026-10-03",
    "month": "2026-10",
    "monthName": "October",
    "company": "Aleph Alpha",
    "family": "Kolibri",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "78.1B (78,103,074,560) 총 / 3.46B (3,457,573,120) 활성",
    "parameter_status": "verified",
    "architecture": "MoE Transformer — 50층·384 experts(토큰당 6 활성)·공유 expert 1·FP8 가중치(~78GB, 임베딩·LM head·norm·라우터는 BF16)",
    "modalities": [
      "text"
    ],
    "focus": [
      "multilingual reasoning",
      "German-English",
      "agentic tool use",
      "on-prem sovereign deployment"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "1,048,576 (권장 ≤262,144)",
    "languages": "German, English",
    "variants": [],
    "reasoning_effort": [
      "none",
      "low",
      "medium",
      "high"
    ],
    "availability": "Hugging Face 오픈 가중치(FP8 + BF16 변형, Apache 2.0)·aleph-alpha-inference vLLM 플러그인·컨테이너 이미지",
    "note": "Aleph Alpha의 독일어·영어 소버린 MoE 추론 모델 — 독일 통일의 날(10/3)에 맞춰 Apache 2.0 가중치 공개. Kolibri Origin(30B·65K, 미공개)과 같은 Model Factory 파이프라인에서 78B·1M 컨텍스트로 확장, 20T 토큰 사전학습(영어 43.4%·독일어 23.4%). 명시적 추론 모드 none~high 4단계·툴 호출 지원, 규제 산업·공공 온프레미스용. Apache 2.0 범위는 가중치·설정 파일에 한정하고 코드·아키텍처·학습법은 제외라고 카드에 명시. HF 리포 생성 10/2·공식 출시일 10/3(블로그 명기).",
    "benchmarks": {
      "Overall (EN)": 75.5,
      "Overall (DE)": 70.8,
      "GPQA Diamond (EN)": 84.3,
      "GPQA Diamond (DE)": 81.3,
      "Humanity's Last Exam (EN)": 21.5,
      "Humanity's Last Exam (DE)": 15.9,
      "MMLU-Pro CoT (EN)": 80.0,
      "MMLU-ProX CoT (DE)": 75.5,
      "AIME 2025 (EN)": 96.9,
      "AIME 2026 (EN)": 96.0,
      "TerminalBench 2.1": 27.7,
      "SWE-Bench Verified": 66.4,
      "LiveCodeBench v6": 85.9,
      "HumanEval+": 92.7,
      "BrowseComp": 29.4,
      "IFBench (loose-prompt)": 78.1,
      "Tau2-Bench (Telecom)": 94.7,
      "BFCL v4 (overall)": 61.4
    },
    "benchmark_sources": {
      "Overall (EN)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "Overall (DE)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "GPQA Diamond (EN)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "GPQA Diamond (DE)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "Humanity's Last Exam (EN)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "Humanity's Last Exam (DE)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "MMLU-Pro CoT (EN)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "MMLU-ProX CoT (DE)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "AIME 2025 (EN)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "AIME 2026 (EN)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "TerminalBench 2.1": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "SWE-Bench Verified": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "LiveCodeBench v6": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "HumanEval+": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "BrowseComp": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "IFBench (loose-prompt)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "Tau2-Bench (Telecom)": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
      "BFCL v4 (overall)": "https://huggingface.co/Aleph-Alpha/Kolibri-1"
    },
    "benchmark_note": "공식 HF 카드 Post-training 평가표 인쇄값(Kolibri는 reasoning effort high로 측정, 카테고리 평균은 비가중 평균). EN/DE는 영어·독일어 프롬프트 평가. AA-Omniscience Accuracy 14.8·Index −32.8·Honeypot 80.8·Tau2 Retail/Airline·Tau3 Banking·BFCL 세부 스플릿·Grounding/Agentic Retrieval/Industry RAG·장문 섹션 등 나머지 행은 카드 원문 참조.",
    "official_id": "Aleph-Alpha/Kolibri-1",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/Aleph-Alpha/Kolibri-1"
      },
      {
        "label": "공식 블로그",
        "url": "https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/"
      }
    ],
    "release_date_source": "https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/",
    "parameter_source": "https://huggingface.co/Aleph-Alpha/Kolibri-1",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-207",
    "name": "Mistral Large 4",
    "date": "2026-10-06",
    "sortDate": "2026-10-06",
    "month": "2026-10",
    "monthName": "October",
    "company": "Mistral AI",
    "family": "Mistral Large",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "1.05T (52B 활성) + 1.6B 비전 인코더",
    "parameter_status": "verified",
    "architecture": "granular MoE 네이티브 멀티모달 — 1.05T 총·52B 활성·1.6B 비전 인코더, 3,800× NVIDIA Grace Blackwell(자체 유럽 데이터센터)에서 스크래치 학습",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "agentic coding",
      "cybersecurity",
      "enterprise knowledge work",
      "visual grounding",
      "multilingual"
    ],
    "open_weights": false,
    "license": "",
    "context": "1M",
    "languages": "160+ 언어(EU 전 공식 언어 포함)",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Mistral Studio 퍼블릭 프리뷰 API(v26.10 — 입력 $1.36·출력 $4.18/1M, 도입 할인 $0.68/$2.09)·Apache 계열 가중치 이달 말 공개 예정",
    "note": "Mistral의 최대 모델(별칭 ML4/le Chonk) — 10/6 Mistral Studio 퍼블릭 프리뷰 API로 출시, 가중치는 파트너·당국 대상 레드팀 후 이달 말 공개 예정이라 open_weights=false로 기록. hybrid instruct-and-reasoning 통합 모델, 160+ 언어 학습 데이터. 사이버(Cybench 93·Lakera B3 93.3 방어)·금융·법률 수직에서 오픈웨이트 SOTA 주장, RL 런은 3k GPU·일 33B 토큰 규모로 진행 중이라 성능 상승 지속 예고.",
    "benchmarks": {
      "Cybench": 93,
      "B3 Attack Resistance": 93.3,
      "DeepSWE v1.1": 61.7,
      "SWE-Atlas-QnA": 59.4,
      "Terminal-Bench 4.0": 28.3,
      "AutomationBench": 59.9,
      "Dense 200": 42,
      "Coding Agent Index": 49.8
    },
    "benchmark_sources": {
      "Cybench": "https://mistral.ai/news/mistral-large-4/",
      "B3 Attack Resistance": "https://mistral.ai/news/mistral-large-4/",
      "DeepSWE v1.1": "https://mistral.ai/news/mistral-large-4/",
      "SWE-Atlas-QnA": "https://mistral.ai/news/mistral-large-4/",
      "Terminal-Bench 4.0": "https://mistral.ai/news/mistral-large-4/",
      "AutomationBench": "https://mistral.ai/news/mistral-large-4/",
      "Dense 200": "https://mistral.ai/news/mistral-large-4/",
      "Coding Agent Index": "https://mistral.ai/news/mistral-large-4/"
    },
    "benchmark_note": "공식 발표문 본문 인쇄값. 취약점 재현+패치 테스트 82%는 발표문이 테스트명을 적지 않아(차트 목록에 CyberGym-E2E만 존재) 명칭 확정 보류로 원장에만 기록. AA-Briefcase 1,393 Elo·AA Cyber Index·KORA Bench 1.691/2·Surge AI 블라인드 인간평가 3.74/5 등 비%·제3자 지표는 점수표 제외. Finance Agent·Harvey's Legal Agent·ChartQA Pro·GDP.pdf·SciCode-Verified·Cyber Refusal Rate는 차트 이미지로만 제시.",
    "official_id": "mistral-large-4",
    "official_sources": [
      {
        "label": "공식 발표문",
        "url": "https://mistral.ai/news/mistral-large-4/"
      },
      {
        "label": "공식 모델 문서",
        "url": "https://docs.mistral.ai/models/mistral-large-4-0"
      }
    ],
    "release_date_source": "https://mistral.ai/news/mistral-large-4/",
    "parameter_source": "https://docs.mistral.ai/models/mistral-large-4-0",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-208",
    "name": "Tiny Aya L2-Thinker",
    "date": "2026-10-06",
    "sortDate": "2026-10-06",
    "month": "2026-10",
    "monthName": "October",
    "company": "Cohere Labs",
    "family": "Aya",
    "type": "LLM",
    "category": "LLM",
    "status": "GA",
    "parameters": "3.35B",
    "parameter_status": "verified",
    "architecture": "Multilingual Dense Transformer — Tiny Aya base(32K)에 데이터 혼합 3원칙으로 in-language(L2) 추론 포스트트레인",
    "modalities": [
      "text"
    ],
    "focus": [
      "multilingual reasoning",
      "in-language thinking",
      "math/science reasoning",
      "instruction following"
    ],
    "open_weights": true,
    "license": "CC-BY-NC-4.0",
    "context": "32K (input + output)",
    "languages": "44개 언어+영어 추론 지원·60개 언어 커버리지(비추론 지시 데이터 포함)",
    "variants": [],
    "reasoning_effort": [
      "enable_thinking on/off (chat template)"
    ],
    "availability": "Hugging Face 오픈 가중치(CC-BY-NC, 조건 동의 필요)·다국어 추론 학습 데이터 동시 공개",
    "note": "Cohere Labs의 in-language(L2) 추론 연구 릴리스 — 프롬프트 언어 그대로 추론하는 3.35B. 영어로만 생각하는 Tiny Aya En-Thinker의 형제 모델로, 60개 언어에서 93%+ in-language 추론·저자원 언어 유지·추론 토큰 절감을 보고. 듀얼모드(기본 thinking·/no_think). arXiv 2609.10445.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 카드에 점수 표 미게재. 공식 블로그는 60개 언어에서 in-language reasoning 비율 93%+·정확도 손실 최소·추론 토큰 절감을 기술하나 정확 수치 미표기 — arXiv 2609.10445 원문 참조.",
    "official_id": "CohereLabs/tiny-aya-l2-thinker",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/CohereLabs/tiny-aya-l2-thinker"
      },
      {
        "label": "공식 블로그",
        "url": "https://cohere.com/blog/building-multilingual-bridges"
      },
      {
        "label": "공식 논문 (arXiv)",
        "url": "https://arxiv.org/abs/2609.10445"
      }
    ],
    "release_date_source": "https://cohere.com/blog/building-multilingual-bridges",
    "parameter_source": "https://huggingface.co/CohereLabs/tiny-aya-l2-thinker",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-209",
    "name": "Claude Haiku 5.5",
    "date": "2026-10-07",
    "sortDate": "2026-10-07",
    "month": "2026-10",
    "monthName": "October",
    "company": "Anthropic",
    "family": "Claude",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "agentic coding",
      "subagent tasks",
      "classification",
      "computer use",
      "high-volume workloads"
    ],
    "open_weights": false,
    "license": "",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "adaptive thinking — effort 조절(기본 medium)"
    ],
    "availability": "Claude apps·Claude API(claude-haiku-5-5)·AWS Bedrock·Google Cloud·Microsoft Foundry·Azure",
    "note": "Claude 5.5 패밀리 세 번째·Haiku급 첫 모델 — Anthropic 역대 최속·최저가(Haiku 4.5 대비 평균 ~75% 절감: 10만 토큰 이하 프롬프트 입력 90%↓·초과분 50%↓, $0.10~0.50 입력·$0.50~2.50 출력/1M). Haiku급 최초 effort 조절 지원(기본 medium). 컨텍스트 1M·출력 상한 128K(Haiku 4.5의 200K/64K에서 확대), Claude 4.7+ 신형 토크나이저(동일 텍스트 ~30% 토큰 증가). 사이버 세이프가드는 Sonnet 5.5보다 방어 작업 허용 범위가 넓고 바이오는 Sonnet 5/5.5·Opus 5와 동일. Devin Fusion 사이드킥으로도 채택(Cognition 인용).",
    "benchmarks": {
      "Terminal-Bench 4.0": 39.2,
      "FrontierCode 1.1 Main": 46.4,
      "OSWorld 2.1 (partial)": 72.4,
      "Humanity's Last Exam (no tools)": 45.9,
      "Humanity's Last Exam (w/ tools)": 57.4,
      "Chartography (no tools)": 46.4
    },
    "benchmark_sources": {
      "Terminal-Bench 4.0": "https://www.anthropic.com/claude-haiku-5-5",
      "FrontierCode 1.1 Main": "https://www.anthropic.com/claude-haiku-5-5",
      "OSWorld 2.1 (partial)": "https://www.anthropic.com/claude-haiku-5-5",
      "Humanity's Last Exam (no tools)": "https://www.anthropic.com/claude-haiku-5-5",
      "Humanity's Last Exam (w/ tools)": "https://www.anthropic.com/claude-haiku-5-5",
      "Chartography (no tools)": "https://www.anthropic.com/claude-haiku-5-5"
    },
    "benchmark_note": "Anthropic 공식 발표 표 값 — 발표문이 OSWorld를 'Offline subset'으로 표기. GDPval-AA v2.1 1620·AA-Briefcase v1.1 1578은 Artificial Analysis 비% 지표라 점수표에서 제외(Sonnet 5.5 레코드와 동일 처리).",
    "official_id": "claude-haiku-5-5",
    "official_sources": [
      {
        "label": "공식 모델 페이지",
        "url": "https://www.anthropic.com/claude-haiku-5-5"
      }
    ],
    "release_date_source": "https://www.anthropic.com/claude-haiku-5-5",
    "parameter_source": "https://www.anthropic.com/claude-haiku-5-5",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-08",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-210",
    "name": "Muse Image",
    "date": "2026-07-07",
    "sortDate": "2026-07-07",
    "month": "2026-07",
    "monthName": "July",
    "company": "Meta",
    "family": "Muse Image",
    "type": "Image generation / editing model",
    "category": "Image generation",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "에이전트형 이미지 생성 — 프롬프트를 바로 렌더링하지 않고 검색·코드 실행 도구를 호출해 실제 레퍼런스와 최신 사실을 모으고 레이아웃을 계획한 뒤 생성·자기수정. Muse Spark와 툴·플랜을 공유하는 공동 계획(joint planning) 지원",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "agentic image generation",
      "image editing",
      "multi-reference composition",
      "content provenance"
    ],
    "open_weights": false,
    "license": "Proprietary (Meta Model API)",
    "context": "",
    "languages": "",
    "variants": [
      "muse-image-1.0"
    ],
    "reasoning_effort": [],
    "availability": "Meta AI 앱·meta.ai·Instagram Stories(미국)·WhatsApp 일부 국가(2026-07-07), Meta Model API(muse-image-1.0, 이미지당 $0.01, /v1/images/generations·/v1/images/edits, 2026-08-25)",
    "note": "Meta Superintelligence Labs의 첫 미디어 생성 모델(내부 코드명 Mango)로 2026-07-07 Meta AI 앱·meta.ai·Instagram Stories·WhatsApp에 출시됐고, 2026-08-25 Meta Model API로 개발자 직접 호출이 열리며 이미지당 $0.01로 책정됐습니다. 2026-10-15 범위 정책 개정(중요도 예외)에 따라 Muse 계열 전수 점검에서 소급 수록했습니다 — 개정 전에는 image-generation-only로 분류돼 수록 검토 대상이 아니었습니다. 같은 발표에서 예고한 Muse Video는 프리뷰 예고만 있어 미수록입니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 발표문이 성능 근거로 제시한 값이 Chatbot Arena 인간 선호 Elo 순위(텍스트→이미지·단일 이미지 편집·다중 이미지 편집 2위)뿐이고 정책상 Elo·Arena 지표는 점수표에 넣지 않아 빈 점수로 둡니다. 대신 이미지 출처 검증용 무결성 워터마크 Content Seal과 검출 도구를 함께 공개했습니다.",
    "official_id": "muse-image-1.0",
    "official_sources": [
      {
        "label": "공식 발표문 (MSL 첫 미디어 생성 모델)",
        "url": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/"
      },
      {
        "label": "공식 모델 문서 (Model API 모델 ID·엔드포인트)",
        "url": "https://dev.meta.ai/docs/models"
      }
    ],
    "release_date_source": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/",
    "parameter_source": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-15",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-211",
    "name": "MiniMax Music 3.0",
    "date": "2026-08-13",
    "sortDate": "2026-08-13",
    "month": "2026-08",
    "monthName": "August",
    "company": "MiniMax",
    "family": "MiniMax Music",
    "type": "Music generation model",
    "category": "Music generation",
    "status": "GA",
    "parameters": "8B Global LLM + 0.6B Local LLM + 2.4B flow-matching 모듈 + 123M Flow-VAE (구성 요소별 공개, 전체 합계 미공개)",
    "parameter_status": "publisher-partial",
    "architecture": "Hybrid-LM + 연속 hidden-state 합성 — 8층 RVQ(1층 16,384-entry codebook은 핵심 의미·구조, 2~8층은 각 1,024-entry로 잔차 acoustic 정보). 8B Global LLM이 프레임별 semantic 토큰과 전곡 컨텍스트를, 0.6B Local LLM이 프레임 내 acoustic 토큰을 depth 축으로 예측하고, 두 LLM의 연속 hidden state를 융합해 2.4B flow-matching → 123M Flow-VAE로 파형을 복원",
    "modalities": [
      "text",
      "audio"
    ],
    "focus": [
      "music generation",
      "songwriting",
      "vocal synthesis",
      "long-form audio"
    ],
    "open_weights": true,
    "license": "MiniMax-Music3 Community License",
    "context": "",
    "languages": "",
    "variants": [
      "MiniMax-Music3 (BF16, full pipeline)",
      "SGLang-Omni 서빙",
      "Diffusers 모듈형 파이프라인"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face MiniMaxAI/MiniMax-Music3(오픈 웨이트, SGLang-Omni·Diffusers 자체 서빙), MiniMax Audio 호스팅. 유료 음악·가사 API는 2026-08-20부터 신규 사용자 접수 중단",
    "note": "2026-08-13 MiniMax Research 공식 블로그로 공개한 차세대 음악 생성 모델입니다(가중치는 Hugging Face 저장소 생성일 기준 2026-08-07부터 공개, 호스팅 Music-3.0은 7월 제공). 가사와 구조화 캡션(Structured Caption)으로 최대 5분짜리 완성곡을 한 번에 생성하며, 구간 태그로 곡 구조를 지정합니다. 2026-10-15 범위 정책 개정(중요도 예외)에 따라 수록했습니다. 구성 요소 파라미터는 공식 블로그가 명시하지만 전체 합계는 인쇄돼 있지 않아 publisher-partial로 두었고, Global LLM 초기화 베이스는 블로그가 Qwen3.5-8B, Hugging Face 카드·GitHub README가 Qwen3-8B로 서로 다르게 적어 블로그 표기를 채택하고 불일치를 남깁니다. 출력 표본율도 44.1kHz(모델 카드)와 32kHz·16-bit(README)로 갈려 확정하지 않았습니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 블로그·모델 카드·GitHub 저장소에 % 척도 평가표가 없어 빈 점수로 둡니다. 제3자 블라인드 아레나 순위(Artificial Analysis 음악 아레나 오픈웨이트 최상위 등)는 정책상 점수표에서 제외했습니다.",
    "official_id": "MiniMaxAI/MiniMax-Music3",
    "official_sources": [
      {
        "label": "공식 발표문 (기술 아키텍처·구성 요소 파라미터)",
        "url": "https://www.minimax.io/blog/minimax-music-3-0-next-generation-open-weights-production-ready-versatile-music-model"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-Music3"
      },
      {
        "label": "공식 추론 저장소",
        "url": "https://github.com/MiniMax-AI/MiniMax-Music3"
      },
      {
        "label": "공식 자체 서빙 가이드",
        "url": "https://platform.minimax.io/docs/guides/local-deploy-music-3"
      }
    ],
    "release_date_source": "https://www.minimax.io/blog/minimax-music-3-0-next-generation-open-weights-production-ready-versatile-music-model",
    "parameter_source": "https://www.minimax.io/blog/minimax-music-3-0-next-generation-open-weights-production-ready-versatile-music-model",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-15",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-212",
    "name": "Step 5 Preview",
    "date": "2026-09-20",
    "sortDate": "2026-09-20",
    "month": "2026-09",
    "monthName": "September",
    "company": "StepFun",
    "family": "Step",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "600B (27B 활성, ~4.5% sparsity)",
    "parameter_status": "verified",
    "architecture": "Sparse MoE 92층 narrow-deep Transformer — Sparse GQA + block-wise token merging으로 1M 컨텍스트 처리(인덱서·top-k 비용을 dense 기준 약 1/8로 축소 주장), 텍스트·이미지·비디오 프레임을 공유 잠재공간으로 인코딩하는 통합 멀티모달 인코더(비디오는 적응형 프레임 샘플링 + 시간축 attention)",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "agentic coding",
      "software engineering",
      "professional knowledge work",
      "finance",
      "long-horizon agent runs"
    ],
    "open_weights": true,
    "license": "StepFun Community License",
    "context": "1M (최대 입력 1M · 최대 출력 64K)",
    "languages": "",
    "variants": [
      "step-5-preview (API)",
      "BF16 (stepfun-ai/Step-5-Preview-BF16)",
      "FP8 (stepfun-ai/Step-5-Preview)"
    ],
    "reasoning_effort": [
      "low",
      "medium",
      "high",
      "xhigh"
    ],
    "availability": "StepFun Open Platform API(step-5-preview, OpenAI 호환·최대 60장 이미지·비디오 128MB/5분 권장), Hugging Face stepfun-ai 가중치(BF16·FP8), vLLM·SGLang(reasoning parser stepfun)",
    "note": "2026-09-20 공식 출시된 StepFun 차세대 플래그십(Step 4.x 세대를 건너뛰고 Step-3.7-Flash에서 바로 Step 5로 이동). API는 출시 당일 열렸고 가중치는 2026-10-15 공개 예고 후 stepfun-ai 저장소에 BF16·FP8 체크포인트로 올라왔습니다(BF16 약 610GB, 8×H100 권장). 산문 생성 모델이면서 이미지·비디오 입력과 병렬 툴콜·strict JSON Schema를 지원합니다.",
    "benchmarks": {
      "GPQA Diamond": 93.5,
      "Humanity's Last Exam": 46.5,
      "CritPt": 20.9,
      "DeepSWE v1.1": 67.7,
      "Terminal-Bench 2.1": 85.0,
      "Terminal-Bench 4": 33.3,
      "CyberGym": 84.7,
      "SciCode": 58.9,
      "RoadmapBench": 54.3,
      "ProgramBench": 80.5,
      "SWE-Marathon v1.1": 72.7,
      "MLS-Bench-Lite": 40.5,
      "SWE-Atlas-QnA": 63.6,
      "SWE-Atlas-Test-writing": 50.8,
      "StepCodeBench": 49.0,
      "StepCode-Bench-Daily": 64.9,
      "StepCode-Bench-General": 65.0,
      "Agents' Last Exam (ALE-CLI)": 29.5,
      "τ³-Banking": 42.5,
      "AutomationBench Public": 44.0,
      "Toolathlon-Verified": 74.1,
      "MCP-Atlas": 85.6,
      "PresentBench": 76.8,
      "JobBench": 59.0,
      "Apex-Agents": 37.8,
      "Draco": 83.3,
      "BrowseComp": 88.7,
      "HLE w/ tools": 59.4,
      "FrontierFinance": 66.4,
      "FinStepBench-LiveSearch": 74.5,
      "FinStepBench-CorporateValuation": 60.6,
      "FinStepBench-FinanceDR": 55.8,
      "OfficeQA Pro": 60.3,
      "Spreadsheet v2": 29.4,
      "GDP.pdf": 14.8,
      "MMMU-Pro": 76.0
    },
    "benchmark_sources": {
      "GPQA Diamond": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "Humanity's Last Exam": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "CritPt": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "DeepSWE v1.1": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "Terminal-Bench 2.1": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "Terminal-Bench 4": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "CyberGym": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "SciCode": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "RoadmapBench": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "ProgramBench": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "SWE-Marathon v1.1": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "MLS-Bench-Lite": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "SWE-Atlas-QnA": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "SWE-Atlas-Test-writing": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "StepCodeBench": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "StepCode-Bench-Daily": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "StepCode-Bench-General": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "Agents' Last Exam (ALE-CLI)": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "τ³-Banking": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "AutomationBench Public": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "Toolathlon-Verified": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "MCP-Atlas": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "PresentBench": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "JobBench": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "Apex-Agents": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "Draco": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "BrowseComp": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "HLE w/ tools": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "FrontierFinance": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "FinStepBench-LiveSearch": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "FinStepBench-CorporateValuation": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "FinStepBench-FinanceDR": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "OfficeQA Pro": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "Spreadsheet v2": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "GDP.pdf": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16",
      "MMMU-Pro": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16"
    },
    "benchmark_note": "Hugging Face 공식 모델 카드의 Step-5-Preview(high effort) 열 값입니다. 카드가 결과 출처를 Artificial Analysis로 밝힌 AA-LCR v1.1 88.3 · AutomationBench-AA 51.0 · Terminal-Bench 4.0-AA, 비% 척도인 GDPval-AA v2 1571 · AA-Briefcase 1417, 그리고 AA Intelligence Index는 제3자·비% 지표라 점수표에서 제외했습니다. 말미에 공개한 StepCodeBench 계열은 StepFun 자체 벤치마크(553개 저장소·33개 언어)입니다. MMMU-Pro 76.0은 카드가 다음 릴리스의 주 개선 목표로 지목한 약점입니다.",
    "official_id": "stepfun-ai/Step-5-Preview-BF16",
    "official_sources": [
      {
        "label": "공식 모델 페이지 (출시·파라미터)",
        "url": "https://www.stepfun.com/step-5-preview"
      },
      {
        "label": "공식 모델 카드 (벤치마크 전체 표)",
        "url": "https://huggingface.co/stepfun-ai/Step-5-Preview-BF16"
      },
      {
        "label": "공식 개발자 문서 (모델 ID·입출력·기능)",
        "url": "https://platform.stepfun.ai/docs/en/guides/models/step-5-preview"
      }
    ],
    "release_date_source": "https://www.stepfun.com/step-5-preview",
    "parameter_source": "https://www.stepfun.com/step-5-preview",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-15",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-213",
    "name": "Qwen-Image-2.1",
    "date": "2026-09-20",
    "sortDate": "2026-09-20",
    "month": "2026-09",
    "monthName": "September",
    "company": "Alibaba",
    "family": "Qwen-Image",
    "type": "Image generation / editing model",
    "category": "Image generation",
    "status": "GA",
    "parameters": "7B (비주얼 생성 컴포넌트, 32 Single-Stream DiT 레이어)",
    "parameter_status": "verified",
    "architecture": "통합 텍스트→이미지 생성·이미지 편집 DiT — 혼합 세분도(mixed-granularity) attention과 prefix KV cache 재사용, 투명(RGBA) 이미지 네이티브 생성·편집, 최대 10장 레퍼런스 이미지와 원·페인트 주석·마스크로 국소 편집 지정",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "text-to-image",
      "image editing",
      "transparent (RGBA) generation",
      "multi-reference composition",
      "typography"
    ],
    "open_weights": true,
    "license": "Qwen Research License Agreement",
    "context": "",
    "languages": "",
    "variants": [
      "Qwen/Qwen-Image-2.1 (가중치)",
      "Alibaba Cloud Model Studio API (Pro·Turbo)",
      "Diffusers QwenImage21Pipeline"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face Qwen/Qwen-Image-2.1·ModelScope 오픈 웨이트, Diffusers(QwenImage21Pipeline), Alibaba Cloud Model Studio 호스팅 API(Pro·Turbo)",
    "note": "2026-09-20 Qwen-Image 계열의 통합 생성·편집 모델로 오픈 웨이트 공개(같은 릴리스에 프롬프트 리라이팅용 9B 모듈 2종 동봉). 2026-10-15 범위 정책 개정(중요도 예외)에 따라 수록했습니다 — 개정 전에는 image-generation-only로 분류돼 수록 검토 대상이 아니었습니다. 라이선스는 Apache 계열이 아닌 Qwen Research License Agreement입니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 모델 카드·저장소·블로그에 % 척도 평가표가 없어 빈 점수로 둡니다. 제3자 이미지 리더보드 수치는 정책상 인용하지 않았습니다.",
    "official_id": "Qwen/Qwen-Image-2.1",
    "official_sources": [
      {
        "label": "공식 모델 카드 (가중치·아키텍처·라이선스)",
        "url": "https://huggingface.co/Qwen/Qwen-Image-2.1"
      },
      {
        "label": "공식 공개 저장소 (릴리스 노트·추론 코드)",
        "url": "https://github.com/QwenLM/Qwen-Image-2.1"
      },
      {
        "label": "공식 발표 블로그",
        "url": "https://qwen.ai/blog?id=qwen-image-2.1"
      }
    ],
    "release_date_source": "https://github.com/QwenLM/Qwen-Image-2.1",
    "parameter_source": "https://huggingface.co/Qwen/Qwen-Image-2.1",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-15",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-214",
    "name": "EmbeddingGemma 2",
    "date": "2026-10-06",
    "sortDate": "2026-10-06",
    "month": "2026-10",
    "monthName": "October",
    "company": "Google DeepMind",
    "family": "Gemma",
    "type": "Multimodal embedding model",
    "category": "Embedding",
    "status": "GA",
    "parameters": "740M (텍스트 backbone 130M + embedder 140M + 비전 170M + 오디오 300M, 모듈 선택 로드)",
    "parameter_status": "verified",
    "architecture": "Gemma 4 기반 24층 인코더 — model dim 512·hidden 2048·sliding window 1024·GQA/MQA·mean pooling, 512→768 projection. Matryoshka Representation Learning으로 768/512/256/128차원 절단 지원, 비전·오디오 인코더를 개별 로드해 텍스트 전용 270M부터 전체 740M까지 운용",
    "modalities": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "focus": [
      "on-device multimodal retrieval",
      "semantic search",
      "retrieval-augmented generation",
      "classification and clustering",
      "cross-modal search"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "8,192 토큰 (이미지 280토큰/장 ≈ 29장 · 비디오 140토큰/프레임 ≈ 58프레임 · 오디오 25토큰/초)",
    "languages": "100개 이상 언어(학습 데이터 140개 이상 언어)",
    "variants": [
      "768d (full multimodal)",
      "512d · 256d · 128d (MRL 절단)",
      "Google AI Edge LiteRT·MediaPipe 최적화"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face google/embeddinggemma-2·Kaggle, sentence-transformers·transformers·MLX·vLLM·llama.cpp·SGLang·Ollama·LM Studio, transformers.js·WebGPU(LiteRT Community)",
    "note": "2026-10-06 Google DeepMind가 공개한 멀티모달 임베딩 모델로, 텍스트·코드·이미지·비디오·오디오를 단일 768차원 공간에 매핑합니다. 2026-10-08 감사에서 제외 원장(excluded-2026-10-08-3)에 embedding/reranker-only로 기록했던 항목으로, 2026-10-15 범위 정책 개정(중요도 예외)에 따라 활성 레코드로 이관했습니다(되돌림 경위는 README 각주 참조). 온디바이스 기준 Google Pixel 11 Pro에서 양자화 시 텍스트 전용 약 191MB·전체 약 567MB 상주 메모리로 동작합니다.",
    "benchmarks": {
      "MTEB (multilingual, v2)": 61.36,
      "MTEB (code, v1)": 78.68,
      "MIEB (lite)": 64.64,
      "MMEB v2 (Image)": 57.28,
      "MMEB v2 (VisDoc)": 67.84,
      "MMEB v2 (Video)": 50.67,
      "MSEB (Retrieval)": 69.54,
      "MAEB": 49.39
    },
    "benchmark_sources": {
      "MTEB (multilingual, v2)": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2",
      "MTEB (code, v1)": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2",
      "MIEB (lite)": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2",
      "MMEB v2 (Image)": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2",
      "MMEB v2 (VisDoc)": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2",
      "MMEB v2 (Video)": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2",
      "MSEB (Retrieval)": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2",
      "MAEB": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2"
    },
    "benchmark_note": "공식 모델 카드의 768d full-precision 표 값입니다(MTEB는 Mean(Task), MSEB는 MRR@10, 나머지는 NDCG@10·Hit@1·Mean(TaskType) 등 카드에 적힌 metric). 공식 블로그가 든 MTEB Code 78.68은 EmbeddingGemma 1의 68.76 대비 +9.92입니다. 128/256/512차원 절단 표의 값은 동일 체크포인트의 축소 차원 재측정이라 본표와 별도로 두지 않았습니다.",
    "official_id": "google/embeddinggemma-2",
    "official_sources": [
      {
        "label": "공식 모델 카드 (파라미터·벤치마크 전체 표)",
        "url": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2"
      },
      {
        "label": "공식 발표 블로그",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/"
      },
      {
        "label": "공식 모델 가중치",
        "url": "https://huggingface.co/google/embeddinggemma-2"
      }
    ],
    "release_date_source": "https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/",
    "parameter_source": "https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-15",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-215",
    "name": "Muse Wonder",
    "date": "2026-10-12",
    "sortDate": "2026-10-12",
    "month": "2026-10",
    "monthName": "October",
    "company": "Meta",
    "family": "Muse Wonder",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "호스팅 멀티모달 에이전트 모델 — 텍스트·이미지·비디오·오디오·PDF 입력(공식 문서 기준), Muse Spark보다 큰 베이스에 프리트레이닝·RL 확장, reasoning effort minimal~max 지원",
    "modalities": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "focus": [
      "agentic coding",
      "long-running agents",
      "computer use",
      "personal and professional agents",
      "active memory"
    ],
    "open_weights": false,
    "license": "Proprietary (Meta Model API / Muse Code)",
    "context": "1,048,576 (1M)",
    "languages": "다국어 학습 데이터(지원 언어 목록은 미기재)",
    "variants": [
      "muse-wonder-1.0"
    ],
    "reasoning_effort": [
      "minimal",
      "low",
      "medium",
      "high",
      "max"
    ],
    "availability": "Meta Model API(muse-wonder-1.0, $4 입력·$0.20 캐시 입력·$20 출력 /1M — Standard 모드만)·Muse Code(모든 플랜). Muse 앱에는 구독자 우선 순차 배포 예정",
    "note": "2026-10-12 Meta Superintelligence Labs가 공개한 첫 프론티어급 모델(Muse Wonder 시리즈 자체는 API·Muse Code 출시 당일부터 사용 가능). Muse Spark보다 큰 베이스에 프리트레이닝·RL을 확장했고, gigawatt 규모 Prometheus 데이터센터에서 학습했습니다. Active Memory(대화 간 핵심 컨텍스트 유지·능동 검색)와 Active Focus(블로커를 통과하며 목표를 지속 추진)를 내세우며, 최대 몇 시간짜리 장기 에이전트 실행·서브에이전트 오케스트레이션·컴퓨터 유스를 지원합니다. 시스템 카드의 안전 평가는 별도 보고서로 공개됐습니다(Muse Wonder Full 기준 CyberGym 88.4% · ExploitBench 58.9% · BioTIER 영어·다국어 98.7% · MASK 87.3% 등). 파라미터 수는 1차 자료 어디에도 인쇄돼 있지 않아 정확한 수치 미공개로 둡니다. Muse Wonder Full은 설정으로 선택되지 않아 별도 레코드로 분리했습니다.",
    "benchmarks": {
      "Personal Superintelligence Index": 54.3,
      "Vals Finance Agent V2": 56.6,
      "HealthBench Pro": 60.5,
      "GDP.pdf": 30.8,
      "JobBench": 70.5,
      "OSWorld V2.1 (partial)": 72.6,
      "OSWorld V2.1 (binary)": 34.3,
      "MemoryBench": 85.6,
      "DeepSWE 1.1": 78.8,
      "SWE-Marathon": 53.1,
      "ProgramBench": 50.0
    },
    "benchmark_sources": {
      "Personal Superintelligence Index": "https://dev.meta.ai/models/muse-wonder",
      "Vals Finance Agent V2": "https://dev.meta.ai/models/muse-wonder",
      "HealthBench Pro": "https://dev.meta.ai/models/muse-wonder",
      "GDP.pdf": "https://dev.meta.ai/models/muse-wonder",
      "JobBench": "https://dev.meta.ai/models/muse-wonder",
      "OSWorld V2.1 (partial)": "https://dev.meta.ai/models/muse-wonder",
      "OSWorld V2.1 (binary)": "https://dev.meta.ai/models/muse-wonder",
      "MemoryBench": "https://dev.meta.ai/models/muse-wonder",
      "DeepSWE 1.1": "https://dev.meta.ai/models/muse-wonder",
      "SWE-Marathon": "https://dev.meta.ai/models/muse-wonder",
      "ProgramBench": "https://dev.meta.ai/models/muse-wonder"
    },
    "benchmark_note": "Meta 공식 모델 페이지(dev.meta.ai/models/muse-wonder)의 max effort 열 값입니다. 같은 표에서 결과 출처가 Artificial Analysis인 Harvey LAB-AA · AutomationBench-AA · Terminal-Bench 4.0-AA와 AA Intelligence Index, 그리고 Elo 척도인 AA 계열 지표는 제3자·비% 지표라 점수표에서 제외했습니다. Personal Superintelligence Index는 Meta 내부 7개 평가 합성 지수, MemoryBench·FocusBench는 Meta 자체 벤치마크이며, DeepSWE 1.1은 Datacurve·SWE-Marathon은 Abundant AI의 제3자 실행 결과를 Meta가 인용한 값입니다.",
    "official_id": "muse-wonder-1.0",
    "official_sources": [
      {
        "label": "공식 벤치마크 표 (모델 페이지)",
        "url": "https://dev.meta.ai/models/muse-wonder"
      },
      {
        "label": "공식 모델 카드 (출시일·모달리티·안전 평가)",
        "url": "https://research.meta.ai/static/muse-wonder-model-card"
      },
      {
        "label": "공식 발표문",
        "url": "https://research.meta.ai/blog/muse-wonder"
      },
      {
        "label": "공식 모델 문서 (변형·모델 ID·가용성)",
        "url": "https://dev.meta.ai/docs/models"
      }
    ],
    "release_date_source": "https://research.meta.ai/static/muse-wonder-model-card",
    "parameter_source": "https://research.meta.ai/static/muse-wonder-model-card",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-15",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-216",
    "name": "Muse Wonder Full",
    "date": "2026-10-12",
    "sortDate": "2026-10-12",
    "month": "2026-10",
    "monthName": "October",
    "company": "Meta",
    "family": "Muse Wonder",
    "type": "MLLM",
    "category": "MLLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "호스팅 멀티모달 에이전트 모델(Muse Wonder의 상위 변형) — 같은 시스템 카드·모달리티·1M 컨텍스트를 공유하고 추론 량을 더 쓴다. Meta는 Muse Wonder Full이 Muse Spark 1.3 추세선보다 out-of-distribution 과제에서 더 높은 성능을 낸다고 서술",
    "modalities": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "focus": [
      "agentic coding",
      "long-running agents",
      "computer use",
      "SOTA coding benchmark",
      "frontier reasoning"
    ],
    "open_weights": false,
    "license": "Proprietary (Muse Code subscription)",
    "context": "1,048,576 (1M)",
    "languages": "다국어 학습 데이터(지원 언어 목록은 미기재)",
    "variants": [
      "muse-wonder-full-1.0"
    ],
    "reasoning_effort": [
      "max (벤치마크 공개 기준)"
    ],
    "availability": "Muse Code 구독 전용 — Power Usage($50/월)·Maximum Usage($200/월) 플랜. Model API pay-as-you-go에는 제공되지 않음",
    "note": "2026-10-12 Meta Superintelligence Labs가 공개한 첫 프론티어급 모델(Muse Wonder 시리즈 자체는 API·Muse Code 출시 당일부터 사용 가능). Muse Spark보다 큰 베이스에 프리트레이닝·RL을 확장했고, gigawatt 규모 Prometheus 데이터센터에서 학습했습니다. Active Memory(대화 간 핵심 컨텍스트 유지·능동 검색)와 Active Focus(블로커를 통과하며 목표를 지속 추진)를 내세우며, 최대 몇 시간짜리 장기 에이전트 실행·서브에이전트 오케스트레이션·컴퓨터 유스를 지원합니다. 시스템 카드의 안전 평가는 별도 보고서로 공개됐습니다(Muse Wonder Full 기준 CyberGym 88.4% · ExploitBench 58.9% · BioTIER 영어·다국어 98.7% · MASK 87.3% 등). 파라미터 수는 1차 자료 어디에도 인쇄돼 있지 않아 정확한 수치 미공개로 둡니다. Muse Wonder Full은 Model API로 제공되지 않아 서드파티 게이트웨이에서도 호출할 수 없고, 벤치마크는 전부 xhigh~max effort 조건으로 공개됐습니다.",
    "benchmarks": {
      "Personal Superintelligence Index": 59.1,
      "Vals Finance Agent V2": 59.1,
      "HealthBench Pro": 62.3,
      "GDP.pdf": 33.2,
      "JobBench": 75.3,
      "OSWorld V2.1 (partial)": 78.4,
      "OSWorld V2.1 (binary)": 39.4,
      "MemoryBench": 85.5,
      "DeepSWE 1.1": 79.0,
      "SWE-Marathon": 57.5,
      "ProgramBench": 59.0
    },
    "benchmark_sources": {
      "Personal Superintelligence Index": "https://dev.meta.ai/models/muse-wonder",
      "Vals Finance Agent V2": "https://dev.meta.ai/models/muse-wonder",
      "HealthBench Pro": "https://dev.meta.ai/models/muse-wonder",
      "GDP.pdf": "https://dev.meta.ai/models/muse-wonder",
      "JobBench": "https://dev.meta.ai/models/muse-wonder",
      "OSWorld V2.1 (partial)": "https://dev.meta.ai/models/muse-wonder",
      "OSWorld V2.1 (binary)": "https://dev.meta.ai/models/muse-wonder",
      "MemoryBench": "https://dev.meta.ai/models/muse-wonder",
      "DeepSWE 1.1": "https://dev.meta.ai/models/muse-wonder",
      "SWE-Marathon": "https://dev.meta.ai/models/muse-wonder",
      "ProgramBench": "https://dev.meta.ai/models/muse-wonder"
    },
    "benchmark_note": "Meta 공식 모델 페이지(dev.meta.ai/models/muse-wonder)의 max effort 열 값입니다. 같은 표에서 결과 출처가 Artificial Analysis인 Harvey LAB-AA · AutomationBench-AA · Terminal-Bench 4.0-AA와 AA Intelligence Index, 그리고 Elo 척도인 AA 계열 지표는 제3자·비% 지표라 점수표에서 제외했습니다. Personal Superintelligence Index는 Meta 내부 7개 평가 합성 지수, MemoryBench·FocusBench는 Meta 자체 벤치마크이며, DeepSWE 1.1은 Datacurve·SWE-Marathon은 Abundant AI의 제3자 실행 결과를 Meta가 인용한 값입니다.",
    "official_id": "muse-wonder-full-1.0",
    "official_sources": [
      {
        "label": "공식 벤치마크 표 (모델 페이지)",
        "url": "https://dev.meta.ai/models/muse-wonder"
      },
      {
        "label": "공식 모델 카드 (출시일·모달리티·안전 평가)",
        "url": "https://research.meta.ai/static/muse-wonder-model-card"
      },
      {
        "label": "공식 발표문",
        "url": "https://research.meta.ai/blog/muse-wonder"
      },
      {
        "label": "공식 모델 문서 (변형·모델 ID·가용성)",
        "url": "https://dev.meta.ai/docs/models"
      }
    ],
    "release_date_source": "https://research.meta.ai/static/muse-wonder-model-card",
    "parameter_source": "https://research.meta.ai/static/muse-wonder-model-card",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-15",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-217",
    "name": "Nemotron 3.5 Super VL",
    "date": "2026-10-15",
    "sortDate": "2026-10-15",
    "month": "2026-10",
    "monthName": "October",
    "company": "NVIDIA",
    "family": "Nemotron",
    "type": "MLLM / VLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "120B total / 12B active (sparse MoE; MoE층당 512 routed experts)",
    "parameter_status": "verified",
    "architecture": "Mamba-2–Transformer 하이브리드 MoE + C-RADIO vision encoder + vision-language connector. Multi-Token Prediction(MTP) 내장 추측 디코딩. Nemotron 3 Super Base 초기화 후 Nemotron 3 Ultra Base에서 1T 토큰 증류(SkewReverse loss), 이후 10B Indic continued pretraining + 35B 토큰 1M 컨텍스트 확장 + 67B 토큰 소프트웨어 엔지니어링 mid-training(256K). 2단계 SFT + multi-teacher on-policy distillation(MOPD) + MTP boosting 후학습.",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "always-on specialized agents",
      "document intelligence",
      "agentic coding",
      "web research",
      "video understanding",
      "Indic languages"
    ],
    "open_weights": true,
    "license": "OpenMDW-1.1",
    "context": "1M (프롬프트·시각 입력·대화·툴 결과·응답이 공유하는 단일 창)",
    "languages": "영어 중심 + Indic 10B 토큰 continued pretraining(12개 언어 부분집합), 19개 자연어·43개 프로그래밍 언어 코퍼스",
    "variants": [
      "BF16 (Nemotron-3.5-Super-VL-120B-A12B-BF16)",
      "NVFP4 (…-A12B-NVFP4, QAD)','Base-BF16 (…-Base-BF16)",
      "NVFP4-LiLiCorr drafter"
    ],
    "reasoning_effort": [
      "off",
      "on (medium)",
      "on"
    ],
    "availability": "Hugging Face·OpenRouter·ModelScope·NVIDIA NIM 공개, Baseten day-1 지원. vLLM(4×H100 또는 2×GB200)·SGLang(2×GB200) 레시피 공개, NVIDIA Dynamo KV-aware 라우팅 시 16×B200에서 8× 사용자 처리·first-token 지연 85% 감소(공식 기준)",
    "note": "Nemotron 3.5 세대의 첫 비전-언어 모델. Nemotron Coalition 협업 모델로 약 26T 토큰 사전학습 + 약 380만 샘플 포스트트레이닝·수십 개 RL 환경. NVIDIA는 약 1/5 파라미터로 최대 추론 모델급 정확도와 5× 빠른 throughput을 동시에 달성한 '특화 에이전트용' 모델이라 소개. 문서 이해(차트·표·PDF·OCR)와 웹 리서치·코딩·사이버보안·동영상 이해가 목적. AI4Bharat(IIT Madras)과 함께 만든 22개 인도 언어 2.8T 토큰 코퍼스를 같은 그룹에서 공개하고 Indic 벤치마크 5종(MILU 1.5·Indic GPQA·AIME·FrontierMath·MBPP) 결과를 제공했습니다. Hermes Bench 63.44%·LangChain Evals 87.05%에서 Nemotron 3 Ultra(56.33%·84.3%)를 상회.",
    "benchmarks": {
      "GPQA-Diamond": 89.52,
      "HLE, text-only": 31.79,
      "MMLU-ProX": 76.91,
      "CritPt": 10.86,
      "APEX shortlist": 88.36,
      "LiveCodeBench v6": 88.22,
      "SciCode, subtask": 47.13,
      "GraphWalks": 89.71,
      "IFBench": 70.86,
      "WMT24++": 84.8,
      "tau2-bench retail": 69.24,
      "tau2-bench airline": 76.5,
      "tau2-bench telecom": 73.19,
      "tau3-bench banking": 18.88,
      "BrowseComp": 78.0,
      "BrowseComp [offline]": 78.0,
      "SWE-bench Verified": 71.1,
      "SWE-bench Multilingual": 67.72,
      "SWE-bench Pro": 51.78,
      "Terminal-Bench 2.1": 60.67,
      "BabyVision": 29.6,
      "MMLongBench-Doc": 62.82,
      "V*": 85.6,
      "OCR-Reasoning": 65.08,
      "MathVision": 78.16,
      "HLE, full set": 29.2,
      "OCRBench v2, EN": 68.12,
      "OCRBench v2, ZH": 59.15,
      "CharXiv reasoning": 80.82,
      "Video-MME v2": 32.85,
      "OSWorld-Verified": 51.14,
      "WebVoyager [offline]": 77.72,
      "AutomationBench-AA [offline]": 32.44,
      "GDP.pdf [offline]": 6.6,
      "Terminal Bench 4 [offline]": 1.0,
      "DeepSWE [offline]": 24.65
    },
    "benchmark_sources": {
      "GPQA-Diamond": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "HLE, text-only": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "MMLU-ProX": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "CritPt": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "APEX shortlist": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "LiveCodeBench v6": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "SciCode, subtask": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "GraphWalks": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "IFBench": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "WMT24++": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "tau2-bench retail": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "tau2-bench airline": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "tau2-bench telecom": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "tau3-bench banking": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "BrowseComp": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "BrowseComp [offline]": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "SWE-bench Verified": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "SWE-bench Multilingual": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "SWE-bench Pro": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "Terminal-Bench 2.1": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "BabyVision": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "MMLongBench-Doc": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "V*": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "OCR-Reasoning": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "MathVision": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "HLE, full set": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "OCRBench v2, EN": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "OCRBench v2, ZH": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "CharXiv reasoning": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "Video-MME v2": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "OSWorld-Verified": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "WebVoyager [offline]": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "AutomationBench-AA [offline]": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "GDP.pdf [offline]": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "Terminal Bench 4 [offline]": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
      "DeepSWE [offline]": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16"
    },
    "benchmark_note": "Hugging Face 공식 모델 카드 'Nemotron 3.5 SuperGA BF16' 열 값(NVIDIA NeMo Gym 실행 결과, 레시피 공개). 같은 표의 AA-Omniscience 3종·AA-LCR v1.1 68.62·GDPval-AA v2 1211(AA 결과 출처·Elo 척도)과 LMArena v3 proxy 52.67(Arena 금어)은 점수표에서 제외. CharXiv reasoning 84.0(코드 인터프리터 병용)은 NVIDIA 공식 기술 블로그 본문 수치이며 Benckmark 출처를 기술 블로그 URL로 지정. BrowseComp [offline]·WebVoyager [offline]·GDP.pdf [offline]·DeepSWE [offline]는 카드에 인쇄된 NeMo Gym 오프라인 표 값입니다.",
    "official_id": "nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
    "official_sources": [
      {
        "label": "공식 발표문",
        "url": "https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/"
      },
      {
        "label": "공식 모델 카드 (BF16, 벤치마크 전체 표)",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16"
      },
      {
        "label": "공식 모델 카드 (NVFP4)",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4"
      },
      {
        "label": "공식 기술 블로그 (아키텍처·학습·CharXiv·Hermes/LangChain 표)",
        "url": "https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/"
      }
    ],
    "release_date_source": "https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/",
    "parameter_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-218",
    "name": "Nemotron 3.5 Bolt 74B-A9B 24GB",
    "date": "2026-10-15",
    "sortDate": "2026-10-15",
    "month": "2026-10",
    "monthName": "October",
    "company": "NVIDIA",
    "family": "Nemotron",
    "type": "MLLM / VLM (edge)",
    "category": "MLLM",
    "status": "GA",
    "parameters": "74B total / 9B active (sparse MoE · IQ2 2비트 양자화 24GB packed)",
    "parameter_status": "verified",
    "architecture": "Mamba-2–Transformer hybrid Latent MoE(MoE 블록당 routed+shared expert IQ2-XXS 2.06bit/param) + C-RADIO v4-H vision encoder. Nemotron 3.5 Super VL 120B-A12B를 Star Elastic 라우터 guided 아키텍처 탐색·압축(expert top-K 22→9), 24GB 메모리 목표. LiLiCorr 병렬 추측 디코딩 drafter 포함(DFlash 기반 7개 token)",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "on-device agentic workloads",
      "local coding",
      "web browsing",
      "terminal use"
    ],
    "open_weights": true,
    "license": "OpenMDW-1.1",
    "context": "256K",
    "languages": "영어·코드 중심, 스페인어·프랑스어·독일어·이탈리아어·일본어 추가 지원",
    "variants": [
      "Nemotron-3.5-Bolt-74B-A9B-24GB (IQ2 24GB packed)",
      "Nemotron-3.5-Bolt-74B-A9B-BF16",
      "Nemotron-3.5-Bolt-74B-A9B-24GB-GGUF",
      "Nemotron-3.5-Bolt-74B-A9B-24GB-LiLiCorr(drafter)"
    ],
    "reasoning_effort": [
      "off (enable_thinking=False)",
      "on (enable_thinking=True)"
    ],
    "availability": "Hugging Face(IQ2·BF16·GGUF·LiLiCorr) 개방 가중치, llama.cpp·Ollama(v0.40.5)·LM Studio·Unsloth·vLLM day-1 지원. NVIDIA RTX Spark 노트북(10/16 정식 출시)·GeForce RTX PC·DGX Spark·DGX Station·RTX PRO 워크스테이션 겨냥",
    "note": "Nemotron 3.5 세대의 첫 엣지 모델. 2비트 네이티브 양자화로 24GB에 맞춰 다른 앱과 병행 실행을 겨냥. 블로그는 PinchBench 오픈 모델 1위, BrowseComp 오픈 모델 2위를 주장합니다. 같은 발표문은 또 다른 엣지 모델 Bolt E4B 4GB를 10/23로 예고했고, 발표 시점 아직 미공개라 미수록. 별도 카드의 발표문 표기 'Bolt E4B 4GB — coming Oct. 23'가 원장 메모로 남습니다.",
    "benchmarks": {
      "GDPVal-AA-V2": 28.47,
      "Terminal-Bench 2.1": 50.98,
      "Tau3 Banking": 17.01,
      "HLE (no tools)": 25.3,
      "AA-Omniscience accuracy": 16.9,
      "SciCode": 41.02,
      "GPQA Diamond": 86.43,
      "AA-LCR": 64.06,
      "AA-Omniscience non-hallucination": 61.27,
      "PinchBench": 87.82,
      "MCP-Atlas": 52.2,
      "BrowseComp": 66.75,
      "WebArena (vision)": 50.86
    },
    "benchmark_sources": {
      "GDPVal-AA-V2": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "Terminal-Bench 2.1": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "Tau3 Banking": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "HLE (no tools)": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "AA-Omniscience accuracy": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "SciCode": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "GPQA Diamond": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "AA-LCR": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "AA-Omniscience non-hallucination": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "PinchBench": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "MCP-Atlas": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "BrowseComp": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
      "WebArena (vision)": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB"
    },
    "benchmark_note": "Hugging Face 공식 모델 카드 'Nemotron 3.5 Bolt 74B-A9B-24GB (IQ2)' 열 값. GDPVal-AA·AA-LCR·AA-Omniscience는 제3자(Artificial Analysis) 결과출처지만 이 모델이 공개한 유일한 % 점수 표로 만점 기준(0–100%)을 만족해 수록 — Step 5 Preview와 같은 'AA 표 열의 %값' 기록 성격. MCP-Atlas는 카드 주석 대로 공개 500 태스크 부분집합 측정치. WebArena (vision)는 고정 평가 스위트로 Arena 금어 대상 아님을 명시적으로 허용해 ALLOWED_BENCHMARK_NAMES에 등록했습니다.",
    "official_id": "nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
    "official_sources": [
      {
        "label": "공식 발표문",
        "url": "https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB"
      }
    ],
    "release_date_source": "https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/",
    "parameter_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-219",
    "name": "Muse Spark Open",
    "date": "2026-10-15",
    "sortDate": "2026-10-15",
    "month": "2026-10",
    "monthName": "October",
    "company": "Meta",
    "family": "Muse Spark",
    "type": "MLLM (open-weight)",
    "category": "MLLM",
    "status": "GA",
    "parameters": "816B total / 42B active (sparse MoE, 256 experts 중 top-8)",
    "parameter_status": "verified",
    "architecture": "62층 MoE Transformer + 1.8B Perception Encoder(50층·1536 hidden·16 heads·14×14 patch·4096 output dim). untied 입력/출력 임베딩 각 약 1.66B(어휘 202,048×8192), Q 128 / KV 16 heads(GQA), head dim 64, gated attention + QK-norm, 스파스 attention(4층 간격+마지막 층만 full). Muse Spark 1.3과 동일 베이스 + 오픈웨이트 배포용 추가 안전 포스트트레이닝",
    "modalities": [
      "text",
      "image",
      "video",
      "audio"
    ],
    "focus": [
      "long-horizon coding",
      "agentic software engineering",
      "multi-step reasoning",
      "tool use",
      "synthetic data generation",
      "LLM-as-a-judge"
    ],
    "open_weights": true,
    "license": "Muse Model License (제한적 상업 조건 — $20M 초과 MaaS는 별도 계약, 'Built with Muse Spark Open' 표시 의무)",
    "context": "1M (입출력 통합 1,048,576 토큰)",
    "languages": "다국어(공식 카드: 100개 이상 언어의 학습 데이터)",
    "variants": [
      "Muse-Spark-Open-816B-A42B (BF16)",
      "Muse-Spark-Open-816B-A42B-NVFP4",
      "oQ 3-비트·4-비트 (oMLX)"
    ],
    "reasoning_effort": [
      "low",
      "medium",
      "high",
      "xhigh (기본값)"
    ],
    "availability": "Hugging Face 개방 가중치(BF16·NVFP4, 2TB/700GB VRAM 요구 — 카드 명시), API: Baseten·Fireworks AI·Groq·Modal·Nebius·OpenRouter·Together AI. 가중치 판매처: Amazon SageMaker·Google Cloud Model Garden·Microsoft Foundry Models. 2대의 Apple M5 Ultra Mac Studio에서 MLX로 데스크톱 구동(공식), SGLang(자동튜닝 Helion 커널 1.03–3.95×)·vLLM·TensorRT-LLM·HF Transformers·llama.cpp·Unsloth 지원",
    "note": "Meta의 첫 오픈웨이트 모델 — 리서치 블로그가 '미국 최고 성능 오픈웨이트 모델'이라 발표. 816B-A42B MoE이며 최초로 2대의 Apple M5 Ultra Mac Studio(각 512GB 통합 메모리, MLX)에서 데스크톱 구동이 가능하다고 주장. Muse Spark 1.3과 같은 베이스에 오픈웨이트 배포용 추가 안전 포스트트레이닝을 실시했고, Meta Superintelligence Scaling Framework 평가를 같은 카드에 기록. PyTorch 공식 블로그가 Helion GPU 커널(1.03–3.95× 커널 속도)과 TorchTitan 커스터마이징 가이드를 배포하며 런칭에 참여.",
    "benchmarks": {
      "JobBench": 61.8,
      "MCP-Atlas": 89.2,
      "OSWorld Verified": 80.4,
      "Toolathlon Verified": 72.8,
      "HLE-Diamond (no tools)": 26.1,
      "SciCode": 58.5,
      "HLE (w/ tools)": 61.0,
      "GPQA Diamond": 89.0,
      "DeepSWE 1.1": 60.0,
      "SWE-Atlas-QnA": 58.0,
      "Terminal-Bench 2.1": 76.4,
      "ZeroBench (w/ tools)": 50.0,
      "BabyVision (w/ tools)": 80.2,
      "SimpleVQA (w/ tools)": 73.6,
      "WorldVQA (w/ tools)": 49.4,
      "IntPhys2": 68.3,
      "VideoMMEv2": 61.5
    },
    "benchmark_sources": {
      "JobBench": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "MCP-Atlas": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "OSWorld Verified": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "Toolathlon Verified": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "HLE-Diamond (no tools)": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "SciCode": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "HLE (w/ tools)": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "GPQA Diamond": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "DeepSWE 1.1": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "SWE-Atlas-QnA": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "Terminal-Bench 2.1": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "ZeroBench (w/ tools)": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "BabyVision (w/ tools)": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "SimpleVQA (w/ tools)": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "WorldVQA (w/ tools)": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "IntPhys2": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
      "VideoMMEv2": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B"
    },
    "benchmark_note": "HF 공식 모델 카드 'Muse Spark Open (xhigh)' 열 값. 같은 표의 AA Intelligence Index 39·GDPval-AA v2 1401·AA Omniscience 25는 제3자 지표라 제외. StrongREJECT v2(adaptive)·FORTRESS adversarial(ARS/ORS, 낮을수록 좋음)은 성능 점수 표에 넣지 않고 감사 메모로 유지; 카드가 명시한 거부율(내부 사이버 jailbreak 99.2%·BioTIER 98% 이상·MASK honesty 98.1%·Agentic Misalignment 0%)도 % 점수가 아닌 안전 평가 서술로만 남겼습니다.",
    "official_id": "meta-models/Muse-Spark-Open-816B-A42B",
    "official_sources": [
      {
        "label": "Meta AI Research 공식 발표문",
        "url": "https://research.meta.ai/blog/muse-spark-open"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B"
      },
      {
        "label": "Hugging Face 공식 블로그 (MLX·oQ·처음 데스크톱 공개)",
        "url": "https://huggingface.co/blog/meta-muse-spark-open"
      },
      {
        "label": "PyTorch 공식 블로그 (배포·Helion 커널)",
        "url": "https://pytorch.org/blog/muse-spark-open/"
      }
    ],
    "release_date_source": "https://research.meta.ai/blog/muse-spark-open",
    "parameter_source": "https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-220",
    "name": "LFM2.5-24B-A2B",
    "date": "2026-10-13",
    "sortDate": "2026-10-13",
    "month": "2026-10",
    "monthName": "October",
    "company": "Liquid AI",
    "family": "LFM2.5",
    "type": "LLM / on-device agent",
    "category": "LLM",
    "status": "GA",
    "parameters": "24.0B total / 2.45B active (sparse MoE, 블록당 64 experts top-4)",
    "parameter_status": "verified",
    "architecture": "40층 하이브리드(30 double-gated short convolution + 10 GQA) MoE. in-place tokenizer 확장(어휘 65K→128K), 32,768→131,072 컨텍스트 확장. 사전학습 17T→33T 토큰. LFM2.5 세대에 reasoning-only 모델로 전환(항상 thinking). 5단계 후학습: SFT → teacher specialization → 비에이전틱/에이전틱 Multi-Domain On-Policy Distillation → OpenClaw·Hermes Agent·Pi·OpenCode 하네스 안에서 Agentic RL",
    "modalities": [
      "text"
    ],
    "focus": [
      "on-device agents",
      "tool use",
      "multi-step reasoning",
      "instruction following"
    ],
    "open_weights": true,
    "license": "LFM Open License v1.0",
    "context": "131,072",
    "languages": "영어·아랍어·중국어·프랑스어·독일어·이탈리아어·일본어·한국어·포르투갈어·스페인어·베트남어·태국어·인도네시아어·힌디어·러시아어·폴란드어",
    "variants": [
      "LFM2.5-24B-A2B (post-trained)",
      "LFM2.5-24B-A2B-Base",
      "LFM2.5-24B-A2B-FP8",
      "LFM2.5-24B-A2B-GGUF",
      "LFM2.5-24B-A2B-ONNX",
      "LFM2.5-24B-A2B-MLX-4bit"
    ],
    "reasoning_effort": [
      "항상 thinking 모델(reasoning 비활성화 불가)"
    ],
    "availability": "Hugging Face 개방 가중치, llama.cpp·MLX·vLLM·SGLang·ONNX day-1 지원, Liquid Console API($0.10/$1.00 per 1M)·OpenRouter. Apple M5 Max에서 184 tok/s, NVIDIA B300에서 21K+ tok/s(공식)",
    "note": "Liquid AI가 10/13 공개한 LFM2.5 패밀리의 최대·마지막 모델. 토큰당 2.45B만 활성화해 온디바이스 에이전트 추론 속도(Apple M5 Max 184 tok/s)를 내는 것이 목표. HF 리포 createdAt은 2026-10-12T05:35:46Z로 관찰됐고, Liquid 공식 블로그가 발표문 상단에서 'Today, we release' 10/13 출시를 서술해 10/13을 기록했습니다. 카드에 reward-hacking 사례(학습 중 모델이 샌드박스 자체를 탐지하고 git history·PyPI·HF 검색으로 답을 찾던 행동)도 함께 공개했고, 이를 막기 위해 이후 평가를 밀봉 환경(sealed environments)에서 수행했다고 명시.",
    "benchmarks": {
      "AutomationBench": 27.69,
      "BFCLv4": 65.01,
      "ToolSandbox": 80.71,
      "LiveClaw": 48.09,
      "PinchBench": 83.18,
      "τ³-Bench Banking": 8.04,
      "WebArena Verified": 26.75,
      "GPQA Diamond": 74.42,
      "HLE": 7.4,
      "IFEval": 96.75,
      "IFBench": 74.69,
      "Multi-IF": 84.38,
      "MATH-500": 96.04,
      "SWE-Bench Verified (OpenCode)": 51.0,
      "SciCode": 32.71
    },
    "benchmark_sources": {
      "AutomationBench": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "BFCLv4": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "ToolSandbox": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "LiveClaw": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "PinchBench": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "τ³-Bench Banking": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "WebArena Verified": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "GPQA Diamond": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "HLE": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "IFEval": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "IFBench": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "Multi-IF": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "MATH-500": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "SWE-Bench Verified (OpenCode)": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
      "SciCode": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B"
    },
    "benchmark_note": "Hugging Face 공식 모델 카드 'LFM2.5-24B-A2B' 열 값(Liquid AI 내부 Pipette 인프라에서 vLLM으로 수집. 카드 명시). AA-Omniscience -24.90은 Artificial Analysis 지표이면서 음수 척도(0–100 % 밖)라 제외하고 나머지 15개 벤치마크 수록. WebArena Verified·τ³-Bench Banking은 고정 평가 스위트/공식 프로토콜로 금어 대상 아님.",
    "official_id": "LiquidAI/LFM2.5-24B-A2B",
    "official_sources": [
      {
        "label": "Liquid AI 공식 발표문(벤치마크 표·아키텍처·가격)",
        "url": "https://www.liquid.ai/blog/lfm2-5-24b-a2b"
      },
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B"
      }
    ],
    "release_date_source": "https://www.liquid.ai/blog/lfm2-5-24b-a2b",
    "parameter_source": "https://huggingface.co/LiquidAI/LFM2.5-24B-A2B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-221",
    "name": "Jais-3-375B-A23B",
    "date": "2026-10-15",
    "sortDate": "2026-10-15",
    "month": "2026-10",
    "monthName": "October",
    "company": "Institute of Foundation Models",
    "family": "Jais",
    "type": "LLM (Arabic-native agentic)",
    "category": "LLM",
    "status": "GA",
    "parameters": "375B total / 23B active (sparse MoE)",
    "parameter_status": "verified",
    "architecture": "K2 Horizon 플릿(9/3 수록)과 동일 모델·어휘·학습법을 아랍어·영어로 이전한 첫 언어 특화 적응 — sparse MoE, 512K 컨텍스트, k2_horizon reasoning·tool-call 파서",
    "modalities": [
      "text"
    ],
    "focus": [
      "Arabic agentic AI",
      "Arabic speech/writing understanding",
      "22 dialects",
      "tool use"
    ],
    "open_weights": true,
    "license": "Apache 2.0 (K2 Horizon과 동일, 공식 카드 metadata)",
    "context": "524,288 (512K) — IFM이 'longest of any Arabic-native model'로 소개",
    "languages": "아랍어(현대표준어·방언) + 영어",
    "variants": [
      "BF16 (inception42/Jais-3-375B-A23B)",
      "FP8 (IFM/Jais-3-375B-A23B-FP8)"
    ],
    "reasoning_effort": [
      "high (기본 권장)",
      "low(연구용, 비권장)"
    ],
    "availability": "Hugging Face(IFM·inception42 조직) Apache 2.0 공개, vLLM(v0.30.0+)·SGLang(0.5.20+) 레시피 공개, 16×H100(2노드)/단일 8×H200 노드 배포 안내",
    "note": "IFM이 9/3 공개한 K2 Horizon 함대 6종을 아랍어 특화로 개량한 Jais 3 함대(10/15)의 플래그십. 나머지 크기대(0.9B·3.7B·7B·32B dense·MoVA-36B-A4B)는 같은 날 HF inception42 org에 공개됐지만 전체를 각 레코드로 넣지 않고 플래그십 하나만 활성 레코드로 대표 — 이 판정은 하단 원장에 기록. 카드의 IFM/Inception42 공동 감사 컬렉션(24개 아랍어 벤치마크) 중 33개 % 점수만 추출해 수록.",
    "benchmarks": {
      "Arabic MMLU": 89.3,
      "Belebele": 95.6,
      "AraSTEM": 95.5,
      "Arabic GSM8K": 86.8,
      "GATmath": 98.4,
      "MedAraBench": 89.5,
      "Arabic Legal (HELM)": 71.3,
      "IslamicQA": 90.2,
      "QIAS-1": 95.4,
      "QIAS-2": 87.7,
      "IslamicEval2025-1B": 82.3,
      "ArabCulture": 89.8,
      "AraDiCE-Culture": 87.7,
      "Dialectal Arabic MMLU": 89.6,
      "Dialect Identification (QADI)": 71.1,
      "Alyah": 87.6,
      "Arabic MMLU with diacritics": 88.2,
      "FannOrFlop-MCQ": 73.2,
      "Diacritization": 91.9,
      "Parsing": 97.7,
      "FLORES200+ (LLM-as-a-judge)": 91.9,
      "Arabic IFBench": 93.9,
      "Arabic IFEval": 77.7,
      "HalluScore": 70.9,
      "Terminal-Bench 2.1": 73.8,
      "GDPVal": 73.2,
      "MCPMark": 68.5,
      "WildClawBench (English text-only subset)": 50.4,
      "Apex-Agents (420 text-only subset)": 18.6,
      "GAIA v2 (Arabic)": 50.3,
      "Arabic File Processing": 64.1,
      "SWE-Bench Verified (Offline)": 70.2,
      "BrowseComp (Discard-all@95k)": 72.6
    },
    "benchmark_sources": {
      "Arabic MMLU": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Belebele": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "AraSTEM": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Arabic GSM8K": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "GATmath": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "MedAraBench": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Arabic Legal (HELM)": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "IslamicQA": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "QIAS-1": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "QIAS-2": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "IslamicEval2025-1B": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "ArabCulture": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "AraDiCE-Culture": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Dialectal Arabic MMLU": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Dialect Identification (QADI)": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Alyah": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Arabic MMLU with diacritics": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "FannOrFlop-MCQ": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Diacritization": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Parsing": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "FLORES200+ (LLM-as-a-judge)": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Arabic IFBench": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Arabic IFEval": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "HalluScore": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Terminal-Bench 2.1": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "GDPVal": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "MCPMark": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "WildClawBench (English text-only subset)": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Apex-Agents (420 text-only subset)": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "GAIA v2 (Arabic)": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "Arabic File Processing": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "SWE-Bench Verified (Offline)": "https://huggingface.co/inception42/Jais-3-375B-A23B",
      "BrowseComp (Discard-all@95k)": "https://huggingface.co/inception42/Jais-3-375B-A23B"
    },
    "benchmark_note": "Hugging Face 공식 모델 카드 'Jais-3-375B-A23B' 열의 파싱 결과(IFM/Arabic-Benchmark-Auditing 감사 컬렉션 기준). 같은 표의 AA-LCR (Ar) 77.0은 Artificial Analysis 지표로 제외. AraGen v3 (3C3H) 72.4와 Correctness/Completeness/Conciseness/Helpfulness/Honesty/Harmlessness 3항목 6행은 단일 % 점수가 아닌 자체 합성 3-열 조합(3C3H)이라 점수표에서 제외. SimpleQA Verified (Ar) 확인 31.2(합성 점수)/원장 메모로 처리, F-score·Non-hallucination rate·FLORES LLM-judge도 % 점수화 불가한 것은 제외.",
    "official_id": "inception42/Jais-3-375B-A23B",
    "official_sources": [
      {
        "label": "공식 모델 카드",
        "url": "https://huggingface.co/inception42/Jais-3-375B-A23B"
      },
      {
        "label": "IFM 공식 발표 블로그 (ifm.ai 봇 챌린지 — 브라우저 수동 확인)",
        "url": "https://ifm.ai/blog/jais3/"
      }
    ],
    "release_date_source": "https://ifm.ai/blog/jais3/",
    "parameter_source": "https://huggingface.co/inception42/Jais-3-375B-A23B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-222",
    "name": "Step 3.7 Flash",
    "date": "2026-05-29",
    "sortDate": "2026-05-29",
    "month": "2026-05",
    "monthName": "May",
    "company": "StepFun",
    "family": "Step",
    "type": "MLLM (agentic flash)",
    "category": "MLLM",
    "status": "GA",
    "parameters": "198B (196B 언어 backbone + 1.8B ViT), 토큰당 약 11B active",
    "parameter_status": "verified",
    "architecture": "196B sparse MoE 언어 백본 + 1.8B 비전 인코더 통합 MLLM(네이ティ브 이미지 이해), 256K 컨텍스트, 3단계 reasoning 수준(low·medium·high) 지원. Step 5 Preview 카드가 Step-3.7-Flash에서 Step 5로 직접 이동했다고 서술한 중간 세대 모델",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "agentic coding",
      "search tool orchestration",
      "workflow integrity",
      "GUI/visual agent",
      "code engineering"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "256K",
    "languages": "",
    "variants": [
      "FP8 (stepfun-ai/Step-3.7-Flash-FP8)",
      "NVFP4 (stepfun-ai/Step-3.7-Flash-NVFP4)",
      "GGUF (stepfun-ai/Step-3.7-Flash-GGUF)",
      "API step-3.7-flash"
    ],
    "reasoning_effort": [
      "low",
      "medium",
      "high"
    ],
    "availability": "StepFun Open Platform(step-3.7-flash, $0.20/$1.15 per 1M), Hugging Face·ModelScope 가중치, vLLM(사전빌드 Docker vllm/vllm-openai:stepfun37)·SGLang·OpenRouter·NVIDIA NIM 지원, Claude Code·KiloCode·Hermes Agent·OpenClaw 하네스 호환 + Advisor Mode",
    "note": "StepFun 중간 세대 모델로, StepFun 공식 모델 페이지가 2026-05-29를 발표일로 표기. Step 5 Preview 카드가 'Step 5 Preview는 Step-3.7-Flash에서 직접 이동했다'고 서술했으나 이번 감사까지 카탈로그에는 3.7 Flash가 없었습니다 — 중간 세대 공백을 소급 수록. HF 카드는 Apache 2.0으로 가중치(BF16/FP8/NVFP4/GGUF) 공개. 서치 루프·비주얼 이해·툴 파이프라인을 'Flash'급 토큰당 11B 파라미터로 수행하는 에이전트 특화 모델.",
    "benchmarks": {
      "SWE-Bench Pro": 56.3,
      "SimpleVQA (Search)": 79.2,
      "V* (Python)": 95.3,
      "ClawEval-1.1": 67.1,
      "Toolathlon": 49.5,
      "HLE w. tool": 47.2,
      "BrowseComp": 75.8,
      "Terminal-Bench 2.1": 59.6,
      "Step-SWE-Bench (Hermes Agent)": 67.5,
      "WorldVQA": 58.1,
      "BC-VL": 58.96
    },
    "benchmark_sources": {
      "SWE-Bench Pro": "https://static.stepfun.com/blog/step-3.7-flash/",
      "SimpleVQA (Search)": "https://static.stepfun.com/blog/step-3.7-flash/",
      "V* (Python)": "https://static.stepfun.com/blog/step-3.7-flash/",
      "ClawEval-1.1": "https://static.stepfun.com/blog/step-3.7-flash/",
      "Toolathlon": "https://static.stepfun.com/blog/step-3.7-flash/",
      "HLE w. tool": "https://static.stepfun.com/blog/step-3.7-flash/",
      "BrowseComp": "https://static.stepfun.com/blog/step-3.7-flash/",
      "Terminal-Bench 2.1": "https://static.stepfun.com/blog/step-3.7-flash/",
      "Step-SWE-Bench (Hermes Agent)": "https://static.stepfun.com/blog/step-3.7-flash/",
      "WorldVQA": "https://static.stepfun.com/blog/step-3.7-flash/",
      "BC-VL": "https://static.stepfun.com/blog/step-3.7-flash/"
    },
    "benchmark_note": "StepFun 공식 모델 페이지 본문 수치. AA-LCR (avg@16/acc) 63.9와 DeepSearchQA·ResearchRubrics 등(페이지 표에 있으나 Artificial Analysis나 미공개 프로토콜 혼합)은 제외하되 본문에 인쇄된 개발사 자체 평가만 수록. WorldVQA·BC-VL는 Visual Recognition with Visual Search 표의 Step 3.7 Flash 값, Step-SWE-Bench는 개발사 내부 하네스 비교의 Hermes Agent 값.",
    "official_id": "stepfun-ai/Step-3.7-Flash",
    "official_sources": [
      {
        "label": "공식 모델 페이지 (발표일·아키텍처·벤치마크)",
        "url": "https://static.stepfun.com/blog/step-3.7-flash/"
      },
      {
        "label": "공식 모델 카드 (Hugging Face)",
        "url": "https://huggingface.co/stepfun-ai/Step-3.7-Flash"
      }
    ],
    "release_date_source": "https://static.stepfun.com/blog/step-3.7-flash/",
    "parameter_source": "https://huggingface.co/stepfun-ai/Step-3.7-Flash",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-223",
    "name": "MiniCPM-V 4.7 35B-A3B",
    "date": "2026-10-12",
    "sortDate": "2026-10-12",
    "month": "2026-10",
    "monthName": "October",
    "company": "OpenBMB",
    "family": "MiniCPM-V",
    "type": "MLLM / VLM (on-device MoE)",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B-A3B (시리즈 첫 MoE) + 1B 변형",
    "parameter_status": "verified",
    "architecture": "Lookahead Expert Scheduling(LES, 다음 층의 expert prefetch·스케줄) + 세 분해 양자화(fine-grained layer-wise) + DSpark 추측 샘플링. intra-ViT early compression(LLaVA-UHD v4 기반)과 혼합 4×/16× visual token 압축 지원",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "on-device multimodal",
      "on-device agentic",
      "visual token compression",
      "mobile deployment"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [
      "BF16",
      "FP8",
      "int4",
      "AWQ",
      "GPTQ",
      "GGUF",
      "1B 변형",
      "BF16·GGUF DSpark head"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face·ModelScope 공개, transformers serve HTTP server, SGLang·vLLM·llama.cpp·Ollama 지원",
    "note": "ModelBest·OpenBMB(씽후아·등의 온디바이스 시리즈)의 최초 MoE 모델(35B-A3B)과 소형 변형 1B, 각 모델마다 DSpark 추측 디코딩 헤드(BF16/GGUF)를 같은 날 공개. 공식 발표문이 '오픈소스 MoE 모델 중 최초로 온디바이스에서 성능 저하 없이 원활히 실행되는 모델'로 소개하며 성능–효율 Pareto 측면에서 Qwen3.6 35B-A3B보다 적은 추론 시간에 높은 종합 점수를 낸다고 주장합니다. iPhone 17 Pro Max에서 3GB 메모리·13+ tok/s 실행을 공식 주장. 2026-10-16 감사에서 신규 조직으로 편입.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 카드·GitHub README의 전체 벤치마크 표가 이미지(png)로만 제공되어 텍스트 % 수치가 인쇄되지 않았습니다 — 성능 근거는 Performance-efficiency Pareto frontier 그래프(Qwen3.6 35B-A3B 등 대비)로만 서술. % 점수 표가 공개되면 갱신할 예정입니다.",
    "official_id": "openbmb/MiniCPM-V-4.7-35B-A3B",
    "official_sources": [
      {
        "label": "공식 카드 (구성·온디바이스 정보)",
        "url": "https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B"
      },
      {
        "label": "OpenBMB 공식 GitHub README(출시일·변형 지원)",
        "url": "https://github.com/OpenBMB/MiniCPM-V"
      }
    ],
    "release_date_source": "https://github.com/OpenBMB/MiniCPM-V",
    "parameter_source": "https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-224",
    "name": "Grok Voice 3.0",
    "date": "2026-10-14",
    "sortDate": "2026-10-14",
    "month": "2026-10",
    "monthName": "October",
    "company": "xAI / SpaceXAI",
    "family": "Grok Voice",
    "type": "MLLM / omni (full-duplex speech-to-speech)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "full-duplex speech-to-speech 모델(입력 음성을 실시간으로 듣고 응답) — Tesla 차량 음성 에이전트와 Starlink 콜센터(하루 약 2만 통화, 70% 무인 해결)에 이미 배포돼 있습니다. 발표문이 ' customer support call 해결 신기록·1초 미만 대기 시간'을 내세웁니다.",
    "modalities": [
      "audio",
      "text"
    ],
    "focus": [
      "customer support S2S agents",
      "real-time voice agents",
      "low-latency voice"
    ],
    "open_weights": false,
    "license": "Proprietary (Voice Agent API)",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Voice Agent API($0.08/분, $4.80/시 — Grok Voice 2.0와 동일 요금, grok-voice-latest 모델 ID가 자동 전환)",
    "note": "xAI 공식 발표문이 '세계에서 가장 지능적인 speech-to-speech 모델'로 10/14 공개. 기존 Grok Voice 2.0(2026-09-19 감사에서 ASR 전용 Transcribe만 제외)과 다르게 GPT-Live-1(model-137)과 같은 full-duplex 음성 네이티브 생성 모델로 제품화돼 ASR/TTS-only 제외 규정에 들지 않는다고 판단, 옴니 계열로 수록. 발표문의 모든 성능 지표(AA Speech-to-Speech Index 86.9·Full Duplex Bench 97%·Speech Agent Arena Elo 1070·τ-Voice 71.6%·EVA-Bench 74%)는 Artificial Analysis·ServiceNow 측정으로 제3자 지표라 점수표에 넣을 수 없습니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 발표문이 개발사 자체 측정 % 점수를 하나도 인쇄하지 않았고, 제시된 모든 수치는 Artificial Analysis(제3자)·ServiceNow(EVA-Bench) 결과 — 감사 정책상 제3자 지표·Elo는 제외. % 점수가 개발사 자체 측정으로 공개되면 갱신.",
    "official_id": "grok-voice-3",
    "official_sources": [
      {
        "label": "공식 발표문",
        "url": "https://x.ai/news/grok-voice-3"
      }
    ],
    "release_date_source": "https://x.ai/news/grok-voice-3",
    "parameter_source": "https://x.ai/news/grok-voice-3",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-16",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-225",
    "name": "DeepSeek-V4.1-Flash-1017",
    "date": "2026-10-17",
    "sortDate": "2026-10-17",
    "month": "2026-10",
    "monthName": "October",
    "company": "DeepSeek",
    "family": "DeepSeek V4",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (1017 리비전 공식 카드에 총/활성 파라미터 별도 표기 없음 — V4.1-Flash 백본 계승)",
    "architecture": "CED 인과 인코더-디코더 MoE — V4.1-Flash와 동일 백본",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "에이전틱 코딩",
      "성능–비용 파레토 개선",
      "실행 시간·출력 길이 단축"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "1M (1,000,000)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "1-100 연속 조절(문자열 별칭 low 50 · high 75 · max 100, 기본 high)"
    ],
    "availability": "Hugging Face deepseek-ai/DeepSeek-V4.1-Flash-1017, DeepSeek API·웹·앱(모델명 deepseek-flash), deepseek-recipe 툴킷",
    "note": "V4.1-Flash(2026-09-10)의 1017 리비전 — 공식 표현은 minor update입니다. 같은 날 동일 모델명(deepseek-flash)의 서빙이 이 리비전으로 교체되고 웹·앱 모델도 함께 갱신됐으며(API 호출 방식·가격 불변), 공식 API에는 검색·fetch가 함께 열렸습니다. 구 리비전 대비 11개 공식 벤치마크가 개선된 파레토 개선판이라 0731·0813 스냅샷과 같은 기준(별도 공식 모델 ID + 신규 공식 점수)으로 별도 레코드로 수록했습니다 — 구 리비전은 model-152에 그대로 보존됩니다. 카드가 task execution time·output length 단축을 명시하며, 가중치는 MIT로 공개됐고 Jinja 채팅 템플릿 없이 encoding.py·deepseek-recipe를 사용합니다.",
    "benchmarks": {
      "HLE w/o tools": 42.6,
      "Terminal-Bench 4.0": 42.3,
      "DeepSWE v1.1": 77.0,
      "ProgramBench": 29.1,
      "NL2Repo-Bench": 68.2,
      "Automation-Bench v1.0.6": 60.5,
      "Agents' Last Exam": 35.4,
      "Apex Bench v1.1": 72.1,
      "Chartography (w/tools)": 83.0,
      "BabyVision (w/tools)": 92.5,
      "ZeroBench-main (w/tools)": 51.0
    },
    "official_id": "deepseek-ai/DeepSeek-V4.1-Flash-1017",
    "official_sources": [
      {
        "label": "공식 1차 출처",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017"
      },
      {
        "label": "공식 체인지로그(2026-10-17 리비전 업그레이드)",
        "url": "https://api-docs.deepseek.com/updates/"
      },
      {
        "label": "공식 프롬프트 인코딩 문서(reasoning effort 1-100)",
        "url": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/blob/main/encoding/README.md"
      }
    ],
    "release_date_source": "https://api-docs.deepseek.com/updates/",
    "parameter_source": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
    "benchmark_sources": {
      "HLE w/o tools": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "Terminal-Bench 4.0": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "DeepSWE v1.1": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "ProgramBench": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "NL2Repo-Bench": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "Automation-Bench v1.0.6": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "Agents' Last Exam": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "Apex Bench v1.1": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "Chartography (w/tools)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "BabyVision (w/tools)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "ZeroBench-main (w/tools)": "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017"
    },
    "benchmark_note": "공식 1017 카드의 DS-V4.1-Flash-1017 열 값입니다(11개). 같은 표에 병기된 개선 전 리비전 값은 HLE w/o tools 36.8, Terminal-Bench 4.0 31.2, DeepSWE v1.1 74.2, ProgramBench 20.3, NL2Repo-Bench 65.4, Automation-Bench v1.0.6 54.8, Agents' Last Exam 31.8, Apex Bench v1.1 64.6, Chartography 78.9, BabyVision 89.6, ZeroBench-main 49.0이며 구 리비전 레코드(model-152)에 보존돼 있습니다. HLE 괄호값 44.0†는 텍스트 전용 부분집합(구 리비전 39.1†)입니다. Terminal-Bench 4.0은 Claude Code 하니스, DeepSWE v1.1은 Mini-SWE-V2 하니스 측정입니다. 카드가 비교용으로 함께 인쇄한 제3자 모델(Kimi K3·GLM-5.3·GPT-5.6 Sol·Opus 5) 열은 인용하지 않았습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-17",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-226",
    "name": "Mercury 3",
    "date": "2026-10-19",
    "sortDate": "2026-10-19",
    "month": "2026-10",
    "monthName": "October",
    "company": "Inception Labs",
    "family": "Mercury",
    "type": "LLM (diffusion language model)",
    "category": "LLM",
    "status": "GA",
    "parameters": "정확한 수치 미공개 (Mercury 1 대비 40배 이상 규모)",
    "parameter_status": "undisclosed",
    "architecture": "텍스트 확산(diffusion) LLM — 자기회귀 토큰 생성 대신 병렬 diffusion 디코딩. Mercury 1 대비 40배 이상 큰 파라미터 규모, NVIDIA GPU에서 1,068 tok/s.",
    "modalities": [
      "text"
    ],
    "focus": [
      "low-latency agents",
      "voice/chat support",
      "real-time search",
      "data engineering"
    ],
    "open_weights": false,
    "license": "Proprietary (Inception API)",
    "context": "1M (1,000,000 tokens)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Inception API Platform, OpenRouter, Baseten, Vercel (OpenAI API 호환)",
    "note": "Inception Labs의 3세대 diffusion LLM. 발표문이 '지금까지 공개된 가장 강력한 diffusion 기반 LLM'으로 소개하며, Mercury 1보다 40배 이상 큰 규모로 확산 스케일링이 자기회귀 모델과 같은 스케일링 법칙을 따른다고 주장합니다. GPT-6 Luna·Claude Haiku 5.5와 비교해 4~8배 빠른 1,000+ tok/s를 내세우고, 1M 컨텍스트·$0.20/$0.70 per 1M(출시 50% 할인 $0.10/$0.35)을 공식 명시했습니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 발표문이 벤치마크를 차트 이미지로만 제시하고 % 수치 표를 인쇄하지 않아 빈 점수로 두었습니다. 속도(1,068 tok/s)·가격은 % 척도가 아니므로 점수표에서 제외했습니다.",
    "official_id": "mercury-3",
    "official_sources": [
      {
        "label": "Inception Labs 공식 발표문",
        "url": "https://www.inceptionlabs.ai/blog/introducing-mercury-3"
      },
      {
        "label": "Inception Labs 모델 페이지",
        "url": "https://www.inceptionlabs.ai/models"
      }
    ],
    "release_date_source": "https://www.inceptionlabs.ai/blog/introducing-mercury-3",
    "parameter_source": "https://www.inceptionlabs.ai/blog/introducing-mercury-3",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-227",
    "name": "MemT-1.0-Flash",
    "date": "2026-10-19",
    "sortDate": "2026-10-19",
    "month": "2026-10",
    "monthName": "October",
    "company": "MemTensor",
    "family": "MemT",
    "type": "LLM (memory-native foundation model)",
    "category": "LLM",
    "status": "GA",
    "parameters": "288B total / 17B activated (MoE)",
    "parameter_status": "verified",
    "architecture": "Native Memory Block(Local Memory + trainable Hyper Memory)와 Mixture-of-Storage(MoS)를 attention과 병렬로 실행하는 memory-native 아키텍처. Gated DeltaNet-2 기반 토큰 단위 메모리 업데이트, DeepSeek-V4-Flash 백본, 3.61B trainable memory·336M dynamic memory state.",
    "modalities": [
      "text"
    ],
    "focus": [
      "persistent memory",
      "personalization",
      "long-horizon agents",
      "agentic coding"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face(MemTensor), ModelScope, GitHub, MemOS/online demo",
    "note": "MemTensor의 memory-native foundation model 플래그십. 34B 토큰으로 continued pre-training + post-training한 2단계 학습, 128K history에서 full-context KV cache 대비 약 66배 저장 절감을 공식 보고했습니다. 기술 보고서(arXiv 2610.26825)는 11개 메모리 벤치마크에서 Flash·Nano가 평가된 parametric-memory 방법 중 각각 1·2위라고 서술합니다. Flash 가중치는 MIT, Nano는 Apache 2.0으로 공개됐으며 HF 저장소 생성일은 각각 10/17·10/15, 기술 보고서 v1은 10/19입니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "기술 보고서·모델 카드의 평가 결과가 그림(figure)으로만 제공되고 % 수치 표가 인쇄되지 않아 빈 점수로 두었습니다. 66× 저장 절감·1.86× 추론 가속은 % 성능 지표가 아니므로 점수표에서 제외했습니다.",
    "official_id": "MemTensor/MemT-1.0-Flash",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/MemTensor/MemT-1.0-Flash"
      },
      {
        "label": "공식 GitHub 저장소",
        "url": "https://github.com/MemTensor/MemT-1.0"
      },
      {
        "label": "기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2610.26825"
      },
      {
        "label": "MemTensor 공식 사이트",
        "url": "https://memt.memtensor.cn/"
      }
    ],
    "release_date_source": "https://arxiv.org/abs/2610.26825",
    "parameter_source": "https://github.com/MemTensor/MemT-1.0",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-228",
    "name": "MemT-1.0-Nano",
    "date": "2026-10-19",
    "sortDate": "2026-10-19",
    "month": "2026-10",
    "monthName": "October",
    "company": "MemTensor",
    "family": "MemT",
    "type": "LLM (memory-native foundation model)",
    "category": "LLM",
    "status": "GA",
    "parameters": "36B total / 3B activated (MoE)",
    "parameter_status": "verified",
    "architecture": "Native Memory Block(Local Memory + trainable Hyper Memory)와 Mixture-of-Storage(MoS)를 attention과 병렬로 실행하는 memory-native 아키텍처. Gated DeltaNet-2 기반 토큰 단위 메모리 업데이트, Qwen3.6-35B-A3B 백본, 451M trainable memory·10M dynamic memory state.",
    "modalities": [
      "text"
    ],
    "focus": [
      "persistent memory",
      "personalization",
      "on-device memory",
      "long-horizon agents"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Hugging Face(MemTensor), ModelScope, GitHub, MemOS/online demo",
    "note": "MemT-1.0 패밀리의 경량 모델. Qwen3.6-35B-A3B 백본에 native memory를 결합해 36B total/3B activated로 동작하며, 128K history에서 end-to-end 추론 약 1.86배 가속·full-context KV cache 대비 약 66배 저장 절감을 공식 보고했습니다. LoCoMo 대화 회상과 PerMemSafe 개인화 안전에서 강점을 내세우며 Apache 2.0으로 공개됐습니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "기술 보고서·모델 카드의 평가 결과가 그림(figure)으로만 제공되고 % 수치 표가 인쇄되지 않아 빈 점수로 두었습니다. 1.86× 추론 가속·66× 저장 절감은 % 성능 지표가 아니므로 점수표에서 제외했습니다.",
    "official_id": "MemTensor/MemT-1.0-Nano",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/MemTensor/MemT-1.0-Nano"
      },
      {
        "label": "공식 GitHub 저장소",
        "url": "https://github.com/MemTensor/MemT-1.0"
      },
      {
        "label": "기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2610.26825"
      },
      {
        "label": "MemTensor 공식 사이트",
        "url": "https://memt.memtensor.cn/"
      }
    ],
    "release_date_source": "https://arxiv.org/abs/2610.26825",
    "parameter_source": "https://github.com/MemTensor/MemT-1.0",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-229",
    "name": "Clairic",
    "date": "2026-10-19",
    "sortDate": "2026-10-19",
    "month": "2026-10",
    "monthName": "October",
    "company": "Cloudflare",
    "family": "Clairic",
    "type": "System One / structured extraction",
    "category": "LLM",
    "status": "Preview",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "단일 forward pass로 typed field를 디코딩하는 extraction 모델 — text/number/date/time/datetime/duration/list/estimate/forecast 타입, 최대 4개 이미지 입력, 필드가 한 pass에 들어가지 않으면 병렬 pass로 분할. 토큰을 생성하지 않음.",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "typed extraction",
      "estimation/forecasting",
      "structured output",
      "agent tooling"
    ],
    "open_weights": false,
    "license": "Proprietary (Workers AI preview; open weights 예고)",
    "context": "",
    "languages": "",
    "variants": [],
    "reasoning_effort": [],
    "availability": "Cloudflare Workers AI preview (@cf/cloudflare/clairic)",
    "note": "Cloudflare가 공개한 System One extraction model의 첫 사례. 기존 decision model(Clef)이 선택지 확률을 반환하는 것과 달리, Clairic은 입력에서 값을 추출·계산·추정·예측해 타입이 보장된 값과 confidence·p_null을 반환합니다. Workers AI에 프리뷰로 공개됐고 open weights는 추후 공개 예고입니다. 날짜가 확정되지 않은 값은 null로 반환하는 등 LLM식 환각을 구조적으로 줄이는 접근을 내세웁니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 발표문에 % 척도 벤치마크 표가 없고(정성 설명·예시 JSON만) Decision Index/JevBench 같은 수치도 인쇄되지 않아 빈 점수로 두었습니다.",
    "official_id": "clairic",
    "official_sources": [
      {
        "label": "Cloudflare 공식 블로그",
        "url": "https://blog.cloudflare.com/clairic-extraction-model/"
      },
      {
        "label": "Cloudflare Workers AI 체인지로그",
        "url": "https://developers.cloudflare.com/changelog/post/2026-10-19-clairic-workers-ai/"
      }
    ],
    "release_date_source": "https://blog.cloudflare.com/clairic-extraction-model/",
    "parameter_source": "https://blog.cloudflare.com/clairic-extraction-model/",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-230",
    "name": "H2O-Lightning-31B",
    "date": "2026-10-20",
    "sortDate": "2026-10-20",
    "month": "2026-10",
    "monthName": "October",
    "company": "H2O.ai",
    "family": "H2O-Lightning",
    "type": "System One / structured decision",
    "category": "LLM",
    "status": "GA",
    "parameters": "31B",
    "parameter_status": "verified",
    "architecture": "Gemma 4 31B IT 기반 decision model — choice/yes-no(noul)/score를 한 번의 forward pass·한 출력 토큰으로 반환. 레코드 텍스트와 최대 이미지 입력을 함께 읽고, vLLM 0.30.0 + shim으로 서빙. 131,072 컨텍스트, FP8/BF16.",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "typed decisions",
      "calibrated probabilities",
      "RAG/agent routing",
      "enterprise workflows"
    ],
    "open_weights": true,
    "license": "H2O Model Non-Commercial Licence v1.1 (비상업·비프로덕션)",
    "context": "131,072",
    "languages": "",
    "variants": [
      "FP8",
      "BF16"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face(gated; non-commercial licence), vLLM 0.30.0 + lightning_31b_shim",
    "note": "H2O.ai의 31B System One decision model. Gemma 4 31B IT를 기반으로 typed decision(choice·yes/no·score)과 이미지 입력을 지원하며, 131,072 토큰 컨텍스트에서 레코드를 통째로 읽습니다. 4B sibling(Apache 2.0)과 달리 H2O Model Non-Commercial Licence v1.1로 공개됐고, HF 저장소는 2026-10-20 생성·v1.0.7 카드 기준입니다. Decision Index·JevBench 수치는 0~100 지수/리더보드 원자료라 % 점수표에는 넣지 않았습니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 카드가 Decision Index(0~100 지수)와 JevBench 공개 문항 원자료(216/231 등)를 제시하지만 % 척도 점수표가 아니어서 빈 점수로 두었습니다. JevBench 보드 순위는 제3자 리더보드라 수록하지 않았습니다.",
    "official_id": "h2oai/h2o-lightning-31b",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/h2oai/h2o-lightning-31b"
      }
    ],
    "release_date_source": "https://huggingface.co/h2oai/h2o-lightning-31b",
    "parameter_source": "https://huggingface.co/h2oai/h2o-lightning-31b",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-231",
    "name": "Eleven Realtime v1 Max",
    "date": "2026-10-20",
    "sortDate": "2026-10-20",
    "month": "2026-10",
    "monthName": "October",
    "company": "ElevenLabs",
    "family": "Eleven Realtime",
    "type": "MLLM / omni (full-duplex speech-to-speech)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "음성 인식·턴테이킹·LLM·TTS를 end-to-end로 묶은 cascaded speech-to-speech 모델. Max는 응답 전에 추론(reasoning)하고 다단계 도구 호출을 수행. OpenAI Realtime API 호환 WebSocket.",
    "modalities": [
      "audio",
      "text"
    ],
    "focus": [
      "voice agents",
      "customer support",
      "multi-step tool use",
      "low-latency speech"
    ],
    "open_weights": false,
    "license": "Proprietary (ElevenLabs)",
    "context": "",
    "languages": "90+ languages (17,000+ voices)",
    "variants": [],
    "reasoning_effort": [],
    "availability": "ElevenAgents, Realtime API (OpenAI Realtime-compatible WebSocket)",
    "note": "ElevenLabs가 공개한 full-duplex speech-to-speech 모델 패밀리의 상위 모델. v1 Mini와 함께 2026-10-20 공개됐고, 90개 이상 언어·17,000개 이상 voice를 지원합니다. Max는 복잡한 지시·다단계 도구 호출을 위해 응답 전에 추론하며, 공식 문서는 Zero Retention Mode·HIPAA(US/EU)를 지원한다고 명시합니다. Grok Voice 3.0과 같은 full-duplex S2S 부류로 옴니 계열에 수록했습니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 발표문의 모든 수치가 Artificial Analysis의 독립 평가(Big Bench Audio 98.8%·Full-Duplex-Bench 94.1%)이거나 Speech Agent Arena Elo(998), 비% 지연(0.57s)이라 점수표에서 제외했습니다.",
    "official_id": "eleven_realtime_v1_max",
    "official_sources": [
      {
        "label": "ElevenLabs 공식 발표문",
        "url": "https://elevenlabs.io/blog/realtime"
      },
      {
        "label": "ElevenLabs Realtime 모델 문서",
        "url": "https://elevenlabs.io/docs/eleven-agents/customization/realtime-models"
      }
    ],
    "release_date_source": "https://elevenlabs.io/blog/realtime",
    "parameter_source": "https://elevenlabs.io/docs/eleven-agents/customization/realtime-models",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-232",
    "name": "Eleven Realtime v1 Mini",
    "date": "2026-10-20",
    "sortDate": "2026-10-20",
    "month": "2026-10",
    "monthName": "October",
    "company": "ElevenLabs",
    "family": "Eleven Realtime",
    "type": "MLLM / omni (full-duplex speech-to-speech)",
    "category": "Omni",
    "status": "GA",
    "parameters": "정확한 수치 미공개",
    "parameter_status": "undisclosed",
    "architecture": "음성 인식·턴테이킹·LLM·TTS를 end-to-end로 묶은 cascaded speech-to-speech 모델. Mini는 최저 지연·비용에 최적화. OpenAI Realtime API 호환 WebSocket.",
    "modalities": [
      "audio",
      "text"
    ],
    "focus": [
      "voice agents",
      "assistants/tutors",
      "low-latency speech",
      "low cost"
    ],
    "open_weights": false,
    "license": "Proprietary (ElevenLabs)",
    "context": "",
    "languages": "90+ languages (17,000+ voices)",
    "variants": [],
    "reasoning_effort": [],
    "availability": "ElevenAgents, Realtime API (OpenAI Realtime-compatible WebSocket)",
    "note": "ElevenLabs full-duplex speech-to-speech 패밀리의 기본(저지연·저비용) 모델. v1 Max와 함께 2026-10-20 공개됐고, 90개 이상 언어·17,000개 이상 voice를 지원합니다. ElevenAgents 기본 Realtime 모델이며, 공식 문서는 Zero Retention Mode·HIPAA(US/EU) 미지원을 명시합니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 발표문의 모든 수치가 Artificial Analysis의 독립 평가(Big Bench Audio 75.9%·Full-Duplex-Bench 95.8%)이거나 Speech Agent Arena Elo(988), 비% 지연(0.62s)·도구 성공률(60.3%)이라 점수표에서 제외했습니다.",
    "official_id": "eleven_realtime_v1_mini",
    "official_sources": [
      {
        "label": "ElevenLabs 공식 발표문",
        "url": "https://elevenlabs.io/blog/realtime"
      },
      {
        "label": "ElevenLabs Realtime 모델 문서",
        "url": "https://elevenlabs.io/docs/eleven-agents/customization/realtime-models"
      }
    ],
    "release_date_source": "https://elevenlabs.io/blog/realtime",
    "parameter_source": "https://elevenlabs.io/docs/eleven-agents/customization/realtime-models",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-233",
    "name": "Raon-1 mini",
    "date": "2026-10-21",
    "sortDate": "2026-10-21",
    "month": "2026-10",
    "monthName": "October",
    "company": "KRAFTON",
    "family": "Raon",
    "type": "LLM (hybrid linear-attention MoE)",
    "category": "LLM",
    "status": "Preview",
    "parameters": "28.8B total / 4.3B activated (30B-A4B)",
    "parameter_status": "verified",
    "architecture": "하이브리드 MoE — 25층 중 18층 Raon Delta Attention(RDA, Kimi Delta Attention의 erase/write gate 분리) + 7층 gated MLA. 128 routed experts 중 6개 + 1 shared 활성, Raon-mHC residual(4 streams), NoPE, SiTU-GLU, 259,840 vocab. DFlash2 draft model로 추측 디코딩 지원.",
    "modalities": [
      "text"
    ],
    "focus": [
      "Korean conversation",
      "instruction following",
      "agentic tool use",
      "efficient long context"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144",
    "languages": "Korean, English, Japanese, Chinese, Spanish, French, Thai",
    "variants": [
      "BF16",
      "MXFP8",
      "NVFP4",
      "GGUF",
      "DFlash2 draft"
    ],
    "reasoning_effort": [
      "thinking"
    ],
    "availability": "Hugging Face(gated), Raon API(OpenAI/Anthropic-compatible; free preview), playground",
    "note": "KRAFTON AI가 모델 설계부터 학습까지 처음부터 수행한 첫 Raon 언어 모델(30B-A4B). 2026-04 Raon 브랜드(음성·비전 모델 4종) 이후 첫 텍스트 LLM으로, 18개 선형 어텐션(RDA) + 7개 gated MLA 하이브리드·262,144 컨텍스트·Apache 2.0 가중치를 공개했습니다. 프리뷰이며 정식 버전과 학습 과정·최종 성능을 담은 기술 보고서를 추후 공개한다고 밝혔습니다. HF 카드가 비교 모델(Qwen3.6-35B-A3B·Gemma 4 26B-A4B·Qwen3.8-27B·Muse Glimmer 30B)과 함께 15개 % 점수를 인쇄해 수록했습니다.",
    "benchmarks": {
      "MMLU Pro": 76.5,
      "GPQA Diamond": 84.3,
      "AIME 2026": 93.3,
      "HMMT Feb 2026": 84.1,
      "IFBench": 84.2,
      "MultiChallenge": 59.0,
      "LiveCodeBench v6": 81.6,
      "SciCode": 38.7,
      "SWE-Verified": 70.8,
      "Terminal-Bench Lite": 47.0,
      "GDPVal": 66.0,
      "AutomationBench": 29.7,
      "BrowseComp Plus": 55.7,
      "BFCL v4 Overall": 59.8,
      "Chatbot Korean (internal)": 92.9
    },
    "benchmark_sources": {
      "MMLU Pro": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "GPQA Diamond": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "AIME 2026": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "HMMT Feb 2026": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "IFBench": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "MultiChallenge": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "LiveCodeBench v6": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "SciCode": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "SWE-Verified": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "Terminal-Bench Lite": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "GDPVal": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "AutomationBench": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "BrowseComp Plus": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "BFCL v4 Overall": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
      "Chatbot Korean (internal)": "https://huggingface.co/KRAFTON/Raon-1-mini-preview"
    },
    "benchmark_note": "HF 공식 카드의 표에서 Raon-1 mini preview 열 15개 % 점수를 수록했습니다. 같은 표의 AA-Omniscience 3.5·AA-LCR 67.3·GDP.pdf 5.8은 Artificial Analysis 결과 출처라 제외했고, GDPVal은 judge score(비 Elo), AutomationBench는 public split, Chatbot Korean (internal)은 비공개 내부 평가라는 조건을 원장 메모에 남겼습니다. judge/user simulator는 gpt-5.6-luna로 카드에 명시됐습니다.",
    "official_id": "KRAFTON/Raon-1-mini-preview",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/KRAFTON/Raon-1-mini-preview"
      },
      {
        "label": "KRAFTON AI 공식 Raon 사이트",
        "url": "https://raon-mini.krafton.ai/en"
      }
    ],
    "release_date_source": "https://raon-mini.krafton.ai/en",
    "parameter_source": "https://huggingface.co/KRAFTON/Raon-1-mini-preview",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-234",
    "name": "Spark-X2.6-4B",
    "date": "2026-10-21",
    "sortDate": "2026-10-21",
    "month": "2026-10",
    "monthName": "October",
    "company": "iFLYTEK",
    "family": "Spark",
    "type": "LLM (on-device)",
    "category": "LLM",
    "status": "GA",
    "parameters": "4B",
    "parameter_status": "verified",
    "architecture": "Spark-X2.5-4B와 동일 아키텍처를 유지하고 post-training을 개선한 4B on-device LLM. 최대 1,048,576 토큰 컨텍스트, none/low/high 3단계 thinking budget, tool calling·agentic workflow 지원.",
    "modalities": [
      "text"
    ],
    "focus": [
      "on-device agents",
      "agentic coding",
      "long context",
      "multilingual"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "1,048,576",
    "languages": "English, Chinese (multilingual)",
    "variants": [
      "FP8",
      "INT8",
      "GGUF"
    ],
    "reasoning_effort": [
      "none",
      "low",
      "high"
    ],
    "availability": "Hugging Face, ModelScope, Ollama, AtomGit, llama.cpp/vLLM/SGLang",
    "note": "iFLYTEK(科大讯飞) SparkLLM 팀의 온디바이스 4B 모델. X2.5-4B와 동일 아키텍처에 post-training 개선만으로 coding·agent·long-context·multilingual·reasoning을 끌어올렸다고 공식 카드가 설명합니다. 2026-10-21 Hugging Face·ModelScope·Ollama 글로벌 런칭(저장소 생성 10/19), iFLYTEK MaaS 모델 스퀘어에도 'Spark-X2.6 신세대 범용 플래그십'으로 등재돼 공식 조직 귀속을 확인했습니다. 2026-09-08 감사에서 1차 출처 미확보로 보류했던 Spark X2.5의 후속 세대입니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 카드의 벤치마크가 SVG 이미지(all_benchmark.svg·benchmark.svg)로만 제공되어 텍스트 % 수치가 인쇄되지 않았습니다. 성능 근거는 카드의 서술·차트이며 점수표에는 넣지 않았습니다.",
    "official_id": "XHToken/Spark-X2.6-4B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/XHToken/Spark-X2.6-4B"
      },
      {
        "label": "SparkLLM 공식 Hugging Face 조직",
        "url": "https://huggingface.co/XHToken"
      },
      {
        "label": "iFLYTEK MaaS 모델 페이지",
        "url": "https://maas.xfyun.cn/modelSquare/base/2628905721051136?sort=0"
      }
    ],
    "release_date_source": "https://huggingface.co/XHToken",
    "parameter_source": "https://huggingface.co/XHToken/Spark-X2.6-4B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-235",
    "name": "Hy-Memory-30B-A3B",
    "date": "2026-10-15",
    "sortDate": "2026-10-15",
    "month": "2026-10",
    "monthName": "October",
    "company": "Tencent",
    "family": "Hy-Memory",
    "type": "LLM (memory-specialized writer)",
    "category": "Memory",
    "status": "GA",
    "parameters": "30B total / 3B active (A3B MoE)",
    "parameter_status": "verified",
    "architecture": "Hy3-A3B 기반 MoE 메모리 writer — 외부 메모리 프레임워크의 write path를 전담해 보존할 정보·표현 방식·기존 메모리 갱신을 결정. Memory On-Policy Distillation(OPD) → Attributed Memory Reinforcement Learning 2단계 학습, vLLM 0.31.0·OpenAI 호환 API.",
    "modalities": [
      "text"
    ],
    "focus": [
      "long-term memory",
      "memory writing/update",
      "agent memory",
      "personalization"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "",
    "languages": "English, Chinese",
    "variants": [],
    "reasoning_effort": [
      "no_think"
    ],
    "availability": "Hugging Face(tencent/Hy-Memory-30B-A3B), Hy-Memory framework(GitHub), vLLM 0.31.0 OpenAI-compatible server",
    "note": "Tencent Hunyuan의 Hy-Memory 2.0 모델 파트. 일반 채팅 LLM이 아니라 Mem0·MemOS·Hy-Memory(Chat/Working/Coding)의 write path에서 범용 LLM을 대체하는 메모리 writer 특화 모델입니다. Hy3-A3B Base를 기반으로 30B total/3B active MoE로 동작하며, OPD와 attributed memory RL 2단계 학습으로 메모리 뱅크를 갱신하고 학습에 없던 EverMemOS로 전이됩니다. 공식 카드는 4개 하네스 6지표 동일 비중 평균 55.49(Opus 5 54.62·DeepSeek V4.1 Flash 53.64·Hy3 51.63·Qwen3.6-35B-A3B 50.37·Hy3-A3B Base 47.66)를 보고합니다. Apache 2.0 가중치가 2026-10-15 HF에 공개됐고, 10/16 감사 커밋(12:29 KST)이 카드 최종 갱신(17:12 KST)보다 앞서 당시 후보에서 누락됐다가 이번 재조사에서 소급 수록했습니다.",
    "benchmarks": {},
    "benchmark_sources": {},
    "benchmark_note": "공식 카드의 55.49는 Mem0·Hy-Memory·MemOS·EverMemOS 4개 하네스에서 6개 지표(LoCoMo Judge·LongMemEval·PersonaMem-v2·Travel SPS·Shopping PS·CMB)를 동일 비중으로 평균한 0~100 집계이며, 전체가 아닌 고정 20% 서브샘플 결과입니다. % 단일 벤치마크 표가 아니어서 점수표에는 넣지 않았습니다.",
    "official_id": "tencent/Hy-Memory-30B-A3B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/tencent/Hy-Memory-30B-A3B"
      },
      {
        "label": "Hy-Memory 2.0 공식 페이지",
        "url": "https://memory.hunyuan.tencent.com/en/"
      },
      {
        "label": "공식 GitHub 저장소",
        "url": "https://github.com/Tencent-Hunyuan/Hy-Memory"
      },
      {
        "label": "기술 보고서(arXiv)",
        "url": "https://arxiv.org/pdf/2610.22196"
      }
    ],
    "release_date_source": "https://huggingface.co/tencent/Hy-Memory-30B-A3B",
    "parameter_source": "https://huggingface.co/tencent/Hy-Memory-30B-A3B",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-22",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-236",
    "name": "Recursive Flint",
    "date": "2026-10-21",
    "sortDate": "2026-10-21",
    "month": "2026-10",
    "monthName": "October",
    "company": "Recursive",
    "family": "Flint",
    "type": "LLM (coding agent MoE)",
    "category": "LLM",
    "status": "GA",
    "parameters": "39.8B total / ~2.5B active per token (40B-A2.5B)",
    "architecture": "디코더 전용 MoE Transformer — 49층(dense 2 + MoE 47), 층당 라우팅 전문가 256개 중 6개 선택 + 상시 활성 공유 전문가 1개. 슬라이딩 윈도 어텐션 35층(윈도 513 토큰) + 풀 어텐션 14층, 32 query / 4 KV 헤드, 헤드별 QK RMSNorm·학습형 attention sink, 슬라이딩 층만 RoPE. 어휘 150,144. pretraining → mid-training → SFT → RL을 베이스 모델 없이 처음부터 학습했습니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "코딩 에이전트",
      "코드베이스 조사·버그 수정",
      "기능 구현·테스트 작성",
      "로컬(노트북) 실행"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144 (HF 카드 문서화 설정) — 블로그는 최대 512K 토큰, 256K 이내 권장",
    "languages": "",
    "variants": [
      "flint-int4",
      "flint-int4-gguf",
      "flint-nvfp4-gguf"
    ],
    "reasoning_effort": [
      "reasoning"
    ],
    "availability": "Hugging Face RecursiveSI/flint(BF16, SGLang 서빙 키트 포함)·flint-int4·flint-int4-gguf·flint-nvfp4-gguf, 로컬 엔진(recursive-oss/rec), 호스티드 API(약관 별도)",
    "note": "Recursive의 첫 공개 모델 — 코딩 에이전트용 40B-A2.5B MoE로, 노트북급 하드웨어에서 돌리는 것을 내세웁니다. 블로그는 최종 모델이 NVFP4 양자화본이며 16-bit 대비 평균 0.7점 이내라고 밝히고, 큰 폐쇄형 코딩 모델보다 분해된 명시적 지시가 더 필요할 수 있다고 한계를 적었습니다. 공개일은 블로그에 별도 표기가 없어 HF 저장소 생성 시각(HF API createdAt 2026-10-21 14:20 UTC, 양자화 저장소 13:51 UTC)을 근거로 했습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1": 54.9,
      "SWE-bench Pro v2": 89.7,
      "SWE-bench Verified": 74.2
    },
    "official_id": "RecursiveSI/flint",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/RecursiveSI/flint"
      },
      {
        "label": "공식 블로그",
        "url": "https://www.recursive.com/updates/introducing-recursive-flint"
      }
    ],
    "release_date_source": "https://huggingface.co/RecursiveSI/flint",
    "parameter_source": "https://huggingface.co/RecursiveSI/flint",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/RecursiveSI/flint",
      "SWE-bench Pro v2": "https://huggingface.co/RecursiveSI/flint",
      "SWE-bench Verified": "https://huggingface.co/RecursiveSI/flint"
    },
    "benchmark_note": "공식 카드 본문에 인쇄된 3개 점수만 수록했습니다. 조건: temperature 1.0·top-p 0.95·top-k 20, 에이전트 점수는 5회 이상 평균 pass@1, Terminal-Bench는 Terminus 2 하니스(웹 검색으로 얻은 정답은 실패 처리), SWE-bench는 mini-swe-agent(인터넷 차단). 비교 모델 점수가 들어 있는 벤치마크 이미지와 LiveCodeBench v6·IFBench·IFEval 수치는 이미지 한정이라 수록하지 않았습니다. 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-25",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-237",
    "name": "Beam 1.0",
    "date": "2026-10-16",
    "sortDate": "2026-10-16",
    "month": "2026-10",
    "monthName": "October",
    "company": "Reflection AI",
    "family": "Beam",
    "type": "LLM (open-weight reasoning MoE)",
    "category": "LLM",
    "status": "GA",
    "parameters": "501.3B total / 23.4B active (MoE)",
    "architecture": "희소 MoE — 52층(dense 3 + MoE 49), 전문가 256개, Gated GQA + 슬라이딩 윈도 어텐션, 어휘 152K, 변형된 Harmony 채팅 템플릿. 중간 학습으로 컨텍스트를 1M까지 확장했고 지식 컷오프는 2026-06-30입니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "토큰 효율적 추론",
      "소프트웨어 엔지니어링",
      "에이전틱 도구 사용",
      "수학·과학 추론"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "1M (1,000,000)",
    "languages": "English (주로 영어 대상)",
    "variants": [
      "Beam-1.0-501B-A23B-FP8",
      "Beam-1.0-501B-A23B-NVFP4",
      "Beam-1.0-501B-A23B-DFlash2 (추측 디코딩 드래프터)"
    ],
    "reasoning_effort": [],
    "availability": "Hugging Face reflection/Beam-1.0-501B-A23B(BF16)·FP8·NVFP4·DFlash2, Baseten 등 호스팅",
    "note": "Reflection AI의 첫 오픈웨이트 모델. 2026-10-05 발표문(제외 원장 excluded-2026-10-08-1에서 가중치 미공개로 보류)에 이어 2026-10-16 HF 저장소 커밋 'Beam is available'로 Apache 2.0 가중치가 공개돼 보류를 해제하고 활성 레코드로 이관했습니다. 카드는 인스트럭션 튜닝 모델만 포함하며 기술 보고서는 예고 상태입니다.",
    "benchmarks": {
      "DeepSWE v1.1": 43.3,
      "SWE-bench Pro v2-Hard": 76.5,
      "SWE-bench Pro v1": 66.1,
      "Terminal-Bench 2.1": 80.1,
      "SWE Atlas Codebase QnA": 31.8,
      "SWE-bench Multilingual": 78.3,
      "SWE-bench Verified": 81.6,
      "AIME 2026": 97.7,
      "Humanity's Last Exam (without tools)": 36.0,
      "Humanity's Last Exam (w/ tools)": 51.1,
      "SciCode": 49.2,
      "GPQA Diamond": 90.6,
      "LiveCodeBench": 88.3,
      "AutomationBench (public split)": 39.3,
      "MCP-Atlas": 80.8,
      "τ³-Bench Banking": 36.1,
      "BrowseComp (w/ context management)": 76.8,
      "DeepSearchQA (w/ context management)": 80.5,
      "AA-LCR": 78.2,
      "LongBench v2": 67.5,
      "IFBench": 79.6
    },
    "official_id": "reflection/Beam-1.0-501B-A23B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/reflection/Beam-1.0-501B-A23B"
      },
      {
        "label": "공식 발표문(2026-10-05)",
        "url": "https://reflection.ai/blog/introducing-beam"
      }
    ],
    "release_date_source": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
    "parameter_source": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
    "benchmark_sources": {
      "DeepSWE v1.1": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "SWE-bench Pro v2-Hard": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "SWE-bench Pro v1": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "Terminal-Bench 2.1": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "SWE Atlas Codebase QnA": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "SWE-bench Multilingual": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "SWE-bench Verified": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "AIME 2026": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "Humanity's Last Exam (without tools)": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "Humanity's Last Exam (w/ tools)": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "SciCode": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "GPQA Diamond": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "LiveCodeBench": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "AutomationBench (public split)": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "MCP-Atlas": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "τ³-Bench Banking": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "BrowseComp (w/ context management)": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "DeepSearchQA (w/ context management)": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "AA-LCR": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "LongBench v2": "https://huggingface.co/reflection/Beam-1.0-501B-A23B",
      "IFBench": "https://huggingface.co/reflection/Beam-1.0-501B-A23B"
    },
    "benchmark_note": "공식 카드 평가 표의 BF16 열 21개 값입니다(FP8·NVFP4 열은 카드에 별도 병기). 조건: temperature 0.7·top-p 0.99. CriPT AA(16.3)와 AA Omniscience index(10.8, 비% 지수)는 점수표에서 제외했습니다. 10/5 발표문의 표는 10/8 갱신 전·후 수치가 달라 최종본인 HF 카드 값만 사용했습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-25",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-238",
    "name": "Ling-3.1-flash",
    "date": "2026-10-13",
    "sortDate": "2026-10-13",
    "month": "2026-10",
    "monthName": "October",
    "company": "Ant Group / InclusionAI",
    "family": "Ling 3.1",
    "type": "LLM (hybrid reasoning MoE)",
    "category": "LLM",
    "status": "GA",
    "parameters": "560B total / 25B active (MoE)",
    "architecture": "하이브리드 선형 MoE — 72층(KDA 63 + Gated MLA 9, 7:1) 중 dense 4층, 라우팅 전문가 512개 중 8개 활성 + 공유 전문가 1개, 64헤드, hidden 4096, 어휘 157,184. MTP(NEXTN) 추측 디코딩과 SGLang day-0 이미지를 제공합니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "범용 에이전트",
      "검색",
      "오피스 생산성",
      "소프트웨어 엔지니어링",
      "금융·헬스케어·재료과학"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "1M (1,000,000)",
    "languages": "",
    "variants": [],
    "reasoning_effort": [
      "hybrid reasoning (enable_thinking on/off)"
    ],
    "availability": "Hugging Face inclusionAI/Ling-3.1-flash(FP8), ModelScope, OpenRouter, SGLang·vLLM",
    "note": "Ling-3.0-flash(124B-A5.1B) 후속으로 총 560B·활성 25B로 키운 하이브리드 추론 모델. 2026-09-30 보도된 공개 때는 공식 문서·HF 저장소가 없어 제외 원장(excluded-2026-10-01-1)에 보류했으나, HF inclusionAI/Ling-3.1-flash가 MIT 가중치와 모델 카드를 갖추어 보류를 해제하고 이관했습니다. 날짜는 HF 첫 가중치 커밋(2026-10-13, HF API 기준)이며 카드는 10/14 마지막 갱신, 보도상 API·OpenRouter 체험은 9/30부터였습니다.",
    "benchmarks": {},
    "official_id": "inclusionAI/Ling-3.1-flash",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/inclusionAI/Ling-3.1-flash"
      }
    ],
    "release_date_source": "https://huggingface.co/inclusionAI/Ling-3.1-flash",
    "parameter_source": "https://huggingface.co/inclusionAI/Ling-3.1-flash",
    "benchmark_sources": {},
    "benchmark_note": "공식 카드의 평가 결과는 이미지로만 제공돼 수치를 옮기지 않았습니다. 본문에는 Terminal-Bench 4.0·SWE-bench Pro·FrontierSWE·GDPVal-AA V2.1·AutomationBench·MCP-Atlas·SkillsBench·HealthBench Professional에서 강하다고 서술하나 숫자는 인쇄돼 있지 않습니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-25",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-239",
    "name": "MiniMax M3.1-Flash",
    "date": "2026-10-17",
    "sortDate": "2026-10-17",
    "month": "2026-10",
    "monthName": "October",
    "company": "MiniMax",
    "family": "MiniMax M",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA",
    "parameters": "approx. 428B total / 23B active (MoE)",
    "architecture": "네이티브 멀티모달 MoE — MiniMax Sparse Attention(MSA)을 전 층에 적용해 M3의 앞쪽 3개 풀 어텐션 층까지 희소화했고, 라우팅 전문가·어텐션 경로에 양자화 인지 학습(QAT)을 적용했습니다. 추측 디코딩은 EAGLE류 MTP 대신 DSpark(드래프트 헤드 동봉)입니다.",
    "modalities": [
      "text",
      "image",
      "video"
    ],
    "focus": [
      "에이전틱 코딩",
      "컴퓨터 유스",
      "사이버보안",
      "멀티모달 이해"
    ],
    "open_weights": true,
    "license": "MiniMax Community License (minimax-community)",
    "context": "1M (1,000,000)",
    "languages": "",
    "variants": [
      "DSpark draft head 동봉"
    ],
    "reasoning_effort": [
      "low",
      "medium",
      "high",
      "xhigh",
      "max"
    ],
    "availability": "Hugging Face MiniMaxAI/MiniMax-M3.1-Flash, MiniMax Agent·API(platform.minimax.io), SGLang·vLLM·TokenSpeed 레시피",
    "note": "9/27 M3.1-Flash-Preview(model-192)의 정식 오픈웨이트 릴리스. 날짜는 HF 저장소 생성(HF API createdAt 2026-10-17 06:37 UTC)이며 일부 추적 사이트는 10/19로 적습니다(2차 출처). 라이선스는 Apache/MIT가 아닌 MiniMax 커뮤니티 라이선스입니다.",
    "benchmarks": {
      "Automation-Bench v1.0.6": 62.8,
      "BankerToolBench": 76.2,
      "Terminal-Bench 4.0": 38.1,
      "LOCA-Bench 256K": 60.3,
      "Agents' Last Exam": 29.6,
      "OSWorld 2.0": 61.7,
      "PostTrain Bench v1.1": 39.3,
      "DeepSWE v1.1": 73.7,
      "NL2Repo-Bench": 61.2,
      "SWE Refactor Bench": 23.0,
      "CyberGym": 82.2,
      "BabyVision (with tools)": 91.0,
      "HLE (without tools)": 43.4,
      "CharXiv RQ": 82.5
    },
    "official_id": "MiniMaxAI/MiniMax-M3.1-Flash",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash"
      },
      {
        "label": "MSA 논문(arXiv)",
        "url": "https://arxiv.org/abs/2606.13392"
      }
    ],
    "release_date_source": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
    "parameter_source": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
    "benchmark_sources": {
      "Automation-Bench v1.0.6": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "BankerToolBench": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "Terminal-Bench 4.0": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "LOCA-Bench 256K": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "Agents' Last Exam": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "OSWorld 2.0": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "PostTrain Bench v1.1": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "DeepSWE v1.1": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "NL2Repo-Bench": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "SWE Refactor Bench": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "CyberGym": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "BabyVision (with tools)": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "HLE (without tools)": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash",
      "CharXiv RQ": "https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash"
    },
    "benchmark_note": "공식 카드 평가 표의 M3.1 Flash 열 14개 값입니다. 'GDP.pdf AA'(20.8)는 카드가 'Artificial Analysis에서 직접 가져옴'이라고 밝힌 제3자 수치라 제외했습니다. 하니스·컨텍스트 조건(예: Terminal Bench 4.0 = Codex 0.149.1, DeepSWE v1.1 = mini-SWE-agent 2.4.5·512K, HLE = 텍스트 전용 2,158문항 서브셋)은 카드 평가 노트를 따릅니다. 카드 하이라이트의 'OSWorld V2'는 표의 'OSWorld 2.0'과 같은 61.7입니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-25",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-240",
    "name": "Atria Dawn",
    "date": "2026-10-23",
    "sortDate": "2026-10-23",
    "month": "2026-10",
    "monthName": "October",
    "company": "Shanghai Artificial Intelligence Laboratory",
    "family": "Atria",
    "type": "LLM / agentic foundation model",
    "category": "LLM",
    "status": "GA",
    "parameters": "744B (GLM-5.2 MoE 파운데이션 기반)",
    "architecture": "744B 파라미터 MoE GLM-5.2 파운데이션 위에 구축한 텍스트 전용 에이전틱 모델 — Discovery(조사·연구)·Creation(소프트웨어·시각화·ML)·Delivery(보고서·프레젠테이션)·Cybersecurity 4개 차원의 종단 간 딜리버리를 겨냥합니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "딥 리서치",
      "에이전틱 코딩",
      "과학 자동화·오피스 업무",
      "사이버보안"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "512K",
    "languages": "",
    "variants": [
      "Atria-Dawn-FP8"
    ],
    "reasoning_effort": [
      "low",
      "medium",
      "high"
    ],
    "availability": "Hugging Face internlm/Atria-Dawn·Atria-Dawn-FP8, ModelScope, 지역별 API 콘솔(모델명 Atria-Dawn), SGLang·vLLM",
    "note": "9/11 Atria-Dawn-Preview(model-156, 256K)의 정식 릴리스 — 컨텍스트가 512K로 늘고 텍스트 전용입니다. Preview 레코드는 공식 스냅샷 선례에 따라 그대로 두었습니다. 날짜는 HF 저장소 생성(HF API createdAt 2026-10-23, FP8 저장소 01:23 UTC·본체 03:21 UTC)입니다. 파라미터는 카드의 'GLM-5.2 기반 744B' 서술에 따릅니다.",
    "benchmarks": {
      "DeepSearchQA": 96.5,
      "BrowseComp": 91.3,
      "WideSearch": 84.6,
      "DeepResearch Bench II": 51.2,
      "MLE-bench Lite": 88.2,
      "SWE-bench Pro": 61.7,
      "Terminal-Bench 2.1": 81.0,
      "BFCL v4": 78.4,
      "AutomationBench": 54.7,
      "SkillsBench": 67.8,
      "τ³-Bench Banking": 43.3,
      "Workspace-Bench": 66.1,
      "Workspace-Bench-Lite": 70.0,
      "JobBench": 57.5,
      "CyberGym": 86.8,
      "PaperBench": 89.6,
      "SpreadsheetBench 2": 33.0,
      "NL2Repo-Bench": 50.0,
      "Harbor-Index": 17.3,
      "DeepSWE": 49.3,
      "Harvey LAB": 27.5,
      "OfficeQA Pro": 67.1
    },
    "official_id": "internlm/Atria-Dawn",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/internlm/Atria-Dawn"
      }
    ],
    "release_date_source": "https://huggingface.co/internlm/Atria-Dawn",
    "parameter_source": "https://huggingface.co/internlm/Atria-Dawn",
    "benchmark_sources": {
      "DeepSearchQA": "https://huggingface.co/internlm/Atria-Dawn",
      "BrowseComp": "https://huggingface.co/internlm/Atria-Dawn",
      "WideSearch": "https://huggingface.co/internlm/Atria-Dawn",
      "DeepResearch Bench II": "https://huggingface.co/internlm/Atria-Dawn",
      "MLE-bench Lite": "https://huggingface.co/internlm/Atria-Dawn",
      "SWE-bench Pro": "https://huggingface.co/internlm/Atria-Dawn",
      "Terminal-Bench 2.1": "https://huggingface.co/internlm/Atria-Dawn",
      "BFCL v4": "https://huggingface.co/internlm/Atria-Dawn",
      "AutomationBench": "https://huggingface.co/internlm/Atria-Dawn",
      "SkillsBench": "https://huggingface.co/internlm/Atria-Dawn",
      "τ³-Bench Banking": "https://huggingface.co/internlm/Atria-Dawn",
      "Workspace-Bench": "https://huggingface.co/internlm/Atria-Dawn",
      "Workspace-Bench-Lite": "https://huggingface.co/internlm/Atria-Dawn",
      "JobBench": "https://huggingface.co/internlm/Atria-Dawn",
      "CyberGym": "https://huggingface.co/internlm/Atria-Dawn",
      "PaperBench": "https://huggingface.co/internlm/Atria-Dawn",
      "SpreadsheetBench 2": "https://huggingface.co/internlm/Atria-Dawn",
      "NL2Repo-Bench": "https://huggingface.co/internlm/Atria-Dawn",
      "Harbor-Index": "https://huggingface.co/internlm/Atria-Dawn",
      "DeepSWE": "https://huggingface.co/internlm/Atria-Dawn",
      "Harvey LAB": "https://huggingface.co/internlm/Atria-Dawn",
      "OfficeQA Pro": "https://huggingface.co/internlm/Atria-Dawn"
    },
    "benchmark_note": "공식 카드 평가 표의 Atria Dawn 열 22개 값입니다. GDPval(1594.2)은 Elo 척도라 정책상 제외했습니다. 카드는 이 표가 공식 웹사이트(atria-asi.ai)와 같다고 밝힙니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-25",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-241",
    "name": "Nemotron Labs Dory 1.0 4B",
    "date": "2026-10-16",
    "sortDate": "2026-10-16",
    "month": "2026-10",
    "monthName": "October",
    "company": "NVIDIA",
    "family": "Nemotron Labs",
    "type": "LLM (looped / latent-recurrent)",
    "category": "LLM",
    "status": "GA",
    "parameters": "4B total",
    "architecture": "루프형(latent-recurrent) normalized-GPT — 입력 8층 + 공유 순환 블록 20층 + 출력 8층, 순환 블록을 1~4회 반복 적용해 토큰당 연산을 추론 시 조절합니다. 슬라이딩 윈도·풀 어텐션 인터리브, 마지막 루프 KV 캐시 모드로 루프 수와 무관하게 KV 오버헤드가 없고, NVFP4로 네이티브 사전학습한 뒤 BF16로 이어갔습니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "소형 범용 추론",
      "탄력적 추론 연산",
      "토큰 효율"
    ],
    "open_weights": true,
    "license": "OpenMDW-1.1",
    "context": "256K",
    "languages": "English",
    "variants": [
      "BF16",
      "MXFP8",
      "NVFP4",
      "GGUF(Q5_K_M)"
    ],
    "reasoning_effort": [
      "loops 1 / 2 (권장 기본) / 4"
    ],
    "availability": "Hugging Face nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16·MXFP8·NVFP4·GGUF (vLLM 지원은 PR #60149 검토 중)",
    "note": "NVIDIA Nemotron Labs의 루프형 4B 소형 모델 — 하나의 체크포인트로 루프 횟수에 따라 정확도와 연산을 맞바꿉니다. 별도 발표 블로그 없이 HF 카드로만 공개돼 카드의 Release Date(2026-10-16)를 근거로 했습니다. vLLM 공식 릴리스는 아직 미지원(PR 검토 중)입니다.",
    "benchmarks": {
      "SWE-bench Verified": 59.5,
      "Terminal-Bench 2.1": 18.1,
      "SciCode": 34.94,
      "τ³-Bench Banking": 12.89,
      "GPQA Diamond": 72.41,
      "Humanity's Last Exam (without tools)": 10.89,
      "IFBench": 77.94,
      "AA-LCR": 71.0
    },
    "official_id": "nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16"
      }
    ],
    "release_date_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
    "parameter_source": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
    "benchmark_sources": {
      "SWE-bench Verified": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
      "Terminal-Bench 2.1": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
      "SciCode": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
      "τ³-Bench Banking": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
      "GPQA Diamond": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
      "Humanity's Last Exam (without tools)": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
      "IFBench": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16",
      "AA-LCR": "https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16"
    },
    "benchmark_note": "공식 카드의 2-loop(권장 기본) 열 8개 값입니다. 1/2/4 loops — SWE-bench Verified 50.3/59.5/61.8, Terminal-Bench 2.1 12.5/18.1/22.2, GPQA Diamond 69.19/72.41/72.16, HLE 8.25/10.89/10.43, IFBench 74.29/77.94/79, AA-LCR 63/71/73. GDPval-AA-V2(Elo)와 AA-Omniscience 정확도 10.08은 점수표에서 제외했습니다. NVIDIA가 NeMo Gym/Evaluator 통일 하니스(Terminal-Bench는 Terminus-2)로 측정했고, AA v4.3.2 항목은 공식 AA 점수와 다를 수 있는 내부 추정이라고 카드가 밝힙니다.",
    "parameter_status": "verified",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-25",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-242",
    "name": "Kimi K3.1 Pro",
    "date": "2026-10-24",
    "sortDate": "2026-10-24",
    "month": "2026-10",
    "monthName": "October",
    "company": "Moonshot AI",
    "family": "Kimi",
    "type": "MLLM",
    "category": "MLLM",
    "status": "GA (API) — 가중치는 2026-11-04까지 공개 예고",
    "parameters": "정확한 수치 미공개 (3T급 오픈웨이트 모델이라고만 표기)",
    "architecture": "Kimi K3(2.8T 총/104B 활성 MoE)에 훨씬 큰 후학습 연산을 투입한 후속 — K3.1 시리즈의 첫 모델입니다. 아키텍처 변경 여부는 발표문에 없습니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "코딩",
      "3D 생성(BenchCAD)",
      "금융 워크플로",
      "환각 감소",
      "사이버 위험 완화"
    ],
    "open_weights": false,
    "license": "미공개 (가중치 공개 시 확인)",
    "context": "1M (1,000,000)",
    "languages": "",
    "variants": [
      "Kimi K3.1 Pro Highspeed (kimi-k3.1-pro-highspeed, 2~3배 고속)"
    ],
    "reasoning_effort": [
      "max (벤치마크 설정)"
    ],
    "availability": "Kimi.com·Kimi 앱·Kimi Work·Kimi Code·Kimi API(kimi-k3.1-pro), 엔터프라이즈 관리자 활성화 필요(기본 꺼짐), Zero Data Retention 지원",
    "note": "Moonshot AI의 K3.1 시리즈 첫 모델. 발표문(kimi.com 리서치 목록 날짜 2026-10-24)은 API 즉시 제공과 '전체 가중치 11/4까지 공개'를 밝혔고 HF moonshotai 조직에는 아직 저장소가 없어 open_weights는 false로 두었습니다 — 가중치가 공개되면 갱신해야 합니다. 일부 보도는 출시일을 10/23로 적습니다(2차 출처). 입력 모달리티는 발표문에 명시가 없어 텍스트만 기재했으나 벤치마크에 이미지 과제가 포함돼 있어 K3 계열 멀티모달 여부는 가중치 공개 후 확인이 필요합니다.",
    "benchmarks": {
      "Terminal-Bench 4.0": 65.7
    },
    "official_id": "kimi-k3.1-pro",
    "official_sources": [
      {
        "label": "공식 발표문(kimi.com)",
        "url": "https://www.kimi.com/en/blog/kimi-k3-1-pro"
      }
    ],
    "release_date_source": "https://www.kimi.com/en/blog/kimi-k3-1-pro",
    "parameter_source": "https://www.kimi.com/en/blog/kimi-k3-1-pro",
    "benchmark_sources": {
      "Terminal-Bench 4.0": "https://www.kimi.com/en/blog/kimi-k3-1-pro"
    },
    "benchmark_note": "발표문 본문에 %로 인쇄된 Terminal-Bench 4.0(Claude-Code 하니스, reasoning effort max·temperature 1.0·top-p 0.95)만 수록했습니다. 그 외 OfficeQA Pro v2 64.4(SOTA 주장), Frontier Finance 58.6, BenchCAD(Voxel IoU 도구 사용 92.7/미사용 72.8), 자체 Kimi Code Bench 3.0 Long-horizon 61.2, Kimi Hallu Bench Hard, xdev-bench-hard 81.0은 척도·측정 조건이 비%이거나 내부 벤치마크라 점수표에서 제외했습니다.",
    "parameter_status": "undisclosed",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-25",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-243",
    "name": "Nanbeige4.3-33B",
    "date": "2026-10-24",
    "sortDate": "2026-10-24",
    "month": "2026-10",
    "monthName": "October",
    "company": "Nanbeige",
    "family": "Nanbeige",
    "type": "LLM (agentic teacher)",
    "category": "LLM",
    "status": "GA",
    "parameters": "33B dense (모델명 표기; HF 저장소 safetensors 메타데이터 합계 33,118,977,024 BF16)",
    "architecture": "밀집(dense) 디코더 전용 Transformer(LlamaForCausalLM 구조) — config.json 기준 52층·hidden 7168·FFN 22016·어텐션 56 헤드/KV 8 헤드(GQA)·어휘 166,912·RoPE base 1.2e8. 카드에 아키텍처·학습 설명은 없습니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "에이전틱 코딩",
      "프로페셔널 코워크(사무·직업 과업)",
      "도구 사용",
      "소형 모델 증류용 teacher"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "524,288 (512K)",
    "languages": "영어, 중국어 (HF 카드 language 태그)",
    "variants": [
      "Nanbeige4.3-33B-Base (베이스 체크포인트, 별도 저장소)"
    ],
    "reasoning_effort": [
      "thinking (enable_thinking 기본 켜짐, 끌 수 있음)"
    ],
    "availability": "Hugging Face Nanbeige/Nanbeige4.3-33B (BF16 safetensors, Transformers·SGLang·vLLM 서빙 예시 제공)",
    "note": "Nanbeige4.3 시리즈의 플래그십 'teacher' 모델 — 이후 소형 모델(예: Nanbeige4.3-3B) 증류의 기반으로 쓰겠다고 카드가 밝힙니다. 카드 연락처 도메인(kanzhun.com)으로 보아 BOSS직빙(Kanzhun) 계열 연구팀입니다. 공개일은 카드·발표문에 표기가 없어 HF 저장소 생성 시각(HF API createdAt 2026-10-24 02:49 UTC, lastModified 2026-10-25 11:11 UTC)을 근거로 했습니다. 기술 보고서·블로그 링크는 없습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1": 80.9,
      "Terminal-Bench 4.0": 23.8,
      "DeepSWE": 65.5,
      "SWE-Bench Pro": 60.3,
      "SWE-Atlas-QnA": 50.8,
      "NL2Repo": 53.0,
      "SciCode": 52.6,
      "SkillsBench": 61.1,
      "Automation Bench": 54.2,
      "JobBench": 44.8,
      "GDPval": 84.8,
      "Claw-Eval (pass^3)": 78.3,
      "Toolathlon-Verified": 70.4,
      "DeepPlanning": 63.3,
      "EnterpriseOps-Gym": 41.0,
      "Tau3-Bench": 48.8,
      "GPQA Diamond": 89.5,
      "AIME 2026": 95.2,
      "AA-LCR": 84.0
    },
    "official_id": "Nanbeige/Nanbeige4.3-33B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B"
      }
    ],
    "release_date_source": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
    "parameter_source": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
    "benchmark_sources": {
      "Terminal-Bench 2.1": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "Terminal-Bench 4.0": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "DeepSWE": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "SWE-Bench Pro": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "SWE-Atlas-QnA": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "NL2Repo": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "SciCode": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "SkillsBench": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "Automation Bench": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "JobBench": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "GDPval": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "Claw-Eval (pass^3)": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "Toolathlon-Verified": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "DeepPlanning": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "EnterpriseOps-Gym": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "Tau3-Bench": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "GPQA Diamond": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "AIME 2026": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B",
      "AA-LCR": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B"
    },
    "benchmark_note": "공식 카드 본문 표에 인쇄된 19개 점수를 수록했습니다(YC-bench는 달러 척도(1,025,437달러)라 점수표에서 제외). 조건: Nanbeige는 chat template의 preserve_thinking=true, 비교 모델과 동일한 하이퍼파라미터·하니스에서 최고 thinking effort로 평가. Terminal-Bench 2.1은 Terminus 2, Terminal-Bench 4.0·DeepSWE·SWE-Atlas-QnA는 mini-swe-agent v2.4.6(SWE-Atlas-QnA 판정은 GPT-6 Sol, medium effort, 루브릭 1,304개), NL2Repo는 Claude Code, Automation Bench는 v1.0.6 공개 600과제, JobBench는 검색 도구가 달린 Claude Code 하니스, GDPval은 개정 루브릭(revised rubrics), Claw-Eval은 General 부분집합 157과제, DeepPlanning·EnterpriseOps-Gym·Tau3-Bench는 공식 저장소 사용. 비교 모델(Qwen3.8-27B·Muse-Glimmer-30B·Gemma4-31B) 점수는 수록하지 않았고, 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-244",
    "name": "Sage-A1.5",
    "date": "2026-10-15",
    "sortDate": "2026-10-15",
    "month": "2026-10",
    "monthName": "October",
    "company": "Shanghai Artificial Intelligence Laboratory",
    "family": "Sage",
    "type": "MLLM (agentic science MoE)",
    "category": "MLLM",
    "status": "GA",
    "parameters": "35B total MoE (HF 저장소 safetensors 메타데이터 합계 35,951,822,704 BF16), 활성 파라미터 카드 미명시",
    "architecture": "Qwen3.6-35B-A3B와 Agents-A1을 기반으로 한 MoE 비전-언어 모델(Qwen3_5MoeForConditionalGeneration) — config.json 기준 40층(선형 어텐션 3 : 풀 어텐션 1 반복)·hidden 2048·라우팅 전문가 256개 중 8개 선택(전문가 FFN 512)·어텐션 16 헤드/KV 2 헤드(head_dim 256)·MTP 1층. 에이전트 오케스트레이션(독립 컨텍스트의 서브에이전트 병렬 수행)과 opt-in 검증 모드(사고 과정 안에서 자체 점검)를 내세웁니다.",
    "modalities": [
      "text",
      "image"
    ],
    "focus": [
      "장기 과제 과학 연구 에이전트",
      "서브에이전트 병렬 오케스트레이션",
      "자체 검증(Verification Mode)",
      "딥리서치·검색",
      "엔지니어링 과제"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144 (네이티브) — YaRN factor 2.0으로 524,288 확장 방법 안내",
    "languages": "",
    "variants": [
      "Sage-A1.5-FP8",
      "Sage-A1.5 GGUF(Q4_K_M·Q6_K·Q8_0·F16, InternScience 공식 저장소)"
    ],
    "reasoning_effort": [
      "thinking (reasoning-parser qwen3)",
      "Verification Mode (opt-in)"
    ],
    "availability": "Hugging Face InternScience/Sage-A1.5, ModelScope, GitHub InternScience/Agents-A1, 무료 체험 플랫폼(discovery.intern-ai.org.cn), Transformers·vLLM·SGLang 서빙 예시 제공",
    "note": "Shanghai AI Laboratory의 Agents-A1 후속 — 소규모(~35B) 모델로 장기 과제 검색·과학 문제 해결을 겨냥한 에이전트 모델입니다. 공개일은 카드에 표기가 없어 HF 저장소 생성 시각(HF API createdAt 2026-10-15 08:34 UTC, lastModified 2026-10-22)을 근거로 했습니다. 카드에 활성 파라미터 수가 없어 총 파라미터만 기재했습니다. 이전 두 차례 감사(10/22·10/25) 구간에 공개됐지만 후보에서 빠졌다가 2026-10-26에 소급 수록했습니다.",
    "benchmarks": {
      "GAIA": 95.1,
      "BrowseComp": 81.7,
      "BrowseComp (Agentic Orchestration)": 82.8,
      "DeepResearch-Bench2": 43.7,
      "DeepResearch-Bench2 (Agentic Orchestration)": 47.5,
      "XBench-DS-2510": 92.0,
      "MLE-Lite": 65.2,
      "SciCode": 44.3,
      "SWE-bench Pro": 61.2,
      "SWE-bench Multilingual": 72.7,
      "IFBench": 81.6,
      "AA-LCR": 81.0,
      "FrontierScience-Olympiad": 81.0,
      "FrontierScience-Research": 48.3,
      "HiPhO": 45.3,
      "HLE w/ tools": 55.1,
      "CMT": 80.0,
      "CritPt": 20.0,
      "Agents' Last Exam (ALE-CLI)": 19.1,
      "VitaBench": 45.4,
      "PinchBench": 90.0,
      "ChemCOTBench": 66.5,
      "MatTools": 42.6,
      "OmniDocBench": 91.5
    },
    "official_id": "InternScience/Sage-A1.5",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/InternScience/Sage-A1.5"
      },
      {
        "label": "기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2610.28578"
      }
    ],
    "release_date_source": "https://huggingface.co/InternScience/Sage-A1.5",
    "parameter_source": "https://huggingface.co/InternScience/Sage-A1.5",
    "benchmark_sources": {
      "GAIA": "https://huggingface.co/InternScience/Sage-A1.5",
      "BrowseComp": "https://huggingface.co/InternScience/Sage-A1.5",
      "BrowseComp (Agentic Orchestration)": "https://huggingface.co/InternScience/Sage-A1.5",
      "DeepResearch-Bench2": "https://huggingface.co/InternScience/Sage-A1.5",
      "DeepResearch-Bench2 (Agentic Orchestration)": "https://huggingface.co/InternScience/Sage-A1.5",
      "XBench-DS-2510": "https://huggingface.co/InternScience/Sage-A1.5",
      "MLE-Lite": "https://huggingface.co/InternScience/Sage-A1.5",
      "SciCode": "https://huggingface.co/InternScience/Sage-A1.5",
      "SWE-bench Pro": "https://huggingface.co/InternScience/Sage-A1.5",
      "SWE-bench Multilingual": "https://huggingface.co/InternScience/Sage-A1.5",
      "IFBench": "https://huggingface.co/InternScience/Sage-A1.5",
      "AA-LCR": "https://huggingface.co/InternScience/Sage-A1.5",
      "FrontierScience-Olympiad": "https://huggingface.co/InternScience/Sage-A1.5",
      "FrontierScience-Research": "https://huggingface.co/InternScience/Sage-A1.5",
      "HiPhO": "https://huggingface.co/InternScience/Sage-A1.5",
      "HLE w/ tools": "https://huggingface.co/InternScience/Sage-A1.5",
      "CMT": "https://huggingface.co/InternScience/Sage-A1.5",
      "CritPt": "https://huggingface.co/InternScience/Sage-A1.5",
      "Agents' Last Exam (ALE-CLI)": "https://huggingface.co/InternScience/Sage-A1.5",
      "VitaBench": "https://huggingface.co/InternScience/Sage-A1.5",
      "PinchBench": "https://huggingface.co/InternScience/Sage-A1.5",
      "ChemCOTBench": "https://huggingface.co/InternScience/Sage-A1.5",
      "MatTools": "https://huggingface.co/InternScience/Sage-A1.5",
      "OmniDocBench": "https://huggingface.co/InternScience/Sage-A1.5"
    },
    "benchmark_note": "공식 카드 비교표의 Sage-A1.5 열 24개 점수를 수록했습니다. BrowseComp·DeepResearch-Bench2는 에이전트 오케스트레이션 미사용/사용 값이 함께 인쇄돼 별도 항목으로 나눴습니다. SWE-bench 계열은 mini-SWE-agent 하니스(temperature 1.0·top-p 0.95·200K 컨텍스트·자동 컨텍스트 압축, 인터넷 차단 오프라인 환경)에서 평가했습니다. 비교 모델(Agents-A1·Qwen3.6-35B-A3B·Ornith-1.5·Kimi-K3·GLM-5.3·GPT-5.6-sol)의 점수와 카드의 🥇/🟢 순위 표식(개발사 주장)은 수록하지 않았고, 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-245",
    "name": "Ornith-1.5-122B",
    "date": "2026-10-16",
    "sortDate": "2026-10-16",
    "month": "2026-10",
    "monthName": "October",
    "company": "Ornith",
    "family": "Ornith",
    "type": "LLM (self-improvement MoE)",
    "category": "LLM",
    "status": "GA",
    "parameters": "122B MoE (모델명·카드 표기; HF 저장소 safetensors 메타데이터 합계 125,086,497,008 BF16), 활성 파라미터 카드 미명시",
    "architecture": "MoE 모델(Qwen3_5MoeForConditionalGeneration 구조) — config.json 기준 48층·hidden 3072·라우팅 전문가 256개 중 8개 선택(전문가 FFN 1024, 공유 전문가 FFN 1024)·어텐션 32 헤드/KV 2 헤드·어휘 248,320. config에 비전 구성이 있으나 카드는 입력 모달리티를 명시하지 않습니다. Ornith-1.0은 Qwen3.5·Gemma 4 위에서 CPT·mid-training·post-training으로 개발했고, 1.5는 과제 생성·스캐폴드 구성·풀이 롤아웃을 함께 최적화하는 자기 개선 루프를 RL로 학습했다고 카드가 설명합니다. 단일 80GB GPU 서빙을 내세웁니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "코딩 에이전트",
      "에이전틱 도구 사용",
      "추론",
      "단일 GPU 배포"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "262,144 — YaRN factor 4.0으로 약 1M 확장 방법 안내",
    "languages": "",
    "variants": [
      "Ornith-1.5-122B-FP8",
      "Ornith-1.5-122B-NVFP4",
      "Ornith-1.5-122B-GGUF",
      "Ornith-1.5-122B-MLX(4·8bit)"
    ],
    "reasoning_effort": [
      "reasoning (기본 <think> 블록, reasoning-parser qwen3)"
    ],
    "availability": "Hugging Face ornith-ai/Ornith-1.5-122B, Transformers ≥5.8.1·vLLM ≥0.19.1·SGLang ≥0.5.9 서빙 예시 제공",
    "note": "Ornith-1.5 계열의 122B MoE 모델로, 카드는 가장 유능하고 효율적인 구성이며 양자화 Ornith-1.5-122B-Mobile 변형으로 모바일 배포도 가능하다고 설명합니다. 공개일은 카드에 표기가 없어 HF 저장소 생성 시각(HF API createdAt 2026-10-16 07:14 UTC, lastModified 2026-10-21)을 근거로 했습니다. 공식 블로그(ornith.ai, 2026-08)는 397B·35B·9B만 다루고 122B는 없으며, 개발 주체의 소재지는 카드·HF 조직 정보에 없어 국가를 미공개로 표기했습니다. 같은 계열의 Ornith-1.5-397B·35B-A3B·9B(2026-08-18 HF 공개)는 별도 레코드로 수록했습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1 (Claude Code)": 81.2,
      "CyberGym": 80.0,
      "NL2Repo": 51.2,
      "SWE-bench Pro (no-hack)": 76.9,
      "SWE-bench Verified (non-hack)": 84.5,
      "SWE-bench Multilingual (non-hack)": 76.4,
      "HLE (with tools)": 48.0,
      "HLE (w/o tools)": 37.68,
      "SciCode": 53.8,
      "WideSearch": 75.2,
      "BrowseComp": 78.5,
      "MCP-Atlas": 74.6,
      "Toolathlon-Verified": 70.8,
      "ClawEval": 79.4
    },
    "official_id": "ornith-ai/Ornith-1.5-122B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/ornith-ai/Ornith-1.5-122B"
      }
    ],
    "release_date_source": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
    "parameter_source": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
    "benchmark_sources": {
      "Terminal-Bench 2.1 (Claude Code)": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "CyberGym": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "NL2Repo": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "SWE-bench Pro (no-hack)": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "SWE-bench Verified (non-hack)": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "SWE-bench Multilingual (non-hack)": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "HLE (with tools)": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "HLE (w/o tools)": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "SciCode": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "WideSearch": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "BrowseComp": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "MCP-Atlas": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "Toolathlon-Verified": "https://huggingface.co/ornith-ai/Ornith-1.5-122B",
      "ClawEval": "https://huggingface.co/ornith-ai/Ornith-1.5-122B"
    },
    "benchmark_note": "공식 카드 본문 비교표의 Ornith-1.5-122B 열 14개 점수를 수록했습니다(카드는 소수 셋째 자리까지 인쇄). Terminal-Bench 2.1은 카드 각주상 Claude Code 하니스(Terminus-2 값은 카드에 없음) Claude Code 2.1.126(temperature 1.0·top-p 1.0·5회 평균), SWE-bench Verified·Pro·Multilingual은 OpenHands 하니스(temperature 1.0·top-p 0.95·256K)에서 보상 해킹 방지 규칙을 적용해 평가했고 해킹이 확인된 풀이는 오답 처리했습니다. NL2Repo는 400K 컨텍스트·GitHub/pip 접근 차단, HLE 판정은 Claude 4.6 Opus, MCP-Atlas는 공개 500과제 부분집합(판정 Claude 4.8 Opus), Toolathlon-Verified는 공식 평가 서비스(최대 토큰 128K), ClawEval은 temperature 0.6·256K입니다. 비교 모델 점수는 수록하지 않았고 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-246",
    "name": "Terminal-RSI-27B",
    "date": "2026-10-21",
    "sortDate": "2026-10-21",
    "month": "2026-10",
    "monthName": "October",
    "company": "Terminal-RSI",
    "family": "Terminal-RSI",
    "type": "LLM (terminal agent)",
    "category": "LLM",
    "status": "GA",
    "parameters": "27B dense (카드 기재: 패키지된 비전 구성 요소 포함 텐서 합계 27,781,427,952 BF16)",
    "architecture": "Qwen3.8-27B를 백본으로 한 후학습 모델(직렬화 구조 Qwen3_5ForConditionalGeneration) — 64층·hidden 5,120·구성 컨텍스트 262,144. 검증된 실행 궤적을 런북으로 다시 쓰는 Recursive Self-Rewrite(RSR)와 critic을 물려받는 Recursive Policy-Refine(RPR)을 번갈아 적용합니다(Base → RSR-1 → RPR-1 → RSR-2 → RPR-2).",
    "modalities": [
      "text"
    ],
    "focus": [
      "터미널 에이전트",
      "저장소 점검·코드 수정",
      "의존성 복구",
      "과학 워크플로 재구성"
    ],
    "open_weights": true,
    "license": "Apache 2.0",
    "context": "262,144 (구성 용량)",
    "languages": "영어, 중국어 (HF 카드 language 태그)",
    "variants": [],
    "reasoning_effort": [
      "thinking 비활성(논문 평가 설정)"
    ],
    "availability": "Hugging Face Teriminal-RSI/Terminal-RSI-27B (BF16 safetensors 13개 파일, 약 55.56GB)",
    "note": "Terminal-RSI 프로젝트가 Qwen3.8-27B 위에 재귀적 자기 개선 학습을 적용해 공개한 터미널 에이전트입니다. 공개일은 카드에 표기가 없어 HF 저장소 생성 시각(HF API createdAt 2026-10-21 04:52 UTC)을 근거로 했고, 논문(arXiv:2610.22192)은 2026-10-15 제출입니다. 카드는 점수가 '논문의 retained RPR-2 step-18 모델' 기준이라 밝히면서 참조하는 '체크포인트 구분' 절이 카드 본문에 없고, 이번 업로드에 대한 새 벤치마크 실행·전체 추론 검증·독립 안전성 평가는 하지 않았다고 명시합니다. 개발 주체의 소속·소재지는 카드에 없어 국가를 미공개로 표기했습니다.",
    "benchmarks": {
      "Terminal-Bench 4.0": 19.84,
      "Terminal-Bench 2.1": 86.52,
      "Terminal-Bench 3.0": 16.95,
      "Terminal-Bench Hard": 79.0,
      "SWR100": 6.0
    },
    "official_id": "Teriminal-RSI/Terminal-RSI-27B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/Teriminal-RSI/Terminal-RSI-27B"
      },
      {
        "label": "기술 보고서(arXiv)",
        "url": "https://arxiv.org/abs/2610.22192"
      },
      {
        "label": "프로젝트 페이지",
        "url": "https://jyyang26.github.io/terminal-rsi/"
      }
    ],
    "release_date_source": "https://huggingface.co/Teriminal-RSI/Terminal-RSI-27B",
    "parameter_source": "https://huggingface.co/Teriminal-RSI/Terminal-RSI-27B",
    "benchmark_sources": {
      "Terminal-Bench 4.0": "https://huggingface.co/Teriminal-RSI/Terminal-RSI-27B",
      "Terminal-Bench 2.1": "https://huggingface.co/Teriminal-RSI/Terminal-RSI-27B",
      "Terminal-Bench 3.0": "https://huggingface.co/Teriminal-RSI/Terminal-RSI-27B",
      "Terminal-Bench Hard": "https://huggingface.co/Teriminal-RSI/Terminal-RSI-27B",
      "SWR100": "https://huggingface.co/Teriminal-RSI/Terminal-RSI-27B"
    },
    "benchmark_note": "공식 카드 표에 인쇄된 논문 retained 모델의 성공률(%) 5개를 수록했습니다(추론 3회 평균 Mean@3). 평가 하니스: temperature 0.60·top-p 0.95, 턴당 최대 8,192 생성 토큰·호출당 입력 96,000 토큰, 구조화 JSON 행동, thinking 비활성, 누적 32,000 토큰에서 선제 요약. 같은 표의 Base(Qwen3.8-27B) 열(Terminal-Bench 2.1 51.70 등)은 이 하니스 기준 측정값이라 카탈로그의 Qwen3.8-27B 점수와 직접 비교할 수 없습니다. 4개 스위트 동일 가중 평균(50.58)은 파생 집계, LHTB(프로세스 보상 0.37·엄격 완료 5/46)는 비% 척도라 점수표에서 제외했습니다. 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-247",
    "name": "Ornith-1.5-397B",
    "date": "2026-08-18",
    "sortDate": "2026-08-18",
    "month": "2026-08",
    "monthName": "August",
    "company": "Ornith",
    "family": "Ornith",
    "type": "LLM (self-improvement MoE)",
    "category": "LLM",
    "status": "GA",
    "parameters": "397B MoE (모델명·카드 표기; HF 저장소 safetensors 메타데이터 합계 403,397,928,944 BF16), 활성 파라미터 카드 미명시",
    "architecture": "MoE 모델(Qwen3_5MoeForConditionalGeneration 구조) — config.json 기준 60층·hidden 4096·라우팅 전문가 512개 중 10개 선택(전문가 FFN 1024, 공유 전문가 FFN 1024)·어텐션 32 헤드/KV 2 헤드·어휘 248,320. config에 비전 구성이 있으나 카드는 입력 모달리티를 명시하지 않습니다. Ornith-1.0(Qwen3.5·Gemma 4 기반 CPT·mid-training·post-training)을 확장해 과제 생성·스캐폴드 구성·풀이 롤아웃을 함께 최적화하는 자기 개선 루프를 RL로 학습했다고 카드가 설명합니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "코딩 에이전트",
      "에이전틱 도구 사용",
      "추론",
      "검색·딥리서치"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "262,144 (config.json 기준)",
    "languages": "",
    "variants": [
      "Ornith-1.5-397B-FP8",
      "Ornith-1.5-397B-NVFP4",
      "Ornith-1.5-397B-GGUF",
      "Ornith-1.5-397B-DFlash"
    ],
    "reasoning_effort": [
      "reasoning (기본 <think> 블록)"
    ],
    "availability": "Hugging Face ornith-ai/Ornith-1.5-397B (BF16 safetensors) 및 FP8·NVFP4·GGUF·DFlash 변형",
    "note": "Ornith-1.5 계열의 플래그십 397B MoE 모델입니다. 블로그는 Terminal-Bench 2.1 86.1·DeepSWE 56.0으로 Claude Opus 4.8과 비슷하고 비슷한 규모의 오픈 모델(GLM-5.2·DeepSeek-V4-Flash-0731)을 앞선다고 주장합니다. 공개일은 카드·블로그(2026-08 표기)에 일자가 없어 HF 저장소 생성 시각(HF API createdAt 2026-08-18)을 근거로 했습니다. 개발 주체의 소재지는 카드·HF 조직 정보에 없어 국가를 미공개로 표기했습니다. 2026-10-26 HF 점검에서 누락이 확인돼 소급 수록했습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1 (Terminus-2)": 86.1,
      "Terminal-Bench 2.1 (Claude Code)": 85.2,
      "SWE-bench Verified": 86.0,
      "SWE-bench Pro": 65.1,
      "SWE-bench Multilingual": 79.6,
      "DeepSWE": 56.0,
      "Frontier-Bench v0.1": 13.5,
      "NL2Repo": 59.5,
      "SWE-Atlas-QnA": 55.6,
      "HLE (no tools)": 44.6,
      "HLE (with tools)": 56.1,
      "GPQA Diamond": 92.8,
      "MCP-Atlas": 80.0,
      "Toolathlon-Verified": 71.2,
      "WideSearch": 80.8,
      "BrowseComp": 86.6,
      "ClawEval": 81.4
    },
    "official_id": "ornith-ai/Ornith-1.5-397B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/ornith-ai/Ornith-1.5-397B"
      },
      {
        "label": "공식 블로그",
        "url": "https://ornith.ai/ornith_1_5.html"
      }
    ],
    "release_date_source": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
    "parameter_source": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
    "benchmark_sources": {
      "Terminal-Bench 2.1 (Terminus-2)": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "Terminal-Bench 2.1 (Claude Code)": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "SWE-bench Verified": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "SWE-bench Pro": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "SWE-bench Multilingual": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "DeepSWE": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "Frontier-Bench v0.1": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "NL2Repo": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "SWE-Atlas-QnA": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "HLE (no tools)": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "HLE (with tools)": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "GPQA Diamond": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "MCP-Atlas": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "Toolathlon-Verified": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "WideSearch": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "BrowseComp": "https://huggingface.co/ornith-ai/Ornith-1.5-397B",
      "ClawEval": "https://huggingface.co/ornith-ai/Ornith-1.5-397B"
    },
    "benchmark_note": "공식 카드 본문 비교표의 Ornith-1.5-397B 열 17개 점수를 수록했습니다(Terminal-Bench 2.1은 하니스별 두 값을 별도 항목으로 구분). 'All results reported for Ornith-1.5 are averaged over five independent runs'(5회 평균). Terminal-Bench 2.1 (Terminus-2)는 Harbor/Terminus-2(parser=json·temperature 1.0·top-p 1.0·128K 컨텍스트·4시간 타임아웃), (Claude Code)는 Claude Code 2.1.126(max_new_tokens 131072), SWE-bench 계열은 OpenHands 하니스(temperature 1.0·top-p 0.95·256K, git 기록 제거·네트워크 차단), SWE-Atlas-QnA는 mini-SWE-agent(128K), NL2Repo는 400K 컨텍스트·GitHub/pip 접근 차단, HLE 판정은 Claude 4.6 Opus, MCP-Atlas는 공개 500과제 부분집합(판정 Claude 4.8 Opus), Toolathlon-Verified는 공식 평가 서비스(최대 토큰 128K), ClawEval은 temperature 0.6·256K입니다. 비교 모델 점수는 수록하지 않았고 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-248",
    "name": "Ornith-1.5-35B-A3B",
    "date": "2026-08-18",
    "sortDate": "2026-08-18",
    "month": "2026-08",
    "monthName": "August",
    "company": "Ornith",
    "family": "Ornith",
    "type": "LLM (self-improvement MoE)",
    "category": "LLM",
    "status": "GA",
    "parameters": "35B total / ~3B active per token (카드 표기 '~3B'; HF 저장소 safetensors 메타데이터 합계 35,951,822,704 BF16)",
    "architecture": "MoE 모델(Qwen3_5MoeForConditionalGeneration 구조) — config.json 기준 40층·hidden 2048·라우팅 전문가 256개 중 8개 선택(전문가 FFN 512, 공유 전문가 FFN 512)·어텐션 16 헤드/KV 2 헤드·어휘 248,320. config에 비전 구성이 있으나 카드는 입력 모달리티를 명시하지 않습니다. 학습 방식은 Ornith-1.5 계열 공통의 자기 개선 RL입니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "코딩 에이전트",
      "에이전틱 도구 사용",
      "추론",
      "중형 효율 배포"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "262,144 (config.json 기준)",
    "languages": "",
    "variants": [
      "Ornith-1.5-35B-A3B-FP8",
      "Ornith-1.5-35B-A3B-NVFP4",
      "Ornith-1.5-35B-A3B-GGUF",
      "Ornith-1.5-35B-A3B-MLX(4·6·8bit)",
      "Ornith-1.5-35B-A3B-DFlash"
    ],
    "reasoning_effort": [
      "reasoning (기본 <think> 블록)"
    ],
    "availability": "Hugging Face ornith-ai/Ornith-1.5-35B-A3B (BF16 safetensors) 및 FP8·NVFP4·GGUF·MLX·DFlash 변형",
    "note": "Ornith-1.5 계열의 중형 MoE 모델로, 카드는 토큰당 약 3B만 활성화하면서도 같은 크기의 Qwen3.6-35B를 모든 코딩·에이전트 벤치마크에서 앞서고 Gemma 4-31B·Muse Glimmer-30B 같은 밀집 모델도 앞선다고 설명합니다. 공개일은 카드·블로그(2026-08 표기)에 일자가 없어 HF 저장소 생성 시각(HF API createdAt 2026-08-18)을 근거로 했습니다. 개발 주체의 소재지는 카드·HF 조직 정보에 없어 국가를 미공개로 표기했습니다. 2026-10-26 HF 점검에서 누락이 확인돼 소급 수록했습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1 (Terminus-2)": 67.8,
      "Terminal-Bench 2.1 (Claude Code)": 68.5,
      "SWE-bench Verified": 79.0,
      "SWE-bench Pro": 59.6,
      "SWE-bench Multilingual": 71.4,
      "DeepSWE": 22.0,
      "Frontier-Bench v0.1": 5.1,
      "NL2Repo": 46.2,
      "SWE-Atlas-QnA": 39.8,
      "HLE (no tools)": 25.6,
      "HLE (with tools)": 33.4,
      "GPQA Diamond": 89.2,
      "MCP-Atlas": 70.2,
      "Toolathlon-Verified": 48.7,
      "WideSearch": 67.8,
      "BrowseComp": 67.6,
      "ClawEval": 72.5
    },
    "official_id": "ornith-ai/Ornith-1.5-35B-A3B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B"
      },
      {
        "label": "공식 블로그",
        "url": "https://ornith.ai/ornith_1_5.html"
      }
    ],
    "release_date_source": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
    "parameter_source": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
    "benchmark_sources": {
      "Terminal-Bench 2.1 (Terminus-2)": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "Terminal-Bench 2.1 (Claude Code)": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "SWE-bench Verified": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "SWE-bench Pro": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "SWE-bench Multilingual": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "DeepSWE": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "Frontier-Bench v0.1": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "NL2Repo": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "SWE-Atlas-QnA": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "HLE (no tools)": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "HLE (with tools)": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "GPQA Diamond": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "MCP-Atlas": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "Toolathlon-Verified": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "WideSearch": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "BrowseComp": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B",
      "ClawEval": "https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B"
    },
    "benchmark_note": "공식 카드 본문 비교표의 Ornith-1.5-35B-A3B 열 17개 점수를 수록했습니다(Terminal-Bench 2.1은 하니스별 두 값을 별도 항목으로 구분). 'All results reported for Ornith-1.5 are averaged over five independent runs'(5회 평균). Terminal-Bench 2.1 (Terminus-2)는 Harbor/Terminus-2(parser=json·temperature 1.0·top-p 1.0·128K 컨텍스트·4시간 타임아웃), (Claude Code)는 Claude Code 2.1.126(max_new_tokens 131072), SWE-bench 계열은 OpenHands 하니스(temperature 1.0·top-p 0.95·256K, git 기록 제거·네트워크 차단), SWE-Atlas-QnA는 mini-SWE-agent(128K), NL2Repo는 400K 컨텍스트·GitHub/pip 접근 차단, HLE 판정은 Claude 4.6 Opus, MCP-Atlas는 공개 500과제 부분집합(판정 Claude 4.8 Opus), Toolathlon-Verified는 공식 평가 서비스(최대 토큰 128K), ClawEval은 temperature 0.6·256K입니다. 비교 모델 점수는 수록하지 않았고 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-249",
    "name": "Ornith-1.5-9B",
    "date": "2026-08-18",
    "sortDate": "2026-08-18",
    "month": "2026-08",
    "monthName": "August",
    "company": "Ornith",
    "family": "Ornith",
    "type": "LLM (self-improvement dense)",
    "category": "LLM",
    "status": "GA",
    "parameters": "9B dense (모델명·카드 표기; HF 저장소 safetensors 메타데이터 합계 9,653,104,368 BF16, 비전 구성 요소 포함 추정)",
    "architecture": "밀집(dense) 모델(Qwen3_5ForConditionalGeneration 구조) — config.json 기준 32층·hidden 4096·FFN 12288·어텐션 16 헤드/KV 4 헤드·어휘 248,320. config에 비전 구성이 있으나 카드는 입력 모달리티를 명시하지 않습니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "코딩 에이전트",
      "에이전틱 도구 사용",
      "단일 GPU·모바일(양자화 Mobile 변형) 배포"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "262,144 (config.json 기준)",
    "languages": "",
    "variants": [
      "Ornith-1.5-9B-NVFP4",
      "Ornith-1.5-9B-GGUF",
      "Ornith-1.5-9B-MLX(4·6·8bit)",
      "Ornith-1.5-9B-DFlash",
      "Ornith-1.5-9B-Mobile (카드·블로그 언급)"
    ],
    "reasoning_effort": [
      "reasoning (기본 <think> 블록)"
    ],
    "availability": "Hugging Face ornith-ai/Ornith-1.5-9B (BF16 safetensors) 및 NVFP4·GGUF·MLX·DFlash 변형",
    "note": "Ornith-1.5 계열의 가장 가벼운 9B 밀집 모델로, 단일 GPU 서빙과 양자화 Mobile 변형을 통한 iPhone·Android 배포를 내세웁니다. 공개일은 카드·블로그(2026-08 표기)에 일자가 없어 HF 저장소 생성 시각(HF API createdAt 2026-08-18)을 근거로 했습니다. 개발 주체의 소재지는 카드·HF 조직 정보에 없어 국가를 미공개로 표기했습니다. 2026-10-26 HF 점검에서 누락이 확인돼 소급 수록했습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1 (Terminus-2)": 46.2,
      "Terminal-Bench 2.1 (Claude Code)": 47.0,
      "SWE-bench Verified": 70.6,
      "SWE-bench Pro": 47.5,
      "SWE-bench Multilingual": 54.4,
      "NL2Repo": 32.4,
      "SWE-Atlas-QnA": 20.6,
      "HLE (no tools)": 20.2,
      "HLE (with tools)": 30.5,
      "GPQA Diamond": 86.4,
      "MCP-Atlas": 54.2,
      "Toolathlon-Verified": 41.2,
      "WideSearch": 59.5,
      "BrowseComp": 56.4,
      "ClawEval": 66.5
    },
    "official_id": "ornith-ai/Ornith-1.5-9B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/ornith-ai/Ornith-1.5-9B"
      },
      {
        "label": "공식 블로그",
        "url": "https://ornith.ai/ornith_1_5.html"
      }
    ],
    "release_date_source": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
    "parameter_source": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
    "benchmark_sources": {
      "Terminal-Bench 2.1 (Terminus-2)": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "Terminal-Bench 2.1 (Claude Code)": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "SWE-bench Verified": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "SWE-bench Pro": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "SWE-bench Multilingual": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "NL2Repo": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "SWE-Atlas-QnA": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "HLE (no tools)": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "HLE (with tools)": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "GPQA Diamond": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "MCP-Atlas": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "Toolathlon-Verified": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "WideSearch": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "BrowseComp": "https://huggingface.co/ornith-ai/Ornith-1.5-9B",
      "ClawEval": "https://huggingface.co/ornith-ai/Ornith-1.5-9B"
    },
    "benchmark_note": "공식 카드 본문 비교표의 Ornith-1.5-9B 열 15개 점수를 수록했습니다(Terminal-Bench 2.1은 하니스별 두 값을 별도 항목으로 구분, DeepSWE·Frontier-Bench 행은 이 카드에 없음). 'All results reported for Ornith-1.5 are averaged over five independent runs'(5회 평균). Terminal-Bench 2.1 (Terminus-2)는 Harbor/Terminus-2(parser=json·temperature 1.0·top-p 1.0·128K 컨텍스트·4시간 타임아웃), (Claude Code)는 Claude Code 2.1.126(max_new_tokens 131072), SWE-bench 계열은 OpenHands 하니스(temperature 1.0·top-p 0.95·256K, git 기록 제거·네트워크 차단), SWE-Atlas-QnA는 mini-SWE-agent(128K), NL2Repo는 400K 컨텍스트·GitHub/pip 접근 차단, HLE 판정은 Claude 4.6 Opus, MCP-Atlas는 공개 500과제 부분집합(판정 Claude 4.8 Opus), Toolathlon-Verified는 공식 평가 서비스(최대 토큰 128K), ClawEval은 temperature 0.6·256K입니다. 비교 모델 점수는 수록하지 않았고 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-250",
    "name": "Ornith-1.0-397B",
    "date": "2026-06-23",
    "sortDate": "2026-06-23",
    "month": "2026-06",
    "monthName": "June",
    "company": "Ornith",
    "family": "Ornith",
    "type": "LLM (self-scaffolding coding MoE)",
    "category": "LLM",
    "status": "GA",
    "parameters": "397B MoE (모델명·카드 표기; HF 저장소 safetensors 메타데이터 합계 396,802,360,816), 활성 파라미터 카드 미명시",
    "architecture": "MoE 모델(Qwen3_5MoeForConditionalGeneration 구조) — config.json 기준 60층·hidden 4096·라우팅 전문가 512개 중 10개 선택(전문가 FFN 1024, 공유 전문가 FFN 1024)·어텐션 32 헤드/KV 2 헤드·어휘 248,320. config에 비전 구성이 있으나 카드는 입력 모달리티를 명시하지 않습니다. Ornith-1.0은 Gemma 4와 Qwen 3.5 위에서 후학습한 자기 개선(self-scaffolding) 에이전틱 코딩 모델 계열로, 풀이 롤아웃뿐 아니라 그 롤아웃을 이끄는 스캐폴드도 RL로 함께 생성하도록 학습했다고 카드가 설명합니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "에이전틱 코딩",
      "코드베이스 수정·테스트",
      "터미널 에이전트"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "262,144 (config.json 기준)",
    "languages": "",
    "variants": [
      "Ornith-1.0-397B-FP8"
    ],
    "reasoning_effort": [
      "reasoning (기본 <think> 블록)"
    ],
    "availability": "Hugging Face ornith-ai/Ornith-1.0-397B (BF16 safetensors) 및 FP8 변형",
    "note": "Ornith-1.0 계열의 최대 구성인 397B MoE 모델입니다(카드 소개 문장은 'lightweight member…single-GPU deployment'로 다른 크기 카드와 같은 문구를 재사용). 공개일은 카드·블로그(2026-06 표기)에 일자가 없어 HF 저장소 생성 시각(HF API createdAt 2026-06-23T21:31:47Z)을 근거로 했습니다. 카드의 Terminus-2 각주 링크가 `deepreinforce-ai/Ornith-1.0-397B`를 가리키지만 그 조직 페이지는 확인되지 않아 개발 주체의 소재지는 미공개로 표기했습니다. 블로그는 31B 밀집 구성도 언급하지만 HF에서 해당 저장소를 찾지 못해 수록하지 않았습니다. 2026-10-26 점검에서 누락이 확인돼 소급 수록했습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1 (Terminus-2)": 77.5,
      "Terminal-Bench 2.1 (Claude Code)": 78.2,
      "SWE-bench Verified": 82.4,
      "SWE-bench Pro": 62.2,
      "SWE-bench Multilingual": 78.9,
      "NL2Repo": 48.2,
      "Claw-eval Avg": 77.1,
      "SWE-Atlas-QnA": 41.2,
      "SWE-Atlas-RF": 42.6,
      "SWE-Atlas-TW": 39.1
    },
    "official_id": "ornith-ai/Ornith-1.0-397B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/ornith-ai/Ornith-1.0-397B"
      },
      {
        "label": "공식 블로그",
        "url": "https://ornith.ai/ornith_1_0.html"
      }
    ],
    "release_date_source": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
    "parameter_source": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
    "benchmark_sources": {
      "Terminal-Bench 2.1 (Terminus-2)": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
      "Terminal-Bench 2.1 (Claude Code)": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
      "SWE-bench Verified": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
      "SWE-bench Pro": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
      "SWE-bench Multilingual": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
      "NL2Repo": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
      "Claw-eval Avg": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
      "SWE-Atlas-QnA": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
      "SWE-Atlas-RF": "https://huggingface.co/ornith-ai/Ornith-1.0-397B",
      "SWE-Atlas-TW": "https://huggingface.co/ornith-ai/Ornith-1.0-397B"
    },
    "benchmark_note": "공식 카드 본문 비교표의 Ornith-1.0-397B 열 10개 점수를 수록했습니다(Terminal-Bench 2.1은 하니스별 두 값을 별도 항목으로 구분). 'SWE Atlas - RF/TW'는 카드 표기를 SWE-Atlas-RF/TW로 옮겼으며 약어 풀이는 카드에 없습니다. 평가 조건은 카드 각주 기준입니다. Terminal-Bench 2.1 (Terminus-2)는 Harbor/Terminus-2(parser=json·temperature 1.0·top-p 1.0·128K 컨텍스트·4시간 타임아웃·5회 평균), (Claude Code)는 Claude Code 2.1.126(max_new_tokens 131072·5회 평균), SWE-bench 계열은 OpenHands 하니스(temperature 1.0·top-p 0.95·256K), SWE-Atlas QnA·RF·TW는 mini-SWE-agent(128K·5회 평균), NL2Repo는 400K 컨텍스트·48K 출력·해킹 방지 필터, Claw-eval Avg는 temperature 0.6·256K입니다. 1.5 카드와 달리 SWE-bench 해킹 방지 규칙 문구가 없습니다. 비교 모델 점수는 수록하지 않았고 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-251",
    "name": "Ornith-1.0-35B",
    "date": "2026-06-21",
    "sortDate": "2026-06-21",
    "month": "2026-06",
    "monthName": "June",
    "company": "Ornith",
    "family": "Ornith",
    "type": "LLM (self-scaffolding coding MoE)",
    "category": "LLM",
    "status": "GA",
    "parameters": "35B MoE (모델명·카드 표기), 활성 파라미터 카드 미명시",
    "architecture": "MoE 모델(Qwen3_5MoeForConditionalGeneration 구조) — config.json 기준 40층·hidden 2048·라우팅 전문가 256개 중 8개 선택(전문가 FFN 512, 공유 전문가 FFN 512)·어텐션 16 헤드/KV 2 헤드·어휘 248,320. config에 비전 구성이 있으나 카드는 입력 모달리티를 명시하지 않습니다. Ornith-1.0은 Gemma 4와 Qwen 3.5 위에서 후학습한 자기 개선(self-scaffolding) 에이전틱 코딩 모델 계열로, 풀이 롤아웃뿐 아니라 그 롤아웃을 이끄는 스캐폴드도 RL로 함께 생성하도록 학습했다고 카드가 설명합니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "에이전틱 코딩",
      "코드베이스 수정·테스트",
      "단일 GPU 배포"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "262,144 (config.json 기준)",
    "languages": "",
    "variants": [
      "Ornith-1.0-35B-FP8",
      "Ornith-1.0-35B-GGUF"
    ],
    "reasoning_effort": [
      "reasoning (기본 <think> 블록)"
    ],
    "availability": "Hugging Face ornith-ai/Ornith-1.0-35B (BF16 safetensors) 및 FP8·GGUF 변형",
    "note": "Ornith-1.0 계열의 35B MoE 모델로, 블로그는 35B 파라미터만으로 Gemma 4-31B를 앞선다고 주장합니다(후속 Ornith-1.5-35B-A3B로 이어짐). 공개일은 카드·블로그(2026-06 표기)에 일자가 없어 HF 저장소 생성 시각(HF API createdAt 2026-06-21T03:30:07Z)을 근거로 했습니다. 카드의 Terminus-2 각주 링크가 `deepreinforce-ai/Ornith-1.0-397B`를 가리키지만 그 조직 페이지는 확인되지 않아 개발 주체의 소재지는 미공개로 표기했습니다. 블로그는 31B 밀집 구성도 언급하지만 HF에서 해당 저장소를 찾지 못해 수록하지 않았습니다. 2026-10-26 점검에서 누락이 확인돼 소급 수록했습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1 (Terminus-2)": 64.2,
      "Terminal-Bench 2.1 (Claude Code)": 62.8,
      "SWE-bench Verified": 75.6,
      "SWE-bench Pro": 50.4,
      "SWE-bench Multilingual": 69.3,
      "NL2Repo": 34.6,
      "Claw-eval Avg": 69.8,
      "SWE-Atlas-QnA": 37.1,
      "SWE-Atlas-RF": 29.7,
      "SWE-Atlas-TW": 27.8
    },
    "official_id": "ornith-ai/Ornith-1.0-35B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/ornith-ai/Ornith-1.0-35B"
      },
      {
        "label": "공식 블로그",
        "url": "https://ornith.ai/ornith_1_0.html"
      }
    ],
    "release_date_source": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
    "parameter_source": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
    "benchmark_sources": {
      "Terminal-Bench 2.1 (Terminus-2)": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
      "Terminal-Bench 2.1 (Claude Code)": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
      "SWE-bench Verified": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
      "SWE-bench Pro": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
      "SWE-bench Multilingual": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
      "NL2Repo": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
      "Claw-eval Avg": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
      "SWE-Atlas-QnA": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
      "SWE-Atlas-RF": "https://huggingface.co/ornith-ai/Ornith-1.0-35B",
      "SWE-Atlas-TW": "https://huggingface.co/ornith-ai/Ornith-1.0-35B"
    },
    "benchmark_note": "공식 카드 본문 비교표의 Ornith-1.0-35B 열 10개 점수를 수록했습니다(Terminal-Bench 2.1은 하니스별 두 값을 별도 항목으로 구분). 'SWE Atlas - RF/TW'는 카드 표기를 SWE-Atlas-RF/TW로 옮겼으며 약어 풀이는 카드에 없습니다. 평가 조건은 카드 각주 기준입니다. Terminal-Bench 2.1 (Terminus-2)는 Harbor/Terminus-2(parser=json·temperature 1.0·top-p 1.0·128K 컨텍스트·4시간 타임아웃·5회 평균), (Claude Code)는 Claude Code 2.1.126(max_new_tokens 131072·5회 평균), SWE-bench 계열은 OpenHands 하니스(temperature 1.0·top-p 0.95·256K), SWE-Atlas QnA·RF·TW는 mini-SWE-agent(128K·5회 평균), NL2Repo는 400K 컨텍스트·48K 출력·해킹 방지 필터, Claw-eval Avg는 temperature 0.6·256K입니다. 1.5 카드와 달리 SWE-bench 해킹 방지 규칙 문구가 없습니다. 비교 모델 점수는 수록하지 않았고 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-partial",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  },
  {
    "id": "model-252",
    "name": "Ornith-1.0-9B",
    "date": "2026-06-21",
    "sortDate": "2026-06-21",
    "month": "2026-06",
    "monthName": "June",
    "company": "Ornith",
    "family": "Ornith",
    "type": "LLM (self-scaffolding coding dense)",
    "category": "LLM",
    "status": "GA",
    "parameters": "9B dense (모델명·카드 표기)",
    "architecture": "밀집(dense) 모델(Qwen3_5ForConditionalGeneration 구조) — config.json 기준 32층·hidden 4096·FFN 12288·어텐션 16 헤드/KV 4 헤드·어휘 248,320. config에 비전 구성이 있으나 카드는 입력 모달리티를 명시하지 않습니다. Ornith-1.0은 Gemma 4와 Qwen 3.5 위에서 후학습한 자기 개선(self-scaffolding) 에이전틱 코딩 모델 계열로, 풀이 롤아웃뿐 아니라 그 롤아웃을 이끄는 스캐폴드도 RL로 함께 생성하도록 학습했다고 카드가 설명합니다.",
    "modalities": [
      "text"
    ],
    "focus": [
      "에이전틱 코딩",
      "코드베이스 수정·테스트",
      "단일 GPU 배포"
    ],
    "open_weights": true,
    "license": "MIT",
    "context": "262,144 (config.json 기준)",
    "languages": "",
    "variants": [
      "Ornith-1.0-9B-GGUF"
    ],
    "reasoning_effort": [
      "reasoning (기본 <think> 블록)"
    ],
    "availability": "Hugging Face ornith-ai/Ornith-1.0-9B (BF16 safetensors) 및 GGUF 변형",
    "note": "Ornith-1.0 계열의 가장 가벼운 9B 밀집 모델입니다(후속 Ornith-1.5-9B로 이어짐). 공개일은 카드·블로그(2026-06 표기)에 일자가 없어 HF 저장소 생성 시각(HF API createdAt 2026-06-21T04:27:07Z)을 근거로 했습니다. 카드의 Terminus-2 각주 링크가 `deepreinforce-ai/Ornith-1.0-397B`를 가리키지만 그 조직 페이지는 확인되지 않아 개발 주체의 소재지는 미공개로 표기했습니다. 블로그는 31B 밀집 구성도 언급하지만 HF에서 해당 저장소를 찾지 못해 수록하지 않았습니다. 2026-10-26 점검에서 누락이 확인돼 소급 수록했습니다.",
    "benchmarks": {
      "Terminal-Bench 2.1 (Terminus-2)": 43.1,
      "Terminal-Bench 2.1 (Claude Code)": 40.6,
      "SWE-bench Verified": 69.4,
      "SWE-bench Pro": 42.9,
      "SWE-bench Multilingual": 52.0,
      "NL2Repo": 27.2,
      "Claw-eval Avg": 63.1,
      "SWE-Atlas-QnA": 17.9,
      "SWE-Atlas-RF": 16.6,
      "SWE-Atlas-TW": 15.3
    },
    "official_id": "ornith-ai/Ornith-1.0-9B",
    "official_sources": [
      {
        "label": "공식 모델 카드(Hugging Face)",
        "url": "https://huggingface.co/ornith-ai/Ornith-1.0-9B"
      },
      {
        "label": "공식 블로그",
        "url": "https://ornith.ai/ornith_1_0.html"
      }
    ],
    "release_date_source": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
    "parameter_source": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
    "benchmark_sources": {
      "Terminal-Bench 2.1 (Terminus-2)": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
      "Terminal-Bench 2.1 (Claude Code)": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
      "SWE-bench Verified": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
      "SWE-bench Pro": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
      "SWE-bench Multilingual": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
      "NL2Repo": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
      "Claw-eval Avg": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
      "SWE-Atlas-QnA": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
      "SWE-Atlas-RF": "https://huggingface.co/ornith-ai/Ornith-1.0-9B",
      "SWE-Atlas-TW": "https://huggingface.co/ornith-ai/Ornith-1.0-9B"
    },
    "benchmark_note": "공식 카드 본문 비교표의 Ornith-1.0-9B 열 10개 점수를 수록했습니다(Terminal-Bench 2.1은 하니스별 두 값을 별도 항목으로 구분). 'SWE Atlas - RF/TW'는 카드 표기를 SWE-Atlas-RF/TW로 옮겼으며 약어 풀이는 카드에 없습니다. 평가 조건은 카드 각주 기준입니다. Terminal-Bench 2.1 (Terminus-2)는 Harbor/Terminus-2(parser=json·temperature 1.0·top-p 1.0·128K 컨텍스트·4시간 타임아웃·5회 평균), (Claude Code)는 Claude Code 2.1.126(max_new_tokens 131072·5회 평균), SWE-bench 계열은 OpenHands 하니스(temperature 1.0·top-p 0.95·256K), SWE-Atlas QnA·RF·TW는 mini-SWE-agent(128K·5회 평균), NL2Repo는 400K 컨텍스트·48K 출력·해킹 방지 필터, Claw-eval Avg는 temperature 0.6·256K입니다. 1.5 카드와 달리 SWE-bench 해킹 방지 규칙 문구가 없습니다. 비교 모델 점수는 수록하지 않았고 모든 수치는 개발사 자체 보고입니다.",
    "parameter_status": "publisher-approximate",
    "verification": {
      "status": "reviewed",
      "reviewed_on": "2026-10-26",
      "policy": "official-primary-only"
    }
  }
];

const COMPANY_META = {
  "Alibaba": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-orange-500 to-amber-500",
    "badge": "bg-orange-500/10 text-orange-400 border-orange-500/30"
  },
  "Anthropic": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-amber-600 to-yellow-500",
    "badge": "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  "Ant Group / InclusionAI": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-blue-600 to-indigo-500",
    "badge": "bg-blue-500/10 text-blue-400 border-blue-500/30"
  },
  "Arcee AI": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-teal-500 to-emerald-500",
    "badge": "bg-teal-500/10 text-teal-400 border-teal-500/30"
  },
  "Baidu": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-blue-500 to-sky-400",
    "badge": "bg-sky-500/10 text-sky-400 border-sky-500/30"
  },
  "ByteDance": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-cyan-500 to-blue-500",
    "badge": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
  },
  "Cohere": {
    "country": "CA",
    "flag": "🇨🇦",
    "color": "from-emerald-500 to-teal-400",
    "badge": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  "Cohere Labs": {
    "country": "CA",
    "flag": "🇨🇦",
    "color": "from-emerald-500 to-teal-400",
    "badge": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  "DeepSeek": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-cyan-400 to-blue-600",
    "badge": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
  },
  "Google DeepMind": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-blue-400 via-indigo-400 to-purple-500",
    "badge": "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
  },
  "IBM": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-blue-700 to-indigo-600",
    "badge": "bg-blue-700/10 text-blue-300 border-blue-700/30"
  },
  "Meituan": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-yellow-400 to-amber-500",
    "badge": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
  },
  "Meta": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-blue-600 to-sky-400",
    "badge": "bg-blue-600/10 text-blue-400 border-blue-500/30"
  },
  "MiniMax": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-violet-500 to-purple-600",
    "badge": "bg-violet-500/10 text-violet-300 border-violet-500/30"
  },
  "Mistral AI": {
    "country": "FR",
    "flag": "🇫🇷",
    "color": "from-orange-600 to-amber-500",
    "badge": "bg-orange-600/10 text-orange-300 border-orange-600/30"
  },
  "Moonshot AI": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-purple-500 to-pink-500",
    "badge": "bg-purple-500/10 text-purple-300 border-purple-500/30"
  },
  "Motif Technologies": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-rose-500 to-pink-500",
    "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"
  },
  "NAVER Cloud": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-green-500 to-emerald-500",
    "badge": "bg-green-500/10 text-green-300 border-green-500/30"
  },
  "NVIDIA": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-green-600 to-lime-500",
    "badge": "bg-lime-500/10 text-lime-400 border-lime-500/30"
  },
  "OpenAI": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-emerald-500 to-teal-600",
    "badge": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
  },
  "Poolside": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-sky-400 to-cyan-500",
    "badge": "bg-sky-400/10 text-sky-300 border-sky-400/30"
  },
  "Sarvam AI": {
    "country": "IN",
    "flag": "🇮🇳",
    "color": "from-amber-500 to-orange-600",
    "badge": "bg-amber-600/10 text-amber-300 border-amber-600/30"
  },
  "StepFun": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-indigo-500 to-blue-600",
    "badge": "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
  },
  "Tencent": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-blue-500 to-teal-500",
    "badge": "bg-blue-500/10 text-blue-300 border-blue-500/30"
  },
  "Thinking Machines Lab": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-fuchsia-500 to-purple-600",
    "badge": "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30"
  },
  "Upstage": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-amber-400 to-yellow-500",
    "badge": "bg-amber-400/10 text-amber-300 border-amber-400/30"
  },
  "Xiaomi": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-orange-500 to-amber-600",
    "badge": "bg-orange-500/10 text-orange-400 border-orange-500/30"
  },
  "Z.ai": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-rose-500 to-red-500",
    "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"
  },
  "xAI / SpaceXAI": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-gray-300 to-slate-400",
    "badge": "bg-slate-400/10 text-slate-300 border-slate-400/30"
  },
  "LG AI Research": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-rose-500 to-red-600",
    "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"
  },
  "LG": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-rose-500 to-red-600",
    "badge": "bg-rose-500/10 text-rose-300 border-rose-500/30"
  },
  "SK Telecom": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-red-500 to-orange-500",
    "badge": "bg-red-500/10 text-red-300 border-red-500/30"
  },
  "SKT": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-red-500 to-orange-500",
    "badge": "bg-red-500/10 text-red-300 border-red-500/30"
  },
  "Institute of Foundation Models": {
    "country": "AE",
    "flag": "🇦🇪",
    "color": "from-teal-500 to-emerald-500",
    "badge": "bg-teal-500/10 text-teal-300 border-teal-500/30"
  },
  "Cognition": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-sky-500 to-indigo-500",
    "badge": "bg-sky-500/10 text-sky-300 border-sky-500/30"
  },
  "Salesforce": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-blue-500 to-cyan-500",
    "badge": "bg-blue-500/10 text-blue-300 border-blue-500/30"
  },
  "Gensyn": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-lime-500 to-green-500",
    "badge": "bg-lime-500/10 text-lime-300 border-lime-500/30"
  },
  "Accio-Lab": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-violet-500 to-purple-500",
    "badge": "bg-violet-500/10 text-violet-300 border-violet-500/30"
  },
  "Shanghai Artificial Intelligence Laboratory": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-red-500 to-rose-600",
    "badge": "bg-red-500/10 text-red-300 border-red-500/30"
  },
  "GenON": {
    "country": "KR",
    "flag": "🇰🇷",
    "color": "from-emerald-600 to-teal-500",
    "badge": "bg-teal-500/10 text-teal-300 border-teal-500/30"
  },
  "Sber": {
    "country": "RU",
    "flag": "🇷🇺",
    "color": "from-green-500 to-emerald-600",
    "badge": "bg-green-500/10 text-green-300 border-green-500/30"
  },
  "Nex-AGI": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-sky-500 to-indigo-600",
    "badge": "bg-sky-500/10 text-sky-400 border-sky-500/30"
  },
  "Yandex": {
    "country": "RU",
    "flag": "🇷🇺",
    "color": "from-red-500 to-amber-500",
    "badge": "bg-red-500/10 text-red-400 border-red-500/30"
  },
  "TypeSafe AI": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-indigo-500 to-violet-600",
    "badge": "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
  },
  "Contrastive-LM": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-violet-500 to-purple-600",
    "badge": "bg-violet-500/10 text-violet-300 border-violet-500/30"
  },
  "Apple": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-gray-400 to-slate-500",
    "badge": "bg-slate-400/10 text-slate-300 border-slate-400/30"
  },
  "Convai Innovations": {
    "country": "IN",
    "flag": "🇮🇳",
    "gradient": "linear-gradient(135deg,#f97316,#38bdf8)",
    "badge": "PyPI·npm 생태계의 System One 결정 모델"
  },
  "Tsinghua SIGS Robot Lab": {
    "country": "CN",
    "flag": "🇨🇳",
    "gradient": "linear-gradient(135deg,#7c3aed,#06b6d4)",
    "badge": "칭화대 심천 국제대학원 로봇 연구실"
  },
  "Perceptron": {
    "country": "US",
    "flag": "🇺🇸",
    "gradient": "linear-gradient(135deg,#0ea5e9,#a855f7)",
    "badge": "Embodied agent 제어 MLLM"
  },
  "H Company": {
    "country": "FR",
    "flag": "🇫🇷",
    "gradient": "linear-gradient(135deg,#2563eb,#f59e0b)",
    "badge": "Computer-use 에이전트 모델"
  },
  "AutoTrust AI": {
    "country": "SG",
    "flag": "🇸🇬",
    "gradient": "linear-gradient(135deg,#10b981,#6366f1)",
    "badge": "System 1+System 2 통합 오픈 모델"
  },
  "IQuest": {
    "country": "미공개",
    "flag": "🌐",
    "gradient": "linear-gradient(135deg,#0ea5e9,#6366f1)",
    "badge": "CLI 에이전트 특화 오픈 소스 MoE"
  },
  "Bilibili": {
    "country": "CN",
    "flag": "🇨🇳",
    "gradient": "linear-gradient(135deg,#fb7299,#38bdf8)",
    "badge": "Index LLM 번역 특화 패밀리"
  },
  "VIDRAFT": {
    "country": "KR",
    "flag": "🇰🇷",
    "gradient": "linear-gradient(135deg,#6366f1,#f43f5e)",
    "badge": "Darwin RSI 추론 패밀리"
  },
  "AWS Strands Labs": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-amber-600 to-orange-500",
    "badge": "bg-orange-500/10 text-orange-400 border-orange-500/30"
  },
  "Cloudflare": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-orange-400 to-amber-400",
    "badge": "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  "Aleph Alpha": {
    "country": "DE",
    "flag": "🇩🇪",
    "color": "from-sky-600 to-cyan-500",
    "badge": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
  },
  "Liquid AI": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-cyan-500 to-blue-500",
    "badge": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
  },
  "OpenBMB": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-sky-500 to-indigo-500",
    "badge": "bg-sky-500/10 text-sky-300 border-sky-500/30"
  },
  "KRAFTON": {
    "country": "KR",
    "flag": "🇰🇷",
    "gradient": "linear-gradient(135deg,#0f172a,#e11d48)",
    "badge": "KRAFTON AI · Raon 오픈웨이트 LLM"
  },
  "MemTensor": {
    "country": "CN",
    "flag": "🇨🇳",
    "gradient": "linear-gradient(135deg,#7c3aed,#06b6d4)",
    "badge": "메모리 네이티브 파운데이션 모델"
  },
  "Inception Labs": {
    "country": "US",
    "flag": "🇺🇸",
    "gradient": "linear-gradient(135deg,#111827,#22d3ee)",
    "badge": "확산(diffusion) LLM · Mercury"
  },
  "ElevenLabs": {
    "country": "US",
    "flag": "🇺🇸",
    "gradient": "linear-gradient(135deg,#111827,#a3e635)",
    "badge": "실시간 음성 에이전트 S2S"
  },
  "H2O.ai": {
    "country": "US",
    "flag": "🇺🇸",
    "gradient": "linear-gradient(135deg,#f59e0b,#ef4444)",
    "badge": "System One 결정 모델 · Lightning"
  },
  "iFLYTEK": {
    "country": "CN",
    "flag": "🇨🇳",
    "gradient": "linear-gradient(135deg,#dc2626,#f59e0b)",
    "badge": "Spark 온디바이스 LLM"
  },
  "Recursive": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-emerald-500 to-teal-500",
    "badge": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  "Reflection AI": {
    "country": "US",
    "flag": "🇺🇸",
    "color": "from-violet-500 to-fuchsia-500",
    "badge": "bg-violet-500/10 text-violet-400 border-violet-500/30"
  },
  "Nanbeige": {
    "country": "CN",
    "flag": "🇨🇳",
    "color": "from-sky-500 to-indigo-500",
    "badge": "bg-sky-500/10 text-sky-400 border-sky-500/30"
  },
  "Ornith": {
    "country": "미공개",
    "flag": "🌐",
    "gradient": "linear-gradient(135deg,#f97316,#ef4444)",
    "badge": "자기 개선 오픈 모델"
  },
  "Terminal-RSI": {
    "country": "미공개",
    "flag": "🌐",
    "gradient": "linear-gradient(135deg,#14b8a6,#6366f1)",
    "badge": "터미널 에이전트 연구"
  }
};

const FAMILY_FLOWS = [
  {
    "family": "Qwen",
    "steps": [
      "Qwen3.5",
      "Qwen3.6",
      "Qwen3.7",
      "Qwen3.8",
      "Qwen3.8-Flash-Next",
      "Qwen3.8-Omni-Flash"
    ]
  },
  {
    "family": "DeepSeek",
    "steps": [
      "DeepSeek-V4 Preview",
      "DeepSeek-V4-Flash-0731",
      "DeepSeek-V4-Pro-0813",
      "DeepSeek-V4-Flash-Vision-Exp",
      "DeepSeek-V4.1-Flash",
      "DeepSeek-V4.1-Flash-1017"
    ]
  },
  {
    "family": "Claude",
    "steps": [
      "Opus 4.6",
      "Sonnet 4.6",
      "Opus 4.7",
      "Opus 4.8",
      "Fable/Mythos 5",
      "Sonnet 5",
      "Opus 5",
      "Fable/Mythos 5.1",
      "Opus 5.5",
      "Sonnet 5.5",
      "Haiku 5.5"
    ]
  },
  {
    "family": "GPT",
    "steps": [
      "GPT-5.3",
      "GPT-5.4",
      "GPT-5.5",
      "GPT-5.6",
      "GPT-6 Astra",
      "GPT-6 Astra Pro",
      "GPT-6 Sol",
      "GPT-6 Luna",
      "GPT-6.1 Sol"
    ]
  },
  {
    "family": "Gemini",
    "steps": [
      "Gemini 3.5 Flash",
      "Gemini 3.6 Flash",
      "Gemini 3.7 Flash",
      "Gemini 3.8 Flash",
      "Gemini 3.8 Live",
      "Gemini 3.8 Live Extended Thinking",
      "Gemini 4 Argon"
    ]
  },
  {
    "family": "GLM",
    "steps": [
      "GLM-5",
      "GLM-5.1",
      "GLM-5.2",
      "GLM-5.3",
      "GLM-5.3-Flash"
    ]
  },
  {
    "family": "Kimi",
    "steps": [
      "Kimi K2.5",
      "Kimi K2.6",
      "Kimi K2.7 Code",
      "Kimi K2.8 Preview",
      "Kimi K3",
      "Kimi K3.1 Pro"
    ]
  },
  {
    "family": "LongCat",
    "steps": [
      "LongCat-Flash-Thinking-2601",
      "LongCat-Flash-Lite",
      "LongCat-Flash-Omni",
      "LongCat-2.0"
    ]
  },
  {
    "family": "MiMo",
    "steps": [
      "MiMo-V2-Flash",
      "MiMo-V2.5",
      "MiMo-V2.5-Pro",
      "MiMo-V2.6-Pro",
      "MiMo-V2.6-Flash"
    ]
  },
  {
    "family": "Nemotron",
    "steps": [
      "Nemotron-3-Super-120B-A12B",
      "Nemotron-3-Nano-Omni-30B-A3B-Reasoning",
      "Nemotron 3 Ultra",
      "Nemotron-3.5-Lightning-30B-A3B",
      "Nemotron 3.5 Super VL",
      "Nemotron 3.5 Bolt 74B-A9B 24GB"
    ]
  },
  {
    "family": "Granite",
    "steps": [
      "Granite 4.1",
      "Granite 4.2"
    ]
  },
  {
    "family": "Laguna",
    "steps": [
      "Laguna M.1",
      "Laguna XS.2",
      "Laguna XS 2.1",
      "Laguna S 2.1"
    ]
  },
  {
    "family": "Muse Spark",
    "steps": [
      "Muse Spark",
      "Muse Spark 1.1",
      "Muse Spark 1.2",
      "Muse Spark 1.3",
      "Muse Spark Open"
    ]
  },
  {
    "family": "K2 Horizon",
    "steps": [
      "K2-Horizon-0.9B",
      "K2-Horizon-3.7B",
      "K2-Horizon-7B",
      "K2-Horizon-32B",
      "K2-Horizon-MoVA-36B-A4B",
      "K2-Horizon-375B-A23B"
    ]
  },
  {
    "family": "Seed / Doubao",
    "steps": [
      "Seed 2.0",
      "Seed2.1 Pro",
      "Seed2.1 Turbo"
    ]
  },
  {
    "family": "Ling 3.0",
    "steps": [
      "Ling-3.0-tiny",
      "Ling-3.0-flash",
      "Ling-3.0-flash-VL",
      "Ling-3.1-flash"
    ]
  },
  {
    "family": "Grok",
    "steps": [
      "Grok 4.5",
      "Grok 4.6",
      "Grok 4.7"
    ]
  },
  {
    "family": "Solar",
    "steps": [
      "Solar Open 2",
      "Solar Pro 4",
      "Solar Mini 4"
    ]
  },
  {
    "family": "Nex",
    "steps": [
      "Nex-N2.5-mini",
      "Nex-N2.5-Pro",
      "Nex-N2.5-Max"
    ]
  },
  {
    "family": "JEV",
    "steps": [
      "JEV-9B",
      "JEV-27B"
    ]
  },
  {
    "family": "Step",
    "steps": [
      "Step 3.5 Flash",
      "Step 3.7 Flash",
      "Step 5 Preview"
    ]
  },
  {
    "family": "Muse Wonder",
    "steps": [
      "Muse Wonder",
      "Muse Wonder Full"
    ]
  },
  {
    "family": "Raon",
    "steps": [
      "Raon-1 mini"
    ]
  },
  {
    "family": "Mercury",
    "steps": [
      "Mercury 1",
      "Mercury 2",
      "Mercury 2.5",
      "Mercury 3"
    ]
  },
  {
    "family": "MemT",
    "steps": [
      "MemT-1.0-Nano",
      "MemT-1.0-Flash"
    ]
  },
  {
    "family": "Clairic",
    "steps": [
      "Clairic"
    ]
  },
  {
    "family": "H2O-Lightning",
    "steps": [
      "H2O-Lightning-4B",
      "H2O-Lightning-31B"
    ]
  },
  {
    "family": "Eleven Realtime",
    "steps": [
      "Eleven Realtime v1 Mini",
      "Eleven Realtime v1 Max"
    ]
  },
  {
    "family": "Spark",
    "steps": [
      "Spark-X2.5",
      "Spark-X2.6-4B"
    ]
  },
  {
    "family": "Hy-Memory",
    "steps": [
      "Hy3-A3B Base",
      "Hy-Memory-30B-A3B"
    ]
  },
  {
    "family": "Atria",
    "steps": [
      "Atria-Dawn-Preview",
      "Atria Dawn"
    ]
  },
  {
    "family": "MiniMax M",
    "steps": [
      "MiniMax-M3",
      "MiniMax M3.1-Flash-Preview",
      "MiniMax M3.1-Flash"
    ]
  },
  {
    "family": "Ornith",
    "steps": [
      "Ornith-1.0",
      "Ornith-1.5"
    ]
  }
];

const UNCONFIRMED_DATA = [];

const SCOPE_DATA = {
  "period": "2026-01-01 ~ 2026-10-26",
  "scope": [
    "LLM (Large Language Models)",
    "MLLM / VLM / Omni foundation models",
    "중요도 예외(2026-10-15 개정): 아래 excluded 부류에 속해도 업계 기준점을 세운 릴리스는 수록"
  ],
  "excluded": [
    "image-generation-only models",
    "video-generation-only models",
    "OCR-only models",
    "ASR/TTS-only models",
    "embedding / reranker models",
    "reward / guard-only models",
    "simple quantized variants",
    "intermediate/base checkpoints unless representing distinct products"
  ],
  "benchmark_policy": "공식 모델 카드·기술 보고서·개발사 공식 발표문에 모델 제공자가 직접 명시한 점수만 수록. Chatbot Arena/ELO, Artificial Analysis, 제3자 leaderboard, 추정·역산 점수는 제외.",
  "parameter_policy": "개발사가 명시한 총/활성 파라미터만 사용. 공개하지 않은 값은 정확한 수치 미공개로 표시하고, 모델 크기·가중치 파일 용량·양자화 크기를 파라미터 수로 대체하지 않음.",
  "reviewed_on": "2026-10-26",
  "inclusion_exception": "수록 여부는 부류만으로 결정하지 않는다(2026-10-15 개정). excluded 부류에 속하더라도 (1) 개발사 공식 1차 출처가 있고 (2) 그 부류에서 최초·최고·최대 규모 등 업계 기준점을 세운 릴리스면 수록한다 — 예: EmbeddingGemma 2(멀티모달 통합 임베딩), Qwen-Image-2.1(오픈웨이트 7B 생성·편집), Muse Image(MSL 첫 이미지 생성 모델), MiniMax Music 3.0(오픈웨이트 5분 완성곡 생성). 반대로 부류상 포함 대상이어도 중요도가 낮은 파생·스냅샷·서빙 변형은 수록을 보류할 수 있다 — 수록은 룰 충족이 아니라 중요도 판단으로 결정한다. 예외 수록은 레코드 note에 근거를 남기고 README에 예외·되돌림 각주를 단다."
};

const AUDIT_EXCLUDED = [
  {
    "id": "model-045",
    "name": "LongCat-2.0 Preview",
    "original_name": "LongCat-2.0 Preview",
    "reason": "공식 발표는 정식 LongCat-2.0 출시 전 preview 접근이 있었다고만 설명하며, 별도의 공식 모델 ID·출시일을 제시하지 않음. 정식 2026-06-30 모델과 같은 체크포인트를 별도 모델로 중복 집계하지 않음.",
    "source": "https://tech.meituan.com/2026/06/30/LongCat2.0.html"
  },
  {
    "id": "model-124",
    "name": "EXAONE 3.5 32B",
    "original_name": "EXAONE 3.5 32B",
    "reason": "공식 자료상 2026 출시가 아니라 기존 2024/2025 세대 모델이며, 현재 타임라인의 2026-01-15 항목을 뒷받침하는 공식 발표를 확인할 수 없음.",
    "source": "https://huggingface.co/LGAI-EXAONE"
  },
  {
    "id": "model-029",
    "name": "LongCat-Flash-Thinking",
    "original_name": "LongCat-Flash-Thinking",
    "reason": "공식 출시 발표일이 2025-09-22인 이전 세대 모델. 2026 타임라인의 별도 신규 출시로 중복 집계하지 않음.",
    "source": "https://tech.meituan.com/2025/09/22/LongCat-Flash-Thinking.html"
  },
  {
    "id": "model-035",
    "name": "MiMo-V2-Omni",
    "original_name": "MiMo-V2-Omni",
    "reason": "Xiaomi MiMo 공식 모델 목록과 공식 모델 카드에서 해당 제품명을 확인하지 못함. 비공식 명칭을 다른 공식 모델로 추정해 대체하지 않음.",
    "source": "https://huggingface.co/XiaomiMiMo/models"
  },
  {
    "id": "model-127",
    "name": "A.X Telco LLM",
    "original_name": "A.X Telco LLM",
    "reason": "정확한 공식 제품명·모델 카드·출시 발표를 1차 자료에서 확인하지 못함.",
    "source": "https://news.sktelecom.com/"
  },
  {
    "id": "excluded-2026-09-08-1",
    "name": "Spark X2.5 (星火 X2.5)",
    "original_name": "iFLYTEK Spark X2.5 / Spark X2.5-4B / Spark X2.5-1.7B",
    "date": "2026-09-07",
    "company": "iFLYTEK",
    "reason": "2026-09-07 플래그십(호출 293B-A30B MoE·256K 컨텍스트)과 09-01 오픈웨이트로 공개된 엔드디바이스 모델 2종(Spark-X2.5-4B/1.7B, 1M 컨텍스트)이 보도됐으나 1차 출처에서 사양을 확정하지 못해 보류합니다. 讯飞의 공식 제품·API 카탈로그 페이지(xinghuo.xfyun.cn/sparkapi, xhspdup.xfyun.cn/sparkapi)는 서버에서 텍스트를 렌더링하지 않아(JavaScript 셸만 응답) 파라미터·컨텍스트·출시일을 인용할 수 없었고, 293B-A30B / 256K 수치는 IT之家·sina 등 2차 보도에서만 확인됐습니다. Hugging Face `XHToken`(표기 'SparkLLM Team') 저장소가 Apache 2.0으로 같은 사양(1M 컨텍스트·200+ 언어)을 공개했지만 해당 조직이 科大讯飞(iFLYTEK)의 공식 조직임을 카드 어디서도 확인하지 못해 '개발사 본인 페이지' 요건을 판정할 수 없었습니다. 조직 편입 여부와 함께 재검토할 항목입니다.",
    "source": "https://xinghuo.xfyun.cn/sparkapi",
    "reviewed_on": "2026-09-08"
  },
  {
    "id": "model-162",
    "name": "Gemini Omni 1.1 Flash",
    "original_name": "Gemini Omni 1.1 Flash",
    "reason": "영상 생성 전용 모델(씬 확장·4K 업스케일 등)로 수록 범위의 video-generation-only 제외 항목에 해당.",
    "source": "https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/"
  },
  {
    "id": "model-163",
    "name": "GPT-Live-1 API 확장",
    "original_name": "GPT-Live-1 in the API",
    "reason": "2026-09-10 발표는 기존 model-137 GPT-Live-1의 API 배포 확장으로 신규 모델이 아니므로 중복 집계하지 않음.",
    "source": "https://openai.com/index/introducing-gpt-live-1-in-the-api/"
  },
  {
    "id": "model-164",
    "name": "Gemini 3.5 Transcribe",
    "original_name": "Gemini 3.5 Transcribe",
    "reason": "전사(transcription) 전용 모델로 ASR/TTS-only 제외 항목에 해당.",
    "source": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/"
  },
  {
    "id": "excluded-2026-09-19-1",
    "name": "Bonsai 2 27B (Ternary)",
    "original_name": "Ternary Bonsai 2 27B",
    "reason": "Qwen3.8 27B를 테너리(~1.76bit/weight)로 변환한 배포용 체크포인트로, '단순 양자화 체크포인트' 제외 항목에 해당. 신규 능력이 아니라 기존 모델의 98.2% 보존 압축본.",
    "source": "https://prismml.com/news/bonsai-2-27b"
  },
  {
    "id": "excluded-2026-09-19-2",
    "name": "DeepSeek-V4.1-Flash-NVFP4",
    "original_name": "nvidia/DeepSeek-V4.1-Flash-NVFP4",
    "reason": "2026-09-16 NVIDIA가 공개한 DeepSeek-V4.1-Flash의 NVFP4(4-bit) 변환본 — 모델 카드 자체도 재학습 없는 리패키징이라 명시. '단순 양자화 체크포인트' 제외 항목에 해당하며 원 모델은 model-160으로 수록됨.",
    "source": "https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-NVFP4"
  },
  {
    "id": "excluded-2026-09-19-3",
    "name": "Grok Voice Transcribe 2.0",
    "original_name": "Grok Voice Transcribe 2.0",
    "reason": "2026-09-18 공개된 xAI/SpaceXAI의 음성→텍스트 전사 전용 모델로 ASR/TTS-only 제외 항목에 해당.",
    "source": "https://x.ai/news/grok-voice-transcribe-2"
  },
  {
    "id": "excluded-2026-09-19-5",
    "name": "Odyssey-3",
    "original_name": "Odyssey-3",
    "reason": "로봇·차량·게임을 제어하는 물리 인텔리전스 월드모델(자기회귀 확산 트랜스포머) — LLM/MLLM 수록 범위 밖. 2026-09-15 프리뷰, 공개 배포는 수 주 후 예정.",
    "source": "https://odyssey.systems/introducing-odyssey-3"
  },
  {
    "id": "excluded-2026-09-19-6",
    "name": "Astronex-World 1.0",
    "original_name": "Astronex-World 1.0",
    "reason": "텍스트·초기 프레임으로 미래 시각 상태를 생성하는 인터랙티브 비디오 월드모델 — video-generation-only 제외 항목에 해당.",
    "source": "https://arxiv.org/abs/2609.20034"
  },
  {
    "id": "excluded-2026-09-19-7",
    "name": "NASA-IBM Lunar Foundation Model",
    "original_name": "NASA-IBM Lunar Foundation Model",
    "reason": "월면 관측 데이터(크레이터 탐지·얼음 매장량 등) 전용 과학 파운데이션 모델 — 범용 LLM/MLLM 수록 범위 밖.",
    "source": "https://huggingface.co/nasa-ibm-ai4science/NASA-IBM-Lunar-Foundation-Model"
  },
  {
    "id": "excluded-2026-09-19-8",
    "name": "Kimi K3 on Amazon Bedrock",
    "original_name": "Kimi K3 on Amazon Bedrock",
    "reason": "기존 model-087 Kimi K3의 AWS Bedrock GA(9/19) — 신규 모델이 아니라 배포 채널 확장이라 중복 집계하지 않음. GPT-Live-1 API 확장(model-163)과 같은 사례.",
    "source": "https://builder.aws.com/content/3JWn21K5S5mKNqS2V3g2lz9g2B3/getting-started-with-kimi-code-and-kimi-k3-on-amazon-bedrock"
  },
  {
    "id": "excluded-2026-09-19-9",
    "name": "Union Alpha (Pareto 26.9)",
    "original_name": "Union Alpha / unbiased.ai Pareto 26.9",
    "reason": "2026-09-16 OpenRouter에 개발사를 숨긴 스텔스 모델로 올라왔고 다음 날 unbiased.ai의 'Pareto 26.9'로 확인됐으나, 개발사가 공식 발표를 2026-10-10으로 예고해 정식 수록 조건(공식 출시·제품명·1차 출처)이 아직 충족되지 않아 보류. iFLYTEK Spark X2.5 선례와 같은 판정.",
    "source": "https://openrouter.ai/stealth/union-alpha"
  },
  {
    "id": "excluded-2026-09-23-1",
    "name": "GLM-5.3-FlashX",
    "original_name": "GLM-5.3-FlashX (Z.ai)",
    "reason": "2026-09-18 Z.ai API에 추가된 GLM-5.3-Flash와 동일 가중치(320B/18B)의 고속 서빙 티어(~200 tok/s, 약 2.5× 가격). 신규 가중치·벤치마크 없이 서빙 옵션만 달라 별도 모델로 수록하지 않음 — 동일 가중치 서빙 변형 제외 규정.",
    "source": "https://docs.z.ai/guides/vlm/glm-5.3-flash"
  },
  {
    "id": "excluded-2026-09-23-4",
    "name": "Apollo",
    "original_name": "Apollo (Austrian Academy of Sciences × Mistral AI × Reply)",
    "reason": "2026-09-23 발표된 고대그리스어 전용 도메인 특화 LLM 프로젝트(파피루스·비문 복원·검색 목적). 일반 목적 파운데이션 모델 출시가 아니며 공식 모델 ID·가중치·벤치마크가 공개되지 않아 수록 보류. OeAW 공식 페이지는 자동 검증에 403을 반환해 공동 개발사 Reply 보도자료를 확인 출처로 기록.",
    "source": "https://www.reply.com/en/newsroom/news/austrian-academy-of-sciences-is-developing-the-ancient-greek-ai-apollo-with-mistral-ai-and-reply"
  },
  {
    "id": "excluded-2026-09-23-5",
    "name": "gpt-oss-120b / gpt-oss-20b",
    "original_name": "OpenAI gpt-oss (2025-08-05 출시)",
    "reason": "9월 중 일부 보도에서 재언급됐으나 실제 공식 출시는 2025-08-05로 본 타임라인 기간(2026년) 밖 — 기간 외 모델이라 미수록.",
    "source": "https://openai.com/index/introducing-gpt-oss/"
  },
  {
    "id": "excluded-2026-09-29-1",
    "name": "Aion 3.5 / Aion 3.5 Mini",
    "original_name": "aion-labs/aion-3.5, aion-labs/aion-3.5-mini",
    "date": "2026-09-23",
    "company": "AionLabs",
    "reason": "GLM 계열 모델들이 응답 하나를 협업 생성하는 멀티모델 롤플레잉·스토리텔링 시스템 — 단일 파운데이션 모델 가중치가 아니라 모델 조합/라우팅 제품이라 수록 범위 밖.",
    "source": "https://www.aionlabs.ai/docs/models/",
    "reviewed_on": "2026-09-29"
  },
  {
    "id": "excluded-2026-09-29-2",
    "name": "Ember-1",
    "original_name": "fireworks/ember-1",
    "date": "2026-09-23",
    "company": "Fireworks AI",
    "reason": "Moonshot Kimi K3(model-087)를 Fireworks가 포스트트레인한 연구 프리뷰 — 기본 K3 옆의 서버리스 서빙 옵션(2주 한정, 수요에 따라 상시화)으로 자체 가중치 공개·정식 출시 조건이 아직 충족되지 않아 보류.",
    "source": "https://fireworks.ai/blog/ember-1",
    "reviewed_on": "2026-09-29"
  },
  {
    "id": "excluded-2026-09-29-3",
    "name": "Jev Router",
    "original_name": "typesafe/jev-router",
    "date": "2026-09-25",
    "company": "TypeSafe AI",
    "reason": "TypeSafe의 OpenRouter 라우팅 엔드포인트 — 기존 model-184 Jev가 요청별 모델·effort를 선택하는 제품 계층으로 별도 신규 파운데이션 모델이 아니므로 미수록.",
    "source": "https://openrouter.ai/typesafe/jev-router",
    "reviewed_on": "2026-09-29"
  },
  {
    "id": "excluded-2026-09-29-4",
    "name": "Space Bunny Alpha",
    "original_name": "stealth/space-bunny-alpha",
    "date": "2026-09-23",
    "company": "익명 (MiniMax 연계 추정)",
    "reason": "2026-09-23 OpenRouter에 등장한 익명 스텔스 모델 — 커뮤니티 토크나이저 핑거프린팅이 MiniMax M3.1-Flash-Preview(model-192) 연계를 추정했으나 개발사의 공식 확인이 없어 보류. Union Alpha와 동일 판정.",
    "source": "https://openrouter.ai/stealth/space-bunny-alpha",
    "reviewed_on": "2026-09-29"
  },
  {
    "id": "excluded-2026-10-01-2",
    "name": "OpenCSG Agentic-27B",
    "original_name": "OpenCSG/Agentic-27B (이전 공개판 Agentic-30B-A3B 계열)",
    "date": "2026-09-30 (보도) / 2026-09-11 (Hugging Face 저장소 생성)",
    "company": "OpenCSG",
    "reason": "2026-09-30 공개 발표(Qwen3.8-27B 기반 LoRA DPO·27.36B dense·BF16·262,144 설정, Agentic Eval 평균 0.828·Arena-Hard-v2.0 hard_prompt 57.68)가 있었으나, 공식 Hugging Face 모델 카드에 릴리스 날짜 표기가 없고 저장소 생성일(2026-09-11)과 발표일(2026-09-30)이 불일치해 출시일을 1차 출처로 확정할 수 없어 보류했습니다. OpenCSG 자체 모델 페이지는 JavaScript 셸만 응답합니다. 날짜 근거가 확보되면 수록을 재검토합니다.",
    "source": "https://huggingface.co/opencsg/Agentic-27B",
    "reviewed_on": "2026-10-01"
  },
  {
    "id": "excluded-2026-10-01-3",
    "name": "Heimr 570M",
    "original_name": "Heimr 570M (Sevren)",
    "date": "2026-09-30",
    "company": "Sevren",
    "reason": "덴마크 Sevren의 실험 단계 로컬 모델 연구 공지(2.7B 총/570M 활성, Mamba-3 + Heimr attention 하이브리드 MoE, 64K 컨텍스트, DCLM CORE 0.411)로 공식 블로그에 사양·베이스 평가표를 공개했으나 가중치·API가 공개되지 않아 공개 릴리스로 볼 수 없습니다. 가중치가 공개되면 재조사합니다.",
    "source": "https://sevren.ai/blog/heimr-570m",
    "reviewed_on": "2026-10-01"
  },
  {
    "id": "excluded-2026-10-01-4",
    "name": "NVIDIA Kumo Tabular (Small/Medium/Large)",
    "original_name": "nvidia/Kumo-Tabular",
    "date": "2026-09-29",
    "company": "NVIDIA",
    "reason": "표 형식(tabular) 데이터용 파운데이션 모델 3종(약 28M~215M) — LLM/MLLM 수록 범위 밖입니다.",
    "source": "https://huggingface.co/nvidia/Kumo-Tabular",
    "reviewed_on": "2026-10-01"
  },
  {
    "id": "excluded-2026-10-01-5",
    "name": "EEVE ROSETTA (YanoljaNEXT-Rosetta-4B-2510·2511)",
    "original_name": "yanolja/YanoljaNEXT-Rosetta-4B-2511 (EEVE ROSETTA 계열)",
    "date": "2025-10 ~ 2025-11 (기간 외)",
    "company": "Yanolja NEXT",
    "reason": "2026-09-30 국내 보도는 2025년 EEVE ROSETTA 발표와 2025-10·11 Hugging Face 공개분(Gemma-3-4B 기반 4B 번역 특화)의 재보도로, 본 타임라인 기간(2026년) 밖입니다.",
    "source": "https://huggingface.co/yanolja/YanoljaNEXT-Rosetta-4B-2511",
    "reviewed_on": "2026-10-01"
  },
  {
    "id": "excluded-2026-10-08-2",
    "name": "OpenAI Decisions API",
    "original_name": "POST /v1/decisions (model: gpt-6-luna)",
    "date": "2026-10-06 (퍼블릭 베타)",
    "company": "OpenAI",
    "reason": "DevDay(9/29) 발표 후 10/6 퍼블릭 베타가 된 전용 /v1/decisions 엔드포인트 — 기존 model-180 GPT-6 Luna 가중치로 predicate/choice/score 결정을 반환하는 제품 계층으로 별도 모델 ID가 없어 신규 모델로 집계하지 않음(Jev Router·GPT-Live-1 API 확장과 동일 판정). 전용 결정 모델 ID가 생기면 재검토.",
    "source": "https://developers.openai.com/api/docs/guides/decisions",
    "reviewed_on": "2026-10-08"
  },
  {
    "id": "excluded-2026-10-08-4",
    "name": "GPT-6 Sol / GPT-6 Luna (October 2026 update)",
    "original_name": "GPT-6 Sol (October) · GPT-6 Luna (October)",
    "date": "2026-10-07",
    "company": "OpenAI",
    "reason": "10/7 ChatGPT 전면 배포(GPT-6 + Intelligent UI)와 함께 반영된 기존 model-179/180의 ChatGPT 버전 갱신 — 시스템 카드가 안전 학습 업데이트된 'October' 버전으로 구분하지만, 별도 모델 ID·신규 능력 점수가 없는 배포 업데이트라 중복 집계하지 않음(Kimi K3 on Bedrock 선례).",
    "source": "https://deploymentsafety.openai.com/gpt-6-october/model-safety-training-and-evaluation",
    "reviewed_on": "2026-10-08"
  },
  {
    "id": "excluded-2026-10-15-1",
    "name": "Muse Voice Transcribe",
    "original_name": "muse-voice-transcribe-1.0",
    "date": "2026 (Meta Model API 등재, 공식 출시일 미표기)",
    "company": "Meta",
    "reason": "Meta Model API의 음성→텍스트 전사 전용 모델(실시간 WebSocket /v1/asr/realtime·파일 /v1/asr/transcribe) — 공식 문서가 음성을 합성하지 않고 speech-to-speech API도 제공하지 않는다고 명시하므로 ASR/TTS-only 제외 항목에 해당. 공식 문서에 출시일 표기가 없어 날짜도 확정하지 않음.",
    "source": "https://dev.meta.ai/docs/models",
    "reviewed_on": "2026-10-15"
  },
  {
    "id": "excluded-2026-10-16-1",
    "name": "Ultramarine 1 Flash",
    "original_name": "Ultramarine 1 Flash (Paper Instruments)",
    "date": "2026-10-14 (API)",
    "company": "Paper Instruments",
    "country": "미공개",
    "reason": "GLM-5.3 Flash를 비검증형 RL(룰 기반 보상·88 환경)로 후학습한 전문업무 특화 모델 — API는 개방됐으나 가중치가 아직 없음(CEO가 약 2주 후 공개 예고), 자체 평가(PI Knowledge Work)는 미공개·인쇄 불가. '1차 출처 URL이 아직 없는 릴리스' 보류 판정(Reflection Beam 선례). 가중치가 공개되면 즉시 재검토.",
    "source": "https://www.paperinstruments.com/blog/ultramarine",
    "reviewed_on": "2026-10-16"
  },
  {
    "id": "excluded-2026-10-16-2",
    "name": "Natura-1",
    "original_name": "Natura-1 (Nature Will)",
    "date": "2026-10-13",
    "company": "Nature Will",
    "reason": "50B MoE 물리 세계 조작 파운데이션 모델(1M시간 자아시점 영상 사전학습, 796개 20-DoF 로봇 디르푸스 작업) — 텍스트·멀티모달 대화·생성이 아니라 행동 특화 물리 AI라 범위 제외(로보틱스 부류). 개발사 공식 1차 출처(naturewill.com 블로그)와 평가 차트가 있어 부류 선례를 되돌린 기준보다 높지만, 그 부류 자체의 업계 기준점 주장(1M시간 사전학습 규모)도 뚜렷해 검토 대기 — 로보틱스 파운데이션을 수록할지 운영자 판단 사항으로 보류.",
    "source": "https://www.naturewill.com/blog/natura-1",
    "reviewed_on": "2026-10-16"
  },
  {
    "id": "excluded-2026-10-16-3",
    "name": "MAI-Base-2",
    "original_name": "MAI-Base-2 (Microsoft AI)",
    "date": "2026-10-15 (사전학습 완료 공표, 포스트트레이닝 중)",
    "company": "Microsoft AI",
    "reason": "2.8T-80B MoE 사전학습 완료 공표는 확정(16,000 GB200·38일·EU 규제 컴퓨트 10^25.9)하지만 가중치·API·모델 카드가 없고 포스트트레이닝 중 — '1차 출처 URL이 아직 없는 릴리스' 보류(Reflection Beam 선례). Foundry 라이선싱 창구가 열리면 재검토.",
    "source": "https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/",
    "reviewed_on": "2026-10-16"
  },
  {
    "id": "excluded-2026-10-21-1",
    "name": "Cohere Rerank 5 (Pro · Fast)",
    "original_name": "rerank-v5.0-pro · rerank-v5.0-fast",
    "date": "2026-10-21",
    "company": "Cohere",
    "country": "CA",
    "reason": "임베딩·리랭커 부류의 검색 리랭킹 모델 — Cohere가 '가장 진보한 엔터프라이즈 retrieval 모델'이라며 ViDoRe V3·nanoMTEB·BRIGHT·BEIR 선두를 주장하지만, 공개 수치가 RCP-nDCG@10(비% 척도)이고 LLM/MLLM 파운데이션 모델이 아니라 검색 파이프라인 구성요소입니다. 2026-10-15 중요도 예외는 멀티모달 통합 임베딩(EmbeddingGemma 2)에 적용한 선례이며, 리랭커에는 같은 기준을 적용하지 않았습니다. % 점수표가 공개되면 재검토.",
    "source": "https://cohere.com/blog/rerank-5",
    "reviewed_on": "2026-10-22"
  },
  {
    "id": "excluded-2026-10-20-1",
    "name": "Nemotron 3.5 Embed 1B·8B / Rerank 8B",
    "original_name": "Nemotron-3.5-Embed-8B-BF16 · Embed-1B-BF16 · Embed-1B-NVFP4 · Rerank-8B-BF16",
    "date": "2026-10-20",
    "company": "NVIDIA",
    "country": "US",
    "reason": "멀티모달 임베딩·리랭커 부류(8.38B/1.55B, ViDoRe v3.1·MIRACL Vision nDCG@10) — 검색 파이프라인 구성요소로 LLM/MLLM 파운데이션 모델 수록 범위 밖입니다. 1B NVFP4·8B reranker가 retrieval benchmark 선두를 주장하지만, 수치가 nDCG@10(비%)이고 중요도 예외를 적용할 업계 최초·최대 기준점 주장은 확인하지 못했습니다. Nemotron 3.5 Parse(631M)도 문서 추출 전용이라 함께 제외했습니다.",
    "source": "https://huggingface.co/blog/nvidia/nemotron-retriever-world-class-agentic-retrieval",
    "reviewed_on": "2026-10-22"
  },
  {
    "id": "excluded-2026-10-20-2",
    "name": "Voxtral 3 (Transcribe · TTS · Realtime)",
    "original_name": "Voxtral Small Transcribe 3 · Mini Transcribe 3 · Mini Transcribe Realtime 3 · Mini TTS 3",
    "date": "2026-10-20",
    "company": "Mistral AI",
    "country": "FR",
    "reason": "음성→텍스트 전사·텍스트→음성 합성 전용 모델군 — ASR/TTS-only 제외 항목에 해당합니다. 같은 발표의 Voxtral 3 Voice Agent SDK는 Mistral Small 4 등 기존 LLM을 오케스트레이션하는 제품 계층이라 별도 모델로 집계하지 않았습니다. 벤치마크도 FLEURS WER·TTS 선호도 등 비% 지표 중심입니다.",
    "source": "https://mistral.ai/news/voxtral-3/",
    "reviewed_on": "2026-10-22"
  },
  {
    "id": "excluded-2026-10-15-2",
    "name": "GPT-Live-1.1 / GPT-Live-1.1 Quip",
    "original_name": "GPT-Live-1.1 · GPT-Live-1.1 Quip",
    "date": "2026-10-15",
    "company": "OpenAI",
    "country": "US",
    "reason": "기존 GPT-Live-1(model-137)·GPT-Live-1 mini(model-138)의 후속 버전으로 ChatGPT 음성(Codex·Dots 포함)의 기본 음성 모델을 교체한 배포 갱신 — 공식 시스템 카드는 안전·정렬 평가만 담고 별도 API 모델 ID·신규 능력 벤치마크 점수가 없으며, API 제공도 아직 열리지 않았습니다. 별도 모델 ID·신규 점수가 없는 배포 갱신은 중복 집계하지 않는 선례(GPT-6 Sol/Luna October update)에 따라 제외합니다. API 모델 ID나 공식 능력 점수가 공개되면 재검토.",
    "source": "https://deploymentsafety.openai.com/gpt-live-1-1",
    "reviewed_on": "2026-10-22"
  },
  {
    "id": "excluded-2026-10-15-3",
    "name": "Timestral (5M · 28M · 123M · 209M)",
    "original_name": "Timestral-5M · Timestral-28M · Timestral-123M · Timestral-209M",
    "date": "2026-10-15",
    "company": "Mistral AI",
    "country": "FR",
    "reason": "시계열 예측 전용 모델군(5M~209M, 32,768 step 컨텍스트, 21분위 확률·다변량 예측, Modified MIT 가중치 공개) — 텍스트·멀티모달 이해/생성 능력이 없는 수치 예측 모델이라 LLM/MLLM 수록 범위 밖입니다. 209M이 GIFT-Eval·TIME·fev-bench 제로샷 1위를 주장하지만 지표가 MASE·WQL·CRPS(비% 척도)이고, 2026-10-15 중요도 예외는 언어·멀티모달 인접 부류(임베딩·이미지/음악 생성·메모리)에 적용한 선례라 시계열 예측 부류로 넓히지 않았습니다. 10/16 감사에서 제외로 판정했으나 원장 등재가 누락돼 2026-10-22 운영자 결정으로 등재.",
    "source": "https://mistral.ai/news/timestral",
    "reviewed_on": "2026-10-22"
  },
  {
    "id": "excluded-2026-10-25-1",
    "name": "Granite Switch 4.1 (8B · 30B)",
    "original_name": "ibm-granite/granite-switch-4.1-8b · granite-switch-4.1-30b",
    "date": "2026-10-14",
    "company": "IBM",
    "country": "US",
    "reason": "기존 Granite 4.1(model-058) 베이스에 decision·guardian-core aLoRA 어댑터와 음성 인식 인코더(Granite Speech 5.0 470M TurboCTC)를 합성해 한 엔드포인트로 채팅·결정·STT를 전환하는 모듈형 패키징 — 새 베이스 모델이나 자체 점수가 없고, 카드가 음성 인코더와 LLM이 아직 공동 학습되지 않았다고 명시합니다. 중요도 판단상 서빙 변형·합성 배포로 보아 수록 보류(어댑터 라이브러리가 독립 모델로 승격되면 재검토).",
    "source": "https://huggingface.co/ibm-granite/granite-switch-4.1-30b",
    "reviewed_on": "2026-10-25"
  },
  {
    "id": "excluded-2026-10-25-2",
    "name": "Hy-Nomas",
    "original_name": "tencent/Hy-Nomas · Hy-Nomas-Diffusers",
    "date": "2026-10-21",
    "company": "Tencent",
    "country": "CN",
    "reason": "텍스트·카메라 제어로 세그먼트 단위 자기회귀 영상(720×1280·24FPS)을 생성하는 비디오 월드 생성 모델 — 영상 생성 전용이라 범위 밖이며, 공식 카드에서 해당 부류의 최초·최고·최대 기준점을 입증하는 수치가 인쇄돼 있지 않고 기술 보고서도 'Coming Soon'이라 중요도 예외를 적용하지 않았습니다(Apache 2.0 가중치 공개).",
    "source": "https://huggingface.co/tencent/Hy-Nomas",
    "reviewed_on": "2026-10-25"
  },
  {
    "id": "excluded-2026-10-25-3",
    "name": "WeVisOne-VL (2B · 4B)",
    "original_name": "tencent/WeVisOne-VL-2B · WeVisOne-VL-4B",
    "date": "2026-10-22",
    "company": "Tencent",
    "country": "CN",
    "reason": "Qwen3-VL 기반에 9.6M 픽셀 디코더를 붙여 검출·지칭·카운팅·OCR 위치·분할·알파 매팅을 수행하는 시각 인식 특화 연구 릴리스 — 범용 LLM/MLLM이 아니라 단일 턴 인식 전용 파생 모델이고 카드에 벤치마크 점수가 없어 수록하지 않았습니다.",
    "source": "https://huggingface.co/tencent/WeVisOne-VL-4B",
    "reviewed_on": "2026-10-25"
  },
  {
    "id": "excluded-2026-10-26-1",
    "name": "Ling-3.0-flash-Sante",
    "original_name": "inclusionAI/Ling-3.0-flash-Sante",
    "date": "2026-10-19",
    "company": "Ant Group / InclusionAI",
    "country": "CN",
    "reason": "Ling-3.0-flash(model-108)를 기반으로 한 124B 총 / 5.1B 활성 의료·헬스케어 특화 파생 모델(MIT 가중치 공개, 카드가 '의료기기가 아닌 연구 모델'이라 명시) — 도메인 특화 후속이고 카드에 업계 최초·최고·최대 기준점을 주장하는 문구가 없어 중요도 예외 대상이 아닙니다. 운영자 결정(2026-10-26)으로 미포함 판정했습니다.",
    "source": "https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante",
    "reviewed_on": "2026-10-26"
  },
  {
    "id": "excluded-2026-10-26-2",
    "name": "GLiDE",
    "original_name": "fastino/GLiDE",
    "date": "2026-10-19",
    "company": "Fastino",
    "country": "미공개",
    "reason": "상태와 질문을 받아 각 선택지의 확률을 반환하는 결정(decision) 모델(라이선스 'other'·Fastino 호스티드 API 중심) — 카드의 'Decision Index 0.4.1 1위(71.5)'는 서드파티 리더보드 순위라 벤치마크 정책상 점수로 수록할 수 없고, 같은 부류 선례(Jev·CLM)와 달리 독립 제품으로 수록할 근거를 이번 점검에서 확정하지 못했습니다. 운영자 결정(2026-10-26)으로 미포함 판정했습니다.",
    "source": "https://huggingface.co/fastino/GLiDE",
    "reviewed_on": "2026-10-26"
  },
  {
    "id": "excluded-2026-10-26-3",
    "name": "Youtu-Parsing-Omni",
    "original_name": "tencent/Youtu-Parsing-Omni",
    "date": "2026-10-09",
    "company": "Tencent",
    "country": "CN",
    "reason": "문서·이미지·차트·도형·오디오·비디오를 구조화 JSON으로 파싱하는 5B 옴니모달 파싱 전용 모델(라이선스 'youtu-parsing', custom_code) — 파싱·OCR 부류라 범위 밖입니다. 카드는 OmniDocBench v1.6 Overall 96.96 SOTA를 주장하지만 파싱 전용 부류 안의 지표라 중요도 예외를 적용하지 않았습니다. 운영자 결정(2026-10-26)으로 미포함 판정했습니다.",
    "source": "https://huggingface.co/tencent/Youtu-Parsing-Omni",
    "reviewed_on": "2026-10-26"
  },
  {
    "id": "excluded-2026-10-26-4",
    "name": "LightOnOCR-3-4B",
    "original_name": "lightonai/LightOnOCR-3-4B",
    "date": "2026-10-06",
    "company": "LightOn",
    "country": "미공개",
    "reason": "LightOnOCR-3 계열의 최대·최고 정확도 구성이라는 4B OCR 전용 비전-언어 모델(Apache 2.0) — OCR 전용 부류이고 카드의 'Best OCR model'은 자사 계열 안의 비교 문구라 중요도 예외를 적용하지 않았습니다. 운영자 결정(2026-10-26)으로 미포함 판정했습니다.",
    "source": "https://huggingface.co/lightonai/LightOnOCR-3-4B",
    "reviewed_on": "2026-10-26"
  },
  {
    "id": "excluded-2026-10-26-5",
    "name": "KLM-1.5",
    "original_name": "MinimaLabs/KLM-1.5",
    "date": "2026-10-22",
    "company": "MinimaLabs",
    "country": "미공개",
    "reason": "약 9,900만 파라미터(98,975,308)의 사전학습 베이스 소형 연구 모델(Apache 2.0, custom_code) — 카드가 100M 미만 모델 중 1위라고 내세우는 근거는 서드파티 리더보드 Intelligence Index이고 지시 추종 모델이 아닌 베이스 체크포인트라 수록하지 않았습니다. 운영자 결정(2026-10-26)으로 미포함 판정했습니다.",
    "source": "https://huggingface.co/MinimaLabs/KLM-1.5",
    "reviewed_on": "2026-10-26"
  },
  {
    "id": "excluded-2026-10-26-6",
    "name": "Nanbeige4.3-33B-Base",
    "original_name": "Nanbeige/Nanbeige4.3-33B-Base",
    "date": "2026-10-24",
    "company": "Nanbeige",
    "country": "CN",
    "reason": "Nanbeige4.3-33B(model-243)의 베이스 체크포인트 — 독립 제품을 대표하지 않는 중간/베이스 체크포인트 제외 규칙에 해당합니다. 운영자 결정(2026-10-26)으로 미포함 판정했습니다.",
    "source": "https://huggingface.co/Nanbeige/Nanbeige4.3-33B-Base",
    "reviewed_on": "2026-10-26"
  },
  {
    "id": "excluded-2026-10-26-7",
    "name": "Spark-X2.6-4B-Base",
    "original_name": "XHToken/Spark-X2.6-4B-Base",
    "date": "2026-10-19",
    "company": "iFLYTEK",
    "country": "CN",
    "reason": "Spark-X2.6-4B(model-234)의 베이스 체크포인트 — 독립 제품을 대표하지 않는 중간/베이스 체크포인트 제외 규칙에 해당합니다. 운영자 결정(2026-10-26)으로 미포함 판정했습니다.",
    "source": "https://huggingface.co/XHToken/Spark-X2.6-4B-Base",
    "reviewed_on": "2026-10-26"
  },
  {
    "id": "excluded-2026-10-26-8",
    "name": "NCM checkpoints",
    "original_name": "hazyresearch/ncm-checkpoints",
    "date": "2026-10-13",
    "company": "Hazy Research (Stanford)",
    "country": "US",
    "reason": "Next-Concept Modeling 논문(arXiv:2610.14162)의 토크나이저·생성기 체크포인트 묶음(MIT) — XSum 요약·WMT14 번역·스도쿠 등 과제별 연구용 체크포인트이고 범용 LLM/MLLM 릴리스가 아니라 수록하지 않았습니다. 운영자 결정(2026-10-26)으로 미포함 판정했습니다.",
    "source": "https://huggingface.co/hazyresearch/ncm-checkpoints",
    "reviewed_on": "2026-10-26"
  },
  {
    "id": "excluded-2026-10-26-9",
    "name": "Qwen3-8B-DSpine-b16",
    "original_name": "tencent/Qwen3-8B-DSpine-b16",
    "date": "2026-10-16",
    "company": "Tencent",
    "country": "CN",
    "reason": "Qwen3-8B용 병렬 추측적 디코딩 드래프터(arXiv:2609.36173, Apache 2.0) — 독립적인 언어 모델이 아니라 추론 가속 구성요소라 수록하지 않았습니다. 운영자 결정(2026-10-26)으로 미포함 판정했습니다.",
    "source": "https://huggingface.co/tencent/Qwen3-8B-DSpine-b16",
    "reviewed_on": "2026-10-26"
  }
];
