// ==UserScript==
// @name         UAA 书名完整显示与卡片自适应
// @namespace    https://github.com/lingyuncrystal/uaa-full-book-titles
// @version      1.1.4
// @description  完整显示 UAA 小说书名，并让列表与首页书籍卡片随长标题自动增高。
// @author       Alan
// @icon         data:image/x-icon;base64,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AAAAAAAAAAr8AgAK+90ACvz7AAr8/wAK/P8ACvz/AAn6+QABMEoAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr7BgAK/BoACvwyAAr7UgAK/HQACfyXAAr8MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////4B///4AD//4AAf/8A4D/+A/gf/gP8D/wH/g/8B/4H/Af+B/wH/wf8B/8H/AP/A/wD/wP8A/8D/AP/g/wD/4H8A/+B/AP/gfwD/8D8A//A/AH/wPwB/8D8Af/gfAH/4H4P/+B/////f///////////////8=
// @downloadURL  https://raw.githubusercontent.com/lingyuncrystal/uaa-full-book-titles/main/uaa-full-book-titles.user.js
// @updateURL    https://raw.githubusercontent.com/lingyuncrystal/uaa-full-book-titles/main/uaa-full-book-titles.user.js
// @match        *://vip261112.com/*
// @match        *://*.vip261112.com/*
// @include      /^https?:\/\/(?:[^/]+\.)?uaa[a-z0-9-]*\.com(?::\d+)?(?:\/|$)/
// @run-at       document-start
// @grant        GM_addStyle
// @noframes
// ==/UserScript==

(function () {
  "use strict";

  GM_addStyle(`
    /* 小说列表：书名换行后，标题行与整张卡片随内容自动增高。 */
    a.cn-lcard[href*="/novel/intro"] {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      height: auto !important;
      min-height: 0 !important;
      box-sizing: border-box !important;
      align-self: start !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__in {
      min-width: 0 !important;
      height: auto !important;
      flex: 1 1 74% !important;
    }

    /* 参考图使用较窄的封面列，让右侧书名、简介和目录拥有更多空间。 */
    a.cn-lcard[href*="/novel/intro"] .cn-lcard__cvcol {
      flex: 0 0 26% !important;
      width: 26% !important;
      min-width: 0 !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__h {
      align-items: flex-start !important;
      height: auto !important;
      min-height: 0 !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__t {
      display: block !important;
      font-size: clamp(14px, 2.5vw, 20px) !important;
      line-height: 1.2 !important;
      white-space: normal !important;
      overflow: visible !important;
      text-overflow: clip !important;
      -webkit-line-clamp: unset !important;
      line-clamp: unset !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
      height: auto !important;
      max-height: none !important;
    }

    /* 书籍封面保持参考卡片的竖版比例，文字行距随屏幕宽度平滑缩放。 */
    a.cn-lcard[href*="/novel/intro"] .cn-lcard__cv,
    a.cn-lcard[href*="/novel/intro"] .cn-lcard__cv img {
      aspect-ratio: 2 / 3 !important;
      height: auto !important;
      object-fit: cover !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__h {
      line-height: 1.2 !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__by,
    a.cn-lcard[href*="/novel/intro"] .cn-lcard__cats,
    a.cn-lcard[href*="/novel/intro"] .cn-lcard__meta {
      line-height: 1.25 !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__d {
      display: -webkit-box !important;
      -webkit-box-orient: vertical !important;
      -webkit-line-clamp: 3 !important;
      line-clamp: 3 !important;
      line-height: 1.5 !important;
      max-height: 4.5em !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      margin-top: 1px !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__foot {
      line-height: 1.25 !important;
      margin-top: 2px !important;
    }

    /* 列表目录：标签和章节名称均保持单行，过长内容用省略号收尾。 */
    a.cn-lcard[href*="/novel/intro"] .cn-lcard__foot {
      display: flex !important;
      align-items: flex-start !important;
      white-space: nowrap !important;
      min-width: 0 !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__ch {
      display: block !important;
      flex: 1 1 auto !important;
      min-width: 0 !important;
      max-width: none !important;
      max-height: none !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      overflow-wrap: normal !important;
      word-break: normal !important;
      text-overflow: ellipsis !important;
      text-align: left !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__ft {
      flex: 0 0 auto !important;
      white-space: nowrap !important;
    }

    /* 带“原创首发”徽标的标题：徽标与首行并排，后续行回到卡片左边对齐。 */
    a.cn-lcard[href*="/novel/intro"] .cn-lcard__h:has(> .cn-lcard__fr) {
      display: block !important;
      position: relative !important;
      width: 100% !important;
      min-width: 0 !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__h:has(> .cn-lcard__fr) .cn-lcard__fr,
    a.cn-lcard[href*="/novel/intro"] .cn-lcard__h:has(> .cn-lcard__fr) .cn-lcard__t {
      display: inline !important;
      width: auto !important;
      max-width: none !important;
      vertical-align: baseline !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__h:has(> .cn-lcard__fr) .cn-lcard__fr {
      white-space: nowrap !important;
      margin-right: 0.45em !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__h:has(> .cn-lcard__fr) .cn-lcard__rate {
      position: absolute !important;
      top: 0 !important;
      right: 0 !important;
    }

    /* 详情页：按参考卡片的无衬线字体、字号和紧凑层级排版。 */
    #detail .nd-t2 {
      font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Noto Sans CJK SC", "Microsoft YaHei", sans-serif !important;
      font-size: clamp(21px, 3vw, 24px) !important;
      line-height: 1.35 !important;
      font-weight: 700 !important;
      letter-spacing: 0 !important;
    }

    #detail .nd-author,
    #detail .nd-meta {
      font-size: clamp(13px, 1.8vw, 15px) !important;
      line-height: 1.5 !important;
    }

    #detail .nd-latest,
    #detail .nd-latest > b,
    #detail .ndc-name {
      font-size: clamp(14px, 1.9vw, 16px) !important;
      line-height: 1.5 !important;
    }

    #detail .nd-synopsis {
      font-size: clamp(14px, 1.9vw, 15px) !important;
      line-height: 1.6 !important;
    }

    /* 详情页：书名和章节名完整换行，同时约束卡片宽度，避免手机横向滚动。 */
    #detail .nd-t2 {
      min-width: 0 !important;
      max-width: 100% !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
    }

    #detail .nd-latest {
      min-width: 0 !important;
      white-space: normal !important;
      align-items: flex-start !important;
    }

    #detail .nd-latest {
      max-width: 100% !important;
      white-space: nowrap !important;
      text-align: left !important;
    }

    #detail .nd-latest > b,
    a.cn-lcard[href*="/novel/intro"] .cn-lcard__ch {
      min-width: 0 !important;
      max-width: none !important;
      flex: 1 1 auto !important;
      white-space: normal !important;
      text-align: left !important;
      overflow: visible !important;
      text-overflow: clip !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
    }

    #detail .nd-latest > b {
      display: -webkit-box !important;
      -webkit-box-orient: vertical !important;
      -webkit-line-clamp: 2 !important;
      line-clamp: 2 !important;
      max-height: 3em !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }

    #detail .nd-latest .tm,
    #detail .nd-latest .nd-go {
      flex: 0 0 auto !important;
      white-space: nowrap !important;
    }

    #detail .ndc-name {
      display: -webkit-box !important;
      -webkit-box-orient: vertical !important;
      -webkit-line-clamp: 2 !important;
      line-clamp: 2 !important;
      max-height: 3em !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }

    /* 首页/频道海报：取消一行或两行限制，并由卡片承接新增高度。 */
    a.cn-poster[href*="/novel/intro"] {
      height: auto !important;
      min-height: 0 !important;
      align-self: start !important;
    }

    a.cn-poster[href*="/novel/intro"] .cn-poster__cap,
    a.cn-poster[href*="/novel/intro"] .cn-poster__cap .t {
      height: auto !important;
      max-height: none !important;
    }

    a.cn-poster[href*="/novel/intro"] .cn-poster__cap .t,
    a.cn-poster[href*="/novel/intro"] .cn-poster__info .t {
      display: block !important;
      white-space: normal !important;
      overflow: visible !important;
      text-overflow: clip !important;
      -webkit-line-clamp: unset !important;
      line-clamp: unset !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
      height: auto !important;
      max-height: none !important;
    }
  `);
})();
