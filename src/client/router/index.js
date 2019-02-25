import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
const aboutIndex = r => require.ensure([], () => r(require('./../views/about/aboutIndex')), 'about')
const wowSlider = r => require.ensure([], () => r(require('./../views/about/wowSlider')), 'wowSlider')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "首页",
        keepAlive: true
      }
    },{
      path: '/aboutIndex',
      name: 'aboutIndex',
      component: aboutIndex,
      meta: {
        title: "首页",
        keepAlive: true
      }
    },{
      path: '/wowSlider',
      name: 'wowSlider',
      component: wowSlider,
      meta: {
        title: "首页",
        keepAlive: false
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: -667 }
  }
})
