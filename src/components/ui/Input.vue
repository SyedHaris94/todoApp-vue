<template>
  <v-text-field
    :rules="rules"
    :label="label"
    required
    :value="model"
    :prepend-inner-icon="icon"
    @input="onchangeInput"
    :type="showPassword ? 'password' : 'text'"
    :append-icon="isPassword ? (showPassword ? 'mdi-eye' : 'mdi-eye-off') : ''"
    @click:append="clickEyeIcon"
  ></v-text-field>
</template>
<script>
export default {
  data: () => ({
    email: "",
  }),
  props: ["model", "rules", "label", "isPassword", "showPassword", 'icon'],
  methods: {
    // on text input change event
    onchangeInput(event) {
      this.$emit("changeInput", event);
    },
    clickEyeIcon() {
      this.$emit("changeIconState");
    },
  },
};
</script>

<style>
</style>