---
title: Windows 开发环境初始化
date: '2026-04-17'
description: 基于 nvm-windows 初始化 Node.js、NPM 与常见前端项目运行环境。
---

## 适用场景

这篇适合用于一台新的 Windows 开发机做前端环境初始化，重点是：

- 管理多个 Node.js 版本
- 统一 NPM 源
- 快速拉起前端项目

## 1. 安装编辑器

优先准备好 `VS Code`，后续命令行、扩展和项目调试都会用到。

## 2. 安装 `nvm-windows`

建议使用 `nvm-windows` 管理 Node.js 版本，而不是手动覆盖安装。

下载地址：

```text
https://github.com/coreybutler/nvm-windows/releases
```

通常直接使用安装版即可。

## 3. 配置安装目录

示例配置：

```text
root: D:\dev\nvm
path: D:\dev\nodejs
arch: 64
proxy: none
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

关键点：

- `root` 是 `nvm` 本体目录。
- `path` 是当前启用 Node.js 版本的软链接目录。
- 镜像源建议使用当前仍可用的 `npmmirror`。

## 4. 环境变量

常见变量如下：

```text
NVM_HOME=D:\dev\nvm
NVM_SYMLINK=D:\dev\nodejs
```

然后把这两个路径加入 `Path`。

## 5. 常用命令

```bash
nvm -v
nvm list
nvm install 18.20.0
nvm install latest
nvm use 18.20.0
node -v
npm -v
```

日常原则：

- 新项目优先用 LTS 版本。
- 不同项目要求不同 Node 版本时，用 `nvm use` 切换。

## 6. 配置 NPM 源

```bash
npm config set registry https://registry.npmmirror.com/
npm config get registry
```

如果后续要发布包，再根据需要切回官方源。

## 7. 是否需要 `cnpm`

通常不再建议默认安装 `cnpm`。

原因很简单：

- 多一层工具，会增加团队环境差异。
- 大部分项目只用 `npm`、`pnpm` 或 `yarn` 即可。

除非项目明确要求，否则优先保持原生工具链。

## 8. 拉起一个前端项目

拿到项目后，通常只需要：

```bash
npm install
npm run dev
```

如果项目使用的是其他脚本名，例如 `start`，以 `package.json` 为准。

## 9. 如何看待 `npm audit`

`npm audit` 可以作为参考，但不要把它当成机械执行命令。

更稳妥的做法是：

- 先看漏洞是否落在生产依赖。
- 再看升级是否会引入 breaking change。
- 不要默认执行 `npm audit fix --force`。

## 总结

Windows 前端环境初始化的关键不是“装得多”，而是把版本管理、镜像源和项目启动链路先稳定下来。只要 `nvm + Node.js + npm` 这条主链是干净的，后续维护会轻松很多。
