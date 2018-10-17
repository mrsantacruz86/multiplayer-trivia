import store from '../store';

//Actions
//-------------------------
import {
  INCREASE_RED_SCORE,
  INCREASE_BLUE_SCORE,
  RESET_SCORES,
  STOP_TIMER,
  START_TIMER,
  RESET_TIMER,
  DISPLAY_QUESTION
} from "./actionTypes";

//Actions Creators
//-------------------------
export const increaseRedScore = () => ({ type: INCREASE_RED_SCORE });
export const increaseBlueScore = () => ({ type: INCREASE_BLUE_SCORE });
export const resetScores = () => ({ type: RESET_SCORES });
export const stopTimer = () => ({ type: STOP_TIMER });
export const startTimer = () => ({ type: START_TIMER });
export const reset_timer = () => ({ type: RESET_TIMER });
export const displayQuestion = (question) => ({ type: DISPLAY_QUESTION, payload:question});
