<template>
  <div>
    <div>
      <Drawer :items="drawerItems" />
      <Button
        @clickButton="getCurrentLocation"
        title="Check In"
        :rounded="false"
        :icon="'mdi-plus'"
      />
      <div class="listContainer">
        <LocationList />
      </div>
    </div>
  </div>
</template>


<script>
import Drawer from "../components/ui/Drawer";
import Button from "../components/ui/Button";
import LocationList from "../components/LocationList/List";
export default {
  data() {
    return {
      clipped: false,
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
    this.$store.dispatch("getLocation");
  },
  methods: {
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("err------");
      }
    },

    showPosition(position) {
      this.$store.dispatch("addLocation", position);
    },
  },
  components: {
    Drawer,
    Button,
    LocationList,
  },
};
</script>
<style scoped>
.listContainer {
  display: flex;
  justify-content: center;
}
</style>
