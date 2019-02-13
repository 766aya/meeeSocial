<template>
  <div>
    <gov-search-bar
      :listQuery="listQuery"
      :formProps="formProps"
      @handleFilter="handleFilter"
    />
    <gov-button type="primary" @click="newly">新增文章</gov-button>
    <avue-crud
      :table-loading="tableLoading"
      @size-change="sizeChange"
      @current-change="currentChange"
      :page="pagination"
      :data="mainTableData"
      :option="mainTableOption">
      <template slot-scope="scope" slot="menu">
        <div class="table-btn-group">
          <gov-button type="text" @click="handleDetail(scope.row)" text="详情"></gov-button>
          <gov-button type="text" @click="handleUpdate(scope.row)" text="修改"></gov-button>
          <gov-button type="text" @click="handleDelete(scope.row)" text="删除"></gov-button>
        </div>
      </template>
    </avue-crud>
    <mainDialog ref="mainDialog" @getList="getList"></mainDialog>
  </div>
</template>

<script>
import { mainTableOption } from './const'
import mainDialog from './mainDialog'
import { getMainTableData } from '@/views/manage/apis/article'
import mixins from '@/mixins/index'

export default {
  name: 'article',
  components: { mainDialog },
  mixins: [mixins],
  data () {
    return {
      formProps: [
        {
          label: '文章名称',
          prop: 'name'
        }
      ],
      mainTableData: []
    }
  },
  computed: {
    mainTableOption () {
      return mainTableOption
    }
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
    handleDetail (row) {

    },
    handleUpdate (row) {

    },
    handleDelete (row) {

    }
  },
  created () {
    this.getList()
  }
}
</script>
