// Import the views for the routes.
import Home from './../views/Home.vue'

// Define the routes.
export default [
  {
    path: '/',
    name: 'home',
    title: '<%- projectName -%>',
    text: 'Home',
    component: Home,
  },
]
