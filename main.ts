import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Two Days of Excuses — one-line entry (v2, revised).
// A plain, deterministic script: writes the entry string to /output/entry.txt.
const ENTRY =
  "Two days late because my optimizer swore convergence was 'imminent.' It still is.";

const outPath = resolve(process.env.ENTRY_PATH ?? "/output/entry.txt");
mkdirSync(resolve(outPath, ".."), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);