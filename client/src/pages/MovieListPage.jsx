import React, { useEffect } from 'react';
import styled from 'styled-components';
import categories from '../utils/requestCategory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/movies/moviesActions';
import MovieList from '../components/MovieList/MovieList';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import genres from '../constants/genres';
import NotFound from '../pages/404Page';

const PageContent = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2rem;

  @media (max-width: 1000px) {
    width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
  }
`;

// TODO pageNum from params

const MovieListPage = ({ retriever, category }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const query = useSelector((state) => state.search.query);
  const { genre } = useParams();

  const genreToFetch = genres.find((i) => i.name === genre);

  useEffect(() => {
    dispatch(
      fetchMovies(retriever, 1, query, genreToFetch ? genreToFetch.id : null)
    );
    return () => {};
  }, [retriever, query, genre]);

  if (!genreToFetch && category === categories.GENRE) return <NotFound />;

  return (
    <PageContent>
      <Typography
        component="h1"
        variant="h4"
        color="primary"
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        {category} {genreToFetch && `- ${genreToFetch.name.toUpperCase()}`}
      </Typography>
      <MovieList movies={movies} />
    </PageContent>
  );
};

export default MovieListPage;
