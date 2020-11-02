import axios from 'axios';
import movieTypes from './movieTypes';
import { TMDB_API_URL, TMDB_API_KEY } from '../../config';

export const fetchMovie = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: movieTypes.FETCH_MOVIE_START });

    const url = `${TMDB_API_URL}movie/${movieId}`;
    const response = await axios(url, {
      method: 'GET',
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        append_to_response: 'credits,videos,images',
        include_image_language: 'en',
      },
    });

    dispatch({
      type: movieTypes.FETCH_MOVIE_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: movieTypes.FETCH_MOVIE_FAILURE,
    });
  }
};
