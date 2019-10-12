import { db } from '../api/firebase';

//Actions
//-------------------------
import {
  CREATE_QUESTION,
  FETCH_QUESTIONS,
  // FETCH_QUESTION,
  DELETE_QUESTION,
  // EDIT_QUESTION,
  // INCREASE_RED_SCORE,
  // INCREASE_BLUE_SCORE,
  // RESET_SCORES,
  UPDATE_TIMER,
  SWITCH_TURN
} from './types';

//Actions Creators
//-------------------------
const Questions = db.collection('questions');

export const fetchQuestions = () => dispatch => {
  const questions = {};
  db.collection('questions')
    // .limit(10)
    .onSnapshot(
      snapshot => {
        snapshot.forEach(doc => {
          questions[doc.id] = { ...doc.data(), id: doc.id };
        });
        dispatch({
          type: FETCH_QUESTIONS,
          payload: questions
        });
      },
      error => console.log(error)
    );
};

export const createQuestion = question => dispatch => {
  return Questions.doc().set(question);
};

export const deleteQuestion = id => dispatch => {
  return Questions.doc(id).delete();
};

export const updateTimer = time => {
  return {
    type: UPDATE_TIMER,
    payload: time
  };
};

// export const stopTimer = () => ({ type: STOP_TIMER });
// export const reset_timer = () => ({ type: RESET_TIMER });

// export const increaseRedScore = () => ({ type: INCREASE_RED_SCORE });
// export const increaseBlueScore = () => ({ type: INCREASE_BLUE_SCORE });
// export const resetScores = () => ({ type: RESET_SCORES });

// export const switchTurn = team => {
//   let action = { type: SWITCH_TURN };
//   switch (team) {
//     case "blue":
//       action.payload = "red";
//       return action;
//     case "red":
//       action.payload = "blue";
//       return action;
//     default:
//       action.payload = team;
//       return action;
//   }
// };
