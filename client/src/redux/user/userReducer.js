import userTypes from './userTypes.js';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_START: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case userTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: false,
      };
    }
    case userTypes.SIGN_IN_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case userTypes.SIGN_OUT: {
      return {
        ...state,
        currentUser: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
