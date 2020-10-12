import React, { useEffect } from 'react';
import styled from 'styled-components';
import categories from '../utils/requestCategory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movies/moviesActions';
import MovieList from '../components/MovieList/MovieList';

const PageContent = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2rem;
`;

//TODO pageNum from params

const MovieDetailPage = ({ category = categories.TRENDING }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);

  useEffect(() => {
    dispatch(fetchMovies(category, 1));
    return () => {};
  }, []);

  return (
    <PageContent>
      <h1>{category}</h1>
      <MovieList movies={movies} />
    </PageContent>
  );
};

export default MovieDetailPage;
