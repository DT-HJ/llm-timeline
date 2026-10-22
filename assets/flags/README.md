# Flags

`COMPANY_META[*].country` 코드별 국기 SVG. 출처: [flag-icons](https://github.com/lipis/flag-icons) v7.2.3 `flags/4x3/` (MIT License, © 2013 Panayiotis Lipiridis).

새 국가 코드가 카탈로그에 들어오면 같은 경로에서 `<소문자 코드>.svg`를 받아 여기에 추가하고 `app.js`의 `FLAG_CODES`에 코드를 넣는다. 목록에 없는 코드(예: `미공개`)는 지구본 아이콘으로 표시된다.

```bash
curl -sf -o assets/flags/xx.svg https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/xx.svg
```
