import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-servers',Home)

// Vue.config.productionTip = false

new Vue({
    el: '#app',
  render: h => h(App),
  // render: h => h(App),
})
