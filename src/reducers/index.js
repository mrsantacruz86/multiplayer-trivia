import { combineReducers } from "redux";
import questionReducer from "./questionReducer";

export default combineReducers({
  auth: null,
  questions: questionReducer,
  games: null,
  timer: null
});
