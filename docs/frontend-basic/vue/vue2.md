---
title: Vue 2 实用笔记
author: Closerdoor
date: '2021-12-12'
---

## 适用范围

本文记录 Vue 2 项目中常见的表单与组件使用要点，重点面向维护存量项目。

## Element 表单校验示例

限制金额输入时，不要只依赖 `oninput`，更应配合表单校验规则。

```vue
<el-form-item label="价格" prop="price">
  <el-input v-model="ruleForm.price" placeholder="请输入价格" />
</el-form-item>
```

```js
data() {
  const validateMoney = (rule, value, callback) => {
    if (!value) {
      callback(new Error('价格不能为空'));
      return;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      callback(new Error('请输入正确格式的金额'));
      return;
    }

    callback();
  };

  return {
    rules: {
      price: [{ required: true, trigger: 'blur', validator: validateMoney }],
    },
  };
}
```

## 生命周期

- `beforeCreate`：实例初始化后、数据观测前。
- `created`：数据和方法可用，常用于请求初始化数据。
- `mounted`：DOM 已挂载，可执行依赖真实节点的逻辑。
- `beforeUpdate` / `updated`：更新前后。
- `beforeDestroy` / `destroyed`：销毁前后，用于清理定时器和事件。

## 常用指令

- `v-text`：设置纯文本。
- `v-html`：插入 HTML。
- `v-show`：通过 `display` 控制显隐。
- `v-if`：直接控制节点是否存在。
- `v-model`：表单双向绑定。

Vue 2 里的过滤器 `filter` 只适合简单格式化，新项目更推荐用函数或计算属性替代。

## 注意事项

- Vue 2 项目若仍长期维护，建议明确版本边界和浏览器兼容范围。
- 表单校验优先放在规则层，输入限制仅作为辅助。

## 总结

Vue 2 仍可维护，但新增项目通常更适合直接使用 Vue 3。
