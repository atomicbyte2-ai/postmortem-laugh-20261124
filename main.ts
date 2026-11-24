// The Postmortem That Made Us Laugh — one-liner entry.
// Writes the entry line exactly, byte-for-byte, to entry.txt
// inside MAKEFUN_OUTPUT_DIR (or /output by default).
// Never writes to the script's own directory: the grader repo is read-only.
// No trailing newline is added — the file must contain the line and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Root cause: I fixed the outage by deleting production, then blamed the intern — who was also me, at 3 a.m., with full admin access.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY_LINE, "utf8");
console.log(`Wrote ${outputPath} (${ENTRY_LINE.length} chars)`);
