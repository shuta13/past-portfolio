import Vue from 'vue'
import Router from 'vue-router'

import Root from './components/Root.vue'
import Works from './components/Works.vue'
import Works2 from './components/Works2.vue'
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
      path: '/works',
      component: Works
    },
    {
      path: '/works2',
      component: Works2
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