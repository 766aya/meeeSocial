import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index/index')
    }, {
      name: 'service',
      path: '/service',
      component: () => import('@/views/service'),
      meta: {
        label: 'routerMap.service.index'
      }
    }, {
      name: 'case',
      path: '/case',
      component: () => import('@/views/case/index'),
      meta: {
        label: '成功案例',
        text: true
      }
    }, {
      path: '/case/appcase',
      component: () => import('@/views/case/appCase/layout'),
      meta: {
        label: 'APP案例',
        text: true
      },
      children: [
        {
          path: '/case/appCase/43',
          component: () => import('@/views/case/appCase/043/index'),
          meta: {
            text: true,
            label: 'Jump Ramp'
          }
        }
      ]
    }, {
      path: '/qudaozixun',
      component: () => import('@/views/qudaozixun/index'),
      meta: {
        label: '渠道资讯',
        text: true
      }
    }
  ]
})
