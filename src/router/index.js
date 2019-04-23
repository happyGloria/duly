import Vue from 'vue'
import Router from 'vue-router'
import ToolPage from '@/components/ToolPage'
import Cloudedevelopment from '@/components/Cloudedevelopment'

Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToolPage',
      component: ToolPage
    },
    {
      path: '/Cloudedevelopment',
      name: 'Cloudedevelopment',
      component: Cloudedevelopment,
    
    }
  ]
})
