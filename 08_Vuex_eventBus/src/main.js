import Vue from 'vue'
import App from './App.vue'

export const Events = new Vue({
  data: {
    datas: []
    
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
