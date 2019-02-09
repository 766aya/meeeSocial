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
        label: '飞书服务'
      }
    }, {
      name: 'case',
      path: '/case',
      component: () => import('@/views/layout'),
      redirect: '/case/index',
      meta: {
        label: '成功案例',
        text: true
      },
      children: [
        {
          path: 'index',
          component: () => import('@/views/case/index'),
          meta: {
            label: '全部案例',
            text: true
          }
        }, {
          path: 'appCase',
          component: () => import('@/views/case/index'),
          meta: {
            label: 'APP案例',
            text: true
          }
        }, {
          path: 'appCase/:id',
          component: () => import('@/page/article-two.vue'),
          meta: {
            label: 'APP案例',
            text: true
          }
        }, {
          path: 'gameCase',
          component: () => import('@/views/case/index'),
          meta: {
            label: '游戏案例',
            text: true
          }
        }, {
          path: 'brandCase',
          component: () => import('@/views/case/index'),
          meta: {
            label: '品牌案例',
            text: true
          }
        }, {
          path: 'shopCase',
          component: () => import('@/views/case/index'),
          meta: {
            label: '电商案例',
            text: true
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
    }, {
      path: '/marketing',
      component: () => import('@/views/marketing/layout.vue'),
      redirect: '/marketing/index',
      meta: {
        label: '营销学院',
        text: true
      },
      children: [
        {
          path: '/marketing/faq',
          component: () => import('@/views/marketing/acticleList.vue'),
          meta: {
            label: '互动问答',
            text: true,
            title: 'faq'
          }
        }, {
          path: '/marketing/faq/:id',
          component: () => import('@/page/article-one.vue'),
          meta: {
            label: '互动问答',
            text: true,
            title: 'faq'
          }
        }, {
          path: '/marketing/wiki',
          component: () => import('@/views/marketing/acticleList.vue'),
          meta: {
            label: '营销百科',
            text: true,
            title: 'wiki'
          }
        }, {
          path: '/marketing/wiki/:id',
          component: () => import('@/page/article-one.vue'),
          meta: {
            label: '营销百科',
            text: true,
            title: 'wiki'
          }
        }, {
          path: '/marketing/news',
          component: () => import('@/views/marketing/acticleList.vue'),
          meta: {
            label: '行业资讯',
            text: true,
            title: 'news'
          }
        }, {
          path: '/marketing/news/:id',
          component: () => import('@/page/article-one.vue'),
          meta: {
            label: '行业资讯',
            text: true,
            title: 'news'
          }
        }, {
          path: '/marketing/paper',
          component: () => import('@/views/marketing/acticleList.vue'),
          meta: {
            label: '行业白皮书',
            text: true,
            title: 'paper'
          }
        }, {
          path: '/marketing/paper/:id',
          component: () => import('@/page/article-one.vue'),
          meta: {
            label: '行业白皮书',
            text: true,
            title: 'paper'
          }
        }
      ]
    }, {
      path: '/marketing/index',
      component: () => import('@/views/marketing/index.vue'),
      meta: {
        label: '首页',
        text: true
      }
    }, {
      path: '/marketing/classes',
      component: () => import('@/views/marketing/layout.vue'),
      meta: {
        label: '在线课堂',
        text: true
      }
    }
  ]
})
