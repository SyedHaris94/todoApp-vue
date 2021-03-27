import {
  ACCESS_TOKEN,
  LOGIN,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_SHOW_PASSWORD,
} from "./action-types";
import config from "../../../../config";
import { setItem } from "../../../helpers/helpers";
export default {
  async loginUser(context, data) {
    const user = {
      email: data.email,
      password: data.password,
    };
    setItem(ACCESS_TOKEN, config.APP_TOKEN);
    context.commit(LOGIN, user);
  },
  updateEmail(context, data) {
    context.commit(UPDATE_EMAIL, data);
  },
  updatePassword(context, data) {
    context.commit(UPDATE_PASSWORD, data);
  },
  updateShowPassword(context, data) {
    context.commit(UPDATE_SHOW_PASSWORD, data);
  },
};
