import Vue from 'vue'
import Router from 'vue-router'
import ToolPage from '@/components/ToolPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToolPage',
      component: ToolPage
    }
  ]
})
