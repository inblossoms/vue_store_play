import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import { createStore } from "@/vuex";

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
