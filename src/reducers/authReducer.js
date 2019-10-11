import _ from 'lodash';
// import randomSelect from "../utils/randomSelect";
import { LOGIN, LOGOUT, SIGNUP } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload };

    case LOGOUT:
      return { ...state, [action.payload.id]: action.payload };

    case SIGNUP:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
