# Project Wiki

## Start Here

- [Overview](overview.md) — project purpose, inclusion scope, audit constraints, high-level architecture.
- [Current State](current.md) — current catalog state, unimplemented items, risks, next work.

## Components

- [Catalog Pipeline](components/catalog-pipeline.md) — `models_catalog.json` SSOT, `build_data.py` generation, `validate_data.py` validation, audit policy and the excluded ledger.
- [Web Dashboard](components/web-dashboard.md) — `index.html`/`app.js`/`style.css` timeline UI structure, filters, theming, and data binding.

## Runbooks

- [Audit Update](runbooks/audit-update.md) — recurring procedure: research new models → add to the catalog → regenerate and validate → commit and push.
