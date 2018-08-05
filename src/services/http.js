/**
 * Copyright (C) 2018 Embedded Systems and Pervasive Computing Lab - UFCG
 * All rights reserved.
 */

import Vue from 'vue'

Vue.http.options.root = 'http://localhost:5000/OpiRestApi/'
const server = Vue.http

export default {
  server,
  baseUrl: 'http://localhost:5000/OpiRestApi/'
}
