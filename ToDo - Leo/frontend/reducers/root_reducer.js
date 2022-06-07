import { combineReducers } from "redux";
import todosReducer from "./todos_reducer";
import stepsReducer from "./step_reducer";

const root_reducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer
});

export default root_reducer;