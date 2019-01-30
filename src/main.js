import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '@/assets/iconfonts/iconfont.css'
import '@/style/common.scss'

import banner from '@/components/banner'
import crumbs from '@/components/crumbs'
import channel from '@/components/channel'
import description from '@/components/description'
import listTitle from '@/components/listTitle'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.component('banner', banner)
Vue.component('crumbs', crumbs)
Vue.component('channel', channel)
Vue.component('govDesc', description)
Vue.component('listTitle', listTitle)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
