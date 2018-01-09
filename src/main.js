// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// plugins
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/plugins/axios'
// components
import svgIconSprites from '@/components/svgIconSprites'

Vue.use(ElementUI)
Vue.use(axios)

Vue.component('svgIconSprites', svgIconSprites)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
