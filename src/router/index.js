import Vue from 'vue'
import Router from 'vue-router'
import MapView from '~src/views/map/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/map', name: 'MapView', component: MapView }
  ]
})
