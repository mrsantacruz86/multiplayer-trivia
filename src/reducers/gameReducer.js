import _ from 'lodash';
// import randomSelect from "../utils/randomSelect";
import {
  CREATE_QUESTION,
  FETCH_QUESTIONS,
  FETCH_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  // INCREASE_RED_SCORE,
  // INCREASE_BLUE_SCORE,
  // RESET_SCORES,
  UPDATE_TIMER
  // STOP_TIMER,
  // START_TIMER,
  // RESET_TIMER
} from '../actions/types';
import q from '../BibleQuestions.json';

const initialState = {
  questions: q,
  timer: {
    isRunning: false,
    counter: 30
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };

    case FETCH_QUESTION:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_QUESTION:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_QUESTION:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_QUESTION:
      return _.omit(state, action.payload);

    case UPDATE_TIMER:
      // console.log("Reducer-->", action.payload);
      return {
        ...state,
        timer: {
          ...state.timer,
          counter: action.payload
        }
      };

    default:
      return state;
  }
};
