export const mainTableOption = {
  header: false,
  menu: false,
  page: false,
  border: true,
  column: [
    {
      label: '文章名称',
      prop: 'name'
    }, {
      label: '文章标签',
      prop: 'tips'
    }, {
      label: '创建时间',
      prop: 'createTime'
    }, {
      label: '修改时间',
      prop: 'updateTime'
    }, {
      label: '菜单',
      prop: 'menu',
      solt: true,
      align: 'center'
    }
  ]
}

export const mainDialogTableOption = {
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
          label: '文本'
        }, {
          value: 'list',
          label: '列表'
        }, {
          value: 'img',
          label: '图片'
        }
      ]
    }, {
      label: '内容',
      prop: 'context'
    }
  ]
}
