<template>
  <v-dialog persistent :value="value" @input="$emit('input')">
    <v-card>
      <v-card-title class="headline grey lighten-2"> New Task </v-card-title>
      <div class="todoFormContainer">
        <AddTodoForm @click="closeDialog" />
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <!-- <v-btn color="primary" text @click="closeDialog"> I accept </v-btn> -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import AddTodoForm from "../addTodoForm/AddTodo";
export default {
  components: {
    AddTodoForm,
  },
  props: ["value", "content"],
  methods: {
    closeDialog() {
      console.log("asdsadsa");
      this.$emit("closeModal");
    },
  },
};
</script>
<style scoped>
.todoFormContainer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>