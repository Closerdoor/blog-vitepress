# blog-vitepress

## 当前定位

该仓库是原 `vuepress-blog` 仓库重命名后的延续仓库，当前目标是将已有博客站点从 `VuePress` 迁移到 `VitePress`。

## 当前已确认结论

1. 仓库正式名称为 `blog-vitepress`。
2. 现阶段优先完成框架迁移，不先拆分内容。
3. 当前仓库中的全部 Markdown 笔记内容都先保留在这个站点内。
4. 迁移过程中不以“三个站点职责拆分”为前置条件，先保证旧站能平稳迁移到 `VitePress`。
5. 仓库根目录的 `README.md` 仅作为仓库说明文档使用，不影响博客站点首页。

## 当前代码状态

1. 站点当前仍是 `VuePress` 项目，尚未正式迁移完成。
2. 当前脚本仍使用 `VuePress`：
   - `npm run docs:dev`
   - `npm run docs:build`
3. 当前部署脚本 `deploy.sh` 仍是旧的 `VuePress` 发布方式。
4. 当前博客首页文件仍是 `docs/README.md`，不应误改为仓库说明。

## 迁移目标

接下来将逐步完成以下事项：

1. 将博客框架从 `VuePress` 迁移为 `VitePress`。
2. 保留现有全部 Markdown 笔记、目录结构和主要内容入口。
3. 把站点配置中的仓库路径改为与新仓库名一致。
4. 重建 `VitePress` 所需的首页、导航、侧边栏和静态资源配置。
5. 逐步替换旧的 `VuePress` 配置、依赖和构建方式。

## GitHub Pages 约束

迁移过程中应尽量保持 GitHub Pages 的仓库侧配置不发生变化，避免提前改动远程发布设置。

如果站点继续以 GitHub Pages 项目页形式部署，则后续 `VitePress` 配置中的 `base` 应使用：

```ts
/blog-vitepress/
```

## 当前已完成事项

1. 远程仓库地址已更新为 `git@github.com:Closerdoor/blog-vitepress.git`。
2. 本地 `main` 已与远程 `origin/main` 完成同步。
3. 已创建迁移前备份分支 `backup/vuepress-before-vitepress`，并推送到远程仓库。

## 后续工作注意事项

1. 当前本地目录已重命名为 `blog-vitepress`，后续工作请以该目录作为根目录。
2. 后续对话如果看不到上层项目中的 `BLOG_SITES_DISCUSSION.md`，请默认以本文件中的结论作为当前仓库工作的直接上下文。
3. 如果需要恢复博客首页，请只修改 `docs/README.md`；如果需要更新仓库说明，请修改根目录 `README.md`。
