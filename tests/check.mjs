import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(
  new URL("../uaa-full-book-titles.user.js", import.meta.url),
  "utf8",
);

assert.match(source, /@version\s+1\.1\.9/);
assert.match(source, /@grant\s+GM_addStyle/);
const iconMatch = source.match(
  /^\/\/ @icon\s+data:image\/x-icon;base64,([A-Za-z0-9+/=]+)$/m,
);
assert.ok(iconMatch, "missing embedded ICO data URI");
const iconBytes = Buffer.from(iconMatch[1], "base64");
assert.equal(iconBytes.length, 4286, "unexpected embedded icon size");
assert.deepEqual(
  [...iconBytes.subarray(0, 4)],
  [0, 0, 1, 0],
  "invalid ICO signature",
);
assert.match(
  source,
  /@downloadURL\s+https:\/\/raw\.githubusercontent\.com\/lingyuncrystal\/uaa-full-book-titles\/main\/uaa-full-book-titles\.user\.js/,
);
assert.match(
  source,
  /@updateURL\s+https:\/\/raw\.githubusercontent\.com\/lingyuncrystal\/uaa-full-book-titles\/main\/uaa-full-book-titles\.user\.js/,
);
assert.match(source, /@match\s+\*:\/\/vip261112\.com\/\*/);
assert.match(source, /@match\s+\*:\/\/\*\.vip261112\.com\/\*/);
assert.match(source, /@include\s+\/\^https\?:\\\/\\\//);

for (const selector of [
  'a.cn-lcard[href*="/novel/intro"] .cn-lcard__t',
  'a.cn-lcard[href*="/novel/intro"] .cn-lcard__h:has(> .cn-lcard__fr)',
  'a.cn-lcard[href*="/novel/intro"] .cn-lcard__ch',
  '#detail .nd-t2',
  '#detail .nd-latest > b',
  'a.cn-lcard[href*="/novel/intro"] .cn-lcard__ch',
  'a.cn-poster[href*="/novel/intro"] .cn-poster__cap .t',
  'a.cn-poster[href*="/novel/intro"] .cn-poster__info .t',
  '#favGridN.cl-grid',
  '#favGridN.cl-grid .cl-card',
  '#favGridN.cl-grid .cl-card .cn-lcard__cv',
  '#favGridN.cl-grid .cl-card .cn-lcard__meta',
]) {
  assert.ok(source.includes(selector), `missing selector: ${selector}`);
}

for (const declaration of [
  "white-space: normal !important",
  "text-overflow: clip !important",
  "-webkit-line-clamp: unset !important",
  "overflow-wrap: anywhere !important",
  "height: auto !important",
  "width: 100% !important",
  "max-width: 100% !important",
  "min-width: 0 !important",
  "flex: 1 1 auto !important",
  "text-align: left !important",
]) {
  assert.ok(source.includes(declaration), `missing declaration: ${declaration}`);
}

assert.match(
  source,
  /#detail \.nd-latest\s*\{[^}]*white-space:\s*nowrap !important;/s,
  'the "最新：" label must remain on one line',
);
assert.match(
  source,
  /#detail \.nd-latest > b,[\s\S]*?white-space:\s*normal !important;/,
  "the chapter title must remain wrappable",
);
assert.match(source, /-webkit-line-clamp:\s*2 !important;/, "latest and directory names must be limited to two lines");
assert.match(source, /#detail \.ndc-name/, "chapter directory names must use the two-line limit");
assert.match(source, /\.cn-lcard__fr\s*\{[^}]*white-space:\s*nowrap !important;/s, "original-first badge must stay together");
assert.match(source, /aspect-ratio:\s*2 \/ 3 !important;/, "book covers must keep the reference portrait ratio");
assert.match(source, /line-height:\s*1\.35 !important;/, "title line spacing must match the reference card");
assert.match(source, /flex:\s*0 0 26% !important;/, "cover column must match the reference proportion");
assert.match(source, /\.cn-lcard__ch\s*\{[^}]*white-space:\s*nowrap !important;/s, "list chapter names must stay on one line");
assert.match(source, /-webkit-line-clamp:\s*3 !important;/, "book descriptions must have enough room for three lines");
assert.match(source, /#favGridN\.cl-grid \.cl-card \.cn-lcard__meta\s*\{[^}]*display:\s*none !important;/s, "collection statistics must be hidden");
assert.match(source, /#favGridN\.cl-grid \.cl-card \.cn-lcard__by\s*\{[^}]*display:\s*block !important;/s, "collection authors must remain visible");

console.log("userscript metadata and adaptive-title CSS checks passed");
