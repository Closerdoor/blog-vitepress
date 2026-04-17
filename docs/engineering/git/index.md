---
title: Git 笔记
author: Closerdoor
date: '2022-07-05'
---

`Git` 是分布式版本控制工具，核心目标是记录历史、协作开发和安全回溯。

## 常用命令

```bash
git init
git clone <repo>
git status
git add .
git commit -m "feat: add feature"
git pull
git push
```

## 分支操作

```bash
git branch
git checkout -b feature/login
git checkout main
git merge feature/login
git push -u origin feature/login
```

## 常见工作区概念

- 工作区：本地正在编辑的文件。
- 暂存区：准备提交的改动。
- 本地仓库：已经提交到 Git 历史中的内容。

## 常见工作流

1. 拉取最新代码。
2. 在当前分支完成修改。
3. 提交变更并编写清晰的提交信息。
4. 推送到远端并发起合并流程。

## 使用建议

- 提交信息尽量描述改动目的，而不是简单罗列文件名。
- 合并前先同步主干分支，减少冲突。
- 谨慎执行 `reset --hard`、`push --force` 等破坏性命令。
- 已跟踪文件想撤销工作区改动，优先考虑 `git restore <file>`。
