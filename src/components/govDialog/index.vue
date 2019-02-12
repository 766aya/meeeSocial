<template>
  <el-dialog
    @open="handleOpenDialog"
    @opened="handleOpenedDialog"
    @close="handleCloseDialog"
    @closed="handleClosedDialog"
    :top="top"
    :title="title"
    :width="width"
    :modal="modal"
    :center="center"
    :lock-scroll="true"
    :show-close="showClose"
    :visible.sync="visible"
    :fullscreen="fullscreen"
    :custom-class="customClass"
    :modal-append-to-body="true"
    :close-on-click-modal="false"
    :append-to-body="appendToBody"
    :close-on-press-escape="false"
    >
    <!-- body start -->
    <div class="dialog-layout" :style="style">
      <div ref="dialogBody">
        <slot></slot>
      </div>
    </div>
    <!-- body end -->
    <!-- footer start -->
    <div slot="footer" class="dialog-footer" v-if="isBtnGroup">
      <template v-for="item in btnGroups">
        <gov-button
          :key="item.label"
          :type="item.type"
          :size="item.size || ''"
          :loading="item.loading"
          v-if="item.show == null ? true : item.show"
          :disabled="item.disabled == null ? false : item.disabled"
          @click="handleClick(item.fn)">
          {{item.label}}
        </gov-button>
      </template>
    </div>
    <!-- footer end -->
  </el-dialog>
</template>

<script>
export default {
  name: 'GovDialog',
  data () {
    return {
      visible: false, // 控制弹窗的隐藏显示
      clientHeight: 250,
      style: {}
    }
  },
  computed: {
    btnGroups () {
      let btnGroups = []
      if (this.btnGroup.length > 0) {
        btnGroups = this.btnGroup
      } else {
        btnGroups = [
          {
            label: '保 存',
            name: 'saveButton',
            type: 'primary',
            show: true,
            disabled: false,
            fn: 'handleSubmit'
          },
          {
            label: '取 消',
            name: 'cancalButton',
            show: true,
            type: 'default',
            disabled: false,
            fn: 'handleCancel'
          }
        ]
      }
      return btnGroups
    }
  },
  props: {
    // 是否在 Dialog 出现时将 body 滚动锁定
    lockScroll: {
      type: Boolean,
      default: true
    },
    // 弹窗标题
    title: {
      type: String,
      default: '无标题弹窗'
    },
    // 弹窗宽度
    width: {
      type: String,
      default: '50%'
    },
    /**
     *  [{
     *    label: '确认',
     *    fn: 'confirmHandle',
     *    show: true,
     *    type: 'primary',
     *    disabled: false,
     *    loading: false,
     *  }]
    */
    btnGroup: {
      type: Array,
      default: () => []
    },
    // 是否全屏弹窗
    fullscreen: {
      type: Boolean,
      default: false
    },
    // 距离顶部距离
    top: {
      type: String,
      default: '15vh'
    },
    // 是否显示遮罩
    modal: {
      type: Boolean,
      default: true
    },
    // 是否插入到body元素
    appendToBody: {
      type: Boolean,
      default: true
    },
    // 传入的类名
    customClass: {
      type: String,
      default: ''
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    },
    // 是否居中对齐
    center: {
      type: Boolean,
      default: false
    },
    // 控制弹窗底部按钮的有无
    isBtnGroup: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 打开弹窗
    open () {
      this.visible = true
    },
    // 关闭弹窗
    close () {
      this.visible = false
    },
    // 打开后操作
    handleOpenDialog () {
      this.$nextTick(() => {
        this.resetDocumentClientHeight()
      })
      this.$emit('open')
    },
    // 打开动画结束后操作
    handleOpenedDialog () {
      this.$nextTick(() => {
        this.resetDocumentClientHeight()
      })
      this.$emit('opened')
    },
    // 关闭后操作
    handleCloseDialog () {
      this.$emit('close')
    },
    // 关闭动画结束后操作
    handleClosedDialog () {
      this.$emit('closed')
    },
    // 按钮事件
    handleClick (fn) {
      if (fn === 'handleCancel') {
        this.$emit(fn)
        this.close()
      } else {
        this.$emit(fn)
      }
    },
    // 设置body高度
    setDialogHeight () {
      if (!this.$refs.dialogBody) {
        return
      }
      const documentClientHeight = document.documentElement['clientHeight']
      const otherHeight = 150 + this.top.replace('vh', '') * documentClientHeight / 100
      const bodyHeight = this.$refs.dialogBody.clientHeight
      if (documentClientHeight - otherHeight <= bodyHeight) {
        this.style = {
          height: documentClientHeight - otherHeight + 'px',
          overflow: 'auto'
        }
      } else {
        this.style = {}
      }
    },
    // 重置窗口可视高度
    resetDocumentClientHeight () {
      this.setDialogHeight()
      window.onresize = () => {
        this.setDialogHeight()
      }
    },
    toggleButtonStatus ({ name = 'saveButton', status = false, type = 'loading' }) {
      let btnGroups = this.btnGroups
      for (let i = 0, len = btnGroups.length; i < len; i++) {
        if (btnGroups[i].name === name) {
          this.$set(btnGroups[i], type, status)
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog-layout {
    margin: -30px -20px;
    padding: 0px 20px;
  }
</style>
