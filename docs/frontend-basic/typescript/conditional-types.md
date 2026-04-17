---
title: 条件类型
author: Closerdoor
date: '2021-12-12'
---

## 核心语法

条件类型根据类型关系返回不同结果，形式类似三元表达式：

```ts
T extends U ? X : Y
```

## 基本用法

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<123>; // false
```

## 与泛型结合

```ts
type ElementType<T> = T extends (infer U)[] ? U : T;

type C = ElementType<string[]>; // string
type D = ElementType<number>; // number
```

## 分布式条件类型

当条件类型作用于联合类型时，会对每个成员分别计算。

```ts
type ToArray<T> = T extends any ? T[] : never;

type Result = ToArray<string | number>;
// string[] | number[]
```

## 常见场景

- 提取数组元素类型
- 根据输入类型返回不同结果类型
- 实现工具类型，如 `Exclude`、`Extract`、`NonNullable`

## 示例

```ts
type NonNullableValue<T> = T extends null | undefined ? never : T;
```

## 注意事项

- 条件类型本身并不复杂，难点通常在联合类型分发和 `infer`。
- 过于复杂的条件类型会降低可读性，应优先保证可维护性。

## 总结

条件类型是 TypeScript 类型编程的核心工具之一，适合表达“如果类型满足某条件，则返回另一种类型”的规则。
