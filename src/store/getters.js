export default {
  _getFinishedTodos(state) {
    return state.todos.filter((todo) => todo.isFinished);
  },
  _getUnFinishedTodos() {
    return state.todos.filter((todo) => !todo.isFinished);
  },
  getAllTodos(state, getters) {
    switch (state.filter) {
      case "finished":
        return getters._getFinishedTodos;
      case "unfinished":
        return getters._getUnFinishedTodos;
      default:
        return state.todos;
    }
  },
};
