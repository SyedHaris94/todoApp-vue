import { ADD_LOCATION, GET_LOCATION, DELETE_LOCATION } from "./action-types";
import {
  addLocation,
  getLocation,
  deleteLocation,
} from "../../../api/location";

export default {
  async getLocation(context) {
    try {
      const res = await getLocation();
      if (res && res.data && res.data.checkins) {
        console.log("res", res);
        context.commit(GET_LOCATION, res.data.checkins);
      }
    } catch (err) {
      console.log("error-----", err);
    }
  },
  async addLocation(context, data) {
    const obj = {
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
      address: "Karachi, Sindh, Pakistan",
    };
    try {
      const res = await addLocation(obj);
      if (res) {
        context.commit(ADD_LOCATION, obj);
        const res_1 = await getLocation();
        try {
          if (res_1 && res_1.data && res_1.data.checkins) {
            console.log("res_1", res_1);
            context.commit(GET_LOCATION, res_1.data.checkins);
          }
        } catch (err) {
          console.log("api fail error", err);
        }
      }
    } catch (err) {
      console.log("create error-----", err);
    }
  },
  async deleteLocation(context, data) {
    console.log("data----", data);
    try {
      const response = await deleteLocation(data.id);
      console.log("-response-response", response);
      if (response.data) {
        context.commit(DELETE_LOCATION, data);
      }
    } catch (err) {
      console.log("-------", err);
    }
  },
};
