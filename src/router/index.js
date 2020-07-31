import Vue from 'vue'
import Router from 'vue-router'
import markup from '@/views/markup'
import call from '@/views/call/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/markup',
      name: 'markup',
      component: markup
    },
    {
      path: '/call',
      name: 'call',
      component: call
    }
  ]
})
