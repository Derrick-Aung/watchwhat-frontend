import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import moviesReducer from './movies/moviesReducer';
import movieReducer from './movie/movieReducer';
import registerReducer from './register/registerReducer';

const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  movie: movieReducer,
  register: registerReducer,
});

export default rootReducer;
