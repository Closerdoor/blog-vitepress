---
title: 滚动条样式
author: Closerdoor
date: '2021-12-12'
---

## scrollbar.css
可直接全局引入
```css
/* 滚动条有滑块的轨道部分 */
::-webkit-scrollbar-track-piece {
    background-color: #00000000;
    border-radius: 1px;
}

/* 整个滚动条 */
::-webkit-scrollbar {
    width: 6px;
    height: 100%;
}

/* 滚动条竖向滑块 */
::-webkit-scrollbar-thumb:vertical {
    width: 6px;
    height: 6px;
    cursor: pointer;
    background-color: rgba(144,147,153,.3);
    transition: background-color 0.3s;
    border-radius: 3px;
}

/* 滚动条竖向滑块hover */
::-webkit-scrollbar-thumb:vertical:hover {
    background-color: rgba(144,147,153,.5);
}

/* 滚动条横向滑块 */
::-webkit-scrollbar-thumb:horizontal {
    width: 6px;
    height: 6px;
    cursor: pointer;
    background-color: rgba(144,147,153,.3);
    border-radius: 1px;
}

/* 滚动条横向滑块hover */
::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: rgba(144,147,153,.5);
}

/* 同时有垂直和水平滚动条时交汇的部分 */
::-webkit-scrollbar-corner {
    display: block;
    /* 修复交汇时出现的白块 */
}
```