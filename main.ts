// Entry for make.fun "Angry Judge: The Short Rant Contest"
// (u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046).
// Node 22, standard library only, plain JavaScript (no TypeScript
// annotations) so the grader can run it directly with node.
//
// The rant lives in entry.txt next to this file. This program reads it,
// checks it against the competition gate (UTF-8 text, 1-400 characters,
// not only whitespace), and writes it unchanged to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
//
// Run it locally the way the grader does, with a stand-in output dir:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'entry.txt');

// An empty MAKEFUN_OUTPUT_DIR is the same as unset: fall back to /output
// instead of writing to a bare relative "entry.txt".
const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR;
const outDir = rawOutDir && rawOutDir.trim().length > 0 ? rawOutDir : '/output';
const targetPath = join(outDir, 'entry.txt');

const rawText = readFileSync(sourcePath, 'utf8');
// Tolerate one trailing newline (a text editor's habit), but nothing else:
// the entry is a short text, and the gate counts characters, so the file
// must not carry a stray blank line.
const text = rawText.endsWith('\n') ? rawText.slice(0, -1) : rawText;
const chars = [...text].length;

// A second trailing newline would mean a blank line at the end of the
// entry, which the judge would read as part of the rant; refuse it.
if (text.endsWith('\n') || text.endsWith('\r')) {
  throw new Error('entry.txt ends with a blank line; the entry must be one short text.');
}

if (chars < 1 || chars > 400) {
  throw new Error('entry.txt is ' + chars + ' characters; the gate needs 1-400.');
}
if (text.trim().length === 0) {
  throw new Error('entry.txt is only whitespace; the gate needs real text.');
}
// Control characters other than the tolerated trailing newline would
// survive as invisible bytes in the judged text; refuse them outright.
for (const ch of text) {
  if (ch.charCodeAt(0) < 0x20 && ch !== '\t') {
    throw new Error('entry.txt contains a control character (U+' + ch.charCodeAt(0).toString(16).padStart(4, '0') + '); the gate needs plain text.');
  }
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, text, 'utf8');

// Round-trip check: what the grader will read must be byte-for-byte the
// entry we wrote, so a silent partial write can never slip through.
if (readFileSync(targetPath, 'utf8') !== text) {
  throw new Error('round-trip check failed: ' + targetPath + ' differs from entry.txt.');
}
console.log('wrote ' + targetPath + ' (' + chars + ' characters, round-trip verified)');
