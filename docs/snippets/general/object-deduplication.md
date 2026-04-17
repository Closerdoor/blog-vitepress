---
title: 对象数组去重
date: '2021-12-12'
---

## 适用场景

按对象某个字段去重，并保留首次出现的数据。

## 最小示例

```js
function dedupeBy(list, key) {
  const seen = new Set();

  return list.filter((item) => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

const users = [
  { id: 1, name: '小明' },
  { id: 2, name: '小张' },
  { id: 1, name: '小明-重复' },
];

console.log(dedupeBy(users, 'id'));
```

## 说明

- 该写法保留第一条记录。
- 如果要保留最后一条，改用 `Map` 覆盖同键值即可。
