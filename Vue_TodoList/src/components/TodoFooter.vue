<template>
    <button class="allClearBtn" v-on:click="clearTodo">
        <i class="fas fa-broom"></i>
        <b>Clear All</b>
    </button>

</template>

<script>
export default {
    methods: {
        clearTodo() {
            console.log("ClearTodo Event");
            this.$emit('removeAll');
        }
    }
}
</script>

<style scoped>
    .allClearBtn {
        width: 85%;
        border-radius: 5px;
        color: white;
        padding-top: 15px;
        padding-bottom: 15px;
        background: linear-gradient(to right, #6478FB, #8763FB);
    }
</style>