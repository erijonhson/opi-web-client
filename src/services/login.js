/**
 * Copyright (C) 2018 Embedded Systems and Pervasive Computing Lab - UFCG
 * All rights reserved.
 */

export default {
  setRoleUser (role) {
    localStorage.setItem('roles', JSON.stringify(role))
  },

  getRoleUser () {
    return JSON.parse(localStorage.getItem('roles'))
  },

  logout () {
    localStorage.removeItem('default_auth_token')
    localStorage.removeItem('roles')
  }
}
