---
title: Vue 2
author: Closerdoor
date: '2021-12-12'
---

## element踩坑
### form表单验证
限制输入内容为小数(注意数据类型)
```html
<el-form-item label="价格" prop="price">
  <el-input v-model="ruleForm.price"  oninput="value=value.replace(/[^0-9.]/g,'')"  placeholder="请输入价格" />
</el-form-item>
```
```js
data() {
  const validateMoney = (rule,value,callback) =>{
      if(!value){
          callback(new Error('价格不能为空'))
        }else if(value.indexOf(".") != -1 && value.split('.').length > 2){
          callback(new Error('请输入正确格式的金额')) //防止输入多个小数点
        }else if(value.indexOf(".") != -1 && value.split('.')[1].length > 2){
          callback(new Error('请输入正确的小数位数')) //小数点后两位
      }else{
        callback();
      }
  };
  return{
    rules: {
      price:[
        { type: 'string',required: true,trigger: 'blur', validator:validateMoney},
      ]
    },
  }
}
```
