import axios from 'axios';
import registerTypes from './registerTypes';

export const register = (username, email, password, password2) => async (
  dispatch
) => {
  try {
    dispatch({ type: registerTypes.SIGN_UP_START });
    const response = await axios('/api/auth/register', {
      method: 'POST',
      data: {
        username,
        email,
        password,
        password2,
      },
    });

    dispatch({ type: registerTypes.SIGN_UP_SUCCESS });
  } catch (err) {
    dispatch({
      type: registerTypes.SIGN_UP_FAILURE,
    });
  }
};
