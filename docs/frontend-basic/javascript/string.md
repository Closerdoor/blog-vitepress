---
title: 字符串方法
author: Closerdoor
date: '2021-12-12'
---

## 核心概念

字符串是不可变值。绝大多数字符串方法都会返回新字符串，而不是修改原值。

## 常用方法

### 取字符

```js
str.charAt(0);
str[0];
str.charCodeAt(0);
String.fromCharCode(65); // 'A'
```

### 截取与拼接

```js
str.concat(' world');
str.slice(1, 4);
str.substring(1, 4);
str.substr(1, 3); // 旧 API，不建议新代码使用
```

### 查找

```js
str.indexOf('abc');
str.lastIndexOf('abc');
str.includes('abc');
str.startsWith('ab');
str.endsWith('yz');
```

### 清理与填充

```js
str.trim();
'7'.padStart(3, '0'); // '007'
'7'.padEnd(3, '0'); // '700'
```

### 替换与匹配

```js
str.replace(/a/g, 'b');
str.match(/\d+/g);
str.search(/\d/);
str.split(',');
```

## replace 示例

```js
const name = 'John Smith';
const result = name.replace(/(\w+)\s(\w+)/, '$2, $1');
// Smith, John
```

## 转义字符

| 字符 | 含义 |
| --- | --- |
| `\n` | 换行 |
| `\t` | 制表符 |
| `\\` | 反斜杠 |
| `\'` | 单引号 |
| `\"` | 双引号 |

## 进制转换

```js
parseInt('1111', 2); // 15
(255).toString(16); // 'ff'
```

## 注意事项

- `substr` 已是遗留 API，新代码优先使用 `slice` 或 `substring`。
- `replace` 默认只替换第一个匹配项，批量替换要配合全局正则。

## 总结

字符串操作可以按“查找、截取、替换、拆分”四类来记忆。
