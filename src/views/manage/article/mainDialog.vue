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
        <gov-button type="add"></gov-button>
      </el-col>
    </el-row>
    <avue-crud
      ref="crud"
      :data="tableData"
      :option="mainTableOption"
      v-model="obj"
      @row-update="rowUpdate"
    ></avue-crud>
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
      tableData: []
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
    }
  }
}
</script>
