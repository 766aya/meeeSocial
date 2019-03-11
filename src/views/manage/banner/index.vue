<template>
  <div>
    <gov-search-bar :listQuery="listQuery" :formProps="formProps" @handleFilter="handleFilter"/>
    <gov-button type="primary" @click="newly">新增轮播</gov-button>
    <avue-crud
      :table-loading="tableLoading"
      @size-change="sizeChange"
      @current-change="currentChange"
      :page="pagination"
      :data="mainTableData"
      :option="mainTableOption"
    >
      <template slot-scope="scope" slot="menu">
        <div class="table-btn-group">
          <gov-button type="text" @click="handleUpdate(scope.row)" text="修改"></gov-button>
          <gov-button type="text" @click="handleDelete(scope.row)" text="删除"></gov-button>
        </div>
      </template>
    </avue-crud>
    <mainDialog ref="mainDialog" @getList="getList" :status="status"></mainDialog>
  </div>
</template>

<script>
import mixins from '@/mixins/index'
import { searchOption, mainTableOption } from './const/index'
import { getMainTableData } from '@/views/manage/apis/banner'
import mainDialog from './mainDialog'

export default {
  name: 'appCase',
  mixins: [mixins],
  components: { mainDialog },
  data () {
    return {
      mainTableData: [],
      status: 'create',
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
      this.status = 'create'
      this.$refs['mainDialog'].open()
    },
    handleUpdate (row) {
      this.axios
        .get('/getArticle', { params: { filename: row.filename } })
        .then(({ data }) => {
          this.status = 'update'
          this.$refs['mainDialog'].open(JSON.parse(data.data))
        })
    },
    handleDelete (row) {
      this.$confirm('此操作将永久删除该轮播, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.axios
            .get('/delArticle', {
              params: { filename: row.filename },
            })
            .then(({ data }) => {
              if (data.code === 0) {
                this.$message({ type: 'success', message: '删除成功!' })
                this.getList()
              } else {
                this.$message.error('删除失败')
              }
            })
        })
        .catch(() => {})
    },
  },
  created () {
    this.getList()
  },
}
</script>
