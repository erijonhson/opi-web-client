import Vue from 'vue'

Vue.http.options.root = 'http://localhost:5000/OpiRestApi/'

Vue.http.interceptors.request.use((config) => {
  const token = localStorage.getItem('user-token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, (err) => {
  return Promise.reject(err)
})

const server = Vue.http

export default {
  server,
  baseUrl: 'http://localhost:5000/OpiRestApi/'
}
