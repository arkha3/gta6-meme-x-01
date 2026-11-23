// Entry program for the make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The post on X is the entry itself. This program has one job: hand the post's
// address to the grader. It reads POST.json from the repository root, makes
// sure the file parses, and writes those exact bytes into the output
// directory as POST.json, where the gate picks them up.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POST.json');
if (!existsSync(sourcePath)) {
  console.error(`POST.json is missing from the repository root (${sourcePath})`);
  process.exit(1);
}

const raw = readFileSync(sourcePath, 'utf8');
let post: { url?: unknown };
try {
  post = JSON.parse(raw);
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}

// The gate reads the post from X, so refuse early when POST.json does not
// name one: an https address on x.com or twitter.com, /status/<digits>.
const url = typeof post.url === 'string' ? post.url : '';
if (!/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json does not name an X post: ${url || '(no url)'}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), raw);
