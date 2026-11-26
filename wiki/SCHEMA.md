# Wiki Schema

<!--
Repository-specific wiki configuration only. Shared policy lives in the
project-wiki skill package (core/protocol.md in the skill package, not in this
repository). Never put mutable project facts (test counts, implementation
status, versions) here. Edit only on policy change with user approval.
If the installed project-wiki skill reports a template schema older than
schema-version below, update the skill (git pull + install.sh) before editing
this wiki; never rebuild or downgrade it.
-->

schema-version: 0.5.0
wiki-language: en

## Budgets

Token estimates use the shared heuristic (ASCII/4 + non-ASCII/1), not a model tokenizer count.

<!-- wiki:budgets:start -->
current_tokens: 2000
bootstrap_tokens: 6000
<!-- wiki:budgets:end -->

## Hosts

Leave empty for single-host repositories (`wiki/current.md`). For multi-host
repositories, map `<host-name>: <hostname -s>[, ...]` (`wiki/current/<host>.md`).

<!-- wiki:hosts:start -->
<!-- wiki:hosts:end -->

## Protected Paths

Never read, link as evidence, or record facts learned by direct read (one path per line).

<!-- wiki:protected:start -->
<!-- wiki:protected:end -->

## Local Overrides

<!-- Optional repository-specific stricter rules or custom categories. Stricter local rules win over core/protocol.md. -->
