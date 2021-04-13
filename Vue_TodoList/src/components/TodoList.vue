<template>
    <section id="list-Box">
        <ul>
            <!-- List -->
            <li v-bind:key="todoItem" v-for="(todoItem, index) in todoItems" class="shadow">
                <!-- Check Button -->
                <i class="checkBtn fa fa-check" aria-hidden="true"></i>

                <!-- List Item -->
                {{ todoItem }}

                <!-- Remove Button -->
                <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>

        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    created() {
        if (localStorage.length > 0) {
            for (var i=0; i<localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i));
            }
        }
    },
    methods: {
        removeTodo(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem); // 왜...이지?
            this.todoItems.splice(index, 1); // 이 2개의 부분은 이해가 안된다..
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

</style>