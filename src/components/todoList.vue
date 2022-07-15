<template lang="pug">
.todo-list
  .content 
    ul.list
      li.item(v-for="todo in todosList")
        todoListItem(
          :todo="todo"
          @deleteElem = "deleteElem"
          @checkItem = "checkTodo"
        )

  .footer
    .footer-content
      .counter {{todosList.length}} items left
      .filter
        todoListFilter(
          @filterTodos="filterTodos"
        )
      .clear
        todoListClear(
          :todosList="todosList"
          @deleteCompletedTodo="deleteCompletedTodo"
        )
</template>

<script>

import todoListFilter from "./todoListFilter";
import todoListItem from "./todoListItem";
import todoListClear from "./todoListClear";

export default {
  props: {
    todosList: []
  },
  components: {
    todoListFilter,
    todoListItem,
    todoListClear
  },
  methods: {
    deleteElem(todoId) {
      this.$emit('deleteElem', todoId)
    },
    checkTodo(item) {
      this.$emit('checkTodo', item)
    },
    filterTodos(filter) {
      this.$emit('filterTodos', filter);
    },
    deleteCompletedTodo(completedTodo){
      this.$emit('deleteCompletedTodo', completedTodo);
    }
  }
}
</script>

<style scoped>
  .list{
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .item {
    border-bottom: 1px solid #ededed;
  }

  .item:last-child {
    border-bottom: 0 none;
  }

  .footer {
    font-size: 14px;
    text-align: center;
    position: relative;
    color: #777;
    padding: 10px 15px;
  }

  .footer::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  .footer-content {
    display: flex;
    align-items: center;
    position: relative;
  }

  .filter {
    flex: 1;
  }
</style>