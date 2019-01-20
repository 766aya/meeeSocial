import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'
import '@/assets/iconfonts/iconfont.css'
import '@/style/common.scss'

import banner from '@/components/banner'
import crumbs from '@/components/crumbs'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)

Vue.component('banner', banner)
Vue.component('crumbs', crumbs)

const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
