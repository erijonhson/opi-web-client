/**
 * Copyright (C) 2018 Embedded Systems and Pervasive Computing Lab - UFCG
 * All rights reserved.
 */

import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import LoginService from '@/services/login'

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
        layout: 'basic',
        auth: false
      }
    }
  ]
})

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/basic.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  loginData: {url: 'api/delegates/login', method: 'POST', fetchUser: false},
  fetchData: {enabled: false},
  refreshData: {enabled: false},
  tokenStore: ['localStorage'],
//  notFoundRedirect: {path: '/path'},
  authRedirect: {path: '/users/login'},
//  forbiddenRedirect: {path: '/403'}
})

// autorization
Vue.router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const roles = LoginService.getRoleUser()
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
        LoginService.logout()
      }
    }
  } else {
    next()
  }
})

export default Vue.router
