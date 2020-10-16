import searchTypes from './searchTypes';

export const fetchSearchQuery = (history, query) => (dispatch) => {
  dispatch({ type: searchTypes.SET_QUERY, payload: query });
  history.push(`/search?q=${encodeURIComponent(query)}`);
};
