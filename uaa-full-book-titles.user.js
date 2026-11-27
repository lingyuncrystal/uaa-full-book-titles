// ==UserScript==
// @name         UAA 书名完整显示与卡片自适应
// @namespace    https://github.com/lingyuncrystal/uaa-full-book-titles
// @version      1.3.1-dev.16
// @description  （开发版）完整显示 UAA 小说书名，并让列表与首页书籍卡片随长标题自动增高；收藏页可按阅读中/追更/已读完分类。
// @author       Alan
// @icon         data:image/x-icon;base64,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AAAAAAAAAAr8AgAK+90ACvz7AAr8/wAK/P8ACvz/AAn6+QABMEoAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr7BgAK/BoACvwyAAr7UgAK/HQACfyXAAr8MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////4B///4AD//4AAf/8A4D/+A/gf/gP8D/wH/g/8B/4H/Af+B/wH/wf8B/8H/AP/A/wD/wP8A/8D/AP/g/wD/4H8A/+B/AP/gfwD/8D8A//A/AH/wPwB/8D8Af/gfAH/4H4P/+B/////f///////////////8=
// @downloadURL  https://raw.githubusercontent.com/lingyuncrystal/uaa-full-book-titles/dev/uaa-full-book-titles.user.js
// @updateURL    https://raw.githubusercontent.com/lingyuncrystal/uaa-full-book-titles/dev/uaa-full-book-titles.user.js
// @match        *://vip261112.com/*
// @match        *://*.vip261112.com/*
// @include      /^https?:\/\/(?:[^/]+\.)?uaa[a-z0-9-]*\.com(?::\d+)?(?:\/|$)/
// @run-at       document-start
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @connect      dav.jianguoyun.com
// @noframes
// ==/UserScript==

(function () {
  "use strict";

  const CONFIG_KEY = "uaa-config";
  const CONFIG_DEFAULTS = { favTabs: true, favCrossPage: true, localProgress: true, favCompact: true, detailLatest: true };
  let uaaConfig = CONFIG_DEFAULTS;
  try { uaaConfig = Object.assign({}, CONFIG_DEFAULTS, GM_getValue(CONFIG_KEY, {}) || {}); } catch (error) {}
  const saveUaaConfig = (patch) => {
    uaaConfig = Object.assign({}, uaaConfig, patch);
    try { GM_setValue(CONFIG_KEY, uaaConfig); } catch (error) {}
  };

  let uaaCss = `
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

    /*UAA:D1:START*/
    /* 详情页“最新：”行与列表卡片保持一致：小字号、灰白、章节名完整换行。 */
    #detail .nd-latest {
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: baseline !important;
      gap: 0 !important;
      min-width: 0 !important;
      max-width: 100% !important;
      white-space: normal !important;
      text-align: left !important;
      font-size: 11.5px !important;
      color: rgb(154, 152, 162) !important;
    }

    #detail .nd-latest > b {
      flex: 1 1 0 !important;
      min-width: 140px !important;
      max-width: none !important;
      margin-right: 0 !important;
      font-size: 11.5px !important;
      font-weight: 700 !important;
      color: rgb(199, 196, 206) !important;
      line-height: 1.25 !important;
      white-space: normal !important;
      overflow: visible !important;
      text-overflow: clip !important;
      -webkit-line-clamp: unset !important;
      line-clamp: unset !important;
      max-height: none !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
      text-align: left !important;
    }

    /*UAA:D1:END*/
    #detail .ndc-name {
      font-size: clamp(12px, 1.7vw, 14px) !important;
      line-height: 1.4 !important;
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

    #detail .nd-latest .tm,
    #detail .nd-latest .nd-go {
      flex: 0 0 auto !important;
      white-space: nowrap !important;
    }

    /*UAA:D2:START*/
    #detail .nd-latest .tm {
      margin-left: 0 !important;
      font-size: 11.5px !important;
    }
    /*UAA:D2:END*/

    #detail .ndc-name {
      display: -webkit-box !important;
      -webkit-box-orient: vertical !important;
      -webkit-line-clamp: 2 !important;
      line-clamp: 2 !important;
      max-height: 3em !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }

    /*UAA:FAV:START*/
    /* 收藏页手机端：改为三列紧凑卡片，PC 端保留站点原始布局。 */
    @media (max-width: 767px) {#favGridN.cl-grid, #uaa-fav-all {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 10px !important;
      }#favGridN.cl-grid .cl-card, #uaa-fav-all .cl-card {
        display: flex !important;
        flex-direction: column !important;
        min-width: 0 !important;
        width: 100% !important;
        height: auto !important;
        box-sizing: border-box !important;
        padding: 8px !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__cv, #uaa-fav-all .cl-card .cn-lcard__cv {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 2 / 3 !important;
        min-width: 0 !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__cv img, #uaa-fav-all .cl-card .cn-lcard__cv img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__in, #uaa-fav-all .cl-card .cn-lcard__in {
        width: 100% !important;
        min-width: 0 !important;
        height: auto !important;
        padding-top: 5px !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__t, #uaa-fav-all .cl-card .cn-lcard__t {
        font-size: clamp(11px, 2.2vw, 16px) !important;
        line-height: 1.25 !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__by,
      #favGridN.cl-grid .cl-card .cn-lcard__cats, #uaa-fav-all .cl-card .cn-lcard__by, #uaa-fav-all .cl-card .cn-lcard__cats {
        font-size: clamp(9px, 1.7vw, 11px) !important;
        line-height: 1.2 !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__catlink, #uaa-fav-all .cl-card .cn-lcard__catlink {
        font-size: inherit !important;
        line-height: inherit !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__by, #uaa-fav-all .cl-card .cn-lcard__by {
        display: block !important;
        min-width: 0 !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__meta, #uaa-fav-all .cl-card .cn-lcard__meta {
        display: none !important;
      }#favGridN.cl-grid .cl-card .cl-mini__v, #uaa-fav-all .cl-card .cl-mini__v {
        display: none !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__foot, #uaa-fav-all .cl-card .cn-lcard__foot {
        font-size: clamp(10px, 1.9vw, 13px) !important;
        line-height: 1.25 !important;
      }#favGridN.cl-grid .cl-card .cn-lcard__d, #uaa-fav-all .cl-card .cn-lcard__d {
        font-size: clamp(10px, 1.8vw, 12px) !important;
        line-height: 1.35 !important;
      }

    /*UAA:FAV:END*/
    /*UAA:D3:START*/
      /* 详情页手机端：缩小封面列加宽“最新：”行，去掉箭头，让时间与章节名同行。 */
      #detail .nd-hero__in {
        grid-template-columns: 96px minmax(0, 1fr) !important;
      }

      #detail .nd-cover {
        width: 96px !important;
        align-self: start !important;
      }

      #detail .nd-cover img {
        width: 100% !important;
        height: auto !important;
      }

      #detail .nd-latest {
        flex-wrap: nowrap !important;
      }

      #detail .nd-latest > b {
        min-width: 0 !important;
      }

      #detail .nd-latest .nd-go {
        display: none !important;
      }
    }
    /*UAA:D3:END*/

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

    /*UAA:TAB:START*/
    /* 收藏页分类 Tab：全部 / 阅读中 / 追更 / 已读完。 */
    .uaa-fav-tabs {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 8px !important;
      margin: 12px 0 14px !important;
    }

    .uaa-fav-tabs button {
      display: inline-flex !important;
      align-items: center !important;
      gap: 4px !important;
      padding: 6px 12px !important;
      border: 1px solid rgba(255, 255, 255, 0.16) !important;
      border-radius: 999px !important;
      background: transparent !important;
      color: rgba(255, 255, 255, 0.72) !important;
      font-size: 12px !important;
      line-height: 1.2 !important;
      cursor: pointer !important;
      -webkit-tap-highlight-color: transparent !important;
    }

    .uaa-fav-tabs button.is-on {
      border-color: #ff2d55 !important;
      color: #fff !important;
      background: rgba(255, 45, 85, 0.18) !important;
    }

    .uaa-fav-tabs button i {
      font-style: normal !important;
      font-size: 11px !important;
      opacity: 0.68 !important;
    }

    #favGridN .cl-card.uaa-hide {
      display: none !important;
    }
  

    /*UAA:TAB:END*/

    /* UAA 设置面板 */
    #uaa-settings {
      position: fixed !important;
      inset: 0 !important;
      z-index: 99999 !important;
      display: none;
      align-items: center !important;
      justify-content: center !important;
    }

    #uaa-settings .uaa-settings__mask {
      position: absolute !important;
      inset: 0 !important;
      background: rgba(0, 0, 0, 0.55) !important;
    }

    #uaa-settings .uaa-settings__panel {
      position: relative !important;
      width: min(440px, calc(100vw - 32px)) !important;
      max-height: 80vh !important;
      overflow: auto !important;
      border-radius: 14px !important;
      background: #1c1c22 !important;
      color: #e8e6ec !important;
      padding: 16px !important;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5) !important;
      font-size: 13px !important;
      line-height: 1.5 !important;
    }

    #uaa-settings .uaa-settings__head {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      margin-bottom: 12px !important;
      font-size: 15px !important;
    }

    #uaa-settings .uaa-settings__head button {
      border: 0 !important;
      background: transparent !important;
      color: #aaa !important;
      font-size: 20px !important;
      cursor: pointer !important;
    }

    #uaa-settings .uaa-settings__row {
      display: flex !important;
      gap: 8px !important;
      align-items: flex-start !important;
      padding: 8px 0 !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
      cursor: pointer !important;
    }

    #uaa-settings .uaa-settings__row input {
      margin-top: 3px !important;
    }

    #uaa-settings .uaa-settings__foot {
      display: flex !important;
      gap: 8px !important;
      margin-top: 14px !important;
    }

    #uaa-settings .uaa-settings__foot button {
      flex: 1 !important;
      padding: 8px 10px !important;
      border-radius: 8px !important;
      border: 1px solid rgba(255, 255, 255, 0.16) !important;
      background: transparent !important;
      color: #e8e6ec !important;
      cursor: pointer !important;
    }

    #uaa-settings .uaa-settings__foot button[data-uaa-save] {
      border-color: #ff2d55 !important;
      background: rgba(255, 45, 85, 0.18) !important;
      color: #fff !important;
    }

    #uaa-settings .uaa-settings__group {
      border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
      padding: 4px 0 !important;
    }

    #uaa-settings .uaa-settings__group summary {
      cursor: pointer !important;
      padding: 8px 0 !important;
      font-weight: 600 !important;
      list-style: none !important;
    }

    #uaa-settings .uaa-settings__group summary::-webkit-details-marker {
      display: none !important;
    }

    #uaa-settings .uaa-settings__group summary::after {
      content: "▾" !important;
      float: right !important;
      color: #888 !important;
    }

    #uaa-settings .uaa-settings__group[open] summary::after {
      content: "▴" !important;
    }

    #uaa-settings .uaa-settings__note {
      margin-top: 10px !important;
      color: #888 !important;
      font-size: 11px !important;
    }
    #uaa-settings .uaa-settings__sep {
      margin-top: 12px !important;
      padding-top: 10px !important;
      border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    }

    #uaa-settings .uaa-settings__field {
      display: flex !important;
      flex-direction: column !important;
      gap: 4px !important;
      padding: 4px 0 !important;
    }

    #uaa-settings .uaa-settings__field span {
      color: #aaa !important;
      font-size: 11px !important;
    }

    #uaa-settings .uaa-settings__field input {
      padding: 6px 8px !important;
      border-radius: 6px !important;
      border: 1px solid rgba(255, 255, 255, 0.16) !important;
      background: rgba(0, 0, 0, 0.2) !important;
      color: #e8e6ec !important;
      font-size: 12px !important;
    }


`;
  if (!uaaConfig.favCompact) {
    uaaCss = uaaCss.replace(/\/\*UAA:FAV:START\*\/[\s\S]*?\/\*UAA:FAV:END\*\//g, "");
  }
  if (!uaaConfig.detailLatest) {
    uaaCss = uaaCss.replace(/\/\*UAA:D1:START\*\/[\s\S]*?\/\*UAA:D1:END\*\//g, "");
    uaaCss = uaaCss.replace(/\/\*UAA:D2:START\*\/[\s\S]*?\/\*UAA:D2:END\*\//g, "");
    uaaCss = uaaCss.replace(/\/\*UAA:D3:START\*\/[\s\S]*?\/\*UAA:D3:END\*\//g, "");
  }
  if (!uaaConfig.favTabs) {
    uaaCss = uaaCss.replace(/\/\*UAA:TAB:START\*\/[\s\S]*?\/\*UAA:TAB:END\*\//g, "");
  }
  GM_addStyle(uaaCss);

  /* ===== 本地阅读进度（章节页记录，长期保存） ===== */
  const PROGRESS_KEY = "uaa-read-progress";
  const loadProgress = () => {
    try { return GM_getValue(PROGRESS_KEY, {}) || {}; } catch (error) { return {}; }
  };
  const saveProgress = (map) => {
    try { GM_setValue(PROGRESS_KEY, map); } catch (error) {}
  };
  /* ===== 阅读进度同步（坚果云 WebDAV） ===== */
  const SYNC_KEY = "uaa-webdav";
  const loadSyncConfig = () => {
    try { return GM_getValue(SYNC_KEY, {}) || {}; } catch (error) { return {}; }
  };
  const saveSyncConfig = (patch) => {
    const next = Object.assign({}, loadSyncConfig(), patch);
    try { GM_setValue(SYNC_KEY, next); } catch (error) {}
    return next;
  };
  const syncConfigured = () => {
    const cfg = loadSyncConfig();
    return !!(cfg.url && cfg.user && cfg.pass && cfg.enabled !== false);
  };
  const mergeProgress = (current, incoming) => {
    Object.keys(incoming || {}).forEach((id) => {
      const item = incoming[id];
      if (!item || typeof item !== "object") return;
      const previous = current[id];
      const no = Number(item.no) || 0;
      if (!previous || (Number(item.ts) || 0) > (Number(previous.ts) || 0)) {
        current[id] = { no, title: item.title || "", ts: Number(item.ts) || Date.now() };
      }
    });
    return current;
  };
  const webdavRequest = (method, payload, urlOverride, timeoutMs) => new Promise((resolve, reject) => {
    const cfg = loadSyncConfig();
    const target = urlOverride || cfg.url;
    if (!target || !cfg.user || !cfg.pass) return reject(new Error("WebDAV 未配置"));
    const headers = { Authorization: "Basic " + btoa(cfg.user + ":" + cfg.pass) };
    if (payload != null) headers["Content-Type"] = "application/json";
    const limit = timeoutMs || 15000;
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error("请求超时（" + method + "，" + Math.round(limit / 1000) + " 秒）"));
    }, limit);
    const finish = (fn) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      fn();
    };
    GM_xmlhttpRequest({
      method,
      url: target,
      headers,
      data: payload == null ? undefined : payload,
      timeout: limit,
      onload: (res) => finish(() => resolve(res)),
      ontimeout: () => finish(() => reject(new Error("请求超时（" + method + "）"))),
      onerror: () => finish(() => reject(new Error("网络错误（" + method + "）：请确认 ScriptCat 已允许访问 dav.jianguoyun.com"))),
    });
  });
  const pullRemote = async () => {
    try {
      const res = await webdavRequest("GET");
      if (res.status === 404) return {};
      if (res.status !== 200) return null;
      const parsed = JSON.parse(res.responseText || "{}");
      return parsed.progress || parsed || {};
    } catch (error) { return null; }
  };
  const ensureParentDir = async () => {
    const cfg = loadSyncConfig();
    if (!cfg.url) return;
    let url;
    try { url = new URL(cfg.url); } catch (error) { return; }
    const dir = url.pathname.replace(/[^/]*$/, "");
    if (!dir || dir === "/" || dir === "/dav/") return;
    const dirUrl = url.origin + dir;
    try {
      const res = await webdavRequest("MKCOL", null, dirUrl, 5000);
      if (res.status === 401) throw new Error("账号或应用密码错误");
    } catch (error) {
      if (error && error.message === "账号或应用密码错误") throw error;
      // MKCOL 不被某些脚本管理器支持时忽略，由后续 PUT 的结果兜底。
    }
  };
  const pushRemote = async () => {
    await ensureParentDir();
    const progress = loadProgress();
    const res = await webdavRequest("PUT", JSON.stringify({ exportedAt: new Date().toISOString(), progress }, null, 2));
    if (res.status >= 200 && res.status < 300) return true;
    if (res.status === 401) throw new Error("账号或应用密码错误");
    if (res.status === 404) throw new Error("路径不存在（HTTP 404）：请确认 WebDAV 地址在坚果云中可写，例如 https://dav.jianguoyun.com/dav/uaa/uaa-read-progress.json");
    throw new Error("HTTP " + res.status);
  };
  const syncProgress = async (direction) => {
    const needPull = direction === "pull" || direction === "both";
    const needPush = direction === "push" || direction === "both";
    let remote = null;
    if (needPull || needPush) {
      remote = await pullRemote();
      if (remote) {
        const current = loadProgress();
        mergeProgress(current, remote);
        saveProgress(current);
      }
    }
    if (needPush) {
      if (remote === null) {
        throw new Error("读取远程记录失败，已取消上传以避免覆盖；请检查网络或权限");
      }
      await ensureParentDir();
      await pushRemote();
    }
    return loadProgress();
  };
  let syncTimer = null;
  const scheduleSync = () => {
    if (!syncConfigured()) return;
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = setTimeout(() => { syncProgress("push").catch(() => {}); }, 2000);
  };

  const recordChapterProgress = () => {
    if (!uaaConfig.localProgress) return;
    if (location.pathname.replace(/\/+$/, "") !== "/novel/chapter") return;
    const pageWindow = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
    let attempts = 0;
    const timer = setInterval(() => {
      const chapter = pageWindow.UAA_CHAPTER;
      if (chapter && chapter.novelId) {
        clearInterval(timer);
        const map = loadProgress();
        const no = Number(chapter.no || 0);
        map[chapter.novelId] = { no, title: chapter.title || "", ts: Date.now() };
        saveProgress(map);
        scheduleSync();
        return;
      }
      if (++attempts > 40) clearInterval(timer);
    }, 250);
  };
  recordChapterProgress();

  /* ===== 收藏页分类：本地进度 + 服务器历史，支持跨页全量 ===== */
  (function initFavTabs() {
    const path = location.pathname.replace(/\/+$/, "");
    if (path !== "/member/collect.html" && path !== "/member/collect") return;
    if (!uaaConfig.favTabs) return;

    const uidKey = Object.keys(localStorage).find((key) => key.startsWith("uaa_dsync:"));
    const cacheKey = "uaa-fav-history:" + (uidKey ? uidKey.split(":")[1] : "anon");
    const TTL = 30 * 60 * 1000;
    let localProgress = loadProgress();
    const historyMap = {};

    const chapterNo = (text) => {
      const match = String(text || "").match(/第\s*(\d+)\s*章/);
      return match ? parseInt(match[1], 10) : null;
    };
    const latestOf = (root) => {
      const match = root.textContent.replace(/\s+/g, " ").match(/最新：\s*(第[^（(]{0,60})/);
      return match ? match[1].trim() : null;
    };
    const finishedOf = (card) => {
      const status = card.querySelector(".cn-st");
      return /完结/.test((status ? status.className + " " + status.textContent : "") + card.textContent);
    };
    const cardId = (card) => {
      const idEl = card.querySelector("[data-id]");
      if (idEl) return idEl.getAttribute("data-id");
      const link = card.querySelector('a[href*="/novel/intro"]');
      const match = link && link.getAttribute("href").match(/id=(\d+)/);
      return match ? match[1] : null;
    };

    const classify = (id, latest, finished) => {
      const local = localProgress[id];
      const remote = historyMap[id];
      if (!local && !remote) return "reading";
      const localNo = local ? Number(local.no) || 0 : null;
      const remoteNo = chapterNo(remote);
      const resumeNo = localNo != null ? localNo : remoteNo;
      const latestNo = chapterNo(latest);
      if (resumeNo == null || latestNo == null) return "reading";
      if (resumeNo < latestNo) return "reading";
      return finished ? "finished" : "following";
    };

    const loadHistory = () => new Promise((resolve) => {
      try {
        const cached = GM_getValue(cacheKey, null);
        if (cached && cached.map && cached.ts && Date.now() - cached.ts < TTL) {
          Object.assign(historyMap, cached.map);
          return resolve();
        }
      } catch (error) {}
      const done = () => {
        try { GM_setValue(cacheKey, { ts: Date.now(), map: historyMap }); } catch (error) {}
        resolve();
      };
      const step = (page) => {
        if (page > 10) return done();
        fetch("/member/history?type=1&page=" + page, { credentials: "include" })
          .then((res) => (res.ok ? res.text() : ""))
          .then((html) => {
            if (!html) return done();
            const doc = new DOMParser().parseFromString(html, "text/html");
            const items = doc.querySelectorAll(".hi-item");
            if (!items.length) return done();
            items.forEach((item) => {
              const id = item.getAttribute("data-id");
              const go = item.querySelector(".cn-lact--go");
              if (id && go) historyMap[id] = go.textContent.replace(/^\s*续读\s*/, "").trim();
            });
            step(page + 1);
          })
          .catch(() => done());
      };
      step(1);
    });

    const resumeTextOf = (id) => {
      const local = localProgress[id];
      if (local && local.title) return local.title;
      return historyMap[id] || "";
    };
    const resumeLabel = (text) => (text ? "读到 " + text : "未读");
    const applyCardLayout = (card) => {
      if (card.getAttribute("data-uaa-layout") === "1") return;
      card.setAttribute("data-uaa-layout", "1");
      const mini = card.querySelector(".cl-mini");
      const by = card.querySelector(".cn-lcard__by");
      const foot = card.querySelector(".cn-lcard__foot");
      const chapter = card.querySelector(".cn-lcard__ch");
      if (mini) {
        const firstRow = mini.querySelector(".cl-mini__r");
        if (firstRow) firstRow.style.display = "none";
      }
      if (by && chapter) {
        const line = document.createElement("div");
        line.className = "cn-lcard__by";
        line.textContent = "最新：" + chapter.textContent.trim();
        by.after(line);
        if (foot) foot.style.display = "none";
      }
    };
    const readCard = (card) => {
      const id = cardId(card);
      const resumeText = resumeTextOf(id);
      const clone = card.cloneNode(true);
      const by = clone.querySelector(".cn-lcard__by");
      if (by) by.textContent = resumeLabel(resumeText);
      applyCardLayout(clone);
      return {
        id,
        title: card.getAttribute("data-title") || "",
        latest: latestOf(card),
        finished: finishedOf(card),
        resumeText,
        html: clone.outerHTML,
      };
    };

    const collectCards = () => [...document.querySelectorAll("#favGridN .cl-card")].map(readCard);

    const collectCardsAllPages = () => {
      const links = [...document.querySelectorAll('a[href*="page="]')].map((a) => a.getAttribute("href") || "");
      let maxPage = 1;
      links.forEach((href) => {
        const match = href.match(/[?&]page=(\d+)/);
        if (match) maxPage = Math.max(maxPage, parseInt(match[1], 10));
      });
      const base = "/member/collect?sub=fav&type=1&sort=1&asc=0&keyword=&page=";
      const cards = [];
      let page = 1;
      const step = () => {
        if (page > Math.min(maxPage, 30)) return Promise.resolve(cards);
        return fetch(base + page, { credentials: "include" })
          .then((res) => (res.ok ? res.text() : ""))
          .then((html) => {
            if (!html) return cards;
            const doc = new DOMParser().parseFromString(html, "text/html");
            doc.querySelectorAll("#favGridN .cl-card").forEach((card) => cards.push(readCard(card)));
            page += 1;
            return step();
          })
          .catch(() => cards);
      };
      return step();
    };

    const renderView = (grid, cards, category) => {
      let view = document.getElementById("uaa-fav-all");
      if (!view) {
        view = document.createElement("div");
        view.id = "uaa-fav-all";
        view.className = "cl-grid";
        grid.parentNode.insertBefore(view, grid.nextSibling);
      }
      view.innerHTML = "";
      cards
        .filter((card) => category === "all" || card.category === category)
        .forEach((card) => {
          const holder = document.createElement("div");
          holder.innerHTML = card.html;
          const el = holder.firstElementChild;
          if (el) view.appendChild(el);
        });
      view.querySelectorAll("img[data-src]").forEach((img) => {
        const src = img.getAttribute("data-src");
        if (src) img.src = src;
      });
      return view;
    };

    const applyTab = (grid, cards, key) => {
      const view = renderView(grid, cards, key);
      const showAll = key === "all";
      view.style.display = showAll ? "none" : "";
      grid.style.display = showAll ? "" : "none";
      const pager = document.querySelector(".mc-pager");
      if (pager) pager.style.display = showAll ? "" : "none";
    };

    const buildTabs = (grid, cards) => {
      if (document.querySelector(".uaa-fav-tabs")) return;
      const counts = { all: cards.length, reading: 0, following: 0, finished: 0 };
      cards.forEach((card) => { counts[card.category] += 1; });
      const bar = document.createElement("div");
      bar.className = "uaa-fav-tabs";
      bar.setAttribute("role", "tablist");
      bar.innerHTML = [
        ["reading", "阅读中"],
        ["following", "追更"],
        ["finished", "已读完"],
        ["all", "全部"],
      ]
        .map(([key, text]) => '<button type="button" role="tab" data-uaa-tab="' + key + '" class="' + (key === "reading" ? "is-on" : "") + '">' + text + "<i>" + counts[key] + "</i></button>")
        .join("");
      grid.parentNode.insertBefore(bar, grid);
      bar.addEventListener("click", (event) => {
        const button = event.target.closest("[data-uaa-tab]");
        if (!button) return;
        const key = button.getAttribute("data-uaa-tab");
        bar.querySelectorAll("button").forEach((btn) => btn.classList.toggle("is-on", btn === button));
        applyTab(grid, cards, key);
      });
      applyTab(grid, cards, "reading");
    };

    const run = (grid) => {
      const proceed = () => loadHistory().then(() => {
        localProgress = loadProgress();
        const prepare = uaaConfig.favCrossPage ? collectCardsAllPages() : Promise.resolve(collectCards());
        prepare.then((cards) => {
          cards.forEach((card) => {
            card.category = classify(card.id, card.latest, card.finished);
          });
          grid.querySelectorAll(".cl-card").forEach((card) => {
            const by = card.querySelector(".cn-lcard__by");
            if (by) by.textContent = resumeLabel(resumeTextOf(cardId(card)));
            applyCardLayout(card);
          });
          buildTabs(grid, cards);
        });
      });
      if (syncConfigured()) {
        syncProgress("pull").catch(() => {}).then(proceed);
      } else {
        proceed();
      }
    };

    const waitForGrid = () => {
      const grid = document.getElementById("favGridN");
      if (grid) return run(grid);
      const timer = setInterval(() => {
        const found = document.getElementById("favGridN");
        if (found) {
          clearInterval(timer);
          run(found);
        }
      }, 300);
      setTimeout(() => clearInterval(timer), 10000);
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", waitForGrid);
    } else {
      waitForGrid();
    }
  })();

  /* ===== UAA 设置面板（脚本菜单打开） ===== */
  (function initSettings() {
    const GROUPS = [
      {
        title: "收藏页",
        open: false,
        fields: [
          ["favTabs", "收藏页分类 Tab（阅读中 / 追更 / 已读完）"],
          ["favCrossPage", "收藏页跨页统计（Tab 计数覆盖全部收藏，不限当前页）"],
          ["favCompact", "收藏页手机端紧凑布局（三列 / 隐藏统计 / 缩小封面）"],
          ["detailLatest", "详情页「最新：」行样式（缩小封面、去掉箭头、时间同行）"],
          ["localProgress", "本地阅读进度（章节页记录，长期保存，不受服务器 90 天限制）"],
        ],
        extra:
          '<div class="uaa-settings__foot">' +
          '<button type="button" data-uaa-export>导出阅读记录</button>' +
          '<button type="button" data-uaa-import>导入阅读记录</button>' +
          "</div>" +
          '<div class="uaa-settings__foot">' +
          '<button type="button" data-uaa-clear>清除本地阅读记录</button>' +
          "</div>",
      },
    ];
    const open = () => {
      const davConfig = loadSyncConfig();
      let panel = document.getElementById("uaa-settings");
      if (!panel) {
        panel = document.createElement("div");
        panel.id = "uaa-settings";
        const rowOf = ([key, label]) => '<label class="uaa-settings__row"><input type="checkbox" data-uaa-field="' + key + '"' + (uaaConfig[key] ? " checked" : "") + '><span>' + label + "</span></label>";
        panel.innerHTML =
          '<div class="uaa-settings__mask"></div>' +
          '<div class="uaa-settings__panel">' +
          '<div class="uaa-settings__head"><b>UAA 脚本设置</b><button type="button" data-uaa-close aria-label="关闭">×</button></div>' +
          GROUPS.map((group) =>
            '<details class="uaa-settings__group"' + (group.open ? " open" : "") + '>' +
            "<summary>" + group.title + "</summary>" +
            group.fields.map(rowOf).join("") +
            (group.extra || "") +
            "</details>"
          ).join("") +
          '<details class="uaa-settings__group"><summary>同步（坚果云 WebDAV）</summary>' +
          '<label class="uaa-settings__field"><span>WebDAV 文件地址</span><input type="text" data-uaa-dav="url" value="' + (davConfig.url || "https://dav.jianguoyun.com/dav/uaa/uaa-read-progress.json") + '"></label>' +
          '<label class="uaa-settings__field"><span>账号（坚果云邮箱）</span><input type="text" data-uaa-dav="user" value="' + (davConfig.user || "") + '"></label>' +
          '<label class="uaa-settings__field"><span>应用密码（在坚果云安全选项中生成，不是登录密码）</span><input type="password" data-uaa-dav="pass" value="' + (davConfig.pass || "") + '"></label>' +
          '<label class="uaa-settings__row"><input type="checkbox" data-uaa-dav="enabled"' + (davConfig.enabled !== false ? " checked" : "") + '><span>自动同步（章节页记录后上传，收藏页打开时拉取）</span></label>' +
          '<div class="uaa-settings__foot"><button type="button" data-uaa-sync>立即同步</button></div>' +
          "</details>" +
          '<div class="uaa-settings__foot">' +
          '<button type="button" data-uaa-save>保存并刷新</button>' +
          "</div>" +
          '<input type="file" accept=".json,application/json" data-uaa-file hidden>' +
          '<div class="uaa-settings__note">保存后页面会刷新，开关立即生效。</div>' +
          "</div>";
        document.body.appendChild(panel);
        panel.querySelector("[data-uaa-close]").addEventListener("click", () => { panel.style.display = "none"; });
        panel.querySelector(".uaa-settings__mask").addEventListener("click", () => { panel.style.display = "none"; });
        panel.querySelector("[data-uaa-save]").addEventListener("click", () => {
          const patch = {};
          panel.querySelectorAll("[data-uaa-field]").forEach((input) => {
            patch[input.getAttribute("data-uaa-field")] = input.checked;
          });
          const dav = {};
          panel.querySelectorAll("[data-uaa-dav]").forEach((input) => {
            const key = input.getAttribute("data-uaa-dav");
            dav[key] = input.type === "checkbox" ? input.checked : input.value.trim();
          });
          saveSyncConfig(dav);
          saveUaaConfig(patch);
          location.reload();
        });
        panel.querySelector("[data-uaa-clear]").addEventListener("click", () => {
          saveProgress({});
          panel.querySelector(".uaa-settings__note").textContent = "本地阅读记录已清除。";
        });
        panel.querySelector("[data-uaa-export]").addEventListener("click", () => {
          const data = { exportedAt: new Date().toISOString(), progress: loadProgress() };
          const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "uaa-read-progress-" + new Date().toISOString().slice(0, 10) + ".json";
          document.body.appendChild(link);
          link.click();
          link.remove();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
          panel.querySelector(".uaa-settings__note").textContent = "已导出，保存到 OneDrive 文件夹后可在其他设备导入。";
        });
        const fileInput = panel.querySelector("[data-uaa-file]");
        panel.querySelector("[data-uaa-import]").addEventListener("click", () => fileInput.click());
        fileInput.addEventListener("change", () => {
          const file = fileInput.files && fileInput.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = () => {
            try {
              const parsed = JSON.parse(String(reader.result || "{}"));
              const progress = parsed.progress || parsed;
              const current = loadProgress();
              Object.keys(progress || {}).forEach((id) => {
                const item = progress[id];
                if (!item || typeof item !== "object") return;
                const previous = current[id];
                const no = Number(item.no) || 0;
                if (!previous || (Number(item.ts) || 0) > (Number(previous.ts) || 0)) {
                  current[id] = { no, title: item.title || "", ts: Number(item.ts) || Date.now() };
                }
              });
              saveProgress(current);
              panel.querySelector(".uaa-settings__note").textContent = "已导入并合并，共 " + Object.keys(current).length + " 本书的记录。";
            } catch (error) {
              panel.querySelector(".uaa-settings__note").textContent = "导入失败：文件不是有效的 JSON。";
            }
          };
          reader.readAsText(file);
          fileInput.value = "";
        });
        let syncing = false;
        panel.querySelector("[data-uaa-sync]").addEventListener("click", () => {
          if (syncing) return;
          syncing = true;
          const dav = {};
          panel.querySelectorAll("[data-uaa-dav]").forEach((input) => {
            const key = input.getAttribute("data-uaa-dav");
            dav[key] = input.type === "checkbox" ? input.checked : input.value.trim();
          });
          saveSyncConfig(dav);
          const note = panel.querySelector(".uaa-settings__note");
          note.textContent = "正在同步…";
          syncProgress("both").then(() => {
            note.textContent = "同步完成，共 " + Object.keys(loadProgress()).length + " 本书的记录。";
          }).catch((error) => {
            note.textContent = "同步失败：" + error.message;
          }).then(() => {
            syncing = false;
          });
        });
      }
      panel.style.display = "flex";
    };
    if (typeof GM_registerMenuCommand === "function") {
      try { GM_registerMenuCommand("UAA 设置", open); } catch (error) {}
    }
  })();
})();