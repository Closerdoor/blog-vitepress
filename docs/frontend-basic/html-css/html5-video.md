---
title: video视频
author: Closerdoor
date: '2022-07-04'
---

## video
H5 插入 video 多媒体标签 `<video></video>`
### 属性
| 属性                           | 值                             | 描述                                                         |
| :----------------------------- | :----------------------------- | :----------------------------------------------------------- |
| autoplay                       | autoplay                       | 如果出现该属性，则视频在就绪后马上播放。                     |
| controls                       | controls                       | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| loop                           | loop                           | 如果出现该属性，则当媒介文件完成播放后再次开始播放。         |
| muted                          | muted                          | 如果出现该属性，视频的音频输出为静音。                       |
| poster                         | *URL*                          | 规定视频正在下载时显示的图像，直到用户点击播放按钮。         |
| preload                        | auto metadata none             | 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。 |
| src                            | *URL*                          | 要播放的视频的 URL。                                         |
| width                          | *pixels*                       | 设置视频播放器的宽度。                                       |
| height                         | *pixels*                       | 设置视频播放器的高度。                                       |
| playsinline/webkit-playsinline | playsinline/webkit-playsinline | Iphone ios/ 微信浏览器支持小窗内播放                         |
| volume                         | double                         | 表示音频的音量。值从0.0（静音）到1.0（最大音量）。           |
| paused(只读属性)                | boolean                        | 是否已暂停                                                   |
| muted                          | boolean                        | 设置或返回音频/视频是否静音                                  |
| playbackRate                   | double                         | 音频/视频的当前播放速度。  1.0 正常速度 0.5 半速（更慢） 2.0 倍速（更快） |
| duration                       | number                         | 数字值，表示音频/视频的长度，以秒计。                        |
| readyState                     | boolean                        | 返回视频是否就绪                                             |
### 方法
| 方法           | 描述                                    |
| :------------- | :-------------------------------------- |
| load()         | 重新加载音频/视频元素                   |
| play()         | 开始播放音频/视频                       |
| pause()        | 暂停当前播放的音频/视频                 |
| addTextTrack() | 向音频/视频添加新的文本轨道             |
| canPlayType()  | 检测浏览器是否能播放指定的音频/视频类型 |
### 事件
| 事件名称            | 描述                                                         |
| :------------------ | :----------------------------------------------------------- |
| `abort`             | 在播放被终止时触发,例如, 当播放中的视频重新开始播放时会触发这个事件。 |
| `canplay`           | 在媒体数据已经有足够的数据（至少播放数帧）可供播放时触发。这个事件对应CAN_PLAY的readyState。 |
| `canplaythrough`    | 在媒体的readyState变为CAN_PLAY_THROUGH时触发，表明媒体可以在保持当前的下载速度的情况下不被中断地播放完毕。注意：手动设置currentTime会使得firefox触发一次canplaythrough事件，其他浏览器或许不会如此。 |
| `durationchange`    | 元信息已载入或已改变，表明媒体的长度发生了改变。例如，在媒体已被加载足够的长度从而得知总长度时会触发这个事件。 |
| `emptied`           | 媒体被清空（初始化）时触发。                                 |
| `ended`             | 播放结束时触发。                                             |
| `error`             | 在发生错误时触发。元素的error属性会包含更多信息。参阅 [HTMLMediaElement.error](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/error) 获得详细信息。 |
| `interruptbegin`    | 声音在Firefox OS设备中断时触发,可能是应用程序被切换至后台或者更高优先级的应用占用了音频通道。 相关信息请参考 [Using the AudioChannels API](https://developer.mozilla.org/en-US/docs/Web/API/AudioChannels_API/Using_the_AudioChannels_API) |
| `interruptend`      | 声音在Firefox OS设备中断后恢复播放时触发,应用程序被切换至前台或占用更高级音频通道的应用程序播放完毕后触发。相关信息请参考 [Using the AudioChannels API](https://developer.mozilla.org/en-US/docs/Web/API/AudioChannels_API/Using_the_AudioChannels_API) |
| `loadedmetadata`    | 媒体的元数据已经加载完毕，现在所有的属性包含了它们应有的有效信息。 |
| `loadstart`         | 在媒体开始加载时触发。                                       |
| `mozaudioavailable` | 当音频数据缓存并交给音频层处理时                             |
| `pause`             | 播放暂停时触发。                                             |
| `play`              | 在媒体回放被暂停后再次开始时触发。即，在一次暂停事件后恢复媒体回放。 |
| `playing`           | 在媒体开始播放时触发（不论是初次播放、在暂停后恢复、或是在结束后重新开始）。 |
| `progress`          | 告知媒体相关部分的下载进度时周期性地触发。有关媒体当前已下载总计的信息可以在元素的buffered属性中获取到。 |
| `ratechange`        | 在回放速率变化时触发。                                       |
| `seeked`            | 在跳跃操作完成时触发。                                       |
| `seeking`           | 在跳跃操作开始时触发。                                       |
| `stalled`           | 在尝试获取媒体数据，但数据不可用时触发。                     |
| `suspend`           | 在媒体资源加载终止时触发，这可能是因为下载已完成或因为其他原因暂停。 |
| `timeupdate`        | 元素的currentTime属性表示的时间已经改变。                    |
| `volumechange`      | 在音频音量改变时触发（既可以是volume属性改变，也可以是muted属性改变）.。 |
| `waiting`           | 在一个待执行的操作（如回放）因等待另一个操作（如跳跃或下载）被延迟时触发。 |

### 实例
```html
<!-- Simple video example -->
<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以 <a href="videofile.ogg">下载</a>
  并用你喜欢的播放器观看!
</video>

<!-- Video with subtitles -->
<video src="foo.ogg">
  <track kind="subtitles" src="foo.en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="foo.sv.vtt" srclang="sv" label="Svenska">
</video>
<!-- 提供多个视频源，浏览器将会使用它所支持的第一个源。 -->
<video controls>
  <source src="myVideo.mp4" type="video/mp4">
  <source src="myVideo.webm" type="video/webm">
  <p>你的浏览器不支持H5 video播放器 你可以点击链接下载视频
      <a href="myVideo.mp4">点击下载</a> </p>
</video>
```

## fullscreen全屏
全屏可以使某个Element全屏显示，但是退出全屏是调用document方法
> 判断全屏是否可用
```
document.fullscreenEnabled || 
document.mozFullScreenEnabled || 
document.webkitFullscreenEnabled ||
document.msFullscreenEnabled
```
> 判断当前是否为全屏状态
```
document.fullscreenElement || 
document.webkitFullscreenElement || 
document.mozFullScreenElement || 
document.msFullscreenElement
```
> 开启全屏显示
```js
element.requestFullscreen(); //默认标准
element.webkitRequestFullScreen(); //Safari chrome Edge
element.mozRequestFullScreen(); //Firefox
element.msRequestFullscreen(); //IE
//实际使用时通过循环
const requestFullScreens = ['requestFullscreen', 'webkitRequestFullScreen', 'mozRequestFullScreen', 'msRequestFullscreen'];
for (let i = 0; i < requestFullScreens.length; i++) {
  let key = requestFullScreens[i];
  //如果该node节点的方法存在，直接调用
  if (Node[key]) {
    Node[key]();
    return false;
  }
}
```
> 退出全屏显示
```js
document.exitFullscreen(); //默认标准
document.webkitCancelFullScreen(); //Safari chrome
document.mozCancelFullScreen(); //Firefox
document.msExitFullscreen(); //IE
document.webkitExitFullscreen();//Safari chrome
//实际使用时通过循环
const exitFullScreens = ['exitFullscreen', 'webkitCancelFullScreen', 'mozCancelFullScreen', 'msExitFullscreen', 'webkitExitFullscreen'];
for (let i = 0; i < exitFullScreens.length; i++) {
  let key = exitFullScreens[i];
  if (document[key]) {
    document[key]();
    return false;
  }
}
```
