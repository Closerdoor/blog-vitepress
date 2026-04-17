---
title: TypeScript 环境搭建与编译执行
author: Closerdoor
date: '2021-12-12'
---

## 是什么

TypeScript 是 JavaScript 的超集，核心能力是静态类型检查与更好的工程化支持。

## 安装

通常不建议全局安装，项目内安装更稳妥：

```bash
npm install -D typescript
```

查看版本：

```bash
npx tsc -v
```

## 编译执行

编译单个文件：

```bash
npx tsc ./src/index.ts
```

默认会生成同名 `.js` 文件。

直接运行 `.ts` 文件时，也常用 `ts-node`：

```bash
npm install -D ts-node
npx ts-node ./src/index.ts
```

## 类型注解

```ts
let num: number = 18;
let str: string = 'hello';
let isDone: boolean = false;
let u: undefined = undefined;
let n: null = null;
```

## 数组、对象、接口

```ts
const names: string[] = ['a', 'b'];

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 18,
};

interface IUser {
  name: string;
  age: number;
  sayHi: () => void;
}
```

## DOM 类型断言

默认拿到的 DOM 节点类型比较宽，访问特定属性时常用断言：

```ts
const img = document.querySelector('#image') as HTMLImageElement;
console.log(img.src);
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

## 常用命令

```bash
npx tsc
npx tsc --watch
npx tsc -p ./tsconfig.json
```

## 注意事项

- `watch` 是命令行参数，不应写在 `compilerOptions` 中。
- 新项目通常建议开启 `strict`。
- 在打包项目里，编译往往交给 Vite、Webpack 或构建工具链处理。

## 总结

学习 TypeScript 的第一步是先把编译链路跑通，再逐步理解类型系统。
