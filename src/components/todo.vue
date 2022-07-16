<template lang="pug">
div.todo
  todo-input(
    :todoList="todo"
  )
  todo-list(
    :todosList="filteredTodos"
    :itemsLeft="todo.length"
    v-if="todo.length > 0"    
  )
</template>



<script>

import todoInput from "./todoInput";
import todoList from "./todoList";
import {mapState} from 'vuex';

export default {
  data() {
    return {
    }
  },
  components: {
    todoInput,
    todoList
  },
  computed: {
    ...mapState({
      todo: state => state.todos.todos,
      filter: state => state.todos.filter
    }),
    filteredTodos() {
      switch(this.filter){
        case 'all': 
          return this.todo
        case 'active': 
          return this.todo.filter(item => item.checked == false)
        case 'completed':
          return this.todo.filter(item => item.checked == true)
        }
    }
  }
}
</script>

<style scoped>
  .todo {
    margin-top: 100px;
  }
</style>