---
name: vibe-amend
description: |
  Correct the scope of the work in flight without leaving the current state. A
  modifier, not a flow: edits the target state's spec surface, then returns there.
  Trigger on: amend scope, adjust the plan, revise the spec mid-flight, scope
  changed, that's not quite right, or user says amend.
user-invocable: true
argument-hint: "[what to change]"
allowed-tools: Read, Edit, Write, Bash
compatibility: Requires bash + jq. macOS and Linux.
metadata:
  author: lennarddib
  version: "1.0"
---

# vibe-amend — scope correction (modifier)

`amend` is a **modifier**, not a flow. It does not change the cursor. It makes a
targeted scope edit from whatever state you are in, then you continue in that
same state. Caveman **lite**.

## Procedure

1. **Locate.** Read `.agents/flow/state.json` to learn the current state. Do
   **not** call `set-state.sh amend` — it is not a stored state and the writer
   rejects it.
2. **Carry the current state's write rules.** Amend edits only what the current
   state may write — it does **not** widen the write surface. Read the state's
   `writes` from `.agents/flow/state-machine.json` (or
   `bash .agents/flow/scripts/detect-context.sh`) and stay inside it:
   - in `feature.design` → amend `.spec/features/<f>/{product,tech}.md`
   - in `feature.plan` → amend `plan.md` (keep stable unit IDs)
   - in `strategy.spec` → amend root specs
   - elsewhere → the corresponding allowed surface only
3. **Edit.** Delegate to `spec` (and `superpowers:receiving-code-review` when the
   amend responds to feedback). Inject the exact path.
4. **Return.** Confirm the edit and note that the cursor is unchanged — continue
   the originating state's work.

## Rules

- Never widen the write surface beyond the current state's rules.
- Preserve stable plan unit IDs when amending a plan.
- Caveman lite; security/irreversible actions normal prose.

## Orders (D12)

`amend` is a modifier: the cursor never becomes `amend` (`set-state.sh` rejects
it), so the inject hook never resolves orders for it — it always uses the **stored
cursor state**. This block is reference-only for parity with the other shims.

<!-- vibe:orders:amend -->
MODIFIER=amend · edit scope for the CURRENT state, then RETURN to it · carry the target state's write rules (do NOT widen them) · caveman=lite · next: <state you came from>
<!-- /vibe:orders -->
