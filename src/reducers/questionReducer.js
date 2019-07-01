import _ from "lodash";
import randomSelect from "../utils/randomSelect";
import {
  CREATE_QUESTION,
  FETCH_QUESTIONS,
  FETCH_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION
  // INCREASE_RED_SCORE,
  // INCREASE_BLUE_SCORE,
  // RESET_SCORES,
  // STOP_TIMER,
  // START_TIMER,
  // RESET_TIMER
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      console.log(action.payload);
      return { ...state, ...action.payload };

    case FETCH_QUESTION:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_QUESTION:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_QUESTION:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_QUESTION:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
