// ==UserScript==
// @name         UAA 书名完整显示与卡片自适应
// @namespace    https://github.com/lingyuncrystal/uaa-full-book-titles
// @version      1.3.0
// @description  完整显示 UAA 小说书名，并让列表与首页书籍卡片随长标题自动增高；收藏页可按阅读中/追更/已读完分类。
// @author       Alan
// @icon         data:image/x-icon;base64,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AAAAAAAAAAr8AgAK+90ACvz7AAr8/wAK/P8ACvz/AAn6+QABMEoAAAAmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr7BgAK/BoACvwyAAr7UgAK/HQACfyXAAr8MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////4B///4AD//4AAf/8A4D/+A/gf/gP8D/wH/g/8B/4H/Af+B/wH/wf8B/8H/AP/A/wD/wP8A/8D/AP/g/wD/4H8A/+B/AP/gfwD/8D8A//A/AH/wPwB/8D8Af/gfAH/4H4P/+B/////f///////////////8=
// @downloadURL  https://raw.githubusercontent.com/lingyuncrystal/uaa-full-book-titles/main/uaa-full-book-titles.user.js
// @updateURL    https://raw.githubusercontent.com/lingyuncrystal/uaa-full-book-titles/main/uaa-full-book-titles.user.js
// @match        *://vip261112.com/*
// @match        *://*.vip261112.com/*
// @include      /^https?:\/\/(?:[^/]+\.)?uaa[a-z0-9-]*\.com(?::\d+)?(?:\/|$)/
// @run-at       document-start
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
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

    #detail .nd-latest .tm {
      margin-left: 0 !important;
      font-size: 11.5px !important;
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

    /* 收藏页手机端：改为三列紧凑卡片，PC 端保留站点原始布局。 */
    @media (max-width: 767px) {
      #favGridN.cl-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 10px !important;
      }

      #favGridN.cl-grid .cl-card {
        display: flex !important;
        flex-direction: column !important;
        min-width: 0 !important;
        width: 100% !important;
        height: auto !important;
        box-sizing: border-box !important;
        padding: 8px !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__cv {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 2 / 3 !important;
        min-width: 0 !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__cv img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__in {
        width: 100% !important;
        min-width: 0 !important;
        height: auto !important;
        padding-top: 5px !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__t {
        font-size: clamp(11px, 2.2vw, 16px) !important;
        line-height: 1.25 !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__by,
      #favGridN.cl-grid .cl-card .cn-lcard__cats {
        font-size: clamp(9px, 1.7vw, 11px) !important;
        line-height: 1.2 !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__catlink {
        font-size: inherit !important;
        line-height: inherit !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__by {
        display: block !important;
        min-width: 0 !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__meta {
        display: none !important;
      }

      #favGridN.cl-grid .cl-card .cl-mini__v {
        display: none !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__foot {
        font-size: clamp(10px, 1.9vw, 13px) !important;
        line-height: 1.25 !important;
      }

      #favGridN.cl-grid .cl-card .cn-lcard__d {
        font-size: clamp(10px, 1.8vw, 12px) !important;
        line-height: 1.35 !important;
      }

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
  `);

  /* 收藏页：按观看历史（续读章节）给收藏书分类。 */
  (function initFavTabs() {
    const path = location.pathname.replace(/\/+$/, "");
    if (path !== "/member/collect.html" && path !== "/member/collect") return;

    const uidKey = Object.keys(localStorage).find((key) => key.startsWith("uaa_dsync:"));
    const cacheKey = "uaa-fav-history:" + (uidKey ? uidKey.split(":")[1] : "anon");
    const TTL = 30 * 60 * 1000;

    const chapterNo = (text) => {
      const match = String(text || "").match(/第\s*(\d+)\s*章/);
      return match ? parseInt(match[1], 10) : null;
    };

    const latestOf = (card) => {
      const match = card.textContent.replace(/\s+/g, " ").match(/最新：\s*(第[^（(]{0,60})/);
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

    const classify = (card, map) => {
      const id = cardId(card);
      const resume = id ? map[id] || null : null;
      const latest = latestOf(card);
      const finished = finishedOf(card);
      const resumeNo = chapterNo(resume);
      const latestNo = chapterNo(latest);
      if (!resume) return "reading";
      if (resumeNo != null && latestNo != null) {
        return resumeNo < latestNo ? "reading" : finished ? "finished" : "following";
      }
      if (resume && latest && resume === latest) return finished ? "finished" : "following";
      return "reading";
    };

    const loadHistory = () => new Promise((resolve) => {
      try {
        const cached = GM_getValue(cacheKey, null);
        if (cached && cached.map && cached.ts && Date.now() - cached.ts < TTL) {
          return resolve(cached.map);
        }
      } catch (error) {}

      const map = {};
      const done = () => {
        try {
          GM_setValue(cacheKey, { ts: Date.now(), map });
        } catch (error) {}
        resolve(map);
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
              if (id && go) map[id] = go.textContent.replace(/^\s*续读\s*/, "").trim();
            });
            step(page + 1);
          })
          .catch(() => done());
      };
      step(1);
    });

    const buildTabs = (grid) => {
      if (document.querySelector(".uaa-fav-tabs")) return;
      const counts = { all: 0, reading: 0, following: 0, finished: 0 };
      grid.querySelectorAll(".cl-card").forEach((card) => {
        const category = card.getAttribute("data-uaa-cat") || "reading";
        counts.all += 1;
        counts[category] = (counts[category] || 0) + 1;
      });
      const bar = document.createElement("div");
      bar.className = "uaa-fav-tabs";
      bar.setAttribute("role", "tablist");
      bar.innerHTML = [
        ["all", "全部"],
        ["reading", "阅读中"],
        ["following", "追更"],
        ["finished", "已读完"],
      ]
        .map(([key, text]) => '<button type="button" role="tab" data-uaa-tab="' + key + '" class="' + (key === "all" ? "is-on" : "") + '">' + text + "<i>" + (counts[key] || 0) + "</i></button>")
        .join("");
      grid.parentNode.insertBefore(bar, grid);
      bar.addEventListener("click", (event) => {
        const button = event.target.closest("[data-uaa-tab]");
        if (!button) return;
        const key = button.getAttribute("data-uaa-tab");
        bar.querySelectorAll("button").forEach((btn) => btn.classList.toggle("is-on", btn === button));
        grid.querySelectorAll(".cl-card").forEach((card) => {
          const show = key === "all" || card.getAttribute("data-uaa-cat") === key;
          card.classList.toggle("uaa-hide", !show);
        });
      });
    };

    const run = (grid) => {
      loadHistory().then((map) => {
        if (!map || !Object.keys(map).length) return;
        grid.querySelectorAll(".cl-card").forEach((card) => {
          card.setAttribute("data-uaa-cat", classify(card, map));
        });
        buildTabs(grid);
      });
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
})();
