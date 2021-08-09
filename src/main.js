import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './css/main.css'
import './css/noscript.css'
import './css/style.css'
import axios from 'axios'
import jquery from 'jquery'
import './js/util.js'
import './js/browser.min'

window.jquery = window.$ = jquery


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
