import snackbarTypes from './snackbarTypes';

export const showSnackbar = (message) => {
  return (dispatch) => {
    dispatch({ type: snackbarTypes.SNACKBAR_SHOW, payload: message });
  };
};

export const clearSnackbar = () => {
  return (dispatch) => {
    dispatch({ type: snackbarTypes.SNACKBAR_CLEAR });
  };
};
