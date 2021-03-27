<template>
  <div>
    <h2>Location</h2>

    <Drawer :items="drawerItems" />
  </div>
</template>

<script>
import Drawer from "../components/ui/Drawer";
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
  components: {
    Drawer,
  },
};
</script>

<style>
</style>