---
title: 数据类型判断
author: Closerdoor
date: '2021-12-12'
---

## 判断字符串是否为JSON
```js
function isJSON(str) {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == 'object' && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            // console.log('error：' + str + '!!!' + e);
            return false;
        }
    }
    console.log('It is not a string!')
    return false
}
```