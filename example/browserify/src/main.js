import Vue from 'vue'
import App from './App.vue'
import VuePrint from 'vue-print'

Vue.use(VuePrint)

new Vue({
  el: 'body',
  components: { App }
})
