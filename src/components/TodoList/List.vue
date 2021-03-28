<template>
  <div class="listView">
    <v-card :class="['mx-auto', 'cardView']" width="300" tile>
      <v-list-item-title class="title"> In Complete </v-list-item-title>
      <v-list dense>
        <v-list-item-group
          color="primary"
          v-for="(item, i) in todoItems"
          :key="i"
        >
          <v-list-item v-if="item.status == 'inprogress'">
            <v-list-item-action>
              <v-checkbox
                @change="selectItem(item)"
                v-model="item.completed"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title> {{ item.title }}</v-list-item-title>
              <v-list-item-subtitle> {{ item.due_at }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon @click="deleteTodo(item)" v-text="'mdi-delete'"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-card :class="['mx-auto', 'cardView']" width="300" tile>
      <v-list-item-title class="title"> Completed </v-list-item-title>
      <v-list dense>
        <v-list-item-group
          color="primary"
          v-for="(item, i) in todoItems"
          :key="i"
        >
          <v-list-item v-if="item.status == 'completed'">
            <v-list-item-action>
              <v-checkbox
                @change="selectItem(item)"
                v-model="item.completed"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{ item.title }}</v-list-item-title>
              <!-- <v-list-item-subtitle> {{ item.due_at }}</v-list-item-subtitle> -->
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon @click="deleteTodo(item)" v-text="'mdi-delete'"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  created() {
    console.log("todoItems", this.todoItems);
  },
  computed: {
    todoItems() {
      return this.$store.getters["getTodoItems"];
    },
  },
  methods: {
    selectItem(item) {
      this.$store.dispatch("updateTodos", item);
    },
    deleteTodo(item) {
      this.$store.dispatch("deleteTodos", item);
    },
  },
};
</script>

<style>
.listView {
  padding: 10px;
}
.title {
  padding: 10px;
  font-size: 20px;
  text-align: left;
  font-weight: 800;
}
.cardView {
  margin: 15px;
}
</style>