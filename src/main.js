import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$Axios = Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
