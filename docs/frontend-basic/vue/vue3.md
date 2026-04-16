---
title: Vue 3
author: Closerdoor
date: '2021-12-12'
---

## computed
vue3-props父子通信之双向绑定格式书写
子组件
```html
<html>
<input v-model="thisMessage "/>
</html>
<script>
props:{
	message: { type: String ,default: ''},//正常书写
	arr: { type: Array, default: () => [] },//接收数组
	obj: { type: Object, default: () =>({name:''}) },//接受对象
	obj: { type: Function},//接受函数
}
emits: ['update:message'],
 setup(props, { emit }) {
  const thisMessage = computed({
      get: () => props.message,
      set: (val) => {
        emit('update:message', val);
      }
    });
    return{
      thisMessage 
    }
}
</script>
```
父组件
```html
<son v-model:message="message"></son>
```
## watch 
子组件
```html
<template>
    <div>
        <van-cell-group>
            <van-field v-model="text" label="文本" />
        </van-cell-group>
    </div>
</template>
<script>
import { ref, watch } from 'vue'
export default {
    name:"son",
    props:{
        text:{
            type:String,
            default:""
        }
    },
    setup(props,context){
        let text=ref('')
        watch(()=>props.text,(val)=>{
            text.value=val
        })
        watch(()=>text.value,(val)=>{
            context.emit('update:text',val)
        })
        return {
            text
        }
    }
}
</script>
```
父组件
```html
<template>
    <div>
        <son v-model:text="val"></son>
    </div>
</template>
<script>
import son from '@/components/son'
import { ref, watch } from 'vue'
export default {
    components:{
        son
    },
    setup(){
        let val=ref('')
        watch(()=>val.value,(val)=>{//监听val,输入框变化，val变化则是实现了双向绑定
            console.log(val)
        })
        return{
            val
        }
    }
}
</script>
```

## watch同时监听多个数据
```js
watch(
  () => [props.chatId, props.controlId],
  ([curr1, curr2], [pre1, pre2]) => {
    if (curr1) {
      console.log('props.chatId');
      console.log(props);
      console.log(curr1, pre1, curr2, pre2);
    }
  }
);
```
