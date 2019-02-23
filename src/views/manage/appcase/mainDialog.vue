<template>
  <gov-dialog
    :title="dialogOption[status].title"
    width="80%"
    @handleSubmit="handleSubmit"
    ref="dialog"
  >
    <avue-form ref="mainForm" :option="mainFormOption" v-model="form"></avue-form>
    <el-row :gutter="20" align="middle" type="flex">
      <el-col span="24">
        <el-upload
          class="upload-demo2"
          action="/uploadPhoto"
          :show-file-list="false"
          :on-success="uploadHeaderImg"
          :on-error="uploadError"
        >
          <gov-button type="primary" text="上传封面图片"></gov-button>
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
import { mainDialogTableOption, mainDialogFormOption } from './const';
import { saveCaseArticle, updateCaseArticle } from '@/views/manage/apis/case';

export default {
  name: 'mainDialog',
  data () {
    return {
      dialogOption: {
        create: {
          title: '新增案例',
        },
        update: {
          title: '修改案例',
        },
      },
      type: 'text',
      formData: {},
      mainTableData: [
        {
          type: '成功案例',
        },
        {
          type: '品牌故事',
        },
        {
          type: '营销目标',
        },
        {
          type: '解决方案',
        },
        {
          type: '品牌成功',
        },
      ], // 文章主体内容
      form: {}, // 外层内容
      openRowIndex: 0,
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
        this.mainTableData = formData.data
        console.log(this.mainTableData)
      } else {
        this.mainTableData = [
          {
            type: '成功案例',
          },
          {
            type: '品牌故事',
          },
          {
            type: '营销目标',
          },
          {
            type: '解决方案',
          },
          {
            type: '品牌成功',
          },
        ]
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
    handleAddTableData () {
      this.mainTableData.push({
        type: this.type,
        context: '',
      })
    },
    rowCell (row, index) {
      this.$refs.crud.rowCell(row, index)
    },
    rowUpdate (form, index, done) {
      done()
    },
    uploadSuccess (response) {
      if (response.msg) {
        this.$message.error(response.msg)
        this.$router.push({ name: 'login' })
      }
      this.$set(
        this.mainTableData[this.openRowIndex],
        'context',
        response.data
      )
      this.$message.success('图片上传成功')
    },
    uploadHeaderImg (response) {
      this.form.img = response.data
      this.$message.success('封面图上传成功')
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
