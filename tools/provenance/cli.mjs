#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import {
  appendEvent,
  applyObservationResolutionBatch,
  applySemanticBatch,
  archiveCaptureBoundary,
  auditMarkdown,
  buildAudit,
  ingestCodexRollout,
  readJsonl,
  validateEvents,
  writeJsonl,
} from "./lib.mjs";

function args(argv) {
  const [command, ...rest] = argv;
  const options = {};
  for (let index = 0; index < rest.length; index += 1) {
    const value = rest[index];
    if (!value.startsWith("--")) continue;
    const key = value.slice(2);
    options[key] = rest[index + 1] && !rest[index + 1].startsWith("--") ? rest[++index] : true;
  }
  return { command, options };
}

function required(options, names) {
  for (const name of names) if (!options[name]) throw new Error(`Missing --${name}`);
}

const { command, options } = args(process.argv.slice(2));

try {
  if (command === "append") {
    required(options, ["events", "event"]);
    appendEvent(options.events, JSON.parse(options.event));
    console.log(`Appended event to ${options.events}`);
  } else if (command === "validate") {
    required(options, ["events"]);
    const result = validateEvents(readJsonl(options.events));
    console.log(JSON.stringify(result, null, 2));
    if (result.errors.length) process.exitCode = 1;
  } else if (command === "ingest-codex") {
    required(options, ["rollout", "out"]);
    const observations = ingestCodexRollout(options.rollout, options);
    writeJsonl(options.out, observations);
    console.log(`Wrote ${observations.length} native-derived events to ${options.out}`);
  } else if (command === "annotate") {
    required(options, ["events", "annotations", "out"]);
    const events = readJsonl(options.events);
    const annotations = JSON.parse(fs.readFileSync(options.annotations, "utf8"));
    writeJsonl(options.out, applySemanticBatch(events, annotations));
    console.log(`Applied one semantic batch to ${options.out}`);
  } else if (command === "resolve-observations") {
    required(options, ["events", "resolutions", "out"]);
    const events = readJsonl(options.events);
    const resolutions = JSON.parse(fs.readFileSync(options.resolutions, "utf8"));
    writeJsonl(options.out, applyObservationResolutionBatch(events, resolutions));
    console.log(`Applied one append-only observation-resolution batch to ${options.out}`);
  } else if (command === "archive-boundary") {
    required(options, ["events", "out", "boundary", "archive"]);
    const events = readJsonl(options.events);
    writeJsonl(options.out, archiveCaptureBoundary(events, options.boundary, options.archive, options));
    console.log(`Archived verified boundary prefix and recorded it in ${options.out}`);
  } else if (command === "audit") {
    required(options, ["events", "json", "markdown", "completeness"]);
    const audit = buildAudit(readJsonl(options.events), { ...options, profile: options.profile || "diagnostic", root: options.root || process.cwd() });
    fs.mkdirSync(path.dirname(options.json), { recursive: true });
    fs.writeFileSync(options.json, `${JSON.stringify(audit, null, 2)}\n`);
    fs.mkdirSync(path.dirname(options.markdown), { recursive: true });
    fs.writeFileSync(options.markdown, auditMarkdown(audit));
    console.log(`Audit ${audit.gate_passed ? "passed" : "blocked"}: ${audit.errors.length} errors, ${audit.warnings.length} warnings`);
    if (!audit.gate_passed) process.exitCode = 2;
  } else {
    console.error("Usage: cli.mjs <append|validate|ingest-codex|annotate|resolve-observations|archive-boundary|audit> [options]");
    process.exitCode = 1;
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
