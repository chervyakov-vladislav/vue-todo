<template lang="pug">
div.todo
  todo-input(
    @addElem="addElem"
  )
  todo-list(
    :todosList="filteredTodos"
    v-if="todo.length > 0"
    @deleteElem = "deleteElem"
    @checkTodo = "checkTodo"
    @filterTodos = "filterTodos"
  )
</template>



<script>

import todoInput from "./todoInput";
import todoList from "./todoList";

export default {
  data() {
    return {
      todo: [],
      filter: 'all'
    }
  },
  components: {
    todoInput,
    todoList
  },
  computed: {
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
  },
  methods: {
    addElem(todo) {
      this.todo.push(todo)
    },
    deleteElem(id){
      this.todo = this.todo.filter(item => {
        return item.id != id
      })
    },
    checkTodo(elem) {
      this.todo = this.todo.map(item => {
        return item.id == elem.id? elem : item
      })
    },
    filterTodos(filter) {
      this.filter = filter;
    }
  }
}
</script>

<style scoped>
  .todo {
    margin-top: 100px;
  }
</style>