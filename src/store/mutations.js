export default {
  addTodo(state, text) {
    state.push({
      id: state.id++,
      isFinished: false,
      text,
    });
  },
  toggleTodo(state, id) {
    state.todos = state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isFinished = !todo.isFinished;
      }
      return todo;
    });
  },
  removeTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  changeFilterCondition(state, condition) {
    state.filter = condition;
  },
};
