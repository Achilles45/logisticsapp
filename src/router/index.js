import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About'
import Request from '../views/Request'
import Tracking from '../views/Tracking'
import Package from '../views/Package'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/request',
    name: 'Request',
    component: Request
  },
  {
    path: '/tracking/:id',
    name: 'Tracking',
    component: Tracking
  },
  {
    path: '/package',
    name: 'Package',
    component: Package
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
