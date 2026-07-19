# Codex learning-site writer

This is the deterministic Codex writer for the current learning site. It renders the canonical Markdown under `learning/` into a static, self-contained site under `site/`. It does not edit the Markdown or research layer.

It is deliberately separate from both:

- `tools/html-writer/`, the retained isolated Fable-high authoring implementation; and
- the read-only Fable review, reconciliation, and verification tools.

The two writers are alternative authoring implementations. The read-only reviewer evaluates outputs; it never authors them.

## Generate

Use the bundled workspace runtime so the pinned `marked` 17.0.5 renderer is available:

```sh
NODE_PATH=/Users/jernotte/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules \
  node tools/learning-site/generate.cjs --repo . --output site
```

The destination must be absent or empty. Generation is staged and then promoted atomically. The generated manifest binds each page to its canonical input paths and records source, tooling, renderer, and output hashes.

## Test and validate

```sh
NODE_PATH=/Users/jernotte/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules \
  node tools/learning-site/test.cjs

NODE_PATH=/Users/jernotte/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules \
  node tools/learning-site/validate.cjs --repo . --site site \
  --artifacts /private/tmp/harness-learning-site-validation
```

Validation checks source/output hashes, canonical heading coverage, local links and fragments, semantic structure, certainty-markup invariants, runtime independence, clean regeneration, responsive rendering, keyboard behavior, theme behavior, JavaScript errors, screenshots, and print output.

Never hand-edit `site/`. Change canonical Markdown for content, or change this renderer for presentation, then regenerate the entire output.
