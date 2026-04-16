---
title: Echarts使用
author: Closerdoor
date: '2022-06-23'
---

```js
//package.json
"dependencies": {
  "echarts": "^5.3.2",
}
```
## Echarts.ts
```ts
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as Echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { TitleComponent, TooltipComponent, GridComponent,  LegendComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
Echarts.use(
  [TitleComponent, TooltipComponent, GridComponent,LegendComponent, BarChart, LineChart, CanvasRenderer]
);
export default Echarts
```
## 页面中使用
```js
import Echarts from "../../../lib/echart";
let obj = {};
for (let i = 0; i < arr.length; i++) {
  let myChart = echarts.init(document.getElementById(`chart${i + 1}`));
  //柱状图配置
  let option1 = {
    grid: {
      left: "15%", //默认10%
      right: "5%", //默认10%
      bottom: "5%", //默认60
      top: "10%",
      containLabel: false,
      //grid区域是否包含坐标轴的刻度标签
    },
    xAxis: {
      type: "value",
      position: "top",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        //网格线
        show: false,
      },
    },
    yAxis: {
      type: "category",
      data: arr[i].indexId === 'url' ? arr[i].title : arr[i].children.map((item) => item.content),
      axisLabel: {
        width: 100,
        align: "right",
        overflow: "truncate",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        //网格线
        show: false,
      },
    },
    series: [
      {
        data: arr[i].children.map((item) => item.amount),
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
          borderRadius: [0, 999, 999, 0],
        },
        itemStyle: {
          color: "#4379EE",
          barBorderRadius: [0, 999, 999, 0],
        },
        barWidth: 15, //柱图宽度
      },
    ],
  };
  //折线图配置
  let option2 = {
    grid: {
      left: "5%", //默认10%
      right: "5%", //默认10%
      bottom: "5%", //默认60
      top: "10%",
      containLabel: true,
      //grid区域是否包含坐标轴的刻度标签
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        symbol: "circle", //将小圆点改成实心 不写symbol默认空心
        symbolSize: 8, //小圆点的大小
        itemStyle: {
          color: "#4379EE", //小圆点和线的颜色
        },
        areaStyle: {
          //覆盖区域的渐变色
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(58,132,255, 0.5)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(58,132,255, 0)", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
      },
    ],
  };
  myChart.setOption(i > 1 ? option2 : option1);
  obj[`chart${i + 1}`] = myChart;
}
window.onresize = function () {
  //自适应大小
  for (let key in obj) {
    obj[key].resize();
  }
};
// 使用resizeObserver,监听父容器尺寸变化， 然后调用echarts的resize
// 直接resize有坑，如果容器是隐藏状态，它会报错然后就不渲染了
```
