<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:inputData="addTodo"></TodoInput>
    <TodoList v-bind:listdata="todoItems"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
 
</template> 

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodo(data) {
      //로컬 스토리지에 데이터를 추가하는 로직
      console.log("addTodo Event");
      localStorage.setItem(data, data); // 로컬 스토리지에 저장
      this.todoItems.push(data); // 리스트 배열에 저장
    },
    clearAll(){
      localStorage.clear();
      this.todoItems = [];
      
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>