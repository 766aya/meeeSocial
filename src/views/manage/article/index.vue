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
      :data="tableList"
      :option="mainTableOption">
      <template slot-scope="scope" slot="menu">
        <div class="table-btn-group">
          <gov-button type="text" @click="handleDetail(scope.row)" text="详情"></gov-button>
          <gov-button type="text" @click="handleUpdate(scope.row)" text="修改"></gov-button>
          <gov-button type="text" @click="handleDelete(scope.row)" text="删除"></gov-button>
        </div>
      </template>
    </avue-crud>
    <mainDialog ref="mainDialog"></mainDialog>
  </div>
</template>

<script>
import { mainTableOption } from './const'
import mainDialog from './mainDialog'

export default {
  name: 'article',
  components: { mainDialog },
  data () {
    return {
      formProps: [
        {
          label: '文章名称',
          prop: 'name'
        }
      ]
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
      setTimeout(() => {
        this.tableLoading = false
      }, 500)
    },
    newly () {
      this.$refs['mainDialog'].open()
    }
  },
  created () {
    this.getList()
  }
}
</script>
