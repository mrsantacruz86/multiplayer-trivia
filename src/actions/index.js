import { db } from "../api/firebase";

//Actions
//-------------------------
import {
  LOAD_QUESTIONS,
  INCREASE_RED_SCORE,
  INCREASE_BLUE_SCORE,
  RESET_SCORES,
  STOP_TIMER,
  START_TIMER,
  RESET_TIMER,
  DISPLAY_QUESTION,
  SWITCH_TURN
} from "./types";

//Actions Creators
//-------------------------

export const loadQuestions = () => async dispatch => {
  const questions = {};
  const response = await db
    .collection("questions")
    .limit(10)
    .get();
  for (let doc of response.docs) {
    questions[doc.id] = doc.data();
  }
  return {
    type: LOAD_QUESTIONS,
    payload: questions
  };
};

export const increaseRedScore = () => ({ type: INCREASE_RED_SCORE });
export const increaseBlueScore = () => ({ type: INCREASE_BLUE_SCORE });
export const resetScores = () => ({ type: RESET_SCORES });
export const stopTimer = () => ({ type: STOP_TIMER });
export const startTimer = () => ({ type: START_TIMER });
export const reset_timer = () => ({ type: RESET_TIMER });
export const displayQuestion = question => ({
  type: DISPLAY_QUESTION,
  payload: question
});

export const switchTurn = team => {
  let action = { type: SWITCH_TURN };
  switch (team) {
    case "blue":
      action.payload = "red";
      return action;
    case "red":
      action.payload = "blue";
      return action;
    default:
      action.payload = team;
      return action;
  }
};
