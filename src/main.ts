import Vue from 'vue'
import App from './App.vue'

// Stylesheets
import './assets/styles/entry.scss'

// Sal.js
import sal from 'sal.js'
import 'sal.js/dist/sal.css';

// Axios
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    sal({
      threshold: 1,
    })
    window.scrollTo(0, 0)
  }
}).$mount('#app')
