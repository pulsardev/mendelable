import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ElementProfile from '@/components/ElementProfile'
import PeriodicTable from '@/components/PeriodicTable'
import PeriodicTableOptions from '@/components/Sidebar/PeriodicTableOptions'
import ElementProfileOptions from '@/components/Sidebar/ElementProfileOptions'

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
          components: {
            default: PeriodicTable,
            sidebar: PeriodicTableOptions
          }
        },
        {
          path: 'element/:id',
          components: {
            default: ElementProfile,
            sidebar: ElementProfileOptions
          }
        }
      ]
    }
  ]
})
