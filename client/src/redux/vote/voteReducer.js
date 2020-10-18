import voteTypes from './voteTypes.js';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
};

const voteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case voteTypes.CLEAR_VOTE: {
      return {
        ...state,
        data: null,
      };
    }
    case voteTypes.FETCH_VOTE_START: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case voteTypes.FETCH_VOTE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    }
    case voteTypes.FETCH_VOTE_FAILURE: {
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

export default voteReducer;
