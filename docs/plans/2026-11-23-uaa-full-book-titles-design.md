# UAA 书名完整显示与卡片自适应设计

## 目标

在 UAA 首页、频道页和小说列表页完整显示书名，取消省略号和行数限制；标题变高时，所属卡片同步增高，避免覆盖作者、评分和其他元数据。

## 页面结构依据

真实浏览器检查确认：

- 小说列表卡片为 `a.cn-lcard[href*="/novel/intro"]`，标题为 `.cn-lcard__t`。
- 首页小说海报为 `a.cn-poster[href*="/novel/intro"]`，可见标题位于 `.cn-poster__cap .t`，封面浮层标题位于 `.cn-poster__info .t`。
- 列表标题使用 `white-space: nowrap` 与 `text-overflow: ellipsis`；海报标题使用 `-webkit-line-clamp: 1` 或 `2`。

## 方案

脚本在 `document-start` 使用 `GM_addStyle` 注入高优先级 CSS。标题改为正常换行并取消 overflow、ellipsis 和 line-clamp；标题行、内容列和卡片改为自动高度。CSS 天然覆盖后来插入的节点，因此无需 MutationObserver，也不对页面数据或事件处理做任何修改。

域名范围使用显式 `@match` 覆盖 `vip261112.com`，使用正则 `@include` 覆盖 `uaa.com`、`uaa001.com` 等以 `uaa` 开头的 `.com` 镜像及子域名。

## 验证标准

1. Node 语法检查与 ScriptCat 静态检查无错误。
2. 首页和小说列表页实装后，目标标题计算样式不再使用 `nowrap`、ellipsis 或 line-clamp。
3. 最长标题的 `scrollHeight` 不超过 `clientHeight`，且卡片高度随标题增加。
4. ScriptCat 控制台无脚本相关警告或异常。
