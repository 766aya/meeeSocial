import axios from 'axios'

export function getMainTableData (listQuery) {
  let params = { ...listQuery }
  if (!params.title) {
    params.title = ''
  }
  params.tags = JSON.stringify(['轮播'])
  params.page--
  console.log(params)
  return axios.get('/getBreviaryArticleList', {
    params: params,
  })
}

export function saveCaseArticle (formData) {
  formData.filename = '无文件名'
  let date = new Date()
  formData.tips.push('轮播')
  formData.createTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  formData.updateTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  return axios.post(`/uploadArticle`, { data: JSON.stringify(formData) })
}

export function updateCaseArticle (formData) {
  let date = new Date()
  if (!formData.tips.includes('轮播')) {
    formData.tips.push('轮播')
  }
  formData.updateTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  return axios.post(`/updateArticle`, { data: JSON.stringify(formData) })
}
