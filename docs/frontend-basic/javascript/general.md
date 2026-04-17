---
title: JavaScript 基础
author: Closerdoor
date: '2021-12-12'
---

## 基本类型

JavaScript 常见基本类型包括：

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `symbol`
- `bigint`

常见假值：`false`、`0`、`''`、`null`、`undefined`、`NaN`。

## 变量声明

### `var`、`let`、`const`

- `var` 存在变量提升，没有块级作用域。
- `let` 和 `const` 有块级作用域，存在暂时性死区。
- `const` 不能重新赋值，但引用类型内部仍可变。

```js
var a = 10;

function fn() {
  console.log(a);
  var a = 20;
}

fn(); // undefined
```

## 类型转换

### String

```js
String(123); // '123'
(123).toString(); // '123'
```

### Number

```js
Number(null); // 0
Number(undefined); // NaN
parseInt('12.3', 10); // 12
parseFloat('12.3px'); // 12.3
```

### `Number`、`parseInt`、`parseFloat` 区别

- `Number()` 更严格，整个字符串都要能转成数字。
- `parseInt()` 适合取整数，遇到非数字就停止。
- `parseFloat()` 支持解析一个小数点。

```js
Number(''); // 0
Number('123abc'); // NaN
parseInt('123abc', 10); // 123
parseFloat('22.3.56'); // 22.3
```

### Boolean

以下值会转为 `false`：

```js
Boolean('');
Boolean(0);
Boolean(null);
Boolean(undefined);
Boolean(NaN);
```

## NaN 与 isFinite

```js
Number.isNaN(NaN); // true
Number.isFinite(10); // true
Number.isFinite(Infinity); // false
```

优先使用 `Number.isNaN`、`Number.isFinite`，避免隐式转换带来的歧义。

## undefined 与 null

- `undefined` 表示未定义。
- `null` 表示有意置空。

```js
let a;
console.log(a); // undefined

const obj = { value: null };
```

## 判断类型

```js
typeof 'abc'; // string
typeof 1; // number
typeof undefined; // undefined
typeof null; // object
Array.isArray([]); // true
Object.prototype.toString.call([]); // [object Array]
```

## 数组与对象

数组本质上也是对象，但更适合处理有序数据。

```js
const arr = ['a', 'b'];
Object.keys(arr); // ['0', '1']
```

引用类型变量保存的是地址，多个变量可能指向同一份数据：

```js
const arr1 = [1, 2];
const arr2 = arr1;

arr1.push(3);
console.log(arr2); // [1, 2, 3]
```

## 比较规则

- `==` 会发生类型转换。
- `===` 不会发生类型转换。
- 日常开发优先使用 `===`。

## 注意事项

- `typeof null === 'object'` 是历史遗留行为。
- `parseInt` 建议始终传入进制参数。
- 数值精度问题在浮点计算中很常见，如 `0.1 + 0.2 !== 0.3`。

## 总结

基础语法最重要的是理解类型系统、转换规则和比较规则，这些直接决定代码是否稳定可控。
