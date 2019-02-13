<template>
  <gov-dialog
    :title="dialogOption[status].title"
    width="80%"
    @handleSubmit="handleSubmit"
    ref="dialog">
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
        <gov-button type="text" @click="rowCell(scope.row, scope.row.$index)" :text="scope.row.$cellEdit ? '保存' : '修改'"></gov-button>
        <gov-button type="text" @click="handleDelete(scope.row.$index)" text="删除"></gov-button>
      </template>
    </avue-crud>
  </gov-dialog>
</template>

<script>
import { mainDialogTableOption } from './const'
export default {
  name: 'mainDialog',
  data () {
    return {
      dialogOption: {
        create: {
          title: '新增文章'
        }
      },
      type: 'text',
      formData: {},
      mainTableData: []
    }
  },
  computed: {
    mainTableOption () {
      return mainDialogTableOption
    }
  },
  props: {
    status: {
      type: String,
      default: 'create'
    }
  },
  methods: {
    open () {
      this.$refs['dialog'].open()
    },
    close () {
      this.$refs['dialog'].close()
    },
    handleSubmit () {
      console.log(this.formData)
    },
    handleAddTableData () {
      this.mainTableData.push({
        type: this.type,
        context: ''
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
    // 删除行
    handleDelete (index) {
      this.$confirm('你确定要删除该行数据吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.mainTableData.splice(index, 1)
      }).catch(() => {})
    }
  }
}
</script>
