---
name: vibe-verify
description: |
  Gather evidence before calling work done: run tests/build, request review,
  debug failures. Used by feature.verify and quick.verify. Writes no specs —
  produces evidence and routing. Trigger on: verify, prove it works, check the
  change, evidence before done, pre-ship review, or user says verify.
user-invocable: true
argument-hint: ""
allowed-tools: Read, Bash, Edit, Write
compatibility: Requires bash + jq. macOS and Linux.
metadata:
  author: lennarddib
  version: "1.0"
---

# vibe-verify — evidence before completion

Verification is first-class here (the cheapest high-value steal from GSD: real
evidence, dedicated review, fix-plans before "done"). Caveman **full**.

Serves two states:

- `feature.verify` → `feature.compound` (pass) | `feature.impl` (targeted fix) |
  `feature.plan` (major drift)
- `quick.verify` → `idle`

## Procedure

1. **Locate.** Read `.agents/flow/state.json`; confirm you are in a `*.verify`
   state (else the caller transitions there first).
2. **Verify.** Delegate to `superpowers:verification-before-completion`. Run the
   real tests/build. For a feature, tie each result back to a plan **unit ID**.
3. **Review.** Delegate to `superpowers:requesting-code-review` and the
   `code-reviewer` subagent (confidence-filtered). Capture findings.
4. **On failure.** Delegate to `superpowers:systematic-debugging`; produce a
   fix-plan before any retry. Do not mark anything done on a failing check.
5. **Report + route.** Summarize evidence (commands run, output, review verdict).
   Then suggest the routing target. **Human gate** before shipping a feature.

## Rules

- Evidence is observed behaviour, not assertion. Show the command and its output.
- No spec writes from verify.
- Caveman full; security/irreversible actions in normal prose.

## Orders (D12)

Machine-extractable per-state orders, emitted verbatim by the inject hook via
`.agents/flow/scripts/orders.sh`. Keep each block byte-stable.

<!-- vibe:orders:feature.verify -->
skill=vibe-verify · delegate verification-before-completion + requesting-code-review + code-reviewer (systematic-debugging on fail) · gather EVIDENCE per plan unit ID · no spec writes · caveman=full · HUMAN GATE before ship · next: feature.compound (pass) | feature.impl (targeted fix) | feature.plan (major drift)
<!-- /vibe:orders -->

<!-- vibe:orders:quick.verify -->
skill=vibe-verify · delegate verification-before-completion + code-reviewer · gather EVIDENCE the fix works and breaks nothing · no spec writes · caveman=full · next: idle
<!-- /vibe:orders -->
