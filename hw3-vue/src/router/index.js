import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited
    component: () => import('../views/SignupView.vue')
  }, 
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/SignupView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router