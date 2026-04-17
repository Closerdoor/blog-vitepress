---
title: Video 视频
author: Closerdoor
date: '2022-07-04'
---

## 基本用法

```html
<video controls width="640" poster="/poster.jpg">
  <source src="/demo.mp4" type="video/mp4">
  当前浏览器不支持 video。
</video>
```

## 常用属性

- `src`
- `controls`
- `autoplay`
- `muted`
- `loop`
- `poster`
- `preload`
- `playsinline`
- `currentTime`
- `playbackRate`
- `duration`

## 常用方法

```js
video.play();
video.pause();
video.load();
```

## 常见事件

- `loadedmetadata`
- `canplay`
- `play`
- `pause`
- `timeupdate`
- `ended`
- `error`

## 全屏

```js
if (video.requestFullscreen) {
  video.requestFullscreen();
}

if (document.exitFullscreen) {
  document.exitFullscreen();
}
```

## 注意事项

- 移动端自动播放通常需要 `muted` 和用户交互配合。
- `playsinline` 可减少 iOS 上强制全屏播放的概率。

## 总结

原生 `video` 已覆盖大多数基础播放需求，复杂播放器则需要自定义控制层。
