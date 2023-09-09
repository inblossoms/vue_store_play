<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = new useStore();
const iptVal = ref("");
const addTodo = () => {
  store.dispatch("addTodo", iptVal.value);
  iptVal.value = "";
};
</script>

<template>
  <input type="text" v-model="iptVal" placeholder="Please input something..." />
  <button @click="addTodo">Add Todo</button>
</template>

<style lang="scss"></style>
