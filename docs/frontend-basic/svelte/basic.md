---
title: Svelte 基础
date: '2026-04-17'
description: Svelte 组件结构、模板语法、绑定、生命周期与 store 入门。
---

## 组件结构

`.svelte` 文件可以同时包含三部分：

- `<script>`：逻辑
- 标记模板：结构
- `<style>`：样式

```svelte
<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>{count}</button>

<style>
  button {
    font-size: 16px;
  }
</style>
```

## 列表渲染

```svelte
{#each list as item, index}
  <div>{index} - {item}</div>
{/each}
```

`{#each}` 类似 Vue 的 `v-for` 或 React 的 `map`。

## 常见绑定

### 表单双向绑定

```svelte
<input bind:value={value} />
<textarea bind:value={content}></textarea>
<input type="checkbox" bind:checked={done} />
```

### 单选和复选组

```svelte
<input type="radio" bind:group={size} value="small" />
<input type="checkbox" bind:group={flavours} value="vanilla" />
```

### 可编辑内容

```svelte
<div contenteditable="true" bind:innerHTML={html}></div>
```

## 类名绑定

```svelte
<div class:active={active} class:inactive={!active}></div>
```

这种写法适合根据布尔值切换类名。

## 属性绑定

某些尺寸属性可以直接绑定读取：

```svelte
<div bind:clientWidth={width} bind:clientHeight={height}></div>
```

要注意这类绑定通常是只读的，不能靠改变量反向驱动元素尺寸。

## 生命周期

Svelte 常见生命周期包括：

- `onMount`：组件挂载后执行
- `beforeUpdate`：DOM 更新前执行
- `afterUpdate`：DOM 更新后执行
- `onDestroy`：组件销毁前执行

```svelte
<script>
  import { onMount, onDestroy } from 'svelte';

  let timer;

  onMount(() => {
    timer = setInterval(() => {
      console.log('tick');
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(timer);
  });
</script>
```

## `tick`

`tick` 会返回一个 `Promise`，用于等待下一次 DOM 更新完成。

```js
import { tick } from 'svelte';

await tick();
```

适合在状态更新后再读取最新 DOM。

## Store

Svelte 的 store 适合做跨组件状态共享。

### `writable`

```js
import { writable } from 'svelte/store';

export const count = writable(0);
```

### `readable`

```js
import { readable } from 'svelte/store';

export const time = readable(new Date(), (set) => {
  const timer = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => clearInterval(timer);
});
```

## 总结

Svelte 的特点是模板简洁、绑定直接、心智负担相对低。入门时先掌握组件结构、绑定、生命周期和 store，基本就能覆盖大多数小中型页面场景。
