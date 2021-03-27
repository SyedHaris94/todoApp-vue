export default {
  updateEmail(state, payload) {
    state.email = payload;
  },
  updatePassword(state, payload) {
    state.password = payload;
  },
  loginUser(state, payload) {
    state.user = payload;
  },
  updateShowPassword(state, payload) {
    state.showPassword = payload;
  },
};
