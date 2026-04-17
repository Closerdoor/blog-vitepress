---
title: 对象方法
author: Closerdoor
date: '2021-12-12'
---

## 基础操作

### 遍历对象

```js
for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    console.log(key, obj[key]);
  }
}
```

### 删除属性

```js
delete obj.name;
```

## 常用方法

```js
Object.is(value1, value2);
Object.freeze(obj);
Object.assign(target, source1, source2);
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
obj.hasOwnProperty('name');
```

## Object.is

`Object.is` 与 `===` 很接近，但有两个差异：

- `Object.is(NaN, NaN)` 为 `true`
- `Object.is(+0, -0)` 为 `false`

## Object.assign

用于浅拷贝和对象合并：

```js
const result = Object.assign({}, { a: 1 }, { b: 2 });
```

如果后面的对象有同名属性，会覆盖前面的值。

## Object.freeze

冻结对象后，不能再新增、删除或修改其自身属性。

```js
const config = Object.freeze({ env: 'prod' });
```

对于引用类型，`freeze` 会冻结对象本身的属性写入，但不会自动深冻结每一层嵌套对象。

## 注意事项

- `Object.assign` 是浅拷贝。
- `for...in` 会遍历原型链上的可枚举属性，通常要配合自有属性判断。

## 总结

对象方法的核心价值是控制“读、写、拷贝、比较”这四类基础行为。
