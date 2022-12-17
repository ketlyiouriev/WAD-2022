import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import auth from "../auth"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
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
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: () => import('../views/AddPostView.vue')
  },
  {
    path: '/apost',
    name: 'apost',
    component: () => import('../views/APostView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router