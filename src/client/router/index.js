import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
const aboutIndex = r => require.ensure([], () => r(require('./../views/about/aboutIndex')), 'about')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "首页",
        keepAlive: false
      }
    },{
      path: '/aboutIndex',
      name: 'aboutIndex',
      component: aboutIndex,
      meta: {
        title: "首页",
        keepAlive: false
      }
    }
  ]
})
