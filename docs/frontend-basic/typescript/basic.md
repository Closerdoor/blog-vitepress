---
title: 环境搭建与编译执行
author: Closerdoor
date: '2021-12-12'
---

## 需要先安装node.js
## 安装 `TypeScript` 编译器
通过 `NPM` 包管理工具安装 `TypeScript` 编译器
```shell
npm i -g typescript
```

安装完成以后，我们可以通过命令 `tsc` 来调用编译器
```shell
# 查看当前 tsc 编译器版本
tsc -v
```
## 编译执行

使用我们安装的 `TypeScript` 编译器 `tsc` 对 `.ts` 文件进行编译
```shell
tsc ./src/test.ts
```

默认情况下会在当前文件所在目录下生成同名的 `js` 文件

## 编译配置文件

我们可以把编译的一些选项保存在一个指定的 `json` 文件中，默认情况下 `tsc` 命令运行的时候会自动去加载运行命令所在的目录下的 `tsconfig.json` 文件，配置文件格式如下

```json
{
	"compilerOptions": {
		"outDir": "./dist",//指定编译文件输出目录
		"target": "ES2015",//指定编译的代码版本目标，默认为 `ES3`
    "watch": true,//在监听模式下运行，当文件发生改变的时候自动编译
	},
  // ** : 所有目录（包括子目录）
  // * : 所有文件，也可以指定类型 *.ts
  "include": ["./src/**/*"]
}
```

有了单独的配置文件，我们就可以直接运行

```shell
tsc
```

### 指定加载的配置文件