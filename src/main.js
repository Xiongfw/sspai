import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'

import 'swiper/css/swiper.min.css'
import './assets/styles/reset.scss'

Vue.config.productionTip = false

components.forEach(comp => Vue.component(comp.name, comp))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
