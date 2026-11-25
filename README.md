# UAA 书名完整显示与卡片自适应

面向 ScriptCat、Tampermonkey 和 Violentmonkey 的轻量用户脚本，用于完整显示 UAA 小说书名，并让书籍卡片随标题长度自动增高。

## 功能

- 小说列表页：解除单行省略号，长书名自动换行。
- 首页与频道海报：解除一行或两行限制，完整显示长书名。
- 卡片自适应：标题增加行数时，卡片高度随内容增长，不覆盖作者、评分等信息。
- 详情页移动适配：目录左侧“最新：”按窄标签分为两行并左对齐，书名、章节名和推荐书籍章节名完整换行，不再撑出横向滚动条。
- 动态内容兼容：只注入 CSS，分页、筛选及异步加载的新卡片无需额外扫描即可生效。
- 脚本图标：内嵌 UAA 官方图标，不依赖站点网络请求，便于手机端识别。

## 生效范围

- `vip261112.com` 及其子域名。
- `uaa.com`、`uaa001.com`、`uaa002.com` 等以 `uaa` 开头的 `.com` 镜像及其子域名。

## 安装

手机浏览器安装 ScriptCat、Tampermonkey 或 Violentmonkey 后，打开以下地址即可安装：

<https://raw.githubusercontent.com/lingyuncrystal/uaa-full-book-titles/main/uaa-full-book-titles.user.js>

脚本内置固定的下载与更新地址，后续可直接通过脚本管理器检查更新。

## 验证

```bash
npm test
node /Users/Alan/.agents/skills/scriptcat-userscript/scripts/check.mjs uaa-full-book-titles.user.js
```

## 许可证

MIT
