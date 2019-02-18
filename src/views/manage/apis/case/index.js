import axios from 'axios'

export function getMainTableData ({
  ...params
}) {
  if (!params.title) {
    params.title = ''
  }
  params.tags = JSON.stringify([])
  params.page--
  return axios.get('/getBreviaryArticleList', {
    params: params,
  })
}

export function saveCaseArticle (formData) {
  formData.filename = '无文件名'
  let date = new Date()
  formData.createTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  formData.updateTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  return axios.post(`/uploadArticle`, { data: JSON.stringify(formData) })
}

export function updateCaseArticle (formData) {
  let date = new Date()
  formData.updateTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  return axios.post(`/updateArticle`, { data: JSON.stringify(formData) })
}
