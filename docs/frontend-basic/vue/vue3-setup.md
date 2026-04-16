---
title: Vue 3.2 setup
author: Closerdoor
date: '2021-12-12'
---

## 获取props
```js
const props = defineProps({
  pluginId: {
    type: String, 
  },
});
```
## 父组件调用子组件方法
子组件
```html
<script lang="ts" setup>
const test = ()=>{
  //定义子组件中的方法
}
defineExpose({
  test
})
</script>
```
父组件
```html
<div ref="box"></div>
<script lang="ts" setup>
const box = ref(null)
box.value.test()
</script>
```
## 子组件向父组件传参
子组件
```html
<script lang="ts" setup>
const emit = defineEmits(['on-save-ok'])
emit('on-save-ok', '1111')
</script>
```
父组件
```html
<Parent ref="parent" @onSaveOk="test" />
<script>
const test = (content) => {
  console.log(content)
}
</script>
```
## 强制刷新组件forceUpdate
```js
import { getCurrentInstance } from "vue";
let { ctx } = getCurrentInstance();
ctx.$forceUpdate()
//vue2中
this.$forceUpdate()
```
## vue3中v-model语法糖
