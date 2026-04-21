---
title: Puppeteer 爬虫基础
author: Closerdoor
date: '2026-04-21'
---

Puppeteer 是一个 Node.js 库，提供了控制无头 Chrome/Chromium 的高级 API。适用于页面自动化、数据抓取、截图、生成 PDF 等场景。

## 安装

```bash
npm install puppeteer-core
```

`puppeteer-core` 是轻量版本，需要指定本地 Chrome 路径。完整版 `puppeteer` 会自动下载 Chromium。

## 基础示例：抓取 B 站排行榜

```js
import puppeteer from 'puppeteer-core'
import fs from 'node:fs'

;(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  })

  try {
    const page = await browser.newPage()
    await page.goto('https://www.bilibili.com', {
      waitUntil: 'networkidle2'
    })

    // 等待页面加载完成
    await page.waitForSelector('.rank-item')

    // 在页面上下文中提取数据
    const data = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.rank-item'))
      return items.map(item => ({
        title: item.querySelector('.ri-title')?.innerText,
        cover: item.querySelector('.lazy-img img')?.src
      }))
    })

    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    console.log('数据保存成功')
  } catch (e) {
    console.error(e)
  } finally {
    await browser.close()
  }
})()
```

## 核心 API

### 启动浏览器

```js
const browser = await puppeteer.launch({
  executablePath: '/path/to/chrome',  // puppeteer-core 需指定
  headless: true,                      // 无头模式
  defaultViewport: { width: 1280, height: 800 }
})
```

### 页面导航

```js
await page.goto(url, {
  waitUntil: 'networkidle2'  // 网络空闲后继续
})
```

`waitUntil` 选项：
- `load` - load 事件触发
- `domcontentloaded` - DOM 解析完成
- `networkidle0` - 500ms 内无网络请求
- `networkidle2` - 500ms 内不超过 2 个网络请求

### 页面上下文执行

```js
// 在页面中执行 JS 并返回结果
const title = await page.evaluate(() => document.title)

// 传入参数
const result = await page.evaluate((x, y) => x + y, 1, 2)
```

### 选择器查询

```js
// 单个元素
const text = await page.$eval('.title', el => el.innerText)

// 多个元素
const texts = await page.$$eval('.item', els => els.map(e => e.innerText))

// 等待元素出现
await page.waitForSelector('.content')
```

### 截图与 PDF

```js
// 页面截图
await page.screenshot({ path: 'screenshot.png', fullPage: true })

// 生成 PDF
await page.pdf({ path: 'page.pdf', format: 'A4' })
```

## 常见场景

### 延时等待

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

await delay(3000)
```

### 表单操作

```js
// 输入文本
await page.type('#search-input', '关键词')

// 点击按钮
await page.click('#search-btn')

// 等待导航完成
await Promise.all([
  page.waitForNavigation(),
  page.click('#submit')
])
```

### 处理弹窗

```js
page.on('dialog', async dialog => {
  console.log(dialog.message())
  await dialog.dismiss()
})
```

## 异常处理与资源释放

始终使用 `try...finally` 确保浏览器关闭：

```js
try {
  // 业务逻辑
} catch (e) {
  console.error(e)
} finally {
  await browser.close()
}
```

## 注意事项

- `puppeteer-core` 需要本地安装 Chrome/Chromium 并指定路径
- 动态渲染的页面需要等待元素加载完成再抓取
- 高频请求可能触发目标网站的反爬机制
- 生产环境建议设置 User-Agent 和请求间隔
