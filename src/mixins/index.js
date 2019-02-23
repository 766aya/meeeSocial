export default {
  data () {
    return {
      // 分页
      pagination: {
        currentPage: 1, // 当前页码
        pageSize: 10, // 显示多少条
        total: 0, // 总条数
        pageSizes: [10, 20, 30, 40, 50],
      },
      listQuery: {},
      tableLoading: false,
    }
  },
  watch: {
    'pagination.currentPage': {
      handler (newVal) {
        this.listQuery.page = newVal
      },
      deep: true,
      immediate: true,
    },
    'pagination.pageSize': {
      handler (newVal) {
        this.listQuery.pageNum = newVal
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    // 列表
    getList () {},
    // 列表搜索
    handleFilter () {
      for (let key in this.listQuery) {
        if (this.listQuery[key] === '') {
          this.listQuery[key] = undefined
        }
      }
      this.pagination.currentPage = 1
      setTimeout(() => {
        this.getList()
      }, 10)
    },
    // 分页显示个数
    sizeChange (val) {
      this.pagination.currentPage = 1
      this.pagination.pageSize = val
      setTimeout(() => {
        this.getList()
      }, 10)
    },
    // 分页当前页
    currentChange (val) {
      this.pagination.currentPage = val
      setTimeout(() => {
        this.getList()
      }, 10)
    },
    // 重置搜索数据
    handleReset () {
      this.resetFormData(this.listQuery)
      this.listQuery.page = this.pagination.currentPage
      this.listQuery.pageNum = this.pagination.pageSize
    },
  },
}
