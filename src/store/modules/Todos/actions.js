import {
  ADD_TODOS,
  CHANGE_DESCRIPTION,
  CHANGE_SUMMARY,
  SELECT_DATE,
  GET_TODOS,
  UPDATE_TODOS,
  DELETE_TODOS,
} from "./action-types";
import {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../../api/todos";

export default {
  async getTodos(context) {
    try {
      const res = await getTodo();
      if (res && res.data && res.data.tasks) {
        console.log("res", res);
        context.commit(GET_TODOS, res.data.tasks);
      }
    } catch (err) {
      console.log("error-----", err);
    }
  },
  async addTodos(context, data) {
    try {
      const res = await createTodo(data);
      if (res) {
        context.commit(ADD_TODOS, data);
        const res_1 = await getTodo();
        try {
          if (res_1 && res_1.data && res_1.data.tasks) {
            console.log("res_1", res_1);
            context.commit(GET_TODOS, res_1.data.tasks);
          }
        } catch (err) {
          console.log("api fail error", err);
        }
      }
    } catch (err) {
      console.log("create error-----", err);
    }
  },
  async updateTodos(context, data) {
    try {
      data.status = data.completed ? "completed" : "inprogress";
      // data.due_at = moment(data.due_at).toISOString();
      console.log("data.due_at ", data.due_at);
      const res = await updateTodo(data);
      if (res) {
        context.commit(UPDATE_TODOS, data);
      }
    } catch (err) {
      console.log("create error-----", err);
    }
  },
  async deleteTodos(context, data) {
    console.log('data----', data)
    try {
      const response = await deleteTodo(data.id);
      console.log('-response-response', response)
      if (response.data) {
        context.commit(DELETE_TODOS, data);
      }
    } catch (err) {
      console.log("-------", err);
    }
  },
  changeSummary(context, data) {
    context.commit(CHANGE_SUMMARY, data);
  },
  changeDescription(context, data) {
    context.commit(CHANGE_DESCRIPTION, data);
  },
  selectDate(context, data) {
    context.commit(SELECT_DATE, data);
  },
};
