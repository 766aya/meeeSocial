<template>
  <el-button
    v-if="!permission ? true : permissions[permission]"
    :size="size"
    :type="buttonType"
    :style="defaultType ? false : style"
    :plain="defaultType ? false : plain"
    :round="defaultType ? false : round"
    :circle="defaultType ? false : circle"
    :loading="defaultType ? false : loading"
    :disabled="defaultType ? false : disabled"
    class="gov-button"
    @click="handleClick">
      <template v-if="defaultType">
        <i class="icon iconfont" v-if="buttonIcon" :class="buttonIcon"></i>
        <span>{{ context }}</span>
      </template>
      <template v-else>
        <slot>
          <i class="icon iconfont" v-if="buttonIcon" :class="buttonIcon"></i>
          <span>{{ context }}</span>
        </slot>
      </template>
  </el-button>
</template>

<script>
export default {
  name: 'GovButton',
  data () {
    return {
      defaultType: false,
    }
  },
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default',
    },
    // 按钮文本
    text: {
      type: String,
      default: '',
    },
    // 图标
    icon: {
      type: String,
      default: '',
    },
    // large/medium/small/mini
    size: {
      type: String,
      default: 'small',
    },
    // 自定义样式
    style: {
      default: () => {},
    },
    // 是否禁用状态
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否加载中状态
    loading: {
      type: Boolean,
      default: false,
    },
    // 是否圆角按钮
    round: {
      type: Boolean,
      default: false,
    },
    // 是否圆形按钮
    circle: {
      type: Boolean,
      default: false,
    },
    // 是否朴素按钮
    plain: {
      type: Boolean,
      default: false,
    },
    // 权限
    permission: {
      type: String,
      default: '',
    },
  },
  computed: {
    buttonType () {
      let outputText
      switch (this.type) {
        case 'add': outputText = 'primary'; break
        case 'search': outputText = 'primary'; break
        case 'reset': outputText = 'default'; break
        case 'import': outputText = 'default'; break
        case 'export': outputText = 'default'; break
        default: outputText = this.type; break
      }
      return outputText
    },
    buttonIcon () {
      let outputText
      switch (this.type) {
        case 'add': outputText = 'icon-cz-tianjia'; break
        case 'search': outputText = ''; break
        case 'reset': outputText = ''; break
        case 'import': outputText = ''; break
        case 'export': outputText = ''; break
        default: outputText = this.icon; break
      }
      return outputText
    },
    context () {
      let outputText = ''
      if (this.text && this.text !== '') {
        outputText = this.text
      } else {
        switch (this.type) {
          case 'add': outputText = '新增'; break
          case 'search': outputText = '搜索'; break
          case 'reset': outputText = '重置'; break
          case 'import': outputText = '导入'; break
          case 'export': outputText = '导出'; break
          default: outputText = this.text; break
        }
      }
      return outputText
    },
    permissions () {
      let permissions = JSON.parse(window.sessionStorage.getItem('permissions')).content
      return permissions
    },
  },
  methods: {
    handleClick () {
      this.$emit('click')
    },
    isDefaultType () {
      let type = ['add', 'search', 'reset', 'import', 'export']
      type.forEach(item => {
        if (this.type === item) {
          this.defaultType = true
        }
      })
    },
  },
  created () {
    this.isDefaultType()
  },
}
</script>

<style lang="scss" scope>
  .gov-button {
    .icon {
      padding-right: 5px;
      font-size: inherit;
      line-height: inherit;
    }
  }
</style>
