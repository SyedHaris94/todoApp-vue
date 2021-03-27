import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Todos from "../views/Todos";
import Location from "../views/Location"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/todos",
    component: Todos,
  },
  {
    path: "/location",
    component: Location,
  },
];
export default new VueRouter({
  routes,
  mode: "history",
});
