import { combineReducers } from "redux";
import questionReducer from "./questionReducer";
import timer from "./timerReducer";

export default combineReducers({
  auth: null,
  questions: questionReducer,
  games: null,
  timer
});
