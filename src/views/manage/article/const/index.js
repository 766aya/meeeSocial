export const mainTableOption = {
  header: false,
  menu: false,
  page: true,
  border: true,
  column: [
    {
      label: '文章名称',
      prop: 'title'
    }, {
      label: '文章标签',
      prop: 'tips',
      type: 'dic',
      dicData: [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' }
      ]
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
      prop: 'context',
      cell: true
    }, {
      label: '操作',
      prop: 'menu',
      solt: true,
      align: 'center',
      width: 150
    }
  ]
}

export const mainDialogFormOption = {
  labelWidth: '100',
  menuBtn: false,
  column: [
    {
      label: '文章标题',
      prop: 'title',
      span: 12
    }, {
      label: '描述',
      prop: 'desc',
      span: 12
    }, {
      label: '发布人',
      prop: 'publisher',
      type: 'select',
      dicData: [
        { label: '管理员', value: 'admin' },
        { label: '飞书互动', value: 'faceBook' }
      ]
    }, {
      label: '文章标签',
      prop: 'tips',
      type: 'select',
      multiple: true,
      dicData: [
        { label: 'FaceBook', value: 'FaceBook' },
        { label: 'faceBook推广', value: 'faceBook推广' },
        { label: 'Instagram广告', value: 'Instagram广告' },
        { label: 'Instagram广告投放', value: 'Instagram广告投放' }
      ]
    }
  ]
}
