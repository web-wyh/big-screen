import Vue from 'vue'
import VueRouter from 'vue-router'
import BigScreenShow from '../components/BigScreenShow'
import store from '../store/index'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/bigScreen',
    component: BigScreenShow,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})
router.beforeEach((to, from, next) => {
  const token = store.state.token
  //  || sessionStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})
export default router
