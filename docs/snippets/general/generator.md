---
title: Generator生成器
author: Closerdoor
date: "2023-06-10"
---

## function\*

用 function \*定义的函数称之为生成器函数，返回一个不能直接使用的 Generator 对象，但可以调用 next() 方法来使用。

```js
// 语法
function* name([param[, param[, ... param]]]) { statements }
```

生成器函数在执行时能暂停，后面又能从暂停处继续执行。

调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的 迭代器 （ iterator ）对象。当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现 yield 的位置为止，yield 后紧跟迭代器要返回的值。或者如果用的是 yield\*（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。

next()方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 yield 表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有 yield 语句，即生成器函数是否已经执行完毕并返回。

调用 next()方法时，如果传入了参数，那么这个参数会传给上一条执行的 yield 语句左边的变量，例如下面例子中的 x：

## 用例

### 生成斐波那契数列

题目：请你编写一个生成器函数，并返回一个可以生成 斐波那契数列 的生成器对象。

斐波那契数列 的递推公式为 Xn = Xn-1 + Xn-2 。

这个数列的前几个数字是 0, 1, 1, 2, 3, 5, 8, 13 。

```js
/**
 * 迭代法
 */
var fibGenerator = function* () {
  let pre = 0,
    cur = 1;
  yield pre;
  yield cur;
  while (true) {
    yield pre + cur;
    [pre, cur] = [cur, pre + cur];
  }
};
/** 递归 */
var fibGenerator = function* () {
  let pre = arguments[0] || 0;
  cur = arguments[1] || 1;
  yield pre;
  return yield* fibGenerator(cur, pre + cur);
};
/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
```

### 嵌套生成器

题目：现给定一个整数的 多维数组 ，请你返回一个生成器对象，按照   中序遍历 的顺序逐个生成整数。

多维数组 是一个递归数据结构，包含整数和其他 多维数组。

中序遍历 是从左到右遍历每个数组，在遇到任何整数时生成它，遇到任何数组时递归应用 中序遍历

```js
var inorderTraversal = function* (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      yield* inorderTraversal(arr[i]);
    } else {
      yield arr[i];
    }
  }
};
/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
```
