// import { createStore } from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import Authentication from "./modules/Auth/index";
import Todos from "./modules/Todos/index";
import Location from "./modules/Location/index";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Authentication,
    Todos,
    Location,
  },
});

export default store;
