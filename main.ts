// Entry program for news-image-20261124 (Node 22, standard library only).
// The deliverable is the rendered front page in entry.png beside this file:
// one image summing up Tuesday 24 November 2026's world news. The program
// copies that image to /output/entry.png, byte for byte, every run.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, 'entry.png'));
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
