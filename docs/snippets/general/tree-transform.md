---
title: 扁平/树形结构转换
author: Closerdoor
date: '2021-12-12'
---

## 扁平结构转换成树形结构(带排序)
```js
// 扁平结构转化成树形结构
/**
 * @param {Array} list
 * @returns {Array}
 */
export function transformTree(list) {
  const tree = []
  //'root'表示根节点id
  for (let i = 0, len = list.length; i < len; i++) {
    if (list[i].parentExtra === 'root' || !(list.some(item => item.extra === list[i].parentExtra))) {
      const item = queryChildren(list[i], list)
      tree.push(item)
    }
  }
  //排序处理
  const data = treeSort(tree, 'sort')
  return data
}

function queryChildren(parent, list) {
  const children = []

  for (let i = 0, len = list.length; i < len; i++) {
    if (list[i].parentExtra === parent.extra) {
      const item = queryChildren(list[i], list)
      children.push(item)
    }
  }
  if (children.length) {
    parent.children = children
  }
  return parent
}
// 树形结构排序处理
function treeSort(arr, sortName) { // sortName 表示用来排序的字段
  arr.sort((a, b) => a[sortName] - b[sortName]).forEach((item) => {
    if (item.children) {
      treeSort(item.children, sortName)
    }
  })
  return arr
}
```