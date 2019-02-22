<template>
  <div>
    <gov-search-bar
      :listQuery="listQuery"
      :formProps="formProps"
      @handleFilter="handleFilter"
    />
    <gov-button type="primary" @click="newly">新增视频课程</gov-button>
    <avue-crud
      :table-loading="tableLoading"
      @size-change="sizeChange"
      @current-change="currentChange"
      :page="pagination"
      :data="mainTableData"
      :option="mainTableOption">
      <template slot-scope="scope" slot="menu">
        <div class="table-btn-group">
          <gov-button type="text" @click="handleUpdate(scope.row)" text="修改"></gov-button>
          <gov-button type="text" @click="handleDelete(scope.row)" text="删除"></gov-button>
        </div>
      </template>
    </avue-crud>
    <mainDialog ref="mainDialog"></mainDialog>
  </div>
</template>

<script>
import mixins from '@/mixins/index'
import { searchOption, mainTableOption } from './const/index'
import { getMainTableData } from '@/views/manage/apis/vedio'
import mainDialog from './mainDialog'

export default {
  name: 'appCase',
  mixins: [mixins],
  components: { mainDialog },
  data () {
    return {
      mainTableData: [],
    }
  },
  computed: {
    formProps () {
      return searchOption
    },
    mainTableOption () {
      return mainTableOption
    },
  },
  methods: {
    getList () {
      this.tableLoading = true
      getMainTableData(this.listQuery).then(({ data }) => {
        this.tableLoading = false
        if (data.code !== 0) {
          this.$message.error(data.msg)
          return false
        }
        this.pagination.total = data.data.total
        this.mainTableData = data.data.data.map(item => {
          return JSON.parse(item)
        })
      })
    },
    newly () {
      this.$refs['mainDialog'].open()
    },
    handleUpdate (row) {
      console.log('handleUpdate', row)
    },
    handleDelete (row) {
      console.log('handleDelete', row)
    },
  },
  created () {
    this.getList()
  },
}
</script>
