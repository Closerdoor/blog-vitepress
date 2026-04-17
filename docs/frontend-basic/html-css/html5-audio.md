---
title: Audio 音频
author: Closerdoor
date: '2022-07-05'
---

## 基本用法

```html
<audio controls src="/audio/demo.mp3"></audio>
```

## 常用属性

- `src`
- `controls`
- `autoplay`
- `loop`
- `muted`
- `preload`
- `currentTime`
- `duration`
- `volume`

## 常用方法

```js
audio.play();
audio.pause();
audio.load();
```

## 常见事件

- `loadedmetadata`
- `play`
- `pause`
- `timeupdate`
- `ended`
- `volumechange`

## 注意事项

- 现代浏览器通常限制自动播放，尤其是带声音的媒体。
- 需要自动播放时，常见前提是 `muted`。

## 总结

`audio` 适合原生播放控制，复杂播放器则需要额外封装交互和状态管理。
