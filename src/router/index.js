import Vue from 'vue'
import Router from 'vue-router'
import goodsView from '~src/views/goodsView/index.vue'
import detailView from '~src/views/detailView/index.vue'
import filterView from '~src/views/filterView/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/goods', name: 'goodsView', component: goodsView },
    { path: '/detail/:id', name: 'detailView', component: detailView },
    { path: '/filter', name: 'filterView', component: filterView }
  ]
})
