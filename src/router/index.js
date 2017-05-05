import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ElementProfile from '@/components/ElementProfile'
import PeriodicTable from '@/components/PeriodicTable'
import PeriodicTableOptions from '@/components/Sidebar/PeriodicTableOptions'
import ElementProfileOptions from '@/components/Sidebar/ElementProfileOptions'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'PeriodicTable',
          components: {
            default: PeriodicTable,
            sidebar: PeriodicTableOptions
          }
        },
        {
          path: 'element/:id',
          name: 'ElementProfile',
          components: {
            default: ElementProfile,
            sidebar: ElementProfileOptions
          }
        },
        {
          path: 'about',
          name: 'About',
          component: About
        }
      ]
    }
  ]
})
