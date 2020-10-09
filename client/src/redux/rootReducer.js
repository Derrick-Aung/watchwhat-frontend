import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import moviesReducer from './movies/moviesReducer';
import registerReducer from './register/registerReducer';

const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  register: registerReducer,
});

export default rootReducer;
