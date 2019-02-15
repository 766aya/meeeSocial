<template>
  <gov-dialog
    :title="dialogOption[status].title"
    width="80%"
    @handleSubmit="handleSubmit"
    ref="dialog">
    <avue-form ref="mainForm" :option="mainFormOption" v-model="form"></avue-form>
    <el-row :gutter="20" align="middle" type="flex">
      <el-col :span="4">
        <el-select v-model="type">
          <el-option value="text" label="文本"></el-option>
          <el-option value="list" label="列表"></el-option>
          <el-option value="img" label="图片"></el-option>
        </el-select>
      </el-col>
      <el-col span="20">
        <gov-button type="add" @click="handleAddTableData"></gov-button>
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
        <gov-button type="text" @click="rowCell(scope.row, scope.row.$index)" :text="scope.row.$cellEdit ? '保存' : '修改'" v-if="scope.row.type!=='img'"></gov-button>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :file-list="fileList"
          :show-file-list="false"
          @on-success="uploadSuccess"
          v-if="scope.row.type==='img'">
          <gov-button type="text" text="上传图片" ></gov-button>
        </el-upload>
        <gov-button type="text" @click="handleDelete(scope.row.$index)" text="删除"></gov-button>
      </template>
    </avue-crud>
  </gov-dialog>
</template>

<script>
import { mainDialogTableOption, mainDialogFormOption } from './const'
import { saveArticle } from '@/views/manage/apis/article'

export default {
  name: 'mainDialog',
  data () {
    return {
      dialogOption: {
        create: {
          title: '新增文章',
        },
      },
      type: 'text',
      formData: {},
      fileList: [],
      mainTableData: [], // 文章主体内容
      form: {}, // 外层内容
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
    open () {
      this.$refs['dialog'].open()
    },
    close () {
      this.$refs['dialog'].close()
    },
    handleSubmit () {
      this.form.content = this.mainTableData
      console.log(this.form)
      saveArticle(this.form).then(res => {
        console.log(res)
        this.close()
        this.$emit('getList')
      })
    },
    handleAddTableData () {
      this.mainTableData.push({
        type: this.type,
        context: '',
      })
    },
    rowCell (row, index) {
      console.log(row, index)
      this.$refs.crud.rowCell(row, index)
    },
    rowUpdate (form, index, done) {
      console.log('rowUpdate', form, index)
      done()
    },
    uploadSuccess (response, file, fileList) {
      console.log('uploadSuccess', response, file, fileList)
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
  },
}
</script>

<style lang="scss" scoped>
  .upload-demo {
    display: inline-block;
    margin-right: 10px;
  }
</style>
