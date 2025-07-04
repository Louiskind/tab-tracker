import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld // display HelloWorld component
    },

    {
      path: '/register',
      name: 'register',
      component: Register // display Register component
    }
  ]
})
