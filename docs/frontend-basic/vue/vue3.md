---
title: Vue 3 常用模式
author: Closerdoor
date: '2021-12-12'
---

## 组件双向绑定

Vue 3 推荐使用 `modelValue` 或具名 `v-model`。

### 子组件

```vue
<script setup>
import { computed } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:message']);

const currentMessage = computed({
  get: () => props.message,
  set: (value) => emit('update:message', value),
});
</script>

<template>
  <input v-model="currentMessage" />
</template>
```

### 父组件

```vue
<Child v-model:message="message" />
```

## watch 监听

```js
watch(
  () => [props.chatId, props.controlId],
  ([chatId, controlId], [prevChatId, prevControlId]) => {
    console.log(chatId, controlId, prevChatId, prevControlId);
  }
);
```

## 使用建议

- 能用 `computed` 推导的状态，不要先用 `watch`。
- `watch` 更适合副作用，如请求、同步外部状态、手动控制流程。

## 总结

Vue 3 的核心实践是：状态声明更集中，组件通信更显式，副作用边界更清晰。
