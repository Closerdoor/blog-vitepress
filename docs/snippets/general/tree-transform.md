---
title: 扁平结构转树形结构
date: '2021-12-12'
---

## 适用场景

把后端返回的扁平列表转换为树，并按 `sort` 字段排序。

## 最小示例

```js
function listToTree(list) {
  const map = new Map(
    list.map((item) => [item.extra, { ...item, children: [] }])
  );
  const tree = [];

  map.forEach((item) => {
    if (item.parentExtra === 'root' || !map.has(item.parentExtra)) {
      tree.push(item);
      return;
    }

    map.get(item.parentExtra).children.push(item);
  });

  function sortTree(nodes) {
    nodes.sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));

    nodes.forEach((node) => {
      if (node.children.length > 0) {
        sortTree(node.children);
      } else {
        delete node.children;
      }
    });
  }

  sortTree(tree);
  return tree;
}
```

## 说明

- 该实现时间复杂度接近 `O(n)`，比递归反复扫描列表更稳定。
- 缺失父节点的数据会被提升为根节点，便于容错。
