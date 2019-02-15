import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Avue from '@smallwei/avue/lib/index.js'

import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '@/assets/iconfonts/iconfont.css'
import '@/style/common.scss'
import '@smallwei/avue/lib/theme-chalk/index.css'

import banner from '@/components/banner'
import crumbs from '@/components/crumbs'
import channel from '@/components/channel'
import description from '@/components/description'
import listTitle from '@/components/listTitle'
import GovButton from '@/components/govButton/index'
import GovSearchBar from '@/components/govSearchBar/index'
import GovDialog from '@/components/govDialog/index'

const components = [
  banner,
  crumbs,
  channel,
  description,
  listTitle,
  GovButton,
  GovSearchBar,
  GovDialog,
]

components.forEach(component => {
  Vue.component(component.name, component)
})

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Avue, Axios)
Vue.use(VueAxios, Axios)

// Axios.interceptors.response.use((response) => {
//   console.log(response)
// if (response.data.code === 0) {
// return Promise.resolve(response)
// } else {
// router.push({ path: '/login' })
// return Promise.reject(response)
// }
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
