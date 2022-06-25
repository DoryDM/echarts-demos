import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'indexPage',
      component: () => import('./views/index.vue')
    },
    {
      path: '/setColorChart',
      name: 'setColorChart',
      component: () => import('./views/simpleChart/demo-01')
    },
    {
      path: '/setColorChart2',
      name: 'setColorChart2',
      component: () => import('./views/simpleChart/demo-02.vue')
    },
    {
      path: '/customChart',
      name: 'customChart',
      component: () => import('./views/customChart/customChartIcon.vue')
    }
  ]
})