export default {
  data () {
    return {
      wenzhangList: [],
    }
  },
  created () {
    this.axios.get('/getBreviaryArticleList', {
      params: {
        page: 0,
        pageNum: 9999,
        title: '',
        tags: JSON.stringify(['文章']),
      },
    }).then(({ data }) => {
      this.wenzhangList = data.data.data.map(item => {
        return JSON.parse(item)
      })
    })
  },
  computed: {
    mainDialogTableOption () {
      return {
        header: false,
        menu: false,
        page: false,
        border: true,
        index: true,
        column: [
          {
            label: '类型',
            prop: 'type',
            width: '100px',
            align: 'center',
            type: 'dic',
            dicData: [
              {
                value: 'text',
                label: '文本',
              }, {
                value: 'list',
                label: '列表',
              }, {
                value: 'img',
                label: '图片',
              }, {
                value: 'title',
                label: '标题',
              },
            ],
          }, {
            label: '内容',
            prop: 'context',
            cell: true,
            type: 'select',
            dicData: this.wenzhangList,
            props: {
              label: 'title',
              value: 'filename',
            },
          }, {
            label: '操作',
            prop: 'menu',
            solt: true,
            align: 'center',
            width: 150,
          },
        ],
      }
    },
  },
}
