import { UPDATE_TIMER } from "../actions/types";

export default (state = { counter: 30 }, action) => {
  switch (action.type) {
    case UPDATE_TIMER:
      // console.log("Reducer-->", action.payload);
      return { ...state, counter: action.payload };

    default:
      return state;
  }
};
