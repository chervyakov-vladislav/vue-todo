<template lang="pug">
.todo-item(:class="{checked: todo.checked}")
  label.label 
    .input-block 
      input(
        type="checkbox"
        @change="checkTodoAsCompleted"
        :checked="todo.checked"
      ).input
    .title {{todo.name}}
  router-link(
    tag="button"
    :to="`/view/${todo.name}`"
  ).view-btn &rarr;
  button(
    type="button"
    @click="deleteExistedElem"
  ).remove-btn X
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
    todo: {}
  },
  methods: {
    ...mapMutations(['deleteElem', 'checkTodo']),
    deleteExistedElem() {
      this.deleteElem(this.todo.id)
    },
    checkTodoAsCompleted(e) {
      this.checkTodo({
        ...this.todo,
        checked: e.target.checked
      });
    }
  }
}
</script>

<style scoped>

  .checked .title{
    text-decoration: line-through;
  }

    .todo-item {
    display: flex;
    align-items: center;
  }

  .label {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .input-block {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    padding: 15px 0;
    display: block;
    line-height: 1.2; 
  }

  .remove-btn {
    width: 30px;
    padding: 10px 0;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: firebrick;
    visibility: hidden;
  }

  .todo-item:hover .remove-btn {
    visibility: visible;
  }

  .view-btn {
    opacity: 0;
    margin-right: 20px;
    padding: 0px 10px 3px;
    background: transparent;
    border: 1px solid #777;
    color: #777;
    border-radius: 3px;
    font-size: 25px;
    cursor: pointer;
  }

  .view-btn:hover {
    opacity: 1;
  }
</style>>