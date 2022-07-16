<template lang="pug">
button(
  :class="{active: completedTodos.length > 0}"
  type="button"
  @click="removeCompleted"
).clear-btn Clear completed
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    todosList: []
  },
  data() {
    return {
      completedTodos: []
    }
  },
  methods: {
    ...mapMutations(['deleteElem']),
    removeCompleted() {
      this.completedTodos.forEach(todo => this.deleteElem(todo))
    }
  },
  watch: {
    todosList(list) {
      this.completedTodos = list.map(item => {
       return item.checked == true ? item.id : 0;
      });
      this.completedTodos = this.completedTodos.filter(item => item > 0)
    }
  }
}
</script>


<style scoped>
.clear-btn {
  background: transparent;
  font-weight: 300;
  color: inherit;
  
  border: none;
  border-bottom: 1px solid transparent;
  outline: none;
  opacity: 0;
}

.active {
  opacity: 1;
  cursor: pointer;
}

.clear-btn:hover {
  border-color: #777
}
</style>