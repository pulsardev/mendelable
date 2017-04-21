import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ElementCard from '@/components/ElementCard'
import PeriodicTable from '@/components/PeriodicTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: PeriodicTable
        },
        {
          path: 'element/:symbol',
          component: ElementCard
        }
      ]
    }
  ]
})
