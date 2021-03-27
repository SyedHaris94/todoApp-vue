<template>
  <v-form v-model="valid">
    <v-container>
      <v-col cols="12" md="12">
        <Input
          :model="email"
          :rules="emailRules"
          :label="'E-mail'"
          :isPassword="false"
          @changeInput="changeEmail"
        />
      </v-col>
      <v-col cols="12" md="12">
        <Input
          :model="password"
          :rules="passwordRules"
          :label="'Password'"
          :showPassword="showPassword"
          :isPassword="true"
          @changeInput="changePassword"
          @changeIconState="changeIconState"
        />
      </v-col>
    </v-container>
    <Button
      title="Log In"
      :rounded="true"
      :theme="'dark'"
      @clickButton="submit"
    />
  </v-form>
</template>
<script>
import Input from "../ui/Input";
import Button from "../ui/Button";
export default {
  data: () => ({
    valid: false,
    passwordRules: [(v) => !!v || "Password is required"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed: {
    email() {
      return this.$store.getters["getEmail"];
    },
    password() {
      return this.$store.getters["getPassword"];
    },
    user() {
      return this.$store.getters["getUser"];
    },
    showPassword() {
      return this.$store.getters["getShowPassword"];
    },
  },
  components: {
    Input,
    Button,
  },
  methods: {
    changeEmail(event) {
      this.$store.dispatch("updateEmail", event);
    },
    changePassword(event) {
      this.$store.dispatch("updatePassword", event);
    },
    changeIconState() {
      this.$store.dispatch("updateShowPassword", !this.showPassword);
    },
    submit() {
      let obj = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("loginUser", obj);

      if (this.user.email && this.user.password !== null) {
        this.$router.push({ path: "todos" }).catch(() => {});
      }
    },
  },
};
</script>
