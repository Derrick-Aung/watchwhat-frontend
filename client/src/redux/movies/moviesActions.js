import axios from 'axios';
import moviesTypes from './moviesTypes';
import { TMDB_API_URL, TMDB_API_KEY } from '../config';

console.log('tmdb api key', TMDB_API_KEY);

export const fetchMovies = (pageNum = 1) => async (dispatch) => {
  try {
    const url = `${TMDB_API_URL}discover/movie`;

    dispatch({ type: moviesTypes.FETCH_MOVIES_START });

    // TODO slick destructuring here to get results
    const { data } = await axios(url, {
      method: 'GET',
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'true',
        page: pageNum,
      },
    });
    console.log(data.results);

    dispatch({
      type: moviesTypes.FETCH_MOVIES_SUCCESS,
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: moviesTypes.FETCH_MOVIES_FAILURE,
    });
  }
};
