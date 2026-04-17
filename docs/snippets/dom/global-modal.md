---
title: 全局弹窗
date: '2026-04-17'
description: 通过全局挂载方式统一调用确认弹窗。
---

## 适用场景

业务里经常会碰到这种需求：

- 任意页面都能直接弹出提示框。
- 调用方式尽量统一。
- 标题、按钮文案、关闭按钮这些配置可按需覆盖。

## 调用方式

先在入口文件引入弹窗实现：

```ts
import '../../components/modal2/index';
```

然后通过全局对象调用：

```ts
window.popBox.show('这里是弹窗内容');
```

完整参数：

```ts
window.popBox.show(message, {
  title: '提示',
  okText: '确定',
  cancelText: '取消',
  showClose: false,
  showHeader: true,
  showFooter: true,
  isConfirmModal: false,
});
```

## 一个最小实现

```ts
type ModalOptions = {
  title?: string;
  okText?: string;
  cancelText?: string;
  showClose?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  isConfirmModal?: boolean;
};

declare global {
  interface Window {
    popBox: {
      show: (message: string, options?: ModalOptions) => void;
    };
  }
}

const defaultOptions: Required<ModalOptions> = {
  title: '提示',
  okText: '确定',
  cancelText: '取消',
  showClose: false,
  showHeader: true,
  showFooter: true,
  isConfirmModal: false,
};

function removeModal() {
  document.getElementById('global-modal')?.remove();
}

window.popBox = {
  show(message, options = {}) {
    const config = { ...defaultOptions, ...options };

    removeModal();

    const modal = document.createElement('div');
    modal.id = 'global-modal';
    modal.innerHTML = `
      <div class="modal-mask">
        <div class="modal-panel">
          ${config.showHeader ? `<div class="modal-header">${config.title}</div>` : ''}
          ${config.showClose ? '<button class="modal-close">x</button>' : ''}
          <div class="modal-body">${message}</div>
          ${config.showFooter ? `
            <div class="modal-footer">
              ${config.isConfirmModal ? '<button class="modal-cancel">' + config.cancelText + '</button>' : ''}
              <button class="modal-ok">${config.okText}</button>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    modal.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (
        target.classList.contains('modal-mask') ||
        target.classList.contains('modal-close') ||
        target.classList.contains('modal-cancel') ||
        target.classList.contains('modal-ok')
      ) {
        removeModal();
      }
    });

    document.body.appendChild(modal);
  },
};
```

## 说明

- 入口统一挂载后，业务调用成本最低。
- 全局组件适合轻量确认弹窗，不适合过于复杂的表单流。
- 如果弹窗要承载异步确认逻辑，更适合封装成返回 `Promise` 的形式。

## 总结

全局弹窗的关键不是样式，而是统一调用入口和稳定的参数约定。只要 API 设计清楚，后续替换内部实现成本会很低。
