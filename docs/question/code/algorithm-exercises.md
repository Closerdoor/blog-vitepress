---
title: 常见算法练习题
date: '2026-04-17'
category: question
description: 排序、去重、质因数分解与字符串拆分等基础练习。
---

## 1. 多个数字从小到大排序

### 冒泡排序

```js
function bubbleSort(...args) {
  const arr = [...args];

  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
```

### 选择排序

```js
function selectSort(...args) {
  const arr = [...args];

  for (let i = 0; i < arr.length - 1; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}
```

## 2. 判断一个数是不是质数

```js
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
```

如果题目要求判断合数，只要把结果反过来即可。

## 3. 找出数组中重复出现的元素

```js
function duplicates(arr) {
  return arr.reduce((result, current, index, list) => {
    if (list.indexOf(current) !== list.lastIndexOf(current) && !result.includes(current)) {
      result.push(current);
    }

    return result;
  }, []);
}
```

## 4. 数组去重

### 保留一份

```js
function unique(arr) {
  return [...new Set(arr)];
}
```

### 去掉所有重复项本身

例如 `[1, 2, 2, 3, 3, 4]` 最终返回 `[1, 4]`。

```js
function removeRepeat(arr) {
  const countMap = new Map();

  arr.forEach((item) => {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  });

  return arr.filter((item) => countMap.get(item) === 1);
}
```

## 5. 生成 n 位验证码

```js
function testCode(n) {
  const result = [];

  while (result.length < n) {
    const code = Math.floor(Math.random() * 123);

    if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      result.push(String.fromCharCode(code));
    }
  }

  return result.join('');
}
```

## 6. 输出一个整数的所有质因子

例如 `180` 输出 `2 2 3 3 5`。

```js
function primeFactors(num) {
  const result = [];

  for (let i = 2; i * i <= num; i += 1) {
    while (num % i === 0) {
      result.push(i);
      num /= i;
    }
  }

  if (num > 1) {
    result.push(num);
  }

  return result;
}
```

## 7. 去除数组中的假值

```js
function bouncer(arr) {
  return arr.filter(Boolean);
}
```

会被过滤掉的典型值：

- `''`
- `false`
- `null`
- `undefined`
- `NaN`
- `0`

## 8. 删除数组中指定元素

```js
function destroyer(arr, ...rest) {
  return arr.filter((item) => !rest.includes(item));
}
```

## 9. 按长度 8 拆分字符串

长度不足 `8` 时，末尾补 `0`。

```js
function splitByEight(str) {
  if (!str) return [];

  const result = [];
  let value = str;

  while (value.length % 8 !== 0) {
    value += '0';
  }

  for (let i = 0; i < value.length; i += 8) {
    result.push(value.slice(i, i + 8));
  }

  return result;
}
```

## 10. 统计子串出现次数

```js
function countOfStr(str, subStr) {
  return str.split(subStr).length - 1;
}
```

## 11. 求多个数组的对称差

```js
function sym(...args) {
  function symDiff(arr1, arr2) {
    const result = [];

    arr1.forEach((item) => {
      if (!arr2.includes(item) && !result.includes(item)) {
        result.push(item);
      }
    });

    arr2.forEach((item) => {
      if (!arr1.includes(item) && !result.includes(item)) {
        result.push(item);
      }
    });

    return result;
  }

  return args.reduce(symDiff);
}
```

## 刷题建议

- 先写正确解，再考虑简化。
- 先处理边界值，再写主流程。
- 能用 `Set`、`Map` 时，通常比手写双循环更清晰。
- 面试里比“写得多快”更重要的是能解释时间复杂度和取舍。

## 总结

这类题的共通点是：数据结构不复杂，但很考验基本功。排序、去重、计数、分组、遍历边界，都是后续更复杂算法题的基础。
