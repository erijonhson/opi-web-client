import http from './http'

export function login (user) {
  return http.server.post(`${http.baseUrl}/users/login`, user)
}

export function setToken (token) {
  localStorage.setItem('opi-user-token', JSON.stringify(token))
}

export function getToken () {
  return JSON.parse(localStorage.getItem('opi-user-token'))
}

export function setRoleUser (role) {
  localStorage.setItem('opi-user-roles', JSON.stringify(role))
}

export function getRoleUser () {
  return JSON.parse(localStorage.getItem('opi-user-roles'))
}

export function logout () {
  localStorage.removeItem('opi-user-token')
  localStorage.removeItem('opi-user-roles')
}
