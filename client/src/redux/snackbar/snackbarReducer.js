import snackbarTypes from './snackbarTypes.js';

export const INITIAL_STATE = {
  open: false,
  message: 'Default',
  // other types include error, info, warning
  type: 'success',
};

const snackbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case snackbarTypes.SNACKBAR_CLEAR: {
      return {
        ...state,
        open: false,
      };
    }
    case snackbarTypes.SNACKBAR_SHOW: {
      return {
        ...state,
        type: 'success',
        open: true,
        message: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default snackbarReducer;
