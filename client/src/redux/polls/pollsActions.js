import axios from 'axios';
import pollsTypes from './pollsTypes';
import { TMDB_API_URL, TMDB_API_KEY } from '../../config';

export const fetchPolls = (pageNum) => async (dispatch) => {
  try {
    dispatch({ type: pollsTypes.FETCH_POLLS_START });

    const url = `/api/poll/feed`;
    const { data } = await axios(url, {
      method: 'GET',
    });

    await Promise.all(
      data.map(async (poll) => {
        const detailsUrl = `${TMDB_API_URL}movie/${poll.movieId}`;
        const response = await axios(detailsUrl, {
          method: 'GET',
          params: {
            api_key: TMDB_API_KEY,
            language: 'en-US',
          },
        });
        poll.details = response.data;
      })
    );

    dispatch({
      type: pollsTypes.FETCH_POLLS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: pollsTypes.FETCH_POLLS_FAILURE,
    });
  }
};
