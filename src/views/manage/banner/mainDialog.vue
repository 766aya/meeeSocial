<template>
  <gov-dialog
    :title="dialogOption[status].title"
    width="80%"
    @handleSubmit="handleSubmit"
    ref="dialog"
  >
    <avue-form ref="mainForm" :option="mainFormOption" v-model="form"></avue-form>
    <el-row :gutter="20" align="middle" type="flex">
      <el-col span="20">
        <el-upload
          class="upload-demo2"
          action="/uploadPhoto"
          :show-file-list="false"
          :on-success="uploadHeaderImg"
          :on-error="uploadError"
        >
          <gov-button type="primary" text="上传轮播图片"></gov-button>
        </el-upload>
      </el-col>
    </el-row>
    <avue-crud
      ref="crud"
      :data="mainTableData"
      :option="mainDialogTableOption"
      v-model="formData"
      @row-update="rowUpdate"
    >
      <template slot-scope="scope" slot="menu">
        <gov-button
          type="text"
          @click="rowCell(scope.row, scope.row.$index)"
          :text="scope.row.$cellEdit ? '保存' : '修改'"
        ></gov-button>
      </template>
    </avue-crud>
  </gov-dialog>
</template>

<script>
import { mainDialogFormOption } from './const'
import { saveCaseArticle, updateCaseArticle } from '@/views/manage/apis/banner'
import mixin from './const/mixin'
export default {
  name: 'mainDialog',
  mixins: [mixin],
  data () {
    return {
      dialogOption: {
        create: {
          title: '新增轮播',
        },
        update: {
          title: '修改轮播',
        },
      },
      type: 'text',
      formData: {},
      mainTableData: [
        {
          type: '绑定文章',
        },
      ], // 文章主体内容
      form: {}, // 外层内容
      openRowIndex: 0,
    }
  },
  computed: {
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
        this.mainTableData = formData.data ? formData.data : []
      }
      this.$nextTick(() => {
        this.$refs['dialog'].open()
      })
    },
    close () {
      this.$refs['dialog'].close()
    },
    handleSubmit () {
      this.$refs['mainForm'].validate(valid => {
        if (valid) {
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
        }
      })
    },
    rowCell (row, index) {
      this.$refs.crud.rowCell(row, index)
    },
    rowUpdate (form, index, done) {
      done()
    },
    uploadHeaderImg (response) {
      if (response.code === 7) {
        this.$message.error('用户未登录，请先登陆')
        this.$router.push({ path: '/login' })
        return false
      }
      this.form.img = response.data
      this.$message.success('封面图上传成功')
    },
    uploadError (err) {
      this.$message.error(`图片上传失败${err}`)
    },
    uploadRowIndex (index) {
      this.openRowIndex = index
    },
    // 删除行
    handleDelete (index) {
      this.$confirm('你确定要删除该行数据吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(() => {
          this.mainTableData.splice(index, 1)
        })
        .catch(() => {})
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
