import Vue from 'vue'
import App from './App.vue'

// Stylesheets
import './assets/styles/entry.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
