import { computed } from "vue";
import { forEachValkey } from "./utils";

export function createMutations(store, mutations) {
  forEachValkey(mutations, (mutationFn, mutationsKey) => {
    store._mutations[mutationsKey] = function (payload) {
      mutationFn.apply(store, [store.state, payload]);
    };
  });
}

export function createActions(store, actions) {
  forEachValkey(actions, (actionsFn, actionsKey) => {
    store._actions[actionsKey] = function (payload) {
      actionsFn.apply(store, [store, payload]);
    };
  });
}

export function createGetters(store, getters) {
  store.getters = {};
  forEachValkey(getters, (getterFn, getterKey) => {
    Object.defineProperty(store.getters, getterKey, {
      // V 3.1 之前不可以以这种方式使用 computed，会索随着组件的销毁(unMunted)而被销毁
      get: () => computed(() => getterFn(store.state, store.getters)).value,
    });
  });
}

export function createCommitFn(store, commit) {
  store.commit = function (type, payload) {
    commit.apply(store, [type, payload]);
  };
}

export function createDispatchFn(store, dispatch) {
  store.dispatch = function (type, payload) {
    dispatch.apply(store, [type, payload]);
  };
}
