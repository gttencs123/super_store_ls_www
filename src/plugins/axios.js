import Vue from 'vue'
import axios from 'axios'

export default function install () {
  Vue.prototype.$http = axios
}
