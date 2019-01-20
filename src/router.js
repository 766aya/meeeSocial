import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index/index')
    }, {
      name: 'service',
      path: '/service',
      component: () => import('./views/service'),
      meta: {
        label: 'routerMap.service.index'
      }
    }, {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
