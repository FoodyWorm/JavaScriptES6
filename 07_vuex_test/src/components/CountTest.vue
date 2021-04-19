<template>
<div>
    <h1>Vuex Test</h1>
    <h3>{{ count }}</h3>
    <button v-on:click="plus">+</button>
    <button v-on:click="minus">-</button>
   
</div>
</template>

<script>
// Vue와 Vuex를 사용하기 위해서 모듈을 가져옴
import Vue from 'vue'
import Vuex from 'vuex'

// 이렇게 해야 Vue에서 Vuex를 인식을 하게됨.
Vue.use(Vuex);

// Vuex의 관리포인트 - Store: (state[상태 Data], mutations[상태변경-동기], actions[상태변경요청-비동기], getter[상태업로드])
const store = new Vuex.Store({
    // 정적인 상태의 데이터 (일반호출 - 값의 변경은 mutations를 통해서만 가능하다.)
    state: {
        count: 0
    },
    // 동적인 상태의 데이터 및 함수 (commit호출)
    mutations: {
        plus(state) {
            console.log("+");
            state.count++;
        },
        minus(state) {
            console.log("-");
            state.count--;
        }
    },
    // mutations를 동기가 아닌 비동기로 제어하기 위한 수단. (dispatch호출)
    actions: {
        // logic
    },
    // computed처럼 계산된 속성. state를 활용하여, view에 바인딩하기 위한 수단.
    getters: {
        // logic
    }
})

// 외부에서도 이 모듈을  사용할 수 있도록 하는 문구 (실질적인 Vue 내용)
export default {
    // 일반적인 고정 데이터값.. 예를 들어서 제목->Vuex Test는 data에 표시하지만, 계산하거나 변하는 데이터는 computed라고 생각하면 된다.
    computed: {
        count() {
            // 이 데이터를 Vuex에 state로 dispathch하였다. 요청한 것은 count. 요청하여 받은 값을 연동한 {{ count }}로 되돌려준다.
            return store.state.count;
        }
    },
    // 어떠한 기능, 로직, 함수는 모두 methods라고 생각하면 된다.
    methods: {
        plus() {
            // Vuex에 commit하여 
            store.commit('plus');  
        },
        minus() {
            store.commit('minus');            
        }
    }
}
// 이러한 데이터들은 새로고침하면 사라진다.
// 그렇기 때문에, 쿠키나 스토리지 혹은 vuex-persistedstate를 활용하여 보완이 필요하다.

</script>

<style scoped>

</style>