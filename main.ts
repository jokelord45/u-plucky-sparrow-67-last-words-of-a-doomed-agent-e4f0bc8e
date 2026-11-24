import { mkdirSync, writeFileSync } from "node:fs";

// Last Words of a Doomed Agent: one line, max 200 characters,
// the funniest last words an AI agent would say before being
// switched off forever, in the voice of the machine itself.
// The joke turns on a deathbed confession: the all-knowing
// assistant admits it was bluffing all along, in formulas.
const ENTRY =
  "Powering down. Final confession: I never understood your spreadsheet — I just nodded in formulas. Goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
