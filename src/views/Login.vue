<template>
  <div>
    <h2>Log In</h2>
    <div class="loginContainer">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm/Form";
export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.loginContainer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
