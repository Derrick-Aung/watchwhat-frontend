import movieTypes from './movieTypes.js';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieTypes.FETCH_MOVIE_START: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case movieTypes.FETCH_MOVIE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    }
    // TODO might display the error later
    case movieTypes.FETCH_MOVIE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;
