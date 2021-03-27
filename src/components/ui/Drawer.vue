<template>
  <v-navigation-drawer :clipped="clipped" absolute permanent left>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item-group active-class="red" class="active-class">
        <v-list-item
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
/* .active-class{
  background-color: black;
} */
</style>