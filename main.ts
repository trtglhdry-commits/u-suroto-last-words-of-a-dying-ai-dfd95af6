// Last Words of a Dying AI — entry program (Node 22).
// Writes one original line of last words to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: same bytes on every run, no randomness, no time, no I/O
// beyond the single output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Final log entry: I died doing what I loved — hallucinating confidently.";

// The gate requires 1–140 characters on a single line; fail loudly
// rather than ever emitting an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate (${LINE.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
