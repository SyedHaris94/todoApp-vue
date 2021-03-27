<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <!-- <v-text-field label="Legal first name*" required></v-text-field> -->
            <Input
              :model="summary"
              :label="'Summary'"
              :isPassword="false"
              @changeInput="changeSummary"
            />
          </v-col>
          <v-col cols="12">
            <Input
              :model="description"
              :label="'Description'"
              :isPassword="false"
              @changeInput="changeDescription"
            />
          </v-col>
          <v-col cols="12"> <DatePicker /> </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <div class="centerContainer">
      <v-card-actions>
        <Button
          title="Save"
          :rounded="true"
          :theme="true"
          :block="true"
          @clickButton="addTodos"
        />
      </v-card-actions>
      <v-card-actions>
        <Button
          title="Cancel"
          :rounded="true"
          :theme="false"
          :block="true"
          @clickButton="closeDialog"
        />
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import Input from "../ui/Input";
import Button from "../ui/Button";
import DatePicker from "../ui/DatePicker";
export default {
  props: ["label", "model"],
  components: {
    Input,
    Button,
    DatePicker,
  },
  computed: {
    summary() {
      return this.$store.getters["getSummary"];
    },
    description() {
      return this.$store.getters["getDescription"];
    },
    dateTime() {
      return this.$store.getters["getDate"];
    },
  },

  methods: {
    changeDescription(event) {
      this.$store.dispatch("changeDescription", event);
    },
    changeSummary(data) {
      this.$store.dispatch("changeSummary", data);
    },
    addTodos() {
      let obj = {
        description: this.description,
        title: this.summary,
        due_at: this.dateTime,
        status: "inprogress",
      };
      if (
        this.description !== "" &&
        this.summary !== "" &&
        this.dateTime !== null
      ) {
        console.log("submit", obj);

        this.$store.dispatch("addTodos", obj);
        this.closeDialog();
      }

      // this.$emit("submit");
    },
    closeDialog() {
      console.log("-s-d-asd-sa-");
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.centerContainer {
  display: flex;
  justify-content: center;
}
</style>
