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
    params: params
  })
}

export function saveArticle (formData) {
  return axios.post('/server/', formData)
}
