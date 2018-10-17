import {
  INCREASE_RED_SCORE,
  INCREASE_BLUE_SCORE,
  RESET_SCORES,
  STOP_TIMER,
  START_TIMER,
  RESET_TIMER,
  DISPLAY_QUESTION
} from "../actions/actionTypes";

const initialState = {
  red: [],
  isFetching: false,
  isError: false,
  savingArticle: false,
  articleSaved: false,
  errorOnSave: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        isError: false
      });
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        isError: false
      });
    case RECEIVE_ERROR:
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });
    case SAVE_ARTICLE:
      return Object.assign({}, state, {
        data: action.data,
      });
    case ARTICLE_SAVED:
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });
    case RECEIVE_ONSAVE_ERROR:
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });
    default:
      return state;
  }
}
