<template>
  <v-navigation-drawer :clipped="clipped" absolute permanent left>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item
          class="tile"
          @click="menuActionClick(item.action)"
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="container-logout">
        <v-icon>{{ "mdi-logout" }}</v-icon>
        <v-btn @click="menuActionClick('')" block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { clearStorage } from "../../helpers/helpers";

export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  props: ["items", "clipped"],
  methods: {
    menuActionClick(action) {
      console.log("action", action);
      if (action !== "") {
        this.$router.push({ path: "/" + action }).catch(() => {});
      } else {
        clearStorage();
        this.$router.push({ path: "/" }).catch(() => {});
      }
    },
  },
};
</script>
<style scoped>
.container-logout {
  display: flex;
  justify-content: space-around;
  padding: 35px;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
  background-color: black;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0px;
}

/* .active-class{
  background-color: black;
} */
</style>