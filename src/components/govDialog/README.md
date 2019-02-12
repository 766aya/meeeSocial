## 数据基因 通用弹窗

### 基础用法

> 基础弹窗
``` html
  <gov-dialog
    ref="mainDialog"
    :title="title"
    :btnGroup="btnGroup"
    @open="handleOpen"
    @opened="handleOpened"
    @close="handleClose"
    @closed="handleClosed"
    @dialogClose="dialogClose">
    弹窗内容（插槽）
  </gov-dialog>
```
``` javascript

  data() {
    return {
      // 弹窗标题
      title: '', 
      // 弹窗按钮
      btnGroup: [
        {
          label: '取消', // 按钮文本
          loading: false, // 按钮加载中状态
          disabled: false, // 是否禁用按钮
          fn: 'dialogClose', // 按钮回调方法名称
        }, {
          label: '提交',
          loading: false,
          disabled: false,
          fn: 'dialogSubmit',
        }
      ],
    }
  }

  methods: {
    openDialog(name) {
      // 打开弹窗的方法
      this.$refs[name].open()
    },
    dialogClose(name) {
      // 关闭弹窗的方法
      this.$refs[name].close()
    },
    dialogSubmit() {
      // 自定义按钮的回调
    },
    handleOpen () {
      // 打开弹窗的回调
    },
    handleOpened() {
      // 打开弹窗动画结束后的回调
    },
    handleClose() {
      // 关闭弹窗的回调
    },
    handleClosed() {
      // 关闭弹窗动画结束后的回调
    },
  }
```

### 属性/方法/回调

> Attributes 属性

|参数|说明|类型|可选值|默认值|
|:--:|--|--|:--:|:--:|
|width|宽度|String|-|50%|
|title|标题|String|-|'无标题弹窗'|
|top|距离顶部距离|String|-|15vh|
|customClass|自定义类名|String|-|-|
|modal|是否显示遮罩|Boolean|-|true|
|center|是否居中对齐|Boolean|-|false|
|fullscreen|是否全屏|Boolean|-|false|
|lockScroll|锁定body滚动条|Boolean|-|true|
|showClose|是否显示关闭按钮|Boolean|-|true|
|appendToBody|是否插入到body元素|Boolean|-|true|
|btnGroup|footer按钮组|Array|-|-|
|isBtnGroup|控制底部按钮有无|Boolean|-|true|

> btnGroup

- 传入属性回调函数为传入时的fn

|属性|说明|可选值|默认值|
|--|--|--|--|
|label|按钮名称|-|-|
|type|类型|primary/success/info/warning/danger|-|
|size|尺寸|mini/small/medium/default|default|
|loading|是否加载中状态|-|false|
|show|显示/隐藏|-|true|
|disabled|是否禁用按钮|-|false|
|fn|回调函数名称|-|-|


> event 回调

|事件名称|说明|回调参数|
|--|--|--|
|open|弹窗打开的回调|-|
|opened|打开动画结束后的回调|-|
|close|弹窗关闭的回调|-|
|closed|关闭动画结束后的回调|-|