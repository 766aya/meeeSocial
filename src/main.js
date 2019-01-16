import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import router from './router'
import './registerServiceWorker'
import '@/assets/iconfonts/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueI18n)

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
