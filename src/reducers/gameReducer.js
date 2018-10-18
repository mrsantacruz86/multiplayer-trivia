import {
  LOAD_QUESTIONS,
  INCREASE_RED_SCORE,
  INCREASE_BLUE_SCORE,
  RESET_SCORES,
  STOP_TIMER,
  START_TIMER,
  RESET_TIMER,
  DISPLAY_QUESTION
} from "../actions/actionTypes";

const initialState = {
  loading:false,
  
  questions:[],
  redScore: 0,
  blueScore: 0,
  timer: 30,
  timerStatus: "pause",
  selectedQuestion: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload
      });
    case INCREASE_RED_SCORE:
      return Object.assign({}, state, {
        redScore: state.redScore + 1
      });
    case INCREASE_BLUE_SCORE:
      return Object.assign({}, state, {
        blueScore: state.blueScore +1
      });
    case RESET_SCORES:
      return Object.assign({}, state, {
        blueScore: 0,
        redScore: 0
      });
    case RESET_TIMER:
      return Object.assign({}, state, {
        timer:30,
        timerStatus: "play"
      });
    case STOP_TIMER:
      return Object.assign({}, state, {
        timerStatus: "pause"
      });
    case START_TIMER:
      return Object.assign({}, state, {
        timerStatus: "play"
      });
    case DISPLAY_QUESTION:
      return Object.assign({}, state, {
        selectedQuestion: action.payload
      });
    default:
      return state;
  }
}
