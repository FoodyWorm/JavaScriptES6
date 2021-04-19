import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex);

new Vue({
  el: '#app',
  // 이 모든 컴포넌트 html 파일로 전환하는 함수
  render: h => h(App)
})
