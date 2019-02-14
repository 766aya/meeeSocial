import axios from 'axios'

export function getMainTableData (params) {
  if (!params.title) {
    params.title = '1'
  }
  if (!params.tags) {
    params.tags = '[1]'
  } else {
    params.tags = `[${params.tags}]`
  }
  params.page--
  return axios.get('/server/getBreviaryArticleList', {
    params: params,
  })
}

export function saveArticle (formData) {
  formData.filename = '无文件名'
  let date = new Date()
  formData.createTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  formData.updateTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  return axios.post('/server/uploadArticle', { data: JSON.stringify(formData) })
}
