---
title: Web Dashboard
type: component
status: current
updated: 2026-10-22
---

# Web Dashboard

## Responsibility

A purely static frontend that renders the catalog data in `data.js` as an interactive month-by-month, day-by-day timeline, with search, type/open-weights/company filters, month navigation, sort order, model details, two-model comparison, and a light/dark theme.

## Interface

- Input: the global constants `data.js` declares — `TIMELINE_DATA` (model array), `COMPANY_META` (the UI uses only `country`; `flag`/`color`/`badge` are unused), `FAMILY_FLOWS`, `UNCONFIRMED_DATA`, `SCOPE_DATA`, `AUDIT_EXCLUDED`.
- Output: none (read-only view). URL hash deep links `#model=<id>` and `#compare=<idA>,<idB>` — opening a modal updates the hash via `history.replaceState`, and closing it clears the hash.
- Local run: `python3 -m http.server 8000` — no build tool. CSS is the static `style.css` (no Tailwind).
- External resources: only two webfont stylesheets (jsDelivr Pretendard dynamic-subset, Google Fonts JetBrains Mono), loaded asynchronously with the `media="print" onload` pattern. Flag SVGs, the favicon, and icons are kept in the repository (`assets/`) or as an inline SVG sprite (Lucide).

## Current Implementation

- `index.html`: an inline `<head>` script applies the saved theme (`localStorage` key `llm-timeline-theme`) as `data-theme` before first paint. Header (search, compare, sort, scroll buttons, GitHub, theme toggle); subbar (month-chip container + type chips `#filter-chips` + company `<select id="company-filter">`); `.timeline-viewport`; compare dock; two modals; mobile bottom nav. `style.css` and `app.js` are referenced with `?v=<date>` (a manual cache-busting version).
- `app.js`: global state (`searchQuery`, `activeGroup`, `openOnly`, `activeCompany`, `activeMonth`, `sortOrder`, `compareList`) plus string-building render functions. Every data string is HTML-escaped with `esc()`.
  - `buildIndexes`: builds once `MODEL_BY_ID`, the search text (`SEARCH_TEXT`, including the Korean alias rules), `ALL_MONTHS` (derived from the data), the compare `<option>` HTML, and the company options.
  - `renderAll` → `renderTimeline` + `renderMonthButtons` (per-month counts; months with 0 results disabled) + `renderFilterChips` (each chip's count is computed under the other filters) + `updateScrollSpy`.
  - `CATEGORY_GROUPS`: maps `category` to 5 colour groups (`llm`, `reasoning`, `mllm` (MLLM/Multimodal), `omni`, `special`). Unlisted categories fall into `special` automatically — a new inclusion-exception category gets a colour without code changes.
  - Card clicks and compare buttons are delegated from a single listener on the track. Compare toggles update in place via `syncCompareButtons` instead of re-rendering everything. The card title is a `<button class="card-open">` (the keyboard entry point); the card itself has no role.
  - Scrolling: the wheel axis splits by pointer position — on or above the time axis line, the wheel scrolls horizontally; below it, the cards scroll vertically. The axis position is computed from the `AXIS_TRACK_PAD_TOP`, `AXIS_HEAD_PAD_TOP`, `AXIS_NODE_SIZE` constants and `containerTop` (re-measured on resize, on `document.fonts.ready`, and via a `ResizeObserver` on the container).
  - Scrollspy (desktop only): binary-searches the first column at the current horizontal scroll offset and highlights its month chip. During smooth scrolls triggered by a chip click or sort toggle it is paused with `lockScrollSpy` (re-armed for 150 ms on every scroll event).
  - Theme: `toggleTheme` sets `data-theme` explicitly, stores it in `localStorage`, and syncs `meta[name=theme-color]`. Without an explicit choice it follows the OS `prefers-color-scheme`.
- `style.css`: every colour is a `:root` token (dark values appear twice with the same content: under `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` and under `:root[data-theme="dark"]`). Category colours are injected as `--cat`/`--cat-soft` through the `[data-cat]` attribute. Mobile (≤760px) switches to a vertical stream, single-row horizontally scrolling chip rows, bottom-sheet modals, and a bottom nav.
- `assets/flags/*.svg`: flag-icons 7.2.3 (MIT), 10 countries. Only codes listed in `app.js` `FLAG_CODES` render as images; others (`미공개`, ...) show a globe icon.
- Deployment: Pages `build_type` is `legacy` (serves the raw `main` branch at `/`, observed 2026-10-22 via `gh api repos/DT-HJ/llm-timeline/pages`). A custom workflow cannot change what goes live, so cache busting is done by bumping `?v=` in the repository's `index.html` by hand.

## Important Invariants

- The frontend reads only the global constants in `data.js`. A catalog schema change must be matched in both `build_data.py`'s generated shape and `app.js`'s references.
- `SCOPE_DATA.period` drives the header text, so updating the catalog's `scope.period` is the UI update.
- The wheel axis-split constants pair with CSS: `.timeline-track` padding-top (24) = `AXIS_TRACK_PAD_TOP`, `.date-head` padding-top (12) = `AXIS_HEAD_PAD_TOP`, `.station-node` size (16) = `AXIS_NODE_SIZE`, `.date-head::before` top (20 = 12 + 8). Change one, change all.
- `content-visibility: auto` goes on `.cards-stack` only — on `.date-column`, paint containment would clip the axis segments between columns and break the time axis.
- The theme storage key `llm-timeline-theme` lives in two places: the `<head>` script in `index.html` and `THEME_KEY` in `app.js`.
- When `style.css` or `app.js` changes, bump the `?v=` value in `index.html` with it — Pages caches assets for 10 minutes, and new HTML mixed with old CSS/JS breaks the layout (observed locally as icons blown up to screen size). `data.js` changes every audit and does not break when mixed, so it carries no version.

## Relevant Paths

- `index.html`, `app.js`, `style.css`, `data.js`, `assets/`

## Tests / Validation

- No dedicated frontend tests. Validation is `validate_data.py` (data equality) plus manual browser checks: 2026-10-22, host local, Playwright — light at 1440·1024·820·390px, dark at 1440·1280·1024·820·390px, wheel axis split, filter counts, month-chip persistence across resize, scrollspy, hash updates, focus restore, 0 console errors.
- In local checks the browser may cache `/` as old HTML — open a fresh URL such as `index.html?t=<n>` or clear the cache.

## Known Limitations

- `FAMILY_FLOWS` data is injected but no view draws it. Generational Flow/Grid/Matrix views, CSV export, and a status filter are not implemented (`status` is free text, so no grouping rule is settled).
- Korean alias search uses hand-written rules in `buildIndexes`, so a new organization needs its aliases added by hand before Korean queries match it.
- A new country code needs its SVG downloaded into `assets/flags/` and an entry in `FLAG_CODES` before a flag shows (otherwise a globe).
- Scrollspy does not run on mobile (the mobile month-chip row is not sticky and scrolls off screen).
- `benchmark_sources` in `data.js` repeats a URL per score and takes about 247 KB raw (about 145 KB gzipped in transfer). Deduplicating it was deferred because it would require changing `build_data.py` together with `validate_data.py`'s `TIMELINE_DATA == catalog.models` equality check.

## Related Pages

- [Catalog Pipeline](catalog-pipeline.md)
