export const TMDB_API_URL = 'https://api.themoviedb.org/3/';
export const TMDB_IMG_URL_OG = 'https://image.tmdb.org/t/p/original';
export const TMDB_IMG_URL_500 = 'https://image.tmdb.org/t/p/w500';
export const TMDB_IMG_URL_780 = 'https://image.tmdb.org/t/p/w780';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/';
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const TMDB_QUERY_LINK = (query) =>
  `${TMDB_API_URL}search/movie?query=${query}&api_key=${TMDB_API_KEY}`;
