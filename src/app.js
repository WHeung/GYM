import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './directives/iScroll'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')
