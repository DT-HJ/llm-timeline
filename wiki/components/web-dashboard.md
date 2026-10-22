---
title: Web Dashboard
type: component
status: current
updated: 2026-10-22
---

# Web Dashboard

## Responsibility

`data.js`의 카탈로그 데이터를 월별·일자별 인터랙티브 타임라인으로 렌더링하고, 검색·유형/오픈웨이트/기업 필터·월 이동·정렬·모델 상세·두 모델 비교·라이트/다크 테마를 제공하는 순수 정적 프론트엔드.

## Interface

- 입력: `data.js`가 선언하는 전역 상수 `TIMELINE_DATA`(모델 배열), `COMPANY_META`(UI는 `country`만 사용 — `flag`/`color`/`badge`는 미사용), `FAMILY_FLOWS`, `UNCONFIRMED_DATA`, `SCOPE_DATA`, `AUDIT_EXCLUDED`.
- 출력: 없음(읽기 전용 뷰). URL 해시 딥링크 `#model=<id>`·`#compare=<idA>,<idB>` — 모달을 열면 `history.replaceState`로 해시를 갱신하고 닫으면 지운다.
- 로컬 실행: `python3 -m http.server 8000` — 빌드 도구 없음. CSS는 정적 `style.css`(Tailwind 미사용).
- 외부 리소스: 웹폰트 CSS 2개(jsDelivr Pretendard dynamic-subset, Google Fonts JetBrains Mono)만 `media="print" onload` 패턴으로 비동기 로드. 국기 SVG·파비콘·아이콘은 저장소 내 `assets/`·인라인 SVG sprite(Lucide)로 자체 보관.

## Current Implementation

- `index.html`: `<head>` 인라인 스크립트가 저장된 테마(`localStorage` `llm-timeline-theme`)를 첫 페인트 전에 `data-theme`으로 적용. 헤더(검색·비교·정렬·스크롤 버튼·GitHub·테마 토글), subbar(월 칩 컨테이너 + 유형 칩 `#filter-chips` + 기업 `<select id="company-filter">`), `.timeline-viewport`, 비교 dock, 모달 2종, 모바일 하단 nav. `style.css`·`app.js`는 `?v=<날짜>`로 참조(캐시 무효화용 수동 버전).
- `app.js`: 전역 상태(`searchQuery`·`activeGroup`·`openOnly`·`activeCompany`·`activeMonth`·`sortOrder`·`compareList`) + 문자열 렌더 함수. 데이터 문자열은 모두 `esc()`로 HTML 이스케이프.
  - `buildIndexes`: `MODEL_BY_ID`·검색 텍스트(`SEARCH_TEXT`, 한국어 alias 규칙 포함)·`ALL_MONTHS`(데이터에서 도출)·비교 `<option>` HTML·기업 옵션을 1회 생성.
  - `renderAll` → `renderTimeline` + `renderMonthButtons`(월별 개수, 0개 월 disabled) + `renderFilterChips`(각 칩 개수는 나머지 필터 기준) + `updateScrollSpy`.
  - `CATEGORY_GROUPS`: `category` → 5색 그룹(`llm`·`reasoning`·`mllm`(MLLM/Multimodal)·`omni`·`special`). 목록에 없는 카테고리는 자동으로 `special` — 새 중요도 예외 부류도 코드 변경 없이 색이 붙는다.
  - 카드 클릭·비교 버튼은 트랙 1곳에서 이벤트 위임. 비교 토글은 전체 재렌더 없이 `syncCompareButtons`로 제자리 갱신. 카드 제목은 `<button class="card-open">`(키보드 진입점), 카드 자체에는 role 없음.
  - 스크롤: 마우스 위치로 축 분리 — 시간축 라인 위에서 휠=좌우, 그 아래=카드 세로. 축 위치는 `AXIS_TRACK_PAD_TOP`·`AXIS_HEAD_PAD_TOP`·`AXIS_NODE_SIZE` 상수와 `containerTop`(resize·`document.fonts.ready`·컨테이너 `ResizeObserver` 시 재측정)으로 계산.
  - 스크롤스파이(데스크톱만): 가로 스크롤 위치의 첫 컬럼 월을 이진 탐색해 월 칩 강조. 칩 클릭·정렬 전환의 smooth scroll 동안은 `lockScrollSpy`로 정지(스크롤 이벤트마다 150ms 재무장).
  - 테마: `toggleTheme`이 `data-theme`을 명시 지정하고 `localStorage`에 저장, `meta[name=theme-color]` 동기화. 미지정 시 OS `prefers-color-scheme`을 따른다.
- `style.css`: 모든 색은 `:root` 토큰(다크는 `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])`와 `:root[data-theme="dark"]` 두 곳에 같은 값). 카테고리 색은 `[data-cat]` 속성으로 `--cat`/`--cat-soft` 주입. 모바일(≤760px)은 세로 스트림·한 줄 가로 스크롤 칩 행·바텀시트 모달·하단 nav.
- `assets/flags/*.svg`: flag-icons 7.2.3(MIT) 10개국. `app.js` `FLAG_CODES`에 있는 코드만 이미지로, 나머지(`미공개` 등)는 지구본 아이콘.
- 배포: Pages `build_type`은 `legacy`(main 브랜치 `/` 원본 그대로 서빙, 관측 2026-10-22 `gh api repos/DT-HJ/llm-timeline/pages`). 커스텀 워크플로가 산출물을 바꿔도 라이브에 반영되지 않으므로, 캐시 무효화는 저장소의 `index.html` `?v=`를 손으로 올리는 방식이다.

## Important Invariants

- 프론트엔드는 `data.js` 전역 상수만 읽는다. 카탈로그 스키마를 바꾸면 `build_data.py`의 생성 형태와 `app.js`의 참조를 함께 맞춰야 한다.
- `SCOPE_DATA.period`가 헤더 문구의 기준이므로 카탈로그 `scope.period` 갱신이 곧 UI 갱신이다.
- 휠 축 분리 상수는 CSS와 쌍이다: `.timeline-track` padding-top(24) = `AXIS_TRACK_PAD_TOP`, `.date-head` padding-top(12) = `AXIS_HEAD_PAD_TOP`, `.station-node` 크기(16) = `AXIS_NODE_SIZE`, `.date-head::before` top(20 = 12+8). 하나를 바꾸면 모두 바꾼다.
- `content-visibility: auto`는 `.cards-stack`에만 건다 — `.date-column`에 걸면 paint containment가 컬럼 간 축 선분을 잘라 시간축이 끊긴다.
- 테마 저장 키 `llm-timeline-theme`은 `index.html` `<head>` 스크립트와 `app.js` `THEME_KEY` 두 곳에 있다.
- `style.css`·`app.js`를 바꾸면 `index.html`의 `?v=` 값을 함께 올린다 — Pages가 자산을 10분 캐시해 새 HTML과 옛 CSS/JS가 섞이면 레이아웃이 깨진다(로컬에서 아이콘이 화면 크기로 커지는 형태로 관측). `data.js`는 감사마다 바뀌고 혼합돼도 깨지지 않아 버전을 붙이지 않는다.

## Relevant Paths

- `index.html`, `app.js`, `style.css`, `data.js`, `assets/`

## Tests / Validation

- 전용 프론트엔드 테스트 없음. 검증은 `validate_data.py`(데이터 일치) + 브라우저 수동 확인(1440·1024·820·390px, 라이트/다크).
- 로컬 확인 시 브라우저가 `/`를 예전 HTML로 캐시할 수 있다 — `index.html?t=<n>`처럼 새 URL로 열거나 캐시를 비운다.

## Known Limitations

- `FAMILY_FLOWS` 데이터는 주입되지만 그리는 뷰가 없다. Generational Flow/Grid/Matrix 뷰, CSV 내보내기, 상태 필터 미구현(`status` 값이 자유 텍스트라 그룹 기준 미정).
- 한국어 별칭 검색은 `buildIndexes`의 수동 규칙이라 신규 조직은 alias를 손으로 넣어야 한국어 검색이 걸린다.
- 새 국가 코드는 `assets/flags/`에 SVG를 받고 `FLAG_CODES`에 추가해야 국기가 나온다(안 하면 지구본).
- 스크롤스파이는 모바일에서 동작하지 않는다(모바일 월 칩 행은 sticky가 아니라 스크롤 후 화면 밖).
- `data.js`의 `benchmark_sources`가 점수마다 URL을 반복해 원본 약 247KB를 차지한다(gzip 전송 약 145KB). 중복 제거는 `build_data.py`·`validate_data.py`의 `TIMELINE_DATA == catalog.models` 동치 검사를 함께 바꿔야 해 보류.

## Related Pages

- [Catalog Pipeline](catalog-pipeline.md)
