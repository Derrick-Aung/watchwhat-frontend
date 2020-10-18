import pollsTypes from './pollsTypes.js';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

const pollsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pollsTypes.FETCH_POLLS_START: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case pollsTypes.FETCH_POLLS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    }
    case pollsTypes.FETCH_POLLS_FAILURE: {
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

export default pollsReducer;
