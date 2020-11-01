import axios from 'axios';
import { TMDB_API_URL, TMDB_API_KEY } from '../config';

export const retrieveTrending = async (pageNum) => {
  try {
    const url = `${TMDB_API_URL}discover/movie`;

    const response = await axios(url, {
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

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const retrieveUpcoming = async (pageNum) => {
  try {
    const url = `${TMDB_API_URL}movie/upcoming`;

    const response = await axios(url, {
      method: 'GET',
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        page: pageNum,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const retrieveSearch = async (_, query) => {
  try {
    const url = `${TMDB_API_URL}search/movie`;

    const response = await axios(url, {
      method: 'GET',
      params: {
        query: query,
        api_key: TMDB_API_KEY,
        language: 'en-US',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const retrieveGenre = async (pageNum, _, genreId) => {
  try {
    const url = `${TMDB_API_URL}discover/movie`;

    const response = await axios(url, {
      method: 'GET',
      params: {
        api_key: TMDB_API_KEY,
        with_genres: genreId,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
