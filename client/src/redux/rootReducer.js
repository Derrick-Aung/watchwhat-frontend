import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import moviesReducer from './movies/moviesReducer';
import movieReducer from './movie/movieReducer';
import registerReducer from './register/registerReducer';
import searchReducer from './search/searchReducer';
import snackbarReducer from './snackbar/snackbarReducer';

const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  movie: movieReducer,
  register: registerReducer,
  search: searchReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
