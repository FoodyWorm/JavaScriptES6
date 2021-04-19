<template>
  <count-test></count-test>

</template>

<script>
import CountTest from './components/CountTest'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default {
  components: {
    'count-test': CountTest
  }
}
</script>

<style>

</style>
