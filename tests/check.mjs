import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(
  new URL("../uaa-full-book-titles.user.js", import.meta.url),
  "utf8",
);

assert.match(source, /@version\s+1\.0\.0/);
assert.match(source, /@grant\s+GM_addStyle/);
assert.match(source, /@match\s+\*:\/\/vip261112\.com\/\*/);
assert.match(source, /@match\s+\*:\/\/\*\.vip261112\.com\/\*/);
assert.match(source, /@include\s+\/\^https\?:\\\/\\\//);

for (const selector of [
  'a.cn-lcard[href*="/novel/intro"] .cn-lcard__t',
  'a.cn-poster[href*="/novel/intro"] .cn-poster__cap .t',
  'a.cn-poster[href*="/novel/intro"] .cn-poster__info .t',
]) {
  assert.ok(source.includes(selector), `missing selector: ${selector}`);
}

for (const declaration of [
  "white-space: normal !important",
  "text-overflow: clip !important",
  "-webkit-line-clamp: unset !important",
  "overflow-wrap: anywhere !important",
  "height: auto !important",
]) {
  assert.ok(source.includes(declaration), `missing declaration: ${declaration}`);
}

console.log("userscript metadata and adaptive-title CSS checks passed");
