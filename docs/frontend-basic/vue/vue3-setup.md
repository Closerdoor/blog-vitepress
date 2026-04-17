---
title: Vue 3 setup 语法糖
author: Closerdoor
date: '2021-12-12'
---

## 获取 props

```vue
<script setup lang="ts">
const props = defineProps({
  pluginId: String,
});
</script>
```

## 子组件暴露方法

### 子组件

```vue
<script setup lang="ts">
function refresh() {
  console.log('refresh');
}

defineExpose({
  refresh,
});
</script>
```

### 父组件

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Child from './Child.vue';

const childRef = ref<InstanceType<typeof Child> | null>(null);

onMounted(() => {
  childRef.value?.refresh();
});
</script>

<template>
  <Child ref="childRef" />
</template>
```

## 子组件向父组件传参

```vue
<script setup lang="ts">
const emit = defineEmits<{
  (event: 'save-ok', value: string): void;
}>();

emit('save-ok', 'done');
</script>
```

父组件监听：

```vue
<Child @save-ok="handleSave" />
```

## 关于强制刷新

Vue 3 中应优先通过响应式数据驱动更新，不建议把 `$forceUpdate` 当作常规方案。只有在接入非响应式外部对象时，才考虑兜底处理。

## 总结

`<script setup>` 的重点不是语法更短，而是让组件依赖、输入和输出更直观。
