import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Taiwan from '../views/Taiwan.vue'
import Member from '../views/Member.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }
  ,
  {
    path: '/TodoList',
    name: 'TodoList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoList.vue')
  },
  {
    path: '/Taiwan',
    name:Taiwan,
    component:Taiwan
  },
  {
    path:'/Member',
    name:Member,
    component:Member
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
