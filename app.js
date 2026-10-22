// LLM Timeline 2026 - Minimalist Chronological Horizontal Timeline & Model Comparison

var searchQuery = '';
var activeGroup = 'all';   // category group filter (see CATEGORY_GROUPS)
var openOnly = false;      // open-weights filter
var activeCompany = '';    // company filter ('' = all)
var activeMonth = 'all';
var activeModalId = null;
var sortOrder = 'desc'; // Default: Newest first (10월 -> 1월)
var compareList = [];   // Array of up to 2 model IDs: [idA, idB]
var activeCompareA = null;
var activeCompareB = null;
var lastFocusedEl = null;
var spyLocked = false;     // pause scrollspy while a chip-triggered scroll runs
var spyUnlockTimer = null;

// Matches the bootstrap script in index.html <head>.
var THEME_KEY = 'llm-timeline-theme';

// Wheel axis split mirrors style.css: .timeline-track padding-top,
// .date-head padding-top and the .station-node size. Change them together.
var AXIS_TRACK_PAD_TOP = 24;
var AXIS_HEAD_PAD_TOP = 12;
var AXIS_NODE_SIZE = 16;

// Category → colour group. Unlisted categories (Image/Music generation,
// Embedding, Memory, ...) fall into 'special' so new inclusion-exception
// classes get a colour without code changes.
var CATEGORY_GROUPS = [
  { key: 'llm', label: 'LLM', cats: ['LLM'] },
  { key: 'reasoning', label: '추론', cats: ['Reasoning'] },
  { key: 'mllm', label: '멀티모달', cats: ['MLLM', 'Multimodal'] },
  { key: 'omni', label: '옴니', cats: ['Omni'] },
  { key: 'special', label: '특수 목적', cats: [] }
];

// Country codes with a vendored SVG in assets/flags/ (see its README).
var FLAG_CODES = ['ae', 'ca', 'cn', 'de', 'fr', 'in', 'kr', 'ru', 'sg', 'us'];

var MODEL_BY_ID = {};
var SEARCH_TEXT = {};
var ALL_MONTHS = [];
var COMPARE_OPTIONS_HTML = '';

function isMobileLayout() {
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 760px)').matches;
}

function esc(value) {
  return String(value === undefined || value === null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function icon(name, extraClass) {
  return '<svg class="icon' + (extraClass ? ' ' + extraClass : '') + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
}

function getModel(id) {
  return MODEL_BY_ID[id];
}

function companyMeta(m) {
  return (typeof COMPANY_META !== 'undefined' && COMPANY_META[m.company]) ? COMPANY_META[m.company] : {};
}

function flagHtml(m) {
  var meta = companyMeta(m);
  var code = String(meta.country || '').toLowerCase();
  if (FLAG_CODES.indexOf(code) !== -1) {
    return '<img class="flag" src="assets/flags/' + code + '.svg" alt="' + esc(meta.country) + '" title="' + esc(meta.country) + '" loading="lazy" width="16" height="12">';
  }
  return icon('globe', 'flag-unknown');
}

function companyHtml(m) {
  return flagHtml(m) + '<span class="card-company-name">' + esc(m.company) + '</span>';
}

function categoryGroup(m) {
  var cat = m.category || m.type;
  for (var i = 0; i < CATEGORY_GROUPS.length; i++) {
    if (CATEGORY_GROUPS[i].cats.indexOf(cat) !== -1) return CATEGORY_GROUPS[i].key;
  }
  return 'special';
}

function categoryTagHtml(m) {
  return '<span class="card-tag cat-tag" data-cat="' + categoryGroup(m) + '">' + esc(m.category || m.type) + '</span>';
}

// Type text plus the category tag, unless the tag would just repeat the type.
function typeWithCategoryHtml(m) {
  return esc(m.type) + (m.category && m.category !== m.type ? ' ' + categoryTagHtml(m) : '');
}

// The audit window lives in SCOPE_DATA.period (models_catalog.json -> data.js),
// so the header subtitle cannot drift from the SSOT when releases are added.
function auditPeriodLabel() {
  var period = (typeof SCOPE_DATA !== 'undefined' && SCOPE_DATA.period) ? SCOPE_DATA.period : '';
  var end = (period.split('~')[1] || '').trim().split('-');
  if (end.length !== 3) return '';
  return parseInt(end[1], 10) + '월 ' + parseInt(end[2], 10) + '일';
}

function updateHeaderSubtitle() {
  var sub = document.getElementById('header-subtitle');
  if (!sub || typeof TIMELINE_DATA === 'undefined') return;
  sub.textContent = isMobileLayout()
    ? '2026년 출시 ' + TIMELINE_DATA.length + '개 모델 · 공식 1차 출처 감사'
    : '2026년 1월 1일 ~ ' + auditPeriodLabel() + ' · 주요 파운데이션 모델 ' + TIMELINE_DATA.length + '개 출시 순서 · 공식 1차 출처 감사';
}

function buildIndexes() {
  var aliasRules = [
    { match: function(m) { return m.company.indexOf('LG') !== -1 || m.family.indexOf('EXAONE') !== -1; }, words: 'lg 엘지 exaone 엑사원' },
    { match: function(m) { return m.company.indexOf('SK') !== -1 || m.family.indexOf('A.X') !== -1; }, words: 'sk skt 에스케이 a.x 에이닷' },
    { match: function(m) { return m.company.indexOf('NAVER') !== -1 || m.name.indexOf('HyperCLOVA') !== -1; }, words: 'naver 네이버 clova 클로바' },
    { match: function(m) { return m.company.indexOf('Upstage') !== -1 || m.name.indexOf('Solar') !== -1; }, words: 'upstage 업스테이지 solar 솔라' },
    { match: function(m) { return m.company.indexOf('Tencent') !== -1 || m.family.indexOf('Hunyuan') !== -1; }, words: 'tencent 텐센트 hunyuan 훈위안 혼원 hy4 hy3' }
  ];
  var months = {};
  COMPARE_OPTIONS_HTML = '';
  TIMELINE_DATA.forEach(function(m) {
    MODEL_BY_ID[m.id] = m;
    months[m.date.slice(0, 7)] = true;
    var aliases = aliasRules.filter(function(r) { return r.match(m); }).map(function(r) { return r.words; });
    SEARCH_TEXT[m.id] = [
      m.name, m.company, m.family, m.parameters, m.architecture, m.type, m.category, m.date, m.note || ''
    ].concat(aliases).join(' ').toLowerCase();
    COMPARE_OPTIONS_HTML += '<option value="' + esc(m.id) + '">' + esc(m.name) + ' (' + esc(m.company) + ' · ' + esc(m.date) + ')</option>';
  });
  ALL_MONTHS = Object.keys(months).sort();
  renderCompanyOptions();
}

function renderCompanyOptions() {
  var select = document.getElementById('company-filter');
  if (!select) return;
  var counts = {};
  TIMELINE_DATA.forEach(function(m) {
    counts[m.company] = (counts[m.company] || 0) + 1;
  });
  var names = Object.keys(counts).sort(function(a, b) {
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
  });
  var html = '<option value="">모든 기업 (' + names.length + ')</option>';
  names.forEach(function(name) {
    html += '<option value="' + esc(name) + '">' + esc(name) + ' · ' + counts[name] + '</option>';
  });
  select.innerHTML = html;
}

// -------------------------------------------------------------
// Theme (light / dark). Default follows the OS; the toggle pins a choice.
// -------------------------------------------------------------

function currentTheme() {
  var explicit = document.documentElement.getAttribute('data-theme');
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

function syncThemeColor() {
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', currentTheme() === 'dark' ? '#0b1120' : '#ffffff');
}

function toggleTheme() {
  var next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (e) {}
  syncThemeColor();
}

// Initialize robustly regardless of load timing
function initApp() {
  if (typeof TIMELINE_DATA === 'undefined') {
    console.error('TIMELINE_DATA is not loaded.');
    return;
  }
  buildIndexes();
  syncThemeColor();
  updateHeaderSubtitle();
  renderAll();
  setupSearchInput();
  setupCardInteractions();
  setupScrollInteractions();
  updateCompareDock();

  // Check URL hash for direct comparison link or model modal
  if (window.location.hash.indexOf('#compare') !== -1) {
    var hashStr = window.location.hash.replace('#compare', '').replace(/^=/, '');
    var parts = hashStr ? hashStr.split(',') : [];
    if (parts.length >= 2 && parts[0] && parts[1]) {
      openCompareModal(parts[0], parts[1]);
    } else {
      openCompareModal();
    }
  } else if (window.location.hash.indexOf('#model=') !== -1) {
    var modelId = window.location.hash.replace('#model=', '');
    if (modelId) {
      openModal(modelId);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Only the mobile/desktop switch changes labels, so re-render on that edge
// instead of on every resize event (which also used to reset the active chip).
var lastMobileLayout = isMobileLayout();
var resizeTimer = null;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    var mobile = isMobileLayout();
    if (mobile === lastMobileLayout) return;
    lastMobileLayout = mobile;
    updateHeaderSubtitle();
    renderMonthButtons(getFilteredModels());
  }, 150);
});

function replaceHash(hash) {
  if (!window.history || !window.history.replaceState) return;
  var url = window.location.pathname + window.location.search + (hash ? '#' + hash : '');
  window.history.replaceState(null, '', url);
}

function setNavActive(key) {
  document.querySelectorAll('.mobile-bottom-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-nav') === key);
  });
}

// -------------------------------------------------------------
// Filtering
// -------------------------------------------------------------

// Search + company: the filters every chip count is computed under.
function matchesBase(m) {
  if (activeCompany && m.company !== activeCompany) return false;
  return !searchQuery || SEARCH_TEXT[m.id].indexOf(searchQuery.toLowerCase()) !== -1;
}

function getFilteredModels() {
  return TIMELINE_DATA.filter(function(m) {
    if (!matchesBase(m)) return false;
    if (openOnly && !m.open_weights) return false;
    if (activeGroup !== 'all' && categoryGroup(m) !== activeGroup) return false;
    return true;
  });
}

function renderAll() {
  var models = getFilteredModels();
  renderTimeline(models);
  renderMonthButtons(models);
  renderFilterChips();
  updateScrollSpy();
}

function setGroupFilter(key) {
  activeGroup = (activeGroup === key) ? 'all' : key;
  renderAll();
}

function toggleOpenOnly() {
  openOnly = !openOnly;
  renderAll();
}

function setCompanyFilter(name) {
  activeCompany = name || '';
  var select = document.getElementById('company-filter');
  if (select) {
    select.value = activeCompany;
    select.classList.toggle('active', !!activeCompany);
  }
  renderAll();
}

function resetFilters() {
  activeGroup = 'all';
  openOnly = false;
  activeCompany = '';
  var select = document.getElementById('company-filter');
  if (select) {
    select.value = '';
    select.classList.remove('active');
  }
  var input = document.getElementById('search-input');
  if (input) input.value = '';
  handleSearch('');
}

function renderFilterChips() {
  var container = document.getElementById('filter-chips');
  if (!container) return;

  // Counts reflect the other active filters, so each chip shows what it would yield.
  var groupCounts = {};
  var openCount = 0;
  TIMELINE_DATA.forEach(function(m) {
    if (!matchesBase(m)) return;
    var g = categoryGroup(m);
    if (!openOnly || m.open_weights) groupCounts[g] = (groupCounts[g] || 0) + 1;
    if (m.open_weights && (activeGroup === 'all' || g === activeGroup)) openCount++;
  });

  var html = '';
  CATEGORY_GROUPS.forEach(function(group) {
    var count = groupCounts[group.key] || 0;
    var active = activeGroup === group.key;
    html += '<button class="filter-chip' + (active ? ' active' : '') + '" data-cat="' + group.key + '" aria-pressed="' + active + '" onclick="setGroupFilter(\'' + group.key + '\')">';
    html += '<span class="cat-dot"></span>' + esc(group.label) + ' <span class="chip-count">' + count + '</span></button>';
  });
  html += '<span class="filter-divider" aria-hidden="true"></span>';
  html += '<button class="filter-chip' + (openOnly ? ' active' : '') + '" data-filter="open" aria-pressed="' + openOnly + '" onclick="toggleOpenOnly()">';
  html += icon('unlock') + '오픈 웨이트 <span class="chip-count">' + openCount + '</span></button>';
  container.innerHTML = html;
}

// Month chips are derived from the data, so a new month needs no code change.
function renderMonthButtons(models) {
  var container = document.querySelector('.month-buttons');
  if (!container) return;
  var counts = {};
  models.forEach(function(m) {
    var key = m.date.slice(0, 7);
    counts[key] = (counts[key] || 0) + 1;
  });
  if (activeMonth !== 'all' && !counts[activeMonth]) activeMonth = 'all';

  var months = ALL_MONTHS.slice();
  if (sortOrder === 'desc') months.reverse();

  var html = '<button class="month-btn' + (activeMonth === 'all' ? ' active' : '') + '" data-month="all" onclick="jumpToMonth(\'all\')">전체 <span class="chip-count">' + models.length + '</span></button>';
  months.forEach(function(m) {
    var count = counts[m] || 0;
    var monthNum = parseInt(m.slice(5), 10);
    html += '<button class="month-btn' + (activeMonth === m ? ' active' : '') + '" data-month="' + m + '" onclick="jumpToMonth(\'' + m + '\')"' + (count ? '' : ' disabled') + '>';
    html += monthNum + '월' + (count ? ' <span class="chip-count">' + count + '</span>' : '') + '</button>';
  });
  container.innerHTML = html;
}

// Toggle Sort Order (최신순 ⇄ 과거순)
function toggleSortOrder() {
  sortOrder = (sortOrder === 'desc') ? 'asc' : 'desc';
  var labelText = (sortOrder === 'desc') ? '최신순' : '과거순';
  ['sort-toggle-label', 'mobile-sort-label'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.textContent = labelText;
  });
  // Lock before re-rendering: renderAll() runs the spy, which would read the
  // old scroll offset against the new column order.
  activeMonth = 'all';
  lockScrollSpy(400);
  renderAll();
  var container = document.getElementById('timeline-scroll-container');
  if (container) {
    container.scrollTo({ left: 0, behavior: 'smooth' });
  }
}

// -------------------------------------------------------------
// Timeline rendering
// -------------------------------------------------------------

function renderTimeline(models) {
  var track = document.getElementById('timeline-track-inner');
  if (!track) return;
  models = models || getFilteredModels();

  if (models.length === 0) {
    track.innerHTML = '<div class="empty-state"><span>조건에 맞는 모델이 없습니다.</span><button class="btn-secondary" onclick="resetFilters()">검색어·필터 초기화</button></div>';
    return;
  }

  // Group models by Date
  var dateGroups = {};
  models.forEach(function(m) {
    if (!dateGroups[m.date]) {
      dateGroups[m.date] = [];
    }
    dateGroups[m.date].push(m);
  });

  var dates = Object.keys(dateGroups);
  dates.sort(function(a, b) {
    return (sortOrder === 'desc') ? b.localeCompare(a) : a.localeCompare(b);
  });

  // .timeline-axis-line is the mobile vertical spine (desktop draws per column)
  var html = '<div class="timeline-axis-line"></div>';
  var seenMonths = {};

  dates.forEach(function(date) {
    var groupModels = dateGroups[date];
    var month = date.slice(0, 7);

    html += '<section class="date-column" id="date-col-' + date + '" data-month="' + month + '">';
    html += '<div class="date-head">';
    if (!seenMonths[month]) {
      seenMonths[month] = true;
      html += '<span class="month-marker">' + parseInt(month.slice(5), 10) + '월</span>';
    }
    html += '<div class="station-node" title="' + date + '"></div>';
    html += '<div class="date-badge">' + date + '</div>';
    html += '<div class="date-model-count">' + groupModels.length + '개 모델</div>';
    html += '</div>';
    html += '<div class="cards-stack">';
    groupModels.forEach(function(m) {
      html += renderModelCard(m);
    });
    html += '</div>';
    html += '</section>';
  });

  track.innerHTML = html;
}

function compareButtonInner(isCompared) {
  return isCompared ? icon('check') + '선택됨' : icon('plus') + '비교';
}

function renderModelCard(m) {
  var isCompared = compareList.indexOf(m.id) !== -1;

  var html = '<article class="model-card' + (isCompared ? ' is-compared' : '') + '" data-id="' + esc(m.id) + '" data-cat="' + categoryGroup(m) + '">';

  html += '<div class="card-top">';
  html += '<span class="card-company">' + companyHtml(m) + '</span>';
  html += '<div class="card-actions">';
  html += categoryTagHtml(m);
  html += '<button class="btn-card-compare' + (isCompared ? ' active' : '') + '" data-compare-id="' + esc(m.id) + '" title="비교 목록에 추가/제거" aria-pressed="' + isCompared + '">' + compareButtonInner(isCompared) + '</button>';
  html += '</div>';
  html += '</div>';

  // The title is the keyboard target; mouse clicks anywhere on the card also open it.
  html += '<h3 class="card-title"><button class="card-open" type="button">' + esc(m.name) + '</button></h3>';

  if (m.parameters) {
    html += '<div class="card-params">' + esc(m.parameters) + '</div>';
  }
  if (m.architecture) {
    html += '<div class="card-arch">' + esc(m.architecture) + '</div>';
  }

  html += '<div class="card-bottom">';
  html += '<span class="card-family">' + esc(m.family) + '</span>';
  if (m.open_weights) {
    html += '<span class="card-open-weights">' + icon('unlock') + '오픈 웨이트</span>';
  } else if (m.status && m.status !== 'GA') {
    html += '<span class="card-status">' + esc(m.status) + '</span>';
  } else {
    html += '<span class="card-status">상세보기 →</span>';
  }
  html += '</div>';

  html += '</article>';
  return html;
}

// Cards are re-rendered often, so handle clicks once on the track.
function setupCardInteractions() {
  var track = document.getElementById('timeline-track-inner');
  if (!track) return;

  track.addEventListener('click', function(e) {
    var compareBtn = e.target.closest('.btn-card-compare');
    if (compareBtn) {
      toggleCompareItem(compareBtn.getAttribute('data-compare-id'), e);
      return;
    }
    var card = e.target.closest('.model-card');
    if (card) openModal(card.getAttribute('data-id'));
  });
}

// Setup Horizontal Scroll Interactions (Smoother & Faster Physics)
function setupScrollInteractions() {
  var container = document.getElementById('timeline-scroll-container');
  if (!container) return;

  var targetScrollLeft = container.scrollLeft;
  var targetScrollTop = container.scrollTop;
  var isAnimating = false;

  // Smooth lerp animation loop
  function smoothScrollLoop() {
    var diffX = targetScrollLeft - container.scrollLeft;
    var diffY = targetScrollTop - container.scrollTop;
    if (Math.abs(diffX) > 0.5 || Math.abs(diffY) > 0.5) {
      container.scrollLeft += diffX * 0.18; // smooth easing
      container.scrollTop += diffY * 0.18;
      requestAnimationFrame(smoothScrollLoop);
      isAnimating = true;
    } else {
      container.scrollLeft = targetScrollLeft;
      container.scrollTop = targetScrollTop;
      isAnimating = false;
    }
  }

  // Wheel: pointer at/above the time axis line -> horizontal time scroll.
  // Pointer below the line -> vertical scroll of the model cards only
  // (the sticky .date-head keeps node/date floating at the top).
  //
  // Axis position is derived from layout constants instead of querying
  // getBoundingClientRect() per wheel tick (which forces sync layout):
  // the head sticks once scrollTop >= AXIS_TRACK_PAD_TOP, pinning the
  // node bottom (+6px slack) at AXIS_HEAD_PAD_TOP + AXIS_NODE_SIZE + 6.
  var axisPinnedBottom = AXIS_HEAD_PAD_TOP + AXIS_NODE_SIZE + 6;
  // Re-measure when the header/subbar re-wrap: on resize, after webfonts
  // swap in, and when filter chips change the bar height (container resizes).
  var containerTop = container.getBoundingClientRect().top;
  function measureContainerTop() {
    containerTop = container.getBoundingClientRect().top;
  }
  window.addEventListener('resize', measureContainerTop);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(measureContainerTop);
  }
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(measureContainerTop).observe(container);
  }

  container.addEventListener('wheel', function(e) {
    // Mobile switches to a vertical timeline. Do not cancel the page's
    // vertical wheel/touch scrolling when there is no horizontal canvas.
    if (container.scrollWidth <= container.clientWidth + 1) return;
    var multiplier = (e.deltaMode === 1) ? 45 : 2.2;
    var axisBottom = containerTop + Math.max(AXIS_TRACK_PAD_TOP - container.scrollTop, 0) + axisPinnedBottom;

    if (e.clientY <= axisBottom) {
      var delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (delta === 0) return;
      e.preventDefault();
      var maxScroll = container.scrollWidth - container.clientWidth;
      targetScrollLeft = Math.max(0, Math.min(maxScroll, targetScrollLeft + delta * multiplier));
    } else {
      if (e.deltaY === 0 && e.deltaX === 0) return;
      e.preventDefault();
      var maxTop = container.scrollHeight - container.clientHeight;
      targetScrollTop = Math.max(0, Math.min(maxTop, targetScrollTop + e.deltaY * multiplier));
      if (e.deltaX !== 0) {
        var maxLeft = container.scrollWidth - container.clientWidth;
        targetScrollLeft = Math.max(0, Math.min(maxLeft, targetScrollLeft + e.deltaX * multiplier));
      }
    }

    if (!isAnimating) {
      smoothScrollLoop();
    }
  }, { passive: false });

  // Sync target position on native scroll events (drag / touch)
  var spyFrame = 0;
  container.addEventListener('scroll', function() {
    if (!isAnimating) {
      targetScrollLeft = container.scrollLeft;
      targetScrollTop = container.scrollTop;
    }
    if (spyLocked) {
      lockScrollSpy(150);
    } else if (!spyFrame) {
      spyFrame = requestAnimationFrame(function() {
        spyFrame = 0;
        updateScrollSpy();
      });
    }
  }, { passive: true });

  // Drag-to-scroll
  var isDown = false;
  var startX;
  var startScrollLeft;

  container.addEventListener('mousedown', function(e) {
    if (e.target.closest('.model-card') || e.target.closest('button')) return;
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    startScrollLeft = container.scrollLeft;
    targetScrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', function() {
    isDown = false;
  });

  container.addEventListener('mouseup', function() {
    isDown = false;
  });

  container.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - container.offsetLeft;
    var walk = (x - startX) * 1.8;
    var maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollLeft = Math.max(0, Math.min(maxScroll, startScrollLeft - walk));
    targetScrollLeft = container.scrollLeft;
  });
}

// Navigation Controls (Buttons)
function scrollTimeline(direction) {
  var container = document.getElementById('timeline-scroll-container');
  if (!container) return;
  var amount = 750;
  container.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

function setMonthChipActive(month) {
  activeMonth = month;
  var row = document.querySelector('.month-buttons');
  if (!row) return;
  var activeChip = null;
  row.querySelectorAll('.month-btn').forEach(function(btn) {
    var on = btn.getAttribute('data-month') === month;
    btn.classList.toggle('active', on);
    if (on) activeChip = btn;
  });
  // Centre the chip by scrolling the row itself; scrollIntoView would also move the page.
  if (activeChip && row.scrollWidth > row.clientWidth) {
    row.scrollTo({ left: activeChip.offsetLeft - (row.clientWidth - activeChip.offsetWidth) / 2, behavior: 'smooth' });
  }
}

// Scrollspy is paused during chip/sort-triggered smooth scrolls so the
// highlight doesn't flicker through intermediate months; each scroll event
// re-arms the timer, so it resumes shortly after the scroll settles.
function lockScrollSpy(ms) {
  spyLocked = true;
  clearTimeout(spyUnlockTimer);
  spyUnlockTimer = setTimeout(function() { spyLocked = false; }, ms);
}

// Desktop only: highlight the month of the first column at the left edge.
function updateScrollSpy() {
  if (spyLocked || isMobileLayout()) return;
  var container = document.getElementById('timeline-scroll-container');
  if (!container) return;
  var cols = container.querySelectorAll('.date-column');
  if (!cols.length) return;
  var x = container.scrollLeft;
  var month = 'all';
  if (x >= 8) {
    // Binary search for the first column whose right edge is past the left edge.
    var lo = 0;
    var hi = cols.length - 1;
    while (lo < hi) {
      var mid = (lo + hi) >> 1;
      if (cols[mid].offsetLeft + cols[mid].offsetWidth <= x) lo = mid + 1;
      else hi = mid;
    }
    month = cols[lo].getAttribute('data-month');
  }
  if (month !== activeMonth) setMonthChipActive(month);
}

function jumpToMonth(month) {
  var container = document.getElementById('timeline-scroll-container');
  if (!container) return;

  setMonthChipActive(month);
  lockScrollSpy(400);

  if (month === 'all') {
    setNavActive('all');
    if (isMobileLayout()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    }
    return;
  }

  var targetCol = container.querySelector('.date-column[data-month="' + month + '"]');
  if (!targetCol) return;
  if (isMobileLayout()) {
    // Only the header is sticky on mobile; offset by it so the date isn't hidden.
    var header = document.querySelector('.app-header');
    var offset = (header ? header.offsetHeight : 0) + 12;
    window.scrollTo({ top: targetCol.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
  } else {
    targetCol.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }
}

// -------------------------------------------------------------
// Search
// -------------------------------------------------------------

function setupSearchInput() {
  var input = document.getElementById('search-input');
  if (!input) return;
  var timer = null;
  input.addEventListener('input', function() {
    var value = input.value;
    clearTimeout(timer);
    timer = setTimeout(function() { handleSearch(value); }, 120);
  });
  input.addEventListener('focus', function() { setNavActive('search'); });
  input.addEventListener('blur', function() { setNavActive('all'); });
}

function handleSearch(val) {
  searchQuery = val.trim();
  var clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) {
    clearBtn.classList.toggle('hidden', !searchQuery);
  }
  renderAll();
}

function clearSearch() {
  var input = document.getElementById('search-input');
  if (input) {
    input.value = '';
    input.focus();
  }
  handleSearch('');
}

function focusSearchInput() {
  var input = document.getElementById('search-input');
  if (!input) return;
  input.focus();
  input.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// -------------------------------------------------------------
// Modal (Single Model Details)
// -------------------------------------------------------------

function rememberFocus() {
  if (!lastFocusedEl && document.activeElement && document.activeElement !== document.body) {
    lastFocusedEl = document.activeElement;
  }
}

function restoreFocus() {
  if (lastFocusedEl && document.contains(lastFocusedEl)) {
    lastFocusedEl.focus({ preventScroll: true });
  }
  lastFocusedEl = null;
}

function parameterStatusLabel(status) {
  if (status === 'undisclosed') return '공식 수치 미공개';
  if (status === 'publisher-approximate') return '공식 발표의 근사값';
  if (status === 'publisher-partial') return '공식 발표의 부분 공개';
  return '공식 발표값';
}

function openModal(id) {
  var m = getModel(id);
  if (!m) return;

  rememberFocus();
  activeModalId = id;
  var modal = document.getElementById('model-modal');
  var card = document.getElementById('modal-content-card');
  card.setAttribute('data-cat', categoryGroup(m));

  var html = '';
  html += '<div class="modal-header">';
  html += '<div>';
  html += '<div class="modal-eyebrow"><span class="card-company">' + companyHtml(m) + '</span><span>·</span><span>' + esc(m.family) + '</span></div>';
  html += '<h2 class="modal-title" id="modal-title">' + esc(m.name) + '</h2>';
  html += '<div class="modal-subtitle">출시일 <span class="mono">' + esc(m.date) + '</span></div>';
  html += '</div>';
  html += '<button class="modal-close" onclick="closeModal()" aria-label="닫기">' + icon('x') + '</button>';
  html += '</div>';

  html += '<div class="modal-body">';

  html += '<div class="spec-grid">';
  html += '<div class="spec-item"><span class="spec-label">유형</span><div class="spec-value">' + esc(m.type) + '</div>' + (m.category && m.category !== m.type ? '<div class="tag-row">' + categoryTagHtml(m) + '</div>' : '') + '</div>';
  html += '<div class="spec-item"><span class="spec-label">상태</span><div class="spec-value">' + esc(m.status || 'GA') + '</div></div>';

  if (m.parameters) {
    html += '<div class="spec-item span-2"><span class="spec-label">파라미터 규격</span><div class="spec-value num">' + esc(m.parameters) + '</div>';
    if (m.parameter_status) {
      html += '<div class="spec-hint">' + parameterStatusLabel(m.parameter_status) + '</div>';
    }
    html += '</div>';
  }
  if (m.architecture) {
    html += '<div class="spec-item span-2"><span class="spec-label">아키텍처</span><div class="spec-value">' + esc(m.architecture) + '</div></div>';
  }
  if (m.context) {
    html += '<div class="spec-item"><span class="spec-label">컨텍스트 윈도우</span><div class="spec-value mono">' + esc(m.context) + '</div></div>';
  }
  if (m.open_weights !== undefined) {
    html += '<div class="spec-item"><span class="spec-label">오픈 웨이트 여부</span><div class="spec-value">' + (m.open_weights ? '예 (Open Weights)' : '아니오 (API / 폐쇄형)') + '</div></div>';
  }
  html += '</div>';

  if (m.modalities && m.modalities.length > 0) {
    html += '<div><span class="spec-label">지원 모달리티</span><div class="tag-row">';
    m.modalities.forEach(function(mod) {
      html += '<span class="card-tag">' + esc(mod) + '</span>';
    });
    html += '</div></div>';
  }

  if (m.focus && m.focus.length > 0) {
    html += '<div><span class="spec-label">주요 역량 / 포커스</span><div class="tag-row">';
    m.focus.forEach(function(f) {
      html += '<span class="card-tag">' + esc(f) + '</span>';
    });
    html += '</div></div>';
  }

  // Benchmark scores section
  if (m.benchmarks && Object.keys(m.benchmarks).length > 0) {
    html += '<div class="section">';
    html += '<div class="section-heading benchmark-heading">';
    html += '<span class="section-title">' + icon('chart') + '주요 공개 벤치마크 점수</span>';
    html += '<span class="section-caption">개발사 공식 카드·보고서·발표문 직접 기재</span>';
    html += '</div>';
    html += '<div class="benchmark-score-grid">';
    Object.keys(m.benchmarks).forEach(function(key) {
      var val = m.benchmarks[key];
      var width = Math.max(0, Math.min(100, Number(val) || 0));
      var benchmarkSource = (m.benchmark_sources || {})[key];
      html += '<div class="bench-tile">';
      html += '<div class="bench-tile-label">' + esc(key) + '</div>';
      html += '<div class="bench-tile-row"><span class="bench-tile-value">' + esc(val) + '%</span>';
      if (benchmarkSource) {
        html += '<a class="source-link" href="' + esc(benchmarkSource) + '" target="_blank" rel="noopener noreferrer">공식 출처' + icon('external') + '</a>';
      }
      html += '</div>';
      html += '<div class="bench-meter"><span style="width: ' + width + '%"></span></div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';
  } else {
    html += '<div class="section muted-note">이 감사 원장에 기록된 공식 공개 벤치마크 점수 없음 (추정치·제3자 점수는 표시하지 않음)</div>';
  }

  if (m.official_sources && m.official_sources.length > 0) {
    html += '<div class="section">';
    html += '<div class="spec-label">검증된 공식 출처</div>';
    html += '<div class="source-list">';
    m.official_sources.forEach(function(source) {
      html += '<a class="source-link" href="' + esc(source.url) + '" target="_blank" rel="noopener noreferrer">' + esc(source.label) + icon('external') + '</a>';
    });
    html += '</div>';
    html += '</div>';
  }

  if (m.note) {
    html += '<div class="modal-note"><strong>비고:</strong> ' + esc(m.note) + '</div>';
  }

  html += '</div>';

  html += '<div class="modal-footer">';
  html += '<div class="modal-footer-actions">';
  html += '<button class="btn-secondary" onclick="addModelToCompare(\'' + esc(m.id) + '\')">' + icon('scale') + '이 모델 비교함 담기</button>';
  html += '<button class="btn-secondary" onclick="copyCitation(\'' + esc(m.id) + '\')">' + icon('copy') + '<span id="btn-copy-text">인용 복사</span></button>';
  html += '</div>';
  html += '<button class="btn-primary" onclick="closeModal()">닫기</button>';
  html += '</div>';

  card.setAttribute('aria-labelledby', 'modal-title');
  card.innerHTML = html;
  card.scrollTop = 0;
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  replaceHash('model=' + id);
  var closeBtn = card.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus({ preventScroll: true });
}

function closeModal() {
  var modal = document.getElementById('model-modal');
  if (!modal || modal.classList.contains('hidden')) return;
  modal.classList.add('hidden');
  activeModalId = null;
  var compareModal = document.getElementById('compare-modal');
  if (!compareModal || compareModal.classList.contains('hidden')) {
    document.body.classList.remove('modal-open');
    replaceHash('');
    restoreFocus();
  }
}

function handleModalBackdropClick(e) {
  if (e.target.id === 'model-modal') closeModal();
}

function copyCitation(id) {
  var m = getModel(id);
  if (!m) return;
  var citation = '- **' + m.name + '** (' + m.company + ', ' + m.date + ') - ' + m.type + (m.parameters ? ' [' + m.parameters + ']' : '');
  if (m.official_sources && m.official_sources.length > 0) {
    citation += '\n  - 공식 출처: ' + m.official_sources.map(function(source) { return '[' + source.label + '](' + source.url + ')'; }).join(', ');
  }
  if (m.benchmarks && Object.keys(m.benchmarks).length > 0) {
    citation += '\n  - 공식 발표 점수: ' + Object.keys(m.benchmarks).map(function(key) {
      var scoreSource = (m.benchmark_sources || {})[key];
      var sourceSuffix = scoreSource ? ' — [공식](' + scoreSource + ')' : '';
      return key + ' ' + m.benchmarks[key] + '%' + sourceSuffix;
    }).join(', ');
  }
  navigator.clipboard.writeText(citation).then(function() {
    var el = document.getElementById('btn-copy-text');
    if (el) {
      el.textContent = '복사됨!';
      setTimeout(function() { el.textContent = '인용 복사'; }, 2000);
    }
  });
}

// -------------------------------------------------------------
// Comparison System (Side-by-Side Model Comparison)
// -------------------------------------------------------------

// Sync card buttons in place instead of re-rendering the whole timeline.
function syncCompareButtons() {
  document.querySelectorAll('.model-card').forEach(function(card) {
    var on = compareList.indexOf(card.getAttribute('data-id')) !== -1;
    if (card.classList.contains('is-compared') === on) return;
    card.classList.toggle('is-compared', on);
    var btn = card.querySelector('.btn-card-compare');
    if (btn) {
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on);
      btn.innerHTML = compareButtonInner(on);
    }
  });
}

// Toggle compare item from card or dock
function toggleCompareItem(id, event) {
  if (event) {
    event.stopPropagation();
  }
  var idx = compareList.indexOf(id);
  if (idx >= 0) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 2) {
      compareList.shift(); // keep max 2, roll over
    }
    compareList.push(id);
  }
  updateCompareDock();
  syncCompareButtons();
}

function addModelToCompare(id) {
  if (compareList.indexOf(id) === -1) {
    if (compareList.length >= 2) {
      compareList.shift();
    }
    compareList.push(id);
  }
  updateCompareDock();
  syncCompareButtons();
  closeModal();
  if (compareList.length === 2) {
    openCompareModal(compareList[0], compareList[1]);
  } else {
    openCompareModal(id);
  }
}

function clearCompareList() {
  compareList = [];
  updateCompareDock();
  syncCompareButtons();
}

function updateCompareDock() {
  var dock = document.getElementById('compare-dock');
  var itemsContainer = document.getElementById('compare-dock-items');
  var countEl = document.getElementById('compare-count');
  var btnCompare = document.getElementById('btn-dock-compare');

  if (!dock || !itemsContainer || !countEl || !btnCompare) return;

  if (compareList.length === 0) {
    dock.classList.add('hidden');
    return;
  }

  dock.classList.remove('hidden');
  countEl.textContent = compareList.length;

  var html = '';
  compareList.forEach(function(id) {
    var m = getModel(id);
    html += '<div class="compare-dock-pill">';
    html += '<span>' + esc(m ? m.name : id) + '</span>';
    html += '<button class="compare-dock-remove" onclick="toggleCompareItem(\'' + esc(id) + '\')" title="제거" aria-label="제거">' + icon('x') + '</button>';
    html += '</div>';
  });
  itemsContainer.innerHTML = html;

  btnCompare.disabled = false;
  btnCompare.textContent = compareList.length === 2 ? '상호 비교하기 (2/2)' : '상호 비교하기 (1선택됨)';
}

// Default pair: Claude Fable 5.1 (model-113) vs Qwen3.8-Flash-Next (model-110)
var DEFAULT_COMPARE_A = 'model-113';
var DEFAULT_COMPARE_B = 'model-110';

function defaultPartner(id) {
  return (id === DEFAULT_COMPARE_A) ? DEFAULT_COMPARE_B : DEFAULT_COMPARE_A;
}

// Open Side-by-Side Comparison Modal
function openCompareModal(idA, idB) {
  var modal = document.getElementById('compare-modal');
  var content = document.getElementById('compare-modal-content');
  if (!modal || !content) return;

  if (!idA && !idB) {
    if (compareList.length >= 2) {
      idA = compareList[0];
      idB = compareList[1];
    } else if (compareList.length === 1) {
      idA = compareList[0];
      idB = defaultPartner(idA);
    } else {
      idA = DEFAULT_COMPARE_A;
      idB = DEFAULT_COMPARE_B;
    }
  } else if (idA && !idB) {
    idB = defaultPartner(idA);
  }

  rememberFocus();
  activeCompareA = idA;
  activeCompareB = idB;

  renderCompareModalContent();
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  setNavActive('compare');
  var closeBtn = content.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus({ preventScroll: true });
}

function closeCompareModal() {
  var modal = document.getElementById('compare-modal');
  if (!modal || modal.classList.contains('hidden')) return;
  modal.classList.add('hidden');
  setNavActive('all');
  var modelModal = document.getElementById('model-modal');
  if (!modelModal || modelModal.classList.contains('hidden')) {
    document.body.classList.remove('modal-open');
    replaceHash('');
    restoreFocus();
  }
}

function handleCompareBackdropClick(e) {
  if (e.target.id === 'compare-modal') {
    closeCompareModal();
  }
}

function handleCompareSelectChange() {
  var selA = document.getElementById('compare-select-a');
  var selB = document.getElementById('compare-select-b');
  if (selA && selB) {
    activeCompareA = selA.value;
    activeCompareB = selB.value;
    renderCompareModalContent();
  }
}

var BENCH_META = {
  'SWE-bench Verified': { desc: '실제 GitHub 이슈 해결율', priority: 1 },
  'SWE-bench Multilingual': { desc: '다국어 소프트웨어 엔지니어링 이슈 해결율', priority: 2 },
  'SWE-bench Pro': { desc: '고난도 소프트웨어 엔지니어링 평가', priority: 3 },
  'Terminal-Bench 2.1': { desc: '터미널 및 CLI 에이전트 실행 평가', priority: 4 },
  'Terminal-Bench 2.0': { desc: '터미널 자율 실행 평가', priority: 5 },
  'Terminal-Bench Core 2.0': { desc: 'Terminal-Bench Core 공개 태스크 평가', priority: 6 },
  'DeepSWE': { desc: '장기 소프트웨어 엔지니어링 에이전트 평가', priority: 7 },
  'SWE-Marathon': { desc: '장기 소프트웨어 엔지니어링 에이전트 평가', priority: 8 },
  'NL2Repo': { desc: '자연어 요구사항의 저장소 구현 평가', priority: 9 },
  'FrontierSWE': { desc: '프런티어 소프트웨어 엔지니어링 평가', priority: 10 },
  'SWE-bench AgentLess': { desc: '에이전트 프레임워크 없이 측정한 SWE-Bench 변형', priority: 11 },
  'LiveCodeBench': { desc: '실시간 경쟁 프로그래밍 평가', priority: 12 },
  'LiveCodeBench v6': { desc: 'LiveCodeBench 버전 6 평가', priority: 13 },
  'HumanEval': { desc: '코드 구현 정확도', priority: 14 },
  'MBPP': { desc: '파이썬 프로그램 합성 평가', priority: 15 },
  'MMLU': { desc: '대학 수준 학술 지식 평가', priority: 16 },
  'MMLU-Pro': { desc: '고난도 학술 종합 추론', priority: 17 },
  'MMLU-Redux': { desc: '오염 보정 학술 지식 평가', priority: 18 },
  'GPQA Diamond': { desc: '대학원 전문가 과학 질의응답', priority: 19 },
  'SuperGPQA': { desc: '고난도 대학원 수준 지식 평가', priority: 20 },
  'HLE': { desc: 'Humanity\'s Last Exam', priority: 21 },
  'MATH-500': { desc: '수학 추론 평가', priority: 22 },
  'AIME 2025': { desc: 'AIME 2025 수학 경시 평가', priority: 23 },
  'AIME 2026': { desc: 'AIME 2026 수학 경시 평가', priority: 24 },
  'IMOAnswerBench': { desc: '국제수학올림피아드 답안 평가', priority: 25 },
  'IFEval': { desc: '정밀 지시사항 준수 평가', priority: 26 },
  'MMMU': { desc: '대학 수준 멀티모달 이해 평가', priority: 27 },
  'MMMU-Pro': { desc: '고난도 멀티모달 추론 평가', priority: 28 },
  'BrowseComp': { desc: '웹 검색·탐색 에이전트 평가', priority: 29 },
  'OSWorld-Verified': { desc: '컴퓨터 사용 에이전트 평가', priority: 30 },
  'Toolathlon Verified': { desc: '도구 사용 에이전트 평가', priority: 31 },
  'CyberGym': { desc: '사이버 보안 취약점 식별·패치 평가', priority: 32 },
  'Cyber CTF': { desc: '사이버 보안 문제 해결 평가', priority: 33 },
  'MCP-Atlas': { desc: 'MCP 도구 사용 평가', priority: 34 },
  'GDPval': { desc: '지식 노동 업무 수행 평가', priority: 35 },
  'τ²-Bench': { desc: '도구 사용 에이전트 평가', priority: 36 },
  'τ²-Telecom': { desc: '통신 도메인 도구 사용 평가', priority: 37 }
};

function compareSelectHtml(side, label) {
  var html = '<div class="side-' + side + '">';
  html += '<label class="compare-select-label" for="compare-select-' + side + '"><span class="side-dot"></span>' + label + '</label>';
  html += '<select id="compare-select-' + side + '" class="compare-select" onchange="handleCompareSelectChange()">' + COMPARE_OPTIONS_HTML + '</select>';
  html += '</div>';
  return html;
}

// Render the inside of the comparison modal
function renderCompareModalContent() {
  var content = document.getElementById('compare-modal-content');
  if (!content) return;

  var modA = getModel(activeCompareA) || TIMELINE_DATA[0];
  var modB = getModel(activeCompareB) || TIMELINE_DATA[1];
  var nameA = esc(modA.name);
  var nameB = esc(modB.name);

  var html = '';

  html += '<div class="modal-header">';
  html += '<div>';
  html += '<h2 class="modal-title" id="compare-title">파운데이션 모델 벤치마크 및 스펙 직접 비교</h2>';
  html += '<p class="modal-subtitle">두 모델을 선택하여 아키텍처 규격과 공개 벤치마크를 상호 비교합니다.</p>';
  html += '</div>';
  html += '<button class="modal-close" onclick="closeCompareModal()" aria-label="닫기">' + icon('x') + '</button>';
  html += '</div>';

  html += '<div class="compare-body">';

  html += '<div class="compare-select-header">';
  html += compareSelectHtml('a', '모델 A (기준)');
  html += '<div class="compare-vs-badge">VS</div>';
  html += compareSelectHtml('b', '모델 B (비교 대상)');
  html += '</div>';

  // 1. Basic Specs Comparison Table
  var companyA = companyHtml(modA);
  var companyB = companyHtml(modB);
  var specRows = [
    { label: '개발사 / 기관', a: '<span class="card-company">' + companyA + '</span>', b: '<span class="card-company">' + companyB + '</span>' },
    { label: '출시일', a: '<span class="mono">' + esc(modA.date) + '</span>', b: '<span class="mono">' + esc(modB.date) + '</span>' },
    { label: '모델 패밀리', a: esc(modA.family), b: esc(modB.family) },
    { label: '모델 유형 / 카테고리', a: typeWithCategoryHtml(modA), b: typeWithCategoryHtml(modB) },
    { label: '파라미터 규격', a: esc(modA.parameters || '비공개'), b: esc(modB.parameters || '비공개') },
    { label: '아키텍처', a: esc(modA.architecture || '트랜스포머'), b: esc(modB.architecture || '트랜스포머') },
    { label: '오픈 웨이트', a: modA.open_weights ? '예 (Open)' : '아니오 (Closed API)', b: modB.open_weights ? '예 (Open)' : '아니오 (Closed API)' },
    { label: '컨텍스트 윈도우', a: esc(modA.context || '표준'), b: esc(modB.context || '표준') },
    { label: '지원 모달리티', a: esc((modA.modalities && modA.modalities.length > 0) ? modA.modalities.join(', ') : 'Text'), b: esc((modB.modalities && modB.modalities.length > 0) ? modB.modalities.join(', ') : 'Text') }
  ];

  html += '<div class="compare-section">';
  html += '<div class="compare-section-head"><span class="section-title">' + icon('clipboard') + '기본 사양 및 아키텍처 비교</span></div>';
  html += '<div class="comparison-table-scroll">';
  html += '<table class="comparison-table">';
  html += '<thead><tr>';
  html += '<th style="width: 25%;">항목</th>';
  html += '<th class="side-a" style="width: 37.5%;">' + nameA + '</th>';
  html += '<th class="side-b" style="width: 37.5%;">' + nameB + '</th>';
  html += '</tr></thead>';
  html += '<tbody>';
  specRows.forEach(function(row) {
    html += '<tr><td class="row-label">' + row.label + '</td><td>' + row.a + '</td><td>' + row.b + '</td></tr>';
  });
  html += '</tbody></table></div></div>';

  // 2. Benchmarks Side-by-Side Comparison
  var presentKeys = Object.keys(modA.benchmarks || {});
  Object.keys(modB.benchmarks || {}).forEach(function(k) {
    if (presentKeys.indexOf(k) === -1) presentKeys.push(k);
  });
  presentKeys.sort(function(a, b) {
    var pA = (BENCH_META[a] && BENCH_META[a].priority) || 99;
    var pB = (BENCH_META[b] && BENCH_META[b].priority) || 99;
    return pA - pB;
  });

  var winsA = 0;
  var winsB = 0;
  var ties = 0;
  var totalCommon = 0;
  var missing = '<span class="score-missing">미측정 / 미공개</span>';
  var benchRowsHtml = '';

  presentKeys.forEach(function(key) {
    var desc = (BENCH_META[key] && BENCH_META[key].desc) || '공개 성능 평가 지표';
    var valA = (modA.benchmarks && modA.benchmarks[key] !== undefined) ? modA.benchmarks[key] : null;
    var valB = (modB.benchmarks && modB.benchmarks[key] !== undefined) ? modB.benchmarks[key] : null;

    var diffText = '';
    var cellAClass = '';
    var cellBClass = '';
    var badgeA = '';
    var badgeB = '';
    var ratioA = 50;
    var ratioB = 50;

    if (valA !== null && valB !== null) {
      totalCommon++;
      var diff = Math.round((valA - valB) * 10) / 10;
      var sum = valA + valB;
      if (sum > 0) {
        ratioA = Math.round((valA / sum) * 100);
        ratioB = 100 - ratioA;
      }

      if (diff > 0) {
        winsA++;
        cellAClass = ' score-win';
        badgeA = '<span class="score-win-badge">+' + diff + '% 우세</span>';
        diffText = '<span class="diff-win">' + nameA + ' +' + diff + '</span>';
      } else if (diff < 0) {
        winsB++;
        cellBClass = ' score-win';
        badgeB = '<span class="score-win-badge">+' + Math.abs(diff) + '% 우세</span>';
        diffText = '<span class="diff-win">' + nameB + ' +' + Math.abs(diff) + '</span>';
      } else {
        ties++;
        diffText = '<span class="diff-tie">동률 (0.0)</span>';
      }
    } else if (valA !== null) {
      diffText = '<span class="score-missing">' + nameB + ' 미측정 / 미공개</span>';
      ratioA = 100;
      ratioB = 0;
    } else {
      diffText = '<span class="score-missing">' + nameA + ' 미측정 / 미공개</span>';
      ratioA = 0;
      ratioB = 100;
    }

    benchRowsHtml += '<tr>';
    benchRowsHtml += '<td>';
    benchRowsHtml += '<div class="bench-name">' + esc(key) + '</div>';
    benchRowsHtml += '<div class="bench-desc">' + esc(desc) + '</div>';
    benchRowsHtml += '<div class="benchmark-bar-container" title="' + nameA + ' (' + ratioA + '%) vs ' + nameB + ' (' + ratioB + '%)">';
    benchRowsHtml += '<div class="benchmark-bar-a" style="width: ' + ratioA + '%;"></div>';
    benchRowsHtml += '<div class="benchmark-bar-b" style="width: ' + ratioB + '%;"></div>';
    benchRowsHtml += '</div>';
    benchRowsHtml += '</td>';
    benchRowsHtml += '<td class="score-cell' + cellAClass + '">' + (valA !== null ? esc(valA) + '%' : missing) + ' ' + badgeA + '</td>';
    benchRowsHtml += '<td class="score-cell' + cellBClass + '">' + (valB !== null ? esc(valB) + '%' : missing) + ' ' + badgeB + '</td>';
    benchRowsHtml += '<td style="font-size: 12px;">' + diffText + '</td>';
    benchRowsHtml += '</tr>';
  });

  html += '<div class="compare-section">';
  html += '<div class="compare-section-head">';
  html += '<div>';
  html += '<span class="section-title">' + icon('chart') + '공개 벤치마크 점수 상호 비교</span>';
  html += '<div class="section-caption">수치가 높을수록 우수한 성능을 나타냅니다. (공통 공개 측정 ' + totalCommon + '개 지표 기준)</div>';
  html += '</div>';
  html += '<div class="scoreboard">';
  html += '<span class="side-a">' + nameA + ' <strong>' + winsA + '승</strong></span>';
  html += '<span class="scoreboard-sep">:</span>';
  html += '<span class="side-b">' + nameB + ' <strong>' + winsB + '승</strong></span>';
  if (ties > 0) {
    html += '<span class="scoreboard-ties">(' + ties + '무)</span>';
  }
  html += '</div>';
  html += '</div>';

  html += '<div class="comparison-table-scroll">';
  html += '<table class="comparison-table">';
  html += '<thead><tr>';
  html += '<th style="width: 32%;">벤치마크 평가 지표</th>';
  html += '<th class="side-a" style="width: 25%;">' + nameA + '</th>';
  html += '<th class="side-b" style="width: 25%;">' + nameB + '</th>';
  html += '<th style="width: 18%;">상대 격차</th>';
  html += '</tr></thead>';
  html += '<tbody>' + benchRowsHtml + '</tbody>';
  html += '</table></div></div>';

  html += '</div>'; // End body

  html += '<div class="modal-footer">';
  html += '<button class="btn-secondary" onclick="copyComparisonMarkdown(\'' + esc(modA.id) + '\', \'' + esc(modB.id) + '\')">' + icon('copy') + '<span id="btn-copy-compare-text">비교 결과 마크다운 복사</span></button>';
  html += '<button class="btn-primary" onclick="closeCompareModal()">닫기</button>';
  html += '</div>';

  content.setAttribute('aria-labelledby', 'compare-title');
  content.innerHTML = html;
  document.getElementById('compare-select-a').value = modA.id;
  document.getElementById('compare-select-b').value = modB.id;
  replaceHash('compare=' + modA.id + ',' + modB.id);
}

// Copy Comparison Markdown to Clipboard
function copyComparisonMarkdown(idA, idB) {
  var modA = getModel(idA);
  var modB = getModel(idB);
  if (!modA || !modB) return;

  var md = '### ' + modA.name + ' vs ' + modB.name + ' 비교 요약 (2026 파운데이션 모델)\n\n';
  md += '| 항목 | ' + modA.name + ' | ' + modB.name + ' |\n';
  md += '|---|---|---|\n';
  md += '| 제조사 / 출시일 | ' + modA.company + ' (' + modA.date + ') | ' + modB.company + ' (' + modB.date + ') |\n';
  md += '| 파라미터 / 아키텍처 | ' + (modA.parameters || '-') + ' / ' + (modA.architecture || '-') + ' | ' + (modB.parameters || '-') + ' / ' + (modB.architecture || '-') + ' |\n';
  md += '| 오픈 웨이트 여부 | ' + (modA.open_weights ? 'Open' : 'Closed') + ' | ' + (modB.open_weights ? 'Open' : 'Closed') + ' |\n';
  md += '| 공식 출처 | ' + ((modA.official_sources && modA.official_sources.length) ? modA.official_sources.map(function(source) { return '[' + source.label + '](' + source.url + ')'; }).join(', ') : '-') + ' | ' + ((modB.official_sources && modB.official_sources.length) ? modB.official_sources.map(function(source) { return '[' + source.label + '](' + source.url + ')'; }).join(', ') : '-') + ' |\n';

  if (modA.benchmarks && modB.benchmarks) {
    md += '\n#### 주요 벤치마크 점수 비교\n\n';
    md += '| 벤치마크 | ' + modA.name + ' | ' + modB.name + ' | 격차 |\n';
    md += '|---|---|---|---|\n';
    var allKeys = Array.from(new Set(Object.keys(modA.benchmarks).concat(Object.keys(modB.benchmarks))));
    allKeys.forEach(function(k) {
      var sA = modA.benchmarks[k] !== undefined ? modA.benchmarks[k] : '-';
      var sB = modB.benchmarks[k] !== undefined ? modB.benchmarks[k] : '-';
      var diff = (typeof sA === 'number' && typeof sB === 'number') ? (Math.round((sA - sB) * 10) / 10) : '-';
      var diffStr = diff > 0 ? ('+' + diff + ' (' + modA.name + ' 우세)') : diff < 0 ? ('+' + Math.abs(diff) + ' (' + modB.name + ' 우세)') : '동률';
      var sourceA = (modA.benchmark_sources && modA.benchmark_sources[k]) ? ' ([공식](' + modA.benchmark_sources[k] + '))' : '';
      var sourceB = (modB.benchmark_sources && modB.benchmark_sources[k]) ? ' ([공식](' + modB.benchmark_sources[k] + '))' : '';
      md += '| ' + k + ' | ' + sA + sourceA + ' | ' + sB + sourceB + ' | ' + diffStr + ' |\n';
    });
  }

  navigator.clipboard.writeText(md).then(function() {
    var el = document.getElementById('btn-copy-compare-text');
    if (el) {
      el.textContent = '마크다운 복사 완료!';
      setTimeout(function() { el.textContent = '비교 결과 마크다운 복사'; }, 2000);
    }
  });
}

// Global Key Listeners
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
    closeCompareModal();
  }
  var tag = document.activeElement ? document.activeElement.tagName : '';
  if (e.key === '/' && tag !== 'INPUT' && tag !== 'SELECT' && tag !== 'TEXTAREA') {
    e.preventDefault();
    var input = document.getElementById('search-input');
    if (input) input.focus();
  }
});
