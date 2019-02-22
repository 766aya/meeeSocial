<template>
  <gov-dialog
    :title="dialogOption[status].title"
    width="80%"
    @handleSubmit="handleSubmit"
    ref="dialog">
    <avue-form ref="mainForm" :option="mainFormOption" v-model="form"></avue-form>
    <el-row :gutter="20" align="middle" type="flex">
      <el-col span="20">
        <el-upload
          class="upload-demo2"
          action="/uploadPhoto"
          :show-file-list="false"
          :on-success="uploadHeaderImg"
          :disabled="disabled"
          :on-error="uploadError">
          <gov-button type="primary" text="上传封面图片" :disabled="disabled"></gov-button>
        </el-upload>
      </el-col>
    </el-row>
    <avue-crud
      ref="crud"
      :data="mainTableData"
      :option="mainTableOption"
      v-model="formData"
      @row-update="rowUpdate"
    >
      <template slot-scope="scope" slot="menu">
        <gov-button type="text" @click="rowCell(scope.row, scope.row.$index)" :text="scope.row.$cellEdit ? '保存' : '修改'"></gov-button>
        <gov-button type="text" @click="handleDelete(scope.row.$index)" text="删除"></gov-button>
      </template>
    </avue-crud>
  </gov-dialog>
</template>

<script>
import { mainDialogTableOption, mainDialogFormOption } from './const'
import { saveCaseArticle, updateCaseArticle } from '@/views/manage/apis/vedio'

export default {
  name: 'mainDialog',
  data () {
    return {
      dialogOption: {
        create: {
          title: '新增视频',
        },
        update: {
          title: '修改视频',
        },
      },
      type: 'text',
      formData: {},
      mainTableData: [
        {
          type: '视频地址',
        },
      ], // 文章主体内容
      form: {}, // 外层内容
      openRowIndex: 0,
      disabled: false,
    }
  },
  computed: {
    mainTableOption () {
      return mainDialogTableOption
    },
    mainFormOption () {
      return mainDialogFormOption
    },
  },
  props: {
    status: {
      type: String,
      default: 'create',
    },
  },
  methods: {
    open (formData) {
      if (formData) {
        this.form = formData
        this.mainTableData = formData.content ? formData.content : []
      }
      this.$nextTick(() => {
        this.$refs['dialog'].open()
      })
    },
    close () {
      this.$refs['dialog'].close()
    },
    handleSubmit () {
      if (!this.form.img) {
        this.$message.error('请上传封面图片！')
        return false
      }
      this.form.data = this.mainTableData
      if (this.status === 'create') {
        saveCaseArticle(this.form).then(res => {
          this.close()
          this.$message.success('新增成功')
          this.$emit('getList')
        })
      } else {
        updateCaseArticle(this.form).then(res => {
          this.close()
          this.$message.success('修改成功')
          this.$emit('getList')
        })
      }
    },
    rowCell (row, index) {
      console.log(row, index)
      this.$refs.crud.rowCell(row, index)
    },
    rowUpdate (form, index, done) {
      console.log('rowUpdate', form, index)
      done()
    },
    uploadSuccess (response) {
      this.$set(this.mainTableData[this.openRowIndex], 'context', response.data)
      this.$message.success('图片上传成功')
    },
    uploadHeaderImg (response) {
      this.form.img = response.data
      this.$message.success('封面图上传成功')
      this.disabled = true
    },
    uploadError (err) {
      this.$message.success(`图片上传失败${err}`)
    },
    uploadRowIndex (index) {
      this.openRowIndex = index
    },
    // 删除行
    handleDelete (index) {
      this.$confirm('你确定要删除该行数据吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        this.mainTableData.splice(index, 1)
      }).catch(() => {})
    },
    handleClosed () {
      this.formData = {}
      this.mainTableData = []
      this.disabled = false
      this.$nextTick(() => {
        this.$refs['mainForm'].resetForm()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
  .upload-demo {
    display: inline-block;
    margin-right: 10px;
  }
  .upload-demo2 {
    display: inline-block;
    margin-left: 15px;
  }
</style>
