import axios from 'axios';
import moviesTypes from './moviesTypes';
import categories from '../../utils/requestCategory';
import { TMDB_API_URL, TMDB_API_KEY } from '../../config';

export const fetchMovies = (category, pageNum = 1, query) => async (
  dispatch
) => {
  try {
    dispatch({ type: moviesTypes.FETCH_MOVIES_START });

    let response,
      url = null;

    switch (category) {
      case categories.TRENDING:
        url = `${TMDB_API_URL}discover/movie`;
        response = await axios(url, {
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
        break;
      case categories.UPCOMING:
        url = `${TMDB_API_URL}movie/upcoming`;
        response = await axios(url, {
          method: 'GET',
          params: {
            api_key: TMDB_API_KEY,
            language: 'en-US',
            page: pageNum,
          },
        });
        break;
      case categories.SEARCH:
        // TODO validate query string here?
        url = `${TMDB_API_URL}search/movie`;
        response = await axios(url, {
          method: 'GET',
          params: {
            query: query,
            api_key: TMDB_API_KEY,
            language: 'en-US',
          },
        });
        break;
    }

    dispatch({
      type: moviesTypes.FETCH_MOVIES_SUCCESS,
      payload: response.data.results,
    });
  } catch (err) {
    dispatch({
      type: moviesTypes.FETCH_MOVIES_FAILURE,
    });
  }
};
