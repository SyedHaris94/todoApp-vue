// import { createStore } from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import Authentication from "./modules/Auth/index";
import Todos from "./modules/Todos/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Authentication,
    Todos,
  },
});

export default store;
