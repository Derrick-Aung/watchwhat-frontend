import axios from 'axios';
import userTypes from './userTypes';

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch({ type: userTypes.SIGN_IN_START });
    const { data } = await axios('/api/user/me', {
      method: 'GET',
      withCredentials: true,
    });
    dispatch({ type: userTypes.SIGN_IN_SUCCESS, payload: data.user });
  } catch (err) {
    if (err.response)
      dispatch({
        type: userTypes.SIGN_IN_FAILURE,
        payload: err.response.data.error,
      });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userTypes.SIGN_IN_START });
    const { data } = await axios('/api/auth/login', {
      method: 'POST',
      data: {
        email,
        password,
      },
    });

    dispatch({ type: userTypes.SIGN_IN_SUCCESS, payload: data.user });
  } catch (err) {
    if (err.response)
      dispatch({
        type: userTypes.SIGN_IN_FAILURE,
        payload: err.response.data.error,
      });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios('/api/auth/logout', {
      method: 'POST',
      withCredentials: true,
    });

    dispatch({
      type: userTypes.SIGN_OUT,
    });
  } catch (error) {}
};
