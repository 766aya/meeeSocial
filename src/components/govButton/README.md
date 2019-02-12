## 数据基因 通用按钮

### 基础用法

> 基础按钮
``` html
  <!-- 新增 -->
  <gov-button type="add" @click="handleClick"></gov-button>
  <!-- 搜索 -->
  <gov-button type="search" @click="handleClick"></gov-button>
  <!-- 重置 -->
  <gov-button type="reset" @click="handleClick"></gov-button>
  <!-- 导入 -->
  <gov-button type="import" @click="handleClick"></gov-button>
  <!-- 导出 -->
  <gov-button type="export" @click="handleClick"></gov-button>
```
> 自定义按钮
``` html
  <gov-button
    size="small"
    :plain="false"
    :round="false"
    type="primary"
    :circle="false"
    :loading="false"
    :disabled="false"
    :icon="el-icon-plus"
    text="自定义按钮"
    @click="handleClick"
  >插槽部分</gov-button>
```

### 属性/方法/回调

> Attributes 属性

|参数|说明|类型|可选值|默认值|
|:--:|--|--|:--:|:--:|
|icon|图标|String|-|-|
|size|尺寸|String|medium / small / mini|small|
|type|类型|String|add/search/reset/import/export/primary/success/warning/danger/info/text|primary|
|plain|是否朴素按钮|Boolean|-|false|
|round|是否圆角按钮|Boolean|-|false|
|circle|是否圆形按钮|Boolean|-|false|
|loading|是否加载中|Boolean|-|false|
|disabled|是否禁用|Boolean|-|false|

> event 回调

|事件名称|说明|回调参数|
|--|--|--|
|click|按钮点击时触发|-|

### 使用外部图标 iconfont
``` html
  <gov-button type="info" text="'取消'" :icon="['iconfont', 'icon-cancel']"></gov-button>
```