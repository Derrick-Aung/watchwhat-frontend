import registerTypes from './registerTypes.js';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  success: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case registerTypes.SIGN_UP_START: {
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    }
    case registerTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    }
    case registerTypes.SIGN_UP_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    }
    case registerTypes.SIGN_UP_RESET_SUCCESS: {
      return {
        ...state,
        success: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
