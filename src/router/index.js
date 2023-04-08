import Vue from 'vue'
import VueRouter from 'vue-router'
import Screen from '../views/screen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/screen',
    component: Screen
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
