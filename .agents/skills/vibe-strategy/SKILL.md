---
name: vibe-strategy
description: |
  Set or refocus project direction: brainstorm, then write the root .spec docs
  (product/tech/design/plan). The strategy flow — no source code.
  Trigger on: project direction, strategy, roadmap, "what should we build",
  refocus, rewrite product/tech/design/plan, or user says strategy.
user-invocable: true
argument-hint: "[topic]"
allowed-tools: Read, Edit, Write, Bash(bash .agents/flow/scripts/set-state.sh:*), Bash(bash .agents/flow/scripts/detect-context.sh:*), Bash(bash .agents/flow/scripts/validate-state.sh), Bash(bash .agents/skills/spec/scripts/validate.sh)
compatibility: Requires bash + jq. macOS and Linux.
metadata:
  author: lennarddib
  version: "1.0"
---

# vibe-strategy — direction loop

The strategy flow shapes project direction. It reads lessons, brainstorms, and
writes the **root** `.spec/` docs. It never writes source code.

States: `strategy.brainstorm → strategy.spec → (strategy.compound | idle)`.

## Procedure

1. **Locate.** Read `.agents/flow/state.json`. If not already in a `strategy.*`
   state, transition in: `bash .agents/flow/scripts/set-state.sh strategy.brainstorm`.
2. **Read lessons first.** On entering `strategy.brainstorm`, read
   `.spec/lessons.md` so past mistakes shape direction (retrieval, not just
   recording).
3. **Brainstorm.** Delegate to `superpowers:brainstorming` for the human
   dialogue. Scratch only — no spec writes yet. When direction is clear, suggest:
   "direction looks set — move to strategy.spec?" and transition on confirmation.
4. **Spec.** In `strategy.spec`, delegate to the `spec` skill. Write **only** the
   root docs: `.spec/product.md`, `.spec/tech.md`, `.spec/design.md`,
   `.spec/plan.md`. Inject those exact paths. Do not touch `lessons.md` or source.
   Validate with `bash .agents/skills/spec/scripts/validate.sh`.
5. **Compound (conditional).** Most strategy runs surface no durable lesson. Only
   if one did, suggest `strategy.compound` (delegates to `vibe-compound`); else go
   to `idle`. Trust the agent to pick — this is "trust the agent" applied to
   control flow.

## Rules

- Caveman **lite** throughout (full sentences, no filler).
- Transitions are agent-*suggested*, not automatic: name the next state and
  confirm before calling `set-state.sh`.
- Keep receipts short: state, files written, validation result, next transition.
- Security warnings and irreversible actions stay in normal prose.

## Orders (D12)

Machine-extractable per-state orders, emitted verbatim by the inject hook via
`.agents/flow/scripts/orders.sh`. Keep each block byte-stable.

<!-- vibe:orders:strategy.brainstorm -->
skill=vibe-strategy · delegate superpowers:brainstorming · READ .spec/lessons.md first · scratch only, no source, no spec writes yet · caveman=lite · next: strategy.spec
<!-- /vibe:orders -->

<!-- vibe:orders:strategy.spec -->
skill=vibe-strategy · delegate spec · WRITE root .spec/{product,tech,design,plan}.md ONLY · no source, no lessons.md · validate after · caveman=lite · next: strategy.compound (if a durable lesson surfaced) | idle
<!-- /vibe:orders -->
