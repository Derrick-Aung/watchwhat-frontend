import React, { useEffect } from 'react';
import styled from 'styled-components';
import categories from '../utils/requestCategory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movies/moviesActions';
import MovieList from '../components/MovieList/MovieList';
import { Typography } from '@material-ui/core';
import constants from '../components/constants';

const PageContent = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2rem;
`;

// TODO pageNum from params

const MovieDetailPage = ({ category = categories.TRENDING }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const query = useSelector((state) => state.search.query);

  useEffect(() => {
    dispatch(fetchMovies(category, 1, query));
    return () => {};
  }, [query]);

  return (
    <PageContent>
      <Typography
        component="h1"
        variant="h4"
        color="primary"
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        {category}
      </Typography>
      <MovieList movies={movies} />
    </PageContent>
  );
};

export default MovieDetailPage;
