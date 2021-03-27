import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  state() {
    return {
      todoItems: [],
      dateTime: new Date().toISOString().substr(0, 10),
      summary: "",
      description: "",
    };
  },
  mutations,
  actions,
  getters,
};
