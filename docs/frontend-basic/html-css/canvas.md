---
title: canvas
author: Closerdoor
date: '2022-07-07'
---

## 初始化
```html
<!-- canvas默认属性只有width和height -->
<canvas id="myCanvas" width="200" height="100">
  您的浏览器不支持canvas画布 请使用ie9+版本浏览器
</canvas>
<script>
let canvas = document.querySelector('#myCanvas');
const context = canvas.getContext('2d');//获取绘制上下文 2d webGL
window.addEventListener('resize',resizeCanvas())
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  return resizeCanvas
}

//清楚画布
//context.clearRect(x, y, width, height);
context.clearRect(0, 0, canvas.width, canvas.height);
</script>
```
### 画正方形
```js
//开始绘制
context.beginPath(); 
//设置起点 
context.moveTo(10,10); // context.moveTo(x,y);
// 下一个点坐标
context.lineTo(x,y) 
//闭合路径 连接起始点与结束点形成闭合区域
context.closePath();
//样式相关
context.strokeStyle = 'red';//描边颜色
context.lineWidth = 10;//描边宽度
//画线条
context.stroke();
//填充
context.fill();
```
方式二
```js
//绘制矩形路径
context.rect(x, y, width, height);
//画描边正方形
context.beginPath();
context.strokeStyle = 'red';
context.lineWidth = 10;
context.strokeRect(40, 20, 160, 80);
context.closePath();
//画填充正方形
context.beginPath();
context.fillStyle = 'coral';
context.fillRect(40, 20, 160, 80);
context.closePath();
```
### 画文字
```js
context.font = '24px SimSun, Songti SC';
context.fillStyle = 'red';//字体填充颜色
context.fillText('上偏移', 10, 88);//context.fillText(文字内容, x, y) y坐标为字体左下角
```
### 画圆
```js
//圆心坐标x 圆心坐标y 圆半径, 起点弧度,终点弧度 绘制模式 (true:逆时针,false:顺时针)
context.beginPath();
context.arc(100, 100, 30, 0, Math.PI * 2, false);
context.lineWidth = 10; //路径 描边 的粗细
context.stroke(); //描边
context.fillStyle = "red";
context.fill(); //填充
```
### 导入图像
```js
context.drawImage(image, dx, dy);
context.drawImage(image, dx, dy, dWidth, dHeight) ;
context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

**createImageData()**
> 方法可以创建一个全新的空的ImageData对象。该对象中的所有像素信息都是透明黑。

### 帧动画 requestAnimationFrame 

> **`window.requestAnimationFrame()`** 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

```js
window.requestAnimationFrame(callback);
function callback(){
  //
  requestAnimationFrame(callback)
}
```

#### 优势：

- **CPU节能**：使用setTimeout实现的动画，当页面被隐藏或最小化时，setTimeout 仍然在后台执行动画任务，由于此时页面处于不可见或不可用状态，刷新动画是没有意义的，完全是浪费CPU资源。而requestAnimationFrame则完全不同，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统步伐走的requestAnimationFrame也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了CPU开销。

- **函数节流**：在高频率事件(resize,scroll等)中，为了防止在一个刷新间隔内发生多次函数执行，使用requestAnimationFrame可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销。一个刷新间隔内函数执行多次时没有意义的，因为显示器每16.7ms刷新一次，多次绘制并不会在屏幕上体现出来。