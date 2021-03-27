// import moment from "moment";

export default {
  getTodos(state, payload) {
    console.log("payload----", payload);
    payload.forEach((element) => {
      // element.due_at = moment(element.due_at).format("dddd, MMMM Do YYYY");
      if (element.status == "inprogress") {
        element.completed = false;
      } else {
        element.completed = true;
      }
    });
    console.log("result----", payload);

    state.todoItems = payload;
  },
  addTodos(state, payload) {
    state.todoItems.push(payload);
  },
  updateTodos() {
    // console.log("payload-----", payload);
    // if (payload.completed) {
    //   payload.status = "completed";
    // } else {
    //   payload.status = "inprogress";
    // }
    // state.todoItems = [...state.todoItems, payload];
  },
  deleteTodos(state, payload) {
    const filerTask = state.todoItems.filter((item) => item.id !== payload.id);
    state.todoItems = filerTask;
  },

  changeDescription(state, payload) {
    state.description = payload;
  },
  changeSummary(state, payload) {
    state.summary = payload;
  },
  selectDate(state, payload) {
    state.dateTime = payload;
  },
};
