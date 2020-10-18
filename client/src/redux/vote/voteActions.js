import axios from 'axios';
import voteTypes from './voteTypes';

export const fetchVote = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: voteTypes.FETCH_VOTE_START });

    const url = `/api/poll/${movieId}`;
    const response = await axios(url, {
      method: 'GET',
    });

    dispatch({
      type: voteTypes.FETCH_VOTE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: voteTypes.FETCH_VOTE_FAILURE,
    });
  }
};

export const postVote = (movieId, voteType) => async (dispatch) => {
  try {
    dispatch({ type: voteTypes.FETCH_VOTE_START });

    const url = `/api/poll/${movieId}`;
    const response = await axios(url, {
      method: 'POST',
      data: {
        voteType: 'up',
      },
    });

    dispatch({
      type: voteTypes.FETCH_VOTE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: voteTypes.FETCH_VOTE_FAILURE,
    });
  }
};

export const clearVote = () => (dispatch) => {
  dispatch({ type: voteTypes.CLEAR_VOTE });
};
