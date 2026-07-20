# Harness Engineering V2 — Selective Design History

## Status and purpose

This policy was approved with V2-D005 on 2026-07-20 and is binding for the V2
outline-development program.

The repository should preserve why consequential design decisions changed
without becoming a chat log. `research/DECISIONS.md` remains the canonical,
concise authority record. Selected raw conversation is supplementary private
context, never repository authority.

## Two-layer record

### Canonical repository decision record

Every consequential pivot or gate records, in distilled prose:

- the decision and status;
- maintainer rationale and material constraints;
- serious alternatives considered or rejected;
- consequential reviewer disagreement and its disposition;
- authority, consequences, and reopening conditions; and
- a design-history disposition.

The disposition is either `none — <reason>` or a candidate/approved opaque
packet ID. Decision records contain no raw dialogue and no private packet path.

### Owner-only conversation packet

A minimal raw packet may be proposed only when losing the exact exchange would
materially obscure intent, rejected alternatives, reopening conditions, or the
resolution of a consequential disagreement.

Eligible exchanges are:

- architecture or scope pivots;
- major methodology, evidence, or governance debates;
- maintainer rationale essential to interpreting a decision; and
- consequential reviewer disagreements and reconciliations.

Exclude:

- routine edits and ordinary iteration;
- formatting, wording, and typo corrections;
- progress or status exchanges;
- repeated agreement without new rationale;
- routine review findings and fixes;
- system or developer instructions, hidden reasoning, and secrets;
- raw research-source content; and
- tool calls or output unless their exact content or metadata is indispensable
  to the consequential decision.

Selection is inclusion-based. Do not copy a broad transcript and then remove
obvious noise.

## Packet approval workflow

1. Update the concise decision record.
2. Record `none` with a reason or propose an exact packet manifest.
3. The manifest identifies the packet ID, source task, smallest coherent
   message set or ranges, inclusion reason, content mode, declared omissions,
   redactions, and external destination.
4. The maintainer approves, revises, or rejects that exact manifest before any
   packet is written.
5. A reviewed extractor writes only the approved selection to owner-only
   external storage.
6. The maintainer reviews the resulting redacted packet before it is finalized.
7. The decision record stores only the opaque packet ID, packet fingerprint,
   approval, and supersession state.

Brief or stage approval never grants blanket packet-export permission. Packet
approval may be individual or a checkpoint batch, but every entry must remain
explicit.

## Storage and repository boundary

Approved packets live outside Git at:

`/Users/jernotte/dev/reference-materials/research/design-history/harness-engineering-v2/<packet-id>/`

The external directory may contain:

- `selection-manifest.json`;
- `conversation.jsonl` as the canonical selected packet; and
- `conversation.md` as a derived readable rendering.

Packet directories must use mode `0700`; packet files must use mode `0600`.
The verifier must confirm those modes before finalization. Files use immutable
versioned names. Never overwrite an approved packet; create a superseding
version.

Do not commit raw or rendered conversation packets. Git may contain only the
distilled decision record and content-free integrity metadata. Publishing any
packet content in Git or sharing it beyond owner-only storage requires a second
explicit maintainer approval.

## Packet content and integrity

The smallest coherent message set is preferred. Each included item records,
when available:

- role, timestamp, native item ID, and source range;
- inclusion category and reason;
- `verbatim_redacted` or `metadata_only` mode;
- declared redactions and omission markers;
- complete-source-fragment and rendered-content fingerprints; and
- links to related decision or provenance event IDs.

Editorial summaries belong in `research/DECISIONS.md` or manifest annotations,
not in canonical `conversation.jsonl` records, and cannot establish what was
literally said. Redaction markers state the reason without reproducing the
removed value. Do not hash an isolated low-entropy secret; hash the complete
source fragment instead.

The repository integrity record may store packet ID, hashes, byte counts,
permissions, extractor version, generation date, approval, and supersession
metadata, but not conversation text or a private absolute path.

## Tooling boundary

The retained `archive-boundary` command cannot implement this policy. It always
copies and verifies the complete native transcript prefix from line 1 through
the declared boundary. Do not use or relabel that output as selective design
history.

A dependable selective export requires a bounded extractor and verifier. They
must stream only approved records from the native source, fail closed on system
or developer content and hidden reasoning, enforce declared fields and
redactions, generate integrity metadata, and never create a temporary full-
prefix copy. It must also enforce and verify `0700` packet-directory and `0600`
packet-file modes before finalization. Manual copying is not a canonical
packet.

Implementing those tools requires its own scoped change, deterministic tests,
and configured read-only review before the first packet export. It is not a
prerequisite for Stage 4 seed inspection; if a packet candidate arises first,
leave it pending until the tool and exact manifest are approved.

## Epistemic limits

- A selected packet proves only what it contains, not conversation
  completeness.
- Without a retained full prefix, packet fingerprints prove integrity from
  generation onward, not complete fidelity to a later-unavailable source.
- Redacted content is not byte-identical to the original.
- Maintainer approval establishes selection intent, not the truth of a
  subject-matter statement.
- A packet is governance context, not harness-engineering evidence.
- A packet cannot establish research breadth, balance, absence, saturation, or
  provenance completeness and never satisfies a `capture_archive` requirement.

Research-source provenance remains governed separately by
`docs/source-provenance.md`.
