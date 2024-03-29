import Vue from 'vue'
import App from './App.vue'
import './assets/sass/style.scss'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
