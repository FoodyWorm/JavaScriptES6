<template>
    <section id="list-Box">
        <transition-group name="list" tag="ul">
            <!-- List -->
            <li v-bind:key="todoItem" v-for="(todoItem, index) in listdata" class="shadow">
                <!-- Check Button -->
                <i class="checkBtn fa fa-check" aria-hidden="true"></i>

                <!-- List Item -->
                {{ todoItem }}

                <!-- Remove Button -->
                <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>

        </transition-group>
    </section>
</template>

<script>
export default {
    props: ['listdata'],
    methods: {
        removeTodo(listdata, index) {
            console.log(listdata, index);
            localStorage.removeItem(listdata); // 로컬 스토리지에 해당되는 값을 삭제
            this.listdata.splice(index, 1); // todoItems의 해당 칸부터 값을 1개 삭제
        }
    }
}


</script>

<style scoped>
    #list-Box {
        padding-top: 1%;
        width: 84.8%;
        padding-left: 7.6%;
    }

    ul {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        background: white;
        border-radius: 5px;
        margin-bottom: 1%;
    }
    
    .checkBtn {
        line-height: 50px;
        color: #62acde;
        margin-left: 20px;
        margin-right: 10px;
    }

    .removeBtn {
        margin-left: auto;
        margin-right: 20px;
        color: #de4343;
    }
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-move {
        transition: transform 1s;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transition: translateY(30px);
    }

</style>