import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import moviesReducer from './movies/moviesReducer';
import movieReducer from './movie/movieReducer';
import registerReducer from './register/registerReducer';
import searchReducer from './search/searchReducer';
import snackbarReducer from './snackbar/snackbarReducer';
import voteReducer from './vote/voteReducer';
import pollsReducer from './polls/pollsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  movie: movieReducer,
  register: registerReducer,
  search: searchReducer,
  snackbar: snackbarReducer,
  vote: voteReducer,
  polls: pollsReducer,
});

export default rootReducer;
