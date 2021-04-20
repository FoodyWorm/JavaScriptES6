<template>
<div>
   <h1>EventBus</h1>
   <h3>저장된 데이터: {{ storageData }}</h3>
   
</div>
</template>

<script>
import Events from '../main'
// Event Bus를 하나의 실제 허브처럼 사용하는 것은 불가능 한 것 같다.
export default {
    data() {
       return {
         storageData: ""
         // storageData: Events.data.datas
      }     
    }
}
</script>



<style scoped>

</style>