import Vue from 'vue'
import Router from 'vue-router'
import start from '@/views/start'

import dashboard from '@/views/dashboard'

import product from '@/views/product/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'start',
    component: start
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    children: [{
      path: 'product',
      name: 'product',
      component: product
    }]
  }]
})
