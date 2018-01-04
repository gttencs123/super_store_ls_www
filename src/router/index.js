import Vue from 'vue'
import Router from 'vue-router'
import start from '@/views/start'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: start
  }]
})
