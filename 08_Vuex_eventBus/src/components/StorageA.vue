<template>
<div>
   <h1>StorageA</h1>
   <button v-on:click="set">데이터 보내기</button>
   <h3>보낸 데이터: {{ setData }} </h3>
</div>
</template>

<script>
import { Events } from '../main';

export default {
    data() {
        return {
            setData: "setData"
        }
    },
    methods: {
        set() {
            console.log("Try Set");
            console.log("Set Data: " + this.setData);
            Events.$emit('event', this.setData);
            //Events.datas.push(this.setData);
        }
    }
    
}
</script>



<style scoped>

</style>
