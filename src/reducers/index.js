import { combineReducers } from 'redux';
import auth from './authReducer';
import game from './gameReducer';

export default combineReducers({
  auth: auth,
  game: game
});
