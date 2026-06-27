# AGENTS.md — vibe Engineering Guide

<!-- vibe:instructions:start -->
<!-- Managed by vibe-setup (merge-agents.sh). Edits inside these markers are
     replaced on the next setup.apply / install. Content outside the markers
     (above this line, or inside vibe:active-rules) is user-owned. -->

**Repository:** vibe — self-hosting bash/Markdown/JSON workflow harness (in active build).
**Canonical:** this file. `CLAUDE.md` symlinks here.

## Prime Directive

**Spec first. Always.**

1. **ASK** — clarify requirements; no assumptions.
2. **PLAN** — break down, read `.spec/`, present approach.
3. **CONFIRM** — get explicit approval before implementation.
4. **EXECUTE** — implement step-by-step; verify before claiming done.

- MUST read `.spec/` before writing code.
- MUST NOT write code without an approved plan or spec.
- MUST NOT invent filenames or state files the repo does not have (see **Dogfood status**).

The **vibe flow** (state machine, hooks, per-turn routing) is what this repo is building.
It is **not** a prerequisite for doing work here. Follow the **Working model** below unless
your task is explicitly to implement flow machinery.

## Dogfood status

Know what exists before you read or create files.

| Path | Status |
|---|---|
| `.spec/` | **Live** — primary source of truth; read every session |
| `.agents/skills/spec/` | **Live** — spec skill + `validate.sh` |
| `AGENTS.md` / `CLAUDE.md` | **Live** — this guide; `CLAUDE.md` → `AGENTS.md` |
| `.agents/flow/state-machine.json` | **Present** — static flow definition (data to edit when building flow) |
| `.agents/flow/scripts/` | **Present** — `set-state.sh`, `detect-context.sh`, etc. |
| `.agents/flow/state.example.json` | **Present** — template for the cursor file |
| `.agents/flow/state.json` | **Often absent** — gitignored runtime cursor; missing is normal |
| `.agents/skills/vibe-*` | **Present** — skill shims; bodies may be ahead of wiring |
| `.claude/` hooks, plugin, `install.sh` | **Present** — Claude Code adapter (plugin + three hooks + installer) |
| **`flow.json`** | **Does not exist** — never expect, read, or create this file |
| Per-turn inject / D12 orders-in-skills | **Live** — orders sourced from linked `vibe-*` skill via `orders.sh` |

When in doubt, read [.spec/plan.md](.spec/plan.md) for spec-vs-repo gaps.

## Session start

Sessions are ephemeral; `.spec/` is the memory.

1. Read [.spec/lessons.md](.spec/lessons.md) and [.spec/plan.md](.spec/plan.md).
2. Identify the **feature** you are building (table in `plan.md`) and load its specs:
   `.spec/features/<name>/{product,tech,plan}.md`.
3. Route by intent (table below). Do **not** block on flow state.
4. **Optional** — if `.agents/flow/state.json` exists and you are explicitly continuing
   a flow session, read `{flow, phase, feature}` and resume the linked `vibe-*` skill.
   If the file is missing, treat as `idle` and proceed with specs.

## Working model (default)

Use this for all implementation work until the flow harness is fully wired.

```
ASK → read .spec/ → PLAN (cite unit IDs) → CONFIRM → IMPL → verify → compound
```

| Step | Do |
|---|---|
| Scope | Load feature `product.md` **Scope** table — respect owns / does-not-own |
| Plan | Follow unit IDs in feature `plan.md` (`SF*`, `VF*`, `AI*`, `U*`, …) |
| Impl | Test-first where the plan says so; cite unit ID in commits |
| Done | Run `bash .agents/skills/spec/scripts/validate.sh`; show evidence |

**Human gates:** approve plan units before large impl; approve verify evidence before "done".

Root [.spec/plan.md](.spec/plan.md) owns milestones and cross-feature order.
Feature `plan.md` owns unit tables — do not duplicate units in chat or commits prose.

## Task routing

Route by **intent**, not by flow cursor.

| Intent | Load first | Write surface |
|---|---|---|
| Understand the project | `.spec/product.md`, `.spec/tech.md` | — |
| Build a named feature | `.spec/features/<name>/` + root `plan.md` | per feature Scope |
| Small bounded fix | relevant feature spec or `.spec/quick/<slug>.md` | minimal |
| Spec / plan work | `.agents/skills/spec/SKILL.md` | `.spec/**` per write rules |
| Build flow machinery | `.spec/features/vibe-flow/` | `.agents/flow/`, `vibe-*` skills |
| Build adapters / hooks | `.spec/features/platform-adapters/` | `.claude/`, `install.sh` |
| Build AGENTS.md provisioning | `.spec/features/agent-instructions/` | templates, merge scripts |
| Set up or repair harness | `.agents/skills/vibe-setup/SKILL.md` | `.agents/**`, managed blocks |

`vibe-*` skills are **helpers** for their domains. Read the matching feature spec first;
the skill does not override `.spec/`.

## Target harness

This is the **end-state** the repo is building. Reference when implementing
[vibe-flow](.spec/features/vibe-flow/product.md) or [platform-adapters](.spec/features/platform-adapters/product.md) — not for ordinary feature work.

- **Cursor:** `.agents/flow/state.json` — `{flow, phase, feature, updated}`; create from
  `state.example.json` only when testing transitions.
- **Machine:** `.agents/flow/state-machine.json` — static states, skills, legal `next`.
- **Transitions:** only via `bash .agents/flow/scripts/set-state.sh <flow.phase> [feature]`;
  never edit `state.json` by hand.
- **Routing:** per-turn orders live in `vibe-*` skill bodies (D12, `## Orders`); the machine
  holds the `skill` link, not prose. `orders.sh` resolves the current state's orders.
- **Adapters:** hooks read `.agents/flow`, not `.claude/state.json`.

`.claude/` is a runtime adapter — not canonical.

## Write invariants

Policy lives in `detect-context.sh decide` (defaults to `idle` when `state.json` is absent):

1. `.spec/lessons.md` — writable only in `*.compound` (or when explicitly recording lessons with user approval).
2. Root `.spec/{product,tech,design,plan}.md` — only in `strategy.spec`, `feature.compound`, or `setup.apply`.
3. `.agents/flow/state.json` — only via `set-state.sh`.

Everything else is allow/warn. Check before writing:

```bash
bash .agents/flow/scripts/detect-context.sh decide <path>
```

## Repo layout

```text
.spec/                 # durable memory (product/tech/design/plan/lessons + features/)
.agents/skills/spec/   # bundled spec framework
.agents/skills/vibe-*  # workflow shims (orchestration)
.agents/flow/          # state machine + scripts
AGENTS.md              # this file (canonical)
CLAUDE.md              # symlink → AGENTS.md
```

## Commands

```bash
# Spec validation — run before claiming done
bash .agents/skills/spec/scripts/validate.sh

# Write policy (works without state.json)
bash .agents/flow/scripts/detect-context.sh
bash .agents/flow/scripts/detect-context.sh decide <path>

# Flow tooling — only when explicitly testing or building flow
cp .agents/flow/state.example.json .agents/flow/state.json   # seed cursor
bash .agents/flow/scripts/set-state.sh <flow.phase> [feature]
bash .agents/flow/scripts/validate-state.sh
```

## Conventions

- Bash MUST use `set -euo pipefail`; MUST be shellcheck-clean.
- Scripts MUST be deterministic, idempotent, graceful-degrade (warn, never hard-fail).
- State machine is **data** — edit `state-machine.json`, not prose duplicates.
- Paths and commands stay byte-exact.
- Prefer editing existing files. Do not create files without necessity.
- Do not add comments that narrate the obvious.

## Boundaries

**Always**
- Read `.spec/` before code.
- Run `validate.sh` before claiming work is done.
- Cite plan unit IDs in tests and commits during impl.
- Respect feature **Scope** tables — do not implement another feature's units.

**Ask first**
- Root spec edits outside strategy / compound / setup.
- Scope escalation (small fix → named feature).
- State transitions and feature naming (when using flow tooling).
- Adding dependencies or deleting files.

**Never**
- Expect or create `flow.json`.
- Treat missing `state.json` as an error for normal work.
- Edit `state.json` by hand.
- Edit inside `<!-- vibe:active-rules:* -->` markers.
- Clobber user-owned content outside managed blocks.
- Treat `.claude/` as canonical.

## Commits

Conventional Commits. Imperative, lowercase, ≤50-char subject, no trailing period.

```text
feat(flow): add inject hook wiring
fix(spec): correct feature frontmatter check
docs(agents): rewrite instruction set
```

## Spec layout

Root: `.spec/{product,tech,design,plan,lessons}.md`.
Features: `.spec/features/<feature>/{product,tech}.md` required; `design.md`,
`plan.md`, `research.md` optional.
<!-- vibe:instructions:end -->

<!-- vibe:active-rules:start -->
<!-- Generated from .spec/lessons.md by regen-active-rules.sh. Do not edit by hand;
     edit lessons.md and re-run during compound. Top 5, pinned first. -->

### Active Rules

_No lessons recorded yet._
<!-- vibe:active-rules:end -->
