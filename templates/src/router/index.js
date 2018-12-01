import Vue from 'vue'
import Router from 'vue-router'

// Import routes
import AppRoutes from './appRoutes'

Vue.use(Router)

// Wildcard redirect to base URL for any undefined URLs.
const wildcardRedirect = [
  {
    path: '*',
    redirect: '/',
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...wildcardRedirect, ...AppRoutes],
})
