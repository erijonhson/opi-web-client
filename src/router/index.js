import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import {getRoleUser, logout} from '@/services/authentication/'

Vue.use(Router)

Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:5000/OpiRestApi/'

Vue.router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'opiHome',
      component: () => import('@/pages/home/Home'),
      meta: {
        layout: 'default',
        auth: false
      }
    },
    {
      path: '/login',
      name: 'opiLogin',
      component: () => import('@/pages/authentication/Login'),
      meta: {
        layout: 'center',
        auth: false
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

// autorization
Vue.router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const roles = getRoleUser()
    const rolesUser = roles instanceof Array ? roles : [roles]
    if (!rolesUser) {
      next('/users/login')
    } else {
      let authorized = false
      for (let i = 0; i < rolesUser.length; i++) {
        if (to.meta.roles.includes(rolesUser[i])) {
          authorized = true
          break
        }
      }
      if (authorized) {
        next()
      } else {
        logout()
      }
    }
  } else {
    next()
  }
})

export default Vue.router
