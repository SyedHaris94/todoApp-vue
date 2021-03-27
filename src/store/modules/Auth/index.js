import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  state() {
    return {
      user: {},
      email: null,
      password: null,
      showPassword: true,
    };
  },
  mutations,
  actions,
  getters,
};
