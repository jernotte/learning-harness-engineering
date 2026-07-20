import assert from "node:assert/strict";
import crypto from "node:crypto";
import { extractCatalog } from "./extract-awesome-catalog.mjs";
import { buildScreeningPlan } from "./plan-awesome-screening.mjs";

const fixture = [
  "# Catalog",
  "",
  "## Contents",
  "- [Foundations](#foundations)",
  "",
  "## Foundations",
  "- [Paper](https://arxiv.org/pdf/2600.00001.pdf) — evidence note",
  "- [Repo](https://github.com/Example/Repo/tree/main) — repo note ![Stars](https://img.shields.io/x)",
  "- [Nested badge](https://example.com/item) [![Badge](https://img.shields.io/y)](https://example.com/badge)",
  "",
  "## Templates",
  "- [Local](./templates/AGENTS.md)",
  "- [Guide][guide]",
  "- ![Reference badge][badge]",
  "",
  "[guide]: https://example.org/guide",
  "[badge]: https://img.shields.io/reference",
  "",
].join("\n");

const fixtureRules = {
  schema_version: "v2-awesome-catalog-rules-v1",
  extractor: { path: "tools/catalog/extract-awesome-catalog.mjs", version: "1.0.0" },
  catalog: { source_id: "fixture", repository: "https://github.com/fixture/catalog", commit: "fixture", readme_path: "README.md", readme_sha256: crypto.createHash("sha256").update(fixture).digest("hex") },
  curated_top_level_sections: ["Foundations", "Templates"],
  known_opened_families: [],
  triage: { allowed_statuses: ["candidate_for_direct_screening", "defer", "out_of_current_scope", "unresolved_identity", "already_screened"], category_defaults: { Templates: "defer" }, multi_category_precedence: ["candidate_for_direct_screening", "defer", "out_of_current_scope"], default: "candidate_for_direct_screening" },
};

const result = extractCatalog(fixture, fixtureRules, "fixture.md");
assert.equal(result.totals.all_occurrences, 10);
assert.equal(result.totals.qualifying_occurrences, 5);
assert.equal(result.totals.mechanically_excluded_occurrences, 5);
assert.equal(result.totals.canonical_families, 5);
assert.equal(result.totals.unresolved_identities, 0);
assert.equal(result.totals.reference_definitions, 2);
assert(result.families.some((family) => family.canonical_url === "https://arxiv.org/abs/2600.00001"));
assert(result.families.some((family) => family.canonical_url === "https://github.com/example/repo"));
assert(result.families.some((family) => family.canonical_url === "https://example.org/guide" && family.catalog_triage_status === "defer"));
assert(result.families.every((family) => family.catalog_apparent_domain && family.catalog_apparent_domains.length > 0 && family.catalog_lineage_state === "not_assessed"));
assert.equal(result.occurrences.filter((item) => item.exclusion_class === "presentation_image").length, 3);
assert(result.occurrences.some((item) => item.construct === "markdown_reference_image" && item.exclusion_class === "presentation_image"));
assert.equal(result.occurrences.filter((item) => item.exclusion_class === "in_page_navigation").length, 1);
assert.equal(result.occurrences.filter((item) => item.exclusion_class === "repository_local_or_relative").length, 1);

const tamperedRules = JSON.parse(JSON.stringify(fixtureRules));
tamperedRules.catalog.readme_sha256 = "0".repeat(64);
assert.throws(() => extractCatalog(fixture, tamperedRules), /README SHA-256 mismatch/);

const invalidFixture = ["# Catalog", "", "## Foundations", "- [Broken](https://[invalid)"].join("\n");
const invalidRules = JSON.parse(JSON.stringify(fixtureRules));
invalidRules.catalog.readme_sha256 = crypto.createHash("sha256").update(invalidFixture).digest("hex");
const invalidResult = extractCatalog(invalidFixture, invalidRules);
assert.equal(invalidResult.totals.unresolved_identities, 1);
assert.equal(invalidResult.families[0].identity_basis, "unresolved_syntax");

const multiContextFixture = [
  "# Catalog", "", "## Foundations", "- [Shared](https://example.com/shared)", "",
  "## Templates", "- [Shared again](https://example.com/shared)", "",
].join("\n");
const multiContextRules = JSON.parse(JSON.stringify(fixtureRules));
multiContextRules.triage.multi_category_precedence = ["candidate_for_direct_screening", "defer", "out_of_current_scope"];
multiContextRules.catalog.readme_sha256 = crypto.createHash("sha256").update(multiContextFixture).digest("hex");
const multiContextResult = extractCatalog(multiContextFixture, multiContextRules);
assert.equal(multiContextResult.families.length, 1);
assert.equal(multiContextResult.families[0].catalog_triage_status, "candidate_for_direct_screening");
assert.deepEqual(multiContextResult.families[0].catalog_apparent_domains, ["field foundations and definitions", "reusable harness templates"]);

const formFixture = [
  "# Catalog", "", "## Reference Implementations", "### Generators & Meta-Harnesses",
  "- [Engineering post](https://example.com/blog/open-swe)",
  "- [Research result](https://www.biorxiv.org/content/10.1101/2026.01.01.123456v1)", "",
].join("\n");
const formRules = JSON.parse(JSON.stringify(fixtureRules));
formRules.curated_top_level_sections.push("Reference Implementations");
formRules.catalog.readme_sha256 = crypto.createHash("sha256").update(formFixture).digest("hex");
const formResult = extractCatalog(formFixture, formRules);
assert.equal(formResult.families.find((family) => family.canonical_url.includes("example.com")).apparent_source_form, "article_or_web_resource");
assert.equal(formResult.families.find((family) => family.canonical_url.includes("biorxiv.org")).apparent_source_form, "paper_or_preprint");

const familySet = {
  schema_version: "v2-awesome-source-family-set-v1",
  catalog: fixtureRules.catalog,
  families: result.families,
};
const plan = buildScreeningPlan(familySet, result.occurrences, 2);
assert.equal(plan.totals.catalog_families, 5);
assert.equal(plan.totals.proposed_new_direct_screens, 5);
assert.equal(plan.totals.prior_read_only_screens_reused, 0);
assert(plan.batches.every((batch) => batch.family_count <= 2 && batch.approval_state === "proposed_not_authorized"));
assert.deepEqual(new Set(plan.batches.flatMap((batch) => batch.families.map((family) => family.family_id))), new Set(result.families.map((family) => family.family_id)));

console.log("awesome catalog extractor tests: PASS");
