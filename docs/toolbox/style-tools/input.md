---
title: input输入框
author: Closerdoor
date: '2021-12-12'
---

## 去掉输入框type为number时的上下箭头
```css
/*谷歌*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

/*火狐*/
input[type="number"] {
    -moz-appearance: textfield;
}
```
## input placeholder样式
```css
::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: red;
}
::-moz-placeholder {
    /* Firefox 19+ */
    color: red;
}
:-ms-input-placeholder {
    /* IE 10+ */
    color: red;
}
:-moz-placeholder {
    /* Firefox 18- */
    color: red;
}
```