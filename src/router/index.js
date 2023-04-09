import Vue from 'vue'
import VueRouter from 'vue-router'
import BigScreenShow from '../components/BigScreenShow'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/screen',
    component: BigScreenShow
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
