import searchTypes from './searchTypes.js';

export const INITIAL_STATE = {
  query: '',
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchTypes.SET_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }
    case searchTypes.CLEAR_QUERY: {
      return {
        ...state,
        query: '',
      };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
