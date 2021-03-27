<template>
  <v-menu v-model="dateMenu" :close-on-content-click="false" max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="computedDateFormattedMomentjs"
        clearable
        label="Due Date"
        readonly
        v-bind="attrs"
        v-on="on"
        @click:clear="dateTime = null"
      ></v-text-field>
    </template>
    <v-date-picker
      v-on:input="selectDate"
      @change="dateMenu = false"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import moment from "moment";

export default {
  data: () => ({
    dateMenu: false,
  }),
  computed: {
    dateTime() {
      return this.$store.getters["getDate"];
    },
    computedDateFormattedMomentjs() {
      return this.dateTime
        ? moment(this.dateTime).format("dddd, MMMM Do YYYY")
        : "";
    },
  },
  methods: {
    selectDate(event) {
      console.log("selectDate---", event);
      // let date = moment(event).format("dddd, MMMM Do YYYY");
      this.$store.dispatch("selectDate", event);
    },
  },
};
</script>

<style>
</style>