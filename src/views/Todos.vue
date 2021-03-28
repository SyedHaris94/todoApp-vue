<template>
  <div>
    <Drawer :items="drawerItems" />

    <div data-app>
      <custom-Dialog v-model="dialog" @closeModal="closeModal"> </custom-Dialog>
    </div>
    <Button
      title="Add new task"
      @clickButton="addTodo"
      :rounded="false"
      :icon="'mdi-plus'"
    />
    <div class="todoContainer">
      <TodoList />
    </div>
  </div>
</template>

<script>
import Button from "../components/ui/Button";
import Drawer from "../components/ui/Drawer";
import customDialog from "../components/ui/Modal";
import TodoList from "../components/TodoList/List";
export default {
  components: {
    Drawer,
    Button,
    customDialog,
    TodoList,
  },
  data() {
    return {
      clipped: false,
      dialog: false,
      drawerItems: [
        { title: "Task", icon: "mdi-clipboard-text", action: "todos" },
        {
          title: "Location",
          icon: "mdi-map-marker-outline",
          action: "location",
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("getTodos");
  },
  computed: {
    todoItems() {
      return this.$store.getters["getTodoItems"];
    },
  },

  methods: {
    addTodo() {
      this.dialog = true;
      console.log("clickButton");
    },

    closeModal() {
      console.log("clickButton2");
      this.dialog = false;
    },
  },
};
</script>
<style scoped>
.todoContainer {
  display: flex;
  justify-content: center;
}
</style>
