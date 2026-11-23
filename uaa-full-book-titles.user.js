// ==UserScript==
// @name         UAA 书名完整显示与卡片自适应
// @namespace    https://github.com/lingyuncrystal/uaa-full-book-titles
// @version      1.0.2
// @description  完整显示 UAA 小说书名，并让列表与首页书籍卡片随长标题自动增高。
// @author       Alan
// @icon         https://www.vip261112.com/favicon.ico?v=5
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
      height: auto !important;
      min-height: 0 !important;
      align-self: start !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__in {
      min-width: 0 !important;
      height: auto !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__h {
      align-items: flex-start !important;
      height: auto !important;
      min-height: 0 !important;
    }

    a.cn-lcard[href*="/novel/intro"] .cn-lcard__t {
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
