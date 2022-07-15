<template lang="pug">
.todo-input
  input(
    type="text"
    placeholder="Todo Name"
    autofocus
    v-model="todo.name"
    @keydown.enter="addElem"
    
  ).input
  .complete-all(:class="{show: todoList.length > 0}")
    input(
      :checked="status"
      type="checkbox"
      @change="checkAllTodo"
    ).complete-all__checkbox
</template>

<script>
let uniqId = 0;
  export default {
    props: {
      todoList: []
    },
    data() {
      return {
        todo: {
          id: 0,
          name: "",
          checked: false
      },
      status: false
      }
    },
    methods: {
      addElem() {
        uniqId++;
        this.todo.id = uniqId;
        this.$emit('addElem', {...this.todo});
        this.todo.name = "";
      },
      checkAllTodo(e) {
        this.$emit('checkAllItems', e.target.checked);
      }
    },
    watch: {
      todoList(list) {
        this.status = list.filter(item => {
          return item.checked == false
        }).length > 0? false : true;
      }
    }
  }
</script>

<style scoped>

.todo-input {
  position: relative;
}
.input {
  font-size: 24px;
  padding: 16px 16px 16px 60px;
  border: 1px solid transparent;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  line-height: 1.4em;
  outline: none;
  color: inherit;
  width: 100%;
}

.complete-all {
  position: absolute;
  left: 20px;
  top: 15px;
  display: none;
}

.show {
  display: block;
}
</style>