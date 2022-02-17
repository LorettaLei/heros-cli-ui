import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.less'
import Scroll from '@/components/Scroll.vue'

if (process.env.VUE_APP_VCONSOLE) {
  require('./utils/vconsole')
}

Vue.config.productionTip = false

Vue.component('scroll', Scroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
