<template lang="pug">
.todo-input
  div.error {{validation.firstError('todo.name')}}
  input(
    type="text"
    placeholder="Todo Name"
    autofocus
    v-model="todo.name"
    @keydown.enter="addElem"
    :class="{'border-error' : validation.hasError('todo.name')}"
  ).input
  .complete-all(:class="{show: todoList.length > 0}")
    input(
      :checked="status"
      type="checkbox"
      @change="checkAllTodo"
    ).complete-all__checkbox
</template>

<script>
import {Validator} from 'simple-vue-validator';

let uniqId = 0;
  export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
      'todo.name'(value) {
        return Validator.value(value).required("Поле не может быть пустым");
      }
    },
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
        this.$validate().then(success => {
          if (!success) return;

          uniqId++;
          this.todo.id = uniqId;
          this.$emit('addElem', {...this.todo});
          this.todo.name = "";
          this.status = false;

          this.validation.reset();
        });
      },
      checkAllTodo(e) {
        this.$emit('checkAllItems', e.target.checked);
        this.status = true;
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

.border-error {
  border-color: firebrick;
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

.error {
  position: absolute;
  font-size: 20px;
  color: firebrick;
  top: -30px;
  left: 0;
}
</style>