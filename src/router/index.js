import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../layouts/Catalog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layouts/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layouts/Cart.vue')
  },
  { path: '*', component: () => import(/* webpackChunkName: "about" */ '../layouts/notFound.vue')}

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
