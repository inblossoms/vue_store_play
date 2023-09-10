import { reactive, inject } from "vue";
import {
  createActions,
  createCommitFn,
  createDispatchFn,
  createGetters,
  createMutations,
} from "./creators";

class Store {
  constructor(options) {
    const { state, mutations, actions, getters } = options;

    const store = this;
    const { commit, dispatch } = store;

    store._state = reactive({ data: state });
    store._mutations = Object.create(null);
    store._actions = Object.create(null);

    createMutations(store, mutations);
    createActions(store, actions);
    createGetters(store, getters);
    createCommitFn(store, commit);
    createDispatchFn(store, dispatch);
  }

  get state() {
    return this._state.data;
  }

  commit(type, payload) {
    this._mutations[type](payload);
  }

  dispatch(type, payload) {
    this._actions[type](payload);
  }

  install(app) {
    console.log(this);
    app.provide("store", this);
    app.config.globalProperties.$store = this;
  }
}

export function createStore(options) {
  return new Store(options);
}

export function useStore() {
  return inject("store");
}
