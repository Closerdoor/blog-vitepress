---
title: 数据类型判断
date: '2021-12-12'
---

## 适用场景

运行时准确判断值类型，或校验字符串是否为合法 JSON。

## 最小示例

```js
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

function isJsonString(value) {
  if (typeof value !== 'string') return false;

  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

console.log(getType([])); // array
console.log(getType(null)); // null
console.log(isJsonString('{"ok":true}')); // true
console.log(isJsonString('hello')); // false
```

## 说明

- `typeof null` 会返回 `object`，不要单独依赖 `typeof`。
- `JSON.parse` 可同时识别对象、数组、数字、布尔值和 `null`。
