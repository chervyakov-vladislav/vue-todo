const todos = {
  state: {
    todos: [],
    filter: 'all'
  },
  mutations: {
    addElem(state, todo) {
      state.todos.unshift(todo)
    },
    deleteElem(state, id){
      state.todos = state.todos.filter(item => {
        return item.id !== id;
      })
    },
    checkTodo(state, elem) {
      state.todos = state.todos.map(item => {
        return item.id == elem.id? elem : item
      })
    },
    filterTodos(state, filter) {
      state.filter = filter;
    },
    checkAllItems(state, checkValue) {
      state.todos.forEach(item => {
        return item.checked = checkValue;
      })
    }
  }
}

export default todos;