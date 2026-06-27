---
name: vibe-setup
description: |
  Install or repair the vibe workflow harness in a repo. Read-only audit
  (detect) then write/merge bootstrap (apply) — never clobbers existing content.
  Merges the AGENTS.md instructions block, offers adapter symlinks, scaffolds
  .agents/flow + .spec, preflights required plugins. Trigger on: set up vibe,
  bootstrap the harness, repair the workflow, install, onboard a repo, or user
  says setup.
user-invocable: true
argument-hint: ""
allowed-tools: Read, Edit, Write, Bash
compatibility: Requires bash + jq. macOS and Linux.
metadata:
  author: lennarddib
  version: "1.0"
---

# vibe-setup — bootstrap & repair

Brings a fresh (or drifted) repo under the harness. Two states:
`setup.detect` (read-only audit) → `setup.apply` (write/merge) → `idle`.

## 1. Detect (read-only, caveman lite)

`bash .agents/flow/scripts/set-state.sh setup.detect`. Audit only — write nothing.
Report present vs missing:

- `.agents/flow/state-machine.json`, `state.example.json`, and the scripts
  (`set-state.sh`, `validate-state.sh`, `detect-context.sh`, `regen-active-rules.sh`,
  `orders.sh`, `check-skills.sh`).
- `.agents/skills/vibe-*` shims and the bundled `spec` skill.
- **`AGENTS.md` health** (per [agent-instructions](../../../.spec/features/agent-instructions/tech.md)):
  - `AGENTS.md`: missing / present-no-markers / present-managed-ok / present-managed-stale (differs from template).
  - `vibe:instructions` block: absent / current / stale.
  - `vibe:constitution` block (legacy): absent / present-needs-migration.
  - `vibe:active-rules` block: absent / empty / populated.
- **Adapter rows** — one per entry in `reference/adapters.json`
  (`CLAUDE.md`, `WARP.md`, …): absent / symlink-ok / symlink-wrong-target /
  real-file / broken-link.
- `.spec/lessons.md` and the root specs.

**Plugin preflight** — `bash .agents/flow/scripts/check-skills.sh <state>` lists
which delegated skills are verifiable vs assumed-installed. Warn + list any that
can't be confirmed; never hard-fail. Covers `spec` (bundled), `superpowers:*`,
feature-dev subagents (`code-explorer`, `code-architect`, `code-reviewer`), and
`caveman` (optional → `check-skills.sh caveman <level>` prints the 1-line fallback
when absent).

## 2. Apply (write/merge, caveman lite)

`bash .agents/flow/scripts/set-state.sh setup.apply`. Bootstrap without
clobbering:

1. **Instructions block.** Run `bash .agents/skills/vibe-setup/scripts/merge-agents.sh`
   to merge the canonical `AGENTS.md` template (in `reference/templates/AGENTS.md`)
   into the repo-root `AGENTS.md` **inside the `vibe:instructions` markers only**.
   Create it if missing; migrate a legacy `vibe:constitution` block; wrap an
   unmarked equivalent guide; never touch content outside the markers. (Supersedes
   the old constitution-block merge — see [agent-instructions](../../../.spec/features/agent-instructions/product.md).)
2. **Adapter symlinks (user-driven).** Read `reference/adapters.json` and offer the
   adapters the user wants (default: `CLAUDE.md`, `WARP.md`). For each chosen one,
   `bash .agents/skills/vibe-setup/scripts/merge-agents.sh link <adapter>`. It skips
   a correct symlink, relinks a wrong target, and **refuses to replace a real file**
   — show a diff and confirm before clobbering. Never create a symlink the user
   didn't request.
3. **Flow scaffold.** Ensure `.agents/flow/` files exist. Seed the cursor only if
   missing: `cp .agents/flow/state.example.json .agents/flow/state.json`. Add
   `.agents/flow/state.json` to `.gitignore`.
4. **Spec scaffold.** If `.spec/` is bare, run `bash .agents/skills/spec/scripts/setup.sh`.
   Ensure `.spec/lessons.md` exists with the `Tags:`/`Pinned-by:` format.
5. **Active rules.** Run `bash .agents/flow/scripts/regen-active-rules.sh` to seed
   the managed `vibe:active-rules` block (it is symlink-aware and dedupes targets by
   resolved path, so the `CLAUDE.md` → `AGENTS.md` symlink survives).

Finish at `idle`. Report what was created, merged, skipped, and any missing
plugins.

## Template & manifest

The canonical instruction-file content lives in
[`reference/templates/AGENTS.md`](reference/templates/AGENTS.md) (vibe-owned body
wrapped in `vibe:instructions` markers, with an empty `vibe:active-rules` block
below). The adapter catalogue lives in
[`reference/adapters.json`](reference/adapters.json). Both are **data** — extend
the manifest to add runtimes without editing this skill's prose.

## Rules

- Never overwrite user content; merge inside markers, diff + ask outside.
- Missing plugin = warn and degrade, never hard-fail.
- Caveman lite throughout.

## Orders (D12)

Machine-extractable per-state orders. The `UserPromptSubmit` inject hook resolves
the current `<flow>.<phase>`, follows its `skill` link, and emits the matching
block verbatim via `.agents/flow/scripts/orders.sh`. `<feature>` is the only
interpolation; keep each block byte-stable.

<!-- vibe:orders:setup.detect -->
skill=vibe-setup · READ-ONLY audit of repo + harness · report what is missing/present (AGENTS.md health, adapter rows from adapters.json, .agents/flow scripts, vibe-* shims, bundled spec) · preflight required plugins · do NOT write yet · caveman=lite · next: setup.apply
<!-- /vibe:orders -->

<!-- vibe:orders:setup.apply -->
skill=vibe-setup · WRITE/MERGE bootstrap: merge-agents.sh AGENTS.md instructions block, .agents/flow scaffold, baseline .spec/**, optional adapter symlinks (user-driven) · NEVER clobber existing content (diff + ask on divergence) · regen-active-rules.sh after merge · caveman=lite · next: idle
<!-- /vibe:orders -->
