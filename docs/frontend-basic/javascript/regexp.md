---
title: 正则表达式
author: Closerdoor
date: '2021-12-12'
---

## 创建方式

```js
/ab+c/i;
new RegExp('ab+c', 'i');
```

## 常用方法

### RegExp 方法

```js
/\d/.test('abc1'); // true
/\d/.exec('abc1'); // ['1']
```

### String 方法

```js
'abc123'.match(/\d+/);
'abc123'.replace(/\d+/, '');
'a1b2c3'.split(/\d/);
'abc123'.search(/\d/);
```

## 常见元字符

```js
\d // 数字
\w // 字母、数字、下划线
\s // 空白字符
.  // 任意字符（默认不含换行）
^  // 开头
$  // 结尾
```

## 量词

```js
a? // 0 或 1 次
a* // 0 次或多次
a+ // 1 次或多次
a{2} // 2 次
a{2,4} // 2 到 4 次
```

## 捕获与分组

```js
const result = '2026-04-17'.match(/(\d{4})-(\d{2})-(\d{2})/);
// result[1] => 2026
```

## 示例

### 校验整数

```js
function filterInt(value) {
  return /^[-+]?\d+$/.test(value) ? Number(value) : NaN;
}
```

### 保留两位小数

```js
const value = 12.3456;
value.toFixed(2); // '12.35'
```

## 注意事项

- 带 `g` 标记的正则在重复 `test` 时会受 `lastIndex` 影响。
- 正则适合文本模式匹配，不适合复杂语义解析。

## `lastIndex` 陷阱

带全局标记 `g` 的正则在连续调用 `test()` 或 `exec()` 时，会从上一次匹配结束位置继续查找。

```js
const reg = /mrlp/gi;

reg.test('3206064928:MRLP:3206064928'); // true
reg.lastIndex; // 15

reg.test('MRLP'); // false，受 lastIndex 影响
reg.lastIndex = 0;
reg.test('MRLP'); // true
```

## `replace` 回调

`replace` 的第二个参数除了字符串，还可以是函数：

```js
'我是{{name}}，今年{{age}}岁'.replace(/\{\{(.*?)\}\}/g, (match, key) => {
  const data = { name: 'leaf', age: 20 };
  return data[key.trim()];
});
```

## 常见案例

### 首字母大写

```js
function upperCaseWords(str) {
  return str.toLowerCase().replace(/(\s|^)[a-z]/g, (s) => s.toUpperCase());
}
```

### 驼峰转换

```js
function cssStyle2DomStyle(name) {
  return name.replace(/-(.)/g, (match, char, index) => {
    return index === 0 ? char : char.toUpperCase();
  });
}

cssStyle2DomStyle('-webkit-border-image');
// webkitBorderImage
```

### `rgb()` 转十六进制

```js
function rgb2hex(value) {
  return value.replace(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i, (match, r, g, b) => {
    const hex = (n) => String(Number(n).toString(16)).padStart(2, '0');
    return `#${hex(r)}${hex(g)}${hex(b)}`;
  });
}
```

### 邮箱和手机号校验

```js
const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/;
const regMobile = /^(0|86|17951)?(13\d|15\d|17[678]|18\d|14[57])\d{8}$/;
```

## 总结

正则的关键不是语法全记住，而是能准确描述边界、重复次数和分组关系。
