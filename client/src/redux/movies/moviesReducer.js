import moviesTypes from './moviesTypes.js';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
  pageNum: null,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moviesTypes.FETCH_MOVIES_START: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case moviesTypes.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    }
    // TODO might display the error later
    case moviesTypes.FETCH_MOVIES_FAILURE: {
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
