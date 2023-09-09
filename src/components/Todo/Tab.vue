<script setup>
import { useStore } from "vuex";

const store = new useStore();

const changeFilterContation = (payload) => {
  store.commit("changeFilterCondition", payload);
};
</script>

<template>
  <div>
    <a
      href="javascript:;"
      :class="{ active: store.state.filter === 'all' }"
      @click="changeFilterContation('all')"
    >
      All
    </a>
    <a
      href="javascript:;"
      :class="{ active: store.state.filter === 'finished' }"
      @click="changeFilterContation('finished')"
    >
      Finished
    </a>
    <a
      href="javascript:;"
      :class="{ active: store.state.filter === 'unfinished' }"
      @click="changeFilterContation('unfinished')"
    >
      UnFinished
    </a>
  </div>
</template>

<style lang="scss">
a {
  margin-right: 10px;
}
.active {
  color: #000;
  text-decoration: none;
}
</style>
