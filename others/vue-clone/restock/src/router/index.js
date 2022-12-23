import Vue from 'vue'
import VueRouter from 'vue-router'
import StockView from '../views/StockView.vue'
import EconomyView from '../views/EconomyView.vue'
import BalanceView from '../views/BalanceView.vue'
import PortfolioView from '../views/PortfolioView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/stock',
    name: 'stock',
    component: StockView
  },
  {
    path: '/economy',
    name: 'economy',
    component: EconomyView
  },
  {
    path: '/balance',
    name: 'balance',
    component: BalanceView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
    component : PortfolioView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
