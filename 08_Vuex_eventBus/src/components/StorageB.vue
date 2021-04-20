<template>
<div>
   <h1>StorageB</h1>
   <button v-on:click="del">데이터 지우기</button>
   <h3>가져온데이터: {{ getData }} </h3>
</div>
</template>

<script>
import { Events } from '../main';

export default {
    data() {
        return {
            getData: null
        }
    },
    methods: {
        del() {
            console.log("\nDelete Data: " + this.getData);
            this.getData = null
        }
    },
    created: function(){
        // 화살표 함수를 쓰지 않으면, 자신의 data를 인지하지 못한다.. 하.. 쓰레기같은..
        Events.$on('event', (value) => {
            console.log("this.getData: " + this.getData);   
            console.log("\nTry Get");
            console.log("Get Data: " + value);
            console.log("this.getData: " + this.getData);    
            this.getData = value;
            
        })
    }
}
    


</script>

<style scoped>

</style>
