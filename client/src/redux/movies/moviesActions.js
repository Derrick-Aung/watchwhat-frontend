import axios from 'axios';
import moviesTypes from './moviesTypes';
import categories from '../../utils/requestCategory';
import { TMDB_API_URL, TMDB_API_KEY } from '../../config';
import { retrieveTrending } from '../../services/movieServices';

export const fetchMovies = (retriever, pageNum = 1, query, genreId) => async (
  dispatch
) => {
  try {
    dispatch({ type: moviesTypes.FETCH_MOVIES_START });

    const data = await retriever(pageNum, query, genreId);

    dispatch({
      type: moviesTypes.FETCH_MOVIES_SUCCESS,
      payload: data.results,
    });
  } catch (err) {
    dispatch({
      type: moviesTypes.FETCH_MOVIES_FAILURE,
      payload: err,
    });
  }
};
