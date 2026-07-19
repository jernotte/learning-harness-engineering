# Bounded Claude HTML writer

This integration is separate from the read-only Claude reviewer. It launches one
fresh Fable-high process in a new `/private/tmp` workspace, copies only approved
inputs into a read-only tree, and permits writer output only beneath `site/` and
`tooling/` inside that disposable workspace.

The wrapper denies shell, browser, web, MCP, skill, agent, and canonical-repository
access. It verifies the resolved model, input hashes, canonical repository tree,
output file types, symlink absence, size limits, and Claude's own created-file list.
Codex—not Claude—validates and promotes the result.

The fresh process uses `acceptEdits` because it is intentionally an author rather
than a reviewer. That permission applies inside the disposable working directory;
path denies, read-only input copies, the missing shell, and post-run tree checks
keep the canonical repository outside its write boundary.

```sh
node tools/html-writer/test.mjs

node tools/html-writer/cli.mjs run \
  --repo "$PWD" \
  --workspace /private/tmp/harness-learning-html-writer-<unique-id>
```

The output is intentionally not written into this repository. A successful run
creates `output/site/`, `output/tooling/`, and a machine record under `logs/`.
Clean regeneration means a fresh isolated run from the same source hashes that
passes validation; language-model authoring is not assumed to be byte-identical.
