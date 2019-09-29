import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Login',
      component: () => import('./views/simpleCharts/index.vue')
    },
      {
        path: '/customizeChart',
        name: 'customizeChart',
        component: () => import('./views/simpleCharts/customizeChart.vue')
    },
    {
      path: '/customizeChart2',
      name: 'customizeChart',
      component: () => import('./views/simpleCharts/customizeChart2.vue')
    }
  ]
})