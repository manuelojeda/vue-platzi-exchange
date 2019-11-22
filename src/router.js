import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import CoinDetail from '@/views/CoinDetail'
import Error from '@/views/Error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/coin/:id',
    name: 'coin-detail',
    component: CoinDetail
  },
  {
    path: '*',
    name: 'error',
    component: Error
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
