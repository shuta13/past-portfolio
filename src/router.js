import Vue from 'vue'
import Router from 'vue-router'

import Root from './components/Root.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'

Vue.use(Router);

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '*',
      redirect: {name: 'root'}
    }
  ]
})

export default router