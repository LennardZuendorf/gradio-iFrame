#!/usr/bin/env bash
# merge-agents.sh — provision a repo's AGENTS.md from the vibe template, merging
# only inside the managed `vibe:instructions` markers, and (optionally) create
# adapter symlinks (CLAUDE.md, WARP.md, …) that point at AGENTS.md.
#
#   merge-agents.sh [TARGET_ROOT]          # merge template -> TARGET_ROOT/AGENTS.md
#   merge-agents.sh link <adapter> [ROOT]  # symlink <adapter> -> AGENTS.md (relative)
#
# Merge cases (deterministic, idempotent):
#   1. No AGENTS.md            -> copy the template.
#   2. vibe:instructions block -> replace content between the markers.
#   3. vibe:constitution block -> migrate: replace the legacy region with the
#                                 vibe:instructions region (one-time upgrade).
#   4. No markers but body == template body (normalized) -> wrap (copy template).
#   5. No markers, divergent   -> append the managed block (WARN; never clobber).
# Content OUTSIDE the markers (user preamble, the vibe:active-rules block) is never
# touched. Re-running with an up-to-date template is a no-op (byte compare).
#
# Graceful: missing template -> exit 1 with a clear message (this is a setup
# prerequisite, not a session-time degrade). A real-file adapter is reported, not
# clobbered.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# Template resolves relative to this script (vendored) or the global install.
TEMPLATE="$SCRIPT_DIR/../reference/templates/AGENTS.md"
if [[ ! -f "$TEMPLATE" && -f "$HOME/.agents/skills/vibe-setup/reference/templates/AGENTS.md" ]]; then
  TEMPLATE="$HOME/.agents/skills/vibe-setup/reference/templates/AGENTS.md"
fi

I_START="<!-- vibe:instructions:start -->"
I_END="<!-- vibe:instructions:end -->"
C_START="<!-- vibe:constitution:start -->"
C_END="<!-- vibe:constitution:end -->"

warn() { echo "merge-agents: WARN — $1" >&2; }
note() { echo "merge-agents: $1"; }
die()  { echo "merge-agents: ERROR — $1" >&2; exit 1; }

# Print the inclusive region between START and END markers in FILE.
extract_region() {
  local file="$1" start="$2" end="$3"
  awk -v s="$start" -v e="$end" '
    $0 == s { grab = 1 }
    grab { print }
    $0 == e && grab { exit }
  ' "$file"
}

# Replace the inclusive START..END region in FILE with the contents of BLOCKFILE.
replace_region() {
  local file="$1" start="$2" end="$3" blockfile="$4" out="$5"
  awk -v s="$start" -v e="$end" -v bf="$blockfile" '
    $0 == s {
      while ((getline line < bf) > 0) print line
      close(bf)
      skip = 1
      next
    }
    $0 == e && skip { skip = 0; next }
    !skip { print }
  ' "$file" > "$out"
}

# Normalize for the wrap comparison: strip CR and trailing spaces, drop leading/
# trailing blank lines, squeeze internal blank runs to one.
normalize() {
  sed 's/\r$//; s/[[:space:]]*$//' "$1" | awk '
    { lines[NR] = $0 }
    END {
      start = 1; end = NR
      while (start <= end && lines[start] == "") start++
      while (end >= start && lines[end] == "") end--
      blank = 0
      for (i = start; i <= end; i++) {
        if (lines[i] == "") { if (blank) continue; blank = 1 } else blank = 0
        print lines[i]
      }
    }
  '
}

# ── adapter symlink mode ───────────────────────────────────────────────────────
link_adapter() {
  local adapter="${1:-}" root="${2:-.}"
  [[ -n "$adapter" ]] || die "usage: merge-agents.sh link <adapter> [TARGET_ROOT]"
  local target="AGENTS.md"
  ( cd "$root" || die "target root not found: $root"
    if [[ -L "$adapter" ]]; then
      if [[ "$(readlink "$adapter")" == "$target" ]]; then
        note "skip: $adapter already symlinks $target"; exit 0
      fi
      warn "$adapter symlinks $(readlink "$adapter"), not $target — relinking."
      ln -sf "$target" "$adapter"; note "relinked $adapter -> $target"; exit 0
    fi
    if [[ -e "$adapter" ]]; then
      warn "$adapter is a real file — not replacing. Show a diff and confirm before symlinking."
      exit 1
    fi
    ln -s "$target" "$adapter"
    note "linked $adapter -> $target"
  )
}

# ── merge mode ─────────────────────────────────────────────────────────────────
merge() {
  local root="${1:-.}"
  local target="$root/AGENTS.md"
  [[ -f "$TEMPLATE" ]] || die "template not found at $TEMPLATE"

  if [[ ! -f "$target" ]]; then
    cp "$TEMPLATE" "$target"
    note "created $target from template"
    return 0
  fi

  local tmp; tmp="$(mktemp "${target}.XXXXXX")"
  local block; block="$(mktemp "${target}.block.XXXXXX")"
  local tcore=""
  trap 'rm -f "$tmp" "$block" ${tcore:+"$tcore"}' RETURN
  extract_region "$TEMPLATE" "$I_START" "$I_END" > "$block"
  [[ -s "$block" ]] || die "template is missing its vibe:instructions markers"

  if grep -qF "$I_START" "$target" && grep -qF "$I_END" "$target"; then
    # Guard the cardinal invariant: markers present but reversed (end line before
    # start line) would make replace_region silently drop trailing content. Refuse
    # rather than mangle. Empty -> markers are substrings, not exact lines; let
    # replace_region no-op below.
    local s_line e_line
    s_line="$(awk -v m="$I_START" '$0==m{print NR; exit}' "$target")"
    e_line="$(awk -v m="$I_END"   '$0==m{print NR; exit}' "$target")"
    if [[ -n "$s_line" && -n "$e_line" ]] && (( s_line >= e_line )); then
      die "$target has reversed vibe:instructions markers (start line $s_line, end line $e_line) — fix by hand"
    fi
    replace_region "$target" "$I_START" "$I_END" "$block" "$tmp"
    if cmp -s "$tmp" "$target"; then
      note "no-op: $target instructions already up to date"
    else
      mv -f "$tmp" "$target"; note "merged template into $target (vibe:instructions block)"
    fi
    return 0
  fi

  if grep -qF "$C_START" "$target" && grep -qF "$C_END" "$target"; then
    replace_region "$target" "$C_START" "$C_END" "$block" "$tmp"
    mv -f "$tmp" "$target"
    note "migrated legacy vibe:constitution block -> vibe:instructions in $target"
    return 0
  fi

  # No markers. Wrap if the file IS the template body (normalized), else append.
  tcore="$(mktemp "${target}.tcore.XXXXXX")"   # cleaned by the RETURN trap
  # template core = inner instructions body (markers + active-rules stripped)
  awk -v s="$I_START" -v e="$I_END" '
    $0 == s { ins = 1; next }
    $0 == e { ins = 0; next }
    ins && $0 ~ /^<!-- Managed by vibe-setup/ { skipc = 1 }
    ins && skipc && $0 ~ /-->$/ { skipc = 0; next }
    ins && !skipc { print }
  ' "$TEMPLATE" > "$tcore"
  if diff -q <(normalize "$tcore") <(normalize "$target") >/dev/null 2>&1; then
    cp "$TEMPLATE" "$tmp" && mv -f "$tmp" "$target"
    note "wrapped unmarked-equivalent $target in vibe:instructions markers (no duplicate body)"
    return 0
  fi

  warn "$target has no vibe:instructions markers and diverges from the template."
  warn "appending the managed block; review and move your content as needed."
  { printf '\n'; cat "$block"; } >> "$target"
  note "appended vibe:instructions block to $target"
}

case "${1:-}" in
  link) shift; link_adapter "${1:-}" "${2:-.}" ;;
  *)    merge "${1:-.}" ;;
esac
