<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = new useStore();

const toggleTodo = (id) => {
  store.dispatch("toggleTodo", id);
};

const removeTodo = (id) => {
  store.commit("removeTodo", id);
};
</script>

<template>
  <div v-for="todo of store.getters.getAllTodos" :key="todo.id">
    <input
      type="checkbox"
      :checked="todo.isFinished"
      @click="toggleTodo(todo.id)"
    />
    <span :class="{ finished: todo.isFinished }">
      {{ todo.text }}
    </span>
    <button @click="removeTodo(todo.id)">Remove Todo</button>
  </div>
</template>

<style lang="scss">
.finished {
  text-decoration: line-through;
}
</style>
