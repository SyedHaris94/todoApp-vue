export default {
  getLocation(state, payload) {
    let locationArrray = payload;
    let currentLocation = locationArrray.reverse();
    state.currentLocation = currentLocation[0];
    currentLocation.pop();
    state.location = currentLocation;
  },
  addLocation(payload) {
    console.log("payload", payload);
    // state.location.push(payload);
  },
  deleteLocation(state, payload) {
    const filerTask = state.location.filter((item) => item.id !== payload.id);
    state.location = filerTask;
  },
};
