import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SinglePost.vue')
  }, 
  {
    path: '/new',
    name: 'NewPostPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewPostPage.vue')
  },
  {
    path: '/users',
    name: 'AllUsers',
    component: () => import(/* webpackChunkName: "about" */ '../views/AllUsers.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
