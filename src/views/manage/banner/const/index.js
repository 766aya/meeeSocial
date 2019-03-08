export const searchOption = [
  {
    label: '轮播名称',
    prop: 'title',
  },
]

export const mainTableOption = {
  header: false,
  menu: false,
  page: true,
  border: true,
  column: [
    {
      label: '轮播名称',
      prop: 'title',
    }, {
      label: '轮播标签',
      prop: 'tips',
      type: 'dic',
      dicData: [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
      ],
    }, {
      label: '创建时间',
      prop: 'createTime',
    }, {
      label: '修改时间',
      prop: 'updateTime',
    }, {
      label: '菜单',
      prop: 'menu',
      solt: true,
      align: 'center',
    },
  ],
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
      dicData: [],
    }, {
      label: '操作',
      prop: 'menu',
      solt: true,
      align: 'center',
      width: 150,
    },
  ],
}

export const mainDialogFormOption = {
  labelWidth: '100',
  menuBtn: false,
  column: [
    {
      label: '轮播标题',
      prop: 'title',
      span: 12,
      rules: [
        { required: true, message: '不能为空', trigger: 'blur' },
      ],
    }, {
      label: '描述',
      prop: 'desc',
      span: 12,
      rules: [
        { required: true, message: '不能为空', trigger: 'blur' },
      ],
    }, {
      label: '发布人',
      prop: 'publisher',
      type: 'select',
      dicData: [
        { label: '管理员', value: 'admin' },
        { label: '浩捷亚互动', value: 'faceBook' },
      ],
      rules: [
        { required: true, message: '不能为空', trigger: 'blur' },
      ],
    }, {
      label: '轮播标签',
      prop: 'tips',
      type: 'select',
      multiple: true,
      dicData: [
        { label: '首页', value: '首页' },
        { label: '浩捷亚服务', value: '浩捷亚服务' },
      ],
      rules: [
        { required: true, message: '不能为空', trigger: 'blur' },
      ],
    },
  ],
}
