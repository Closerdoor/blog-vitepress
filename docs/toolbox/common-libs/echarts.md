---
title: ECharts 使用笔记
author: Closerdoor
date: '2022-06-23'
---

`ECharts` 适合构建中后台图表、数据看板和可视化页面。本文整理按需引入、初始化与自适应处理方式。

## 安装

```bash
npm install echarts
```

## 按需注册模块

```ts
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
])

export default echarts
```

## 页面初始化示例

```js
import echarts from '../../../lib/echart'

const chartMap = {}

for (let i = 0; i < arr.length; i += 1) {
  const container = document.getElementById(`chart${i + 1}`)

  if (!container) {
    continue
  }

  const chart = echarts.init(container)

  const barOption = {
    grid: {
      left: '15%',
      right: '5%',
      bottom: '5%',
      top: '10%',
      containLabel: false,
    },
    xAxis: {
      type: 'value',
      position: 'top',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'category',
      data: arr[i].children.map((item) => item.content),
      axisLabel: {
        width: 100,
        align: 'right',
        overflow: 'truncate',
      },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [
      {
        type: 'bar',
        data: arr[i].children.map((item) => item.amount),
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
          borderRadius: [0, 999, 999, 0],
        },
        itemStyle: {
          color: '#4379EE',
          borderRadius: [0, 999, 999, 0],
        },
        barWidth: 15,
      },
    ],
  }

  chart.setOption(barOption)
  chartMap[`chart${i + 1}`] = chart
}

window.addEventListener('resize', () => {
  Object.values(chartMap).forEach((chart) => chart.resize())
})
```

## 自适应建议

- 优先在容器尺寸稳定后再调用 `echarts.init()`。
- 容器可能隐藏时，建议结合 `ResizeObserver` 或在显示后手动调用 `resize()`。
- 页面销毁时记得执行 `chart.dispose()`，避免内存泄漏。
