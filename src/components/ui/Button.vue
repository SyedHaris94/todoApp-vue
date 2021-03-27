<template>
  <div class="text-center">
    <v-btn
      :rounded="rounded"
      :dark="theme"
      @click="clickButton"
    >
      <v-icon v-if="icon" left> {{ icon }}</v-icon>
      {{ title }}
    </v-btn>
  </div>
</template>
<script>
export default {
  props: ["title", "rounded", "theme", "icon",],
  methods: {
    clickButton() {
      this.$emit("clickButton");
    },
  },
};
</script>

<style>
</style>