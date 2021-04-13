<template>
<div>
    <input class="typingBox" type="text" v-model="newTodoItem" placeholder=" Typing here... Your Scedules!" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
        <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
</div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== "") {
                var value = this.newTodoItem.trim();
                localStorage.setItem(value, value);
                console.log("저장된 값: " + this.newTodoItem);
                this.clearText();
            }
            else {
                alert("아무런 값도 입력하지 않으셨습니다.");
            }
        },
        clearText() {
                this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .typingBox {
        background: white;
        width: 80%;
        height: 50px;
        line-height: 50px;
        padding-left: 1rem;
        border-radius: 5px;
        border-style: none;
        font-size: 0.9rem;
    }
    
    .addContainer {
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        padding: 0.9rem;
        margin: 0px;
        border-radius: 5px;
    }

    .addBtn {
        color:white;
        font-size: 0.9rem;
        vertical-align: middle;
    }

    /* 책과 똑같이 작성해도 디자인이 이상함.;;ㅠ */

</style>