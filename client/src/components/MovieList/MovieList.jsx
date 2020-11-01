import React from 'react';
import styled from 'styled-components';
import MovieCard from '../MovieCard/MovieCard';

const GridContainer = styled.div`
  display: 'grid';
  display: grid;
  grid-gap: 16px 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MovieList = ({ movies }) => {
  const MovieCards = movies.map((movie) => (
    <MovieCard key={movie.id} {...movie} />
  ));

  return <GridContainer>{MovieCards}</GridContainer>;
};

export default MovieList;
